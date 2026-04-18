
User points out that the proposed `public/llms.txt` plan was missing some pages. Let me audit `src/routes.ts` against my proposed file to make sure I include everything relevant.

Missing/uncovered from my draft:
- `/program/ttt-ai` (Train the Trainer AI) — yes, was in draft but let me confirm
- `/mentoring` — MISSING from draft
- `/wyzwanie` — 4-day challenge, missing
- `/program/7-technik` (Siedem Technik lead magnet) — missing
- `/reset` — Open Loops quiz, missing  
- `/links` — bio links page, low priority (Optional)
- `/mct` — was in draft
- `/słownik` — was in Optional
- `/wywiady` — was in draft

Will revise the plan to include all real pages from `src/routes.ts` + sitemap.

## Plan: Add `llms.txt` for AI Crawlers

### Files
1. **Create** `public/llms.txt`
2. **Edit** `public/robots.txt` — add `Llms:` directive

### `public/llms.txt` structure (complete page coverage)

```text
# Siadlak.com
> Ludwik C. Siadlak — Diamentowy Umysł, Life OS, Aplikacje Mentalne. 
> Mentoring 1:1, programy rozwojowe i podcasty dla osób ambitnych po 30-tce.

Krótki opis: kim jest Ludwik (MCT, US Army, 20+ lat life hackingu), 
filozofia Diamentowego Umysłu, archetypy Wojownik/Poszukiwacz, voice: Diplomat.

## Główne strony
- /                — strona główna (Diamentowy Umysł, mapa ekosystemu)
- /about           — historia osobista, anchor: stacja metra 2014
- /discovery       — bezpłatna 30-min Sesja Discovery (diagnoza)
- /start           — hub nawigacyjny ekosystemu
- /testimonials    — opinie klientów
- /newsletter      — cotygodniowe listy (intymna przystań)
- /contact         — kontakt

## Mentoring 1:1 (high-ticket)
- /mentoring                          — przegląd mentoringu 1:1
- /program/lifeos-system-upgrade      — Life OS: System Upgrade (flagship 8 tyg.)
- /program/ttt-ai                     — Train The Trainer: AI (8 tyg., 1:1, dla ekspertów AI)

## Programy (Aplikacje Mentalne)
- /program                       — hub programów (decision tree)
- /program/produktywnosc         — Hakowanie Produktywności
- /program/odpornosc             — Silna Głowa (firewall mentalny)
- /program/uwaznosc              — Uważne Życie (mindfulness dla ADHD)
- /program/meskosc               — Męski Kompas (mężczyźni 30+)
- /program/7-technik             — 7 Technik (lead magnet)

## Podcasty i media
- /podcast/life-hacking          — Life Hacking Podcast
- /wywiady                       — rozmowy z podcasterami (2018–2025)
- /mct                           — MCT portfolio (English)

## Wydarzenia
- /webinar                       — Kod Kapitana (uważność, 90 min)
- /webinar/meski-kompas          — webinar Męski Kompas
- /wyzwanie                      — 4-dniowe wyzwanie

## Społeczność
- /siadlakvip                    — SIADLAK.VIP (Telegram parasol)

## Optional
- /slownik                       — Słownik Diamentowego Umysłu
- /reset                         — quiz Open Loops (10 pytań)
- /links                         — bio linki (Instagram)
- /sitemap                       — mapa strony
- /help                          — centrum pomocy
- /legal/privacy, /legal/terms   — dokumenty prawne
```

(Each entry will get a 1-line Polish description in actual file; abbreviated above.)

### `public/robots.txt` change
Append before `Sitemap:` line:
```
Llms: https://siadlak.com/llms.txt
```

### Notes
- All routes verified against `src/routes.ts` and `public/sitemap.xml`.
- `/mentoring` and `/program/ttt-ai` now present.
- Polish descriptions, literal characters (ś, ł, ą).
- No build/SEO/route changes — pure static files.
