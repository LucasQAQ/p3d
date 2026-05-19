import cadquery as cq

# Main tray parameters
tray_width = 80.0          # Overall width of the tray (X dimension)
tray_depth = 80.0          # Overall depth of the tray (Y dimension)
tray_height = 20.0         # Overall height of the tray walls
wall_thickness = 5.0       # Thickness of the tray walls
base_thickness = 5.0       # Thickness of the tray bottom

# Recessed floor parameters
floor_recess_depth = 3.0   # How much the inner floor is recessed below the top rim

# Bottom lip/rim parameters
bottom_lip_height = 2.0    # Height of the protruding lip at the bottom
bottom_lip_thickness = 2.0 # How far the lip protrudes outward from the wall

# Post parameters
post_diameter = 6.0        # Diameter of the cylindrical posts
post_height = 15.0         # Height of posts extending above the recessed floor
post_positions = [         # Relative positions of posts from center (estimated from image)
    (-25.0, -25.0),        # Back-left post
    (25.0, -25.0),         # Back-right post
    (-25.0, 25.0),         # Front-left post (actually appears to be front-right in iso view)
    (25.0, 25.0),          # Front-right post (actually appears to be front-left in iso view)
]

# Calculate inner dimensions
inner_width = tray_width - 2 * wall_thickness
inner_depth = tray_depth - 2 * wall_thickness

# Build the main outer block of the tray
tray = (
    cq.Workplane("XY")
    .box(tray_width, tray_depth, tray_height)
    # Center the box on the origin, then move it so bottom sits at Z=0
    .translate((0, 0, tray_height / 2))
)

# Create the hollow cavity by cutting from the top
# The cavity goes down to leave a base of base_thickness thickness
cavity = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)  # Start at the base thickness level
    .box(inner_width, inner_depth, tray_height)  # Inner cavity block
    .translate((0, 0, base_thickness + (tray_height - base_thickness) / 2))
)

# Subtract the cavity to create the hollow tray
tray = tray - cavity

# Create the recessed floor - the inner floor sits lower than the rim
# The rim height above the recessed floor
rim_height_above_floor = tray_height - base_thickness - floor_recess_depth

# Cut down the inner floor area to create the recess
# We need to remove material from the base_thickness level down to create the recess
floor_recess_cut = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)  # Start at original base level
    .box(inner_width, inner_depth, floor_recess_depth + 0.01)  # Slightly oversized for clean boolean
    .translate((0, 0, base_thickness + floor_recess_depth / 2))
)

# Actually, we need to rethink: the base is at Z=0 to base_thickness
# The recessed floor should be at Z = base_thickness - floor_recess_depth (lowered)
# So we cut a pocket in the base

# Recreate approach: build the tray with proper floor recess
# Start fresh with a clearer approach

# Main solid block
tray = (
    cq.Workplane("XY")
    .box(tray_width, tray_depth, tray_height)
    .translate((0, 0, tray_height / 2))
)

# Hollow out from top down to the recessed floor level
recessed_floor_z = base_thickness - floor_recess_depth  # Z level of the recessed floor

# Cavity from top down to just above the recessed floor
upper_cavity = (
    cq.Workplane("XY")
    .workplane(offset=recessed_floor_z)
    .box(inner_width, inner_depth, tray_height - recessed_floor_z + 0.01)
    .translate((0, 0, recessed_floor_z + (tray_height - recessed_floor_z) / 2))
)

tray = tray - upper_cavity

# Now we need the floor at the recessed level to be solid, but currently it's open
# Actually the cavity removed everything below. We need to add back the floor at recessed level

# Add the recessed floor
recessed_floor = (
    cq.Workplane("XY")
    .box(inner_width, inner_depth, 0.01)  # Thin floor at recessed level
    .translate((0, 0, recessed_floor_z + 0.005))
)

# Better approach: build step by step
# Bottom base layer (full thickness including recess space)
base_layer = (
    cq.Workplane("XY")
    .box(tray_width, tray_depth, base_thickness)
    .translate((0, 0, base_thickness / 2))
)

# Cut the recess pocket in the base layer
recess_pocket = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness - floor_recess_depth)
    .box(inner_width, inner_depth, floor_recess_depth + 0.01)
    .translate((0, 0, base_thickness - floor_recess_depth / 2))
)

base_with_recess = base_layer - recess_pocket

# Wall layer (from base_thickness to tray_height)
wall_height = tray_height - base_thickness
walls = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)
    .box(tray_width, tray_depth, wall_height)
    .translate((0, 0, base_thickness + wall_height / 2))
)

# Hollow out the walls
wall_cavity = (
    cq.Workplane("XY")
    .workplane(offset=base_thickness)
    .box(inner_width, inner_depth, wall_height + 0.01)
    .translate((0, 0, base_thickness + wall_height / 2))
)

walls = walls - wall_cavity

# Combine base and walls
tray = base_with_recess + walls

# Add bottom lip/rim that protrudes outward at the very bottom
bottom_lip = (
    cq.Workplane("XY")
    .box(tray_width + 2 * bottom_lip_thickness, 
         tray_depth + 2 * bottom_lip_thickness, 
         bottom_lip_height)
    .translate((0, 0, bottom_lip_height / 2))
)

# The lip should only be at the very bottom, so we need to make it a ring
# Actually looking at the image, it's a thin protrusion around the bottom edge
# Create by intersecting or just adding a thin extrusion

# Better: create the lip as a separate ring using a 2D profile and extrude
lip_profile = (
    cq.Workplane("XY")
    .rect(tray_width + 2 * bottom_lip_thickness, tray_depth + 2 * bottom_lip_thickness)
    .rect(tray_width, tray_depth)
    .extrude(bottom_lip_height)
    .translate((0, 0, 0))
)

tray = tray + lip_profile

# Add the four posts on the recessed floor
# Posts sit on the recessed floor level
post_base_z = base_thickness - floor_recess_depth

for px, py in post_positions:
    post = (
        cq.Workplane("XY")
        .circle(post_diameter / 2)
        .extrude(post_height)
        .translate((px, py, post_base_z))
    )
    tray = tray + post

# Final result
result = tray