#!/usr/bin/env python3
"""Unit tests for the paper-release contract and anonymous transform."""

from __future__ import annotations

import hashlib
import json
import tempfile
import unittest
from pathlib import Path

from build_release import _validate_output_target
from release_snapshot import (
    EXPECTED_PROTOCOL_ID,
    EXPECTED_RELEASE_ID,
    SnapshotError,
    computed_content_sha256,
    prepare_demo,
    validate_snapshot,
)


def synthetic_snapshot() -> dict:
    digest = "1" * 64
    rows = [
        {
            "model": "Model A",
            "model_id": "model-a",
            "family": "openai",
            "cells": "0.500",
        }
    ]
    tables = [
        {
            "key": key,
            "title": title,
            "accent": "var(--blue)",
            "groups": [{"label": "Average", "span": 1}],
            "metrics": ["Score"],
            "rows": [dict(rows[0])],
        }
        for key, title in (
            ("text", "Text-to-3D"),
            ("image", "Image-to-3D"),
            ("assembly", "Assembly-3D"),
        )
    ]
    source = {
        "pinned": True,
        "source_id": "fixture",
        "git_sha": "1" * 40,
        "artifact_sha256": digest,
    }
    snapshot = {
        "schema_version": 1,
        "release_id": EXPECTED_RELEASE_ID,
        "protocol_id": EXPECTED_PROTOCOL_ID,
        "generated_at": "2026-07-28T00:00:00Z",
        "model_order": ["model-a"],
        "source_commits": {
            "workbench": "1" * 40,
            "evaluator": "2" * 40,
            "paper": {
                "role": "consumer_base",
                "input_base_git_sha": "3" * 40,
            },
            "project_page": {
                "role": "consumer_base",
                "input_base_git_sha": "4" * 40,
            },
        },
        "profiles": {
            "paper": {
                "task_sources": {
                    "text": {**source, "profile": "paper_current"},
                    "image": dict(source),
                    "assembly": dict(source),
                }
            }
        },
        "assets": {
            "figures/fig_tasks_grouped_bars.pdf": digest,
            "figures/fig_tasks_grouped_bars.svg": digest,
        },
        "result_tables": tables,
    }
    snapshot["content_sha256"] = computed_content_sha256(snapshot)
    return snapshot


class SnapshotValidationTests(unittest.TestCase):
    def test_accepts_complete_canonical_snapshot(self) -> None:
        validate_snapshot(synthetic_snapshot())

    def test_rejects_tampered_snapshot(self) -> None:
        snapshot = synthetic_snapshot()
        snapshot["result_tables"][0]["rows"][0]["cells"] = "0.700"
        with self.assertRaisesRegex(SnapshotError, "content_sha256 mismatch"):
            validate_snapshot(snapshot)

    def test_rejects_unpinned_image_source(self) -> None:
        snapshot = synthetic_snapshot()
        snapshot["profiles"]["paper"]["task_sources"]["image"]["pinned"] = False
        snapshot["content_sha256"] = computed_content_sha256(snapshot)
        with self.assertRaisesRegex(SnapshotError, "image task source must set pinned=true"):
            validate_snapshot(snapshot)

    def test_formal_snapshot_requires_canonical_model_ids(self) -> None:
        snapshot = synthetic_snapshot()
        for table in snapshot["result_tables"]:
            table["rows"][0].pop("model_id", None)
        snapshot["model_order"] = ["Model A"]
        snapshot["content_sha256"] = computed_content_sha256(snapshot)
        with self.assertRaisesRegex(SnapshotError, "canonical model_id"):
            validate_snapshot(snapshot)
        validate_snapshot(snapshot, allow_legacy_model_labels=True)

    def test_rejects_final_commit_semantics_for_consumers(self) -> None:
        snapshot = synthetic_snapshot()
        snapshot["source_commits"]["project_page"] = {
            "role": "final_output",
            "git_sha": "4" * 40,
        }
        snapshot["content_sha256"] = computed_content_sha256(snapshot)
        with self.assertRaisesRegex(
            SnapshotError,
            "final output commits do not belong in the snapshot",
        ):
            validate_snapshot(snapshot)

    def test_rejects_private_path(self) -> None:
        snapshot = synthetic_snapshot()
        snapshot["note"] = "/home/researcher/private/result.json"
        snapshot["content_sha256"] = computed_content_sha256(snapshot)
        with self.assertRaisesRegex(SnapshotError, "private or host-local"):
            validate_snapshot(snapshot)


class AnonymousTransformTests(unittest.TestCase):
    def test_anonymous_transform_keeps_only_gpt_and_scrubs_links(self) -> None:
        with tempfile.TemporaryDirectory() as temp_name:
            root = Path(temp_name)
            source = root / "source"
            target = root / "target"
            source.mkdir()
            run_ids = [
                "text2cad_0084_00847302_descriptive_json_gpt55-reason",
                "text2cad_0084_00847302_parametric_openscad_gpt55-reason",
                "image2cad_articraft_clock_21133_image_cadquery_gpt55-reason",
                "image2cad_articraft_clock_21133_image_openscad_gpt55-reason",
                "image2cad_articraft_clock_21133_image_threejs_gpt55-reason",
                "text_image2cad_textimage2cad_111151_7c7f89f6_image_text_cadquery_gpt55-reason",
                "text_image2cad_textimage2cad_117698_aca36590_image_text_openscad_gpt55-reason",
            ]
            runs = []
            task_by_prefix = {
                "text2cad_": "text2cad",
                "image2cad_": "image2cad",
                "text_image2cad_": "text_image2cad",
            }
            for index, run_id in enumerate(run_ids):
                task = next(
                    task
                    for prefix, task in task_by_prefix.items()
                    if run_id.startswith(prefix)
                )
                relative = f"runs/{index}/generated.json"
                path = source / relative
                path.parent.mkdir(parents=True, exist_ok=True)
                path.write_text("{}\n")
                runs.append(
                    {
                        "id": run_id,
                        "task": task,
                        "case_id": f"case-{index}",
                        "model": "gpt55-reason",
                        "valid": True,
                        "assets": {"generated": relative},
                    }
                )
            retired_path = source / "runs/retired/generated.json"
            retired_path.parent.mkdir(parents=True)
            retired_path.write_text("{}\n")
            runs.append(
                {
                    "id": "retired",
                    "task": "text2cad",
                    "case_id": "retired-case",
                    "model": "mimo-reason",
                    "valid": True,
                    "assets": {"generated": "runs/retired/generated.json"},
                }
            )
            icon = source / "icons/src/openai.svg"
            icon.parent.mkdir(parents=True)
            icon.write_text("<svg/>")
            manifest = {
                "schema_version": 2,
                "paper": {
                    "authors": ["Named Author"],
                    "affiliations": ["Named Lab"],
                    "abstract": "Abstract. Project page: https://example.invalid/.",
                    "links": {"paper": "https://example.invalid/paper"},
                },
                "tasks": [],
                "models": [
                    {"id": "gpt55-reason", "family": "openai"},
                    {"id": "mimo-reason", "family": "mimo"},
                ],
                "cases": [
                    {"id": run["case_id"], "task": run["task"]}
                    for run in runs
                ],
                "runs": runs,
                "figures": [],
                "gallery": [{"id": "showcase"}],
            }
            (source / "manifest.json").write_text(json.dumps(manifest))

            summary = prepare_demo(source, target, profile="anonymous")
            output = json.loads((target / "manifest.json").read_text())

            self.assertEqual(summary["models"], 1)
            self.assertEqual(
                {model["id"] for model in output["models"]},
                {"gpt55-reason"},
            )
            self.assertEqual(output["paper"]["authors"], ["Anonymous authors"])
            self.assertNotIn("links", output["paper"])
            self.assertEqual(output["gallery"], [])
            self.assertFalse((target / "runs/retired/generated.json").exists())
            self.assertEqual(
                hashlib.sha256(
                    "\n".join(sorted(run_ids)).encode("utf-8")
                ).hexdigest(),
                summary["selected_run_ids_sha256"],
            )


class OutputTargetSafetyTests(unittest.TestCase):
    def test_rejects_nonempty_foreign_output(self) -> None:
        with tempfile.TemporaryDirectory() as temp_name:
            output = Path(temp_name) / "foreign"
            output.mkdir()
            (output / "keep.txt").write_text("user data\n", encoding="utf-8")
            with self.assertRaisesRegex(SystemExit, "non-empty non-release"):
                _validate_output_target(output, syncing_gh_pages=False)
            self.assertEqual(
                (output / "keep.txt").read_text(encoding="utf-8"),
                "user data\n",
            )

    def test_accepts_matching_release_output(self) -> None:
        with tempfile.TemporaryDirectory() as temp_name:
            output = Path(temp_name) / "release"
            output.mkdir()
            (output / "release-manifest.json").write_text(
                json.dumps(
                    {
                        "release_id": EXPECTED_RELEASE_ID,
                        "protocol_id": EXPECTED_PROTOCOL_ID,
                    }
                ),
                encoding="utf-8",
            )
            _validate_output_target(output, syncing_gh_pages=False)


if __name__ == "__main__":
    unittest.main()
