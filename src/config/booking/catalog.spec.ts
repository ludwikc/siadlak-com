import { describe, expect, it } from "vitest";
import { trainingsIn } from "./catalog";

describe("trainingsIn", () => {
  it("lists certified Microsoft trainings sorted by official code", () => {
    expect(trainingsIn("certified").map((t) => t.code)).toEqual([
      "AB-731T00",
      "DP-080T00",
      "DP-300T00",
      "DP-600T00",
      "DP-605T00",
      "DP-700T00",
      "MS-4014",
    ]);
  });

  it("puts trainings without an official code under custom", () => {
    expect(trainingsIn("custom").map((t) => t.id)).toEqual([
      "build-agents-copilot-studio",
      "copilot-studio-agents",
      "tsql-performance",
    ]);
  });
});
