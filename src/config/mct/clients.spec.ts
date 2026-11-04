import { describe, expect, it } from "vitest";
import { brandLogos, clientGroupLabels, clientWall, textChips } from "./clients";

describe("clients", () => {
  it("drops the ambiguous Department of Defense entry", () => {
    expect(Object.values(clientWall).flat().includes("Department of Defense")).toEqual(false);
  });

  it("labels every client group in both locales", () => {
    expect(Object.keys(clientGroupLabels)).toEqual(Object.keys(clientWall));
  });

  it("keeps the agreed logo set and text chips", () => {
    expect(brandLogos.length).toEqual(46);
    expect(brandLogos.map((l) => l.name)).toContain("Microsoft");
    expect(brandLogos.map((l) => l.name)).toContain("mBank");
    expect(textChips).toEqual([
      "ACTION Education Centre",
      "RINF TECH",
      "ITMAGINATION",
      "Combidata",
      "BRE Bank",
    ]);
  });
});
