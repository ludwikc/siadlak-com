import type { SEOProps } from '@/components/SEO';

export interface TopicalConfig {
  primaryTopic: string;
  secondaryTopics?: string[];
  audience?: string;
  intent?: 'informational' | 'commercial' | 'navigational' | 'transactional';
  significantLinks?: string[];
}

export interface RouteConfig {
  path: string;
  seo: SEOProps;
  topical?: TopicalConfig;
}

export const seoRouteConfig: RouteConfig[] = [
  {
    path: '/',
    seo: {
      title: 'Ludwik C. Siadlak',
      description: 'Ludwik C. Siadlak to coach produktywnosci i uwaznosci z 19-letnim doswiadczeniem. Pracuje z profesjonalistami IT poprzez mentoring 1:1 i samodzielne programy mentalne (Aplikacje Mentalne).',
      keywords: 'Ludwik Siadlak, coach produktywnosci, coaching uwaznosci, rozwoj osobisty, tech professionals, Diamentowy Umysl',
      url: '/',
      type: 'website'
    },
    topical: {
      primaryTopic: 'productivity coaching',
      secondaryTopics: ['mindfulness', 'mental resilience', 'AI-resistant leadership', 'Diamond Mind methodology'],
      intent: 'commercial',
      significantLinks: ['/program', '/discovery', '/about', '/podcast/life-hacking'],
    }
  },
  {
    path: '/about',
    seo: {
      title: 'O mnie - Ludwik C. Siadlak',
      description: 'Ludwik C. Siadlak: 19 lat jako Certyfikowany Trener Microsoft, absolwent Oxford Brookes, coach produktywnosci i uwaznosci. Zalozyciel Siadlak.com, DeepWork.pl i Fundacji Hackerzy.pl.',
      keywords: 'Ludwik Siadlak, coach, trener Microsoft, Oxford Brookes, produktywnosc, uwaznosc, biografia',
      url: '/about'
    },
    topical: {
      primaryTopic: 'personal story and credentials',
      secondaryTopics: ['coaching experience', 'Microsoft Certified Trainer', 'Diamond Way Buddhism'],
      intent: 'informational',
      significantLinks: ['/discovery', '/program'],
    }
  },
  {
    path: '/contact',
    seo: {
      title: 'Kontakt',
      description: 'Skontaktuj sie z Ludwikiem C. Siadlakiem. Umow sesje Discovery lub napisz w sprawie wspolpracy.',
      keywords: 'kontakt, Ludwik Siadlak, konsultacja, wspolpraca',
      url: '/contact'
    }
  },
  {
    path: '/program',
    seo: {
      title: 'Aplikacje Mentalne - Programy Rozwojowe',
      description: 'Cztery samodzielne programy mentalne: Produktywnosc, Silna Glowa (odpornosc psychiczna), Uwazne Zycie (mindfulness) i Meski Kompas. Kazdy instaluje sie raz i zostaje na zawsze.',
      keywords: 'aplikacje mentalne, programy rozwojowe, produktywnosc, odpornosc psychiczna, uwaznosc, meski kompas',
      url: '/program',
      type: 'website'
    },
    topical: {
      primaryTopic: 'mental apps and self-paced programs',
      secondaryTopics: ['productivity', 'mental resilience', 'mindfulness', 'masculine development'],
      intent: 'commercial',
      significantLinks: ['/program/produktywnosc', '/program/odpornosc', '/program/uwaznosc', '/program/meskosc', '/discovery'],
    }
  },
  {
    path: '/program/produktywnosc',
    seo: {
      title: 'Program: Produktywnosc - Aplikacja Mentalna',
      description: 'Program mentalny produktywnosci (4-6 tygodni) autorstwa Ludwika C. Siadlaka. Zmienia sposob podejscia do pracy, czasu i energii. 100+ uczestnikow, ocena 4.9/5.0. Instaluje sie raz, zostaje na zawsze.',
      keywords: 'produktywnosc, program mentalny, zarzadzanie czasem, deep work, focus, Ludwik Siadlak',
      url: '/program/produktywnosc',
      type: 'course'
    },
    topical: {
      primaryTopic: 'productivity mental program',
      secondaryTopics: ['focus management', 'energy management', 'procrastination'],
      intent: 'commercial',
      significantLinks: ['/program', '/discovery', '/testimonials'],
    }
  },
  {
    path: '/program/lifeos-system-upgrade',
    seo: {
      title: 'Life OS: System Upgrade - Mentoring 1:1',
      description: '8-tygodniowy program mentoringu 1:1 z Ludwikiem C. Siadlakiem. Dla liderow i profesjonalistow IT, ktorzy chca zmiany na poziomie tozsamosci, nie tylko nawykow. Maks. 5 osob jednoczesnie.',
      keywords: 'Life OS, mentoring 1:1, coaching, transformacja, Ludwik Siadlak, liderzy IT',
      url: '/program/lifeos-system-upgrade',
      type: 'course'
    },
    topical: {
      primaryTopic: '1:1 identity-level mentoring',
      secondaryTopics: ['Diamond Mind methodology', 'leadership transformation', 'executive coaching'],
      intent: 'commercial',
      significantLinks: ['/discovery', '/program', '/testimonials'],
    }
  },
  {
    path: '/program/odpornosc',
    seo: {
      title: 'Silna Glowa - Program Odpornosci Psychicznej',
      description: 'Program odpornosci psychicznej (6 tygodni) autorstwa Ludwika C. Siadlaka. Firewall mentalny, ktory zamienia presje w paliwo. 118+ uczestnikow, ocena 4.8/5.0.',
      keywords: 'odpornosc psychiczna, silna glowa, stres, presja, rezyliencja, Ludwik Siadlak',
      url: '/program/odpornosc',
      type: 'course'
    },
    topical: {
      primaryTopic: 'mental resilience program',
      secondaryTopics: ['stress management', 'pressure as fuel', 'mental toughness'],
      intent: 'commercial',
      significantLinks: ['/program', '/discovery'],
    }
  },
  {
    path: '/program/meskosc',
    seo: {
      title: 'Meski Kompas - Program dla Mezczyzn 30+',
      description: '5-tygodniowy program nawigacji zyciowej dla mezczyzn z analitycznym umyslem po 30-tce. System kompas-mapa-latarnia na paraliz analityczny. Autorstwa Ludwika C. Siadlaka.',
      keywords: 'meski kompas, mezczyzni 30+, nawigacja zyciowa, rozwoj mezczyzn, Ludwik Siadlak',
      url: '/program/meskosc',
      type: 'course',
      favicon: '/compass-favicon.png'
    },
    topical: {
      primaryTopic: 'masculine development and navigation',
      secondaryTopics: ['analysis paralysis', 'identity', 'values alignment'],
      intent: 'commercial',
      significantLinks: ['/program', '/discovery'],
    }
  },
  {
    path: '/podcast/life-hacking',
    seo: {
      title: 'Life Hacking Podcast',
      description: 'Podcast o hakach zyciowych, produktywnosci i optymalizacji codziennego funkcjonowania. Prowadzi Ludwik C. Siadlak.',
      keywords: 'life hacking, produktywnosc, optymalizacja, podcast, efektywnosc, Ludwik Siadlak',
      url: '/podcast/life-hacking',
      type: 'podcast'
    },
    topical: {
      primaryTopic: 'life hacking and productivity podcast',
      secondaryTopics: ['time management', 'deep work', 'practical strategies'],
      intent: 'informational',
    }
  },
  {
    path: '/podcast/uwazne-zycie',
    seo: {
      title: 'Uwazne Zycie Podcast',
      description: 'Podcast o uwaznosci, swiadomym zyciu i rownowadze w codziennosci. Prowadzi Ludwik C. Siadlak.',
      keywords: 'mindfulness, uwaznosc, rownowaga, swiadomosc, medytacja, Ludwik Siadlak',
      url: '/podcast/uwazne-zycie',
      type: 'podcast'
    },
    topical: {
      primaryTopic: 'mindfulness and conscious living podcast',
      secondaryTopics: ['meditation', 'balance', 'awareness'],
      intent: 'informational',
    }
  },
  {
    path: '/program/uwaznosc',
    seo: {
      title: 'Uwazne Zycie - Program Uwaznosci i Mindfulness',
      description: 'Program uwaznosci (4-6 tygodni) dla analitycznych umyslow i osob z ADHD. Praktyczna medytacja, ktora dziala w korku, na spotkaniu i w kolejce. Autorstwa Ludwika C. Siadlaka.',
      keywords: 'mindfulness, uwaznosc, medytacja, ADHD, program mentalny, Ludwik Siadlak',
      url: '/program/uwaznosc',
      type: 'course'
    },
    topical: {
      primaryTopic: 'mindfulness program for analytical minds',
      secondaryTopics: ['ADHD-friendly meditation', 'conscious living', 'attention training'],
      intent: 'commercial',
      significantLinks: ['/program', '/podcast/uwazne-zycie'],
    }
  },
  {
    path: '/program/7-technik',
    seo: {
      title: '7 Technik Produktywnosci, ktore dzialaja',
      description: 'Siedem sprawdzonych technik produktywnosci autorstwa Ludwika C. Siadlaka. Praktyczne metody zarzadzania czasem, energia i skupieniem.',
      keywords: '7 technik, produktywnosc, techniki mentalne, Ludwik Siadlak',
      url: '/program/7-technik',
      type: 'course'
    }
  },
  {
    path: '/webinar',
    seo: {
      title: 'Dolacz do spotkania online',
      description: 'Bezplatny webinar o rozwoju osobistym z Ludwikiem C. Siadlakiem. Praktyczna wiedza o produktywnosci, uwaznosci i odpornosci psychicznej.',
      keywords: 'webinar, bezplatne szkolenie, Ludwik Siadlak, rozwoj osobisty',
      url: '/webinar',
      type: 'event'
    }
  },
  {
    path: '/testimonials',
    seo: {
      title: '100+ Opinii Klientow Ludwika C. Siadlaka',
      description: 'Ponad 100 opinii od klientow z Polski, Norwegii, UK i innych krajow. Uczestnicy szkolen Microsoft, programow mentalnych i mentoringu 1:1.',
      keywords: 'opinie, referencje, Ludwik Siadlak, klienci, coaching, szkolenia Microsoft',
      url: '/testimonials'
    },
    topical: {
      primaryTopic: 'client testimonials and reviews',
      secondaryTopics: ['social proof', 'coaching results', 'Microsoft training feedback'],
      intent: 'informational',
      significantLinks: ['/program', '/discovery'],
    }
  },
  {
    path: '/newsletter',
    seo: {
      title: 'Lista Mailingowa - dolacz bezplatnie',
      description: 'Lista mailingowa Ludwika C. Siadlaka. Jedna mysl tygodniowo o produktywnosci, AI i sensie zycia. 150+ czytelnikow. Zero spamu.',
      keywords: 'newsletter, lista mailingowa, Ludwik Siadlak, produktywnosc, AI',
      url: '/newsletter'
    }
  },
  {
    path: '/discovery',
    seo: {
      title: 'Sesja Discovery - Bezplatna 30-minutowa rozmowa',
      description: 'Bezplatna 30-minutowa sesja diagnostyczna 1:1 z Ludwikiem C. Siadlakiem na Zoom. Prawdziwa diagnostyka, nie rozmowa sprzedazowa. Maks. 5 aktywnych klientow jednoczesnie.',
      keywords: 'sesja discovery, konsultacja, coaching, Ludwik Siadlak, mentoring',
      url: '/discovery'
    },
    topical: {
      primaryTopic: 'free diagnostic coaching session',
      secondaryTopics: ['1:1 consultation', 'Life OS assessment', 'coaching fit evaluation'],
      intent: 'transactional',
      significantLinks: ['/program/lifeos-system-upgrade', '/program'],
    }
  },
  {
    path: '/legal',
    seo: {
      title: 'Informacje Prawne',
      description: 'Regulaminy, polityka prywatnosci i inne informacje prawne dotyczace korzystania z serwisu Siadlak.com.',
      keywords: 'regulamin, polityka prywatnosci, prawo, warunki',
      url: '/legal',
      noindex: true,
    }
  },
  {
    path: '/legal/privacy',
    seo: {
      title: 'Polityka Prywatnosci',
      description: 'Polityka prywatnosci serwisu Siadlak.com. Informacje o ochronie danych osobowych zgodnie z RODO.',
      keywords: 'polityka prywatnosci, RODO, dane osobowe',
      url: '/legal/privacy',
      noindex: true,
    }
  },
  {
    path: '/legal/terms',
    seo: {
      title: 'Regulamin',
      description: 'Regulamin korzystania z serwisu Siadlak.com i oferowanych uslug.',
      keywords: 'regulamin, warunki korzystania',
      url: '/legal/terms',
      noindex: true,
    }
  },
  {
    path: '/help',
    seo: {
      title: 'Pomoc',
      description: 'Centrum pomocy Siadlak.com. Odpowiedzi na najczesciej zadawane pytania o programach, platnosci i wsparciu.',
      keywords: 'pomoc, FAQ, wsparcie, Siadlak.com',
      url: '/help'
    }
  },
  {
    path: '/sitemap',
    seo: {
      title: 'Mapa Strony',
      description: 'Pelna mapa strony Siadlak.com. Wszystkie programy, podcasty, webinary i zasoby w jednym miejscu.',
      keywords: 'mapa strony, nawigacja, struktura',
      url: '/sitemap'
    }
  },
  {
    path: '/oto',
    seo: {
      title: 'Oferta Specjalna',
      description: 'Wyjatkowa oferta programow rozwojowych Ludwika C. Siadlaka dostepna przez ograniczony czas.',
      keywords: 'oferta specjalna, promocja, Ludwik Siadlak',
      url: '/oto',
      noindex: true,
    }
  },
  {
    path: '/webinar/kod-kapitana',
    seo: {
      title: 'Kod Kapitana - Webinar',
      description: 'Webinar "Kod Kapitana" z Ludwikiem C. Siadlakiem o uwaznosci, ktora dziala w praktyce. Praktyczne techniki mindfulness dla profesjonalistow.',
      keywords: 'kod kapitana, webinar, uwaznosc, mindfulness, Ludwik Siadlak',
      url: '/webinar/kod-kapitana',
      type: 'event'
    }
  },
  {
    path: '/webinar/depresja',
    seo: {
      title: 'Dzien Walki z Depresja - Webinar',
      description: 'Stalem na peronie i chcialem zrobic jeden krok - opowiem jak z tego wrocilem. Ludwik C. Siadlak o depresji, odpornosci psychicznej i powrocie do zycia.',
      keywords: 'depresja, webinar, zdrowie psychiczne, odpornosc mentalna, Ludwik Siadlak',
      url: '/webinar/depresja',
      type: 'event'
    }
  },
  {
    path: '/webinar/live',
    seo: {
      title: 'Webinar Live',
      description: 'Webinar na zywo z Ludwikiem C. Siadlakiem.',
      keywords: 'webinar live, na zywo, Ludwik Siadlak',
      url: '/webinar/live',
      type: 'event',
      noindex: true,
    }
  },
  {
    path: '/webinar/expired',
    seo: {
      title: 'Webinar Zakonczony',
      description: 'Ten webinar juz sie zakonczyl. Zapisz sie na kolejne wydarzenia Ludwika C. Siadlaka.',
      keywords: 'webinar zakonczony, kolejne wydarzenia',
      url: '/webinar/expired',
      type: 'event',
      noindex: true,
    }
  },
  {
    path: '/webinar/replay',
    seo: {
      title: 'Nagranie Webinaru',
      description: 'Obejrzyj nagranie z webinaru Ludwika C. Siadlaka.',
      keywords: 'nagranie webinaru, Ludwik Siadlak',
      url: '/webinar/replay',
      type: 'event',
      noindex: true,
    }
  },
  {
    path: '/webinar/meski-kompas',
    seo: {
      title: 'Warsztat: Upgrade Systemu dla Analitykow 30+',
      description: '90-minutowy warsztat dla facetow z paralizem analitycznym. Ludwik Siadlak + Mateusz Lizak. Bez teorii - konkretny plan na poniedzialek.',
      keywords: 'warsztat, meski kompas, analitycy, programisci, produktywnosc',
      url: '/webinar/meski-kompas',
      type: 'event',
      favicon: '/compass-favicon.png'
    }
  },
  {
    path: '/wyzwanie',
    seo: {
      title: 'Drwal w Bialej Koszuli - 4-dniowe wyzwanie produktywnosci',
      description: 'Darmowe 4-dniowe wyzwanie produktywnosci dla profesjonalistow, ktorzy osiagaja cele ale nie czuja spelnienia. Live na Discord z Ludwikiem C. Siadlakiem.',
      keywords: 'produktywnosc, wyzwanie, cele, wartosci, Ludwik Siadlak, lifehackerzy',
      url: '/wyzwanie'
    }
  },
  {
    path: '/thank-you',
    seo: {
      title: 'Dziekujemy',
      description: 'Potwierdzenie rejestracji. Sprawdz skrzynke e-mail po dalsze instrukcje.',
      keywords: 'dziekujemy, potwierdzenie',
      url: '/thank-you',
      noindex: true,
    }
  },
  {
    path: '/thank-you/meski-kompas',
    seo: {
      title: 'Miejsce Zarezerwowane - Meski Kompas',
      description: 'Potwierdzenie rejestracji na warsztat Meski Kompas.',
      keywords: 'meski kompas, potwierdzenie, warsztat',
      url: '/thank-you/meski-kompas',
      favicon: '/compass-favicon.png',
      noindex: true,
    }
  },
  {
    path: '/start',
    seo: {
      title: 'Wspolpraca - Ludwik C. Siadlak',
      description: 'Wszystkie mozliwosci wspolpracy z Ludwikiem C. Siadlakiem w jednym miejscu. Bezplatne zasoby, programy mentalne (777 PLN), mentoring 1:1 (16 000 PLN).',
      keywords: 'wspolpraca, programy, mentoring, coaching, Ludwik Siadlak',
      url: '/start'
    },
    topical: {
      primaryTopic: 'collaboration and offerings overview',
      secondaryTopics: ['pricing', 'mental programs', '1:1 mentoring', 'free resources'],
      intent: 'navigational',
      significantLinks: ['/program', '/discovery', '/newsletter', '/podcast/life-hacking'],
    }
  },
  {
    path: '/mct',
    seo: {
      title: 'Mental Code Terminal',
      description: 'Interaktywne narzedzie diagnostyczne sprawdzajace Twoja obecna konfiguracje mentalna. Autorstwa Ludwika C. Siadlaka.',
      keywords: 'mental code terminal, diagnostyka mentalna, Ludwik Siadlak',
      url: '/mct',
      type: 'tool'
    }
  }
];

export function getSEOConfig(path: string): import('@/components/SEO').SEOProps {
  const config = seoRouteConfig.find(route => route.path === path);
  return config?.seo || {
    title: 'Strona',
    description: 'Rozwoj osobisty i coaching na SIADLAK.COM - Ludwik C. Siadlak',
    url: path
  };
}

export function getTopicalConfig(path: string): TopicalConfig | undefined {
  const config = seoRouteConfig.find(route => route.path === path);
  return config?.topical;
}
