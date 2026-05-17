// Parameters
$fn = 96;

eps = 0.02;
join_overlap = 0.08;

// Main plate
plate_thickness = 10;

// Rounded wedge outline lobes
nose_lobe_x = 54;
nose_lobe_y = 0;
nose_lobe_r = 22;

upper_lobe_x = -38;
upper_lobe_y = 34;
upper_lobe_r = 19;

lower_lobe_x = -38;
lower_lobe_y = -34;
lower_lobe_r = 19;

lobe_points = [
    [nose_lobe_x,  nose_lobe_y,  nose_lobe_r],
    [upper_lobe_x, upper_lobe_y, upper_lobe_r],
    [lower_lobe_x, lower_lobe_y, lower_lobe_r]
];

// Central through opening and steps
opening_x = 0;
opening_y = 0;
opening_d = 42;

top_step_outer_d = 62;
top_step_height = 2.4;

bottom_step_outer_d = 56;
bottom_step_depth = 6;

// Solid web inside the central opening
web_width = 6;
web_y_offset = -9;
web_angle = 0;
web_overlap = 1.2;
web_length = opening_d + 2 * web_overlap + 12;
web_z_min = -bottom_step_depth;
web_height = plate_thickness + top_step_height + bottom_step_depth;

// Small boss / collar
boss_x = 30;
boss_y = -20;
boss_outer_d = 26;
boss_top_height = 5;

boss_bottom_outer_d = 19;
boss_bottom_depth = 5;

boss_bore_d = 7;
boss_recess_d = 15;
boss_recess_depth = 3.2;

// Through slots
slot_length = 20;
slot_width = 5.5;

slot_specs = [
    [50,   0,  90],
    [-36, 29,  32],
    [-36,-29, -32]
];

// Cutter reach
max_top_height = max(top_step_height, boss_top_height);
max_bottom_depth = max(bottom_step_depth, boss_bottom_depth);
cutter_z = -max_bottom_depth - eps;
cutter_h = plate_thickness + max_top_height + max_bottom_depth + 2 * eps;


// 2D rounded wedge profile
module plate_outline_2d() {
    hull() {
        for (p = lobe_points)
            translate([p[0], p[1]])
                circle(r = p[2]);
    }
}

// 2D rounded slot profile
module rounded_slot_2d(len, wid) {
    hull() {
        translate([-(len - wid) / 2, 0])
            circle(d = wid);
        translate([(len - wid) / 2, 0])
            circle(d = wid);
    }
}

// Base wedge plate
module base_plate() {
    linear_extrude(height = plate_thickness, convexity = 8)
        plate_outline_2d();
}

// Shallow top step around the main opening
module central_top_step_solid() {
    translate([opening_x, opening_y, plate_thickness - join_overlap])
        cylinder(h = top_step_height + join_overlap, d = top_step_outer_d);
}

// Deeper underside continuation around the main opening
module central_bottom_step_solid() {
    translate([opening_x, opening_y, -bottom_step_depth])
        cylinder(h = bottom_step_depth + join_overlap, d = bottom_step_outer_d);
}

// Raised boss on top face
module boss_top_solid() {
    translate([boss_x, boss_y, plate_thickness - join_overlap])
        cylinder(h = boss_top_height + join_overlap, d = boss_outer_d);
}

// Deeper underside boss continuation
module boss_bottom_solid() {
    translate([boss_x, boss_y, -boss_bottom_depth])
        cylinder(h = boss_bottom_depth + join_overlap, d = boss_bottom_outer_d);
}

// Large central circular cutter
module central_opening_cutter() {
    translate([opening_x, opening_y, cutter_z])
        cylinder(h = cutter_h, d = opening_d);
}

// Boss through bore cutter
module boss_bore_cutter() {
    translate([boss_x, boss_y, cutter_z])
        cylinder(h = cutter_h, d = boss_bore_d);
}

// Blind top recess cutter in boss
module boss_recess_cutter() {
    translate([
        boss_x,
        boss_y,
        plate_thickness + boss_top_height - boss_recess_depth
    ])
        cylinder(h = boss_recess_depth + eps, d = boss_recess_d);
}

// Elongated through-slot cutter
module slot_cutter(x, y, ang) {
    translate([x, y, cutter_z])
        rotate([0, 0, ang])
            linear_extrude(height = cutter_h, convexity = 4)
                rounded_slot_2d(slot_length, slot_width);
}

// Solid web crossing part of the central opening
module central_web() {
    translate([opening_x, opening_y, web_z_min])
        rotate([0, 0, web_angle])
            intersection() {
                cylinder(h = web_height, d = opening_d + 2 * web_overlap);
                translate([0, web_y_offset, web_height / 2])
                    cube([web_length, web_width, web_height], center = true);
            }
}

// Main solid before the protected web is added
module cut_plate_body() {
    difference() {
        union() {
            base_plate();
            central_top_step_solid();
            central_bottom_step_solid();
            boss_top_solid();
            boss_bottom_solid();
        }

        central_opening_cutter();

        for (s = slot_specs)
            slot_cutter(s[0], s[1], s[2]);

        boss_bore_cutter();
        boss_recess_cutter();
    }
}

// Final model
union() {
    cut_plate_body();
    central_web();
}