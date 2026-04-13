import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ml?: (...args: unknown[]) => void;
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
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    const tryInit = () => {
      if (typeof window.ml === "function") {
        // MailerLite is loaded — re-run account init to force DOM re-scan
        window.ml("account", "484845");
      } else {
        // Script not yet loaded — bootstrap it
        const script = document.createElement("script");
        script.src = "https://assets.mailerlite.com/js/universal.js";
        script.async = true;
        script.onload = () => {
          if (typeof window.ml === "function") {
            window.ml("account", "484845");
          }
        };
        document.head.appendChild(script);
      }
    };

    // Small delay to ensure the placeholder div is in the DOM
    const timer = setTimeout(tryInit, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`ml-embedded ${className ?? ""}`}
      data-form={dataForm}
    />
  );
}
