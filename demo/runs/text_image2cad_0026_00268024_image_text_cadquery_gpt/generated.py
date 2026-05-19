import cadquery as cq

# Parameters
outer_length = 120.0
outer_width = 85.0
base_thickness = 4.0

frame_wall = 16.0
center_open_length = outer_length - 2 * frame_wall
center_open_width = outer_width - 2 * frame_wall

collar_outer_diameter = 12.0
collar_hole_diameter = 5.0
collar_height = 6.0

corner_offset_x = 16.0
corner_offset_y = 12.0

# Corner collar center locations
collar_centers = [
    (-outer_length / 2 + corner_offset_x, -outer_width / 2 + corner_offset_y),
    (-outer_length / 2 + corner_offset_x,  outer_width / 2 - corner_offset_y),
    ( outer_length / 2 - corner_offset_x, -outer_width / 2 + corner_offset_y),
    ( outer_length / 2 - corner_offset_x,  outer_width / 2 - corner_offset_y),
]

# Create the rectangular frame base
base_frame = (
    cq.Workplane("XY")
    .box(outer_length, outer_width, base_thickness)
    .faces(">Z")
    .workplane()
    .rect(center_open_length, center_open_width)
    .cutThruAll()
)

# Add raised annular collars on the top face
frame_with_collars = (
    base_frame
    .faces(">Z")
    .workplane()
    .pushPoints(collar_centers)
    .circle(collar_outer_diameter / 2)
    .extrude(collar_height)
)

# Cut the through holes at the collar centers
result = (
    frame_with_collars
    .faces(">Z")
    .workplane()
    .pushPoints(collar_centers)
    .hole(collar_hole_diameter, depth=base_thickness + collar_height)
)