import React, { useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { BookOpen, Braces, Code2, Github, Image as ImageIcon, Layers3, Play } from "lucide-react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader.js";
import "./styles.css";

type AssetMap = {
  gt_render?: string;
  gt_mesh?: string;
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

type ShowcaseItem = {
  id: string;
  title: string;
  subtitle: string;
  taskLabel: string;
  specLabel: string;
  input: string;
  src: string;
  mesh: string;
};

type CadViewItem = Pick<ShowcaseItem, "id" | "title" | "subtitle" | "src" | "mesh">;

const fallbackManifest: Manifest = {
  schema_version: 1,
  paper: {
    title: "P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning",
    authors: ["Yikang Yang¹,²,*", "Zhanpeng Hu¹,*", "Youtian Lin¹,²", "Mengqi Zhou¹,²", "Feihu Zhang²", "Jiaheng Liu¹", "Yao Yao¹"],
    affiliations: ["¹Nanjing University", "²DreamTech", "*Equal contribution."],
    abstract:
      "Multimodal large language models can write code and interpret rendered images of 3D designs, but it remains unclear whether they can produce executable parametric 3D programs that are geometrically precise, semantically aligned and assembly-consistent. We introduce P3D-Bench, a benchmark that evaluates this ability under a unified protocol across three task families: text-conditioned part synthesis, image-conditioned multi-part reconstruction and image-plus-annotation assembly composition, with metrics that jointly probe executability, geometric fidelity, topology, text-grounded constraints, multiview semantic alignment and part-level assembly structure.",
    links: { code: "https://github.com/LucasQAQ/p3d" }
  },
  tasks: [
    { id: "text2cad", label: "Text-to-3D", formats: ["JSON", "OpenSCAD"], status: "interactive" },
    { id: "image2cad", label: "Image-to-3D", formats: ["CadQuery", "OpenSCAD", "Three.js"], status: "reserved" },
    { id: "text_image2cad", label: "Assembly-3D", formats: ["CadQuery", "OpenSCAD"], status: "reserved" }
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
  const caseRuns = useMemo(() => taskRuns.filter((run) => !caseId || run.case_id === caseId), [caseId, taskRuns]);
  const models = useMemo(() => manifest.models.filter((item) => caseRuns.some((run) => run.model === item.id)), [caseRuns, manifest.models]);
  const modelRuns = useMemo(() => caseRuns.filter((run) => !model || run.model === model), [caseRuns, model]);
  const specs = useMemo(() => Array.from(new Set(modelRuns.map((run) => run.spec))).sort(), [modelRuns]);
  const specRuns = useMemo(() => modelRuns.filter((run) => !spec || run.spec === spec), [modelRuns, spec]);
  const formats = useMemo(() => Array.from(new Set(specRuns.map((run) => run.format))).sort(), [specRuns]);

  useEffect(() => {
    if ((!caseId || !cases.some((item) => item.id === caseId)) && cases[0]) setCaseId(cases[0].id);
    if ((!model || !models.some((item) => item.id === model)) && models[0]) setModel(models[0].id);
    if ((!spec || !specs.includes(spec)) && specs[0]) setSpec(specs[0]);
    if ((!format || !formats.includes(format)) && formats[0]) setFormat(formats[0]);
  }, [caseId, cases, format, formats, model, models, spec, specs]);

  const selectedRun = taskRuns.find((run) => run.case_id === caseId && run.model === model && run.spec === spec && run.format === format);
  const selectedCase = manifest.cases.find((item) => item.id === caseId);
  const selectedModel = manifest.models.find((item) => item.id === model);
  const showcaseItems = useMemo(() => buildShowcaseItems(manifest), [manifest]);
  const heroItems = useMemo(() => showcaseItems.slice(0, 16), [showcaseItems]);
  const visibleTasks = useMemo(() => manifest.tasks.filter((item) => item.status === "interactive"), [manifest]);

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
            <em>public demo</em>
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
                <GroundTruthFigure
                  run={selectedRun}
                  title={selectedCase?.title || "Ground Truth"}
                  subtitle="Reference geometry"
                />
                <PredictionFigure
                  run={selectedRun}
                  title={selectedCase?.title || "Prediction"}
                  subtitle={`${selectedModel?.label || selectedRun?.model || ""}${selectedRun ? ` / ${selectedRun.format.toUpperCase()}` : ""}`}
                />
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
          <p className="eyebrow">Text-to-3D Render Showcase</p>
          <h2>Executable CAD programs as live geometry.</h2>
        </div>
        <RenderShowcase items={showcaseItems} />
      </section>

      <section id="citation" className="section citation">
        <div className="citation-heading">
          <h2>Citation</h2>
          <p className="citation-format">BibTeX</p>
        </div>
        <pre><code>{`@article{p3dbench2026,
  title={P3D-Bench: Benchmarking MLLMs for Parametric 3D Generation and Structural Reasoning},
  author={Yang, Yikang and Hu, Zhanpeng and Lin, Youtian and Zhou, Mengqi and Zhang, Feihu and Liu, Jiaheng and Yao, Yao},
  year={2026}
}`}</code></pre>
      </section>
    </main>
  );
}

function buildShowcaseItems(manifest: Manifest): ShowcaseItem[] {
  const modelCycle = ["gemini-reason", "claude-reason", "qwen-reason", "gpt55-reason"];
  const formatCycle = ["json", "openscad", "json", "openscad"];
  const modelLabel = new Map(manifest.models.map((model) => [model.id, model.label]));
  const taskLabel = new Map(manifest.tasks.map((task) => [task.id, task.label]));
  const caseTitle = new Map(manifest.cases.map((item) => [item.id, item.title]));
  const runsByCase = new Map<string, Run[]>();
  manifest.runs
    .filter((run) => run.task === "text2cad" && run.assets.pred_render && run.assets.mesh && run.valid !== false)
    .forEach((run) => {
      const runs = runsByCase.get(run.case_id) || [];
      runs.push(run);
      runsByCase.set(run.case_id, runs);
    });

  return manifest.cases
    .filter((item) => item.task === "text2cad")
    .map((item, index) => {
      const targetModel = modelCycle[index % modelCycle.length];
      const targetFormat = formatCycle[index % formatCycle.length];
      const run = [...(runsByCase.get(item.id) || [])].sort((a, b) => {
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
      title: caseTitle.get(run.case_id) || `Case ${run.case_id.split("/").pop() || run.case_id}`,
      subtitle: `${modelLabel.get(run.model) || run.model} / ${run.format.toUpperCase()}`,
      taskLabel: taskLabel.get(run.task) || run.task,
      specLabel: run.spec === "parametric" ? "Parametric input" : "Descriptive input",
      input: run.condition || caseTitle.get(run.case_id) || `Case ${run.case_id}`,
      src: run.assets.pred_render || "",
      mesh: run.assets.mesh || "",
    }));
}

function runQuality(run: Run) {
  const metrics = run.metrics || {};
  let score = run.valid === false ? -200 : 20;
  score += numberMetric(metrics.qa_overall ?? metrics.qa_overall_accuracy) * 120;
  score += numberMetric(metrics.qa_semantic) * 28;
  score += numberMetric(metrics.qa_parametric) * 16;
  score += numberMetric(metrics.judge_geometry) * 3;
  score += numberMetric(metrics.judge_semantic) * 3;
  score += numberMetric(metrics.judge_aesthetics) * 3;
  if (run.spec === "parametric") score += 8;
  if (typeof metrics.chamfer_distance === "number" && metrics.chamfer_distance > 0) {
    score += Math.max(0, 18 - Math.log10(metrics.chamfer_distance * 10000 + 1) * 5);
  }
  return score;
}

function numberMetric(value: number | string | null | undefined) {
  return typeof value === "number" && Number.isFinite(value) ? value : 0;
}

function RenderShowcase({ items }: { items: ShowcaseItem[] }) {
  const [selectedId, setSelectedId] = useState("");
  const selected = items.find((item) => item.id === selectedId) || items[0];

  useEffect(() => {
    if (!selectedId && items[0]) setSelectedId(items[0].id);
  }, [items, selectedId]);

  if (!items.length) {
    return <Placeholder title="Render showcase reserved" text="Curated demo renders will appear here when bundled." />;
  }

  return (
    <div className="render-showcase">
      <div className="viewer-shell">
        <div className="viewer-stage">
          <CadViewer item={selected} />
          <div className="viewer-meta">
            <span>{selected.taskLabel} · {selected.specLabel}</span>
            <strong>{selected.title}</strong>
            <p>{selected.input}</p>
            <em>{selected.subtitle}</em>
          </div>
        </div>
        <div className="viewer-rail">
          <div className="viewer-rail-header">
            <span>{items.length} cases</span>
            <strong>Bundled STL demo set</strong>
          </div>
          {items.map((item, index) => (
            <button
              className={item.id === selected.id ? "viewer-case active" : "viewer-case"}
              key={item.id}
              onClick={() => setSelectedId(item.id)}
              title={item.input}
              style={{ "--case-accent": tileColors[index % tileColors.length] } as React.CSSProperties}
            >
              <img src={asset(item.src)} alt={item.title} />
              <em className="case-task">{item.taskLabel} · {item.specLabel}</em>
              <span>{item.input}</span>
              <strong>{item.subtitle}</strong>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

const tileColors = ["#337665", "#285c8f", "#b46e4c", "#6b6b9a", "#2f7a86", "#a88743"];

function HeroCadScene({ items }: { items: ShowcaseItem[] }) {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount || !items.length) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf7f8f4);
    scene.fog = new THREE.Fog(0xf7f8f4, 8.8, 14.5);

    const camera = new THREE.PerspectiveCamera(30, 1, 0.01, 100);
    camera.position.set(0, 3.05, 5.9);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf7f8f4, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    mount.appendChild(renderer.domElement);

    scene.add(new THREE.HemisphereLight(0xffffff, 0xd9e1dc, 2.4));

    const key = new THREE.DirectionalLight(0xffffff, 3.4);
    key.position.set(4.5, 6.5, 5.2);
    key.castShadow = true;
    key.shadow.mapSize.set(2048, 2048);
    key.shadow.camera.near = 0.1;
    key.shadow.camera.far = 16;
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x8dc6bb, 1.25);
    fill.position.set(-5.0, 3.0, -3.0);
    scene.add(fill);

    const stage = new THREE.Group();
    stage.position.set(0, 0.16, -0.05);
    scene.add(stage);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(7.6, 3.6),
      new THREE.ShadowMaterial({ color: 0x50665f, opacity: 0.08 })
    );
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.position.y = -0.84;
    shadowPlane.receiveShadow = true;
    stage.add(shadowPlane);

    const displayItems = items.slice(0, 16);
    const palette = [0xf3ead7, 0xdfece6, 0xe8edf5, 0xf0ddd5, 0xe3e2f0, 0xdce9ef];
    const loader = new STLLoader();
    const geometries: THREE.BufferGeometry[] = [shadowPlane.geometry];
    const materials: THREE.Material[] = [shadowPlane.material as THREE.Material];
    const objectGroups: THREE.Group[] = [];
    const baseY: number[] = [];
    let disposed = false;

    displayItems.forEach((item, index) => {
      const column = index % 8;
      const row = Math.floor(index / 8);
      const y = row === 0 ? 0.18 : -0.12;
      const shell = new THREE.Group();
      shell.position.set((column - 3.5) * 0.76, y, (row - 0.5) * 0.95);
      shell.rotation.y = (column - 3.5) * 0.04;
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
        geometry.scale(1.08 / maxAxis, 1.08 / maxAxis, 1.08 / maxAxis);
        geometries.push(geometry);

        const material = new THREE.MeshStandardMaterial({
          color: palette[index % palette.length],
          roughness: 0.58,
          metalness: 0.04,
        });
        materials.push(material);

        const modelGroup = new THREE.Group();
        modelGroup.rotation.x = -Math.PI / 2;
        modelGroup.rotation.z = (index % 2 ? -1 : 1) * 0.18;

        const mesh = new THREE.Mesh(geometry, material);
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        modelGroup.add(mesh);

        const edgeGeometry = new THREE.EdgesGeometry(geometry, 30);
        const edgeMaterial = new THREE.LineBasicMaterial({ color: 0x66716b, transparent: true, opacity: 0.22 });
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
      stage.rotation.y = Math.sin(t * 0.34) * 0.085;
      objectGroups.forEach((group, index) => {
        group.position.y = baseY[index] + Math.sin(t * 0.9 + index * 0.57) * 0.045;
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
    scene.background = new THREE.Color(0xf7fbf4);
    scene.fog = new THREE.Fog(0xf7fbf4, 6.5, 11.5);
    const camera = new THREE.PerspectiveCamera(38, 1, 0.01, 100);
    camera.position.set(3.6, 2.35, variant === "result" ? 4.35 : 4.7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0xf7fbf4, 1);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
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

    scene.add(new THREE.HemisphereLight(0xffffff, 0xaeb8b3, 2.1));

    const key = new THREE.DirectionalLight(0xffffff, 3.0);
    key.position.set(3.5, 4.5, 3.2);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    scene.add(key);

    const fill = new THREE.DirectionalLight(0x9bdccc, 1.2);
    fill.position.set(-3.0, 2.0, -2.5);
    scene.add(fill);

    const shadowPlane = new THREE.Mesh(
      new THREE.PlaneGeometry(6, 4),
      new THREE.ShadowMaterial({ color: 0x53665f, opacity: 0.09 })
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

      const material = new THREE.MeshStandardMaterial({
        color: 0xf5eddc,
        roughness: 0.62,
        metalness: 0.05,
        emissive: 0x2a2115,
        emissiveIntensity: 0.02,
      });
      loadedMaterial = material;

      const mesh = new THREE.Mesh(geometry, material);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      edgeGeometry = new THREE.EdgesGeometry(geometry, 28);
      edgeMaterial = new THREE.LineBasicMaterial({ color: 0x7e776b, transparent: true, opacity: variant === "result" ? 0.22 : 0.26 });
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

function MetricStrip({ run }: { run?: Run }) {
  const entries = getMetricEntries(run);
  return (
    <div className="metrics">
      {entries.length ? entries.map((entry) => (
        <div className="metric" key={entry.key}>
          <span>{entry.label}</span>
          <strong>{entry.value}</strong>
        </div>
      )) : <div className="metric metric-empty">No metrics bundled for this run.</div>}
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
  if (run.valid !== null && run.valid !== undefined) {
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
