import cadquery as cq

# Parameters
length = 120.0          # Overall length of the frame
width = 90.0            # Overall width of the frame
base_thickness = 4.0    # Thickness of the rectangular base plate
frame_width = 20.0      # Width of the solid border

cut_length = length - 2 * frame_width  # Length of the central rectangular cutout
cut_width = width - 2 * frame_width    # Width of the central rectangular cutout

collar_od = 14.0        # Outer diameter of the raised collars
collar_height = 6.0     # Height of the collars above the base plate
hole_id = 6.0           # Inner diameter of the through holes

# Distance between hole centers (centered in the frame corners)
hole_dist_x = length - frame_width
hole_dist_y = width - frame_width

# Create the model
# Step 1: Create the base frame with the central cutout
base_frame = (
    cq.Workplane("XY")
    .rect(length, width)          # Outer boundary
    .rect(cut_length, cut_width)  # Inner boundary (cutout)
    .extrude(base_thickness)
)

# Step 2: Add the raised solid collars at the 4 corners
with_collars = (
    base_frame.faces(">Z")
    .workplane()
    .rect(hole_dist_x, hole_dist_y, forConstruction=True)
    .vertices()
    .circle(collar_od / 2.0)
    .extrude(collar_height)
)

# Step 3: Cut the central holes completely through the collars and base
result = (
    with_collars.faces(">Z")
    .workplane()
    .rect(hole_dist_x, hole_dist_y, forConstruction=True)
    .vertices()
    .circle(hole_id / 2.0)
    .cutThruAll()
)