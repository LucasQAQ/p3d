import cadquery as cq

# ==========================================
# Parameters
# ==========================================

# Cylinder dimensions
cyl_od = 40.0
cyl_id = 26.0
cyl_h = 20.0

# Back plate dimensions
bp_width = 100.0
bp_height = 35.0
bp_thick = 8.0
bp_dist = 40.0  # Distance from cylinder center to back plate front face

# Top cutout on back plate
cutout_width = 60.0
cutout_depth = 6.0

# Connector block (connects cylinder to back plate)
conn_width = 10.0
conn_h = 10.0
conn_z = cyl_h - conn_h  # Flush with the top of the cylinder

# Horizontal trapezoidal web
web_thick = 2.0
web_z = conn_z - web_thick  # Flush with the bottom of the connector block
web_width_front = conn_width
web_width_back = 70.0

# Small square feature on the back plate
sq_size = 3.0

# ==========================================
# Modeling
# ==========================================

# 1. Main Cylinder Body (Solid first, hole cut later)
body = (
    cq.Workplane("XY")
    .cylinder(cyl_h, cyl_od/2, centered=(True, True, False))
)

# 2. Back Plate
bp_y_center = bp_dist + bp_thick/2
bp = (
    cq.Workplane("XY")
    .center(0, bp_y_center)
    .box(bp_width, bp_thick, bp_height, centered=(True, True, False))
)
body = body.union(bp)

# 3. Connector Block
conn = (
    cq.Workplane("XY")
    .center(0, bp_dist/2)
    .workplane(offset=conn_z)
    .box(conn_width, bp_dist, conn_h, centered=(True, True, False))
)
body = body.union(conn)

# 4. Horizontal Web (Trapezoid shape)
# Starting at y=0 ensures it fully intersects the cylinder for a clean union
web_pts = [
    (-web_width_front/2, 0),
    (web_width_front/2, 0),
    (web_width_back/2, bp_dist),
    (-web_width_back/2, bp_dist)
]
web = (
    cq.Workplane("XY")
    .workplane(offset=web_z)
    .polyline(web_pts).close()
    .extrude(web_thick)
)
body = body.union(web)

# 5. Cut Cylinder Inner Hole (Done after unions to clear out internal geometry)
hole_cut = (
    cq.Workplane("XY")
    .cylinder(cyl_h, cyl_id/2, centered=(True, True, False))
)
body = body.cut(hole_cut)

# 6. Top Cutout on Back Plate
top_cutout = (
    cq.Workplane("XY")
    .center(0, bp_y_center)
    .workplane(offset=bp_height - cutout_depth)
    .box(cutout_width, bp_thick * 2, cutout_depth * 2, centered=(True, True, False))
)
body = body.cut(top_cutout)

# 7. Small Square Cutout (Located on the right side above the web)
sq_x = web_width_back/2 - sq_size
sq_cut = (
    cq.Workplane("XY")
    .center(sq_x, bp_y_center)
    .workplane(offset=web_z + web_thick)
    .box(sq_size, bp_thick * 2, sq_size, centered=(True, True, False))
)
result = body.cut(sq_cut)