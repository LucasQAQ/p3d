// Parameters (mm)
curve_fragments = 96;
$fn = curve_fragments;

body_length = 120;
body_height = 45;
body_depth = 22;

top_slab_thickness = 12;

arch_span = 78;
arch_spring_height = 0;
arch_segments = 96;

recess_diameter = 9;
recess_depth = 6;
recess_spacing = 34;
recess_center_y = body_height - top_slab_thickness / 2;

cut_clearance = 0.05;

// Derived arch dimensions
arch_crown_y = body_height - top_slab_thickness;
arch_rise = arch_crown_y - arch_spring_height;
arch_radius = (arch_span * arch_span) / (8 * arch_rise) + arch_rise / 2;
arch_center_y = arch_crown_y - arch_radius;
arch_start_angle = atan2(arch_spring_height - arch_center_y, arch_span / 2);
arch_end_angle = 180 - arch_start_angle;

// Arc point list for the curved underside void
function arch_arc_points(n) =
    [for (i = [0 : n])
        [
            arch_radius * cos(arch_start_angle + (arch_end_angle - arch_start_angle) * i / n),
            arch_center_y + arch_radius * sin(arch_start_angle + (arch_end_angle - arch_start_angle) * i / n)
        ]
    ];

// Curved underside void profile
module arch_void_2d() {
    polygon(
        points = concat(
            [
                [-arch_span / 2, -cut_clearance],
                [ arch_span / 2, -cut_clearance]
            ],
            arch_arc_points(arch_segments)
        )
    );
}

// Single arched body outline
module body_profile_2d() {
    difference() {
        translate([-body_length / 2, 0])
            square([body_length, body_height], center=false);

        arch_void_2d();
    }
}

// Main solid extrusion
module arched_body() {
    linear_extrude(height=body_depth, center=true, convexity=10)
        body_profile_2d();
}

// Shallow blind circular recess from the front face
module circular_recess(x_pos) {
    translate([
        x_pos,
        recess_center_y,
        body_depth / 2 - recess_depth / 2 + cut_clearance / 2
    ])
        cylinder(h=recess_depth + cut_clearance, d=recess_diameter, center=true);
}

// Paired upper circular removal pattern
module paired_recesses() {
    for (x_pos = [-recess_spacing / 2, recess_spacing / 2])
        circular_recess(x_pos);
}

// Final model
difference() {
    arched_body();
    paired_recesses();
}