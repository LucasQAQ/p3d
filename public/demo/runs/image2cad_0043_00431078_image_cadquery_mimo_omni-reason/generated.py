import cadquery as cq

# Parameters - Estimated based on visual proportions
# The model consists of a vertical plate with a cylindrical boss attached via a rib
plate_width = 40.0
plate_height = 20.0
plate_thickness = 5.0

# Cylindrical boss dimensions
boss_outer_diameter = 20.0
boss_inner_diameter = 12.0
boss_height = 10.0

# Rib dimensions (connecting plate to boss)
rib_width = 6.0
rib_length = 15.0  # Distance from plate to boss center
rib_thickness = 4.0

# Positioning
# The boss is centered relative to the plate width
boss_center_offset = plate_width / 2  # Centered along plate width
boss_height_offset = 5.0  # Distance from bottom of plate to bottom of boss

# Create the vertical plate
result = (
    cq.Workplane("XY")
    .box(plate_width, plate_thickness, plate_height)
    # Add a small notch on the top edge (visible in the image)
    .faces(">Z")
    .workplane()
    .slot2D(plate_width - 10, 3, angle=0)
    .cutThruAll()
)

# Create the cylindrical boss
# Position it in front of the plate
result = (
    result
    .faces(">Y")
    .workplane(offset=boss_height_offset)
    .transformed(rotate=(90, 0, 0))
    .circle(boss_outer_diameter / 2)
    .extrude(boss_height)
    # Cut the inner hole
    .faces(">Y")
    .workplane()
    .circle(boss_inner_diameter / 2)
    .cutThruAll()
)

# Create the rib connecting plate to boss
# The rib is a triangular support structure
result = (
    result
    .faces("<Y")
    .workplane(offset=plate_thickness)
    .transformed(rotate=(90, 0, 0))
    # Create a rectangular rib that tapers (simplified as a box for now)
    .rect(rib_width, rib_length)
    .extrude(rib_thickness)
)

# Alternative approach for the rib - create a separate workplane and cut/fillet
# Actually, let's create the rib more accurately as a triangular shape
# We'll rebuild the rib using a different approach

# Clear previous rib attempt and create proper triangular rib
result = (
    cq.Workplane("XY")
    .box(plate_width, plate_thickness, plate_height)
    # Add notch on top
    .faces(">Z")
    .workplane()
    .slot2D(plate_width - 10, 3, angle=0)
    .cutThruAll()
    # Add cylindrical boss
    .faces(">Y")
    .workplane(offset=boss_height_offset)
    .transformed(rotate=(90, 0, 0))
    .circle(boss_outer_diameter / 2)
    .extrude(boss_height)
    .faces(">Y")
    .workplane()
    .circle(boss_inner_diameter / 2)
    .cutThruAll()
)

# Create the rib using a polygon approach
# The rib connects from the plate to the boss in a triangular shape
rib_points = [
    (0, 0),  # Bottom front (at boss)
    (rib_length, 0),  # Bottom back (at plate)
    (rib_length, rib_thickness),  # Top back (at plate)
    (0, rib_thickness),  # Top front (at boss)
]

# Position the rib
rib_workplane = (
    result
    .faces("<Y")
    .workplane(offset=plate_thickness)
    .transformed(rotate=(90, 0, 0))
)

# Create the rib as a polygon and extrude
result = (
    rib_workplane
    .polyline(rib_points)
    .close()
    .extrude(rib_width)
)

# Add fillets for a smoother transition (optional, based on visual)
# result = result.edges("|Z").fillet(1.0)