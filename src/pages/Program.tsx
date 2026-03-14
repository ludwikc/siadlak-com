import Layout from "@/components/layout/Layout";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";

import {
  BookOpen,
  Brain,
  Clock,
  Diamond,
  GraduationCap,
  Heart,
  Lock,
  MapPin,
  MessageSquare,
  Mic2,
  Shield,
  Users,
  Video,
  AlertTriangle,
  
  Zap,
  
} from "@/lib/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import effectGif from "@/assets/I-know-kung-fu.gif";
import redPillGif from "@/assets/red-pill.gif";
import lifehackerzyLogo from "@/assets/lifehackerzy-logo.png";
import communityCallImage from "/lovable-uploads/lifehackerzy-community-call.png";
import keynoteImage from "/lovable-uploads/2b4bb1bb-6c2c-4c52-be4b-83bc755ec926.jpeg";


const communityBenefits = [
  {
    icon: Clock,
    title: "12:34 Daily Coaching",
    description: "Codzienne spotkania o stałej porze",
  },
  {
    icon: Mic2,
    title: "Wsparcie na Żywo",
    description: "Motywacja i inspiracja każdego dnia",
  },
  {
    icon: MessageSquare,
    title: "Forum Dyskusyjne",
    description: "180+ aktywnych wątków",
  },
  {
    icon: MapPin,
    title: "Globalna Społeczność",
    description: "Lifehackerzy z 8+ krajów",
  },
  {
    icon: Users,
    title: "Autentyczne Przyjaźnie",
    description: "Silne więzi i motywacja",
  },
  {
    icon: Heart,
    title: "Wzajemne Wsparcie",
    description: "Wymiana wiedzy i doświadczeń",
  },
  {
    icon: Lock,
    title: "Sekrety Lifehackerów",
    description: "Ukryte strategie efektywności",
  },
  {
    icon: GraduationCap,
    title: "Warsztaty Eksperckie",
    description: "Sesje o GTD, Notion, Apple/Windows",
  },
  {
    icon: Video,
    title: "50+ Protipów",
    description: "Wewnętrzne nagrania niedostępne publicznie",
  },
  {
    icon: Brain,
    title: "Mindset & Motywacja",
    description: "Materiały o odporności psychicznej",
  },
  {
    icon: Users,
    title: "Lekcje Co-Trenerów",
    description: "Eksperci od delegowania, automatyzacji, medytacji",
  },
  {
    icon: Diamond,
    title: "Toolbox Lifehackera",
    description: "Notatki i strategie społeczności",
  },
  {
    icon: BookOpen,
    title: "Wiedza w Pigułce",
    description: "Skondensowane notatki najlepszych",
  },
];

export default function Program() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);
  const [isFaqOverlayVisible, setIsFaqOverlayVisible] = useState(true);

  const handleUnlockAccess = () => {
    setIsOverlayVisible(false);
  };

  const handleShowEffect = () => {
    setIsFaqOverlayVisible(false);
  };

  const scrollToApps = () => {
    const appsSection = document.querySelector(".apps-section");
    appsSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Layout>
      {/* 1. Hero Section — bg-void-glow (DARK) */}
      <section className="relative py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 border border-white/10 bg-white/5 text-electric border-0 text-sm px-6 py-2">
              <Brain className="inline h-4 w-4 mr-2" />
              Mental Software Update
            </Badge>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-white leading-[1.1] tracking-[-0.02em]">
              Twój umysł to System Operacyjny.{" "}
              <span className="text-white">
                Czas zainstalować aplikacje, które naprawdę działają.
              </span>
            </h1>

            <div className="max-w-3xl mx-auto space-y-6 text-lg md:text-xl text-dim leading-relaxed text-left">
              <p>
                Wyobraź sobie, że twój umysł to najpotężniejszy system operacyjny na świecie.
                Tyle że przez lata instalowałeś w&nbsp;nim przypadkowe programy, wirusy myśli
                i&nbsp;nieaktualne sterowniki.
              </p>
              <p>
                Działa, ale nie tak, jak mógłby.
                Zacina się przy obciążeniu. Wymusza restart, gdy najbardziej potrzebujesz skupienia.
                I&nbsp;ciągle te powiadomienia: <em>„nie dasz rady"</em>, <em>„to zbyt trudne"</em>,
                <em> „odłóż to na jutro"</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LifeOS AppStore Header — bg-surface (DARK) */}
      <section className="py-12 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-white leading-[1.1] tracking-[-0.02em]">
              LifeOS{" "}
              <span className="text-electric">
                AppStore
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-dim mb-4">
              Aplikacje mentalnej transformacji
            </p>
            <div className="max-w-3xl mx-auto space-y-4 text-lg md:text-xl text-dim leading-relaxed">
              <p>
                To nie są kolejne kursy. To fundamentalne oprogramowanie do przeprogramowania tego,
                jak myślisz, działasz i&nbsp;czujesz.
              </p>
              <p>
                Każda aplikacja to 4–6 tygodni głębokiej instalacji. Nie uczę cię „jak być produktywnym" –
                instaluję w&nbsp;tobie system produktywności, który działa nawet wtedy, gdy nie masz motywacji.
                Nie mówię o&nbsp;„byciu silnym" – przeprogramowuję twój kod odporności psychicznej,
                neuron po neuronie.
              </p>
            </div>
          </div>

      {/* 3. App Cards #1-#4 — bg-void-glow (DARK) */}
          <div className="max-w-4xl mx-auto space-y-16">
            {/* App #1: Produktywność */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">🧠</span>
                <Badge variant="outline" className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]">
                  APLIKACJA #1: PRODUKTYWNOŚĆ
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Hakowanie Produktywności
              </h3>
              <p className="text-sm text-dim mb-6">
                Wersja: 2.0 · Zgodność: Wszystkie modele życia · Rozmiar: 6&nbsp;tygodni
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla osób, które testowały każdy system GTD,
                a&nbsp;ich kalendarz i&nbsp;tak wygląda jak pole bitwy.
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                Nie instalujesz kolejnego narzędzia. Instalujesz spójny system operacyjny
                dla twoich działań, który:
              </p>

              <ul className="space-y-2 mb-6 text-base md:text-lg text-dim">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Automatycznie blokuje rozpraszacze na poziomie neurobiologicznym</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Przekształca „muszę" w&nbsp;„chcę" bez używania siły woli</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Działa jak osobisty asystent AI w&nbsp;twojej głowie – tylko że to ty jesteś tym AI</span>
                </li>
              </ul>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10">
                <p className="text-base md:text-lg text-white/90 font-medium mb-2">
                  Co się zmienia po instalacji:
                </p>
                <div className="space-y-1 text-base text-dim">
                  <p>Zamiast zarządzać zadaniami – zarządzasz energią.</p>
                  <p>Zamiast walczyć z&nbsp;prokrastynacją – wykorzystujesz jej mechanizmy do napędzania działania.</p>
                  <p>Zamiast „być zajętym" – tworzysz przestrzeń na to, co naprawdę ważne.</p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/program/produktywnosc" className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block">
                  <CTAButton className="bg-gradient-locked-primary hover:opacity-90 text-white border-0 rounded">
                    Zainstaluj aplikację →
                  </CTAButton>
                </Link>
              </div>
            </div>

            {/* App #2: Odporność Psychiczna */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">🛡️</span>
                <Badge variant="outline" className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]">
                  APLIKACJA #2: ODPORNOŚĆ PSYCHICZNA
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Silna Głowa
              </h3>
              <p className="text-sm text-dim mb-6">
                Wersja: 3.1 · Zgodność: Wymagające środowiska · Rozmiar: 6&nbsp;tygodni
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla tych, którzy w&nbsp;stresie zamiast gasić pożar –
                dolewają do niego benzyny myśli.
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                To nie jest „kurs o&nbsp;stresie". To firewall dla twojego umysłu, który:
              </p>

              <ul className="space-y-2 mb-6 text-base md:text-lg text-dim">
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Blokuje mentalne ataki DDoS (przeciążenie decyzjami, presja, chaos)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Automatycznie wykrywa wzorce katastrofizacji i&nbsp;przeprogramowuje je w&nbsp;locie</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Tworzy redundantne połączenia neuralne, żebyś nawet przy awarii jednego obwodu działał dalej</span>
                </li>
              </ul>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10">
                <p className="text-base md:text-lg text-white/90 font-medium mb-2">
                  Co się zmienia po instalacji:
                </p>
                <div className="space-y-1 text-base text-dim">
                  <p>Presja zewnętrzna przestaje paraliżować – zaczyna skupiać.</p>
                  <p>Krytyka przestaje ranić – zaczyna informować.</p>
                  <p>Niepewność przestaje przerażać – zaczyna inspirować.</p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/program/odpornosc" className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block">
                  <CTAButton className="bg-gradient-locked-primary hover:opacity-90 text-white border-0 rounded">
                    Zainstaluj aplikację →
                  </CTAButton>
                </Link>
              </div>
            </div>

            {/* App #3: Uważność */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">🧘</span>
                <Badge variant="outline" className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]">
                  APLIKACJA #3: UWAŻNOŚĆ
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Uważne Życie
              </h3>
              <p className="text-sm text-dim mb-6">
                Wersja: 4.0 · Zgodność: Wszystkie stany świadomości · Rozmiar: 6&nbsp;tygodni
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla pasażerów własnego życia, którzy odkryli,
                że autopilot prowadzi donikąd.
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                To nie jest „medytacja". To przejmowanie kontroli nad kokpitem, które:
              </p>

              <ul className="space-y-2 mb-6 text-base md:text-lg text-dim">
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Zastępuje automatyczne reakcje świadomymi odpowiedziami</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Instaluje tryb „kapitan" zamiast trybu „pasażer"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Brain className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Tworzy bezpośrednie połączenie między twoimi wartościami a&nbsp;twoimi działaniami</span>
                </li>
              </ul>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10">
                <p className="text-base md:text-lg text-white/90 font-medium mb-2">
                  Co się zmienia po instalacji:
                </p>
                <div className="space-y-1 text-base text-dim">
                  <p>Życie przestaje ci się „przydarzać" – zaczynasz je świadomie nawigować.</p>
                  <p>Emocje przestają tobą miotać – zaczynają informować cię o&nbsp;tym, co ważne.</p>
                  <p>Każda chwila przestaje uciekać – zaczyna być twoim świadomym wyborem.</p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/program/uwaznosc" className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block">
                  <CTAButton className="bg-gradient-locked-primary hover:opacity-90 text-white border-0 rounded">
                    Zainstaluj aplikację →
                  </CTAButton>
                </Link>
              </div>
            </div>

            {/* App #4: Męskość */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03] p-8 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl" aria-hidden="true">👑</span>
                <Badge variant="outline" className="text-electric border-electric/30 text-xs font-bold uppercase tracking-[0.2em]">
                  APLIKACJA #4: MĘSKOŚĆ
                </Badge>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                Męski Kompas
              </h3>
              <p className="text-sm text-dim mb-6">
                Wersja: Rewolucja · Zgodność: Tylko dla gotowych na zmianę systemu · Rozmiar: 6&nbsp;tygodni
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                <strong className="text-white/90">Dla kogo:</strong> Dla mężczyzn, którzy czują, że grali według cudzych
                reguł w&nbsp;grę, której nie chcą wygrywać.
              </p>

              <p className="text-base md:text-lg text-dim mb-4 leading-relaxed">
                To nie jest „kurs o&nbsp;byciu mężczyzną". To pełna reinstalacja systemu tożsamości, która:
              </p>

              <ul className="space-y-2 mb-6 text-base md:text-lg text-dim">
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Kasuje stare programy „jak powinieneś" i&nbsp;instaluje „jak chcesz"</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Zamienia toksyczną siłę w&nbsp;autentyczną moc</span>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-electric shrink-0 mt-1" />
                  <span>Tworzy spójność między tym, kim jesteś w&nbsp;pracy, w&nbsp;domu i&nbsp;w&nbsp;swoim wnętrzu</span>
                </li>
              </ul>

              <div className="bg-white/[0.03] rounded-sm p-5 border border-white/10">
                <p className="text-base md:text-lg text-white/90 font-medium mb-2">
                  Co się zmienia po instalacji:
                </p>
                <div className="space-y-1 text-base text-dim">
                  <p>Siła przestaje być maską – staje się autentyczną obecnością.</p>
                  <p>Wrażliwość przestaje być słabością – staje się supermocą.</p>
                  <p>Relacje przestają być polem walki – stają się przestrzenią współtworzenia.</p>
                </div>
              </div>

              <div className="mt-6">
                <Link to="/program/meski-kompas" className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block">
                  <CTAButton className="bg-gradient-locked-primary hover:opacity-90 text-white border-0 rounded">
                    Zainstaluj aplikację →
                  </CTAButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Authority / Keynote — bg-surface (DARK) */}
      <section className="py-12 bg-void">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-sm overflow-hidden border border-white/10">
                <img
                  src={keynoteImage}
                  alt="Ludwik Siadlak presenting 'Hacker Umysłów' keynote at CAMPUS conference"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Not For Everyone - Condensed */}
            <div className="rounded-sm border border-white/10 bg-white/[0.03]">
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/[0.06] rounded-sm flex items-center justify-center shrink-0 border border-white/10">
                    <AlertTriangle className="h-6 w-6 text-electric" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white text-left">
                    To nie jest dla każdego
                  </h3>
                </div>

                <div className="text-left space-y-4 text-base text-dim">
                  <p>
                    <strong className="text-white/90">Nie dla:</strong> osób szukających kolejnych
                    tricków, "hurra motywacji" i szybkich rozwiązań bez
                    głębokiej pracy.
                  </p>

                  <p>
                    <strong className="text-electric">Dla:</strong> osób,
                    które testowały już wszystkie narzędzia, wiedzą że problem
                    jest głębiej i są gotowe przeprogramować sposób myślenia o
                    fundamentach.
                  </p>

                  <div className="bg-white/[0.03] rounded-sm p-4 border border-white/10 mt-4">
                    <p className="font-bold text-white">
                      Wybierz aplikację, której teraz potrzebujesz. Zostanie z
                      Tobą na zawsze.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CUT — dark → light */}
      <div className="the-cut" />

      {/* 5. FAQ: Efekt? — bg-diamond (LIGHT) */}
      <section className="py-16 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge
                variant="outline"
                className="mb-4 text-electric border-electric"
              >
                FAQ: EFEKT?
              </Badge>

              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-on-light leading-[1.1] tracking-[-0.02em]">
                Pokaż mi jak wygląda proces instalacji
              </h2>
            </div>

            {/* Effect Display with Overlay */}
            <div className="relative w-full max-w-2xl mx-auto rounded-sm overflow-hidden">
              {/* Privacy Overlay */}
              {isFaqOverlayVisible && (
                <div className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 animate-fade-in rounded-sm">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-electric/20 rounded-full flex items-center justify-center mx-auto">
                      <MessageSquare className="h-8 w-8 text-electric" />
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
                      className="bg-gradient-locked-primary hover:opacity-90"
                      size="lg"
                    >
                      Pokaż Efekt
                    </CTAButton>
                  </div>
                </div>
              )}

              {/* GIF Content */}
              <div className="bg-diamond p-8 rounded-sm border border-black/10">
                <img
                  src={effectGif}
                  alt="Mental transformation effect demonstration"
                  className="w-full rounded-sm"
                />
                <p className="text-xs text-on-light-dim mt-4 text-center">
                  Źródło: Matrix (1999), Warner Bros.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CUT — light → dark */}
      <div className="the-cut" />

      {/* 6. Lifehackerzy Community — UNCHANGED */}
      <section className="py-16 sm:py-20 bg-lifehacker-purple-dark">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto text-center">
            <div className="mb-8">
              <Badge className="mb-6 text-white border-0 px-6 py-2 text-base sm:text-lg font-bold shadow-lg bg-lifehacker-purple">
                💎 BEZCENNY DODATEK
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-6">
              <img
                src={lifehackerzyLogo}
                alt="Lifehackerzy"
                className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
              />
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight text-center sm:text-left">
                Dożywotni dostęp do społeczności{" "}
                <span className="text-lifehacker-purple">LIFEHACKERZY</span>
              </h2>
            </div>

            <p className="text-lg sm:text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ekskluzywna społeczność dostępna wyłącznie dla klientów moich
              programów rozwojowych.
            </p>

            <div className="bg-white/5 rounded-2xl p-6 sm:p-8 border-2 border-lifehacker-purple-border mb-12 max-w-3xl mx-auto backdrop-blur-sm">
              <p className="text-lg sm:text-xl font-semibold text-white mb-3">
                Instalując dowolną aplikację otrzymujesz dostęp{" "}
                <span className="text-lifehacker-purple">LIFETIME</span>
              </p>
              <p className="text-base sm:text-lg text-white/70 mb-4">
                P.S. To jedyny sposób, aby dołączyć do Lifehackerów.
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-2xl sm:text-3xl font-bold text-white mb-2">
                  Wartość: BEZCENNA
                </p>
                <p className="text-lg sm:text-xl font-semibold text-lifehacker-purple">
                  DOSTĘP LIFETIME. W cenie każdej aplikacji.
                </p>
              </div>
            </div>

            {/* Hero Benefits - Top 4 Most Important */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {communityBenefits.slice(0, 4).map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/15 transition-all duration-300 hover:-translate-y-2 group border-2 border-lifehacker-purple-border hover:border-lifehacker-purple hover:shadow-2xl"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-lifehacker-purple to-lifehacker-purple-light rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                    <benefit.icon className="h-10 w-10 text-white" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-lifehacker-purple">
                    {benefit.title}
                  </h3>

                  <p className="text-base text-white/90 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Community Call Social Proof Image */}
            <div className="max-w-5xl mx-auto mb-12">
              <div className="relative rounded-2xl overflow-hidden border-2 border-lifehacker-purple/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <img
                  src={communityCallImage}
                  alt="Lifehackerzy community video call - daily coaching sessions"
                  className="w-full h-auto"
                />
              </div>
            </div>

            {/* Secondary Benefits - Collapsible */}
            <details className="max-w-4xl mx-auto mb-12 group">
              <summary className="cursor-pointer text-lg font-bold text-lifehacker-purple hover:text-lifehacker-purple-light transition-colors text-center py-4 list-none flex items-center justify-center gap-2">
                <span>Zobacz wszystkie benefity (8 więcej)</span>
                <span className="transform group-open:rotate-180 transition-transform">
                  ▼
                </span>
              </summary>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 animate-fade-in">
                {communityBenefits.slice(4).map((benefit, index) => (
                  <div
                    key={index}
                    className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 group border border-lifehacker-purple-border-light hover:shadow-xl"
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-lifehacker-purple to-lifehacker-purple rounded-full flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform">
                      <benefit.icon className="h-8 w-8 text-white" />
                    </div>

                    <h3 className="text-lg font-bold mb-2 text-lifehacker-purple">
                      {benefit.title}
                    </h3>

                    <p className="text-sm text-white/80 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                ))}
              </div>
            </details>

            {/* Prominent CTA */}
            <div className="text-center mt-8">
              <CTAButton
                onClick={scrollToApps}
                size="xl"
                className="bg-gradient-to-r from-lifehacker-purple to-lifehacker-purple-light hover:from-lifehacker-purple-light hover:to-lifehacker-purple text-white font-bold px-12 py-6 text-xl border-0 shadow-2xl hover:shadow-3xl"
              >
                Dołącz do Lifehackerów
              </CTAButton>
              <p className="text-white/70 mt-4 text-sm">
                Dostęp lifetime w cenie każdej aplikacji
              </p>
            </div>

            {/* Jim Rohn Quote */}
            <div className="text-center mt-12">
              <div className="p-8 rounded-2xl max-w-4xl mx-auto bg-white/5 backdrop-blur-sm border border-lifehacker-purple-border-light">
                <h3 className="text-2xl font-bold mb-4 text-lifehacker-purple">
                  Społeczność dostępna wyłącznie dla moich Klientów
                </h3>
                <p className="text-xl text-white/90 mb-4 italic">
                  "Jesteśmy wypadkową pięciu osób, z którymi spędzamy najwięcej
                  czasu"
                </p>
                <p className="text-lg text-white/70">— Jim Rohn</p>
                <p className="text-lg text-white/80 mt-6">
                  Otocz się ludźmi, którzy tak jak Ty chcą od życia czegoś
                  więcej
                </p>
              </div>
            </div>

            {/* Lifehackerzy Branding */}
            <div className="text-center mt-12">
              <div className="p-8 rounded-2xl max-w-3xl mx-auto bg-white/5 backdrop-blur-sm">
                <p className="text-2xl font-bold text-white mb-3">
                  Hackerzy łamią ograniczenia systemów.
                </p>
                <p className="text-xl font-semibold text-lifehacker-purple">
                  Z nami złamiesz ograniczenia swojego życia.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE CUT — dark → light */}
      <div className="the-cut" />

      {/* 7. LifeOS: System Upgrade — bg-diamond (LIGHT) */}
      <section className="py-20 bg-diamond relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 rounded-sm border border-depth/20 bg-depth/5 text-depth border-0 px-6 py-2 text-lg font-medium">
                💎 LIFE OS UPGRADE
              </Badge>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-on-light leading-[1.1] tracking-[-0.02em]">
                Life OS: System Upgrade
              </h2>

              <p className="text-xl md:text-2xl font-medium mb-8 text-on-light-dim max-w-4xl mx-auto">
                Fundamentalna rekonstrukcja całego systemu operacyjnego. Nie
                aplikacja - cały nowy system.
              </p>
            </div>

            {/* FULL WIDTH PREMIUM CARD */}
            <div className="w-full">
              <div className="rounded-sm border border-black/10 bg-paper overflow-hidden relative">
                {/* Privacy Overlay */}
                {isOverlayVisible && (
                  <div className="absolute inset-0 bg-black/80 z-20 flex flex-col items-center justify-center text-center p-4 sm:p-8 transition-all duration-500 animate-fade-in rounded-sm">
                    <div className="mb-8">
                      <Shield className="h-20 w-20 text-depth mx-auto mb-6" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Ten program jest dla zaawansowanych
                      </h3>
                      <p className="text-white/80 text-lg sm:text-xl px-4 max-w-2xl mx-auto">
                        Rozpocznij swoją podróż od podstawowych aplikacji, a
                        później odblokuj dostęp do programu premium.
                      </p>
                    </div>

                    <div className="space-y-4 w-full max-w-md">
                      <CTAButton
                        onClick={handleUnlockAccess}
                        className="w-full bg-gradient-locked-primary hover:opacity-90"
                        size="lg"
                      >
                        Sprawdź dostępność
                      </CTAButton>

                      <Link to="/discovery" className="block focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded">
                        <CTAButton
                          variant="secondary"
                          className="w-full"
                          size="lg"
                        >
                          Zarezerwuj sesję Discovery
                        </CTAButton>
                      </Link>
                    </div>
                  </div>
                )}

                {/* MOBILE-OPTIMIZED PREMIUM CARD */}
                <div className="p-4 sm:p-6 md:p-8 lg:p-12 bg-paper border border-black/10 rounded-sm overflow-hidden">
                  <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-start lg:items-center">
                    {/* Left Column - Content */}
                    <div className="order-2 lg:order-1">
                      {/* Header - Mobile optimized */}
                      <div className="flex items-center gap-3 sm:gap-4 lg:gap-6 mb-6 min-w-0">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-locked-primary rounded-sm flex items-center justify-center flex-shrink-0">
                          <span className="text-white text-lg sm:text-2xl lg:text-3xl font-bold">
                            OS
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-on-light mb-1 sm:mb-2 break-words leading-tight">
                            System Upgrade
                          </h3>
                          <p className="text-on-light-dim text-sm sm:text-base lg:text-lg break-words">
                            Indywidualny Program Mentoringowy
                          </p>
                        </div>
                      </div>

                      {/* Rating - Mobile optimized */}
                      <div className="flex items-center gap-2 sm:gap-3 mb-6 flex-wrap">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span
                              key={i}
                              className="text-depth text-lg sm:text-xl lg:text-2xl"
                            >
                              ★
                            </span>
                          ))}
                        </div>
                        <span className="text-on-light-dim text-sm sm:text-base lg:text-lg">
                          5.0 • Ekskluzywny
                        </span>
                      </div>

                      {/* Description - Mobile optimized */}
                      <p className="text-on-light-dim mb-6 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed break-words">
                        Jak przejście z Windows 98 na macOS. 8 tygodni
                        intensywnej pracy, maksymalnie 5 osób jednocześnie. To
                        nie coaching - to przeprogramowanie całego systemu
                        operacyjnego w Twojej głowie. I w emocjach.
                      </p>

                      {/* Features - Mobile optimized */}
                      <div className="space-y-3 sm:space-y-4">
                        {[
                          "Indywidualna sesja diagnostyczna (3h)",
                          "8 x sesje mentoringowe 1:1 (90 min)",
                          "Dostęp LIFETIME do społeczności absolwentów",
                          "Materiały i narzędzia premium",
                          "24/7 wsparcie przez cały program",
                          "Gwarancja rezultatu lub zwrot pieniędzy",
                        ].map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 sm:gap-3 lg:gap-4 text-on-light-dim text-sm sm:text-base lg:text-lg min-w-0"
                          >
                            <div className="w-2 h-2 sm:w-3 sm:h-3 bg-depth rounded-full flex-shrink-0 mt-1.5 sm:mt-1"></div>
                            <span className="flex-1 min-w-0 break-words leading-relaxed">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Price & CTA - Mobile optimized */}
                    <div className="text-center lg:text-right order-1 lg:order-2">
                      {/* Price - Mobile friendly */}
                      <div className="mb-6 lg:mb-8">
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-depth mb-2 sm:mb-3 break-words leading-tight">
                          16 000 PLN
                        </div>
                        <div className="text-on-light-dim text-sm sm:text-base md:text-lg lg:text-xl break-words">
                          8 tygodni intensywnej transformacji
                        </div>
                        <div className="text-on-light-dim/60 text-xs sm:text-sm md:text-base lg:text-lg mt-1 sm:mt-2 break-words">
                          Masz firmę? 13 008,13 PLN netto
                        </div>
                      </div>

                      {/* Exclusivity Badge - Mobile optimized */}
                      <div className="rounded-sm border border-depth/20 bg-depth/5 p-4 sm:p-6 mb-6 lg:mb-8">
                        <div className="text-depth text-xl sm:text-2xl mb-2" aria-hidden="true">
                          👑
                        </div>
                        <p className="text-depth font-bold text-sm sm:text-base lg:text-lg break-words">
                          Prowadzę max 5 osób jednocześnie
                        </p>
                        <p className="text-on-light-dim text-xs sm:text-sm mt-2 break-words">
                          Najbardziej ekskluzywny program w portfolio
                        </p>
                      </div>

                      {/* CTA Button - Mobile responsive */}
                      <CTAButton
                        className="w-full lg:w-auto px-6 sm:px-8 lg:px-12 py-3 sm:py-4 text-base sm:text-lg lg:text-xl bg-gradient-locked-primary cursor-not-allowed opacity-60"
                        size="lg"
                        showArrow={false}
                      >
                        Obecnie niedostępne
                      </CTAButton>

                      <p className="text-on-light-dim text-xs sm:text-sm mt-3 sm:mt-4 break-words">
                        Następny nabór: Q4 2025
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA — bg-paper (LIGHT) */}
      <section className="relative py-16 bg-paper overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-on-light leading-[1.1] tracking-[-0.02em]">
              Gotowy na upgrade systemu?
            </h3>

            <p className="text-lg mb-8 text-on-light-dim">
              Nie potrzebujesz więcej informacji. Potrzebujesz upgrade'u
              systemu. Wybierz aplikację i zacznij transformację już dziś.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton
                size="lg"
                className="text-lg px-8 py-4 bg-gradient-locked-primary hover:opacity-90"
                onClick={() => {
                  const appsSection = document.getElementById("apps-section");
                  if (appsSection) {
                    appsSection.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                Wróć na górę i dołącz do nas
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Red Pill GIF — bg-diamond (LIGHT) */}
      <section className="py-8 pb-20 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <img
              src={redPillGif}
              alt="Red pill choice matrix scene"
              className="w-full rounded-sm"
            />
            <p className="text-xs text-on-light-dim mt-4 mb-12">
              Źródło: Matrix (1999), Warner Bros.
            </p>

            <Link to="/discovery" className="focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 rounded inline-block">
              <CTAButton
                size="xl"
                className="text-xl px-12 py-6 font-bold bg-gradient-locked-primary hover:opacity-90 text-white border-0"
              >
                Zarezerwuj sesję Discovery
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
