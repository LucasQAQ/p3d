// Parametric Variables
$fn = 100;

// Plate dimensions
plate_thickness = 12;
lobe_radius = 18;
pos_front = [75, 0, 0];
pos_left  = [-40, 55, 0];
pos_right = [-40, -55, 0];

// Central Opening & Step
center_hole_d = 46;
step_d = 58;
step_z_top = 4;
step_z_bot = 6;

// Web spanning the opening
web_width = 6;
web_thickness = 8;
web_offset_x = 10; 

// Boss / Collar
boss_pos = [-15, 28, 0];
boss_d = 24;
boss_z_top = 8;
boss_z_bot = 5;
boss_recess_d = 16;
boss_recess_depth = 6;
boss_hole_d = 8;

// Slots
slot_length = 20;
slot_width = 8;

// Helper Module: Elongated Slot
module rounded_slot(l, w, h) {
    hull() {
        translate([l/2 - w/2, 0, 0]) cylinder(h=h, d=w, center=true);
        translate([-l/2 + w/2, 0, 0]) cylinder(h=h, d=w, center=true);
    }
}

// Main Assembly
union() {
    // Main plate and central step with subtractions
    difference() {
        union() {
            // Base wedge-like plate
            hull() {
                translate(pos_front) cylinder(h=plate_thickness, r=lobe_radius);
                translate(pos_left) cylinder(h=plate_thickness, r=lobe_radius);
                translate(pos_right) cylinder(h=plate_thickness, r=lobe_radius);
            }
            // Shallow circular raised step (extends above and below plate)
            translate([0, 0, -step_z_bot])
                cylinder(h=plate_thickness + step_z_bot + step_z_top, d=step_d);
        }
        
        // Large circular through opening
        translate([0, 0, -step_z_bot - 1])
            cylinder(h=plate_thickness + step_z_bot + step_z_top + 2, d=center_hole_d);
            
        // Elongated through slots near the lobes
        translate(pos_front) rotate([0, 0, 90]) 
            rounded_slot(slot_length, slot_width, plate_thickness * 4);
        translate(pos_left) rotate([0, 0, -35]) 
            rounded_slot(slot_length, slot_width, plate_thickness * 4);
        translate(pos_right) rotate([0, 0, 35]) 
            rounded_slot(slot_length, slot_width, plate_thickness * 4);
    }

    // Narrow solid straight web spanning part of the opening
    // Overlaps slightly into the hole wall to ensure manifold geometry
    translate([web_offset_x, 0, plate_thickness/2])
        cube([web_width, center_hole_d + 2, web_thickness], center=true);

    // Smaller round solid boss/collar
    difference() {
        // Boss solid body (extends above and below base plate)
        translate([boss_pos[0], boss_pos[1], -boss_z_bot])
            cylinder(h=plate_thickness + boss_z_bot + boss_z_top, d=boss_d);
            
        // Coaxial circular recess (cut from the top down)
        translate([boss_pos[0], boss_pos[1], plate_thickness + boss_z_top - boss_recess_depth])
            cylinder(h=boss_recess_depth + 1, d=boss_recess_d);
            
        // Coaxial through hole
        translate([boss_pos[0], boss_pos[1], -boss_z_bot - 1])
            cylinder(h=plate_thickness + boss_z_bot + boss_z_top + 2, d=boss_hole_d);
    }
}