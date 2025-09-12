import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';
import WebinarTestimonials from '@/components/webinar/WebinarTestimonials';
import { Badge } from '@/components/ui/badge';

// Webinar component

const Webinar = () => {
  // Define workshop date info
  const workshopDate = {
    date: "16.10",
    day: "",
    time: "19:00",
    timezone: ""
  };
  
  return <Layout>
      <div className="bg-gradient-to-br from-luminous-white to-secondary dark:from-deep-space dark:to-neural-violet/30 min-h-screen">
        {/* Event Header Section with Countdown */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-neural-violet/30 text-neural-violet dark:text-neural-violet-light mb-4">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-neural-violet"></span>
                  <span className="text-sm font-medium">Warsztat na żywo</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neural-violet dark:text-neural-violet bg-gradient-to-r from-neural-violet dark:from-neural-violet to-ascension-pink dark:to-ascension-pink bg-clip-text text-transparent">
                  KRYZYS MĘSKOŚCI<br/>CZY UPGRADE SYSTEMU?
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/90">
                  Bezpłatny warsztat LIVE dla profesjonalistów 30+, którzy mają dość chaosu w głowie. Zobacz, jak zbudować wewnętrzny system operacyjny, który da Ci spokój i pewność decyzji.
                </p>

                {/* Workshop Details */}
                <div className="bg-neural-violet/10 rounded-xl p-6 mb-8 border border-neural-violet/20">
                  <div className="space-y-3">
                    <div className="text-lg font-medium text-neural-violet">
                      📅 Data: {workshopDate.date}
                    </div>
                    <div className="text-lg font-medium text-neural-violet">
                      🕒 Godzina: {workshopDate.time}
                    </div>
                    <div className="text-lg font-medium text-neural-violet">🖥️ Format: Spotkanie LIVE na Zoom</div>
                  </div>
                </div>

                <div className="max-w-md mx-auto lg:mx-0">
                  <WebinarCountdown />
                </div>
              </div>

              <div className="w-full lg:w-2/5">
                <div id="registration-form" className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
                  {/* Date Badge - More prominent styling */}
                  <div className="mb-8 text-center">
                    <Badge variant="outline" className="bg-neural-violet text-white text-sm px-3 py-1 mb-2">
                      Zarezerwuj swoje miejsce na warsztat online
                    </Badge>
                    <div className="bg-neural-violet/10 rounded-xl p-4 border-2 border-neural-violet/30 shadow-inner">
                      {/* Reserved for MailerLite embed */}
                    </div>
                  </div>
                 {/* DO NOT EDIT  CODE BELOW UNDER ANY CIRCUMSTANCES */}
                  <div className="ml-embedded" data-form="QWxEaM"></div>
                  {/* DO NOT EDIT  CODE ABOVE UNDER ANY CIRCUMSTANCES */}

              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-gradient-to-br from-red-50/50 to-orange-50/50 dark:from-red-950/10 dark:to-orange-950/10">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neural-violet dark:text-neural-violet">
                Dlaczego tak wielu facetów z analitycznym umysłem dzisiaj się gubi?
              </h2>
              
              <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 mb-8">
                <p className="text-lg mb-6 text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                  Z zewnątrz wszystko gra. W środku – paraliż analityczny. Jeden ma problem z postawieniem granic w pracy i kończy z nadgodzinami. Drugi nie potrafi pogodzić ambicji z życiem rodzinnym, czując, że zawodzi na obu frontach. Trzeci, mimo sukcesów, czuje wewnętrzną pustkę i brak kierunku.
                </p>
                
                <p className="text-lg mb-6 text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                  Jordan Peterson mówi jedno. Współczesne media drugie. Wzorce z domu pokazują trzecią drogę. W tym szumie informacyjnym łatwo stracić własny sygnał.
                </p>
                
                <div className="bg-neural-violet/10 rounded-xl p-6 border border-neural-violet/20 text-center">
                  <p className="text-xl font-semibold text-neural-violet">
                    Jeśli tkwisz w pętli myśli, zamiast podejmować działania – to spotkanie jest frameworkiem, którego szukasz.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Agenda and Value Section */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-neural-violet">
                Co otrzymasz podczas tego spotkania?
              </h2>
              
              <p className="text-xl font-bold text-center mb-12 text-neural-violet">
                Konkretny system, zero bullshitu.
              </p>

              <div className="grid gap-8">
                <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🧭</div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-neural-violet">DIAGNOZA: KOMPAS ZAMIAST CHAOSU</h3>
                      <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                        Ludwik i Mateusz w otwartym dialogu o tym, czy "kryzys męskości" to problem, czy największa szansa na zbudowanie autentycznej siły w XXI wieku. Bez frazesów, zderzając wizję z twardą rzeczywistością.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🎯</div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-neural-violet">NARZĘDZIE: OSOBISTY DASHBOARD</h3>
                      <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                        Mateusz w trakcie sesji warsztatowej pokaże Ci prostą, ale potężną metodę mapowania swojego "tu i teraz". Wyjdziesz z konkretnym, zwizualizowanym punktem startowym w 4 kluczowych obszarach życia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                  <div className="flex items-start gap-6">
                    <div className="text-4xl">🤝</div>
                    <div>
                      <h3 className="text-xl font-bold mb-4 text-neural-violet">SYSTEM: MAPA + ZAŁOGA</h3>
                      <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                        Zobaczysz, dlaczego sama wizja i wartości bez wdrożenia zostają w głowie, a sam plan bez sensu staje się pustą checklistą. Zrozumiesz, jak połączyć te dwa światy w jeden działający system.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Participant Profile Section */}
        <section className="py-16 bg-gradient-to-br from-neural-violet/5 via-background to-ascension-pink/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-neural-violet">
                Dla kogo jest ten warsztat?
              </h2>
              
              <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 dark:border-gray-800 mb-8">
                <p className="text-xl mb-8 text-center text-deep-charcoal/80 dark:text-silver-mist/90">
                  Zaprojektowaliśmy to spotkanie z myślą o konkretnym typie mężczyzny. Jesteś idealnym kandydatem, jeśli:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4 p-4 bg-neural-violet/5 rounded-xl border border-neural-violet/10">
                    <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-sm">
                      •
                    </div>
                    <p className="text-lg text-neural-violet font-medium">Masz dość powierzchownych porad typu "bądź alfa" czy "znajdź balans".</p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-neural-violet/5 rounded-xl border border-neural-violet/10">
                    <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-sm">
                      •
                    </div>
                    <p className="text-lg text-neural-violet font-medium">Myślisz systemowo i szukasz <strong>frameworków do wdrożenia</strong>, a nie kolejnych teorii do przemyślenia.</p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-neural-violet/5 rounded-xl border border-neural-violet/10">
                    <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-sm">
                      •
                    </div>
                    <p className="text-lg text-neural-violet font-medium">Chcesz budować życie w oparciu o własny, wewnętrzny system operacyjny, a nie cudze oczekiwania.</p>
                  </div>
                  
                  <div className="flex items-start gap-4 p-4 bg-neural-violet/5 rounded-xl border border-neural-violet/10">
                    <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-sm">
                      •
                    </div>
                    <p className="text-lg text-neural-violet font-medium">Rozumiesz, że prawdziwa siła to spójność wewnętrzna, a nie zewnętrzne pozory.</p>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <p className="text-xl font-bold text-neural-violet">
                    ...jeśli to o Tobie, to będziesz wśród swoich.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Credentials Section */}
        <section className="py-16 bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm border-t border-b border-gray-200 dark:border-gray-800">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center text-neural-violet">
                Kto prowadzi? Dwa bieguny, jeden cel.
              </h2>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/50 dark:bg-deep-space/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-neural-violet">Ludwik Siadlak</h3>
                  <p className="text-lg mb-4 text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                    – twórca społeczności Lifehackerzy. Architekt wizji i sensu. Specjalizuje się w docieraniu do sedna tego, co napędza i blokuje świadomych mężczyzn.
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-deep-space/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                  <h3 className="text-xl font-bold mb-4 text-neural-violet">Mateusz Lizak</h3>
                  <p className="text-lg mb-4 text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                    – praktyk rozwoju, inżynier systemów i działania. Przekłada wielkie idee na konkretne, codzienne procesy i narzędzia.
                  </p>
                </div>
              </div>

              <div className="bg-neural-violet/10 rounded-2xl p-8 border border-neural-violet/20 text-center">
                <p className="text-lg font-medium text-neural-violet">
                  Razem tworzymy Męski Kompas – przestrzeń dla facetów, którzy chcą iść własną drogą, ale potrzebują do tego mapy i niezawodnych narzędzi.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Logistics and Transparency Section */}
        <section className="py-16 bg-gradient-to-br from-neural-violet/5 via-background to-ascension-pink/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-neural-violet">
                Szczegóły spotkania:
              </h2>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">📅</span>
                      <div>
                        <p className="font-medium text-neural-violet">Kiedy:</p>
                        <p className="text-lg">{workshopDate.date} | {workshopDate.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">🖥️</span>
                      <div>
                        <p className="font-medium text-neural-violet">Gdzie:</p>
                        <p className="text-lg">Interaktywny warsztat na Zoom (link otrzymasz po zapisie)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-xl p-6 border border-gray-200 dark:border-gray-800">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💰</span>
                      <div>
                        <p className="font-medium text-neural-violet">Inwestycja:</p>
                        <p className="text-lg">Twój czas i uwaga. Udział jest bezpłatny.</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⏱️</span>
                      <div>
                        <p className="font-medium text-neural-violet">Czas trwania:</p>
                        <p className="text-lg">60-75 minut konkretów i pracy na żywo.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-neural-violet/10 rounded-2xl p-8 border border-neural-violet/20 mb-8">
                <h3 className="text-xl font-bold mb-4 text-neural-violet">Nota transparentności:</h3>
                <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/90 leading-relaxed">
                  Pod koniec warsztatu otworzymy rekrutację do pierwszej, zamkniętej kohorty programu "Męski Kompas". Pokażemy, co budujemy i dla kogo. Bez presji i agresywnej sprzedaży. Po prostu przedstawimy logiczny, kolejny krok dla tych, którzy będą gotowi.
                </p>
              </div>

              <div className="text-center">
                <p className="text-xl font-medium mb-6 text-neural-violet">
                  Zarezerwuj swoje miejsce i dołącz do rozmowy, która może być Twoim nowym początkiem.
                </p>
                
                <Button onClick={() => document.getElementById("registration-form")?.scrollIntoView({
                  behavior: "smooth"
                })} className="bg-neural-violet hover:bg-neural-violet/90 text-white px-12 py-6 text-xl">
                  ZAREZERWUJ MIEJSCE
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <WebinarTestimonials />

      </div>
    </Layout>;
};

export default Webinar;