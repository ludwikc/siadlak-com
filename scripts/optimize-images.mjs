#!/usr/bin/env node
/**
 * Generates .webp and .avif siblings for every PNG/JPG/JPEG in:
 *   - public/lovable-uploads/
 *   - public/
 *   - src/assets/
 *
 * Safe to re-run: skips files that already have siblings.
 * Run after any Lovable session that adds new images.
 */

import sharp from "sharp";
import { readdir, stat } from "node:fs/promises";
import { join, extname, basename, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");

const SCAN_DIRS = [
  join(ROOT, "public", "lovable-uploads"),
  join(ROOT, "public"),
  join(ROOT, "src", "assets"),
];

const SOURCE_EXTS = new Set([".png", ".jpg", ".jpeg"]);

async function getFiles(dir) {
  let entries;
  try {
    entries = await readdir(dir, { withFileTypes: true });
  } catch {
    return [];
  }
  return entries
    .filter((e) => e.isFile() && SOURCE_EXTS.has(extname(e.name).toLowerCase()))
    .map((e) => join(dir, e.name));
}

async function siblingExists(filePath, newExt) {
  const sibling = filePath.replace(/\.[^.]+$/, newExt);
  try {
    await stat(sibling);
    return true;
  } catch {
    return false;
  }
}

async function processFile(filePath) {
  const name = basename(filePath);
  const webpPath = filePath.replace(/\.[^.]+$/, ".webp");
  const avifPath = filePath.replace(/\.[^.]+$/, ".avif");

  const needsWebp = !(await siblingExists(filePath, ".webp"));
  const needsAvif = !(await siblingExists(filePath, ".avif"));

  if (!needsWebp && !needsAvif) {
    console.log(`  skip  ${name} (siblings exist)`);
    return;
  }

  const image = sharp(filePath);

  if (needsWebp) {
    await image.clone().webp({ quality: 85 }).toFile(webpPath);
    console.log(`  webp  ${name}`);
  }

  if (needsAvif) {
    await image.clone().avif({ quality: 70 }).toFile(avifPath);
    console.log(`  avif  ${name}`);
  }
}

async function main() {
  console.log("Optimizing images...\n");
  let total = 0;

  for (const dir of SCAN_DIRS) {
    const files = await getFiles(dir);
    if (files.length === 0) continue;

    console.log(`${dir.replace(ROOT, ".")}`);
    for (const file of files) {
      await processFile(file);
      total++;
    }
    console.log();
  }

  console.log(`Done. Processed ${total} source files.`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
