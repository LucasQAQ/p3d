import cadquery as cq

# ----------------------
# Base Plate Parameters
# ----------------------
base_length = 100.0  # Overall length of rectangular mounting plate
base_width = 80.0    # Overall width of rectangular mounting plate
base_thickness = 5.0 # Thickness of the base plate
mount_hole_dia = 6.0 # Diameter of mounting holes
mount_hole_edge_offset = 10.0 # Distance from hole center to nearest plate edge

# ----------------------
# Middle Riser Parameters
# ----------------------
riser_length = 60.0   # Length of the rectangular riser under the cylinder
riser_width = 40.0    # Width of the rectangular riser under the cylinder
riser_thickness = 10.0 # Height of the riser above the base plate
tab_radius = 10.0     # Radius of the rounded alignment tabs on riser ends

# ----------------------
# Top Cylinder Parameters
# ----------------------
cyl_outer_dia = 50.0  # Outer diameter of the top cylindrical boss
cyl_inner_dia = 44.0  # Inner diameter of the cylinder (wall thickness = 3mm)
cyl_height = 20.0     # Height of the cylinder above the riser

# ----------------------
# Model Construction
# ----------------------
# 1. Create base mounting plate
result = (
    cq.Workplane("XY")
    .rect(base_length, base_width)
    .extrude(base_thickness)
)

# 2. Add mounting holes (4 holes spaced near plate corners)
result = (
    result.faces(">Z")
    .workplane()
    .rect(base_length - 2*mount_hole_edge_offset, base_width - 2*mount_hole_edge_offset, forConstruction=True)
    .vertices()
    .hole(mount_hole_dia)
)

# 3. Create middle rectangular riser with rounded tabs on opposite ends
result = (
    result.faces(">Z")
    .workplane()
    # Main rectangular riser shape
    .rect(riser_length, riser_width)
    # Add rounded tabs to front and back midpoints of the riser
    .pushPoints([(riser_length/2, 0), (-riser_length/2, 0)])
    .circle(tab_radius)
    .extrude(riser_thickness)
)

# 4. Add top hollow cylindrical boss
result = (
    result.faces(">Z")
    .workplane()
    # Outer cylinder wall
    .circle(cyl_outer_dia / 2)
    .extrude(cyl_height)
    # Hollow out the inside of the cylinder
    .faces(">Z")
    .workplane()
    .circle(cyl_inner_dia / 2)
    .cutThruAll()
)