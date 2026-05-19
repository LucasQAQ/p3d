import cadquery as cq

# Main enclosure dimensions
length = 120.0          # Overall length of the enclosure (X direction)
width = 60.0            # Overall width of the enclosure (Y direction)
height = 40.0           # Overall height of the enclosure (Z direction)
wall_thickness = 3.0    # Thickness of the enclosure walls
floor_thickness = 3.0   # Thickness of the enclosure floor

# Corner mounting boss parameters
boss_diameter = 8.0     # Diameter of the corner mounting bosses
boss_height = height - floor_thickness  # Bosses extend from floor to top edge
hole_diameter = 3.0     # Diameter of the through-hole in each boss
hole_depth = height     # Through-hole depth (full height)

# Central mounting post parameters
post_diameter = 10.0    # Diameter of the tall central mounting post
post_height = height - floor_thickness  # Post extends from floor to top edge
post_hole_diameter = 4.0  # Diameter of the hole in the central post
post_hole_depth = post_height  # Hole depth through the post

# Small center feature parameters
small_feature_diameter = 6.0   # Diameter of the small cylindrical feature on the floor
small_feature_height = 5.0     # Height of the small feature above the floor
small_feature_hole_diameter = 2.5  # Hole diameter in the small feature
small_feature_hole_depth = small_feature_height  # Hole depth through the feature

# Corner inset/chamfer parameters for the top edge lip
lip_recess = 1.5        # Amount the top outer edge is recessed inward (creates the lip detail)

# Build the main enclosure shell (hollow box)
# Start with a solid box, then shell it to create walls and floor
enclosure = (
    cq.Workplane("XY")
    .box(length, width, height, centered=False)  # Box with corner at origin
    .faces(">Z")  # Select the top face
    .shell(-wall_thickness)  # Shell inward to create hollow enclosure
)

# The shell operation leaves the bottom at Z=0, but we need to adjust floor thickness
# Actually, shell removes material from the selected face, creating walls of specified thickness
# We need to ensure the floor is the correct thickness by cutting if needed

# Re-approach: Build the hollow enclosure by creating the outer shape and subtracting inner
outer_box = cq.Workplane("XY").box(length, width, height, centered=False)
inner_box = (
    cq.Workplane("XY")
    .workplane(offset=floor_thickness)  # Start at floor thickness height
    .box(length - 2*wall_thickness, width - 2*wall_thickness, height - floor_thickness, centered=False)
    .translate((wall_thickness, wall_thickness, 0))  # Center the inner box
)

# Create the hollow shell by subtracting inner from outer
shell = outer_box.cut(inner_box)

# Create corner mounting bosses with through-holes
# Boss positions are at the four corners, inset by wall thickness
corner_inset = wall_thickness + boss_diameter/2  # Position from outer edge

# Define corner positions (bottom-left, bottom-right, top-left, top-right in XY plane)
corner_positions = [
    (corner_inset, corner_inset),                           # Near origin corner
    (length - corner_inset, corner_inset),                  # Far X corner
    (corner_inset, width - corner_inset),                   # Far Y corner
    (length - corner_inset, width - corner_inset)           # Far XY corner
]

# Create all four corner bosses
corner_bosses = cq.Workplane("XY")
for pos in corner_positions:
    corner_bosses = (
        corner_bosses
        .workplane(offset=floor_thickness)  # Start at floor level
        .moveTo(pos[0], pos[1])
        .circle(boss_diameter/2)
        .extrude(boss_height)  # Extrude up to near top
    )

# Create through-holes in corner bosses
corner_holes = cq.Workplane("XY")
for pos in corner_positions:
    corner_holes = (
        corner_holes
        .workplane(offset=0)  # Start from bottom
        .moveTo(pos[0], pos[1])
        .circle(hole_diameter/2)
        .extrude(hole_depth)  # Full height through-hole
    )

# Create the central tall mounting post
central_post = (
    cq.Workplane("XY")
    .workplane(offset=floor_thickness)
    .moveTo(length/2, width/2)
    .circle(post_diameter/2)
    .extrude(post_height)
)

# Create hole in central post
central_post_hole = (
    cq.Workplane("XY")
    .workplane(offset=floor_thickness)
    .moveTo(length/2, width/2)
    .circle(post_hole_diameter/2)
    .extrude(post_hole_depth)
)

# Create small cylindrical feature on the floor (offset from center toward one end)
small_feature_offset_x = 15.0  # Offset from center in X direction
small_feature = (
    cq.Workplane("XY")
    .workplane(offset=floor_thickness)
    .moveTo(length/2 + small_feature_offset_x, width/2)
    .circle(small_feature_diameter/2)
    .extrude(small_feature_height)
)

# Create hole in small feature
small_feature_hole = (
    cq.Workplane("XY")
    .workplane(offset=floor_thickness)
    .moveTo(length/2 + small_feature_offset_x, width/2)
    .circle(small_feature_hole_diameter/2)
    .extrude(small_feature_hole_depth)
)

# Create the top lip recess by cutting a thin layer from the outer top edge
# This creates the visible inset/lip around the top perimeter
lip_cut = (
    cq.Workplane("XY")
    .workplane(offset=height - lip_recess)
    .box(length + 0.1, width + 0.1, lip_recess + 0.1, centered=False)  # Slightly larger to ensure full cut
    .translate((-0.05, -0.05, 0))  # Center the slight oversize
)

# Subtract the inner portion to leave only the outer lip recess
# Actually, we need to cut only the outer wall top edge, not the inner
# Create a shape that represents the lip recess area (outer ring at top)
lip_outer = (
    cq.Workplane("XY")
    .workplane(offset=height - lip_recess)
    .box(length, width, lip_recess, centered=False)
)
lip_inner = (
    cq.Workplane("XY")
    .workplane(offset=height - lip_recess)
    .box(length - 2*lip_recess, width - 2*lip_recess, lip_recess + 0.1, centered=False)
    .translate((lip_recess, lip_recess, 0))
)
lip_recess_shape = lip_outer.cut(lip_inner)

# Combine all components
# Start with the shell
result = shell

# Add corner bosses
result = result.union(corner_bosses)

# Add central post
result = result.union(central_post)

# Add small feature
result = result.union(small_feature)

# Subtract all holes
result = result.cut(corner_holes)
result = result.cut(central_post_hole)
result = result.cut(small_feature_hole)

# Apply the top lip recess
result = result.cut(lip_recess_shape)