import React from "react";
import Layout from "@/components/layout/Layout";
import { CTAButton } from "@/components/ui/cta-button";
import { GlassCard } from "@/components/ui/glass-card";
import {
  CheckCircle,
  Shield,
  Zap,
  AlertCircle,
  Users,
  Target,
  Brain,
  Clock,
  GitMerge,
  Crown,
} from "@/lib/icons";
import { Link } from "react-router-dom";

export default function LifeOSSystemUpgrade() {
  const scrollToDiscovery = () => {
    const discoverySection = document.getElementById("discovery-section");
    if (discoverySection) {
      discoverySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Life OS: System Upgrade
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-silver-mist leading-tight">
              8 tygodni transformacji dla liderów, którzy osiągnęli wszystko...
              i właśnie dlatego czują się pusto.
            </h2>
            <CTAButton
              variant="premium"
              size="xl"
              className="shadow-2xl hover:shadow-3xl"
              aria-label="Zarezerwuj Sesję Discovery - przejdź do sekcji rejestracji"
              showArrow
              onClick={scrollToDiscovery}
            >
              Zarezerwuj Sesję Discovery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Problem Recognition */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Rozpoznajesz ten stan?
            </h2>

            <div className="space-y-6 mb-12">
              <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                Osiągnąłeś sukces, którego większość ludzi nie zrozumie.
              </p>
              <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                Twoje cele są zrealizowane. Twoje firmy działają. Twoje życie
                wygląda perfekcyjnie z zewnątrz.
              </p>
              <p className="text-xl text-deep-charcoal font-bold">
                Ale w środku? <span className="text-red-600">Pustka.</span>
              </p>
            </div>

            <div className="space-y-8 mb-16">
              <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                I co gorsza - nikt nie rozumie tego problemu:
              </p>
              {[
                'Mówisz o tym znajomym → "Musisz więcej odpoczywać"',
                'Próbujesz z coachingiem → "Ustaw nowe cele SMART"',
                'Idziesz na terapię → "Opowiedz mi o swoich rodzicach"',
              ].map((item, index) => (
                <GlassCard key={index} className="flex items-start">
                  <AlertCircle className="h-6 w-6 mr-4 text-red-600 flex-shrink-0 mt-1" />
                  <p className="text-lg text-deep-charcoal/90">{item}</p>
                </GlassCard>
              ))}
            </div>

            <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl mb-8">
              <p className="text-2xl font-bold text-deep-charcoal mb-4">
                Żadne z tych rozwiązań nie trafia w sedno.
              </p>
              <p className="text-xl text-deep-charcoal/90 mb-4">
                Bo Twój problem nie leży w strategii, celach ani przeszłości.
              </p>
              <p className="text-2xl font-bold text-zenith-gold">
                Twój problem jest na poziomie tożsamości.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                Jesteś jak komputer z Windows 98, próbujący obsłużyć dzisiejsze
                oprogramowanie. System jest przestarzały, skonfliktowany,
                przeciążony.
              </p>
              <p className="text-xl text-deep-charcoal/90 leading-relaxed">
                Nie potrzebujesz więcej aplikacji (kolejnych "tricków").
              </p>
              <p className="text-2xl font-bold text-twilight-indigo text-center">
                Potrzebujesz upgrade'u całego Systemu Operacyjnego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Traditional Solutions Failed */}
      <section className="py-20 bg-gradient-to-br from-twilight-indigo/5 to-zenith-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Dlaczego to, co próbowałeś, nie zadziałało?
            </h2>

            <div className="space-y-8 mb-12">
              <GlassCard
                padding="lg"
                className="bg-red-50 border border-red-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-red-700">
                  Standard Coaching / Mentoring
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Daje Ci nowe strategie. Więcej narzędzi. Kolejne frameworki.
                </p>
                <p className="text-deep-charcoal font-bold mb-2">Problem:</p>
                <p className="text-deep-charcoal/90 mb-4">
                  Instalujesz nowe aplikacje na starym, skonfliktowanym
                  systemie. Efekt jest chwilowy, a potem wracasz do starych
                  wzorców.
                </p>
                <p className="text-deep-charcoal/80 italic">
                  To jak dokładanie krzeseł na Titanicu.
                </p>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="bg-orange-50 border border-orange-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-orange-800">
                  Terapia
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Pomaga zrozumieć przeszłość. Analizować trauma. Rozumieć, skąd
                  się to bierze.
                </p>
                <p className="text-deep-charcoal font-bold mb-2">Problem:</p>
                <p className="text-deep-charcoal/90 mb-4">
                  Rozumiesz już SKĄD. Ale nadal nie wiesz JAK podjąć odważną
                  decyzję w poniedziałek o 9 rano, kiedy na szali jest 2M PLN i
                  przyszłość firmy.
                </p>
                <p className="text-deep-charcoal/80 italic">
                  Insight bez transformacji to tylko ciekawa historyjka.
                </p>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="bg-yellow-50 border border-yellow-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-yellow-800">
                  Kursy Online / Książki
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Dostarczają wiedzę. Ramowe modele. Inspirację.
                </p>
                <p className="text-deep-charcoal font-bold mb-2">Problem:</p>
                <p className="text-deep-charcoal/90 mb-4">
                  Prawdziwa transformacja nie zachodzi na poziomie
                  intelektualnym. Możesz przeczytać 100 książek o pływaniu i
                  nadal utoniesz, gdy wrzucą Cię do oceanu.
                </p>
                <p className="text-deep-charcoal/80 italic">
                  Plus: kupujesz kolejny kurs, bo poprzedni "nie zadziałał"
                  (spoiler: problem nie był w kursie).
                </p>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="bg-purple-50 border border-purple-200"
              >
                <h3 className="text-2xl font-bold mb-4 text-purple-800">
                  Duchowość / Medytacja
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Daje spokój. Perspektywę. Kontakt z czymś większym.
                </p>
                <p className="text-deep-charcoal font-bold mb-2">Problem:</p>
                <p className="text-deep-charcoal/90 mb-4">
                  Często oderwan od rzeczywistości biznesowej. Medutujesz,
                  czujesz zen... a potem wracasz do biura i znowu jesteś tym
                  samym człowiekiem podejmującym te same decyzje z tego samego
                  strachu.
                </p>
              </GlassCard>
            </div>

            <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-deep-charcoal mb-4">
                Prawdziwy problem: Konflikt systemowy
              </h3>
              <p className="text-xl text-deep-charcoal/90 mb-6">
                Nie masz problemu z wiedzą, strategią ani nawet ze zdrowiem
                psychicznym.
              </p>
              <p className="text-2xl font-bold text-zenith-gold mb-6">
                Masz konflikt na poziomie tożsamości.
              </p>
              <div className="space-y-3 text-lg text-deep-charcoal/90 mb-6">
                <p>
                  Część Ciebie chce budować imperium → Część Ciebie chce spokoju
                </p>
                <p>
                  Część Ciebie potrzebuje kontroli → Część Ciebie wie, że
                  kontrola to iluzja
                </p>
                <p>Część Ciebie goni sukces → Część Ciebie pyta "po co?"</p>
              </div>
              <p className="text-xl text-deep-charcoal/90 mb-4">
                Te części walczą ze sobą każdego dnia.
              </p>
              <p className="text-xl text-deep-charcoal/90">
                A Ty stoisz pośrodku tego konfliktu, zużywając gigawaty energii
                na wewnętrzną wojnę.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Life OS System Upgrade */}
      <section className="relative py-20 bg-gradient-to-b from-deep-space via-twilight-indigo to-neural-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
              Life OS: System Upgrade
            </h2>

            <p className="text-2xl text-center mb-4 text-silver-mist font-bold">
              Nie coaching. Nie terapia. Transformacja na poziomie tożsamości.
            </p>

            <div className="text-xl text-center mb-12 text-silver-mist/90 space-y-4">
              <p>To 8 tygodni głębokiej pracy dla liderów, którzy:</p>
              <ul className="space-y-3 text-left max-w-3xl mx-auto">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>Osiągnęli sukces, ale czują, że to nie to</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>Są gotowi na brutalną szczerość z samym sobą</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>
                    Rozumieją, że prawdziwa zmiana wymaga czasu i cierpienia
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>Myślą systemowo i filozoficznie</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 mr-3 text-zenith-gold flex-shrink-0 mt-1" />
                  <span>
                    Nie chcą kolejnych "porad", tylko fundamentalną przebudowę
                  </span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-16">
              <p className="text-2xl text-zenith-gold font-bold mb-4 text-center">
                Co to znaczy w praktyce?
              </p>
              <p className="text-lg text-silver-mist/90 mb-6">
                To nie są przyjemne sesje, gdzie klepię Cię po plecach i mówię,
                jak jesteś świetny.
              </p>
              <p className="text-lg text-silver-mist/90 mb-4">
                W zależności od tego, czego potrzebujesz:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="bg-red-900/20 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-zenith-gold mb-3">
                    Albo dostaniesz "terapię szokową":
                  </h4>
                  <ul className="space-y-2 text-silver-mist/90">
                    <li>
                      • Bezpośrednią konfrontację z historiami, które sobie
                      opowiadasz
                    </li>
                    <li>
                      • Wycięcie skrzydeł, które Cię nie niosą, tylko obciążają
                    </li>
                    <li>• Filozoficzną wojnę z Twoim ego</li>
                    <li>• Kontrolowane cierpienie, które tworzy przełom</li>
                  </ul>
                </div>
                <div className="bg-blue-900/20 p-6 rounded-xl">
                  <h4 className="text-xl font-bold text-zenith-gold mb-3">
                    Albo dostaniesz "przewodnictwo przez transcendencję":
                  </h4>
                  <ul className="space-y-2 text-silver-mist/90">
                    <li>• Delikatne prowadzenie przez mapy i terytoria</li>
                    <li>• Pozwolenie na ekspansję i rozwój</li>
                    <li>• Wsparcie w odkrywaniu głębszych warstw siebie</li>
                    <li>• Integrację duchowości z realnością biznesową</li>
                  </ul>
                </div>
              </div>
              <p className="text-xl text-zenith-gold font-bold text-center">
                A najczęściej dostaniesz oba.
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-8">
              {/* Phase 1: Diagnostyka */}
              <div className="group relative">
                <GlassCard
                  padding="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-zenith-gold/20 p-4 rounded-2xl">
                      <Brain className="w-8 h-8 text-zenith-gold" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        FAZA 1: DIAGNOSTYKA SYSTEMU
                      </h3>
                      <p className="text-silver-mist text-lg font-medium">
                        Tydzień 1-2
                      </p>
                    </div>
                  </div>
                  <div className="text-silver-mist/90 text-lg leading-relaxed space-y-4">
                    <p>Tutaj zaczyna się prawdziwa praca.</p>
                    <p className="font-bold text-white">
                      Niektórzy ludzie potrzebują, żeby ktoś przeciął ich więzy.
                    </p>
                    <p className="font-bold text-white">
                      Inni potrzebują pozwolenia na rozwinięcie skrzydeł.
                    </p>
                    <p>
                      Pierwsza faza to głęboka diagnostyka: którego rodzaju
                      transformacji potrzebujesz?
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>
                        •{" "}
                        <span className="font-bold">Ścieżka Katalizatora:</span>{" "}
                        Dla tych, którzy utknęli w ofiarczych narracjach,
                        potrzebują konfrontacji
                      </li>
                      <li>
                        •{" "}
                        <span className="font-bold">Ścieżka Przewodnika:</span>{" "}
                        Dla tych, którzy są gotowi na ekspansję, potrzebują
                        wsparcia w transcendencji
                      </li>
                      <li>
                        • <span className="font-bold">Ścieżka Integracji:</span>{" "}
                        Dla większości - potrzeba obu, sekwencyjnie lub
                        równolegle
                      </li>
                    </ul>
                    <p className="italic">
                      To nie jest przyjemna rozmowa. To bezlitosna szczerość.
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Phase 2: Dekonstrukcja */}
              <div className="group relative">
                <GlassCard
                  padding="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-twilight-indigo/20 p-4 rounded-2xl">
                      <Zap className="w-8 h-8 text-twilight-indigo" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        FAZA 2: DEKONSTRUKCJA I WYZWANIE
                      </h3>
                      <p className="text-silver-mist text-lg font-medium">
                        Tydzień 3-4
                      </p>
                    </div>
                  </div>
                  <div className="text-silver-mist/90 text-lg leading-relaxed space-y-4">
                    <p className="font-bold text-white">
                      Tutaj zaczyna się prawdziwa praca.
                    </p>

                    <div className="bg-red-900/30 p-6 rounded-xl">
                      <p className="font-bold text-zenith-gold mb-3">
                        Jeśli jesteś na Ścieżce Katalizatora:
                      </p>
                      <ul className="space-y-2">
                        <li>
                          • Konfrontuję Twoje historie głową w mur
                          (filozoficznie, nie brutalnie)
                        </li>
                        <li>
                          • Używam Junga, Fausta, Mistrza i Małgorzaty jako
                          luster
                        </li>
                        <li>
                          • Podcinam skrzydła, które nie niosą, tylko obciążają
                        </li>
                        <li>• Kontrolowane cierpienie → przełom</li>
                      </ul>
                    </div>

                    <div className="bg-blue-900/30 p-6 rounded-xl">
                      <p className="font-bold text-zenith-gold mb-3">
                        Jeśli jesteś na Ścieżce Przewodnika:
                      </p>
                      <ul className="space-y-2">
                        <li>
                          • Prowadzę Cię delikatnie przez rozszerzanie
                          świadomości
                        </li>
                        <li>
                          • Wprowadzam koncepcje równoległych rzeczywistości i
                          wyboru osi czasu
                        </li>
                        <li>
                          • Daję pozwolenie na transcendencję (którego sam sobie
                          nie dawałeś)
                        </li>
                        <li>• Medytacja, obecność, kontakt z duszą</li>
                      </ul>
                    </div>

                    <p className="font-bold text-white italic">
                      To nie jest przyjemne. Ale jest konieczne.
                    </p>
                  </div>
                </GlassCard>
              </div>

              {/* Phase 3: Integracja */}
              <div className="group relative">
                <GlassCard
                  padding="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-twilight-indigo/20 p-4 rounded-2xl">
                      <GitMerge className="w-8 h-8 text-twilight-indigo" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        FAZA 3: INTEGRACJA RDZENIA
                      </h3>
                      <p className="text-silver-mist text-lg font-medium">
                        Tydzień 5-6
                      </p>
                    </div>
                  </div>
                  <div className="text-silver-mist/90 text-lg leading-relaxed space-y-4">
                    <p>Teraz uczymy Twoje konfliktowe części współpracować.</p>
                    <p className="font-bold text-zenith-gold text-xl">
                      Bezwzględny CEO + Wrażliwy wizjoner = nie wrogowie, tylko
                      zespół
                    </p>

                    <div className="bg-purple-900/30 p-6 rounded-xl">
                      <p className="font-bold text-white mb-3">
                        Wykorzystujemy framework Równoległych Rzeczywistości:
                      </p>
                      <p className="mb-3">
                        Wszystkie wersje Ciebie istnieją jednocześnie. Ta, która
                        cierpi. Ta, która triumfuje. Ta, która spoczywa na
                        plaży.
                      </p>
                      <p className="italic">
                        Pytanie nie brzmi "jak uciec od cierpienia" - pytanie
                        brzmi "którą rzeczywistość wybierasz jako swoją?"
                      </p>
                      <p className="font-bold text-zenith-gold mt-3">
                        Wolna wola to wybór osi czasu.
                      </p>
                    </div>

                    <p className="font-bold text-white">
                      Konkretne efekty na tym etapie:
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li>• Decyzje przestają być wojną wewnętrzną</li>
                      <li>• Działasz z miejsca spójności (nie dyscypliny)</li>
                      <li>
                        • Wewnętrzny krytyk zostaje zintegrowany (nie uciszony)
                      </li>
                      <li>
                        • Energia, która szła na konflikt, idzie teraz na
                        tworzenie
                      </li>
                    </ul>
                  </div>
                </GlassCard>
              </div>

              {/* Phase 4: Nowy Standard */}
              <div className="group relative">
                <GlassCard
                  padding="lg"
                  className="bg-white/10 backdrop-blur-sm border border-white/20"
                >
                  <div className="flex items-center gap-6 mb-6">
                    <div className="bg-neural-blue/20 p-4 rounded-2xl">
                      <Crown className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        FAZA 4: NOWY STANDARD DZIAŁANIA
                      </h3>
                      <p className="text-silver-mist text-lg font-medium">
                        Tydzień 7-8
                      </p>
                    </div>
                  </div>
                  <div className="text-silver-mist/90 text-lg leading-relaxed space-y-4">
                    <p>Nowy system operacyjny staje się Twoją drugą naturą.</p>

                    <div className="bg-gradient-to-r from-zenith-gold/20 to-twilight-indigo/20 p-6 rounded-xl">
                      <p className="font-bold text-white mb-3">
                        To nie jest "fake it till you make it."
                      </p>
                      <p className="font-bold text-white mb-3">
                        To nie jest "stosuj tę technikę codziennie."
                      </p>
                      <p className="text-zenith-gold text-xl font-bold">
                        To jest fundamentalna zmiana tego, kim jesteś jako lider
                        i człowiek.
                      </p>
                    </div>

                    <p className="font-bold text-white">Działasz teraz z:</p>
                    <ul className="space-y-2 pl-4">
                      <li>
                        • Wewnętrznej spójności (nie wymuszonej dyscypliny)
                      </li>
                      <li>• Autentycznej mocy (nie kompensacyjnej kontroli)</li>
                      <li>
                        • Intuicji zintegrowanej z analizą (nie paraliżu
                        decyzyjnego)
                      </li>
                      <li>• Obecności (nie chronicznego lęku o przyszłość)</li>
                    </ul>

                    <div className="bg-white/10 p-6 rounded-xl mt-4">
                      <p className="font-bold text-zenith-gold mb-3">
                        Co to znaczy w praktyce:
                      </p>
                      <p className="mb-3">
                        Poniedziałek, 9 rano. Decyzja o 2M PLN.
                      </p>
                      <p className="mb-2">
                        <span className="font-bold text-red-400">Przed:</span>{" "}
                        Paraliż. Analiza. Więcej analiz. Lęk. Prokrastynacja.
                        Decyzja z desperacji.
                      </p>
                      <p className="mb-4">
                        <span className="font-bold text-green-400">Po:</span>{" "}
                        Jasność. Połączenie intuicji i danych. Decyzja w 30
                        minut. Spokój niezależnie od wyniku.
                      </p>
                      <p className="text-white font-bold">
                        Bo wiesz, że decyzja nie definiuje Ciebie - Ty
                        definiujesz decyzję.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="text-center mt-16">
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl"
                showArrow
                onClick={scrollToDiscovery}
              >
                ZAREZERWUJ SESJĘ DISCOVERY
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Real Effects */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Czego możesz się spodziewać? (Realne efekty)
            </h2>

            <div className="space-y-8 mb-16">
              <GlassCard
                padding="lg"
                className="border-l-4 border-twilight-indigo"
              >
                <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                  1. Koniec z wewnętrzną wojną
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Przestajesz zużywać 80% energii na konflikt wewnętrzny. Nagle
                  masz zasób mocy, o którym zapomniałeś.
                </p>
                <div className="bg-twilight-indigo/5 p-4 rounded-lg italic text-deep-charcoal/80">
                  Klient: "Nie zdawałem sobie sprawy, ile energii szło na walkę
                  z samym sobą. Teraz czuję się jak po przesiadce z małego fiata
                  do porsche."
                </div>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="border-l-4 border-twilight-indigo"
              >
                <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                  2. Decyzyjność bez paraliżu
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Przestajesz tonąć w analizie. Intuicja + dane = szybkie, pewne
                  decyzje.
                </p>
                <div className="bg-twilight-indigo/5 p-4 rounded-lg italic text-deep-charcoal/80">
                  Klientka: "Wcześniej decyzja o zatrudnieniu kosztowała mnie 3
                  tygodnie snu. Teraz wiem w 20 minut. I nie mylę się częściej -
                  wręcz przeciwnie."
                </div>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="border-l-4 border-twilight-indigo"
              >
                <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                  3. Przywództwo bez wysiłku
                </h3>
                <p className="text-deep-charcoal/90">
                  Ludzie podążają za Tobą naturalnie, bo czują Twoją spójność.
                  Nie musisz już udawać pewności - po prostu ją masz.
                </p>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="border-l-4 border-twilight-indigo"
              >
                <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                  4. Prawdziwy spokój (nie tylko przerwa w pracy)
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Uczysz się wyłączać tryb "praca". Weekend staje się
                  regeneracją, nie poczuciem winy.
                </p>
                <div className="bg-twilight-indigo/5 p-4 rounded-lg italic text-deep-charcoal/80">
                  Klient: "Pierwszy raz od 15 lat spędziłem sobotę z rodziną i
                  nie myślałem o firmie. I firma nie spłonęła."
                </div>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="border-l-4 border-twilight-indigo"
              >
                <h3 className="text-2xl font-bold text-twilight-indigo mb-4">
                  5. Transcendencja ego (ale trzymanie ambicji)
                </h3>
                <p className="text-deep-charcoal/90 mb-4">
                  Przestajesz potrzebować sukcesu jako potwierdzenia wartości.
                  Ale nadal go budujesz - tyle że z radości, nie strachu.
                </p>
                <p className="text-deep-charcoal font-bold">
                  To nie jest rezygnacja z ambicji. To uwolnienie jej z lęku.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Why Me */}
      <section className="py-20 bg-gradient-to-br from-twilight-indigo/5 to-zenith-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Dlaczego akurat ja? (Co mam, czego inni nie mają)
            </h2>

            <div className="space-y-8">
              <GlassCard padding="lg" className="border-l-4 border-zenith-gold">
                <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                  1. Biegłość w obu ścieżkach
                </h3>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Większość coachów potrafi ALBO konfrontować ALBO wspierać.
                </p>
                <p className="text-deep-charcoal font-bold text-xl mb-4">
                  Ja robię oba - i wiem, kiedy którego potrzebujesz.
                </p>
                <p className="text-deep-charcoal/80 italic">
                  Anna potrzebowała ostrej konfrontacji. Lucja potrzebowała
                  delikatnego prowadzenia. Obie przeszły transformację. Bo
                  dostały dokładnie to, czego potrzebowały.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="border-l-4 border-zenith-gold">
                <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                  2. Filozofia spotyka biznes
                </h3>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Nie rozdzielam "ducha" od "pieniędzy."
                </p>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Cytuję Junga podczas rozmowy o ARR. Fausta wplatam w strategię
                  exit-u. Równoległe rzeczywistości stosuję do podejmowania
                  decyzji inwestycyjnych.
                </p>
                <p className="text-deep-charcoal font-bold">
                  Bo tak naprawdę działa świat - tylko nikt Ci tego nie mówi.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="border-l-4 border-zenith-gold">
                <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                  3. Wschodnia głębia + Zachodnia skuteczność
                </h3>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Mam coś, czego amerykańscy coachowie nie mają: dostęp do
                  wschodniej tradycji filozoficznej (Jung, Faust, literatura
                  rosyjska to moje DNA).
                </p>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Ale działam z zachodnią precyzją i fokusem na rezultatach.
                </p>
                <p className="text-deep-charcoal font-bold">
                  To połączenie jest rzadkie. I cenne.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="border-l-4 border-zenith-gold">
                <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                  4. 25 lat na własnej skórze
                </h3>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Byłem depresyjnym 16-latkiem uzależnionym od kodeiny,
                  próbującym przeżyć migreny.
                </p>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Budowałem systemy produktywności jako mechanizm przetrwania.
                </p>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Osiągnąłem sukces - i czułem pustkę.
                </p>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Przeszedłem przez to wszystko, zanim zacząłem kogokolwiek
                  prowadzić.
                </p>
                <p className="text-deep-charcoal font-bold text-xl">
                  Nie uczę teorii. Opowiadam, co sprawdziło się na własnej
                  skórze.
                </p>
              </GlassCard>

              <GlassCard padding="lg" className="border-l-4 border-zenith-gold">
                <h3 className="text-2xl font-bold mb-4 text-zenith-gold">
                  5. Trojan Horse Method™
                </h3>
                <p className="text-deep-charcoal/90 text-lg mb-4">
                  Wchodzę przez "produktywność i skuteczność."
                </p>
                <p className="text-deep-charcoal font-bold text-xl mb-4">
                  Dostarczam transformację duszy.
                </p>
                <p className="text-deep-charcoal/90 text-lg">
                  Bo gdybym powiedział od razu "zróbmy pracę na tożsamości i
                  transcendencji ego", połowa ludzi, którzy tego potrzebują,
                  uciekłaby.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Investment & Commitment */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Inwestycja i struktura
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              <GlassCard padding="lg">
                <h3 className="text-2xl font-bold mb-6 text-twilight-indigo">
                  Program:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90">
                      8 tygodni, 8 intensywnych sesji (50 min - 2,5h, w
                      zależności od tego, gdzie jesteśmy w procesie)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90">
                      Dostęp do mnie między sesjami (Signal/SMS dla nagłych
                      przełomów)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90">
                      Dożywotni dostęp do społeczności absolwentów (1234 Daily
                      Coaching - codziennie 12:34 na Discordzie Lifehackerów)
                    </p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-twilight-indigo flex-shrink-0 mt-1" />
                    <p className="text-deep-charcoal/90">
                      Nagrania wszystkich sesji (żebyś mógł wracać do kluczowych
                      momentów)
                    </p>
                  </div>
                </div>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="bg-gradient-to-br from-twilight-indigo/5 to-zenith-gold/5"
              >
                <h3 className="text-2xl font-bold mb-6 text-twilight-indigo">
                  Inwestycja:
                </h3>
                <div className="text-center mb-6">
                  <p className="text-5xl font-bold text-zenith-gold mb-2">
                    16 000 PLN
                  </p>
                  <p className="text-lg text-deep-charcoal/80">
                    (lub 2x 6 500 PLN netto, jeśli masz firmę i wolisz rozłożyć)
                  </p>
                </div>
              </GlassCard>
            </div>

            <GlassCard
              padding="lg"
              className="bg-gradient-to-r from-zenith-gold/5 to-twilight-indigo/5"
            >
              <h3 className="text-3xl font-bold mb-6 text-deep-charcoal text-center">
                Dlaczego tyle?
              </h3>

              <p className="text-lg text-deep-charcoal/90 mb-6">
                Bo to nie jest kurs online. To nie jest godzinna sesja "trzymaj
                się tam."
              </p>

              <p className="text-xl font-bold text-deep-charcoal mb-4">
                To jest:
              </p>
              <ul className="space-y-3 text-lg text-deep-charcoal/90 mb-8">
                <li>
                  •{" "}
                  <span className="font-bold">
                    Moja pełna obecność przez 8 tygodni
                  </span>{" "}
                  (nie "3 pytania email")
                </li>
                <li>
                  • <span className="font-bold">Adaptacyjna metodologia</span>{" "}
                  (nie szablon w PDF dla każdego)
                </li>
                <li>
                  •{" "}
                  <span className="font-bold">
                    Filozoficzna głębia + biznesowa precyzja
                  </span>{" "}
                  (rzadka kombinacja)
                </li>
                <li>
                  •{" "}
                  <span className="font-bold">
                    Bezpieczna przestrzeń do najtrudniejszych konfrontacji
                  </span>{" "}
                  (bezcenne)
                </li>
                <li>
                  • <span className="font-bold">Rzeczywista transformacja</span>{" "}
                  (nie motywacyjny high na 2 tygodnie)
                </li>
              </ul>

              <div className="bg-white p-6 rounded-xl mb-6">
                <p className="text-lg text-deep-charcoal/90 mb-4">
                  <span className="font-bold">Plus:</span> Ludzie, którzy płacą
                  więcej, angażują się bardziej. Inwestycja finansowa =
                  inwestycja emocjonalna.
                </p>
                <p className="text-lg text-deep-charcoal/90">
                  A transformacja wymaga{" "}
                  <span className="font-bold">full skin in the game</span>.
                </p>
              </div>

              <div className="bg-twilight-indigo/10 p-6 rounded-xl mb-6">
                <h4 className="text-xl font-bold mb-4 text-twilight-indigo">
                  Porównanie:
                </h4>
                <ul className="space-y-3 text-deep-charcoal/90">
                  <li>
                    • Standardowy coaching: 2-5K PLN/miesiąc = rezultaty
                    tymczasowe
                  </li>
                  <li>
                    • Terapia: 300-500 PLN/sesja × 24 sesje = 7-12K PLN =
                    rozumiesz przeszłość (ale co z przyszłością?)
                  </li>
                  <li>• Kursy online: 2-5K PLN = wiedza bez transformacji</li>
                  <li className="font-bold text-twilight-indigo text-lg">
                    • Life OS: 16K PLN = fundamentalna przemiana tożsamości =
                    bezpośrednie przełożenie na decyzje, leadership, spokój
                  </li>
                </ul>
              </div>

              <div className="text-center bg-gradient-to-r from-red-500/10 to-orange-500/10 p-8 rounded-2xl">
                <p className="text-2xl font-bold text-deep-charcoal mb-6">
                  Pytanie nie brzmi "czy to drogie".
                </p>
                <p className="text-2xl font-bold text-zenith-gold mb-6">
                  Pytanie brzmi: "ile kosztuje Cię życie bez tej transformacji?"
                </p>
                <p className="text-lg text-deep-charcoal/90 mb-4">
                  Ile tracisz rocznie na:
                </p>
                <ul className="space-y-2 text-lg text-deep-charcoal/90 mb-6 text-left max-w-2xl mx-auto">
                  <li>• Złe decyzje z paraliżu analitycznego?</li>
                  <li>• Wypalenie i utratę energii?</li>
                  <li>• Niewykorzystany potencjał biznesowy?</li>
                  <li>• Życie w wewnętrznej wojnie?</li>
                </ul>
                <p className="text-lg text-deep-charcoal/90 mb-8">
                  Jeśli jesteś liderem z przychodami w firmie 2-10M PLN, koszt
                  braku tej transformacji to setki tysięcy rocznie. Minimum.
                </p>
                <p className="text-2xl font-bold text-twilight-indigo">
                  To nie jest wydatek. To inwestycja z najwyższym ROI, jaki
                  kiedykolwiek zrobisz.
                </p>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-20 bg-gradient-to-br from-twilight-indigo/5 to-zenith-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-deep-charcoal text-center">
              Czy ten program jest dla Ciebie?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <GlassCard
                padding="lg"
                className="bg-green-50 border border-green-200"
              >
                <h3 className="text-2xl font-bold mb-6 text-green-700">
                  ✅ TAK, jeśli:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Osiągnąłeś sukces, ale czujesz pustkę
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Realizujesz cele, ale przestały Cię ekscytować. Pytasz
                        "po co?" częściej niż "jak?"
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Jesteś gotowy na brutalną szczerość
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Nie chcesz, żebym klepał Cię po plecach. Chcesz prawdy,
                        nawet jeśli boli.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Myślisz systemowo i filozoficznie
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Interesujesz się Jungiem, lubisz głębokie metafory,
                        widzisz wzorce tam, gdzie inni widzą chaos.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Masz poczucie fragmentacji
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Różne role (lider, partner, wizjoner, rodzic) wydają się
                        wojować ze sobą. Chcesz spójności.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Szukasz transformacji, nie technik
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Masz już 50 narzędzi produktywności. Potrzebujesz czegoś
                        fundamentalnego.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Jesteś gotowy na proces (8 tygodni to minimum)
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        To nie jest quick fix. Rozumiesz, że prawdziwa zmiana
                        wymaga czasu.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 mr-3 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Zarabiasz min. 150K PLN rocznie ("na rękę")
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Nie z powodu elitaryzmu - ale żebyś mógł sobie pozwolić
                        na inwestycję bez stresu finansowego.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>

              <GlassCard
                padding="lg"
                className="bg-red-50 border border-red-200"
              >
                <h3 className="text-2xl font-bold mb-6 text-red-700">
                  ❌ NIE, jeśli:
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Szukasz motywacyjnego kopa
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Nie jestem cheerleaderem. Jeśli chcesz, żebym Ci mówił
                        "jesteś super, dasz radę" - to nie tutaj.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Potrzebujesz szybkich rozwiązań
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        "5 kroków do sukcesu w 48h" - nie ma czegoś takiego.
                        Jeśli wierzysz, że jest - nie jesteśmy dla siebie.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Nie jesteś gotowy zakwestionować siebie
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Jeśli uważasz, że problem jest "tam na zewnątrz" (rynek,
                        ludzie, okoliczności) - nie pomogę Ci. Problem zawsze
                        zaczyna się wewnątrz.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Przeżywasz ostry kryzys
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        To nie jest terapia kryzysowa. Jeśli jesteś w gwałtownym
                        załamaniu psychicznym - najpierw stabilizacja
                        (psychiatra/terapeuta), potem transformacja (ja).
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Oczekujesz gotowych rozwiązań
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Nie dam Ci "3 kroki do szczęścia." Pomogę Ci znaleźć
                        własne odpowiedzi. Jeśli chcesz przepisu - kup kurs
                        online.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 mr-3 text-red-600 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-deep-charcoal font-bold mb-1">
                        Nie stać Cię na tę inwestycję bez stresu
                      </p>
                      <p className="text-deep-charcoal/80 text-sm">
                        Jeśli 16K PLN to duży wysiłek finansowy - poczekaj.
                        Wolę, żebyś dołączył, gdy będziesz gotowy, niż żebyś się
                        zadłużał i przez to blokował proces.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Session CTA */}
      <section
        id="discovery-section"
        className="py-20 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white text-center">
              Następny krok: Sesja Discovery
            </h2>

            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 mb-8">
              <p className="text-xl text-silver-mist mb-6 text-center">
                Zanim zdecydujemy o współpracy, musimy przeprowadzić{" "}
                <span className="text-zenith-gold font-bold">
                  ~30-minutową Sesję Discovery.
                </span>
              </p>

              <p className="text-2xl text-zenith-gold font-bold mb-6 text-center">
                To nie jest rozmowa sprzedażowa.
              </p>

              <p className="text-xl text-silver-mist mb-8 text-center">
                To wzajemna ocena, czy mamy ze sobą pracować.
              </p>

              <p className="text-lg text-silver-mist/90 mb-2 text-center">
                Ja oceniam Ciebie. Ty oceniasz mnie.
              </p>
            </div>

            <GlassCard
              padding="lg"
              className="bg-white/5 backdrop-blur-sm border-white/20 mb-8"
            >
              <h3 className="text-2xl font-bold text-zenith-gold mb-6 text-center">
                Co się wydarzy w ~30 minut:
              </h3>

              <div className="space-y-6">
                <div>
                  <p className="text-xl font-bold text-white mb-3">
                    1. Głęboka diagnostyka Twojego systemu
                  </p>
                  <p className="text-silver-mist/90">
                    Nie będziemy mówić o celach i strategiach. Zejdziemy
                    głębiej: gdzie jest konflikt tożsamości? Jaka narracja Cię
                    blokuje? Która ścieżka transformacji jest Twoja?
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white mb-3">
                    2. Sprawdzenie chemii
                  </p>
                  <p className="text-silver-mist/90">
                    Ta praca wymaga zaufania. Jeśli nie czujesz, że możesz mi
                    zaufać w najtrudniejszych momentach - nie podejmujemy
                    współpracy. I to ok.
                  </p>
                </div>

                <div>
                  <p className="text-xl font-bold text-white mb-3">
                    3. Decyzja obu stron
                  </p>
                  <p className="text-silver-mist/90">
                    Na końcu sesji oba decydujemy, czy chcemy współpracować. Nie
                    ma presji. Jest uczciwość.
                  </p>
                </div>
              </div>

              <div className="bg-zenith-gold/20 p-6 rounded-xl mt-8">
                <p className="text-white font-bold mb-2">Uwaga:</p>
                <p className="text-silver-mist/90">
                  Sesja Discovery to nie "darmowa próbka." To rzeczywista praca.
                  Może być intensywna. Wyjdziesz z niej z clarity - niezależnie
                  od tego, czy się zdecydujemy na współpracę.
                </p>
              </div>
            </GlassCard>

            <div className="text-center mb-8">
              <Link to="/discovery">
                <CTAButton
                  variant="premium"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl mb-6"
                  showArrow
                >
                  Zarezerwuj Sesję Discovery
                </CTAButton>
              </Link>

              <p className="text-silver-mist/80 italic text-sm mb-2">
                Liczba miejsc w programie jest ściśle ograniczona do 5 osób
                jednocześnie, aby zapewnić maksymalną jakość i moje
                zaangażowanie.
              </p>
              <p className="text-zenith-gold font-bold text-xl">
                Obecnie dostępne: 2
              </p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-xl border border-white/10">
              <p className="text-lg text-silver-mist/90 mb-4">
                <span className="font-bold text-zenith-gold">P.S.</span> Jeśli
                dotarłeś aż tutaj i wciąż się wahasz, analizując wszystkie "za"
                i "przeciw" – to jest właśnie jeden ze wzorców, z którym
                będziemy pracować. Twój analityczny umysł próbuje zapewnić sobie
                100% pewności przed podjęciem decyzji. Sesja Discovery to
                bezpieczny sposób, by zbadać tę niepewność bez pełnego
                zobowiązania.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Section */}
      <section className="py-20 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-deep-charcoal text-center">
              Ostatnie słowo
            </h2>

            <div className="space-y-6 text-lg text-deep-charcoal/90 mb-12">
              <p>
                Jeśli dotarłeś do tego miejsca i wciąż się wahasz - to dobrze.
              </p>
              <p>
                Twój analityczny umysł robi to, co potrafi najlepiej: analizuje
                ryzyko, waży opcje, szuka pewności.
              </p>
              <p className="text-2xl font-bold text-twilight-indigo text-center my-8">
                Ale pewności nie ma.
              </p>
              <p>
                Możesz przeanalizować ten program przez kolejne 3 miesiące.
                <br />
                Możesz poczytać więcej o transformacji tożsamości.
                <br />
                Możesz poczekać na "lepszy moment."
              </p>
              <p className="text-2xl font-bold text-zenith-gold text-center my-8">
                Albo możesz po prostu wejść.
              </p>
              <p>Bo tak naprawdę wiesz już odpowiedź.</p>
              <p>
                Wiesz, że coś musi się zmienić.
                <br />
                Wiesz, że dotychczasowe próby nie działają.
                <br />
                Wiesz, że problem jest głębszy niż "brak motywacji" czy "zła
                strategia."
              </p>
            </div>

            <GlassCard
              padding="lg"
              className="bg-gradient-to-r from-twilight-indigo/10 to-zenith-gold/10 border-2 border-twilight-indigo mb-12"
            >
              <p className="text-2xl font-bold text-deep-charcoal mb-6 text-center">
                Pytanie brzmi: czy jesteś gotowy na prawdę?
              </p>
              <p className="text-xl text-deep-charcoal/90 mb-4 text-center">
                Nie na przyjemną prawdę.
                <br />
                Nie na wygodną prawdę.
              </p>
              <p className="text-2xl font-bold text-twilight-indigo text-center">
                Na prawdę, która boli - ale wyzwala.
              </p>
            </GlassCard>

            <div className="space-y-6 text-lg text-deep-charcoal/90 mb-12">
              <p>
                Jeśli tak - to kliknij poniżej i zarezerwuj Sesję Discovery.
              </p>
              <p>
                Zobaczymy, czy pasujemy.
                <br />
                Zobaczymy, czy jesteś gotowy.
                <br />
                Zobaczymy, co możemy razem zbudować.
              </p>
              <p>A jeśli nie teraz - to ok. Wrócisz, kiedy będziesz gotowy.</p>
              <p className="text-center italic text-deep-charcoal/80">
                System będzie tu czekał.
              </p>
            </div>

            <div className="text-center mb-12">
              <p className="text-2xl font-bold text-deep-charcoal mb-8">
                —Ludwik
              </p>
              <CTAButton
                variant="premium"
                size="xl"
                className="shadow-2xl hover:shadow-3xl"
                showArrow
                onClick={scrollToDiscovery}
              >
                Zarezerwuj Sesję Discovery
              </CTAButton>
            </div>

            <div className="space-y-6 text-lg text-deep-charcoal/90">
              <p>
                <span className="font-bold">P.S.</span> Nie muszę Cię
                przekonywać. Jeśli to jest Twoje, wiesz. Jeśli nie wiesz - nie
                jest (jeszcze). Ufam Twojej intuicji. Zaufaj jej też.
              </p>
              <p>
                <span className="font-bold">P.P.S.</span> Życie jest za krótkie,
                żeby żyć w wewnętrznej wojnie. Nawet jeśli nie wybierzesz Life
                OS - znajdź kogoś/coś, co pomoże Ci to rozwiązać. Bo sukces bez
                spokoju to nie jest sukces. To wysokopłatne więzienie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
