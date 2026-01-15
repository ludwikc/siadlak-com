import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CTAButton } from "@/components/ui/cta-button";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Anchor, Compass, Ship, Star, MessageSquare } from "lucide-react";
import { useState } from "react";
import effectGif from "@/assets/I-know-kung-fu.gif";

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
                    className="w-full sm:w-auto text-base sm:text-lg md:text-2xl font-bold px-6 sm:px-10 md:px-16 py-5 sm:py-7 md:py-10 transition-all duration-300 hover:scale-110 border-0 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_20px_40px_rgba(0,0,0,0.4)]"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                      color: "white",
                      boxShadow:
                        "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.2)",
                    }}
                  >
                    PRZEJMUJĘ STERY – ZAPISZ MNIE NA 27 STYCZNIA →
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
      <section className="py-20 bg-green-50/50 dark:bg-green-950/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 text-foreground">
              CO ZYSKUJESZ?
            </h2>
            <p className="text-xl text-center text-muted-foreground mb-8">
              (TWÓJ NOWY STATUS)
            </p>

            <div className="text-center mb-16">
              <p className="text-lg text-muted-foreground">Po 60 minutach ze mną:</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Icon 1: Odpowiedzialność - Head with gear */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-6 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Head silhouette */}
                    <path
                      d="M50 15 C30 15 20 30 20 50 C20 65 28 75 35 80 L35 90 L65 90 L65 80 C72 75 80 65 80 50 C80 30 70 15 50 15"
                      fill="#dcfce7"
                      stroke="#1e3a5f"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    {/* Gear inside head */}
                    <circle cx="50" cy="45" r="12" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="2" />
                    <circle cx="50" cy="45" r="5" fill="#1e3a5f" />
                    {/* Gear teeth */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                      <rect
                        key={i}
                        x="47"
                        y="30"
                        width="6"
                        height="6"
                        fill="#bfdbfe"
                        stroke="#1e3a5f"
                        strokeWidth="1.5"
                        transform={`rotate(${angle} 50 45)`}
                      />
                    ))}
                    {/* Arrow pointing forward */}
                    <path
                      d="M70 45 L85 45 L80 38 M85 45 L80 52"
                      fill="none"
                      stroke="#1e3a5f"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                  Odzyskasz 100% odpowiedzialności.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  A odpowiedzialność to jedyna droga do wolności.
                </p>
              </div>

              {/* Icon 2: Kompas */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-6 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Outer circle */}
                    <circle cx="50" cy="50" r="40" fill="#dcfce7" stroke="#1e3a5f" strokeWidth="2.5" />
                    {/* Inner circle */}
                    <circle cx="50" cy="50" r="30" fill="#bfdbfe" stroke="#1e3a5f" strokeWidth="2" />
                    {/* Compass directions */}
                    <polygon points="50,20 45,45 50,50 55,45" fill="#1e3a5f" />
                    <polygon points="50,80 45,55 50,50 55,55" fill="#dcfce7" stroke="#1e3a5f" strokeWidth="1" />
                    <polygon points="20,50 45,45 50,50 45,55" fill="#dcfce7" stroke="#1e3a5f" strokeWidth="1" />
                    <polygon points="80,50 55,45 50,50 55,55" fill="#dcfce7" stroke="#1e3a5f" strokeWidth="1" />
                    {/* Center dot */}
                    <circle cx="50" cy="50" r="4" fill="#1e3a5f" />
                    {/* Direction markers */}
                    <text x="50" y="16" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontWeight="bold">N</text>
                    <text x="50" y="92" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontWeight="bold">S</text>
                    <text x="8" y="53" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontWeight="bold">W</text>
                    <text x="92" y="53" textAnchor="middle" fill="#1e3a5f" fontSize="8" fontWeight="bold">E</text>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                  Przestaniesz dryfować.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Każdy ruch Twoim sterem będzie świadomy i celowy.
                </p>
              </div>

              {/* Icon 3: Tarcza - Shield */}
              <div className="flex flex-col items-center text-center">
                <div className="w-28 h-28 mb-6 relative">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    {/* Shield shape */}
                    <path
                      d="M50 10 L85 25 L85 50 C85 75 50 95 50 95 C50 95 15 75 15 50 L15 25 Z"
                      fill="#dcfce7"
                      stroke="#1e3a5f"
                      strokeWidth="2.5"
                      strokeLinejoin="round"
                    />
                    {/* Inner shield decoration */}
                    <path
                      d="M50 22 L75 33 L75 50 C75 68 50 83 50 83 C50 83 25 68 25 50 L25 33 Z"
                      fill="#bfdbfe"
                      stroke="#1e3a5f"
                      strokeWidth="1.5"
                    />
                    {/* Checkmark inside */}
                    <path
                      d="M35 50 L45 60 L65 40"
                      fill="none"
                      stroke="#1e3a5f"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-3">
                  Zbudujesz pancerz psychiczny.
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Pogoda (świat zewnętrzny) przestanie mieć wpływ na Twoje samopoczucie. <strong className="text-slate-800 dark:text-slate-200">Ty jesteś Kapitanem.</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDA */}
      <section className="py-20" style={{ backgroundColor: '#dbeafe' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-16 text-slate-800">
              AGENDA DLA WYBRANYCH
            </h2>

            {/* Horizontal Timeline */}
            <div className="relative">
              {/* Timeline line - hidden on mobile, visible on md+ */}
              <div className="hidden md:block absolute top-16 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 rounded-full" style={{ marginLeft: '12.5%', marginRight: '12.5%', width: '75%' }}></div>

              {/* Steps container */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-32 h-32 mb-6 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#3b82f6" />
                      {/* Ship's wheel */}
                      <circle cx="50" cy="50" r="20" fill="none" stroke="white" strokeWidth="3" />
                      <circle cx="50" cy="50" r="8" fill="none" stroke="white" strokeWidth="2" />
                      {/* Wheel spokes */}
                      <line x1="50" y1="25" x2="50" y2="75" stroke="white" strokeWidth="3" />
                      <line x1="25" y1="50" x2="75" y2="50" stroke="white" strokeWidth="3" />
                      <line x1="32" y1="32" x2="68" y2="68" stroke="white" strokeWidth="3" />
                      <line x1="68" y1="32" x2="32" y2="68" stroke="white" strokeWidth="3" />
                      {/* Wheel handles */}
                      <circle cx="50" cy="25" r="4" fill="white" />
                      <circle cx="50" cy="75" r="4" fill="white" />
                      <circle cx="25" cy="50" r="4" fill="white" />
                      <circle cx="75" cy="50" r="4" fill="white" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    ETAP 1: Przebudzenie Kapitana
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Wyjście z transu automatycznych reakcji.
                  </p>
                  {/* Progress bar */}
                  <div className="w-24 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-1/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-32 h-32 mb-6 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#3b82f6" />
                      {/* Keyhole with light */}
                      <path d="M50 30 C40 30 35 40 35 48 C35 54 38 58 42 62 L42 70 L58 70 L58 62 C62 58 65 54 65 48 C65 40 60 30 50 30" fill="white" />
                      <circle cx="50" cy="45" r="6" fill="#3b82f6" />
                      <rect x="47" y="50" width="6" height="15" fill="#3b82f6" />
                      {/* Light rays */}
                      <line x1="50" y1="18" x2="50" y2="24" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <line x1="30" y1="35" x2="34" y2="39" stroke="white" strokeWidth="2" strokeLinecap="round" />
                      <line x1="70" y1="35" x2="66" y2="39" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    ETAP 2: Audyt Zasobów
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Twoje Żagle vs Twoje Przecieki.
                  </p>
                  {/* Progress bar */}
                  <div className="w-24 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-2/4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full"></div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-32 h-32 mb-6 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#3b82f6" />
                      {/* Compass */}
                      <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="2" />
                      <polygon points="50,28 45,50 50,55 55,50" fill="white" />
                      <polygon points="50,72 45,50 50,45 55,50" fill="none" stroke="white" strokeWidth="1.5" />
                      <circle cx="50" cy="50" r="4" fill="white" />
                      {/* Direction markers */}
                      <text x="50" y="22" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">N</text>
                      <text x="50" y="84" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">S</text>
                      <text x="22" y="53" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">W</text>
                      <text x="78" y="53" textAnchor="middle" fill="white" fontSize="8" fontWeight="bold">E</text>
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    ETAP 3: Taniec z Burzą
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Opór jako siła napędowa wzrostu.
                  </p>
                  {/* Progress bar */}
                  <div className="w-24 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-3/4 bg-gradient-to-r from-cyan-400 to-green-400 rounded-full"></div>
                  </div>
                </div>

                {/* Step 4 */}
                <div className="flex flex-col items-center text-center">
                  {/* Icon */}
                  <div className="w-32 h-32 mb-6 relative z-10">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="45" fill="#3b82f6" />
                      {/* Brain */}
                      <path d="M35 55 C30 55 28 48 32 44 C28 40 30 32 38 32 C38 26 48 24 52 30 C58 26 68 30 66 38 C74 40 74 50 68 54 C72 60 66 68 58 66 C54 72 44 72 42 66 C34 68 28 62 35 55" fill="none" stroke="white" strokeWidth="2.5" strokeLinejoin="round" />
                      {/* Brain center line */}
                      <path d="M50 32 C50 45 50 58 50 66" fill="none" stroke="white" strokeWidth="1.5" />
                      {/* Brain folds */}
                      <path d="M40 42 C45 45 45 50 40 54" fill="none" stroke="white" strokeWidth="1.5" />
                      <path d="M60 42 C55 45 55 50 60 54" fill="none" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold text-slate-800 mb-2">
                    ETAP 4: Manifest Suwerenności
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed">
                    Twój plan rejsu na najbliższy rok.
                  </p>
                  {/* Progress bar */}
                  <div className="w-24 h-2 rounded-full bg-slate-200 overflow-hidden">
                    <div className="h-full w-full bg-gradient-to-r from-cyan-400 to-green-500 rounded-full"></div>
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
              <p className="text-lg text-foreground leading-relaxed mb-6">
                <strong>Ten warsztat nie jest dla każdego.</strong> Jeśli szukasz wymówek, dlaczego „się nie da" – zamknij tę stronę.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Jeśli boisz się spojrzeć prawdzie w oczy i przyznać, że do tej pory pozwalałeś innym sterować Twoim życiem – to spotkanie Cię zaboli.
              </p>
              <p className="text-xl font-bold text-foreground">
                Ale jeśli jesteś gotowy przestać być ofiarą okoliczności i chcesz zostać <span className="text-sky-600 dark:text-sky-400">Panem Własnej Rzeczywistości</span> – zapraszam na pokład.
              </p>
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
                className="w-full sm:w-auto text-base sm:text-lg md:text-2xl font-bold px-6 sm:px-10 md:px-16 py-5 sm:py-7 md:py-10 transition-all duration-300 hover:scale-110 border-0 shadow-2xl hover:shadow-[0_0_60px_rgba(59,130,246,0.6),0_20px_40px_rgba(0,0,0,0.4)]"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(200, 80%, 50%) 0%, hsl(210, 70%, 45%) 100%)",
                  color: "white",
                  boxShadow:
                    "0 20px 40px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4), inset 0 -2px 10px rgba(0, 0, 0, 0.2)",
                }}
              >
                PRZEJMUJĘ STERY – ZAPISZ MNIE NA 27 STYCZNIA →
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
