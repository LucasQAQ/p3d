import cadquery as cq

# Parameters (estimated from the reference image)
outer_length = 100.0          # Overall tray length
outer_width = 78.0            # Overall tray width
wall_height = 24.0            # Height of the tray walls
wall_thickness = 4.0          # Thickness of side walls
base_thickness = 4.0          # Thickness of bottom floor

# Bottom exterior ledge / foot detail
bottom_flange_projection = 2.5
bottom_flange_height = 3.0
bottom_flange_overlap = 0.8   # Slight overlap into wall for a clean boolean union

# Cylindrical internal posts
post_radius = 4.0
post_height = 28.0
post_embed_depth = 0.5
post_top_fillet = 0.4

# Post placement, inset from the inside corners
post_inset_x = 15.0
post_inset_y = 13.0

inner_length = outer_length - 2.0 * wall_thickness
inner_width = outer_width - 2.0 * wall_thickness

post_x = inner_length / 2.0 - post_inset_x
post_y = inner_width / 2.0 - post_inset_y

post_positions = [
    (-post_x, -post_y),
    ( post_x, -post_y),
    (-post_x,  post_y),
    ( post_x,  post_y),
]

# Create the main rectangular open tray shell
outer_block = (
    cq.Workplane("XY")
    .box(outer_length, outer_width, wall_height, centered=(True, True, False))
)

# Cut the open interior cavity, leaving a solid base/floor
inner_void = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)
    .box(
        inner_length,
        inner_width,
        wall_height - base_thickness + 1.0,
        centered=(True, True, False),
    )
)

tray_shell = outer_block.cut(inner_void)

# Create the lower protruding ledge around the outside perimeter
flange_outer = (
    cq.Workplane("XY")
    .box(
        outer_length + 2.0 * bottom_flange_projection,
        outer_width + 2.0 * bottom_flange_projection,
        bottom_flange_height,
        centered=(True, True, False),
    )
)

flange_inner_cut = (
    cq.Workplane("XY")
    .box(
        outer_length - 2.0 * bottom_flange_overlap,
        outer_width - 2.0 * bottom_flange_overlap,
        bottom_flange_height + 0.5,
        centered=(True, True, False),
    )
)

bottom_flange = flange_outer.cut(flange_inner_cut)

# Add four cylindrical posts rising from the inside floor
posts = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness - post_embed_depth)
    .pushPoints(post_positions)
    .circle(post_radius)
    .extrude(post_height + post_embed_depth)
    .edges(">Z")
    .fillet(post_top_fillet)
)

# Combine all features into the final model
result = tray_shell.union(bottom_flange).union(posts)