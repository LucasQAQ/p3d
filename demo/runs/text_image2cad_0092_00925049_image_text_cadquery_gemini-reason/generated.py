import cadquery as cq

# Parameters for the base
base_length = 140.0
base_width = 30.0
base_thickness = 3.0

# Parameters for the side walls
wall_thickness = 3.0
wall_length = 65.0
wall_height_max = 35.0
wall_height_min = 12.0

# Parameters for the center raised features (tabs)
tab_length = 5.0
tab_width = 8.0
tab_height = 16.0
tab_offset_x = 6.0
tab_offset_y = 5.0

# Parameters for the holes
hole_radius_wall = 2.0
hole_radius_tab = 1.2
wall_hole_offset_x = 12.0
wall_hole_offset_z = 10.0
tab_hole_offset_z = 4.0

# 1. Create the solid rectangular base
base = cq.Workplane("XY").box(base_length, base_width, base_thickness)

# 2. Create the left side wall (on the front edge, tapering down towards the center)
left_wall_pts = [
    (-base_length/2, -base_thickness/2),
    (-base_length/2, wall_height_max),
    (-base_length/2 + wall_length, wall_height_min),
    (-base_length/2 + wall_length, -base_thickness/2)
]
left_wall = (
    cq.Workplane("XZ", origin=(0, -base_width/2 + wall_thickness/2, 0))
    .polyline(left_wall_pts).close()
    .extrude(wall_thickness/2, both=True)
)

# 3. Create the right side wall (on the back edge, tapering down towards the center)
right_wall_pts = [
    (base_length/2, -base_thickness/2),
    (base_length/2, wall_height_max),
    (base_length/2 - wall_length, wall_height_min),
    (base_length/2 - wall_length, -base_thickness/2)
]
right_wall = (
    cq.Workplane("XZ", origin=(0, base_width/2 - wall_thickness/2, 0))
    .polyline(right_wall_pts).close()
    .extrude(wall_thickness/2, both=True)
)

# 4. Create the center raised features (two offset rectangular tabs)
left_tab = (
    cq.Workplane("XY", origin=(-tab_offset_x, -tab_offset_y, base_thickness/2))
    .box(tab_length, tab_width, tab_height, centered=(True, True, False))
)
right_tab = (
    cq.Workplane("XY", origin=(tab_offset_x, tab_offset_y, base_thickness/2))
    .box(tab_length, tab_width, tab_height, centered=(True, True, False))
)

# Combine all solid geometry into a single unified body
result = base.union(left_wall).union(right_wall).union(left_tab).union(right_tab)

# 5. Define cutting tools for the holes
# Hole in the left wall
left_hole = (
    cq.Workplane("XZ", origin=(-base_length/2 + wall_hole_offset_x, 0, wall_height_max - wall_hole_offset_z))
    .circle(hole_radius_wall)
    .extrude(base_width * 2, both=True)
)

# Hole in the right wall
right_hole = (
    cq.Workplane("XZ", origin=(base_length/2 - wall_hole_offset_x, 0, wall_height_max - wall_hole_offset_z))
    .circle(hole_radius_wall)
    .extrude(base_width * 2, both=True)
)

# Holes in the center tabs
tab_holes = (
    cq.Workplane("XZ", origin=(0, 0, base_thickness/2 + tab_height - tab_hole_offset_z))
    .pushPoints([(-tab_offset_x, 0), (tab_offset_x, 0)])
    .circle(hole_radius_tab)
    .extrude(base_width * 2, both=True)
)

# Subtract the holes from the main body
result = result.cut(left_hole).cut(right_hole).cut(tab_holes)