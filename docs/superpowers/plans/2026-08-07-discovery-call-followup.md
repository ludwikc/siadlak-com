# Discovery Call Follow-up Automation — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Spec:** `docs/superpowers/specs/2026-08-07-discovery-call-followup-design.md`

**Goal:** Każda rezerwacja discovery call (Google appointment schedule na kalendarzu `ludwikc@siadlak.com`) automatycznie wysyła mail przygotowujący (MailerLite), tworzy zadanie w Todoist (projekt CRM), powiadamia na Slacku i zakłada/aktualizuje deal „Life OS — Discovery" na etapie Rozmowa w CRM portalu (siadlak-portal / Supabase); błędy alarmują na Slacku.

**Architecture:** Dwa workflow w n8n (`https://ula285-20285.wykr.es`) budowane przez n8n Public API: główny `Discovery Call Follow-up` (2 triggery polling Google Calendar → filtr rezerwacji → ścieżka created z 4 akcjami / ścieżka updated Slack-only) + `Discovery Error Handler` (error trigger → Slack). Mail żyje w MailerLite: n8n robi upsert subskrybenta do grupy, automatyzacja MailerLite (trigger: dołączenie do grupy) wysyła treść. Wpis do CRM przez nową edge function `crm-booking` w repo siadlak-portal (wzorzec shared-secret jak `crm-sync`; service-role key nie opuszcza Supabase; dedup deali w funkcji).

**Tech Stack:** n8n Public API (REST, `X-N8N-API-KEY`), n8n nodes: `googleCalendarTrigger`, `if`, `code`, `httpRequest` (MailerLite `connect.mailerlite.com/api` + Supabase edge function), `todoist`, `slack`, `errorTrigger`. Supabase edge function (Deno) w `/Users/ludwikc/git/siadlak-portal/supabase/functions/crm-booking/`. Weryfikacje przez MCP: MailerLite, Todoist, Google Calendar, Slack. Wersjonowanie workflow JSON w tym repo (`automation/n8n/`).

## Global Constraints

- Sekrety (n8n API key, MailerLite token) NIGDY w repo — żyją w `SCRATCHPAD/n8n.env` (plik już istnieje: `N8N_URL=https://ula285-20285.wykr.es`, `N8N_API_KEY=...`). `SCRATCHPAD` = katalog scratchpad bieżącej sesji.
- Wartości nie-sekretne (ID credentiali, grup, workflow, wzorzec filtra) → rejestr `automation/n8n/CONFIG.md`, commitowany.
- Kanał Slack: `C08HCGL5G0M`. Projekt Todoist: `6P79PcCFvr79qX2X` (CRM). Kalendarz: `ludwikc@siadlak.com`. Właściciel (self-email do filtrów): `ludwikc@siadlak.com`.
- Istniejące credentiale n8n: Slack `KnH3d0aP27gBB42F` („Slack account"), Todoist `8oqfcW1IjExZk6rn` („Todoist account").
- Teksty widoczne dla Ludwika (Slack, Todoist) po polsku; treść maila głosem Ludwika (skill `anthropic-skills:glos-ludwika`).
- Commity: Conventional Commits, bez wzmianek o Claude/Anthropic.
- Quirki n8n Public API: `POST /api/v1/workflows` body = TYLKO `{name, nodes, connections, settings}` (pole `active` odrzucane — aktywacja przez `POST /api/v1/workflows/{id}/activate`); `settings` wymagane (może być `{}`); `PUT /api/v1/workflows/{id}` wymaga pełnego body; API NIE potrafi wykonać workflow ręcznie (test = aktywny trigger) ani listować credentiali (ale `POST /api/v1/credentials` działa).
- CRM portalu: repo `/Users/ludwikc/git/siadlak-portal`, Supabase `taswmdahpcubiyrgsjki` (`https://taswmdahpcubiyrgsjki.supabase.co`). `crm_contacts.email` UNIQUE z CHECK lowercase+trim; `crm_deals` bez unique constraintu (dedup w funkcji); preset discovery: title `Life OS — Discovery`, product `life_os`, stage `rozmowa`, next_action `Rozmowa Discovery`, value_cents `1600000`. NIE dotykać `in_mailerlite`/`in_easycart`/`segments`/`lead_score` (własność nocnego `crm-sync`). Nowy sekret `CRM_BOOKING_SECRET` (nagłówek `x-booking-secret`) — NIE reużywać `CRM_SYNC_SECRET`.
- Commity w repo siadlak-portal: też Conventional Commits, wg tamtejszego CLAUDE.md.
- Placeholder tokens `__NAZWA__` w plikach JSON są podmieniane sedem z wartości w CONFIG.md przed POST-em — to jedyna dozwolona forma placeholderów.
- Priorytet Todoist: API `priority: 3` == UI „p2" (skala odwrócona).

## Zmienne rejestru (CONFIG.md)

| Token | Skąd | Zadanie |
|---|---|---|
| `__GCAL_CRED_ID__` | Ludwik tworzy credential, ID z paska URL | Task 2 |
| `__ML_CRED_ID__` | odpowiedź `POST /credentials` | Task 3 |
| `__ML_GROUP_ID__` | MailerLite MCP `create_group` | Task 4 |
| `__FILTER_TERM__` | summary testowej rezerwacji | Task 5 |
| `__CRM_CRED_ID__` | odpowiedź `POST /credentials` (header `x-booking-secret`) | Task 3 |
| `CRM_BOOKING_SECRET` | `openssl rand -hex 32` → scratchpad env (sekret, NIE do CONFIG.md) | Task 3 |
| `__ERROR_WF_ID__` | odpowiedź `POST /workflows` | Task 6 |
| `MAIN_WF_ID` | odpowiedź `POST /workflows` | Task 8 |

## File Structure

```
automation/n8n/                        # repo siadlak-com
├── README.md                          # runbook (Task 10)
├── CONFIG.md                          # rejestr ID/wartości (Task 1, uzupełniany)
├── discovery-error-handler.json       # workflow JSON (Task 6)
├── discovery-call-followup.json       # workflow JSON (Task 8)
└── samples/
    └── booking-event.sample.json      # zredagowany event z testowej rezerwacji (Task 5)

/Users/ludwikc/git/siadlak-portal/     # repo siadlak-portal (osobne commity!)
├── supabase/functions/crm-booking/index.ts   # edge function (Task 7)
└── supabase/config.toml                       # + [functions.crm-booking] verify_jwt=false (Task 7)
```

Repo siadlak-com = strona Vite/React; katalog `automation/` nie uczestniczy w buildzie — trzyma artefakty automatyzacji pod kontrolą wersji (n8n nie ma gita).

---

### Task 1: Preflight + scaffolding repo

**Files:**
- Create: `automation/n8n/CONFIG.md`

**Interfaces:**
- Produces: katalog `automation/n8n/`, CONFIG.md z sekcją „Wartości", zweryfikowany dostęp do n8n API.

- [ ] **Step 1: Zweryfikuj dostęp do n8n API**

```bash
source "$SCRATCHPAD/n8n.env" && curl -s -m 10 "$N8N_URL/api/v1/workflows?limit=1" -H "X-N8N-API-KEY: $N8N_API_KEY" | head -c 200
```

Expected: JSON `{"data":[...]}`. Błąd 401 → klucz nieaktualny, STOP, poproś Ludwika o nowy.

- [ ] **Step 2: Utwórz CONFIG.md**

```markdown
# Discovery Call Follow-up — rejestr konfiguracji

Sekrety żyją POZA repo (scratchpad sesji / notatki Ludwika). Tu tylko identyfikatory.

## Stałe
- n8n: https://ula285-20285.wykr.es
- Kalendarz: ludwikc@siadlak.com
- Slack channel: C08HCGL5G0M
- Todoist projekt CRM: 6P79PcCFvr79qX2X
- Slack credential: KnH3d0aP27gBB42F
- Todoist credential: 8oqfcW1IjExZk6rn

## Wartości (uzupełniane w trakcie wdrożenia)
- GCAL_CRED_ID: (Task 2)
- ML_CRED_ID: (Task 3)
- CRM_CRED_ID: (Task 3)
- ML_GROUP_ID: (Task 4)
- FILTER_TERM: (Task 5)
- ERROR_WF_ID: (Task 6)
- MAIN_WF_ID: (Task 8)

## CRM (siadlak-portal)
- Supabase: taswmdahpcubiyrgsjki
- Endpoint: https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking
- Sekret: CRM_BOOKING_SECRET (wartość POZA repo)
```

- [ ] **Step 3: Commit**

```bash
git add automation/n8n/CONFIG.md
git commit -m "chore(automation): scaffold n8n discovery follow-up config registry"
```

---

### Task 2: [HUMAN GATE — Ludwik] Credential Google Calendar + token MailerLite

**Files:** brak (praca w UI n8n + MailerLite)

**Interfaces:**
- Produces: `GCAL_CRED_ID` (wpisany do CONFIG.md), token MailerLite (dopisany do `$SCRATCHPAD/n8n.env` jako `ML_TOKEN=...`).

- [ ] **Step 1: Wyślij Ludwikowi instrukcję (czat) i CZEKAJ na odpowiedź**

Instrukcja dla Ludwika:

1. **Google Calendar credential w n8n:** `https://ula285-20285.wykr.es` → Credentials → Add credential → „Google Calendar OAuth2 API". Client ID/Secret: te same co w istniejącym credentialu „Google Drive account" (ten sam projekt Google Cloud; w [console.cloud.google.com](https://console.cloud.google.com) włącz **Google Calendar API**: APIs & Services → Enable APIs → Google Calendar API). Przejdź OAuth (Sign in with Google) kontem **ludwikc@siadlak.com**. Po zapisaniu otwórz credential — ID jest w URL: `/credentials/<ID>`. Podeślij ID.
2. **MailerLite token:** MailerLite → Integrations → API → wygeneruj token → wklej na czacie (nie trafi do repo).

- [ ] **Step 2: Zapisz wyniki**

`GCAL_CRED_ID` → CONFIG.md. Token → `echo 'ML_TOKEN=<token>' >> "$SCRATCHPAD/n8n.env"`.

- [ ] **Step 3: Commit CONFIG.md**

```bash
git add automation/n8n/CONFIG.md && git commit -m "chore(automation): record google calendar credential id"
```

---

### Task 3: Credentiale przez API n8n (MailerLite + sekret CRM)

**Files:**
- Modify: `automation/n8n/CONFIG.md`

**Interfaces:**
- Consumes: `ML_TOKEN` z `$SCRATCHPAD/n8n.env` (Task 2).
- Produces: `ML_CRED_ID` (httpHeaderAuth: `Authorization: Bearer <token>`) dla node'a MailerLite w Task 8; `CRM_BOOKING_SECRET` w `$SCRATCHPAD/n8n.env` (Task 7 ustawia go też w Supabase); `CRM_CRED_ID` (httpHeaderAuth: `x-booking-secret: <sekret>`) dla node'a CRM w Task 8.

- [ ] **Step 1: Zweryfikuj token MailerLite**

```bash
source "$SCRATCHPAD/n8n.env" && curl -s -o /dev/null -w "%{http_code}\n" "https://connect.mailerlite.com/api/groups?limit=1" -H "Authorization: Bearer $ML_TOKEN"
```

Expected: `200`. Inny kod → token błędny, wróć do Ludwika.

- [ ] **Step 2: Utwórz credential MailerLite**

```bash
source "$SCRATCHPAD/n8n.env" && curl -s -X POST "$N8N_URL/api/v1/credentials" \
  -H "X-N8N-API-KEY: $N8N_API_KEY" -H "Content-Type: application/json" \
  -d "{\"name\":\"MailerLite Bearer\",\"type\":\"httpHeaderAuth\",\"data\":{\"name\":\"Authorization\",\"value\":\"Bearer $ML_TOKEN\"}}"
```

Expected: JSON z `"id":"..."` — to `ML_CRED_ID`.

- [ ] **Step 3: Wygeneruj sekret CRM i zapisz w env**

```bash
echo "CRM_BOOKING_SECRET=$(openssl rand -hex 32)" >> "$SCRATCHPAD/n8n.env" && tail -1 "$SCRATCHPAD/n8n.env" | cut -c1-30
```

- [ ] **Step 4: Utwórz credential CRM (x-booking-secret)**

```bash
source "$SCRATCHPAD/n8n.env" && curl -s -X POST "$N8N_URL/api/v1/credentials" \
  -H "X-N8N-API-KEY: $N8N_API_KEY" -H "Content-Type: application/json" \
  -d "{\"name\":\"CRM Booking Secret\",\"type\":\"httpHeaderAuth\",\"data\":{\"name\":\"x-booking-secret\",\"value\":\"$CRM_BOOKING_SECRET\"}}"
```

Expected: JSON z `"id":"..."` — to `CRM_CRED_ID`.

- [ ] **Step 5: Zapisz ML_CRED_ID i CRM_CRED_ID w CONFIG.md i commit**

```bash
git add automation/n8n/CONFIG.md && git commit -m "chore(automation): record mailerlite and crm booking credential ids"
```

---

### Task 4: MailerLite — grupa + mail + automatyzacja

**Files:**
- Modify: `automation/n8n/CONFIG.md`

**Interfaces:**
- Produces: `ML_GROUP_ID` (grupa `Discovery — Booked`); aktywna automatyzacja MailerLite „dołączenie do grupy → mail przygotowujący". Task 8 wrzuca subskrybentów do tej grupy.

- [ ] **Step 1: Utwórz grupę przez MailerLite MCP**

Wywołaj MCP `create_group` z name `Discovery — Booked`. Zapisz zwrócone `id` jako `ML_GROUP_ID`. Jeśli grupa już istnieje (409/duplikat) — znajdź ją i użyj jej ID.

- [ ] **Step 2: Napisz draft maila głosem Ludwika**

Użyj skilla `anthropic-skills:glos-ludwika`. Brief: mail po rezerwacji bezpłatnej sesji discovery; cel — przygotować do rozmowy, nie duplikować potwierdzenia Google (termin już potwierdzony). Zawartość: (1) co się wydarzy na 45-min rozmowie, (2) prośba o 2 min refleksji: „z czym przychodzisz / co ma się zmienić", (3) P.S. w stylu Ludwika. Temat np. „Zanim porozmawiamy — 2 minuty, które zmienią naszą rozmowę". Bez cen, bez pitch'u.

- [ ] **Step 3: [HUMAN GATE] Akceptacja treści**

Pokaż draft Ludwikowi na czacie. Nie aktywuj automatyzacji przed jego OK.

- [ ] **Step 4: Utwórz automatyzację**

Przez MailerLite MCP (`create_automation` / `build_custom_automation`): trigger = subscriber joins group `Discovery — Booked`, krok = wyślij zaakceptowany mail, aktywuj. Jeśli MCP nie potrafi złożyć automatyzacji end-to-end — fallback: przekaż Ludwikowi 4-krokową instrukcję UI (Automations → New → trigger „When subscriber joins a group" → email → Turn on) z gotową treścią do wklejenia i CZEKAJ na potwierdzenie.

- [ ] **Step 5: Zweryfikuj**

MCP `list_automations` — automatyzacja istnieje i jest aktywna (`enabled: true`).

- [ ] **Step 6: Zapisz ML_GROUP_ID w CONFIG.md i commit**

```bash
git add automation/n8n/CONFIG.md && git commit -m "chore(automation): record mailerlite group id for discovery bookings"
```

---

### Task 5: [HUMAN GATE — Ludwik] Testowa rezerwacja + diagnostyka eventu

**Files:**
- Create: `automation/n8n/samples/booking-event.sample.json`
- Modify: `automation/n8n/CONFIG.md`

**Interfaces:**
- Produces: `FILTER_TERM` (stały fragment `summary` eventów z appointment schedule) i potwierdzone reguły ekstrakcji gościa (gdzie jest imię: `attendees[].displayName` / description / summary) — konsumowane przez JSON w Task 8.

- [ ] **Step 1: Poproś Ludwika o testową rezerwację**

Instrukcja: wejdź na `siadlak.com/discovery` (tryb incognito), zarezerwuj najbliższy wolny slot podając imię „Test Automation" i email `fundacja@hackerzy.pl`. Daj znać, gdy gotowe.

- [ ] **Step 2: Pobierz event przez Google Calendar MCP**

Załaduj tool `list_events` (ToolSearch: `select:mcp__e931af1e-ca15-4ad0-aad5-46039c27d5e7__list_events`), pobierz eventy z kalendarza `ludwikc@siadlak.com` w oknie ±14 dni i znajdź testową rezerwację (attendee `fundacja@hackerzy.pl`).

- [ ] **Step 3: Zapisz zredagowany sample**

Do `automation/n8n/samples/booking-event.sample.json` zapisz pełny JSON eventu z usuniętymi danymi wrażliwymi (zostaw strukturę: `summary`, `description`, `attendees` z fikcyjnym mailem, `start`, `status`, `created`, `updated`, `id`, `htmlLink`).

- [ ] **Step 4: Wyznacz FILTER_TERM i reguły ekstrakcji**

- `FILTER_TERM` = stały fragment `summary` obecny w każdej rezerwacji z tego schedule'a (tytuł schedule'a; np. gdy summary to „Sesja Discovery: Test Automation", FILTER_TERM = `Sesja Discovery`). Gdy summary zawiera TYLKO imię gościa (Google czasem tak formatuje) — FILTER_TERM nie zadziała; wtedy użyj stałego fragmentu `description` (Google wstawia tam blok appointment schedule) i w Task 8 przełącz warunek IF z `summary` na `description`. Zanotuj w CONFIG.md, którego pola dotyczy filtr.
- Sprawdź, gdzie jest imię gościa: `attendees[].displayName`? Pierwsza linia `description` (odpowiedzi formularza)? Zanotuj w CONFIG.md pod `FILTER_TERM` jako `NAME_SOURCE: displayName|description|summary`.

- [ ] **Step 5: Commit**

```bash
git add automation/n8n/samples/booking-event.sample.json automation/n8n/CONFIG.md
git commit -m "chore(automation): capture booking event sample and filter term"
```

---

### Task 6: Workflow „Discovery Error Handler"

**Files:**
- Create: `automation/n8n/discovery-error-handler.json`
- Modify: `automation/n8n/CONFIG.md`

**Interfaces:**
- Produces: aktywny workflow o ID `ERROR_WF_ID`; Task 8 wpisuje go w `settings.errorWorkflow`.

- [ ] **Step 1: Zapisz plik `automation/n8n/discovery-error-handler.json`**

```json
{
  "name": "Discovery Error Handler",
  "settings": { "executionOrder": "v1", "timezone": "Europe/Warsaw" },
  "nodes": [
    {
      "id": "err-trigger",
      "name": "Error Trigger",
      "type": "n8n-nodes-base.errorTrigger",
      "typeVersion": 1,
      "position": [0, 0],
      "parameters": {}
    },
    {
      "id": "err-slack",
      "name": "Slack Alert",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2.2,
      "position": [220, 0],
      "parameters": {
        "resource": "message",
        "operation": "post",
        "select": "channel",
        "channelId": { "__rl": true, "mode": "id", "value": "C08HCGL5G0M" },
        "text": "=🚨 Workflow padł: {{ $json.workflow.name }}\nNode: {{ $json.execution?.lastNodeExecuted ?? 'n/a' }}\nBłąd: {{ $json.execution?.error?.message ?? 'n/a' }}\nExecution: {{ $json.execution?.url ?? 'n/a' }}",
        "otherOptions": {}
      },
      "credentials": {
        "slackApi": { "id": "KnH3d0aP27gBB42F", "name": "Slack account" }
      }
    }
  ],
  "connections": {
    "Error Trigger": { "main": [[{ "node": "Slack Alert", "type": "main", "index": 0 }]] }
  }
}
```

- [ ] **Step 2: Deploy + aktywacja**

```bash
source "$SCRATCHPAD/n8n.env"
WF_ID=$(curl -s -X POST "$N8N_URL/api/v1/workflows" -H "X-N8N-API-KEY: $N8N_API_KEY" -H "Content-Type: application/json" \
  -d @automation/n8n/discovery-error-handler.json | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")
echo "ERROR_WF_ID=$WF_ID"
curl -s -X POST "$N8N_URL/api/v1/workflows/$WF_ID/activate" -H "X-N8N-API-KEY: $N8N_API_KEY" | python3 -c "import json,sys; print('active:', json.load(sys.stdin)['active'])"
```

Expected: `active: True`. Uwaga: workflow z samym Error Triggerem nie wymaga aktywacji do działania jako error workflow, ale aktywacja nie szkodzi i upraszcza weryfikację stanu. Zapisz `ERROR_WF_ID` w CONFIG.md.

- [ ] **Step 3: Test przez jednorazowy failujący workflow**

```bash
source "$SCRATCHPAD/n8n.env"
WF_ID=<ERROR_WF_ID z CONFIG.md>   # bloki bash nie współdzielą zmiennych — ustaw jawnie
cat > /tmp/failer.json <<EOF
{
  "name": "TEMP failer (delete me)",
  "settings": { "executionOrder": "v1", "errorWorkflow": "$WF_ID" },
  "nodes": [
    { "id": "sched", "name": "Every Minute", "type": "n8n-nodes-base.scheduleTrigger", "typeVersion": 1.2, "position": [0,0],
      "parameters": { "rule": { "interval": [ { "field": "minutes", "minutesInterval": 1 } ] } } },
    { "id": "boom", "name": "Boom", "type": "n8n-nodes-base.code", "typeVersion": 2, "position": [220,0],
      "parameters": { "jsCode": "throw new Error('Test error-handler — zignoruj');" } }
  ],
  "connections": { "Every Minute": { "main": [[ { "node": "Boom", "type": "main", "index": 0 } ]] } }
}
EOF
FAIL_ID=$(curl -s -X POST "$N8N_URL/api/v1/workflows" -H "X-N8N-API-KEY: $N8N_API_KEY" -H "Content-Type: application/json" -d @/tmp/failer.json | python3 -c "import json,sys; print(json.load(sys.stdin)['id'])")
curl -s -X POST "$N8N_URL/api/v1/workflows/$FAIL_ID/activate" -H "X-N8N-API-KEY: $N8N_API_KEY" > /dev/null
echo "FAIL_ID=$FAIL_ID — czekaj ~90 s"
```

- [ ] **Step 4: Zweryfikuj alert i posprzątaj**

Po ~90 s: sprawdź, że na kanale `C08HCGL5G0M` pojawił się komunikat „🚨 Workflow padł: TEMP failer…" (Slack MCP `slack_read_channel` lub potwierdzenie Ludwika), oraz:

```bash
source "$SCRATCHPAD/n8n.env"
curl -s "$N8N_URL/api/v1/executions?workflowId=$FAIL_ID&limit=3" -H "X-N8N-API-KEY: $N8N_API_KEY" | python3 -c "import json,sys; [print(e['id'], e['status']) for e in json.load(sys.stdin)['data']]"
curl -s -X POST "$N8N_URL/api/v1/workflows/$FAIL_ID/deactivate" -H "X-N8N-API-KEY: $N8N_API_KEY" > /dev/null
curl -s -X DELETE "$N8N_URL/api/v1/workflows/$FAIL_ID" -H "X-N8N-API-KEY: $N8N_API_KEY" > /dev/null
```

Expected: executions ze statusem `error`, alert na Slacku, failer usunięty. Jeśli alertu brak, a execution error-handlera istnieje z błędem Slacka `not_in_channel` → poproś Ludwika o `/invite @<bot>` na kanale i powtórz test.

- [ ] **Step 5: Commit**

```bash
git add automation/n8n/discovery-error-handler.json automation/n8n/CONFIG.md
git commit -m "feat(automation): add n8n error handler workflow for discovery pipeline"
```

---

### Task 7: Edge function `crm-booking` (repo siadlak-portal)

**Files:**
- Create: `/Users/ludwikc/git/siadlak-portal/supabase/functions/crm-booking/index.ts`
- Modify: `/Users/ludwikc/git/siadlak-portal/supabase/config.toml` (dopisz sekcję `[functions.crm-booking]`)

**Interfaces:**
- Consumes: `CRM_BOOKING_SECRET` z `$SCRATCHPAD/n8n.env` (Task 3); wzorce z `supabase/functions/crm-sync/index.ts` i `supabase/functions/_shared/` (klient service-role, CORS).
- Produces: endpoint `POST https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking` — nagłówek `x-booking-secret`, body `{email, name, start, eventId, htmlLink}`, odpowiedź `{contactId, dealId, created}`. Task 8 woła go z n8n.

- [ ] **Step 1: Przeczytaj wzorce repo**

Przeczytaj `/Users/ludwikc/git/siadlak-portal/supabase/functions/crm-sync/index.ts`, `supabase/functions/_shared/supabaseClient.ts`, `supabase/functions/_shared/cors.ts` i `supabase/config.toml`. Dopasuj do nich importy, helper klienta (`adminClient` — sprawdź, czy to funkcja czy stała) i styl odpowiedzi w kodzie ze Step 2. Kod niżej to implementacja referencyjna — nazwy helperów podmień na rzeczywiste.

- [ ] **Step 2: Napisz `supabase/functions/crm-booking/index.ts`**

```ts
import { adminClient } from '../_shared/supabaseClient.ts'
import { corsHeaders } from '../_shared/cors.ts'

const DISCOVERY_DEAL = {
  title: 'Life OS — Discovery',
  product: 'life_os',
  stage: 'rozmowa',
  value_cents: 1_600_000,
  next_action: 'Rozmowa Discovery',
} as const
const OPEN_STAGES = ['lead', 'rozmowa', 'oferta']

type BookingPayload = {
  email?: string
  name?: string
  start?: string
  eventId?: string
  htmlLink?: string
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders })
  const secret = Deno.env.get('CRM_BOOKING_SECRET')
  if (!secret || req.headers.get('x-booking-secret') !== secret) return json({ error: 'unauthorized' }, 401)
  if (req.method !== 'POST') return json({ error: 'method not allowed' }, 405)

  let payload: BookingPayload
  try {
    payload = await req.json()
  } catch {
    return json({ error: 'invalid json' }, 400)
  }
  const email = payload.email?.trim().toLowerCase()
  if (!email || !email.includes('@')) return json({ error: 'email required' }, 400)
  const name = payload.name?.trim() || null
  const nextActionDate = payload.start ? payload.start.slice(0, 10) : null
  const nowIso = new Date().toISOString()

  const db = adminClient()

  const { data: existing, error: selErr } = await db
    .from('crm_contacts')
    .select('id, name')
    .eq('email', email)
    .maybeSingle()
  if (selErr) return json({ error: selErr.message }, 500)

  let contactId = existing?.id
  if (!contactId) {
    const { data: inserted, error } = await db
      .from('crm_contacts')
      .insert({ email, name, updated_at: nowIso })
      .select('id')
      .single()
    if (error) return json({ error: error.message }, 500)
    contactId = inserted.id
  } else if (name && !existing.name) {
    await db.from('crm_contacts').update({ name, updated_at: nowIso }).eq('id', contactId)
  }

  const { data: openDeal, error: dealSelErr } = await db
    .from('crm_deals')
    .select('id')
    .eq('contact_id', contactId)
    .eq('product', DISCOVERY_DEAL.product)
    .eq('title', DISCOVERY_DEAL.title)
    .in('stage', OPEN_STAGES)
    .order('created_at', { ascending: false })
    .limit(1)
    .maybeSingle()
  if (dealSelErr) return json({ error: dealSelErr.message }, 500)

  if (openDeal) {
    const { error } = await db
      .from('crm_deals')
      .update({ next_action: DISCOVERY_DEAL.next_action, next_action_date: nextActionDate, updated_at: nowIso })
      .eq('id', openDeal.id)
    if (error) return json({ error: error.message }, 500)
    return json({ contactId, dealId: openDeal.id, created: false })
  }

  const { data: deal, error: insErr } = await db
    .from('crm_deals')
    .insert({ contact_id: contactId, ...DISCOVERY_DEAL, next_action_date: nextActionDate, updated_at: nowIso })
    .select('id')
    .single()
  if (insErr) return json({ error: insErr.message }, 500)
  return json({ contactId, dealId: deal.id, created: true })
})
```

Świadome decyzje (nie zmieniaj bez powodu): email lowercase+trim PRZED insertem (CHECK na tabeli odrzuci inne); `name` nadpisywany tylko gdy kontakt nowy lub bez `name` (nocny `crm-sync` jest źródłem prawdy); ZERO zapisu do `in_mailerlite`/`segments`/`lead_score`; dedup deala = najnowszy otwarty deal discovery kontaktu (w `crm_deals` brak unique constraintu); `eventId`/`htmlLink` przyjmowane, w v1 nieużywane (przyszły dedup po evencie wymagałby kolumny — poza zakresem).

- [ ] **Step 3: Zarejestruj funkcję w `supabase/config.toml`**

Dopisz na końcu pliku (wzór istniejących sekcji `[functions.crm-sync]` itd.):

```toml
[functions.crm-booking]
verify_jwt = false
```

- [ ] **Step 4: Ustaw sekret i deployuj**

```bash
cd /Users/ludwikc/git/siadlak-portal
source "$SCRATCHPAD/n8n.env"
supabase secrets set CRM_BOOKING_SECRET="$CRM_BOOKING_SECRET" --project-ref taswmdahpcubiyrgsjki
supabase functions deploy crm-booking --project-ref taswmdahpcubiyrgsjki
```

Jeśli CLI niezalogowane/nieobecne (`supabase: command not found` / błąd auth) — HUMAN GATE: poproś Ludwika o wykonanie powyższych dwóch komend (podaj mu wartość sekretu z env) i czekaj.

- [ ] **Step 5: Test integracyjny przeciw żywej funkcji**

```bash
source "$SCRATCHPAD/n8n.env"
FN=https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking
# 1) bez sekretu → 401
curl -s -o /dev/null -w "%{http_code}\n" -X POST "$FN" -H "Content-Type: application/json" -d '{"email":"x@y.z"}'
# 2) z sekretem, nowy kontakt → 200, created:true
curl -s -X POST "$FN" -H "x-booking-secret: $CRM_BOOKING_SECRET" -H "Content-Type: application/json" \
  -d '{"email":"Test-CRM-Booking@Example.com ","name":"Test CRM","start":"2026-08-20T10:00:00+02:00","eventId":"evt-test-1"}'
# 3) powtórka z inną datą → 200, created:false (ten sam dealId)
curl -s -X POST "$FN" -H "x-booking-secret: $CRM_BOOKING_SECRET" -H "Content-Type: application/json" \
  -d '{"email":"test-crm-booking@example.com","name":"Test CRM","start":"2026-08-21T10:00:00+02:00","eventId":"evt-test-2"}'
```

Expected: `401`; potem `{"contactId":"...","dealId":"...","created":true}`; potem to samo `dealId` z `created:false`. Zwróć uwagę: wejściowy email z wielkimi literami i spacją MUSI przejść (normalizacja działa).

- [ ] **Step 6: Posprzątaj dane testowe**

W Supabase (dashboard → SQL editor albo Supabase MCP portalu):

```sql
DELETE FROM crm_deals WHERE contact_id IN (SELECT id FROM crm_contacts WHERE email = 'test-crm-booking@example.com');
DELETE FROM crm_contacts WHERE email = 'test-crm-booking@example.com';
```

- [ ] **Step 7: Commit w repo siadlak-portal**

```bash
cd /Users/ludwikc/git/siadlak-portal
git add supabase/functions/crm-booking/index.ts supabase/config.toml
git commit -m "feat(crm): add crm-booking edge function for discovery call intake"
```

---

### Task 8: Workflow „Discovery Call Follow-up" (główny)

**Files:**
- Create: `automation/n8n/discovery-call-followup.json`
- Modify: `automation/n8n/CONFIG.md`

**Interfaces:**
- Consumes: `__GCAL_CRED_ID__` (Task 2), `__ML_CRED_ID__` + `__CRM_CRED_ID__` (Task 3), `__ML_GROUP_ID__` (Task 4), `__FILTER_TERM__` + `NAME_SOURCE` (Task 5), `__ERROR_WF_ID__` (Task 6) — wszystkie z CONFIG.md; endpoint `crm-booking` (Task 7).
- Produces: aktywny workflow `MAIN_WF_ID` nasłuchujący rezerwacji.

- [ ] **Step 1: Zapisz plik `automation/n8n/discovery-call-followup.json`** (z tokenami `__…__`)

```json
{
  "name": "Discovery Call Follow-up",
  "settings": { "executionOrder": "v1", "timezone": "Europe/Warsaw", "errorWorkflow": "__ERROR_WF_ID__" },
  "nodes": [
    {
      "id": "trig-created",
      "name": "New Booking",
      "type": "n8n-nodes-base.googleCalendarTrigger",
      "typeVersion": 1,
      "position": [0, 0],
      "parameters": {
        "pollTimes": { "item": [ { "mode": "everyX", "value": 5, "unit": "minutes" } ] },
        "triggerOn": "eventCreated",
        "calendarId": { "__rl": true, "mode": "id", "value": "ludwikc@siadlak.com" },
        "options": {}
      },
      "credentials": { "googleCalendarOAuth2Api": { "id": "__GCAL_CRED_ID__", "name": "Google Calendar account" } }
    },
    {
      "id": "trig-updated",
      "name": "Updated Booking",
      "type": "n8n-nodes-base.googleCalendarTrigger",
      "typeVersion": 1,
      "position": [0, 500],
      "parameters": {
        "pollTimes": { "item": [ { "mode": "everyX", "value": 5, "unit": "minutes" } ] },
        "triggerOn": "eventUpdated",
        "calendarId": { "__rl": true, "mode": "id", "value": "ludwikc@siadlak.com" },
        "options": {}
      },
      "credentials": { "googleCalendarOAuth2Api": { "id": "__GCAL_CRED_ID__", "name": "Google Calendar account" } }
    },
    {
      "id": "if-discovery-new",
      "name": "Is Discovery Booking?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [240, 0],
      "parameters": {
        "conditions": {
          "options": { "caseSensitive": false, "leftValue": "", "typeValidation": "loose" },
          "combinator": "and",
          "conditions": [
            {
              "id": "c-summary",
              "leftValue": "={{ $json.summary ?? '' }}",
              "rightValue": "__FILTER_TERM__",
              "operator": { "type": "string", "operation": "contains" }
            },
            {
              "id": "c-guest",
              "leftValue": "={{ ($json.attendees ?? []).some(a => a.email && a.email.toLowerCase() !== 'ludwikc@siadlak.com') }}",
              "rightValue": "",
              "operator": { "type": "boolean", "operation": "true", "singleValue": true }
            }
          ]
        },
        "options": {}
      }
    },
    {
      "id": "code-extract",
      "name": "Extract Guest",
      "type": "n8n-nodes-base.code",
      "typeVersion": 2,
      "position": [480, 0],
      "parameters": {
        "jsCode": "const ev = $input.first().json;\nconst OWNER = 'ludwikc@siadlak.com';\nconst guest = (ev.attendees || []).find(a => a.email && a.email.toLowerCase() !== OWNER);\nif (!guest) throw new Error('Brak gościa na evencie ' + ev.id);\nlet name = guest.displayName || '';\nif (!name && ev.description) {\n  const firstLine = String(ev.description).split(/\\r?\\n/).map(s => s.trim()).find(s => s.length > 1 && !s.startsWith('http'));\n  if (firstLine) name = firstLine;\n}\nif (!name && ev.summary) {\n  name = String(ev.summary).replace(/__FILTER_TERM__/i, '').replace(/[-–—:()]+/g, ' ').trim();\n}\nif (!name) name = guest.email.split('@')[0];\nconst firstName = name.split(/\\s+/)[0];\nreturn [{ json: {\n  eventId: ev.id,\n  htmlLink: ev.htmlLink,\n  summary: ev.summary,\n  start: ev.start?.dateTime || ev.start?.date,\n  email: guest.email.toLowerCase(),\n  name,\n  firstName\n} }];"
      }
    },
    {
      "id": "ml-upsert",
      "name": "MailerLite Upsert",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [760, -140],
      "parameters": {
        "method": "POST",
        "url": "https://connect.mailerlite.com/api/subscribers",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpHeaderAuth",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={{ JSON.stringify({ email: $json.email, fields: { name: $json.name }, groups: ['__ML_GROUP_ID__'] }) }}",
        "options": {}
      },
      "credentials": { "httpHeaderAuth": { "id": "__ML_CRED_ID__", "name": "MailerLite Bearer" } }
    },
    {
      "id": "todoist-task",
      "name": "Create Todoist Task",
      "type": "n8n-nodes-base.todoist",
      "typeVersion": 2.1,
      "position": [760, 0],
      "parameters": {
        "operation": "create",
        "project": { "__rl": true, "mode": "id", "value": "6P79PcCFvr79qX2X" },
        "content": "=Przygotuj Discovery Call z {{ $json.firstName }}",
        "options": {
          "description": "=Email: {{ $json.email }}\nEvent: {{ $json.htmlLink }}\nEventID: {{ $json.eventId }}",
          "dueDateTime": "={{ $json.start }}",
          "priority": 3
        }
      },
      "credentials": { "todoistApi": { "id": "8oqfcW1IjExZk6rn", "name": "Todoist account" } }
    },
    {
      "id": "slack-new",
      "name": "Slack: New Booking",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2.2,
      "position": [760, 140],
      "parameters": {
        "resource": "message",
        "operation": "post",
        "select": "channel",
        "channelId": { "__rl": true, "mode": "id", "value": "C08HCGL5G0M" },
        "text": "=📅 Nowa rezerwacja Discovery: {{ $json.name }} ({{ $json.email }}) — {{ $json.start && $json.start.includes('T') ? DateTime.fromISO($json.start).setZone('Europe/Warsaw').toFormat('ccc dd.MM.yyyy HH:mm') : $json.start }}\n{{ $json.htmlLink }}",
        "otherOptions": {}
      },
      "credentials": { "slackApi": { "id": "KnH3d0aP27gBB42F", "name": "Slack account" } }
    },
    {
      "id": "crm-deal",
      "name": "CRM: Discovery Deal",
      "type": "n8n-nodes-base.httpRequest",
      "typeVersion": 4.2,
      "position": [760, 280],
      "parameters": {
        "method": "POST",
        "url": "https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpHeaderAuth",
        "sendBody": true,
        "specifyBody": "json",
        "jsonBody": "={{ JSON.stringify({ email: $json.email, name: $json.name, start: $json.start, eventId: $json.eventId, htmlLink: $json.htmlLink }) }}",
        "options": {}
      },
      "credentials": { "httpHeaderAuth": { "id": "__CRM_CRED_ID__", "name": "CRM Booking Secret" } }
    },
    {
      "id": "if-discovery-upd",
      "name": "Is Discovery Booking (Update)?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [240, 500],
      "parameters": {
        "conditions": {
          "options": { "caseSensitive": false, "leftValue": "", "typeValidation": "loose" },
          "combinator": "and",
          "conditions": [
            {
              "id": "c-summary-u",
              "leftValue": "={{ $json.summary ?? '' }}",
              "rightValue": "__FILTER_TERM__",
              "operator": { "type": "string", "operation": "contains" }
            },
            {
              "id": "c-guest-u",
              "leftValue": "={{ ($json.attendees ?? []).some(a => a.email && a.email.toLowerCase() !== 'ludwikc@siadlak.com') }}",
              "rightValue": "",
              "operator": { "type": "boolean", "operation": "true", "singleValue": true }
            }
          ]
        },
        "options": {}
      }
    },
    {
      "id": "if-not-echo",
      "name": "Not Creation Echo?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [480, 500],
      "parameters": {
        "conditions": {
          "options": { "caseSensitive": false, "leftValue": "", "typeValidation": "loose" },
          "combinator": "and",
          "conditions": [
            {
              "id": "c-echo",
              "leftValue": "={{ Math.abs(new Date($json.updated ?? 0).getTime() - new Date($json.created ?? 0).getTime()) }}",
              "rightValue": 60000,
              "operator": { "type": "number", "operation": "gte" }
            }
          ]
        },
        "options": {}
      }
    },
    {
      "id": "if-cancelled",
      "name": "Cancelled?",
      "type": "n8n-nodes-base.if",
      "typeVersion": 2,
      "position": [720, 500],
      "parameters": {
        "conditions": {
          "options": { "caseSensitive": false, "leftValue": "", "typeValidation": "loose" },
          "combinator": "and",
          "conditions": [
            {
              "id": "c-status",
              "leftValue": "={{ $json.status ?? '' }}",
              "rightValue": "cancelled",
              "operator": { "type": "string", "operation": "equals" }
            }
          ]
        },
        "options": {}
      }
    },
    {
      "id": "slack-cancelled",
      "name": "Slack: Cancelled",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2.2,
      "position": [960, 420],
      "parameters": {
        "resource": "message",
        "operation": "post",
        "select": "channel",
        "channelId": { "__rl": true, "mode": "id", "value": "C08HCGL5G0M" },
        "text": "=❌ ODWOŁANE: {{ $json.summary }} — {{ $json.start?.dateTime ? DateTime.fromISO($json.start.dateTime).setZone('Europe/Warsaw').toFormat('ccc dd.MM.yyyy HH:mm') : ($json.start?.date ?? 'termin nieznany') }}\nObsłuż ręcznie: zadanie Todoist + ewentualny mail.\n{{ $json.htmlLink }}",
        "otherOptions": {}
      },
      "credentials": { "slackApi": { "id": "KnH3d0aP27gBB42F", "name": "Slack account" } }
    },
    {
      "id": "slack-changed",
      "name": "Slack: Rescheduled",
      "type": "n8n-nodes-base.slack",
      "typeVersion": 2.2,
      "position": [960, 580],
      "parameters": {
        "resource": "message",
        "operation": "post",
        "select": "channel",
        "channelId": { "__rl": true, "mode": "id", "value": "C08HCGL5G0M" },
        "text": "=🔁 ZMIANA rezerwacji: {{ $json.summary }} — nowy termin: {{ $json.start?.dateTime ? DateTime.fromISO($json.start.dateTime).setZone('Europe/Warsaw').toFormat('ccc dd.MM.yyyy HH:mm') : ($json.start?.date ?? 'sprawdź kalendarz') }}\nObsłuż ręcznie: zaktualizuj zadanie Todoist.\n{{ $json.htmlLink }}",
        "otherOptions": {}
      },
      "credentials": { "slackApi": { "id": "KnH3d0aP27gBB42F", "name": "Slack account" } }
    }
  ],
  "connections": {
    "New Booking": { "main": [[ { "node": "Is Discovery Booking?", "type": "main", "index": 0 } ]] },
    "Is Discovery Booking?": { "main": [[ { "node": "Extract Guest", "type": "main", "index": 0 } ]] },
    "Extract Guest": { "main": [[
      { "node": "MailerLite Upsert", "type": "main", "index": 0 },
      { "node": "Create Todoist Task", "type": "main", "index": 0 },
      { "node": "Slack: New Booking", "type": "main", "index": 0 },
      { "node": "CRM: Discovery Deal", "type": "main", "index": 0 }
    ]] },
    "Updated Booking": { "main": [[ { "node": "Is Discovery Booking (Update)?", "type": "main", "index": 0 } ]] },
    "Is Discovery Booking (Update)?": { "main": [[ { "node": "Not Creation Echo?", "type": "main", "index": 0 } ]] },
    "Not Creation Echo?": { "main": [[ { "node": "Cancelled?", "type": "main", "index": 0 } ]] },
    "Cancelled?": { "main": [
      [ { "node": "Slack: Cancelled", "type": "main", "index": 0 } ],
      [ { "node": "Slack: Rescheduled", "type": "main", "index": 0 } ]
    ] }
  }
}
```

Uwaga (z Task 5): jeśli `NAME_SOURCE`/filtr wskazały `description` zamiast `summary`, zmień w obu IF-ach `leftValue` na `={{ $json.description ?? '' }}` przed deployem i zaktualizuj plik w repo.

- [ ] **Step 2: Podmień tokeny i deploy**

```bash
source "$SCRATCHPAD/n8n.env"
# wartości z automation/n8n/CONFIG.md:
export GCAL_CRED_ID=... ML_CRED_ID=... CRM_CRED_ID=... ML_GROUP_ID=... FILTER_TERM=... ERROR_WF_ID=...
sed -e "s/__GCAL_CRED_ID__/$GCAL_CRED_ID/g" \
    -e "s/__ML_CRED_ID__/$ML_CRED_ID/g" \
    -e "s/__CRM_CRED_ID__/$CRM_CRED_ID/g" \
    -e "s/__ML_GROUP_ID__/$ML_GROUP_ID/g" \
    -e "s/__FILTER_TERM__/$FILTER_TERM/g" \
    -e "s/__ERROR_WF_ID__/$ERROR_WF_ID/g" \
    automation/n8n/discovery-call-followup.json > /tmp/main-wf.json
python3 -m json.tool /tmp/main-wf.json > /dev/null && echo "JSON OK"
MAIN_ID=$(curl -s -X POST "$N8N_URL/api/v1/workflows" -H "X-N8N-API-KEY: $N8N_API_KEY" -H "Content-Type: application/json" -d @/tmp/main-wf.json | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('id') or d)")
echo "MAIN_WF_ID=$MAIN_ID"
```

Expected: `JSON OK` + ID workflow. Jeśli API zwróci błąd walidacji `settings.errorWorkflow` — usuń tę linię z JSON, deployuj bez niej i poproś Ludwika o ustawienie w UI: workflow → Settings → Error Workflow → „Discovery Error Handler".

- [ ] **Step 3: Aktywuj i zweryfikuj**

```bash
source "$SCRATCHPAD/n8n.env"
curl -s -X POST "$N8N_URL/api/v1/workflows/$MAIN_ID/activate" -H "X-N8N-API-KEY: $N8N_API_KEY" | python3 -c "import json,sys; print('active:', json.load(sys.stdin)['active'])"
```

Expected: `active: True`. Jeśli aktywacja padnie na credentialu Google (np. brak scope) — wróć do Ludwika (Task 2, re-auth z Calendar API).

- [ ] **Step 4: Zapisz MAIN_WF_ID w CONFIG.md, commit**

```bash
git add automation/n8n/discovery-call-followup.json automation/n8n/CONFIG.md
git commit -m "feat(automation): add discovery call follow-up n8n workflow"
```

---

### Task 9: [HUMAN GATE — Ludwik] Testy E2E

**Files:**
- Modify: `automation/n8n/CONFIG.md` (sekcja „Wyniki testów E2E: data, PASS/FAIL per scenariusz")

**Interfaces:**
- Consumes: aktywny `MAIN_WF_ID`, aktywna automatyzacja MailerLite, `ML_GROUP_ID`.

Scenariusze (spec §Plan testów). Po każdej akcji Ludwika czekaj ≥6 min (polling 5 min).

- [ ] **Step 1: Nowa rezerwacja**

Ludwik: rezerwacja przez `/discovery` (imię „Test E2E", email `fundacja@hackerzy.pl`). Weryfikacja:
- n8n (najpierw `source "$SCRATCHPAD/n8n.env"` i `MAIN_WF_ID=<z CONFIG.md>`): `curl -s "$N8N_URL/api/v1/executions?workflowId=$MAIN_WF_ID&limit=5" -H "X-N8N-API-KEY: $N8N_API_KEY"` → execution `success`
- Slack: wiadomość „📅 Nowa rezerwacja Discovery: Test E2E…" (Slack MCP / Ludwik)
- Todoist MCP `find-tasks` w projekcie `6P79PcCFvr79qX2X`: task „Przygotuj Discovery Call z Test", due = termin, opis zawiera EventID
- MailerLite MCP `get_subscriber` `fundacja@hackerzy.pl`: istnieje, w grupie `Discovery — Booked`
- CRM: Ludwik w portalu (`/admin/contacts`, `/admin/deals`) widzi kontakt `fundacja@hackerzy.pl` + deal „Life OS — Discovery" na etapie Rozmowa, `next_action_date` = data calla (alternatywnie: `SELECT` przez Supabase SQL editor)
- Ludwik: mail przygotowujący dotarł na `fundacja@hackerzy.pl`

Dodatkowy scenariusz dedup CRM: druga rezerwacja tym samym emailem (inny termin) → w CRM nadal JEDEN deal discovery (zaktualizowana data), świeży task Todoist i Slack mogą się zdublować (znane, akceptowane w v1).

- [ ] **Step 2: Reschedule**

Ludwik przesuwa testową rezerwację (link „Reschedule" z maila Google / kalendarz). Expected: Slack „🔁 ZMIANA…", zero nowych tasków Todoist, zero maili.

- [ ] **Step 3: Cancel**

Ludwik odwołuje rezerwację. Expected: Slack „❌ ODWOŁANE…". CONTINGENCY: jeśli po 10 min brak — Google appointment cancel mógł nie przejść przez trigger `eventUpdated`. Wtedy: dodaj trzeci trigger `triggerOn: "eventCancelled"` (kopia node'a „Updated Booking", połączony wprost do „Slack: Cancelled" przez kopię IF „Is Discovery Booking (Update)?"), `PUT /api/v1/workflows/$MAIN_ID` z pełnym body, re-test. Jeśli nadal nic — zanotuj ograniczenie w README (cancel wykrywany ręcznie), nie blokuj wdrożenia.

- [ ] **Step 4: Negatywny — zwykłe spotkanie**

Ludwik tworzy ręcznie event „Spotkanie testowe" z gościem `fundacja@hackerzy.pl` w kalendarzu. Expected: execution z filtrem odrzucającym (lub brak akcji) — ZERO maila/taska/Slacka. Potem event usuwa.

- [ ] **Step 5: Sprzątanie + zapis wyników**

Usuń testowy task z Todoist (MCP `delete-object` lub Ludwik), usuń `fundacja@hackerzy.pl` z grupy ML (MCP `unassign_subscriber_from_group`) — inaczej kolejny test E2E nie dostanie maila (automatyzacja group-join nie odpala się dla członka grupy). W CRM usuń testowy deal i kontakt (SQL jak w Task 7 Step 6, z emailem `fundacja@hackerzy.pl`) — albo Ludwik decyduje, że zostają. Wyniki (PASS/FAIL per scenariusz + data) dopisz do CONFIG.md.

```bash
git add automation/n8n/CONFIG.md && git commit -m "test(automation): record discovery follow-up e2e results"
```

---

### Task 10: Runbook + zamknięcie

**Files:**
- Create: `automation/n8n/README.md`

**Interfaces:**
- Consumes: wszystkie wartości CONFIG.md, wyniki E2E.

- [ ] **Step 1: Napisz `automation/n8n/README.md`**

Zawartość (konkretna, z wartościami z CONFIG.md):

```markdown
# Discovery Call Follow-up — runbook

## Co robi
Rezerwacja przez siadlak.com/discovery (Google appointment schedule, kalendarz ludwikc@siadlak.com) →
n8n „Discovery Call Follow-up" (polling co 5 min) →
1) MailerLite: subskrybent → grupa „Discovery — Booked" → automatyzacja wysyła mail przygotowujący
2) Todoist: task „Przygotuj Discovery Call z {Imię}" w projekcie CRM, due = termin calla
3) Slack #<kanał C08HCGL5G0M>: powiadomienie
4) CRM portalu: edge function crm-booking (siadlak-portal) → kontakt + deal „Life OS — Discovery" @ Rozmowa (dedup: jeden otwarty deal per kontakt)
Reschedule/cancel: tylko powiadomienie Slack (obsługa ręczna — decyzja v1).
Błędy: workflow „Discovery Error Handler" → alert na Slacku.

## Gdzie co mieszka
- n8n: https://ula285-20285.wykr.es → workflows „Discovery Call Follow-up" (ID z CONFIG.md), „Discovery Error Handler"
- Kanoniczne JSON-y workflow: ten katalog (deploy = sed tokenów wg CONFIG.md + POST/PUT przez API)
- Mail + automatyzacja: MailerLite → Automations
- Filtr rezerwacji: IF „Is Discovery Booking?" — FILTER_TERM w CONFIG.md
- CRM: edge function crm-booking w repo siadlak-portal (supabase/functions/crm-booking), sekret CRM_BOOKING_SECRET (Supabase secrets + credential n8n „CRM Booking Secret"); logika dedup deali w funkcji, nie w n8n

## Jak debugować
1. n8n → Executions (filtruj po workflow) — każdy run z payloadem per node
2. Brak reakcji na rezerwację: sprawdź, czy workflow aktywny; czy event zawiera FILTER_TERM; czy attendee ≠ ludwikc@siadlak.com
3. Alert 🚨 na Slacku: treść wskazuje node i błąd; najczęstsze: wygasły OAuth Google (re-connect credentialu), token MailerLite (rotacja → zaktualizuj credential „MailerLite Bearer")
4. Mail nie wyszedł, subskrybent w grupie: MailerLite → Automations → activity (group-join nie odpala się, jeśli osoba już była w grupie)

## Zmiana treści maila
MailerLite → Automations → edytuj email. Zero zmian w n8n.

## Znane ograniczenia v1
- reschedule/cancel: ręcznie (Slack przypomina)
- partial failure: jeśli padnie MailerLite, Todoist/Slack mogły już się wykonać — po naprawie sprawdź duplikaty przed ponownym uruchomieniem
- echo utworzenia (update <60 s po created) jest pomijane; update Google Meet later niż 60 s da fałszywe „🔁 ZMIANA" (rzadkie, ignoruj)
```

Dostosuj do rzeczywistych wyników E2E (np. wpisz ograniczenie cancel, jeśli contingency z Task 9 się zmaterializowało).

- [ ] **Step 2: Commit + push**

```bash
git add automation/n8n/README.md
git commit -m "docs(automation): add discovery follow-up runbook"
git push
```

- [ ] **Step 3: Przekaż Ludwikowi zamknięcie**

Wiadomość: workflow aktywny, checklist E2E zielony (lub z odchyleniami), obserwacja realnych rezerwacji 1–2 tyg. (spec §Plan testów pkt 5), przypomnienie o rotacji klucza n8n API i usunięciu go z historii czatu/notatek.
