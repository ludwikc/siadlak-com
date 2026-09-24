import { existsSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { altFor, imageAlt } from "./image-alt";
import type { ImageAltKey } from "./image-alt";

const ROOT = join(__dirname, "..", "..");
const IMAGE_DIRS = ["public/lovable-uploads", "src/assets"];
const EXTENSIONS = [".png", ".webp", ".avif", ".jpg", ".jpeg"];

const keys = Object.keys(imageAlt) as ImageAltKey[];

describe("imageAlt", () => {
  it("has an image file for every key", () => {
    const missing = keys.filter(
      (key) => !IMAGE_DIRS.some((dir) => EXTENSIONS.some((ext) => existsSync(join(ROOT, dir, key + ext)))),
    );
    expect(missing).toEqual([]);
  });

  it("keeps every alt text non-empty and within 140 characters in both languages", () => {
    const tooLongOrEmpty = keys.flatMap((key) =>
      (["pl", "en"] as const)
        .filter((locale) => imageAlt[key][locale].length === 0 || imageAlt[key][locale].length > 140)
        .map((locale) => `${key}:${locale}`),
    );
    expect(tooLongOrEmpty).toEqual([]);
  });

  it("returns Polish by default and English on request", () => {
    expect([
      altFor("ludwikcsiadlak-selfie-plener-szalik-ios"),
      altFor("ludwikcsiadlak-selfie-plener-szalik-ios", "en"),
    ]).toEqual([
      "Selfie Ludwika C. Siadlaka w plenerze, w zimowej kurtce i szaliku",
      "Outdoor selfie of Ludwik C. Siadlak in a winter jacket and scarf",
    ]);
  });
});
