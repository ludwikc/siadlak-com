export const ML_ACCOUNT = "484845";

/**
 * MailerLite form mapping for the first-party LeadForm.
 *
 * `code` is the embed code used by the classic embed (renders via
 * /jsonp/{account}/forms/{code}). `subscribeId` is the NUMERIC form id used by
 * the subscribe endpoint (/jsonp/{account}/forms/{subscribeId}/subscribe) — it
 * is different from the code and must be filled in before LeadForm goes live.
 *
 * ACTIVATION (Step 0): get each numeric id from the MailerLite dashboard
 * (Forms → the form → the embed/HTML export shows the form action URL, whose
 * path ends in the numeric id), or via the MailerLite API list_forms. Until
 * these are set, keep using <MailerLiteEmbed> (which is fully instrumented) and
 * do not swap call sites to <LeadForm>.
 */
export const ML_FORMS = {
  newsletter: { code: "lFFyEs", subscribeId: "" },
  leadMagnet: { code: "9Ffuno", subscribeId: "" },
} as const;

export type MLFormKey = keyof typeof ML_FORMS;

export const isFormActivated = (form: MLFormKey): boolean =>
  ML_FORMS[form].subscribeId.length > 0;
