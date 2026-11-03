import { describe, expect, it } from "vitest";
import { courses } from "./courses";
import { copilotPathways } from "./pathways";

describe("Copilot learning pathways", () => {
  it("prioritizes existing Microsoft AI and Copilot courses", () => {
    expect(copilotPathways.map(({ courseSlug }) => courseSlug)).toEqual([
      "ab-731", "ms-4014", "copilot-studio-agents",
    ]);
    expect(copilotPathways.map(({ courseSlug }) => courses[courseSlug].track)).toEqual([
      "copilot", "copilot", "copilot",
    ]);
  });

  it("uses three real course outcomes for each pathway", () => {
    for (const pathway of copilotPathways) {
      expect(pathway.outcomeIndices).toHaveLength(3);
      for (const index of pathway.outcomeIndices) {
        expect(courses[pathway.courseSlug].outcomes.en[index]?.length).toBeGreaterThan(0);
      }
    }
  });
});