import cadquery as cq

# Parameters
length = 100.0           # Overall outer length of the frame
width = 60.0             # Overall outer width of the frame
thickness = 2.0          # Thickness of the flat frame base
frame_width = 8.0        # Width of the solid frame border
boss_outer_dia = 6.0     # Outer diameter of the cylindrical bosses
boss_inner_dia = 3.0     # Inner diameter of the through holes
boss_height = 3.0        # Height of the bosses above the frame surface

# Calculate the positions for the bosses (centered on the frame corners)
x_pos = (length / 2.0) - (frame_width / 2.0)
y_pos = (width / 2.0) - (frame_width / 2.0)
boss_positions = [
    (x_pos, y_pos),
    (-x_pos, y_pos),
    (x_pos, -y_pos),
    (-x_pos, -y_pos)
]

# 1. Create the rectangular base frame with the center cutout
base_frame = (
    cq.Workplane("XY")
    .rect(length, width)
    .rect(length - (2 * frame_width), width - (2 * frame_width))
    .extrude(thickness)
)

# 2. Add the solid cylindrical bosses on the top face of the frame
frame_with_bosses = (
    base_frame.faces(">Z").workplane()
    .pushPoints(boss_positions)
    .circle(boss_outer_dia / 2.0)
    .extrude(boss_height)
)

# 3. Cut the mounting holes through the bosses and the base frame
result = (
    frame_with_bosses.faces(">Z").workplane()
    .pushPoints(boss_positions)
    .hole(boss_inner_dia)
)