import cadquery as cq

# --- Parameters ---
# Overall dimensions of the enclosure
length = 120.0
width = 60.0
height = 35.0
wall_thickness = 2.0

# Corner mounting posts
corner_post_radius = 4.0
corner_hole_radius = 1.5

# Central standoff post
center_post_radius = 3.0
center_hole_radius = 1.2
center_post_height = 8.0

# --- Modeling ---

# 1. Base Enclosure Shell
# Create a solid box sitting on the XY plane (bottom at Z=0)
base_box = cq.Workplane("XY").box(length, width, height, centered=(True, True, False))

# Hollow out the box by selecting the top face and shelling inward
enclosure = base_box.faces(">Z").shell(-wall_thickness)

# 2. Corner Posts
# Calculate the center distance for the corner posts so their outer edges 
# are perfectly flush with the outer walls of the box.
post_center_x = length - 2 * corner_post_radius
post_center_y = width - 2 * corner_post_radius

# Extrude the solid corner posts from the inner floor to the top of the box
enclosure = (
    enclosure.workplane(offset=wall_thickness)
    .rect(post_center_x, post_center_y, forConstruction=True)
    .vertices()
    .circle(corner_post_radius)
    .extrude(height - wall_thickness)
)

# 3. Corner Post Holes
# Cut blind holes into the corner posts from the top face down to the inner floor
enclosure = (
    enclosure.faces(">Z").workplane()
    .rect(post_center_x, post_center_y, forConstruction=True)
    .vertices()
    .circle(corner_hole_radius)
    .cutBlind(-(height - wall_thickness))
)

# 4. Central Standoff
# Extrude the solid central post from the inner floor
enclosure = (
    enclosure.workplane(offset=wall_thickness)
    .center(0, 0)
    .circle(center_post_radius)
    .extrude(center_post_height)
)

# Cut the hole in the central standoff
enclosure = (
    enclosure.workplane(offset=wall_thickness + center_post_height)
    .center(0, 0)
    .circle(center_hole_radius)
    .cutBlind(-center_post_height)
)

# Export final result
result = enclosure