// ==========================================
// Parametric Variables
// ==========================================
$fn = 100; // High resolution for smooth curved surfaces

// Base and Sleeve Dimensions
base_radius = 25;
base_height = 10;
sleeve_outer_radius = 16;
sleeve_inner_radius = 9;
sleeve_height = 45;

// Projecting Arm Dimensions
arm_length = 65; // Distance from center to end of the arm
arm_end_radius = 12;
arm_height = 10; // Flush with the base section
arm_hole_radius = 5.5;

// Underside Cutaway Dimensions
cutaway_length = 35; // Extent of the cutaway from the arm end towards the base
cutaway_height = 5;  // Height of the cutaway from the bottom (Z=0)

// Triangular Rib Dimensions
rib_thickness = 3;
rib_height = 22; // Height of the rib above the arm

// ==========================================
// Modules
// ==========================================

// Reusable module for the combined solid geometry
module solid_body() {
    union() {
        // 1. Low rounded base section
        cylinder(h=base_height, r=base_radius);

        // 2. Tall annular sleeve
        cylinder(h=sleeve_height, r=sleeve_outer_radius);

        // 3. Projecting side arm
        // Formed by a hull between the base and the smaller rounded end
        hull() {
            cylinder(h=arm_height, r=base_radius);
            translate([arm_length, 0, 0])
                cylinder(h=arm_height, r=arm_end_radius);
        }

        // 4. Thin triangular rib on top
        // Runs from the sleeve to the smaller rounded end as a raised web
        translate([0, 0, arm_height])
            rotate([90, 0, 0])
            linear_extrude(height=rib_thickness, center=true)
            polygon([
                // Overlap slightly into the sleeve to ensure manifold geometry
                [sleeve_outer_radius - 0.5, 0], 
                [sleeve_outer_radius - 0.5, rib_height], 
                // Overlap slightly into the arm end
                [arm_length - arm_end_radius + 1, 0] 
            ]);
    }
}

// ==========================================
// Main Model Assembly
// ==========================================

// Subtract holes and cutaways from the main solid body
difference() {
    solid_body();

    // A. Central bore continuing through the stepped circular portions
    // Extends slightly below Z=0 and above the sleeve for a clean cut
    translate([0, 0, -1])
        cylinder(h=sleeve_height + 2, r=sleeve_inner_radius);

    // B. Real rounded opening at the smaller rounded end
    translate([arm_length, 0, -1])
        cylinder(h=arm_height + 2, r=arm_hole_radius);

    // C. Stepped underside lower cutaway
    // Removes material from the bottom of the outer arm portion
    // so it sits on a higher tier
    translate([arm_length - cutaway_length, -arm_end_radius - 5, -1])
        cube([
            cutaway_length + arm_end_radius + 5, // Extends past the end
            (arm_end_radius + 5) * 2,            // Wider than the arm
            cutaway_height + 1                   // Height of the cutaway + offset
        ]);
}