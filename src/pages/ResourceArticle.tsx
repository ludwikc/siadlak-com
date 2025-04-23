import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, BookOpen, Tag, ArrowRight } from 'lucide-react';

const articlesData = {
  'mental-models-for-tech-leaders': {
    title: 'Modele Mentalne dla Liderów Technicznych',
    excerpt: 'Framework do podejmowania lepszych decyzji w złożonych środowiskach technicznych.',
    category: 'Przywództwo',
    date: '2 kwietnia 2025',
    readTime: '8 min czytania',
    image: '',
    content: `
      <h2>Wprowadzenie</h2>
      <p>Przywództwo w domenach technicznych stawia unikalne wyzwania. Liderzy techniczni muszą równoważyć głęboką wiedzę domenową z szerszym zrozumieniem biznesu, zarządzać zespołami specjalistów i podejmować decyzje w szybko zmieniającym się środowisku.</p>
      
      <p>W tym artykule podzielę się zestawem modeli mentalnych, które okazały się cenne dla liderów technicznych poruszających się w tym złożonym krajobrazie.</p>
      
      <h2>Mapa to nie Terytorium</h2>
      <p>Ten model mentalny przypomina nam, że nasze zrozumienie rzeczywistości (mapa) to nie sama rzeczywistość (terytorium). Liderzy techniczni często pracują z abstrakcjami, modelami i reprezentacjami, które upraszczają rzeczywistość. Chociaż są one cenne, pamiętanie o ich ograniczeniach jest kluczowe.</p>
      
      <p>Zastosowanie: Oceniając architektury systemów lub podejścia techniczne, przyznaj, że Twoje modele mają punkty ślepe. Szukaj różnorodnych perspektyw i testów w świecie rzeczywistym, aby zidentyfikować, gdzie Twoja mapa mentalna odbiega od terytorium.</p>
      
      <h2>Myślenie Drugiego Rzędu</h2>
      <p>Myślenie pierwszego rzędu rozważa tylko natychmiastowe konsekwencje decyzji. Myślenie drugiego rzędu bada kolejne efekty i skutki uboczne.</p>
      
      <p>Zastosowanie: Podejmując decyzje techniczne, nie zatrzymuj się na pytaniu "Co się stanie, jeśli wdrożymy tę funkcję?". Zapytaj: "Co się stanie potem? Jak ta decyzja może ograniczyć lub umożliwić przyszłe wybory? Jakie zachowania może to zmotywować w naszym zespole lub wśród użytkowników?"</p>
      
      <h2>Inwersja</h2>
      <p>Zamiast pytać, jak rozwiązać problem, inwersja pyta, jak uniknąć pogorszenia sytuacji.</p>
      
      <p>Zastosowanie: Zamiast tylko pytać "Jak zbudować niezawodny system?", zapytaj również "Co uczyniłoby nasz system niezawodnym?". To często ujawnia pominięte luki i wady projektowe.</p>
      
      <h2>Wnioski</h2>
      <p>Te modele mentalne dostarczają frameworków myślenia, które mogą poprawić podejmowanie decyzji w złożonych środowiskach technicznych. Włączając je do swojego podejścia przywódczego, możesz poruszać się w niepewności z większą jasnością i przewidywalnością.</p>
    `
  },
  'focus-in-distracted-world': {
    title: 'Kultywowanie Głębokiego Skupienia w Świecie Rozproszenia',
    excerpt: 'Praktyczne techniki osiągania stanu flow i maksymalizacji potencjału kognitywnego.',
    category: 'Produktywność',
    date: '15 marca 2025',
    readTime: '12 min czytania',
    image: '',
    content: `
      <h2>Kryzys Uwagi</h2>
      <p>W naszym hiperpołączonym świecie, zdolność do głębokiego skupienia stała się coraz rzadsza i coraz bardziej wartościowa. Przeciętny pracownik wiedzy jest przerywany co 3 minuty, a powrót do głębokiego skupienia po każdym przerwaniu zajmuje 23 minuty.</p>
      
      <p>Ten artykuł przedstawia oparte na dowodach strategie kultywowania zdolności do głębokiego skupienia w świecie zaprojektowanym, aby Cię rozpraszać.</p>
      
      <h2>Zrozumienie Spektrum Skupienia-Rozproszenia</h2>
      <p>Skupienie nie jest binarne, ale istnieje na spektrum. Na jednym końcu jest rozproszona uwaga, a na drugim stan flow - stan całkowitego pochłonięcia, w którym wydajność osiąga szczyt, a czas wydaje się znikać.</p>
      
      <p>Kluczowy wniosek jest taki, że głębokie skupienie to umiejętność, którą można rozwijać poprzez celową praktykę i projektowanie systemów.</p>
      
      <h2>Protokół Skupienia</h2>
      <h3>1. Projektowanie Środowiska</h3>
      <p>Stwórz dedykowane przestrzenie do głębokiej pracy, usuwając potencjalne rozproszenia. To obejmuje:</p>
      <ul>
        <li>Wyciszenie powiadomień</li>
        <li>Używanie blokerów stron internetowych podczas sesji skupienia</li>
        <li>Tworzenie wizualnych wskazówek, które sygnalizują "tryb skupienia" innym</li>
      </ul>
      
      <h3>2. Blokowanie Czasu</h3>
      <p>Zaplanuj konkretne bloki na głęboką pracę, idealnie 90-120 minut. Chroń te bloki tak, jakby to było ważne spotkanie.</p>
      
      <h3>3. Przejścia Skupienia</h3>
      <p>Opracuj rytuały, które pomogą Twojemu umysłowi przejść w stan głębokiego skupienia:</p>
      <ul>
        <li>Specjalna playlista lub środowisko dźwiękowe</li>
        <li>Krótka medytacja lub ćwiczenie oddechowe</li>
        <li>Fizyczna wskazówka, jak zapalenie świeczki lub założenie specjalnych słuchawek</li>
      </ul>
      
      <h2>Wnioski</h2>
      <p>Głębokie skupienie to supermoc XXI wieku. Projektując swoje środowisko, zarządzając czasem i trenując uwagę, możesz kultywować tę zdolność i osiągać niezwykłe wyniki poznawcze w rozproszonym świecie.</p>
    `
  },
  'ai-augmented-productivity': {
    title: 'Systemy Produktywności Wspomagane przez AI',
    excerpt: 'Jak wykorzystać narzędzia AI do wzmacniania, a nie zastępowania Twoich zdolności poznawczych.',
    category: 'Technologia',
    date: '1 marca 2025',
    readTime: '10 min czytania',
    image: '',
    content: `
      <h2>Paradygmat Wzmocnienia AI</h2>
      <p>Sztuczna Inteligencja jest często przedstawiana jako cudowne rozwiązanie wszystkich problemów lub jako zagrożenie egzystencjalne. Obie perspektywy pomijają najbardziej bezpośrednią możliwość: używanie AI jako rozszerzenia poznawczego, które wzmacnia wyraźnie ludzkie zdolności.</p>
      
      <p>Ten artykuł bada, jak budować systemy produktywności wspomagane przez AI, które zwiększają Twoją efektywność bez oddawania Twojej sprawczości.</p>
      
      <h2>Zasada Komplementarności</h2>
      <p>Skuteczne wzmocnienie AI zaczyna się od zrozumienia komplementarnych mocnych stron inteligencji ludzkiej i sztucznej:</p>
      <ul>
        <li><strong>Mocne strony AI:</strong> Rozpoznawanie wzorców w dużych zbiorach danych, szybkie wyszukiwanie informacji, niestrudzone wykonywanie zdefiniowanych procesów</li>
        <li><strong>Mocne strony Człowieka:</strong> Zrozumienie kontekstowe, osąd etyczny, kreatywne skoki, połączenie interpersonalne</li>
      </ul>
      
      <p>Celem jest projektowanie systemów, w których AI zajmuje się tym, co robi najlepiej, uwalniając Twoje ludzkie zdolności do tego, co robią najlepiej.</p>
      
      <h2>Budowanie Twojego Systemu Wspomaganego przez AI</h2>
      <h3>1. Przetwarzanie Informacji</h3>
      <p>Używaj AI do podsumowywania, kategoryzowania i wyodrębniania kluczowych spostrzeżeń ze strumieni informacji, ale zachowaj ludzki nadzór nad syntezą i tworzeniem znaczeń.</p>
      
      <h3>2. Rozwój Idei</h3>
      <p>Wykorzystaj AI jako partnera do myślenia, używając go do:</p>
      <ul>
        <li>Generowania alternatywnych perspektyw</li>
        <li>Identyfikowania potencjalnych punktów ślepych w Twoim myśleniu</li>
        <li>Rozszerzania początkowych pomysłów w pełniejsze koncepcje</li>
      </ul>
      
      <h3>3. Przyspieszenie Wdrożenia</h3>
      <p>Odciąż rutynowe aspekty wykonania do AI, koncentrując uwagę na elementach wymagających wysokiego osądu:</p>
      <ul>
        <li>Używaj AI do wstępnych szkiców, szablonów i formatowania</li>
        <li>Zastosuj swój ludzki osąd, aby udoskonalić, spersonalizować i podnieść jakość wyniku</li>
      </ul>
      
      <h2>Imperatyw Sprawczości</h2>
      <p>Najważniejszą zasadą w produktywności wspomaganej przez AI jest utrzymanie Twojej sprawczości. To oznacza:</p>
      <ul>
        <li>Rozumienie swoich narzędzi, zamiast być przez nie zdezorientowanym</li>
        <li>Opracowywanie jasnych protokołów delegacji, które utrzymują Cię na miejscu kierowcy</li>
        <li>Regularne audytowanie i udoskonalanie Twojego użycia AI, aby upewnić się, że służy Twoim celom</li>
      </ul>
      
      <h2>Wnioski</h2>
      <p>Produktywność wspomagana przez AI stanowi znaczącą szansę dla tych, którzy chcą podejść do tych narzędzi z rozwagą. Tworząc systemy, które wykorzystują komplementarne mocne strony inteligencji ludzkiej i sztucznej, możesz osiągnąć niezwykłe wyniki, zachowując swój unikalny ludzki wkład.</p>
    `
  },
  'decision-making-framework': {
    title: 'Framework Podejmowania Decyzji w Warunkach Niepewności',
    excerpt: 'Systematyczne podejście do podejmowania lepszych decyzji, gdy informacje są niekompletne.',
    category: 'Podejmowanie Decyzji',
    date: '20 lutego 2025',
    readTime: '15 min czytania',
    image: '',
    content: `
      <h2>Rzeczywistość Niepewności</h2>
      <p>Podejmujemy nasze najważniejsze decyzje w warunkach niepewności. Czy to w biznesie, karierze, czy życiu osobistym, rzadko mamy pełne informacje, a mimo to musimy wybrać drogę naprzód.</p>
      
      <p>Ten artykuł przedstawia framework podejmowania decyzji specjalnie zaprojektowany do poruszania się w niepewności z większą pewnością i jasnością.</p>
      
      <h2>Framework Decyzyjny VISTA</h2>
      <p>VISTA oznacza Wartości, Informacje, Scenariusze, Tradeoffy i Adaptacja. Każdy komponent odnosi się do krytycznego aspektu podejmowania decyzji w warunkach niepewności.</p>
      
      <h3>W - Ustalenie Wartości</h3>
      <p>Zacznij od wyjaśnienia, co jest najważniejsze w tym konkretnym kontekście decyzyjnym:</p>
      <ul>
        <li>Jakie podstawowe wartości powinny kierować tą decyzją?</li>
        <li>Jakie są Twoje elementy niepodlegające negocjacjom vs. obszary elastyczności?</li>
        <li>Jak wygląda sukces poza bezpośrednim wynikiem?</li>
      </ul>
      
      <h3>I - Ocena Informacji</h3>
      <p>Oceń, co wiesz, a czego nie wiesz:</p>
      <ul>
        <li>Oddziel fakty od założeń i wyraźnie oznacz każdy z nich</li>
        <li>Zidentyfikuj najbardziej krytyczne luki w wiedzy</li>
        <li>Określ, które luki można zawęzić przed podjęciem decyzji, a które należy zaakceptować jako niemożliwe do poznania</li>
      </ul>
      
      <h3>S - Rozwój Scenariuszy</h3>
      <p>Stwórz wiele prawdopodobnych przyszłości, aby zbadać możliwości:</p>
      <ul>
        <li>Opracuj co najmniej trzy scenariusze (najlepszy przypadek, najgorszy przypadek i nieoczekiwany)</li>
        <li>Dla każdej rozważanej opcji prześledź jej prawdopodobne wyniki w każdym scenariuszu</li>
        <li>Szukaj opcji, które działają akceptowalnie we wszystkich scenariuszach</li>
      </ul>
      
      <h3>T - Analiza Tradeoffów</h3>
      <p>Uczyń ukryte tradeoffy jawnymi:</p>
      <ul>
        <li>Zidentyfikuj kluczowe tradeoffy nieodłącznie związane z każdą opcją</li>
        <li>Rozważ zarówno krótko- vs. długoterminowe, jak i pewne vs. potencjalne skutki</li>
        <li>Przypisz względne wagi na podstawie Twojego ustalenia wartości</li>
      </ul>
      
      <h3>A - Planowanie Adaptacji</h3>
      <p>Przygotuj się na dostosowanie w miarę pojawiania się nowych informacji:</p>
      <ul>
        <li>Zdefiniuj jasne wyzwalacze, które skłonią do ponownego rozważenia</li>
        <li>Stwórz plany awaryjne dla najbardziej niepokojących scenariuszy</li>
        <li>Ustal harmonogram przeglądu decyzji i jej wyników</li>
      </ul>
      
      <h2>Wnioski</h2>
      <p>Framework VISTA nie eliminuje niepewności, ale zapewnia ustrukturyzowane podejście do podejmowania decyzji pomimo niej. Wyjaśniając wartości, oceniając informacje, rozwijając scenariusze, analizując tradeoffy i planując adaptację, możesz poruszać się po niepewnym terenie z większą pewnością i odpornością.</p>
    `
  },
  'energy-management-high-performers': {
    title: 'Zarządzanie Energią dla Osób Osiągających Wysokie Wyniki',
    excerpt: 'Dlaczego zarządzanie energią jest ważniejsze niż zarządzanie czasem dla trwałej doskonałości.',
    category: 'Wydajność',
    date: '5 lutego 2025',
    readTime: '9 min czytania',
    image: '',
    content: `
      <h2>Poza Zarządzaniem Czasem</h2>
      <p>Tradycyjne porady dotyczące produktywności koncentrują się na zarządzaniu czasem. Jednak osoby osiągające wysokie wyniki rozumieją, że czas jest stały, podczas gdy energia jest zmienna i odnawialna. Ten artykuł bada, dlaczego zarządzanie energią jest prawdziwym kluczem do trwałej wysokiej wydajności.</p>
      
      <h2>Cztery Wymiary Energii</h2>
      <p>Holistyczne zarządzanie energią odnosi się do czterech wzajemnie powiązanych wymiarów:</p>
      
      <h3>1. Energia Fizyczna</h3>
      <p>Podstawa wszystkich innych rodzajów energii, energia fizyczna zależy od:</p>
      <ul>
        <li>Jakości i ilości snu</li>
        <li>Odżywiania i nawodnienia</li>
        <li>Ruchu i regeneracji</li>
      </ul>
      
      <p>Osoby osiągające wysokie wyniki projektują precyzyjne protokoły dla każdego z tych elementów, traktując je nie jako wybory stylu życia, ale jako wymagania dotyczące wydajności.</p>
      
      <h3>2. Energia Mentalna</h3>
      <p>Energia mentalna rządzi skupieniem, uwagą i mocą przetwarzania poznawczego:</p>
      <ul>
        <li>Zarządzanie obciążeniem poznawczym</li>
        <li>Praktyki przywracania uwagi</li>
        <li>Przejścia stanu mentalnego</li>
      </ul>
      
      <h3>3. Energia Emocjonalna</h3>
      <p>Energia emocjonalna wpływa na odporność i zaangażowanie:</p>
      <ul>
        <li>Techniki regulacji emocjonalnej</li>
        <li>Współczynniki interakcji pozytywnych do negatywnych</li>
        <li>Regeneracja po wydatkowaniu emocjonalnym</li>
      </ul>
      
      <h3>4. Energia Celu</h3>
      <p>Energia celu łączy codzienne działania z głębszym sensem:</p>
      <ul>
        <li>Zgodność między działaniami a wartościami</li>
        <li>Praktyki nadawania znaczenia</li>
        <li>Połączenie z długoterminowym wpływem</li>
      </ul>
      
      <h2>Audyt Energii i System Zarządzania</h2>
      <p>Osoby osiągające wysokie wyniki wdrażają systematyczne podejście do zarządzania energią:</p>
      
      <h3>Krok 1: Mapowanie Energii</h3>
      <p>Śledź swoje poziomy energii we wszystkich czterech wymiarach przez cały typowy tydzień, notując wzorce i wpływy.</p>
      
      <h3>Krok 2: Dopasowanie Energii</h3>
      <p>Dopasuj swoje najbardziej wymagające działania do swoich naturalnych szczytów energetycznych i zaplanuj okresy regeneracji, aby zbiegały się z dolinami energetycznymi.</p>
      
      <h3>Krok 3: Wzmocnienie Energii</h3>
      <p>Wdróż ukierunkowane praktyki, aby zwiększyć swoją pojemność w każdym wymiarze energii.</p>
      
      <h3>Krok 4: Regeneracja Energii</h3>
      <p>Zaprojektuj celowe protokoły regeneracji dla zrównoważonej wydajności, zamiast polegać na odpoczynku napędzanym kryzysem.</p>
      
      <h2>Wnioski</h2>
      <p>Najlepsi nie są ci, którzy pracują najwięcej godzin, ale ci, którzy wnoszą swoją pełną energię do swojej najważniejszej pracy. Przenosząc nacisk z zarządzania czasem na zarządzanie energią, możesz osiągnąć bardziej znaczące wyniki, jednocześnie wzmacniając, a nie wyczerpując swoje samopoczucie.</p>
    `
  },
  'information-overload-strategies': {
    title: 'Strategie Zarządzania Przeciążeniem Informacyjnym',
    excerpt: 'Praktyczne techniki filtrowania, przetwarzania i zatrzymywania niezbędnych informacji.',
    category: 'Produktywność',
    date: '22 stycznia 2025',
    readTime: '11 min czytania',
    image: '',
    content: `
      <h2>Paradoks Informacji</h2>
      <p>Żyjemy w erze obfitości informacji, ale niedoboru uwagi. Przeciętny pracownik wiedzy jest narażony na więcej informacji w ciągu tygodnia niż ktoś w XVIII wieku mógłby napotkać w ciągu życia. Ten artykuł przedstawia kompleksowy system zarządzania informacjami bez poczucia przytłoczenia.</p>
      
      <h2>Framework Przetwarzania Informacji</h2>
      
      <h3>1. Świadoma Konsumpcja</h3>
      <p>Przejdź od pasywnego do aktywnego pobierania informacji:</p>
      <ul>
        <li>Wdróż granice informacyjne (określone czasy, miejsca i metody pobierania informacji)</li>
        <li>Ćwicz uczenie się "w samą porę" zamiast gromadzenia "na wszelki wypadek"</li>
        <li>Opracuj jasne kryteria tego, co zasługuje na Twoją uwagę</li>
      </ul>
      
      <h3>2. Skuteczne Przetwarzanie</h3>
      <p>Przekształć surowe informacje w użyteczną wiedzę:</p>
      <ul>
        <li>Wdróż techniki progresywnego podsumowywania</li>
        <li>Ćwicz mapowanie koncepcji, aby połączyć nowe informacje z istniejącą wiedzą</li>
        <li>Opracuj osobiste systemy metadanych, aby poprawić możliwość wyszukiwania</li>
      </ul>
      
      <h3>3. Strategiczne Zatrzymywanie</h3>
      <p>Wyjdź poza tradycyjne robienie notatek do zarządzania wiedzą:</p>
      <ul>
        <li>Zbuduj osobisty system zarządzania wiedzą za pomocą narzędzi takich jak Obsidian, Roam lub Notion</li>
        <li>Wdróż powtarzanie w odstępach czasu dla informacji, które musisz zinternalizować</li>
        <li>Stwórz systemy organizacji przyjazne wyszukiwaniu</li>
      </ul>
      
      <h2>Środowiska Informacyjne</h2>
      <p>Twoje środowiska fizyczne i cyfrowe znacząco wpływają na Twoje możliwości przetwarzania informacji:</p>
      
      <h3>Projektowanie Środowiska Cyfrowego</h3>
      <ul>
        <li>Stwórz oddzielne przestrzenie dla różnych trybów informacji (konsumpcja, przetwarzanie, tworzenie)</li>
        <li>Wdróż tarcie dla źródeł informacji o niskiej wartości</li>
        <li>Zaprojektuj swoją architekturę powiadomień, aby chronić uwagę</li>
      </ul>
      
      <h3>Projektowanie Środowiska Fizycznego</h3>
      <ul>
        <li>Ustal dedykowane przestrzenie do głębokiego przetwarzania informacji</li>
        <li>Używaj fizycznych wskazówek, aby wywoływać różne tryby informacji</li>
        <li>Zmniejsz obciążenie poznawcze poprzez uproszczenie środowiska</li>
      </ul>
      
      <h2>Od Informacji do Mądrości</h2>
      <p>Ostatecznym celem nie jest po prostu zarządzanie informacjami, ale przekształcenie ich w mądrość:</p>
      <ul>
        <li>Zaplanuj regularne sesje syntezy, aby zintegrować nową wiedzę</li>
        <li>Ćwicz stosowanie informacji w różnych kontekstach</li>
        <li>Opracuj rytuały refleksji, aby wydobyć głębsze spostrzeżenia z doświadczeń</li>
      </ul>
      
      <h2>Wnioski</h2>
      <p>Przeciążenie informacyjne nie jest nieuniknione. Dzięki świadomej konsumpcji, skutecznemu przetwarzaniu i strategicznym systemom zatrzymywania, możesz przekształcić potop informacji ze źródła stresu w fundament wglądu i efektywności.</p>
    `
  }
};

const ResourceArticle = () => {
  const { articleSlug } = useParams();
  
  if (!articleSlug || !articlesData[articleSlug]) {
    return <Navigate to="/resources" />;
  }
  
  const article = articlesData[articleSlug];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/resources"
              className="inline-flex items-center text-silver-mist hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Wróć do Zasobów
            </Link>
            
            <div className="flex items-center mb-4">
              <Tag className="h-5 w-5 mr-2 text-luminal-magenta" />
              <span className="text-luminal-magenta font-medium">
                {article.category}
              </span>
              
              <span className="mx-3 text-silver-mist/50">•</span>
              
              <Calendar className="h-5 w-5 mr-2 text-silver-mist/80" />
              <span className="text-silver-mist/80">
                {article.date}
              </span>
              
              <span className="mx-3 text-silver-mist/50">•</span>
              
              <BookOpen className="h-5 w-5 mr-2 text-silver-mist/80" />
              <span className="text-silver-mist/80">
                {article.readTime}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              {article.title}
            </h1>
            
            <p className="text-xl text-silver-mist/90">
              {article.excerpt}
            </p>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-12"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
            
            {/* Author Section */}
            <div className="glass-card p-6 rounded-xl flex items-center mb-12">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neural-violet to-ascension-pink flex-shrink-0 mr-6"></div>
              <div>
                <h3 className="text-lg font-bold text-deep-charcoal dark:text-silver-mist">
                  Ludwik Siadlak
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-2">
                  Mentor & Coach na skrzyżowaniu Technologii i Ludzkiego Potencjału
                </p>
                <Link 
                  to="/about"
                  className="text-neural-violet dark:text-luminal-magenta hover:underline"
                >
                  Więcej o Ludwiku
                </Link>
              </div>
            </div>
            
            {/* Next Steps */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Chcesz Zanurzyć Się Głębiej?
              </h3>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6 max-w-lg mx-auto">
                Dowiedz się, jak możemy współpracować, aby zwiększyć Twoje możliwości na skrzyżowaniu technologii i ludzkiego potencjału.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button className="bg-neural-violet hover:bg-ascension-pink">
                    Umów Rozmowę
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                
                <Link to="/courses">
                  <Button variant="outline">
                    Poznaj Programy
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResourceArticle;
