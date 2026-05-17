// === Parameters ===

// Overall dimensions
length       = 120;    // Long dimension (X)
width        = 60;     // Short dimension (Y)
web_height   = 4;      // Shallow rib/web height (Z)
wall_height  = 18;     // Taller side-wall height (Z)
rib_width    = 3;      // Thickness of each rib
wall_thick   = 6;      // Thickness of each side wall

// Bay layout
num_bays_x   = 4;      // Divisions along length
num_bays_y   = 2;      // Divisions along width

// Circular voids
hole_diam    = 12;     // Diameter of circular openings

$fn = 60;

// Derived quantities
bay_lx = length / num_bays_x;
bay_ly = width  / num_bays_y;

// === Helper: rib between two 2-D points ===
module rib_beam(p0, p1, w, h) {
    dx  = p1[0] - p0[0];
    dy  = p1[1] - p0[1];
    l   = sqrt(dx*dx + dy*dy);
    ang = atan2(dy, dx);
    translate([p0[0], p0[1], 0])
        rotate([0, 0, ang])
            translate([0, -w/2, 0])
                cube([l, w, h]);
}

// === Perimeter frame (4 edges at web height) ===
module perimeter_ribs() {
    // Bottom (Y = 0)
    cube([length, rib_width, web_height]);
    // Top (Y = width)
    translate([0, width - rib_width, 0])
        cube([length, rib_width, web_height]);
    // Left (X = 0)
    cube([rib_width, width, web_height]);
    // Right (X = length)
    translate([length - rib_width, 0, 0])
        cube([rib_width, width, web_height]);
}

// === Internal orthogonal cross ribs ===
module cross_ribs() {
    // Transverse ribs (run along Y at each bay boundary)
    for (i = [1 : num_bays_x - 1])
        translate([i * bay_lx - rib_width/2, 0, 0])
            cube([rib_width, width, web_height]);

    // Longitudinal ribs (run along X at each bay boundary)
    for (j = [1 : num_bays_y - 1])
        translate([0, j * bay_ly - rib_width/2, 0])
            cube([length, rib_width, web_height]);
}

// === Diagonal ribs inside every bay (X-pattern) ===
module diagonal_ribs() {
    for (i = [0 : num_bays_x - 1]) {
        for (j = [0 : num_bays_y - 1]) {
            x0 = i * bay_lx;
            y0 = j * bay_ly;
            x1 = (i + 1) * bay_lx;
            y1 = (j + 1) * bay_ly;

            // Two crossing diagonals per bay
            rib_beam([x0, y0], [x1, y1], rib_width, web_height);
            rib_beam([x0, y1], [x1, y0], rib_width, web_height);
        }
    }
}

// === Circular openings (voids) centred in each bay ===
module circular_voids() {
    for (i = [0 : num_bays_x - 1]) {
        for (j = [0 : num_bays_y - 1]) {
            cx = (i + 0.5) * bay_lx;
            cy = (j + 0.5) * bay_ly;
            translate([cx, cy, -1])
                cylinder(d = hole_diam, h = web_height + 2);
        }
    }
}

// === Solid side walls along the two long edges ===
module side_walls() {
    // Front wall (Y = 0 side)
    cube([length, wall_thick, wall_height]);
    // Back wall (Y = width side)
    translate([0, width - wall_thick, 0])
        cube([length, wall_thick, wall_height]);
}

// === Final assembly ===
union() {
    // Open web: ribs minus circular voids
    difference() {
        union() {
            perimeter_ribs();
            cross_ribs();
            diagonal_ribs();
        }
        circular_voids();
    }

    // Tall side walls (solid, higher than web)
    side_walls();
}