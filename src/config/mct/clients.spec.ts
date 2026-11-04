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
    expect(brandLogos.length).toEqual(25);
    expect(brandLogos.map((l) => l.name)).toContain("Microsoft");
    expect(brandLogos.map((l) => l.name)).not.toContain("mBank");
    expect(textChips).toEqual([
      "NATO",
      "US Army Europe",
      "US Navy",
      "US Marines",
      "National Revenue Administration (KAS)",
      "ACTION Education Centre",
      "Postdata (Envelo)",
      "RINF TECH",
      "Military Institute of Medicine",
      "Warsaw City Guard",
      "mBank",
    ]);
  });
});
