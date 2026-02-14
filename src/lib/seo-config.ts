import type { SEOProps } from '@/components/SEO';

export interface RouteConfig {
  path: string;
  seo: SEOProps;
}

export const seoRouteConfig: RouteConfig[] = [
  {
    path: '/',
    seo: {
      title: 'Strona Główna',
      description: 'Odkryj swój potencjał z programami rozwoju osobistego, coachingiem i narzędziami produktywności. Dołącz do społeczności ludzi dążących do lepszego życia.',
      keywords: 'rozwój osobisty, coaching, produktywność, motywacja, sukces, transformacja życia',
      url: '/',
      type: 'website'
    }
  },
  {
    path: '/about',
    seo: {
      title: 'O nas',
      description: 'Poznaj misję Siadlak.com i dowiedz się, jak pomagamy ludziom osiągać swoje cele i rozwijać potencjał.',
      keywords: 'o nas, misja, wizja, coaching, rozwój osobisty',
      url: '/about'
    }
  },
  {
    path: '/contact',
    seo: {
      title: 'Kontakt',
      description: 'Skontaktuj się z nami. Napisz lub umów się na konsultację. Jesteśmy tutaj, aby Ci pomóc.',
      keywords: 'kontakt, konsultacja, pomoc, coaching',
      url: '/contact'
    }
  },
  {
    path: '/program',
    seo: {
      title: 'Programy Rozwoju',
      description: 'Odkryj nasze programy rozwoju osobistego i profesjonalnego. Kursy, szkolenia i coaching dla Twojego sukcesu.',
      keywords: 'programy rozwoju, kursy, szkolenia, coaching, edukacja',
      url: '/program',
      type: 'website'
    }
  },
  {
    path: '/program/hakowanie-produktywnosci',
    seo: {
      title: 'Hakowanie Produktywności',
      description: 'Naucz się technik i strategii zwiększania produktywności. Praktyczny kurs dla efektywnego zarządzania czasem i zadaniami.',
      keywords: 'produktywność, zarządzanie czasem, efektywność, organizacja pracy, GTD',
      url: '/program/hakowanie-produktywnosci',
      type: 'course'
    }
  },
  {
    path: '/program/lifeos-system-upgrade',
    seo: {
      title: 'LifeOS: System Upgrade',
      description: '8-tygodniowy program fundamentalnej transformacji dla liderów. Przejdź z reaktywnego działania do zintegrowanego przywództwa.',
      keywords: 'transformacja, przywództwo, rozwój osobisty, coaching, system operacyjny życia',
      url: '/program/lifeos-system-upgrade',
      type: 'course'
    }
  },
  {
    path: '/program/silna-glowa',
    seo: {
      title: 'Silna Głowa',
      description: 'Program wzmacniania odporności psychicznej i budowania mentalnej siły. Naucz się radzić ze stresem i wyzwaniami.',
      keywords: 'odporność psychiczna, siła mentalna, stres, wyzwania, psychologia',
      url: '/program/silna-glowa',
      type: 'course'
    }
  },
  {
    path: '/program/meski-kompas',
    seo: {
      title: 'Męski Kompas',
      description: 'Program rozwoju dla mężczyzn. Odkryj swoją maskuliną energię i zbuduj silne fundamenty życia.',
      keywords: 'rozwój mężczyzn, maskulinność, liderstwo, siła, pewność siebie',
      url: '/program/meski-kompas',
      type: 'course',
      favicon: '/compass-favicon.png'
    }
  },
  {
    path: '/podcast/life-hacking',
    seo: {
      title: 'Life Hacking Podcast',
      description: 'Podcast o hakach życiowych, produktywności i optymalizacji codziennego funkcjonowania.',
      keywords: 'life hacking, produktywność, optymalizacja, podcast, efektywność',
      url: '/podcast/life-hacking',
      type: 'podcast'
    }
  },
  {
    path: '/podcast/uwazne-zycie',
    seo: {
      title: 'Uważne Życie Podcast',
      description: 'Podcast o mindfulness, świadomym życiu i znajdowaniu równowagi w codzienności.',
      keywords: 'mindfulness, uważność, równowaga, świadomość, medytacja',
      url: '/podcast/uwazne-zycie',
      type: 'podcast'
    }
  },
  {
    path: '/program/uwazne-zycie',
    seo: {
      title: 'Uważne Życie - Program',
      description: 'Program rozwoju osobistego oparty na mindfulness i uważności. Znajdź równowagę i spokój w codziennym życiu.',
      keywords: 'mindfulness, uważność, program rozwoju, medytacja, równowaga',
      url: '/program/uwazne-zycie',
      type: 'course'
    }
  },
  {
    path: '/program/7-technik',
    seo: {
      title: '7 Technik Mentalnych',
      description: 'Poznaj 7 sprawdzonych technik mentalnych, które pomogą Ci osiągnąć sukces i równowagę.',
      keywords: '7 technik, rozwój mentalny, techniki mentalne, sukces, transformacja',
      url: '/program/7-technik',
      type: 'course'
    }
  },
  {
    path: '/webinar',
    seo: {
      title: 'Webinar',
      description: 'Dołącz do bezpłatnego webinaru o rozwoju osobistym i odkryj nowe możliwości transformacji życia.',
      keywords: 'webinar, bezpłatne szkolenie, rozwój osobisty, online',
      url: '/webinar'
    }
  },
  {
    path: '/testimonials',
    seo: {
      title: 'Opinie Klientów',
      description: 'Przeczytaj opinie i historie sukcesu naszych klientów. Zobacz, jak nasze programy zmieniły ich życie.',
      keywords: 'opinie, referencje, historie sukcesu, rezultaty, coaching',
      url: '/testimonials'
    }
  },
  {
    path: '/newsletter',
    seo: {
      title: 'Newsletter',
      description: 'Zapisz się do naszego newslettera i otrzymuj regularne dawki inspiracji oraz praktyczne porady rozwojowe.',
      keywords: 'newsletter, inspiracja, porady, rozwój, motywacja',
      url: '/newsletter'
    }
  },
  {
    path: '/discovery',
    seo: {
      title: 'Rozmowa Odkrywcza',
      description: 'Umów się na bezpłatną rozmowę odkrywczą i otrzymaj spersonalizowany plan rozwoju.',
      keywords: 'rozmowa odkrywcza, konsultacja, plan rozwoju, coaching',
      url: '/discovery'
    }
  },
  {
    path: '/legal',
    seo: {
      title: 'Informacje Prawne',
      description: 'Regulaminy, polityka prywatności i inne informacje prawne dotyczące korzystania z serwisu.',
      keywords: 'regulamin, polityka prywatności, prawo, warunki',
      url: '/legal'
    }
  },
  {
    path: '/legal/privacy',
    seo: {
      title: 'Polityka Prywatności',
      description: 'Dowiedz się, jak chronimy Twoje dane osobowe i jakie masz prawa w zakresie prywatności.',
      keywords: 'polityka prywatności, RODO, dane osobowe, prywatność',
      url: '/legal/privacy'
    }
  },
  {
    path: '/legal/terms',
    seo: {
      title: 'Regulamin',
      description: 'Regulamin korzystania z serwisu Siadlak.com i oferowanych usług.',
      keywords: 'regulamin, warunki korzystania, usługi, prawa',
      url: '/legal/terms'
    }
  },
  {
    path: '/help',
    seo: {
      title: 'Pomoc',
      description: 'Centrum pomocy - znajdź odpowiedzi na najczęściej zadawane pytania i otrzymaj wsparcie.',
      keywords: 'pomoc, wsparcie, FAQ, pytania, assistance',
      url: '/help'
    }
  },
  {
    path: '/sitemap',
    seo: {
      title: 'Mapa Strony',
      description: 'Pełna mapa strony Siadlak.com - znajdź wszystkie sekcje i treści w jednym miejscu.',
      keywords: 'mapa strony, nawigacja, struktura, treści',
      url: '/sitemap'
    }
  },
  {
    path: '/oto',
    seo: {
      title: 'Oferta Specjalna',
      description: 'Wyjątkowa oferta rozwojowa dostępna przez ograniczony czas. Skorzystaj z okazji i rozwijaj się.',
      keywords: 'oferta specjalna, promocja, rozwój osobisty, szkolenie',
      url: '/oto'
    }
  },
  {
    path: '/webinar/kod-kapitana',
    seo: {
      title: 'Kod Kapitana - Webinar',
      description: 'Dołącz do webinaru Kod Kapitana i odkryj tajniki uważności, która działa w praktyce.',
      keywords: 'kod kapitana, webinar, uważność, mindfulness, rozwój',
      url: '/webinar/kod-kapitana',
      type: 'event'
    }
  },
  {
    path: '/webinar/depresja',
    seo: {
      title: 'Dzień Walki z Depresją - Webinar',
      description: 'Stałem na peronie i chciałem zrobić jeden krok — opowiem jak z tego wróciłem. Dołącz 23 lutego 2026.',
      keywords: 'depresja, webinar, zdrowie psychiczne, wsparcie, odporność mentalna',
      url: '/webinar/depresja',
      type: 'event'
    }
  },
  {
    path: '/webinar/live',
    seo: {
      title: 'Webinar Live',
      description: 'Dołącz do webinaru na żywo i odkryj nowe możliwości rozwoju osobistego.',
      keywords: 'webinar live, na żywo, rozwój osobisty, online',
      url: '/webinar/live',
      type: 'event'
    }
  },
  {
    path: '/webinar/expired',
    seo: {
      title: 'Webinar Zakończony',
      description: 'Ten webinar już się zakończył, ale możesz obejrzeć nagranie lub zapisać się na kolejne wydarzenia.',
      keywords: 'webinar zakończony, nagranie, kolejne wydarzenia',
      url: '/webinar/expired'
    }
  },
  {
    path: '/webinar/replay',
    seo: {
      title: 'Nagranie Webinaru',
      description: 'Obejrzyj nagranie z naszego webinaru o rozwoju osobistym i poznaj kluczowe strategie sukcesu.',
      keywords: 'nagranie webinaru, rozwój osobisty, strategie sukcesu',
      url: '/webinar/replay'
    }
  },
  {
    path: '/webinar/meski-kompas',
    seo: {
      title: 'Warsztat: Upgrade Systemu dla Analityków 30+',
      description: '90-minutowy warsztat dla facetów, którzy mają chaos w priorytetach. Bez teorii - konkretny plan na poniedziałek. Ludwik Siadlak + Mateusz Lizak.',
      keywords: 'warsztat, męski kompas, rozwój osobisty, analitycy, programiści, produktywność',
      url: '/webinar/meski-kompas',
      favicon: '/compass-favicon.png'
    }
  },
  {
    path: '/wyzwanie',
    seo: {
      title: 'Drwal w Białej Koszuli - 4-dniowe wyzwanie produktywności',
      description: 'Darmowe 4-dniowe wyzwanie dla profesjonalistów, którzy osiągają cele, ale nie czują spełnienia. 7-9 października 2025. Live na Discord.',
      keywords: 'produktywność, wyzwanie, cele, wartości, efektywność, coaching, Ludwik Siadlak, lifehackerzy',
      url: '/wyzwanie'
    }
  },
  {
    path: '/thank-you',
    seo: {
      title: 'Dziękujemy',
      description: 'Dziękujemy za zainteresowanie naszymi programami rozwoju osobistego. Sprawdź swoją skrzynkę e-mail.',
      keywords: 'dziękujemy, potwierdzenie, rozwój osobisty',
      url: '/thank-you'
    }
  },
  {
    path: '/thank-you/meski-kompas',
    seo: {
      title: 'Miejsce Zarezerwowane - Męski Kompas',
      description: 'Potwierdzenie rejestracji na warsztat "Koniec z dryfowaniem" - 16 października 2025 o 19:00. Szczegóły warsztatu, agenda i instrukcje przygotowawcze.',
      keywords: 'męski kompas, warsztat, potwierdzenie, webinar, rozwój osobisty, mężczyźni 30+, analitycy',
      url: '/thank-you/meski-kompas',
      favicon: '/compass-favicon.png'
    }
  },
  {
    path: '/mct',
    seo: {
      title: 'Mental Code Terminal',
      description: 'Interaktywne narzędzie diagnostyczne sprawdzające twoją obecną konfigurację mentalną.',
      keywords: 'mental code terminal, diagnostyka mentalna, rozwój osobisty, analiza',
      url: '/mct',
      type: 'tool'
    }
  }
];

export function getSEOConfig(path: string): SEOProps {
  const config = seoRouteConfig.find(route => route.path === path);
  return config?.seo || {
    title: 'Strona',
    description: 'Rozwój osobisty i coaching na Siadlak.com',
    url: path
  };
}