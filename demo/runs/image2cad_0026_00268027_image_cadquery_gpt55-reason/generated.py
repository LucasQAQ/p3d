import cadquery as cq

# Parameters
# Overall part dimensions estimated from the image
outer_length = 120.0
outer_width = 75.0
frame_thickness = 7.5
base_thickness = 3.0

# Inner rectangular opening dimensions
inner_length = outer_length - 2.0 * frame_thickness
inner_width = outer_width - 2.0 * frame_thickness

# Corner/edge treatment
outer_corner_radius = 0.8
inner_corner_radius = 0.8
edge_chamfer = 0.4

# Cylindrical mounting bosses
boss_diameter = 10.0
boss_height = 6.0
boss_hole_diameter = 3.2
boss_chamfer = 0.5

# Boss locations estimated from the image:
# two bosses near left-side corners, one near top long rail, one near right long rail
boss_edge_offset = 8.0
boss_positions = [
    (-outer_length / 2.0 + boss_edge_offset, -outer_width / 2.0 + boss_edge_offset),  # front-left corner
    (-outer_length / 2.0 + boss_edge_offset,  outer_width / 2.0 - boss_edge_offset),  # back-left corner
    (-outer_length / 2.0 + 45.0,              outer_width / 2.0 - boss_edge_offset),  # upper long rail
    ( outer_length / 2.0 - 22.0,             -outer_width / 2.0 + 18.0),              # right/front long rail
]

# Derived values
total_height = base_thickness + boss_height

# Create rectangular frame plate with central opening
outer_profile = (
    cq.Workplane("XY")
    .rect(outer_length, outer_width)
)

inner_profile = (
    cq.Workplane("XY")
    .rect(inner_length, inner_width)
)

frame = (
    cq.Workplane("XY")
    .rect(outer_length, outer_width)
    .rect(inner_length, inner_width)
    .extrude(base_thickness)
)

# Add subtle chamfers to top/bottom outside and opening edges
frame = (
    frame
    .edges("|Z")
    .chamfer(edge_chamfer)
)

# Add cylindrical bosses on top of the frame
bosses = (
    cq.Workplane("XY")
    .pushPoints(boss_positions)
    .circle(boss_diameter / 2.0)
    .extrude(total_height)
)

# Cut screw holes through the bosses and frame
boss_holes = (
    cq.Workplane("XY")
    .pushPoints(boss_positions)
    .circle(boss_hole_diameter / 2.0)
    .extrude(total_height + 1.0)
)

result = frame.union(bosses).cut(boss_holes)

# Chamfer boss top edges and hole rims for the small beveled detail visible in the image
result = (
    result
    .faces(">Z")
    .edges(cq.selectors.RadiusNthSelector(0))
    .chamfer(boss_chamfer)
)

# Final result
result = result.val()