// Parametric Mounting Bracket
// Features: rounded base plate, two annular collar/sleeve bosses
// with through-bores and stepped counterbores, arc-shaped rear
// wall with rounded ends and slot interior, solid side buttresses.

$fn = 100;

// =================== PARAMETERS ===================

// Base plate dimensions
base_w       = 88;      // X width
base_d       = 56;      // Y depth
base_h       = 8;       // Z thickness
base_r       = 4;       // corner rounding radius

// Annular collar dimensions (hollow sleeves)
collar_od    = 28;      // outer diameter
bore_d       = 14;      // through-bore diameter
collar1_h    = 14;      // lower collar height above base top
collar2_h    = 22;      // upper collar height above base top
collar_sep   = 42;      // center-to-center X spacing
collar_y     = 10;      // Y offset toward front

// Stepped counterbores from underside
cbore_d      = 22;      // counterbore diameter
cbore1_depth = 3;       // depth for collar 1 (shallow step)
cbore2_depth = 5;       // depth for collar 2 (deeper step)

// Curved rear wall (arc-based upright with slot interior)
arc_or       = 30;      // outer arc radius
arc_ir       = 23;      // inner arc radius (slot boundary)
arc_h        = 50;      // total wall height
arc_span     = 150;     // angular span in degrees
arc_cy       = 4;       // Y center offset of arc

// Derived arc values
arc_mid_r    = (arc_or + arc_ir) / 2;
arc_end_r    = (arc_or - arc_ir) / 2;

// Side buttress dimensions
butt_d       = 14;      // buttress cylinder diameter
butt_h       = 18;      // buttress height above base

// =================== MODULES ===================

// Rounded rectangular base plate
module base_plate() {
    linear_extrude(base_h)
        offset(r = base_r)
        offset(delta = -base_r)
        square([base_w, base_d], center = true);
}

// 2D arc profile: ring sector with rounded end caps
module arc_profile_2d() {
    // Ring sector via intersection of annulus with pie slice
    intersection() {
        difference() {
            circle(r = arc_or);
            circle(r = arc_ir);
        }
        // Pie slice polygon covering desired angular span
        polygon(concat(
            [[0, 0]],
            [for (a = [-arc_span/2 : 2 : arc_span/2])
                [(arc_or + 1) * cos(a), (arc_or + 1) * sin(a)]]
        ));
    }
    // Rounded end caps at arc terminations
    for (sign = [-1, 1])
        translate([arc_mid_r * cos(sign * arc_span / 2),
                   arc_mid_r * sin(sign * arc_span / 2)])
            circle(r = arc_end_r);
}

// 3D arc wall with rounded top edge and slot-like interior
module arc_wall() {
    n = ceil(arc_span / 3);
    // Position and orient: wall wraps around -Y (rear)
    translate([0, arc_cy, 0])
    rotate([0, 0, -90]) {
        // Main wall body up to the top rounding zone
        linear_extrude(arc_h - arc_end_r)
            arc_profile_2d();

        // Rounded top edge: hulled spheres along arc midline
        translate([0, 0, arc_h - arc_end_r])
            for (i = [0 : n - 1]) {
                a1 = -arc_span / 2 + i * arc_span / n;
                a2 = -arc_span / 2 + (i + 1) * arc_span / n;
                hull() {
                    translate([arc_mid_r * cos(a1),
                               arc_mid_r * sin(a1), 0])
                        sphere(r = arc_end_r);
                    translate([arc_mid_r * cos(a2),
                               arc_mid_r * sin(a2), 0])
                        sphere(r = arc_end_r);
                }
            }
    }
}

// Side buttress: solid rounded material connecting collar to wall
module side_buttress(side, collar_h) {
    cx = side * collar_sep / 2;
    // Wall endpoint position after -90 deg rotation
    wx = side * arc_mid_r * sin(arc_span / 2);
    wy = arc_cy - arc_mid_r * cos(arc_span / 2);
    hull() {
        translate([cx, collar_y, base_h])
            cylinder(d = collar_od * 0.65, h = 2);
        translate([wx, wy, base_h])
            cylinder(d = butt_d, h = min(collar_h, butt_h));
    }
}

// =================== MAIN ASSEMBLY ===================

difference() {
    union() {
        // 1. Rounded base plate foundation
        base_plate();

        // 2. Lower annular collar/sleeve (left side)
        translate([-collar_sep / 2, collar_y, base_h])
            cylinder(d = collar_od, h = collar1_h);

        // 3. Upper annular collar/sleeve (right side, taller)
        translate([collar_sep / 2, collar_y, base_h])
            cylinder(d = collar_od, h = collar2_h);

        // 4. Arc-shaped rear wall with slot interior
        arc_wall();

        // 5. Solid rounded side buttresses
        side_buttress(-1, collar1_h);
        side_buttress( 1, collar2_h);
    }

    // 6. Through-bores: internal bores continue through collars and base
    translate([-collar_sep / 2, collar_y, -1])
        cylinder(d = bore_d, h = base_h + collar1_h + 2);
    translate([collar_sep / 2, collar_y, -1])
        cylinder(d = bore_d, h = base_h + collar2_h + 2);

    // 7. Stepped counterbores from bottom surface (different depths)
    // Collar 1: shallow step
    translate([-collar_sep / 2, collar_y, -0.01])
        cylinder(d = cbore_d, h = cbore1_depth + 0.01);
    // Collar 2: deeper step
    translate([collar_sep / 2, collar_y, -0.01])
        cylinder(d = cbore_d, h = cbore2_depth + 0.01);
}