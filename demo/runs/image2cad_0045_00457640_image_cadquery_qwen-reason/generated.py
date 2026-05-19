import cadquery as cq

# Parameters - estimated from image proportions
base_length = 80.0      # Overall length of base
base_width = 60.0       # Overall width of base  
base_height = 15.0      # Height of main base section
wall_thickness = 4.0    # Thickness of walls
pin_diameter = 6.0      # Diameter of cylindrical pins
pin_height = 25.0       # Height of pins above base top
pin_offset = 8.0        # Offset of pins from corners
lip_height = 3.0        # Height of bottom lip/flange
lip_extension = 2.0     # Extension of lip beyond base

# Create the main base with internal cavity
result = (
    cq.Workplane("XY")
    .box(base_length, base_width, base_height)
    # Create internal cavity by subtracting a smaller box
    .faces(">Z")
    .workplane()
    .rect(base_length - 2*wall_thickness, base_width - 2*wall_thickness)
    .extrude(-(base_height - wall_thickness))
)

# Add bottom lip/flange
lip = (
    cq.Workplane("XY")
    .box(
        base_length + 2*lip_extension, 
        base_width + 2*lip_extension, 
        lip_height
    )
    .translate((0, 0, -lip_height))
)
result = result.union(lip)

# Define pin positions (4 corners, offset inward)
pin_positions = [
    (base_length/2 - pin_offset - wall_thickness, base_width/2 - pin_offset - wall_thickness),
    (-base_length/2 + pin_offset + wall_thickness, base_width/2 - pin_offset - wall_thickness),
    (base_length/2 - pin_offset - wall_thickness, -base_width/2 + pin_offset + wall_thickness),
    (-base_length/2 + pin_offset + wall_thickness, -base_width/2 + pin_offset + wall_thickness)
]

# Add cylindrical pins at each corner
for x, y in pin_positions:
    pin = (
        cq.Workplane("XY")
        .circle(pin_diameter/2)
        .extrude(pin_height)
        .translate((x, y, base_height))
    )
    result = result.union(pin)

# Final result
result = result