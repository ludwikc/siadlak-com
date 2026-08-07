# Spec: Automatyzacja follow-up po rezerwacji Discovery Call

- **Data:** 2026-08-07
- **Status:** zatwierdzony (brainstorming z Ludwikiem)
- **Zakres:** n8n workflow (poza tym repo) + grupa/automatyzacja MailerLite; zero zmian w kodzie siadlak.com

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

## Decyzje (zamknięte podczas brainstormingu)

| Decyzja | Wybór | Powód |
|---|---|---|
| Mechanizm triggera | n8n `Google Calendar Trigger`, polling co 5 min | Wbudowany dedup po event ID, zero infrastruktury. Push (watch + webhook) wygasa co ~7 dni — złożoność bez zysku przy follow-upie niewrażliwym na 5 min opóźnienia |
| Gdzie żyje mail | Automatyzacja MailerLite (trigger: dołączenie do grupy); n8n robi tylko upsert + przypisanie do grupy | MailerLite nie ma czystego transactional API; treść edytowalna w UI; statystyki open/click za darmo |
| Projekt Todoist | Istniejący **CRM** | Wybór Ludwika |
| Reschedule/cancel | v1: tylko powiadomienie Slack, obsługa ręczna | Wybór Ludwika; pełna automatyzacja w v2 |
| Slack | Od v1, kanał `C08HCGL5G0M` | Koszt jednego node'a |
| Kalendarz | Istniejący główny `ludwikc@siadlak.com` | Tam zapisuje appointment schedule; zmiana mechanizmu rezerwacji poza zakresem |

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
   ├─▶ Todoist: task w CRM                  └─ nie → Slack "🔁 ZMIANA"
   └─▶ Slack: "Nowa rezerwacja"

   [Error Handler workflow] — każdy fail głównego workflow → alert Slack
```

Dwa workflow w n8n:

1. **`Discovery Call Follow-up`** — główny (oba triggery + obie ścieżki)
2. **`Discovery Error Handler`** — ustawiony jako error workflow głównego; wysyła na Slack: nazwę workflow, node, komunikat błędu

### Filtr rezerwacji (krytyczny)

Kalendarz główny zawiera też zwykłe spotkania z gośćmi — sam warunek "ma attendee" wysłałby follow-up przypadkowym osobom. Dyskryminator v1: **tytuł eventu pasuje do wzorca appointment schedule ORAZ attendee ≠ właściciel kalendarza**. Dokładny wzorzec summary/description potwierdza testowa rezerwacja — to pierwszy krok implementacji (Google formatuje eventy z appointment schedule według własnego szablonu, który trzeba zobaczyć na żywym evencie).

### Ścieżka created

1. **Ekstrakcja danych gościa:** email = attendee ≠ self; imię = `displayName` attendee → fallback: parsowanie description (odpowiedzi z formularza rezerwacji) → fallback: summary.
2. **MailerLite:** upsert subskrybenta (email, imię) → przypisanie do grupy `Discovery — Booked`. Automatyzacja ML (trigger: dołączenie do grupy) wysyła mail przygotowujący. Google wysyła własne potwierdzenie rezerwacji — nasz mail to warstwa "przygotuj się do rozmowy", nie duplikat potwierdzenia. Treść: draft głosem Ludwika, akceptacja w UI MailerLite przed aktywacją.
3. **Todoist:** task w projekcie CRM — content: `Przygotuj Discovery Call z {Imię}`, due = start eventu, priority p2, description: email gościa, link do eventu, **event ID** (fundament pod v2).
4. **Slack:** `Nowa rezerwacja: {Imię} ({email}) — {data}` + link do eventu, kanał `C08HCGL5G0M`.

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

- CRM pipeline Lead → Alumni (jest tylko grupa ML jako placeholder)
- Przypomnienia 24h/1h przed sesją
- Formularz kwalifikujący / brief przed callem
- Zmiana mechanizmu rezerwacji (zostaje Google appointment schedule)
- Automatyczna obsługa reschedule/cancel w Todoist/MailerLite

## Prerequisites (Ludwik, przed aktywacją)

1. Credential **Google Calendar OAuth2** w n8n (Calendar API w Google Cloud + OAuth flow w n8n UI).
2. Credential **MailerLite API** w n8n (token z MailerLite → Integrations → API).
3. Akceptacja treści maila follow-up w MailerLite.

## Plan testów (checklista Ludwika po wdrożeniu)

1. Testowa rezerwacja przez siadlak.com/discovery (email spoza domeny, np. fundacja@hackerzy.pl) → przychodzi mail follow-up, task w CRM z due = termin calla, powiadomienie Slack.
2. Reschedule testowej rezerwacji → Slack `🔁 ZMIANA`.
3. Cancel → Slack `❌ ODWOŁANE`.
4. Zwykły event z gościem dodany ręcznie do kalendarza → **nic się nie dzieje** (filtr działa).
5. Obserwacja realnych rezerwacji 1–2 tygodnie; error workflow łapie awarie.

## Dokumentacja po wdrożeniu

Krótki runbook obok tego specu: co robi workflow, gdzie mieszkają dane (n8n/ML/Todoist/Slack), jak debugować (n8n → Executions).

## v2 (kandydaci, świadomie odłożone)

Automatyczna obsługa reschedule/cancel (aktualizacja/zamknięcie zadania Todoist po event ID, mail przy odwołaniu), pełny pipeline CRM, przypomnienia przed sesją, formularz kwalifikujący z briefem.
