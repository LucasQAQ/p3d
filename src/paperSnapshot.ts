import type { ResultSubtable } from "./resultsData";

const EXPECTED_RELEASE_ID = "p3d-aaai27-paper-current-v1";
const EXPECTED_PROTOCOL_ID = "p3d-aaai27-paper-protocol-v1";
const EXPECTED_TABLE_KEYS = ["text", "image", "assembly"];

type PaperSnapshot = {
  schema_version: number;
  release_id: string;
  protocol_id: string;
  content_sha256: string;
  result_tables: ResultSubtable[];
};

export async function loadPaperResultTables(url: string): Promise<ResultSubtable[]> {
  const response = await fetch(url, { cache: "no-store" });
  if (!response.ok) {
    throw new Error(`Paper snapshot request failed (${response.status}).`);
  }
  const text = await response.text();
  const expectedFileHash = import.meta.env.VITE_P3D_SNAPSHOT_SHA256;
  if (!expectedFileHash) {
    throw new Error("Paper snapshot file hash was not embedded at build time.");
  }
  const actualFileHash = await sha256Hex(text);
  if (actualFileHash !== expectedFileHash) {
    throw new Error("Paper snapshot file hash mismatch.");
  }

  const snapshot = JSON.parse(text) as PaperSnapshot;
  if (
    snapshot.schema_version !== 1 ||
    snapshot.release_id !== EXPECTED_RELEASE_ID ||
    snapshot.protocol_id !== EXPECTED_PROTOCOL_ID ||
    !/^[0-9a-f]{64}$/.test(snapshot.content_sha256 || "")
  ) {
    throw new Error("Paper snapshot release contract mismatch.");
  }
  validateResultTables(snapshot.result_tables);
  return snapshot.result_tables;
}

function validateResultTables(tables: ResultSubtable[]) {
  if (
    !Array.isArray(tables) ||
    tables.length !== EXPECTED_TABLE_KEYS.length ||
    tables.some((table, index) => table?.key !== EXPECTED_TABLE_KEYS[index])
  ) {
    throw new Error("Paper snapshot must contain text, image, and assembly tables.");
  }
  tables.forEach((table) => {
    if (!Array.isArray(table.metrics) || !table.metrics.length || !Array.isArray(table.rows) || !table.rows.length) {
      throw new Error(`Paper snapshot table ${table.key} is incomplete.`);
    }
    const metricCount = table.metrics.length;
    table.rows.forEach((row) => {
      if (!row.model_id) {
        throw new Error(`Paper snapshot table ${table.key} row is missing model_id.`);
      }
    });
    [...table.rows, ...(table.domainRows || [])].forEach((row) => {
      if (!row.model || row.cells.trim().split(/\s+/).length !== metricCount) {
        throw new Error(`Paper snapshot table ${table.key} has an invalid row.`);
      }
    });
  });
}

async function sha256Hex(text: string) {
  if (!globalThis.crypto?.subtle) {
    throw new Error("This browser cannot verify the paper snapshot.");
  }
  const digest = await globalThis.crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(text),
  );
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}
