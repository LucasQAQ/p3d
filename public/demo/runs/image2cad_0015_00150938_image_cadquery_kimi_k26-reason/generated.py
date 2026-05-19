import cadquery as cq

# Base plate parameters
base_plate_width = 100.0
base_plate_depth = 100.0
base_plate_thickness = 5.0

# Mounting hole parameters
mounting_hole_diameter = 8.0
mounting_hole_offset = 15.0  # Distance from each corner edge to hole center

# Central block parameters (square pedestal under the cylinder)
block_width = 50.0
block_depth = 50.0
block_height = 15.0

# Main cylindrical boss parameters (hollow cylinder on top of block)
cylinder_outer_diameter = 45.0
cylinder_inner_diameter = 38.0  # Wall thickness ~3.5mm
cylinder_height = 25.0

# Side cylindrical support parameters (two smaller cylinders on opposite corners)
support_cylinder_diameter = 18.0
support_cylinder_height = 20.0  # Slightly shorter than main cylinder, extends from base plate

# Positions for side supports (diagonally opposite corners of the block)
support_offset_x = block_width / 2 + support_cylinder_diameter / 2 - 5.0  # Overlap slightly with block
support_offset_y = block_depth / 2 + support_cylinder_diameter / 2 - 5.0

# Create the base plate with mounting holes
base_plate = (
    cq.Workplane("XY")
    .box(base_plate_width, base_plate_depth, base_plate_thickness, centered=True)
    # Mounting hole 1: front-left corner
    .faces(">Z")
    .workplane()
    .pushPoints([
        (-base_plate_width/2 + mounting_hole_offset, -base_plate_depth/2 + mounting_hole_offset),
        (base_plate_width/2 - mounting_hole_offset, -base_plate_depth/2 + mounting_hole_offset),
        (-base_plate_width/2 + mounting_hole_offset, base_plate_depth/2 - mounting_hole_offset),
        (base_plate_width/2 - mounting_hole_offset, base_plate_depth/2 - mounting_hole_offset),
    ])
    .circle(mounting_hole_diameter / 2)
    .cutThruAll()
)

# Create the central square block (pedestal)
central_block = (
    cq.Workplane("XY")
    .workplane(offset=base_plate_thickness / 2)  # Start on top of base plate
    .box(block_width, block_depth, block_height, centered=True)
)

# Create the main hollow cylinder on top of the central block
main_cylinder = (
    cq.Workplane("XY")
    .workplane(offset=base_plate_thickness / 2 + block_height)  # Start on top of block
    .circle(cylinder_outer_diameter / 2)
    .circle(cylinder_inner_diameter / 2)  # Inner hole for hollow cylinder
    .extrude(cylinder_height)
)

# Create the two side support cylinders (diagonally opposite, extending from base plate)
# Position: front-left and back-right corners relative to the block
support_positions = [
    (-support_offset_x, -support_offset_y),  # Front-left support
    (support_offset_x, support_offset_y),    # Back-right support
]

side_supports = (
    cq.Workplane("XY")
    .workplane(offset=base_plate_thickness / 2)  # Start on top of base plate
    .pushPoints(support_positions)
    .circle(support_cylinder_diameter / 2)
    .extrude(support_cylinder_height)
)

# Combine all components using union operations
result = base_plate.union(central_block).union(main_cylinder).union(side_supports)

# The result is the final assembled model