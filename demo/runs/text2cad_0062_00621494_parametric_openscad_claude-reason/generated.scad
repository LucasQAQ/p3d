// ============================================================
// Parametric Arch Body with Sleeve and Annular Features
// ============================================================

// --- Overall reference envelope ---
env_x   = 0.502485;          // width  (X axis, left-right)
env_y   = 0.303436;          // depth  (Y axis, front-back)
env_z   = 0.468362;          // height (Z axis)

// --- Resolution ---
$fn = 100;

// --- Main arch body parameters ---
wall       = 0.040;                      // wall / shell thickness
void_ry    = env_y / 2 - wall;           // elliptical void Y semi-axis
void_rz    = env_z - wall;               // elliptical void Z semi-axis
void_scale = void_rz / void_ry;          // Z/Y scale for ellipse
main_h     = 0.4684;                     // main solid height from base

// --- Small coaxial circular sleeve ---
sl_cx      = env_x - 0.4232;             // X centre (0.0793 from back)
sl_cy      = 0.1542;                     // Y centre (from left edge)
sl_r       = 0.0714;                     // outer wall radius
sl_bore    = 0.025;                      // central bore radius
sl_h       = 0.203;                      // sleeve protrusion height

// --- Larger lower annular solid ---
an_cx      = env_x - 0.2448;             // X centre (0.2577)
an_cy      = env_y / 2;                  // Y centre (centred along depth)
an_ro      = 0.2084;                     // outer radius
an_rm      = 0.1756;                     // annular boundary radius
an_ri      = 0.0546;                     // central bore radius
an_h       = 0.203;                      // annulus height above base

// --- Underside recess depths ---
lg_recess_d = 0.128;                     // large annulus recess depth
sm_recess_d = 0.1764;                    // small sleeve  recess depth

// --- Boolean tolerance ---
eps = 0.001;

// ============================================================
// Modules
// ============================================================

// Main upper body – rectangular envelope with elliptical arch void
module arch_body() {
    difference() {
        // Outer solid filling the reference envelope
        cube([env_x, env_y, env_z]);

        // Elliptical tunnel void running along X, centred at
        // Y = env_y/2, Z = 0 so the arch opens at the base plane
        translate([-eps, env_y / 2, 0])
            rotate([0, 90, 0])
                scale([void_scale, 1, 1])
                    cylinder(r = void_ry, h = env_x + 2 * eps);
    }
}

// Small coaxial circular sleeve on the base plane
module small_sleeve() {
    translate([sl_cx, sl_cy, 0])
        cylinder(r = sl_r, h = sl_h);
}

// Larger lower annular circular solid on upward side of base
module large_annulus() {
    translate([an_cx, an_cy, 0])
        cylinder(r = an_ro, h = an_h);
}

// ============================================================
// Final Assembly
// ============================================================

difference() {
    // ---- Additive bodies ----
    union() {
        // 1. Main arch body (flush to all four reference extents)
        arch_body();

        // 2. Small circular sleeve at base
        small_sleeve();

        // 3. Large annular solid at base
        large_annulus();
    }

    // ---- Subtractive features (underside recesses & bores) ----

    // Large annular underside recess (Z = 0 → lg_recess_d)
    // Removes material inside r = an_rm, leaving outer ring wall
    translate([an_cx, an_cy, -eps])
        cylinder(r = an_rm, h = lg_recess_d + eps);

    // Small circular underside recess (Z = 0 → sm_recess_d)
    // Removes material inside r = sl_r, creating stepped face
    translate([sl_cx, sl_cy, -eps])
        cylinder(r = sl_r, h = sm_recess_d + eps);

    // Large central through-bore (true void through all tiers)
    translate([an_cx, an_cy, -eps])
        cylinder(r = an_ri, h = env_z + 2 * eps);

    // Small central through-bore (true void through all tiers)
    translate([sl_cx, sl_cy, -eps])
        cylinder(r = sl_bore, h = env_z + 2 * eps);
}