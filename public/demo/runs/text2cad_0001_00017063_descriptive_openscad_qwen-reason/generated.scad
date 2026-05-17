$fn = 80;

// Main body dimensions
body_width = 100;
body_height = 30;
body_length = 180;
arch_radius = 35;
arch_cut_depth = 12;

// Recess dimensions
recess_radius = 14;
recess_depth = 8;
recess_x_offset = 25;

// 2D cross-section profile module
module arched_profile() {
    difference() {
        // Base rectangular slab
        square([body_width, body_height], center=true);
        // Bottom arch void cutout
        translate([0, -body_height/2 + arch_cut_depth]) {
            circle(r=arch_radius);
        }
    }
}

// Paired circular recesses module
module top_recesses() {
    for (x_pos = [-recess_x_offset, recess_x_offset]) {
        translate([x_pos, 0, body_length/2]) {
            // Cylinder extends slightly past top face to ensure clean boolean subtraction
            cylinder(h=recess_depth + 0.2, r=recess_radius, center=false);
        }
    }
}

// Final model assembly
difference() {
    // Single solid extrusion of the arched profile
    linear_extrude(height=body_length, center=true) {
        arched_profile();
    }
    // Subtract paired circular recesses from the upper flat surface
    top_recesses();
}