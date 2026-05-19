import cadquery as cq

# Parameters
plate_thickness = 4.0
rim_depth = 4.0
large_hole_r = 18.0
rim_outer_r = 22.0

post_outer_r = 4.0
post_inner_r = 1.5
tall_post_height = 35.0
short_post_height = 12.0

# Coordinates for the posts
tall_post_centers = [(80, -35), (50, 35), (15, -25)]
short_post_centers = [(25, 10), (40, -10)]
all_centers = tall_post_centers + short_post_centers

# Create the base plate profile
# The shape is a rectangle with an extended curved section on the left
result = (
    cq.Workplane("XY")
    .moveTo(20, 45)
    .lineTo(90, 45)
    .lineTo(90, -45)
    .lineTo(20, -45)
    .lineTo(0, -25)
    .threePointArc((-25, 0), (0, 25))
    .close()
    .extrude(plate_thickness)
)

# Tag the top face to use as a reliable reference plane for adding posts
result = result.faces(">Z").tag("top_face")

# Add the rim for the large hole (extends below the main plate)
rim = (
    cq.Workplane("XY")
    .workplane(offset=-rim_depth)
    .center(0, 0)
    .circle(rim_outer_r)
    .extrude(rim_depth + plate_thickness)
)
result = result.union(rim)

# Cut the large hole through the plate and rim
result = (
    result.workplaneFromTagged("top_face")
    .center(0, 0)
    .circle(large_hole_r)
    .cutThruAll()
)

# Add tall posts
result = (
    result.workplaneFromTagged("top_face")
    .pushPoints(tall_post_centers)
    .circle(post_outer_r)
    .extrude(tall_post_height)
)

# Add short posts
result = (
    result.workplaneFromTagged("top_face")
    .pushPoints(short_post_centers)
    .circle(post_outer_r)
    .extrude(short_post_height)
)

# Cut through-holes for all posts
# We offset the workplane to the top of the tallest posts and cut downwards
total_cut_depth = plate_thickness + tall_post_height + 5.0
result = (
    result.workplaneFromTagged("top_face")
    .workplane(offset=tall_post_height)
    .pushPoints(all_centers)
    .circle(post_inner_r)
    .cutBlind(-total_cut_depth)
)