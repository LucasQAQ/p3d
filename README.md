# P3D-Bench Project Page

This repository contains only the public project page for P3D-Bench.

It intentionally excludes benchmark runner code, model API configuration,
production screening, annotation tools, full result trees, and paper plotting
scripts. The checked-in assets under `public/demo/` are sanitized static
artifacts used by the page.

## Local Preview

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Demo Asset Bundle

The page reads `public/demo/manifest.json` plus the static assets under
`public/demo/`. To rebuild that sanitized bundle from local evaluation outputs:

```bash
python scripts/build_demo_bundle.py
npm run build
```

Optional local inputs can be provided through environment variables:

| Variable | Purpose |
| --- | --- |
| `P3D_TEXT2CAD_WORKBENCH` | Local Text-to-3D evaluation artifact root. |
| `P3D_ARTICRAFT_ALL_MODELS_ROOT` | Extracted Image-to-3D all-model result bundle. |
| `P3D_ARTICRAFT_ASSEMBLY_ROOT` | Original assembly image folders used for Image-to-3D input thumbnails. |

If those variables are not set, the script looks for ignored local symlinks at
`local/articraft_all_models` and `local/articraft_assembly`.

The bundle intentionally keeps only page-facing artifacts: generated CAD
programs, STL meshes, thumbnails, input images, and compact public metrics. It
does not include request configs, response logs, token usage, screening or
annotation artifacts, full result trees, or paper plotting outputs.

Every bundled run also includes `assets.generated_json`. Native JSON outputs
point to the original generated CAD JSON, while non-JSON outputs are wrapped in
a sanitized JSON envelope that records the task, case, model, input spec,
output format, metrics, and generated program text when that source is present.
The page exposes JSON for every interactive case/model pair; Text-to-3D pairs
also expose OpenSCAD. The Image-to-3D demo is rebuilt from the sanitized
all-model Articraft bundle and exposes 17 image cases with 8 model predictions
per case; each case exposes its available native CAD format, currently
OpenSCAD or Three.js, alongside JSON. Assembly cases remain a small placeholder
set until the complete public assembly bundle is supplied.
