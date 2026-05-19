import cadquery as cq

# Parameters - estimated from visual proportions in the image
plate_width = 60.0      # Overall width of base plate
plate_depth = 60.0      # Overall depth of base plate  
plate_thickness = 5.0   # Thickness of base plate

hub_outer_diameter = 25.0   # Outer diameter of central cylindrical hub
hub_inner_diameter = 18.0   # Inner diameter (bore) of central hub
hub_height = 15.0           # Height of central hub above base plate

mounting_block_width = 30.0     # Width of rectangular mounting block under hub
mounting_block_depth = 30.0     # Depth of rectangular mounting block under hub
mounting_block_height = 8.0     # Height of rectangular mounting block

support_cylinder_diameter = 12.0    # Diameter of side support cylinders
support_cylinder_height = 10.0      # Height of side support cylinders

hole_diameter = 6.0             # Diameter of mounting holes
hole_offset_from_edge = 10.0    # Distance from plate edge to hole center

# Create the model step by step

# Start with base plate
result = (
    cq.Workplane("XY")
    .box(plate_width, plate_depth, plate_thickness)
)

# Add rectangular mounting block centered on top of plate
result = result.union(
    cq.Workplane("XY")
    .workplane(offset=plate_thickness)
    .center(0, 0)
    .box(mounting_block_width, mounting_block_depth, mounting_block_height)
)

# Add central cylindrical hub on top of mounting block
hub_base_z = plate_thickness + mounting_block_height
result = result.union(
    cq.Workplane("XY")
    .workplane(offset=hub_base_z)
    .circle(hub_outer_diameter / 2)
    .extrude(hub_height)
)

# Subtract inner bore from central hub
result = result.cut(
    cq.Workplane("XY")
    .workplane(offset=hub_base_z)
    .circle(hub_inner_diameter / 2)
    .extrude(hub_height + 0.1)  # Slightly deeper to ensure clean cut
)

# Add two side support cylinders (positioned along X-axis, symmetric about Y)
# Positioned at edges of mounting block, extending outward
support_x_offset = mounting_block_width / 2 + support_cylinder_diameter / 4
support_y_position = 0

for x_pos in [-support_x_offset, support_x_offset]:
    result = result.union(
        cq.Workplane("XY")
        .workplane(offset=plate_thickness)
        .center(x_pos, support_y_position)
        .circle(support_cylinder_diameter / 2)
        .extrude(support_cylinder_height)
    )

# Add four mounting holes in corners of base plate
hole_positions = [
    (plate_width/2 - hole_offset_from_edge, plate_depth/2 - hole_offset_from_edge),
    (-plate_width/2 + hole_offset_from_edge, plate_depth/2 - hole_offset_from_edge),
    (plate_width/2 - hole_offset_from_edge, -plate_depth/2 + hole_offset_from_edge),
    (-plate_width/2 + hole_offset_from_edge, -plate_depth/2 + hole_offset_from_edge)
]

for pos in hole_positions:
    result = result.cut(
        cq.Workplane("XY")
        .center(pos[0], pos[1])
        .circle(hole_diameter / 2)
        .extrude(plate_thickness + 0.1)  # Through entire plate thickness
    )

# Final result is ready for export