// CAD Model - Nested stepped hierarchical structure
// All dimensions use the provided unitless values

$fn = 100; // High resolution for smooth curved surfaces

// --- Parameters ---

// 1. Base Reference
base_length_x = 0.285175;
base_width_y  = 0.72717;
base_depth    = 0.0446;

// 2. Circular Body
circ_center_x = 0.1419;
circ_center_y = 0.3522;
circ_radius   = 0.259;
circ_depth    = 0.0891;

// 3. Broader Curved Pad
pad_span_x   = 0.546349;
pad_span_y   = 0.631906;
pad_offset_l = -0.1313;
pad_offset_f = 0.0953;
pad_center_x = pad_offset_l + (pad_span_x / 2);
pad_center_y = pad_offset_f + (pad_span_y / 2);
pad_depth    = 0.0337;

// 4. Top Circular-Profile Group (0.098 tier)
top_tier_depth = 0.098;
top_envelope_x = 0.4791;

// Derived radii for the top solid profiles based on envelope limits
top_r_central = top_envelope_x / 2;                        // 0.23955
top_r_forward = 0.1648 - 0.1022;                           // 0.0626 (Center Y - Front Offset)
top_r_rear    = (base_width_y - 0.125) - 0.5396;           // 0.06257 (Back Edge - Center Y)

// 5. Void Profiles
void_r_central = 0.0714;
void_r_forward = 0.0388;
void_r_rear    = 0.0389;

// --- Z-Level Hierarchy ---
// Modeled as stepped reaches from shared shoulders
z_base_top = base_depth;                           // 0.0446
z_circ_top = z_base_top + circ_depth;              // 0.1337
z_pad_top  = z_circ_top + pad_depth;               // 0.1674
z_top_max  = z_pad_top + top_tier_depth;           // 0.2654

// --- Modules ---

// Module containing all the additive solid geometry
module solid_bodies() {
    // Base layer: curved outline filling the reference span
    translate([base_length_x / 2, base_width_y / 2, 0])
        linear_extrude(height = base_depth)
            scale([base_length_x, base_width_y])
                circle(d = 1);
                
    // Circular body layer
    translate([circ_center_x, circ_center_y, z_base_top])
        linear_extrude(height = circ_depth)
            circle(r = circ_radius);
            
    // Broader curved pad layer
    translate([pad_center_x, pad_center_y, z_circ_top])
        linear_extrude(height = pad_depth)
            scale([pad_span_x, pad_span_y])
                circle(d = 1);
                
    // Top circular-profile group (separate circular profiles, not a filled pad)
    translate([0, 0, z_pad_top])
        linear_extrude(height = top_tier_depth) {
            translate([circ_center_x, 0.3522]) circle(r = top_r_central);
            translate([circ_center_x, 0.1648]) circle(r = top_r_forward);
            translate([circ_center_x, 0.5396]) circle(r = top_r_rear);
        }
}

// Module containing the subtractive void geometry
module through_holes() {
    // Extend the cut depth slightly below 0 and above the max Z to ensure clean cuts
    cut_depth = z_top_max + 1.0;
    
    translate([0, 0, -0.5])
        linear_extrude(height = cut_depth) {
            // Central void (covers both the central and coincident central profiles)
            translate([circ_center_x, 0.3522]) circle(r = void_r_central);
            // Forward small void
            translate([circ_center_x, 0.1648]) circle(r = void_r_forward);
            // Rear small void
            translate([circ_center_x, 0.5396]) circle(r = void_r_rear);
        }
}

// --- Main Model Execution ---

difference() {
    union() {
        solid_bodies();
    }
    through_holes();
}