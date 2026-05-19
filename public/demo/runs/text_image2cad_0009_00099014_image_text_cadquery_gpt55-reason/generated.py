import cadquery as cq

# Parameters
slab_length = 100.0
slab_width = 70.0
slab_thickness = 12.0

pad_length = 24.0
pad_width = 16.0
pad_thickness = 7.0

leg_length = 12.0
leg_width = 16.0
leg_depth = 16.0

pad_offset_x = 32.0
pad_offset_y = 22.0

# Z positions
slab_center_z = slab_thickness / 2.0
pad_center_z = -pad_thickness / 2.0
leg_center_z = -pad_thickness - leg_depth / 2.0

# Create the main thick rectangular slab
result = cq.Workplane("XY").box(
    slab_length,
    slab_width,
    slab_thickness,
    centered=(True, True, False)
)

# Underside protrusion layout:
# Each shallow pad is attached to the slab underside.
# Each deeper continuation is narrower in X, shares the pad's front/back edges,
# and aligns with either the left or right vertical edge of the pad footprint.
corner_features = [
    # x position, y position, leg side within pad (-1 = left edge, +1 = right edge)
    (-pad_offset_x, -pad_offset_y, -1),
    ( pad_offset_x, -pad_offset_y,  1),
    (-pad_offset_x,  pad_offset_y, -1),
    ( pad_offset_x,  pad_offset_y,  1),
]

for pad_x, pad_y, leg_side in corner_features:
    # Shallow rectangular underside pad
    pad = (
        cq.Workplane("XY")
        .center(pad_x, pad_y)
        .box(
            pad_length,
            pad_width,
            pad_thickness,
            centered=(True, True, False)
        )
        .translate((0, 0, -pad_thickness))
    )

    # Deeper rectangular continuation, contained within the pad footprint
    leg_x = pad_x + leg_side * (pad_length - leg_length) / 2.0

    leg = (
        cq.Workplane("XY")
        .center(leg_x, pad_y)
        .box(
            leg_length,
            leg_width,
            leg_depth,
            centered=(True, True, False)
        )
        .translate((0, 0, -pad_thickness - leg_depth))
    )

    result = result.union(pad).union(leg)

# Return one unified model
result = result.combine()