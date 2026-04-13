import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
    mlDataset?: unknown;
    MailerLite?: unknown;
    MailerLiteObject?: unknown;
  }
}

export default function MailerLiteEmbed({
  dataForm,
  className,
}: {
  dataForm: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const scriptRef = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      document
        .querySelectorAll('script[src*="mailerlite.com/js/universal"]')
        .forEach((el) => el.remove());

      delete window.ml;
      delete window.mlDataset;
      delete window.MailerLite;
      delete window.MailerLiteObject;

      const script = document.createElement("script");
      script.src =
        "https://assets.mailerlite.com/js/universal.js?" + Date.now();
      script.async = true;
      script.onload = () => {
        if (typeof window.ml === "function") {
          window.ml("account", "484845");
        }
      };
      document.head.appendChild(script);
      scriptRef.current = script;
    });

    return () => {
      cancelAnimationFrame(raf);
      if (scriptRef.current) {
        scriptRef.current.remove();
        scriptRef.current = null;
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`ml-embedded ${className ?? ""}`}
      data-form={dataForm}
    />
  );
}
