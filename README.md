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
The rebuild also writes `public/demo/data_audit.json`, which records source
coverage and any case/model subsets used for the lightweight public demo without
including private absolute paths.

Every bundled run includes the native generated program in `assets.generated`.
For auditability, non-JSON outputs also include `assets.generated_json`, a
sanitized JSON envelope that records the task, case, model, input spec, output
format, metrics, and generated program text when that source is present.
Text-to-3D exposes JSON and OpenSCAD. Image-to-3D uses only the provided
Articraft all-model bundle for the public demo; that bundle currently contains
OpenSCAD and Three.js runs and no CadQuery runs. JSON is not treated as an
Image-to-3D native format. Assembly cases remain a small placeholder set until
the complete public assembly bundle is supplied.
