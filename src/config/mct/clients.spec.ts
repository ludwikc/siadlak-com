import { describe, expect, it } from "vitest";
import { brandLogos, clientGroupLabels, clientWall, independentLogos, textChips, trustGroups } from "./clients";

describe("clients", () => {
  it("places national government institutions in their respective countries", () => {
    expect(trustGroups.find((group) => group.id === "poland")?.logos.map((logo) => logo.name)).toEqual(["ZUS", "NFZ", "NIK", "Police of Poland", "MSWiA", "Ministry of Finance", "Military Institute of Medicine", "Warsaw City Guard", "Customs Service", "National Revenue Administration (KAS)"]);
    expect(trustGroups.find((group) => group.id === "norway")?.logos.map((logo) => logo.name)).toEqual(["Police of Norway"]);
    expect(trustGroups.find((group) => group.id === "united-states")?.logos.map((logo) => logo.name)).toEqual(["US Army Africa", "US Army Europe", "US Navy", "US Marines", "US Department of Defense"]);
  });

  it("keeps NATO and the university independent and includes every logo exactly once", () => {
    expect(independentLogos.map((logo) => logo.name)).toEqual(["University of Gdansk", "NATO"]);
    const displayed = [...trustGroups.flatMap((group) => group.logos), ...independentLogos].map((logo) => logo.name);
    expect(displayed.sort()).toEqual(brandLogos.map((logo) => logo.name).sort());
    expect(new Set(displayed).size).toEqual(displayed.length);
  });
  it("drops the ambiguous Department of Defense entry", () => {
    expect(Object.values(clientWall).flat().includes("Department of Defense")).toEqual(false);
  });

  it("labels every client group in both locales", () => {
    expect(Object.keys(clientGroupLabels)).toEqual(Object.keys(clientWall));
  });

  it("keeps the agreed logo set and text chips", () => {
    expect(brandLogos.length).toEqual(47);
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
