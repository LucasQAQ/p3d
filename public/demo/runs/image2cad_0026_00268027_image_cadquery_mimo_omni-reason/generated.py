import cadquery as cq

# Parameters - estimated based on proportions in the image
frame_length = 100.0  # Overall length of the rectangular frame
frame_width = 70.0    # Overall width of the rectangular frame
frame_thickness = 2.0 # Thickness of the flat frame
wall_width = 10.0     # Width of the frame's walls
boss_diameter = 10.0  # Outer diameter of the cylindrical bosses
boss_height = 5.0     # Height of the cylindrical bosses
hole_diameter = 4.0   # Diameter of the through-holes in the bosses

# Create the base rectangular frame with a central cutout
# Start with a rectangle and subtract a smaller rectangle to create the frame
outer_rect = (
    cq.Workplane("XY")
    .box(frame_length, frame_width, frame_thickness)
)

inner_rect = (
    cq.Workplane("XY")
    .box(frame_length - 2*wall_width, frame_width - 2*wall_width, frame_thickness)
)

# Combine to create the frame shape
frame = outer_rect.cut(inner_rect)

# Create the four cylindrical bosses at the corners
# Position them inset from the corners by half the wall width
boss_positions = [
    (frame_length/2 - wall_width/2, frame_width/2 - wall_width/2),
    (frame_length/2 - wall_width/2, -frame_width/2 + wall_width/2),
    (-frame_length/2 + wall_width/2, frame_width/2 - wall_width/2),
    (-frame_length/2 + wall_width/2, -frame_width/2 + wall_width/2)
]

# Add bosses to the frame
result = frame
for x, y in boss_positions:
    # Create a boss at each position
    boss = (
        result
        .workplane(offset=frame_thickness)
        .center(x, y)
        .circle(boss_diameter/2)
        .extrude(boss_height)
    )
    result = boss

# Add through-holes to each boss
for x, y in boss_positions:
    # Create a hole through each boss
    hole = (
        result
        .workplane(offset=frame_thickness)
        .center(x, y)
        .circle(hole_diameter/2)
        .cutThruAll()
    )
    result = hole