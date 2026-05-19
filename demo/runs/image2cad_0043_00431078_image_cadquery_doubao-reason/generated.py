import cadquery as cq

# ====================== PARAMETERS ======================
# Ring dimensions
ring_outer_diameter = 50.0
ring_inner_diameter = 35.0
ring_height = 18.0

# Connection arm (between ring and mounting plate)
arm_width = 14.0
arm_length = 12.0

# Mounting plate dimensions
plate_height = 36.0
plate_length = 90.0
plate_thickness = 10.0

# Gusset (triangular support under arm)
gusset_thickness = 6.0

# Mounting plate top notches
notch_width = 8.0
notch_depth = 4.0
notch_height = 6.0

# Mounting plate lower cutout
cutout_width = 10.0
cutout_depth = 4.0
cutout_height = 8.0
# ========================================================


# Step 1: Create the hollow ring base
ring = (
    cq.Workplane("XY")
    .circle(ring_outer_diameter / 2)
    .circle(ring_inner_diameter / 2)
    .extrude(ring_height)
)

# Step 2: Create connecting arm between ring and mounting plate
arm = (
    ring.faces(">Z")  # Start from top face of ring
    .workplane()
    .center(ring_outer_diameter / 2, 0)  # Move to edge of ring
    .rect(arm_length, arm_width)
    .extrude(-ring_height)  # Extrude down to match ring height
)

# Step 3: Create vertical mounting plate
plate = (
    arm.faces(">X")  # Start from the end face of the connecting arm
    .workplane()
    .center(0, (plate_height / 2) - (ring_height / 2))  # Align plate to extend above and below arm
    .rect(plate_length, plate_height)
    .extrude(plate_thickness)
)

# Step 4: Add triangular gusset for support under the arm
gusset = (
    arm.faces("<Z")  # Start from bottom of arm
    .workplane()
    .polyline([
        (0, 0),  # Corner at back of arm
        (plate_thickness, 0),  # Extend to front of mounting plate
        (plate_thickness, -plate_height/2 + ring_height/2)  # Extend down to bottom edge of plate
    ])
    .close()  # Close the triangular shape
    .extrude(gusset_thickness, both=True)  # Extrude symmetrically on both sides of centerline
)

# Combine all solid parts together
base_assembly = ring.union(arm).union(plate).union(gusset)

# Step 5: Add notches on top edge of mounting plate
notched_plate = (
    base_assembly.faces(">Z")
    .workplane(origin=(0, 0, 0))  # Align workplane to plate top face center
    # Left notch
    .center(-plate_length/2 + notch_width, 0)
    .rect(notch_width, notch_depth)
    .cutBlind(-notch_height)  # Cut down into the plate
    # Right notch
    .center(plate_length - 2*notch_width, 0)
    .rect(notch_width, notch_depth)
    .cutBlind(-notch_height)
)

# Step 6: Add lower cutout on front face of mounting plate
result = (
    notched_plate.faces(">X")  # Front face of mounting plate
    .workplane()
    .center(0, -plate_height/2 + cutout_height/2)  # Position at lower part of plate
    .rect(cutout_width, cutout_height)
    .cutBlind(-cutout_depth)  # Cut into the plate thickness
)