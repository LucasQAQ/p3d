// Parameters
$fn = 96;
eps = 0.0005;

// Main base
base_length = 0.740822;
base_width = 0.672842;
base_height = 0.171797;
base_extrude_depth = 0.1718;
base_left_offset = 0;
base_right_offset = 0;
base_front_offset = 0;
base_back_offset = 0;

// Rounded wedge perimeter controls
outer_round_r = 0.0400;
wedge_front_inset = 0.1150;
wedge_back_inset = 0.1000;
wedge_front_side_y = 0.1500;
wedge_back_side_y = 0.5200;

// Central through opening
central_hole_x = 0.3687;
central_hole_y = 0.4283;
central_hole_r = 0.2165;

// Shallow upper circular land
upper_feature_x = 0.3688;
upper_feature_y = 0.4282;
upper_feature_r = 0.2165;
upper_feature_span_x = 0.432928;
upper_feature_span_y = 0.432928;
upper_feature_height = 0.020616;
upper_feature_depth = 0.0206;
upper_feature_left_offset = 0.1523;
upper_feature_right_offset = 0.1555;
upper_feature_front_offset = 0.2117;
upper_feature_back_offset = 0.0281;
upper_feature_lip_width = upper_feature_height;
upper_feature_outer_r = upper_feature_r + upper_feature_lip_width;

// Straight web across opening
web_left_offset = 0.3434;
web_right_offset = 0.3720;
web_front_offset = 0.2119;
web_back_offset = 0.0280;
web_length = 0.025368;
web_width = 0.432873;
web_height = base_height;

// Small round solid feature
small_boss_x = 0.4796;
small_boss_y = 0.4282;
small_boss_r = 0.0754;
small_boss_span_x = 0.2000;
small_boss_span_y = 0.1984;
small_boss_left_offset = 0.3927;
small_boss_right_offset = 0.1481;
small_boss_front_offset = 0.3476;
small_boss_back_offset = 0.1268;
small_boss_height = base_height;

// Underside circular recess / opening
small_recess_x = 0.4796;
small_recess_y = 0.4283;
small_recess_r = 0.0754;
small_recess_span_x = 0.150716;
small_recess_span_y = 0.150716;
small_recess_left_offset = 0.4042;
small_recess_right_offset = 0.1858;
small_recess_front_offset = 0.3529;
small_recess_back_offset = 0.1691;
underside_upper_pad_depth = 0.1512;
underside_continuation_depth = 0.0206;
underside_removed_depth = 0.1718;
small_recess_z_min = -underside_upper_pad_depth;
small_recess_z_max = underside_continuation_depth;

// Slot-like through openings
side_slot_x_offset = 0.0760;
side_slot_y = central_hole_y;
side_slot_length = 0.1450;
side_slot_width = 0.0300;
front_slot_x = central_hole_x;
front_slot_y = 0.1080;
front_slot_length = 0.1800;
front_slot_width = 0.0300;

// Helpers
module extrude_between(z0, z1) {
    translate([0, 0, z0]) {
        linear_extrude(height = z1 - z0, convexity = 10) {
            children();
        }
    }
}

module rounded_rect_2d(w, d, r) {
    let(rr = min(r, min(w / 2, d / 2))) {
        hull() {
            translate([rr, rr]) circle(r = rr);
            translate([w - rr, rr]) circle(r = rr);
            translate([w - rr, d - rr]) circle(r = rr);
            translate([rr, d - rr]) circle(r = rr);
        }
    }
}

module rounded_rect_bbox_2d(x0, y0, w, d, r) {
    translate([x0, y0]) rounded_rect_2d(w, d, r);
}

module capsule_2d(len, w) {
    let(stem = max(len - w, 0)) {
        hull() {
            translate([-stem / 2, 0]) circle(d = w);
            translate([ stem / 2, 0]) circle(d = w);
        }
    }
}

module slot_2d(cx, cy, len, w, angle_deg = 0) {
    translate([cx, cy]) rotate(angle_deg) capsule_2d(len, w);
}

// 2D profiles
module rounded_wedge_footprint() {
    intersection() {
        square([base_length, base_width]);
        offset(r = outer_round_r) {
            polygon(points = [
                [outer_round_r, wedge_front_side_y],
                [wedge_front_inset, outer_round_r],
                [base_length - wedge_front_inset, outer_round_r],
                [base_length - outer_round_r, wedge_front_side_y],
                [base_length - outer_round_r, wedge_back_side_y],
                [base_length - wedge_back_inset, base_width - outer_round_r],
                [wedge_back_inset, base_width - outer_round_r],
                [outer_round_r, wedge_back_side_y]
            ]);
        }
    }
}

module central_opening_2d() {
    translate([central_hole_x, central_hole_y]) circle(r = central_hole_r);
}

module web_2d() {
    translate([web_left_offset, web_front_offset])
        square([web_length, web_width]);
}

module small_boss_2d() {
    union() {
        rounded_rect_bbox_2d(
            small_boss_left_offset,
            small_boss_front_offset,
            small_boss_span_x,
            small_boss_span_y,
            small_boss_r
        );
        translate([small_boss_x, small_boss_y]) circle(r = small_boss_r);
    }
}

module upper_circular_land_2d() {
    intersection() {
        rounded_wedge_footprint();
        difference() {
            translate([upper_feature_x, upper_feature_y])
                circle(r = upper_feature_outer_r);
            translate([upper_feature_x, upper_feature_y])
                circle(r = upper_feature_r);
        }
    }
}

module outer_slots_2d() {
    union() {
        slot_2d(side_slot_x_offset, side_slot_y, side_slot_length, side_slot_width, 90);
        slot_2d(base_length - side_slot_x_offset, side_slot_y, side_slot_length, side_slot_width, 90);
        slot_2d(front_slot_x, front_slot_y, front_slot_length, front_slot_width, 0);
    }
}

// Solid features
module main_base() {
    extrude_between(0, base_height) {
        difference() {
            rounded_wedge_footprint();
            central_opening_2d();
        }
    }
}

module crossing_web() {
    extrude_between(0, web_height) {
        web_2d();
    }
}

module small_round_boss() {
    extrude_between(0, small_boss_height) {
        small_boss_2d();
    }
}

module shallow_upper_feature() {
    extrude_between(base_height, base_height + upper_feature_height) {
        upper_circular_land_2d();
    }
}

// Cutters
module slot_cutters() {
    extrude_between(-eps, base_height + upper_feature_height + eps) {
        outer_slots_2d();
    }
}

module small_recess_cutter() {
    translate([small_recess_x, small_recess_y, small_recess_z_min - eps])
        cylinder(
            h = (small_recess_z_max - small_recess_z_min) + 2 * eps,
            r = small_recess_r,
            center = false
        );
}

// Main model
module rounded_wedge_model() {
    difference() {
        union() {
            main_base();
            crossing_web();
            small_round_boss();
            shallow_upper_feature();
        }
        slot_cutters();
        small_recess_cutter();
    }
}

rounded_wedge_model();