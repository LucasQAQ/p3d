import cadquery as cq

# Parameters
base_width = 80.0
base_height = 80.0
base_thickness = 4.0
frame_width = 10.0  # Width of the rectangular border
collar_outer_diameter = 12.0
collar_inner_diameter = 5.0
collar_height = 6.0  # Total height from bottom of base to top of collar
hole_offset = 8.0  # Distance from collar center to nearest edge

# Calculate derived parameters
inner_width = base_width - 2 * frame_width
inner_height = base_height - 2 * frame_width
collar_protrusion = collar_height - base_thickness  # How much collar rises above base

# Create the rectangular frame base
result = (
    cq.Workplane("XY")
    .box(base_width, base_height, base_thickness)
    .faces(">Z")
    .workplane()
    .rect(inner_width, inner_height, forConstruction=True)
    .vertices()
    .hole(collar_inner_diameter)  # Create through holes at collar positions
)

# Add the four raised collars
# Position collars at the corners of the frame, inset from edges
collar_positions = [
    (base_width/2 - hole_offset, base_height/2 - hole_offset),
    (base_width/2 - hole_offset, -base_height/2 + hole_offset),
    (-base_width/2 + hole_offset, base_height/2 - hole_offset),
    (-base_width/2 + hole_offset, -base_height/2 + hole_offset)
]

for pos in collar_positions:
    result = (
        result
        .workplane(offset=base_thickness)
        .center(pos[0], pos[1])
        .circle(collar_outer_diameter/2)
        .circle(collar_inner_diameter/2)
        .extrude(collar_protrusion)
    )

# Cut the central rectangular opening through the entire base
result = (
    result
    .faces(">Z")
    .workplane()
    .rect(inner_width, inner_height)
    .cutThruAll()
)