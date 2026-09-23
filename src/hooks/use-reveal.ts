import { useEffect, useRef } from "react";
import { isPrerender } from "@/lib/env";

type RevealOptions = { stagger?: number };

export function useReveal<T extends HTMLElement>({ stagger = 60 }: RevealOptions = {}) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    el.querySelectorAll<HTMLElement>("[data-reveal-child]").forEach((child, index) => {
      child.style.transitionDelay = `${index * stagger}ms`;
    });

    const show = () => el.classList.add("is-visible");

    if (typeof IntersectionObserver === "undefined" || isPrerender()) {
      show();
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        show();
        observer.unobserve(el);
      },
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [stagger]);

  return ref;
}
