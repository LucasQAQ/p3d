import cadquery as cq

# ==========================================
# Parameters
# ==========================================
# Base L-bracket dimensions
base_length_x = 120.0
base_length_y = 80.0
base_width = 30.0
base_thickness = 15.0

# Vertical angle iron dimensions
vert_length = 25.0
vert_thickness = 4.0
vert_height = 35.0

# Features
hole_radius = 4.0
slot_width = 1.5
slot_height = 8.0

# ==========================================
# Modeling
# ==========================================

# 1. Create the L-shaped base
# We define the perimeter points of the L-shape on the XY plane
pts = [
    (0, 0),
    (base_length_x, 0),
    (base_length_x, base_length_y),
    (base_length_x - base_width, base_length_y),
    (base_length_x - base_width, base_width),
    (0, base_width)
]

base = (
    cq.Workplane("XY")
    .polyline(pts).close()
    .extrude(base_thickness)
)

# 2. Add mounting holes to the base
# Two holes on the long arm, one hole on the short arm
hole_pts = [
    (20, base_width / 2),                                    # Long arm hole 1
    (60, base_width / 2),                                    # Long arm hole 2
    (base_length_x - base_width / 2, base_length_y - 15)     # Short arm hole
]

base = (
    base.faces("<Z").workplane()
    .pushPoints(hole_pts)
    .circle(hole_radius)
    .cutThruAll()
)

# 3. Create the vertical L-shaped part (angle bracket)
# It sits on top of the base at the inner corner
inner_x = base_length_x - base_width
inner_y = base_width

v_pts = [
    (inner_x, inner_y),
    (inner_x - vert_length, inner_y),
    (inner_x - vert_length, inner_y - vert_thickness),
    (inner_x + vert_thickness, inner_y - vert_thickness),
    (inner_x + vert_thickness, inner_y + vert_length),
    (inner_x, inner_y + vert_length)
]

vert_part = (
    cq.Workplane("XY").workplane(offset=base_thickness)
    .polyline(v_pts).close()
    .extrude(vert_height)
)

# Combine the base and the vertical part
result = base.union(vert_part)

# 4. Add the small vertical slot detail on the vertical flange
slot_x = inner_x - vert_length / 2
slot_z = base_thickness + vert_height / 2

slot_cut = (
    cq.Workplane("XY")
    .workplane(offset=slot_z)
    .center(slot_x, inner_y - vert_thickness / 2)
    .box(slot_width, vert_thickness * 2, slot_height)
)

result = result.cut(slot_cut)

# Export the final model
# result.val().exportStep("l_bracket_assembly.step")