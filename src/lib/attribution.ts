/**
 * Campaign attribution capture + persistence.
 *
 * Instagram is the primary lead source and every paid click lands with UTM
 * params, but the money step (EasyCart checkout, MailerLite subscribe) happens
 * off the React app — so we capture attribution on entry, persist it, and
 * replay it onto outbound checkout URLs, MailerLite hidden fields, and every
 * analytics event.
 *
 * Two horizons are kept:
 *  - session (last-touch): the most recent campaign params this session. Needed
 *    because /ig and /links rewrite internal links with fresh UTMs mid-session.
 *  - first-touch: the very first campaign that brought the user, kept ~30 days.
 *
 * Values are persisted and forwarded, never rendered — rendering campaign text
 * is the whitelisted job of the DTR module (src/lib/dtr.ts).
 */
import { isBrowser } from "./env";

const PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

type Param = (typeof PARAMS)[number];

export type Attribution = Partial<Record<Param, string>> & {
  landing_page?: string;
  referrer?: string;
  captured_at?: string;
};

const SESSION_KEY = "attr:session:v1";
const FIRST_KEY = "attr:first:v1";
const FIRST_TTL_MS = 30 * 24 * 60 * 60 * 1000; // 30 days
const MAX_LEN = 200;

const safeGet = (store: Storage | undefined, key: string): string | null => {
  try {
    return store?.getItem(key) ?? null;
  } catch {
    return null;
  }
};

const safeSet = (store: Storage | undefined, key: string, value: string): void => {
  try {
    store?.setItem(key, value);
  } catch {
    /* private mode / quota — attribution is best-effort */
  }
};

const parse = (raw: string | null): Attribution => {
  if (!raw) return {};
  try {
    return JSON.parse(raw) as Attribution;
  } catch {
    return {};
  }
};

function readParams(search: string): Partial<Record<Param, string>> {
  const out: Partial<Record<Param, string>> = {};
  const sp = new URLSearchParams(search);
  for (const key of PARAMS) {
    const value = sp.get(key);
    if (value) out[key] = value.slice(0, MAX_LEN);
  }
  return out;
}

/**
 * Capture campaign params from a URL search string. A non-empty UTM/click-id
 * set overwrites the session record (last-touch) and seeds first-touch if none
 * exists or the stored one has expired.
 */
export function captureAttribution(search: string): void {
  if (!isBrowser) return;
  const params = readParams(search);
  if (Object.keys(params).length === 0) return;

  const now = new Date().toISOString();
  const enriched: Attribution = {
    ...params,
    landing_page: window.location.pathname.slice(0, MAX_LEN),
    referrer: document.referrer ? new URL(document.referrer).hostname : undefined,
    captured_at: now,
  };

  safeSet(sessionStorage, SESSION_KEY, JSON.stringify(enriched));

  const existingFirst = parse(safeGet(localStorage, FIRST_KEY));
  const firstAge = existingFirst.captured_at
    ? Date.now() - new Date(existingFirst.captured_at).getTime()
    : Infinity;
  if (!existingFirst.captured_at || firstAge > FIRST_TTL_MS) {
    safeSet(localStorage, FIRST_KEY, JSON.stringify(enriched));
  }
}

/**
 * Called once at app boot (before render) so the landing URL's params are
 * captured even for a session that never navigates.
 */
export function initAttribution(): void {
  if (!isBrowser) return;
  captureAttribution(window.location.search);
}

export function getAttribution(): { session: Attribution; first: Attribution } {
  return {
    session: parse(safeGet(sessionStorage, SESSION_KEY)),
    first: parse(safeGet(localStorage, FIRST_KEY)),
  };
}

/**
 * Flattened attribution for a dataLayer push: session params at top level,
 * first-touch prefixed `ft_`.
 */
export function getFlatAttribution(): Record<string, string> {
  const { session, first } = getAttribution();
  const flat: Record<string, string> = {};
  for (const [key, value] of Object.entries(session)) {
    if (value) flat[key] = value;
  }
  for (const [key, value] of Object.entries(first)) {
    if (value) flat[`ft_${key}`] = value;
  }
  return flat;
}

/**
 * Append session attribution params to an outbound URL (EasyCart checkout).
 * Never overwrites params already present on the URL (e.g. EasyCart's own
 * plan/lang query).
 */
export function withAttribution(url: string): string {
  const { session } = getAttribution();
  try {
    const u = new URL(url);
    for (const key of PARAMS) {
      const value = session[key];
      if (value && !u.searchParams.has(key)) u.searchParams.set(key, value);
    }
    return u.toString();
  } catch {
    return url;
  }
}

/**
 * MailerLite custom-field map (`fields[utm_source]`, …). The matching fields
 * must exist in the MailerLite account or they are dropped silently.
 */
export function getMailerLiteFields(): Record<string, string> {
  const { session } = getAttribution();
  const fields: Record<string, string> = {};
  for (const key of ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"] as const) {
    if (session[key]) fields[key] = session[key] as string;
  }
  if (session.landing_page) fields.landing_page = session.landing_page;
  return fields;
}
