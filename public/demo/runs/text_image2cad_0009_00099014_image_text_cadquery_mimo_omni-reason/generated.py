import cadquery as cq

# Parameters
slab_width = 80.0
slab_length = 80.0
slab_thickness = 10.0

# Underside shallow pad dimensions (near perimeter)
pad_width = 15.0
pad_length = 15.0
pad_thickness = 5.0

# Deeper continuation dimensions (below each pad)
continuation_width = 8.0
continuation_length = 8.0
continuation_thickness = 10.0

# Offsets from slab edges for pad placement
edge_offset = 5.0

# Create the main rectangular slab
result = (
    cq.Workplane("XY")
    .box(slab_width, slab_length, slab_thickness)
)

# Define the four corner positions for underside features
# Using the bottom face of the slab as reference
bottom_face = result.faces("<Z").workplane()

# Calculate positions for the four corners (front-left, front-right, back-left, back-right)
# Offsets ensure pads are near the perimeter
positions = [
    (slab_width/2 - edge_offset - pad_width/2, slab_length/2 - edge_offset - pad_length/2),  # Front-right
    (-slab_width/2 + edge_offset + pad_width/2, slab_length/2 - edge_offset - pad_length/2),  # Front-left
    (slab_width/2 - edge_offset - pad_width/2, -slab_length/2 + edge_offset + pad_length/2),  # Back-right
    (-slab_width/2 + edge_offset + pad_width/2, -slab_length/2 + edge_offset + pad_length/2), # Back-left
]

# Add shallow pads and deeper continuations for each corner
for i, (x_pos, y_pos) in enumerate(positions):
    # Determine alignment for the deeper continuation
    # Continuation shares either left/right edge with pad, and front/back edges
    if x_pos > 0:  # Right side: align continuation to right edge of pad
        cont_x_offset = (pad_width - continuation_width) / 2
    else:  # Left side: align continuation to left edge of pad
        cont_x_offset = -(pad_width - continuation_width) / 2
    
    if y_pos > 0:  # Front side: align continuation to front edge of pad
        cont_y_offset = (pad_length - continuation_length) / 2
    else:  # Back side: align continuation to back edge of pad
        cont_y_offset = -(pad_length - continuation_length) / 2
    
    # Add shallow pad (first tier)
    pad = (
        bottom_face
        .workplane(offset=-slab_thickness/2)
        .center(x_pos, y_pos)
        .box(pad_width, pad_length, pad_thickness, combine="a")
    )
    
    # Add deeper continuation (second tier) below the pad
    # Position relative to the pad's center, with alignment offset
    cont_x = x_pos + cont_x_offset
    cont_y = y_pos + cont_y_offset
    
    continuation = (
        bottom_face
        .workplane(offset=-slab_thickness/2 - pad_thickness)
        .center(cont_x, cont_y)
        .box(continuation_width, continuation_length, continuation_thickness, combine="a")
    )
    
    # Update result with combined geometry
    result = pad.union(continuation)

# Final result is the unified model