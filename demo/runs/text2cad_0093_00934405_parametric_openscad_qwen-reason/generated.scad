// OpenSCAD Parametric Model: Rounded Wedge Base with Features
$fn = 100;

// === DIMENSIONAL PARAMETERS ===
base_len = 0.740822;
base_wid = 0.672842;
base_hgt = 0.171797;
corner_r = 0.05;

cen_x = 0.3687;
cen_y = 0.4283;
cen_r  = 0.2165;

up_x = 0.3688;
up_y = 0.4282;
up_r = 0.2165;
up_hgt = 0.020616;

web_x1 = 0.3434;
web_y1 = 0.2119;
web_len = 0.025368;
web_wid = 0.432873;
web_hgt = base_hgt;

sm_x = 0.4796;
sm_y = 0.4282;
sm_r = 0.0754;
sm_hgt = base_hgt;

rec_x = 0.4796;
rec_y = 0.4283;
rec_r = 0.0754;
rec_z_top = 0.0206;
rec_z_bot = -0.1512;

pad_hgt = 0.1512;

// === GEOMETRY MODULES ===

module base_footprint() {
    translate([corner_r, corner_r])
        offset(r=corner_r)
            square([base_len - 2*corner_r, base_wid - 2*corner_r]);
}

module positive_solid() {
    union() {
        linear_extrude(base_hgt)
            base_footprint();

        translate([0, 0, -pad_hgt])
            linear_extrude(pad_hgt)
                base_footprint();

        translate([web_x1, web_y1, 0])
            cube([web_len, web_wid, web_hgt]);

        translate([sm_x, sm_y, 0])
            cylinder(h=sm_hgt, r=sm_r);

        translate([up_x, up_y, base_hgt])
            difference() {
                cylinder(h=up_hgt, r=up_r);
                translate([0, 0, -0.01])
                    cylinder(h=up_hgt + 0.02, r=cen_r);
            }
    }
}

module negative_features() {
    translate([cen_x, cen_y, -0.01])
        cylinder(h=base_hgt + up_hgt + 0.02, r=cen_r);

    translate([rec_x, rec_y, rec_z_bot])
        cylinder(h=rec_z_top - rec_z_bot, r=rec_r);

    translate([0.10, 0.10, -0.01])
        cube([0.035, 0.12, base_hgt + 0.02]);

    translate([base_len - 0.135, base_wid - 0.12, -0.01])
        cube([0.035, 0.12, base_hgt + 0.02]);
}

// === FINAL ASSEMBLY ===
difference() {
    positive_solid();
    negative_features();
}