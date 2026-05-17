// Parameters for the model
length = 120;           // Total length of the part
width = 60;             // Total width of the part
web_height = 4;         // Height of the shallow open web and ribs
wall_height = 20;       // Height of the solid side walls
wall_thickness = 5;     // Thickness of the long side walls
rib_width = 3;          // Width of the internal ribs and perimeter frame
hub_outer_dia = 16;     // Outer diameter of the circular hubs
hub_inner_dia = 8;      // Inner diameter of the circular openings (voids)
hub_spacing = 35;       // Distance from center to outer hubs along the length
$fn = 100;              // High resolution for smooth circular geometry

// Module for the shallow open web, ribs, and circular hubs
module base_web() {
    difference() {
        union() {
            // Rectangular perimeter frame
            translate([0, 0, web_height / 2])
                difference() {
                    cube([length, width, web_height], center=true);
                    // Inner cutout to make it a frame
                    cube([length - 2 * rib_width, width - 2 * rib_width, web_height + 1], center=true);
                }

            // Internal diagonal and cross ribs
            translate([0, 0, web_height / 2])
                intersection() {
                    // Restrict ribs to the inside of the frame
                    cube([length - 2 * rib_width, width - 2 * rib_width, web_height], center=true);
                    
                    union() {
                        // Cross ribs (X and Y axis)
                        cube([length, rib_width, web_height], center=true);
                        cube([rib_width, width, web_height], center=true);
                        
                        // Diagonal ribs spanning the corners
                        rotate([0, 0, atan2(width, length)])
                            cube([norm([length, width]), rib_width, web_height], center=true);
                        rotate([0, 0, -atan2(width, length)])
                            cube([norm([length, width]), rib_width, web_height], center=true);
                    }
                }

            // Solid circular hubs for the inner loops
            for (x = [-hub_spacing, 0, hub_spacing]) {
                translate([x, 0, 0])
                    cylinder(h=web_height, d=hub_outer_dia);
            }
        }

        // Subtract the inner voids to create open circular loops
        for (x = [-hub_spacing, 0, hub_spacing]) {
            translate([x, 0, -0.5])
                cylinder(h=web_height + 1, d=hub_inner_dia);
        }
    }
}

// Module for the solid side walls along the long edges
module side_walls() {
    // Front long side wall
    translate([0, width / 2 - wall_thickness / 2, wall_height / 2])
        cube([length, wall_thickness, wall_height], center=true);
        
    // Back long side wall
    translate([0, -width / 2 + wall_thickness / 2, wall_height / 2])
        cube([length, wall_thickness, wall_height], center=true);
}

// Main Model Assembly
union() {
    // Both components start at z=0, creating the stepped depth
    base_web();
    side_walls();
}