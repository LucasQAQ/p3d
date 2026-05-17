// === Parameters ===

// Base web dimensions
base_length = 0.747059;   // X extent
base_width  = 0.705882;   // Y extent
base_height = 0.022059;   // Z extent (web plate thickness)

// Side wall dimensions
wall_thick  = 0.022059;   // Wall / rib thickness (Y direction)
wall_height = 0.073529;   // Total wall height from Z = 0

// Circular through-hole parameters
hole_r    = 0.0294;       // Hole radius
hole1_x   = 0.1802;       // Hole 1 center X
hole1_y   = 0.5897;       // Hole 1 center Y
hole2_x   = 0.5537;       // Hole 2 center X
hole2_y   = 0.5897;       // Hole 2 center Y

// Web grid layout: 3 columns x 2 rows = 6 inner voids
num_cols  = 3;
num_rows  = 2;
rib_w     = wall_thick;   // Internal rib width matches wall thickness

// Resolution for curved surfaces
$fn = 100;

// === Derived dimensions ===
// Void pocket sizes (uniform grid within outer rib frame)
void_x = (base_length - (num_cols + 1) * rib_w) / num_cols;
void_y = (base_width  - (num_rows + 1) * rib_w) / num_rows;

// Small epsilon for clean boolean cuts
eps = 0.001;

// === Helper Modules ===

// Open web plate: outer frame + internal ribs with 6 rectangular voids
module base_web() {
    difference() {
        // Solid rectangular slab
        cube([base_length, base_width, base_height]);

        // Subtract 6 rectangular through-voids (3 cols x 2 rows)
        for (c = [0 : num_cols - 1]) {
            for (r = [0 : num_rows - 1]) {
                translate([
                    rib_w + c * (void_x + rib_w),
                    rib_w + r * (void_y + rib_w),
                    -eps
                ])
                cube([void_x, void_y, base_height + 2 * eps]);
            }
        }
    }
}

// Full-length rectangular wall along X direction
module side_wall(y_offset) {
    translate([0, y_offset, 0])
        cube([base_length, wall_thick, wall_height]);
}

// Circular through-hole at given XY position, through base thickness
module mounting_hole(cx, cy) {
    translate([cx, cy, -eps])
        cylinder(h = base_height + 2 * eps, r = hole_r);
}

// === Main Assembly ===
difference() {
    union() {
        // Step 1: Base web with outer boundary, internal ribs, and 6 voids
        base_web();

        // Step 2: Front side wall (at Y = 0, rises to full wall_height)
        side_wall(0);

        // Step 3: Back side wall (at Y = base_width - wall_thick, rises to full wall_height)
        side_wall(base_width - wall_thick);
    }

    // Step 4: Two circular through-openings on the base plane
    mounting_hole(hole1_x, hole1_y);
    mounting_hole(hole2_x, hole2_y);
}