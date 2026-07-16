---
name: create-funnel
description: Scaffold a complete webinar/event funnel (config, pages, routes, SEO, prerender) for siadlak.com. Use when the owner says "create funnel for X", "nowy webinar", "new webinar funnel", "stwórz lejek", or asks to set up pages for a new online event.
---

# Create Funnel

Scaffolds every stage of a webinar/event funnel from a single config file.
The system guarantees pages never rot: every stage derives its state
(upcoming → live → replay → expired) from `src/config/funnels/<slug>.ts`
at render time via `useFunnelPhase`. Dates and URLs live ONLY in the config.

## Inputs — gather before writing anything (ask for missing ones)

| Input | Notes |
|---|---|
| slug | kebab-case, Polish, no year (e.g. `kod-kapitana`) |
| name | display name shown in promo bars and headers |
| eventStart | date + time; assume Europe/Warsaw and write ISO **with the correct UTC offset for that date** (+01:00 winter / +02:00 summer), e.g. `2026-09-15T19:00:00+02:00` |
| eventDurationMinutes | default 90 |
| format | `webinar` \| `warsztat` \| `spotkanie` |
| registration | EasyCart checkout URL (`https://buy.siadlak.com/checkout/...`) OR MailerLite form ID |
| replay | window in hours (default 48); `none` for sensitive events (see depresja); recording URL can be added to the config later |
| oto | does the thank-you page continue to `/oto`? (default yes for sales-adjacent events, no for charity/awareness events) |
| promoBar | copy + CTA label, or `none` — presence of the field enables the sitewide bars |
| seo | title, description, keywords |

## Steps

1. Create `src/config/funnels/<slug>.ts` from `templates/config.ts.template`.
2. Register it in `src/config/funnels/index.ts` (import + entry in the
   `funnels` array, keep the array sorted by eventStart).
3. Create pages from templates into `src/pages/webinar/<slug>/`:
   - `Landing.tsx` (from `Landing.tsx.template`)
   - `Dziekuje.tsx` (from `Dziekuje.tsx.template`)
   - `Live.tsx` (from `Live.tsx.template`)
   - `Replay.tsx` (from `Replay.tsx.template`) — skip when replay is `none`
4. Add routes to `src/App.tsx` next to the existing `/webinar/*` block:
   `/webinar/<slug>`, `/webinar/<slug>/dziekuje`, `/webinar/<slug>/live`,
   and `/webinar/<slug>/replay` (if replay enabled).
5. Add a `RouteConfig` entry for `/webinar/<slug>` to `src/lib/seo-config.ts`
   using the config's seo fields. Add `noindex: true` entries for
   dziekuje/live/replay subroutes.
6. Append `/webinar/<slug>` to the `routes` array in `scripts/prerender.mjs`
   and to `src/routes.ts` (subroutes go to `dynamicRoutes`).
7. Optional: add a shortcut redirect (e.g. `"/<slug>": "/webinar/<slug>"`)
   to `src/config/redirects.ts` if the owner wants a short URL for ads/bio.

## Rules

- Dates, checkout URLs, and replay URLs live ONLY in the config file —
  NEVER hardcode them in page components.
- Pages read state via `useFunnelPhase(funnel)` and render CTAs through
  `FunnelRegistrationCTA` / `FunnelCountdown` / `FunnelExpiredNotice`
  (`src/components/funnel/`). Never render a disabled buy button or a
  countdown frozen at zero.
- The Landing template is a minimal styled skeleton — the owner restyles
  it in lovable.dev afterwards. Keep the phase-aware components intact
  when restyling.
- Dziekuje: when `oto: true`, the primary CTA continues to `/oto`
  (the OTO cookie/timer flow starts on arrival); otherwise to `/discovery`.
- Repo conventions: CTAButton for buttons, design tokens (no raw hex),
  no comments, `type` not `interface`, `import type` for type-only imports.
- The sitewide promo bars pick up the funnel automatically once it is the
  next upcoming funnel with a `promoBar` field — no extra wiring.

## Verify

1. `npm run test && npm run build` — both green.
2. Load `/webinar/<slug>` in `npm run dev`: countdown shows the correct
   time to the event; the registration CTA points at the right checkout.
3. Confirm the promo bars display this funnel (if promoBar set and it is
   the soonest upcoming event).
4. Temporarily set eventStart to 2 minutes from now and watch the landing
   switch upcoming → live without a reload; restore the real date after.
