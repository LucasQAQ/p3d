// === Rounded Wedge Bearing Housing ===

// Overall bounding dimensions
length    = 0.740822;       // X total extent
width     = 0.672842;       // Y total extent
height    = 0.171797;       // Z total extent
corner_r  = 0.060;          // Base perimeter rounding radius

// Stepped underside parameters
ring_h    = 0.020616;       // Shallow ring/step depth on bottom
base_h    = height - ring_h;// Outer base thickness (0.1512)

// Central circular through-opening
hole_cx   = 0.3687;                 // Center X from left edge
hole_cy   = width - 0.4283;         // Center Y from back edge (~0.2445)
hole_r    = 0.2165;                  // Opening radius

// Ring lip around central opening (forms underside step)
ring_lip_w = 0.028;                  // Lip width beyond hole radius

// Narrow structural web crossing the central opening
web_x     = 0.3434;                  // X start (left offset)
web_w     = 0.025368;               // X width
web_y     = 0.028;                   // Y start (back offset)
web_d     = 0.432873;               // Y depth (spans hole diameter)

// Boss (hub) inside central opening
boss_cx     = 0.4796;               // Center X from left edge
boss_cy     = width - 0.4282;       // Center Y from back edge (~0.2446)
boss_r      = 0.0992;               // Outer body radius (0.1984/2)
boss_hole_r = 0.075358;             // Inner bore radius (0.150716/2)

$fn = 100;

// --- Helper Modules ---

// 2D rounded rectangular base outline
module base_2d() {
    offset(r = corner_r)
        offset(delta = -corner_r)
            square([length, width]);
}

// 2D boss profile with bridge connecting to outer base body
module boss_2d() {
    hull() {
        // Main boss cylinder footprint
        translate([boss_cx, boss_cy])
            circle(r = boss_r);
        // Bridge connection point at right side of hole boundary
        translate([hole_cx + hole_r + 0.002, boss_cy])
            circle(r = 0.006);
    }
}

// --- Main Assembly ---

difference() {
    union() {
        // 1) Outer base body — raised by ring_h to create underside step
        translate([0, 0, ring_h])
            linear_extrude(base_h)
                base_2d();

        // 2) Ring pad — full-height circular region around hole
        //    Creates the stepped underside: extends from z=0 while
        //    outer base starts at z=ring_h
        linear_extrude(height)
            translate([hole_cx, hole_cy])
                circle(r = hole_r + ring_lip_w);

        // 3) Structural web crossing central opening (full height)
        translate([web_x, web_y, 0])
            cube([web_w, web_d, height]);

        // 4) Boss hub inside central opening (full height)
        linear_extrude(height)
            boss_2d();
    }

    // 5) Central circular through-opening
    //    Removes material from base and ring pad, leaving slot-like
    //    openings on either side of the web and boss
    translate([hole_cx, hole_cy, -0.01])
        cylinder(h = height + 0.02, r = hole_r);

    // 6) Boss bore — through-hole in the hub
    translate([boss_cx, boss_cy, -0.01])
        cylinder(h = height + 0.02, r = boss_hole_r);
}