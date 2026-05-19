import cadquery as cq

# --------------------------
# Parameters
# --------------------------
base_width = 100.0       # Outer width of the main enclosure
base_length = 120.0      # Outer length of the main enclosure
base_height = 25.0       # Total height of the main enclosure
wall_thickness = 5.0     # Thickness of the side walls
base_floor_thickness = 3.0  # Thickness of the bottom floor of the enclosure
flange_height = 2.0      # Height of the bottom flange lip
flange_overhang = 3.0    # How far the flange extends outward from the enclosure walls

post_diameter = 6.0      # Diameter of the vertical mounting posts
post_height = 20.0       # Height of the posts above the ledge
post_offset = 8.0        # Distance from inner wall edge to post center

# --------------------------
# Calculated dimensions
# --------------------------
inner_width = base_width - 2 * wall_thickness
inner_length = base_length - 2 * wall_thickness
ledge_height = base_height - base_floor_thickness

# --------------------------
# Model creation
# --------------------------
result = (
    cq.Workplane("XY")
    # Create the main outer box of the enclosure
    .box(base_length, base_width, base_height)
    
    # Cut out the hollow inner cavity, leaving the bottom floor
    .faces(">Z").workplane()
    .rect(inner_length, inner_width)
    .cutBlind(-(base_height - base_floor_thickness))
    
    # Add the bottom flange lip extending outward from the base
    .faces("<Z").workplane()
    .rect(base_length + 2 * flange_overhang, base_width + 2 * flange_overhang)
    .extrude(flange_height)
)

# --------------------------
# Add mounting posts to the inner ledge
# --------------------------
post_locations = [
    # Front-left ledge, back-left ledge, back-right ledge, front-right ledge
    ( inner_length/2 - post_offset, -inner_width/2 + post_offset),
    (-inner_length/2 + post_offset, -inner_width/2 + post_offset),
    (-inner_length/2 + post_offset,  inner_width/2 - post_offset),
    ( inner_length/2 - post_offset,  inner_width/2 - post_offset)
]

result = (
    result
    # Workplane on the top of the inner ledge surface
    .faces(">Z").workplane(offset=-ledge_height)
    .pushPoints(post_locations)
    .circle(post_diameter / 2)
    .extrude(post_height)
)