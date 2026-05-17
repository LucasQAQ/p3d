// === Parameters ===

// Base section
base_r        = 32;       // Base radius
base_h        = 10;       // Base height
base_fillet   = 2;        // Edge rounding radius

// Annular sleeve
sleeve_or     = 18;       // Sleeve outer radius
sleeve_ir     = 11;       // Sleeve inner radius (bore)
sleeve_h      = 65;       // Sleeve total height

// Projecting side arm
arm_reach     = 58;       // Center-to-center distance to arm end
arm_w         = 18;       // Arm width (Y direction)
arm_end_r     = 12;       // Rounded end radius
arm_hole_r    = 5.5;      // Hole radius in rounded end
arm_step_z    = 4;        // Height of lower cutaway on underside
step_start_x  = 28;       // X position where step begins

// Triangular rib
rib_thick     = 2.5;      // Rib thickness (Y direction)
rib_h         = 14;       // Rib height at tallest point (sleeve end)

// Resolution
$fn = 100;

// Derived values
rib_start_x = sleeve_or + 2;
rib_end_x   = arm_reach - arm_end_r;

// === Modules ===

// Low rounded base with filleted edges
module rounded_base() {
    translate([0, 0, base_fillet])
        minkowski() {
            cylinder(r = base_r - base_fillet, h = base_h - 2 * base_fillet);
            sphere(r = base_fillet);
        }
}

// Tall hollow sleeve (outer shell only; bore cut later)
module sleeve() {
    cylinder(r = sleeve_or, h = sleeve_h);
}

// Side arm with stepped underside and rounded end
module arm_body() {
    difference() {
        union() {
            // Rectangular arm section connecting sleeve to rounded end
            translate([sleeve_or - 2, -arm_w / 2, 0])
                cube([arm_reach - arm_end_r - sleeve_or + 2, arm_w, base_h]);

            // Rounded end cap
            translate([arm_reach, 0, 0])
                cylinder(r = arm_end_r, h = base_h);
        }

        // Stepped underside: remove lower material on outer portion
        translate([step_start_x, -(arm_end_r + 1), -0.1])
            cube([
                arm_reach + arm_end_r - step_start_x + 1,
                2 * (arm_end_r + 1),
                arm_step_z + 0.1
            ]);
    }
}

// Thin triangular rib (raised web on top of arm)
module rib() {
    // Triangle profile in XZ plane, extruded thin in Y
    translate([0, rib_thick / 2, base_h])
        rotate([90, 0, 0])
            linear_extrude(height = rib_thick)
                polygon([
                    [rib_start_x, 0],
                    [rib_end_x,   0],
                    [rib_start_x, rib_h]
                ]);
}

// === Final Assembly ===
difference() {
    union() {
        // 1. Low rounded base
        rounded_base();

        // 2. Tall annular sleeve (solid; bore subtracted below)
        sleeve();

        // 3. Projecting side arm with stepped underside
        arm_body();

        // 4. Thin triangular rib on top of arm
        rib();
    }

    // Central bore through base and sleeve
    translate([0, 0, -1])
        cylinder(r = sleeve_ir, h = sleeve_h + 2);

    // Through-hole in rounded arm end
    translate([arm_reach, 0, -1])
        cylinder(r = arm_hole_r, h = base_h + 2);
}