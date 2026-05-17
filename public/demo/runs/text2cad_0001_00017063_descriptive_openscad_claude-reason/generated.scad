// === Parameters ===

// Main body dimensions
body_length = 140;        // Overall length (X)
body_depth  = 35;         // Thickness / extrusion depth (Y)
body_height = 60;         // Overall height (Z)

// Arch void parameters
arch_radius = 45;         // Radius of the curved underside void
                          // (must be < body_height to preserve top slab,
                          //  and < body_length/2 to leave solid end pillars)

// Paired circular recess parameters
recess_diameter = 22;     // Diameter of each circular cut
recess_depth    = 8;      // How deep each recess is cut from the top
recess_spacing  = 44;     // Center-to-center distance between the pair

// Resolution
$fn = 120;

// === Derived values ===
pillar_width = (body_length - 2 * arch_radius) / 2;   // solid width at each end
slab_thickness = body_height - arch_radius;            // flat slab above the arch apex

// === Modules ===

// Main arch body: rectangular block with a half-cylinder void underneath
module arch_body() {
    difference() {
        // Full solid rectangular block
        cube([body_length, body_depth, body_height]);

        // Semicircular arch void running through the depth (Y direction)
        // Centered along the length, sitting at the bottom plane (Z = 0)
        translate([body_length / 2, -1, 0])
            rotate([-90, 0, 0])
                cylinder(h = body_depth + 2, r = arch_radius);
    }
}

// Circular pocket cut — a single cylindrical recess from the top
module top_recess(x_pos, y_pos) {
    translate([x_pos, y_pos, body_height - recess_depth])
        cylinder(h = recess_depth + 0.1, d = recess_diameter);
}

// === Final Assembly ===

echo(str("Pillar width each side: ", pillar_width, " mm"));
echo(str("Top slab thickness: ", slab_thickness, " mm"));

difference() {
    // Step 1 — Arch-shaped main body
    arch_body();

    // Step 2 — Paired circular recesses on the top surface
    //          Symmetrically placed about the center of the body
    top_recess(body_length / 2 - recess_spacing / 2, body_depth / 2);
    top_recess(body_length / 2 + recess_spacing / 2, body_depth / 2);
}