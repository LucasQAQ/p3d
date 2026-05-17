// Units: millimeters
$fn = 96;

// Reference size
ref_length = 0.747059;
ref_width  = 0.705882;
base_height = 0.022059;

// Base offsets
base_left_offset  = 0;
base_right_offset = 0;
base_front_offset = 0;
base_back_offset  = 0;

base_length = ref_length - base_left_offset - base_right_offset;
base_width  = ref_width  - base_front_offset - base_back_offset;

// Side walls
wall_length = ref_length;
wall_thickness = 0.022059;
wall_total_height = 0.073529;
wall_extension_height = wall_total_height - base_height;

front_wall_y = -wall_thickness;
back_wall_y  = ref_width;

// Circular openings
hole_radius = 0.0294;
hole_y = 0.5897;
hole_centers = [
    [0.1802, hole_y],
    [0.5537, hole_y]
];

// Open web layout: 2 columns x 3 rows
void_cols = 2;
void_rows = 3;
web_side_border = 0.044118;
web_front_border = 0.044118;
web_rear_band = 0.160000;
web_col_rib = 0.044118;
web_row_rib = 0.044118;
void_corner_radius = 0.010000;

void_width = (base_length - 2*web_side_border - (void_cols - 1)*web_col_rib) / void_cols;
void_depth = (base_width - web_front_border - web_rear_band - (void_rows - 1)*web_row_rib) / void_rows;

// Rounded 2D rectangle
module rounded_rect_2d(w, d, r) {
    rr = min(r, min(w, d) / 2);
    if (rr <= 0)
        square([w, d], center=false);
    else
        translate([rr, rr])
            offset(r=rr)
                square([w - 2*rr, d - 2*rr], center=false);
}

// Six web voids
module inner_voids_2d() {
    for (ix = [0 : void_cols - 1])
        for (iy = [0 : void_rows - 1])
            translate([
                base_left_offset + web_side_border + ix * (void_width + web_col_rib),
                base_front_offset + web_front_border + iy * (void_depth + web_row_rib)
            ])
                rounded_rect_2d(void_width, void_depth, void_corner_radius);
}

// Two circular through openings
module circular_openings_2d() {
    for (p = hole_centers)
        translate([base_left_offset + p[0], base_front_offset + p[1]])
            circle(r=hole_radius);
}

// Front and back wall footprints
module wall_profiles_2d() {
    translate([0, front_wall_y])
        square([wall_length, wall_thickness], center=false);

    translate([0, back_wall_y])
        square([wall_length, wall_thickness], center=false);
}

// Lower stepped profile: base web plus wall lower portions
module lower_profile_2d() {
    difference() {
        union() {
            translate([base_left_offset, base_front_offset])
                square([base_length, base_width], center=false);
            wall_profiles_2d();
        }
        inner_voids_2d();
        circular_openings_2d();
    }
}

// Main model
module model() {
    union() {
        linear_extrude(height=base_height, center=false, convexity=10)
            lower_profile_2d();

        translate([0, 0, base_height])
            linear_extrude(height=wall_extension_height, center=false, convexity=4)
                wall_profiles_2d();
    }
}

model();