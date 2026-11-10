import { describe, expect, it } from "vitest";
import { findTraining, matchesQuery, trainingLabel, trainingsIn } from "./catalog";

describe("trainingsIn", () => {
  it("groups certified Business Intelligence trainings sorted by code", () => {
    expect(trainingsIn("certified", "bi").map((t) => t.shortName)).toEqual([
      "DP-080",
      "DP-300",
      "DP-600",
      "DP-605",
      "DP-700",
    ]);
  });

  it("groups certified Artificial Intelligence trainings sorted by code", () => {
    expect(trainingsIn("certified", "ai").map((t) => t.shortName)).toEqual(["AB-731", "MS-4014"]);
  });

  it("puts trainings without an official code under custom", () => {
    expect(trainingsIn("custom").map((t) => t.id)).toEqual([
      "build-agents-copilot-studio",
      "copilot-studio-agents",
      "tsql-performance",
    ]);
  });
});

describe("trainingLabel", () => {
  it("uses the code without the T00 suffix", () => {
    expect(trainingLabel(trainingsIn("certified", "bi")[2], "en")).toEqual(
      "DP-600: Implement analytics solutions using Microsoft Fabric",
    );
  });
});

describe("matchesQuery", () => {
  const dp600 = findTraining("dp-600")!;

  it("matches by code or title, ignoring case and surrounding spaces", () => {
    expect(matchesQuery(dp600, "en", " dp-6 ")).toBe(true);
    expect(matchesQuery(dp600, "en", "FABRIC")).toBe(true);
    expect(matchesQuery(dp600, "pl", "analityczne")).toBe(true);
  });

  it("rejects unrelated queries", () => {
    expect(matchesQuery(dp600, "en", "copilot")).toBe(false);
  });
});
