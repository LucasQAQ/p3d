import cadquery as cq

# Parameters - estimated from visual proportions in the image
base_thickness = 5.0          # Thickness of the main base plate
base_width = 80.0             # Overall width of the triangular base
base_depth = 60.0             # Depth of the triangular base (from front to back)
corner_radius = 15.0          # Radius for rounded corners on the base
large_hole_diameter = 30.0    # Diameter of the large circular cutout on left
large_hole_offset_x = 20.0    # X offset of large hole from left edge
large_hole_offset_y = 30.0    # Y offset of large hole from front edge

# Pin dimensions
pin1_diameter = 12.0          # Diameter of tall rear pin
pin1_height = 40.0            # Height of tall rear pin
pin1_hole_diameter = 4.0      # Hole diameter in tall rear pin

pin2_diameter = 10.0          # Diameter of medium right-side pin
pin2_height = 30.0            # Height of medium right-side pin
pin2_hole_diameter = 3.5      # Hole diameter in medium right-side pin

pin3_diameter = 8.0           # Diameter of short front-left pin
pin3_height = 20.0            # Height of short front-left pin
pin3_hole_diameter = 3.0      # Hole diameter in short front-left pin

# Boss features (small cylindrical protrusions with holes)
boss1_diameter = 10.0         # Diameter of first boss
boss1_height = 8.0            # Height of first boss
boss1_hole_diameter = 3.0     # Hole diameter in first boss
boss1_x = 35.0                # X position of first boss
boss1_y = 25.0                # Y position of first boss

boss2_diameter = 8.0          # Diameter of second boss
boss2_height = 6.0            # Height of second boss
boss2_hole_diameter = 2.5     # Hole diameter in second boss
boss2_x = 50.0                # X position of second boss
boss2_y = 35.0                # Y position of second boss

# Create the base plate with triangular shape and rounded corners
base = (
    cq.Workplane("XY")
    .moveTo(0, 0)
    .lineTo(base_width, 0)
    .lineTo(base_width * 0.7, base_depth)
    .threePointArc((base_width * 0.35, base_depth + corner_radius), (0, base_depth))
    .close()
    .extrude(base_thickness)
)

# Add the large circular cutout on the left side
base = (
    base
    .faces(">Z")
    .workplane()
    .center(large_hole_offset_x, large_hole_offset_y)
    .circle(large_hole_diameter / 2)
    .cutThruAll()
)

# Add the tall rear pin (positioned near the back corner)
pin1_pos_x = base_width * 0.8
pin1_pos_y = base_depth * 0.9
result = (
    base
    .faces(">Z")
    .workplane()
    .center(pin1_pos_x, pin1_pos_y)
    .circle(pin1_diameter / 2)
    .extrude(pin1_height)
    .faces(">Z")
    .workplane()
    .circle(pin1_hole_diameter / 2)
    .cutThruAll()
)

# Add the medium right-side pin
pin2_pos_x = base_width * 0.9
pin2_pos_y = base_depth * 0.3
result = (
    result
    .faces(">Z")
    .workplane()
    .center(pin2_pos_x, pin2_pos_y)
    .circle(pin2_diameter / 2)
    .extrude(pin2_height)
    .faces(">Z")
    .workplane()
    .circle(pin2_hole_diameter / 2)
    .cutThruAll()
)

# Add the short front-left pin
pin3_pos_x = base_width * 0.2
pin3_pos_y = base_depth * 0.2
result = (
    result
    .faces(">Z")
    .workplane()
    .center(pin3_pos_x, pin3_pos_y)
    .circle(pin3_diameter / 2)
    .extrude(pin3_height)
    .faces(">Z")
    .workplane()
    .circle(pin3_hole_diameter / 2)
    .cutThruAll()
)

# Add the first boss feature
result = (
    result
    .faces(">Z")
    .workplane()
    .center(boss1_x, boss1_y)
    .circle(boss1_diameter / 2)
    .extrude(boss1_height)
    .faces(">Z")
    .workplane()
    .circle(boss1_hole_diameter / 2)
    .cutThruAll()
)

# Add the second boss feature
result = (
    result
    .faces(">Z")
    .workplane()
    .center(boss2_x, boss2_y)
    .circle(boss2_diameter / 2)
    .extrude(boss2_height)
    .faces(">Z")
    .workplane()
    .circle(boss2_hole_diameter / 2)
    .cutThruAll()
)