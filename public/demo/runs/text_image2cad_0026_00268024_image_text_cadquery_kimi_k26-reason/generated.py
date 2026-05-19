import cadquery as cq

# Overall plate dimensions
plate_width = 100.0
plate_depth = 100.0
base_thickness = 5.0

# Central rectangular cutout
cutout_width = 60.0
cutout_depth = 60.0

# Collar parameters
collar_outer_radius = 8.0
collar_height = 4.0
collar_hole_radius = 3.5

# Collar corner positions (inset from edges)
corner_inset = 18.0

# Build the base plate with central cutout
base = (
    cq.Workplane("XY")
    .box(plate_width, plate_depth, base_thickness)
    .faces(">Z")
    .workplane()
    .rect(cutout_width, cutout_depth)
    .cutThruAll()
)

# Define collar center positions
collar_centers = [
    (-plate_width/2 + corner_inset, -plate_depth/2 + corner_inset),
    ( plate_width/2 - corner_inset, -plate_depth/2 + corner_inset),
    ( plate_width/2 - corner_inset,  plate_depth/2 - corner_inset),
    (-plate_width/2 + corner_inset,  plate_depth/2 - corner_inset),
]

# Add collars and cut their holes
result = base
for cx, cy in collar_centers:
    # Add raised collar
    result = (
        result
        .faces(">Z")
        .workplane()
        .moveTo(cx, cy)
        .circle(collar_outer_radius)
        .extrude(collar_height)
    )
    # Cut through-hole in collar and base
    result = (
        result
        .faces(">Z")
        .workplane()
        .moveTo(cx, cy)
        .circle(collar_hole_radius)
        .cutThruAll()
    )