import cadquery as cq

# Overall dimensions
base_length = 120.0
base_width = 40.0
base_thickness = 4.0

# Side walls
wall_height = 25.0
wall_thickness = 4.0

# Wall hole (void through wall)
wall_hole_diameter = 4.0
wall_hole_offset_from_end = 15.0  # from the left end
wall_hole_center_height = 12.5    # vertically centered in wall

# Raised feature (perforated block)
raised_feature_width = 20.0
raised_feature_depth = 8.0
raised_feature_height = 15.0
raised_feature_x = 65.0          # center position along length
raised_feature_y = 0.0           # centered in width direction

# Recesses in raised feature (shallower than full height)
recess_diameter = 3.0
recess_depth = 8.0               # shallower than raised_feature_height
recess_spacing = 8.0             # between the two recess centers

# Build the base
base = cq.Workplane("XY").box(base_length, base_width, base_thickness)

# Left side wall (positioned at negative Y edge)
left_wall = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness/2)
    .transformed(rotate=(0, 0, 0))
    .box(base_length, wall_thickness, wall_height, centered=True)
    .translate((0, -base_width/2 + wall_thickness/2, wall_height/2))
)

# Right side wall (positioned at positive Y edge)
right_wall = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness/2)
    .box(base_length, wall_thickness, wall_height, centered=True)
    .translate((0, base_width/2 - wall_thickness/2, wall_height/2))
)

# Cut holes in walls (voids through the walls)
# Left wall hole
left_wall = (
    left_wall
    .faces(">Y")  # outer face of left wall
    .workplane()
    .hole(wall_hole_diameter, wall_thickness + 0.1)
    .translate((-base_length/2 + wall_hole_offset_from_end, 0, wall_hole_center_height - wall_height/2))
)

# Right wall hole
right_wall = (
    right_wall
    .faces("<Y")  # outer face of right wall
    .workplane()
    .hole(wall_hole_diameter, wall_thickness + 0.1)
    .translate((-base_length/2 + wall_hole_offset_from_end, 0, wall_hole_center_height - wall_height/2))
)

# Raised feature on base between walls
raised_block = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness/2)
    .box(raised_feature_width, raised_feature_depth, raised_feature_height, centered=True)
    .translate((raised_feature_x - base_length/2 + raised_feature_width/2, raised_feature_y, raised_feature_height/2))
)

# Recesses in raised feature (shallower cuts from top)
recessed_block = (
    raised_block
    .faces(">Z")
    .workplane()
    .pushPoints([(-recess_spacing/2, 0), (recess_spacing/2, 0)])
    .hole(recess_diameter, recess_depth + 0.1)
)

# Combine all parts
result = base.union(left_wall).union(right_wall).union(recessed_block)