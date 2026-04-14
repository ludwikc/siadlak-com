import { useEffect, useRef } from "react";

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
      const ml = window.ml as unknown as {
        fn?: {
          jsonpRequest?: { make: (url: string, callback: string) => void };
          account_id?: string;
        };
      } | undefined;
      if (ml?.fn?.jsonpRequest) {
        ml.fn.jsonpRequest.make(
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
