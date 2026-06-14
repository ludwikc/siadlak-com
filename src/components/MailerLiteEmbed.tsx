import { useEffect, useRef } from "react";

const ML_ACCOUNT = "484845";

export default function MailerLiteEmbed({
  dataForm,
  className,
  hiddenFields,
}: {
  dataForm: string;
  className?: string;
  /**
   * Dodatkowe pola przekazywane do MailerLite jako custom fields.
   * Klucz = klucz pola w MailerLite (np. "reset_score"), wartość = co zapisać.
   * Pola muszą istnieć w koncie MailerLite (Subscribers → Fields).
   */
  hiddenFields?: Record<string, string | number>;
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

  // Wstrzyknij ukryte pola do <form>, gdy tylko MailerLite go wyrenderuje.
  useEffect(() => {
    if (!hiddenFields || Object.keys(hiddenFields).length === 0) return;
    const container = containerRef.current;
    if (!container) return;

    const inject = (form: HTMLFormElement) => {
      Object.entries(hiddenFields).forEach(([key, value]) => {
        const name = `fields[${key}]`;
        let input = form.querySelector<HTMLInputElement>(
          `input[name="${name}"]`,
        );
        if (!input) {
          input = document.createElement("input");
          input.type = "hidden";
          input.name = name;
          form.appendChild(input);
        }
        input.value = String(value);
      });
    };

    const existing = container.querySelector("form");
    if (existing) inject(existing);

    const observer = new MutationObserver(() => {
      const form = container.querySelector("form");
      if (form) inject(form);
    });
    observer.observe(container, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [hiddenFields]);

  // Ukryj wizualnie pola przekazywane jako hiddenFields — użytkownik ich nie
  // widzi, ale MailerLite je renderuje (są na formularzu) i wysyła przy zapisie.
  const hideStyles = hiddenFields
    ? Object.keys(hiddenFields)
        .map((key) => {
          const sel = `input[name="fields[${key}]"]`;
          return [
            `.ml-field-${key}`,
            `.ml-form-fieldRow:has(${sel})`,
            `.ml-field-group:has(${sel})`,
            `label:has(${sel})`,
            sel,
          ]
            .map((s) => `.ml-embedded ${s}`)
            .join(",");
        })
        .join(",")
    : "";

  return (
    <>
      {hideStyles && (
        <style>{`${hideStyles}{display:none!important}`}</style>
      )}
      <div
        ref={containerRef}
        className={`ml-embedded ${className ?? ""}`}
        data-form={dataForm}
      />
    </>
  );
}
