import type { Locale } from "../mct/types";

export const BOOKING_EMAIL = "ludwikc@siadlak.com";
export const BOOKING_PHONE = "+48 510 666 531";
export const BOOKING_PHONE_TEL = "+48510666531";

const pl = {
  eyebrow: "Rezerwacja terminu szkolenia",
  title: (center: string) => `Termin szkolenia dla ${center}`,
  lead: "Wybierz szkolenie i liczbę dni, a kalendarz pokaże wolne terminy. Wysłanie formularza wstępnie rezerwuje termin — potwierdzę go mailowo, zwykle w ciągu jednego dnia roboczego.",
  sections: { training: "Szkolenie", date: "Termin (data rozpoczęcia)", details: "Szczegóły", contact: "Kontakt" },
  training: "Szkolenie",
  trainingPlaceholder: "Wybierz szkolenie",
  customOption: "Inne / własne szkolenie",
  customTraining: "Nazwa szkolenia",
  customPlaceholder: "np. Power Automate dla zaawansowanych",
  days: "Liczba dni",
  daysHint: (n: number) => `Domyślnie ${n} d. — możesz zmienić (1–5 dni, bez weekendów).`,
  pickTrainingFirst: "Najpierw wybierz szkolenie, a pokażę wolne terminy.",
  loading: "Sprawdzam kalendarz…",
  calendarHint: (days: number) =>
    days === 1
      ? "Kliknij dzień szkolenia. Do wyboru są tylko wolne dni robocze."
      : `Kliknij dzień rozpoczęcia. Do wyboru są tylko dni, od których mam ${days} wolne dni robocze pod rząd w tym samym tygodniu — zaznaczę cały blok.`,
  legend: { available: "Dostępny dzień rozpoczęcia", selected: "Twój termin", unavailable: "Niedostępny" },
  noSlots: (days: number) =>
    `W najbliższym kwartale nie ma ${days} wolnych dni roboczych pod rząd. Skontaktuj się ze mną, a coś zaproponuję:`,
  startLabel: "Rozpoczęcie",
  endLabel: "Zakończenie",
  delivery: "Forma",
  deliveryOptions: { remote: "Zdalnie", onsite: "Stacjonarnie" },
  city: "Miasto",
  language: "Język szkolenia",
  languageOptions: { pl: "Polski", en: "Angielski" },
  participants: "Liczba uczestników",
  notes: "Uwagi",
  notesPlaceholder: "Godziny, profil grupy, numer zamówienia — wszystko, co warto wiedzieć.",
  name: "Imię i nazwisko",
  email: "E-mail",
  phone: "Telefon",
  optional: "(opcjonalnie)",
  remembered: "Uzupełniłem Twoje dane z poprzedniej rezerwacji.",
  forget: "Wyczyść dane",
  submit: "Wyślij prośbę o termin",
  submitting: "Wysyłam…",
  contact: { questions: "Pytania?", write: "Napisz:", call: "lub zadzwoń:" },
  errors: {
    required: "To pole jest wymagane.",
    email: "Sprawdź adres e-mail.",
    startDate: "Wybierz termin w kalendarzu.",
    generic: "Nie udało się wysłać prośby. Spróbuj ponownie albo skontaktuj się ze mną:",
    slotTaken: "Ten termin został właśnie zajęty. Kalendarz jest odświeżony — wybierz inny dzień.",
    calendar: "Kalendarz jest chwilowo niedostępny. Skontaktuj się ze mną, a ustalimy termin:",
  },
  done: {
    title: "Dziękuję — termin jest wstępnie zarezerwowany",
    body: "Potwierdzę rezerwację mailowo, zwykle w ciągu jednego dnia roboczego.",
    summary: "Podsumowanie rezerwacji",
    status: "Wstępna rezerwacja",
    labels: {
      center: "Centrum",
      training: "Szkolenie",
      dates: "Termin",
      delivery: "Forma",
      language: "Język",
      participants: "Uczestnicy",
      contact: "Kontakt",
    },
    faster: "Potrzebujesz szybszego potwierdzenia?",
    call: "Zadzwoń",
    again: "Zarezerwuj kolejny termin",
  },
  dayUnit: (n: number): string => (n === 1 ? "dzień" : "dni"),
};

type BookingCopy = typeof pl;

const en: BookingCopy = {
  eyebrow: "Training date request",
  title: (center: string) => `Training dates for ${center}`,
  lead: "Pick a training and the number of days, and the calendar shows the dates I have free. Sending the form provisionally reserves the date — I confirm by email, usually within one working day.",
  sections: { training: "Training", date: "Dates (start date)", details: "Details", contact: "Contact" },
  training: "Training",
  trainingPlaceholder: "Choose a training",
  customOption: "Other / custom training",
  customTraining: "Training name",
  customPlaceholder: "e.g. Advanced Power Automate",
  days: "Number of days",
  daysHint: (n: number) => `Default ${n} ${n === 1 ? "day" : "days"} — you can change it (1–5 days, no weekends).`,
  pickTrainingFirst: "Choose a training first and I'll show the free dates.",
  loading: "Checking the calendar…",
  calendarHint: (days: number) =>
    days === 1
      ? "Click the training day. Only free working days can be picked."
      : `Click the start day. Only days followed by ${days} free working days in the same week can be picked — the whole block gets highlighted.`,
  legend: { available: "Available start day", selected: "Your dates", unavailable: "Unavailable" },
  noSlots: (days: number) =>
    `There are no ${days} consecutive free working days in the next quarter. Get in touch and I'll suggest something:`,
  startLabel: "Starts",
  endLabel: "Ends",
  delivery: "Format",
  deliveryOptions: { remote: "Remote", onsite: "On-site" },
  city: "City",
  language: "Training language",
  languageOptions: { pl: "Polish", en: "English" },
  participants: "Number of participants",
  notes: "Notes",
  notesPlaceholder: "Hours, group profile, PO number — anything worth knowing.",
  name: "Full name",
  email: "Email",
  phone: "Phone",
  optional: "(optional)",
  remembered: "I've filled in your details from your previous request.",
  forget: "Clear details",
  submit: "Send date request",
  submitting: "Sending…",
  contact: { questions: "Questions?", write: "Email", call: "or call" },
  errors: {
    required: "This field is required.",
    email: "Check the email address.",
    startDate: "Pick a date in the calendar.",
    generic: "The request didn't go through. Try again or get in touch:",
    slotTaken: "Those dates were just taken. The calendar has been refreshed — pick another day.",
    calendar: "The calendar is unavailable right now. Get in touch and we'll agree the dates:",
  },
  done: {
    title: "Thank you — the dates are provisionally reserved",
    body: "I'll confirm the booking by email, usually within one working day.",
    summary: "Booking summary",
    status: "Provisional reservation",
    labels: {
      center: "Training center",
      training: "Training",
      dates: "Dates",
      delivery: "Format",
      language: "Language",
      participants: "Participants",
      contact: "Contact",
    },
    faster: "Need a faster confirmation?",
    call: "Call",
    again: "Request another date",
  },
  dayUnit: (n: number): string => (n === 1 ? "day" : "days"),
};

export const bookingCopy: Record<Locale, BookingCopy> = { pl, en };
