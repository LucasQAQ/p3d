import cadquery as cq

# -----------------------------------------------------------------------------
# Parameters (estimated from the reference image)
# -----------------------------------------------------------------------------
# General dimensions
base_thickness = 4.0
base_bottom_chamfer = 0.6

# Irregular base footprint points / arc controls
front_right_x = 55.0
front_y = -32.0
front_left_x = -28.0

lobe_arc_mid = (-62.0, -12.0)
lobe_arc_end = (-38.0, 26.0)

rear_peak = (15.0, 40.0)
right_shoulder = (55.0, -2.0)

# Large circular through-cut on the left side of the plate
large_cutout_center = (-36.0, -11.0)
large_cutout_diameter = 34.0

# Cylindrical standoffs / bosses
# Each tuple is: (x, y, outer_diameter, inner_hole_diameter, height_above_base)
standoffs = [
    # Tall rear standoff
    (14.0, 28.0, 9.0, 3.2, 45.0),

    # Tall front-left standoff near the circular cutout
    (-16.0, -18.0, 8.5, 3.0, 31.0),

    # Tall right-side standoff
    (43.0, -12.0, 8.5, 3.0, 34.0),

    # Short central boss
    (13.0, -4.0, 10.0, 3.4, 11.0),

    # Two small low bosses near the center-left
    (-12.0, 2.0, 8.5, 3.0, 7.0),
    (-5.0, 8.5, 8.0, 3.0, 5.5),
]

post_top_chamfer = 0.35


# -----------------------------------------------------------------------------
# Helper function
# -----------------------------------------------------------------------------
def make_hollow_standoff(x, y, outer_diameter, inner_diameter, height):
    """Create a hollow cylindrical standoff starting from the top of the base."""
    outer_radius = outer_diameter / 2.0
    inner_radius = inner_diameter / 2.0

    outer_post = (
        cq.Workplane("XY")
        .workplane(offset=base_thickness)
        .center(x, y)
        .circle(outer_radius)
        .extrude(height)
    )

    inner_cut = (
        cq.Workplane("XY")
        .workplane(offset=base_thickness - 0.1)
        .center(x, y)
        .circle(inner_radius)
        .extrude(height + 0.3)
    )

    post = outer_post.cut(inner_cut)

    # Slightly bevel the top outside and inside edges to match the rendered style
    post = post.edges(">Z").chamfer(post_top_chamfer)

    return post


# -----------------------------------------------------------------------------
# Create the irregular base plate
# -----------------------------------------------------------------------------
# The footprint is interpreted as a polygonal plate with a large rounded left lobe.
base_profile = (
    cq.Workplane("XY")
    .moveTo(front_right_x, front_y)
    .lineTo(front_left_x, front_y)
    .threePointArc(lobe_arc_mid, lobe_arc_end)
    .lineTo(rear_peak[0], rear_peak[1])
    .lineTo(right_shoulder[0], right_shoulder[1])
    .lineTo(front_right_x, front_y)
    .close()
)

base = base_profile.extrude(base_thickness)

# Cut the large circular opening through the left lobe of the plate
large_cutout = (
    cq.Workplane("XY")
    .workplane(offset=-1.0)
    .center(large_cutout_center[0], large_cutout_center[1])
    .circle(large_cutout_diameter / 2.0)
    .extrude(base_thickness + 2.0)
)

base = base.cut(large_cutout)

# Add a small chamfer to the underside of the base for the visible edge break
base = base.edges("<Z").chamfer(base_bottom_chamfer)

# Cut through-holes in the base at each standoff location
for x, y, outer_diameter, inner_diameter, height in standoffs:
    base_hole = (
        cq.Workplane("XY")
        .workplane(offset=-1.0)
        .center(x, y)
        .circle(inner_diameter / 2.0)
        .extrude(base_thickness + 2.0)
    )
    base = base.cut(base_hole)

# -----------------------------------------------------------------------------
# Add hollow cylindrical standoffs and bosses
# -----------------------------------------------------------------------------
result = base

for x, y, outer_diameter, inner_diameter, height in standoffs:
    standoff = make_hollow_standoff(
        x=x,
        y=y,
        outer_diameter=outer_diameter,
        inner_diameter=inner_diameter,
        height=height,
    )
    result = result.union(standoff)