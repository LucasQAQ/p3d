import cadquery as cq

# ----------------------------
# Parameter Definitions
# ----------------------------
# Outer rectangular frame dimensions
frame_length = 160.0   # Overall length of the frame
frame_width = 100.0    # Overall width of the frame
frame_thickness = 3.0  # Thickness of the flat frame plate
border_width = 10.0    # Width of the frame edge around the central cutout

# Mounting boss parameters
boss_diameter = 12.0   # Outer diameter of each mounting boss
boss_height = 6.0      # Height of bosses above the frame surface
boss_hole_dia = 4.0    # Diameter of the through-hole in each boss
boss_inset = 8.0       # Inset distance of bosses from the outer frame edges

# ----------------------------
# Modeling Steps
# ----------------------------
# 1. Create the base rectangular frame with a central rectangular cutout
result = (
    cq.Workplane("XY")
    # Create outer rectangle of the frame
    .rect(frame_length, frame_width)
    # Subtract inner rectangle to make the hollow frame
    .rect(frame_length - 2 * border_width, frame_width - 2 * border_width, forConstruction=True)
    .extrude(frame_thickness)
)

# 2. Add mounting bosses on the corners of the frame
result = (
    result.faces(">Z")  # Select top surface of the frame
    .workplane()
    # Place points at each boss location (inset from outer corners)
    .pushPoints([
        (frame_length/2 - boss_inset, frame_width/2 - boss_inset),
        (frame_length/2 - boss_inset, -frame_width/2 + boss_inset),
        (-frame_length/2 + boss_inset, -frame_width/2 + boss_inset),
        (-frame_length/2 + boss_inset, frame_width/2 - boss_inset)
    ])
    # Create solid boss cylinders
    .circle(boss_diameter / 2)
    .extrude(boss_height)
    # Drill through-holes through each boss and the frame plate
    .faces(">Z")
    .workplane()
    .pushPoints([
        (frame_length/2 - boss_inset, frame_width/2 - boss_inset),
        (frame_length/2 - boss_inset, -frame_width/2 + boss_inset),
        (-frame_length/2 + boss_inset, -frame_width/2 + boss_inset),
        (-frame_length/2 + boss_inset, frame_width/2 - boss_inset)
    ])
    .circle(boss_hole_dia / 2)
    .cutThruAll()
)