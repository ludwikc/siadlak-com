# Discovery Call Follow-up — rejestr konfiguracji

Sekrety żyją POZA repo (scratchpad sesji / notatki Ludwika). Tu tylko identyfikatory.

## Stałe
- n8n: https://ula285-20285.wykr.es
- Kalendarz: ludwikc@siadlak.com
- Slack channel: C08HCGL5G0M
- Todoist projekt CRM: 6P79PcCFvr79qX2X
- Slack credential: KnH3d0aP27gBB42F
- Todoist credential: 8UedYTvPCL4OBFqK (poprzedni wpis 8oqfcW1IjExZk6rn nie istniał w n8n; API przy tworzeniu workflow #Task8 dopasowało po nazwie "Todoist account" i użyło realnego ID — poprawione tu)

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
