import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/design-system/components/input";
import { Label } from "@/design-system/components/label";
import { CTAButton } from "@/design-system/components/cta-button";
import { subscribeToForm } from "@/lib/mailerlite";
import { getMailerLiteFields } from "@/lib/attribution";
import { track } from "@/lib/analytics";
import type { MLFormKey } from "@/config/mailerlite";

const schema = z.object({
  email: z
    .string()
    .trim()
    .min(1, "Podaj adres email.")
    .email("Ten adres wygląda na niepełny — sprawdź literówkę."),
  name: z.string().trim().max(100).optional(),
  // Honeypot: real users leave it empty; bots fill it.
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

type LeadFormProps = {
  form: MLFormKey;
  source: string;
  withName?: boolean;
  extraFields?: Record<string, string | number>;
  ctaText?: string;
  successTitle?: string;
  successBody?: string;
  onSuccess?: () => void;
  dark?: boolean;
  className?: string;
};

/**
 * First-party lead capture (mobile-keyboard-correct, inline validation) posting
 * to the MailerLite subscribe endpoint. Requires the form's numeric subscribeId
 * (src/config/mailerlite.ts). Attribution fields are merged at submit time.
 */
export default function LeadForm({
  form,
  source,
  withName = false,
  extraFields,
  ctaText = "Zapisuję się",
  successTitle = "Sprawdź skrzynkę",
  successBody = "Wysłałem Ci maila z potwierdzeniem zapisu. Kliknij link — bez tego nic nie dostaniesz.",
  onSuccess,
  dark = false,
  className,
}: LeadFormProps) {
  const [done, setDone] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const labelClass = dark ? "text-on-dark-tertiary" : "";
  const errorClass = "mt-1 text-sm text-[hsl(var(--color-error))]";

  const onSubmit = async (values: FormValues) => {
    if (values.website) return; // honeypot tripped
    setSubmitError(null);
    const result = await subscribeToForm(form, {
      email: values.email,
      ...(withName && values.name ? { name: values.name } : {}),
      source,
      ...extraFields,
      ...getMailerLiteFields(),
    });
    if (result.ok) {
      try {
        localStorage.setItem("lead:submitted", new Date().toISOString());
      } catch {
        /* ignore */
      }
      track("lead_submitted", { form_id: form, page_path: window.location.pathname, source });
      setDone(true);
      onSuccess?.();
    } else {
      track("lead_submit_error", { form_id: form, page_path: window.location.pathname, source });
      setSubmitError(
        result.error === "form_not_configured"
          ? "Formularz jest chwilowo niedostępny. Spróbuj ponownie później."
          : "Nie udało się zapisać. Sprawdź połączenie i spróbuj ponownie.",
      );
    }
  };

  if (done) {
    return (
      <div className={className} aria-live="polite">
        <p className={`font-heading text-lg font-bold ${dark ? "text-locked-white" : ""}`}>
          {successTitle}
        </p>
        <p className={`mt-1 text-sm ${dark ? "text-on-dark-tertiary" : "text-on-light-dim"}`}>
          {successBody}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className} noValidate>
      <div
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}
      >
        <label>
          Website
          <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
        </label>
      </div>

      {withName && (
        <div className="mb-3">
          <Label htmlFor="lead-name" className={labelClass}>
            Imię
          </Label>
          <Input
            id="lead-name"
            type="text"
            autoComplete="given-name"
            enterKeyHint="next"
            className="text-base"
            {...register("name")}
          />
        </div>
      )}

      <div>
        <Label htmlFor="lead-email" className={labelClass}>
          Email
        </Label>
        <Input
          id="lead-email"
          type="email"
          inputMode="email"
          autoComplete="email"
          autoCapitalize="none"
          spellCheck={false}
          enterKeyHint="go"
          aria-invalid={errors.email ? "true" : undefined}
          className="text-base"
          {...register("email")}
        />
        {errors.email && (
          <p className={errorClass} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <CTAButton
        type="submit"
        variant="primary"
        size="lg"
        loading={isSubmitting}
        showArrow={false}
        className="mt-4 w-full"
        data-cta={`lead-form:${source}`}
      >
        {ctaText}
      </CTAButton>

      {submitError && (
        <p className={errorClass} role="alert">
          {submitError}
        </p>
      )}
    </form>
  );
}
