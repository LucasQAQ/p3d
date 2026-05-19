import cadquery as cq

# =============================================================================
# PARAMETERS
# =============================================================================

# Base plate dimensions
base_width = 80.0           # Overall width of the base plate (X direction)
base_depth = 70.0           # Overall depth of the base plate (Y direction)
base_thickness = 5.0        # Thickness of the base plate

# Corner radius for the rounded front-left corner
corner_radius = 25.0        # Radius of the large circular cutout/corner

# Chamfer/cut dimensions for the angled front-right edge
chamfer_depth = 25.0        # How far back the angled cut goes from the front

# Cylinder boss parameters (three tall standoffs with through-holes)
boss_outer_diameter = 10.0  # Outer diameter of tall cylindrical bosses
boss_height = 30.0          # Height of tall bosses above base plate
boss_hole_diameter = 4.0    # Through-hole diameter in tall bosses

# Short standoff parameters (two shorter cylindrical features)
short_boss_diameter = 10.0  # Outer diameter of short bosses
short_boss_height = 8.0     # Height of short bosses above base plate
short_boss_hole_diameter = 4.0  # Through-hole diameter in short bosses

# Positioning of features (relative to base plate geometry)
# Tall boss positions (three corners of the triangular arrangement)
boss1_x = -20.0             # Front-left tall boss X position
boss1_y = -15.0             # Front-left tall boss Y position

boss2_x = 25.0              # Right tall boss X position
boss2_y = -15.0             # Right tall boss Y position

boss3_x = -20.0             # Back tall boss X position
boss3_y = 20.0              # Back tall boss Y position

# Short standoff positions (clustered near center)
short_boss1_x = -5.0        # First short boss X position
short_boss1_y = 0.0         # First short boss Y position

short_boss2_x = 5.0         # Second short boss X position
short_boss2_y = 10.0        # Second short boss Y position

# =============================================================================
# BASE PLATE CONSTRUCTION
# =============================================================================

# Start with a rectangular base plate
base_plate = (
    cq.Workplane("XY")
    .box(base_width, base_depth, base_thickness)
    # Center the box on the origin in XY, but sit it on Z=0 (bottom face at Z=0)
    .translate((0, 0, base_thickness / 2))
)

# Create the rounded corner on the front-left (negative X, negative Y corner)
# We use a large cylinder to cut away the corner, creating the rounded profile
# The corner radius determines how much of the corner is rounded
corner_cutter = (
    cq.Workplane("XY")
    .circle(corner_radius)
    .extrude(base_thickness)
    .translate((-base_width / 2 + corner_radius, -base_depth / 2 + corner_radius, 0))
)

# The rounded corner is achieved by intersecting with a large cylinder
# Actually, looking at the image more carefully: it's a circular cutout on the left side
# Let's reinterpret: the left side has a large semicircular/circular indentation

# Rebuild base plate with proper geometry based on visual analysis
# The base appears to be a pentagon-like shape with:
# - A straight back edge
# - A straight right edge  
# - An angled front-right edge
# - A rounded/circular left edge with a cutout

# Create the base plate using a sketch/profile approach
# Start from a rectangle and modify corners

# Define the base plate outline as a polygon with rounded corner
# Points going around: back-right, front-right (chamfered), front-left (rounded), back-left
# Actually, let's use a cleaner approach: start with rectangle, apply cuts

# Re-interpretation: The base has a large circular hole/cutout on the left side
# and an angled front edge, with the back and right edges straight

base_plate = (
    cq.Workplane("XY")
    .box(base_width, base_depth, base_thickness)
    .translate((0, 0, base_thickness / 2))
)

# Apply the large circular cutout on the left side (creates the rounded edge with hole)
# The cutout is positioned at the left edge, centered vertically
cutout_x = -base_width / 2 + corner_radius
cutout_y = 0

# Create the circular cutout through the base plate
base_plate = (
    base_plate
    .faces(">Z")  # Work on the top face
    .workplane()
    .pushPoints([(cutout_x, cutout_y)])
    .circle(corner_radius)
    .cutThruAll()
)

# Apply chamfer to the front-right corner to create the angled edge
# The chamfer removes the corner at (base_width/2, -base_depth/2)
# We need to cut from the front-right corner back along both edges

# Create a cutting wedge for the front-right chamfer
chamfer_cutter = (
    cq.Workplane("XY")
    .polyline([
        (base_width / 2, -base_depth / 2),                    # Front-right corner
        (base_width / 2 - chamfer_depth, -base_depth / 2),    # Along front edge
        (base_width / 2, -base_depth / 2 + chamfer_depth),    # Along right edge
    ])
    .close()
    .extrude(base_thickness)
    .translate((0, 0, 0))
)

# Actually, re-analyzing the image: the shape is more complex
# Let me rebuild with a cleaner polygon approach based on visual proportions

# The base appears to be approximately:
# - Back edge: straight, full width
# - Right edge: straight, full depth  
# - Front edge: angled from front-right going back-left
# - Left edge: has a large semicircular protrusion with a hole cut through

# Let's define points for the base outline (counter-clockwise from back-right)
# Adjusted based on visual proportions from the image

# Rebuild with proper polygon
base_outline = (
    cq.Workplane("XY")
    .polyline([
        (base_width / 2, base_depth / 2),                      # Back-right
        (base_width / 2, -base_depth / 2 + chamfer_depth),     # Right edge down to chamfer start
        (base_width / 2 - chamfer_depth, -base_depth / 2),     # Chamfer point
        (-base_width / 2 + corner_radius * 0.5, -base_depth / 2),  # Front edge to curve start
    ])
)

# For the left side with the circular feature, we need to handle it differently
# The image shows a large circular ring/boss on the left side that's part of the base

# Let me try yet another interpretation: The base is rectangular with:
# 1. A large through-hole on the left (creates the C-shaped appearance)
# 2. An angled cut on the front-right
# 3. Various cylindrical bosses on top

# Final interpretation based on careful analysis:
# Rectangular base with large circular hole on left edge, angled front-right corner

# Create base rectangle
base = cq.Workplane("XY").box(base_width, base_depth, base_thickness)

# Position so bottom is at Z=0
base = base.translate((0, 0, base_thickness / 2))

# Cut the large circular hole on the left side
# The hole is positioned near the left edge, creating a C-shaped or U-shaped profile
hole_center_x = -base_width / 2 + corner_radius
hole_center_y = 0

base = (
    base
    .faces(">Z")
    .workplane()
    .pushPoints([(hole_center_x, hole_center_y)])
    .circle(corner_radius - 5)  # Slightly smaller than corner radius for ring effect
    .cutThruAll()
)

# Cut the angled front-right corner
# Create a triangular prism to cut off the corner
corner_cut = (
    cq.Workplane("XY")
    .polyline([
        (base_width / 2, -base_depth / 2),
        (base_width / 2, -base_depth / 2 + chamfer_depth),
        (base_width / 2 - chamfer_depth, -base_depth / 2),
    ])
    .close()
    .extrude(base_thickness)
)

base = base - corner_cut.translate((0, 0, 0))

# Actually the corner cut needs to be positioned properly
# Let me rebuild more carefully

# =============================================================================
# CLEAN REBUILD
# =============================================================================

# Define the base plate as a solid with proper cuts

# Start with full rectangle
result = cq.Workplane("XY").box(base_width, base_depth, base_thickness)
result = result.translate((0, 0, base_thickness / 2))

# Apply large circular through-hole on left side
# This creates the characteristic rounded left edge with opening
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(-base_width / 2 + corner_radius, 0)])
    .circle(corner_radius * 0.8)  # Hole diameter slightly less than full corner radius
    .cutThruAll()
)

# Apply front-right corner chamfer/angle cut
# Define cutting shape as a right triangle prism
chamfer_shape = (
    cq.Workplane("XY")
    .polyline([
        (base_width / 2, -base_depth / 2),                    # Corner point
        (base_width / 2, -base_depth / 2 + chamfer_depth),    # Up right edge
        (base_width / 2 - chamfer_depth * 1.5, -base_depth / 2),  # Left along front (extended)
    ])
    .close()
    .extrude(base_thickness)
)

result = result - chamfer_shape

# =============================================================================
# ADD TALL CYLINDRICAL BOSSES (three standoffs with through-holes)
# =============================================================================

# Tall boss 1: Front-left position
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(boss1_x, boss1_y)])
    .circle(boss_outer_diameter / 2)
    .extrude(boss_height)
)

# Tall boss 2: Right position
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(boss2_x, boss2_y)])
    .circle(boss_outer_diameter / 2)
    .extrude(boss_height)
)

# Tall boss 3: Back position
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(boss3_x, boss3_y)])
    .circle(boss_outer_diameter / 2)
    .extrude(boss_height)
)

# =============================================================================
# ADD SHORT CYLINDRICAL BOSSES (two shorter standoffs with through-holes)
# =============================================================================

# Short boss 1: Near center
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(short_boss1_x, short_boss1_y)])
    .circle(short_boss_diameter / 2)
    .extrude(short_boss_height)
)

# Short boss 2: Near center-back
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(short_boss2_x, short_boss2_y)])
    .circle(short_boss_diameter / 2)
    .extrude(short_boss_height)
)

# =============================================================================
# DRILL THROUGH-HOLES IN ALL BOSSES
# =============================================================================

# Drill holes in tall bosses (from top, through boss and base)
# We need to select the top faces of each boss and drill down

# Hole in tall boss 1
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(boss1_x, boss1_y)])
    .circle(boss_hole_diameter / 2)
    .cutThruAll()
)

# Hole in tall boss 2
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(boss2_x, boss2_y)])
    .circle(boss_hole_diameter / 2)
    .cutThruAll()
)

# Hole in tall boss 3
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(boss3_x, boss3_y)])
    .circle(boss_hole_diameter / 2)
    .cutThruAll()
)

# Hole in short boss 1
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(short_boss1_x, short_boss1_y)])
    .circle(short_boss_hole_diameter / 2)
    .cutThruAll()
)

# Hole in short boss 2
result = (
    result
    .faces(">Z")
    .workplane()
    .pushPoints([(short_boss2_x, short_boss2_y)])
    .circle(short_boss_hole_diameter / 2)
    .cutThruAll()
)

# =============================================================================
# ADD RING FEATURE AROUND LARGE HOLE (visible in image as raised lip)
# =============================================================================

# The image shows a raised ring/ledge around the large circular opening on the left
# This appears to be a partial ring or full ring around the hole

ring_outer_radius = corner_radius + 2  # Slightly larger than hole
ring_inner_radius = corner_radius - 2   # Slightly smaller, creates lip
ring_height = 3.0                       # Small raised feature

# Create ring around the large hole
# Position at the hole location
ring = (
    cq.Workplane("XY")
    .pushPoints([(-base_width / 2 + corner_radius, 0)])
    .circle(ring_outer_radius)
    .circle(ring_inner_radius)
    .extrude(ring_height)
)

result = result + ring.translate((0, 0, base_thickness))

# The ring might only be partial (semicircle on outer edge)
# Let me adjust - the image shows it on the outer edge of the hole

# Actually, re-looking: the ring appears to be a full or nearly full circle
# around the large through-hole, sitting on top of the base plate

# =============================================================================
# FINAL CLEANUP AND VALIDATION
# =============================================================================

# Ensure the model is a solid and properly merged
# The result should be a single unified solid

# No additional operations needed - the model is complete

# Export the final result
# (The variable 'result' is already defined as required)