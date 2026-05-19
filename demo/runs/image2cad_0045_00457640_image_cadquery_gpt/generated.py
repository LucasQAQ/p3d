import cadquery as cq

# =========================
# Parameters
# =========================
# Main tray dimensions
outer_length = 100.0
outer_width = 80.0
outer_height = 32.0
wall_thickness = 3.0
bottom_thickness = 3.0

# Small top lip / rim visible around the inside top edge
top_rim_depth = 1.2
top_rim_offset = 1.8

# Bottom outer step / skirt visible along the lower outside
bottom_step_height = 3.0
bottom_step_offset = 2.0

# Internal cylindrical posts
post_diameter = 8.0
post_height = 20.0

# Estimated post locations from image proportions
post_offset_x = 16.0
post_offset_y = 13.0

# =========================
# Derived dimensions
# =========================
inner_length = outer_length - 2 * wall_thickness
inner_width = outer_width - 2 * wall_thickness

# =========================
# Create outer shell
# =========================
# Start with a solid block and shell it from the top to form an open tray.
tray = (
    cq.Workplane("XY")
    .box(outer_length, outer_width, outer_height, centered=(True, True, False))
    .faces(">Z")
    .shell(-wall_thickness)
)

# =========================
# Add subtle inner top rim
# =========================
# The image shows a small ledge near the top inside perimeter.
# This is modeled as a shallow rectangular ring on the interior top face.
inner_rim_outer_length = inner_length
inner_rim_outer_width = inner_width
inner_rim_inner_length = inner_length - 2 * top_rim_offset
inner_rim_inner_width = inner_width - 2 * top_rim_offset

top_rim = (
    cq.Workplane("XY")
    .workplane(offset=outer_height - top_rim_depth)
    .rect(inner_rim_outer_length, inner_rim_outer_width)
    .rect(inner_rim_inner_length, inner_rim_inner_width)
    .extrude(top_rim_depth)
)

tray = tray.union(top_rim)

# =========================
# Add bottom outer step
# =========================
# The image shows a shallow base flange/step protruding on the outside near the bottom.
bottom_step = (
    cq.Workplane("XY")
    .rect(
        outer_length + 2 * bottom_step_offset,
        outer_width + 2 * bottom_step_offset
    )
    .rect(outer_length, outer_width)
    .extrude(bottom_step_height)
)

tray = tray.union(bottom_step)

# =========================
# Add four internal posts
# =========================
# Posts are placed near the four corners, inset from the walls.
# They start from the inside floor and extend upward.
post_centers = [
    (-outer_length / 2 + wall_thickness + post_offset_x,  outer_width / 2 - wall_thickness - post_offset_y),  # back-left
    ( outer_length / 2 - wall_thickness - post_offset_x,  outer_width / 2 - wall_thickness - post_offset_y),  # back-right
    ( outer_length / 2 - wall_thickness - post_offset_x, -outer_width / 2 + wall_thickness + post_offset_y),  # front-right
    (-outer_length / 2 + wall_thickness + post_offset_x, -outer_width / 2 + wall_thickness + post_offset_y),  # front-left
]

posts = (
    cq.Workplane("XY")
    .workplane(offset=bottom_thickness)
    .pushPoints(post_centers)
    .circle(post_diameter / 2)
    .extrude(post_height)
)

# =========================
# Final result
# =========================
result = tray.union(posts)