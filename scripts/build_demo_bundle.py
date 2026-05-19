#!/usr/bin/env python3
"""Build a sanitized static demo bundle for the project page."""

from __future__ import annotations

import json
import math
import os
import shutil
import zipfile
from pathlib import Path
from typing import Any

import matplotlib
import numpy as np
import trimesh

matplotlib.use("Agg")
import matplotlib.pyplot as plt
from mpl_toolkits.mplot3d.art3d import Poly3DCollection


REPO = Path(__file__).resolve().parents[1]
OUT = REPO / "public" / "demo"
WORKBENCH = Path(os.environ.get("P3D_TEXT2CAD_WORKBENCH", REPO.parent / "text2cad-workbench")).expanduser()

PARAM_OPENSCAD_ROOT = WORKBENCH / "artifacts/relabel_eval/v65_eval400_current_paramdetail_openscad_local_eval_merged400"
DOUBAO_PARAM_OPENSCAD_ROOT = WORKBENCH / "artifacts/relabel_eval/doubao_textp3d_canary_20260512_local/parametric_detail/openscad"
DETAILED_JSON_ROOT = WORKBENCH / "artifacts/relabel_eval/v65_eval400_current_detailed_json_local_eval"
DOUBAO_DETAILED_JSON_ROOT = WORKBENCH / "artifacts/relabel_eval/doubao_textp3d_canary_20260512_local/detailed/json"
PRIMARY_CADQUERY_RESULTS = WORKBENCH / "artifacts/relabel_eval/v65_50_primary_allmodels_cadquery/full_results.json"
ARTICRAFT_ZIP = Path(os.environ.get("P3D_ARTICRAFT_ZIP", Path.home() / "_articraft_meshes.zip")).expanduser()

TEXT_MODELS = [
    "gpt55-reason",
    "gemini-reason",
    "claude-reason",
    "kimi_k26-reason",
    "glm-reason",
    "doubao-reason",
    "deepseek_v4pro-reason",
    "qwen-reason",
    "mimo_v25-reason",
    "mimo-reason",
]

MODEL_INFO: dict[str, dict[str, str]] = {
    "gpt55-reason": {"label": "GPT-5.5", "family": "openai"},
    "gpt": {"label": "GPT-4.1", "family": "openai"},
    "gemini-reason": {"label": "Gemini 3.1 Pro", "family": "gemini"},
    "claude-reason": {"label": "Claude Opus 4.6", "family": "claude"},
    "kimi_k26-reason": {"label": "Kimi K2.6", "family": "kimi"},
    "glm-reason": {"label": "GLM-5.1", "family": "zai"},
    "glm_5v_turbo-reason": {"label": "GLM 5V Turbo", "family": "zai"},
    "doubao-reason": {"label": "Doubao Seed 2.0 Pro", "family": "doubao"},
    "deepseek_v4pro-reason": {"label": "DeepSeek V4 Pro", "family": "deepseek"},
    "qwen-reason": {"label": "Qwen3.6-Plus", "family": "qwen"},
    "mimo_v25-reason": {"label": "MiMo v2.5 Pro", "family": "mimo"},
    "mimo-reason": {"label": "MiMo v2 Pro", "family": "mimo"},
    "mimo_omni-reason": {"label": "MiMo v2 Omni", "family": "mimo"},
}

MODEL_ALIASES = {
    "gpt55": "gpt55-reason",
    "gemini": "gemini-reason",
    "kimi_k26": "kimi_k26-reason",
    "doubao": "doubao-reason",
    "qwen": "qwen-reason",
    "mimo_omni": "mimo_omni-reason",
}

PREFERRED_TEXT_CASES = [
    "0001/00017063",
    "0004/00040376",
    "0009/00099014",
    "0013/00134405",
    "0013/00135378",
    "0024/00249966",
    "0053/00531353",
    "0081/00817410",
    "0085/00852511",
]

TEXT_CASE_TARGET = 24
ARTICRAFT_GT_ZIP_MAX_BYTES = 6_500_000

VISIBLE_METRICS = [
    "chamfer_distance",
    "hausdorff_distance",
    "f_score_005",
    "f_score_001",
    "normal_consistency",
    "iou_csg",
    "iou_voxel",
    "pred_open_edge_ratio",
    "acc_cmd",
    "acc_param",
]


def main() -> None:
    reset_public_demo()
    manifest = make_manifest()

    text_runs, text_cases = build_text_runs()
    other_runs, other_cases = build_primary_cadquery_runs()
    articraft_runs, articraft_cases = build_articraft_runs()

    all_runs = text_runs + other_runs + articraft_runs
    all_cases = dedupe_cases(text_cases + other_cases + articraft_cases)
    used_models = sorted({run["model"] for run in all_runs}, key=model_sort_key)

    manifest["models"] = [
        {"id": model_id, **MODEL_INFO.get(model_id, {"label": model_id, "family": "openai"})}
        for model_id in used_models
    ]
    manifest["cases"] = all_cases
    manifest["runs"] = all_runs

    with (OUT / "manifest.json").open("w", encoding="utf-8") as fh:
        json.dump(manifest, fh, indent=2, ensure_ascii=False)
        fh.write("\n")

    print(f"wrote {len(all_cases)} cases, {len(all_runs)} runs, {len(used_models)} model ids")
    print(f"text2cad: {len(text_cases)} cases, {sum(1 for r in text_runs if r['task'] == 'text2cad')} runs")
    print(f"image2cad: {sum(1 for c in all_cases if c['task'] == 'image2cad')} cases")
    print(f"text_image2cad: {sum(1 for c in all_cases if c['task'] == 'text_image2cad')} cases")


def reset_public_demo() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for name in ["runs", "gt_meshes", "gt_renders", "inputs", "articraft"]:
        path = OUT / name
        if path.exists():
            shutil.rmtree(path)
        path.mkdir(parents=True, exist_ok=True)


def make_manifest() -> dict[str, Any]:
    return {
        "schema_version": 2,
        "paper": {
            "title": "P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning",
            "authors": [
                "Yikang Yang¹,²,*",
                "Zhanpeng Hu¹,*",
                "Youtian Lin¹,²",
                "Mengqi Zhou¹,²",
                "Feihu Zhang²",
                "Jiaheng Liu¹",
                "Yao Yao¹",
            ],
            "affiliations": ["¹Nanjing University", "²DreamTech", "*Equal contribution."],
            "abstract": (
                "Multimodal large language models can write code and interpret rendered images of 3D designs, "
                "but it remains unclear whether they can produce executable parametric 3D programs that are "
                "geometrically precise, semantically aligned and assembly-consistent. We introduce P3D-Bench, "
                "a benchmark that evaluates this ability under a unified protocol across three task families: "
                "text-conditioned part synthesis, image-conditioned multi-part reconstruction and image-plus-annotation "
                "assembly composition, with metrics that jointly probe executability, geometric fidelity, topology, "
                "text-grounded constraints, multiview semantic alignment and part-level assembly structure."
            ),
            "links": {"paper": "#pipeline", "code": "https://github.com/LucasQAQ/p3d"},
        },
        "tasks": [
            {"id": "text2cad", "label": "Text-to-3D", "formats": ["JSON", "OpenSCAD"], "status": "interactive"},
            {"id": "image2cad", "label": "Image-to-3D", "formats": ["CadQuery", "OpenSCAD", "Three.js"], "status": "interactive"},
            {"id": "text_image2cad", "label": "Assembly-3D", "formats": ["CadQuery", "OpenSCAD"], "status": "interactive"},
        ],
        "models": [],
        "cases": [],
        "runs": [],
        "figures": [
            {"id": "pipeline", "title": "Pipeline figure placeholder", "placeholder": True},
            {"id": "leaderboard", "title": "Leaderboard figure", "src": "figures/fig1_teaser.png"},
        ],
        "gallery": [],
    }


def build_text_runs() -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    text_sources = [
        ("parametric", "openscad", PARAM_OPENSCAD_ROOT, DOUBAO_PARAM_OPENSCAD_ROOT),
        ("descriptive", "json", DETAILED_JSON_ROOT, DOUBAO_DETAILED_JSON_ROOT),
    ]
    combos: dict[tuple[str, str, str], dict[str, dict[str, Any]]] = {}
    roots: dict[tuple[str, str, str], Path] = {}

    for spec, fmt, base_root, doubao_root in text_sources:
        for model in TEXT_MODELS:
            root = doubao_root if model == "doubao-reason" else base_root
            combos[(spec, model, fmt)] = load_combo_cases(root, "text2cad", model, fmt)
            roots[(spec, model, fmt)] = root

    common_cases = None
    for (spec, model, fmt), combo_cases in combos.items():
        root = roots[(spec, model, fmt)]
        valid_cases = {
            case_id
            for case_id, case in combo_cases.items()
            if case.get("valid") is True and case.get("local_eval_complete", True) and case_is_exportable(case, root, "text2cad", model, fmt)
        }
        common_cases = valid_cases if common_cases is None else common_cases & valid_cases
    assert common_cases is not None

    preferred = [case_id for case_id in PREFERRED_TEXT_CASES if case_id in common_cases]
    remaining = sorted(common_cases - set(preferred))
    selected_case_ids = preferred + spread_pick(remaining, TEXT_CASE_TARGET - len(preferred))

    runs: list[dict[str, Any]] = []
    cases: list[dict[str, Any]] = []
    for case_id in selected_case_ids:
        reference = combos[("descriptive", TEXT_MODELS[0], "json")][case_id]
        title = summarize_condition(reference.get("condition_text") or case_id)
        cases.append({"id": case_id, "title": title, "task": "text2cad"})

        for model in TEXT_MODELS:
            for spec, fmt, _, _ in text_sources:
                root = roots[(spec, model, fmt)]
                case = combos[(spec, model, fmt)][case_id]
                run = make_run_from_case(
                    task="text2cad",
                    model=model,
                    spec=spec,
                    fmt=fmt,
                    case=case,
                    source_root=root,
                    condition=case.get("condition_text") or reference.get("condition_text") or title,
                )
                runs.append(run)

    return runs, cases


def build_primary_cadquery_runs() -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    data = json.loads(PRIMARY_CADQUERY_RESULTS.read_text(encoding="utf-8"))
    runs: list[dict[str, Any]] = []
    cases: list[dict[str, Any]] = []

    for task, spec, limit in [("image2cad", "image", 2), ("text_image2cad", "image_text", 3)]:
        combos = {key: value for key, value in data.items() if key.startswith(f"{task}/")}
        if not combos:
            continue
        common = None
        for result in combos.values():
            valid = {
                case["case_id"]
                for case in result.get("cases", [])
                if case.get("valid") is True and case.get("stl_path") and case.get("pred_render_path")
            }
            common = valid if common is None else common & valid
        selected = sorted(common or [])[:limit]

        for case_id in selected:
            title = None
            for combo_key, result in combos.items():
                model_raw = combo_key.split("/")[1]
                model = normalize_model(model_raw)
                fmt = combo_key.split("/")[2]
                source_case = next(case for case in result["cases"] if case["case_id"] == case_id)
                condition = source_case.get("condition_text") or default_condition_for_task(task)
                title = title or summarize_condition(condition if task != "image2cad" else f"Image reference for {case_id}.")
                runs.append(
                    make_run_from_case(
                        task=task,
                        model=model,
                        spec=spec,
                        fmt=fmt,
                        case=source_case,
                        source_root=PRIMARY_CADQUERY_RESULTS.parent,
                        condition=condition,
                    )
                )
            cases.append({"id": case_id, "title": title or case_id, "task": task})

    return runs, cases


def build_articraft_runs() -> tuple[list[dict[str, Any]], list[dict[str, Any]]]:
    if not ARTICRAFT_ZIP.exists():
        return [], []

    runs: list[dict[str, Any]] = []
    cases: list[dict[str, Any]] = []
    with zipfile.ZipFile(ARTICRAFT_ZIP) as zf:
        folders = sorted({Path(name).parts[1] for name in zf.namelist() if name.count("/") >= 2 and name.startswith("_articraft_meshes/")})
        folders = [
            folder
            for folder in folders
            if zf.getinfo(f"_articraft_meshes/{folder}/gt.npz").file_size <= ARTICRAFT_GT_ZIP_MAX_BYTES
        ]
        image_count = max(1, len(folders) // 2)
        for index, folder in enumerate(folders):
            meta = json.loads(zf.read(f"_articraft_meshes/{folder}/meta.json").decode("utf-8"))
            task = "image2cad" if index < image_count else "text_image2cad"
            spec = "image" if task == "image2cad" else "image_text"
            fmt = safe_format(meta.get("fmt") or "openscad")
            model = normalize_model(meta.get("model_dir") or folder.split("_")[0])
            label = str(meta.get("label") or folder).replace("_", " ")
            case_id = f"articraft/{folder}"
            title = label.title()
            condition = f"{task_label(task)} Articraft mesh case: {label}."

            run_dir = OUT / "runs" / run_id(task, case_id, spec, fmt, model)
            run_dir.mkdir(parents=True, exist_ok=True)

            pred_npz = read_npz_from_zip(zf, f"_articraft_meshes/{folder}/pred.npz")
            gt_npz = read_npz_from_zip(zf, f"_articraft_meshes/{folder}/gt.npz")
            pred_stl = run_dir / "model.stl"
            gt_stl = OUT / "gt_meshes" / f"{safe_slug(case_id)}.stl"
            pred_png = run_dir / "pred_render.png"
            gt_png = OUT / "gt_renders" / f"{safe_slug(case_id)}.png"
            npz_to_stl(pred_npz, pred_stl)
            npz_to_stl(gt_npz, gt_stl)
            render_npz_preview(pred_npz, pred_png)
            render_npz_preview(gt_npz, gt_png)

            generated = run_dir / "generated.json"
            write_public_json_output(
                generated,
                task=task,
                case_id=case_id,
                model=model,
                spec=spec,
                fmt=fmt,
                condition=condition,
                valid=True,
                metrics={},
                original_source=None,
                note="Sanitized mesh-preview case from the Articraft bundle; no executable source program was present in the local archive.",
            )

            case_entry = {"id": case_id, "title": title, "task": task}
            cases.append(case_entry)
            runs.append(
                {
                    "id": run_dir.name,
                    "task": task,
                    "case_id": case_id,
                    "spec": spec,
                    "format": fmt,
                    "model": model,
                    "valid": True,
                    "condition": condition,
                    "assets": {
                        "generated": rel(generated),
                        "generated_json": rel(generated),
                        "mesh": rel(pred_stl),
                        "pred_render": rel(pred_png),
                        "gt_mesh": rel(gt_stl),
                        "gt_render": rel(gt_png),
                    },
                    "metrics": {},
                }
            )

    return runs, cases


def make_run_from_case(
    *,
    task: str,
    model: str,
    spec: str,
    fmt: str,
    case: dict[str, Any],
    source_root: Path,
    condition: str,
) -> dict[str, Any]:
    case_id = case["case_id"]
    rid = run_id(task, case_id, spec, fmt, model)
    run_dir = OUT / "runs" / rid
    run_dir.mkdir(parents=True, exist_ok=True)

    ext = {"json": "json", "openscad": "scad", "cadquery": "py", "threejs": "js"}.get(fmt, "txt")
    source_generated = resolve_generated(case, source_root, task, model, fmt)
    generated = copy_asset(source_generated, run_dir / f"generated.{ext}")
    generated_json = generated
    if fmt != "json":
        generated_json = run_dir / "generated.json"
        write_public_json_output(
            generated_json,
            task=task,
            case_id=case_id,
            model=model,
            spec=spec,
            fmt=fmt,
            condition=condition,
            valid=bool(case.get("valid")),
            metrics=sanitize_metrics(case),
            original_source=read_text_asset(source_generated),
            note="The model emitted an executable CAD program in a non-JSON language; this public demo wraps that program in a uniform JSON envelope.",
        )
    mesh = copy_asset(resolve_case_asset(case, "stl_path", source_root, task, model, fmt, ["model_aligned.stl", "model.stl"]), run_dir / "model.stl")
    pred_render = copy_asset(
        resolve_case_asset(case, "pred_render_path", source_root, task, model, fmt, ["pred_render_aligned.png", "pred_render.png", "preview.png"]),
        run_dir / "pred_render.png",
    )
    gt_mesh = copy_asset(
        resolve_case_asset(case, "gt_stl_path", source_root, task, model, fmt, ["gt_model.stl"], shared=True),
        OUT / "gt_meshes" / f"{safe_slug(task + '_' + case_id)}.stl",
    )
    gt_render = copy_asset(
        resolve_case_asset(case, "gt_render_path", source_root, task, model, fmt, ["gt_render.png"]),
        OUT / "gt_renders" / f"{safe_slug(task + '_' + case_id)}.png",
    )
    input_image = None
    if case.get("input_image_path"):
        input_image = copy_asset(resolve_existing(case.get("input_image_path")), OUT / "inputs" / f"{safe_slug(task + '_' + case_id)}.png")

    assets = {
        "generated": rel(generated),
        "generated_json": rel(generated_json),
        "mesh": rel(mesh),
        "pred_render": rel(pred_render),
        "gt_mesh": rel(gt_mesh),
        "gt_render": rel(gt_render),
    }
    if input_image:
        assets["input_image"] = rel(input_image)

    return {
        "id": rid,
        "task": task,
        "case_id": case_id,
        "spec": spec,
        "format": fmt,
        "model": model,
        "valid": bool(case.get("valid")),
        "condition": condition,
        "assets": assets,
        "metrics": sanitize_metrics(case),
    }


def load_combo_cases(root: Path, task: str, model: str, fmt: str) -> dict[str, dict[str, Any]]:
    combo_results = root / task / model / fmt / "results.json"
    if combo_results.exists():
        payload = json.loads(combo_results.read_text(encoding="utf-8"))
        cases = payload["cases"]
    else:
        payload = json.loads((root / "full_results.json").read_text(encoding="utf-8"))
        cases = payload[f"{task}/{model}/{fmt}"]["cases"]
    return {case["case_id"]: case for case in cases}


def resolve_existing(path: str | None) -> Path | None:
    if not path:
        return None
    candidate = Path(path)
    try:
        return candidate if candidate.exists() else None
    except OSError:
        return None


def resolve_generated(case: dict[str, Any], root: Path, task: str, model: str, fmt: str) -> Path | None:
    existing = resolve_existing(case.get("generated_code_path"))
    if existing:
        return existing
    case_dir = root / task / model / fmt / case["case_id"].replace("/", "_")
    for name in ["generated.json", "generated.scad", "generated.py", "generated.js", "pred.json"]:
        path = case_dir / name
        if path.exists():
            return path
    return None


def resolve_case_asset(
    case: dict[str, Any],
    key: str,
    root: Path,
    task: str,
    model: str,
    fmt: str,
    fallback_names: list[str],
    shared: bool = False,
) -> Path | None:
    existing = resolve_existing(case.get(key))
    if existing:
        return existing

    case_slug = case["case_id"].replace("/", "_")
    if shared:
        shared_dir = root / "_shared_cache" / case["case_id"].replace("/", "__")
        for name in fallback_names:
            path = shared_dir / name
            if path.exists():
                return path

    case_dir = root / task / model / fmt / case_slug
    for name in fallback_names:
        path = case_dir / name
        if path.exists():
            return path

    if key == "gt_stl_path":
        shared_dir = root / "_shared_cache" / case["case_id"].replace("/", "__")
        path = shared_dir / "gt_model.stl"
        if path.exists():
            return path
    return None


def copy_asset(src: Path | None, dst: Path) -> Path | None:
    if not src or not src.exists():
        return None
    dst.parent.mkdir(parents=True, exist_ok=True)
    if not dst.exists():
        shutil.copy2(src, dst)
    return dst


def read_text_asset(path: Path | None) -> str | None:
    if not path or not path.exists():
        return None
    try:
        return path.read_text(encoding="utf-8")
    except UnicodeDecodeError:
        return path.read_text(encoding="utf-8", errors="replace")


def write_public_json_output(
    dst: Path,
    *,
    task: str,
    case_id: str,
    model: str,
    spec: str,
    fmt: str,
    condition: str,
    valid: bool,
    metrics: dict[str, Any],
    original_source: str | None,
    note: str,
) -> Path:
    payload: dict[str, Any] = {
        "schema": "p3d.demo.generated_output.v1",
        "task": task,
        "case_id": case_id,
        "model": model,
        "input_spec": spec,
        "output_format": fmt,
        "valid": valid,
        "condition": condition,
        "metrics": metrics,
        "program": {
            "language": fmt,
            "source": original_source,
        },
        "note": note,
    }
    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    return dst


def case_is_exportable(case: dict[str, Any], root: Path, task: str, model: str, fmt: str) -> bool:
    return all(
        [
            resolve_generated(case, root, task, model, fmt),
            resolve_case_asset(case, "stl_path", root, task, model, fmt, ["model_aligned.stl", "model.stl"]),
            resolve_case_asset(case, "pred_render_path", root, task, model, fmt, ["pred_render_aligned.png", "pred_render.png", "preview.png"]),
            resolve_case_asset(case, "gt_stl_path", root, task, model, fmt, ["gt_model.stl"], shared=True),
            resolve_case_asset(case, "gt_render_path", root, task, model, fmt, ["gt_render.png"]),
        ]
    )


def sanitize_metrics(case: dict[str, Any]) -> dict[str, Any]:
    raw = case.get("metrics") or {}
    metrics: dict[str, Any] = {}
    for key in VISIBLE_METRICS:
        value = raw.get(key)
        if isinstance(value, (int, float)) and math.isfinite(float(value)):
            metrics[key] = value

    qa = case.get("qa") or {}
    qa_map = {
        "qa_overall": qa.get("overall_accuracy"),
        "qa_semantic": qa.get("semantic_accuracy"),
        "qa_parametric": qa.get("param_accuracy"),
    }
    for key, value in qa_map.items():
        if isinstance(value, (int, float)) and value > 0:
            metrics[key] = value
    return metrics


def read_npz_from_zip(zf: zipfile.ZipFile, name: str) -> dict[str, np.ndarray]:
    import io

    with np.load(io.BytesIO(zf.read(name))) as data:
        return {key: data[key] for key in data.files}


def npz_to_stl(data: dict[str, np.ndarray], dst: Path) -> None:
    mesh = trimesh.Trimesh(vertices=data["vertices"], faces=data["faces"], process=False)
    dst.parent.mkdir(parents=True, exist_ok=True)
    mesh.export(dst)


def render_npz_preview(data: dict[str, np.ndarray], dst: Path) -> None:
    vertices = np.asarray(data["vertices"], dtype=float)
    faces = np.asarray(data["faces"], dtype=int)
    if len(faces) > 6500:
        idx = np.linspace(0, len(faces) - 1, 6500).astype(int)
        faces = faces[idx]

    fig = plt.figure(figsize=(5.2, 4.1), dpi=120)
    ax = fig.add_subplot(111, projection="3d")
    tris = vertices[faces]
    collection = Poly3DCollection(tris, linewidths=0.025, alpha=1.0)
    collection.set_facecolor((0.74, 0.62, 0.43, 1.0))
    collection.set_edgecolor((0.22, 0.25, 0.25, 0.08))
    ax.add_collection3d(collection)
    mins = vertices.min(axis=0)
    maxs = vertices.max(axis=0)
    center = (mins + maxs) / 2.0
    span = float((maxs - mins).max() or 1.0)
    for axis, value in zip([ax.set_xlim, ax.set_ylim, ax.set_zlim], center):
        axis(value - span * 0.56, value + span * 0.56)
    ax.view_init(elev=24, azim=-38)
    ax.set_axis_off()
    ax.set_facecolor((0.93, 0.95, 0.92, 1.0))
    fig.patch.set_facecolor((0.93, 0.95, 0.92, 1.0))
    plt.subplots_adjust(left=0, right=1, top=1, bottom=0)
    dst.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(dst, facecolor=fig.get_facecolor(), pad_inches=0)
    plt.close(fig)


def spread_pick(items: list[str], count: int) -> list[str]:
    if count <= 0 or not items:
        return []
    if count >= len(items):
        return list(items)
    picks = []
    for i in range(count):
        index = round(i * (len(items) - 1) / max(1, count - 1))
        picks.append(items[index])
    return picks


def dedupe_cases(cases: list[dict[str, Any]]) -> list[dict[str, Any]]:
    seen = set()
    output = []
    for case in cases:
        key = (case["task"], case["id"])
        if key in seen:
            continue
        seen.add(key)
        output.append(case)
    return output


def summarize_condition(text: str) -> str:
    clean = " ".join(text.split())
    if len(clean) <= 94:
        return clean
    cut = clean[:94].rsplit(" ", 1)[0]
    return f"{cut}..."


def normalize_model(model: str) -> str:
    if model in MODEL_INFO:
        return model
    if model.endswith("-reason") and model in MODEL_INFO:
        return model
    return MODEL_ALIASES.get(model, model)


def model_sort_key(model: str) -> tuple[int, str]:
    order = list(MODEL_INFO)
    return (order.index(model) if model in order else 999, model)


def safe_format(fmt: str) -> str:
    return fmt.lower().replace(".js", "threejs")


def safe_slug(value: str) -> str:
    keep = []
    for char in value:
        if char.isalnum() or char in "-_":
            keep.append(char)
        else:
            keep.append("_")
    return "".join(keep).strip("_")


def run_id(task: str, case_id: str, spec: str, fmt: str, model: str) -> str:
    return safe_slug(f"{task}_{case_id}_{spec}_{fmt}_{model}")


def rel(path: Path | None) -> str:
    if path is None:
        return ""
    return path.relative_to(OUT).as_posix()


def default_condition_for_task(task: str) -> str:
    if task == "image2cad":
        return "Reconstruct the parametric CAD model from the provided input image."
    return "Generate an executable CAD assembly from the provided image and annotation prompt."


def task_label(task: str) -> str:
    return {
        "image2cad": "Image-to-3D",
        "text_image2cad": "Assembly-3D",
        "text2cad": "Text-to-3D",
    }.get(task, task)


if __name__ == "__main__":
    main()
