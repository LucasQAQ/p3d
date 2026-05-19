import cadquery as cq

# Parameters
base_width = 100.0  # Width of the base plate
base_length = 80.0  # Length of the base plate
base_height = 5.0   # Thickness of the base plate
wall_height = 30.0  # Height of the surrounding walls
wall_thickness = 3.0  # Thickness of the walls
flange_width = 5.0  # Width of the bottom flange
flange_height = 2.0  # Height of the bottom flange
pillar_diameter = 8.0  # Diameter of the cylindrical pillars
pillar_height = 20.0  # Height of the pillars above the base
pillar_offset = 10.0  # Distance from edges to pillar centers

# Create the base plate with bottom flange
result = (
    cq.Workplane("XY")
    # Create the main base plate
    .box(base_width, base_length, base_height)
    # Add the bottom flange (wider than base)
    .faces("<Z").workplane()
    .rect(base_width + 2*flange_width, base_length + 2*flange_width)
    .extrude(flange_height)
    # Create the walls by offsetting inward
    .faces(">Z").workplane()
    .rect(base_width, base_length)
    .rect(base_width - 2*wall_thickness, base_length - 2*wall_thickness)
    .workplane(offset=wall_height)
    .rect(base_width - 2*wall_thickness, base_length - 2*wall_thickness)
    .loft(combine=True)
)

# Add the four cylindrical pillars
# Calculate positions for pillars in each corner
pillar_positions = [
    (base_width/2 - pillar_offset, base_length/2 - pillar_offset),
    (-base_width/2 + pillar_offset, base_length/2 - pillar_offset),
    (base_width/2 - pillar_offset, -base_length/2 + pillar_offset),
    (-base_width/2 + pillar_offset, -base_length/2 + pillar_offset)
]

# Create pillars at each position
for pos in pillar_positions:
    result = (
        result
        .faces(">Z").workplane()
        .center(pos[0], pos[1])
        .circle(pillar_diameter/2)
        .extrude(pillar_height)
    )