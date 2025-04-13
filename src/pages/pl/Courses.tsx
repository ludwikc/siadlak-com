
import React from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Calendar, Star, CheckCircle } from 'lucide-react';

const coursesData = [
  {
    id: 'mental-elevator',
    title: 'Mental Elevator',
    subtitle: 'Premium Program Mentoringowy 8-Tygodniowy',
    description: 'Przejmij pełną kontrolę nad swoją karierą i życiem dzięki intensywnemu programowi transformacyjnemu, stworzonemu specjalnie dla profesjonalistów gotowych wznieść się ponad poziom wykonawczy i osiągnąć prawdziwe przywództwo.',
    features: [
      'Cotygodniowe sesje coachingowe 1:1 z bezpośrednim dostępem do Ludwika',
      'Indywidualny plan wdrożeniowy dostosowany do Twoich konkretnych wyzwań',
      'Metoda Czarnej Pantery do rozwijania naturalnego autorytetu',
      'Strategiczne ramy wdrożeniowe dla wszystkich obszarów rozwoju',
      'Dostęp do ekskluzywnej społeczności wysokowydajnych profesjonalistów',
      'Dożywotni dostęp do materiałów programu i nagrań'
    ],
    duration: '8 tygodni',
    format: 'Spersonalizowany Mentoring 1:1',
    level: 'Tylko dla Zdecydowanych Profesjonalistów',
    startDate: 'Ograniczona Dostępność - Wymagana Aplikacja',
    price: '12 000 PLN',
    featured: true,
    image: ''
  },
  {
    id: 'hakowanie-produktywnosci',
    title: 'Hakowanie Produktywności',
    subtitle: 'Kompletny System Produktywności',
    description: 'Zbuduj spersonalizowany system produktywności, który działa z Twoimi naturalnymi mocnymi stronami, a nie przeciwko nim, pozwalając osiągać więcej przy mniejszym wysiłku i zerowym wypaleniu.',
    features: [
      'Kompletny system produktywności dostosowany do Twojego stylu poznawczego',
      'Architektura zarządzania zadaniami i projektami zoptymalizowana pod Twój przepływ pracy',
      'Protokoły koncentracji i głębokiej pracy eliminujące rozproszenia',
      'Framework zarządzania energią zapobiegający wypaleniu',
      'Plan integracji technologii, który stawia narzędzia na właściwym miejscu',
      'Systemy wdrożeniowe zapewniające ciągłe stosowanie'
    ],
    duration: '6 tygodni',
    format: 'Kurs Online + Społeczność Wdrożeniowa',
    level: 'Wszyscy Profesjonaliści',
    startDate: 'Natychmiastowy Dostęp',
    price: '1 497 PLN',
    featured: false,
    image: ''
  },
  {
    id: 'silna-glowa',
    title: 'Silna Głowa',
    subtitle: 'Mistrzostwo Odporności Psychicznej',
    description: 'Zbuduj niezachwianą odporność psychiczną, aby prosperować pod presją, odbijać się po niepowodzeniach i utrzymywać szczytową wydajność niezależnie od zewnętrznych okoliczności.',
    features: [
      'Kompletna ocena odporności psychicznej i punkt wyjścia',
      'Protokół optymalizacji reakcji na stres',
      'Wdrożenie systemu regeneracji i odnowy',
      'Framework regulacji emocjonalnej w sytuacjach wysokiego ciśnienia',
      'Systemy podejmowania decyzji w trudnych okolicznościach',
      'Zrównoważona integracja praktyk dla ciągłego rozwoju'
    ],
    duration: '6 tygodni',
    format: 'Kurs Online + Protokoły Wdrożeniowe',
    level: 'Wszyscy Profesjonaliści',
    startDate: 'Przedsprzedaż Dostępna Teraz',
    price: '897 PLN (Cena w Przedsprzedaży)',
    featured: false,
    image: ''
  },
  {
    id: '7-technik',
    title: '7 Technik Produktywności',
    subtitle: 'Szybki Zestaw Wdrożeniowy',
    description: 'Wdróż 7 potężnych technik produktywności w zaledwie 77 minut, które natychmiast odzyskają kontrolę nad Twoim czasem, koncentracją i energią.',
    features: [
      'Kompletny 77-minutowy przewodnik wdrożeniowy',
      '7 sprawdzonych w praktyce technik produktywności z natychmiastowymi rezultatami',
      'Gotowe do użycia szablony i arkusze robocze',
      'Protokoły wdrożeniowe krok po kroku',
      'Przewodnik rozwiązywania typowych przeszkód',
      'Framework wyboru technik oparty na Twoich konkretnych potrzebach'
    ],
    duration: '77 minut',
    format: 'Natychmiastowy Dostęp do Kursu Cyfrowego',
    level: 'Wszyscy Profesjonaliści',
    startDate: 'Dostępne Natychmiast',
    price: '77 PLN (Specjalna Oferta - Regularna Cena: 497 PLN)',
    featured: false,
    image: ''
  },
  {
    id: 'train-the-trainer',
    title: 'TrainTheTrainer',
    subtitle: 'Elitarny Program Rozwoju Trenerów',
    description: 'Przekształć swoją wiedzę ekspercką w światowej klasy umiejętności szkoleniowe poprzez intensywny program mentoringowy zaprojektowany dla aspirujących i doświadczonych trenerów dążących do mistrzostwa.',
    features: [
      'Spersonalizowana ocena i rozwój stylu szkoleniowego',
      'Zaawansowane techniki zaangażowania dla utrzymania uwagi',
      'Ramy architektury treści dla optymalnego uczenia się',
      'Doskonalenie mechaniki prowadzenia dla maksymalnego wpływu',
      'Rozwój modelu biznesowego dla usług szkoleniowych',
      'Strategia pozycjonowania marki osobistej jako eksperta-trenera'
    ],
    duration: '6 tygodni',
    format: 'Intensywny Mentoring i Sesje Warsztatowe',
    level: 'Dla Poważnych Profesjonalistów Szkoleniowych',
    startDate: 'Wkrótce - Dołącz do Listy Oczekujących',
    price: '8 997 PLN',
    featured: false,
    image: ''
  },
  {
    id: 'total-immersion',
    title: 'Doświadczenie Totalnej Immersji',
    subtitle: 'Ekskluzywny Tydzień Transformacji 1:1',
    description: 'Osiągnij w jeden tydzień to, co normalnie zajęłoby lata, poprzez całkowitą immersję w systemach transformacyjnych z nieograniczonym dostępem do ekspertyzy, obserwacji i wdrażania.',
    features: [
      'Pełny tydzień bezpośredniego dostępu 1:1 w europejskiej lokalizacji',
      'Kompletna obserwacja systemów produktywności i wydajności',
      'Wdrażanie ram w czasie rzeczywistym w Twoim konkretnym kontekście',
      'Bezpośredni transfer metodologii poprzez immersyjne doświadczenie',
      'Rozwój spersonalizowanego planu transformacji',
      'Ciągłe wsparcie wdrożeniowe po tygodniu immersji'
    ],
    duration: '7 Dni',
    format: 'Ekskluzywne Doświadczenie Immersji 1:1',
    level: 'Tylko dla Nadzwyczajnego Zaangażowania',
    startDate: 'Wymagana Aplikacja - Jeden Uczestnik na Kwartał',
    price: '50 000 PLN',
    featured: false,
    image: ''
  }
];

const PolishCourses = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Transformuj swoje możliwości
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Ustrukturyzowane programy zaprojektowane, aby wzmocnić Twoją wydajność umysłową, produktywność i obecność przywódczą.
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses Overview */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {coursesData.map((course) => (
              <div 
                key={course.id}
                className={`mb-12 glass-card rounded-xl overflow-hidden ${
                  course.featured 
                    ? 'border-2 border-ascension-pink dark:border-luminal-magenta' 
                    : 'border border-border'
                }`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Course Image/Gradient */}
                  <div className="lg:col-span-1 h-48 lg:h-auto bg-gradient-to-br from-neural-violet to-ascension-pink flex items-center justify-center">
                    {course.featured && (
                      <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
                        <Star className="h-6 w-6 text-white inline mr-2" />
                        <span className="text-white font-medium">Wyróżniony program</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Course Details */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    {course.featured && (
                      <div className="inline-block bg-ascension-pink/10 dark:bg-ascension-pink/20 text-ascension-pink dark:text-luminal-magenta px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Wyróżniony program
                      </div>
                    )}
                    
                    <h2 className="text-2xl md:text-3xl font-bold mb-1 text-deep-charcoal dark:text-silver-mist">
                      {course.title}
                    </h2>
                    
                    <p className="text-neural-violet dark:text-luminal-magenta font-medium mb-4">
                      {course.subtitle}
                    </p>
                    
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                      {course.description}
                    </p>
                    
                    {/* Course Quick Info */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.duration}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.format}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Star className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.level}</span>
                      </div>
                      
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-sm text-subtle-slate dark:text-silver-mist/80">{course.startDate}</span>
                      </div>
                    </div>
                    
                    {/* Course Features */}
                    <div className="mb-8">
                      <h3 className="text-lg font-medium mb-3 text-deep-charcoal dark:text-silver-mist">
                        Co otrzymasz:
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {course.features.map((feature, index) => (
                          <div key={index} className="flex items-start">
                            <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                            <span className="text-subtle-slate dark:text-silver-mist/90">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to={`/pl/courses/${course.id}`}>
                        <Button className="bg-neural-violet hover:bg-ascension-pink">
                          Dowiedz się więcej
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                      
                      <Link to="/pl/contact">
                        <Button variant="outline">
                          Zapytaj o szczegóły
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Custom Programs Section */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Programy na zamówienie
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Potrzebujesz czegoś bardziej dopasowanego do swoich specyficznych potrzeb? Oferuję programy zaprojektowane na zamówienie
              dla osób indywidualnych i organizacji z wyjątkowymi wyzwaniami i celami.
            </p>
            
            <Link to="/pl/contact">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                Zapytaj o programy na zamówienie
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Często zadawane pytania
            </h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Skąd mam wiedzieć, który program jest dla mnie odpowiedni?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Każdy program jest zaprojektowany dla konkretnych potrzeb i celów. Polecam zarezerwowanie darmowej rozmowy Discovery, podczas której omówimy Twoją sytuację i określimy najlepszą drogę.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Jaka jest polityka zwrotów?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Wszystkie programy objęte są 14-dniową gwarancją satysfakcji. Jeśli nie będziesz zadowolony z programu po pierwszych dwóch sesjach, zapewniam pełny zwrot kosztów.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Czy oferujesz raty płatności?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Tak, elastyczne opcje płatności są dostępne dla wszystkich programów. Szczegóły podawane są podczas procesu rekrutacji lub mogą być omówione podczas rozmowy Discovery.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Ile czasu tygodniowo powinienem przeznaczyć na te programy?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Większość programów wymaga 3-5 godzin tygodniowo, łącznie z sesjami na żywo i pracą własną. Dokładny nakład czasu różni się w zależności od programu i zostanie jasno określony przed zapisaniem się.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-neural-violet to-ascension-pink">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Gotowy podnieść swój potencjał?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Zrób pierwszy krok w kierunku transformacji swoich możliwości i odzyskania wpływu w naszym cyfrowym świecie.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/pl/contact">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Umów rozmowę Discovery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/pl/newsletter">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Zapisz się do newslettera
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishCourses;
