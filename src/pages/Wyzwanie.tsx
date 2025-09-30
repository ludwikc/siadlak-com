import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Countdown Timer Component
function ChallengeCountdown() {
  const targetDate = new Date('2025-10-07T11:30:00+02:00');
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#1a1a1a] rounded-xl p-8 max-w-2xl mx-auto">
      <div className="flex justify-center gap-3 md:gap-6">
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-bold text-white mb-1">{timeLeft.days}</div>
          <div className="text-sm text-white/70 uppercase tracking-wide">dni</div>
        </div>
        <div className="text-white/30 text-3xl md:text-5xl">:</div>
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-bold text-white mb-1">{timeLeft.hours}</div>
          <div className="text-sm text-white/70 uppercase tracking-wide">godz</div>
        </div>
        <div className="text-white/30 text-3xl md:text-5xl">:</div>
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-bold text-white mb-1">{timeLeft.minutes}</div>
          <div className="text-sm text-white/70 uppercase tracking-wide">min</div>
        </div>
        <div className="text-white/30 text-3xl md:text-5xl">:</div>
        <div className="text-center">
          <div className="text-3xl md:text-5xl font-bold text-white mb-1">{timeLeft.seconds}</div>
          <div className="text-sm text-white/70 uppercase tracking-wide">sek</div>
        </div>
      </div>
    </div>
  );
}

export default function Wyzwanie() {

  return (
    <Layout hideHeader hideFooter>
      <SEO 
        title="Drwal w Białej Koszuli - 4-dniowe wyzwanie produktywności"
        description="Darmowe 4-dniowe wyzwanie dla profesjonalistów, którzy osiągają cele, ale nie czują spełnienia. 7-10 października 2025."
        keywords="produktywność, wyzwanie, cele, wartości, efektywność, coaching"
      />

      {/* HERO SECTION */}
      <section className="bg-white py-20 md:py-24 px-4">
        <div className="container max-w-[1200px] mx-auto">
          <div className="text-center max-w-[800px] mx-auto space-y-8 md:space-y-12">
            
            {/* POZIOM 1: Pattern Interrupt */}
            <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-[1.2] text-[#1a1a1a]">
              Ile kursów produktywności już kupiłeś?
            </h1>

            {/* POZIOM 2: Hook Amplifier */}
            <p className="text-[24px] md:text-[32px] lg:text-[40px] font-normal text-[#666666] italic mt-4">
              3? 5? 7?
            </p>

            {/* POZIOM 3: Konfrontacja */}
            <p className="text-[20px] md:text-[28px] lg:text-[36px] font-semibold leading-tight text-[#1a1a1a] mt-8">
              I pytanie drugie: <strong>Dlaczego nadal czujesz, że coś jest nie tak?</strong>
            </p>

            {/* VISUAL BREAK */}
            <div className="h-12 md:h-16"></div>

            {/* POZIOM 4: Problem Statement */}
            <div className="text-[16px] md:text-[20px] lg:text-[24px] font-normal leading-[1.6] text-[#333333] space-y-2">
              <p>Nie dlatego, że tamte kursy były złe.</p>
              <p>
                Dlatego, że{' '}
                <span className="font-bold bg-[#FFF9E6] px-2 py-1">
                  rąbiesz drzewa w cudzym lesie.
                </span>
              </p>
            </div>

            {/* POZIOM 5: Promise (główny) */}
            <h2 className="text-[24px] md:text-[36px] lg:text-[48px] font-bold leading-tight text-[#D97706] mt-12">
              4 dni, które pokażą ci, GDZIE powinieneś rąbać
            </h2>

            {/* POZIOM 6: Subheadline */}
            <p className="text-[16px] md:text-[18px] font-normal text-[#666666] italic mt-3">
              (Zamiast DAĆ ci ostrzejszą siekierę do rąbania w złym miejscu)
            </p>

            {/* VISUAL BREAK */}
            <div className="h-16 md:h-20"></div>

            {/* POZIOM 7: Countdown Timer */}
            <div className="mt-12">
              <ChallengeCountdown />
            </div>

            {/* POZIOM 8: Event Details */}
            <div className="text-[16px] md:text-[18px] leading-[1.8] text-[#333333] space-y-2 mt-6">
              <p className="font-semibold">7-10 października 2025</p>
              <p>Codziennie o godzinie, której nie oczekujesz</p>
              <p>Live na Discord</p>
              <p>Nagrania zostają (ale energia live'a nie)</p>
            </div>

            {/* POZIOM 9: Zero Bullshit Statement */}
            <div className="border-t border-b border-[#e5e7eb] py-4 mt-8">
              <p className="text-[18px] md:text-[20px] font-bold text-[#059669]">
                ZERO kosztów. Zero bullshitu. Zero motywacyjnych frazesów.
              </p>
            </div>

            {/* CTA BUTTON */}
            <div className="mt-12">
              <a 
                href="https://buy.siadlak.com/checkout/spotkanie-online"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 md:px-12 py-5 text-[18px] md:text-[20px] font-bold text-white bg-[#D97706] hover:bg-[#B45309] rounded-lg shadow-[0_4px_6px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#D97706] focus:ring-offset-2"
              >
                Sprawdzam, w którym lesie stoję (4 dni, 0 zł)
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* PAIN SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-foreground">
            Rozpoznajesz któreś z tych?
          </h2>

          <div className="space-y-8 mb-12">
            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Pracuję 50+ godzin tygodniowo i mam wrażenie, że robię w kółko to samo"
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Nie robisz. Ty RĄBIESZ.<br/>
                Problem: <strong className="text-foreground">To nie Twoje drzewa.</strong></p>
                
                <p>To cele, które brzmią dobrze na LinkedIn.<br/>
                To projekty, które "trzeba" zrobić.<br/>
                To oczekiwania rodziców/szefa/społeczeństwa zamaskowane jako "Twoja ambicja".</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Przeczytałem 30 książek o produktywności. Żadna nie pomogła na dłużej"
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>Bo książki dają Ci <strong className="text-foreground">narzędzia</strong>.<br/>
                Ty potrzebujesz <strong className="text-foreground">kierunku</strong>.</p>
                
                <p>Najostrzejsza siekiera na świecie nie pomoże, jeśli rąbiesz w cudzym lesie.</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Osiągam cele. Czuję pustkę."
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>To nie depresja.<br/>
                To <strong className="text-foreground">cognitive dissonance</strong>.</p>
                
                <p>Twój mózg wie, że rąbiesz w cudzym lesie.<br/>
                Ale nie chcesz się do tego przyznać. Bo wtedy trzeba zmienić.</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                "Mam 5 rozpoczętych projektów. 0 ukończonych."
              </h3>
              <div className="space-y-3 text-muted-foreground leading-relaxed">
                <p>To nie ADHD.<br/>
                To nie brak dyscypliny.</p>
                
                <p>To <strong className="text-foreground">paralysis analysis</strong> - objaw tego, że nie wiesz, KTÓRY las jest Twój.</p>
                
                <p>Więc rąbiesz trochę tu, trochę tam, licząc że "w końcu trafi".</p>
              </div>
            </div>
          </div>

          <div className="bg-[#2563eb]/10 border-l-4 border-[#2563eb] rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Prawdziwy problem (którego nikt nie nazywa)
            </h3>
            <p className="text-xl text-foreground leading-relaxed mb-4">
              Większość ludzi optymalizuje <strong>DROGĘ</strong> do niewłaściwego <strong>MIEJSCA</strong>.
            </p>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside mb-4">
              <li>Mają techniki Pomodoro</li>
              <li>Mają aplikacje GTD</li>
              <li>Mają morning routines</li>
            </ul>
            <p className="text-lg text-muted-foreground">
              I nadal czują, że <strong className="text-foreground">coś jest nie tak</strong>.
            </p>
            <p className="text-xl font-bold text-foreground mt-6">
              Bo problem nie jest w siekierze. Problem jest w lesie.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL GET SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            4 DNI, 4 DIAGNOZ
          </h2>

          <div className="space-y-8 max-w-5xl mx-auto">
            {/* Day 1 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    1
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 1: "Sprawdzian Lasu"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Odkryjesz, ile z Twoich obecnych "priorytetów" wybrałeś świadomie, a ile przejąłeś od kogoś innego.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ćwiczenie:</strong> Konfrontacja z kartką (7 min, które mogą zmienić 7 lat)
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Output:</strong> Lista "drzew", które przestaniesz rąbać
                  </p>
                </div>
              </div>
            </div>

            {/* Day 2 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    2
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 2: "Kompas, Nie Mapa"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dostaniesz framework, który pokazuje TWÓJ las (nie cel na LinkedIn, nie rada rodzica, nie artykuł z Harvard Business Review)
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ćwiczenie:</strong> Kalibracja Kompasu - Twoje TOP 5 wartości
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Output:</strong> Wiedza, które cele są cudze (i dlaczego możesz je odpuścić bez poczucia winy)
                  </p>
                </div>
              </div>
            </div>

            {/* Day 3 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    3
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 3: "System, Nie Motywacja"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Dostaniesz 3 narzędzia (Siekiera, Piła, Kompas) i nauczysz się, KTÓREGO użyć KIEDY (i przestaniesz używać piły do siekiery jak 99% ludzi)
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Ćwiczenie:</strong> Design Your Week
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Output:</strong> Twój idealny tydzień na kartce (gotowy do wdrożenia w poniedziałek)
                  </p>
                </div>
              </div>
            </div>

            {/* Day 4 */}
            <div className="bg-card border border-border rounded-xl p-8">
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-[#2563eb]/20 flex items-center justify-center text-2xl font-bold text-[#2563eb]">
                    4
                  </div>
                </div>
                <div className="flex-1 space-y-3">
                  <h3 className="text-2xl font-bold text-foreground">
                    DZIEŃ 4: "Live Daily 12:34"
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Coaching session na żywo. 3-4 osoby dostaną coaching przy całej grupie. Reszta uczy się z ich problemów.
                  </p>
                  <p className="text-muted-foreground">
                    <strong className="text-foreground">Format:</strong> Przychodzisz z problemem → Wychodzisz z planem
                  </p>
                  <p className="text-foreground font-semibold">
                    <strong>Bonus:</strong> Prezentacja kursu "Hakowanie Produktywności" (dla tych, którzy chcą pełny system)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROOF SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            To <span className="relative inline-block text-red-600">
              nie jest
              <svg className="absolute -bottom-1 left-0 w-full h-2" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0,5 Q25,2 50,5 T100,5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round"/>
              </svg>
            </span> kolejny webinar motywacyjny
          </h2>

          <div className="bg-card border border-border rounded-xl p-8 md:p-12 max-w-5xl mx-auto">
            <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
              <div className="mx-auto md:mx-0">
                <img 
                  src="/lovable-uploads/ludwik-siadlak-profile.png"
                  alt="Ludwik C. Siadlak"
                  className="rounded-lg w-full max-w-[300px]"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-foreground">Prowadzi: Ludwik C. Siadlak</h3>
                  <p className="text-lg text-muted-foreground">Nie guru. Nie coach life. Nie motivational speaker.</p>
                </div>
                
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p className="text-lg font-semibold text-foreground">Facet, który:</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>Przeszedł tę samą ścieżkę (30+ kursów produktywności, 0 transformacji)</li>
                    <li>Znalazł własny las (i wyciął już ścieżkę, którą możesz pójść)</li>
                    <li>Prowadzi Daily Coaching 12:34 dla społeczności Lifehackerzy od lat</li>
                  </ul>
                  
                  <p className="text-xl font-bold text-foreground pt-4">
                    Nie uczę produktywności. Uczę, jak przestać rąbać w cudzym lesie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OBJECTIONS SECTION */}
      <section className="py-20 px-4 bg-background">
        <div className="container max-w-4xl mx-auto space-y-8">
          <div className="bg-card border border-border border-l-4 border-l-[#2563eb] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Nie mam czasu na 4-dniowe wyzwanie"
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>Masz czas na scrollowanie LinkedIn 40 min dziennie.<br/>
              Masz czas na "ważne" spotkania, które mogły być mailem.<br/>
              Masz czas na rąbanie w cudzym lesie.</p>
              
              <p className="text-foreground font-semibold text-lg">
                Pytanie: Czy masz czas na 4 dni, które mogą zmienić następne 4 lata?
              </p>
            </div>
          </div>

          <div className="bg-card border border-border border-l-4 border-l-[#2563eb] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Już próbowałem tysiąca rzeczy. To też nie zadziała."
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-foreground font-semibold text-lg">
                Dobra wiadomość: Nie próbowałeś TEGO.
              </p>
              
              <p>Tamte kursy dawały Ci narzędzia.<br/>
              To wyzwanie pokaże Ci, CZY RĄBIESZ WE WŁAŚCIWYM LESIE.</p>
              
              <p>Jeśli nie - żadne narzędzie nie pomoże.<br/>
              Jeśli tak - w końcu będziesz wiedział, dlaczego warto kontynuować.</p>
            </div>
          </div>

          <div className="bg-card border border-border border-l-4 border-l-[#2563eb] rounded-xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              "Co jeśli odkryję, że rąbię w cudzym lesie i... będę musiał to zmienić?"
            </h3>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p className="text-2xl font-bold text-foreground">Tak.</p>
              
              <p>I to jest powód, dlaczego większość ludzi tego nie robi.<br/>
              Łatwiej kupić kolejny kurs produktywności niż skonfrontować się z prawdą.</p>
              
              <p className="text-foreground font-semibold text-lg">
                Ale prawda nie zniknie. Tylko będzie głośniejsza z każdym rokiem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center text-foreground">
            Najczęstsze pytania
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Czy to naprawdę za darmo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Tak. Zero kosztów. Wyzwanie jest darmowe. W dniu 4 przedstawię płatny kurs, 
                ale udział w wyzwaniu nie zobowiązuje do niczego.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Co jeśli nie mogę być na żywo?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nagrania zostają dostępne dla wszystkich zapisanych. Ale interakcja na żywo jest 
                najważniejsza - szczególnie w dniu 4 (live coaching).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Czy to kolejny kurs o Pomodoro i GTD?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Nie. To nie jest o technikach. To o fundamentach. Najpierw wybieramy właściwy las, 
                potem ostrzymy siekierę.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Dla kogo to NIE jest?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Dla osób szukających quick fix. Dla osób, które nie są gotowe skonfrontować się z 
                pytaniem "czy to naprawdę moje cele?". Dla osób bez 60 minut dziennie przez 4 dni.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Jak wygląda techniczne setup?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Potrzebujesz: 1) Konto Discord (za darmo), 2) Link dostaniesz w mailu po zapisie, 
                3) Instrukcja wideo: "Jak dołączyć" w pierwszym mailu.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Co po wyzwaniu?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Zależy od Ciebie. Możesz wdrożyć narzędzia samodzielnie. Możesz dołączyć do kursu 
                "Hakowanie Produktywności" (8 tygodni, daily coaching, społeczność). Możesz nic nie robić. 
                Żadnych zobowiązań.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-[#2563eb]">
                Kto jeszcze będzie na wyzwaniu?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Profesjonaliści z różnych branż: IT, biznes, freelancing, zarządzanie. Wiek: 30-45. 
                Wspólny mianownik: wysoka ambicja, poczucie, że coś jest nie tak z obecnym sposobem pracy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section id="signup" className="py-20 px-4 bg-gradient-to-br from-[#2563eb]/20 to-muted/30">
        <div className="container max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">
              Dwa scenariusze:
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
              <div className="border border-border border-l-4 border-l-red-500 rounded-xl p-6" style={{ backgroundColor: 'rgb(239 68 68 / 0.45)' }}>
                <h3 className="text-xl font-bold text-foreground mb-3">SCENARIUSZ A:</h3>
                <p className="text-foreground leading-relaxed">
                  Nie zapiszesz się. Za miesiąc będziesz dokładnie tam, gdzie jesteś teraz. 
                  Tylko starszy o miesiąc. I nadal będziesz rąbał w cudzym lesie.
                </p>
              </div>

              <div className="border border-border border-l-4 border-l-green-500 rounded-xl p-6" style={{ backgroundColor: 'rgb(34 197 94 / 0.45)' }}>
                <h3 className="text-xl font-bold text-foreground mb-3">SCENARIUSZ B:</h3>
                <p className="text-foreground leading-relaxed mb-3">
                  Zapiszesz się. Za 4 dni będziesz wiedział:
                </p>
                <ul className="space-y-1 text-foreground list-disc list-inside">
                  <li>W którym lesie stoję</li>
                  <li>Gdzie powinienem być</li>
                  <li>Którędy iść</li>
                  <li>Jak to wdrożyć</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center space-y-8">
            <a 
              href="https://buy.siadlak.com/checkout/spotkanie-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors"
            >
              Sprawdzam, w którym lesie stoję (4 dni, 0 zł)
            </a>

            <div className="border border-green-500/30 rounded-xl p-8 max-w-2xl mx-auto text-left" style={{ backgroundColor: 'rgb(34 197 94 / 0.45)' }}>
              <p className="font-semibold text-foreground mb-3">Dostaniesz:</p>
              <ul className="space-y-2 text-foreground list-disc list-inside">
                <li>Link do Discord (natychmiast)</li>
                <li>Materiały przygotowawcze (dzień przed startem)</li>
                <li>Przypomnienia o live'ach (żebyś nie przegapił)</li>
                <li>Dostęp do nagrań (jeśli nie zdążysz na live)</li>
              </ul>
              <p className="text-lg font-semibold text-foreground mt-6 text-center">
                Start: 7 października, godz. będzie niespodzianka
              </p>
            </div>
          </div>

          <div className="bg-[#2563eb]/10 border-l-4 border-[#2563eb] rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-xl font-bold text-foreground mb-4">P.S. To nie jest dla każdego.</p>
            <div className="space-y-3 text-muted-foreground leading-relaxed">
              <p>Jeśli szukasz motywacyjnych frazesów - odpuść.<br/>
              Jeśli chcesz magicznej pigułki - odpuść.<br/>
              Jeśli chcesz, żebym Ci powiedział, że "wszystko jest OK" - odpuść.</p>
              
              <p className="font-semibold text-foreground">To wyzwanie jest dla ludzi, którzy:</p>
              <ul className="space-y-1 list-disc list-inside">
                <li>Mają dość udawania, że wszystko jest OK</li>
                <li>Są gotowi skonfrontować się z prawdą</li>
                <li>Chcą wiedzieć, CZY rąbią w swoim lesie (nawet jeśli odpowiedź będzie trudna)</li>
              </ul>
              
              <p className="text-lg font-bold text-foreground pt-4">
                Jeśli to Ty - widzimy się 7 października.
              </p>
            </div>
          </div>

          <div className="text-center">
            <a 
              href="https://buy.siadlak.com/checkout/spotkanie-online"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-[#2563eb] hover:bg-[#1d4ed8] rounded-lg transition-colors"
            >
              Ostatnia szansa: Zapisuję się teraz
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Dołącz do 34 profesjonalistów, którzy już sprawdzają, czy rąbią w swoim lesie.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-background border-t border-border">
        <div className="container max-w-6xl mx-auto text-center">
          <p className="text-muted-foreground mb-4">
            Masz pytania? Napisz:{' '}
            <a href="mailto:ludwikc@siadlak.email" className="text-[#2563eb] hover:underline">
              ludwikc@siadlak.email
            </a>
          </p>
          
          <div className="flex justify-center gap-6 mb-6 text-sm">
            <Link to="/legal/privacy" className="text-muted-foreground hover:text-[#2563eb]">
              Polityka prywatności
            </Link>
            <Link to="/legal/terms" className="text-muted-foreground hover:text-[#2563eb]">
              Regulamin
            </Link>
          </div>

          <p className="text-sm text-muted-foreground">
            © 2025 Ludwik C. Siadlak. Wszystkie prawa zastrzeżone.
          </p>
        </div>
      </footer>
    </Layout>
  );
}
