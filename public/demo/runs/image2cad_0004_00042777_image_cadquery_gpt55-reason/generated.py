import cadquery as cq

# -----------------------------
# Parameters (estimated from image)
# -----------------------------

# Main base plate: long rectangular bar with two through holes
base_length = 120.0
base_width = 24.0
base_thickness = 10.0

# Hole pattern on base plate
hole_diameter = 7.0
hole_offset_from_ends = 22.0

# Raised transverse block crossing near one end of the base
cross_block_length = 58.0      # Along X direction
cross_block_width = 24.0       # Along Y direction
cross_block_height = 14.0
cross_block_center_x = 28.0    # Offset toward one end of the base

# Upright rectangular sleeve/tube mounted on the cross block
tube_outer_width = 28.0        # Along X
tube_outer_depth = 24.0        # Along Y
tube_height = 42.0
tube_wall_thickness = 4.0

# Position of upright tube
tube_center_x = cross_block_center_x
tube_center_y = 0.0

# Small circular side hole/plug visible on right face of upright
side_hole_diameter = 4.0
side_hole_depth = 2.5
side_hole_z = base_thickness + cross_block_height + tube_height * 0.45

# General placement
base_z = base_thickness / 2.0
cross_block_z = base_thickness + cross_block_height / 2.0
tube_z = base_thickness + cross_block_height + tube_height / 2.0

# -----------------------------
# Create main base plate
# -----------------------------
base = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_thickness)
)

# Add two circular through holes in the base plate
base = (
    base.faces(">Z")
    .workplane()
    .pushPoints([
        (-base_length / 2 + hole_offset_from_ends, 0),
        ( base_length / 2 - hole_offset_from_ends, 0),
    ])
    .hole(hole_diameter)
)

# -----------------------------
# Create raised transverse block
# -----------------------------
# This block sits on top of the base and runs across it,
# forming the upper stepped support visible behind the upright.
cross_block = (
    cq.Workplane("XY")
    .transformed(offset=(cross_block_center_x, 0, cross_block_z))
    .box(cross_block_length, cross_block_width, cross_block_height)
)

# -----------------------------
# Create upright hollow rectangular tube
# -----------------------------
# The image shows an open-top rectangular sleeve with thin walls.
tube_outer = (
    cq.Workplane("XY")
    .transformed(offset=(tube_center_x, tube_center_y, tube_z))
    .box(tube_outer_width, tube_outer_depth, tube_height)
)

# Hollow out the tube from the top, leaving an open rectangular cavity.
tube = (
    tube_outer.faces(">Z")
    .workplane()
    .rect(
        tube_outer_width - 2 * tube_wall_thickness,
        tube_outer_depth - 2 * tube_wall_thickness
    )
    .cutBlind(-tube_height + tube_wall_thickness)
)

# Add a shallow circular feature on the visible side face of the upright.
# This represents the small round hole/plug visible in the drawing.
side_hole = (
    cq.Workplane("YZ")
    .transformed(offset=(
        tube_center_x + tube_outer_width / 2.0,
        tube_center_y,
        side_hole_z
    ))
    .circle(side_hole_diameter / 2.0)
    .extrude(-side_hole_depth)
)

tube = tube.cut(side_hole)

# -----------------------------
# Combine all solid features
# -----------------------------
result = base.union(cross_block).union(tube)