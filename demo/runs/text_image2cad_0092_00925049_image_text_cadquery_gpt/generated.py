import cadquery as cq

# Parameters
base_length = 100.0
base_width = 24.0
base_thickness = 3.0

wall_thickness = 3.0
left_wall_height = 18.0
right_wall_height = 18.0

left_wall_hole_diameter = 3.5
right_wall_hole_diameter = 3.5
wall_hole_height = 9.0
left_wall_hole_x = 10.0
right_wall_hole_x = 86.0

center_step_x = 48.0
center_step_width = 5.0
center_step_depth = 2.0

left_plate_length = 50.0
right_plate_length = 40.0

left_inner_post_x = 56.0
right_inner_post_x = 61.0
inner_post_y = 9.0
inner_post_width = 3.5
inner_post_length = 5.0
left_inner_post_height = 10.0
right_inner_post_height = 13.0

inner_post_hole_diameter = 1.8
inner_post_hole_height = 7.5
inner_post_hole_depth = 1.2

# Base plate
result = cq.Workplane("XY").box(
    base_length, base_width, base_thickness, centered=(False, False, False)
)

# Left side wall with sloped lower edge and through-hole
left_wall_profile = (
    cq.Workplane("XZ")
    .moveTo(0, 0)
    .lineTo(0, left_wall_height)
    .lineTo(left_plate_length, base_thickness)
    .lineTo(left_plate_length, 0)
    .close()
)

left_wall = (
    left_wall_profile
    .extrude(wall_thickness)
    .translate((0, 0, base_thickness))
)

left_wall = (
    left_wall.faces("<Y")
    .workplane()
    .center(left_wall_hole_x, wall_hole_height)
    .hole(left_wall_hole_diameter)
)

# Right side wall with rectangular profile and through-hole
right_wall = (
    cq.Workplane("XZ")
    .rect(right_plate_length, right_wall_height, centered=False)
    .extrude(wall_thickness)
    .translate((base_length - right_plate_length, base_width - wall_thickness, base_thickness))
)

right_wall = (
    right_wall.faces(">Y")
    .workplane()
    .center(right_wall_hole_x - (base_length - right_plate_length), wall_hole_height)
    .hole(right_wall_hole_diameter)
)

# Small center underside step visible in the transition area
center_step = (
    cq.Workplane("XY")
    .box(center_step_width, wall_thickness, center_step_depth, centered=(False, False, False))
    .translate((center_step_x, 0, base_thickness - center_step_depth))
)

# Two raised perforated tabs on the base between walls
left_inner_post = (
    cq.Workplane("XY")
    .box(inner_post_width, inner_post_length, left_inner_post_height, centered=(False, False, False))
    .translate((left_inner_post_x, inner_post_y, base_thickness))
)

right_inner_post = (
    cq.Workplane("XY")
    .box(inner_post_width, inner_post_length, right_inner_post_height, centered=(False, False, False))
    .translate((right_inner_post_x, inner_post_y, base_thickness))
)

# Add shallow circular recesses/holes on the inner posts