export type ResultTableRow = { model: string; family?: string; cells: string };

export type ResultSubtable = {
  key: string;
  title: string;
  accent: string;
  superGroups?: Array<{ label: string; span: number }>;
  groups: Array<{ label: string; span: number }>;
  metrics: string[];
  rows: ResultTableRow[];
  domainRows?: ResultTableRow[];
  note?: string;
};

export const paperResultTables: ResultSubtable[] = [
  {
    "key": "text",
    "title": "Text-to-3D",
    "accent": "var(--blue)",
    "superGroups": [
      {
        "label": "Descriptive",
        "span": 6
      },
      {
        "label": "Parametric",
        "span": 12
      }
    ],
    "groups": [
      {
        "label": "JSON",
        "span": 2
      },
      {
        "label": "OpenSCAD",
        "span": 2
      },
      {
        "label": "Average",
        "span": 2
      },
      {
        "label": "JSON",
        "span": 4
      },
      {
        "label": "OpenSCAD",
        "span": 4
      },
      {
        "label": "Average",
        "span": 4
      }
    ],
    "metrics": [
      "Judge",
      "Valid",
      "Judge",
      "Valid",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid"
    ],
    "rows": [
      {
        "model": "GPT-5.5",
        "family": "openai",
        "cells": "0.805! 1.000! 0.945^ 0.995^ 0.875! 0.998^ 0.696! 0.997! 0.773! 1.000! 0.715! 0.997 0.850! 0.998^ 0.706! 0.997^ 0.812! 0.999^"
      },
      {
        "model": "Gemini 3.1 Pro",
        "family": "gemini",
        "cells": "0.783 1.000! 0.947! 0.998! 0.865^ 0.999! 0.686^ 0.997^ 0.726 1.000! 0.711^ 1.000! 0.826^ 1.000! 0.699^ 0.998! 0.776 1.000!"
      },
      {
        "model": "Claude Opus 4.6",
        "family": "claude",
        "cells": "0.779 0.998^ 0.921 0.993 0.850 0.995 0.682 0.987 0.753^ 0.990 0.702 1.000! 0.823 1.000! 0.692 0.993 0.788^ 0.995"
      },
      {
        "model": "Kimi K2.6",
        "family": "kimi",
        "cells": "0.704 0.912 0.905 0.985 0.804 0.949 0.667 0.976 0.628 0.978 0.691 0.997 0.804 0.998^ 0.679 0.987 0.716 0.988"
      },
      {
        "model": "GLM-5.1",
        "family": "zai",
        "cells": "0.802^ 0.970 0.817 0.912 0.810 0.941 0.678 0.989 0.635 0.993 0.654 0.940 0.739 0.940 0.666 0.964 0.687 0.966"
      },
      {
        "model": "Doubao Seed 2.0 Pro",
        "family": "doubao",
        "cells": "0.705 0.988 0.740 0.960 0.723 0.974 0.625 0.982 0.681 0.990 0.640 0.985 0.739 0.985 0.633 0.984 0.710 0.988"
      },
      {
        "model": "DeepSeek V4 Pro",
        "family": "deepseek",
        "cells": "0.635 0.970 0.764 0.927 0.699 0.949 0.640 0.957 0.701 0.960 0.655 0.975 0.770 0.975 0.647 0.966 0.735 0.968"
      },
      {
        "model": "Qwen3.6-Plus",
        "family": "qwen",
        "cells": "0.527 0.985 0.807 0.990 0.667 0.988 0.638 0.990 0.590 0.993 0.662 0.995 0.772 0.995 0.650 0.992 0.681 0.994"
      },
      {
        "model": "MiMo v2.5 Pro",
        "family": "mimo",
        "cells": "0.607 0.993 0.741 0.978 0.674 0.985 0.629 0.975 0.645 0.980 0.633 0.992 0.731 0.993 0.631 0.984 0.688 0.986"
      }
    ],
    "domainRows": [
      {
        "model": "Text2CAD",
        "cells": "0.055 0.945 - - 0.055 0.945 0.268 0.963 0.057 0.965 - - - - 0.268 0.963 0.057 0.965"
      }
    ]
  },
  {
    "key": "image",
    "title": "Image-to-3D",
    "accent": "var(--teal)",
    "groups": [
      {
        "label": "CadQuery",
        "span": 4
      },
      {
        "label": "OpenSCAD",
        "span": 4
      },
      {
        "label": "Three.js",
        "span": 4
      },
      {
        "label": "Average",
        "span": 4
      }
    ],
    "metrics": [
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid"
    ],
    "rows": [
      {
        "model": "GPT-5.5",
        "family": "openai",
        "cells": "0.524! 0.914! 0.526! 0.937! 0.567^ 1.000! 0.592! 1.000! 0.556^ 0.828 0.569^ 1.000! 0.549^ 0.914! 0.562! 0.979!"
      },
      {
        "model": "Gemini 3.1 Pro",
        "family": "gemini",
        "cells": "0.507^ 0.878 0.469^ 0.911 0.569! 0.999^ 0.576^ 1.000! 0.581! 0.853! 0.576! 0.998^ 0.552! 0.910^ 0.540^ 0.970"
      },
      {
        "model": "Claude Opus 4.6",
        "family": "claude",
        "cells": "0.497 0.908^ 0.383 0.926^ 0.536 1.000! 0.463 1.000! 0.541 0.802 0.447 0.998^ 0.525 0.903 0.431 0.975^"
      },
      {
        "model": "Kimi K2.6",
        "family": "kimi",
        "cells": "0.432 0.846 0.299 0.881 0.517 1.000! 0.421 1.000! 0.541 0.849^ 0.427 1.000! 0.497 0.898 0.382 0.960"
      },
      {
        "model": "GLM 5V Turbo",
        "family": "zai",
        "cells": "0.307 0.694 0.147 0.705 0.458 0.977 0.249 0.977 0.493 0.802 0.296 1.000! 0.419 0.824 0.230 0.894"
      },
      {
        "model": "Qwen3.6-Plus",
        "family": "qwen",
        "cells": "0.221 0.470 0.130 0.493 0.466 0.995 0.287 0.995 0.507 0.844 0.350 0.998^ 0.398 0.770 0.256 0.828"
      },
      {
        "model": "MiMo v2 Omni",
        "family": "mimo",
        "cells": "0.205 0.551 0.080 0.565 0.455 0.997 0.218 0.998^ 0.474 0.846 0.240 0.998^ 0.378 0.798 0.180 0.853"
      },
      {
        "model": "Doubao Seed 2.0 Pro",
        "family": "doubao",
        "cells": "0.143 0.323 0.085 0.335 0.461 0.990 0.245 0.990 0.518 0.849^ 0.318 1.000! 0.374 0.721 0.216 0.775"
      }
    ],
    "domainRows": [
      {
        "model": "Cadrille",
        "cells": "0.235 0.789 0.010 0.820 - - - - - - - - 0.235 0.789 0.010 0.820"
      },
      {
        "model": "CAD-Coder",
        "cells": "0.133 0.361 0.014 0.370 - - - - - - - - 0.133 0.361 0.014 0.370"
      }
    ]
  },
  {
    "key": "assembly",
    "title": "Assembly-3D",
    "accent": "var(--coral)",
    "groups": [
      {
        "label": "CadQuery",
        "span": 5
      },
      {
        "label": "OpenSCAD",
        "span": 5
      },
      {
        "label": "Average",
        "span": 5
      }
    ],
    "metrics": [
      "Geo",
      "Topo",
      "Judge",
      "Part",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Part",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Part",
      "Valid"
    ],
    "rows": [
      {
        "model": "GPT-5.5",
        "family": "openai",
        "cells": "0.570! 0.948! 0.527! 0.610! 0.985! 0.603! 0.985 0.555! 0.649! 0.985 0.586! 0.966! 0.541! 0.629! 0.985!"
      },
      {
        "model": "Gemini 3.1 Pro",
        "family": "gemini",
        "cells": "0.532^ 0.899^ 0.461^ 0.595^ 0.931^ 0.600^ 0.989^ 0.553^ 0.641^ 0.989^ 0.566^ 0.944^ 0.507^ 0.618^ 0.960^"
      },
      {
        "model": "Claude Opus 4.6",
        "family": "claude",
        "cells": "0.508 0.890 0.330 0.564 0.925 0.542 0.962 0.423 0.582 0.963 0.525 0.926 0.376 0.573 0.944"
      },
      {
        "model": "Kimi K2.6",
        "family": "kimi",
        "cells": "0.411 0.796 0.260 0.494 0.844 0.517 0.990! 0.343 0.603 0.990! 0.464 0.893 0.302 0.548 0.917"
      },
      {
        "model": "MiMo v2 Omni",
        "family": "mimo",
        "cells": "0.174 0.414 0.065 0.234 0.430 0.438 0.990! 0.175 0.542 0.990! 0.306 0.702 0.120 0.388 0.710"
      },
      {
        "model": "Qwen3.6-Plus",
        "family": "qwen",
        "cells": "0.142 0.287 0.087 0.166 0.308 0.485 0.985 0.238 0.536 0.985 0.314 0.636 0.163 0.351 0.647"
      },
      {
        "model": "GLM 5V Turbo",
        "family": "zai",
        "cells": "0.138 0.288 0.061 0.166 0.293 0.430 0.941 0.197 0.509 0.941 0.284 0.615 0.129 0.338 0.617"
      },
      {
        "model": "Doubao Seed 2.0 Pro",
        "family": "doubao",
        "cells": "0.101 0.217 0.054 0.128 0.224 0.434 0.963 0.203 0.515 0.964 0.267 0.590 0.129 0.322 0.594"
      }
    ]
  }
];

export const liveResultTables: ResultSubtable[] = [
  {
    "key": "text",
    "title": "Text-to-3D",
    "accent": "var(--blue)",
    "superGroups": [
      {
        "label": "Descriptive",
        "span": 6
      },
      {
        "label": "Parametric",
        "span": 12
      },
      {
        "label": "Cost",
        "span": 1
      }
    ],
    "groups": [
      {
        "label": "JSON",
        "span": 2
      },
      {
        "label": "OpenSCAD",
        "span": 2
      },
      {
        "label": "Average",
        "span": 2
      },
      {
        "label": "JSON",
        "span": 4
      },
      {
        "label": "OpenSCAD",
        "span": 4
      },
      {
        "label": "Average",
        "span": 4
      },
      {
        "label": "100 cases",
        "span": 1
      }
    ],
    "metrics": [
      "Judge",
      "Valid",
      "Judge",
      "Valid",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Valid",
      "USD"
    ],
    "rows": [
      {
        "model": "Kimi K3",
        "family": "kimi",
        "cells": "0.833 1.000 0.939 1.000 0.886 1.000 0.676 0.986 0.743 1.000 0.695 1.000 0.822 1.000 0.685 0.993 0.782 1.000 $48.60"
      },
      {
        "model": "GPT-5.5",
        "family": "openai",
        "cells": "0.853 1.000 0.922 0.990 0.887 0.995 0.676 0.963 0.713 1.000 0.691 0.990 0.863 1.000 0.683 0.977 0.788 1.000 $163.61"
      },
      {
        "model": "Gemini 3.1 Pro",
        "family": "gemini",
        "cells": "0.836 1.000 0.949 0.990 0.892 0.995 0.660 0.976 0.668 1.000 0.684 0.990 0.820 1.000 0.672 0.983 0.744 1.000 $37.48"
      },
      {
        "model": "Claude Opus 4.6",
        "family": "claude",
        "cells": "0.821 0.990 0.915 0.980 0.868 0.985 0.634 0.936 0.747 0.970 0.663 0.990 0.838 1.000 0.649 0.963 0.792 0.985 $108.21"
      },
      {
        "model": "GLM-5.2",
        "family": "zai",
        "cells": "0.795 1.000 0.882 1.000 0.839 1.000 0.646 0.956 0.728 0.960 0.683 1.000 0.813 1.000 0.664 0.978 0.771 0.980 $14.29"
      },
      {
        "model": "Kimi K2.6",
        "family": "kimi",
        "cells": "0.737 0.900 0.898 0.980 0.817 0.940 0.646 0.966 0.742 0.990 0.670 0.990 0.803 1.000 0.658 0.978 0.772 0.995 $29.23"
      },
      {
        "model": "GLM-5.1",
        "family": "zai",
        "cells": "0.777 0.940 0.825 0.930 0.801 0.935 0.666 0.983 0.771 1.000 0.632 0.940 0.797 0.950 0.649 0.961 0.784 0.975 $18.57"
      },
      {
        "model": "Qwen3.7-Plus",
        "family": "qwen",
        "cells": "0.737 1.000 0.807 1.000 0.772 1.000 0.654 0.986 0.696 1.000 0.675 1.000 0.780 1.000 0.665 0.993 0.738 1.000 $8.92"
      },
      {
        "model": "DeepSeek V4 Pro",
        "family": "deepseek",
        "cells": "0.743 0.980 0.753 0.930 0.748 0.955 0.624 0.959 0.714 0.980 0.611 0.940 0.777 0.950 0.617 0.949 0.746 0.965 $3.71"
      },
      {
        "model": "Doubao Seed 2.0 Pro",
        "family": "doubao",
        "cells": "0.731 0.980 0.730 0.990 0.731 0.985 0.592 0.986 0.719 1.000 0.606 0.980 0.760 0.990 0.599 0.983 0.740 0.995 $4.19"
      },
      {
        "model": "MiMo v2.5 Pro",
        "family": "mimo",
        "cells": "0.670 1.000 0.728 0.970 0.699 0.985 0.605 0.962 0.657 0.990 0.621 0.990 0.764 1.000 0.613 0.976 0.710 0.995 $2.68"
      },
      {
        "model": "Qwen3.6-Plus",
        "family": "qwen",
        "cells": "0.541 0.970 0.785 0.990 0.663 0.980 0.622 0.979 0.558 1.000 0.642 0.990 0.802 1.000 0.632 0.985 0.680 1.000 $6.92"
      },
      {
        "model": "MiMo v2 Pro",
        "family": "mimo",
        "cells": "0.652 0.990 0.734 0.970 0.693 0.980 0.593 0.955 0.657 0.990 0.582 0.990 0.752 1.000 0.588 0.972 0.704 0.995 $7.24"
      }
    ],
    "note": "Text-to-3D scores in the live leaderboard are computed on a fixed 100-case subset evaluated identically across all models, so they differ from the figures in the paper. The leaderboard is continuously updated as new evaluations are completed. Cost is estimated for the same four 100-case runs from saved usage and published rate cards."
  },
  {
    "key": "assembly",
    "title": "Assembly-3D",
    "accent": "var(--coral)",
    "groups": [
      {
        "label": "CadQuery",
        "span": 5
      },
      {
        "label": "OpenSCAD",
        "span": 5
      },
      {
        "label": "Average",
        "span": 5
      }
    ],
    "metrics": [
      "Geo",
      "Topo",
      "Judge",
      "Part",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Part",
      "Valid",
      "Geo",
      "Topo",
      "Judge",
      "Part",
      "Valid"
    ],
    "rows": [
      {
        "model": "GPT-5.6 (sol)",
        "family": "openai",
        "cells": "0.594! 0.909 0.531! 0.669! 0.975 0.634! 0.997 0.611! 0.646^ 1.000! 0.614! 0.953 0.571! 0.658! 0.988^"
      },
      {
        "model": "GPT-5.5",
        "family": "openai",
        "cells": "0.565 0.942^ 0.523^ 0.617 0.990^ 0.585 0.980 0.537 0.650! 0.980 0.575^ 0.961^ 0.530 0.633^ 0.985"
      },
      {
        "model": "Fable 5",
        "family": "fable",
        "cells": "0.571^ 0.962! 0.501 0.625^ 1.000! 0.575 0.977 0.561^ 0.609 0.978 0.573 0.970! 0.531^ 0.617 0.989!"
      },
      {
        "model": "Gemini 3.1 Pro",
        "family": "gemini",
        "cells": "0.528 0.907 0.453 0.593 0.940 0.605^ 0.989 0.542 0.641 0.989 0.567 0.948 0.497 0.617 0.964"
      },
      {
        "model": "Claude Opus 4.6",
        "family": "claude",
        "cells": "0.497 0.880 0.297 0.558 0.919 0.536 0.967 0.402 0.580 0.967 0.516 0.923 0.349 0.569 0.943"
      },
      {
        "model": "Kimi K2.7 Code",
        "family": "kimi",
        "cells": "0.444 0.877 0.271 0.535 0.920 0.530 1.000! 0.401 0.558 1.000! 0.487 0.938 0.336 0.547 0.960"
      },
      {
        "model": "Kimi K2.6",
        "family": "kimi",
        "cells": "0.422 0.810 0.258 0.489 0.850 0.521 0.980 0.311 0.589 0.980 0.472 0.895 0.285 0.539 0.915"
      },
      {
        "model": "Qwen3.7-Plus",
        "family": "qwen",
        "cells": "0.335 0.734 0.197 0.401 0.780 0.489 1.000^ 0.291 0.544 1.000! 0.412 0.867 0.244 0.472 0.890"
      },
      {
        "model": "Doubao Seed 2.1 Pro",
        "family": "doubao",
        "cells": "0.206 0.393 0.139 0.220 0.410 0.499 0.980 0.289 0.517 0.980 0.353 0.687 0.214 0.369 0.695"
      },
      {
        "model": "MiMo v2 Omni",
        "family": "mimo",
        "cells": "0.160 0.396 0.057 0.217 0.408 0.440 0.990 0.176 0.528 0.990 0.300 0.693 0.116 0.372 0.699"
      },
      {
        "model": "Qwen3.6-Plus",
        "family": "qwen",
        "cells": "0.160 0.309 0.081 0.166 0.333 0.473 0.979 0.208 0.513 0.980 0.317 0.644 0.144 0.340 0.657"
      },
      {
        "model": "GLM 5V Turbo",
        "family": "zai",
        "cells": "0.149 0.290 0.061 0.169 0.293 0.435 0.940 0.204 0.523 0.940 0.292 0.615 0.133 0.346 0.616"
      },
      {
        "model": "Doubao Seed 2.0 Pro",
        "family": "doubao",
        "cells": "0.076 0.166 0.038 0.101 0.174 0.439 0.968 0.194 0.534 0.968 0.257 0.567 0.116 0.317 0.571"
      }
    ],
    "note": "Assembly-3D scores in the live leaderboard are computed on a fixed 100-assembly subset evaluated identically across all models, so they differ from the 203-assembly figures in the paper. The leaderboard is continuously updated as new evaluations are completed."
  }
];
