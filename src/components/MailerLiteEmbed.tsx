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
    const timer = setTimeout(() => {
      // 1. Remove all existing MailerLite scripts
      document
        .querySelectorAll('script[src*="mailerlite.com/js/universal"]')
        .forEach((el) => el.remove());

      // 2. Destroy cached MailerLite globals so it re-initializes fully
      delete window.ml;
      delete window.mlDataset;
      delete window.MailerLite;
      delete window.MailerLiteObject;

      // 3. Inject a fresh script
      const script = document.createElement("script");
      script.src = "https://assets.mailerlite.com/js/universal.js";
      script.async = true;
      script.onload = () => {
        if (typeof window.ml === "function") {
          window.ml("account", "484845");
        }
      };
      document.head.appendChild(script);
      scriptRef.current = script;
    }, 150);

    return () => {
      clearTimeout(timer);
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
