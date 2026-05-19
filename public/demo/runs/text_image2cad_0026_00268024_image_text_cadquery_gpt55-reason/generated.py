import cadquery as cq

# Parameters
base_length = 100.0
base_width = 70.0
base_thickness = 4.0

frame_border_x = 18.0
frame_border_y = 16.0
center_opening_length = base_length - 2.0 * frame_border_x
center_opening_width = base_width - 2.0 * frame_border_y

collar_outer_diameter = 14.0
collar_inner_diameter = 6.0
collar_height = 8.0

collar_offset_x = 16.0
collar_offset_y = 14.0

edge_chamfer = 0.8
collar_top_chamfer = 0.6

# Derived dimensions
collar_positions = [
    (-base_length / 2.0 + collar_offset_x, -base_width / 2.0 + collar_offset_y),
    ( base_length / 2.0 - collar_offset_x, -base_width / 2.0 + collar_offset_y),
    (-base_length / 2.0 + collar_offset_x,  base_width / 2.0 - collar_offset_y),
    ( base_length / 2.0 - collar_offset_x,  base_width / 2.0 - collar_offset_y),
]

# Create the thin rectangular frame plate with a through rectangular center opening
base_frame = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
    .edges("|Z")
    .chamfer(edge_chamfer)
    .faces(">Z")
    .workplane()
    .rect(center_opening_length, center_opening_width)
    .cutThruAll()
)

# Add raised circular collars on the upper face
collars = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness / 2.0)
    .pushPoints(collar_positions)
    .circle(collar_outer_diameter / 2.0)
    .extrude(collar_height)
)

# Combine base and collars into one solid
model = base_frame.union(collars)

# Cut the central holes through the collars and base
result = (
    model
    .faces(">Z")
    .workplane()
    .pushPoints(collar_positions)
    .circle(collar_inner_diameter / 2.0)
    .cutThruAll()
    .edges(">Z")
    .filter(lambda edge: abs(edge.Center().z - (base_thickness / 2.0 + collar_height)) < 1e-5)
    .chamfer(collar_top_chamfer)
)