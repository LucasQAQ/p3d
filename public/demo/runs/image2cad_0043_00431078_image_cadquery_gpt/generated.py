import cadquery as cq
import math

# ============================================================
# Parameters (estimated from the reference image)
# ============================================================

# Ring / collar
ring_outer_diameter = 42.0
ring_inner_diameter = 26.0
ring_height = 20.0

# Rear vertical plate
plate_length = 72.0          # along X
plate_thickness = 8.0        # along Y
plate_height = 30.0          # along Z

# Small top tabs on the rear plate
tab_width = 10.0             # along X
tab_depth = 4.0              # additional Y thickness
tab_height = 3.0             # along Z
left_tab_offset = 6.0
right_tab_offset = 12.0

# Central support block between ring and plate
support_block_length = 16.0  # along X
support_block_thickness = 10.0
support_block_height = 12.0

# Lower rib / brace
rib_length = 36.0
rib_thickness = 5.0
rib_height_at_plate = 14.0

# Small lower notch in rear plate
notch_width = 5.0
notch_height = 8.0
notch_depth = 3.0

# Relative placement
ring_center_x = -18.0
ring_center_y = 0.0

plate_center_x = 22.0
plate_center_y = 18.0
plate_bottom_z = 0.0

support_top_z = 12.0

# ============================================================
# Derived values
# ============================================================

ring_outer_radius = ring_outer_diameter / 2.0
ring_inner_radius = ring_inner_diameter / 2.0

plate_left_x = plate_center_x - plate_length / 2.0
plate_right_x = plate_center_x + plate_length / 2.0
plate_front_y = plate_center_y - plate_thickness / 2.0
plate_back_y = plate_center_y + plate_thickness / 2.0

# Support block runs from the ring toward the plate
support_block_x_min = ring_center_x + ring_outer_radius - 2.0
support_block_y_min = -support_block_thickness / 2.0
support_block_z_min = 0.0

# Rib starts near the support block and reaches the rear plate
rib_x_start = support_block_x_min + 2.0
rib_x_end = plate_left_x + 2.0
rib_y_center = 4.0

# ============================================================
# Base ring
# ============================================================
# A hollow cylindrical collar is the dominant front feature.
ring = (
    cq.Workplane("XY")
    .center(ring_center_x, ring_center_y)
    .circle(ring_outer_radius)
    .circle(ring_inner_radius)
    .extrude(ring_height)
)

# ============================================================
# Rear vertical plate
# ============================================================
# The image shows a long rectangular plate standing vertically
# behind the ring. We model it as an XZ rectangle extruded in Y.
rear_plate = (
    cq.Workplane("XZ")
    .center(plate_center_x, plate_bottom_z + plate_height / 2.0)
    .rect(plate_length, plate_height)
    .extrude(plate_thickness, both=True)
    .translate((0, plate_center_y, 0))
)

# ============================================================
# Top tabs on rear plate
# ============================================================
# Two small raised tabs are visible along the top edge of the plate.
left_tab = (
    cq.Workplane("XY")
    .box(tab_width, tab_depth, tab_height, centered=(False, False, False))
    .translate((
        plate_left_x + left_tab_offset,
        plate_back_y - tab_depth,
        plate_height
    ))
)

right_tab = (
    cq.Workplane("XY")
    .box(tab_width, tab_depth, tab_height, centered=(False, False, False))
    .translate((
        plate_right_x - right_tab_offset - tab_width,
        plate_back_y - tab_depth,
        plate_height
    ))
)

# ============================================================
# Central support block
# ============================================================
# A rectangular block links the rear side of the ring to the plate.
support_block = (
    cq.Workplane("XY")
    .box(
        support_block_length,
        support_block_thickness,
        support_block_height,
        centered=(False, False, False)
    )
    .translate((
        support_block_x_min,
        support_block_y_min,
        support_block_z_min
    ))
)

# ============================================================
# Lower triangular rib / brace
# ============================================================
# The lower member appears as a tapered brace from the support
# region up to the rear plate. We create it on the XZ plane and
# extrude it in Y.
rib_profile = [
    (rib_x_start, 0.0),
    (rib_x_end, 0.0),
    (rib_x_end, rib_height_at_plate),
]

rib = (
    cq.Workplane("XZ")
    .polyline(rib_profile)
    .close()
    .extrude(rib_thickness)
    .translate((0, rib_y_center - rib_thickness / 2.0, 0))
)

# ============================================================
# Lower notch in rear plate
# ============================================================
# A small rectangular cut near the lower portion of the plate is visible.
rear_plate_with_notch = (
    rear_plate.faces("<Y")
    .workplane()
    .center(plate_length / 2.0 - right_tab_offset - 2.0, notch_height / 2.0 + 1.0)
    .rect(notch_width, notch_height)
    .cutBlind(notch_depth)
)

# ============================================================
# Combine all solids
# ============================================================
result = (
    ring
    .union(rear_plate_with_notch)
    .union(left_tab)
    .union(right_tab)
    .union(support_block)
    .union(rib)
)