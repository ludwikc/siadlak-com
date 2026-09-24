# MCT B2B mini-site — execution plan

Spec: `/Users/ludwikc/.claude/plans/https-siadlak-com-mct-visit-this-curious-feather.md` (approved 2026-09-23). This file is the plan argued from it, structured per task for subagent dispatch.

Two repos:
- **SITE** = `/Users/ludwikc/git/siadlakcom/siadlak-com` (branch `feat/mct-minisite`, base `9b4fab3`). Vite + React 18 + TS, React Router, Tailwind, shadcn, react-helmet-async, vitest 4 (`npm test` = `vitest run`, specs colocated `*.spec.ts`), Vercel functions in `api/*.ts`, prerender via `scripts/prerender.mjs` consuming `src/routes.mjs`.
- **PORTAL** = `/Users/ludwikc/git/siadlak-portal` (branch `feat/crm-lead-intake`, base `f4ee3a9`). Supabase edge functions (Deno) in `supabase/functions/`, SQL migrations in `supabase/migrations/`.

## Global constraints (bind every task)

- Only canonical proof numbers from `src/config/proof.ts`: `yearsMct "19"`, `trainedProfessionals "10 000+"`, `countries "8+"`. Never "20+ years", never "10,000+ certifications", never "engineers trained", never "30+ courses", never "classified". `src/config/proof.spec.ts` scans `src/**/*.ts(x)` for banned strings.
- No dates hardcoded in JSX. Dates live only in `src/config/mct/schedule.ts`.
- No raw hex/hsl/rgb colors in `src/components/mct/**` or `src/pages/mct/**`. Use Tailwind token aliases (`bg-mct-navy`, `text-on-dark`, `text-dim`, `text-on-dark-tertiary`, `text-electric`, `border-white/10`, `bg-background text-foreground` for light panels). New tokens go in `src/design-system/tokens.css` + `src/design-system/tailwind-preset.ts`.
- Buttons = `CTAButton` from `src/design-system/components/cta-button.tsx` (`variant primary|secondary|tertiary`, `to`/`href`, `showArrow`, `data-cta="{surface}:{position}"`). No styled `<a>`/`<Link>` as button. No `→` in button text. No emoji icons (lucide-react in `text-electric`).
- Hero markup only via `src/components/sections/Hero.tsx` (`align`, `heroImage`, `children`).
- `import type` for type-only imports. Default to `type` over `interface`. No comments except critical caveats.
- Tests: colocated `*.spec.ts`, pure logic only (no DOM), strong assertions, test whole structure in one `toEqual` where possible.
- Commits: Conventional Commits, no Claude/Anthropic mention. One commit per task minimum; commit only files you changed (working tree has unrelated pre-existing deletions under `public/lovable-uploads/` and an untracked `src/assets/lifehackerzy-logo copy.png` — never stage them).
- Prices (net): public seat €590 / 2 490 zł per day; 2-day €1 090 / 4 490 zł; discount 10% from 3 seats; max 8 seats. Briefing €1 900 / 7 900 zł flat. EN pages show EUR, PL pages show PLN.
- Locale paths: EN hub `/mct`, courses `/mct/courses/:slug`, briefing `/mct/executive-briefing`, enterprise `/mct/enterprise`. PL hub `/szkolenia`, courses `/szkolenia/kursy/:slug`, briefing `/szkolenia/briefing-dla-zarzadu`, enterprise `/szkolenia/enterprise`.
- Course slugs (10, identical both locales): `ab-731`, `ms-4014`, `pl-7008`, `copilot-studio-agents`, `dp-600`, `dp-605`, `dp-700`, `dp-300`, `dp-080`, `tsql-performance`.
- Voice: direct, no hype, engineer-to-executive, short sentences. PL copy in Ludwik's voice (natural Polish, not literal translation; "Ty" form).

---

## Task 1: PORTAL — migration, config, shared Discord helper

Repo: PORTAL. Files: `supabase/migrations/20260923100000_crm_lead_intake.sql` (new), `supabase/config.toml` (edit), `supabase/functions/_shared/discord.ts` (new), `supabase/functions/crm-digest/index.ts` (edit: import helper, delete local copy).

1. Migration (idempotent style matching `supabase/migrations/20260808110000_crm_events_foundation.sql`):
   - Drop and re-add the CHECK on `public.crm_events.type` so the allowed set becomes the existing seven plus `'lead_received'`. Read the existing constraint name from that migration (`crm_events_type_check` if unnamed default); use `ALTER TABLE ... DROP CONSTRAINT IF EXISTS ...; ALTER TABLE ... ADD CONSTRAINT ... CHECK (type IN (...))`.
   - Same for `public.crm_events.source`: existing four plus `'website'`.
   - `ALTER TABLE public.crm_contacts ADD COLUMN IF NOT EXISTS phone text, ADD COLUMN IF NOT EXISTS company text;`
   - Regenerate/extend `src/integrations/supabase/types.ts` for `crm_contacts` (add `phone`, `company` nullable strings in Row/Insert/Update) — hand-edit if no generator is wired; keep formatting.
2. `supabase/config.toml`: append
   ```toml
   [functions.crm-lead]
   verify_jwt = false
   ```
3. `_shared/discord.ts`: move `sendDiscordDm(content: string): Promise<void>` and `DISCORD_API` constant out of `crm-digest/index.ts` verbatim (imports `adminClient` from `./supabaseClient.ts`). `crm-digest/index.ts` imports it from `../_shared/discord.ts`; behaviour unchanged.
4. No tests exist for edge functions in this repo; verify with `deno check supabase/functions/crm-digest/index.ts` if deno is available, else `npx tsc --noEmit -p tsconfig.app.json` for the types file edit. Report which ran.

Commit: `feat(crm): allow website lead events and share Discord DM helper`.

## Task 2: PORTAL — `crm-lead` edge function + timeline UI

Repo: PORTAL. Files: `supabase/functions/crm-lead/index.ts` (new), `src/components/admin/crm/ContactTimeline.tsx` (edit).

Copy the structure of `supabase/functions/crm-booking/index.ts` (CORS helpers, typeof guards, contact upsert, dedupe via `crm_events` upsert with `onConflict: 'dedupe_key', ignoreDuplicates: true`, deal insert, try/catch → JSON errors).

- Auth: `req.headers.get('x-lead-secret') === Deno.env.get('CRM_LEAD_SECRET')` (401 otherwise). POST only (405).
- Payload type:
  ```ts
  type LeadPayload = {
    submissionId: string        // uuid from siadlak.com; dedupe_key = `lead:${submissionId}`
    email: string; name: string; company?: string; phone?: string
    tier: 'public' | 'briefing' | 'enterprise'
    intent: 'seat' | 'waitlist' | 'briefing' | 'scope-call'
    courseSlug?: string; sessionId?: string; seats?: number
    language: 'en' | 'pl'; locale: 'en' | 'pl'
    message?: string; pagePath?: string
    quoteCents?: number; currency?: 'eur' | 'pln'
    utm?: Record<string, string>
  }
  ```
  Validate: `submissionId` non-empty string ≤80; `email` string containing `@` (normalize `trim().toLowerCase()`); `tier` and `intent` in enum; `seats` integer 1..8 if present; else 400 `invalid payload`.
- Contact: select by email; insert `{email, name, phone, company, updated_at}` if missing; if exists, backfill only empty `name`/`phone`/`company`.
- Event: upsert `crm_events` `{contact_id, type:'lead_received', title: 'Lead MCT — ' + tier, source:'website', payload: <whole payload minus email/name>, occurred_at: now, dedupe_key}`. If zero rows returned → respond `{contactId, deduped:true}`.
- Deal: insert `crm_deals` `{contact_id, product:'mct', stage:'lead', title: 'MCT — ${tier} — ${company ?? email}', currency: payload.currency ?? (locale==='pl'?'pln':'eur'), value_cents: quoteCents ?? 0, next_action:'Odpisać', next_action_date: <tomorrow YYYY-MM-DD>, updated_at}`; then set `deal_id` on the event row by `dedupe_key`.
- Discord DM (best-effort, wrapped in try/catch, never fails the request): import `sendDiscordDm` from `../_shared/discord.ts`; message:
  ```
  🟢 Nowy lead MCT (${tier}/${intent}) — ${company ?? '—'}
  ${name} <${email}>${phone ? ' · ' + phone : ''}
  ${courseSlug ?? '—'} · ${sessionId ?? 'brak terminu'} · ${seats ?? '—'} miejsc · ${language.toUpperCase()}
  ${message ? '„' + message.slice(0, 300) + '”' : ''}
  https://portal.siadlak.com/admin/crm/contacts/${contactId}
  ```
  (Verify the admin contact route path in `src/App.tsx` of PORTAL and use the real one.)
- Response: `{ contactId, dealId, created: true }`.
- `ContactTimeline.tsx`: add `case "lead_received"` in both switch statements (icon + label) mirroring `booking_received`. Label PL: "Lead ze strony (MCT)". Render from `payload`: tier, courseSlug, seats, language when present.

Verify: `deno check supabase/functions/crm-lead/index.ts` if available; `npm run build` or `npx tsc --noEmit -p tsconfig.app.json` for the React edit. Report which ran.

Commit: `feat(crm): add crm-lead intake function with Discord alert`.

---

## Task 3: SITE — slugs, routes plumbing, types, locale helpers

Repo: SITE. Files: `src/config/mct/slugs.mjs`, `src/config/mct/slugs.d.mts`, `src/routes.mjs` (edit), `src/config/mct/types.ts`, `src/config/mct/locale.ts`, `src/config/mct/locale.spec.ts`.

`slugs.mjs` (plain ESM, no TS):
```js
export const COURSE_SLUGS = ["ab-731","ms-4014","pl-7008","copilot-studio-agents","dp-600","dp-605","dp-700","dp-300","dp-080","tsql-performance"];
export const MCT_PATHS = {
  en: { hub: "/mct", courses: "/mct/courses", briefing: "/mct/executive-briefing", enterprise: "/mct/enterprise" },
  pl: { hub: "/szkolenia", courses: "/szkolenia/kursy", briefing: "/szkolenia/briefing-dla-zarzadu", enterprise: "/szkolenia/enterprise" },
};
export const mctRoutes = () =>
  Object.values(MCT_PATHS).flatMap((p) => [p.hub, p.briefing, p.enterprise, ...COURSE_SLUGS.map((s) => `${p.courses}/${s}`)]);
```
`slugs.d.mts`: declare `COURSE_SLUGS` as `readonly ["ab-731", ...]` tuple (all 10 literal), `MCT_PATHS` typed `Record<"en"|"pl", {hub:string;courses:string;briefing:string;enterprise:string}>`, `mctRoutes(): string[]`.

`src/routes.mjs`: `import { mctRoutes } from "./config/mct/slugs.mjs";` and replace the `"/mct",` entry with `...mctRoutes(),`. Keep the header comment.

`types.ts`:
```ts
import type { COURSE_SLUGS } from "./slugs.mjs";
export type Locale = "en" | "pl";
export type Localized<T = string> = Record<Locale, T>;
export type Currency = "EUR" | "PLN";
export type TierId = "public" | "briefing" | "enterprise";
export type LeadIntent = "seat" | "waitlist" | "briefing" | "scope-call";
export type Track = "copilot" | "fabric" | "sql";
export type CourseSlug = (typeof COURSE_SLUGS)[number];
export type CourseLevel = "beginner" | "intermediate" | "advanced";
export type AgendaDay = { title: Localized; modules: Localized<string[]>; addOn: Localized };
export type Course = {
  slug: CourseSlug; track: Track; codes: string[]; official: boolean; condensed: boolean;
  days: 1 | 2; level: CourseLevel;
  title: Localized; tagline: Localized; summary: Localized;
  audience: Localized<string[]>; notFor: Localized;
  outcomes: Localized<string[]>; agenda: AgendaDay[]; prerequisites: Localized<string[]>;
  tags: string[]; msLearnUrl?: string; examCode?: string;
};
export type SessionStatus = "open" | "filling" | "full" | "confirmed" | "cancelled";
export type ScheduledSession = {
  id: string; courseSlug: CourseSlug; startsAt: string; days: 1 | 2;
  language: Locale; seatsTotal: number; seatsLeft?: number; status: SessionStatus;
};
export type PricingConfig = {
  publicSeat: { perDay: Record<Currency, number>; twoDay: Record<Currency, number>; maxSeats: number; multiSeatDiscount: { fromSeats: number; percent: number } };
  briefing: { flat: Record<Currency, number>; durationHours: number; maxLeaders: number };
  currencyByLocale: Record<Locale, Currency>;
};
export type FaqItem = { id: string; question: Localized; answer: Localized; scope: Array<"hub" | "course" | "briefing" | "enterprise"> };
export type Testimonial = { quote: string; detail?: string; author: string; tags: Array<"military" | "enterprise" | "data" | "modernwork">; featured?: boolean };
```

`locale.ts`: `LOCALES: readonly Locale[]`, `otherLocale(l)`, `hubPath(l)`, `coursePath(l, slug)`, `briefingPath(l)`, `enterprisePath(l)`, `altPath(locale, pathname): string` (maps any MCT path to its counterpart in the other locale; hub↔hub, course↔course same slug, briefing↔briefing, enterprise↔enterprise; unknown → other hub), `hreflangAlternates(locale, pathname): {hrefLang: "en"|"pl"|"x-default"; href: string}[]` (absolute URLs with `https://siadlak.com`, x-default = EN URL), `ogLocale(l)` → `"en_US" | "pl_PL"`, `htmlLang(l)` → `"en" | "pl"`.

`locale.spec.ts`: altPath round-trips for all 4 page types both directions in one `toEqual` table; hreflang for `/szkolenia/kursy/dp-600` equals `[{en,/mct/courses/dp-600},{pl,/szkolenia/kursy/dp-600},{x-default,/mct/courses/dp-600}]` (absolute).

Verify: `npm test -- src/config/mct`, `node -e "import('./src/routes.mjs').then(m=>console.log(m.staticRoutes.filter(r=>/mct|szkolenia/.test(r)).length))"` prints 26, `npx tsc --noEmit -p tsconfig.app.json`.

Commit: `feat(mct): add bilingual route slugs, types and locale helpers`.

## Task 4: SITE — pricing + schedule data and utils

Repo: SITE. Files: `src/config/mct/pricing.ts`, `pricing-utils.ts`, `pricing-utils.spec.ts`, `schedule.ts`, `schedule-utils.ts`, `schedule-utils.spec.ts`.

`pricing.ts`:
```ts
export const pricing: PricingConfig = {
  publicSeat: { perDay: { EUR: 590, PLN: 2490 }, twoDay: { EUR: 1090, PLN: 4490 }, maxSeats: 8, multiSeatDiscount: { fromSeats: 3, percent: 10 } },
  briefing: { flat: { EUR: 1900, PLN: 7900 }, durationHours: 3, maxLeaders: 10 },
  currencyByLocale: { en: "EUR", pl: "PLN" },
};
```
`pricing-utils.ts`: `seatPrice(days: 1|2, currency)`; `quoteSeats(seats, days, currency) → { seats, unit, subtotal, discountPercent, discount, total }` (throws `RangeError` if seats < 1 or > maxSeats; discount = round(subtotal × 10%) when seats ≥ 3); `formatPrice(amount, currency, locale)` using `Intl.NumberFormat` (`en-IE` for EUR → `€590`, `pl-PL` for PLN → `2 490 zł` with NBSP U+00A0 and no decimals; strip `,00`); `quoteToCents(total) = total*100`.

`pricing-utils.spec.ts`: single `toEqual` tables — 1 seat 1 day EUR/PLN, 2-day EUR/PLN, 2 seats no discount, 3 seats 1 day EUR → `{subtotal:1770, discountPercent:10, discount:177, total:1593}`, 9 seats throws, 0 throws; `formatPrice(2490,"PLN","pl")` === `"2 490 zł"` (assert exact string Intl produces on Node 20 — adjust to actual after running once, but must contain NBSP and no decimals), `formatPrice(590,"EUR","en")` === `"€590"`.

`schedule.ts`: `export const sessions: ScheduledSession[] = []` with a comment block (allowed: critical caveat) showing the shape of one entry, e.g. `{ id: "dp-600-2026-11-16-en", courseSlug: "dp-600", startsAt: "2026-11-16T09:00:00+01:00", days: 2, language: "en", seatsTotal: 8, status: "open" }`. Ship EMPTY — owner adds real dates.

`schedule-utils.ts`: `sessionEndsAt(s)` = startsAt + (days-1) days at 17:00 Europe/Warsaw (approximate with +days*24h-16h acceptable, document); `getUpcomingSessions(sessions, now: Date)` → status !== "cancelled" && startsAt > now, sorted ascending; `getSessionsForCourse(sessions, slug, now)`; `nextSession(sessions, now)`; `formatSessionDate(s, locale)` → `Intl.DateTimeFormat(locale==="pl"?"pl-PL":"en-GB", {weekday:"long", day:"numeric", month:"long", year:"numeric", timeZone:"Europe/Warsaw"})`; `formatSessionRange(s, locale)` → for 2-day "16–17 November 2026" / "16–17 listopada 2026" (same month) else two full dates joined with " – "; `sessionHoursLabel` = `"09:00–17:00 CET/CEST"`.

`schedule-utils.spec.ts`: fixture of 4 sessions (past, future open, future cancelled, future other course); `getUpcomingSessions` returns exactly the two future non-cancelled sorted; course filter; `formatSessionDate` PL === `"poniedziałek, 16 listopada 2026"`, EN === `"Monday 16 November 2026"` (check actual en-GB output; assert exact); 2-day range strings.

Verify: `npm test -- src/config/mct`, tsc.

Commit: `feat(mct): add pricing and schedule config with pure utils`.

## Task 5: SITE — courses, FAQ, policies data + parity spec

Repo: SITE. Files: `src/config/mct/courses.ts`, `faq.ts`, `policies.ts`, `slugs.spec.ts`. Content-heavy. PL fields = natural Polish in Ludwik's voice.

`courses.ts`: `export const courses: Record<CourseSlug, Course>` + `export const courseList = COURSE_SLUGS.map(s => courses[s])` + `export const tracks: Record<Track, {title: Localized; blurb: Localized}>`:
- copilot: EN "Copilot & AI" / PL "Copilot i AI"; fabric: "Microsoft Fabric"; sql: EN "SQL & Azure SQL" / PL "SQL i Azure SQL".

Course facts (official Learn, Sept 2026). `official: true` unless custom. `condensed: true` marks 4-day official courses delivered in 2 days — title must carry "Essentials" and summary must state "condensed from the official 4-day outline".

| slug | codes | days | level | official | condensed | EN title | PL title |
|---|---|---|---|---|---|---|---|
| ab-731 | AB-731T00 | 1 | beginner | ✓ | – | Drive AI transformation in your organization | Transformacja AI w organizacji |
| ms-4014 | MS-4014 | 1 | beginner | ✓ | – | Introduction to building AI agents | Wprowadzenie do budowy agentów AI |
| pl-7008 | PL-7008 | 1 | intermediate | ✓ | – | Create agents in Microsoft Copilot Studio | Agenci w Microsoft Copilot Studio |
| copilot-studio-agents | (custom) | 2 | intermediate | – | – | Copilot Studio agents for your data | Agenci Copilot Studio na Twoich danych |
| dp-600 | DP-600T00 | 2 | advanced | ✓ | ✓ | DP-600 Essentials: Implement analytics solutions using Microsoft Fabric | DP-600 Essentials: rozwiązania analityczne w Microsoft Fabric |
| dp-605 | DP-605T00 | 1 | beginner | ✓ | – | Prepare and visualize data with Microsoft Power BI | Przygotowanie i wizualizacja danych w Power BI |
| dp-700 | DP-700T00 | 2 | intermediate | ✓ | ✓ | DP-700 Essentials: Implement data engineering solutions using Microsoft Fabric | DP-700 Essentials: inżynieria danych w Microsoft Fabric |
| dp-300 | DP-300T00 | 2 | intermediate | ✓ | ✓ | DP-300 Essentials: Implement scalable database solutions using Azure SQL | DP-300 Essentials: bazy danych w Azure SQL |
| dp-080 | DP-080T00 | 2 | beginner | ✓ | – | Query and modify data with Transact-SQL | Zapytania i modyfikacja danych w Transact-SQL |
| tsql-performance | (custom) | 2 | advanced | – | – | T-SQL performance for developers | Wydajność T-SQL dla programistów |

`examCode`: dp-600 "DP-600", dp-700 "DP-700", dp-300 "DP-300", ab-731 "AB-731" (AI Transformation Leader); others none. `msLearnUrl`: `https://learn.microsoft.com/training/courses/<code-lowercase>` for official ones.

Agendas (EN; write PL equivalents). Each day: `title`, `modules` (3–6 bullets), `addOn` ("Ludwik's add-on" — battle-tested part):
- **ab-731** D1: business value of generative AI; identifying high-impact use cases; Copilot / Copilot Studio / Foundry positioned honestly; responsible AI and governance posture; aligning investment to business goals; adoption and scaling plan. Add-on: "Your three use cases scored on a value/risk grid; leave with a one-page plan."
- **ms-4014** D1: what an AI agent is and is not; choosing tools on Microsoft's agent platform (Copilot Studio, Microsoft Foundry, M365 Agents Toolkit); planning an agent (outcomes, data sources, channels, identity, governance). Add-on: "Build one working Copilot Studio agent grounded on your SharePoint site before 17:00."
- **pl-7008** D1: topics, entities, variables; generative answers on your knowledge; actions and connectors; publishing to Teams / M365 Copilot; analytics. Add-on: "Governance checklist: DLP, environments, who can publish what."
- **copilot-studio-agents** D1 = PL-7008 content; D2: connectors to your systems, API actions, testing, security review, handover runbook. Add-on D2: "Your agent, your data, reviewed by someone who has to defend it in a security review."
- **dp-600 (Essentials)** D1: Fabric end-to-end and OneLake shortcuts; lakehouse vs warehouse vs eventhouse; dimensional modelling and SCDs; Dataflows Gen2, notebooks (PySpark / Spark SQL), T-SQL transforms. D2: semantic models and DAX at scale (storage modes, star schema); performance (Performance Analyzer, aggregations); RLS/OLS; lifecycle (Git, XMLA, deployment pipelines); workspace/item/OneLake security; preparing models for Copilot. Add-on D2: "Your gold layer on the whiteboard."
- **dp-605** D1: get data; clean, transform, load; configure a semantic model; design reports; Copilot in Power BI; Fabric context. Add-on: "One of your own datasets, cleaned live."
- **dp-700 (Essentials)** D1: ingest with Dataflows Gen2, pipelines, Spark; lakehouse Delta tables and medallion architecture; notebooks. D2: warehouse loading patterns and T-SQL; Real-Time Intelligence (Eventstream, KQL, Activator); CI/CD (Git, deployment pipelines); monitoring hub; OneLake security. Add-on D2: "Failure-mode lab: what breaks at 3 a.m. and who gets paged."
- **dp-300 (Essentials)** D1: plan and deploy Azure SQL (DB, Managed Instance, SQL on VM, migration); secure the environment (auth, TDE, Always Encrypted, DDM, RLS, auditing). D2: monitor and optimise (Query Store, indexes, statistics, IQP); automate tasks; HA/DR (availability groups, failover groups, backup/restore). Add-on D2: "Live tuning of a query the group brings."
- **dp-080** D1: T-SQL basics; SELECT, sort, filter; JOINs. D2: subqueries; built-in functions and GROUP BY; INSERT/UPDATE/DELETE/MERGE. Add-on D2: "The ten queries you will actually write next week."
- **tsql-performance** D1: execution plans; indexing strategy; sargability; statistics. D2: set-based rewrites; Query Store; common anti-patterns; performance review of the group's own queries. Add-on D2: "Bring your slowest query; we fix it in class."

Per course also fill `tagline` (one line), `summary` (2–3 sentences), `audience` (3 role chips), `notFor` (one sentence), `outcomes` (5–7 verifiable "your team can…" statements), `prerequisites` (3–4 lines), `tags`.

`faq.ts`: 11 items, `scope` per item. EN answers below; write PL answers. Items marked (DRAFT) reference `policies.ts` text.
1. `invoices` (hub, course, briefing, enterprise): "You receive a VAT invoice from a Polish company, payable by bank transfer in EUR or PLN. Public seats: pro-forma on request, invoice on confirmation, 14-day terms. Enterprise: milestone invoicing on request." (DRAFT terms)
2. `po`: "Yes. Send the PO number with the request and it appears on the invoice. Vendor onboarding forms: I fill them, you send them."
3. `vat`: "Prices are net. Polish companies: +23% VAT. EU companies with a valid VAT ID: reverse charge, 0% on the invoice, you self-account. Outside the EU: no Polish VAT."
4. `nda` (enterprise, hub): "Yours or mine, before the scope call if you prefer. I have signed NDAs with defence and finance clients; I do not list what I cannot."
5. `cancel-public` (hub, course): from `policies.cancellationPublic` (DRAFT)
6. `cancel-private` (briefing, enterprise): from `policies.cancellationPrivate` (DRAFT)
7. `recording` (hub, course, enterprise): from `policies.recording` (DRAFT)
8. `discounts` (hub, course): "3 or more seats: 10% off. Six or more: ask for a private-run quote and I show you both numbers."
9. `onsite` (hub, enterprise): "On-site across the EU, UK, US and Middle East. Travel at cost, agreed up front, or a flat travel fee per engagement. Remote-first when the team is spread out."
10. `language` (all): "English or Polish. Materials in English (official Microsoft courseware), delivery in either language."
11. `certification` (hub, course): "Courses map to Microsoft exams (e.g. DP-600 → Fabric Analytics Engineer Associate). Exam vouchers are not included. I tell you honestly whether the exam is worth your team's time." Add for condensed: "Essentials editions cover the exam-relevant core of the official 4-day outline in 2 intensive days; I say which modules I trim."

`policies.ts`: `export const policies: Record<"paymentTerms"|"cancellationPublic"|"cancellationPrivate"|"recording", Localized>` with DRAFT text:
- paymentTerms EN: "Invoice on confirmation, 14-day payment terms. Pro-forma on request."
- cancellationPublic EN: "Substitute a colleague any time, free. Cancel 14+ days before: full refund or credit. Under 14 days: credit toward any date within 12 months. No-show: no refund. If I cancel or move a date: full refund plus first pick of the next date."
- cancellationPrivate EN: "21+ days before: free. 8–20 days: 50%. 7 days or fewer: 100%. One free reschedule with 14+ days' notice."
- recording EN: "Public classes are not recorded: eight people from different companies, hands-on labs, real questions about real systems. You get the deck, lab files and 30 days of email Q&A. Private runs can be recorded on request for internal use only."
Add one critical-caveat comment at top: `// DRAFT policies — owner to confirm before launch (see plan Owner inputs).`

`slugs.spec.ts`: `Object.keys(courses).sort()` toEqual `[...COURSE_SLUGS].sort()`; `mctRoutes()` has length 26 and every route is in `staticRoutes` (import `../../routes.mjs`); every `sessions[].courseSlug` in COURSE_SLUGS and ids unique; every course has `agenda.length === days`; every faq has non-empty en+pl.

Verify: `npm test -- src/config/mct`, tsc.

Commit: `feat(mct): add phase-1 course catalog, FAQ and draft policies`.

## Task 6: SITE — UI copy, testimonials, clients, contact data

Repo: SITE. Files: `src/config/mct/copy.ts`, `copy.en.ts`, `copy.pl.ts`, `testimonials.ts`, `clients.ts`, `contact.ts`. Data-only; no components.

`copy.ts`: `export type MctCopy = { ... }` covering every UI string the pages need (nav, hero, segment paths, tiers, schedule, catalog, whyMe, proof, process, faq heading, finalCta, footer, form labels/errors/success/microcopy, sticky CTAs, briefing page, enterprise page, course page labels, empty states, badges "Condensed 2-day", "Official Microsoft course", "Ludwik's courseware"). `export const getCopy = (locale: Locale): MctCopy => locale === "pl" ? pl : en`. `copy.en.ts` / `copy.pl.ts` end with `satisfies MctCopy`.

Required copy (EN → PL):
- hero.eyebrow: "Microsoft Certified Trainer · 19 years · 10 000+ professionals trained" → "Microsoft Certified Trainer · 19 lat · 10 000+ przeszkolonych". Use `proof.yearsMct` / `proof.trainedProfessionals` via template, not literals.
- hero.line1 / line2 (line2 outlined): "BATTLE-TESTED," / "NOT LAB-TESTED." → "SPRAWDZONE W BOJU," / "NIE W LABIE."
- hero.sub: "Microsoft Fabric, Copilot and Azure SQL training from the trainer Fortune 500 and NATO booked. Public online classes for small teams. Custom programs for enterprise. Same courseware standard either way." → "Szkolenia z Microsoft Fabric, Copilota i Azure SQL od trenera, którego zatrudniały Fortune 500 i NATO. Otwarte klasy online dla małych zespołów. Programy na zamówienie dla enterprise. Ten sam standard w obu wariantach."
- hero.pathTeams: "For teams of 3–30" → "Dla zespołów 3–30 osób"; hero.pathEnterprise: "For enterprise & public sector" → "Dla enterprise i sektora publicznego".
- hero.nextClass: "Next public class: {course}, {date}" → "Najbliższa otwarta klasa: {course}, {date}".
- segment.teams.title/body/cta: "Teams of 3–30." / "Pick a course, pick a date, request seats. €590 net per training day. Max 8 people per class, so you get answers, not a webinar. Invoice, not a checkout." / "See dates and prices" → "Zespoły 3–30 osób." / "Wybierasz kurs, termin, liczbę miejsc. 2 490 zł netto za dzień szkoleniowy. Maks. 8 osób w klasie, więc dostajesz odpowiedzi, nie webinar. Faktura, nie koszyk." / "Zobacz terminy i ceny". (Price via `formatPrice`, placeholder `{price}`.)
- segment.enterprise: "Enterprise & public sector." / "A program written for your stack, your rollout, your deadline. Private runs of any course. NDA, PO and vendor onboarding handled. 20-minute scope call, no pitch." / "How custom programs work" → "Enterprise i sektor publiczny." / "Program napisany pod Twój stack, Twoje wdrożenie, Twój termin. Prywatne edycje dowolnego kursu. NDA, zamówienie, onboarding dostawcy: załatwione. 20-minutowa rozmowa o zakresie, bez pitchu." / "Jak działają programy na zamówienie".
- tiers.eyebrow "Three ways to work with me" → "Trzy sposoby współpracy". Tier titles: "Public online class, per seat" / "Half-day executive briefing" / "Custom enterprise program" → "Otwarta klasa online, za miejsce" / "Półdniowy briefing dla zarządu" / "Program enterprise na zamówienie". Price lines: "{perDay} / day · 2-day {twoDay} (net)" / "{flat} flat (net)" / "Quoted per program" → "{perDay} / dzień · 2 dni {twoDay} (netto)" / "{flat} ryczałt (netto)" / "Wycena indywidualna". Bullets: public ["Live online, max 8", "Hands-on labs on your own environment", "3+ seats −10%", "Materials + 30 days of follow-up Q&A by email"]; briefing ["3 hours, remote", "Up to 10 leaders", "One topic, your numbers on the table", "Written summary within 48 h"]; enterprise ["Private run of any course", "Custom courseware for your stack", "Remote or on-site, EN/PL", "Multi-cohort, NDA, PO, vendor onboarding"]. CTAs: "Request a seat" / "Book a briefing" / "Scope it in 20 minutes" → "Zarezerwuj miejsce" / "Zamów briefing" / "Ustalmy zakres w 20 minut". Footnote: "Six or more? A private run is usually the better deal." → "Sześć osób lub więcej? Prywatna edycja zwykle wychodzi lepiej."
- schedule: eyebrow "Upcoming public classes" → "Najbliższe otwarte terminy"; columns Course/Dates/Hours/Language/Status/"" → Kurs/Termin/Godziny/Język/Status; statuses open "Open"/"Otwarte", filling "Filling"/"Zapełnia się", full "Full"/"Brak miejsc", confirmed "Confirmed to run"/"Potwierdzony"; empty title/body: "First public dates are being set for Q4 2026." / "Tell me which course and I'll notify you first, or request a private run." → "Pierwsze otwarte terminy ustalam na Q4 2026." / "Napisz, który kurs Cię interesuje, a powiadomię Cię jako pierwszego. Albo zamów prywatną edycję."; ctas "Notify me" / "Request a private run" → "Powiadom mnie" / "Zamów prywatną edycję".
- catalog.eyebrow "Phase-1 catalog" → "Katalog, etap 1"; catalog.footer "Power BI, Microsoft 365 and Data Engineering tracks follow. Need one now? Ask, it is probably a private run away." → "Ścieżki Power BI, Microsoft 365 i Data Engineering w drodze. Potrzebujesz już teraz? Zapytaj, zwykle to kwestia prywatnej edycji."
- whyMe.title "Most trainers read the courseware. I have written it." → "Większość trenerów czyta courseware. Ja go pisałem." Comparison rows (them → me): ["Read the official courseware", "Wrote custom training programs for NATO"], ["Teach features", "Teaches systems that survive production"], ["Know the current version", "Trained every generation of the Microsoft data stack for 19 years"], ["Deliver in a lab", "Has consulted for Fortune 500 and military organisations"], ["Speak one language to one audience", "Switches between deep T-SQL and C-level strategy in the same day"]. Header labels "Most Microsoft trainers" / "Ludwik" → "Typowy trener Microsoft" / "Ludwik".
- proof.title "{n} evaluation-form quotes. Zero scripted." → "{n} cytatów z ankiet poszkoleniowych. Zero scenariusza."; proof.sub "Every quote comes from a post-training evaluation form. No stars, because I do not have a scored dataset yet; when I do, you will see the number and the sample size." → PL equivalent; proof.note "Originals in English." → "Oryginały po angielsku."; filters Military/Enterprise/Data/Modern Work → Wojsko/Enterprise/Dane/Modern Work; "Read all" / "Show fewer".
- process.eyebrow "How it works" → "Jak to działa"; lane titles Public seats / Briefing / Enterprise; public beats: ["Request seats (2 min)", "I confirm the date and send a pro-forma or invoice within 1 business day", "Pre-course check: lab access, prerequisites, your questions", "Class, materials, 30 days of follow-up Q&A"]; briefing beats: ["Pick a topic and 2–3 time windows", "I confirm a slot and send a one-page prep note", "3 hours, your numbers on the table", "Written summary within 48 h"]; enterprise beats: ["Tell me your stack & timeline (2 min)", "20-minute scope call, no pitch", "A program built around you", "Delivery that sticks: remote or on-site, EN or PL"].
- finalCta.title "Your next training should change what your team ships." / sub "Pick a seat, book a briefing, or scope a program. I answer within one business day, and if I am not the right fit I will say so." → "Kolejne szkolenie ma zmienić to, co Twój zespół wdraża." / "Wybierz miejsce, zamów briefing albo ustalmy zakres programu. Odpowiadam w jeden dzień roboczy, a jeśli nie jestem właściwą osobą, powiem to wprost."
- sticky: teams "Seats from {perDay} net · Request a seat" → "Miejsca od {perDay} netto · Zarezerwuj miejsce"; enterprise "Rolling out Fabric or Copilot? Scope it in 20 minutes" → "Wdrażasz Fabric albo Copilota? Ustalmy zakres w 20 minut"; course "{code} · next date {date} · Request a seat" / courseNoDate "{code} · Request a private run"; briefing "3 hours, 10 leaders, {flat} net · Book a briefing"; enterprisePage "20-minute scope call, no pitch · Pick a time"; dismiss "Dismiss" → "Zamknij".
- form: title per mode "Request seats" / "Request a briefing" / "Scope a program" → "Zarezerwuj miejsca" / "Zamów briefing" / "Ustalmy zakres"; labels name "Name", email "Work email", company "Company", phone "Phone (optional)", course "Course", session "Date", sessionNotify "Notify me about the next date", seats "Seats", language "Delivery language", topic "Topic", windows "Preferred time windows (2–3)", leaders "Number of leaders", stack "Stack", teamSize "Team size and roles", timeline "Timeline", delivery "Delivery", procurement "Procurement constraints", message "Notes", consent "I agree to be contacted about this request. Privacy policy applies." submit per mode "Request seat(s)" / "Request a briefing" / "Send and pick a call slot"; microcopy seat "No payment now. You get a confirmation within one business day and an invoice or pro-forma once the date is confirmed."; seatsHint6 "Six or more? A private run may be cheaper — tick to get both quotes."; success title "Got it." body per mode: seat "Once your date is confirmed I send the invoice or pro-forma and the pre-course checklist."; briefing "I will propose a slot from your windows and send a one-page prep note."; enterprise "Pick a 20-minute slot below, or wait for my email with three questions that make the call useful."; successCalendar "Pick a 20-minute slot"; error "Something went wrong. Your answers are still here — try again or email {email}."; errors required/email/consent. PL all.
- footer: "Microsoft Certified Trainer since 2007" → "Microsoft Certified Trainer od 2007"; links labels; legal "Privacy policy" → "Polityka prywatności".
- briefing page + enterprise page strings: see Task 11 copy; put them in copy files here (briefing topics A/B/C titles+outcomes+agenda; enterprise "what custom means" paragraphs; procurement facts) — full EN text is in Task 11; write PL.
- course page labels: "Official Microsoft course" / "Ludwik's courseware" / "Condensed 2-day" / "Duration" / "Level" / "Max 8" / "Live online" / "per seat" / "or a private run for your team" / "Who it's for" / "Not for" / "After {n} days your team can" / "Agenda" / "Day {n}" / "Ludwik's add-on" / "Prerequisites" / "Format" / "Related courses" / level names.

`testimonials.ts`: migrate all 37 quotes from `src/components/mct/MCTSocialProof.tsx` verbatim into `Testimonial[]`, plus the EN quotes from `src/pages/Testimonials.tsx` by Ron Wilson, Lisa Blankenship, Eric Buenavente (verbatim, keep attribution lines). De-duplicate identical quotes. Tag each (`military` for US Army/NATO/Wiesbaden/Vicenza/USARAF; `data` for SQL/Data Platform/Fabric/Power BI; `modernwork` for M365/Modern Work; `enterprise` for named companies/others). `featured: true` on: Blankenship, Wilson, Buenavente, "He is the absolute best instructor I have ever had!!" (Bergen), "The best trainer I had the pleasure working with" (Warsaw), "Best instructor I've had in many years." Export `testimonials` and `testimonialCount`.

`clients.ts`: `brandLogos` (7 SVG imports from `@/assets/logos/*.svg`, same as MCT.tsx) and `clientWall: Record<string, string[]>` from MCT.tsx `clients` with changes: remove "Department of Defense" (ambiguous); keep everything else; `textChips = ["NATO","US Army Europe","US Navy","US Marines","Nordea","ING"]`; group labels Localized.

`contact.ts`: `EMAIL = "ludwikc@siadlak.email"`, `PHONE_PL = "+48 510 666 531"`, `PHONE_PL_TEL = "+48510666531"`, `PHONE_DE = "+49 162 833 2261"`, `CALENDAR_URL = "https://calendar.app.google/HfZb2pjWRUt5tRxV8"`, `PORTAL_PRIVACY_URL = "https://docs.siadlak.com/legal/privacy"`.

Verify: tsc (parity via `satisfies`), `npm test` (proof.spec must pass — no banned strings).

Commit: `feat(mct): add bilingual UI copy, testimonials, clients and contact data`.

## Task 7: SITE — lead schema, lead format, API endpoint

Repo: SITE. Files: `src/config/mct/lead-schema.ts`, `lead-schema.spec.ts`, `lead-format.ts`, `lead-format.spec.ts`, `api/mct-lead.ts`.

`lead-schema.ts` (zod; import `COURSE_SLUGS` from `./slugs.mjs`):
```ts
export const leadSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  company: z.string().trim().min(1).max(160),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  tier: z.enum(["public","briefing","enterprise"]),
  intent: z.enum(["seat","waitlist","briefing","scope-call"]),
  courseSlug: z.enum(COURSE_SLUGS).optional(),
  sessionId: z.string().trim().max(80).optional(),
  seats: z.coerce.number().int().min(1).max(8).optional(),
  language: z.enum(["en","pl"]),
  locale: z.enum(["en","pl"]),
  topic: z.string().trim().max(120).optional(),
  windows: z.string().trim().max(500).optional(),
  leaders: z.coerce.number().int().min(1).max(10).optional(),
  stack: z.array(z.string().max(40)).max(8).optional(),
  teamSize: z.string().trim().max(200).optional(),
  timeline: z.string().trim().max(200).optional(),
  delivery: z.string().trim().max(200).optional(),
  procurement: z.string().trim().max(500).optional(),
  message: z.string().trim().max(4000).optional(),
  consent: z.literal(true),
  pagePath: z.string().max(200),
  wantsPrivateQuote: z.boolean().optional(),
  website: z.string().max(0).optional(),   // honeypot
}).superRefine((v, ctx) => {
  if (v.tier === "public") {
    if (!v.courseSlug) ctx.addIssue({ code: "custom", path: ["courseSlug"], message: "required" });
    if (!v.seats) ctx.addIssue({ code: "custom", path: ["seats"], message: "required" });
    if (v.intent === "seat" && !v.sessionId) ctx.addIssue({ code: "custom", path: ["sessionId"], message: "required" });
  }
  if (v.tier === "briefing" && !v.topic) ctx.addIssue({ code: "custom", path: ["topic"], message: "required" });
});
export type LeadPayload = z.infer<typeof leadSchema>;
```
`lead-schema.spec.ts`: valid seat / waitlist-without-session / briefing / enterprise payloads parse; public without courseSlug fails on `courseSlug`; seats 0 and 9 fail; consent false fails; honeypot filled fails; unknown slug fails.

`lead-format.ts`: `toDealTitle(p)` → `MCT — ${tier} — ${company}`; `toCrmPayload(p, submissionId, quoteCents?, currency?)` → object matching PORTAL `LeadPayload` (Task 2) incl. `utm` from attribution keys present on payload extras; `toBlobMarkdown(p, submittedAt, submissionId)`. `lead-format.spec.ts`: title and CRM payload shape in one `toEqual`.

`api/mct-lead.ts`: mirror `api/eval.ts` (same minimal Req/Res types; GET → `{ok:true, storage: process.env.CRM_LEAD_SECRET ? "crm" : "blob"}`; non-POST 405; honeypot filled → `200 {ok:true}` without storing; body size guard). Steps: `leadSchema.safeParse(body)` → 400 `{ok:false, error:"invalid-submission", issues}`; if `tier==="public" && intent==="seat"`: session must exist in `sessions` (import `../src/config/mct/schedule`) and `new Date(startsAt) > now`, else 400 `session-unavailable`; `submissionId = crypto.randomUUID()`; compute `quoteCents`/`currency` via `quoteSeats` for public (else briefing flat / 0); rate limit: module-level `Map<string, number[]>` keyed on first `x-forwarded-for` IP, 5 per 10 min → 429 `{ok:false,error:"rate-limited"}`; POST to `process.env.CRM_LEAD_URL ?? "https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-lead"` with headers `{ "content-type": "application/json", "x-lead-secret": process.env.CRM_LEAD_SECRET ?? "" }`, 8s `AbortController` timeout; on ok → `200 {ok:true, ref:"crm", contactId}`; on failure → `@vercel/blob` `put(\`mct-leads/${date}/${submissionId}.md\`, markdown, {access:"private", contentType:"text/markdown"})` → `200 {ok:true, ref:"blob"}`; if both fail → `console.error` + `502 {ok:false, error:"store-failed"}`. Always `console.log("mct-lead", JSON.stringify({submissionId, tier, intent, email, company}))` before storage attempts (safety net like eval).

Verify: `npm test -- src/config/mct`; tsc includes `api/`? Check `tsconfig.*` — if `api/` is excluded, run `npx tsc --noEmit api/mct-lead.ts --esModuleInterop --module esnext --moduleResolution bundler --target es2022 --skipLibCheck` or the same command the repo uses for `api/eval.ts` (look in package.json / vercel build). Report.

Commit: `feat(mct): add lead schema and CRM-backed lead endpoint`.

## Task 8: SITE — analytics, landing prefixes, SEO props, MCT structured data

Repo: SITE. Files: `src/lib/analytics.ts` (edit), `src/lib/landing-pages.ts` (edit), `docs/analytics/gtm-setup.md` (edit), `src/components/SEO.tsx` (edit), `src/lib/structured-data.ts` (edit: export `IDS`, `BASE_URL`), `src/lib/structured-data-mct.ts` (new), `src/lib/structured-data-mct.spec.ts` (new).

- `analytics.ts` `EventParams` add:
  ```ts
  eval_submitted: { page_path: string; training: string; nps: number };
  eval_submit_error: { page_path: string };
  mct_view: { locale: "en"|"pl"; page: "hub"|"course"|"briefing"|"enterprise"; course_slug?: string };
  mct_tier_select: { locale: "en"|"pl"; tier: "public"|"briefing"|"enterprise"; course_slug?: string; session_id?: string; placement: string };
  mct_lead_submitted: { locale: "en"|"pl"; tier: "public"|"briefing"|"enterprise"; intent: string; course_slug?: string; session_id?: string; seats?: number; language: "en"|"pl"; page_path: string };
  mct_lead_submit_error: { locale: "en"|"pl"; tier: "public"|"briefing"|"enterprise"; page_path: string; reason: string };
  mct_locale_switch: { from: "en"|"pl"; to: "en"|"pl"; page_path: string };
  mct_calendar_click: { locale: "en"|"pl"; placement: string };
  ```
  Confirm `src/pages/Eval.tsx` calls now type-check.
- `landing-pages.ts`: add `"/mct"`, `"/szkolenia"` to `LANDING_ROUTE_PREFIXES`.
- `docs/analytics/gtm-setup.md`: extend the trigger regex line to include `mct_.*|eval_.*`; note `mct_lead_submitted` as key event.
- `SEO.tsx`: add optional props `lang?: string` (renders `<Helmet htmlAttributes={{ lang }}>` only when provided) and `alternates?: { hrefLang: string; href: string }[]` (renders `<link rel="alternate" hrefLang=... href=...>` each). Backward compatible; keep everything else.
- `structured-data.ts`: `export` the existing `IDS` and `BASE_URL` constants (no other change).
- `structured-data-mct.ts` exports: `getMctCourseEntity(course, upcoming: ScheduledSession[], locale)` → `{ "@type":"Course", "@id": BASE_URL+coursePath, name, description, courseCode: codes.join(", "), provider: {"@id": IDS.organization}, inLanguage: ["en","pl"], offers: [Offer EUR, Offer PLN] (locale's currency first; `price` number, `priceCurrency`, `category:"Paid"`, `priceSpecification: {"@type":"UnitPriceSpecification", price, priceCurrency, valueAddedTaxIncluded:false}`, `url`), hasCourseInstance: upcoming.map → {"@type":"CourseInstance", courseMode:"Online", courseWorkload: days===1?"PT8H":"PT16H", startDate, endDate (sessionEndsAt ISO), inLanguage, instructor: {"@id": IDS.person}, location:{"@type":"VirtualLocation", url: BASE_URL+coursePath}, offers:[same offers]} }`; `getMctBriefingService(locale)` → Service with two Offers (1900 EUR / 7900 PLN), `serviceType: "Executive briefing"`, provider person; `getMctEnterpriseService(locale)` → Service without offers; `getMctHubEntities(locale, courseList)` → `[getWebPageEntity(hubPath, name, description), {"@type":"ItemList", itemListElement: courses → ListItem with url}, breadcrumb]`; `getMctBreadcrumb(locale, items)` via existing `getBreadcrumbSchema`. Use existing `getFAQSchema` for FAQ (caller passes localized items). Check `IDS` field names in `structured-data.ts` and use the real ones.
- Spec: one CourseInstance per upcoming session; both currencies present with locale's first; zero sessions → `hasCourseInstance: []` and still has offers; briefing service prices 1900/7900.

Verify: tsc, `npm test`.

Commit: `feat(mct): add analytics events, hreflang SEO props and course structured data`.

## Task 9: SITE — theme tokens, reveal hook, shell, context, locale switch

Repo: SITE. Files: `src/design-system/tokens.css` (edit), `src/design-system/tailwind-preset.ts` (edit), `src/design-system/styles/base.css` or the existing utilities file (edit: add `.mct-display` and `.mct-display-outline` + `.mct-marquee` keyframes), `src/hooks/useReveal.ts` (new), `src/components/mct/MctContext.tsx`, `MctShell.tsx`, `LocaleSwitch.tsx`, `src/components/conversion/StickyCtaBar.tsx` (edit: `dismissLabel?: string` prop defaulting to "Zamknij").

- tokens.css `:root`: `--mct-navy: 228 45% 6%; --mct-navy-elevated: 228 35% 9%;`. tailwind-preset colors: `"mct-navy": "hsl(var(--mct-navy))"`, `"mct-navy-elevated": "hsl(var(--mct-navy-elevated))"`.
- Utilities (in the file where `-locked-*` utilities or base layer live): `.mct-display { font-family: var(--font-family-heading); font-weight: 700; line-height: .92; letter-spacing: -0.02em; text-transform: uppercase; font-size: clamp(2.75rem, 8.5vw, 8rem); }`, `.mct-display-outline { color: transparent; -webkit-text-stroke: 1.5px hsl(var(--text-on-dark)); }` with `@media (max-width:640px){ -webkit-text-stroke-width:1px }`, `@media (min-width:1280px){ 2px }`, `@supports not (-webkit-text-stroke: 1px) { .mct-display-outline { color: hsl(var(--text-on-dark-secondary)); } }`; `.mct-eyebrow { font-family: var(--font-mono); font-size: .75rem; letter-spacing: .18em; text-transform: uppercase; }`; `@keyframes mct-marquee { to { transform: translateX(-50%) } }` `.mct-marquee-track { animation: mct-marquee 45s linear infinite; } .mct-marquee:hover .mct-marquee-track { animation-play-state: paused; }` `@media (prefers-reduced-motion: reduce) { .mct-marquee-track { animation: none } }`; `.mct-reveal { opacity:0; transform: translateY(24px); transition: opacity .6s cubic-bezier(.2,.7,.2,1), transform .6s cubic-bezier(.2,.7,.2,1); } .mct-reveal.is-visible { opacity:1; transform:none }` + reduced-motion → no transform/transition.
- `useReveal.ts`: `useReveal<T extends HTMLElement>(options?: {stagger?: number})` returns a ref; IntersectionObserver adds `is-visible` once (threshold .15), unobserves; children with `[data-reveal-child]` get `transitionDelay = index*60ms`. SSR/prerender safe (guard `typeof IntersectionObserver`; if missing add class immediately).
- `MctContext.tsx`: `type Prefill = { tier: TierId; intent: LeadIntent; courseSlug?: CourseSlug; sessionId?: string }`; `MctProvider({locale, children})` provides `{ locale, t: getCopy(locale), currency, paths: MCT_PATHS[locale], prefill, setPrefill(p, placement) }` where `setPrefill` also calls `track("mct_tier_select", {...})` and scrolls `#request` into view (`scrollIntoView({behavior:"smooth"})`, guarded). `useMct()` throws if outside provider.
- `LocaleSwitch.tsx`: pill `<Link to={altPath(locale, pathname)} hrefLang={other} lang={other} className="rounded-full border border-white/20 px-4 py-1.5 text-sm text-on-dark hover:border-electric/60 transition-colors" data-cta={`${surface}:locale-switch`}>` showing "EN" / "PL" (target locale), `onClick` → `track("mct_locale_switch", ...)`. `surface` = `"mct"` on EN pages, `"szkolenia"` on PL.
- `MctShell.tsx`: `LandingLayout showLegal={false} className="bg-mct-navy text-on-dark min-h-screen"`; `MctTopBar` (sticky top, backdrop blur, brand link to `/` with text "Ludwik C. Siadlak", hub link, `LocaleSwitch`; mobile: brand + switch only); `children`; `MctFooter` (three columns: catalog links from `courseList` grouped by track, tier pages, contact from `contact.ts`; legal line with privacy link and copy `t.footer.since`). Shell also renders `<SEO>` via props passed by page (`seo: SEOProps`) — or pages render SEO themselves; pick: pages render SEO (shell stays presentational).
- `StickyCtaBar.tsx`: add `dismissLabel?: string` prop, default `"Zamknij"`, used in `aria-label`.

Verify: tsc, `npm run lint`, `npm test`. No spec needed for hook (DOM).

Commit: `feat(mct): add navy theme tokens, reveal/marquee utilities and mini-site shell`.

## Task 10: SITE — proof, pricing, schedule, catalog and content components

Repo: SITE. Files (all under `src/components/mct/`): `TrustBand.tsx`, `ClientMarquee.tsx`, `Testimonials.tsx`, `PricingTiers.tsx`, `SeatQuote.tsx`, `ScheduleTable.tsx`, `ScheduleEmpty.tsx`, `TrackGrid.tsx`, `CourseCard.tsx`, `WhyMe.tsx`, `ProcessLanes.tsx`, `FaqAccordion.tsx`, `SegmentPaths.tsx`, `SectionHead.tsx`. Delete `src/components/mct/MCTSocialProof.tsx` (its data moved in Task 6). All read `useMct()` for copy/locale/currency. All use `useReveal` on section roots. No inline colors. Every CTA is `CTAButton` with `data-cta`.

- `SectionHead({eyebrow, title, sub?})`: `.mct-eyebrow text-electric`, h2 `text-3xl md:text-4xl font-bold text-on-dark`, sub `text-dim`.
- `TrustBand`: eyebrow `t.trust.eyebrow`; 7 logos `<img loading="lazy" className="h-6 md:h-7 opacity-60 hover:opacity-90 transition-opacity">` + text chips (`clients.textChips`) as `rounded-full border border-white/10 px-3 py-1 text-sm text-dim font-mono`.
- `ClientMarquee`: `.mct-marquee overflow-hidden` with duplicated `.mct-marquee-track flex gap-8 w-max` of all `clientWall` names as chips; edge fade via `[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]`.
- `Testimonials`: title with `testimonialCount`; filter chips (all + 4 tags) as toggle buttons (`aria-pressed`); featured 3 in large cards (quote `text-xl`, detail `text-dim`, author `.mct-eyebrow text-on-dark-tertiary` uppercase); rest in 2–3 col grid, collapsed to 6 with "Read all {n}" toggle (design-system `Button variant="ghost"` allowed for non-CTA toggles). PL page shows `t.proof.note`.
- `PricingTiers({compact?: boolean, highlight?: TierId})`: 3 cards `rounded-2xl border border-white/10 p-8`; highlighted card `border-electric/60`; price in `.mct-display text-[2.5rem] normal-case tracking-normal` (override utilities as needed), computed via `formatPrice`; bullets with lucide `Check` in `text-electric`; CTA per tier calls `setPrefill({tier, intent}, "tier-"+tier)`; briefing badge `bg-depth-purple/20 text-on-dark`; footnote. Compact: hide bullets except first two.
- `SeatQuote({days})`: stepper (− / + buttons, `aria-label`s), shows `quoteSeats` result: unit × seats, discount line when ≥3, total; when seats ≥ 6 show `t.form.seatsHint6`.
- `ScheduleTable({courseSlug?})`: `now` via `useState(() => new Date())`; `useEffect` recomputes at next session start; `getUpcomingSessions`/`getSessionsForCourse`; design-system `Table`; status badge; row CTA `CTAButton variant="tertiary"` → `setPrefill({tier:"public", intent:"seat", courseSlug, sessionId}, "schedule-row")`; when 0 rows render `ScheduleEmpty`.
- `ScheduleEmpty({courseSlug?})`: title/body from copy; two CTAs: notify → `setPrefill({tier:"public", intent:"waitlist", courseSlug}, "schedule-empty-waitlist")`; private run → `setPrefill({tier:"enterprise", intent:"scope-call", courseSlug}, "schedule-empty-private")`.
- `TrackGrid`: 3 track columns; each `CourseCard` (code chips `font-mono`, title, days/level meta, "Condensed 2-day" badge when `condensed`, price `formatPrice(seatPrice(days))`, `CTAButton variant="tertiary" to={coursePath} showArrow data-cta={surface+":course-card-"+slug}`); footer line.
- `WhyMe`: consultant photo (`@/assets/Ludwik C. Siadlak-bw-consultant.webp` via `OptimizedImage`, `grayscale hover:grayscale-0 transition`), title, 5-row comparison table (`text-dim` vs `text-on-dark`), eyebrow.
- `ProcessLanes`: 3 columns × 4 numbered beats (`font-mono text-electric` numbers).
- `FaqAccordion({scope})`: design-system `Accordion type="single" collapsible`; items filtered by `scope`; dark-friendly classes.
- `SegmentPaths`: two cards; CTA A → smooth-scroll to `#pricing` and `setPrefill({tier:"public",intent:"seat"},"segment-teams")` without scrolling to form (add `scroll?: boolean` param to `setPrefill` or a separate `selectPath`); CTA B `to={enterprisePath(locale)}`.

Verify: tsc, lint, `npm test` (MCTSocialProof deletion must not break imports — `src/pages/MCT.tsx` still imports it until Task 12; to keep build green, in THIS task make `MCT.tsx` import `Testimonials` from the new component OR leave `MCTSocialProof.tsx` in place and delete it in Task 12. Choose: leave deletion to Task 12; do not touch MCT.tsx here.)

Commit: `feat(mct): add pricing, schedule, proof and catalog components`.

## Task 11: SITE — lead form + hero + sticky CTA

Repo: SITE. Files: `src/components/mct/MctLeadForm.tsx`, `MctHero.tsx`, `MctStickyCta.tsx`.

- `MctLeadForm`: `id="request"`; light paper card `bg-background text-foreground rounded-2xl p-6 md:p-10 shadow-card`; mode derived from `prefill.tier` (public → seat mode; briefing; enterprise → scope); mode tabs (3 pills) let user switch. RHF + `zodResolver(leadSchema)` + design-system `Input/Label/Textarea/Select/Checkbox/CTAButton` (see `src/pages/Eval.tsx` for the established pattern). Fields per mode:
  - seat: course (Select from `courseList`, prefilled), session (Select of `getSessionsForCourse` + option value `""` labelled `t.form.sessionNotify` → sets `intent:"waitlist"`), seats (1–8 number; `SeatQuote` beside), language, name, email, company, phone, message, `wantsPrivateQuote` checkbox shown when seats ≥ 6, consent.
  - briefing: topic (Select A/B/C/custom from copy), windows (Textarea), leaders (1–10), language, name, email, company, phone, message ("What decision should this briefing unblock?" as placeholder), consent.
  - scope: stack (checkbox group: Copilot & AI, Fabric, Azure SQL, Power BI, M365, other), teamSize, timeline, delivery (Select remote/on-site/hybrid), language, procurement (Textarea), name, email, company, phone, consent.
  Hidden honeypot `<input name="website" tabIndex={-1} autoComplete="off" className="hidden">`. Hidden `pagePath`, `locale`, `tier`, `intent`. Submit → `fetch("/api/mct-lead", {method:"POST", headers, body: JSON.stringify({...values, ...getFlatAttribution()})})`; on ok → `track("mct_lead_submitted", ...)` + success panel (`role="status" aria-live="polite"`, title, per-mode body, for enterprise a `CTAButton href={CALENDAR_URL} variant="secondary"` tracking `mct_calendar_click`); on error → `track("mct_lead_submit_error")`, inline error with `mailto:` fallback, values preserved. Submit button `CTAButton` with `loading` state if supported, else disabled + label "Sending…". `data-cta={surface+":form-submit"}`.
- `MctHero`: uses `Hero` from `sections/Hero.tsx` with `align="left"`, `heroImage` = `/lovable-uploads/SIADLAK-coffee-transparent.webp` (verify which of `.png/.webp/.avif` exists in `public/lovable-uploads/` or import from `src/assets`; use what exists). Children: eyebrow (`.mct-eyebrow text-electric`), `<h1 className="mct-display text-on-dark">{line1}<br/><span className="mct-display-outline">{line2}</span></h1>`, sub `text-dim text-lg md:text-xl max-w-2xl`, two pills (`CTAButton variant="primary"` teams → `selectPath("teams")`; `variant="secondary"` enterprise → `to={enterprisePath}`), `nextSession` chip when exists (`rounded-full border border-electric/40 px-3 py-1 font-mono text-xs text-electric`). If `Hero`'s API cannot host the display headline (it may render its own `title` h1), pass empty `title` and render h1 in children — but do NOT create new hero markup outside `Hero`; if impossible, report DONE_WITH_CONCERNS with the exact limitation.
- `MctStickyCta({variant: "hub-teams"|"hub-enterprise"|"course"|"briefing"|"enterprise", course?, nextSession?})`: wraps `StickyCtaBar` with `label` from copy (interpolate price/date), `ctaText`, `href="#request"`, `showAfterScrollPx={600}`, `hideNearBottomPx={900}`, `dismissLabel={t.sticky.dismiss}`, `dataCta={surface+":sticky"}`, `onCtaClick` → `setPrefill(...)` per variant.

Verify: tsc, lint.

Commit: `feat(mct): add lead form, display hero and sticky CTA`.

## Task 12: SITE — pages, routing, cleanup

Repo: SITE. Files: `src/pages/mct/MctHub.tsx`, `MctCourse.tsx`, `MctBriefing.tsx`, `MctEnterprise.tsx` (new), `src/App.tsx` (edit), delete `src/pages/MCT.tsx` and `src/components/mct/MCTSocialProof.tsx`, `src/config/proof.spec.ts` (edit BANNED).

Each page: `<MctProvider locale>` → `<MctShell>` → `<SEO ...>` + sections + `<MctLeadForm/>` + `<MctStickyCta/>`. `useEffect(() => track("mct_view", ...), [])`. SEO: `title`, `description` from copy; `url` = path; `type` "course" for course pages, "website" else; `locale={ogLocale}`; `lang={htmlLang}`; `alternates={hreflangAlternates(locale, pathname)}`; `jsonLd` from `structured-data-mct.ts` (+ `getFAQSchema` of scoped FAQ, breadcrumb).

- **MctHub** order: `MctHero` → `TrustBand` → `ClientMarquee` → `SegmentPaths` → `<section id="pricing">` `PricingTiers highlight={path==="teams"?"public":undefined}` → `ScheduleTable` → `TrackGrid` → `WhyMe` → `Testimonials` → `ProcessLanes` → `FaqAccordion scope="hub"` → final CTA section (title/sub + three `CTAButton`s mirroring tiers + contact line email/phone) → `MctLeadForm`. Sticky variant from selected path (default `hub-teams`). Path state: `useSearchParams` `path=teams|enterprise` optional.
- **MctCourse**: `useParams().slug`; if not in `courses` → render existing `NotFound` page component. Sections: hero (use `Hero align="left"` with children: eyebrow official/custom + code chips, h1 title (regular `text-4xl md:text-6xl font-bold`, not display), meta row, price block `formatPrice(seatPrice(days))` + " / " + `t.course.perSeat` + link `t.course.orPrivate` → `setPrefill({tier:"enterprise",intent:"scope-call",courseSlug})`, `CTAButton primary` → `setPrefill({tier:"public",intent:"seat",courseSlug})`) → condensed notice when `condensed` → who it's for / not for → outcomes → agenda (design-system `Tabs` per day; module list; add-on callout `border-l-2 border-electric pl-4`) → prerequisites → format block (live online, 09:00–17:00 CET/CEST, max 8, labs, materials, 30-day Q&A, recording policy from `policies.recording`) → `ScheduleTable courseSlug` → `PricingTiers compact` → trainer strip (photo + 3 proof numbers from `proof`) → related courses (same track, exclude self, `CourseCard`) → `FaqAccordion scope="course"` → `MctLeadForm` (prefilled course). Sticky `course` variant with `nextSession`.
- **MctBriefing**: hero (eyebrow "Executive briefing", h1 `t.briefing.title` EN "Three hours. One decision unblocked." / PL "Trzy godziny. Jedna decyzja odblokowana.", sub with price `formatPrice(pricing.briefing.flat[currency])` + "3h remote, up to 10 leaders, written summary in 48h", `CTAButton primary` → `setPrefill({tier:"briefing",intent:"briefing"})`) → three topic cards with outcomes (3 bullets) + 3h agenda (6 timed lines) — content:
  - A "Copilot ROI reality check" / PL "Copilot: ROI bez marketingu". Outcomes: know which workflows Copilot moves and which it does not; a licensing decision you can defend; a 90-day pilot design with metrics. Agenda: 0:00–0:30 what Copilot actually does across M365 (live, not slides) · 0:30–1:15 your five candidate workflows scored on time saved vs risk · 1:15–1:30 break · 1:30–2:15 licensing, data exposure, governance prerequisites (sensitivity labels, oversharing) · 2:15–2:45 pilot design: cohort, metrics, exit criteria · 2:45–3:00 decisions and owners.
  - B "Fabric: build vs buy for your data estate" / PL "Fabric: budować czy kupować". Outcomes: clear position on Fabric vs current stack (Synapse, Databricks, Snowflake, on-prem SQL); capacity and cost model; migration sequence. Agenda: current estate on one slide (yours) · Fabric architecture in 40 minutes · capacity model and F-SKU cost at your volumes · what to move first, what never to move · skills gap and training sequence · decisions.
  - C "AI governance for regulated organisations" / PL "Governance AI w organizacji regulowanej". Outcomes: governance posture that satisfies audit without freezing adoption; decision on data boundaries; responsible-AI checklist owned by named people. Agenda: threat model for generative AI in your context · Microsoft's controls (Purview, DLP, tenant grounding, agent governance) · policy skeleton · incident playbook · approval workflow for new agents · decisions.
  - "Bring your own question" line, same price.
  → `ProcessLanes` (briefing lane emphasised) → `FaqAccordion scope="briefing"` → `MctLeadForm` (briefing mode). Sticky `briefing`.
- **MctEnterprise**: hero (h1 EN "Custom programs for your stack, your rollout, your deadline." / PL "Programy pod Twój stack, Twoje wdrożenie, Twój termin."; sub EN "Not a public course with your logo on the slides. I start from your stack, your rollout date and the roles in the room, then assemble from official Microsoft courseware, my own courseware and your systems. Delivery is one cohort or twelve, remote or on-site, English or Polish. You get a program document before you get an invoice." / PL "To nie otwarty kurs z Twoim logo na slajdach. Zaczynam od Twojego stacku, terminu wdrożenia i ról w sali, potem składam program z oficjalnego courseware Microsoft, własnych materiałów i Twoich systemów. Jedna grupa albo dwanaście, zdalnie albo on-site, po polsku albo po angielsku. Dokument programu dostajesz przed fakturą."; `CTAButton primary` → `setPrefill({tier:"enterprise",intent:"scope-call"})`, secondary `href={CALENDAR_URL}` tracking calendar) → `TrustBand` → case-style proof cards (names only, no metrics): "NATO — custom training programs, written not read." · "US Army Europe / USARAF — week-long technical courses, Wiesbaden and Vicenza" with Blankenship + Buenavente quotes from `testimonials` · "Nordea, ING, DNB — data platform training for banking teams." · "Volvo, Scania, Volkswagen — manufacturing data teams." → procurement facts block (VAT/reverse charge, PO on invoice, NDA either side, vendor onboarding, payment terms, cancellation from `policies`) → private-run logic paragraph EN "Private runs are quoted per training day, not per head. For a full team that is usually the better deal, and I show you both numbers side by side." / PL equivalent → `WhyMe` → `ProcessLanes` → `FaqAccordion scope="enterprise"` → `MctLeadForm` (scope mode). Sticky `enterprise`.
- `App.tsx`: remove `const MCT = lazy(...)` and its route; add lazy imports for the 4 pages and routes:
  ```tsx
  <Route path="/mct" element={<MctHub locale="en" />} />
  <Route path="/mct/courses/:slug" element={<MctCourse locale="en" />} />
  <Route path="/mct/executive-briefing" element={<MctBriefing locale="en" />} />
  <Route path="/mct/enterprise" element={<MctEnterprise locale="en" />} />
  <Route path="/szkolenia" element={<MctHub locale="pl" />} />
  <Route path="/szkolenia/kursy/:slug" element={<MctCourse locale="pl" />} />
  <Route path="/szkolenia/briefing-dla-zarzadu" element={<MctBriefing locale="pl" />} />
  <Route path="/szkolenia/enterprise" element={<MctEnterprise locale="pl" />} />
  ```
- Delete `src/pages/MCT.tsx`, `src/components/mct/MCTSocialProof.tsx`; remove now-unused `@fontsource/jetbrains-mono` imports only if nothing else imports them (grep first; do not uninstall the package).
- `proof.spec.ts`: add `"20+ years"`, `"20+ Years"`, `"10,000+ Microsoft certifications"`, `"Engineers Trained"` to BANNED.

Verify: tsc, lint, `npm test`, `npm run build` (not prerender yet). Report bundle warnings if any.

Commit: `feat(mct): add bilingual hub, course, briefing and enterprise pages`.

## Task 13: SITE — SEO surface, redirects, marketing context

Repo: SITE. Files: `src/lib/seo-config.ts` (edit), `public/sitemap.xml` (edit), `public/llms.txt` (edit), `src/pages/Sitemap.tsx` (edit), `vercel.json` (edit), `src/config/redirects.ts` (edit), `.agents/product-marketing-context.md` (edit).

- `seo-config.ts`: replace the `/mct` entry (title "Microsoft Fabric, Copilot & Azure SQL training — Ludwik C. Siadlak, MCT", EN description, `type: 'course'`, `locale: 'en_US'`); add `/szkolenia` (PL), `/mct/executive-briefing`, `/szkolenia/briefing-dla-zarzadu`, `/mct/enterprise`, `/szkolenia/enterprise`. Follow the file's existing shape.
- `sitemap.xml`: add `xmlns:xhtml="http://www.w3.org/1999/xhtml"` on `<urlset>`; update `/mct` entry lastmod `2026-09-23` priority 0.8 and add 25 more URLs (all from `mctRoutes()`), each `<url>` carrying `<xhtml:link rel="alternate" hreflang="en" href=.../>`, `hreflang="pl"`, `hreflang="x-default"` (EN). Course pages priority 0.7.
- `llms.txt`: replace MCT bullet with a "Microsoft training (B2B, EN/PL)" section listing both hubs, briefing, enterprise, and 10 course URLs with one-line descriptions.
- `Sitemap.tsx`: add section "Szkolenia Microsoft (B2B)" linking hubs + courses (PL labels).
- `vercel.json` redirects (+ mirror in `src/config/redirects.ts` per its header comment): `/mct/courses`→`/mct`, `/szkolenia/kursy`→`/szkolenia`, `/training`→`/mct`, `/szkolenia-microsoft`→`/szkolenia` (permanent).
- `.agents/product-marketing-context.md`: update line ~31 pricing row and the "MCT — B2B Notes" section: tiers + prices, catalog (current codes), "19 lat" not "20+", proof rule (count not rating), CRM intake, routes.

Verify: `npm run build:prerender` locally (needs puppeteer; if it fails for environment reasons, run `npm run build` and report) → check `dist/mct/index.html`, `dist/szkolenia/kursy/dp-600/index.html` exist and contain `lang=` + `hreflang`. `npm test`.

Commit: `feat(mct): wire SEO config, sitemap, redirects and marketing notes for the mini-site`.
