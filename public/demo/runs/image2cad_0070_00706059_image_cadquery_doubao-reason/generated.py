import cadquery as cq

# ------------------------
# Parameter Definitions
# ------------------------
# Main cylindrical collar dimensions
collar_outer_dia = 40.0
collar_inner_dia = 28.0
collar_height = 45.0

# Mounting block (right side) dimensions
mount_block_width = 30.0
mount_block_depth = 12.0
mount_block_height = 45.0

# Front lug (left side) dimensions
lug_outer_dia = 32.0
lug_inner_dia = 20.0
lug_thickness = 10.0
lug_offset_from_center = 28.0  # Distance from main collar center to lug center

# Support web dimensions (connecting all features)
web_thickness = 8.0
web_height = 18.0  # Height of the lower support webs

# ------------------------
# Modeling Steps
# ------------------------
# 1. Create main cylindrical collar with through hole
main_collar = (
    cq.Workplane("XY")
    .circle(collar_outer_dia / 2)
    .circle(collar_inner_dia / 2)
    .extrude(collar_height)
)

# 2. Create right side mounting block
mount_block = (
    cq.Workplane("XY")
    # Position block so its left face is tangent to the collar outer surface
    .center(collar_outer_dia/2 + mount_block_width/2, 0)
    .rect(mount_block_width, mount_block_depth)
    .extrude(mount_block_height)
)

# 3. Create left side mounting lug with through hole
left_lug = (
    cq.Workplane("XY")
    # Offset lug to left of main collar
    .center(-lug_offset_from_center, 0)
    .circle(lug_outer_dia / 2)
    .circle(lug_inner_dia / 2)
    .extrude(lug_thickness)
)

# 4. Create support webs connecting all components
# Web connecting collar to left lug
web_left = (
    cq.Workplane("XY")
    .moveTo(-lug_offset_from_center, -lug_outer_dia/2)
    .lineTo(collar_outer_dia/2, -mount_block_depth/2)
    .lineTo(collar_outer_dia/2 + mount_block_width, -mount_block_depth/2)
    .lineTo(collar_outer_dia/2 + mount_block_width, mount_block_depth/2)
    .lineTo(collar_outer_dia/2, mount_block_depth/2)
    .lineTo(-lug_offset_from_center, lug_outer_dia/2)
    .close()
    .extrude(web_height)
)

# 5. Combine all components into a single part
result = main_collar.union(mount_block).union(left_lug).union(web_left)