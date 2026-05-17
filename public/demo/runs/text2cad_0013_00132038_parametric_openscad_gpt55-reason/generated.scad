// Parameters
$fn = 120;
eps = 0.00001;

// Main reference
ref_length_x = 0.285175;
ref_width_y = 0.72717;
ref_height_z = 0.044569;

// Base curved outline
base_left_offset = 0;
base_right_offset = 0;
base_front_offset = 0;
base_back_offset = 0;
base_depth = 0.0446;
base_span_x = ref_length_x - base_left_offset - base_right_offset;
base_span_y = ref_width_y - base_front_offset - base_back_offset;

// Lower circular continuation
lower_circle_axis_x = 0.1419;
lower_circle_axis_y = 0.3522;
lower_circle_radius = 0.259;
lower_circle_span_x = 0.518;
lower_circle_span_y = 0.518;
lower_circle_left_offset = -0.1171;
lower_circle_right_offset = -0.1157;
lower_circle_front_offset = 0.0932;
lower_circle_back_offset = 0.116;
lower_circle_depth = 0.0891;

// Broader shallow curved pad
shallow_pad_span_x = 0.546349;
shallow_pad_span_y = 0.631906;
shallow_pad_left_offset = -0.1313;
shallow_pad_right_offset = -0.1298;
shallow_pad_front_offset = 0.0953;
shallow_pad_back_offset = 0;
shallow_pad_depth = 0.0337;

// Upper circular-profile tier envelope
top_env_span_x = 0.4791;
top_env_span_y = 0.5;
top_env_left_offset = -0.0977;
top_env_right_offset = -0.0962;
top_env_front_offset = 0.1022;
top_env_back_offset = 0.125;
top_tier_depth = 0.098;

// Inner circular and slot-like void profiles
profile_axis_x = 0.1419;
central_profile_y = 0.3522;
central_profile_radius = 0.0714;
central_duplicate_y = 0.3522;
central_duplicate_radius = 0.0714;
slot_front_y = 0.1648;
slot_front_radius = 0.0388;
slot_rear_y = 0.5396;
slot_rear_radius = 0.0389;

// Stepped datum levels
z_base_bottom = 0;
z_base_top = base_depth;
z_lower_top = z_base_top + lower_circle_depth;
z_shallow_top = z_lower_top + shallow_pad_depth;
z_top_tier_top = z_shallow_top + top_tier_depth;

// 2D curved span
module capsule_2d(w, d) {
    r = min(w, d) / 2;
    if (d >= w) {
        hull() {
            translate([w / 2, r]) circle(r = r);
            translate([w / 2, d - r]) circle(r = r);
        }
    } else {
        hull() {
            translate([r, d / 2]) circle(r = r);
            translate([w - r, d / 2]) circle(r = r);
        }
    }
}

// Extruded curved pad
module extruded_capsule(left, front, w, d, z, h) {
    translate([left, front, z])
        linear_extrude(height = h, convexity = 10)
            capsule_2d(w, d);
}

// Vertical circular solid
module vertical_cylinder(x, y, r, z, h) {
    translate([x, y, z])
        cylinder(h = h, r = r);
}

// Slot-like cut from two circular end profiles
module vertical_slot_cut(x, y1, r1, y2, r2, z, h) {
    hull() {
        translate([x, y1, z]) cylinder(h = h, r = r1);
        translate([x, y2, z]) cylinder(h = h, r = r2);
    }
}

// Base body
module base_body() {
    extruded_capsule(
        base_left_offset,
        base_front_offset,
        base_span_x,
        base_span_y,
        z_base_bottom,
        base_depth
    );
}

// Raised stepped solids
module raised_stack() {
    union() {
        vertical_cylinder(
            lower_circle_axis_x,
            lower_circle_axis_y,
            lower_circle_radius,
            z_base_top - eps,
            lower_circle_depth + eps
        );

        extruded_capsule(
            shallow_pad_left_offset,
            shallow_pad_front_offset,
            shallow_pad_span_x,
            shallow_pad_span_y,
            z_lower_top - eps,
            shallow_pad_depth + eps
        );

        extruded_capsule(
            top_env_left_offset,
            top_env_front_offset,
            top_env_span_x,
            top_env_span_y,
            z_shallow_top - eps,
            top_tier_depth + eps
        );
    }
}

// Voids through added raised thicknesses
module raised_voids() {
    cut_z = z_base_top - eps;
    cut_h = z_top_tier_top - z_base_top + 2 * eps;

    vertical_cylinder(
        profile_axis_x,
        central_profile_y,
        central_profile_radius,
        cut_z,
        cut_h
    );

    vertical_slot_cut(
        profile_axis_x,
        slot_front_y,
        slot_front_radius,
        slot_rear_y,
        slot_rear_radius,
        cut_z,
        cut_h
    );
}

// Main model
union() {
    base_body();

    difference() {
        raised_stack();
        raised_voids();
    }
}