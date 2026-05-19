import cadquery as cq

# ---------------- Parameters ----------------
base_length = 120.0
base_width = 30.0
base_thickness = 2.5

side_wall_height = 18.0
side_wall_thickness = 2.5
side_hole_dia = 3.0
side_hole_offset_from_end = 10.0
side_hole_height = side_wall_height / 2

raised_block_width = 6.0
raised_block_height = 12.0
raised_block_length_small = 7.0
raised_block_length_large = 9.0
raised_block_separation = 4.0
raised_hole_dia = 1.5
raised_hole_depth = raised_block_width - 0.5  # Partial recess

# ---------------- Base Geometry ----------------
# Create the main sloped base plate with notch at one end
result = (
    cq.Workplane("XZ")
    .moveTo(0, 0)
    .lineTo(base_length, 0)
    .lineTo(base_length, -10)  # Slope down at far end
    .lineTo(base_length/2 - 4, 0)  # Slope back to notch center
    .lineTo(base_length/2 - 4, -5)  # Notch depth
    .lineTo(base_length/2 + 4, -5)
    .lineTo(base_length/2 + 4, 0)
    .close()
    .extrude(base_width)
)

# ---------------- Side Walls ----------------
# Add right side wall
result = (
    result.faces(">Y").workplane()
    .moveTo(0, 0)
    .lineTo(base_length, 0)
    .lineTo(base_length, side_wall_height)
    .lineTo(0, side_wall_height - 8)  # Sloped top edge
    .close()
    .extrude(side_wall_thickness)
)
# Add left side wall
result = (
    result.faces("<Y").workplane()
    .moveTo(0, 0)
    .lineTo(base_length, 0)
    .lineTo(base_length, side_wall_height)
    .lineTo(0, side_wall_height - 8)
    .close()
    .extrude(-side_wall_thickness)
)

# ---------------- Side Wall Holes ----------------
# Left wall hole
result = (
    result.faces("<Y").workplane()
    .moveTo(side_hole_offset_from_end, side_hole_height)
    .hole(side_hole_dia)
)
# Right wall hole
result = (
    result.faces(">Y").workplane()
    .moveTo(base_length - side_hole_offset_from_end, side_hole_height)
    .hole(side_hole_dia)
)

# ---------------- Raised Perforated Blocks ----------------
# Base of both blocks (common plane)
blocks_base = (
    result.faces(">Z[1]").workplane()  # Upper surface of the base plate
    .center(base_length * 0.6, 0)  # Position blocks near the right end
)
# Smaller left block
result = (
    blocks_base.center(-(raised_block_length_small/2 + raised_block_separation/2), 0)
    .rect(raised_block_length_small, raised_block_width)
    .extrude(raised_block_height)
)
# Larger right block
result = (
    blocks_base.center((raised_block_length_large/2 + raised_block_separation/2), 0)
    .rect(raised_block_length_large, raised_block_width)
    .extrude(raised_block_height)
)

# ---------------- Block Recessed Holes ----------------
# Drill from front face into both blocks
result = (
    result.faces(">Y").workplane(origin=(base_length * 0.6, 0, raised_block_height/2))
    .center(-(raised_block_length_small/2 + raised_block_separation/2), 0)
    .hole(raised_hole_dia, depth=raised_hole_depth)
    .center(raised_block_length_small + raised_block_separation, 0)
    .hole(raised_hole_dia, depth=raised_hole_depth)
)