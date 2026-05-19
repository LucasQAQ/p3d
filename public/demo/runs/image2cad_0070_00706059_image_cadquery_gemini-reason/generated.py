import cadquery as cq

# ==========================================
# Parameters
# ==========================================
# Backplate dimensions
bp_w = 80.0       # Width of the backplate
bp_h = 75.0       # Height of the backplate
bp_t = 15.0       # Thickness of the backplate

# Cylinder dimensions
cyl_od = 46.0     # Outer diameter of the main cylinder
cyl_id = 30.0     # Inner diameter (hole) of the cylinder
cyl_h = 45.0      # Height of the cylinder
cyl_z = 30.0      # Z-offset of the cylinder from the bottom

# Horizontal Loop dimensions
loop_w = 46.0     # Width of the rectangular part of the loop
loop_t = 10.0     # Thickness of the loop plate
loop_z = 10.0     # Z-offset of the loop plate from the bottom
loop_len = 40.0   # Length of the rectangular part (distance to hole center)
loop_or = 23.0    # Outer radius of the loop's front
loop_ir = 13.0    # Inner radius of the loop's hole

# Vertical Block (Right side support) dimensions
vblock_w = 10.0   # Width of the vertical block
vblock_h = 30.0   # Height of the vertical block
vblock_len = 40.0 # Length of the vertical block (extends to hole center)

# ==========================================
# Modeling
# ==========================================

# 1. Base Backplate
# Positioned at the back (Y from -bp_t to 0), centered on X
backplate = (
    cq.Workplane("XY")
    .transformed(offset=cq.Vector(0, -bp_t/2.0, bp_h/2.0))
    .box(bp_w, bp_t, bp_h)
)

# 2. Main Cylinder
# Attached to the front of the backplate, flush with the top
cylinder = (
    cq.Workplane("XY")
    .transformed(offset=cq.Vector(0, cyl_od/2.0, cyl_z))
    .circle(cyl_od/2.0)
    .circle(cyl_id/2.0)
    .extrude(cyl_h)
)

# 3. Horizontal Loop (Left/Center)
# Consists of a rectangular extension and a rounded front with a hole
loop_body = (
    cq.Workplane("XY")
    .transformed(offset=cq.Vector(0, loop_len/2.0, loop_z + loop_t/2.0))
    .box(loop_w, loop_len, loop_t)
)

loop_front = (
    cq.Workplane("XY")
    .transformed(offset=cq.Vector(0, loop_len, loop_z))
    .circle(loop_or)
    .extrude(loop_t)
)

# Cutting tool for the loop's hole (made slightly longer to ensure clean cut)
loop_hole = (
    cq.Workplane("XY")
    .transformed(offset=cq.Vector(0, loop_len, loop_z - 1.0))
    .circle(loop_ir)
    .extrude(loop_t + 2.0)
)

# Combine loop parts and cut the hole
loop = loop_body.union(loop_front).cut(loop_hole)

# 4. Vertical Support Block (Right side)
# Asymmetrical feature on the right, extending forward to the hole's center
vblock = (
    cq.Workplane("XY")
    .transformed(offset=cq.Vector(loop_or - vblock_w/2.0, vblock_len/2.0, vblock_h/2.0))
    .box(vblock_w, vblock_len, vblock_h)
)

# ==========================================
# Final Assembly
# ==========================================
# Union all components together into a single solid
result = backplate.union(cylinder).union(loop).union(vblock)