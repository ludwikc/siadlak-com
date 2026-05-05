import type { LucideIcon } from "lucide-react";
import {
  DollarSign,
  Clock,
  Target,
  Brain,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

export interface MythRealityItem {
  myth: string;
  reality: string;
  icon: LucideIcon;
  mythColor: string;
  realityColor: string;
}

export const HAKOWANIE_OBJECTIONS: MythRealityItem[] = [
  {
    myth: "Mam już kursy produktywności i nie zadziałały.",
    reality:
      'Właśnie dlatego ten jest inny. Większość kursów daje Ci jeden system i mówi "stosuj". A potem, gdy nie działa, mówi "nie starasz się wystarczająco". To jest jak sprzedawanie butów w jednym rozmiarze i obwinianie ludzi, że mają złe stopy. Program Produktywność nie jest kursem do przerobienia - to aplikacja mentalna, którą instalujesz raz, a która zostaje z Tobą na zawsze. Razem budujesz swój system, dopasowany do Twojego życia. I już nigdy nie będziesz potrzebować kolejnego "kursu produktywności".',
    icon: Target,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie będę mieć czasu, żeby przerabiać kurs.",
    reality:
      "To jest mój ulubiony argument. Jeśli nie masz czasu na naukę produktywności, to jest najlepszy dowód na to, że jej potrzebujesz. Program jest zaprojektowany dla ludzi, którzy naprawdę nie mają czasu — lekcje trwają ~10 minut, więc 15-20 minut dziennie wystarczy.",
    icon: Clock,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie umiem utrzymać dyscypliny.",
    reality:
      "Doskonale. Bo ten program nie polega na dyscyplinie. Polega na systemach, które działają nawet wtedy, gdy nie masz ochoty. Dyscyplina to plan B. Dobry system to plan A.",
    icon: Brain,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Czy to mi się zwróci?",
    reality:
      "Jeśli zaoszczędzisz 1 godzinę dziennie - to 365 godzin rocznie × Twoja stawka godzinowa. Nawet przy 50 zł/h to 18 250 zł. Inwestycja 1 497 zł zwraca się w 2-3 miesiące. A to jest konserwatywna kalkulacja - i pomijam fakt, że to instalacja na całe życie, nie na rok.",
    icon: DollarSign,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie ufam guru z internetu.",
    reality:
      "I słusznie. Ja też nie. Nie jestem guru - jestem praktykiem. Lata doświadczenia, setki klientów, współpraca z międzynarodowymi firmami. I 30-dniowa gwarancja zwrotu, bo nie boję się, że będziesz chciał oddać.",
    icon: ShieldCheck,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Wiedza jest za darmo w internecie.",
    reality:
      "Tak. I samochód możesz zbudować z części ze szrotu. Pytanie, ile czasu chcesz na to poświęcić - i czy efekt będzie jeździł. Ja przeszedłem przez tysiące godzin materiałów, żeby wybrać te 5%, które naprawdę działają. Ty dostajesz gotowy, przetestowany pakiet.",
    icon: Lightbulb,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
];
