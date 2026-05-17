// Parameters
curve_resolution = 96;
$fn = curve_resolution;
eps = 0.02;

// Sleeve and stepped circular portions
bore_diameter = 18;
base_diameter = 68;
base_height = 8;
base_chamfer = 1.2;

lower_boss_diameter = 52;
lower_boss_height = 6;
lower_boss_chamfer = 0.8;

sleeve_outer_diameter = 34;
sleeve_height = 42;
sleeve_chamfer = 0.6;

// Projecting arm
arm_end_x = 82;
arm_root_x = 24;
arm_root_radius = 15;
arm_end_radius = 17;
arm_height = base_height + lower_boss_height;

arm_undercut_start_x = 45;
arm_undercut_height = 6;
arm_undercut_width = 44;
arm_undercut_extra_x = 6;

end_hole_diameter = 13;

// Top triangular rib
rib_width = 4;
rib_height = 9;
rib_sleeve_overlap = 1.5;
rib_end_clearance = 2;
rib_inner_x = sleeve_outer_diameter / 2 - rib_sleeve_overlap;
rib_outer_x = arm_end_x - end_hole_diameter / 2 - rib_end_clearance;
rib_base_z = arm_height;

// Derived heights
sleeve_base_z = base_height + lower_boss_height;
overall_height = sleeve_base_z + sleeve_height;

// Helper: beveled round cylinder
module chamfered_cylinder(d, h, ch) {
    if (ch <= 0) {
        cylinder(h=h, d=d);
    } else {
        cylinder(h=ch, d1=d - 2*ch, d2=d);
        translate([0, 0, ch])
            cylinder(h=h - 2*ch, d=d);
        translate([0, 0, h - ch])
            cylinder(h=ch, d1=d, d2=d - 2*ch);
    }
}

// Helper: rounded 2D arm footprint
module arm_footprint_2d() {
    hull() {
        translate([arm_root_x, 0])
            circle(r=arm_root_radius);
        translate([arm_end_x, 0])
            circle(r=arm_end_radius);
    }
}

// Low rounded base section
module rounded_base() {
    chamfered_cylinder(
        d=base_diameter,
        h=base_height,
        ch=base_chamfer
    );
}

// Stepped boss and tall sleeve, left solid before bore cut
module sleeve_stack_solid() {
    translate([0, 0, base_height - eps])
        chamfered_cylinder(
            d=lower_boss_diameter,
            h=lower_boss_height + eps,
            ch=lower_boss_chamfer
        );

    translate([0, 0, sleeve_base_z - eps])
        chamfered_cylinder(
            d=sleeve_outer_diameter,
            h=sleeve_height + eps,
            ch=sleeve_chamfer
        );
}

// Projecting arm with lower stepped cutaway
module projecting_arm() {
    difference() {
        linear_extrude(height=arm_height, convexity=4)
            arm_footprint_2d();

        translate([
            arm_undercut_start_x,
            -arm_undercut_width / 2,
            -eps
        ])
            cube([
                arm_end_x + arm_end_radius + arm_undercut_extra_x - arm_undercut_start_x,
                arm_undercut_width,
                arm_undercut_height + eps
            ]);
    }
}

// Thin triangular rib on top of arm
module triangular_top_rib() {
    rib_length = rib_outer_x - rib_inner_x;

    translate([rib_inner_x, 0, rib_base_z - eps])
        rotate([90, 0, 0])
            linear_extrude(height=rib_width, center=true, convexity=2)
                polygon(points=[
                    [0, 0],
                    [rib_length, 0],
                    [0, rib_height]
                ]);
}

// Main model
module complete_part() {
    difference() {
        union() {
            rounded_base();
            projecting_arm();
            sleeve_stack_solid();
            triangular_top_rib();
        }

        // Central bore continues through base, boss, and sleeve
        translate([0, 0, -eps])
            cylinder(
                h=overall_height + 2*eps,
                d=bore_diameter
            );

        // Real rounded through-opening in the small end
        translate([arm_end_x, 0, -eps])
            cylinder(
                h=overall_height + 2*eps,
                d=end_hole_diameter
            );
    }
}

complete_part();