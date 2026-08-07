# Spec: Automatyzacja follow-up po rezerwacji Discovery Call

- **Data:** 2026-08-07
- **Status:** zatwierdzony (brainstorming z Ludwikiem)
- **Zakres:** n8n workflow (poza tym repo) + grupa/automatyzacja MailerLite + edge function `crm-booking` w repo `siadlak-portal` (wpis do CRM); zero zmian w kodzie siadlak.com
- **Aktualizacja 2026-08-07:** dodana integracja z CRM portalu (`/Users/ludwikc/git/siadlak-portal`) — realizuje odłożoną „Fazę 9" z `siadlak-portal/docs/superpowers/specs/2026-07-17-crm-phase2-plan.md` (booking → auto-deal na etapie Rozmowa)

## Cel

Każda rezerwacja discovery call (siadlak.com/discovery → Google appointment schedule) automatycznie:

1. wysyła mail przygotowujący do rozmowy (MailerLite),
2. tworzy zadanie w Todoist (projekt CRM),
3. powiadamia na Slacku.

Żadna rezerwacja nie ginie po cichu — błędy workflow alarmują na Slacku.

## Kontekst potwierdzony (2026-08-07)

| Element | Wartość |
|---|---|
| CTA rezerwacji | `src/components/discovery/DiscoveryAvailabilityCheck.tsx:17` → `https://calendar.app.google/Xj5U39t9HaVNqS1HA` |
| Appointment schedule | `https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1LW9thGbkrCT1Gm1BohgCD-zaCfgmf6QyKibe-fnnIZVHhxXs3cDk0m8JkybKyZ-hm0T8qUD1I` |
| Kalendarz docelowy eventów | `ludwikc@siadlak.com` (główny) |
| n8n | `https://ula285-20285.wykr.es` — API zweryfikowane, 12 workflow. Klucz API poza repo (do rotacji po wdrożeniu) |
| Todoist | projekt **CRM**, id `6P79PcCFvr79qX2X`; credential w n8n istnieje (`Todoist account`, id `8oqfcW1IjExZk6rn`) |
| Slack | kanał `C08HCGL5G0M` (siadlak.slack.com); credential w n8n istnieje (`Slack account`, id `KnH3d0aP27gBB42F`) |
| Google Calendar credential w n8n | **BRAK** — do utworzenia (typ `googleCalendarOAuth2Api`; istnieje Google Drive OAuth, więc client ID/secret z tego samego projektu Google Cloud można użyć ponownie po włączeniu Calendar API) |
| MailerLite credential w n8n | **BRAK** — do utworzenia (API token z MailerLite → Integrations) |
| CRM portalu | Supabase `taswmdahpcubiyrgsjki` (`https://taswmdahpcubiyrgsjki.supabase.co`); tabele `crm_contacts` (email UNIQUE, wymusza lowercase+trim) i `crm_deals` (stage: `lead/rozmowa/oferta/won/lost`) |
| Konwencja discovery w CRM | preset UI `DISCOVERY_PRESET` (`siadlak-portal/src/components/admin/crm/ContactDeals.tsx:12`): title `Life OS — Discovery`, product `life_os`, stage `rozmowa`, next_action `Rozmowa Discovery`; wartość domyślna Life OS: 1 600 000 gr |
| Wejście do CRM z zewnątrz | brak publicznych INSERT-ów (anon revoked, RLS admin-only); wzorzec repo: edge function z nagłówkiem sekretu (`crm-sync`/`crm-writeback`, `verify_jwt=false`) + service-role w środku |

## Decyzje (zamknięte podczas brainstormingu)

| Decyzja | Wybór | Powód |
|---|---|---|
| Mechanizm triggera | n8n `Google Calendar Trigger`, polling co 5 min | Wbudowany dedup po event ID, zero infrastruktury. Push (watch + webhook) wygasa co ~7 dni — złożoność bez zysku przy follow-upie niewrażliwym na 5 min opóźnienia |
| Gdzie żyje mail | Automatyzacja MailerLite (trigger: dołączenie do grupy); n8n robi tylko upsert + przypisanie do grupy | MailerLite nie ma czystego transactional API; treść edytowalna w UI; statystyki open/click za darmo |
| Projekt Todoist | Istniejący **CRM** | Wybór Ludwika |
| Reschedule/cancel | v1: tylko powiadomienie Slack, obsługa ręczna | Wybór Ludwika; pełna automatyzacja w v2 |
| Slack | Od v1, kanał `C08HCGL5G0M` | Koszt jednego node'a |
| Kalendarz | Istniejący główny `ludwikc@siadlak.com` | Tam zapisuje appointment schedule; zmiana mechanizmu rezerwacji poza zakresem |
| Wpis do CRM | Nowa edge function `crm-booking` w siadlak-portal, auth: nagłówek `x-booking-secret` = `CRM_BOOKING_SECRET` (nowy sekret — nie ruszamy `CRM_SYNC_SECRET`, zero blast radius) | Idiomatyczny wzorzec repo; service-role key nie opuszcza Supabase; logika dedup dealt w portalu, nie w n8n |
| Kształt wpisu CRM | upsert `crm_contacts` po emailu → jeden otwarty deal discovery per kontakt: istnieje → aktualizacja `next_action_date`, brak → insert wg `DISCOVERY_PRESET` + `value_cents: 1600000`, `next_action_date` = data calla | Zgodność z konwencją UI portalu i Fazą 9; `crm_deals` nie ma unique constraintu — dedup musi być w funkcji |

## Architektura

```
[Google Calendar: ludwikc@siadlak.com]
        │  (polling co 5 min)
        ├─ Trigger: Event Created ──┐
        └─ Trigger: Event Updated ──┤
                                    ▼
                     [Filtr: rezerwacja discovery?]
                     - summary pasuje do wzorca appointment schedule
                     - istnieje attendee ≠ ludwikc@siadlak.com
                                    │
              ┌─────────── created ─┴─ updated ───────────┐
              ▼                                           ▼
   [Ekstrakcja danych gościa]              [Skip echo utworzenia:
              │                             updated − created < 60 s]
   ├─▶ MailerLite: upsert + grupa                         │
   │   "Discovery — Booked"                 status == cancelled?
   │   (automatyzacja ML wysyła mail)       ├─ tak → Slack "❌ ODWOŁANE"
   ├─▶ Todoist: task w projekcie CRM        └─ nie → Slack "🔁 ZMIANA"
   ├─▶ Slack: "Nowa rezerwacja"
   └─▶ HTTP POST → edge function crm-booking (siadlak-portal / Supabase)
       └─ upsert crm_contacts + deal "Life OS — Discovery" @ stage Rozmowa

   [Error Handler workflow] — każdy fail głównego workflow → alert Slack
```

Dwa workflow w n8n:

1. **`Discovery Call Follow-up`** — główny (oba triggery + obie ścieżki)
2. **`Discovery Error Handler`** — ustawiony jako error workflow głównego; wysyła na Slack: nazwę workflow, node, komunikat błędu

### Filtr rezerwacji (krytyczny)

Kalendarz główny zawiera też zwykłe spotkania. Testowa rezerwacja (2026-08-07) pokazała, że **Google appointment schedule NIE dodaje rezerwującego jako attendee** — event ma tylko organizatora, a dane gościa żyją wyłącznie w `description` (blok „Booked by": imię, email + odpowiedzi formularza). Dyskryminator v1 (potwierdzony na żywym evencie): **`summary` zawiera `Sesja Discovery` ORAZ `description` zawiera `Booked by`**. Zwykłe spotkania (nawet z gośćmi) nie mają tej pary markerów.

### Ścieżka created

1. **Ekstrakcja danych gościa** (z `description`, bo gość nie jest attendee): strip HTML → blok „Booked by": linia 1 = imię i nazwisko, linia 2 = email; odpowiedź na pytanie formularza „Z jakim tematem przychodzisz?" → pole `topic` (trafia do Todoist i Slacka).
2. **MailerLite:** upsert subskrybenta (email, imię) → przypisanie do grupy `Discovery — Booked`. Automatyzacja ML (trigger: dołączenie do grupy) wysyła mail przygotowujący. Google wysyła własne potwierdzenie rezerwacji — nasz mail to warstwa "przygotuj się do rozmowy", nie duplikat potwierdzenia. Treść: draft głosem Ludwika, akceptacja w UI MailerLite przed aktywacją.
3. **Todoist:** task w projekcie CRM — content: `Przygotuj Discovery Call z {Imię}`, due = start eventu, priority p2, description: email gościa, link do eventu, **event ID** (fundament pod v2).
4. **Slack:** `Nowa rezerwacja: {Imię} ({email}) — {data}` + link do eventu, kanał `C08HCGL5G0M`.
5. **CRM (siadlak-portal):** HTTP POST `https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking`, nagłówek `x-booking-secret`, body `{email, name, start, eventId, htmlLink}`. Funkcja (service-role): normalizuje email (lowercase+trim — CHECK na tabeli), upsert `crm_contacts` (name tylko gdy kontakt nowy lub bez name), potem deal: istniejący otwarty deal discovery kontaktu (`product=life_os`, stage w `lead/rozmowa/oferta`, title `Life OS — Discovery`) → aktualizuje `next_action_date`; brak → insert `{title: "Life OS — Discovery", product: "life_os", stage: "rozmowa", value_cents: 1600000, next_action: "Rozmowa Discovery", next_action_date: data calla}`. Nie dotyka `in_mailerlite`/`segments`/`lead_score` (własność nocnego `crm-sync`).

### Ścieżka updated (v1 lite)

- Skip echa utworzenia: `updated − created < 60 s` → nic nie rób.
- `status == cancelled` → Slack `❌ ODWOŁANE: {Imię} — {data}`.
- Inaczej → Slack `🔁 ZMIANA: {Imię} — {nowa data}`.
- Zero akcji MailerLite/Todoist — obsługa ręczna (decyzja v1).

### Dedup / idempotencja

- **created:** polling trigger n8n deduplikuje po event ID.
- **MailerLite:** upsert + przypisanie do grupy są idempotentne; automatyzacja group-join nie odpala się ponownie dla istniejącego członka grupy.
- **Todoist:** v1 polega na dedup triggera; v2 doda wyszukanie po event ID przed utworzeniem.

## Poza zakresem v1

- Automatyczne przejścia etapów CRM (Rozmowa → Oferta → Won/Lost — ręcznie w portalu) i `crm_tasks` (przygotowanie żyje w Todoist, bez duplikatu)
- Zmiany schematu DB portalu (dedup po `eventId` wymagałby kolumny — v1 dedupuje heurystyką „jeden otwarty deal discovery per kontakt")
- Przypomnienia 24h/1h przed sesją
- Formularz kwalifikujący / brief przed callem
- Zmiana mechanizmu rezerwacji (zostaje Google appointment schedule)
- Automatyczna obsługa reschedule/cancel w Todoist/MailerLite

## Prerequisites (Ludwik, przed aktywacją)

1. Credential **Google Calendar OAuth2** w n8n (Calendar API w Google Cloud + OAuth flow w n8n UI).
2. Credential **MailerLite API** w n8n (token z MailerLite → Integrations → API).
3. Akceptacja treści maila follow-up w MailerLite.
4. Deploy edge function `crm-booking` do Supabase (CLI `supabase functions deploy` z repo siadlak-portal — jeśli CLI niezalogowane, jedna komenda po stronie Ludwika) + sekret `CRM_BOOKING_SECRET` (generowany, ustawiany przez `supabase secrets set`).

## Plan testów (checklista Ludwika po wdrożeniu)

1. Testowa rezerwacja przez siadlak.com/discovery (email spoza domeny, np. fundacja@hackerzy.pl) → przychodzi mail follow-up, task w Todoist (projekt CRM) z due = termin calla, powiadomienie Slack, a w portalu (`/admin/contacts`, `/admin/deals`) kontakt + deal „Life OS — Discovery" na etapie Rozmowa z `next_action_date` = termin calla. Ponowna rezerwacja tym samym emailem → deal nadal jeden (zaktualizowana data), nie duplikat.
2. Reschedule testowej rezerwacji → Slack `🔁 ZMIANA`.
3. Cancel → Slack `❌ ODWOŁANE`.
4. Zwykły event z gościem dodany ręcznie do kalendarza → **nic się nie dzieje** (filtr działa).
5. Obserwacja realnych rezerwacji 1–2 tygodnie; error workflow łapie awarie.

## Dokumentacja po wdrożeniu

Krótki runbook obok tego specu: co robi workflow, gdzie mieszkają dane (n8n/ML/Todoist/Slack), jak debugować (n8n → Executions).

## v2 (kandydaci, świadomie odłożone)

Automatyczna obsługa reschedule/cancel (aktualizacja/zamknięcie zadania Todoist po event ID, mail przy odwołaniu), pełny pipeline CRM, przypomnienia przed sesją, formularz kwalifikujący z briefem.
