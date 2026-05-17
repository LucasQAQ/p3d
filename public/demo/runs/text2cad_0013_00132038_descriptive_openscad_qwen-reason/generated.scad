$fn = 96;

// Parameters
base_radius = 42;
base_height = 9;
base_edge_r = 3.5;

t1_radius = 32;
t1_height = 4.5;
t1_z = base_height;

t2_radius = 18;
t2_height = 7;
t2_z = t1_z + t1_height;

t3_inner_r = 22;
t3_outer_r = 30;
t3_height = 5.5;
t3_z = base_height;
t3_start_ang = 45;
t3_sweep_ang = 90;

h1_d = 4.0; h1_x = 20; h1_y = 0;
h2_d = 3.0; h2_x = 0;  h2_y = 0;
h3_d = 2.5; h3_x = 26; h3_y = 0;
slot_w = 3.0; slot_l = 12; slot_x = 0; slot_y = -12;

// Modules
module rounded_base(r, h, edge_r) {
    minkowski(convexity = 10) {
        cylinder(r = r - edge_r, h = h - 2 * edge_r, center = true);
        sphere(r = edge_r);
    }
}

module tier1() {
    cylinder(r = t1_radius, h = t1_height, center = true);
}

module tier2() {
    cylinder(r = t2_radius, h = t2_height, center = true);
}

module tier3() {
    translate([0, 0, t3_height / 2])
    rotate([0, 0, t3_start_ang])
    rotate_extrude(angle = t3_sweep_ang)
        translate([t3_inner_r, 0, 0]) square([t3_outer_r - t3_inner_r, t3_height]);
}

module cutouts() {
    translate([h1_x, h1_y, t1_z + t1_height / 2])
        cylinder(h = t1_height + 2, d = h1_d, center = true);
    translate([h2_x, h2_y, t2_z + t2_height / 2])
        cylinder(h = t2_height + 2, d = h2_d, center = true);
    rotate([0, 0, t3_start_ang + t3_sweep_ang / 2])
    translate([h3_x, h3_y, t3_z + t3_height / 2])
        cylinder(h = t3_height + 2, d = h3_d, center = true);
    translate([slot_x, slot_y, t1_z + t1_height / 2])
        hull() {
            cylinder(h = t1_height + 2, d = slot_w, center = true);
            translate([slot_l, 0, 0]) cylinder(h = t1_height + 2, d = slot_w, center = true);
        }
}

// Assembly
difference() {
    union() {
        rounded_base(base_radius, base_height, base_edge_r);
        translate([0, 0, t1_z]) tier1();
        translate([0, 0, t2_z]) tier2();
        translate([0, 0, t3_z]) tier3();
    }
    cutouts();
}