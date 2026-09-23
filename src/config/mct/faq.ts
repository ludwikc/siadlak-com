import { policies } from "./policies";
import type { FaqItem } from "./types";

export const faq: FaqItem[] = [
  {
    id: "invoices",
    scope: ["hub", "course", "briefing", "enterprise"],
    question: { en: "How does invoicing work?", pl: "Jak wygląda fakturowanie?" },
    answer: {
      en: "You receive a VAT invoice from a Polish company, payable by bank transfer in EUR or PLN. Public seats: pro-forma on request, invoice on confirmation, 14-day terms. Enterprise: milestone invoicing on request.",
      pl: "Dostajesz fakturę VAT od polskiej firmy, płatną przelewem w EUR albo PLN. Miejsca na szkoleniach otwartych: pro forma na życzenie, faktura po potwierdzeniu, termin płatności 14 dni. Enterprise: na życzenie fakturowanie etapami.",
    },
  },
  {
    id: "po",
    scope: ["hub", "course", "briefing", "enterprise"],
    question: { en: "Can you work with our purchase order?", pl: "Czy pracujesz na naszym zamówieniu (PO)?" },
    answer: {
      en: "Yes. Send the PO number with the request and it appears on the invoice. Vendor onboarding forms: I fill them, you send them.",
      pl: "Tak. Podaj numer PO razem z zapytaniem, a pojawi się na fakturze. Formularze rejestracji dostawcy wypełniam ja, Ty tylko je wysyłasz.",
    },
  },
  {
    id: "vat",
    scope: ["hub", "course", "briefing", "enterprise"],
    question: { en: "Are prices net or gross?", pl: "Ceny są netto czy brutto?" },
    answer: {
      en: "Prices are net. Polish companies: +23% VAT. EU companies with a valid VAT ID: reverse charge, 0% on the invoice, you self-account. Outside the EU: no Polish VAT.",
      pl: "Ceny są netto. Firmy z Polski: +23% VAT. Firmy z UE z ważnym numerem VAT UE: odwrotne obciążenie, 0% na fakturze, VAT rozliczasz u siebie. Spoza UE: bez polskiego VAT.",
    },
  },
  {
    id: "nda",
    scope: ["enterprise", "hub"],
    question: { en: "Will you sign our NDA?", pl: "Podpiszesz naszą umowę o poufności (NDA)?" },
    answer: {
      en: "Yours or mine, before the scope call if you prefer. I have signed NDAs with defence and finance clients; I do not list what I cannot.",
      pl: "Twoją albo moją, jeśli wolisz, jeszcze przed rozmową o zakresie. Podpisywałem NDA z klientami z sektora obronnego i finansowego. Nie wymieniam tych, których wymieniać nie mogę.",
    },
  },
  {
    id: "cancel-public",
    scope: ["hub", "course"],
    question: {
      en: "What if a participant cannot attend a public class?",
      pl: "Co, jeśli uczestnik nie może przyjść na szkolenie otwarte?",
    },
    answer: policies.cancellationPublic,
  },
  {
    id: "cancel-private",
    scope: ["briefing", "enterprise"],
    question: {
      en: "What are the cancellation terms for a private run?",
      pl: "Jakie są warunki odwołania szkolenia zamkniętego?",
    },
    answer: policies.cancellationPrivate,
  },
  {
    id: "recording",
    scope: ["hub", "course", "enterprise"],
    question: { en: "Are sessions recorded?", pl: "Czy zajęcia są nagrywane?" },
    answer: policies.recording,
  },
  {
    id: "discounts",
    scope: ["hub", "course"],
    question: { en: "Is there a discount for several seats?", pl: "Czy jest rabat za kilka miejsc?" },
    answer: {
      en: "3 or more seats: 10% off. Six or more: ask for a private-run quote and I show you both numbers.",
      pl: "Od 3 miejsc: 10% rabatu. Od sześciu warto zapytać o wycenę szkolenia zamkniętego. Pokażę Ci obie kwoty obok siebie.",
    },
  },
  {
    id: "onsite",
    scope: ["hub", "enterprise"],
    question: { en: "Can you train on-site?", pl: "Czy prowadzisz szkolenia na miejscu u klienta?" },
    answer: {
      en: "On-site across the EU, UK, US and Middle East. Travel at cost, agreed up front, or a flat travel fee per engagement. Remote-first when the team is spread out.",
      pl: "Na miejscu w całej UE, w Wielkiej Brytanii, USA i na Bliskim Wschodzie. Dojazd po kosztach, uzgodnionych z góry, albo stała opłata za dojazd na całe zlecenie. Gdy zespół jest rozproszony, domyślnie pracujemy zdalnie.",
    },
  },
  {
    id: "language",
    scope: ["hub", "course", "briefing", "enterprise"],
    question: { en: "Which language do you train in?", pl: "W jakim języku prowadzisz szkolenia?" },
    answer: {
      en: "English or Polish. Materials in English (official Microsoft courseware), delivery in either language.",
      pl: "Po angielsku albo po polsku. Materiały są po angielsku (oficjalne materiały Microsoft), a zajęcia prowadzę w jednym z tych dwóch języków.",
    },
  },
  {
    id: "certification",
    scope: ["hub", "course"],
    question: {
      en: "Do the courses prepare for Microsoft certification?",
      pl: "Czy kursy przygotowują do certyfikacji Microsoft?",
    },
    answer: {
      en: "Courses map to Microsoft exams (e.g. DP-600 → Fabric Analytics Engineer Associate). Exam vouchers are not included. I tell you honestly whether the exam is worth your team's time. Essentials editions cover the exam-relevant core of the official 4-day outline in 2 intensive days; I say which modules I trim.",
      pl: "Kursy odpowiadają egzaminom Microsoft (np. DP-600 → Fabric Analytics Engineer Associate). Vouchery egzaminacyjne nie są wliczone w cenę. Mówię wprost, czy egzamin jest wart czasu Twojego zespołu. Wersje Essentials obejmują to, co z oficjalnego 4-dniowego programu liczy się na egzaminie, w 2 intensywne dni. Z góry mówię, które moduły skracam.",
    },
  },
];
