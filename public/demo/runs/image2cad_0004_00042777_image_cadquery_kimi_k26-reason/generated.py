import cadquery as cq

# Main base plate parameters
base_length = 80.0
base_width = 20.0
base_height = 10.0

# Vertical post parameters
post_width = 20.0
post_depth = 20.0
post_height = 30.0

# Top arm parameters (extends from top of post, same width as post)
arm_length = 30.0
arm_width = 20.0
arm_height = 10.0

# Hole parameters
hole_diameter = 4.0
hole_offset_from_end = 10.0  # Distance from each end of base plate

# Build the model starting from the base plate
result = (
    cq.Workplane("XY")
    # Create the main base plate
    .box(base_length, base_width, base_height, centered=False)
    # Move to the center-top of the base plate for the vertical post
    .faces(">Z")
    .workplane()
    .moveTo(base_length / 2, base_width / 2)
    # Create the vertical post centered on the base plate
    .rect(post_width, post_depth)
    .extrude(post_height)
    # Move to the top of the post for the upper arm
    .faces(">Z")
    .workplane()
    # The arm extends backward (negative Y direction) from the post
    .moveTo(0, -arm_length / 2 + post_depth / 2)
    .rect(post_width, arm_length)
    .extrude(arm_height)
    # Move back to the base plate top face to cut holes
    .faces("<Z")
    .workplane()
    # First hole near one end of base plate
    .moveTo(hole_offset_from_end, base_width / 2)
    .hole(hole_diameter)
    # Second hole near the other end of base plate
    .moveTo(base_length - hole_offset_from_end, base_width / 2)
    .hole(hole_diameter)
)