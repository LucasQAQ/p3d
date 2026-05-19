import cadquery as cq

# -----------------------------
# Parameters (estimated from image)
# -----------------------------
base_thickness = 8.0

# Central vertical hollow boss
boss_outer_diameter = 34.0
boss_inner_diameter = 20.0
boss_height = 38.0
boss_outer_radius = boss_outer_diameter / 2.0
boss_inner_radius = boss_inner_diameter / 2.0

# Left circular mounting lug
lug_center_x = -38.0
lug_center_y = -16.0
lug_outer_diameter = 36.0
lug_hole_diameter = 19.0
lug_outer_radius = lug_outer_diameter / 2.0
lug_hole_radius = lug_hole_diameter / 2.0

# Right rectangular support block
right_block_x_min = 10.0
right_block_x_max = 50.0
right_block_y_min = -18.0
right_block_y_max = 20.0
right_block_height = 28.0

# Rear-left upright web behind the cylindrical boss
rear_web_x_min = -34.0
rear_web_x_max = -18.0
rear_web_y_min = -8.0
rear_web_y_max = 26.0
rear_web_height = 42.0

# Front vertical rib below the cylindrical boss
front_rib_x_min = -8.0
front_rib_x_max = 10.0
front_rib_y_min = -31.0
front_rib_y_max = -13.0
front_rib_height = 22.0

# Low horizontal bridge/rib connecting the front rib toward the right block
bridge_x_min = 0.0
bridge_x_max = 42.0
bridge_y_min = -23.0
bridge_y_max = -11.0
bridge_z_min = base_thickness
bridge_z_max = 18.0

# Small clearance used for through-cuts
cut_clearance = 2.0


# -----------------------------
# Helper function
# -----------------------------
def box_from_bounds(x_min, x_max, y_min, y_max, z_min, z_max):
    """Create a rectangular prism from min/max bounds."""
    return (
        cq.Workplane("XY")
        .box(
            x_max - x_min,
            y_max - y_min,
            z_max - z_min,
            centered=(True, True, True),
        )
        .translate(
            (
                (x_min + x_max) / 2.0,
                (y_min + y_max) / 2.0,
                (z_min + z_max) / 2.0,
            )
        )
    )


# -----------------------------
# Base plate interpretation
# -----------------------------
# The base is modeled as a flat, irregular plate tying the lug, central boss,
# and right support together. The left side is rounded by the circular lug.
base_connector_profile = [
    (-56.0, -25.0),
    (-50.0, -5.0),
    (-24.0, 14.0),
    (34.0, 14.0),
    (34.0, -17.0),
    (5.0, -33.0),
    (-38.0, -33.0),
]

base_connector = (
    cq.Workplane("XY")
    .polyline(base_connector_profile)
    .close()
    .extrude(base_thickness)
)

# Circular lug body on the left front of the part
left_lug = (
    cq.Workplane("XY")
    .center(lug_center_x, lug_center_y)
    .circle(lug_outer_radius)
    .extrude(base_thickness)
)

# Combine the flat base regions
base = base_connector.union(left_lug)


# -----------------------------
# Upright and rib features
# -----------------------------
# Rectangular block on the right side, rising above the base
right_support_block = box_from_bounds(
    right_block_x_min,
    right_block_x_max,
    right_block_y_min,
    right_block_y_max,
    0.0,
    right_block_height,
)

# Tall rear-left upright web, partially hidden by the central cylinder
rear_left_web = box_from_bounds(
    rear_web_x_min,
    rear_web_x_max,
    rear_web_y_min,
    rear_web_y_max,
    0.0,
    rear_web_height,
)

# Front rectangular rib descending from the boss area to the base
front_vertical_rib = box_from_bounds(
    front_rib_x_min,
    front_rib_x_max,
    front_rib_y_min,
    front_rib_y_max,
    0.0,
    front_rib_height,
)

# Low bridge/rib running from the front rib toward the right support block
horizontal_bridge = box_from_bounds(
    bridge_x_min,
    bridge_x_max,
    bridge_y_min,
    bridge_y_max,
    bridge_z_min,
    bridge_z_max,
)


# -----------------------------
# Central cylindrical boss
# -----------------------------
# Modeled as a solid cylinder first; the bore is cut through after all unions.
central_boss = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)
    .circle(boss_outer_radius)
    .extrude(boss_height)
)


# -----------------------------
# Boolean assembly and holes
# -----------------------------
result = (
    base
    .union(right_support_block)
    .union(rear_left_web)
    .union(front_vertical_rib)
    .union(horizontal_bridge)
    .union(central_boss)
)

# Through-hole in the central cylindrical boss
central_bore_cut = (
    cq.Workplane("XY")
    .circle(boss_inner_radius)
    .extrude(base_thickness + boss_height + cut_clearance * 2.0)
    .translate((0.0, 0.0, -cut_clearance))
)

# Through-hole in the left mounting lug
lug_hole_cut = (
    cq.Workplane("XY")
    .center(lug_center_x, lug_center_y)
    .circle(lug_hole_radius)
    .extrude(base_thickness + cut_clearance * 2.0)
    .translate((0.0, 0.0, -cut_clearance))
)

result = result.cut(central_bore_cut).cut(lug_hole_cut)