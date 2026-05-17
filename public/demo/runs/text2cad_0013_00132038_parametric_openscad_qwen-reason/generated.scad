$fn = 100;

// Base Parameters
base_len = 0.285175;
base_wid = 0.72717;
base_hgt = 0.0446;

// Circular Body Parameters
circ_r = 0.259;
circ_h = 0.0891;
circ_x = 0.1419;
circ_y = 0.3522;

// Broad Pad Parameters
pad_len = 0.546349;
pad_wid = 0.631906;
pad_hgt = 0.0337;
pad_x = 0.1419;
pad_y_front = 0.0953;

// Top Tier Parameters
top_hgt = 0.098;
top_x = 0.1419;
top_c1_y = 0.3522; top_c1_r = 0.0714;
top_c2_y = 0.1648; top_c2_r = 0.0388;
top_c3_y = 0.5396; top_c3_r = 0.0389;

// Calculated Z Levels (absolute heights from base datum)
z_base = 0;
z_body = z_base + base_hgt;
z_pad  = z_body + circ_h;
z_top  = z_pad  + pad_hgt;

// Helper Module: Rounded Rectangle Profile
module rounded_rect(l, w, r) {
    hull() {
        translate([r, r]) circle(r=r);
        translate([l-r, r]) circle(r=r);
        translate([l-r, w-r]) circle(r=r);
        translate([r, w-r]) circle(r=r);
    }
}

// Base Module
module base() {
    translate([0, 0, z_base]) {
        linear_extrude(height=base_hgt, center=false) {
            rounded_rect(base_len, base_wid, 0.015);
        }
    }
}

// Circular Body Module
module circular_body() {
    translate([circ_x, circ_y, z_body]) {
        cylinder(h=circ_h, r=circ_r, center=false);
    }
}

// Broad Pad Module
module broad_pad() {
    translate([pad_x - pad_len/2, pad_y_front, z_pad]) {
        linear_extrude(height=pad_hgt, center=false) {
            rounded_rect(pad_len, pad_wid, 0.015);
        }
    }
}

// Top Circular Profiles Module
module top_profiles() {
    translate([top_x, top_c1_y, z_top]) {
        union() {
            cylinder(h=top_hgt, r=top_c1_r, center=false);
            translate([0, top_c2_y - top_c1_y, 0]) cylinder(h=top_hgt, r=top_c2_r, center=false);
            translate([0, top_c3_y - top_c1_y, 0]) cylinder(h=top_hgt, r=top_c3_r, center=false);
        }
    }
}

// Main Assembly
union() {
    base();
    circular_body();
    broad_pad();
    top_profiles();
}