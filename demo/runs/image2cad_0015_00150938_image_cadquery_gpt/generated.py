import cadquery as cq

# =========================
# Parameters
# =========================

# Base plate
base_length = 100.0
base_width = 80.0
base_thickness = 4.0

# Mounting holes
mount_hole_diameter = 8.0
mount_hole_offset_x = 12.0
mount_hole_offset_y = 12.0

# Raised rectangular pad
pad_length = 46.0
pad_width = 34.0
pad_height = 14.0
pad_center_x = -8.0
pad_center_y = 2.0

# Main cylindrical socket
socket_outer_diameter = 34.0
socket_inner_diameter = 28.0
socket_height = 20.0
socket_center_x = -8.0
socket_center_y = 2.0

# Side rounded lugs / tabs
lug_diameter = 14.0
lug_height = pad_height
lug_offset_x = 18.0  # distance from socket center to lug center

# =========================
# Derived values
# =========================

mount_hole_radius = mount_hole_diameter / 2.0
socket_outer_radius = socket_outer_diameter / 2.0
socket_inner_radius = socket_inner_diameter / 2.0
lug_radius = lug_diameter / 2.0

# =========================
# Model construction
# =========================

# 1) Base plate
base_plate = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness, centered=(True, True, False))
)

# 2) Rectangular raised pad
# Interpreted from the image as a centered block, slightly offset on the plate.
rectangular_pad = (
    cq.Workplane("XY")
    .center(pad_center_x, pad_center_y)
    .rect(pad_length, pad_width)
    .extrude(base_thickness + pad_height)
)

# 3) Side rounded lugs on left and right of the pad
# These are modeled as circular bosses extruded to the same height as the rectangular pad.
left_lug = (
    cq.Workplane("XY")
    .center(socket_center_x - lug_offset_x, socket_center_y)
    .circle(lug_radius)
    .extrude(base_thickness + lug_height)
)

right_lug = (
    cq.Workplane("XY")
    .center(socket_center_x + lug_offset_x, socket_center_y)
    .circle(lug_radius)
    .extrude(base_thickness + lug_height)
)

# 4) Main cylindrical socket
# Built as a hollow cylinder sitting on top of the raised pad.
socket_body = (
    cq.Workplane("XY")
    .center(socket_center_x, socket_center_y)
    .circle(socket_outer_radius)
    .circle(socket_inner_radius)
    .extrude(base_thickness + pad_height + socket_height)
)

# 5) Combine all solid features
model = base_plate.union(rectangular_pad).union(left_lug).union(right_lug).union(socket_body)

# 6) Cut the mounting holes through the base plate
# Hole positions are estimated from the image: three visible holes near three corners.
mount_holes = [
    (-base_length / 2.0 + mount_hole_offset_x, -base_width / 2.0 + mount_hole_offset_y),  # front-left
    (-base_length / 2.0 + mount_hole_offset_x,  base_width / 2.0 - mount_hole_offset_y),  # back-left
    ( base_length / 2.0 - mount_hole_offset_x,  base_width / 2.0 - mount_hole_offset_y),  # back-right
]

for x_pos, y_pos in mount_holes:
    model = (
        model.faces(">Z")
        .workplane()
        .pushPoints([(x_pos, y_pos)])
        .hole(mount_hole_diameter)
    )

# Final exported result
result = model