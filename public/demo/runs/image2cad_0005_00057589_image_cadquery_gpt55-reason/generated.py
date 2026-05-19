import cadquery as cq

# -----------------------------------------------------------------------------
# Parameters
# -----------------------------------------------------------------------------
# Overall enclosure dimensions (estimated from image proportions)
outer_length = 120.0
outer_width = 50.0
outer_height = 28.0

# Wall and floor dimensions
wall_thickness = 4.0
bottom_thickness = 3.0

# Top rim / lip detail
rim_width = 2.0
rim_depth = 1.2

# Corner screw bosses
boss_radius = 5.0
boss_hole_radius = 1.8
boss_height = outer_height - bottom_thickness
boss_offset = 7.0

# Small internal standoff / peg near center
standoff_radius = 2.2
standoff_hole_radius = 1.0
standoff_height = 6.0
standoff_x = 12.0
standoff_y = -8.0

# Edge treatment
outer_edge_fillet = 0.6
inner_edge_fillet = 0.5

# -----------------------------------------------------------------------------
# Derived dimensions
# -----------------------------------------------------------------------------
inner_length = outer_length - 2.0 * wall_thickness
inner_width = outer_width - 2.0 * wall_thickness
cavity_depth = outer_height - bottom_thickness

boss_positions = [
    (-outer_length / 2 + boss_offset, -outer_width / 2 + boss_offset),
    (-outer_length / 2 + boss_offset, outer_width / 2 - boss_offset),
    (outer_length / 2 - boss_offset, -outer_width / 2 + boss_offset),
    (outer_length / 2 - boss_offset, outer_width / 2 - boss_offset),
]

# -----------------------------------------------------------------------------
# Create the main open rectangular enclosure
# -----------------------------------------------------------------------------
# Start with a solid rectangular block and remove the inner cavity from the top.
enclosure = (
    cq.Workplane("XY")
    .box(outer_length, outer_width, outer_height, centered=(True, True, False))
    .edges("|Z")
    .fillet(outer_edge_fillet)
)

# Cut the hollow cavity, leaving side walls and a bottom floor.
enclosure = (
    enclosure
    .faces(">Z")
    .workplane()
    .rect(inner_length, inner_width)
    .cutBlind(-cavity_depth)
)

# -----------------------------------------------------------------------------
# Add a shallow inset top rim / ledge just inside the outer wall
# -----------------------------------------------------------------------------
# This creates the visual stepped lip around the top opening.
rim_cut_length = inner_length + 2.0 * rim_width
rim_cut_width = inner_width + 2.0 * rim_width

enclosure = (
    enclosure
    .faces(">Z")
    .workplane()
    .rect(rim_cut_length, rim_cut_width)
    .rect(inner_length, inner_width)
    .cutBlind(-rim_depth)
)

# -----------------------------------------------------------------------------
# Add four internal corner screw bosses
# -----------------------------------------------------------------------------
# The image shows rounded vertical pillars in the inside corners with through holes.
bosses = cq.Workplane("XY")

for x_pos, y_pos in boss_positions:
    bosses = (
        bosses
        .pushPoints([(x_pos, y_pos)])
        .circle(boss_radius)
        .extrude(boss_height)
        .pushPoints([(x_pos, y_pos)])
        .circle(boss_hole_radius)
        .cutBlind(-boss_height)
    )

enclosure = enclosure.union(bosses)

# -----------------------------------------------------------------------------
# Add small open relief notches near the corner bosses on the top rim
# -----------------------------------------------------------------------------
# These semicircular scallops approximate the small cutouts visible near the screws.
notch_radius = 3.0
notch_depth = 2.0

notch_locations = [
    (-outer_length / 2 + boss_offset + 5.0, -outer_width / 2 + wall_thickness),
    (outer_length / 2 - boss_offset - 5.0, outer_width / 2 - wall_thickness),
    (-outer_length / 2 + boss_offset + 5.0, outer_width / 2 - wall_thickness),
    (outer_length / 2 - boss_offset - 5.0, -outer_width / 2 + wall_thickness),
]

for x_pos, y_pos in notch_locations:
    enclosure = (
        enclosure
        .faces(">Z")
        .workplane()
        .center(x_pos, y_pos)
        .circle(notch_radius)
        .cutBlind(-notch_depth)
    )

# -----------------------------------------------------------------------------
# Add a small internal cylindrical standoff near the floor
# -----------------------------------------------------------------------------
# A short peg is visible on the inside bottom, slightly off-center.
standoff = (
    cq.Workplane("XY")
    .center(standoff_x, standoff_y)
    .circle(standoff_radius)
    .extrude(bottom_thickness + standoff_height)
    .faces(">Z")
    .workplane()
    .circle(standoff_hole_radius)
    .cutBlind(-standoff_height)
)

enclosure = enclosure.union(standoff)

# -----------------------------------------------------------------------------
# Apply small fillets to interior upper edges for a molded-plastic appearance
# -----------------------------------------------------------------------------
try:
    enclosure = enclosure.edges(">Z").fillet(inner_edge_fillet)
except Exception:
    pass

# -----------------------------------------------------------------------------
# Final result
# -----------------------------------------------------------------------------
result = enclosure