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

The bundle intentionally keeps only page-facing artifacts: generated CAD
programs, STL meshes, thumbnails, input images, and compact public metrics. It
does not include request configs, response logs, token usage, screening or
annotation artifacts, full result trees, or paper plotting outputs.
