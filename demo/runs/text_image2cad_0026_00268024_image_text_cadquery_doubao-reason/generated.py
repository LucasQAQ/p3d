import cadquery as cq

# --------------------------
# Parameters
# --------------------------
# Base frame dimensions
base_length = 100.0       # Outer length of the rectangular base
base_width = 80.0         # Outer width of the rectangular base
base_thickness = 2.0      # Thickness of the base plate
border_width = 10.0       # Width of the frame border around the central cutout

# Collar (raised boss) dimensions
collar_outer_dia = 10.0   # Outer diameter of the raised circular collars
collar_inner_dia = 4.0    # Inner diameter of the collar (hole size)
collar_height = 3.0       # Height of the collar above the base plate
collar_inset = 6.0        # Inset distance of collars from the outer edges of the base

# --------------------------
# Model Construction
# --------------------------
# Create base rectangular frame with central rectangular cutout
result = (
    cq.Workplane("XY")
    .rect(base_length, base_width)  # Outer base rectangle
    .rect(base_length - 2*border_width, base_width - 2*border_width)  # Inner cutout rectangle
    .extrude(base_thickness)  # Extrude to form the base frame
    
    # Create raised collars at each corner
    .faces(">Z").workplane()
    .pushPoints([
        (base_length/2 - collar_inset, base_width/2 - collar_inset),
        (base_length/2 - collar_inset, -base_width/2 + collar_inset),
        (-base_length/2 + collar_inset, -base_width/2 + collar_inset),
        (-base_length/2 + collar_inset, base_width/2 - collar_inset)
    ])
    .circle(collar_outer_dia / 2)
    .extrude(collar_height)  # Extrude the raised collars
    
    # Cut through holes for each collar (through both collar and base)
    .faces(">Z").workplane()
    .pushPoints([
        (base_length/2 - collar_inset, base_width/2 - collar_inset),
        (base_length/2 - collar_inset, -base_width/2 + collar_inset),
        (-base_length/2 + collar_inset, -base_width/2 + collar_inset),
        (-base_length/2 + collar_inset, base_width/2 - collar_inset)
    ])
    .circle(collar_inner_dia / 2)
    .cutThruAll()
)