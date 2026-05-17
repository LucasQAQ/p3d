// Parameters
$fn = 96;

eps = 0.02;
arc_steps = 56;
slot_steps = 28;

// Lower rounded base
base_length = 112;
base_width = 76;
base_height = 6;
base_corner_radius = 16;

// Added section 1: broad shallow circular/arc tier
tier_z = base_height;
tier_height = 2.2;

tier_arc_center = [-2, 0];
tier_arc_radius = 24;
tier_arc_width = 14;
tier_arc_start = -145;
tier_arc_end = 145;

tier_left_center = [-28, 0];
tier_left_diameter = 38;

tier_right_center = [22, 0];
tier_right_diameter = 34;

tier_left_hole_diameter = 9;
tier_right_hole_diameter = 8;

tier_slot_width = 4.6;
tier_slot_upper_start = 38;
tier_slot_upper_end = 102;
tier_slot_lower_start = -102;
tier_slot_lower_end = -38;

// Added section 2: raised inner arc pad
upper_arc_z = base_height + tier_height;
upper_arc_height = 2.4;

upper_arc_radius = 24;
upper_arc_width = 8;
upper_arc_start = 28;
upper_arc_end = 112;

upper_slot_width = 3.2;
upper_slot_start = 52;
upper_slot_end = 88;

// Added section 3: deeper contained circular continuation
boss_z = base_height + tier_height;
boss_height = 4.2;
boss_center = tier_right_center;
boss_diameter = 24;
boss_hole_diameter = tier_right_hole_diameter;

// Helper functions
function arc_point(c, r, a) = [c[0] + r * cos(a), c[1] + r * sin(a)];

// Rounded rectangle profile
module rounded_rect_2d(l, w, r) {
    hull() {
        for (x = [-l/2 + r, l/2 - r])
            for (y = [-w/2 + r, w/2 - r])
                translate([x, y])
                    circle(r = r);
    }
}

// Rounded slot profile
module capsule_2d(l, w) {
    hull() {
        translate([-l/2 + w/2, 0])
            circle(d = w);
        translate([ l/2 - w/2, 0])
            circle(d = w);
    }
}

// Swept circular arc pad with rounded ends
module arc_band_2d(c, r, w, a0, a1, steps) {
    union() {
        for (i = [0 : steps - 1]) {
            let(
                p0 = arc_point(c, r, a0 + (a1 - a0) * i / steps),
                p1 = arc_point(c, r, a0 + (a1 - a0) * (i + 1) / steps)
            )
            hull() {
                translate(p0)
                    circle(d = w);
                translate(p1)
                    circle(d = w);
            }
        }
    }
}

// Extrude a raised layer with slight overlap
module raised_layer(z, h) {
    translate([0, 0, z - eps])
        linear_extrude(height = h + eps, convexity = 10)
            children();
}

// Lower body
module base_body() {
    linear_extrude(height = base_height, convexity = 6)
        rounded_rect_2d(base_length, base_width, base_corner_radius);
}

// Broad shallow tier with real openings
module broad_tier_profile() {
    difference() {
        union() {
            arc_band_2d(tier_arc_center, tier_arc_radius, tier_arc_width, tier_arc_start, tier_arc_end, arc_steps);
            translate(tier_left_center)
                circle(d = tier_left_diameter);
            translate(tier_right_center)
                circle(d = tier_right_diameter);
        }

        translate(tier_left_center)
            circle(d = tier_left_hole_diameter);

        translate(tier_right_center)
            circle(d = tier_right_hole_diameter);

        arc_band_2d(tier_arc_center, tier_arc_radius, tier_slot_width, tier_slot_upper_start, tier_slot_upper_end, slot_steps);
        arc_band_2d(tier_arc_center, tier_arc_radius, tier_slot_width, tier_slot_lower_start, tier_slot_lower_end, slot_steps);
    }
}

// Raised inner arc with its own slot
module upper_arc_profile() {
    difference() {
        arc_band_2d(tier_arc_center, upper_arc_radius, upper_arc_width, upper_arc_start, upper_arc_end, arc_steps);

        arc_band_2d(tier_arc_center, upper_arc_radius, upper_slot_width, upper_slot_start, upper_slot_end, slot_steps);

        translate(boss_center)
            circle(d = boss_hole_diameter);
    }
}

// Deeper circular continuation with round opening
module boss_profile() {
    difference() {
        translate(boss_center)
            circle(d = boss_diameter);

        translate(boss_center)
            circle(d = boss_hole_diameter);
    }
}

// Main model
union() {
    base_body();

    raised_layer(tier_z, tier_height)
        broad_tier_profile();

    raised_layer(upper_arc_z, upper_arc_height)
        upper_arc_profile();

    raised_layer(boss_z, boss_height)
        boss_profile();
}