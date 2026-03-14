import type { LucideIcon } from "lucide-react";
import {
  DollarSign,
  Clock,
  TrendingUp,
  AlertTriangle,
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

export interface ObjectionItem {
  value: string;
  icon: LucideIcon;
  title: string;
  color: string;
  content: {
    intro: string;
    paragraphs: string[];
    highlight?: string;
    conclusion: string;
  };
}

export const HAKOWANIE_OBJECTIONS: MythRealityItem[] = [
  {
    myth: "Mam już kursy produktywności i nie zadziałały.",
    reality:
      'Właśnie dlatego ten jest inny. Większość kursów daje Ci jeden system i mówi "stosuj". A potem, gdy nie działa, mówi "nie starasz się wystarczająco". To jest jak sprzedawanie butów w jednym rozmiarze i obwinianie ludzi, że mają złe stopy. Program Produktywność jest szyty na miarę — razem budujesz swój system, dopasowany do Twojego życia.',
    icon: Target,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie będę mieć czasu, żeby przerabiać kurs.",
    reality:
      "To jest mój ulubiony argument. Jeśli nie masz czasu na naukę produktywności, to jest najlepszy dowód na to, że jej potrzebujesz. Program jest zaprojektowany dla ludzi, którzy naprawdę nie mają czasu — 15-20 minut dziennie wystarczy.",
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
      "Jeśli zaoszczędzisz 1 godzinę dziennie — to 365 godzin rocznie × Twoja stawka godzinowa. Nawet przy 50 zł/h to 18 250 zł. Inwestycja 1 197 zł zwróci się w pierwszy miesiąc. A to jest konserwatywna kalkulacja.",
    icon: DollarSign,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie ufam guru z internetu.",
    reality:
      "I słusznie. Ja też nie. Nie jestem guru — jestem praktykiem. Lata doświadczenia, setki klientów, współpraca z międzynarodowymi firmami. I 30-dniowa gwarancja zwrotu, bo nie boję się, że będziesz chciał oddać.",
    icon: ShieldCheck,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Wiedza jest za darmo w internecie.",
    reality:
      "Tak. I samochód możesz zbudować z części ze szrotu. Pytanie, ile czasu chcesz na to poświęcić — i czy efekt będzie jeździł. Ja przeszedłem przez tysiące godzin materiałów, żeby wybrać te 5%, które naprawdę działają. Ty dostajesz gotowy, przetestowany pakiet.",
    icon: Lightbulb,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
];

export const SILNA_GLOWA_OBJECTIONS: ObjectionItem[] = [
  {
    value: "money",
    icon: DollarSign,
    title: "Nie mam teraz pieniędzy",
    color: "red",
    content: {
      intro: "W tym cały problem.",
      paragraphs: [
        "Twój mental blokuje Cię przed zarobieniem dobrych pieniędzy. I będzie Cię blokował przez całe życie, jeśli tak to zostawisz.",
        "Otoczenie nauczyło Cię myśleć źle o pieniądzach. Że są domeną chciwych i chytrych ludzi. Że można je stracić.",
      ],
      highlight:
        "Twój umysł broni Cię przed dużymi pieniędzmi! Na pewno masz marzenia. Bez pieniędzy ich nie zrealizujesz. Musisz przełamać ten schemat.",
      conclusion:
        "Gdyby Twój umysł był zaprogramowany na dobrą kasę, to już byś ją miał. Osobiście wolę sam decydować o tym, ile zarabiam 🙂",
    },
  },
  {
    value: "time",
    icon: Clock,
    title: "Nie mam czasu na kursy",
    color: "orange",
    content: {
      intro:
        "Oczywiście. Świat pędzi, nie czeka, presja, hustlowanie, wyścig szczurów. Gnasz ze spotkania na spotkanie. Gdzie tu jeszcze wcisnąć kurs?",
      paragraphs: [
        "Ale pomyśl o tych wszystkich momentach, kiedy się martwisz. Kiedy nie możesz zasnąć. Kiedy łapiesz się na rozpamiętywaniu stresujących sytuacji.",
      ],
      highlight:
        "Ile czasu na to tracisz? Ile czasu możesz odzyskać? Pomyśl o tym, jak kolejne trudne wydarzenia z życia powstrzymują Cię przed działaniem. Ile masz takich złych dni? Ile są warte w przeliczeniu na pieniądze?",
      conclusion: "",
    },
  },
  {
    value: "roi",
    icon: TrendingUp,
    title: "Czy to mi się zwróci?",
    color: "green",
    content: {
      intro:
        "Warren Buffett powiedział, że najlepszą inwestycją jest inwestycja w siebie. Jeśli tak mówi najwybitniejszy inwestor wszech czasów, to widocznie musi tak być.",
      paragraphs: [
        "Cokolwiek robisz w życiu, czymkolwiek się zajmujesz, Twój mental pozwoli Ci osiągać cele, ale też przed nimi powstrzyma.",
      ],
      highlight:
        '"Nie trafiłem ponad 9000 rzutów w moim życiu. Przegrałem prawie 300 meczów. 26 razy powierzono mi zwycięski rzut i nie trafiłem. Poniosłem porażkę raz po raz w moim życiu. I dlatego odnoszę sukcesy." - Michael Jordan',
      conclusion:
        "Bez odporności psychicznej nie ma sukcesu. Zainwestuj w siebie.",
    },
  },
  {
    value: "doubt",
    icon: AlertTriangle,
    title: "A jeśli mi nie pomoże?",
    color: "blue",
    content: {
      intro:
        "To pytanie też jest objawem słabej głowy. Wątpisz w siebie i swoje zdolności. Ale masz rację - jeśli się nie zdarzy cud, to faktycznie nic Ci nie pomoże.",
      paragraphs: [],
      highlight:
        "Ale ja oferuję coś lepszego niż cud: 30-dniową gwarancję zwrotu pieniędzy, sprawdzony system oparty na nauce, setki osób, którym już pomógł.",
      conclusion: "Jedyne ryzyko to pozostać tam, gdzie jesteś teraz.",
    },
  },
];
