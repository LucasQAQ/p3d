// Parameters
$fn = 96;
eps = 0.03;

// Main body
base_thickness = 8;
lower_center = [0, -30];
upper_center = [0, 24];
lower_base_d = 54;
upper_base_d = 48;

// Lower annular sleeve
lower_collar_od = 42;
lower_collar_h = 6;
lower_bore_d = 18;
lower_bottom_recess_d = 34;
lower_bottom_recess_depth = 3.5;

// Upper annular sleeve
upper_collar_od = 36;
upper_collar_h = 11;
upper_bore_d = 16;
upper_bottom_recess_d = 30;
upper_bottom_recess_depth = 5;

// Rear upright arc wall
wall_mid_radius = 30;
wall_thickness = 8;
wall_foot_thickness = 14;
wall_height = 34;
wall_start_angle = 25;
wall_end_angle = 155;
wall_segments = 72;

overall_height = base_thickness + max(wall_height, max(lower_collar_h, upper_collar_h));

// Helper cylinder at XY
module cyl_xy(p, h, d, z=0) {
    translate([p[0], p[1], z])
        cylinder(h=h, d=d);
}

// Rounded 2D arc wall with rounded ends
module rounded_arc_2d(r_mid, width, a0, a1, segs) {
    r_outer = r_mid + width / 2;
    r_inner = r_mid - width / 2;

    union() {
        polygon(points=concat(
            [for (i = [0:segs])
                [r_outer * cos(a0 + (a1 - a0) * i / segs),
                 r_outer * sin(a0 + (a1 - a0) * i / segs)]],
            [for (i = [segs:-1:0])
                [r_inner * cos(a0 + (a1 - a0) * i / segs),
                 r_inner * sin(a0 + (a1 - a0) * i / segs)]]
        ));

        translate([r_mid * cos(a0), r_mid * sin(a0)])
            circle(d=width);

        translate([r_mid * cos(a1), r_mid * sin(a1)])
            circle(d=width);
    }
}

// Low rounded bridge body
module rounded_bridge_base() {
    hull() {
        cyl_xy(lower_center, base_thickness, lower_base_d);
        cyl_xy(upper_center, base_thickness, upper_base_d);
    }
}

// Added rear footing under the upright arc wall
module rear_arc_footing() {
    translate([upper_center[0], upper_center[1], 0])
        linear_extrude(height=base_thickness, convexity=4)
            rounded_arc_2d(
                wall_mid_radius,
                wall_foot_thickness,
                wall_start_angle,
                wall_end_angle,
                wall_segments
            );
}

// Raised circular collar before bores are removed
module collar_solid(p, od, h) {
    cyl_xy(p, h + eps, od, base_thickness - eps);
}

// Tall rear open arc wall
module upright_arc_wall() {
    translate([upper_center[0], upper_center[1], base_thickness - eps])
        linear_extrude(height=wall_height + eps, convexity=4)
            rounded_arc_2d(
                wall_mid_radius,
                wall_thickness,
                wall_start_angle,
                wall_end_angle,
                wall_segments
            );
}

// Through bore cutter
module through_bore(p, d) {
    cyl_xy(p, overall_height + 2 * eps, d, -eps);
}

// Underside circular step cutter
module bottom_recess(p, d, depth) {
    cyl_xy(p, depth + eps, d, -eps);
}

// Solid material before subtractive features
module added_solids() {
    union() {
        rounded_bridge_base();
        rear_arc_footing();

        collar_solid(lower_center, lower_collar_od, lower_collar_h);
        collar_solid(upper_center, upper_collar_od, upper_collar_h);

        upright_arc_wall();
    }
}

// Final manifold part
difference() {
    added_solids();

    // Continuous hollow bores through the annular sleeves
    through_bore(lower_center, lower_bore_d);
    through_bore(upper_center, upper_bore_d);

    // Hidden underside circular removals forming stepped depths
    bottom_recess(lower_center, lower_bottom_recess_d, lower_bottom_recess_depth);
    bottom_recess(upper_center, upper_bottom_recess_d, upper_bottom_recess_depth);
}