import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, Braces, ChevronDown, ChevronUp, Code2, Github, Image as ImageIcon, Layers3, Play } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import "./styles.css";

type AssetMap = {
  gt_render?: string;
  gt_mesh?: string;
  pred_render?: string;
  generated?: string;
  generated_json?: string;
  mesh?: string;
  input_image?: string;
};

type Run = {
  id: string;
  task: string;
  case_id: string;
  spec: string;
  format: string;
  model: string;
  valid: boolean | null;
  condition: string;
  assets: AssetMap;
  metrics: Record<string, number | string | null>;
};

type Manifest = {
  schema_version: number;
  paper: {
    title: string;
    authors: string[];
    affiliations?: string[];
    abstract: string;
    links?: Record<string, string>;
  };
  tasks: Array<{ id: string; label: string; formats: string[]; status?: string }>;
  models: Array<{ id: string; label: string; family?: string }>;
  cases: Array<{ id: string; title: string; task: string; thumbnail?: string }>;
  runs: Run[];
  figures?: Array<{ id: string; title: string; src?: string; placeholder?: boolean }>;
  gallery?: Array<{ id: string; title: string; src: string; caption?: string }>;
};

type ShowcaseItem = {
  id: string;
  task: string;
  title: string;
  subtitle: string;
  taskLabel: string;
  specLabel: string;
  input: string;
  inputImage?: string;
  src: string;
  mesh: string;
};

type ShowcaseVariant = {
  id: string;
  task: string;
  model: string;
  modelLabel: string;
  family: string;
  formatLabel: string;
  specLabel: string;
  src: string;
  mesh: string;
};

type ShowcaseComparison = {
  id: string;
  task: string;
  taskLabel: string;
  title: string;
  input: string;
  inputImage?: string;
  gtRender: string;
  gtMesh: string;
  formatLabel: string;
  specLabel: string;
  variants: ShowcaseVariant[];
};

type CadViewItem = { id: string; task: string; title: string; subtitle: string; src?: string; mesh: string };
type InputModalItem = Pick<ShowcaseItem, "title" | "taskLabel" | "specLabel" | "input" | "inputImage" | "subtitle">;
type LeaderboardRow = { model: string; family: string; score: number };
type LeaderboardTask = { title: string; accent: string; rows: LeaderboardRow[] };
type ModelFamilyStyle = { color: string; icon: string; tile?: string; filter?: string };
type AvailabilitySummary = { invalidCount: number; caseCount: number; modelCount: number; formatCount: number };

const fallbackManifest: Manifest = {
  schema_version: 1,
  paper: {
    title: "P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning",
    authors: ["Yikang Yang¹,²,*", "Zhanpeng Hu¹,*", "Youtian Lin¹", "Mengqi Zhou¹,²", "Jingxi Xu²", "Feihu Zhang²", "Jiaheng Liu¹", "Yao Yao¹"],
    affiliations: ["¹Nanjing University", "²DreamTech", "*Equal contribution."],
    abstract:
      "Multimodal large language models can write code and interpret rendered images of 3D designs, but it remains unclear whether they can produce executable parametric 3D programs that are geometrically precise, semantically aligned and assembly-consistent. We introduce P3D-Bench, a benchmark that evaluates this ability under a unified protocol across three task families: text-conditioned part synthesis, image-conditioned multi-part reconstruction and image-plus-annotation assembly composition, with metrics that jointly probe executability, geometric fidelity, topology, text-grounded constraints, multiview semantic alignment and part-level assembly structure. Evaluating frontier MLLMs and text-only LLMs, with CAD-specialized baselines included as reference points, on 400 text cases, 400 image cases and 203 annotated assemblies yields three findings. First, text-conditioned part synthesis exposes a gap between executable generation and parametric correctness, as explicit parameters do not reliably form coherent geometry. Second, on image-conditioned reconstruction the multiview Judge shows semantic recognition outpacing geometric alignment: the strongest MLLM scores J^sem = 8.2 versus J^geo = 3.2 out of 10, naming the object and its parts without recovering the dimensions needed for editable parametric output. Third, annotated assembly remains the hardest setting: long part-level and assembly-level annotations widen model differences, with weaker MLLMs dropping sharply in executable validity and structural consistency; even the strongest model reaches only 0.525 cross-format PartMatchF1, showing that explicit part recovery remains limited. Together these results expose a persistent gap between executable or visually plausible 3D programs and editable parametric designs with correct parameter dimensions and part relations.",
    links: { code: "https://github.com/LucasQAQ/p3d" }
  },
  tasks: [
    { id: "text2cad", label: "Text-to-3D", formats: ["JSON", "OpenSCAD"], status: "interactive" },
    { id: "image2cad", label: "Image-to-3D", formats: ["CadQuery", "OpenSCAD", "Three.js"], status: "interactive" },
    { id: "text_image2cad", label: "Assembly-3D", formats: ["CadQuery", "OpenSCAD"], status: "interactive" }
  ],
  models: [],
  cases: [],
  runs: [],
  figures: [
    { id: "pipeline", title: "Pipeline", placeholder: true },
    { id: "leaderboard", title: "Leaderboard", placeholder: true }
  ],
  gallery: []
};

function asset(path?: string) {
  if (!path) return "";
  if (path.startsWith("http") || path.startsWith("/")) return path;
  const base = import.meta.env.BASE_URL.endsWith("/") ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}demo/${path}`;
}

function App() {
  const [manifest, setManifest] = useState<Manifest>(fallbackManifest);
  const [task, setTask] = useState("text2cad");
  const [caseId, setCaseId] = useState("");
  const [model, setModel] = useState("");
  const [spec, setSpec] = useState("descriptive");
  const [format, setFormat] = useState("openscad");
  const [code, setCode] = useState("");

  useEffect(() => {
    fetch(asset("manifest.json"))
      .then((res) => (res.ok ? res.json() : fallbackManifest))
      .then((data) => setManifest(data))
      .catch(() => setManifest(fallbackManifest));
  }, []);

  const completeTaskRuns = useMemo(() => manifest.runs.filter((run) => run.task === task && isCompleteDemoRun(run)), [manifest, task]);
  const interactiveCaseIds = useMemo(() => getInteractiveCaseIds(completeTaskRuns), [completeTaskRuns]);
  const taskRuns = useMemo(() => completeTaskRuns.filter((run) => interactiveCaseIds.has(run.case_id)), [completeTaskRuns, interactiveCaseIds]);
  const cases = useMemo(() => manifest.cases.filter((item) => item.task === task && interactiveCaseIds.has(item.id)), [interactiveCaseIds, manifest, task]);
  const exactRun = useMemo(
    () => taskRuns.find((run) => run.case_id === caseId && run.model === model && run.format === format),
    [caseId, format, model, taskRuns]
  );
  const selectedRun = useMemo(
    () => exactRun || pickDefaultRun(taskRuns.filter((run) => run.case_id === caseId && run.model === model)) || pickDefaultRun(taskRuns.filter((run) => run.case_id === caseId)) || pickDefaultRun(taskRuns),
    [caseId, exactRun, model, taskRuns]
  );
  const activeCaseId = selectedRun?.case_id || caseId;
  const activeModel = selectedRun?.model || model;
  const activeSpec = selectedRun?.spec || spec;
  const activeFormat = selectedRun?.format || format;
  const caseRuns = useMemo(() => taskRuns.filter((run) => run.case_id === activeCaseId), [activeCaseId, taskRuns]);
  const models = useMemo(() => manifest.models.filter((item) => caseRuns.some((run) => run.model === item.id)), [caseRuns, manifest.models]);
  const modelRuns = useMemo(() => caseRuns.filter((run) => run.model === activeModel), [activeModel, caseRuns]);
  const taskFormats = useMemo(() => Array.from(new Set(taskRuns.map((run) => run.format))).sort((a, b) => formatPriority(a) - formatPriority(b)), [taskRuns]);
  const formats = taskFormats.length ? taskFormats : modelRuns.map((run) => run.format);
  const availabilitySummary = useMemo(() => buildAvailabilitySummary(cases, taskRuns), [cases, taskRuns]);

  useEffect(() => {
    if (!selectedRun) return;
    if (caseId !== selectedRun.case_id) setCaseId(selectedRun.case_id);
    if (model !== selectedRun.model) setModel(selectedRun.model);
    if (spec !== selectedRun.spec) setSpec(selectedRun.spec);
    if (format !== selectedRun.format) setFormat(selectedRun.format);
  }, [caseId, format, model, selectedRun, spec]);

  const selectedCase = manifest.cases.find((item) => item.id === activeCaseId);
  const selectedModel = manifest.models.find((item) => item.id === activeModel);
  const selectedTask = manifest.tasks.find((item) => item.id === selectedRun?.task);
  const showcaseItems = useMemo(() => buildShowcaseItems(manifest), [manifest]);
  const showcaseComparisons = useMemo(() => buildShowcaseComparisons(manifest), [manifest]);
  const heroItems = useMemo(() => pickHeroSceneItems(showcaseItems), [showcaseItems]);
  const visibleTasks = useMemo(() => manifest.tasks.filter((item) => item.status === "interactive"), [manifest]);
  const caseUsesImagePicker = cases.some((item) => item.thumbnail);
  const selectedInput = selectedRun?.condition || selectedCase?.title || "No input.";
  const selectedInputItem = selectedRun ? {
    title: selectedCase?.title || `Case ${selectedRun.case_id}`,
    taskLabel: selectedTask?.label || selectedRun.task,
    specLabel: inputSpecLabel(selectedRun.spec),
    input: selectedInput,
    inputImage: caseUsesImagePicker ? undefined : selectedRun.assets.input_image,
    subtitle: `${selectedModel?.label || selectedRun.model} / ${outputFormatLabel(selectedRun.format)}`
  } : null;

  const applyRunSelection = (run?: Run) => {
    if (!run) return;
    setCaseId(run.case_id);
    setModel(run.model);
    setSpec(run.spec);
    setFormat(run.format);
  };

  const pickRunForFormat = (nextFormat: string) =>
    pickDefaultRun(taskRuns.filter((run) => run.case_id === activeCaseId && run.model === activeModel && run.format === nextFormat)) ||
    pickDefaultRun(taskRuns.filter((run) => run.case_id === activeCaseId && run.format === nextFormat)) ||
    pickDefaultRun(taskRuns.filter((run) => run.model === activeModel && run.format === nextFormat)) ||
    pickDefaultRun(taskRuns.filter((run) => run.format === nextFormat));

  useEffect(() => {
    const path = selectedRun?.assets.generated || selectedRun?.assets.generated_json;
    if (!path) {
      setCode("");
      return;
    }
    fetch(asset(path))
      .then((res) => (res.ok ? res.text() : ""))
      .then(setCode)
      .catch(() => setCode(""));
  }, [selectedRun]);

  const paper = manifest.paper;

  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top">P3D-Bench</a>
        <div>
          <a href="#results">Results</a>
          <a href="#pipeline">Pipeline</a>
          <a href="#gallery">Viewer</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Parametric 3D CAD Benchmark</p>
          <h1 className="hero-title">
            <span>P3D-Bench</span>
            <small>Benchmarking MLLMs for <em>Parametric 3D</em> Generation and <em>Structural Reasoning</em></small>
          </h1>
          <div className="authors">
            {paper.authors.map((author) => <span className="author-name" key={author}>{renderAuthor(author)}</span>)}
          </div>
          <div className="affiliations">
            {paper.affiliations?.map((affiliation) => <span className="affiliation-item" key={affiliation}>{renderAffiliation(affiliation)}</span>)}
          </div>
          <div className="actions">
            <a href={paper.links?.paper || "#pipeline"}><BookOpen size={17} /> Paper</a>
            <a href={paper.links?.code || "https://github.com/LucasQAQ/p3d"}><Github size={17} /> Page Repo</a>
            <a href="#results"><Play size={17} /> Demo</a>
            <a href="#citation"><Braces size={17} /> BibTeX</a>
          </div>
        </div>
        <HeroCadScene items={heroItems} />
        <figure className="teaser-figure">
          <img src="/figures/fig_tasks_grouped_bars.svg" alt="Task overview: grouped bar scores across text, image and assembly tasks" />
        </figure>
        <div className="abstract-panel">
          <p className="eyebrow">Abstract</p>
          <p className="abstract">{paper.abstract}</p>
        </div>
      </section>

      <section className="task-strip">
        {visibleTasks.map((item) => (
          <button key={item.id} className={task === item.id ? "task-card active" : "task-card"} onClick={() => setTask(item.id)}>
            <span>{item.label}</span>
            <strong>{item.formats.join(" / ")}</strong>
          </button>
        ))}
      </section>

      <section id="results" className="section">
        <div className="section-heading">
          <h2>Interactive Results</h2>
        </div>
        {taskRuns.length ? (
          <div className="workbench">
            <aside className="controls">
              <Select label="Case" value={activeCaseId} options={cases.map((item) => [item.id, item.title])} onChange={(nextCase) => applyRunSelection(pickDefaultRun(taskRuns.filter((run) => run.case_id === nextCase)))} />
              {caseUsesImagePicker ? (
                <CaseImagePicker
                  cases={cases}
                  activeCaseId={activeCaseId}
                  onSelect={(nextCase) => applyRunSelection(pickDefaultRun(taskRuns.filter((run) => run.case_id === nextCase)))}
                />
              ) : null}
              <Select label="Model" value={activeModel} options={models.map((item) => [item.id, item.label])} onChange={(nextModel) => applyRunSelection(pickDefaultRun(caseRuns.filter((run) => run.model === nextModel)))} />
              <Select label="Format" value={activeFormat} options={formats.map((item) => [item, outputFormatLabel(item)])} onChange={(nextFormat) => applyRunSelection(pickRunForFormat(nextFormat))} />
              <Select label="Input protocol" value={activeSpec} options={Array.from(new Set(caseRuns.filter((run) => run.model === activeModel).map((run) => run.spec))).sort((a, b) => specPriority(a) - specPriority(b)).map((s) => [s, inputSpecLabel(s)])} onChange={(nextSpec) => applyRunSelection(pickDefaultRun(caseRuns.filter((run) => run.model === activeModel && run.spec === nextSpec)))} />
              <AvailabilityNote summary={availabilitySummary} />
              <Collapsible title="Input" icon={<ImageIcon size={16} />}>
                <div className="condition-body">
                  {selectedRun?.assets.input_image && !caseUsesImagePicker ? <img className="condition-image" src={asset(selectedRun.assets.input_image)} alt="Input reference" /> : null}
                  <p>{selectedInput}</p>
                </div>
              </Collapsible>
              <Collapsible title="Metrics" icon={<Layers3 size={16} />}>
                <MetricStrip run={selectedRun} />
              </Collapsible>
              <Collapsible title={`Generated ${outputFormatLabel(activeFormat)}`} icon={<Code2 size={16} />}>
                <div className="code-panel">
                  <pre><code>{code || "No generated output."}</code></pre>
                </div>
              </Collapsible>
            </aside>
            <div className="result-stage">
              <div className="render-pair">
                <GroundTruthFigure
                  run={selectedRun}
                  title={selectedCase?.title || "Ground Truth"}
                  subtitle="Reference geometry"
                />
                <PredictionFigure
                  run={selectedRun}
                  title={selectedCase?.title || "Prediction"}
                  subtitle={`${selectedModel?.label || selectedRun?.model || ""}${selectedRun ? ` / ${outputFormatLabel(selectedRun.format)}` : ""}`}
                />
              </div>
            </div>
          </div>
        ) : (
          <Placeholder title="Results" />
        )}
      </section>

      <section id="pipeline" className="section">
        <div className="section-heading">
          <h2>Pipeline &amp; Leaderboard</h2>
        </div>
        <MainFigures />
      </section>

      <section id="gallery" className="section">
        <div className="section-heading">
          <h2>Render Showcase</h2>
          <p>Same case, same format, different models.</p>
        </div>
        <RenderShowcase comparisons={showcaseComparisons} />
      </section>

      <section id="citation" className="section citation">
        <div className="citation-heading">
          <h2>Citation</h2>
          <p className="citation-format">BibTeX</p>
        </div>
        <pre><code>{`@article{p3dbench2026,
  title={P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning},
  author={Yang, Yikang and Hu, Zhanpeng and Lin, Youtian and Zhou, Mengqi and Xu, Jingxi and Zhang, Feihu and Liu, Jiaheng and Yao, Yao},
  year={2026}
}`}</code></pre>
      </section>
    </main>
  );
}

function buildShowcaseItems(manifest: Manifest): ShowcaseItem[] {
  const modelCycle = ["gpt55-reason", "gemini-reason", "claude-reason", "kimi_k26-reason", "doubao-reason", "qwen-reason", "mimo_omni-reason"];
  const formatCycle = ["openscad", "cadquery", "threejs", "json"];
  const modelLabel = new Map(manifest.models.map((model) => [model.id, model.label]));
  const taskLabel = new Map(manifest.tasks.map((task) => [task.id, task.label]));
  const caseTitle = new Map(manifest.cases.map((item) => [item.id, item.title]));
  const runsByCase = new Map<string, Run[]>();
  manifest.runs
    .filter((run) => isCompleteDemoRun(run) && run.valid !== false)
    .forEach((run) => {
      const key = `${run.task}/${run.case_id}`;
      const runs = runsByCase.get(key) || [];
      runs.push(run);
      runsByCase.set(key, runs);
    });

  const items = manifest.cases
    .map((item, index) => {
      const targetModel = modelCycle[index % modelCycle.length];
      const targetFormat = formatCycle[index % formatCycle.length];
      const run = [...(runsByCase.get(`${item.task}/${item.id}`) || [])].sort((a, b) => {
        const qualityDelta = runQuality(b) - runQuality(a);
        if (qualityDelta) return qualityDelta;
        const modelDelta = Number(a.model !== targetModel) - Number(b.model !== targetModel);
        if (modelDelta) return modelDelta;
        const formatDelta = Number(a.format !== targetFormat) - Number(b.format !== targetFormat);
        if (formatDelta) return formatDelta;
        return a.id.localeCompare(b.id);
      })[0];
      return run;
    })
    .filter((run): run is Run => Boolean(run))
    .map((run) => ({
      id: run.id,
      task: run.task,
      title: caseTitle.get(run.case_id) || `Case ${run.case_id.split("/").pop() || run.case_id}`,
      subtitle: `${modelLabel.get(run.model) || run.model} / ${outputFormatSummary((runsByCase.get(`${run.task}/${run.case_id}`) || []).filter((item) => item.model === run.model).map((item) => item.format))}`,
      taskLabel: taskLabel.get(run.task) || run.task,
      specLabel: inputSpecLabel(run.spec),
      input: run.condition || caseTitle.get(run.case_id) || `Case ${run.case_id}`,
      inputImage: run.assets.input_image,
      src: run.assets.pred_render || "",
      mesh: run.assets.mesh || "",
    }));
  return interleaveShowcaseItems(items);
}

function interleaveShowcaseItems(items: ShowcaseItem[]) {
  const taskOrder = ["text2cad", "image2cad", "text_image2cad"];
  const groups = new Map<string, ShowcaseItem[]>();
  items.forEach((item) => groups.set(item.task, [...(groups.get(item.task) || []), item]));
  const output: ShowcaseItem[] = [];
  let index = 0;
  while (output.length < items.length) {
    let added = false;
    for (const task of taskOrder) {
      const item = groups.get(task)?.[index];
      if (item) {
        output.push(item);
        added = true;
      }
    }
    if (!added) break;
    index += 1;
  }
  return output;
}

function buildShowcaseComparisons(manifest: Manifest): ShowcaseComparison[] {
  const taskOrder = ["text2cad", "image2cad", "text_image2cad"];
  const formatPreference: Record<string, string[]> = {
    text2cad: ["openscad", "json"],
    image2cad: ["cadquery", "openscad", "threejs"],
    text_image2cad: ["cadquery", "openscad"],
  };
  const taskLabel = new Map(manifest.tasks.map((task) => [task.id, task.label]));
  const modelById = new Map(manifest.models.map((model) => [model.id, model]));
  const caseById = new Map(manifest.cases.map((item) => [item.id, item]));
  const completeRuns = manifest.runs.filter((run) => isCompleteDemoRun(run) && run.valid !== false);

  return taskOrder
    .map((task) => {
      const cases = manifest.cases.filter((item) => item.task === task);
      const availableFormats = Array.from(new Set(completeRuns.filter((run) => run.task === task).map((run) => run.format)));
      const formats = Array.from(new Set([...(formatPreference[task] || []), ...availableFormats])).filter((formatName) => availableFormats.includes(formatName));
      let best: { score: number; caseId: string; format: string; runs: Run[] } | null = null;

      cases.forEach((item, caseIndex) => {
        formats.forEach((formatName, formatIndex) => {
          const runs = pickComparisonRuns(completeRuns.filter((run) => run.task === task && run.case_id === item.id && run.format === formatName));
          if (runs.length < 3) return;
          const preferredCoverage = runs.reduce((sum, run) => sum + Math.max(0, 16 - modelPreferenceIndex(run.model)), 0);
          const curatedCaseIndex = (showcaseCasePreference[task] || []).indexOf(item.id);
          const curatedCaseBonus = curatedCaseIndex >= 0 ? 1600 - curatedCaseIndex * 160 : Math.max(0, 80 - caseIndex);
          const score = (formats.length - formatIndex) * 1000 + runs.length * 120 + curatedCaseBonus + preferredCoverage * 2 + runs.reduce((sum, run) => sum + runQuality(run) * 0.04, 0);
          if (!best || score > best.score) {
            best = { score, caseId: item.id, format: formatName, runs };
          }
        });
      });

      if (!best) return null;
      const referenceRun = best.runs[0];
      const caseItem = caseById.get(best.caseId);
      return {
        id: `${task}-${best.caseId}-${best.format}`,
        task,
        taskLabel: taskLabel.get(task) || task,
        title: displayShowcaseTitle(task, best.caseId, caseItem?.title),
        input: referenceRun.condition || caseItem?.title || `Case ${best.caseId}`,
        inputImage: referenceRun.assets.input_image || caseItem?.thumbnail,
        gtRender: referenceRun.assets.gt_render || "",
        gtMesh: referenceRun.assets.gt_mesh || "",
        formatLabel: outputFormatLabel(best.format),
        specLabel: inputSpecLabel(referenceRun.spec),
        variants: best.runs.map((run) => {
          const model = modelById.get(run.model);
          return {
            id: run.id,
            task: run.task,
            model: run.model,
            modelLabel: model?.label || run.model,
            family: model?.family || "",
            formatLabel: outputFormatLabel(run.format),
            specLabel: inputSpecLabel(run.spec),
            src: run.assets.pred_render || "",
            mesh: run.assets.mesh || "",
          };
        }),
      };
    })
    .filter((item): item is ShowcaseComparison => Boolean(item));
}

function displayShowcaseTitle(task: string, caseId: string, title?: string) {
  if (task === "text2cad") return `Text Case · ${caseId.split("/").pop() || caseId}`;
  return title || `Case ${caseId.split("/").pop() || caseId}`;
}

const modelComparisonPreference = [
  "gpt55-reason",
  "gemini-reason",
  "kimi_k26-reason",
  "claude-reason",
  "deepseek_v4pro-reason",
  "qwen-reason",
  "mimo_omni-reason",
  "doubao-reason",
  "glm_5v_turbo-reason",
  "glm-reason",
  "mimo_v25-reason",
  "mimo-reason",
];

const showcaseCasePreference: Record<string, string[]> = {
  text2cad: ["0075/00758810", "0013/00134405", "0053/00531353"],
  image2cad: ["articraft/toy_robot_20546", "articraft/hose_reel_24414", "articraft/wall_fan_20745"],
  text_image2cad: ["textimage2cad/120712_92f373b4", "textimage2cad/117698_aca36590", "textimage2cad/33528_10e28c4c"],
};

function pickComparisonRuns(runs: Run[]) {
  const byModel = new Map<string, Run>();
  [...runs]
    .sort((a, b) => runQuality(b) - runQuality(a) || specPriority(a.spec) - specPriority(b.spec) || a.id.localeCompare(b.id))
    .forEach((run) => {
      if (!byModel.has(run.model)) byModel.set(run.model, run);
    });

  return Array.from(byModel.values())
    .sort((a, b) => {
      const modelDelta = modelPreferenceIndex(a.model) - modelPreferenceIndex(b.model);
      if (modelDelta) return modelDelta;
      return runQuality(b) - runQuality(a) || a.id.localeCompare(b.id);
    })
    .slice(0, 3);
}

function modelPreferenceIndex(model: string) {
  const index = modelComparisonPreference.indexOf(model);
  return index === -1 ? modelComparisonPreference.length : index;
}

function isCompleteDemoRun(run: Run) {
  return Boolean((run.condition || "").trim() && (run.assets.generated || run.assets.generated_json) && run.assets.gt_mesh && run.assets.gt_render && run.assets.mesh && run.assets.pred_render);
}

function getInteractiveCaseIds(runs: Run[]) {
  return new Set(runs.map((run) => run.case_id));
}

function buildAvailabilitySummary(cases: Manifest["cases"], runs: Run[]): AvailabilitySummary {
  const caseIds = new Set(cases.map((item) => item.id));
  const modelIds = new Set(runs.map((run) => run.model));
  const formatIds = new Set(runs.map((run) => run.format));
  const completeRunKeys = new Set(runs.map((run) => `${run.case_id}/${run.model}/${run.format}`));
  const expectedCount = caseIds.size * modelIds.size * formatIds.size;
  return {
    invalidCount: Math.max(0, expectedCount - completeRunKeys.size),
    caseCount: caseIds.size,
    modelCount: modelIds.size,
    formatCount: formatIds.size,
  };
}

function AvailabilityNote({ summary }: { summary: AvailabilitySummary }) {
  if (!summary.invalidCount) return null;
  return (
    <p className="availability-note" title={`${summary.caseCount} cases, ${summary.modelCount} models, ${summary.formatCount} formats`}>
      <span aria-hidden="true" />
      Invalid or non-renderable outputs are omitted from these selectors ({summary.invalidCount} combinations).
    </p>
  );
}

function pickDefaultRun(runs: Run[]) {
  return [...runs].sort((a, b) => {
    const validityDelta = Number(b.valid !== false) - Number(a.valid !== false);
    if (validityDelta) return validityDelta;
    const formatDelta = formatPriority(a.format) - formatPriority(b.format);
    if (formatDelta) return formatDelta;
    const qualityDelta = runQuality(b) - runQuality(a);
    if (qualityDelta) return qualityDelta;
    const specDelta = specPriority(a.spec) - specPriority(b.spec);
    if (specDelta) return specDelta;
    return a.id.localeCompare(b.id);
  })[0];
}

function inputSpecLabel(spec: string) {
  if (spec === "image") return "Image input";
  if (spec === "image_text") return "Image + text input";
  return spec === "parametric" ? "Parametric input" : "Descriptive input";
}

function outputFormatLabel(formatName: string) {
  if (formatName === "json") return "JSON";
  if (formatName === "openscad") return "OpenSCAD";
  if (formatName === "cadquery") return "CadQuery";
  if (formatName === "threejs") return "Three.js";
  return formatName;
}

function outputFormatSummary(formatNames: string[]) {
  const unique = Array.from(new Set(formatNames)).sort((a, b) => formatPriority(a) - formatPriority(b));
  return unique.map(outputFormatLabel).join(" + ");
}

function specPriority(spec: string) {
  if (spec === "parametric") return 0;
  if (spec === "image_text" || spec === "image") return 1;
  if (spec === "descriptive") return 2;
  return 3;
}

function formatPriority(formatName: string) {
  if (formatName === "json") return 0;
  if (formatName === "cadquery") return 1;
  if (formatName === "openscad") return 2;
  if (formatName === "threejs") return 3;
  return 4;
}

const modelFamilies: Record<string, ModelFamilyStyle> = {
  openai: { color: "#202123", icon: "icons/src/openai.svg" },
  gemini: { color: "#14B86A", icon: "icons/src/gemini-color.svg" },
  claude: { color: "#D97757", icon: "icons/src/claude-color.svg" },
  kimi: { color: "#1783FF", icon: "icons/src/kimi-color.svg", tile: "#111619" },
  zai: { color: "#8E5CFB", icon: "icons/src/zai.svg" },
  doubao: { color: "#00A6B8", icon: "icons/src/bytedance-color.svg" },
  deepseek: { color: "#4D6BFE", icon: "icons/src/deepseek-color.svg" },
  qwen: { color: "#FF6003", icon: "icons/src/qwen-color.svg" },
  mimo: { color: "#FF6900", icon: "icons/src/xiaomimimo.svg", tile: "#111619", filter: "invert(1)" },
};

const leaderboardTasks: LeaderboardTask[] = [
  {
    title: "Text-to-3D",
    accent: "#285c8f",
    rows: [
      { model: "GPT-5.5", family: "openai", score: 0.848 },
      { model: "Gemini 3.1 Pro", family: "gemini", score: 0.835 },
      { model: "Claude Opus 4.6", family: "claude", score: 0.831 },
      { model: "Kimi K2.6", family: "kimi", score: 0.796 },
      { model: "GLM-5.1", family: "zai", score: 0.782 },
      { model: "Doubao Seed 2.0 Pro", family: "doubao", score: 0.762 },
      { model: "DeepSeek V4 Pro", family: "deepseek", score: 0.762 },
      { model: "Qwen3.6-Plus", family: "qwen", score: 0.748 },
      { model: "MiMo v2.5 Pro", family: "mimo", score: 0.744 },
      { model: "MiMo v2 Pro", family: "mimo", score: 0.741 },
    ],
  },
  {
    title: "Image-to-3D",
    accent: "#b46e4c",
    rows: [
      { model: "GPT-5.5", family: "openai", score: 0.675 },
      { model: "Gemini 3.1 Pro", family: "gemini", score: 0.667 },
      { model: "Claude Opus 4.6", family: "claude", score: 0.620 },
      { model: "Kimi K2.6", family: "kimi", score: 0.592 },
      { model: "GLM 5V Turbo", family: "zai", score: 0.491 },
      { model: "Qwen3.6-Plus", family: "qwen", score: 0.475 },
      { model: "MiMo v2 Omni", family: "mimo", score: 0.452 },
      { model: "Doubao Seed 2.0 Pro", family: "doubao", score: 0.437 },
    ],
  },
  {
    title: "Assembly-3D",
    accent: "#337665",
    rows: [
      { model: "Gemini 3.1 Pro", family: "gemini", score: 0.659 },
      { model: "GPT-5.5", family: "openai", score: 0.657 },
      { model: "Claude Opus 4.6", family: "claude", score: 0.594 },
      { model: "Kimi K2.6", family: "kimi", score: 0.538 },
      { model: "MiMo v2 Omni", family: "mimo", score: 0.359 },
      { model: "Qwen3.6-Plus", family: "qwen", score: 0.353 },
      { model: "GLM 5V Turbo", family: "zai", score: 0.330 },
      { model: "Doubao Seed 2.0 Pro", family: "doubao", score: 0.316 },
    ],
  },
];

function MainFigures() {
  return (
    <div className="main-figures">
      <PipelinePlaceholder />
      <figure className="leaderboard-figure">
        <img src="/figures/fig_tasks_grouped_bars.svg" alt="Task overview: grouped bar scores across text, image and assembly tasks" />
      </figure>
    </div>
  );
}

function PipelinePlaceholder() {
  return (
    <article className="pipeline-placeholder">
      <div className="pipeline-copy">
        <span>Pipeline</span>
        <h3>Placeholder</h3>
      </div>
      <div className="pipeline-skeleton" aria-hidden="true">
        <div className="skeleton-node wide" />
        <div className="skeleton-arrow" />
        <div className="skeleton-node" />
        <div className="skeleton-arrow" />
        <div className="skeleton-node accent" />
      </div>
    </article>
  );
}

function LeaderboardFigure() {
  return (
    <article className="leaderboard-card">
      <div className="leaderboard-head">
        <div>
          <span>Leaderboard</span>
          <h3>Model Ranking</h3>
        </div>
      </div>
      <div className="leaderboard-axis" aria-hidden="true">
        <span>0.0</span>
        <span>0.3</span>
        <span>0.6</span>
        <span>0.9</span>
      </div>
      <div className="leaderboard-panels">
        {leaderboardTasks.map((task) => <LeaderboardPanel task={task} key={task.title} />)}
      </div>
    </article>
  );
}

function LeaderboardPanel({ task }: { task: LeaderboardTask }) {
  return (
    <section className="leaderboard-panel" style={{ "--task-accent": task.accent } as React.CSSProperties}>
      <div className="leaderboard-task">
        <h4>{task.title}</h4>
      </div>
      <div className="leaderboard-rows">
        {task.rows.map((row, index) => {
          const family = modelFamilies[row.family] || { color: task.accent, icon: "icons/src/openai.svg" };
          const width = `${Math.max(2, (row.score / 0.9) * 100)}%`;
          return (
            <div className="leaderboard-row" key={`${task.title}-${row.model}`}>
              <div className="model-label">
                <span className="model-rank">{index + 1}</span>
                <span
                  className="model-mark"
                  style={{
                    "--model-tile": family.tile || "#fffdfa",
                    "--icon-filter": family.filter || "none",
                  } as React.CSSProperties}
                >
                  <img src={asset(family.icon)} alt="" aria-hidden="true" />
                </span>
                <strong>{row.model}</strong>
              </div>
              <div className="bar-track">
                <span className="bar-fill" style={{ "--bar-color": family.color, "--bar-width": width } as React.CSSProperties} />
              </div>
              <em>{row.score.toFixed(3)}</em>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function runQuality(run: Run) {
  const metrics = run.metrics || {};
  let score = run.valid === false ? -200 : 20;
  const visibleMetricCount = countVisibleMetricValues(run);
  score += visibleMetricCount * 35;
  if (!visibleMetricCount) score -= 90;
  score += numberMetric(metrics.qa_overall ?? metrics.qa_overall_accuracy) * 120;
  score += numberMetric(metrics.qa_semantic) * 28;
  score += numberMetric(metrics.qa_parametric) * 16;
  score += numberMetric(metrics.judge_geometry) * 3;
  score += numberMetric(metrics.judge_semantic) * 3;
  score += numberMetric(metrics.judge_aesthetics) * 3;
  if (typeof metrics.chamfer_distance === "number" && metrics.chamfer_distance > 0) {
    score += Math.max(0, 18 - Math.log10(metrics.chamfer_distance * 10000 + 1) * 5);
  }
  return score;
}

function numberMetric(value: number | string | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function countVisibleMetricValues(run: Run) {
  return Object.entries(run.metrics || {}).filter(([key, value]) => isVisibleMetric(key, value, run)).length;
}

function RenderShowcase({ comparisons }: { comparisons: ShowcaseComparison[] }) {
  const [expandedItem, setExpandedItem] = useState<InputModalItem | null>(null);

  if (!comparisons.length) {
    return <Placeholder title="Render Showcase" />;
  }

  return (
    <div className="render-showcase">
      {comparisons.map((comparison, index) => {
        const inputItem = {
          title: comparison.title,
          taskLabel: comparison.taskLabel,
          specLabel: comparison.specLabel,
          input: comparison.input,
          inputImage: comparison.inputImage,
          subtitle: `${comparison.formatLabel} comparison`,
        };

        return (
          <article
            className="comparison-panel"
            key={comparison.id}
            style={{ "--task-accent": tileColors[index % tileColors.length] } as React.CSSProperties}
          >
            <div className="comparison-head">
              <div>
                <span>{comparison.taskLabel}</span>
                <h3>{comparison.title}</h3>
              </div>
              <strong>{comparison.formatLabel}</strong>
            </div>

            <div className="comparison-body">
              <aside className="comparison-reference">
                <div className="compare-card-head">
                  <div>
                    <span>Reference</span>
                    <strong>Ground Truth</strong>
                  </div>
                </div>
                <div className="compare-viewer gt-viewer">
                  <CadViewer
                    item={{
                      id: `${comparison.id}-ground-truth`,
                      task: comparison.task,
                      title: comparison.title,
                      subtitle: "Ground Truth",
                      src: comparison.gtRender,
                      mesh: comparison.gtMesh,
                    }}
                  />
                </div>
                <div className="comparison-input">
                  {comparison.inputImage ? <img src={asset(comparison.inputImage)} alt="Input reference" /> : null}
                  <p>{comparison.input}</p>
                  {hasExpandableInput(inputItem) ? <button className="viewer-full-input" type="button" onClick={() => setExpandedItem(inputItem)}>View full input</button> : null}
                </div>
              </aside>

              <div className="model-comparison-grid">
                {comparison.variants.map((variant) => {
                  const family = modelFamilies[variant.family] || { color: "#337665", icon: "icons/src/openai.svg" };
                  return (
                    <section
                      className="model-comparison-card"
                      key={variant.id}
                      style={{
                        "--model-color": family.color,
                        "--model-tile": family.tile || "#fffdfa",
                        "--icon-filter": family.filter || "none",
                      } as React.CSSProperties}
                    >
                      <div className="compare-card-head">
                        <span className="model-mark compare-model-mark">
                          <img src={asset(family.icon)} alt="" aria-hidden="true" />
                        </span>
                        <div>
                          <span>{variant.formatLabel}</span>
                          <strong>{variant.modelLabel}</strong>
                        </div>
                      </div>
                      <div className="compare-viewer">
                        <CadViewer
                          item={{
                            id: variant.id,
                            task: variant.task,
                            title: variant.modelLabel,
                            subtitle: variant.formatLabel,
                            src: variant.src,
                            mesh: variant.mesh,
                          }}
                        />
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>
          </article>
        );
      })}
      {expandedItem ? <InputModal item={expandedItem} onClose={() => setExpandedItem(null)} /> : null}
    </div>
  );
}

function InputModal({ item, onClose }: { item: InputModalItem; onClose: () => void }) {
  return (
    <div className="input-modal" role="dialog" aria-modal="true" aria-labelledby="input-modal-title" onClick={onClose}>
      <div className="input-modal-panel" onClick={(event) => event.stopPropagation()}>
        <div className="input-modal-head">
          <span>{item.taskLabel} · {item.specLabel}</span>
          <button type="button" onClick={onClose}>Close</button>
        </div>
        <h3 id="input-modal-title">{item.title}</h3>
        {item.inputImage ? <img className="input-modal-image" src={asset(item.inputImage)} alt="Input reference" /> : null}
        <p>{item.input}</p>
        <em>{item.subtitle}</em>
      </div>
    </div>
  );
}

const tileColors = ["#337665", "#2f7a86", "#4f88a8", "#7aa08f"];

const renderTaskStyles: Record<string, { body: number; edge: number; shadow: number; rim: number }> = {
  text2cad: { body: 0xbfd9ec, edge: 0x316c92, shadow: 0x5a7382, rim: 0xd9efff },
  image2cad: { body: 0xb5ddcf, edge: 0x2e7564, shadow: 0x4f786c, rim: 0xd9f4ea },
  text_image2cad: { body: 0xbfdddf, edge: 0x4b7580, shadow: 0x5b747b, rim: 0xe1f5f6 },
};

function renderStyleForTask(task?: string) {
  return renderTaskStyles[task || ""] || renderTaskStyles.text2cad;
}

function pickHeroSceneItems(items: ShowcaseItem[]) {
  const taskOrder = ["text2cad", "image2cad", "text_image2cad"];
  const perTask = 4;
  const picked: ShowcaseItem[] = [];
  const seen = new Set<string>();

  for (const task of taskOrder) {
    const taskItems = items.filter((item) => item.task === task).slice(0, perTask);
    taskItems.forEach((item) => {
      picked.push(item);
      seen.add(item.id);
    });
  }

  for (const item of items) {
    if (picked.length >= taskOrder.length * perTask) break;
    if (!seen.has(item.id)) picked.push(item);
  }

  return picked;
}

function HeroCadScene({ items }: { items: ShowcaseItem[] }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !items.length) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xeaf5f1);
    scene.fog = new THREE.Fog(0xeaf5f1, 9.2, 15.6);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
    camera.position.set(0, 3.35, 6.55);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xeaf5f1, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xf8fffb, 0xadc5bd, 1.9));

    const key = new THREE.DirectionalLight(0xffffff, 2.55);
    key.position.set(4.7, 6.6, 5.4);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 16;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xb5eadf, 0.82);
    fill.position.set(-5.0, 3.0, -3.0);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xb7dcff, 0.68);
    rim.position.set(-2.6, 4.6, 4.8);
    scene.add(rim);

    const stage = new THREE.Group();
    stage.position.set(0, 0.16, -0.05);
    scene.add(stage);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(7.4, 4.4),
      new THREE.ShadowMaterial({ color: 0x4d6e67, opacity: 0.1 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.88;
    shadowPlane.receiveShadow = true;
    stage.add(shadowPlane);

    const displayItems = items.slice(0, 12);
    const loader = new STLLoader();
    const geometries: THREE.BufferGeometry[] = [shadowPlane.geometry];
    const materials: THREE.Material[] = [shadowPlane.material as THREE.Material];
    const objectGroups: THREE.Group[] = [];
    const baseY: number[] = [];
    let disposed = false;

    displayItems.forEach((item, index) => {
      const column = index % 4;
      const row = Math.floor(index / 4);
      const rowZ = [-0.9, 0.02, 0.94][row] ?? 0;
      const y = [0.22, 0.04, -0.1][row] ?? 0;
      const shell = new THREE.Group();
      shell.position.set((column - 1.5) * 1.32, y, rowZ);
      shell.rotation.y = (column - 1.5) * 0.05 + (row - 1) * 0.035;
      stage.add(shell);
      objectGroups.push(shell);
      baseY.push(y);

      loader.load(asset(item.mesh), (geometry) => {
        if (disposed) {
          geometry.dispose();
          return;
        }

        geometry.computeVertexNormals();
        geometry.computeBoundingBox();
        geometry.center();
        const box = geometry.boundingBox;
        const size = new THREE.Vector3();
        box?.getSize(size);
        const maxAxis = Math.max(size.x, size.y, size.z) || 1;
        geometry.scale(0.93 / maxAxis, 0.93 / maxAxis, 0.93 / maxAxis);
        geometries.push(geometry);

        const taskStyle = renderStyleForTask(item.task);
        const material = new THREE.MeshPhysicalMaterial({
          color: taskStyle.body,
          roughness: 0.58,
          metalness: 0.02,
          clearcoat: 0.1,
          clearcoatRoughness: 0.64,
          emissive: taskStyle.rim,
          emissiveIntensity: 0.006,
        });
        materials.push(material);

        const modelGroup = new THREE.Group();
        modelGroup.rotation.x = -Math.PI / 2;
        modelGroup.rotation.z = (index % 2 ? -1 : 1) * 0.12;

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        modelGroup.add(mesh);

        const edgeGeometry = new THREE.EdgesGeometry(geometry, 30);
        const edgeMaterial = new THREE.LineBasicMaterial({ color: taskStyle.edge, transparent: true, opacity: 0.26 });
        geometries.push(edgeGeometry);
        materials.push(edgeMaterial);
        modelGroup.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
        shell.add(modelGroup);
      });
    });

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      const width = Math.max(320, clientWidth);
      const height = Math.max(360, clientHeight);
      const layoutScale = width < 560 ? 0.68 : width < 760 ? 0.88 : 1.08;
      stage.scale.setScalar(layoutScale);
      camera.position.set(0, width < 560 ? 3.45 : 3.35, width < 560 ? 7.35 : width < 760 ? 6.85 : 6.55);
      camera.lookAt(0, 0, 0);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    let frame = 0;
    const clock = new THREE.Clock();
    const animate = () => {
      const t = clock.getElapsedTime();
      frame = requestAnimationFrame(animate);
      stage.rotation.y = Math.sin(t * 0.3) * 0.06;
      objectGroups.forEach((group, index) => {
        group.position.y = baseY[index] + Math.sin(t * 0.72 + index * 0.57) * 0.028;
      });
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      geometries.forEach((geometry) => geometry.dispose());
      materials.forEach((material) => material.dispose());
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [items]);

  return (
    <div className="hero-visual hero-cad-scene">
      <div className="hero-cad-canvas" ref={mountRef} />
    </div>
  );
}

function GroundTruthFigure({ run, title, subtitle }: { run?: Run; title: string; subtitle: string }) {
  if (!run?.assets.gt_mesh) {
    return <Figure title="Ground Truth" src={run?.assets.gt_render} />;
  }

  return (
    <figure className="render-card result-viewer-card">
      <span>Ground Truth</span>
      <div className="result-viewer">
        <CadViewer
          item={{
            id: `${run.case_id}-${run.spec}-ground-truth`,
            task: run.task,
            title,
            subtitle,
            src: run.assets.gt_render || "",
            mesh: run.assets.gt_mesh,
          }}
          variant="result"
        />
      </div>
    </figure>
  );
}

function PredictionFigure({ run, title, subtitle }: { run?: Run; title: string; subtitle: string }) {
  if (!run?.assets.mesh) {
    return <Figure title="Prediction" src={run?.assets.pred_render} />;
  }

  return (
    <figure className="render-card result-viewer-card">
      <span>Prediction</span>
      <div className="result-viewer">
        <CadViewer
          item={{
            id: run.id,
            task: run.task,
            title,
            subtitle,
            src: run.assets.pred_render || "",
            mesh: run.assets.mesh,
          }}
          variant="result"
        />
      </div>
    </figure>
  );
}

function CadViewer({ item, variant = "showcase" }: { item: CadViewItem; variant?: "showcase" | "result" }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !item.mesh) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf3faf7);
    scene.fog = new THREE.Fog(0xf3faf7, 6.8, 12.2);
    const taskStyle = renderStyleForTask(item.task);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
    camera.position.set(3.6, 2.35, variant === "result" ? 4.35 : 4.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf3faf7, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.enablePan = false;
    controls.minDistance = 2.2;
    controls.maxDistance = 7.5;

    scene.add(new THREE.HemisphereLight(0xfafffc, 0xb9cac2, 1.95));

    const key = new THREE.DirectionalLight(0xffffff, 2.65);
    key.position.set(3.8, 4.8, 3.5);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0xb7eadf, 0.86);
    fill.position.set(-3.2, 2.2, -2.6);
    scene.add(fill);

    const rim = new THREE.DirectionalLight(0xc6e5ff, 0.62);
    rim.position.set(-2.4, 3.4, 3.4);
    scene.add(rim);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 4),
      new THREE.ShadowMaterial({ color: taskStyle.shadow, opacity: 0.09 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -1.06;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    const group = new THREE.Group();
    group.rotation.x = -Math.PI / 2;
    scene.add(group);

    let disposed = false;
    let frame = 0;
    let loadedGeometry: THREE.BufferGeometry | null = null;
    let loadedMaterial: THREE.Material | null = null;
    let edgeGeometry: THREE.BufferGeometry | null = null;
    let edgeMaterial: THREE.Material | null = null;

    const loader = new STLLoader();
    loader.load(asset(item.mesh), (geometry) => {
      if (disposed) {
        geometry.dispose();
        return;
      }
      geometry.computeVertexNormals();
      geometry.computeBoundingBox();
      geometry.center();
      const box = geometry.boundingBox;
      const size = new THREE.Vector3();
      box?.getSize(size);
      const maxAxis = Math.max(size.x, size.y, size.z) || 1;
      const targetScale = variant === "result" ? 2.32 : 2.08;
      geometry.scale(targetScale / maxAxis, targetScale / maxAxis, targetScale / maxAxis);
      geometry.computeBoundingBox();
      loadedGeometry = geometry;

      const material = new THREE.MeshPhysicalMaterial({
        color: taskStyle.body,
        roughness: 0.58,
        metalness: 0.02,
        clearcoat: 0.1,
        clearcoatRoughness: 0.68,
        emissive: taskStyle.rim,
        emissiveIntensity: 0.006,
      });
      loadedMaterial = material;

      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      edgeGeometry = new THREE.EdgesGeometry(geometry, 28);
      edgeMaterial = new THREE.LineBasicMaterial({ color: taskStyle.edge, transparent: true, opacity: variant === "result" ? 0.24 : 0.28 });
      group.add(new THREE.LineSegments(edgeGeometry, edgeMaterial));
    });

    const resize = () => {
      const { clientWidth, clientHeight } = mount;
      const width = Math.max(320, clientWidth);
      const height = Math.max(360, clientHeight);
      renderer.setSize(width, height, false);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    const observer = new ResizeObserver(resize);
    observer.observe(mount);
    resize();

    const animate = () => {
      frame = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      observer.disconnect();
      controls.dispose();
      loadedGeometry?.dispose();
      loadedMaterial?.dispose();
      edgeGeometry?.dispose();
      edgeMaterial?.dispose();
      shadowPlane.geometry.dispose();
      (shadowPlane.material as THREE.Material).dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [item.id, item.mesh, variant]);

  return <div className="cad-viewer" ref={mountRef} />;
}

function Select({ label, value, options, onChange }: { label: string; value: string; options: string[][]; onChange: (value: string) => void }) {
  return (
    <label className="select-label">
      <span>{label}</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        {options.map(([id, text]) => <option value={id} key={id}>{text}</option>)}
      </select>
    </label>
  );
}

function CaseImagePicker({ cases, activeCaseId, onSelect }: { cases: Manifest["cases"]; activeCaseId: string; onSelect: (caseId: string) => void }) {
  const imageCases = cases.filter((item) => item.thumbnail);
  if (!imageCases.length) return null;

  return (
    <div className="case-image-picker" aria-label="Image case picker">
      {imageCases.map((item) => (
        <button
          key={item.id}
          type="button"
          className={item.id === activeCaseId ? "case-image-tile active" : "case-image-tile"}
          onClick={() => onSelect(item.id)}
          title={item.title}
        >
          <img src={asset(item.thumbnail)} alt="" aria-hidden="true" />
          <span>{item.title}</span>
        </button>
      ))}
    </div>
  );
}

function hasExpandableInput(item: Pick<InputModalItem, "input" | "inputImage">) {
  const input = item.input || "";
  return Boolean(item.inputImage || input.length > 180 || input.includes("\n"));
}

const superscriptDigits: Record<string, string> = {
  "⁰": "0",
  "¹": "1",
  "²": "2",
  "³": "3",
  "⁴": "4",
  "⁵": "5",
  "⁶": "6",
  "⁷": "7",
  "⁸": "8",
  "⁹": "9",
};

function normalizeSuperscript(text: string) {
  return text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (char) => superscriptDigits[char] || char);
}

function renderAuthor(author: string) {
  const match = author.match(/^(.+?)([⁰¹²³⁴⁵⁶⁷⁸⁹,\*]+)$/);
  if (!match) return author;
  return <>{match[1]}<sup>{normalizeSuperscript(match[2])}</sup></>;
}

function renderAffiliation(affiliation: string) {
  const match = affiliation.match(/^([⁰¹²³⁴⁵⁶⁷⁸⁹]+)(.+)$/);
  if (!match) return affiliation;
  return <><sup>{normalizeSuperscript(match[1])}</sup>{match[2]}</>;
}

function Figure({ title, src }: { title: string; src?: string }) {
  return (
    <figure className="render-card">
      <span>{title}</span>
      {src ? <img src={asset(src)} alt={title} /> : <div className="render-missing"><ImageIcon />No render</div>}
    </figure>
  );
}

function Collapsible({ title, icon, defaultOpen = false, children }: { title: string; icon?: React.ReactNode; defaultOpen?: boolean; children: React.ReactNode }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className={`collapsible ${open ? "open" : "closed"}`}>
      <button className="collapsible-header" type="button" onClick={() => setOpen(!open)}>
        {icon ? <span className="collapsible-icon">{icon}</span> : null}
        <span className="collapsible-title">{title}</span>
        {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      {open ? <div className="collapsible-body">{children}</div> : null}
    </div>
  );
}

function MetricStrip({ run }: { run?: Run }) {
  const entries = getMetricEntries(run);
  if (!entries.length) return null;
  return (
    <div className="metrics">
      {entries.length ? entries.map((entry) => (
        <div className="metric" key={entry.key}>
          <span>{entry.label}</span>
          <strong>{entry.value}</strong>
        </div>
      )) : null}
    </div>
  );
}

const metricOrder = [
  "chamfer_distance",
  "hausdorff_distance",
  "f_score_005",
  "f_score_001",
  "normal_consistency",
  "iou_csg",
  "iou_voxel",
  "pred_open_edge_ratio",
  "qa_overall",
  "qa_overall_accuracy",
  "qa_semantic",
  "qa_parametric",
  "judge_geometry",
  "judge_semantic",
  "judge_aesthetics",
];

const metricLabels: Record<string, string> = {
  chamfer_distance: "Chamfer",
  hausdorff_distance: "Hausdorff",
  f_score_005: "F@0.05",
  f_score_001: "F@0.01",
  normal_consistency: "Normal",
  iou_csg: "IoU CSG",
  iou_voxel: "IoU voxel",
  pred_open_edge_ratio: "Open edge",
  qa_overall: "Overall QA",
  qa_overall_accuracy: "Overall QA",
  qa_semantic: "Semantic QA",
  qa_parametric: "Parametric QA",
  judge_geometry: "Geometry score",
  judge_semantic: "Semantic score",
  judge_aesthetics: "Aesthetic score",
  acc_cmd: "Command acc.",
  acc_param: "Parameter acc.",
};

function getMetricEntries(run?: Run) {
  if (!run) return [];
  const metrics = run.metrics || {};
  const keys = [
    ...metricOrder.filter((key) => isVisibleMetric(key, metrics[key], run)),
    ...Object.keys(metrics)
      .filter((key) => !metricOrder.includes(key) && isVisibleMetric(key, metrics[key], run))
      .sort(),
  ];
  const entries = keys.map((key) => ({
    key,
    label: metricLabels[key] || key.replace(/_/g, " "),
    value: formatMetricValue(key, metrics[key]),
  }));
  if (entries.length && run.valid !== null && run.valid !== undefined) {
    entries.unshift({ key: "valid", label: "Executable", value: run.valid ? "yes" : "no" });
  }
  return entries;
}

function isVisibleMetric(key: string, value: unknown, run: Run) {
  if (!hasMetricValue(value)) return false;
  if (key === "qa_parametric" && run.spec !== "parametric") return false;
  if (key === "qa_parametric" && typeof value === "number" && value <= 0) return false;
  return true;
}

function hasMetricValue(value: unknown) {
  return value !== null && value !== undefined && value !== "" && !(typeof value === "number" && Number.isNaN(value));
}

function formatMetricValue(key: string, value: number | string | null) {
  if (typeof value !== "number") return String(value);
  if (key.startsWith("judge_") && Number.isInteger(value)) return String(value);
  if (key === "pred_open_edge_ratio") return value.toFixed(3);
  if (key.includes("chamfer") || key.includes("hausdorff")) {
    if (value === 0) return "0";
    return value < 0.01 ? value.toFixed(4) : value.toFixed(3);
  }
  return value < 1 ? value.toFixed(3) : value.toFixed(2);
}

function Placeholder({ title, text }: { title: string; text?: string }) {
  return (
    <div className="placeholder">
      <Layers3 size={32} />
      <h3>{title}</h3>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
