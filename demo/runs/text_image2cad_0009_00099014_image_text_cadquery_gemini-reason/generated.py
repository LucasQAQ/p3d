import cadquery as cq

# Parameters for the main rectangular slab
slab_length = 100.0  # X dimension
slab_width = 80.0    # Y dimension
slab_thickness = 15.0 # Z dimension

# Parameters for the shallow underside pads
pad_length = 20.0
pad_width = 15.0
pad_thickness = 5.0

# Parameters for the deeper continuations
cont_length = 10.0
cont_width = 15.0
cont_thickness = 10.0

# Calculate positions to make pads flush with the left/right edges
# and slightly inset from the front/back edges.
x_offset = (slab_length - pad_length) / 2.0
y_offset = (slab_width - pad_width) / 2.0 - 5.0

# Create the main slab
result = cq.Workplane("XY").box(slab_length, slab_width, slab_thickness)

# Bottom face Z coordinate (assuming the slab is centered at Z=0)
bottom_z = -slab_thickness / 2.0

# Calculate X coordinates for left and right features
left_pad_x = -x_offset
left_cont_x = -slab_length / 2.0 + cont_length / 2.0

right_pad_x = x_offset
right_cont_x = slab_length / 2.0 - cont_length / 2.0

# Add the underside features
for y in [-y_offset, y_offset]:
    # Left side: pad and continuation (continuation shares the left edge)
    pad_l = (
        cq.Workplane("XY")
        .workplane(offset=bottom_z - pad_thickness / 2.0)
        .center(left_pad_x, y)
        .box(pad_length, pad_width, pad_thickness)
    )
    cont_l = (
        cq.Workplane("XY")
        .workplane(offset=bottom_z - pad_thickness - cont_thickness / 2.0)
        .center(left_cont_x, y)
        .box(cont_length, cont_width, cont_thickness)
    )
    result = result.union(pad_l).union(cont_l)
    
    # Right side: pad and continuation (continuation shares the right edge)
    pad_r = (
        cq.Workplane("XY")
        .workplane(offset=bottom_z - pad_thickness / 2.0)
        .center(right_pad_x, y)
        .box(pad_length, pad_width, pad_thickness)
    )
    cont_r = (
        cq.Workplane("XY")
        .workplane(offset=bottom_z - pad_thickness - cont_thickness / 2.0)
        .center(right_cont_x, y)
        .box(cont_length, cont_width, cont_thickness)
    )
    result = result.union(pad_r).union(cont_r)