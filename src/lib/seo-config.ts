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
    path: '/work',
    seo: {
      title: 'Współpraca',
      description: 'Dowiedz się o możliwościach współpracy, programach partnerskich i sposobach wspólnego rozwoju.',
      keywords: 'współpraca, partnerstwo, rozwój biznesu, coaching',
      url: '/work'
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
    path: '/program/mental-elevator',
    seo: {
      title: 'Mental Elevator',
      description: 'Program rozwoju mentalnego i emocjonalnego. Wzmocnij swoją psychikę i osiągnij równowagę życiową.',
      keywords: 'rozwój mentalny, zdrowie psychiczne, równowaga, mindfulness, wellness',
      url: '/program/mental-elevator',
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
      type: 'course'
    }
  },
  {
    path: '/train-the-trainer',
    seo: {
      title: 'Train the Trainer',
      description: 'Profesjonalny program szkoleniowy dla trenerów i coachów. Rozwijaj swoje umiejętności szkoleniowe.',
      keywords: 'szkolenie trenerów, coaching skills, umiejętności szkoleniowe, edukacja',
      url: '/train-the-trainer',
      type: 'course'
    }
  },
  {
    path: '/podcast',
    seo: {
      title: 'Podcasty',
      description: 'Słuchaj inspirujących rozmów o rozwoju osobistym, produktywności i życiu. Podcast Life Hacking i Uważne Życie.',
      keywords: 'podcast, rozwój osobisty, inspiracja, rozmowy, life hacking',
      url: '/podcast',
      type: 'website'
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
    path: '/program/uwazne-zycie',
    seo: {
      title: 'Uważne Życie Podcast',
      description: 'Podcast o mindfulness, świadomym życiu i znajdowaniu równowagi w codzienności.',
      keywords: 'mindfulness, uważność, równowaga, świadomość, medytacja',
      url: '/program/uwazne-zycie',
      type: 'podcast'
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
    path: '/community',
    seo: {
      title: 'Społeczność',
      description: 'Dołącz do społeczności ludzi rozwijających się. Wspólnie osiągamy więcej.',
      keywords: 'społeczność, wsparcie, rozwój, networking, motywacja',
      url: '/community'
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
    path: '/assessment',
    seo: {
      title: 'Ocena Potencjału',
      description: 'Sprawdź swój aktualny poziom rozwoju i otrzymaj spersonalizowane rekomendacje dalszych kroków.',
      keywords: 'ocena, test, potencjał, analiza, rozwój osobisty',
      url: '/assessment'
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
    path: '/new-podcast',
    seo: {
      title: 'Nowy Podcast',
      description: 'Poznaj nasz najnowszy podcast o rozwoju osobistym, produktywności i transformacji życia.',
      keywords: 'nowy podcast, rozwój osobisty, produktywność, inspiracja',
      url: '/new-podcast',
      type: 'podcast'
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
      title: 'Upgrade Systemu - Warsztat LIVE Męski Kompas',
      description: '90-minutowy warsztat LIVE dla analitycznych profesjonalistów. Prosty framework do mapowania priorytetów i konkretny plan na następny tydzień. Bezpłatnie.',
      keywords: 'męski kompas, warsztat live, rozwój osobisty, produktywność, coaching, framework, analityczny umysł',
      url: '/webinar/meski-kompas'
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