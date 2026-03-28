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
      description: 'Ludwik C. Siadlak to coach produktywności i uważności z 19-letnim doświadczeniem. Pracuje z profesjonalistami IT poprzez mentoring 1:1 i samodzielne programy mentalne (Aplikacje Mentalne).',
      keywords: 'Ludwik Siadlak, coach produktywności, coaching uważności, rozwój osobisty, tech professionals, Diamentowy Umysł',
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
      title: 'Ludwik C. Siadlak — Coach Produktywności i Uważności | 19 Lat Doświadczenia',
      description: 'Ludwik C. Siadlak: 19 lat jako Certyfikowany Trener Microsoft, absolwent Oxford Brookes, coach produktywności i uważności. Założyciel Siadlak.com, DeepWork.pl i Fundacji Hackerzy.pl.',
      keywords: 'Ludwik Siadlak, coach, trener Microsoft, Oxford Brookes, produktywność, uważność, biografia',
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
      description: 'Skontaktuj się z Ludwikiem C. Siadlakiem. Umów sesję Discovery lub napisz w sprawie współpracy.',
      keywords: 'kontakt, Ludwik Siadlak, konsultacja, współpraca',
      url: '/contact'
    }
  },
  {
    path: '/program',
    seo: {
      title: 'Aplikacje Mentalne — Programy Rozwojowe',
      description: 'Cztery samodzielne programy mentalne: Produktywność, Silna Głowa (odporność psychiczna), Uważne Życie (mindfulness) i Męski Kompas. Każdy instaluje się raz i zostaje na zawsze.',
      keywords: 'aplikacje mentalne, programy rozwojowe, produktywność, odporność psychiczna, uważność, męski kompas',
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
      title: 'Program: Produktywność — Aplikacja Mentalna',
      description: 'Program mentalny produktywności (4–6 tygodni) autorstwa Ludwika C. Siadlaka. Zmienia sposób podejścia do pracy, czasu i energii. 100+ uczestników, ocena 4.9/5.0. Instaluje się raz, zostaje na zawsze.',
      keywords: 'produktywność, program mentalny, zarządzanie czasem, deep work, focus, Ludwik Siadlak',
      url: '/program/produktywnosc',
      type: 'course',
      modifiedDate: '2026-03-28'
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
      title: 'Life OS: System Upgrade — Mentoring 1:1',
      description: '8-tygodniowy program mentoringu 1:1 z Ludwikiem C. Siadlakiem. Dla liderów i profesjonalistów IT, którzy chcą zmiany na poziomie tożsamości, nie tylko nawyków. Maks. 5 osób jednocześnie.',
      keywords: 'Life OS, mentoring 1:1, coaching, transformacja, Ludwik Siadlak, liderzy IT',
      url: '/program/lifeos-system-upgrade',
      type: 'course',
      modifiedDate: '2026-03-28'
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
      title: 'Silna Głowa — Program Odporności Psychicznej',
      description: 'Program odporności psychicznej (6 tygodni) autorstwa Ludwika C. Siadlaka. Firewall mentalny, który zamienia presję w paliwo. 118+ uczestników, ocena 4.8/5.0.',
      keywords: 'odporność psychiczna, silna głowa, stres, presja, rezyliencja, Ludwik Siadlak',
      url: '/program/odpornosc',
      type: 'course',
      modifiedDate: '2026-03-28'
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
      title: 'Męski Kompas — Program dla Mężczyzn 30+',
      description: '5-tygodniowy program nawigacji życiowej dla mężczyzn z analitycznym umysłem po 30-tce. System kompas-mapa-latarnia na paraliż analityczny. Autorstwa Ludwika C. Siadlaka.',
      keywords: 'męski kompas, mężczyźni 30+, nawigacja życiowa, rozwój mężczyzn, Ludwik Siadlak',
      url: '/program/meskosc',
      type: 'course',
      favicon: '/compass-favicon.png',
      modifiedDate: '2026-03-28'
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
      description: 'Podcast o hakach życiowych, produktywności i optymalizacji codziennego funkcjonowania. Prowadzi Ludwik C. Siadlak.',
      keywords: 'life hacking, produktywność, optymalizacja, podcast, efektywność, Ludwik Siadlak',
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
      title: 'Uważne Życie Podcast',
      description: 'Podcast o uważności, świadomym życiu i równowadze w codzienności. Prowadzi Ludwik C. Siadlak.',
      keywords: 'mindfulness, uważność, równowaga, świadomość, medytacja, Ludwik Siadlak',
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
      title: 'Uważne Życie — Program Uważności i Mindfulness',
      description: 'Program uważności (4–6 tygodni) dla analitycznych umysłów i osób z ADHD. Praktyczna medytacja, która działa w korku, na spotkaniu i w kolejce. Autorstwa Ludwika C. Siadlaka.',
      keywords: 'mindfulness, uważność, medytacja, ADHD, program mentalny, Ludwik Siadlak',
      url: '/program/uwaznosc',
      type: 'course',
      modifiedDate: '2026-03-28'
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
      title: '7 Technik Produktywności, które działają',
      description: 'Siedem sprawdzonych technik produktywności autorstwa Ludwika C. Siadlaka. Praktyczne metody zarządzania czasem, energią i skupieniem.',
      keywords: '7 technik, produktywność, techniki mentalne, Ludwik Siadlak',
      url: '/program/7-technik',
      type: 'course'
    }
  },
  {
    path: '/webinar',
    seo: {
      title: 'Dołącz do spotkania online',
      description: 'Bezpłatny webinar o rozwoju osobistym z Ludwikiem C. Siadlakiem. Praktyczna wiedza o produktywności, uważności i odporności psychicznej.',
      keywords: 'webinar, bezpłatne szkolenie, Ludwik Siadlak, rozwój osobisty',
      url: '/webinar',
      type: 'event'
    }
  },
  {
    path: '/testimonials',
    seo: {
      title: '100+ Opinii Klientów Ludwika C. Siadlaka',
      description: 'Ponad 100 opinii od klientów z Polski, Norwegii, UK i innych krajów. Uczestnicy szkoleń Microsoft, programów mentalnych i mentoringu 1:1.',
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
      title: 'Lista Mailingowa — dołącz bezpłatnie',
      description: 'Lista mailingowa Ludwika C. Siadlaka. Jedna myśl tygodniowo o produktywności, AI i sensie życia. Zero spamu.',
      keywords: 'newsletter, lista mailingowa, Ludwik Siadlak, produktywność, AI',
      url: '/newsletter'
    }
  },
  {
    path: '/discovery',
    seo: {
      title: 'Sesja Discovery — Bezpłatna 30-minutowa rozmowa',
      description: 'Bezpłatna 30-minutowa sesja diagnostyczna 1:1 z Ludwikiem C. Siadlakiem. Prawdziwa diagnostyka, nie rozmowa sprzedażowa. Maks. 5 aktywnych klientów jednocześnie.',
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
      description: 'Regulaminy, polityka prywatności i inne informacje prawne dotyczące korzystania z serwisu Siadlak.com.',
      keywords: 'regulamin, polityka prywatności, prawo, warunki',
      url: '/legal',
      noindex: true,
    }
  },
  {
    path: '/legal/privacy',
    seo: {
      title: 'Polityka Prywatności',
      description: 'Polityka prywatności serwisu Siadlak.com. Informacje o ochronie danych osobowych zgodnie z RODO.',
      keywords: 'polityka prywatności, RODO, dane osobowe',
      url: '/legal/privacy',
      noindex: true,
    }
  },
  {
    path: '/legal/terms',
    seo: {
      title: 'Regulamin',
      description: 'Regulamin korzystania z serwisu Siadlak.com i oferowanych usług.',
      keywords: 'regulamin, warunki korzystania',
      url: '/legal/terms',
      noindex: true,
    }
  },
  {
    path: '/help',
    seo: {
      title: 'Pomoc',
      description: 'Centrum pomocy Siadlak.com. Odpowiedzi na najczęściej zadawane pytania o programach, płatności i wsparciu.',
      keywords: 'pomoc, FAQ, wsparcie, Siadlak.com',
      url: '/help'
    }
  },
  {
    path: '/sitemap',
    seo: {
      title: 'Mapa Strony',
      description: 'Pełna mapa strony Siadlak.com. Wszystkie programy, podcasty, webinary i zasoby w jednym miejscu.',
      keywords: 'mapa strony, nawigacja, struktura',
      url: '/sitemap'
    }
  },
  {
    path: '/oto',
    seo: {
      title: 'Oferta Specjalna',
      description: 'Wyjątkowa oferta programów rozwojowych Ludwika C. Siadlaka dostępna przez ograniczony czas.',
      keywords: 'oferta specjalna, promocja, Ludwik Siadlak',
      url: '/oto',
      noindex: true,
    }
  },
  {
    path: '/webinar/kod-kapitana',
    seo: {
      title: 'Kod Kapitana — Webinar',
      description: 'Webinar "Kod Kapitana" z Ludwikiem C. Siadlakiem o uważności, która działa w praktyce. Praktyczne techniki mindfulness dla profesjonalistów.',
      keywords: 'kod kapitana, webinar, uważność, mindfulness, Ludwik Siadlak',
      url: '/webinar/kod-kapitana',
      type: 'event'
    }
  },
  {
    path: '/webinar/depresja',
    seo: {
      title: 'Dzień Walki z Depresją — Webinar',
      description: 'Stałem na peronie i chciałem zrobić jeden krok — opowiem jak z tego wróciłem. Ludwik C. Siadlak o depresji, odporności psychicznej i powrocie do życia.',
      keywords: 'depresja, webinar, zdrowie psychiczne, odporność mentalna, Ludwik Siadlak',
      url: '/webinar/depresja',
      type: 'event'
    }
  },
  {
    path: '/webinar/live',
    seo: {
      title: 'Webinar Live',
      description: 'Webinar na żywo z Ludwikiem C. Siadlakiem.',
      keywords: 'webinar live, na żywo, Ludwik Siadlak',
      url: '/webinar/live',
      type: 'event',
      noindex: true,
    }
  },
  {
    path: '/webinar/expired',
    seo: {
      title: 'Webinar Zakończony',
      description: 'Ten webinar już się zakończył. Zapisz się na kolejne wydarzenia Ludwika C. Siadlaka.',
      keywords: 'webinar zakończony, kolejne wydarzenia',
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
      title: 'Warsztat: Upgrade Systemu dla Analityków 30+',
      description: '90-minutowy warsztat dla facetów z paraliżem analitycznym. Ludwik Siadlak + Mateusz Lizak. Bez teorii — konkretny plan na poniedziałek.',
      keywords: 'warsztat, męski kompas, analitycy, programiści, produktywność',
      url: '/webinar/meski-kompas',
      type: 'event',
      favicon: '/compass-favicon.png'
    }
  },
  {
    path: '/wyzwanie',
    seo: {
      title: 'Drwal w Białej Koszuli — 4-dniowe wyzwanie produktywności',
      description: 'Darmowe 4-dniowe wyzwanie produktywności dla profesjonalistów, którzy osiągają cele ale nie czują spełnienia. Live na Discord z Ludwikiem C. Siadlakiem.',
      keywords: 'produktywność, wyzwanie, cele, wartości, Ludwik Siadlak, lifehackerzy',
      url: '/wyzwanie'
    }
  },
  {
    path: '/thank-you',
    seo: {
      title: 'Dziękujemy',
      description: 'Potwierdzenie rejestracji. Sprawdź skrzynkę e-mail po dalsze instrukcje.',
      keywords: 'dziękujemy, potwierdzenie',
      url: '/thank-you',
      noindex: true,
    }
  },
  {
    path: '/thank-you/meski-kompas',
    seo: {
      title: 'Miejsce Zarezerwowane — Męski Kompas',
      description: 'Potwierdzenie rejestracji na warsztat Męski Kompas.',
      keywords: 'męski kompas, potwierdzenie, warsztat',
      url: '/thank-you/meski-kompas',
      favicon: '/compass-favicon.png',
      noindex: true,
    }
  },
  {
    path: '/start',
    seo: {
      title: 'Współpraca — Ludwik C. Siadlak',
      description: 'Wszystkie możliwości współpracy z Ludwikiem C. Siadlakiem w jednym miejscu. Bezpłatne zasoby, programy mentalne, mentoring 1:1 (16 000 PLN).',
      keywords: 'współpraca, programy, mentoring, coaching, Ludwik Siadlak',
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
      description: 'Interaktywne narzędzie diagnostyczne sprawdzające Twoją obecną konfigurację mentalną. Autorstwa Ludwika C. Siadlaka.',
      keywords: 'mental code terminal, diagnostyka mentalna, Ludwik Siadlak',
      url: '/mct',
      type: 'tool'
    }
  },
  {
    path: '/siadlakvip',
    seo: {
      title: 'SIADLAK.VIP — Społeczność',
      description: 'SIADLAK.VIP to parasol nad społecznościami Ludwika C. Siadlaka: prywatna grupa na Telegramie, społeczność Lifehackerzy na Discordzie, sesje DeepWork.pl i medytacje UwazneZycie.pl.',
      keywords: 'SIADLAK VIP, Lifehackerzy, DeepWork, Uważne Życie, społeczność, Ludwik Siadlak',
      url: '/siadlakvip'
    },
    topical: {
      primaryTopic: 'community structure',
      secondaryTopics: ['deep work', 'mindfulness meditation', 'Discord community', 'Telegram'],
      intent: 'navigational',
      significantLinks: ['/start', '/program', '/discovery']
    }
  }
];

export function getSEOConfig(path: string): import('@/components/SEO').SEOProps {
  const config = seoRouteConfig.find(route => route.path === path);
  return config?.seo || {
    title: 'Strona',
    description: 'Rozwój osobisty i coaching na SIADLAK.COM — Ludwik C. Siadlak',
    url: path
  };
}

export function getTopicalConfig(path: string): TopicalConfig | undefined {
  const config = seoRouteConfig.find(route => route.path === path);
  return config?.topical;
}
