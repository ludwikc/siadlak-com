import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SEO from "@/components/SEO";
import { Calendar, Clock, Monitor, CheckCircle2, XCircle, Mail } from "lucide-react";

const WebinarMeskiKompas = () => {
  const ctaUrl = "https://buy.siadlak.com/checkout/spotkanie-online";

  return (
    <>
      <SEO 
        title="Upgrade Systemu - Warsztat LIVE Męski Kompas"
        description="90-minutowy warsztat LIVE dla analitycznych profesjonalistów. Prosty framework do mapowania priorytetów i konkretny plan na następny tydzień."
        keywords="męski kompas, warsztat live, rozwój osobisty, produktywność, coaching"
      />
      
      <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] via-[#061A40] to-[#0A0A0A]">
        {/* HERO SECTION */}
        <section className="relative pt-32 pb-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,15,119,0.2),transparent)]" />
          
          <div className="container mx-auto max-w-5xl relative z-10">
            <div className="text-center space-y-8">
              <h1 className="space-y-4">
                <span className="block text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tight">
                  UPGRADE SYSTEMU
                </span>
                <span className="block text-xl md:text-2xl lg:text-3xl font-medium text-white/80 leading-relaxed max-w-4xl mx-auto">
                  Dla analitycznych profesjonalistów, którzy mają dość<br />
                  pętli myślowej bez działania
                </span>
              </h1>
              
              <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                90-minutowy warsztat LIVE: Otrzymasz prosty framework 
                do mapowania swoich priorytetów i wyjdziesz z konkretnym 
                planem na następny tydzień.
              </p>
              
              <p className="text-base md:text-lg text-white/60 font-medium">
                Bez duchowego bullshitu. Bez kolejnej listy do przemyślenia.
              </p>
              
              <Button 
                size="lg" 
                className="text-lg px-8 py-6 mt-8 bg-gradient-to-r from-[#B100FF] via-[#9900FF] to-[#7C00FF] hover:shadow-[0_0_30px_rgba(177,0,255,0.4)]"
                onClick={() => window.location.href = ctaUrl}
              >
                REZERWUJĘ MIEJSCE - BEZPŁATNIE
              </Button>
              
              <div className="flex flex-wrap justify-center gap-6 pt-6 text-white/70">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>16 października 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>19:00 CET</span>
                </div>
                <div className="flex items-center gap-2">
                  <Monitor className="w-5 h-5" />
                  <span>Online (link po zapisie)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-6">
              ROZPOZNAJESZ TEN PATTERN?
            </h2>
            <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-16">
              Jesteś senior developerem, team leaderem, product managerem. 
              Twój analityczny umysł to twoja siła. Ale czasem też twoje więzienie.
            </p>
            
            <div className="space-y-8">
              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      PĘTLA ANALIZY BEZ DZIAŁANIA
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Masz 20 otwartych zakładek. 10 side projectów. 
                      Wszystko "ważne", więc nic nie jest priorytetem.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      Gromadzisz kursy, książki, narzędzia - ale brakuje systemu 
                      do ich wdrożenia. Efekt? Paraliż decyzyjny.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      MENTAL "ZAWSZE ON" - BRAK RESETU
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Twój mózg nie wyłącza się po pracy. 
                      Ciągle optymalizuje, analizuje, planuje.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      Nie potrafisz znaleźć balansu między intensywną pracą 
                      a regeneracją. Efekt? Chroniczny stres bez głębokiego odpoczynku.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <XCircle className="w-8 h-8 text-red-500 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      PRESJA "POWINIENEM BYĆ DALEJ"
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Masz stabilną karierę, dobre zarobki. 
                      Ale towarzyszy ci lęk przed zmarnowaniem potencjału.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      "Gdybym tylko znalazł właściwą ścieżkę..."
                      "Gdybym bardziej się skupił..."
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      Efekt? Poczucie straty odbiera satysfakcję z tego, co już osiągnąłeś.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <div className="mt-16 text-center space-y-4 max-w-3xl mx-auto">
              <p className="text-xl text-white/80 font-medium">
                Nie szukasz kolejnej motywacyjnej gadki.<br />
                Nie potrzebujesz inspiracji do działania.
              </p>
              <p className="text-xl text-white font-bold">
                Potrzebujesz systemu, który zadziała dla twojego 
                analitycznego umysłu - nie przeciwko niemu.
              </p>
            </div>
          </div>
        </section>

        {/* SOLUTION SECTION */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#3B0F77]/10 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-6">
              CO WYNIESIESZ Z TEGO WARSZTATU?
            </h2>
            <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-16">
              To nie będzie teoria. To 90 minut konkretnej pracy, 
              podczas której przeprowadzimy cię przez framework, 
              który zmienia chaos w klarowność.
            </p>
            
            <div className="space-y-8">
              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      KLAROWNA DIAGNOZA <span className="text-white/60 text-lg">(15 minut)</span>
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Zobaczysz na żywo, gdzie leży konflikt między twoimi 
                      wartościami (wizja) a brakiem codziennej struktury (plan).
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      Ludwik pokaże źródło problemu. Mateusz przełoży to na konkret.
                      To sedno webinaru - dwie perspektywy, jeden system.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      FRAMEWORK DO NATYCHMIASTOWEGO UŻYCIA <span className="text-white/60 text-lg">(45 minut)</span>
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Otrzymasz prostą matrycę 4 obszarów życia.
                      W 5 minut zmapujesz, gdzie naprawdę jesteś.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      To narzędzie od Mateusza. Konkret, który da ci jasność 
                      i pozwoli "zamknąć otwarte pętle" w głowie.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      Nie teoria. Praktyka, którą wdrożysz jeszcze podczas webinaru.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                      KONKRETNY PLAN NA NASTĘPNY TYDZIEŃ <span className="text-white/60 text-lg">(30 minut)</span>
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      Zrozumiesz, dlaczego sam plan to pusta checklista,
                      a sama wizja to marzycielstwo.
                    </p>
                    <p className="text-white/70 leading-relaxed">
                      Połączymy te dwa światy: twoje wartości + struktura działania.
                      Wyjdziesz z konkretem, nie z kolejną listą "do przemyślenia".
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* AGENDA SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-6">
              AGENDA: 90 MINUT, ZERO FLUFFU
            </h2>
            <p className="text-xl text-white/70 text-center max-w-3xl mx-auto mb-16">
              To nie pasywne słuchanie. To interaktywna sesja z konkretnymi 
              deliverables. Przygotuj notes - będziesz pracować na żywo.
            </p>
            
            <div className="space-y-6">
              <Card className="bg-gradient-to-r from-[#3B0F77]/20 to-transparent border-l-4 border-[#B100FF] p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    1. DIAGNOZA: GDZIE STOISZ? <span className="text-white/60">(20 minut)</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Ludwik i Mateusz zestawiają dwie perspektywy:
                  </p>
                  <ul className="space-y-2 text-white/70 ml-4">
                    <li>→ Wartości vs. Działania (gdzie jest rozjazd?)</li>
                    <li>→ Wizja vs. Struktura (co cię blokuje?)</li>
                    <li>→ Analiza vs. Wykonanie (jak wyjść z pętli?)</li>
                  </ul>
                  <p className="text-white font-medium">
                    Zobaczysz źródło swojego problemu w 20 minut.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-[#3B0F77]/20 to-transparent border-l-4 border-[#B100FF] p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    2. NARZĘDZIE: TWÓJ KOMPAS W 5 MINUT <span className="text-white/60">(45 minut)</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Mateusz prowadzi praktyczną mini-lekcję:
                  </p>
                  <ul className="space-y-2 text-white/70 ml-4">
                    <li>→ Matryca 4 obszarów: Work | Health | Relations | Growth</li>
                    <li>→ Mapowanie punktu "tu i teraz" (nie w głowie, NA PAPIERZE)</li>
                    <li>→ Identyfikacja JEDNEGO głównego konfliktu</li>
                  </ul>
                  <p className="text-white font-medium">
                    Otrzymasz prosty szablon do wypełnienia.<br />
                    Wyjdziesz z jasnością, od czego zacząć.
                  </p>
                </div>
              </Card>

              <Card className="bg-gradient-to-r from-[#3B0F77]/20 to-transparent border-l-4 border-[#B100FF] p-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-white">
                    3. SYSTEM: PLAN + WARTOŚCI = KIERUNEK <span className="text-white/60">(25 minut)</span>
                  </h3>
                  <p className="text-white/70 leading-relaxed">
                    Łączymy kropki. Ludwik + Mateusz pokazują:
                  </p>
                  <ul className="space-y-2 text-white/70 ml-4">
                    <li>→ Dlaczego wizja bez planu = marzycielstwo</li>
                    <li>→ Dlaczego plan bez wartości = pusta lista zadań</li>
                    <li>→ Jak połączyć te dwa elementy w spójny system nawigacji</li>
                  </ul>
                  <p className="text-white font-medium">
                    Bonus: Q&A - zadasz konkretne pytania, dostaniesz konkretne odpowiedzi.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* SPEAKERS SECTION */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#061A40]/30 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">
              DWÓCH LIDERÓW. DWIE PERSPEKTYWY.<br />JEDEN SYSTEM.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      LUDWIK C. SIADLAK
                    </h3>
                    <p className="text-white/60">Założyciel | Lifehacker | MCT</p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-[#B100FF] to-transparent" />
                  
                  <p className="text-white/70 leading-relaxed">
                    Od instruktora najsilniejszych armii świata 
                    po architekta mentalnych przełomów.
                  </p>
                  
                  <p className="text-white/70 leading-relaxed">
                    Ludwik pomaga dostrzec pułapki umysłu i dostarcza 
                    narzędzi ze styku mindset/mental.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-white font-medium">Jego zadanie na webinarze:</p>
                    <ul className="space-y-1 text-white/70 ml-4">
                      <li>→ Pokazać źródło problemu (wartości vs. działania)</li>
                      <li>→ Zainspirować do głębszej pracy</li>
                      <li>→ Otworzyć drzwi do Męskiego Kompasu</li>
                    </ul>
                  </div>
                  
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#B100FF]/20 to-[#7C00FF]/20 border border-[#B100FF]/30 rounded">
                    <p className="text-white/90 text-sm font-medium">
                      [ISKRA] Mindset | Wartości | Transformacja
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      MATEUSZ LIZAK
                    </h3>
                    <p className="text-white/60">Mentor Świadomych Mężczyzn</p>
                  </div>
                  
                  <div className="h-px bg-gradient-to-r from-[#ECB614] to-transparent" />
                  
                  <p className="text-white/70 leading-relaxed">
                    Od operatora maszyn CNC po mentora 
                    świadomych mężczyzn. Przeszedł przez wszystkie 
                    pułapki analitycznego umysłu.
                  </p>
                  
                  <p className="text-white/70 leading-relaxed">
                    Mateusz twardo stąpa po ziemi i dostarcza 
                    sprawdzonych narzędzi.
                  </p>
                  
                  <div className="space-y-2">
                    <p className="text-white font-medium">Jego zadanie na webinarze:</p>
                    <ul className="space-y-1 text-white/70 ml-4">
                      <li>→ Dać konkretny framework (matryca 4 obszarów)</li>
                      <li>→ Przełożyć teorię na praktyczne działanie</li>
                      <li>→ Pokazać, jak wdrażać system krok po kroku</li>
                    </ul>
                  </div>
                  
                  <div className="inline-block px-4 py-2 bg-gradient-to-r from-[#ECB614]/20 to-[#B0128C]/20 border border-[#ECB614]/30 rounded">
                    <p className="text-white/90 text-sm font-medium">
                      [GRUNT] Konkret | Narzędzia | Działanie
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            <p className="text-center text-xl text-white/80 mt-12 font-medium">
              Razem tworzymy przestrzeń, gdzie wielkie wizje<br />
              spotykają się z realnym działaniem.
            </p>
          </div>
        </section>

        {/* LOGISTICS SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">
              LOGISTYKA: SIMPLE & CLEAR
            </h2>
            
            <Card className="bg-white/5 border-white/10 p-8 backdrop-blur-sm">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <Calendar className="w-6 h-6 text-[#B100FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">DATA</p>
                    <p className="text-white/70">Czwartek, 16 października 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#B100FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">GODZINA</p>
                    <p className="text-white/70">19:00 - 20:30 CET (czas polski)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Monitor className="w-6 h-6 text-[#B100FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">FORMAT</p>
                    <p className="text-white/70">Live online na naszym Discordzie<br />
                    (Link otrzymasz na email po zapisie)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#B100FF] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-bold mb-1">NAGRANIE</p>
                    <p className="text-white/70">TAK - dostęp przez 48h po webinarze<br />
                    (Jeśli nie możesz być live, zapisz się i odłuchaj później)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">💰</span>
                  <div>
                    <p className="text-white font-bold mb-1">CENA</p>
                    <p className="text-white/70">Bezpłatnie (0 PLN)<br />
                    (Pilotaż przed startem Męskiego Kompasu)</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="text-2xl flex-shrink-0">👥</span>
                  <div>
                    <p className="text-white font-bold mb-1">MIEJSCA</p>
                    <p className="text-white/70">Ograniczone<br />
                    (Chcemy jakości interakcji, nie ilości uczestników)</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* FOR WHO SECTION */}
        <section className="py-20 px-4 bg-gradient-to-b from-transparent via-[#3B0F77]/10 to-transparent">
          <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-5xl font-black text-center text-white mb-16">
              DLA KOGO JEST TEN WARSZTAT?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-green-500/10 border-green-500/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <CheckCircle2 className="w-6 h-6 text-green-400" />
                  TO JEST DLA CIEBIE, JEŚLI:
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li>→ Masz 30+ lat i analityczny umysł</li>
                  <li>→ Pracujesz w IT jako team leader, inżynier lub architekt, jestes konsultantem, freelancerem lub właściciel biznesu</li>
                  <li>→ Masz stabilną sytuację, ale brakuje ci klarownego kierunku</li>
                  <li>→ Gubisz się w natłoku opcji i projektów (wszystko ważne = nic ważne)</li>
                  <li>→ Masz dość teorii i szukasz praktycznych narzędzi</li>
                  <li>→ Cenisz konkret i strukturę ponad niekończące się dyskusje</li>
                </ul>
                <p className="text-white/60 text-sm mt-6 leading-relaxed">
                  Męski Kompas to przestrzeń dla mężczyzn - ale otwarta dla każdego, 
                  kto ceni bezpośredniość, konkret i systemowe podejście do rozwoju.
                </p>
              </Card>

              <Card className="bg-red-500/10 border-red-500/30 p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <XCircle className="w-6 h-6 text-red-400" />
                  TO NIE JEST DLA CIEBIE, JEŚLI:
                </h3>
                <ul className="space-y-3 text-white/70">
                  <li>→ Szukasz szybkich rozwiązań bez pracy nad sobą</li>
                  <li>→ Chcesz inspiracji zamiast konkretnego systemu</li>
                  <li>→ Nie jesteś gotów na szczerą diagnozę swojej sytuacji</li>
                  <li>→ Preferujesz duchowe poszukiwania nad praktyczne frameworki</li>
                  <li>→ Nie masz 90 minut na pełne zaangażowanie w sesję</li>
                </ul>
              </Card>
            </div>
          </div>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center space-y-8">
              <h2 className="text-3xl md:text-5xl font-black text-white">
                PRZESTAŃ ANALIZOWAĆ.<br />ZACZNIJ NAWIGOWAĆ.
              </h2>
              
              <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
                Ten warsztat to nie kolejna teoria do przemyślenia.
                To konkretny framework, który wdrożysz jeszcze podczas sesji.
              </p>
              
              <p className="text-lg text-white/80 font-medium">
                90 minut, które mogą zmienić sposób, w jaki podejmujesz 
                decyzje przez następne 90 dni.
              </p>
              
              <p className="text-lg text-white/60">
                Bezpłatnie (0 PLN). Live. Z możliwością zadawania pytań.
              </p>
              
              <Card className="bg-white/5 border-white/10 p-8 max-w-md mx-auto mt-12">
                <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white text-center">
                    REZERWUJĘ MIEJSCE
                  </h3>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-white/70 text-sm mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="twoj@email.pl"
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-white/40 focus:outline-none focus:border-[#B100FF]"
                      />
                    </div>
                    
                    <Button 
                      size="lg" 
                      className="w-full text-lg py-6 bg-gradient-to-r from-[#B100FF] via-[#9900FF] to-[#7C00FF] hover:shadow-[0_0_30px_rgba(177,0,255,0.4)]"
                      onClick={() => window.location.href = ctaUrl}
                    >
                      ZAPISUJĘ SIĘ
                    </Button>
                  </div>
                  
                  <p className="text-white/50 text-xs text-center">
                    Twoje dane są bezpieczne. Zero spamu.<br />
                    Tylko konkret: link, materiały, przypomnienia.
                  </p>
                </div>
              </Card>
              
              <div className="pt-8 space-y-4">
                <div className="flex items-start gap-2 text-white/70 max-w-md mx-auto">
                  <Mail className="w-5 h-5 flex-shrink-0 mt-1" />
                  <div className="text-left">
                    <p className="font-medium text-white mb-2">Po zapisie otrzymasz:</p>
                    <ul className="space-y-1 text-sm">
                      <li>• Link do webinaru (Discord)</li>
                      <li>• Szablon do wypełnienia (Markdown / PDF)</li>
                      <li>• Reminder 24h i 1h przed startem</li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-white/60">
                  16 października | 19:00 CET | 90 minut
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 px-4 border-t border-white/10">
          <div className="container mx-auto text-center space-y-4">
            <p className="text-white/60 text-sm">
              © 2025 Ludwik C. Siadlak & Fundacja HACKERZY.PL
            </p>
            <div className="flex justify-center gap-6 text-white/50 text-sm">
              <a href="/legal/privacy" className="hover:text-white/80 transition-colors">
                Polityka Prywatności
              </a>
              <a href="/legal/terms" className="hover:text-white/80 transition-colors">
                Regulamin
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WebinarMeskiKompas;