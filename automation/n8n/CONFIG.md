# Discovery Call Follow-up — rejestr konfiguracji

Sekrety żyją POZA repo (scratchpad sesji / notatki Ludwika). Tu tylko identyfikatory.

## Stałe
- n8n: https://ula285-20285.wykr.es
- Kalendarz: ludwikc@siadlak.com
- Slack channel: C08HCGL5G0M
- Todoist projekt CRM: 6P79PcCFvr79qX2X
- Slack credential: KnH3d0aP27gBB42F
- Todoist credential: Todoist Bearer, RdHRFGa0aOV0YGA8 (httpHeaderAuth; używany przez node HTTP Request „Create Todoist Task". Stary credential todoistApi 8UedYTvPCL4OBFqK jest martwy — legacy Todoist API zwraca 410 Gone)

## Wartości (uzupełniane w trakcie wdrożenia)
- GCAL_CRED_ID: O7J6rUJcu90TGtSu
- ML_CRED_ID: LNvQCU8e8mnYdcwT
- CRM_CRED_ID: qDLoAAKeIzPr4u80
- ML_GROUP_ID: 195147034085296057
- FILTER_TERM: Sesja Discovery (pole: summary)
- FILTER_COND_2: description zawiera "Booked by"
- NAME_SOURCE: description — blok "Booked by": linia 1 = imię i nazwisko, linia 2 = email; pytanie formularza "Z jakim tematem przychodzisz?" → topic
- ERROR_WF_ID: y7NbiALAXFFBjvA9
- MAIN_WF_ID: 9ZEgF3LPgUHbK4Pc

## CRM (siadlak-portal)
- Supabase: taswmdahpcubiyrgsjki
- Endpoint: https://taswmdahpcubiyrgsjki.supabase.co/functions/v1/crm-booking
- Sekret: CRM_BOOKING_SECRET (wartość POZA repo)
- ML_AUTOMATION_ID: 195172847812871467 (Discovery Call — mail przygotowujący; trigger: join grupy Discovery — Booked; aktywacja ręczna w UI)

## Wyniki testów E2E (2026-08-07 / 2026-08-08)

- Nowa rezerwacja (created): PASS — exec 29 (pierwsza rezerwacja, wszystkie 4 kanały zielone, CRM `created:true`), exec 32 (retest po dodaniu triggera Cancelled Booking, CRM dedup `created:false` — potwierdzone: jeden otwarty deal per kontakt)
- Reschedule (trigger Updated Booking, event nadal aktywny): PASS — exec 23; Slack 🔁 ZMIANA, echo utworzenia (<60s) poprawnie pominięte
- Cancel — hard delete (trigger Cancelled Booking): PASS — exec 35; Slack ❌ ODWOŁANE; hard-deleted event zwrócił pełny payload w teście, więc fallback na stripped payload pozostaje nieprzetestowany
- Mail przygotowujący (automatyzacja ML 195172847812871467): PASS — wysłany po group-join, potwierdzone otwarcie przez odbiorcę
- Error handler → alert Slack: PASS — exec 16, exec 21; 2/2 skuteczności w produkcji
- Negative filter (event bez „Sesja Discovery" / „Booked by"): PASS — exec 14; workflow poprawnie nie odpalił żadnej akcji

Uwaga: cancel przez soft-update (`status: cancelled` bez hard-delete) nie wystąpił w testach — appointment schedule Google przy odwołaniu usuwa event (hard-delete). Ścieżka „Updated Booking → Cancelled? = tak" jest zaimplementowana jako zabezpieczenie, ale nieobserwowana w E2E; realną ścieżkę cancel obsłużył trigger Cancelled Booking (exec 35 powyżej).

Pełna historia dochodzenia do zielonego stanu (fix roundy: dead Todoist API → HTTP Request na `api.todoist.com/api/v1/tasks`; hard-delete cancel → dedykowany trigger `eventCancelled`) w `.superpowers/sdd/2026-08-07-discovery-call-followup/progress.md`, taski 8-9.
