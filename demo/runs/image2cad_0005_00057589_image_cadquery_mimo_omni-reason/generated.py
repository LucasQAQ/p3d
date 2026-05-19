import cadquery as cq

# Parameters - estimated from image proportions
box_length = 80.0
box_width = 40.0
box_height = 20.0
wall_thickness = 2.0
floor_thickness = 2.0

# Corner post parameters
corner_post_diameter = 6.0
corner_post_height = box_height - floor_thickness
corner_hole_diameter = 3.0

# Center support parameters
center_support_diameter = 4.0
center_support_height = 10.0
center_hole_diameter = 2.0

# Create the main box with hollow interior
result = (
    cq.Workplane("XY")
    .box(box_length, box_width, box_height)  # Create solid box
    .faces(">Z").workplane()  # Select top face
    .rect(
        box_length - 2 * wall_thickness,
        box_width - 2 * wall_thickness
    )  # Create inner rectangle
    .cutBlind(-box_height + floor_thickness)  # Cut out interior
)

# Add corner posts (cylinders in each corner)
# First, create a workplane for the corner posts
corner_post_wp = (
    result.faces(">Z").workplane()
    .pushPoints([
        (box_length/2 - wall_thickness - corner_post_diameter/2, 
         box_width/2 - wall_thickness - corner_post_diameter/2),
        (-box_length/2 + wall_thickness + corner_post_diameter/2, 
         box_width/2 - wall_thickness - corner_post_diameter/2),
        (box_length/2 - wall_thickness - corner_post_diameter/2, 
         -box_width/2 + wall_thickness + corner_post_diameter/2),
        (-box_length/2 + wall_thickness + corner_post_diameter/2, 
         -box_width/2 + wall_thickness + corner_post_diameter/2),
    ])
)

# Add cylindrical posts
result = corner_post_wp.circle(corner_post_diameter/2).extrude(-corner_post_height)

# Add holes in corner posts
corner_hole_wp = (
    result.faces(">Z").workplane()
    .pushPoints([
        (box_length/2 - wall_thickness - corner_post_diameter/2, 
         box_width/2 - wall_thickness - corner_post_diameter/2),
        (-box_length/2 + wall_thickness + corner_post_diameter/2, 
         box_width/2 - wall_thickness - corner_post_diameter/2),
        (box_length/2 - wall_thickness - corner_post_diameter/2, 
         -box_width/2 + wall_thickness + corner_post_diameter/2),
        (-box_length/2 + wall_thickness + corner_post_diameter/2, 
         -box_width/2 + wall_thickness + corner_post_diameter/2),
    ])
)

result = corner_hole_wp.circle(corner_hole_diameter/2).cutBlind(-corner_post_height)

# Add center support with hole
center_support_wp = (
    result.faces(">Z").workplane()
    .center(0, 0)  # Center of the box
)

# Add center support cylinder
result = center_support_wp.circle(center_support_diameter/2).extrude(-center_support_height)

# Add hole in center support
center_hole_wp = (
    result.faces(">Z").workplane()
    .center(0, 0)
)

result = center_hole_wp.circle(center_hole_diameter/2).cutBlind(-center_support_height)