// === Parameters ===
$fn = 120;

// Base — rounded solid disk
base_d       = 80;    // base diameter
base_h       = 10;    // base height
base_fillet  = 2.5;   // edge fillet radius

// Tier 1 — broad shallow circular pad
t1_d  = 64;
t1_h  = 3;
t1_fil = 1.0;

// Tier 2 — arc-shaped pad (partial cylinder sector)
t2_d      = 48;
t2_h      = 4.5;
t2_arc    = 210;      // arc sweep angle (degrees)
t2_rot    = -15;      // rotation to orient the open side

// Tier 3 — deeper contained round continuation
t3_d  = 26;
t3_h  = 7;
t3_fil = 0.8;

// Small round void holes (through tier 3)
n_holes  = 3;
hole_d   = 4.5;
hole_r   = 7;         // radial distance from center
hole_ang = 30;        // starting angle offset

// Elongated slot voids (through tier 1 / tier 2 region)
n_slots   = 3;
slot_l    = 14;
slot_w    = 3.5;
slot_r    = 26;       // radial distance from center
slot_ang  = 20;       // starting angle offset

// Arc-cutaway void that trims one side of tier 2
cut_d  = 36;
cut_x  = 32;          // offset along X for the arc cutaway

// Central through-hole
center_hole_d = 5;

// === Helper Modules ===

// Rounded cylinder with filleted top and bottom edges
module rounded_cylinder(d, h, r_fillet) {
    rotate_extrude()
        offset(r = r_fillet)
            offset(delta = -r_fillet)
                translate([0, 0])
                    square([d / 2, h]);
}

// Arc pad: a cylinder trimmed to a sector of given sweep angle
module arc_pad(d, h, angle) {
    // Build a pie-slice polygon for intersection
    steps = max(1, floor(angle));
    intersection() {
        cylinder(d = d, h = h);
        linear_extrude(height = h)
            polygon(concat(
                [[0, 0]],
                [for (a = [0 : 1 : angle])
                    [d * cos(a - angle / 2), d * sin(a - angle / 2)]]
            ));
    }
}

// Slot (stadium / elongated hole)
module slot(l, w, h) {
    hull() {
        translate([-(l - w) / 2, 0, 0]) cylinder(d = w, h = h);
        translate([ (l - w) / 2, 0, 0]) cylinder(d = w, h = h);
    }
}

// === Assembly ===

// Total punch-through height for voids
punch_h = base_h + t1_h + t2_h + t3_h + 2;

difference() {
    union() {
        // 1) Rounded base disk
        color("SlateGray")
            rounded_cylinder(d = base_d, h = base_h, r_fillet = base_fillet);

        // 2) Tier 1 — broad shallow circular pad centered on base top
        color("SteelBlue")
        translate([0, 0, base_h])
            rounded_cylinder(d = t1_d, h = t1_h, r_fillet = t1_fil);

        // 3) Tier 2 — arc-shaped pad nested atop tier 1
        color("CadetBlue")
        translate([0, 0, base_h + t1_h])
            rotate([0, 0, t2_rot])
                arc_pad(d = t2_d, h = t2_h, angle = t2_arc);

        // 4) Tier 3 — deeper round pad nested inside tier 2 footprint
        color("Teal")
        translate([0, 0, base_h + t1_h])
            rounded_cylinder(d = t3_d, h = t3_h, r_fillet = t3_fil);
    }

    // --- Voids ---

    // 5) Central through-hole from bottom to top
    translate([0, 0, -1])
        cylinder(d = center_hole_d, h = punch_h);

    // 6) Small round holes arrayed in tier 3 region
    for (i = [0 : n_holes - 1]) {
        a = hole_ang + i * (360 / n_holes);
        translate([hole_r * cos(a), hole_r * sin(a), -1])
            cylinder(d = hole_d, h = punch_h);
    }

    // 7) Elongated slot voids arrayed in tier 1 / tier 2 annular region
    for (i = [0 : n_slots - 1]) {
        a = slot_ang + i * (360 / n_slots);
        translate([slot_r * cos(a), slot_r * sin(a), -1])
            rotate([0, 0, a])
                slot(l = slot_l, w = slot_w, h = punch_h);
    }

    // 8) Arc-cutaway void — trims the open side of tier 2 with a curved cut
    //    This creates a concave curved edge on the raised arc pad
    translate([cut_x, 0, base_h + t1_h - 0.1])
        cylinder(d = cut_d, h = t2_h + t3_h + 1);

    // 9) Secondary smaller arc cutaway on opposite side for visual balance
    translate([-cut_x * 0.7, cut_x * 0.5, base_h + t1_h - 0.1])
        cylinder(d = cut_d * 0.6, h = t2_h + 1);
}