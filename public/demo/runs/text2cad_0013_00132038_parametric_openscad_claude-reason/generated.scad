// ============================================
// Parametric Stepped Circular Boss Assembly
// ============================================

// --- Base plate ---
base_x     = 0.285175;     // length (X)
base_y     = 0.72717;      // width (Y)
base_z     = 0.044569;     // extrusion depth (Z)
base_r     = 0.005;        // corner fillet for curved outline

// --- Circular body on base (layer 2) ---
cb_cx      = 0.1419;       // center X from left edge
cb_cy      = 0.3522;       // center Y from front edge
cb_r       = 0.259;        // radius
cb_h       = 0.0891;       // own depth

// --- Broader elliptical pad (layer 3) ---
pad_span_x = 0.546349;     // footprint X
pad_span_y = 0.631906;     // footprint Y
pad_x0     = -0.1313;      // left offset (negative = extends past base)
pad_y0     = 0.0953;       // front offset from base origin
pad_h      = 0.0337;       // own depth

// --- Top tier raised bosses (layer 4) ---
top_h      = 0.098;        // boss height

// Common X for all top profiles
px = 0.1419;

// Central profile
c_y = 0.3522;
c_r = 0.0714;

// Forward small profile
f_y = 0.1648;
f_r = 0.0388;

// Rear small profile
b_y = 0.5396;
b_r = 0.0389;

// Tolerance for clean booleans
eps = 0.001;

// Resolution
$fn = 120;

// --- Derived Z-levels (cumulative, not additive) ---
z1 = base_z;               // 0.0446 - top of base
z2 = z1 + cb_h;            // 0.1337 - top of circular body
z3 = z2 + pad_h;           // 0.1674 - top of pad

// Pad center position
pcx = pad_x0 + pad_span_x / 2;   // ~0.1419
pcy = pad_y0 + pad_span_y / 2;   // ~0.4113

// Void depth spans layers 2+3
void_h = cb_h + pad_h;     // 0.1228

// ============================================
// Helper modules
// ============================================

// Rounded-corner rectangle extruded to height h
module rounded_rect(w, d, h, r) {
    hull()
        for (xi = [r, w - r], yi = [r, d - r])
            translate([xi, yi, 0])
                cylinder(h = h, r = r);
}

// Elliptical pad centered at origin
module ellipse_pad(sx, sy, h) {
    scale([sx / 2, sy / 2, 1])
        cylinder(h = h, r = 1);
}

// ============================================
// Main model
// ============================================

difference() {
    union() {
        // Layer 1: Base plate with curved outline
        rounded_rect(base_x, base_y, base_z, base_r);

        // Layer 2: Circular body on top of base
        translate([cb_cx, cb_cy, z1])
            cylinder(h = cb_h, r = cb_r);

        // Layer 3: Broader elliptical curved pad
        translate([pcx, pcy, z2])
            ellipse_pad(pad_span_x, pad_span_y, pad_h);

        // Layer 4: Raised solid circular bosses
        translate([px, c_y, z3])
            cylinder(h = top_h, r = c_r);
        translate([px, f_y, z3])
            cylinder(h = top_h, r = f_r);
        translate([px, b_y, z3])
            cylinder(h = top_h, r = b_r);
    }

    // Inner circular voids through layers 2+3
    // (pockets below each boss, leaving base intact)
    translate([px, c_y, z1 - eps])
        cylinder(h = void_h + 2 * eps, r = c_r);
    translate([px, f_y, z1 - eps])
        cylinder(h = void_h + 2 * eps, r = f_r);
    translate([px, b_y, z1 - eps])
        cylinder(h = void_h + 2 * eps, r = b_r);

    // Slot-like void channels connecting adjacent pockets
    // Forward-to-central slot
    hull() {
        translate([px, f_y, z1 - eps])
            cylinder(h = void_h + 2 * eps, r = f_r * 0.35);
        translate([px, c_y, z1 - eps])
            cylinder(h = void_h + 2 * eps, r = c_r * 0.35);
    }
    // Central-to-rear slot
    hull() {
        translate([px, c_y, z1 - eps])
            cylinder(h = void_h + 2 * eps, r = c_r * 0.35);
        translate([px, b_y, z1 - eps])
            cylinder(h = void_h + 2 * eps, r = b_r * 0.35);
    }
}