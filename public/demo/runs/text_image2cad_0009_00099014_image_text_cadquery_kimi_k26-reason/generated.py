import cadquery as cq

# Main slab parameters
slab_length = 100.0
slab_width = 80.0
slab_thickness = 15.0

# Shallow pad parameters (tier 1)
pad_length = 20.0
pad_width = 16.0
pad_thickness = 5.0

# Deep continuation parameters (tier 2)
deep_length = 12.0
deep_width = 16.0  # same as pad width, sharing front/back edges
deep_thickness = 8.0

# Positioning: pads near corners, inset from edges
pad_inset_x = 8.0
pad_inset_y = 8.0

# Build the main slab
result = cq.Workplane("XY").box(slab_length, slab_width, slab_thickness)

# Define the four pad positions (corners, near perimeter)
# Using centered coordinates: x from -slab_length/2 to slab_length/2, etc.
half_l = slab_length / 2.0
half_w = slab_width / 2.0

# Pad centers: near each corner
pad_positions = [
    (-half_l + pad_inset_x + pad_length/2, -half_w + pad_inset_y + pad_width/2),   # front-left
    (-half_l + pad_inset_x + pad_length/2,  half_w - pad_inset_y - pad_width/2),   # back-left
    ( half_l - pad_inset_x - pad_length/2, -half_w + pad_inset_y + pad_width/2),   # front-right
    ( half_l - pad_inset_x - pad_length/2,  half_w - pad_inset_y - pad_width/2),   # back-right
]

# Determine which side the deep continuation aligns to (left or right edge of pad)
# From image: front-left and back-left have deep on left (negative x side of pad)
# front-right and back-right have deep on right (positive x side of pad)
deep_alignments = [-1, -1, 1, 1]  # -1 = left edge, +1 = right edge

for (px, py), align in zip(pad_positions, deep_alignments):
    # Add shallow pad (tier 1): centered on (px, py), extruded downward from slab bottom
    pad = (
        cq.Workplane("XY")
        .workplane(offset=-slab_thickness/2)  # bottom face of slab
        .moveTo(px, py)
        .rect(pad_length, pad_width)
        .extrude(-pad_thickness)
    )
    result = result.union(pad)
    
    # Add deep continuation (tier 2): shares front/back edges with pad, aligns left or right
    # Deep block is narrower in length, same width, extends further down
    # Offset in x so that one vertical edge aligns with pad's left or right edge
    deep_offset_x = align * (pad_length - deep_length) / 2.0
    deep = (
        cq.Workplane("XY")
        .workplane(offset=-slab_thickness/2 - pad_thickness)  # bottom of shallow pad
        .moveTo(px + deep_offset_x, py)
        .rect(deep_length, deep_width)
        .extrude(-deep_thickness)
    )
    result = result.union(deep)