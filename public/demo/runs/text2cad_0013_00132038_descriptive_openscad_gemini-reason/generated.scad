// ==========================================
// Parametric Definitions
// ==========================================

// Global resolution for smooth curves
$fn = 100;

// Base Plate Parameters
base_thickness = 5;
hub_distance = 65;
left_base_radius = 30;
right_base_radius = 25;

// Left Stacked Pads (Added Solid Sections 1 & 2)
// Broader shallow tier
left_tier1_radius = 24;
left_tier1_height = 4;
// Deeper contained round continuation
left_tier2_radius = 14;
left_tier2_height = 8; 

// Right Arc-Shaped Pad (Added Solid Section 3)
right_arc_outer_radius = 20;
right_arc_inner_radius = 10;
right_arc_height = 6;

// Voids & Cutouts
center_hole_radius = 6;
small_hole_radius = 2.5;
slot_length = 16;
slot_width = 5;


// ==========================================
// Helper Modules
// ==========================================

// Creates an elongated slot shape
module slot(l, w, h) {
    hull() {
        translate([(l - w)/2, 0, 0])
            cylinder(h=h, d=w);
        translate([-(l - w)/2, 0, 0])
            cylinder(h=h, d=w);
    }
}

// Creates the continuous non-rectangular rounded base
module rounded_base() {
    hull() {
        cylinder(h=base_thickness, r=left_base_radius);
        translate([hub_distance, 0, 0])
            cylinder(h=base_thickness, r=right_base_radius);
    }
}

// Creates the stacked circular pads on the left side
module left_stacked_pads() {
    // Broader shallow tier (overlap slightly to ensure manifold geometry)
    translate([0, 0, base_thickness - 0.01])
        cylinder(h=left_tier1_height + 0.01, r=left_tier1_radius);
        
    // Deeper contained round continuation
    translate([0, 0, base_thickness + left_tier1_height - 0.01])
        cylinder(h=left_tier2_height + 0.01, r=left_tier2_radius);
}

// Creates the arc-shaped pad on the right side
module right_arc_pad() {
    translate([hub_distance, 0, base_thickness - 0.01]) {
        difference() {
            // Main outer cylinder
            cylinder(h=right_arc_height + 0.01, r=right_arc_outer_radius);
            
            // Nested depth cutout (inner radius)
            translate([0, 0, -1])
                cylinder(h=right_arc_height + 2, r=right_arc_inner_radius);
                
            // Cutaway lower half to form the arc (semi-circle)
            translate([-right_arc_outer_radius - 1, -right_arc_outer_radius - 1, -1])
                cube([right_arc_outer_radius * 2 + 2, right_arc_outer_radius + 1, right_arc_height + 2]);
        }
    }
}


// ==========================================
// Main Model Assembly
// ==========================================

difference() {
    // 1. Combine all solid bodies
    union() {
        rounded_base();
        left_stacked_pads();
        right_arc_pad();
    }
    
    // 2. Subtract inner loops and voids
    
    // Central round opening passing through the left raised sections
    translate([0, 0, -1])
        cylinder(h=base_thickness + left_tier1_height + left_tier2_height + 2, r=center_hole_radius);
        
    // Small round openings passing through the broader shallow tier
    for (angle = [45 : 90 : 315]) {
        rotate([0, 0, angle])
            translate([left_tier1_radius - 5, 0, -1])
                cylinder(h=base_thickness + left_tier1_height + 2, r=small_hole_radius);
    }
    
    // Slot-like elongated opening passing through the right arc-shaped pad
    // Positioned tangentially along the center of the arc's width
    right_arc_mid_radius = (right_arc_outer_radius + right_arc_inner_radius) / 2;
    translate([hub_distance, right_arc_mid_radius, -1])
        slot(slot_length, slot_width, base_thickness + right_arc_height + 2);
        
    // Additional small round opening in the connecting bridge span
    translate([hub_distance / 2, 0, -1])
        cylinder(h=base_thickness + 2, r=small_hole_radius);
}