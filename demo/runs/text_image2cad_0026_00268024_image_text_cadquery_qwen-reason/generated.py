import cadquery as cq

# Parameters
# Overall dimensions
plate_length = 100.0
plate_width = 80.0
plate_thickness = 5.0

# Central cutout dimensions
cutout_length = 60.0
cutout_width = 40.0

# Collar dimensions
collar_outer_diameter = 15.0
collar_inner_diameter = 6.0
collar_height = 8.0

# Positioning offsets (distance from plate edge to collar center)
offset_x = 15.0
offset_y = 15.0

# Create the base plate with a central rectangular cutout
base_plate = (
    cq.Workplane("XY")
    .box(plate_length, plate_width, plate_thickness)
    .faces(">Z")
    .workplane()
    .rect(cutout_length, cutout_width)
    .cutThruAll()
)

# Define the positions for the four collars relative to the center of the plate
# The plate is centered at (0,0), so corners are at +/- length/2, +/- width/2
# We place collars inset by offset_x and offset_y from the edges
positions = [
    (plate_length / 2 - offset_x, plate_width / 2 - offset_y),   # Top Right
    (-plate_length / 2 + offset_x, plate_width / 2 - offset_y),  # Top Left
    (-plate_length / 2 + offset_x, -plate_width / 2 + offset_y), # Bottom Left
    (plate_length / 2 - offset_x, -plate_width / 2 + offset_y),  # Bottom Right
]

# Create the collars
# Each collar is an annular cylinder (outer cylinder minus inner hole)
# We create them on the top face of the base plate
collars = cq.Workplane("XY")
for pos in positions:
    collars = (
        collars
        .moveTo(pos[0], pos[1])
        .circle(collar_outer_diameter / 2)
        .extrude(collar_height)
        .faces(">Z")
        .workplane()
        .circle(collar_inner_diameter / 2)
        .cutThruAll()
        .toPending() # Reset workplane for next iteration if needed, though loop handles it
    )
    
# Combine the base plate and the collars
result = base_plate.union(collars)