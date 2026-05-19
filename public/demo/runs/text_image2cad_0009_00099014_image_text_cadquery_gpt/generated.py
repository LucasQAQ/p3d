import cadquery as cq

# Parameters
slab_length = 100.0
slab_width = 70.0
slab_thickness = 16.0

# First-tier underside pads
pad_size = 14.0
pad_depth = 8.0
pad_inset_x = 12.0
pad_inset_y = 10.0

# Second-tier deeper continuations, narrower and aligned to one side of each pad
leg_width = 8.0
leg_depth = 12.0

# Corner positions for the four underside protrusion groups
corner_positions = [
    (-slab_length / 2 + pad_inset_x + pad_size / 2, -slab_width / 2 + pad_inset_y + pad_size / 2),  # back-left
    ( slab_length / 2 - pad_inset_x - pad_size / 2, -slab_width / 2 + pad_inset_y + pad_size / 2),  # back-right
    (-slab_length / 2 + pad_inset_x + pad_size / 2,  slab_width / 2 - pad_inset_y - pad_size / 2),  # front-left
    ( slab_length / 2 - pad_inset_x - pad_size / 2,  slab_width / 2 - pad_inset_y - pad_size / 2),  # front-right
]

# Build the main slab
result = cq.Workplane("XY").box(slab_length, slab_width, slab_thickness)

# Add the shallow underside pads
result = (
    result.faces("<Z")
    .workplane()
    .pushPoints(corner_positions)
    .box(pad_size, pad_size, pad_depth, centered=(True, True, False), combine=True)
)

# Deeper continuations under each pad:
# left-side pads have the deeper leg sharing the left edge of the pad,
# right-side pads have the deeper leg sharing the right edge of the pad.
left_leg_center_offset_x = -(pad_size - leg_width) / 2
right_leg_center_offset_x = (pad_size - leg_width) / 2

deep_leg_positions = [
    (corner_positions[0][0] + left_leg_center_offset_x,  corner_positions[0][1]),   # back-left
    (corner_positions[1][0] + right_leg_center_offset_x, corner_positions[1][1]),   # back-right
    (corner_positions[2][0] + left_leg_center_offset_x,  corner_positions[2][1]),   # front-left
    (corner_positions[3][0] + right_leg_center_offset_x, corner_positions[3][1]),   # front-right
]

# Add the deeper second-tier legs from the bottom faces of the shallow pads
result = (
    result.faces("<Z")
    .workplane()
    .pushPoints(deep_leg_positions)
    .box(leg_width, pad_size, leg_depth, centered=(True, True, False), combine=True)
)