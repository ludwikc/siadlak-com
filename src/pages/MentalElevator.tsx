import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { CheckCircle, ArrowRight, Calendar, Shield, Star, Zap, AlertCircle, Users, Target, Brain, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MentalElevator() {
  return (
    <Layout>
      {/* Hero Section - Conversion Focused */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-neural-violet to-quantum-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              MENTAL ELEVATOR
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-silver-mist leading-tight">
              8-tygodniowy program transformacji dla tych, którzy mają dość <span className="italic text-ascension-pink">udawania</span>, że wszystko mają pod kontrolą
            </h2>
            <Link to="/contact">
              <Button 
                className="bg-ascension-pink hover:bg-luminal-magenta text-white py-6 px-12 text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 font-bold"
                aria-label="Zarezerwuj Discovery Session - przejdź do formularza kontaktowego"
              >
                Zarezerwuj Discovery Session
                <ArrowRight className="ml-3 h-6 w-6" aria-hidden="true" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Reality Check - Pain Points */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Rozpoznajesz to?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div className="space-y-6">
                {[
                  "Masz 47 otwartych zakładek z kursami, które \"kiedyś przerobisz\"",
                  "Analizujesz kolejne frameworki produktywności, ale wciąż czujesz się przytłoczony",
                  "W głowie ciągle refaktorujesz problemy z pracy – nawet w weekendy"
                ].map((item, index) => (
                  <div key={index} className="flex items-start glass-card p-6 rounded-xl hover:shadow-lg transition-all">
                    <AlertCircle className="h-6 w-6 mr-4 text-red-500 flex-shrink-0 mt-1" />
                    <p className="text-lg text-deep-charcoal/90 dark:text-silver-mist/90">{item}</p>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                {[
                  "Z zewnątrz wyglądasz na osobę sukcesu. Wysoka kompetencja, świetne rezultaty, szacunek zespołu",
                  "Ale w środku? Chroniczne napięcie. Paraliż decyzyjny. Lęk przed zmarnowaniem potencjału",
                  "Próbowałeś już tradyjnego coachingu. Otrzymałeś listę \"actionable steps\" i motywacyjne gadanie"
                ].map((item, index) => (
                  <div key={index} className="flex items-start glass-card p-6 rounded-xl hover:shadow-lg transition-all">
                    <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                    <p className="text-lg text-deep-charcoal/90 dark:text-silver-mist/90">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-ascension-pink/10 to-neural-violet/10 p-8 rounded-2xl">
              <p className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist mb-4">
                Twój problem leży w <span className="text-ascension-pink">fragmentacji</span>
              </p>
              <p className="text-lg text-deep-charcoal/90 dark:text-silver-mist/80">
                Nie potrzebujesz więcej wiedzy czy motywacji. Potrzebujesz integracji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Traditional Solutions Failed */}
      <section className="py-20 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-deep-space dark:to-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Dlaczego dotychczasowe rozwiązania Cię zawiodły
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-8 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">Coaching / Mentoring</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Zakłada, że potrzebujesz więcej strategii, lepszych nawyków, mocniejszej motywacji. 
                  To jak próba naprawienia komputera przez instalowanie kolejnych programów.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-300">Terapia<sup>*</sup></h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Skupia się na przeszłości i emocjach, ale nie łączy tego z twoją dzisiejszą rzeczywistością zawodową. 
                  Rozumiesz skąd perfekcjonizm, ale wciąż nie wiesz jak działać. <br /><br /> (Terapia jest ważnym i skutecznym narzędziem, z którego sam korzystam i polecam! Tu jednak)
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-xl font-bold mb-4 text-yellow-800 dark:text-yellow-300">Kursy Online</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Dają ci kolejne narzędzia, ale nie radzą sobie z podstawowym problemem: 
                  nie potrafisz zintegrować swojej analitycznej natury z intuicyjnym działaniem.
                </p>
              </div>
            </div>

            <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl">
              <p className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                Rezultat? Żyjesz w ciągłym napięciu między potrzebą kontroli a świadomością, że ta kontrola Cię paraliżuje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mental Elevator Solution */}
      <section className="py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
              Mental Elevator: Metodologia dla umysłów, które myślą systemowo
            </h2>
            
            <p className="text-xl text-center mb-12 text-silver-mist">
              Mental Elevator to nie coaching. To nie terapia. To <span className="text-ascension-pink font-bold"> realna transformacja</span> zaprojektowana specjalnie dla analitycznych profesjonalistów.
            </p>

            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-8 text-center text-ascension-pink">
                Jak to działa? (Bo wiem, że potrzebujesz zrozumieć mechanizm)
              </h3>

              <p className="text-xl text-center mb-12 text-silver-mist font-medium">
                8 tygodni. 8 sesji. Całkowita transformacja.
              </p>

              <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
                <div className="relative">
                  <div className="glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/20 hover:bg-white/25 transition-all border-2 border-ascension-pink/30">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-ascension-pink rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg">1</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">Destabilizacja</h4>
                        <p className="text-ascension-pink font-semibold text-lg">Tydzień 1-2</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Identyfikujemy i rozbijamy systemy myślenia, które Cię ograniczają. Wprowadzamy świadomość somatyczną. <span className="text-ascension-pink font-semibold">To będzie intensywne.</span>
                    </p>
                  </div>
                  {/* Arrow to next step */}
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-ascension-pink">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>

                <div className="relative">
                  <div className="glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/20 hover:bg-white/25 transition-all border-2 border-luminal-magenta/30">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-luminal-magenta rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg">2</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">Dezorientacja</h4>
                        <p className="text-luminal-magenta font-semibold text-lg">Tydzień 3-4</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Celowo zabieramy Ci znane mapy myślowe. Będziesz czuł się zagubiony. <span className="text-luminal-magenta font-semibold">To dokładnie to, czego potrzebujesz.</span>
                    </p>
                  </div>
                </div>

                <div className="relative">
                  <div className="glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/20 hover:bg-white/25 transition-all border-2 border-neural-violet/30">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-neural-violet rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg">3</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">Integracja</h4>
                        <p className="text-neural-violet font-semibold text-lg">Tydzień 5-6</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Identyfikujemy konfliktowe części Twojej osobowości i uczymy je współpracy. <span className="text-neural-violet font-semibold">Pierwsze przebłyski nowego sposobu bycia.</span>
                    </p>
                  </div>
                  {/* Arrow to final step */}
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-neural-violet">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                </div>

                <div className="relative">
                  <div className="glass-card p-8 rounded-2xl backdrop-blur-sm bg-white/20 hover:bg-white/25 transition-all border-2 border-quantum-blue/30">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-quantum-blue rounded-2xl flex items-center justify-center text-white font-bold text-2xl mr-4 shadow-lg">4</div>
                      <div>
                        <h4 className="text-2xl font-bold text-white">Droga do Mistrzostwa</h4>
                        <p className="text-quantum-blue font-semibold text-lg">Tydzień 7-8</p>
                      </div>
                    </div>
                    <p className="text-white/90 text-lg leading-relaxed">
                      Nowy sposób bycia staje się Twoją naturalną ekspresją. Zmiana jest już zintegrowana i trwała. <span className="text-quantum-blue font-semibold">Ruszasz w tę podróż uzbrojony w nową, silniejszą wersję siebie, która jest nie-do-zatrzymania.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <Link to="/contact">
                <Button 
                  className="bg-ascension-pink hover:bg-luminal-magenta text-white py-4 px-10 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all"
                  aria-label="Zarezerwuj Discovery Session - przejdź do formularza kontaktowego"
                >
                  Zarezerwuj Discovery Session
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Results & Testimonial */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Co się zmienia? (Konkretne rezultaty, nie obietnice)
            </h2>

            {/* Featured Testimonial */}
            <div className="glass-card p-10 rounded-2xl mb-16 bg-gradient-to-r from-ascension-pink/5 to-neural-violet/5 dark:from-ascension-pink/10 dark:to-neural-violet/10 border border-ascension-pink/20">
              <div className="flex items-start mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-ascension-pink to-luminal-magenta rounded-full flex items-center justify-center text-white font-bold text-xl mr-6">A</div>
                <div>
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Anna, Marketing Strategist, 34 lata</h3>
                  <div className="flex text-yellow-500 mt-1">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>
                </div>
              </div>
              <blockquote className="text-lg text-deep-charcoal/90 dark:text-silver-mist/90 italic mb-4">
                "Przez lata czułam się jak osoba o dwóch twarzach – analityczna w pracy, kreatywna prywatnie. Po Mental Elevator odkryłam, że jestem naturalnym amplifikatorem – generuję sukces dla innych przez to, kim jestem, nie co robię."
              </blockquote>
              <p className="text-ascension-pink font-bold text-lg">
                Akwizycja klientów wzrosła o 340% w 6 miesięcy, ale co ważniejsze – pracuję mniej, a osiągam więcej.
              </p>
            </div>

            {/* Results Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Decyzje podejmujesz szybciej",
                  description: "Bez analizowania każdej opcji przez tygodnie"
                },
                {
                  icon: <Brain className="w-8 h-8" />,
                  title: "Praca przestaje Ci ciążyć po godzinach",
                  description: "Uczysz się odpoczywać i umysł faktycznie się wyłącza"
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Lidership bez wysiłku",
                  description: "Zespół podąża za Tobą naturalnie, nie przez presję"
                },
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Integracja analityki z intuicją",
                  description: "Wykorzystujesz pełny potencjał swojego umysłu"
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Autentyczność bez straty kompetencji",
                  description: "Przestajesz udawać, że masz wszystko pod kontrolą"
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Fundamentalne przeprogramowanie",
                  description: "Nowy sposób funkcjonowania jako lider i profesjonalista"
                }
              ].map((item, index) => (
                <div key={index} className="glass-card p-6 rounded-xl hover:shadow-lg transition-all">
                  <div className="flex items-center mb-4">
                    <div className="text-neural-violet dark:text-luminal-magenta mr-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-bold text-deep-charcoal dark:text-silver-mist">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why It Works - 3 Pillars */}
      <section className="py-20 bg-gradient-to-br from-neural-violet/10 to-ascension-pink/10 dark:from-deep-space dark:to-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Dlaczego Mental Elevator działa tam, gdzie inne podejścia zawodzą?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <Brain className="w-12 h-12 text-neural-violet dark:text-luminal-magenta mr-4" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Metodologia oparta na neurobiologii</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Integracja świadomości somatycznej z procesami poznawczymi tworzy nowe ścieżki neuronowe. 
                  Decyzje podejmujesz z "whole-brain intelligence".
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <Shield className="w-12 h-12 text-neural-violet dark:text-luminal-magenta mr-4" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Praca z archetypami</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Łączysz się z uniwersalnymi wzorcami przywództwa (Kreator, Ojciec/Ochrona, Wojownik, Transformator), 
                  które dają ci naturalny autorytet bez wysiłku.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl hover:shadow-xl transition-all">
                <div className="flex items-center mb-6">
                  <Zap className="w-12 h-12 text-neural-violet dark:text-luminal-magenta mr-4" />
                  <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">Systemowe podejście</h3>
                </div>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Nie walczymy z Twoim perfekcjonizmem czy analityczną naturą – 
                  integrujemy je w spójny system operacyjny.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
              Inwestycja i Zobowiązanie
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="glass-card p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">Program</h3>
                <ul className="space-y-4 text-left">
                  <li className="flex items-center text-deep-charcoal/90 dark:text-silver-mist/90">
                    <Clock className="w-5 h-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    8 tygodni, 8 intensywnych sesji
                  </li>
                  <li className="flex items-center text-deep-charcoal/90 dark:text-silver-mist/90">
                    <Calendar className="w-5 h-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    Sesje od 50 minut do 2,5 godziny
                  </li>
                  <li className="flex items-center text-deep-charcoal/90 dark:text-silver-mist/90">
                    <Users className="w-5 h-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    Dożywotni dostęp do społeczności Lifehackerzy
                  </li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl bg-gradient-to-br from-ascension-pink/5 to-neural-violet/5 dark:from-ascension-pink/10 dark:to-neural-violet/10">
                <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">Inwestycja</h3>
                <div className="text-center">
                  <p className="text-5xl font-bold text-neural-violet dark:text-luminal-magenta mb-4">
                    16.000 PLN
                  </p>
                  <p className="text-lg text-deep-charcoal/90 dark:text-silver-mist/90">
                    za pełen, 8-tygodniowy program transformacyjny
                  </p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">Dlaczego taka cena?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="text-left">
                  <p className="text-deep-charcoal/90 dark:text-silver-mist/90 mb-4">
                    To nie jest kurs online czy pakiet coachingowy. To głęboka, integracyjna transformacja wymagająca:
                  </p>
                  <ul className="space-y-2 text-deep-charcoal/90 dark:text-silver-mist/80">
                    <li>• Pełnej obecności przez 8 tygodni</li>
                    <li>• Pracy na poziomie tożsamości</li>
                    <li>• Dostępu do unikalnej metodologii</li>
                    <li>• Wsparcia ekskluzywnej społeczności</li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 p-6 rounded-xl">
                  <h4 className="font-bold mb-2 text-green-700 dark:text-green-300">ROI</h4>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    Moi klienci już po pierwszych sesjach wracają ze zwiększoną skutecznością, podnoszą
                    efektywność swoich zespołów i redukują stres.
                  </p>
                </div>
              </div>
            </div>

            <blockquote className="text-xl italic text-deep-charcoal dark:text-silver-mist">
              "Nie ma nic gorszego niż wybierać rozwiązanie życiowych wyzwań, kierując się ceną."
            </blockquote>
          </div>
        </div>
      </section>

      {/* Exclusivity */}
      <section className="py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ekskluzywność ma sens
            </h2>
            
            <p className="text-xl mb-8 text-silver-mist">
              Pracuję jednocześnie maksymalnie z <strong>5 osobami</strong>. I to nie jest marketingowy <em>bullshit</em> – to konieczność.
            </p>

            <div className="glass-card p-8 rounded-xl backdrop-blur-sm bg-white/10 mb-8">
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 mr-3 text-ascension-pink" />
                <span className="text-2xl font-bold">Obecnie dostępna przestrzeń: 2</span>
              </div>
              <p className="text-lg text-silver-mist/90">
                <span className="text-ascension-pink font-bold">2 dostępne miejsca</span>
              </p>
            </div>

            <p className="text-lg text-silver-mist/80">
              First come, first served. Jeśli czujesz, że to dla Ciebie, nie zwlekaj. Ale wiesz co? Sprawdźmy: 
            </p>
          </div>
        </div>
      </section>

      {/* Qualification Section */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Czy to dla Ciebie?
            </h2>

            <p className="text-xl text-center mb-12 text-deep-charcoal/90 dark:text-silver-mist/90">
              Mental Elevator to <strong>nie jest</strong> dla każdego. Sprawdź, czy pasujesz do profilu:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* YES Column */}
              <div className="glass-card p-8 rounded-xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20">
                <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300 text-center">
                  ✅ TAK, jeśli:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Masz udokumentowane sukcesy zawodowe, ale czujesz, że działasz poniżej swojego potencjału",
                    "Potrafisz tolerować tymczasową niepewność podczas procesu transformacji",
                    "Zależy ci na autentycznej zmianie, nie na szybkich \"hackach\"",
                    "Szukasz integracji, nie kolejnych narzędzi czy strategii",
                    "Jesteś gotowy na 6-miesięczne pełne zaangażowanie"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <span className="text-green-700 dark:text-green-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* NO Column */}
              <div className="glass-card p-8 rounded-xl border-2 border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20">
                <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-300 text-center">
                  ❌ NIE, jeśli:
                </h3>
                <ul className="space-y-4">
                  {[
                    "Szukasz szybkich rozwiązań lub motywacyjnego \"kopa\"",
                    "Nie jesteś gotowy na kwestionowanie swoich dotychczasowych sposobów funkcjonowania",
                    "Potrzebujesz stabilizacji w kryzysie (to nie jest terapia kryzysowa)",
                    "Chcesz jedynie nowych narzędzi produktywności",
                    "Nie możesz zobowiązać się do regularnych, intensywnych sesji"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <AlertCircle className="w-5 h-5 mr-3 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                      <span className="text-red-700 dark:text-red-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Session CTA */}
      <section className="py-20 bg-gradient-to-br from-neural-violet to-ascension-pink text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Następny krok: Discovery Session
            </h2>

            <p className="text-xl mb-8">
              Zanim zaakceptuję Cię do programu, musimy przeprowadzić <strong>30-minutową Discovery Session</strong>.
            </p>

            <div className="glass-card p-8 rounded-xl backdrop-blur-sm bg-white/10 mb-8">
              <p className="text-lg mb-6">
                To nie jest "sprzedażowa" rozmowa. To <strong>wzajemna ocena dopasowania</strong>:
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <Target className="w-5 h-5 mr-3 text-ascension-pink" />
                    Analizujemy Twoje obecne wzorce i ograniczenia
                  </li>
                  <li className="flex items-center">
                    <Brain className="w-5 h-5 mr-3 text-ascension-pink" />
                    Sprawdzamy dopasowanie metodologii
                  </li>
                </ul>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-3 text-ascension-pink" />
                    Ustalamy jasne oczekiwania
                  </li>
                  <li className="flex items-center">
                    <Shield className="w-5 h-5 mr-3 text-ascension-pink" />
                    Podejmujemy decyzję o współpracy – oboje
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-black/20 p-6 rounded-xl mb-8">
              <p className="text-lg font-medium mb-2">
                <strong>Discovery Session jest płatna</strong>
              </p>
              <p className="text-2xl font-bold text-ascension-pink mb-2">500 PLN</p>
              <p className="text-silver-mist/80">odliczane od ceny programu w przypadku akceptacji</p>
            </div>

            <p className="text-lg mb-8 text-silver-mist">
              <strong>Dlaczego?</strong> Bo to już część procesu. Ludzie, którzy są gotowi zainwestować w samo poznanie swojej sytuacji, 
              to ci, którzy osiągają najlepsze rezultaty.
            </p>

            <Link to="/contact">
              <Button 
                className="bg-white text-neural-violet hover:bg-silver-mist py-6 px-12 text-xl rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:scale-105 font-bold"
                aria-label="Zarezerwuj Discovery Session - przejdź do formularza kontaktowego"
              >
                Zarezerwuj Discovery Session
                <Calendar className="ml-3 h-6 w-6" aria-hidden="true" />
              </Button>
            </Link>

            <p className="text-sm mt-4 text-silver-mist/70">
              Miejsca rezerwuję w kolejności zgłoszeń
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA & PS */}
      <section className="py-16 bg-deep-space text-silver-mist">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-8 italic">
              <em>Mental Elevator to metodologia dla profesjonalistów, którzy przestali wierzyć w powierzchowne rozwiązania 
              i są gotowi na fundamentalną zmianę sposobu funkcjonowania. To nie coaching, nie terapia – 
              to integracyjna transformacja dla umysłów, które myślą systemowo.</em>
            </p>

            <div className="bg-gradient-to-r from-ascension-pink/10 to-neural-violet/10 p-6 rounded-xl">
              <p className="text-lg">
                <strong>P.S.</strong> Jeśli dotarłeś do tego miejsca i wciąż się wahasz – to prawdopodobnie znaczy, 
                że Twoja analityczna natura próbuje znaleźć "pewność" przed podjęciem kroków. To jeden z wzorców, 
                z którymi będziemy pracować. Discovery Session to bezpieczny sposób na zbadanie tej niepewności 
                bez pełnego zobowiązania.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}