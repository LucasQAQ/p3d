// ==========================================
// Parametric Definitions
// ==========================================

// Global resolution for smooth curves
$fn = 100;

// Reference Envelope Dimensions
env_l = 0.303436; // Length (X-axis)
env_w = 0.502485; // Width (Y-axis)
env_h = 0.468362; // Height (Z-axis, reaches ~0.4684)

// Small Coaxial Circular Sleeve Parameters
small_sleeve_x = 0.1542;
small_sleeve_y = 0.4232;
small_sleeve_r = 0.0714;
small_sleeve_bore_r = 0.025;
small_recess_h = 0.1764;

// Large Lower Annular Circular Solid Parameters
large_solid_x = 0.5416;
large_solid_y = 0.2448;
large_solid_h = 0.203;
large_solid_outer_r = 0.2084;
large_recess_r = 0.1756;
large_recess_h = 0.128;
large_bore_r = 0.0546;

// ==========================================
// Main Model Assembly
// ==========================================

difference() {
    
    // 1. Union of all positive solid geometries
    union() {
        
        // Main upright solid with an open curved interior
        difference() {
            // Outer rectangular envelope flush to extents
            cube([env_l, env_w, env_h]);
            
            // Subtraction to create the open curved interior (an arched tunnel)
            // Oversized slightly in Y to ensure a clean cut through the front and back
            translate([env_l / 2, -0.1, -0.1])
            scale([1, 1, 1.2]) // Scale Z to form an elliptical arch
            rotate([-90, 0, 0])
            cylinder(h = env_w + 0.2, d = env_l * 0.75);
        }
        
        // Small coaxial circular sleeve on the base plane
        // Extends upwards to the top of the envelope
        translate([small_sleeve_x, small_sleeve_y, 0])
        cylinder(h = env_h, r = small_sleeve_r);
        
        // Larger lower annular circular solid
        translate([large_solid_x, large_solid_y, 0])
        cylinder(h = large_solid_h, r = large_solid_outer_r);
    }
    
    // 2. Subtraction of underside cuts, recesses, and central bores
    
    // Large circular recess from the underside
    // Vertical band 0 to 0.128
    translate([large_solid_x, large_solid_y, -0.01])
    cylinder(h = large_recess_h + 0.01, r = large_recess_r);
    
    // Large central bore (true void through the entire large solid tier)
    translate([large_solid_x, large_solid_y, -0.01])
    cylinder(h = large_solid_h + 0.02, r = large_bore_r);
    
    // Small circular recess from the underside
    // Vertical band 0 to 0.1764 (creates the stepped circular face)
    translate([small_sleeve_x, small_sleeve_y, -0.01])
    cylinder(h = small_recess_h + 0.01, r = small_sleeve_r);
    
    // Small central bore (true void through the corresponding circular tier)
    translate([small_sleeve_x, small_sleeve_y, -0.01])
    cylinder(h = env_h + 0.02, r = small_sleeve_bore_r);
}