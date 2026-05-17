$fn = 100;

// --- Parametric Dimensions ---
plate_length = 100;
plate_width_narrow = 45;
plate_width_wide = 75;
plate_thickness = 14;
corner_radius = 12;

center_hole_d = 32;
step_outer_d = 50;
step_height = 3;

web_width = 9;
web_height = 3;
web_span_y = step_outer_d + 6;

boss_outer_d = 26;
boss_height = 6;
boss_offset_x = 32;
boss_offset_y = 0;
boss_recess_d = 15;
boss_recess_depth = 3.5;

slot_length = 22;
slot_width = 7;
slot_offset_x = plate_length/2 - 14;
slot_offset_y = plate_width_wide/2 - corner_radius;
slot_angle = 20;

bottom_counterbore_d = 40;
bottom_counterbore_depth = 5;
boss_bottom_recess_d = 18;
boss_bottom_recess_depth = 5;

total_cut_height = plate_thickness + step_height + bottom_counterbore_depth;

// --- 2D Profile Modules ---
module wedge_profile() {
    // Trapezoidal wedge footprint with rounded ends
    offset(r = corner_radius) {
        polygon([
            [-plate_length/2, -plate_width_narrow/2],
            [plate_length/2, -plate_width_wide/2],
            [plate_length/2, plate_width_wide/2],
            [-plate_length/2, plate_width_narrow/2]
        ]);
    }
}

module pill_shape(len, w) {
    // Rounded rectangle / elongated slot profile
    hull() {
        translate([-len/2 + w/2, 0]) circle(d = w);
        translate([len/2 - w/2, 0]) circle(d = w);
    }
}

// --- Main Geometry Construction ---
difference() {
    // 1. Union of base plate and all solid additions
    union() {
        // Base wedge plate
        linear_extrude(height = plate_thickness, center = true) {
            wedge_profile();
        }

        // Top: Shallow circular raised step around center
        translate([0, 0, plate_thickness/2]) {
            cylinder(h = step_height, d = step_outer_d, center = false);
        }

        // Top: Narrow solid straight web bridging the central opening
        translate([0, 0, plate_thickness/2]) {
            cube([web_width, web_span_y, web_height], center = true);
        }

        // Top: Solid boss/collar near center
        translate([boss_offset_x, boss_offset_y, plate_thickness/2]) {
            cylinder(h = boss_height, d = boss_outer_d, center = false);
        }

        // Bottom: Deeper counterbore continuation beneath central opening
        translate([0, 0, -plate_thickness/2 - bottom_counterbore_depth]) {
            cylinder(h = bottom_counterbore_depth, d = bottom_counterbore_d, center = false);
        }

        // Bottom: Deeper recess continuation beneath boss
        translate([boss_offset_x, boss_offset_y, -plate_thickness/2 - boss_bottom_recess_depth]) {
            cylinder(h = boss_bottom_recess_depth, d = boss_bottom_recess_d, center = false);
        }
    }

    // 2. Subtractive Features (Holes & Slots)
    // Central circular through opening
    translate([0, 0, -total_cut_height/2 - 1]) {
        cylinder(h = total_cut_height + 2, d = center_hole_d, center = false);
    }

    // Boss top coaxial recess
    translate([boss_offset_x, boss_offset_y, plate_thickness/2 + boss_height - boss_recess_depth]) {
        cylinder(h = boss_recess_depth, d = boss_recess_d, center = false);
    }

    // Boss bottom coaxial recess continuation
    translate([boss_offset_x, boss_offset_y, -plate_thickness/2 - boss_bottom_recess_depth]) {
        cylinder(h = boss_bottom_recess_depth, d = boss_recess_d, center = false);
    }

    // Elongated through slots near rounded outer lobes
    for (y_sign = [-1, 1]) {
        translate([slot_offset_x, y_sign * slot_offset_y, -total_cut_height/2 - 1]) {
            rotate([0, 0, y_sign * slot_angle]) {
                linear_extrude(height = total_cut_height + 2, center = false) {
                    pill_shape(slot_length, slot_width);
                }
            }
        }
    }
}