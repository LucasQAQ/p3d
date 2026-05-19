import cadquery as cq

# -----------------------------------------------------------------------------
# Parameters (estimated from the reference image)
# -----------------------------------------------------------------------------

# Base plate
base_length = 120.0
base_width = 85.0
base_thickness = 5.0
base_corner_hole_diameter = 8.0
base_hole_x_offset = 14.0
base_hole_y_offset = 14.0

# Raised rectangular pedestal
pedestal_length = 58.0
pedestal_width = 50.0
pedestal_height = 16.0
pedestal_center_x = -10.0
pedestal_center_y = 2.0

# Central cylindrical socket / collar
collar_outer_diameter = 46.0
collar_inner_diameter = 34.0
collar_height = 30.0
collar_center_x = pedestal_center_x
collar_center_y = pedestal_center_y

# Subtle top rim on the collar
rim_outer_diameter = 48.0
rim_inner_diameter = 33.0
rim_height = 2.0

# Side rounded support lugs, interpreted as rounded-ended bosses attached to pedestal
front_lug_length = 34.0
front_lug_width = 16.0
front_lug_height = pedestal_height
front_lug_overlap = 7.0

rear_lug_length = 28.0
rear_lug_width = 16.0
rear_lug_height = pedestal_height + 18.0
rear_lug_overlap = 7.0

# Small edge treatment
small_fillet = 0.8

# -----------------------------------------------------------------------------
# Base plate with four counter-style through mounting holes
# -----------------------------------------------------------------------------

base_hole_points = [
    (-base_length / 2 + base_hole_x_offset, -base_width / 2 + base_hole_y_offset),
    ( base_length / 2 - base_hole_x_offset, -base_width / 2 + base_hole_y_offset),
    (-base_length / 2 + base_hole_x_offset,  base_width / 2 - base_hole_y_offset),
    ( base_length / 2 - base_hole_x_offset,  base_width / 2 - base_hole_y_offset),
]

base_plate = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
    .translate((0, 0, base_thickness / 2))
    .faces(">Z")
    .workplane()
    .pushPoints(base_hole_points)
    .hole(base_corner_hole_diameter)
)

# -----------------------------------------------------------------------------
# Raised rectangular pedestal centered below the cylindrical collar
# -----------------------------------------------------------------------------

pedestal = (
    cq.Workplane("XY")
    .box(pedestal_length, pedestal_width, pedestal_height)
    .translate(
        (
            pedestal_center_x,
            pedestal_center_y,
            base_thickness + pedestal_height / 2,
        )
    )
)

# -----------------------------------------------------------------------------
# Front rounded lug: a low rounded-ended boss projecting from the pedestal side
# -----------------------------------------------------------------------------

front_lug_center_x = (
    pedestal_center_x
    - pedestal_length / 2
    - front_lug_length / 2
    + front_lug_overlap
)
front_lug_center_y = pedestal_center_y - pedestal_width * 0.25

front_lug = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)
    .center(front_lug_center_x, front_lug_center_y)
    .slot2D(front_lug_length, front_lug_width, angle=0)
    .extrude(front_lug_height)
)

# -----------------------------------------------------------------------------
# Rear rounded lug: a taller rounded-ended boss visible behind the collar
# -----------------------------------------------------------------------------

rear_lug_center_x = (
    pedestal_center_x
    + pedestal_length / 2
    + rear_lug_length / 2
    - rear_lug_overlap
)
rear_lug_center_y = pedestal_center_y + pedestal_width * 0.25

rear_lug = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)
    .center(rear_lug_center_x, rear_lug_center_y)
    .slot2D(rear_lug_length, rear_lug_width, angle=0)
    .extrude(rear_lug_height)
)

# -----------------------------------------------------------------------------
# Hollow cylindrical collar / socket sitting on top of the pedestal
# -----------------------------------------------------------------------------

collar = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness + pedestal_height)
    .center(collar_center_x, collar_center_y)
    .circle(collar_outer_diameter / 2)
    .circle(collar_inner_diameter / 2)
    .extrude(collar_height)
)

# Slightly proud top rim to emphasize the lip seen in the image
top_rim = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness + pedestal_height + collar_height - rim_height)
    .center(collar_center_x, collar_center_y)
    .circle(rim_outer_diameter / 2)
    .circle(rim_inner_diameter / 2)
    .extrude(rim_height)
)

# -----------------------------------------------------------------------------
# Combine all modeled features
# -----------------------------------------------------------------------------

result = (
    base_plate
    .union(pedestal)
    .union(front_lug)
    .union(rear_lug)
    .union(collar)
    .union(top_rim)
)

# Apply light fillets to selected exposed vertical edges for a molded/cast look
result = result.edges("|Z").fillet(small_fillet)