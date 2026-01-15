import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Anchor, Compass, Ship, Star, MessageSquare, Check } from "lucide-react";
import { useState } from "react";
import effectGif from "@/assets/I-know-kung-fu.gif";
import agendaTimelineBg from "@/assets/agenda-timeline-bg.png";

export default function WebinarKodKapitana() {
  const ctaUrl = "https://lifehackerzy.pl/kod-kapitana";
  const [isEffectOverlayVisible, setIsEffectOverlayVisible] = useState(true);

  const handleShowEffect = () => {
    setIsEffectOverlayVisible(false);
  };

  return (
    <Layout hideHeader={true}>
      <SEO
        title="Kod Kapitana: Twój Protokół Radykalnej Wolności"
        description="Przestań być zakładnikiem własnych reakcji. Zacznij być Architektem swojej rzeczywistości. Spotkanie na żywo 27 stycznia 2025 o 20:05."
      />

      {/* HERO SECTION */}
      <section
        className="relative py-24 md:py-40 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(200, 60%, 8%) 0%, hsl(210, 50%, 12%) 50%, hsl(220, 45%, 10%) 100%)",
        }}
      >
        {/* Animated gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60 animate-fade-in"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_40%)] animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(14,165,233,0.1),transparent_50%)]"></div>

        {/* Nautical glow effects */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-500/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/15 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Event badge */}
            <div className="flex justify-center mb-10 animate-fade-in">
              <div
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full border-2 shadow-2xl"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  borderColor: "hsl(200, 90%, 60%)",
                  boxShadow:
                    "0 0 40px rgba(59, 130, 246, 0.4), 0 10px 30px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.3)",
                }}
              >
                <Anchor className="w-6 h-6 text-white animate-pulse" />
                <span className="font-bold text-white text-sm md:text-base tracking-wide">
                  SPOTKANIE NA ŻYWO • 27 STYCZNIA • 20:05
                </span>
              </div>
            </div>

            <div className="text-center animate-fade-in">
              <h1 className="whitespace-pre-line break-words hyphens-auto text-3xl md:text-5xl lg:text-7xl font-bold mb-8 text-white leading-[1.15] tracking-tight drop-shadow-lg">
                KOD KAPITANA:
                <br />
                <span
                  className="inline-block mt-3 bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent"
                  style={{
                    textShadow: "0 0 40px rgba(59, 130, 246, 0.3)",
                  }}
                >
                  Twój Protokół
                </span>
                <br />
                <span className="text-2xl md:text-4xl lg:text-5xl text-white/95 mt-2 inline-block">
                  RADYKALNEJ WOLNOŚCI
                </span>
              </h1>

              <div className="mb-12 flex justify-center animate-scale-in">
                <div
                  className="inline-block rounded-3xl px-10 py-8 border-2 max-w-3xl backdrop-blur-md transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 100%)",
                    borderColor: "rgba(59, 130, 246, 0.6)",
                    boxShadow:
                      "0 20px 60px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(59, 130, 246, 0.2), inset 0 2px 0 rgba(255, 255, 255, 0.15)",
                  }}
                >
                  <p className="text-xl md:text-2xl font-medium text-white/90 leading-relaxed">
                    Przestań być zakładnikiem własnych reakcji.
                    <br className="hidden md:block" />
                    <span className="font-bold text-sky-300">Zacznij być Architektem swojej rzeczywistości.</span>
                  </p>
                </div>
              </div>

              <div className="mb-10 animate-fade-in">
                <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto sm:inline-block">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto text-sm sm:text-lg md:text-2xl font-bold px-4 sm:px-10 md:px-16 py-4 sm:py-7 md:py-10 transition-all duration-300 hover:scale-110 border-0 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_20px_40px_rgba(0,0,0,0.4)] whitespace-normal text-center leading-tight"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    <span className="hidden sm:inline">PRZEJMUJĘ STERY – ZAPISZ MNIE NA 27 STYCZNIA →</span>
                    <span className="sm:hidden">ZAPISZ MNIE NA 27 STYCZNIA →</span>
                  </Button>
                </a>
              </div>

              <p className="text-white/70 text-base md:text-lg italic font-light animate-fade-in">
                Wejście jest bezpłatne. Cena to Twoja pełna uwaga.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* KONFRONTACJA Z PRAWDĄ */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
              KONFRONTACJA Z PRAWDĄ
            </h2>

            <Card className="bg-destructive/5 border-destructive/30 p-8 md:p-12 mb-8">
              <p className="text-xl md:text-2xl font-bold text-foreground mb-6 leading-relaxed">
                Prawda jest prosta: dopóki nie posiadasz Kodu Kapitana, Twój wewnętrzny system operacyjny wykonuje skrypty, których nigdy świadomie nie zatwierdziłeś.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Możesz budować najbardziej zaawansowane automatyzacje w biznesie, ale jeśli Twoja uwaga działa na <strong className="text-foreground">starym oprogramowaniu</strong> – lęku, reaktywności i cudzych oczekiwaniach – to wciąż jesteś tylko pasażerem we własnej głowie. Obserwujesz, jak wadliwe pętle decyzyjne przepalają Twoją energię i czas, a Twoja łódź dryfuje tam, gdzie pcha ją algorytm otoczenia.
              </p>
              <p className="text-xl font-bold text-destructive mb-6">
                To nie jest pech. To Błąd Architektury Świadomości.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Jeśli czujesz, że Twój potencjał przecieka, a Ty jedynie gasisz pożary wywołane przez błędy w Twoim własnym systemie – pora na wprowadzenie <strong className="text-foreground">nowych ustawień</strong>. Tylko Ty masz dostęp Administratora do swojej głowy. Czas wgrać Kod Kapitana.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CHCESZ ZOBACZYĆ EFEKT? */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Effect Display with Overlay */}
            <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
              {/* Privacy Overlay */}
              {isEffectOverlayVisible && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 animate-fade-in rounded-2xl">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-sky-500/20 rounded-full flex items-center justify-center mx-auto">
                      <MessageSquare className="h-8 w-8 text-sky-400" />
                    </div>

                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">
                        Chcesz zobaczyć efekt?
                      </h3>
                      <p className="text-white/80 text-lg">
                        Zobacz jak wygląda proces mentalnej transformacji
                      </p>
                    </div>

                    <CTAButton
                      onClick={handleShowEffect}
                      className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500"
                      size="lg"
                    >
                      Pokaż Efekt
                    </CTAButton>
                  </div>
                </div>
              )}

              {/* GIF Content */}
              <div className="bg-gradient-to-br from-background to-muted/30 p-8 rounded-2xl border border-sky-500/20">
                <img
                  src={effectGif}
                  alt="Mental transformation effect demonstration"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-xs text-muted-foreground mt-4 text-center">
                  Źródło: Matrix (1999), Warner Bros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O CZYM BĘDZIEMY ROZMAWIAĆ */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              O CZYM BĘDZIEMY ROZMAWIAĆ
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-16">
              (BEZ OWIJANIA W BAWEŁNĘ)
            </p>

            <div className="text-center mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                27 stycznia nie będziemy „rozmawiać o uważności". <strong className="text-foreground">Będziemy kalibrować Twoją technologię wewnętrzną.</strong> Pokażę Ci precyzyjny system nawigacji, który odmienił moje życie i życie moich najbardziej skutecznych klientów:
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="bg-sky-50 dark:bg-sky-950/30 border-sky-200 dark:border-sky-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-sky-100 dark:bg-sky-900">
                    <Ship className="w-8 h-8 text-sky-600 dark:text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">ANATOMIA STATKU</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Zidentyfikujesz swoje <strong className="text-foreground">Przecieki</strong> (słabości), które wysysają Twoją energię, zanim w ogóle postawisz żagle.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-blue-50 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
                    <Compass className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">KALIBRACJA KOMPASU</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Dowiesz się, jak przestać walczyć z emocjami i zacząć traktować je jak dane GPS. <strong className="text-foreground">Strach? To tylko informacja o wietrze.</strong>
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-cyan-50 dark:bg-cyan-950/30 border-cyan-200 dark:border-cyan-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-cyan-100 dark:bg-cyan-900">
                    <Anchor className="w-8 h-8 text-cyan-600 dark:text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">SUWERENNOŚĆ STERNIKA</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Nauczysz się techniki <strong className="text-foreground">„Zrzucenia Kotwicy"</strong> – momentalnego powrotu do stanu absolutnej jasności, niezależnie od tego, jak bardzo trzęsie pokładem.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-indigo-50 dark:bg-indigo-950/30 border-indigo-200 dark:border-indigo-800 p-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900">
                    <Star className="w-8 h-8 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-3">PÓŁNOCNA GWIAZDA</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Przestaniemy gonić za „celami" i znajdziemy Twój fundament. <strong className="text-foreground">Jeśli wiesz, dokąd płyniesz, żadna fala nie jest w stanie Cię zatrzymać.</strong>
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CO ZYSKUJESZ */}
      <section className="py-20" style={{ backgroundColor: '#e8f5e9' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-slate-800">
              CO ZYSKUJESZ?
            </h2>
            <p className="text-center text-slate-500 mb-14">
              Po 60 minutach ze mną
            </p>

            {/* Top row - 3 icons */}
            <div className="grid md:grid-cols-3 gap-8 mb-10">
              {/* Icon 1: Shield - Resilience */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* Shield shape */}
                    <path
                      d="M40 8 L70 20 L70 40 C70 58 40 72 40 72 C40 72 10 58 10 40 L10 20 Z"
                      fill="#e0f2fe"
                      stroke="#0891b2"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    {/* Checkmark */}
                    <path
                      d="M26 40 L35 49 L54 30"
                      fill="none"
                      stroke="#0891b2"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  Odporność
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  Zbudujesz pancerz psychiczny na trudne sytuacje.
                </p>
              </div>

              {/* Icon 2: Compass - Clarity */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* Outer circle */}
                    <circle cx="40" cy="40" r="32" fill="none" stroke="#0891b2" strokeWidth="2" />
                    {/* Inner circle with fill */}
                    <circle cx="40" cy="40" r="24" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
                    {/* Compass needle - North (dark) */}
                    <polygon points="40,18 36,40 40,44 44,40" fill="#0891b2" />
                    {/* Compass needle - South (light) */}
                    <polygon points="40,62 36,40 40,36 44,40" fill="#a5f3fc" stroke="#0891b2" strokeWidth="1" />
                    {/* Center dot */}
                    <circle cx="40" cy="40" r="3" fill="#0891b2" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  Klarowność
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  Przestaniesz dryfować, każda decyzja będzie świadoma.
                </p>
              </div>

              {/* Icon 3: Brain - Mindset */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* Brain outline */}
                    <path 
                      d="M28 48 C22 48 20 42 24 38 C20 34 22 26 30 26 C30 20 40 18 44 24 C50 20 60 24 58 32 C66 34 66 44 60 48 C64 54 58 60 50 58 C46 64 36 64 34 58 C26 60 20 54 28 48" 
                      fill="#d1fae5" 
                      stroke="#10b981" 
                      strokeWidth="2" 
                      strokeLinejoin="round"
                    />
                    {/* Brain center line */}
                    <path d="M40 26 C40 38 40 50 40 58" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    {/* Brain folds left */}
                    <path d="M32 36 C36 38 36 44 32 48" fill="none" stroke="#10b981" strokeWidth="1.5" />
                    {/* Brain folds right */}
                    <path d="M48 36 C44 38 44 44 48 48" fill="none" stroke="#10b981" strokeWidth="1.5" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  Mindset
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  Odzyskasz 100% odpowiedzialności za swoje życie.
                </p>
              </div>
            </div>

            {/* Bottom row - 2 icons centered */}
            <div className="flex justify-center gap-8 md:gap-16">
              {/* Icon 4: Circular arrows - Process */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* Circular arrows */}
                    <circle cx="40" cy="40" r="24" fill="none" stroke="#0891b2" strokeWidth="2" strokeDasharray="20 8" />
                    {/* Arrow heads */}
                    <path d="M58 28 L64 32 L60 38" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M22 52 L16 48 L20 42" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    {/* Center checkmark circle */}
                    <circle cx="40" cy="40" r="12" fill="#e0f2fe" stroke="#0891b2" strokeWidth="1.5" />
                    <path d="M34 40 L38 44 L46 36" fill="none" stroke="#0891b2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  Produktywność
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  Zoptymalizujesz procesy decyzyjne i działanie.
                </p>
              </div>

              {/* Icon 5: Head with brain - Self-awareness */}
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 mb-4">
                  <svg viewBox="0 0 80 80" className="w-full h-full">
                    {/* Head silhouette */}
                    <path
                      d="M50 70 L30 70 L30 58 C22 54 16 44 16 34 C16 20 28 10 42 10 C56 10 68 20 68 34 C68 38 66 42 64 46 L64 50 L56 50 L50 58 Z"
                      fill="none"
                      stroke="#0891b2"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    {/* Brain inside */}
                    <path 
                      d="M35 38 C32 38 30 34 33 31 C30 28 32 24 38 24 C38 20 44 18 48 22 C52 20 58 22 56 28 C60 30 60 36 56 38 C58 42 54 46 48 44 C46 48 40 48 38 44 C34 46 30 42 35 38" 
                      fill="#d1fae5" 
                      stroke="#10b981" 
                      strokeWidth="1.5" 
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-slate-800 mb-2 uppercase tracking-wide">
                  Samoświadomość
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  Zrozumiesz mechanizmy rządzące Twoim umysłem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-20 md:py-0 relative overflow-hidden" style={{ background: 'linear-gradient(180deg, #e8f4fc 0%, #d4e8f7 100%)' }} aria-label="Agenda dla Wybranych">
        {/* Desktop/Tablet: Show full image as the section - decorative, hidden from screen readers */}
        <div className="hidden md:block" aria-hidden="true">
          <img 
            src={agendaTimelineBg} 
            alt="" 
            className="w-full h-auto"
            role="presentation"
          />
        </div>
        
        {/* Screen reader accessible content for desktop (visually hidden but readable) */}
        <div className="sr-only">
          <h2>AGENDA DLA WYBRANYCH</h2>
          <div>
            <h3>KIERUNEK I START (25%)</h3>
            <p>Inicjowanie działań, określanie celów i przygotowanie do podróży. Wprowadzenie w temat i ustalenie priorytetów.</p>
          </div>
          <div>
            <h3>OTWARCIE MOŻLIWOŚCI (50%)</h3>
            <p>Identyfikacja szans, dostęp do zasobów i odblokowanie potencjału. Poznanie narzędzi i metod pracy.</p>
          </div>
          <div>
            <h3>NAWIGACJA I ROZWÓJ (75%)</h3>
            <p>Kierowanie procesem, dostosowanie do zmian i ciągłe doskonalenie. Monitorowanie postępów i korekta kursu.</p>
          </div>
          <div>
            <h3>OSIĄGNIĘCIE CELU (100%)</h3>
            <p>Finalizacja projektu, wdrożenie rozwiązań i czerpanie korzyści. Podsumowanie wyników i świętowanie sukcesu.</p>
          </div>
        </div>
        
        {/* Mobile: Show the original content (visible and accessible) */}
        <div className="md:hidden container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16 text-[#1e5a8a]">
              AGENDA DLA WYBRANYCH
            </h2>

            {/* Timeline Container for mobile */}
            <div className="relative">
              {/* Steps container - stacked on mobile */}
              <div className="grid grid-cols-1 gap-12">
                {/* Step 1 - KIERUNEK I START */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="50" cy="50" r="46" fill="#2980b9" stroke="#1e5a8a" strokeWidth="3" />
                      {/* Ship's wheel */}
                      <circle cx="50" cy="50" r="22" fill="none" stroke="white" strokeWidth="2.5" />
                      <circle cx="50" cy="50" r="8" fill="none" stroke="white" strokeWidth="2" />
                      {/* Wheel spokes */}
                      <line x1="50" y1="24" x2="50" y2="76" stroke="white" strokeWidth="2.5" />
                      <line x1="24" y1="50" x2="76" y2="50" stroke="white" strokeWidth="2.5" />
                      <line x1="31" y1="31" x2="69" y2="69" stroke="white" strokeWidth="2.5" />
                      <line x1="69" y1="31" x2="31" y2="69" stroke="white" strokeWidth="2.5" />
                      {/* Wheel handles */}
                      <circle cx="50" cy="24" r="5" fill="white" />
                      <circle cx="50" cy="76" r="5" fill="white" />
                      <circle cx="24" cy="50" r="5" fill="white" />
                      <circle cx="76" cy="50" r="5" fill="white" />
                      <circle cx="31" cy="31" r="5" fill="white" />
                      <circle cx="69" cy="69" r="5" fill="white" />
                      <circle cx="69" cy="31" r="5" fill="white" />
                      <circle cx="31" cy="69" r="5" fill="white" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    KIERUNEK I START
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Inicjowanie działań, określanie celów i przygotowanie do podróży. Wprowadzenie w temat i ustalenie priorytetów.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#2980b9] font-bold text-sm">25%</span>
                    <div className="w-24 h-3 rounded-full bg-white/70 overflow-hidden shadow-inner">
                      <div className="h-full w-1/4 bg-gradient-to-r from-[#2980b9] to-[#3498db] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Step 2 - OTWARCIE MOŻLIWOŚCI */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="50" cy="50" r="46" fill="#2980b9" stroke="#1e5a8a" strokeWidth="3" />
                      {/* Keyhole */}
                      <circle cx="50" cy="42" r="12" fill="none" stroke="white" strokeWidth="2.5" />
                      <path d="M44 50 L44 68 L56 68 L56 50" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                      {/* Light rays */}
                      <line x1="50" y1="20" x2="50" y2="26" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <line x1="30" y1="30" x2="34" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <line x1="70" y1="30" x2="66" y2="34" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <line x1="24" y1="45" x2="30" y2="45" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <line x1="70" y1="45" x2="76" y2="45" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    OTWARCIE MOŻLIWOŚCI
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Identyfikacja szans, dostęp do zasobów i odblokowanie potencjału. Poznanie narzędzi i metod pracy.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#2980b9] font-bold text-sm">50%</span>
                    <div className="w-24 h-3 rounded-full bg-white/70 overflow-hidden shadow-inner">
                      <div className="h-full w-1/2 bg-gradient-to-r from-[#2980b9] to-[#3498db] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Step 3 - NAWIGACJA I ROZWÓJ */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="50" cy="50" r="46" fill="#2980b9" stroke="#1e5a8a" strokeWidth="3" />
                      {/* Compass outer ring */}
                      <circle cx="50" cy="50" r="28" fill="none" stroke="white" strokeWidth="2" />
                      {/* Compass inner circle */}
                      <circle cx="50" cy="50" r="5" fill="white" />
                      {/* Compass needle - north (red/filled) */}
                      <polygon points="50,22 46,50 54,50" fill="white" />
                      {/* Compass needle - south (outline) */}
                      <polygon points="50,78 46,50 54,50" fill="none" stroke="white" strokeWidth="1.5" />
                      {/* Direction ticks */}
                      <line x1="50" y1="22" x2="50" y2="26" stroke="white" strokeWidth="2" />
                      <line x1="50" y1="74" x2="50" y2="78" stroke="white" strokeWidth="2" />
                      <line x1="22" y1="50" x2="26" y2="50" stroke="white" strokeWidth="2" />
                      <line x1="74" y1="50" x2="78" y2="50" stroke="white" strokeWidth="2" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    NAWIGACJA I ROZWÓJ
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Kierowanie procesem, dostosowanie do zmian i ciągłe doskonalenie. Monitorowanie postępów i korekta kursu.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#2980b9] font-bold text-sm">75%</span>
                    <div className="w-24 h-3 rounded-full bg-white/70 overflow-hidden shadow-inner">
                      <div className="h-full w-3/4 bg-gradient-to-r from-[#2980b9] to-[#27ae60] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Step 4 - OSIĄGNIĘCIE CELU */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon Circle */}
                  <div className="w-28 h-28 mb-2 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-lg">
                      <circle cx="50" cy="50" r="46" fill="#2980b9" stroke="#1e5a8a" strokeWidth="3" />
                      {/* Main gear */}
                      <circle cx="40" cy="45" r="15" fill="none" stroke="white" strokeWidth="2.5" />
                      <circle cx="40" cy="45" r="6" fill="none" stroke="white" strokeWidth="2" />
                      {/* Gear teeth for main gear */}
                      <rect x="37" y="27" width="6" height="6" fill="white" rx="1" />
                      <rect x="37" y="57" width="6" height="6" fill="white" rx="1" />
                      <rect x="22" y="42" width="6" height="6" fill="white" rx="1" />
                      <rect x="52" y="42" width="6" height="6" fill="white" rx="1" />
                      {/* Secondary gear */}
                      <circle cx="62" cy="58" r="12" fill="none" stroke="white" strokeWidth="2.5" />
                      <circle cx="62" cy="58" r="5" fill="none" stroke="white" strokeWidth="2" />
                      {/* Gear teeth for secondary gear */}
                      <rect x="59" y="44" width="5" height="4" fill="white" rx="1" />
                      <rect x="59" y="68" width="5" height="4" fill="white" rx="1" />
                      <rect x="48" y="55" width="4" height="5" fill="white" rx="1" />
                      <rect x="72" y="55" width="4" height="5" fill="white" rx="1" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-[#1e5a8a] mb-3 mt-4">
                    OSIĄGNIĘCIE CELU
                  </h3>
                  <p className="text-slate-600 text-sm mb-5 leading-relaxed px-2">
                    Finalizacja projektu, wdrożenie rozwiązań i czerpanie korzyści. Podsumowanie wyników i świętowanie sukcesu.
                  </p>
                  {/* Progress bar with percentage */}
                  <div className="flex items-center gap-3">
                    <span className="text-[#27ae60] font-bold text-sm">100%</span>
                    <div className="w-24 h-3 rounded-full bg-white/70 overflow-hidden shadow-inner">
                      <div className="h-full w-full bg-gradient-to-r from-[#3498db] to-[#27ae60] rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* KWALIFIKACJA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
              KWALIFIKACJA
            </h2>

            <Card className="bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-700 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Large green checkmark on the left */}
                <div className="flex-shrink-0 mx-auto md:mx-0">
                  <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                    <Check className="w-28 h-28 md:w-36 md:h-36 text-emerald-500 stroke-[2.5] drop-shadow-lg" />
                  </div>
                </div>
                
                {/* Content on the right */}
                <div className="flex-1">
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    <strong>Ten warsztat nie jest dla każdego.</strong> Jeśli szukasz wymówek, dlaczego „się nie da" – zamknij tę stronę.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Jeśli boisz się spojrzeć prawdzie w oczy i przyznać, że do tej pory pozwalałeś innym sterować Twoim życiem – to spotkanie Cię zaboli.
                  </p>
                  
                  {/* 80% Progress bar */}
                  <div className="mb-6">
                    <div className="flex justify-between text-sm text-muted-foreground mb-2">
                      <span>Twoja gotowość</span>
                      <span className="font-semibold text-emerald-600">80%</span>
                    </div>
                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: '80%',
                          background: 'linear-gradient(90deg, #3b82f6 0%, #22c55e 100%)'
                        }}
                      />
                    </div>
                  </div>
                  
                  <p className="text-xl font-bold text-foreground">
                    Ale jeśli jesteś gotowy przestać być ofiarą okoliczności i chcesz zostać <span className="text-sky-600 dark:text-sky-400">Panem Własnej Rzeczywistości</span> – zapraszam na pokład.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="py-24 md:py-32 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(200, 60%, 8%) 0%, hsl(210, 50%, 12%) 50%, hsl(220, 45%, 10%) 100%)",
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-sky-500/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-tl from-blue-600/10 to-transparent rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <a href={ctaUrl} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-auto sm:inline-block mb-12">
              <Button
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-lg md:text-2xl font-bold px-4 sm:px-10 md:px-16 py-4 sm:py-7 md:py-10 transition-all duration-300 hover:scale-110 border-0 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_20px_40px_rgba(0,0,0,0.4)] whitespace-normal text-center leading-tight"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span className="hidden sm:inline">PRZEJMUJĘ STERY – ZAPISZ MNIE NA 27 STYCZNIA →</span>
                <span className="sm:hidden">ZAPISZ MNIE NA 27 STYCZNIA →</span>
              </Button>
            </a>

            <p className="text-white/70 text-lg mb-16">
              Wejście jest bezpłatne. Cena to Twoja pełna uwaga.
            </p>

            <blockquote className="text-xl md:text-2xl text-white/90 italic leading-relaxed max-w-3xl mx-auto">
              „Twoje życie to nie jest coś, co Ci się przydarza. To Twoje największe dzieło sztuki. <span className="text-sky-300 font-semibold">Czas zacząć je tworzyć z intencją.</span>"
            </blockquote>
          </div>
        </div>
      </section>
    </Layout>
  );
}
