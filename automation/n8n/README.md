# Discovery Call Follow-up — runbook

## Co robi

Rezerwacja przez siadlak.com/discovery (Google appointment schedule, kalendarz `ludwikc@siadlak.com`) trafia do n8n, workflow **„Discovery Call Follow-up"** (`9ZEgF3LPgUHbK4Pc`, 15 node'ów, aktywny, polling co 5 min).

Workflow ma **trzy triggery** (wszystkie Google Calendar, `eventCreated` / `eventUpdated` / `eventCancelled`):
- **New Booking** — nowa rezerwacja
- **Updated Booking** — reschedule albo odwołanie „soft" (event nadal istnieje, `status: cancelled`)
- **Cancelled Booking** — odwołanie „hard" (Google appointment schedule zwykle **usuwa** event przy odwołaniu; ten trigger łapie zdarzenie niewidoczne dla `eventUpdated`)

Filtr (node **Is Discovery Booking?** — trzy kopie, po jednej na trigger): `summary` zawiera „Sesja Discovery" ORAZ `description` zawiera „Booked by". Gość **nie jest** attendee eventu — dane (imię, email, temat z pytania formularza „Z jakim tematem przychodzisz?") są parsowane z `description` w node **Extract Guest**.

### Ścieżka „nowa rezerwacja"

Extract Guest rozgałęzia się na 4 akcje. Wykonują się **sekwencyjnie w ramach jednej egzekucji** (w tej kolejności) — ważne dla partial failure, patrz „Znane ograniczenia":

1. **MailerLite Upsert** — upsert subskrybenta + dopisanie do grupy „Discovery — Booked" (`195147034085296057`). Group-join odpala automatyzację ML **„Discovery Call — mail przygotowujący"** (`195172847812871467`, ENABLED), która wysyła mail przygotowujący.
   ⚠️ Automatyzacja group-join odpala się **raz per subskrybent** — ponowne dołączenie tej samej osoby do grupy (np. druga rezerwacja) NIE wysyła maila drugi raz.
2. **Create Todoist Task** — `POST https://api.todoist.com/api/v1/tasks` przez node HTTP Request (natywny node Todoist w n8n jest martwy — woła wyłączone API, HTTP 410 Gone). Credential „Todoist Bearer" (`RdHRFGa0aOV0YGA8`). Projekt CRM `6P79PcCFvr79qX2X`, `due` = termin rezerwacji (konwersja do UTC ISO w expression), priorytet API `3` (= UI „Priorytet 2").
3. **Slack: New Booking** (`C08HCGL5G0M`, #sales-deals) — wiadomość 📅 z imieniem, mailem, terminem i tematem.
4. **CRM: Discovery Deal** — `POST https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking` (nagłówek `x-booking-secret`, credential „CRM Booking Secret" `qDLoAAKeIzPr4u80`) → edge function w repo siadlak-portal upsertuje kontakt i deal „Life OS — Discovery" @ etap „Rozmowa". Dedup: jeden otwarty deal per kontakt — druga rezerwacja tej samej osoby aktualizuje datę na istniejącym deal'u (`created:false`), nie tworzy duplikatu.

### Ścieżka „zmiana / odwołanie"

- **Reschedule** (trigger Updated Booking, event nadal aktywny) → filtr → **Not Creation Echo?** (pomija echo update <60s po created, żeby nie zdublować powiadomienia o nowej rezerwacji jako „zmiana") → **Cancelled?** = nie → **Slack: Rescheduled** — 🔁 ZMIANA z nowym terminem.
- **Cancel przez soft-update** (Updated Booking, `status: cancelled`, event bez hard-delete) → **Slack: Cancelled** — ❌ ODWOŁANE.
- **Cancel przez hard-delete** (trigger Cancelled Booking) → filtr → **Slack: Cancelled** — ❌ ODWOŁANE. To jest realna ścieżka odwołań z appointment schedule.

Obsługa reschedule/cancel w MailerLite / Todoist / CRM jest **RĘCZNA** (decyzja v1) — Slack tylko powiadamia, człowiek aktualizuje/zamyka zadanie i ewentualnie deal w CRM.

### Błędy

Workflow **„Discovery Error Handler"** (`y7NbiALAXFFBjvA9`, Error Trigger → Slack Alert) jest podłączony jako `errorWorkflow` głównego workflow. Każdy nieobsłużony błąd w „Discovery Call Follow-up" → 🚨 alert na `C08HCGL5G0M` z nazwą node'a i treścią błędu. W produkcji: 2/2 skuteczności.

Status na 2026-08-08: workflow aktywny, checklist E2E zielony — szczegóły w `CONFIG.md` § „Wyniki testów E2E".

## Gdzie co mieszka

- n8n: https://ula285-20285.wykr.es → workflows „Discovery Call Follow-up" (`9ZEgF3LPgUHbK4Pc`), „Discovery Error Handler" (`y7NbiALAXFFBjvA9`)
- Kanoniczne JSON-y workflow: ten katalog (`discovery-call-followup.json`, `discovery-error-handler.json`) — to jest źródło prawdy. Redeploy = podstaw wartości `__PLACEHOLDER__` danymi z `CONFIG.md` (np. `sed`), wgraj **pełne body** przez `PUT /api/v1/workflows/:id`, potem re-aktywuj (aktywacja nie przechodzi automatycznie przy update przez API).
- Mail + automatyzacja: MailerLite → Automations → „Discovery Call — mail przygotowujący"
- Filtr rezerwacji: trzy node'y IF „Is Discovery Booking?" (New/Update/Cancel) — `FILTER_TERM` w CONFIG.md
- CRM: edge function `crm-booking` w repo siadlak-portal (`supabase/functions/crm-booking`), sekret `CRM_BOOKING_SECRET` (Supabase secrets + credential n8n „CRM Booking Secret"). Logika dedupu deali żyje w funkcji, nie w n8n. Deploy: `supabase functions deploy crm-booking --project-ref taswmdahpcubiyrgsjki`.
- Wszystkie ID i credential ID: `automation/n8n/CONFIG.md` (sekrety same żyją poza repo)

## Jak debugować

1. n8n → Executions (filtruj po workflow) — każdy run z payloadem per node.
2. Brak reakcji na rezerwację: sprawdź, czy workflow aktywny; czy event zawiera `FILTER_TERM` w `summary` i „Booked by" w `description`; czy appointment schedule nie zmienił tytułu (patrz punkt 5).
3. Alert 🚨 na Slacku: treść wskazuje node i błąd. Najczęstsze przyczyny:
   - wygasły Google OAuth → re-connect credential w n8n
   - rotacja tokenu MailerLite → zaktualizuj credential „MailerLite Bearer" (`LNvQCU8e8mnYdcwT`)
   - rotacja tokenu Todoist → zaktualizuj credential „Todoist Bearer" (`RdHRFGa0aOV0YGA8`)
   - sekret CRM się rozjechał → `CRM_BOOKING_SECRET` w Supabase secrets musi być identyczny z wartością w credentialu n8n „CRM Booking Secret"
4. Mail nie wyszedł, a subskrybent jest w grupie: MailerLite → Automations → activity — group-join nie odpala się drugi raz dla tej samej osoby (patrz „Znane ograniczenia").
5. Zmiana tytułu appointment schedule **zmienia `summary` eventów** → filtr przestanie łapać rezerwacje → zaktualizuj `FILTER_TERM` we **wszystkich trzech** node'ach IF „Is Discovery Booking?" i w `CONFIG.md`.

## Zmiana treści maila

MailerLite → Automations → edytuj mail w automatyzacji „Discovery Call — mail przygotowujący". Zero zmian w n8n.

## Znane ograniczenia v1

- **Reschedule/cancel** aktualizują tylko Slack — Todoist/MailerLite/CRM trzeba domknąć ręcznie (decyzja v1).
- **Partial failure**: cztery akcje ścieżki „nowa rezerwacja" wykonują się sekwencyjnie w jednej egzekucji; błąd w środku (np. Todoist) zatrzymuje resztę — akcje wcześniejsze w kolejności JUŻ się wykonały. Po naprawie dostajesz alert Slacka; przed ponownym uruchomieniem sprawdź duplikaty (subskrybent w ML, task w Todoist, deal w CRM).
- **Mail raz per subskrybent**: automatyzacja ML typu group-join nie odpala się ponownie dla osoby, która już była w grupie „Discovery — Booked".
- **Echo-window 60s**: aktualizacja Google Calendar późniejsza niż 60s po utworzeniu eventu (np. Google Meet dogenerowuje szczegóły) może dać fałszywe 🔁 ZMIANA. Rzadkie, można zignorować.
- **Fallback na stripped payload w Slack** dla ścieżki Cancelled: kod liczy się z tym, że hard-delete może nie nieść pełnych danych eventu, ale w testach E2E hard-delete zawsze zwracał pełny payload — ta ścieżka fallbacku jest **nieprzetestowana**.

Pełne wyniki E2E (daty, execution ID per scenariusz): `automation/n8n/CONFIG.md` § „Wyniki testów E2E".
