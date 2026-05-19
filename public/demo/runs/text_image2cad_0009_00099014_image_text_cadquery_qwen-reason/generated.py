import cadquery as cq

# Parameters for the main slab
slab_length = 100.0
slab_width = 80.0
slab_thickness = 20.0

# Parameters for the underside protrusions (feet)
# The text describes "Four shallow underside pads... each pad carries a narrower, deeper rectangular continuation"
# This implies a two-tier foot structure at 4 locations.
foot_offset_x = 35.0  # Distance from center to foot center along X
foot_offset_y = 25.0  # Distance from center to foot center along Y

# Tier 1: Shallow pad attached directly to slab bottom
tier1_width = 20.0    # Width along X
tier1_depth = 15.0    # Depth along Y
tier1_height = 5.0    # Height extending downwards from slab

# Tier 2: Deeper continuation contained within Tier 1 footprint
# Text says: "shares either the left or right vertical edge along with the front and back edges"
# We will align them to one side (e.g., 'back' in local foot coordinates) for consistency.
tier2_width = 12.0    # Narrower than tier1
tier2_depth = 15.0    # Same depth as tier1 (shares front/back edges)
tier2_height = 15.0   # Extends further down from tier1 bottom

# Create the main slab
result = (
    cq.Workplane("XY")
    .box(slab_length, slab_width, slab_thickness)
)

# Define the 4 corner positions for the feet relative to the slab center
positions = [
    (foot_offset_x, foot_offset_y),
    (-foot_offset_x, foot_offset_y),
    (-foot_offset_x, -foot_offset_y),
    (foot_offset_x, -foot_offset_y)
]

# Add the two-tier feet at each position
for x_pos, y_pos in positions:
    # Create Tier 1 (Shallow Pad)
    # We start from the bottom face of the slab (Z = -slab_thickness/2)
    tier1 = (
        cq.Workplane("XY")
        .workplane(offset=-slab_thickness / 2)
        .center(x_pos, y_pos)
        .box(tier1_width, tier1_depth, tier1_height)
    )
    
    # Create Tier 2 (Deeper Continuation)
    # It sits below Tier 1. 
    # Z offset = -slab_thickness/2 - tier1_height
    # Alignment: Shares front/back edges (Y dimension same). 
    # Shares one X edge. Let's align to the "positive X" side of the foot's local coordinate system 
    # if we consider the foot centered at (x_pos, y_pos). 
    # To make it simple and robust, we calculate the absolute position.
    # If tier1 is centered at x_pos, its bounds are [x_pos - tier1_width/2, x_pos + tier1_width/2].
    # Let's align tier2 to the "outer" edge (away from center) or just a consistent edge.
    # Let's align tier2 to the positive X edge of tier1 for all feet for simplicity, 
    # or better, mirror the alignment based on quadrant to look symmetric if needed? 
    # The prompt says "shares either the left or right...". It doesn't specify symmetry. 
    # Let's just pick one consistent alignment relative to the foot center.
    # Let's align tier2 such that its center is shifted by half the difference in widths.
    
    # Shift calculation: (tier1_width - tier2_width) / 2
    x_shift = (tier1_width - tier2_width) / 2
    
    # We'll align tier2 to the "right" (positive X) side of the tier1 box relative to its center
    tier2_center_x = x_pos + x_shift
    tier2_center_y = y_pos # Same Y center since depths are equal and edges shared
    
    tier2_z_offset = -slab_thickness / 2 - tier1_height - tier2_height / 2
    
    tier2 = (
        cq.Workplane("XY")
        .workplane(offset=tier2_z_offset)
        .center(tier2_center_x, tier2_center_y)
        .box(tier2_width, tier2_depth, tier2_height)
    )
    
    # Union the tiers into the result
    result = result.union(tier1).union(tier2)

# Final export
result = result