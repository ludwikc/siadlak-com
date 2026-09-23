import { useCallback } from "react";
import { useMct } from "./MctContext";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

export function useSelectPath() {
  const { setPrefill } = useMct();

  return useCallback(
    (placement: string) => {
      setPrefill({ tier: "public", intent: "seat" }, placement, { scroll: false });
      if (typeof document === "undefined") return;
      document
        .getElementById("pricing")
        ?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth" });
    },
    [setPrefill],
  );
}
