import { ML_ACCOUNT, ML_FORMS, type MLFormKey } from "@/config/mailerlite";

export type SubscribeResult = { ok: true } | { ok: false; error: string };

/**
 * Build the FormData payload MailerLite's classic subscribe endpoint expects.
 * Exported for unit testing (no network).
 */
export function buildSubscribePayload(
  fields: Record<string, string | number>,
): FormData {
  const body = new FormData();
  for (const [key, value] of Object.entries(fields)) {
    body.append(`fields[${key}]`, String(value));
  }
  body.append("ml-submit", "1");
  body.append("anticsrf", "true");
  return body;
}

export function subscribeEndpoint(subscribeId: string): string {
  return `https://assets.mailerlite.com/jsonp/${ML_ACCOUNT}/forms/${subscribeId}/subscribe`;
}

/**
 * Submit a subscriber to a MailerLite form from the browser. `fields` must
 * include `email`. Requires the form's numeric subscribeId to be configured
 * (see src/config/mailerlite.ts activation notes).
 */
export async function subscribeToForm(
  form: MLFormKey,
  fields: Record<string, string | number>,
): Promise<SubscribeResult> {
  const { subscribeId } = ML_FORMS[form];
  if (!subscribeId) {
    return { ok: false, error: "form_not_configured" };
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10_000);
  try {
    const res = await fetch(subscribeEndpoint(subscribeId), {
      method: "POST",
      body: buildSubscribePayload(fields),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, error: `http_${res.status}` };
    const data = (await res.json().catch(() => ({}))) as { success?: boolean };
    return data.success === false ? { ok: false, error: "rejected" } : { ok: true };
  } catch {
    return { ok: false, error: "network" };
  } finally {
    clearTimeout(timeout);
  }
}
