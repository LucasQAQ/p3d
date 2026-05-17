$fn = 100;

// --- Parameters ---
base_dia = 60;
base_height = 8;
base_fillet = 4;

sleeve_height = 42;
sleeve_outer = 28;
sleeve_inner = 18;

arm_length = 48;
arm_width = 16;
arm_height = 10;
arm_cut_start = 12;
arm_cut_length = 26;
arm_cut_depth = 5;
end_hole_dia = 6;

rib_thickness = 3;
rib_height = 6;
rib_near_end = 6;
rib_near_sleeve = 26;

// --- Modules ---

// Low rounded base
module base_part() {
    minkowski() {
        cylinder(h = base_height - 2 * base_fillet, d = base_dia - 2 * base_fillet, center = true);
        sphere(r = base_fillet);
    }
}

// Tall hollow annular sleeve
module sleeve_part() {
    difference() {
        cylinder(h = sleeve_height, d = sleeve_outer, center = true);
        cylinder(h = sleeve_height + 2, d = sleeve_inner, center = true);
    }
}

// Projecting side arm with stepped underside and end hole
module arm_part() {
    translate([0, 0, arm_height / 2]) {
        difference() {
            // Main arm body
            linear_extrude(height = arm_height) {
                hull() {
                    square([arm_length, arm_width]);
                    translate([arm_length, 0]) circle(r = arm_width / 2);
                }
            }
            // Lower cutaway creating stepped underside
            translate([arm_cut_start + arm_cut_length / 2, 0, -arm_height / 2 + arm_cut_depth / 2])
                cube([arm_cut_length, arm_width + 2, arm_cut_depth], center = true);
            // Rounded opening at the tip
            translate([arm_length, 0, 0])
                rotate([0, 90, 0]) cylinder(h = arm_width + 2, d = end_hole_dia, center = true);
        }
    }
}

// Thin triangular rib/web on top of the arm
module rib_part() {
    translate([0, 0, arm_height / 2]) {
        linear_extrude(height = rib_thickness, center = true) {
            polygon(points = [
                [arm_length - rib_near_end, 0],
                [arm_length - rib_near_sleeve, 0],
                [arm_length - rib_near_end, rib_height]
            ]);
        }
    }
}

// --- Assembly ---
union() {
    // Base centered at origin
    translate([0, 0, base_height / 2]) base_part();

    // Sleeve sitting on base
    translate([0, 0, base_height + sleeve_height / 2]) sleeve_part();

    // Arm attached to sleeve side, aligned to base top
    translate([sleeve_outer / 2, 0, base_height]) {
        arm_part();
        rib_part();
    }
}