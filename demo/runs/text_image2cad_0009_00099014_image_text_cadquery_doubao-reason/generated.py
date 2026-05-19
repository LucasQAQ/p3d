import cadquery as cq

# ================== PARAMETERS ==================
# Main slab dimensions
slab_length = 100.0    # X-axis length of main slab
slab_width = 80.0      # Y-axis width of main slab
slab_thickness = 10.0  # Z-axis thickness of main slab

# First tier (shallow pad) parameters
pad_length = 20.0      # X length of each shallow pad
pad_width = 15.0       # Y width of each shallow pad
pad_height = 5.0       # Z height of each shallow pad

# Second tier (deep continuation) parameters
leg_length = 15.0      # X length of each lower leg
leg_width = 15.0       # Y width of each lower leg (matches pad width)
leg_height = 15.0      # Z height of each lower leg

# Offset from slab edge for pad placement
edge_offset = 5.0      # Distance from slab edge to nearest pad edge
# ================================================

# Create main rectangular slab
result = cq.Workplane("XY").box(slab_length, slab_width, slab_thickness)

# ------------------ Underside pads + legs ------------------
# Work on the bottom face of the slab, Z offset down for adding material
bottom_workplane = result.faces("<Z").workplane(offset=-pad_height/2, invert=False)

# Create shallow pads as first tier (2 pairs, left/right aligned)
pads = (
    bottom_workplane
    # Left end pads (near X min edge)
    .pushPoints([
        (-slab_length/2 + edge_offset + pad_length/2, -slab_width/2 + edge_offset + pad_width/2),  # Front left pad
        (-slab_length/2 + edge_offset + pad_length/2, slab_width/2 - edge_offset - pad_width/2)    # Rear left pad
    ])
    .box(pad_length, pad_width, pad_height)
    # Right end pads (near X max edge)
    .pushPoints([
        (slab_length/2 - edge_offset - pad_length/2, -slab_width/2 + edge_offset + pad_width/2),   # Front right pad
        (slab_length/2 - edge_offset - pad_length/2, slab_width/2 - edge_offset - pad_width/2)     # Rear right pad
    ])
    .box(pad_length, pad_width, pad_height)
)

# Join pads to main slab
result = result.union(pads)

# Create second tier legs (attached underneath each pad, aligned to side edge of pad)
leg_workplane = result.faces("<Z").workplane(offset=-leg_height/2, invert=False)

legs = (
    leg_workplane
    # Left end legs (aligned to left edge of left pads, matching front/back edges)
    .pushPoints([
        (-slab_length/2 + edge_offset + leg_length/2, -slab_width/2 + edge_offset + leg_width/2),  # Front left leg
        (-slab_length/2 + edge_offset + leg_length/2, slab_width/2 - edge_offset - leg_width/2)    # Rear left leg
    ])
    .box(leg_length, leg_width, leg_height)
    # Right end legs (aligned to right edge of right pads, matching front/back edges)
    .pushPoints([
        (slab_length/2 - edge_offset - leg_length/2, -slab_width/2 + edge_offset + leg_width/2),   # Front right leg
        (slab_length/2 - edge_offset - leg_length/2, slab_width/2 - edge_offset - leg_width/2)     # Rear right leg
    ])
    .box(leg_length, leg_width, leg_height)
)

# Join legs to the existing model
result = result.union(legs)