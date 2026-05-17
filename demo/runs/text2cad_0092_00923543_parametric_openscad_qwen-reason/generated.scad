// ==========================================
// Parameters
// ==========================================
base_length  = 0.747059;
base_width   = 0.705882;
base_height  = 0.022059;

wall_height     = 0.073529;
wall_thickness  = 0.022059;
wall_front_y    = -0.0221;
wall_back_y     =  0.7058;

hole_radius = 0.0294;
hole1_x = 0.1802;
hole1_y = 0.5897;
hole2_x = 0.5537;
hole2_y = 0.5897;

// Void layout configuration
num_voids_x = 3;
num_voids_y = 2;
void_length = 0.12;
void_width  = 0.12;

// Auto-calculate even spacing margins
margin_x = (base_length - num_voids_x * void_length) / (num_voids_x + 1);
margin_y = (base_width  - num_voids_y * void_width)  / (num_voids_y + 1);

// Resolution control
$fn = 100;

// ==========================================
// Base Web Module
// ==========================================
module base_web() {
    difference() {
        // Outer rectangular footprint
        cube([base_length, base_width, base_height]);

        // Six inner rectangular voids (3x2 grid)
        for (i = [0 : num_voids_x - 1]) {
            for (j = [0 : num_voids_y - 1]) {
                vx = margin_x + i * (void_length + margin_x);
                vy = margin_y + j * (void_width  + margin_y);
                translate([vx, vy, -0.005])
                    cube([void_length, void_width, base_height + 0.01]);
            }
        }

        // Two circular through openings
        translate([hole1_x, hole1_y, -0.005])
            cylinder(h = base_height + 0.01, r = hole_radius);
        translate([hole2_x, hole2_y, -0.005])
            cylinder(h = base_height + 0.01, r = hole_radius);
    }
}

// ==========================================
// Front Wall Module
// ==========================================
module front_wall() {
    translate([0, wall_front_y, 0])
        cube([base_length, wall_thickness, wall_height]);
}

// ==========================================
// Back Wall Module
// ==========================================
module back_wall() {
    translate([0, wall_back_y, 0])
        cube([base_length, wall_thickness, wall_height]);
}

// ==========================================
// Main Assembly
// ==========================================
union() {
    base_web();
    front_wall();
    back_wall();
}