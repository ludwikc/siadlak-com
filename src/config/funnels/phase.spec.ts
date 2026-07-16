import { describe, expect, it } from "vitest";
import {
  getFunnelPhase,
  getNextPhaseChange,
  getNextUpcomingFunnel,
  getPhaseBoundaries,
} from "./phase";
import type { FunnelConfig } from "./types";

const base: FunnelConfig = {
  slug: "test",
  name: "Test Webinar",
  eventStart: "2030-06-10T19:00:00+02:00",
  eventDurationMinutes: 90,
  format: "webinar",
  registration: { type: "easycart", checkoutUrl: "https://buy.example.com/x" },
  replay: { url: "https://replay.example.com", availableHours: 48 },
  oto: false,
  seo: { title: "t", description: "d", keywords: "k" },
};

const at = (iso: string) => new Date(iso);

describe("getFunnelPhase", () => {
  it("is upcoming before eventStart", () => {
    expect(getFunnelPhase(base, at("2030-06-10T16:59:59Z"))).toBe("upcoming");
  });

  it("is live exactly at eventStart", () => {
    expect(getFunnelPhase(base, at("2030-06-10T17:00:00Z"))).toBe("live");
  });

  it("is live one second before the event ends", () => {
    expect(getFunnelPhase(base, at("2030-06-10T18:29:59Z"))).toBe("live");
  });

  it("is replay when the event ends", () => {
    expect(getFunnelPhase(base, at("2030-06-10T18:30:00Z"))).toBe("replay");
  });

  it("is replay one second before the replay window closes", () => {
    expect(getFunnelPhase(base, at("2030-06-12T18:29:59Z"))).toBe("replay");
  });

  it("is expired when the replay window closes", () => {
    expect(getFunnelPhase(base, at("2030-06-12T18:30:00Z"))).toBe("expired");
  });

  it("goes straight to expired without a replay window", () => {
    const noReplay = { ...base, replay: undefined };
    expect(getFunnelPhase(noReplay, at("2030-06-10T18:30:00Z"))).toBe(
      "expired",
    );
  });

  it("respects the eventStart timezone offset", () => {
    const winter = { ...base, eventStart: "2030-02-02T20:05:00+01:00" };
    expect(getFunnelPhase(winter, at("2030-02-02T19:04:59Z"))).toBe("upcoming");
    expect(getFunnelPhase(winter, at("2030-02-02T19:05:00Z"))).toBe("live");
  });
});

describe("getPhaseBoundaries", () => {
  it("computes boundaries from duration and replay window", () => {
    expect(getPhaseBoundaries(base)).toEqual({
      liveAt: at("2030-06-10T17:00:00Z"),
      replayAt: at("2030-06-10T18:30:00Z"),
      expiredAt: at("2030-06-12T18:30:00Z"),
    });
  });
});

describe("getNextPhaseChange", () => {
  it("returns eventStart while upcoming", () => {
    expect(getNextPhaseChange(base, at("2030-06-01T00:00:00Z"))).toEqual(
      at("2030-06-10T17:00:00Z"),
    );
  });

  it("returns replay deadline while replay is running", () => {
    expect(getNextPhaseChange(base, at("2030-06-11T00:00:00Z"))).toEqual(
      at("2030-06-12T18:30:00Z"),
    );
  });

  it("returns null once expired", () => {
    expect(getNextPhaseChange(base, at("2030-07-01T00:00:00Z"))).toBeNull();
  });
});

describe("getNextUpcomingFunnel", () => {
  const past = { ...base, slug: "past", eventStart: "2020-01-01T19:00:00+01:00" };
  const near = { ...base, slug: "near", eventStart: "2030-06-01T19:00:00+02:00" };
  const far = { ...base, slug: "far", eventStart: "2030-08-01T19:00:00+02:00" };

  it("returns null for an empty registry", () => {
    expect(getNextUpcomingFunnel([], at("2030-01-01T00:00:00Z"))).toBeNull();
  });

  it("returns null when every funnel is expired", () => {
    expect(getNextUpcomingFunnel([past], at("2030-01-01T00:00:00Z"))).toBeNull();
  });

  it("returns the soonest upcoming funnel", () => {
    expect(
      getNextUpcomingFunnel([far, past, near], at("2030-01-01T00:00:00Z"))
        ?.slug,
    ).toBe("near");
  });

  it("still returns a funnel while it is live", () => {
    expect(
      getNextUpcomingFunnel([near], at("2030-06-01T17:30:00Z"))?.slug,
    ).toBe("near");
  });
});
