import cadquery as cq

# --------------------------
# Base Plate Parameters
# --------------------------
base_thickness = 3.0          # Thickness of the main flat plate
base_side_length = 80.0       # Length of the two straight sides of the right-angle triangle base
corner_radius = 4.0           # Rounded outer corners of the base plate
cutout_radius = 20.0          # Radius of the large cutout on the left side of the base
cutout_offset = 25.0          # Distance from the left corner to the cutout center

# --------------------------
# Stand-Off Post Parameters
# --------------------------
# Tall posts (3 total, around edge of base)
tall_post_dia = 8.0
tall_post_height = 30.0
tall_post_hole_dia = 2.0

# Short posts (2 total, near center of base)
short_post_dia = 10.0
short_post_height = 8.0
short_post_hole_dia = 3.0

# --------------------------
# Create Base Plate Geometry
# --------------------------
# Start with right triangle base with rounded corners
result = (
    cq.Workplane("XY")
    # Draw triangular profile: right angle at origin, sides along +X and +Y axes
    .lineTo(base_side_length, 0)
    .lineTo(0, base_side_length)
    .close()
    .extrude(base_thickness)
    # Round the two non-right corners
    .edges("|Z").fillet(corner_radius)
    # Create large cutout on the left side of the plate
    .faces(">Z").workplane()
    .center(cutout_offset, cutout_offset)
    .circle(cutout_radius)
    .cutThruAll()
)

# --------------------------
# Add Tall Posts
# --------------------------
result = (
    result
    # Top right corner post
    .faces(">Z").workplane()
    .pushPoints([(base_side_length - 10, 10)])
    .circle(tall_post_dia / 2)
    .extrude(tall_post_height)
    # Right bottom corner post
    .faces(">Z").workplane()
    .pushPoints([(10, base_side_length - 10)])
    .circle(tall_post_dia / 2)
    .extrude(tall_post_height)
    # Left cutout side post
    .faces(">Z").workplane()
    .pushPoints([(cutout_offset + 10, cutout_offset + 10)])
    .circle(tall_post_dia / 2)
    .extrude(tall_post_height)
    # Add mounting holes to all tall posts
    .faces(">Z").workplane()
    .pushPoints([
        (base_side_length - 10, 10),
        (10, base_side_length - 10),
        (cutout_offset + 10, cutout_offset + 10)
    ])
    .circle(tall_post_hole_dia / 2)
    .cutBlind(-tall_post_height)
)

# --------------------------
# Add Short Center Posts
# --------------------------
result = (
    result
    # First short post
    .faces(">Z").workplane()
    .pushPoints([(cutout_offset + 20, cutout_offset)])
    .circle(short_post_dia / 2)
    .extrude(short_post_height)
    # Second short post
    .faces(">Z").workplane()
    .pushPoints([(cutout_offset, cutout_offset + 20)])
    .circle(short_post_dia / 2)
    .extrude(short_post_height)
    # Add holes to short posts
    .faces(">Z").workplane()
    .pushPoints([
        (cutout_offset + 20, cutout_offset),
        (cutout_offset, cutout_offset + 20)
    ])
    .circle(short_post_hole_dia / 2)
    .cutBlind(-short_post_height)
)