import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

// "uczciwy social proof" (.agents/product-marketing-context.md): only the
// numbers in proof.ts are allowed. These retired/never-canonical figures must
// not reappear anywhere in the source.
const BANNED = [
  "1240+",
  "1 240+",
  "118+",
  "130+",
  "103+",
  "(120+)",
  "(100+)",
  "500+ kapitanów",
  "150+ Aktywnych",
];

function walk(dir: string): string[] {
  return readdirSync(dir).flatMap((entry) => {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) return walk(full);
    if (/\.(ts|tsx)$/.test(entry) && !entry.endsWith(".spec.ts")) return [full];
    return [];
  });
}

describe("uczciwy social proof — banned numbers", () => {
  const files = walk(join(process.cwd(), "src"));

  for (const banned of BANNED) {
    it(`no source file contains "${banned}"`, () => {
      const offenders = files.filter((f) => readFileSync(f, "utf8").includes(banned));
      expect(offenders).toEqual([]);
    });
  }
});
