import cadquery as cq

# ----------------------
# Parameters (estimated based on proportional observation)
# ----------------------
# Outer overall dimensions
outer_length = 120.0
outer_width = 60.0
outer_height = 30.0

# Wall and base thickness
wall_thickness = 2.0
base_thickness = 2.0

# Corner mounting boss features
corner_boss_radius = 3.0
corner_hole_diameter = 2.5
corner_hole_depth = 4.0  # Blind hole for fasteners from the top

# Internal support boss (center bottom)
center_boss_radius = 2.5
center_boss_height = 6.0  # Extends up from base, lower than box top
center_hole_diameter = 2.0
center_hole_depth = 4.0

# ----------------------
# Modeling Steps
# ----------------------
# 1. Create outer solid box base
result = (
    cq.Workplane("XY")
    .box(outer_length, outer_width, outer_height)
)

# 2. Cut out internal cavity to form hollow enclosure
inner_length = outer_length - 2 * wall_thickness
inner_width = outer_width - 2 * wall_thickness
inner_depth = outer_height - base_thickness

result = (
    result.faces(">Z")  # Select top face
    .workplane()
    .rect(inner_length, inner_width)
    .cutBlind(-inner_depth)  # Cut down into the box
)

# 3. Add corner mounting bosses with rounded outer profile
boss_z_height = inner_depth  # Bosses go up to top edge of box
# Define corner points relative to origin (box center)
corner_points = [
    (outer_length/2 - wall_thickness - corner_boss_radius, outer_width/2 - wall_thickness - corner_boss_radius),
    (-outer_length/2 + wall_thickness + corner_boss_radius, outer_width/2 - wall_thickness - corner_boss_radius),
    (-outer_length/2 + wall_thickness + corner_boss_radius, -outer_width/2 + wall_thickness + corner_boss_radius),
    (outer_length/2 - wall_thickness - corner_boss_radius, -outer_width/2 + wall_thickness + corner_boss_radius)
]

result = (
    result.faces("<Z[1]")  # Select the inner bottom face of the cavity
    .workplane()
    .pushPoints(corner_points)
    .circle(corner_boss_radius)
    .extrude(boss_z_height)  # Extrude boss to top of box
)

# 4. Add blind screw holes to corner bosses
result = (
    result.faces(">Z")
    .workplane()
    .pushPoints(corner_points)
    .hole(corner_hole_diameter, depth=corner_hole_depth)
)

# 5. Add center internal support boss
result = (
    result.faces("<Z[1]")  # Inner bottom face again
    .workplane()
    .circle(center_boss_radius)
    .extrude(center_boss_height)
)

# 6. Add blind hole to center boss
result = (
    result.faces(">Z")
    .workplane()
    .hole(center_hole_diameter, depth=center_hole_depth)
)