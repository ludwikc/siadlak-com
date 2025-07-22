
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Clock, Calendar, Star, CheckCircle } from 'lucide-react';

const coursesData = [
  {
    id: 'mental-elevator',
    title: 'Mental Elevator',
    subtitle: 'Program transformacyjny dla świadomych profesjonalistów',
    description: 'Program dla wybranych profesjonalistów gotowych przejąć kontrolę nad swoją karierą i cyfrowym życiem. Transformacja zaczyna się od decyzji, nie od kolejnego kursu.',
    features: [
      'Indywidualne sesje mentoringowe (8 tygodni)',
      'Metodologia Black Panther dla naturalnego autorytetu',
      'Strategiczne ramy wdrożeniowe dopasowane do Twojego stylu',
      'Dostęp do ekskluzywnej społeczności praktyków',
      'Pełna suwerenność zawodowa i osobista'
    ],
    duration: '8 tygodni',
    format: 'Sesje 1:1 + Wdrożenie',
    level: 'Dla zdecydowanych na zmianę',
    startDate: 'Ograniczona dostępność (max 5 miejsc)',
    featured: true,
    image: ''
  },
  {
    id: 'hakowanie-produktywnosci',
    title: 'Hakowanie Produktywności',
    subtitle: 'System produktywności zgodny z Twoimi wartościami',
    description: 'Przestań być kontrolowanym przez technologię. Odzyskaj sprawczość i zbuduj system, który faktycznie wspiera Twoje cele, zamiast generować kolejne frustracje.',
    features: [
      'Kompleksowa diagnoza Twoich blokad produktywności',
      'Zintegrowany system zarządzania zadaniami i energią',
      'Protokoły głębokiej pracy dostosowane do Twojego kontekstu',
      'Praktyczne wdrożenie narzędzi, nie tylko teoria',
      'Społeczność praktyków do długoterminowego wsparcia'
    ],
    duration: '6 tygodni',
    format: 'Online + Spotkania grupowe',
    level: 'Dla świadomych optymalizatorów',
    startDate: 'Rekrutacja kwartalna',
    featured: false,
    image: ''
  },
  {
    id: 'silna-glowa',
    title: 'Silna Głowa',
    subtitle: 'Odporność psychiczna w wymagającym świecie',
    description: 'Zbuduj psychiczną odporność, która pozwoli Ci zachować spokój i klarowność myślenia nawet w najbardziej wymagających okolicznościach.',
    features: [
      'Praktyczne techniki redukcji stresu do natychmiastowego wdrożenia',
      'Protokoły zarządzania energią mentalną w trudnych sytuacjach',
      'Strategie podejmowania decyzji pod presją',
      'Metody budowania długoterminowej odporności psychicznej',
      'Narzędzia równoważenia intensywnej pracy i regeneracji'
    ],
    duration: '5 tygodni',
    format: 'Kurs online + praktyki',
    level: 'Dla poszukujących balansu',
    startDate: 'Dostęp natychmiastowy',
    featured: false,
    image: ''
  }
];

export default function Courses() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              Przejmij kontrolę nad swoim potencjałem
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Sprawdzone programy, które faktycznie transformują, a nie tylko dostarczają kolejnych informacji bez wdrożenia.
            </p>
          </div>
        </div>
      </section>
      
      {/* Courses Overview */}
      <section className="py-16">
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
                        <span className="text-white font-medium">Program Flagowy</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Course Details */}
                  <div className="lg:col-span-2 p-6 md:p-8">
                    {course.featured && (
                      <div className="inline-block bg-ascension-pink/10 dark:bg-ascension-pink/20 text-ascension-pink dark:text-luminal-magenta px-3 py-1 rounded-full text-sm font-medium mb-4">
                        Program Flagowy
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
                      {course.id === 'mental-elevator' ? (
                        <Link to="/mental-elevator">
                          <Button className="bg-neural-violet hover:bg-ascension-pink text-white">
                            Szczegóły programu
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      ) : (
                        <Link to={`/programs/${course.id}`}>
                          <Button className="bg-neural-violet hover:bg-ascension-pink text-white">
                            Szczegóły programu
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      )}
                      
                      <Link to="/contact">
                        <Button variant="outline" className="text-white">
                          {course.id === 'mental-elevator' ? 'Umów sesję Discovery' : 'Zapytaj o program'}
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
      
      {/* Personalized Programs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Programy dla zespołów i organizacji
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Potrzebujesz dedykowanego programu dla swojego zespołu? Tworzę spersonalizowane 
              rozwiązania dla organizacji, które chcą przejść od produktywności reaktywnej 
              do strategicznej.
            </p>
            
            <Link to="/contact">
              <Button className="bg-neural-violet hover:bg-ascension-pink">
                Zapytaj o program dla zespołu
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Najczęściej zadawane pytania
            </h2>
            
            <div className="space-y-8">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Skąd mam wiedzieć, który program jest dla mnie odpowiedni?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Każdy program jest stworzony z myślą o konkretnych potrzebach. Mental Elevator to program dla liderów gotowych na transformację, Hakowanie Produktywności dla osób szukających spójnego systemu działania, a Silna Głowa dla tych, którzy potrzebują większej odporności psychicznej. Jeśli masz wątpliwości, umów bezpłatną rozmowę Discovery.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Jaka jest polityka zwrotów?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Wszystkie programy objęte są 14-dniową gwarancją satysfakcji. Jeśli po pierwszych dwóch sesjach nie będziesz usatysfakcjonowany, otrzymasz pełny zwrot środków. W przypadku Mental Elevator, ze względu na intesywność procesu i limitowane miejsca, wymagana jest pełna płatność z góry.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Czy oferujesz plany płatności?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Tak, elastyczne opcje płatności są dostępne dla programów Hakowanie Produktywności i Silna Głowa. Szczegóły są przedstawiane podczas procesu zapisów lub można je omówić podczas rozmowy Discovery. Mental Elevator wymaga pełnej płatności z góry.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Ile czasu tygodniowo powinienem przeznaczyć na te programy?
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Większość programów wymaga 3-5 godzin tygodniowo, w tym sesje na żywo i pracę samodzielną. Mental Elevator wymaga większego zaangażowania (6-8 godzin tygodniowo) ze względu na intensywność transformacji. Dokładny zakres czasowy zostanie jasno określony przed zapisaniem się.
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
              Gotowy przejąć kontrolę?
            </h2>
            
            <p className="text-lg mb-8 text-white/90">
              Nie potrzebujesz kolejnego kursu. Potrzebujesz konkretnej transformacji, która pozwoli Ci wykorzystać technologię, zamiast być przez nią wykorzystywanym.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button className="bg-white text-neural-violet hover:bg-white/90">
                  Umów rozmowę Discovery
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              
              <Link to="/newsletter">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Dołącz do newslettera
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
