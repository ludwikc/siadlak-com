// DRAFT policies — owner to confirm before launch (see plan Owner inputs).
import type { Localized } from "./types";

export const policies: Record<"paymentTerms" | "cancellationPublic" | "cancellationPrivate" | "recording", Localized> = {
  paymentTerms: {
    en: "Invoice on confirmation, 14-day payment terms. Pro-forma on request.",
    pl: "Faktura po potwierdzeniu, termin płatności 14 dni. Pro forma na życzenie.",
  },
  cancellationPublic: {
    en: "Substitute a colleague any time, free. Cancel 14+ days before: full refund or credit. Under 14 days: credit toward any date within 12 months. No-show: no refund. If I cancel or move a date: full refund plus first pick of the next date.",
    pl: "W każdej chwili możesz bezpłatnie wysłać kogoś z zespołu w swoje miejsce. Rezygnacja co najmniej 14 dni przed terminem: pełny zwrot albo kredyt. Później niż 14 dni przed: kredyt na dowolny termin w ciągu 12 miesięcy. Nieobecność bez rezygnacji: bez zwrotu. Jeśli to ja odwołam albo przesunę termin: pełny zwrot i pierwszeństwo przy wyborze kolejnej daty.",
  },
  cancellationPrivate: {
    en: "21+ days before: free. 8–20 days: 50%. 7 days or fewer: 100%. One free reschedule with 14+ days' notice.",
    pl: "Co najmniej 21 dni przed terminem: bez opłat. 8–20 dni: 50%. 7 dni lub mniej: 100%. Jedna bezpłatna zmiana terminu, jeśli dasz znać co najmniej 14 dni wcześniej.",
  },
  recording: {
    en: "Public classes are not recorded: eight people from different companies, hands-on labs, real questions about real systems. You get the deck, lab files and 30 days of email Q&A. Private runs can be recorded on request for internal use only.",
    pl: "Szkoleń otwartych nie nagrywam: osiem osób z różnych firm, praktyczne laboratoria, prawdziwe pytania o prawdziwe systemy. Dostajesz slajdy, pliki do laboratoriów i 30 dni odpowiedzi na pytania mailowo. Szkolenia zamknięte mogę nagrać na życzenie, wyłącznie do użytku wewnętrznego.",
  },
};
