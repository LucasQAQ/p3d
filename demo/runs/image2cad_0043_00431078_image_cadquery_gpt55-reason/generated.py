import cadquery as cq

# Parameters (estimated from the reference image)
# Ring / cylindrical collar
ring_outer_diameter = 48.0
ring_inner_diameter = 30.0
ring_height = 20.0
ring_center_x = -45.0
ring_center_y = 0.0

# Rear vertical plate
wall_front_y = 34.0
wall_thickness = 8.0
wall_bottom_z = 0.0
wall_main_height = 36.0
wall_tab_height = 42.0
wall_left_x = -34.0
wall_right_x = 78.0

# Stepped top profile locations
left_high_section_end_x = -8.0
right_tab_start_x = 50.0
right_tab_end_x = 62.0

# Small rectangular slot in rear plate
slot_width = 8.0
slot_height = 16.0
slot_center_x = 58.0
slot_bottom_z = 0.0

# Angled vertical connector web between ring and rear wall
web_height = 24.0
web_points_xy = [
    (-25.0, -7.0),
    (-16.0, 4.0),
    (8.0, wall_front_y),
    (-8.0, wall_front_y),
]

# Lower triangular gusset / support plate
gusset_thickness = 4.0
gusset_bottom_z = 3.0
gusset_points_xy = [
    (-26.0, -10.0),
    (-12.0, 6.0),
    (56.0, wall_front_y),
    (2.0, wall_front_y),
]

# ---------------------------------------------------------------------------
# Create the hollow cylindrical collar at the front of the part
# ---------------------------------------------------------------------------
outer_radius = ring_outer_diameter / 2.0
inner_radius = ring_inner_diameter / 2.0

ring = (
    cq.Workplane("XY")
    .center(ring_center_x, ring_center_y)
    .circle(outer_radius)
    .circle(inner_radius)
    .extrude(ring_height)
)

# ---------------------------------------------------------------------------
# Create the rear vertical plate as an extruded stepped profile.
# The profile is drawn in the XZ plane and extruded in the Y direction.
# ---------------------------------------------------------------------------
wall_profile_xz = [
    (wall_left_x, wall_bottom_z),
    (wall_right_x, wall_bottom_z),
    (wall_right_x, wall_main_height),
    (right_tab_end_x, wall_main_height),
    (right_tab_end_x, wall_tab_height - 4.0),
    (right_tab_start_x, wall_tab_height - 4.0),
    (right_tab_start_x, wall_main_height),
    (left_high_section_end_x, wall_main_height),
    (left_high_section_end_x, wall_tab_height),
    (wall_left_x, wall_tab_height),
]

rear_wall = (
    cq.Workplane("XZ")
    .workplane(offset=wall_front_y)
    .polyline(wall_profile_xz)
    .close()
    .extrude(wall_thickness)
)

# Cut the small rectangular slot/notch visible near the lower right of the wall
slot_cut = (
    cq.Workplane("XY")
    .box(
        slot_width,
        wall_thickness + 2.0,
        slot_height,
        centered=(True, True, True),
    )
    .translate(
        (
            slot_center_x,
            wall_front_y + wall_thickness / 2.0,
            slot_bottom_z + slot_height / 2.0,
        )
    )
)

rear_wall = rear_wall.cut(slot_cut)

# ---------------------------------------------------------------------------
# Create the angled vertical web connecting the ring to the rear wall.
# This is modeled as a vertical extrusion of a quadrilateral footprint.
# ---------------------------------------------------------------------------
connector_web = (
    cq.Workplane("XY")
    .polyline(web_points_xy)
    .close()
    .extrude(web_height)
)

# ---------------------------------------------------------------------------
# Create the lower triangular gusset/support plate.
# It sits slightly above the bottom and runs from the ring toward the rear wall.
# ---------------------------------------------------------------------------
lower_gusset = (
    cq.Workplane("XY")
    .polyline(gusset_points_xy)
    .close()
    .extrude(gusset_thickness)
    .translate((0.0, 0.0, gusset_bottom_z))
)

# ---------------------------------------------------------------------------
# Combine all modeled features into the final part
# ---------------------------------------------------------------------------
result = (
    ring
    .union(rear_wall)
    .union(connector_web)
    .union(lower_gusset)
)