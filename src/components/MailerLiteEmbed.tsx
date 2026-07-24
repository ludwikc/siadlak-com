import { useEffect, useMemo, useRef } from "react";
import { track } from "@/lib/analytics";
import { getMailerLiteFields } from "@/lib/attribution";

const ML_ACCOUNT = "484845";

export default function MailerLiteEmbed({
  dataForm,
  className,
  hiddenFields,
  source,
  onSuccess,
}: {
  dataForm: string;
  className?: string;
  /**
   * Dodatkowe pola przekazywane do MailerLite jako custom fields.
   * Klucz = klucz pola w MailerLite (np. "reset_score"), wartość = co zapisać.
   * Pola muszą istnieć w koncie MailerLite (Subscribers → Fields).
   */
  hiddenFields?: Record<string, string | number>;
  /** Etykieta źródła do analityki (np. "newsletter-page", "reset"). */
  source?: string;
  /** Wywoływane raz, gdy MailerLite pokaże ekran sukcesu (double opt-in wysłany). */
  onSuccess?: () => void;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const onSuccessRef = useRef(onSuccess);
  onSuccessRef.current = onSuccess;

  // Attribution (utm_*, landing_page) is injected automatically; explicit
  // hiddenFields win over it.
  const mergedFields = useMemo<Record<string, string | number>>(
    () => ({ ...getMailerLiteFields(), ...hiddenFields }),
    [hiddenFields],
  );

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
    if (Object.keys(mergedFields).length === 0) return;
    const container = containerRef.current;
    if (!container) return;

    const inject = (form: HTMLFormElement) => {
      Object.entries(mergedFields).forEach(([key, value]) => {
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
  }, [mergedFields]);

  // Wykryj ekran sukcesu MailerLite i zgłoś zdarzenie lead_submitted (raz).
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    let fired = false;

    const check = () => {
      if (fired) return;
      const success = container.querySelector<HTMLElement>(".ml-form-successBody");
      if (success && success.offsetParent !== null) {
        fired = true;
        try {
          localStorage.setItem("lead:submitted", new Date().toISOString());
        } catch {
          /* ignore */
        }
        track("lead_submitted", {
          form_id: dataForm,
          page_path: window.location.pathname,
          source,
        });
        onSuccessRef.current?.();
      }
    };

    check();
    const observer = new MutationObserver(check);
    observer.observe(container, { childList: true, subtree: true, attributes: true });
    return () => observer.disconnect();
  }, [dataForm, source]);

  // Ukryj wizualnie pola przekazywane jako hiddenFields — użytkownik ich nie
  // widzi, ale MailerLite je renderuje (są na formularzu) i wysyła przy zapisie.
  const hideStyles = Object.keys(mergedFields).length
    ? Object.keys(mergedFields)
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
