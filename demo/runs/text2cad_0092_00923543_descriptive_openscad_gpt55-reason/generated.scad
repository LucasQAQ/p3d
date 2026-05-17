// Units: mm

// Resolution
$fn = 80;

// Overall footprint
part_length = 120;
part_width = 48;

// Stepped heights
web_height = 3;
side_wall_height = 14;

// Rib widths
perimeter_rib_width = 5;
longitudinal_rib_width = 3.6;
transverse_rib_width = 3.6;
diagonal_rib_width = 3.2;

// Added long side walls
side_wall_thickness = 6;

// Circular through-openings
circular_opening_diameter = 14;
circular_ring_width = 3.5;
opening_cut_clearance = 0.06;
circular_opening_centers = [
    [-36, 0],
    [0, 0],
    [36, 0]
];

// Internal rib positions
transverse_rib_positions_x = [-30, 0, 30];

// Derived web centerlines
web_x_min = -part_length/2 + perimeter_rib_width/2;
web_x_max =  part_length/2 - perimeter_rib_width/2;
web_y_min = -part_width/2 + perimeter_rib_width/2;
web_y_max =  part_width/2 - perimeter_rib_width/2;
wall_y_offset = part_width/2 - side_wall_thickness/2;

panel_nodes_x = [
    web_x_min,
    transverse_rib_positions_x[0],
    transverse_rib_positions_x[1],
    transverse_rib_positions_x[2],
    web_x_max
];

// Rounded 2D rib between two points
module capsule_2d(p1, p2, w) {
    hull() {
        translate([p1[0], p1[1]]) circle(d=w);
        translate([p2[0], p2[1]]) circle(d=w);
    }
}

// Low outer web perimeter
module perimeter_frame_2d() {
    difference() {
        square([part_length, part_width], center=true);
        square([
            part_length - 2*perimeter_rib_width,
            part_width - 2*perimeter_rib_width
        ], center=true);
    }
}

// Solid annular pads around circular voids
module circular_opening_pads_2d() {
    for (c = circular_opening_centers) {
        translate([c[0], c[1]])
            circle(d=circular_opening_diameter + 2*circular_ring_width);
    }
}

// Through-cuts that keep circular openings void
module circular_opening_cuts_2d() {
    for (c = circular_opening_centers) {
        translate([c[0], c[1]])
            circle(d=circular_opening_diameter + opening_cut_clearance);
    }
}

// Internal cross and diagonal rib network
module rib_network_2d() {
    // Long center rib
    capsule_2d([web_x_min, 0], [web_x_max, 0], longitudinal_rib_width);

    // Transverse cross ribs
    for (x = transverse_rib_positions_x) {
        capsule_2d([x, web_y_min], [x, web_y_max], transverse_rib_width);
    }

    // Diagonal X ribs in each bay
    for (i = [0 : len(panel_nodes_x) - 2]) {
        capsule_2d(
            [panel_nodes_x[i], web_y_min],
            [panel_nodes_x[i + 1], web_y_max],
            diagonal_rib_width
        );
        capsule_2d(
            [panel_nodes_x[i], web_y_max],
            [panel_nodes_x[i + 1], web_y_min],
            diagonal_rib_width
        );
    }
}

// 2D open web plan, built from ribs only
module web_plan_2d() {
    difference() {
        union() {
            perimeter_frame_2d();
            rib_network_2d();
            circular_opening_pads_2d();
        }
        circular_opening_cuts_2d();
    }
}

// Shallow open web extrusion
module web_3d() {
    linear_extrude(height=web_height, convexity=10)
        web_plan_2d();
}

// Tall solid side wall added along each long edge
module side_wall_3d(y_sign) {
    translate([0, y_sign*wall_y_offset, side_wall_height/2])
        cube([part_length, side_wall_thickness, side_wall_height], center=true);
}

// Main part
module open_web_part() {
    union() {
        web_3d();
        side_wall_3d(1);
        side_wall_3d(-1);
    }
}

open_web_part();