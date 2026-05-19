import cadquery as cq

# Parameters - estimated from image proportions
outer_length = 120.0      # Overall length of the frame (long side)
outer_width = 80.0        # Overall width of the frame (short side)
frame_thickness = 8.0     # Thickness/width of the frame rails
plate_thickness = 3.0     # Thickness of the base plate
boss_height = 6.0         # Height of the cylindrical bosses
boss_outer_dia = 10.0     # Outer diameter of the bosses
boss_inner_dia = 4.0      # Inner diameter (hole) of the bosses

# Calculate inner dimensions for the rectangular cutout
inner_length = outer_length - 2 * frame_thickness
inner_width = outer_width - 2 * frame_thickness

# Create the base rectangular frame with a rectangular cutout
result = (
    cq.Workplane("XY")
    .box(outer_length, outer_width, plate_thickness)  # Base plate
    .faces(">Z")
    .workplane()
    .rect(inner_length, inner_width)                  # Rectangle for cutout
    .cutThruAll()                                     # Cut through entire thickness
)

# Define boss positions at the four corners of the inner rectangle
# Bosses are centered on the frame rails at each corner
boss_positions = [
    (-inner_length/2 + frame_thickness/2, -inner_width/2 + frame_thickness/2),   # Bottom-left
    (inner_length/2 - frame_thickness/2, -inner_width/2 + frame_thickness/2),    # Bottom-right
    (inner_length/2 - frame_thickness/2, inner_width/2 - frame_thickness/2),     # Top-right
    (-inner_length/2 + frame_thickness/2, inner_width/2 - frame_thickness/2),    # Top-left
]

# Add cylindrical bosses at each corner position
for pos_x, pos_y in boss_positions:
    result = (
        result
        .faces(">Z")
        .workplane()
        .moveTo(pos_x, pos_y)
        .circle(boss_outer_dia / 2)
        .extrude(boss_height)
        .faces(">Z")
        .workplane()
        .hole(boss_inner_dia)
    )

# Final result
result = result