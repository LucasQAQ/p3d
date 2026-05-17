// Parameters
curve_segments = 128;
$fn = curve_segments;
eps = 0.0005;

// Coordinate system: X left/right, Y front/back, Z up
base_z = 0;

// Reference envelope for main upright
reference_length = 0.303436;
reference_width  = 0.502485;
reference_height = 0.468362;
main_height      = 0.4684;

// Main upright rounded shell
main_outer_radius = reference_length / 2;
main_inner_left_margin   = 0.0550;
main_inner_right_margin  = 0.0550;
main_inner_front_margin  = 0.0740;
main_inner_back_margin   = 0.1063;
main_inner_length = reference_length - main_inner_left_margin - main_inner_right_margin;
main_inner_width  = reference_width  - main_inner_front_margin - main_inner_back_margin;
main_inner_radius = main_inner_length / 2;

// Small coaxial sleeve
small_axis_x = 0.1542;
small_axis_y = 0.4232;
small_wall_radius = 0.0714;
small_face_radius = small_wall_radius;
small_bore_radius = 0.0250;
small_sleeve_height = main_height;
small_recess_depth = 0.1764;

// Large lower annular circular solid
large_axis_x = 0.5416;
large_axis_y = 0.2448;
large_outer_radius = 0.2084;
large_annular_radius = 0.1756;
large_bore_radius = 0.0546;
large_boss_height = 0.2030;
large_recess_depth = 0.1280;

// Lower connection web
large_bridge_enabled = true;
large_bridge_width = 0.0600;
large_bridge_height = large_boss_height;
join_overlap = 0.0020;

// Rounded 2D profile
module rounded_rect_2d(size=[1, 1], r=0.1) {
    w = size[0];
    d = size[1];
    rr = min(r, min(w / 2, d / 2));

    hull() {
        translate([rr,     rr])     circle(r=rr);
        translate([w - rr, rr])     circle(r=rr);
        translate([w - rr, d - rr]) circle(r=rr);
        translate([rr,     d - rr]) circle(r=rr);
    }
}

// Main upright open curved shell
module main_upright() {
    linear_extrude(height=main_height, convexity=10)
        difference() {
            rounded_rect_2d([reference_length, reference_width], main_outer_radius);

            translate([main_inner_left_margin, main_inner_front_margin])
                rounded_rect_2d([main_inner_length, main_inner_width], main_inner_radius);
        }
}

// Circular solid tier
module circular_tier(cx, cy, r, h) {
    translate([cx, cy, base_z])
        cylinder(h=h, r=r, center=false);
}

// Small sleeve body
module small_sleeve() {
    circular_tier(small_axis_x, small_axis_y, small_face_radius, small_sleeve_height);
}

// Large annular boss body
module large_annular_boss() {
    circular_tier(large_axis_x, large_axis_y, large_outer_radius, large_boss_height);
}

// Narrow web tying the large boss to the main upright
module large_bridge() {
    bridge_x0 = reference_length - join_overlap;
    bridge_x1 = large_axis_x - large_outer_radius + join_overlap;
    bridge_len = bridge_x1 - bridge_x0;

    if (large_bridge_enabled && bridge_len > 0)
        translate([bridge_x0, large_axis_y - large_bridge_width / 2, base_z])
            cube([bridge_len, large_bridge_width, large_bridge_height], center=false);
}

// Underside stepped recess plus true central bore
module stepped_recess_cutter(cx, cy, recess_r, bore_r, recess_depth, through_height) {
    translate([cx, cy, base_z - eps])
        cylinder(h=recess_depth + 2 * eps, r=recess_r, center=false);

    translate([cx, cy, base_z - eps])
        cylinder(h=through_height + 2 * eps, r=bore_r, center=false);
}

// Main model
difference() {
    union() {
        main_upright();
        small_sleeve();
        large_annular_boss();
        large_bridge();
    }

    // Small underside recess and bore
    stepped_recess_cutter(
        small_axis_x,
        small_axis_y,
        small_wall_radius,
        small_bore_radius,
        small_recess_depth,
        small_sleeve_height
    );

    // Large underside recess and bore
    stepped_recess_cutter(
        large_axis_x,
        large_axis_y,
        large_annular_radius,
        large_bore_radius,
        large_recess_depth,
        large_boss_height
    );
}