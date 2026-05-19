import cadquery as cq

# Main body parameters
main_cylinder_outer_diameter = 40.0
main_cylinder_inner_diameter = 28.0
main_cylinder_height = 50.0

# Base ring parameters (semicircular support at bottom)
base_ring_outer_diameter = 56.0
base_ring_inner_diameter = main_cylinder_outer_diameter  # Same as cylinder OD for flush fit
base_ring_height = 12.0

# Rectangular block supports
block_width = 16.0
block_depth = 40.0
block_height = 35.0

# Front rectangular support (below cylinder, between ring and cylinder)
front_support_width = 20.0
front_support_depth = 16.0
front_support_height = 20.0

# Side connecting web parameters
web_thickness = 12.0

# Build the model starting from the main central cylinder
# The main cylinder is hollow (tube shape)
main_cylinder = (
    cq.Workplane("XY")
    .circle(main_cylinder_outer_diameter / 2)
    .circle(main_cylinder_inner_diameter / 2)
    .extrude(main_cylinder_height)
)

# Create the semicircular base ring (extends to the left/front)
# This is a partial ring, approximately 180 degrees or slightly more
base_ring = (
    cq.Workplane("XY")
    .circle(base_ring_outer_diameter / 2)
    .circle(base_ring_inner_diameter / 2)
    .extrude(base_ring_height)
    # Cut to make it semicircular - keep only the front/left portion
    .faces(">Z")
    .workplane()
    .rect(base_ring_outer_diameter * 2, base_ring_outer_diameter)
    .extrude(-base_ring_height, combine="cut")
)

# Actually, let's build the base ring more carefully as a semicircle
# Using a different approach: create full ring then intersect with half-space
base_ring_full = (
    cq.Workplane("XY")
    .circle(base_ring_outer_diameter / 2)
    .circle(base_ring_inner_diameter / 2)
    .extrude(base_ring_height)
)

# Cut the base ring to keep only the semicircular portion (front half)
base_ring = (
    base_ring_full
    .faces(">Z")
    .workplane()
    .moveTo(0, base_ring_outer_diameter / 2)
    .rect(base_ring_outer_diameter * 2, base_ring_outer_diameter)
    .extrude(-base_ring_height, combine="cut")
)

# Create the right side rectangular block
right_block = (
    cq.Workplane("XY")
    .box(block_depth, block_width, block_height)
    .translate((block_depth / 2 + main_cylinder_outer_diameter / 2 - 5, 
                -block_width / 2 + main_cylinder_outer_diameter / 2 - 8, 
                block_height / 2))
)

# Create the left/back rectangular block (taller, behind cylinder)
left_block = (
    cq.Workplane("XY")
    .box(block_width, block_depth, block_height + 15)
    .translate((-block_width / 2 - main_cylinder_outer_diameter / 2 + 8, 
                -block_depth / 2 + main_cylinder_outer_diameter / 2 - 5, 
                (block_height + 15) / 2))
)

# Create the front support block (below cylinder, connecting ring to cylinder)
front_support = (
    cq.Workplane("XY")
    .box(front_support_width, front_support_depth, front_support_height)
    .translate((-front_support_width / 2, 
                -front_support_depth / 2 - main_cylinder_outer_diameter / 2 + 10, 
                front_support_height / 2))
)

# Create connecting web between right block and cylinder
right_web = (
    cq.Workplane("XY")
    .box(web_thickness, main_cylinder_outer_diameter / 2 + 5, 15)
    .translate((main_cylinder_outer_diameter / 2 + web_thickness / 2, 
                -main_cylinder_outer_diameter / 4 + 5, 
                15 / 2 + 5))
)

# Combine all components
result = main_cylinder.union(base_ring).union(right_block).union(left_block).union(front_support).union(right_web)

# Clean up by centering the model appropriately
# The model should have the cylinder centered at origin in XY, sitting on Z=0
result = result.translate((0, 0, 0))