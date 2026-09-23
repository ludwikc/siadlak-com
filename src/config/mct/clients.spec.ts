import { describe, expect, it } from "vitest";
import { brandLogos, clientGroupLabels, clientWall, textChips } from "./clients";

describe("clients", () => {
  it("drops the ambiguous Department of Defense entry", () => {
    expect(Object.values(clientWall).flat().includes("Department of Defense")).toEqual(false);
  });

  it("labels every client group in both locales", () => {
    expect(Object.keys(clientGroupLabels)).toEqual(Object.keys(clientWall));
  });

  it("keeps seven logos and the agreed text chips", () => {
    expect([brandLogos.length, textChips]).toEqual([
      7,
      ["NATO", "US Army Europe", "US Navy", "US Marines", "Nordea", "ING"],
    ]);
  });
});
