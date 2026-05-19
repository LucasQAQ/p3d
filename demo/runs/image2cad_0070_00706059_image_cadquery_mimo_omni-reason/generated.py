import cadquery as cq

# Parameters
base_plate_width = 30.0
base_plate_length = 40.0
base_plate_thickness = 5.0

# Central cylinder parameters
cylinder_outer_diameter = 20.0
cylinder_inner_diameter = 12.0
cylinder_height = 25.0

# Left circular ear parameters
ear_outer_radius = 10.0
ear_inner_radius = 5.0
ear_thickness = base_plate_thickness

# Right rectangular tab parameters
tab_width = 10.0
tab_length = 15.0
tab_height = 15.0

# Rib parameters (connecting cylinder to right tab)
rib_width = 3.0
rib_length = 8.0

# Create the base plate
result = (
    cq.Workplane("XY")
    .box(base_plate_width, base_plate_length, base_plate_thickness)
)

# Add the central cylinder on top of the base plate
result = (
    result.faces(">Z").workplane()
    .circle(cylinder_outer_diameter / 2)
    .extrude(cylinder_height)
)

# Create the through-hole in the cylinder
result = (
    result.faces(">Z").workplane()
    .hole(cylinder_inner_diameter)
)

# Add the left circular ear (attached to the side of the base plate)
result = (
    result.faces("<X").workplane()
    .center(0, -base_plate_length / 4)  # Position along the left face
    .circle(ear_outer_radius)
    .circle(ear_inner_radius)
    .extrude(ear_thickness)
)

# Add the right rectangular tab (attached to the side of the base plate)
result = (
    result.faces(">X").workplane()
    .center(0, base_plate_length / 4)  # Position along the right face
    .box(tab_width, tab_length, tab_height)
)

# Add the rib connecting the cylinder to the right tab
result = (
    result.faces(">X").workplane()
    .center(0, base_plate_length / 4 - tab_length / 2)  # Align with tab
    .rect(rib_width, rib_length)
    .extrude(rib_length)
)

# Fillet the sharp edges for a more finished look
result = result.edges("|Z").fillet(1.0)