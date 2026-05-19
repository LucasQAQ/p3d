import cadquery as cq

# Parameters - estimated based on proportions in the image
base_width = 40.0          # Width of the rectangular portion
base_length = 60.0         # Length of the rectangular portion
base_thickness = 3.0       # Thickness of the base plate
corner_radius = 20.0       # Radius of the rounded corner

# Mounting post dimensions
tall_post_height = 25.0    # Height of the three tall posts
tall_post_diameter = 6.0   # Diameter of the tall posts
tall_hole_diameter = 2.5   # Hole diameter in tall posts

short_post_height = 8.0    # Height of the two short posts
short_post_diameter = 8.0  # Diameter of the short posts
short_hole_diameter = 3.5  # Hole diameter in short posts

# Create the base plate with rounded corner
# Start with a rectangular base
base = (
    cq.Workplane("XY")
    .box(base_width, base_length, base_thickness)
)

# Add the rounded corner (fillet one edge)
# The rounded corner is on the left side in the image
base = (
    base.faces("<Z").workplane()
    .transformed(offset=(0, -base_length/2 + corner_radius, 0))
    .circle(corner_radius)
    .extrude(base_thickness, both=True)
)

# Create the large circular cutout in the rounded corner
base = (
    base.faces(">Z").workplane()
    .transformed(offset=(0, -base_length/2 + corner_radius, 0))
    .hole(corner_radius * 1.6)  # Large hole in the rounded section
)

# Add the three tall mounting posts
# Positions estimated from the image
tall_post_positions = [
    (base_width/2 - 10, base_length/2 - 10),      # Top right
    (-base_width/2 + 10, base_length/2 - 10),     # Top left
    (-base_width/2 + 10, -base_length/2 + 10),    # Bottom left
]

for x, y in tall_post_positions:
    base = (
        base.faces(">Z").workplane()
        .pushPoints([(x, y)])
        .circle(tall_post_diameter/2)
        .extrude(tall_post_height)
        .faces(">Z").workplane()
        .hole(tall_hole_diameter)
    )

# Add the two short mounting posts
# Positions estimated from the image
short_post_positions = [
    (0, -5),      # Center front
    (10, 5),      # Center right
]

for x, y in short_post_positions:
    base = (
        base.faces(">Z").workplane()
        .pushPoints([(x, y)])
        .circle(short_post_diameter/2)
        .extrude(short_post_height)
        .faces(">Z").workplane()
        .hole(short_hole_diameter)
    )

# Final result
result = base