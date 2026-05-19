import cadquery as cq

# Parameters
# Base dimensions
base_length = 100.0
base_width = 40.0
base_thickness = 5.0

# Side wall dimensions
wall_height = 30.0
wall_thickness = 5.0

# Raised feature dimensions
raised_feature_length = 20.0
raised_feature_width = 15.0
raised_feature_height = 10.0

# Hole dimensions
side_wall_hole_diameter = 8.0
raised_feature_hole_diameter = 4.0

# Positions
side_wall_hole_offset_from_end = 15.0
raised_feature_offset_from_center = 10.0

# Create the base
base = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
)

# Create side walls
side_wall_1 = (
    cq.Workplane("XY")
    .moveTo(0, -base_width / 2)
    .lineTo(base_length, -base_width / 2)
    .lineTo(base_length, -base_width / 2 + wall_thickness)
    .lineTo(0, -base_width / 2 + wall_thickness)
    .close()
    .extrude(wall_height)
)

side_wall_2 = (
    cq.Workplane("XY")
    .moveTo(0, base_width / 2 - wall_thickness)
    .lineTo(base_length, base_width / 2 - wall_thickness)
    .lineTo(base_length, base_width / 2)
    .lineTo(0, base_width / 2)
    .close()
    .extrude(wall_height)
)

# Add holes to side walls
side_wall_1_with_hole = (
    side_wall_1
    .faces(">Z")
    .workplane()
    .center(side_wall_hole_offset_from_end, 0)
    .circle(side_wall_hole_diameter / 2)
    .cutThruAll()
)

side_wall_2_with_hole = (
    side_wall_2
    .faces(">Z")
    .workplane()
    .center(base_length - side_wall_hole_offset_from_end, 0)
    .circle(side_wall_hole_diameter / 2)
    .cutThruAll()
)

# Create raised feature
raised_feature = (
    cq.Workplane("XY")
    .moveTo(-raised_feature_length / 2, -raised_feature_width / 2)
    .lineTo(raised_feature_length / 2, -raised_feature_width / 2)
    .lineTo(raised_feature_length / 2, raised_feature_width / 2)
    .lineTo(-raised_feature_length / 2, raised_feature_width / 2)
    .close()
    .extrude(raised_feature_height)
    .translate((0, 0, base_thickness))
)

# Add holes to raised feature
raised_feature_with_holes = (
    raised_feature
    .faces(">Z")
    .workplane()
    .center(-raised_feature_offset_from_center, 0)
    .circle(raised_feature_hole_diameter / 2)
    .cutThruAll()
    .center(2 * raised_feature_offset_from_center, 0)
    .circle(raised_feature_hole_diameter / 2)
    .cutThruAll()
)

# Combine all parts
result = (
    base
    .union(side_wall_1_with_hole)
    .union(side_wall_2_with_hole)
    .union(raised_feature_with_holes)
)