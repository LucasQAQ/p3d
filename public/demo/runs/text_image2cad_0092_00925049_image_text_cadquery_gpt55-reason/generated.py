import cadquery as cq

# Parameters
base_length = 150.0
base_width = 36.0
base_thickness = 5.0

wall_thickness = 4.0
wall_height = 34.0

end_hole_diameter = 6.0
end_hole_offset_from_end = 22.0
end_hole_height = 20.0

raised_block_length = 18.0
raised_block_width = 22.0
raised_block_height = 24.0
raised_block_center_x = 8.0

small_hole_diameter = 4.0
small_hole_height = 16.0
small_hole_spacing_x = 10.0
small_hole_depth = 2.0

edge_chamfer = 0.8

# Create the bottom channel base
base = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
)

# Add the two upright long side walls along opposite long edges
left_wall = (
    cq.Workplane("XY")
    .center(0, -base_width / 2 + wall_thickness / 2)
    .box(base_length, wall_thickness, wall_height)
    .translate((0, 0, base_thickness / 2 + wall_height / 2))
)

right_wall = (
    cq.Workplane("XY")
    .center(0, base_width / 2 - wall_thickness / 2)
    .box(base_length, wall_thickness, wall_height)
    .translate((0, 0, base_thickness / 2 + wall_height / 2))
)

# Add raised central perforated feature on the upper face of the base
raised_block = (
    cq.Workplane("XY")
    .center(raised_block_center_x, 0)
    .box(raised_block_length, raised_block_width, raised_block_height)
    .translate((0, 0, base_thickness / 2 + raised_block_height / 2))
)

# Union all solid material into one body
result = base.union(left_wall).union(right_wall).union(raised_block)

# Cut round through-holes in each long side wall near the same end
for y_pos in (
    -base_width / 2 + wall_thickness / 2,
    base_width / 2 - wall_thickness / 2,
):
    result = (
        result
        .faces(">Y" if y_pos > 0 else "<Y")
        .workplane(centerOption="CenterOfMass")
        .center(-base_length / 2 + end_hole_offset_from_end, end_hole_height - wall_height / 2)
        .hole(end_hole_diameter)
    )

# Add two shallow circular recesses in the raised feature
# These are cut only partially into the raised material, creating a shallower depth tier.
for x_offset in (-small_hole_spacing_x / 2, small_hole_spacing_x / 2):
    result = (
        result
        .faces(">Y")
        .workplane(centerOption="CenterOfMass")
        .center(raised_block_center_x + x_offset, small_hole_height - wall_height / 2)
        .circle(small_hole_diameter / 2)
        .cutBlind(-small_hole_depth)
    )

# Lightly break sharp exposed edges to match the rendered mechanical style
result = result.edges("|Z or >Z").chamfer(edge_chamfer)