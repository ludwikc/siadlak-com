import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CTAButton } from "@/design-system/components/cta-button";

export default function DiscoveryStickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<Element | null>(null);
  const formRef = useRef<Element | null>(null);

  useEffect(() => {
    heroRef.current = document.querySelector("section");
    formRef.current = document.querySelector("#formularz");

    let heroVisible = true;
    let formVisible = false;

    const update = () => setVisible(!heroVisible && !formVisible);

    const observers: IntersectionObserver[] = [];
    if (heroRef.current) {
      const io = new IntersectionObserver(
        ([entry]) => {
          heroVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0 },
      );
      io.observe(heroRef.current);
      observers.push(io);
    }
    if (formRef.current) {
      const io = new IntersectionObserver(
        ([entry]) => {
          formVisible = entry.isIntersecting;
          update();
        },
        { threshold: 0.1 },
      );
      io.observe(formRef.current);
      observers.push(io);
    }

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const scrollToForm = () => {
    document
      .querySelector("#formularz")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const bar = (
    <div
      className={`md:hidden fixed inset-x-0 bottom-0 z-40 bg-void/95 backdrop-blur border-t border-white/10 transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      aria-hidden={!visible}
    >
      <div className="px-4 py-3">
        <CTAButton
          variant="primary"
          size="lg"
          onClick={scrollToForm}
          className="w-full"
          data-cta="discovery:sticky-mobile"
        >
          Sprawdź dostępność
        </CTAButton>
      </div>
    </div>
  );

  if (typeof document === "undefined") return null;
  return createPortal(bar, document.body);
}
