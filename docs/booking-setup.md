# Rezerwacja terminów szkoleń dla centrów szkoleniowych

Prywatne linki (bez indeksowania, poza nawigacją):

- `https://siadlak.com/booking-center/asseco`
- `https://siadlak.com/booking-center/glasspaper`

Stare linki `/rezerwacja/<centrum>` przekierowują na nowe.

Centra dodajesz w `src/config/booking/catalog.ts` (`CENTERS`). Tam też są domyślne
(oficjalne) długości szkoleń (`OFFICIAL_DAYS`).

## Jak to działa

1. Centrum wybiera szkolenie z listy albo wpisuje własne, potem liczbę dni (domyślnie oficjalna długość, 1–5).
2. Kalendarz pokazuje dni startu, od których jest tyle wolnych dni roboczych pod rząd w tym samym tygodniu
   (bez weekendów), w oknie od jutra do 3 miesięcy do przodu.
3. Dzień jest zajęty, jeśli w kalendarzu głównym jest wydarzenie całodniowe albo wydarzenie
   nachodzące na 9:00–17:00 (czasu warszawskiego). Pomijane są: odwołane, odrzucone, oznaczone jako
   „wolny" (tylko godzinowe) oraz „lokalizacja pracy" i urodziny.
4. Klient widzi tylko wolne/zajęte — żadnych szczegółów wydarzeń.
5. Po wysłaniu formularza serwer ponownie sprawdza dostępność i tworzy w kalendarzu wstępne,
   całodniowe wydarzenie `[Blocker] DP-600 – Asseco` ze wszystkimi danymi w opisie.

**Zatwierdzenie:** odpisz klientowi i zmień tytuł wydarzenia (usuń `[Blocker]`).
**Odrzucenie:** odpisz klientowi i usuń wydarzenie.

## Konfiguracja Google OAuth (jednorazowo)

1. [Google Cloud Console](https://console.cloud.google.com/) → nowy projekt (np. `siadlak-booking`).
2. **APIs & Services → Library** → włącz **Google Calendar API**.
3. **OAuth consent screen** → typ **Internal** (konto Workspace siadlak.com). Przy typie
   „External" w trybie testowym refresh token wygasa po 7 dniach.
4. **Credentials → Create credentials → OAuth client ID** → *Web application*.
   Authorized redirect URI: `https://developers.google.com/oauthplayground`.
5. Otwórz [OAuth Playground](https://developers.google.com/oauthplayground) → ikona zębatki →
   zaznacz *Use your own OAuth credentials* → wklej Client ID i Client secret.
6. W polu scope wpisz `https://www.googleapis.com/auth/calendar.events` → *Authorize APIs* →
   zaloguj się jako **ludwikc@siadlak.com** → *Exchange authorization code for tokens* → skopiuj
   **Refresh token**.
7. Vercel → projekt → **Settings → Environment Variables** (Production):

   | Zmienna | Wartość |
   | --- | --- |
   | `GOOGLE_CLIENT_ID` | Client ID z kroku 4 |
   | `GOOGLE_CLIENT_SECRET` | Client secret z kroku 4 |
   | `GOOGLE_REFRESH_TOKEN` | Refresh token z kroku 6 |
   | `BOOKING_CALENDAR_ID` | opcjonalnie, domyślnie `primary` |
   | `BOOKING_ALERT_WEBHOOK` | opcjonalnie, webhook Discorda — ping przy każdej prośbie |

8. Redeploy. Test: `https://siadlak.com/api/booking?center=asseco` powinno zwrócić
   `{"ok":true,"from":…,"freeDays":[…]}`. Odpowiedź `calendar-not-configured` oznacza brak zmiennych.
