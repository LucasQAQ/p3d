// ============================================
// Rounded Wedge Plate with Central Features
// ============================================

// --- Base plate parameters ---
plate_h    = 10;        // main plate thickness
lobe_r     = 24;        // rounding radius at each lobe

// Lobe center positions (define wedge shape)
p_front    = [58, 0];
p_rleft    = [-28, 40];
p_rright   = [-28, -40];

// --- Central circular through-opening ---
hole_d     = 46;        // through-hole diameter
hole_cx    = 6;         // hole center X offset from origin

// --- Annular raised step around opening ---
step_od    = 62;        // step ring outer diameter
step_top   = 2.5;       // step height above plate top surface
step_bot   = 3;         // deeper underside continuation depth

// --- Solid web bridge spanning the opening ---
web_w      = 5;         // web width
web_ang    = 15;        // web angular orientation (degrees)

// --- Boss / collar (concentric with hole, on web) ---
boss_od    = 20;        // boss outer diameter
boss_id    = 12;        // boss recess inner diameter (through)
boss_top   = 6;         // boss protrusion above plate top
boss_bot   = 4;         // boss extension below plate bottom

// --- Elongated through-slots near outer lobes ---
slot_l     = 16;        // slot length
slot_w     = 4;         // slot width

// Resolution
$fn = 120;

// ============================================
// Modules
// ============================================

// Wedge plate: convex hull of 3 cylindrical lobes
module wedge_plate() {
    hull() {
        for (p = [p_front, p_rleft, p_rright])
            translate([p[0], p[1], 0])
                cylinder(h = plate_h, r = lobe_r);
    }
}

// Annular ring positioned at given Z with given height
module annular_ring(od, id, h, z0) {
    translate([hole_cx, 0, z0])
        difference() {
            cylinder(h = h, d = od);
            translate([0, 0, -0.5])
                cylinder(h = h + 1, d = id);
        }
}

// Elongated slot (stadium shape, tall for clean boolean cuts)
module elong_slot(l, w) {
    hull() {
        translate([-(l - w)/2, 0, 0]) cylinder(d = w, h = 80, center = true);
        translate([ (l - w)/2, 0, 0]) cylinder(d = w, h = 80, center = true);
    }
}

// ============================================
// Main Assembly
// ============================================

union() {
    // --- Part A: Plate body with subtractive features ---
    difference() {
        union() {
            // Main wedge-shaped plate
            wedge_plate();
            // Shallow raised annular step on top surface
            annular_ring(step_od, hole_d, step_top, plate_h);
            // Deeper annular step on underside
            annular_ring(step_od, hole_d, step_bot, -step_bot);
        }

        // Large central through-opening
        translate([hole_cx, 0, -step_bot - 1])
            cylinder(h = plate_h + step_top + step_bot + 2, d = hole_d);

        // Through-slot near front lobe
        translate([42, 0, 0])
            rotate([0, 0, 90])
                elong_slot(slot_l, slot_w);

        // Through-slot near rear-left lobe
        translate([-12, 30, 0])
            rotate([0, 0, 30])
                elong_slot(slot_l, slot_w);

        // Through-slot near rear-right lobe
        translate([-12, -30, 0])
            rotate([0, 0, -30])
                elong_slot(slot_l, slot_w);
    }

    // --- Part B: Solid web bridge spanning the opening ---
    difference() {
        intersection() {
            // Clip web to the hole cylinder boundary
            translate([hole_cx, 0, -step_bot])
                cylinder(h = plate_h + step_top + step_bot, d = hole_d);
            // Rectangular web bar rotated through the opening
            translate([hole_cx, 0, 0])
                rotate([0, 0, web_ang])
                    translate([-hole_d/2, -web_w/2, -step_bot])
                        cube([hole_d, web_w, plate_h + step_top + step_bot]);
        }
        // Ensure boss recess passes through web as well
        translate([hole_cx, 0, -boss_bot - 1])
            cylinder(h = plate_h + boss_top + boss_bot + 2, d = boss_id);
    }

    // --- Part C: Boss/collar centered on opening, supported by web ---
    difference() {
        // Solid collar extending above and below plate
        translate([hole_cx, 0, -boss_bot])
            cylinder(h = plate_h + boss_top + boss_bot, d = boss_od);
        // Coaxial circular recess (through-hole in boss)
        translate([hole_cx, 0, -boss_bot - 1])
            cylinder(h = plate_h + boss_top + boss_bot + 2, d = boss_id);
    }
}