# siadlak.com

> Kontekst dla sesji AI. Zweryfikowano na commicie `2171616`, 2026-07-29.

Polskojęzyczny SPA marketingowo-sprzedażowy (Vite + React 18 + TS), prerenderowany
Puppeteerem do statycznego HTML i wdrażany na Vercel. Bez backendu.

## Po co to istnieje

Strona pozyskuje leady i sprzedaje programy Ludwika C. Siadlaka: lejki webinarowe,
strony programów, podcasty, newsletter. Płatności i mailing są **poza tą aplikacją**
(EasyCart `buy.siadlak.com`, MailerLite), więc w repo nie ma bazy, API ani autoryzacji —
zamiast tego jest warstwa atrybucji, która przenosi parametry kampanii na zewnętrzne
checkouty. Instagram jest głównym źródłem ruchu, dlatego strony link-in-bio (`/ig`,
`/links`, `/reset`) i szybki HTML mają priorytet. Cała treść jest po polsku (istotne przy
łamaniu linii i twardych spacjach).

## Stack

- **Runtime:** typy Node 22 (`@types/node` ^22) / **Bun** na Vercel; `bun.lock` jest lockfile'em wdrożenia
- **Framework:** React 18.3, TypeScript 5.5, Vite 5.4 (`@vitejs/plugin-react-swc`)
- **Routing:** react-router-dom 6.26 (`BrowserRouter`, `lazy()` na poziomie tras)
- **UI:** własny design system w `src/design-system/` (primitywy Radix/shadcn + tokeny), Tailwind 3.4 przez preset
- **Stan / formularze:** @tanstack/react-query 5, react-hook-form + zod, react-helmet-async (meta per-page)
- **Storage:** brak. Persystencja tylko w `localStorage`/`sessionStorage` (atrybucja, eksperymenty, DTR, recovery)
- **Zewnętrzne:** GTM `GTM-5QCTH53T` (GA4, Meta Pixel, Clarity), Google Ads `AW-997103617`, CookieYes CMP, MailerLite (konto `484845`), EasyCart, `docs.siadlak.com` (regulaminy)
- **Narzędzia:** vitest 4, Storybook 8.6, tsup (build DS), puppeteer (prerender), sharp + vite-imagetools (obrazy)
- **Infra:** Vercel z GitHub `main`. `vercel.json`: `installCommand: bun install`, `buildCommand: bun run build`, rewrite SPA, 30 przekierowań brzegowych, cache headers

## Architektura

```
index.html          consent default DENIED → CookieYes (async) → GTM → MailerLite universal
   ↓
main.tsx            initAttribution() → hydrateRoot() jeśli #app ma dzieci, inaczej createRoot()
   ↓                ErrorBoundary + vite:preloadError → claimAutoReload()
App.tsx             HelmetProvider → QueryClient → ThemeProvider → Router
   ↓                ScrollToTop, GlobalWebinarBar, ExitIntentController, Toaster
pages/*             komponują sections/* + design-system/components/*
```

Maszyna lejków: `src/config/funnels/<slug>.ts` → `getFunnelPhase(config, now)` →
`useFunnelPhase` → strony `webinar/*` renderują fazę `upcoming | live | replay | expired`.
Daty i URL-e istnieją **tylko** w configu.

Atrybucja: parametry kampanii z URL wejścia → `localStorage` (last-touch + first-touch
~30 dni) → doklejane do linków checkoutu, ukrytych pól MailerLite i każdego eventu
`dataLayer`. `src/lib/analytics.ts` jest jedynym wejściem do `dataLayer`; GTM zamienia
eventy na tagi (spec: `docs/analytics/gtm-setup.md`).

## Struktura katalogów

```
src/
├── components/
│   ├── layout/       Layout, LandingLayout (bez chrome), Header, Footer, PromoBanner
│   ├── sections/     bloki stron (Hero, CTASection, TrustElements, ...)
│   ├── funnel/       countdown, CTA rejestracji, notka o wygaśnięciu
│   ├── forms/        LeadForm (first-party, jeszcze nieaktywny)
│   ├── conversion/ oto/ exit-intent/ proof/ analytics/ sales/ discovery/ mct/ podcast/
│   └── SEO.tsx       per-page Helmet; jedyne miejsce na OG/Twitter
├── config/
│   ├── funnels/      configi lejków + phase.ts/format.ts (czysta logika, testowane)
│   ├── proof.ts      kanoniczne liczby social proof
│   ├── mailerlite.ts mapowanie formularzy ML
│   └── redirects.ts  kliencki fallback dla przekierowań z vercel.json
├── design-system/    tokens.css, tailwind-preset.ts, components/ (+ .stories.tsx), dist/ (generowane)
├── lib/              analytics, attribution, dtr, experiments, env, recovery, seo-config, web-vitals
├── pages/            program/, webinar/, help/, archive/ (nieroutowane)
├── routes.mjs        lista tras do prerenderu (ESM, czytana też przez Node)
└── App.tsx           wszystkie trasy
scripts/prerender.mjs snapshot HTML przez Puppeteer na vite preview
docs/analytics/gtm-setup.md  spec kontenera GTM
.claude/skills/create-funnel/ skill scaffoldujący lejek
```

## Uruchomienie

```bash
# instalacja (lokalnie npm; Vercel używa bun)
npm install

# dev — port 8080
npm run dev

# testy (5 plików, 44 testy; czysta logika, środowisko node)
npm run test

# lint (0 errors, 9 warnings na tym commicie)
npm run lint

# typy — brak skryptu, uruchamiane przez project references
npx tsc -b

# build produkcyjny (to samo robi Vercel)
npm run build

# build + prerender do statycznego HTML (lokalnie, wymaga przeglądarki)
npx puppeteer browsers install chrome && npm run build:prerender

# design system
npm run storybook        # port 6006
npm run build:ds         # tsup → src/design-system/dist
```

## Konfiguracja

Brak zmiennych środowiskowych. `.env` jest **pusty i śledzony w gicie**; w kodzie
używane jest tylko `import.meta.env.DEV`. Wszystkie identyfikatory zewnętrzne są jawne
w kodzie (publiczne):

| Co | Gdzie |
|---|---|
| GTM, Google Ads, CookieYes, MailerLite universal | `index.html` |
| konto + formularze MailerLite | `src/config/mailerlite.ts` |
| tabela ID-ków analitycznych | `docs/analytics/gtm-setup.md` |
| przekierowania brzegowe, cache, rewrite SPA | `vercel.json` |
| trasy do prerenderu | `src/routes.mjs` |

Nie dodawaj sekretów do `.env` — jest w repozytorium.

## Konwencje

- **Commity:** Conventional Commits (`feat`, `fix`, `perf`, `chore`); bez wzmianek o narzędziach AI
- **Branche:** `main` jest wdrażany na Vercel; wcześniejsza praca CRO szła przez stackowane branche `feat/*`
- **Styl kodu:** ESLint 9 flat config (`eslint.config.js`); Prettier **nie jest zainstalowany**
- **Typy:** `strict` + `noUnusedLocals`/`noUnusedParameters` w `tsconfig.app.json`; `@typescript-eslint/no-unused-vars` jest wyłączony, więc nieużywany import przechodzi lint i wywala `tsc -b`
- **Import UI:** z `@/design-system/components/*` (80 miejsc w kodzie). `src/components/ui/` **nie istnieje**
- **Testy:** kolokowane `*.spec.ts` obok źródła, tylko czysta logika (brak jsdom w konfiguracji — nie ma testów komponentów)
- **Reguły designu i skróty QNEW/QPLAN/QCODE:** `CLAUDE.md` — nie powtarzaj ich tutaj

## Niezmienniki i pułapki

- **Prerender nie działa na Vercel.** `buildCommand` to `bun run build` (zwykły `vite build`). Statyczne snapshoty powstają tylko lokalnie przez `build:prerender`. `.puppeteerrc.cjs` ustawia `skipDownload`, więc lokalnie trzeba raz zainstalować Chrome.
- **`main.tsx` hydratuje, gdy `#app` ma dzieci.** Pierwszy render klienta musi zgadzać się z prerenderowanym HTML. Dlatego boty/prerender dostają zawsze wariant kontrolny (`isPrerender()` w `src/lib/env.ts`) — każde nowe miejsce z trackingiem lub losowaniem musi to sprawdzać.
- **Dwa lockfile'e:** `bun.lock` (używany przez Vercel) i `package-lock.json`. Zmiana zależności tylko npm-em nie dotrze na produkcję — aktualizuj `bun.lock`.
- **Przekierowania są w dwóch miejscach:** `vercel.json` (autorytatywne 308 na brzegu) i `src/config/redirects.ts` (fallback dla nawigacji `<Link>`). Trzymaj zsynchronizowane.
- **`components.json` kłamie:** alias `ui` wskazuje `@/components/ui`, którego nie ma. `npx shadcn add` utworzyłby drugi, równoległy zestaw primitywów. Nowe primitywy dodawaj w `src/design-system/components/` i eksportuj w `src/design-system/index.ts`.
- **Kolejność skryptów w `index.html` jest krytyczna:** Consent Mode v2 z domyślnym `denied` musi być przed jakimkolwiek tagiem Google, a CookieYes musi zostać `async` (wersja synchroniczna blokowała pierwsze malowanie na produkcji).
- **Daty i URL-e lejków tylko w `src/config/funnels/<slug>.ts`.** Nowy lejek scaffolduj skillem `create-funnel`; ISO musi mieć poprawne przesunięcie Europe/Warsaw (+01:00 zima / +02:00 lato).
- **DTR renderuje wyłącznie whitelistowane klucze wariantów** (`utm_term`/`utm_content` → `variants`). Nigdy nie renderuj surowej wartości parametru URL.
- **Liczby social proof tylko z `src/config/proof.ts`.**
- **Nowe strony typu landing dopisz do `LANDING_ROUTE_PREFIXES`** (`src/lib/landing-pages.ts`), inaczej dostaną globalny header/footer, pasek webinarowy i exit-intent.
- **Nowa trasa = trzy miejsca:** `src/App.tsx` (route), `src/routes.mjs` (jeśli ma być prerenderowana), `src/lib/seo-config.ts` (meta). OG/Twitter tylko przez `src/components/SEO.tsx` — w `index.html` zostają wyłącznie globalne tagi niezarządzane przez Helmet.
- **`no-irregular-whitespace` jest błędem, ale z `skipJSXText: true`** — polska treść używa U+00A0 celowo, żeby jednoliterowe wyrazy nie zostawały na końcu linii.
- **Generowane, nie edytuj:** `src/design-system/dist/` (tsup), `ds-bundle/`, `storybook-static/`, `dist/`.
- **`src/pages/archive/` nie jest routowane** — martwe strony trzymane na potrzeby treści.

## Stan projektu

- **Działa:** wszystkie trasy produkcyjne, maszyna lejków (3 configi: `meski-kompas`, `kod-kapitana`, `depresja`), Consent Mode v2 + bridge CookieYes→dataLayer, atrybucja UTM, DTR, eksperymenty A/B, exit-intent, code-splitting tras, ErrorBoundary + auto-reload po deployu, self-hostowane fonty, Storybook DS.
- **W budowie:** aktywacja `LeadForm` (`ML_FORMS[*].subscribeId` są puste — do tego czasu używaj `MailerLiteEmbed`), właściwość GA4 (w `docs/analytics/gtm-setup.md` wciąż placeholder `G-XXXXXXXX`), przeniesienie Google Ads z inline gtag do GTM, powrót prerenderu do builda Vercel.
- **Znany błąd typów:** `npx tsc -b` kończy się jednym `TS6133` — nieużywany import `Link` w `src/components/conversion/StickyCtaBar.tsx:2`. Lint tego nie łapie (reguła wyłączona).
- **Świadomie pominięte:** backend/baza/auth (płatności i mailing są zewnętrzne), CI (brak `.github/`), Prettier i Turborepo (skrót QCODE w `CLAUDE.md` odwołuje się do `prettier` i `turbo typecheck lint` — żadne nie jest zainstalowane w tym repo).

## Czego nie robić

- Nie uruchamiaj `npx shadcn add` i nie twórz `src/components/ui/` — primitywy żyją w design systemie.
- Nie uruchamiaj `prettier` ani `turbo typecheck lint`. Bramka jakości tutaj to `npm run lint`, `npx tsc -b`, `npm run test`.
- Nie wpisuj na sztywno dat, cen ani statystyk w JSX — idą z `src/config/`.
- Nie usuwaj komentarza-ostrzeżenia przy skrypcie MailerLite Universal w `index.html`.
- Nie dodawaj kolejnych tagów marketingowych inline w `index.html` — nowe tagi idą do GTM.
- Nie licz na to, że HTML na produkcji jest prerenderowany — po deployu na Vercel jest to czysty SPA shell.

## Do potwierdzenia

- [ ] `.env` jest pusty i commitowany — zostawiamy jako artefakt czy usunąć z repo?
- [ ] `package-lock.json` — utrzymywać oba lockfile'e, czy przejść w pełni na Bun?
- [ ] `src/pages/archive/` — zostaje jako archiwum treści, czy do usunięcia?
- [ ] Prerender na Vercel: wrócić do `build:prerender` w `buildCommand`, czy zrobić z tego osobny krok?
- [ ] Pliki w katalogu głównym (`BATCH-NAGRANIOWY.md`, `PLAN-30K.md`, `MAIL-IG-RESET.md`, `medytacje.txt`, audyty `*.html`, `bpe.png`) — przenieść do `docs/`?
