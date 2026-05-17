import React, { useEffect, useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, Braces, ChevronRight, Code2, Database, Github, Image as ImageIcon, Layers3, Play } from "lucide-react";
import "./styles.css";

type AssetMap = {
  gt_render?: string;
  pred_render?: string;
  generated?: string;
  mesh?: string;
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

const fallbackManifest: Manifest = {
  schema_version: 1,
  paper: {
    title: "P3D-Bench: Evaluating Large Models for Parametric 3D CAD Generation",
    authors: ["Yikang Yang", "Zhanpeng Hu", "Youtian Lin", "Mengqi Zhou", "Feihu Zhang", "Jiaheng Liu", "Yao Yao"],
    affiliations: ["Nanjing University", "DreamTech"],
    abstract:
      "P3D-Bench evaluates large models across parametric CAD tasks, executable output formats, and render-grounded quality metrics. The public demo highlights precomputed Text-to-3D results and provides local code for running small benchmark cases.",
    links: { code: "https://github.com/LucasQAQ/p3d" }
  },
  tasks: [
    { id: "text2cad", label: "Text-to-3D", formats: ["JSON", "OpenSCAD"], status: "interactive" },
    { id: "image2cad", label: "Image-to-3D", formats: ["CadQuery", "OpenSCAD", "Three.js"], status: "reserved" },
    { id: "text_image2cad", label: "Text+Image-to-3D", formats: ["CadQuery", "OpenSCAD"], status: "reserved" }
  ],
  models: [],
  cases: [],
  runs: [],
  figures: [
    { id: "pipeline", title: "Pipeline figure placeholder", placeholder: true },
    { id: "leaderboard", title: "Leaderboard placeholder", placeholder: true }
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

  const taskRuns = useMemo(() => manifest.runs.filter((run) => run.task === task), [manifest, task]);
  const cases = useMemo(() => manifest.cases.filter((item) => item.task === task || taskRuns.some((run) => run.case_id === item.id)), [manifest, task, taskRuns]);
  const models = useMemo(() => manifest.models.filter((item) => taskRuns.some((run) => run.model === item.id)), [manifest, taskRuns]);
  const specs = useMemo(() => Array.from(new Set(taskRuns.map((run) => run.spec))).sort(), [taskRuns]);
  const formats = useMemo(() => Array.from(new Set(taskRuns.map((run) => run.format))).sort(), [taskRuns]);

  useEffect(() => {
    if (!caseId && cases[0]) setCaseId(cases[0].id);
    if (!model && models[0]) setModel(models[0].id);
    if (!spec && specs[0]) setSpec(specs[0]);
    if (!format && formats[0]) setFormat(formats[0]);
  }, [caseId, cases, format, formats, model, models, spec, specs]);

  const selectedRun = taskRuns.find((run) => run.case_id === caseId && run.model === model && run.spec === spec && run.format === format);
  const selectedCase = manifest.cases.find((item) => item.id === caseId);

  useEffect(() => {
    const path = selectedRun?.assets.generated;
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
          <a href="#gallery">Gallery</a>
          <a href="#code">Code</a>
        </div>
      </nav>

      <section id="top" className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Parametric 3D CAD Benchmark</p>
          <h1>{paper.title}</h1>
          <p className="authors">{paper.authors.join(" · ")}</p>
          <p className="affiliations">{paper.affiliations?.join(" · ")}</p>
          <p className="abstract">{paper.abstract}</p>
          <div className="actions">
            <a href={paper.links?.paper || "#pipeline"}><BookOpen size={17} /> Paper</a>
            <a href={paper.links?.code || "https://github.com/LucasQAQ/p3d"}><Github size={17} /> Page Repo</a>
            <a href="#results"><Play size={17} /> Demo</a>
            <a href="#citation"><Braces size={17} /> BibTeX</a>
          </div>
        </div>
        <div className="hero-visual">
          <img src={asset(manifest.figures?.find((fig) => fig.id === "teaser")?.src || "figures/fig1_teaser.png")} alt="P3D-Bench teaser" />
        </div>
      </section>

      <section className="task-strip">
        {manifest.tasks.map((item) => (
          <button key={item.id} className={task === item.id ? "task-card active" : "task-card"} onClick={() => setTask(item.id)}>
            <span>{item.label}</span>
            <strong>{item.formats.join(" / ")}</strong>
            <em>{item.status === "interactive" ? "interactive" : "slot reserved"}</em>
          </button>
        ))}
      </section>

      <section id="results" className="section">
        <div className="section-heading">
          <p className="eyebrow">Interactive Results</p>
          <h2>Choose a case, model, input specification, and output format.</h2>
        </div>
        {taskRuns.length ? (
          <div className="workbench">
            <aside className="controls">
              <Select label="Case" value={caseId} options={cases.map((item) => [item.id, item.title])} onChange={setCaseId} />
              <Select label="Model" value={model} options={models.map((item) => [item.id, item.label])} onChange={setModel} />
              <Select label="Spec" value={spec} options={specs.map((item) => [item, item])} onChange={setSpec} />
              <Select label="Format" value={format} options={formats.map((item) => [item, item.toUpperCase()])} onChange={setFormat} />
              <div className="condition">
                <span>Input</span>
                <p>{selectedRun?.condition || selectedCase?.title || "No result is available for this combination yet."}</p>
              </div>
            </aside>
            <div className="result-stage">
              <div className="render-pair">
                <Figure title="Ground Truth" src={selectedRun?.assets.gt_render} />
                <Figure title="Prediction" src={selectedRun?.assets.pred_render} />
              </div>
              <MetricStrip run={selectedRun} />
              <div className="code-panel">
                <div className="panel-title"><Code2 size={18} /> Generated {selectedRun?.format?.toUpperCase() || "Artifact"}</div>
                <pre><code>{code || "No generated artifact is bundled for this run."}</code></pre>
              </div>
            </div>
          </div>
        ) : (
          <Placeholder title="Results reserved" text="The task contract is implemented in the repo. Public precomputed results for this task will be added in the next bundle." />
        )}
      </section>

      <section id="pipeline" className="section">
        <div className="section-heading">
          <p className="eyebrow">Pipeline and Main Figures</p>
          <h2>Task protocol, format coverage, and leaderboard figures.</h2>
        </div>
        <div className="figure-grid">
          {(manifest.figures || []).filter((fig) => fig.id !== "teaser").map((fig) =>
            fig.placeholder ? <Placeholder key={fig.id} title={fig.title} text="Figure placeholder. Replace with the final paper asset when ready." /> : (
              <figure className="paper-figure" key={fig.id}>
                <img src={asset(fig.src)} alt={fig.title} />
                <figcaption>{fig.title}</figcaption>
              </figure>
            )
          )}
        </div>
      </section>

      <section id="gallery" className="section">
        <div className="section-heading">
          <p className="eyebrow">Pre-rendered Cases</p>
          <h2>Small gallery of mesh/render results for fast visual inspection.</h2>
        </div>
        <div className="gallery">
          {(manifest.gallery || []).length ? manifest.gallery!.map((item) => (
            <figure key={item.id} className="gallery-card">
              <img src={asset(item.src)} alt={item.title} />
              <figcaption><strong>{item.title}</strong><span>{item.caption}</span></figcaption>
            </figure>
          )) : <Placeholder title="Gallery assets reserved" text="The gallery builder is included; add curated local mesh renders to publish this section." />}
        </div>
      </section>

      <section id="code" className="section code-callout">
        <Database size={28} />
        <div>
          <h2>Benchmark code release</h2>
          <p>The public benchmark runner is being cleaned separately. This repository publishes only the project page and sanitized static demo assets.</p>
          <code>github.com/LucasQAQ/p3d</code>
        </div>
        <ChevronRight />
      </section>

      <section id="citation" className="section citation">
        <div className="section-heading">
          <p className="eyebrow">Citation</p>
          <h2>BibTeX</h2>
        </div>
        <pre><code>{`@article{p3dbench2026,
  title={P3D-Bench: Evaluating Large Models for Parametric 3D CAD Generation},
  author={Yang, Yikang and Hu, Zhanpeng and Lin, Youtian and Zhou, Mengqi and Zhang, Feihu and Liu, Jiaheng and Yao, Yao},
  year={2026}
}`}</code></pre>
      </section>
    </main>
  );
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

function Figure({ title, src }: { title: string; src?: string }) {
  return (
    <figure className="render-card">
      <span>{title}</span>
      {src ? <img src={asset(src)} alt={title} /> : <div className="render-missing"><ImageIcon />No render</div>}
    </figure>
  );
}

function MetricStrip({ run }: { run?: Run }) {
  const metrics = run?.metrics || {};
  const entries = [
    ["Valid", run?.valid === true ? "yes" : run?.valid === false ? "no" : "n/a"],
    ["Chamfer", metrics.chamfer_distance],
    ["F@.05", metrics.f_score_005],
    ["IoU", metrics.iou_csg ?? metrics.iou_voxel],
    ["QA", metrics.qa_overall ?? metrics.qa_overall_accuracy],
  ];
  return (
    <div className="metrics">
      {entries.map(([key, value]) => (
        <div className="metric" key={key as string}>
          <span>{key}</span>
          <strong>{typeof value === "number" ? value.toFixed(value < 1 ? 3 : 2) : value ?? "n/a"}</strong>
        </div>
      ))}
    </div>
  );
}

function Placeholder({ title, text }: { title: string; text: string }) {
  return (
    <div className="placeholder">
      <Layers3 size={32} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
