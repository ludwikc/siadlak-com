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
    myth: "Mam już kursy produktywności i nie zadziałały",
    reality:
      "To dlatego, że były ogólne. Hakowanie Produktywności jest spersonalizowane pod Ciebie. Nie ma jednego uniwersalnego systemu - jest Twój system, który faktycznie będzie działał w Twoim życiu.",
    icon: Target,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie będę mieć czasu, żeby przerabiać kurs",
    reality:
      "Jeśli nie masz czasu na naukę produktywności, to tym bardziej jej potrzebujesz! Program jest zaprojektowany dla zapracowanych ludzi - 15-20 minut dziennie wystarczy.",
    icon: Clock,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie umiem utrzymać dyscypliny",
    reality:
      "Właśnie dlatego potrzebujesz tego kursu! Nie liczymy na Twoją dyscyplinę - budujemy systemy, które działają nawet gdy nie masz ochoty.",
    icon: Brain,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Czy to mi się zwróci?",
    reality:
      "Jeśli zaoszczędzisz 1 godzinę dziennie przez rok, to 365 godzin × Twoja stawka godzinowa. Nawet przy 50 zł/h to 18 250 zł rocznie. Inwestycja 1197 zł zwróci się w pierwszy miesiąc.",
    icon: DollarSign,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Nie ufam guru z Internetu",
    reality:
      "Słusznie! Nie jestem guru, jestem praktykiem. Lata doświadczenia, setki klientów, współpraca z największymi firmami. Sprawdź moje referencje.",
    icon: ShieldCheck,
    mythColor: "from-red-500 to-red-600",
    realityColor: "from-green-500 to-green-600",
  },
  {
    myth: "Wiedza jest za darmo w Internecie",
    reality:
      "Tak, ale nie masz czasu przebrnąć przez tysiące godzin materiałów, żeby znaleźć te 5% wartościowych treści. Ja już to zrobiłem za Ciebie.",
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
