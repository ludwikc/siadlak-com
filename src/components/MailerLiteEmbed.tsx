import { useEffect, useRef } from "react";

declare global {
  interface Window {
    ml?: ((...args: unknown[]) => void) & {
      q?: unknown[][];
      fn?: {
        jsonpRequest?: { make: (url: string, callback: string) => void };
        account_id?: string;
        [key: string]: unknown;
      };
    };
  }
}

const ML_ACCOUNT = "484845";

export default function MailerLiteEmbed({
  dataForm,
  className,
}: {
  dataForm: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      if (window.ml?.fn?.jsonpRequest) {
        window.ml.fn.jsonpRequest.make(
          `/jsonp/${ML_ACCOUNT}/forms/${dataForm}`,
          "renderEmbeddedForm",
        );
      }
    });
    return () => cancelAnimationFrame(raf);
  }, [dataForm]);

  return (
    <div
      ref={containerRef}
      className={`ml-embedded ${className ?? ""}`}
      data-form={dataForm}
    />
  );
}
