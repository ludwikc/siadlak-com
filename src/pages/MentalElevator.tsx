import React from 'react';
import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { CheckCircle, Shield, Zap, AlertCircle, Users, Target, Brain, Clock, GitMerge, Crown } from '@/lib/icons';
import { Link } from 'react-router-dom';

export default function MentalElevator() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-neural-violet to-quantum-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Life OS: System Upgrade
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-silver-mist leading-tight">
              8-tygodniowy program dla liderów, którzy osiągnęli sukces, ale czują, że grają poniżej swoich prawdziwych możliwości.
            </h2>
            <Link to="/contact">
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl"
                aria-label="Zarezerwuj Sesję Discovery - przejdź do formularza kontaktowego"
                showArrow
              >
                Zarezerwuj Sesję Discovery
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Recognition */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Rozpoznajesz ten stan?
            </h2>

            <div className="space-y-8 mb-16">
              {[
                "Osiągnąłeś wszystko, co miało dać Ci spokój – a jednak czujesz wewnętrzne napięcie, którego nie potrafisz nazwać.",
                "Twój kalendarz jest perfekcyjnie zorganizowany, ale w głowie panuje chaos i paraliż analityczny.",
                "Z zewnątrz jesteś wzorem kompetencji i sukcesu. Wzbudzasz szacunek.",
                "Ale w środku? Poczucie fragmentacji. Wrażenie, że żonglujesz różnymi tożsamościami – lidera, partnera, wizjonera – i boisz się, że zaraz upuścisz jedną z piłek."
              ].map((item, index) => (
                <GlassCard key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                  <p className="text-lg text-deep-charcoal/90 dark:text-silver-mist/90">{item}</p>
                </GlassCard>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-ascension-pink/10 to-neural-violet/10 p-8 rounded-2xl mb-8">
              <p className="text-xl font-bold text-deep-charcoal dark:text-silver-mist mb-4">
                Próbowałeś już standardowych rozwiązań. Dostałeś listy "actionable steps", motywacyjne cytaty i kolejne frameworki. Ale problem nie leży w braku narzędzi.
              </p>
              <p className="text-2xl font-bold text-ascension-pink">
                Twój problem to wewnętrzny konflikt systemowy.
              </p>
            </div>

            <div className="text-center bg-gradient-to-r from-neural-violet/10 to-quantum-blue/10 p-8 rounded-2xl">
              <p className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                Nie potrzebujesz kolejnej aplikacji mentalnej. Potrzebujesz upgrade'u całego systemu operacyjnego, na którym działasz.
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
              Dlaczego dotychczasowe rozwiązania zawiodły?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <GlassCard padding="lg" className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">Coaching / Mentoring</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Daje Ci nowe strategie i "hacki". To jak instalowanie kolejnych aplikacji na systemie, który jest wewnętrznie skonfliktowany. Efekt jest chwilowy, a problem fundamentalny pozostaje.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800">
                <h3 className="text-xl font-bold mb-4 text-orange-800 dark:text-orange-300">Terapia</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Skupia się na analizie przeszłości, ale często nie potrafi przełożyć tych wglądów na Twoją dzisiejszą presję zawodową. Rozumiesz, skąd bierze się Twój perfekcjonizm, ale nadal nie wiesz, jak podejmować odważne decyzje w poniedziałek o 9:00 rano.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800">
                <h3 className="text-xl font-bold mb-4 text-yellow-800 dark:text-yellow-300">Kursy Online</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80">
                  Dostarczają wiedzy, ale ignorują fakt, że prawdziwa zmiana nie zachodzi na poziomie intelektualnym. Dają Ci narzędzia, ale nie potrafią zintegrować Twojej analitycznej natury z intuicją i wewnętrzną mądrością.
                </p>
              </GlassCard>
            </div>

            <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl">
              <p className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                Rezultat? Żyjesz w ciągłym napięciu. Między tym, kim czujesz, że jesteś, a tym, kim "powinieneś" być w biznesie. Między potrzebą kontroli a świadomością, że ta kontrola Cię wyczerpuje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life OS System Upgrade */}
      <section className="relative py-20 bg-gradient-to-b from-deep-space via-neural-violet to-quantum-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
              Life OS: System Upgrade
            </h2>
            
            <p className="text-2xl text-center mb-4 text-silver-mist font-bold">
              Od wewnętrznej fragmentacji do zintegrowanego przywództwa w 8 tygodni.
            </p>
            
            <p className="text-xl text-center mb-16 text-silver-mist/80">
              Life OS to nie jest coaching. To nie jest terapia. To <span className="text-ascension-pink font-bold">głęboka praca na poziomie Twojej tożsamości</span>, zaprojektowana dla liderów, którzy myślą systemowo i są gotowi na prawdziwą transformację.
            </p>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Phase 1: Diagnostyka */}
              <div className="group relative">
                <GlassCard padding="lg" className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-ascension-pink/20 p-4 rounded-2xl">
                      <Brain className="w-8 h-8 text-ascension-pink" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">FAZA 1: DIAGNOSTYKA SYSTEMU</h3>
                      <p className="text-silver-mist text-lg font-medium">Tydzień 1-2</p>
                    </div>
                  </div>
                  <p className="text-silver-mist/90 text-lg leading-relaxed">
                    Zaczynamy od głębokiej analizy Twojego obecnego "systemu operacyjnego". Identyfikujemy ukryte konflikty, nieświadome wzorce i wewnętrznych sabotażystów, którzy blokują Twój pełen potencjał. To faza brutalnej szczerości z samym sobą, prowadzona w bezpiecznej przestrzeni.
                  </p>
                </GlassCard>
              </div>

              {/* Phase 2: Dekonstrukcja */}
              <div className="group relative">
                <GlassCard padding="lg" className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-luminal-magenta/20 p-4 rounded-2xl">
                      <Zap className="w-8 h-8 text-luminal-magenta" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">FAZA 2: DEKONSTRUKCJA I WYZWANIE</h3>
                      <p className="text-silver-mist text-lg font-medium">Tydzień 3-4</p>
                    </div>
                  </div>
                  <p className="text-silver-mist/90 text-lg leading-relaxed">
                    Tutaj zaczyna się prawdziwa praca. Konfrontujemy to, co Ci nie służy. W zależności od Twojej gotowości, ten proces może być ostry i bezpośredni, albo delikatny i wspierający. To nie jest komfortowe, ale jest konieczne, by zrobić miejsce na nowe.
                  </p>
                </GlassCard>
              </div>

              {/* Phase 3: Integracja */}
              <div className="group relative">
                <GlassCard padding="lg" className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-neural-violet/20 p-4 rounded-2xl">
                      <GitMerge className="w-8 h-8 text-neural-violet" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">FAZA 3: INTEGRACJA RDZENIA</h3>
                      <p className="text-silver-mist text-lg font-medium">Tydzień 5-6</p>
                    </div>
                  </div>
                  <p className="text-silver-mist/90 text-lg leading-relaxed">
                    Konfliktowe części Twojej tożsamości (np. bezwzględny CEO i wrażliwy wizjoner) uczą się ze sobą współpracować. Zamiast eliminować "słabości", integrujemy je jako źródła siły. Zaczynasz działać z poczuciem wewnętrznej spójności.
                  </p>
                </GlassCard>
              </div>

              {/* Phase 4: Nowy Standard */}
              <div className="group relative">
                <GlassCard padding="lg" className="bg-white/10 backdrop-blur-sm border border-white/20">
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-quantum-blue/20 p-4 rounded-2xl">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">FAZA 4: NOWY STANDARD DZIAŁANIA</h3>
                      <p className="text-silver-mist text-lg font-medium">Tydzień 7-8</p>
                    </div>
                  </div>
                  <p className="text-silver-mist/90 text-lg leading-relaxed">
                    Nowy, zintegrowany sposób bycia staje się Twoją drugą naturą. Decyzje stają się lżejsze, przywództwo bardziej naturalne, a praca przestaje być walką. Działasz z poziomu autentycznej mocy, a nie wymuszonej dyscypliny.
                  </p>
                </GlassCard>
              </div>
            </div>

            <div className="text-center mt-16">
              <Link to="/contact">
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl"
                  showArrow
                >
                  ZAINSTALUJ NOWY SYSTEM
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Real Effects */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Jakie są realne efekty upgrade'u?
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Decyzyjność oparta na klarowności",
                  description: "Podejmujesz kluczowe decyzje szybciej i z większą pewnością, bo wypływają ze zintegrowanego połączenia analizy i intuicji."
                },
                {
                  icon: <Users className="w-8 h-8" />,
                  title: "Przywództwo bez wysiłku",
                  description: "Twój zespół podąża za Tobą naturalnie, bo czuje Twoją wewnętrzną spójność i autentyczność, a nie presję i kontrolę."
                },
                {
                  icon: <Zap className="w-8 h-8" />,
                  title: "Koniec z wewnętrzną walką",
                  description: "Uciszasz wewnętrznego krytyka i integrujesz różne części siebie w spójną całość. Odzyskujesz ogromne pokłady energii."
                },
                {
                  icon: <Clock className="w-8 h-8" />,
                  title: "Prawdziwy odpoczynek",
                  description: "Uczysz się wyłączać tryb 'praca', dzięki czemu czas wolny faktycznie regeneruje, a nie jest tylko przerwą."
                },
                {
                  icon: <Shield className="w-8 h-8" />,
                  title: "Odporność na chaos",
                  description: "Zewnętrzne kryzysy i niepewność przestają Cię destabilizować, bo masz dostęp do stabilnego, wewnętrznego rdzenia."
                }
              ].map((item, index) => (
                <GlassCard key={index} padding="lg" className="flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-neural-violet/10 dark:bg-luminal-magenta/10 p-3 rounded-lg mr-4">
                      {React.cloneElement(item.icon, { className: "w-8 h-8 text-neural-violet dark:text-luminal-magenta" })}
                    </div>
                    <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">{item.title}</h3>
                  </div>
                  <p className="text-deep-charcoal/90 dark:text-silver-mist/80">{item.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why This Method Works */}
      <section className="py-20 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-deep-space dark:to-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Dlaczego ta metoda działa tam, gdzie inne zawodzą?
            </h2>

            <div className="space-y-8">
              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Podejście Adaptacyjne, nie Szablonowe</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80 text-lg">
                  Proces jest w 100% dostosowany do Ciebie. Dla jednych będzie jak ostra, konfrontacyjna "terapia szokowa", dla innych jak delikatne, sokratejskie prowadzenie. Diagnozuję, czego naprawdę potrzebujesz do przełomu.
                </p>
              </GlassCard>

              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Praca na Poziomie Tożsamości, nie Zachowań</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80 text-lg">
                  Nie zmieniamy tylko tego, co robisz. Zmieniamy to, kim jesteś jako lider i człowiek. Integrujemy Twoje role, talenty i "cienie" w jedną, potężną całość.
                </p>
              </GlassCard>

              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Integracja, a nie Eliminacja</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80 text-lg">
                  Nie walczymy z Twoim analitycznym umysłem czy perfekcjonizmem. Uczymy je współpracować z Twoją intuicją, kreatywnością i wrażliwością, tworząc pełniejszy i bardziej skuteczny model działania.
                </p>
              </GlassCard>

              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">Kontener Bezpieczeństwa</h3>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80 text-lg">
                  To intensywny proces. Dlatego tworzę dla Ciebie bezpieczną przestrzeń, w której możesz się rozpaść, by zbudować się na nowo, silniejszym. Zapewniam wsparcie i jestem dostępny również między sesjami.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Commitment */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Inwestycja i Zobowiązanie
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-6 text-neural-violet dark:text-luminal-magenta">Program:</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90 dark:text-silver-mist/80">8 tygodni, 8 intensywnych, transformujących sesji (od 50 min do 2,5h)</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90 dark:text-silver-mist/80">Dostęp do mnie pomiędzy sesjami w razie potrzeby</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90 dark:text-silver-mist/80">Dożywotni dostęp do społeczności absolwentów programu</p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5">
                <h3 className="text-2xl font-bold mb-6 text-neural-violet dark:text-luminal-magenta">Inwestycja:</h3>
                <div className="text-center mb-6">
                  <p className="text-4xl font-bold text-ascension-pink mb-2">16.000 PLN</p>
                  <p className="text-lg text-deep-charcoal/80 dark:text-silver-mist/80">za pełen, 8-tygodniowy proces transformacyjny</p>
                </div>
                
                <h4 className="text-xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">Dlaczego taka cena?</h4>
                <p className="text-deep-charcoal/90 dark:text-silver-mist/80 mb-4">
                  To nie jest kurs online ani pakiet coachingowy. To głęboka, wymagająca praca na poziomie Twojej tożsamości. Płacisz za:
                </p>
                <ul className="space-y-2 text-deep-charcoal/90 dark:text-silver-mist/80">
                  <li>• Moją pełną obecność i zaangażowanie przez 8 tygodni</li>
                  <li>• Dostęp do unikalnej, adaptacyjnej metodologii</li>
                  <li>• Bezpieczną przestrzeń do najtrudniejszych konfrontacji</li>
                  <li>• Realną transformację, a nie tymczasową motywację</li>
                </ul>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-20 bg-gradient-to-br from-neural-violet/5 to-ascension-pink/5 dark:from-deep-space dark:to-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
              Czy ten program jest dla Ciebie?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassCard padding="lg" className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-300">✅ TAK, jeśli:</h3>
                <div className="space-y-4">
                  {[
                    "Masz na koncie sukcesy, ale czujesz, że prawdziwy potencjał wciąż jest zablokowany",
                    "Jesteś gotów na konfrontację z własnymi cieniami i mechanizmami obronnymi",
                    "Cenisz sobie głębię i autentyczność bardziej niż szybkie \"hacki\" i powierzchowne rozwiązania",
                    "Szukasz integracji i spójności, a nie kolejnych narzędzi do zarządzania chaosem"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="w-6 h-6 mr-3 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90 dark:text-silver-mist/80">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>

              <GlassCard padding="lg" className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                <h3 className="text-2xl font-bold mb-6 text-red-700 dark:text-red-300">❌ NIE, jeśli:</h3>
                <div className="space-y-4">
                  {[
                    "Szukasz motywacyjnego \"kopa\" i szybkich rozwiązań",
                    "Nie jesteś gotowy, by zakwestionować dotychczasowy sposób, w jaki funkcjonujesz",
                    "Przeżywasz ostry kryzys i potrzebujesz natychmiastowej stabilizacji (to nie jest terapia kryzysowa)",
                    "Oczekujesz gotowej listy \"5 kroków do sukcesu\""
                  ].map((item, index) => (
                    <div key={index} className="flex items-start">
                      <AlertCircle className="w-6 h-6 mr-3 text-red-600 dark:text-red-400 flex-shrink-0 mt-1" />
                      <p className="text-deep-charcoal/90 dark:text-silver-mist/80">{item}</p>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Session CTA */}
      <section className="py-20 bg-gradient-to-br from-deep-space via-neural-violet to-quantum-blue">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Następny krok: Sesja Discovery
            </h2>
            
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <p className="text-xl text-silver-mist mb-6">
                Zanim zdecydujemy o współpracy, musimy przeprowadzić <span className="text-ascension-pink font-bold">30-minutową Sesję Discovery.</span>
              </p>
              
              <p className="text-lg text-silver-mist/90 mb-6">
                To nie jest rozmowa sprzedażowa. To <span className="font-bold">wzajemna ocena dopasowania:</span>
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ascension-pink flex-shrink-0 mt-1" />
                    <p className="text-silver-mist/90">Zdiagnozujemy Twój obecny system i kluczowe blokady</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ascension-pink flex-shrink-0 mt-1" />
                    <p className="text-silver-mist/90">Sprawdzimy, czy moja metodologia jest odpowiedzią na Twoje wyzwania</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ascension-pink flex-shrink-0 mt-1" />
                    <p className="text-silver-mist/90">Określimy, czy jesteś gotowy na ten rodzaj głębokiej pracy</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 mr-3 text-ascension-pink flex-shrink-0 mt-1" />
                    <p className="text-silver-mist/90">Oboje podejmiemy decyzję, czy chcemy razem pracować</p>
                  </div>
                </div>
              </div>
            </div>

            <Link to="/contact">
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl mb-8"
                showArrow
              >
                Zarezerwuj Sesję Discovery
              </CTAButton>
            </Link>

            <p className="text-silver-mist/80 italic text-sm mb-4">
              Liczba miejsc w programie jest ściśle ograniczona do 5 osób jednocześnie, aby zapewnić maksymalną jakość i moje zaangażowanie.
            </p>
            <p className="text-ascension-pink font-bold">Obecnie dostępne: 2</p>

            <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-8">
              <p className="text-silver-mist/90">
                <strong>P.S.</strong> Jeśli dotarłeś aż tutaj i wciąż się wahasz, analizując wszystkie "za" i "przeciw" – to jest właśnie jeden ze wzorców, z którym będziemy pracować. Twój analityczny umysł próbuje zapewnić sobie 100% pewności przed podjęciem decyzji. Sesja Discovery to bezpieczny sposób, by zbadać tę niepewność bez pełnego zobowiązania.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}