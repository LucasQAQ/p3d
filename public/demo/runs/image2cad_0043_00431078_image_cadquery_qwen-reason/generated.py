import cadquery as cq

# Parameters - estimated from image proportions
# Ring parameters
ring_outer_diameter = 20.0
ring_inner_diameter = 14.0
ring_height = 8.0

# Base plate parameters
base_length = 35.0
base_width = 18.0
base_thickness = 3.0

# Vertical wall parameters
wall_height = 15.0
wall_thickness = 4.0

# Notch parameters (on top of vertical wall)
notch_width = 6.0
notch_depth = 3.0
notch_height = 2.0

# Connector between ring and base
connector_width = 6.0
connector_height = 3.0

# Create the model
result = (
    # Start with the cylindrical ring
    cq.Workplane("XY")
    .circle(ring_outer_diameter / 2)
    .circle(ring_inner_diameter / 2)
    .extrude(ring_height)
    
    # Add the base plate extending from the ring
    .moveTo(ring_outer_diameter / 2, 0)
    .box(base_length, base_width, base_thickness)
    
    # Add the vertical wall at the end of the base
    .moveTo(base_length / 2 + ring_outer_diameter / 2, 0)
    .workplane(offset=base_thickness)
    .box(wall_thickness, base_width, wall_height)
    
    # Add notch on top of vertical wall (front side)
    .moveTo(0, -base_width / 2 + notch_width / 2)
    .workplane(offset=wall_height / 2)
    .box(notch_depth, notch_width, notch_height)
    
    # Add notch on top of vertical wall (back side) 
    .moveTo(0, base_width - notch_width)
    .box(notch_depth, notch_width, notch_height)
    
    # Add connector piece between ring and base
    .moveTo(-base_length / 2, 0)
    .workplane(offset=base_thickness / 2)
    .box(connector_width, connector_width, connector_height)
)

# Union all parts into a single solid
result = result.union(result)