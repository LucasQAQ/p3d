import cadquery as cq

# =========================
# Parameters
# =========================
# Main base bar
base_length = 120.0
base_width = 24.0
base_thickness = 12.0

# Mounting holes in the base bar
base_hole_diameter = 6.0
base_hole_1_x = 18.0
base_hole_2_x = 68.0

# Vertical web/plate
web_thickness = 4.0
web_height_above_base = 34.0
web_length_along_y = 28.0

# Upper rear tray/platform
tray_length = 42.0
tray_width = 24.0
tray_thickness = 12.0

# Right side arm/platform
arm_length = 30.0
arm_width = 16.0
arm_thickness = 12.0

# Small hole on the right arm
arm_hole_diameter = 4.0
arm_hole_offset_from_web = 15.0

# =========================
# Derived placement values
# =========================
# The web is centered across the width of the base and positioned
# roughly at the transition between the long base and the upper features.
web_center_x = 78.0
web_center_y = 0.0

# The tray sits behind the web (negative Y direction in this setup)
tray_center_x = web_center_x - (tray_length / 2 - web_thickness / 2)
tray_center_y = -(tray_width / 2)

# The arm sits to the right of the web (positive Y direction)
arm_center_x = web_center_x + arm_length / 2
arm_center_y = (base_width / 2) - (arm_width / 2)

# =========================
# Create the model
# =========================

# 1) Main base bar
base_bar = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness, centered=(False, True, False))
)

# 2) Mounting holes through the base top face
#    Positions estimated from the image proportions.
base_bar = (
    base_bar
    .faces(">Z")
    .workplane()
    .pushPoints([
        (base_hole_1_x, 0.0),
        (base_hole_2_x, 0.0),
    ])
    .hole(base_hole_diameter)
)

# 3) Vertical web rising from the top of the base
#    This is the central upright plate connecting the lower bar and upper features.
vertical_web = (
    cq.Workplane("XY")
    .center(web_center_x, web_center_y)
    .box(
        web_thickness,
        web_length_along_y,
        web_height_above_base,
        centered=(True, True, False)
    )
    .translate((0, 0, base_thickness))
)

# 4) Upper rear tray/platform
#    Located behind the web and elevated above the base.
rear_tray = (
    cq.Workplane("XY")
    .center(tray_center_x, tray_center_y)
    .box(
        tray_length,
        tray_width,
        tray_thickness,
        centered=(True, True, False)
    )
    .translate((0, 0, base_thickness + web_height_above_base - tray_thickness))
)

# 5) Right side arm/platform
#    Extends from the web to the right side, also elevated above the base.
right_arm = (
    cq.Workplane("XY")
    .center(arm_center_x, arm_center_y)
    .box(
        arm_length,
        arm_width,
        arm_thickness,
        centered=(True, True, False)
    )
    .translate((0, 0, base_thickness + web_height_above_base - arm_thickness))
)

# 6) Small hole in the right arm
right_arm = (
    right_arm
    .faces(">Z")
    .workplane()
    .center(web_center_x + arm_hole_offset_from_web - arm_center_x, 0)
    .hole(arm_hole_diameter)
)

# 7) Combine all solids
result = base_bar.union(vertical_web).union(rear_tray).union(right_arm)