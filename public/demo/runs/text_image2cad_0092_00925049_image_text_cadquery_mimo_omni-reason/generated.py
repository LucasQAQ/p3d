import cadquery as cq

# Parameters - base dimensions
base_length = 80.0
base_width = 40.0
base_thickness = 5.0

# Parameters - side walls
wall_height = 25.0
wall_thickness = 5.0
wall_hole_diameter = 6.0
wall_hole_offset = 10.0  # from the end

# Parameters - raised feature
raised_length = 20.0
raised_width = 15.0
raised_height = 10.0
raised_position_x = 30.0  # from left end of base

# Parameters - cut features in raised feature
cut_diameter = 4.0
cut_depth = 5.0
cut_offset_x = 5.0  # from center of raised feature

# Create the base
result = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
)

# Add left side wall along the full length
result = (
    result
    .faces(">Y")
    .workplane()
    .box(base_length, wall_thickness, wall_height)
)

# Add right side wall along the full length
result = (
    result
    .faces("<Y")
    .workplane()
    .box(base_length, wall_thickness, wall_height)
)

# Create holes in left side wall
result = (
    result
    .faces(">Y")
    .workplane()
    .pushPoints([
        (wall_hole_offset, wall_height/2),
        (base_length - wall_hole_offset, wall_height/2)
    ])
    .hole(wall_hole_diameter)
)

# Create holes in right side wall
result = (
    result
    .faces("<Y")
    .workplane()
    .pushPoints([
        (wall_hole_offset, wall_height/2),
        (base_length - wall_hole_offset, wall_height/2)
    ])
    .hole(wall_hole_diameter)
)

# Add raised feature on top of base between walls
result = (
    result
    .faces(">Z")
    .workplane()
    .transformed(offset=(raised_position_x, 0, 0))
    .box(raised_length, raised_width, raised_height)
)

# Create cut features in raised feature
result = (
    result
    .faces(">Z")
    .workplane()
    .transformed(offset=(raised_position_x, 0, 0))
    .pushPoints([
        (-cut_offset_x, 0),
        (cut_offset_x, 0)
    ])
    .hole(cut_diameter)
)

# Cut the recess depth for the holes (making them shallower)
# This creates the tiered depth effect
result = (
    result
    .faces(">Z")
    .workplane()
    .transformed(offset=(raised_position_x, 0, 0))
    .pushPoints([
        (-cut_offset_x, 0),
        (cut_offset_x, 0)
    ])
    .cboreHole(cut_diameter, cut_diameter + 2, cut_depth)
)