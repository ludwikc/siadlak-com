import { describe, expect, it } from "vitest";
import { claimAutoReload, isChunkLoadError } from "./recovery";

const memoryStore = (initial: Record<string, string> = {}) => {
  const data = new Map(Object.entries(initial));
  return {
    getItem: (key: string) => data.get(key) ?? null,
    setItem: (key: string, value: string) => void data.set(key, value),
  };
};

describe("claimAutoReload", () => {
  it("grants the first claim and records it", () => {
    const store = memoryStore();
    expect(claimAutoReload(1_000_000, store)).toBe(true);
    expect(store.getItem("recovery:auto-reload-at")).toBe("1000000");
  });

  it("denies a second claim inside the window", () => {
    const store = memoryStore();
    claimAutoReload(1_000_000, store);
    expect(claimAutoReload(1_000_000 + 30_000, store)).toBe(false);
  });

  it("grants again once the window has elapsed", () => {
    const store = memoryStore();
    claimAutoReload(1_000_000, store);
    expect(claimAutoReload(1_000_000 + 61_000, store)).toBe(true);
  });

  it("recovers from a corrupt stored value by granting once", () => {
    const store = memoryStore({ "recovery:auto-reload-at": "garbage" });
    expect(claimAutoReload(1_000_000, store)).toBe(true);
    expect(store.getItem("recovery:auto-reload-at")).toBe("1000000");
  });

  it("denies when storage is unavailable, so a reload loop is impossible", () => {
    const broken = {
      getItem: () => {
        throw new Error("SecurityError");
      },
      setItem: () => {
        throw new Error("SecurityError");
      },
    };
    expect(claimAutoReload(1_000_000, broken)).toBe(false);
  });
});

describe("isChunkLoadError", () => {
  it.each([
    "Failed to fetch dynamically imported module: https://siadlak.com/assets/About-abc123.js",
    "error loading dynamically imported module",
    "Importing a module script failed.",
    "Unable to preload CSS for /assets/index-abc.css",
  ])("recognizes a stale-deploy load failure: %s", (message) => {
    expect(isChunkLoadError(new TypeError(message))).toBe(true);
  });

  it("ignores unrelated runtime errors", () => {
    expect(isChunkLoadError(new TypeError("Cannot read properties of undefined (reading 'activeLaw')"))).toBe(
      false,
    );
  });

  it("tolerates non-Error values", () => {
    expect(isChunkLoadError(undefined)).toBe(false);
    expect(isChunkLoadError("Importing a module script failed.")).toBe(true);
  });
});
