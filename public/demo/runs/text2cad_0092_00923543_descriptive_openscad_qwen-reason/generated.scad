// Parameters
overall_length = 120;
overall_width = 80;
web_thickness = 5;
wall_height = 28;
wall_thickness = 8;
rib_thickness = 4;
hole_diameter = 14;
$fn = 64;

// Module: Base web with circular cutouts
module base_web() {
    difference() {
        cube([overall_length, overall_width, web_thickness], center=true);
        // Four circular openings
        translate([overall_length/4, overall_width/4, -web_thickness - 0.5])
            cylinder(h=web_thickness * 2 + 1, d=hole_diameter, center=true);
        translate([-overall_length/4, overall_width/4, -web_thickness - 0.5])
            cylinder(h=web_thickness * 2 + 1, d=hole_diameter, center=true);
        translate([overall_length/4, -overall_width/4, -web_thickness - 0.5])
            cylinder(h=web_thickness * 2 + 1, d=hole_diameter, center=true);
        translate([-overall_length/4, -overall_width/4, -web_thickness - 0.5])
            cylinder(h=web_thickness * 2 + 1, d=hole_diameter, center=true);
    }
}

// Module: Internal cross and diagonal ribs
module internal_ribs() {
    // Horizontal cross rib
    cube([overall_length, rib_thickness, web_thickness], center=true);
    // Vertical cross rib
    cube([rib_thickness, overall_width, web_thickness], center=true);
    // Diagonal ribs
    diag_len = sqrt(pow(overall_length, 2) + pow(overall_width, 2));
    diag_angle = atan2(overall_width, overall_length);
    rotate([0, 0, diag_angle]) cube([diag_len, rib_thickness, web_thickness], center=true);
    rotate([0, 0, -diag_angle]) cube([diag_len, rib_thickness, web_thickness], center=true);
}

// Module: Tall side walls along opposite edges
module side_walls() {
    translate([0, overall_width/2 - wall_thickness/2, 0])
        cube([overall_length, wall_thickness, wall_height], center=true);
    translate([0, -overall_width/2 + wall_thickness/2, 0])
        cube([overall_length, wall_thickness, wall_height], center=true);
}

// Main assembly: Combine web, ribs, and walls
union() {
    // Position shallow web and ribs at the base level
    translate([0, 0, web_thickness/2]) {
        base_web();
        internal_ribs();
    }
    // Position taller side walls rising from the same base
    translate([0, 0, wall_height/2]) {
        side_walls();
    }
}