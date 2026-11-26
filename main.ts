// Rejected Olympic Sports — one funny single-line sport, 1-200 chars.
// The line lives in entry.txt (shipped in this repo); main.ts only
// validates it against the gate and copies it to the output dir, so the
// judged text is byte-identical to the reviewed source line.
import { readFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));

function loadAndValidateLine() {
  const raw = readFileSync(join(scriptDir, "entry.txt"), "utf8");
  const line = raw.trim();
  // Gate: UTF-8 text, 1-200 chars, not only whitespace, single line.
  if (line.length < 1 || line.length > 200) {
    throw new Error("entry line must be 1-200 characters, got " + line.length);
  }
  if (line.includes("\n")) {
    throw new Error("entry must be a single line");
  }
  return line;
}

const line = loadAndValidateLine();
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
