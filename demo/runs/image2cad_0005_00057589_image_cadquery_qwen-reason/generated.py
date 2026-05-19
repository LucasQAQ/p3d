import cadquery as cq

# Parameters - estimated from image proportions
length = 120.0      # Overall length (X direction)
width = 60.0        # Overall width (Y direction)
height = 40.0       # Overall height (Z direction)
wall_thickness = 3.0  # Wall thickness for all sides
corner_radius = 5.0   # External corner fillet radius

# Mounting hole parameters
mount_hole_diameter = 4.0
mount_hole_offset = 8.0  # Distance from edges to mounting holes
mount_hole_depth = wall_thickness + 2.0  # Depth of mounting holes

# Internal features
large_cylinder_diameter = 8.0
large_cylinder_height = height - wall_thickness  # Extends from bottom to near top
small_cylinder_diameter = 4.0
small_cylinder_height = 10.0  # Short cylinder on internal rib

# Rib parameters
rib_width = 6.0
rib_height = 15.0  # Height of the internal rib

# Create the main enclosure shell
result = (
    cq.Workplane("XY")
    .box(length, width, height)
    .edges("|Z")
    .fillet(corner_radius)
    # Shell the box to create hollow interior
    .shell(-wall_thickness)
)

# Add mounting holes at four corners
# Front-left corner
result = result.faces(">Z").workplane().transformed(offset=(mount_hole_offset, mount_hole_offset)).hole(mount_hole_diameter, mount_hole_depth)
# Front-right corner  
result = result.faces(">Z").workplane().transformed(offset=(length - mount_hole_offset, mount_hole_offset)).hole(mount_hole_diameter, mount_hole_depth)
# Back-left corner
result = result.faces(">Z").workplane().transformed(offset=(mount_hole_offset, width - mount_hole_offset)).hole(mount_hole_diameter, mount_hole_depth)
# Back-right corner
result = result.faces(">Z").workplane().transformed(offset=(length - mount_hole_offset, width - mount_hole_offset)).hole(mount_hole_diameter, mount_hole_depth)

# Add large internal cylinder (appears to be near back-right corner based on image)
cylinder_x = length - 20.0  # Positioned toward back-right
cylinder_y = width - 20.0
result = result.faces("<Z").workplane().transformed(offset=(cylinder_x, cylinder_y)).circle(large_cylinder_diameter/2).extrude(large_cylinder_height)

# Add internal rib with small cylinder
# Rib runs along the width direction, positioned toward front
rib_position_x = 30.0  # Position along length
result = result.faces("<Z").workplane().transformed(offset=(rib_position_x, 0)).rect(rib_width, width - 2*wall_thickness).extrude(rib_height)

# Add small cylinder on top of the rib
small_cyl_x = rib_position_x + rib_width/2
small_cyl_y = width/2
result = result.faces("<Z").workplane().transformed(offset=(small_cyl_x, small_cyl_y)).circle(small_cylinder_diameter/2).extrude(small_cylinder_height + rib_height)