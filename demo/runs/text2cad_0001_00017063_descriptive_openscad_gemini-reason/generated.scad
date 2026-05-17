// Parametric dimensions for the arched bridge model
part_length = 120;         // Total length of the main body
part_height = 40;          // Total height of the main body
part_depth = 20;           // Thickness (extrusion depth) of the main body

arch_radius = 50;          // Radius of the lower arched void
arch_y_offset = -15;       // Vertical drop of the arch center to leave straight vertical ends

recess_radius = 10;        // Radius of the circular material removals
recess_depth = 8;          // Depth of the recesses (shallower than part_depth)
recess_spacing = 60;       // Center-to-center distance between the paired recesses
recess_y_pos = 26;         // Vertical position of the recesses (upper side of the body)

$fn = 120;                 // High resolution for smooth curved surfaces

// Module defining the main extrusion profile with the bottom arch
module arched_body(len, hgt, dpth, a_rad, a_y_off) {
    difference() {
        // Main solid slab
        // Centered on the X axis, resting on Y=0, starting at Z=0
        translate([-len / 2, 0, 0])
            cube([len, hgt, dpth]);
        
        // Subtractive arch for the lower outline
        // Extended in Z to ensure manifold subtraction without Z-fighting
        translate([0, a_y_off, -1])
            cylinder(h=dpth + 2, r=a_rad);
    }
}

// Module defining the paired circular recesses
module paired_recesses(r_spacing, r_y, r_rad, r_depth, z_start) {
    // Left circular recess
    translate([-r_spacing / 2, r_y, z_start - r_depth])
        cylinder(h=r_depth + 1, r=r_rad);
        
    // Right circular recess
    translate([r_spacing / 2, r_y, z_start - r_depth])
        cylinder(h=r_depth + 1, r=r_rad);
}

// Main Assembly
// Subtract the shallower recesses from the arched main body to create a stepped depth
difference() {
    // Base solid shape
    arched_body(part_length, part_height, part_depth, arch_radius, arch_y_offset);
    
    // Material removal pattern on the front face (+Z side)
    paired_recesses(recess_spacing, recess_y_pos, recess_radius, recess_depth, part_depth);
}