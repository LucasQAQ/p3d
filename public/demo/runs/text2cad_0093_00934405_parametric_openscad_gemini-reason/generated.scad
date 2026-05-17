// Parameters for the CAD model
// All dimensions are in the provided units

// Main Base Parameters
base_length = 0.740822;
base_width = 0.672842;
base_height = 0.171797;
base_corner_radius = 0.05; // Estimated radius for the rounded outer perimeter

// Central Circular Through Opening
hole_x = 0.3687;
hole_y = 0.4283;
hole_r = 0.2165;

// Shallow Circular Upper Feature
shallow_x = 0.3688;
shallow_y = 0.4282;
shallow_r = 0.2165;
shallow_h = 0.020616;

// Narrow Straight Solid Web
web_x = 0.3434;
web_y = 0.2119;
web_l = 0.025368;
web_w = 0.432873;
web_h = 0.171797;

// Smaller Round Solid Feature
small_x = 0.4796;
small_y = 0.4282;
small_r = 0.0754;
small_h = 0.1718;

// Circular Removed Recess/Opening
recess_x = 0.4796;
recess_y = 0.4283;
recess_r = 0.0754;
recess_z_start = -0.1512;
recess_z_end = 0.0206;

// Resolution for smooth curved surfaces
$fn = 100;

// Reusable module for the main rounded base footprint
module rounded_wedge_base(l, w, h, r) {
    linear_extrude(height = h) {
        hull() {
            translate([r, r]) circle(r);
            translate([l - r, r]) circle(r);
            translate([l - r, w - r]) circle(r);
            translate([r, w - r]) circle(r);
        }
    }
}

// Main Model Assembly
difference() {
    union() {
        // 1. Main rounded wedge base with the central hole removed
        difference() {
            rounded_wedge_base(base_length, base_width, base_height, base_corner_radius);
            
            // Central circular through opening
            translate([hole_x, hole_y, -0.1])
                cylinder(h = base_height + 0.2, r = hole_r);
        }
        
        // 2. Shallow circular upper feature
        // Added as solid material at the top of the central opening
        translate([shallow_x, shallow_y, base_height - shallow_h])
            cylinder(h = shallow_h, r = shallow_r);
            
        // 3. Narrow straight solid web crossing the central opening
        translate([web_x, web_y, 0])
            cube([web_l, web_w, web_h]);
            
        // 4. Smaller round solid feature
        translate([small_x, small_y, 0])
            cylinder(h = small_h, r = small_r);
    }
    
    // 5. Circular removed recess/opening
    // This removes the bottom portion (Z=0 to 0.0206) of the smaller round solid feature,
    // leaving a stepped hanging pad of depth 0.1512.
    translate([recess_x, recess_y, recess_z_start])
        cylinder(h = recess_z_end - recess_z_start, r = recess_r);
}