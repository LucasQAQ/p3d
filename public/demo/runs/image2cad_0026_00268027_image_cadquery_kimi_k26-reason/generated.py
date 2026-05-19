import cadquery as cq

# Parameters - overall frame dimensions
outer_width = 120.0       # Overall width of the rectangular frame (X direction)
outer_length = 80.0       # Overall length of the rectangular frame (Y direction)
frame_thickness = 5.0     # Thickness of the base plate (Z direction)
frame_width = 15.0        # Width of the frame border (from outer edge to inner cutout edge)

# Parameters - mounting bosses
boss_diameter = 10.0      # Outer diameter of cylindrical mounting bosses
boss_height = 8.0         # Height of bosses above the frame surface
hole_diameter = 4.0       # Diameter of through-hole in each boss
hole_depth = frame_thickness + boss_height  # Through-hole depth (must go through boss and plate)

# Derived parameters - inner cutout dimensions
inner_width = outer_width - 2 * frame_width   # Width of the central rectangular cutout
inner_length = outer_length - 2 * frame_width # Length of the central rectangular cutout

# Boss positions - centered on each corner of the inner cutout
# These positions place the bosses at the inner corners of the frame border
boss_offset_x = inner_width / 2   # Half inner width for X positioning
boss_offset_y = inner_length / 2  # Half inner length for Y positioning

# Create the base rectangular frame with a central cutout
# Start with a solid rectangle, then cut out the center to create the border
frame_base = (
    cq.Workplane("XY")
    .box(outer_width, outer_length, frame_thickness, centered=True)
    .faces(">Z")  # Select the top face for the cutout workplane
    .workplane()
    .rect(inner_width, inner_length, forConstruction=False)
    .cutThruAll()  # Cut through the entire thickness to create the open center
)

# Create mounting bosses at the four inner corners
# Using a separate workplane to place cylinders, then union with frame
bosses = (
    cq.Workplane("XY")
    # Define the four corner positions for bosses
    .pushPoints([
        (-boss_offset_x, -boss_offset_y),  # Bottom-left corner
        ( boss_offset_x, -boss_offset_y),  # Bottom-right corner
        ( boss_offset_x,  boss_offset_y),  # Top-right corner
        (-boss_offset_x,  boss_offset_y),  # Top-left corner
    ])
    # Create cylindrical bosses with specified diameter and height
    .circle(boss_diameter / 2)
    .extrude(boss_height)
    # Add through-holes in each boss
    .faces(">Z")  # Select top face of bosses for hole workplane
    .workplane()
    .pushPoints([
        (-boss_offset_x, -boss_offset_y),
        ( boss_offset_x, -boss_offset_y),
        ( boss_offset_x,  boss_offset_y),
        (-boss_offset_x,  boss_offset_y),
    ])
    .circle(hole_diameter / 2)
    .cutThruAll()  # Cut through-holes through entire boss and plate
)

# Combine the frame base with the bosses to create the final model
result = frame_base.union(bosses)