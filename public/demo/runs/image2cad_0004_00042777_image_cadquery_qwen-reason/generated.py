import cadquery as cq

# Parameters - estimated from image proportions
# Main horizontal arm dimensions
arm_length = 80.0
arm_width = 20.0
arm_thickness = 10.0

# Vertical upright dimensions
upright_height = 30.0
upright_width = 20.0
upright_thickness = 10.0

# Top horizontal extension (perpendicular to main arm)
top_extension_length = 40.0
top_extension_width = 20.0
top_extension_thickness = 10.0

# Hole parameters
hole_diameter = 6.0
hole_offset_from_end = 15.0  # Distance from end of arm to first hole
hole_spacing = 30.0          # Distance between holes on main arm

# Create the model
result = (
    cq.Workplane("XY")
    
    # Create main horizontal arm with two mounting holes
    .box(arm_length, arm_width, arm_thickness)
    .faces(">Z")
    .workplane()
    .hole(hole_diameter, depth=arm_thickness)
    .moveTo(hole_offset_from_end + hole_spacing, 0)
    .hole(hole_diameter, depth=arm_thickness)
    
    # Move to position for vertical upright (centered on width, at one end of arm)
    .moveTo(arm_length/2, 0)
    .workplane(offset=arm_thickness/2)
    
    # Create vertical upright
    .box(upright_width, upright_thickness, upright_height)
    
    # Add slot in vertical upright (visible in image as rectangular cutout)
    .faces(">Y")
    .workplane()
    .rect(upright_width * 0.6, upright_height * 0.7)
    .cutThruAll()
    
    # Move to top of upright for perpendicular extension
    .moveTo(0, 0)
    .workplane(offset=upright_height/2)
    
    # Create top horizontal extension (perpendicular to main arm)
    .box(top_extension_length, top_extension_thickness, top_extension_width)
    
    # Add hole in top extension (visible in image)
    .faces(">Z")
    .workplane()
    .hole(hole_diameter, depth=top_extension_width)
)