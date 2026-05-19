import cadquery as cq

# Parameters - estimated from visual proportions
# Main cylinder dimensions
cylinder_outer_diameter = 30.0
cylinder_inner_diameter = 18.0
cylinder_height = 25.0

# Base plate dimensions
base_width = 60.0
base_depth = 40.0
base_thickness = 8.0

# Mounting tabs (the three rectangular protrusions)
tab_width = 12.0
tab_depth = 15.0
tab_height = 12.0

# Circular cutout in base (left side)
cutout_diameter = 20.0
cutout_offset_x = -15.0  # offset from center towards left
cutout_offset_y = 0.0

# Create the model
result = (
    cq.Workplane("XY")
    
    # Step 1: Create the main base plate
    .box(base_width, base_depth, base_thickness)
    
    # Step 2: Add the central cylinder (extruded upward from base top)
    .moveTo(0, 0)
    .circle(cylinder_outer_diameter / 2)
    .extrude(cylinder_height)
    
    # Step 3: Subtract the inner hole of the cylinder
    .moveTo(0, 0)
    .circle(cylinder_inner_diameter / 2)
    .extrude(-cylinder_height - base_thickness, both=True)
    
    # Step 4: Add mounting tab on the right side
    .moveTo(base_width/2 - tab_depth/2, 0)
    .rect(tab_depth, tab_width)
    .extrude(tab_height)
    
    # Step 5: Add mounting tab on the front side
    .moveTo(0, base_depth/2 - tab_depth/2)
    .rect(tab_width, tab_depth)
    .extrude(tab_height)
    
    # Step 6: Add mounting tab on the back-left side (angled or positioned appropriately)
    # Based on image, this appears to be a third tab extending diagonally or at an angle
    # For simplicity, we'll place it symmetrically opposite the front tab but rotated
    .moveTo(-base_width/4, -base_depth/2 + tab_depth/2)
    .rect(tab_width, tab_depth)
    .extrude(tab_height)
    
    # Step 7: Cut out the circular hole in the base (left side)
    .moveTo(cutout_offset_x, cutout_offset_y)
    .circle(cutout_diameter / 2)
    .extrude(-base_thickness, both=True)
)

# Final result is ready for export