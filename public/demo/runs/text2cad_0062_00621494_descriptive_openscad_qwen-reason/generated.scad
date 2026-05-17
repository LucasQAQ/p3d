// ================= PARAMETERS =================
$fn = 64;

// Base & Body Dimensions
base_w = 90;
base_d = 65;
base_h = 14;
base_corner_r = 16;

// Rear Arc Wall
wall_r = 42;
wall_thick = 10;
wall_h = 48;
wall_arc_deg = 150;
wall_end_r = 8;

// Annular Collars (Lower & Upper)
c1_r_out = 25;
c1_r_in = 14;
c1_h = 20;
c1_z = 10;
c1_x = 34;

c2_r_out = 30;
c2_r_in = 16;
c2_h = 28;
c2_z = 24;
c2_x = 34;

// Underside Stepped Depths
step1_d = 38;
step1_h = 7;
step2_d = 22;
step2_h = 14;

// Slot in Rear Wall
slot_w = 18;
slot_d = 14;
slot_h = 32;
slot_z = 18;

// Through Bore
bore_d = c1_r_in * 2;

// ================= MODULES =================

// Rounded base block with filleted edges
module rounded_base() {
    minkowski() {
        cube([base_w - 2*base_corner_r, base_d - 2*base_corner_r, base_h], center=true);
        sphere(r=base_corner_r);
    }
}

// Arc-based open wall with rounded vertical ends
module rear_arc_wall() {
    // Curved main section
    rotate_extrude(angle=wall_arc_deg, convexity=10) {
        translate([wall_r - wall_thick/2, 0, 0])
            square([wall_thick, wall_h], center=true);
    }
    // Rounded end caps
    translate([wall_r * sin(wall_arc_deg/2), wall_r * cos(wall_arc_deg/2), 0])
        cylinder(h=wall_h, r=wall_end_r, center=true);
    translate([-wall_r * sin(wall_arc_deg/2), wall_r * cos(wall_arc_deg/2), 0])
        cylinder(h=wall_h, r=wall_end_r, center=true);
}

// Hollow annular sleeve/collar
module annular_collar(r_out, r_in, height) {
    difference() {
        cylinder(h=height, r=r_out, center=true);
        cylinder(h=height + 2, r=r_in, center=true);
    }
}

// ================= MAIN ASSEMBLY =================
difference() {
    // --- ADDITIVE GEOMETRY ---
    union() {
        // Main base with rounded sides
        translate([0, 0, base_h/2])
            rounded_base();

        // Taller rear arc wall
        translate([0, 0, base_h])
            rear_arc_wall();

        // Lower annular collar
        translate([c1_x, 0, c1_z])
            annular_collar(c1_r_out, c1_r_in, c1_h);

        // Upper annular collar
        translate([c2_x, 0, c2_z])
            annular_collar(c2_r_out, c2_r_in, c2_h);
    }

    // --- SUBTRACTIVE GEOMETRY ---

    // Slot-like interior cut in rear wall
    translate([0, wall_r - 2, slot_z])
        cube([slot_w, slot_d, slot_h], center=true);

    // Stepped bottom depth removals
    translate([0, 0, -step1_h])
        cylinder(h=step1_h + 2, d=step1_d, center=true);
    translate([0, 0, -step2_h])
        cylinder(h=step2_h + 2, d=step2_d, center=true);

    // Internal bores through collars
    translate([c1_x, 0, c1_z])
        cylinder(h=c1_h + 2, d=c1_r_in * 2, center=true);
    translate([c2_x, 0, c2_z])
        cylinder(h=c2_h + 2, d=c2_r_in * 2, center=true);

    // Continuous vertical bore through base and stepped features
    translate([0, 0, -2])
        cylinder(h=base_h + wall_h + 4, d=bore_d, center=false);
}