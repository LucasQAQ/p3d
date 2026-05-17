// ==========================================
// Parametric CAD Model
// ==========================================

// Resolution for circular features
$fn = 100;

// Base Dimensions
base_length = 0.747059;
base_width = 0.705882;
base_thickness = 0.022059;

// Wall and Rib Dimensions
wall_thickness = 0.022059;
wall_height = 0.073529;

// Circular Openings (Holes)
hole_radius = 0.0294;
hole1_x = 0.1802;
hole1_y = 0.5897;
hole2_x = 0.5537;
hole2_y = 0.5897;

// Epsilon for clean boolean operations
eps = 0.002;

// ==========================================
// Module Definitions
// ==========================================

// Module for the main solid structure before hole subtraction
module solid_structure() {
    union() {
        // 1. Base Web Structure
        difference() {
            // Main solid base footprint
            cube([base_length, base_width, base_thickness]);
            
            // Subtract 6 inner void outlines to create the open web
            // Arranged in a 3x2 grid (3 columns in X, 2 rows in Y)
            let(
                void_w = (base_length - 4 * wall_thickness) / 3,
                void_d = (base_width - 3 * wall_thickness) / 2
            ) {
                for (i = [0:2]) {
                    for (j = [0:1]) {
                        translate([
                            wall_thickness + i * (void_w + wall_thickness),
                            wall_thickness + j * (void_d + wall_thickness),
                            -eps/2
                        ])
                        cube([void_w, void_d, base_thickness + eps]);
                    }
                }
            }
        }
        
        // 2. Bosses for the circular openings
        // Ensures material exists around the holes within the open web
        let(boss_radius = hole_radius + wall_thickness) {
            translate([hole1_x, hole1_y, 0])
                cylinder(h=base_thickness, r=boss_radius);
            
            translate([hole2_x, hole2_y, 0])
                cylinder(h=base_thickness, r=boss_radius);
        }
        
        // 3. Front Side Wall
        // Positioned at front offset -0.0221 (using wall_thickness)
        translate([0, -wall_thickness, 0])
            cube([base_length, wall_thickness, wall_height]);
            
        // 4. Back Side Wall
        // Positioned at back offset 0.7058 (starts at base_width)
        translate([0, base_width, 0])
            cube([base_length, wall_thickness, wall_height]);
    }
}

// ==========================================
// Main Model Assembly
// ==========================================

difference() {
    // Start with the full solid structure (web, bosses, and side walls)
    solid_structure();
    
    // Subtract the two circular through openings
    // Hole 1
    translate([hole1_x, hole1_y, -eps/2])
        cylinder(h=base_thickness + eps, r=hole_radius);
        
    // Hole 2
    translate([hole2_x, hole2_y, -eps/2])
        cylinder(h=base_thickness + eps, r=hole_radius);
}