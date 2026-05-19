import cadquery as cq

# Parameters - estimated based on proportions in the image
# Base plate dimensions
base_length = 80.0
base_width = 20.0
base_thickness = 5.0

# Vertical post dimensions
post_width = 20.0
post_height = 25.0
post_thickness = 5.0

# Top flange dimensions
flange_length = 30.0
flange_width = 20.0
flange_thickness = 5.0

# Hole parameters
hole_diameter = 4.0
hole_offset_from_end = 10.0  # Distance from ends of base plate

# Create the base plate with two holes
base = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
    # Add holes to base plate
    .faces(">Z")
    .workplane()
    .pushPoints([
        (base_length/2 - hole_offset_from_end, 0),
        (-base_length/2 + hole_offset_from_end, 0)
    ])
    .hole(hole_diameter)
)

# Create the vertical post attached to the base
post = (
    cq.Workplane("XY")
    .transformed(offset=(0, 0, base_thickness))
    .box(post_width, post_thickness, post_height)
)

# Create the top flange attached to the post
flange = (
    cq.Workplane("XY")
    .transformed(offset=(0, 0, base_thickness + post_height))
    .box(flange_length, flange_width, flange_thickness)
)

# Combine all parts into a single solid
result = base.union(post).union(flange)