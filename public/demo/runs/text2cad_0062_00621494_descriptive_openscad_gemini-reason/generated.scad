// ==========================================
// Parametric CAD Model
// Combines a central hub with lower and upper collars,
// a taller arc-based rear wall, and stepped bottom cuts.
// ==========================================

// --- Resolution Control ---
$fn = 100; // High resolution for smooth circular and rounded surfaces

// --- Parameters ---

// Central Hub Dimensions
hub_base_od = 40;       // Outer diameter of the lower annular feature
hub_base_h = 15;        // Height of the lower annular feature
hub_upper_od = 28;      // Outer diameter of the upper annular feature
hub_upper_h = 12;       // Height of the upper annular feature

// Rear Wall Dimensions
wall_radius = 35;       // Centerline radius of the arc-based rear wall
wall_thickness = 10;    // Thickness of the rear wall
wall_height = 45;       // Total height of the rear wall (taller than hub)
wall_angle = 140;       // Angular span of the rear wall in degrees

// Internal Features (Bores and Stepped Bottoms)
bore_d = 16;            // Main through-bore diameter
bottom_step1_d = 32;    // Diameter of the first (wider) bottom step
bottom_step1_h = 4;     // Depth of the first bottom step
bottom_step2_d = 24;    // Diameter of the second (narrower) bottom step
bottom_step2_h = 8;     // Depth of the second bottom step


// --- Modules ---

// Module for the solid base that connects the central hub to the rear wall
module base_body() {
    // The hull creates the "larger rounded side surfaces" that remain solid
    hull() {
        // Central hub base
        cylinder(h=hub_base_h, d=hub_base_od);

        // Base footprint of the rear wall
        rotate([0, 0, 90 - wall_angle/2]) {
            rotate_extrude(angle=wall_angle, convexity=4) {
                translate([wall_radius - wall_thickness/2, 0])
                    square([wall_thickness, hub_base_h]);
            }
        }

        // Rounded ends of the base footprint
        for(a = [90 - wall_angle/2, 90 + wall_angle/2]) {
            rotate([0, 0, a]) 
                translate([wall_radius, 0, 0])
                    cylinder(h=hub_base_h, d=wall_thickness);
        }
    }
}

// Module for the taller arc-based open wall
module rear_wall() {
    union() {
        // The curved wall segment
        rotate([0, 0, 90 - wall_angle/2]) {
            rotate_extrude(angle=wall_angle, convexity=4) {
                translate([wall_radius - wall_thickness/2, 0])
                    square([wall_thickness, wall_height]);
            }
        }
        
        // The rounded ends of the wall
        for(a = [90 - wall_angle/2, 90 + wall_angle/2]) {
            rotate([0, 0, a]) 
                translate([wall_radius, 0, 0])
                    cylinder(h=wall_height, d=wall_thickness);
        }
    }
}

// Module for the upper annular feature
module upper_hub() {
    translate([0, 0, hub_base_h])
        cylinder(h=hub_upper_h, d=hub_upper_od);
}


// --- Main Assembly ---

difference() {
    // 1. Additive Geometry (Solid Bodies)
    union() {
        base_body();    // Lower annular feature and solid side connections
        upper_hub();    // Upper annular sleeve/collar
        rear_wall();    // Taller open arc wall with slot-like interior
    }

    // 2. Subtractive Geometry (Holes and Cuts)
    
    // A. Central through-bore (makes the circular features hollow sleeves)
    // Extended slightly (+2) and translated (-1) to prevent Z-fighting
    translate([0, 0, -1])
        cylinder(h=max(hub_base_h + hub_upper_h, wall_height) + 2, d=bore_d);

    // B. First stepped bottom depth (wider, shallower)
    translate([0, 0, -1])
        cylinder(h=bottom_step1_h + 1, d=bottom_step1_d);

    // C. Second stepped bottom depth (narrower, deeper)
    translate([0, 0, -1])
        cylinder(h=bottom_step2_h + 1, d=bottom_step2_d);
}