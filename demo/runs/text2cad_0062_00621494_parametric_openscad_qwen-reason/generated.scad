// OpenSCAD Parametric Model
// Reference Envelope & Main Body
env_L = 0.303436;
env_W = 0.502485;
main_H = 0.4684;

// Small Sleeve & Bore
s_x = 0.1542;
s_y = 0.4232;
s_R = 0.0714;
s_bore_R = 0.025;
s_h = 0.15;

// Large Annulus & Bore
l_x = 0.5416;
l_y = 0.2448;
l_outer_R = 0.2084;
l_ann_R = 0.1756;
l_bore_R = 0.0546;
l_h = 0.203;

// Underside Recess Depths
l_rec_depth = 0.128;
s_rec_x = 0.1541;
s_rec_y = 0.4232;
s_rec_depth = 0.1764;

// Base Plate Support
base_z_min = -0.18;
base_thick = 0.18;

// Resolution
$fn = 100;

// Reusable Modules
module main_upright() {
    cube([env_L, env_W, main_H]);
}

module small_sleeve() {
    translate([s_x, s_y, 0]) cylinder(h=s_h, r=s_R);
}

module large_annulus() {
    translate([l_x, l_y, 0]) cylinder(h=l_h, r=l_outer_R);
}

module base_plate() {
    translate([0.4, 0.25, base_z_min]) cube([0.85, 0.55, base_thick]);
}

module curved_cavity() {
    translate([env_L/2, env_W/2, main_H/2]) {
        cylinder(h=main_H, r=env_L*0.42, center=true);
        sphere(r=env_L*0.48);
    }
}

// Main Assembly
difference() {
    union() {
        main_upright();
        small_sleeve();
        large_annulus();
        base_plate();
    }

    // Open curved interior
    curved_cavity();

    // Large annulus inner boundary cut
    translate([l_x, l_y, -0.01]) cylinder(h=l_h+0.02, r=l_ann_R);

    // Underside larger recess
    translate([l_x, l_y, -l_rec_depth]) cylinder(h=l_rec_depth, r=l_ann_R);

    // Underside smaller recess
    translate([s_rec_x, s_rec_y, -s_rec_depth]) cylinder(h=s_rec_depth, r=s_R);

    // Through bores (true voids)
    translate([l_x, l_y, 0]) cylinder(h=main_H+0.5, r=l_bore_R, center=true);
    translate([s_x, s_y, 0]) cylinder(h=main_H+0.5, r=s_bore_R, center=true);
}