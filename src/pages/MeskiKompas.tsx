import Layout from "@/components/layout/Layout";
import { CTAButton } from "@/components/ui/cta-button";
import { GlassCard } from "@/components/ui/glass-card";
import { CheckCircle, AlertCircle, Users } from "@/lib/icons";
import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function MeskiKompas() {
  const [showFloatingCTA, setShowFloatingCTA] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // Show after 50% scroll, hide when reaching final CTA section (90% of page)
      const scrollPercentage = (scrollPosition + windowHeight) / documentHeight;
      setShowFloatingCTA(scrollPercentage > 0.5 && scrollPercentage < 0.9);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Layout>
      {/* Hero Section */}
      <section
        className="relative py-20 md:py-32 overflow-hidden"
        style={{ backgroundColor: "hsl(210, 45%, 12%)" }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/lovable-uploads/meski-kompas-hero.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight tracking-wider"
              style={{
                background: "linear-gradient(135deg, white 0%, #ECB614 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                textShadow: "0 0 20px hsl(45, 85%, 50% / 0.3)",
                filter: "drop-shadow(0 4px 8px hsl(0, 0%, 0% / 0.3))",
              }}
            >
              MĘSKI KOMPAS
            </h1>
            <h2
              className="text-xl md:text-2xl lg:text-3xl font-bold mb-6 leading-tight max-w-2xl mx-auto"
              style={{ color: "hsl(210, 20%, 95%)" }}
            >
              System Nawigacji Dla Mężczyzn, Którzy Chcą Skończyć Analizowaniem
              i Chcą Zacząć Działać
            </h2>
            <p
              className="text-lg md:text-xl font-medium mb-4 leading-relaxed max-w-2xl mx-auto"
              style={{ color: "hsl(210, 20%, 90%)" }}
            >
              <strong>
                5-tygodniowy intensywny program dla mężczyzn z analitycznym
                umysłem po 30-tce
              </strong>
            </p>
            <p
              className="text-base md:text-lg mb-8 leading-relaxed max-w-2xl mx-auto"
              style={{ color: "hsl(210, 20%, 85%)" }}
            >
              Odzyskaj kierunek, spokój i wewnętrzną spójność – bez duchowych
              obietnic, z konkretnym systemem i strukturą.
            </p>
            <div
              className="text-sm md:text-base font-medium mb-6"
              style={{ color: "hsl(45, 85%, 65%)" }}
            >
              Startujemy w październiku | Tylko 10 miejsc | Inwestycja: 497 zł
              (edycja pilotażowa)
            </div>
            <Link to="https://buy.siadlak.com/checkout/meski-kompas">
              <CTAButton
                variant="primary"
                size="xl"
                className="shadow-2xl hover:shadow-3xl font-bold !text-black border-0 px-4 sm:px-6 md:px-8 py-4 !bg-yellow-500 hover:!bg-yellow-600 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                aria-label="Zarezerwuj jedno z 4 pozostałych miejsc"
                showArrow
              >
                <span className="inline sm:hidden">Zarezerwuj miejsce</span>
                <span className="hidden sm:inline">
                  Zarezerwuj jedno z 4 pozostałych miejsc
                </span>
              </CTAButton>
            </Link>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(210, 20%, 94%) 100%)",
        }}
      >
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, hsl(0, 65%, 51%) 1px, transparent 0)",
            backgroundSize: "20px 20px",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-4xl md:text-5xl font-bold mb-6"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                Jeśli To Rozpoznajesz, Ten Program Jest Dla Ciebie
              </h2>
              <p
                className="text-xl mb-4"
                style={{ color: "hsl(210, 10%, 35%)" }}
              >
                Oto prawda, którą nikt ci nie powie wprost:
              </p>
              <p
                className="text-lg mb-2"
                style={{ color: "hsl(210, 10%, 40%)" }}
              >
                Masz analityczny umysł. To twoja supermoc. I twoje przekleństwo.
              </p>
              <p
                className="text-lg mb-2"
                style={{ color: "hsl(210, 10%, 40%)" }}
              >
                Widzisz 15 możliwych ścieżek w każdej sytuacji. Analizujesz
                wszystkie zmienne. Ważysz wszystkie opcje. I właśnie dlatego...
                nie robisz nic.
              </p>
              <p
                className="text-2xl font-bold mt-8"
                style={{ color: "hsl(0, 65%, 45%)" }}
              >
                Paraliż analityczny nie jest lenistwem. To nadmiar możliwości
                bez systemu wyboru.
              </p>
            </div>

            <div className="mb-12">
              <p
                className="text-xl font-semibold mb-6 text-center"
                style={{ color: "hsl(210, 20%, 20%)" }}
              >
                Rozpoznajesz te wzorce?
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  title: "Utknąłeś w pętli planowania",
                  desc: "kolejny system produktywności, kolejna aplikacja, kolejny kurs... ale życie wciąż toczy się siłą rozpędu",
                },
                {
                  title: "Robisz wszystko sam",
                  desc: 'bo "nikt nie zrobi tego lepiej", więc delegowanie zajmuje więcej czasu niż zrobienie tego samodzielnie',
                },
                {
                  title: "Pokazujesz tylko dopracowaną wersję siebie",
                  desc: "perfekcjonizm sprawia, że unikasz autentyczności, tracąc szansę na głębokie relacje z ludźmi",
                },
                {
                  title: "Nie masz jasnego kierunku",
                  desc: "radzisz sobie dzień po dniu, ale za rok/5 lat? Mgła",
                },
                {
                  title: "Twoje wartości i działania się rozminęły",
                  desc: "mówisz, że rodzina jest najważniejsza, ale kiedy ostatnio miałeś z nimi JAKOŚCIOWY czas?",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="animate-fade-in hover-scale group cursor-pointer"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <GlassCard
                    className="flex items-start gap-5 p-6 transition-all duration-300 group-hover:shadow-xl"
                    style={{
                      backgroundColor: "hsl(0, 0%, 99%)",
                      border: "2px solid hsl(0, 65%, 85%)",
                      borderRadius: "16px",
                      boxShadow:
                        "0 4px 6px -1px hsl(0, 65%, 51% / 0.1), 0 2px 4px -1px hsl(0, 65%, 51% / 0.06)",
                    }}
                  >
                    <div className="relative">
                      <div
                        className="rounded-full p-2 transition-colors duration-300"
                        style={{ backgroundColor: "hsl(0, 65%, 95%)" }}
                      >
                        <AlertCircle
                          className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                          size={24}
                          style={{ color: "hsl(0, 65%, 51%)" }}
                        />
                      </div>
                      {/* Subtle glow effect */}
                      <div
                        className="absolute inset-0 rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"
                        style={{
                          background:
                            "radial-gradient(circle, hsl(0, 65%, 51%) 0%, transparent 70%)",
                          transform: "scale(1.5)",
                        }}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <p
                        className="text-lg font-bold mb-1"
                        style={{ color: "hsl(210, 20%, 20%)" }}
                      >
                        ✗ {item.title}
                      </p>
                      <p
                        className="text-base leading-relaxed"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </GlassCard>
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <div
                className="inline-block p-8 rounded-2xl animate-fade-in"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(45, 85%, 50%) 0%, hsl(45, 85%, 45%) 100%)",
                  animationDelay: "500ms",
                }}
              >
                <p className="text-2xl font-extrabold text-white">
                  To nie jest twoja wina. To brak systemu operacyjnego.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(210, 20%, 95%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ color: "hsl(210, 20%, 8%)" }}
            >
              Problem Nie Jest w Tobie. Problem Jest w Tym, Czego Ci Brakuje.
            </h2>

            <div className="mb-12">
              <p
                className="text-xl mb-6"
                style={{ color: "hsl(210, 10%, 35%)" }}
              >
                Większość mężczyzn próbuje rozwiązać problem nawigacji życiowej
                przez:
              </p>
              <ul
                className="space-y-3 mb-8 text-lg"
                style={{ color: "hsl(210, 10%, 40%)" }}
              >
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>
                    Więcej motywacji (nie działa, bo spala się w 3 dni)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>
                    Więcej samodyscypliny (wyczerpuje się jak mięsień)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold">•</span>
                  <span>
                    Więcej informacji (masz już 47 otwartych zakładek)
                  </span>
                </li>
              </ul>
              <p
                className="text-2xl font-bold text-center mb-8"
                style={{ color: "hsl(0, 65%, 45%)" }}
              >
                To nie jest problem motywacyjny. To problem systemowy.
              </p>
            </div>

            <div className="mb-12">
              <p
                className="text-xl mb-6"
                style={{ color: "hsl(210, 10%, 35%)" }}
              >
                Potrzebujesz tego samego, czego potrzebuje każdy bezawaryjny
                system nawigacji:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    number: "1",
                    title: "Kompasu",
                    desc: "który pokazuje właściwy kierunek",
                  },
                  {
                    number: "2",
                    title: "Mapy",
                    desc: "która pokazuje przeszkody na drodze",
                  },
                  {
                    number: "3",
                    title: "Latarni",
                    desc: "która jest punktem odniesienia dla Twojego kierunku",
                  },
                ].map((item, index) => (
                  <GlassCard
                    key={index}
                    className="p-6 text-center"
                    style={{
                      backgroundColor: "hsl(0, 0%, 99%)",
                      border: "2px solid hsl(45, 85%, 50%)",
                    }}
                  >
                    <div
                      className="text-4xl font-bold mb-3"
                      style={{ color: "hsl(45, 85%, 50%)" }}
                    >
                      {item.number}
                    </div>
                    <h4
                      className="text-xl font-bold mb-2"
                      style={{ color: "hsl(210, 20%, 15%)" }}
                    >
                      {item.title}
                    </h4>
                    <p
                      className="text-base"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      {item.desc}
                    </p>
                  </GlassCard>
                ))}
              </div>
            </div>

            <div className="text-center space-y-4 mb-8">
              <p className="text-xl" style={{ color: "hsl(210, 10%, 40%)" }}>
                Nie potrzebujesz "odkryć siebie".
              </p>
              <p className="text-xl" style={{ color: "hsl(210, 10%, 40%)" }}>
                Nie potrzebujesz "uwierzyć w siebie".
              </p>
            </div>

            <div
              className="text-center p-8 rounded-2xl"
              style={{ backgroundColor: "hsl(210, 40%, 15%)" }}
            >
              <p className="text-2xl font-bold text-white">
                Potrzebujesz systemu, który działa niezależnie od tego, jak się
                czujesz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Equation Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{ backgroundColor: "hsl(210, 40%, 15%)" }}
      >
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
              Dlaczego Ten Program Działa (Gdy Inne Zawiodły)
            </h2>

            <p
              className="text-xl mb-6 text-center"
              style={{ color: "hsl(210, 20%, 90%)" }}
            >
              Pozwól, że pokażę Ci coś, czego większość programów rozwojowych
              nie rozumie.
            </p>

            <p
              className="text-lg mb-8 text-center"
              style={{ color: "hsl(210, 20%, 85%)" }}
            >
              Istnieje równanie wartości, które determinuje, czy cokolwiek
              kupisz i czy z tego skorzystasz:
            </p>

            {/* Value Equation Formula */}
            <div
              className="mb-12 p-8 rounded-2xl text-center"
              style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
            >
              <p
                className="text-2xl md:text-3xl font-bold mb-4"
                style={{ color: "hsl(210, 40%, 15%)" }}
              >
                WARTOŚĆ =
              </p>
              <p
                className="text-xl md:text-2xl font-bold mb-2"
                style={{ color: "hsl(210, 40%, 15%)" }}
              >
                (Wymarzony Rezultat × Prawdopodobieństwo Sukcesu)
              </p>
              <p
                className="text-3xl font-bold mb-2"
                style={{ color: "hsl(210, 40%, 15%)" }}
              >
                /
              </p>
              <p
                className="text-xl md:text-2xl font-bold"
                style={{ color: "hsl(210, 40%, 15%)" }}
              >
                (Opóźnienie Czasowe × Wysiłek i Poświęcenie)
              </p>
            </div>

            <p className="text-xl mb-8 text-white font-semibold text-center">
              Większość programów rozwoju osobistego zawodzi, bo:
            </p>

            {/* Failure Points */}
            <div className="space-y-4 mb-12">
              {[
                {
                  title: "Obiecują mgliste rezultaty",
                  example: '"odkryjesz swój potencjał"',
                  problem: "Ty nie wiesz, co konkretnie dostaniesz",
                  equation: "Wymarzony Rezultat = niejasny = niska wartość",
                },
                {
                  title: "Nie dajesz im wiary",
                  example: '"może zadziała, może nie"',
                  problem: "Brak konkretnych kroków",
                  equation:
                    "Prawdopodobieństwo Sukcesu = niska = niska wartość",
                },
                {
                  title: "Trwają w nieskończoność",
                  example: '"to proces, potrzebujesz lat"',
                  problem: "Nie wiesz, kiedy zobaczysz efekty",
                  equation: "Opóźnienie Czasowe = wysokie = niska wartość",
                },
                {
                  title: "Wymagają ogromnego wysiłku",
                  example: '"musisz zmienić całe życie"',
                  problem: "Przytłaczające zaangażowanie",
                  equation: "Wysiłek i Poświęcenie = wysokie = niska wartość",
                },
              ].map((item, index) => (
                <GlassCard
                  key={index}
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(210, 30%, 20%)",
                    border: "2px solid hsl(0, 65%, 51%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(0, 65%, 51%)" }}
                    >
                      ❌
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2 text-white">
                        {item.title}
                      </h4>
                      <p
                        className="text-base mb-2 italic"
                        style={{ color: "hsl(210, 20%, 80%)" }}
                      >
                        {item.example}
                      </p>
                      <p
                        className="text-base mb-2"
                        style={{ color: "hsl(210, 20%, 85%)" }}
                      >
                        • {item.problem}
                      </p>
                      <p
                        className="text-sm font-semibold"
                        style={{ color: "hsl(0, 65%, 60%)" }}
                      >
                        {item.equation}
                      </p>
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>

            <div
              className="text-center p-8 rounded-2xl"
              style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
            >
              <p
                className="text-2xl md:text-3xl font-extrabold"
                style={{ color: "hsl(210, 40%, 15%)" }}
              >
                Męski Kompas robi dokładnie odwrotnie. Maksymalizuje górę
                równania, minimalizuje dół.
              </p>
              <p
                className="text-xl mt-4 font-bold"
                style={{ color: "hsl(210, 40%, 15%)" }}
              >
                Oto jak:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - 4 Value Maximizers */}
      <section
        className="py-20"
        style={{
          background:
            "linear-gradient(135deg, hsl(0, 0%, 97%) 0%, hsl(210, 20%, 94%) 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-16">
            {/* 1. Maximum Result */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "hsl(120, 60%, 40%)" }}
                >
                  ✅
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  MAKSYMALNY REZULTAT (Wiesz Dokładnie, Co Dostajesz)
                </h3>
              </div>

              <p
                className="text-xl font-bold mb-6"
                style={{ color: "hsl(210, 20%, 20%)" }}
              >
                Po 5 tygodniach wyjdziesz z:
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Własnym Kompasem Wartości",
                    points: [
                      "Lista 3 priorytetów w każdej domenie życia (Work/Energy/Love)",
                      "Narzędzie decyzyjne: każdy wybór testowany względem kompasu",
                      'Koniec zgadywania "co jest dla mnie ważne"',
                    ],
                  },
                  {
                    title: "Osobistym Systemem Operacyjnym",
                    points: [
                      "Tygodniowa pętla planowania/działania/przeglądu (która faktycznie działa)",
                      "Trigger System: automatyczne reakcje na powtarzalne sytuacje",
                      'Decision Playbook: Twoje własne zasady w świecie decyzji (kiedy mówić "tak", kiedy "nie", co priorytetyzować)',
                    ],
                  },
                  {
                    title: "Framework Granic i Delegowania",
                    points: [
                      "Kompas 3W (Who/What/When) - wiesz, co delegować",
                      'Ćwiczenie "NIE" - umiesz odmawiać bez poczucia winy',
                      "Odzyskane minimum 5-10 godzin tygodniowo",
                    ],
                  },
                  {
                    title: "Upgrade Relacji",
                    points: [
                      "Krąg 5: mapa najważniejszych relacji + plan ich rozwoju",
                      "Framework trudnych rozmów (testowalny, powtarzalny)",
                      "Autentyczność bez wypalania mostów",
                    ],
                  },
                  {
                    title: "90-Dniowy Plan Działania",
                    points: [
                      "Konkretne cele z krokami",
                      "Quarterly Review System (korekta kursu co 90 dni)",
                      "GPS na życie, który działa długo po programie",
                    ],
                  },
                ].map((item, idx) => (
                  <GlassCard
                    key={idx}
                    className="p-6"
                    style={{
                      backgroundColor: "hsl(0, 0%, 99%)",
                      border: "2px solid hsl(120, 60%, 40%)",
                    }}
                  >
                    <h4
                      className="text-xl font-bold mb-3"
                      style={{ color: "hsl(120, 60%, 30%)" }}
                    >
                      {idx + 1}. {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.points.map((point, pidx) => (
                        <li
                          key={pidx}
                          className="flex items-start gap-2 text-base"
                          style={{ color: "hsl(210, 10%, 40%)" }}
                        >
                          <span className="text-green-600 mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>

              <div
                className="mt-8 p-6 rounded-xl text-center"
                style={{
                  backgroundColor: "hsl(120, 60%, 95%)",
                  border: "2px solid hsl(120, 60%, 40%)",
                }}
              >
                <p
                  className="text-xl font-bold"
                  style={{ color: "hsl(120, 60%, 20%)" }}
                >
                  To nie są abstrakcje. To konkretne dokumenty, które wypełnisz
                  podczas programu.
                </p>
              </div>
            </div>

            {/* 2. Maximum Probability */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "hsl(210, 80%, 50%)" }}
                >
                  ✅
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  MAKSYMALNE PRAWDOPODOBIEŃSTWO SUKCESU (Wiesz, Że To Zadziała)
                </h3>
              </div>

              <p
                className="text-xl font-bold mb-6"
                style={{ color: "hsl(210, 20%, 20%)" }}
              >
                Dlaczego możesz być pewien rezultatów:
              </p>

              <div className="space-y-4">
                {[
                  {
                    number: "1",
                    title: "Metodyka dla analityków",
                    points: [
                      'Nie "odkrywanie siebie" - inżynieria życia',
                      "Frameworki logiczne, testowalne i powtarzalne",
                      "Każde narzędzie ma INPUT → PROCES → OUTPUT",
                    ],
                  },
                  {
                    number: "2",
                    title: "Dwóch prowadzących = dwie perspektywy",
                    points: [
                      "Ludwik C. Siadlak: Emocje, inspiracja, głębia - zapala iskrę",
                      "Mateusz Lizak: Konkret, warsztat, ziemia - dostarcza narzędzi",
                      "Wielka wizja + realne działanie w jednym programie",
                    ],
                  },
                  {
                    number: "3",
                    title: "Mała grupa = realne accountability",
                    points: [
                      "Tylko 10 mężczyzn (nie 100)",
                      "Raportowanie postępów w grupie",
                      'Społeczna presja (która faktycznie działa), ale bez presji "tłumu"',
                    ],
                  },
                  {
                    number: "4",
                    title: "System przetestowany na własnej skórze",
                    points: [
                      "Te narzędzia zostały wypróbowane w okopach przez facetów takich jak ty",
                      "Nie teoria z książki - praktyka z życia",
                      'No-bullshit approach: tylko to, co faktycznie działa (a nie co się "klika")',
                    ],
                  },
                  {
                    number: "5",
                    title:
                      "Każdy tydzień = konkretne wyzwanie = Twój mierzalny sukces",
                    points: [
                      'Struktura, która wymusza działanie (nie "jeśli znajdziesz czas")',
                      "Raportowanie postępów w grupie (społeczna presja robi robotę)",
                      "Widzisz, kto wykonuje wyzwania, kto nie - to motywuje bardziej niż cokolwiek",
                    ],
                  },
                ].map((item, idx) => (
                  <GlassCard
                    key={idx}
                    className="p-6"
                    style={{
                      backgroundColor: "hsl(210, 90%, 98%)",
                      border: "1px solid hsl(210, 60%, 70%)",
                    }}
                  >
                    <h4
                      className="text-lg font-bold mb-3"
                      style={{ color: "hsl(210, 80%, 30%)" }}
                    >
                      {item.number}. {item.title}
                    </h4>
                    <ul className="space-y-2">
                      {item.points.map((point, pidx) => (
                        <li
                          key={pidx}
                          className="flex items-start gap-2 text-base"
                          style={{ color: "hsl(210, 10%, 40%)" }}
                        >
                          <span style={{ color: "hsl(210, 80%, 50%)" }}>•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </GlassCard>
                ))}
              </div>
            </div>

            {/* 3. Minimum Time Delay */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "hsl(280, 70%, 50%)" }}
                >
                  ✅
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  MINIMALNE OPÓŹNIENIE CZASOWE (Zobaczysz Efekty od Pierwszego
                  Tygodnia)
                </h3>
              </div>

              <p
                className="text-lg mb-6"
                style={{ color: "hsl(210, 10%, 35%)" }}
              >
                Większość programów mówi: "bądź cierpliwy, to proces."
                <br />
                Męski Kompas działa odwrotnie: każdy tydzień = konkretny
                breakthrough.
              </p>

              <div className="space-y-4">
                {[
                  {
                    week: "TYDZIEŃ 1 – ODPOWIEDZIALNOŚĆ",
                    challenge: "Daily Ownership",
                    result:
                      "Przestajesz czuć się ofiarą. Widzisz, gdzie masz realną władzę nad życiem.",
                    time: "7 dni",
                  },
                  {
                    week: "TYDZIEŃ 2 – STANOWCZOŚĆ",
                    challenge: "One Big Call",
                    result:
                      "Odkrywasz moc sprawczości. Życie znów jest w Twoich rękach.",
                    time: "14 dni",
                  },
                  {
                    week: "TYDZIEŃ 3 – GRANICE",
                    challenge: "Boundary Declaration",
                    result:
                      "Odzyskujesz przestrzeń, czas, energię. Ludzie zaczynają Cię bardziej szanować.",
                    time: "21 dni",
                  },
                  {
                    week: "TYDZIEŃ 4 – PEWNOŚĆ SIEBIE",
                    challenge: "Voice of Truth",
                    result:
                      "Przestajesz szukać walidacji na zewnątrz. Masz wewnętrzny punkt odniesienia.",
                    time: "28 dni",
                  },
                  {
                    week: "TYDZIEŃ 5 – WRAŻLIWOŚĆ I SKUTECZNOŚĆ",
                    challenge: "Emotional Truth + Curiosity Sprint",
                    result:
                      "Stajesz się kompletnym mężczyzną - czującym i działającym. Silnym i wrażliwym.",
                    time: "35 dni",
                  },
                ].map((item, idx) => (
                  <GlassCard
                    key={idx}
                    className="p-6"
                    style={{
                      backgroundColor: "hsl(280, 80%, 98%)",
                      border: "1px solid hsl(280, 60%, 70%)",
                    }}
                  >
                    <h4
                      className="text-lg font-bold mb-2"
                      style={{ color: "hsl(280, 70%, 30%)" }}
                    >
                      {item.week}
                    </h4>
                    <p
                      className="text-sm mb-2 italic"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Wyzwanie: "{item.challenge}"
                    </p>
                    <p
                      className="text-base mb-2"
                      style={{ color: "hsl(210, 10%, 30%)" }}
                    >
                      Rezultat: {item.result}
                    </p>
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "hsl(280, 70%, 40%)" }}
                    >
                      Czas do efektu: {item.time}
                    </p>
                  </GlassCard>
                ))}
              </div>

              <div
                className="mt-8 p-6 rounded-xl text-center"
                style={{
                  backgroundColor: "hsl(280, 70%, 95%)",
                  border: "2px solid hsl(280, 70%, 50%)",
                }}
              >
                <p
                  className="text-xl font-bold"
                  style={{ color: "hsl(280, 70%, 20%)" }}
                >
                  Nie musisz czekać miesięcy. Nie musisz "pracować nad sobą" w
                  nieskończoność.
                  <br />5 tygodni. 5 przełomów. System gotowy.
                </p>
              </div>
            </div>

            {/* 4. Minimum Effort */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div
                  className="text-5xl font-bold"
                  style={{ color: "hsl(45, 85%, 50%)" }}
                >
                  ✅
                </div>
                <h3
                  className="text-3xl md:text-4xl font-bold"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  MINIMALNY WYSIŁEK I POŚWIĘCENIE (Nie Musisz Przebudowywać
                  Całego Życia)
                </h3>
              </div>

              <div className="mb-8">
                <p
                  className="text-xl font-bold mb-4"
                  style={{ color: "hsl(0, 65%, 45%)" }}
                >
                  Czego NIE musisz robić:
                </p>
                <ul className="space-y-2">
                  {[
                    "Godziny czytania teorii",
                    "Niekończące się webinary",
                    "Przepisywanie całego życia od zera",
                    "Medytacja 2h dziennie",
                    "Bycie online 24/7 na grupce na Facebooku",
                  ].map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-lg"
                      style={{ color: "hsl(210, 10%, 40%)" }}
                    >
                      <span className="text-red-500 font-bold">❌</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className="text-xl font-bold mb-4"
                  style={{ color: "hsl(120, 60%, 35%)" }}
                >
                  Czego rzeczywiście potrzebujesz:
                </p>
                <div className="space-y-4">
                  {[
                    {
                      title: "5 tygodni (nie 6 miesięcy)",
                      desc: "Jeden intensywny sprint, zamiast niekończącego się maratonu. Widzisz światło w tunelu od dnia 1",
                    },
                    {
                      title:
                        "5 konkretnych workbooków (nie 200 stron akademickiej teorii)",
                      desc: "Konkretne ćwiczenia do zrealizowania. Każdy workbook to czas REALNEJ pracy.",
                    },
                    {
                      title: "5 Audio/Video wspomagaczy",
                      desc: "Nie 2-godzinne webinary. Krótkie, wartościowe, do punktu",
                    },
                    {
                      title: "3 sesje na żywo (nie 20)",
                      desc: "Sesja startowa: orientacja i kick-off. Sesja tematyczna: stawianie granic. Sesja końcowa: mastermind i podsumowanie. Reszta to Twoja praca (jak ma być)",
                    },
                    {
                      title: "Zamknięte kanały Twojej edycji (na Discordzie)",
                      desc: "Zamknięta grupa 10 osób, które poznasz w swojej edycji. Piszesz kiedy potrzebujesz. Dostęp do forum wszystkich edycji",
                    },
                    {
                      title: "Budowanie nawyków, nie jednorazowe zmiany",
                      desc: 'Małe kroki, które sumują się. Nie "zmień całe życie jutro". Systemowe podejście > siła woli',
                    },
                  ].map((item, idx) => (
                    <GlassCard
                      key={idx}
                      className="p-4"
                      style={{
                        backgroundColor: "hsl(120, 70%, 98%)",
                        border: "1px solid hsl(120, 50%, 70%)",
                      }}
                    >
                      <p
                        className="font-bold mb-2"
                        style={{ color: "hsl(120, 60%, 30%)" }}
                      >
                        ✅ {item.title}
                      </p>
                      <p
                        className="text-sm"
                        style={{ color: "hsl(210, 10%, 40%)" }}
                      >
                        {item.desc}
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>

              <div
                className="mt-8 p-6 rounded-xl text-center"
                style={{
                  backgroundColor: "hsl(45, 85%, 95%)",
                  border: "2px solid hsl(45, 85%, 50%)",
                }}
              >
                <p
                  className="text-xl font-bold mb-2"
                  style={{ color: "hsl(45, 85%, 20%)" }}
                >
                  Wymagania czasowe: ~5-7 godzin tygodniowo przez 5 tygodni
                </p>
                <p className="text-lg" style={{ color: "hsl(45, 85%, 30%)" }}>
                  To mniej niż Twoje scrollowanie social media. I daje Ci system
                  na lata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Detailed Breakdown */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(210, 40%, 15%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center text-white">
              Co Dokładnie Otrzymujesz
            </h2>
            <p
              className="text-2xl mb-12 text-center"
              style={{ color: "hsl(210, 20%, 85%)" }}
            >
              SZKIELET PROGRAMU: 5-Tygodniowy System Nawigacji
            </p>

            {/* Week 1 - Detailed */}
            <div className="mb-16">
              <div
                className="mb-8 p-6 rounded-xl"
                style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
              >
                <h3
                  className="text-3xl font-bold mb-2"
                  style={{ color: "hsl(210, 40%, 15%)" }}
                >
                  TYDZIEŃ 1: ODPOWIEDZIALNOŚĆ
                </h3>
                <p
                  className="text-xl font-semibold"
                  style={{ color: "hsl(210, 40%, 15%)" }}
                >
                  "Efekt: FUNDAMENTY MĘSKOŚCI"
                </p>
              </div>

              <div className="space-y-6">
                {/* Problem */}
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(210, 30%, 20%)",
                    border: "2px solid hsl(0, 65%, 51%)",
                  }}
                >
                  <h4 className="text-xl font-bold mb-3 text-white">
                    Problem do rozwiązania:
                  </h4>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(210, 20%, 85%)" }}
                  >
                    Czujesz, że życie "przydarza się" Tobie, a nie jest tworzone
                    przez Ciebie, tak jak chcesz. Reagujesz zamiast tworzyć.
                    Obwiniasz okoliczności, innych ludzi, brak czasu. To
                    wygodne. Ale to Cię wypala.
                  </p>
                </GlassCard>

                {/* Truth */}
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(210, 30%, 20%)",
                    border: "2px solid hsl(45, 85%, 50%)",
                  }}
                >
                  <h4 className="text-xl font-bold mb-3 text-white">
                    Prawda, której nikt Ci nie powie:
                  </h4>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(210, 20%, 85%)" }}
                  >
                    Mężczyzna bez odpowiedzialności to chłopak w ciele
                    dorosłego. Nie chodzi o to, że WSZYSTKO jest Twoją winą.
                    Chodzi o to, że WSZYSTKO jest w Twoim zakresie wpływu. Albo
                    bierzesz za to odpowiedzialność, albo dajesz władzę nad
                    swoim życiem komuś innemu.
                  </p>
                </GlassCard>

                {/* Tool */}
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(120, 40%, 20%)",
                    border: "2px solid hsl(120, 60%, 40%)",
                  }}
                >
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(120, 60%, 70%)" }}
                  >
                    Narzędzie, które dostajesz:
                  </h4>
                  <h5 className="text-lg font-bold mb-3 text-white">
                    DEKLARACJA MĘSKIEJ ODPOWIEDZIALNOŚCI
                  </h5>
                  <ul
                    className="space-y-2 text-base"
                    style={{ color: "hsl(120, 40%, 85%)" }}
                  >
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>
                        Lista 3 priorytetów w każdej domenie życia
                        (Work/Energy/Love)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>
                        Dla każdego obszaru odpowiadasz: "Za co dokładnie biorę
                        odpowiedzialność?"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>
                        Nie abstrakcje ("za swoją przyszłość") - konkrety ("za
                        to, że jem fast food 4x w tygodniu")
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>Workbook z przykładami do wypełnienia</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-400">•</span>
                      <span>
                        To nie jest lista "co powinienem" - to lista "co JEST w
                        moich rękach"
                      </span>
                    </li>
                  </ul>
                </GlassCard>

                {/* Why it Works */}
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(210, 30%, 20%)",
                    border: "2px solid hsl(210, 80%, 50%)",
                  }}
                >
                  <h4 className="text-xl font-bold mb-3 text-white">
                    Dlaczego to działa:
                  </h4>
                  <p
                    className="text-base leading-relaxed"
                    style={{ color: "hsl(210, 20%, 85%)" }}
                  >
                    Kiedy nazwiesz konkretnie, za co bierzesz odpowiedzialność,
                    Twój mózg przestaje szukać wymówek i zaczyna szukać
                    rozwiązań. To nie jest motywacja. To zmiana systemu
                    operacyjnego.
                  </p>
                </GlassCard>

                {/* Weekly Challenge */}
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(280, 40%, 25%)",
                    border: "2px solid hsl(280, 70%, 50%)",
                  }}
                >
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(280, 70%, 70%)" }}
                  >
                    WYZWANIE TYGODNIA: "Daily Ownership"
                  </h4>
                  <ul
                    className="space-y-3 text-base"
                    style={{ color: "hsl(280, 30%, 85%)" }}
                  >
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>
                        Każdego dnia przez 7 dni zapisz JEDNO zdanie
                        odpowiadające na pytanie: "Za co DZISIAJ biorę
                        odpowiedzialność?"
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>
                        Nie ogólniki - tylko konkret (np. "Biorę
                        odpowiedzialność za to, że nie odezwałem się do żony
                        przez 4 godziny wieczorem, bo siedziałem w telefonie")
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>
                        Daily checkin na Discordzie (accountability działa)
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-purple-400">•</span>
                      <span>
                        Bonus: zauważ, jak zmienia się Twoje poczucie kontroli
                        nad życiem. Twoim życiem.
                      </span>
                    </li>
                  </ul>
                </GlassCard>

                {/* Result */}
                <div
                  className="p-6 rounded-xl text-center"
                  style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
                >
                  <h4
                    className="text-xl font-bold mb-3"
                    style={{ color: "hsl(210, 40%, 15%)" }}
                  >
                    REZULTAT:
                  </h4>
                  <p
                    className="text-lg leading-relaxed"
                    style={{ color: "hsl(210, 40%, 15%)" }}
                  >
                    Po tygodniu przestajesz czuć się ofiarą okoliczności.
                    Zaczynasz widzieć, gdzie masz realną władzę. To
                    fundamentalny shift - wszystko inne będzie budowane na tym.
                  </p>
                </div>
              </div>
            </div>

            {/* Weeks 2-5 - Condensed View */}
            <div className="space-y-12">
              {[
                {
                  week: "TYDZIEŃ 2: STANOWCZOŚĆ",
                  effect: "MOC DECYZJI",
                  problem:
                    'Analiza paraliżuje. Masz 10 opcji w każdej sytuacji, więc nie wybierasz żadnej. "Poczekam, aż będę miał więcej informacji." "Muszę to jeszcze przemyśleć." "Co jeśli wybiorę źle?" Tymczasem czas leci, możliwości znikają, a Ty wciąż "zastanawiasz się".',
                  truth:
                    'Stanowczość to nie "zawsze mieć rację". To umiejętność podjęcia decyzji z niepełnymi danymi i życia z konsekwencjami. Mężczyzna, który nie potrafi decydować, oddaje stery życia przypadkowi. Lepiej podjąć decyzję i ją skorygować, niż nie podjąć żadnej i dryfować.',
                  tool: "DECYZJE 3-3-3",
                  toolPoints: [
                    "Framework mikrodecyzyjności: 3 decyzje dziennie przez 3 dni, każda w max 3 minuty",
                    "Decision matrix: Ważne/Nieważne × Odwracalne/Nieodwracalne",
                    "80% decyzji życiowych to decyzje odwracalne - przestań traktować je jak życie lub śmierć",
                    "Timer: max 3 minuty na decyzję (fizyczny timer, serio)",
                    "Decision log: zapisujesz decyzję, rezultat, co się nauczyłeś",
                  ],
                  why: "Twój mózg uczy się decydować przez praktykę, nie przez myślenie o decydowaniu. Im więcej małych decyzji podejmiesz szybko, tym łatwiej przychodzą Ci duże. To trening mięśnia decyzyjnego.",
                  challenge: "One Big Call",
                  challengeDesc:
                    "Podjąć JEDNĄ decyzję w obszarze, w którym zazwyczaj zwlekasz. Praca: projekt, który odkładasz / Relacja: rozmowa, której unikasz / Ciało: zmiana, którą planujesz od miesięcy. Użyj frameworku 3-3-3: max 3 minuty na podjęcie decyzji. Nie musi być perfekcyjna - ma być PODJĘTA.",
                  result:
                    'Odkryjesz, że 90% rzeczy, których się obawiasz, nigdy się nie dzieje. Poczujesz moc sprawczości - życie znów jest w twoich rękach. Ludzie wokół Ciebie przestaną pytać "co myślisz?" i zaczną pytać "co robimy?", bo będą widzieć w Tobie lidera.',
                },
                {
                  week: "TYDZIEŃ 3: GRANICE",
                  effect: "ODZYSKANIE PRZESTRZENI",
                  problem:
                    'Jesteś dostępny dla wszystkich - oprócz siebie. Każdy może zabrać Twój czas, energię, uwagę. Mówisz "tak", gdy myślisz "nie". Robisz rzeczy dla innych, bo "nie chcesz ranić uczuć". Tymczasem ranisz siebie każdego dnia.',
                  truth:
                    'Granice to nie egoizm. Granice to komunikat: "to jest moja przestrzeń, a to twoja". Mężczyzna bez granic to dom bez ścian - każdy wchodzi, kiedy chce, bierze, co chce, zostawia, co chce. I dziwimy się, że czujemy się wykorzystani.',
                  tool: "MAPA OSOBISTYCH GRANIC",
                  toolPoints: [
                    "Identyfikacja obszarów w których Twoje granice są przekraczane",
                    "Konkretnie: kto? w jakiej sytuacji? dlaczego to toleruję?",
                    'Framework: "Co jest OK" vs "Co NIE jest OK"',
                    "Gotowe skrypty komunikowania swoich granic (5 praktycznych scenariuszy)",
                  ],
                  why: "Nie możesz chronić granic, których nie znasz. Ta mapa pokazuje, gdzie tracisz siebie. A kiedy to zobaczysz czarno na białym, nie możesz już udawać, że tego nie widzisz.",
                  challenge: "Boundary Declaration",
                  challengeDesc:
                    "Jedna rozmowa lub decyzja, w której postawisz lub wyrazisz swoją granicę jasno i spokojnie. Nie agresywnie, nie przepraszając - po prostu jasno i czytelnie. Może być z rodziną, w pracy, w przyjaźni - tam gdzie wiesz, że granica jest przekraczana.",
                  result:
                    'Pierwszy raz od długiego czasu poczujesz, że masz prawo do własnej przestrzeni. Odzyskasz czas i energię, które dotąd szły "na zewnątrz". Ludzie wokół Ciebie zaczną Cię szanować bardziej (nie mniej - BARDZIEJ).',
                },
                {
                  week: "TYDZIEŃ 4: PEWNOŚĆ SIEBIE",
                  effect: "WEWNĘTRZNA STABILNOŚĆ",
                  problem:
                    'Szukasz potwierdzenia na zewnątrz. Dobra decyzja to ta, którą inni pochwalą. Sukces to więcej pieniędzy, więcej uznania, więcej "lajków". Tymczasem w środku pustka, bo nie wiesz, kim JESTEŚ, kiedy nikt nie patrzy.',
                  truth:
                    'Pewność siebie to nie "czuć się pewnie". To WIEDZIEĆ, kim jesteś i dokąd idziesz - niezależnie od tego, co czujesz w danym momencie. Mężczyzna z pewnością siebie nie potrzebuje aplauzu, żeby wiedzieć, że idzie właściwą drogą. Pewność to kompas wewnętrzny, a nie zewnętrzny barometr nastrojów.',
                  tool: "LUSTRO TOŻSAMOŚCI",
                  toolPoints: [
                    'Codzienne 2-minutowe ćwiczenie werbalizacji: "Kim jestem" i "Kim się staję"',
                    'Nie afirmacje ("jestem pewny siebie") - FAKTY ("jestem facetem, który dotrzymuje słowa danego sobie")',
                    "Framework: 3 tożsamości (Teraz / Za 90 dni / Za rok)",
                    "Lista 10 pytań budujących tożsamość (odpowiadasz każdego dnia na 1-2)",
                    'Przykład: "Mogę sobie ufać, bo..." (wypełniasz konkretnymi przykładami z życia)',
                  ],
                  why: 'Tożsamość buduje się przez powtarzanie, nie przez puste "afirmacje". Mówisz to na głos każdego dnia, Twój mózg zaczyna to widzieć jako prawdę. To nie manipulacja - to zsynchronizowanie tego, kim JESTEŚ z tym, jak się o sobie MYŚLISZ.',
                  challenge: "Voice of Truth",
                  challengeDesc:
                    'Nagraj (dla siebie) 30-sekundową głosówkę odpowiadającą na pytanie: "Dlaczego mogę ufać sobie jako facetowi?" Konkretne przykłady z życia (nie teoria). Minimum 3 sytuacje, kiedy dotrzymałeś słowa / zrobiłeś trudną rzecz / postawiłeś na swoim. Słuchaj tego nagrania przez 7 dni każdego ranka.',
                  result:
                    'Przestaniesz szukać walidacji na zewnątrz. Będziesz miał wewnętrzny punkt odniesienia - "wiem, kim jestem i to wystarczy". W relacjach, w pracy, w każdej interakcji - będziesz stabilny, bo Twoja wartość nie zależy od opinii innych.',
                },
                {
                  week: "TYDZIEŃ 5: WRAŻLIWOŚĆ I SKUTECZNOŚĆ",
                  effect: "INTEGRACJA - KOMPLETNY MĘŻCZYZNA",
                  problem:
                    'Myślisz, że "męskość" to twardość, logika, brak emocji. Więc tłumisz, co czujesz. "Chłopaki nie płaczą." "Emocje to słabość." Tymczasem ta nieprzetworzona energia zjada Cię od środka. Albo wybuchasz w najmniej odpowiednich momentach. Albo stajesz się emocjonalną pustynią.',
                  truth:
                    "Najpotężniejsi mężczyźni w historii to nie ci bez emocji - to ci, którzy ZNALI swoje emocje i używali ich jako źródła informacji. Wrażliwość to nie przeciwieństwo siły - to jej paliwo. Mężczyzna, który czuje głęboko i działa skutecznie, to kompletny wojownik.",
                  tool: "WEWNĘTRZNA MAPA SYGNALIZACJI EMOCJI + DZIENNIK CIEKAWOŚCI",
                  toolPoints: [
                    "Proces: Emocja → Co mi mówi → Co z tym zrobić",
                    "Tabela 8 podstawowych emocji i ich funkcji (złość, smutek, strach, radość, wstyd, wina, frustracja, ekscytacja)",
                    'Nazywanie bez etykietowania: "Czuję złość" ≠ "Jestem złym człowiekiem"',
                    "Protokół akceptacji: jak przyjąć emocję bez reagowania impulsywnie",
                    'Codzienne pytanie: "Czego dzisiaj się dowiedziałem o sobie / życiu / świecie?"',
                  ],
                  why: "Kiedy przestajesz walczyć z własnymi emocjami, zyskujesz energię na walkę o to, co ważne. Kiedy stajesz się ciekawy świata, przestajesz być jego ofiarą. To jest integracja: czuć głęboko + działać skutecznie.",
                  challenge: "Emotional Truth + Curiosity Sprint",
                  challengeDesc:
                    'Jedna szczera rozmowa z bliską osobą, w której powiesz: "Czuję, że..." (nie "myślę, że" - CZUJĘ). Przez 5 dni pod rząd zrób jedną NOWĄ rzecz (nawet małą), tylko z ciekawości. Prowadź Dziennik Ciekawości.',
                  result:
                    'Stajesz się kompletnym mężczyzną - czującym i działającym. Silnym i wrażliwym. Skutecznym i żywym. To nie są sprzeczności - to integracja. Po 5 tygodniach nie jesteś "nową osobą" - jesteś SOBĄ, bez cenzury, bez maski, z pełnym dostępem do swojej mocy.',
                },
              ].map((weekData, idx) => (
                <div key={idx} className="mb-16">
                  <div
                    className="mb-8 p-6 rounded-xl"
                    style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
                  >
                    <h3
                      className="text-3xl font-bold mb-2"
                      style={{ color: "hsl(210, 40%, 15%)" }}
                    >
                      {weekData.week}
                    </h3>
                    <p
                      className="text-xl font-semibold"
                      style={{ color: "hsl(210, 40%, 15%)" }}
                    >
                      "Efekt: {weekData.effect}"
                    </p>
                  </div>

                  <div className="space-y-4">
                    <GlassCard
                      className="p-6"
                      style={{
                        backgroundColor: "hsl(210, 30%, 20%)",
                        border: "2px solid hsl(0, 65%, 51%)",
                      }}
                    >
                      <h4 className="text-lg font-bold mb-2 text-white">
                        Problem do rozwiązania:
                      </h4>
                      <p
                        className="text-base"
                        style={{ color: "hsl(210, 20%, 85%)" }}
                      >
                        {weekData.problem}
                      </p>
                    </GlassCard>

                    <GlassCard
                      className="p-6"
                      style={{
                        backgroundColor: "hsl(210, 30%, 20%)",
                        border: "2px solid hsl(45, 85%, 50%)",
                      }}
                    >
                      <h4 className="text-lg font-bold mb-2 text-white">
                        Prawda, której nikt Ci nie powie:
                      </h4>
                      <p
                        className="text-base"
                        style={{ color: "hsl(210, 20%, 85%)" }}
                      >
                        {weekData.truth}
                      </p>
                    </GlassCard>

                    <GlassCard
                      className="p-6"
                      style={{
                        backgroundColor: "hsl(120, 40%, 20%)",
                        border: "2px solid hsl(120, 60%, 40%)",
                      }}
                    >
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "hsl(120, 60%, 70%)" }}
                      >
                        Narzędzie: {weekData.tool}
                      </h4>
                      <ul
                        className="space-y-2 text-sm"
                        style={{ color: "hsl(120, 40%, 85%)" }}
                      >
                        {weekData.toolPoints.map((point, pidx) => (
                          <li key={pidx} className="flex items-start gap-2">
                            <span className="text-green-400">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </GlassCard>

                    <GlassCard
                      className="p-6"
                      style={{
                        backgroundColor: "hsl(210, 30%, 20%)",
                        border: "2px solid hsl(210, 80%, 50%)",
                      }}
                    >
                      <h4 className="text-lg font-bold mb-2 text-white">
                        Dlaczego to działa:
                      </h4>
                      <p
                        className="text-base"
                        style={{ color: "hsl(210, 20%, 85%)" }}
                      >
                        {weekData.why}
                      </p>
                    </GlassCard>

                    <GlassCard
                      className="p-6"
                      style={{
                        backgroundColor: "hsl(280, 40%, 25%)",
                        border: "2px solid hsl(280, 70%, 50%)",
                      }}
                    >
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "hsl(280, 70%, 70%)" }}
                      >
                        WYZWANIE: "{weekData.challenge}"
                      </h4>
                      <p
                        className="text-sm"
                        style={{ color: "hsl(280, 30%, 85%)" }}
                      >
                        {weekData.challengeDesc}
                      </p>
                    </GlassCard>

                    <div
                      className="p-6 rounded-xl text-center"
                      style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
                    >
                      <h4
                        className="text-lg font-bold mb-2"
                        style={{ color: "hsl(210, 40%, 15%)" }}
                      >
                        REZULTAT:
                      </h4>
                      <p
                        className="text-base"
                        style={{ color: "hsl(210, 40%, 15%)" }}
                      >
                        {weekData.result}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Materials and Support Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(210, 20%, 95%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ color: "hsl(210, 20%, 8%)" }}
            >
              Materiały i Wsparcie
            </h2>
            <p
              className="text-2xl mb-12 text-center"
              style={{ color: "hsl(210, 10%, 45%)" }}
            >
              Co Fizycznie Dostajesz
            </p>

            {/* Dokumenty Robocze */}
            <div className="mb-12">
              <h3
                className="text-3xl font-bold mb-8"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                DOKUMENTY ROBOCZE:
              </h3>

              <div className="space-y-6">
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(120, 60%, 40%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(120, 60%, 40%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        5x Workbooków (łącznie ~120 stron)
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Konkretne ćwiczenia do wypełnienia</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Nie teoria na 200 stron i śliczne PDFy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Format: pytania + miejsce na odpowiedzi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>
                            Google Docs + Markdown - prościej się nie da
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(120, 60%, 40%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(120, 60%, 40%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        Dodatkowe Materiały w Portalu
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Krótkie wyjaśnienia kluczowych konceptów</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Nie 2-godzinne webinary</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>
                            Wersje video + audio: Możesz słuchać w drodze do
                            pracy
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Sesje Live */}
            <div className="mb-12">
              <h3
                className="text-3xl font-bold mb-8"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                SESJE LIVE:
              </h3>

              <div className="space-y-6">
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(210, 80%, 50%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(210, 80%, 50%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        Sesja Startowa (90 min)
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Orientacja w programie</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Q&A przed startem</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Poznanie grupy 10 osób</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(210, 80%, 50%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(210, 80%, 50%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        Sesja Kluczowa (90 min+)
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>
                            Dlaczego mężczyźni nie stawiają granic (i ile ich to
                            kosztuje)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>
                            Granice to nie mur, to mapa Twojej wolności (czym są
                            granice, a czym nie są)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>
                            Jak stawiać granice z klasą (nie tłumacząc się i nie
                            przepraszając)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Sesja Q&A</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(210, 80%, 50%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(210, 80%, 50%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        Mastermind Końcowy (120 min)
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Integracja wszystkich narzędzi</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Planowanie długoterminowe</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Celebration + feedback</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Społeczność */}
            <div>
              <h3
                className="text-3xl font-bold mb-8"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                Społeczność:
              </h3>

              <div className="space-y-6">
                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(280, 70%, 50%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(280, 70%, 50%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        Discord - Zamknięta Grupa 10 Osób
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Raportowanie wyzwań tygodniowych</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Peer accountability (to działa)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Dostęp do Ludwika i Mateusza</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Zero spamu, zero rozpraszaczy</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard
                  className="p-6"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(45, 85%, 50%)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="text-3xl"
                      style={{ color: "hsl(45, 85%, 50%)" }}
                    >
                      ✅
                    </div>
                    <div className="flex-1">
                      <h4
                        className="text-xl font-bold mb-3"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        Dożywotni Dostęp do Wszystkich Materiałów
                      </h4>
                      <ul
                        className="space-y-2"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Workbooki nie znikają</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Możesz wracać do systemu</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-lg leading-none mt-1">•</span>
                          <span>Materiały zawsze w twoim dostępie</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leaders Section - YIN & YANG */}
      <section className="py-20" style={{ backgroundColor: "hsl(0, 0%, 99%)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ color: "hsl(210, 20%, 8%)" }}
            >
              Dwóch liderów. Dwie perspektywy. Jeden cel.
            </h2>

            <div className="text-center mb-12">
              <p className="text-xl" style={{ color: "hsl(210, 10%, 45%)" }}>
                Wierzymy w siłę synergii. Dlatego program prowadzą dwie silne,
                ale uzupełniające się osobowości.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 rounded-3xl overflow-hidden shadow-2xl">
              {/* Ludwik - Black (Yin) */}
              <div
                className="p-12 flex flex-col items-center text-center"
                style={{ backgroundColor: "hsl(210, 20%, 8%)" }}
              >
                <img
                  src="/lovable-uploads/2f3ca5c3-f7b8-49dc-84ce-efd1a4eaf31a.png"
                  alt="Ludwik Siadlak - Mistrz porywania ludzi i pracy z emocjami"
                  className="w-32 h-32 rounded-full mb-6 object-cover border-4"
                  style={{ borderColor: "hsl(45, 85%, 50%)" }}
                />
                <h3 className="text-2xl font-bold mb-4 text-white">
                  Ludwik C. Siadlak
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "hsl(210, 20%, 95%)" }}
                >
                  Mistrz porywania ludzi i pracy z emocjami. Ludwik zapala
                  iskrę, inspiruje do sięgania głębiej i pomaga nazwać to, co
                  nienazwane. To on dba o to, by podróż miała sens i serce.
                </p>
              </div>

              {/* Mateusz - White (Yang) */}
              <div className="bg-white p-12 flex flex-col items-center text-center">
                <img
                  src="/lovable-uploads/mateusz-lizak-profile.png"
                  alt="Mateusz Lizak - Mistrz konkretu i pracy warsztatowej"
                  className="w-32 h-32 rounded-full mb-6 object-cover border-4"
                  style={{ borderColor: "hsl(210, 40%, 15%)" }}
                />
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  Mateusz Lizak
                </h3>
                <p
                  className="leading-relaxed"
                  style={{ color: "hsl(210, 10%, 45%)" }}
                >
                  Mistrz konkretu i pracy warsztatowej. Mateusz twardo stąpa po
                  ziemi, dostarcza sprawdzonych narzędzi i dba o to, by każda
                  idea została przełożona na praktyczne działanie.
                </p>
              </div>
            </div>

            <div
              className="text-center p-8 rounded-2xl"
              style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
            >
              <p
                className="text-xl font-bold"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                Razem tworzymy przestrzeń, gdzie wielkie wizje spotykają się z
                realnym działaniem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bonus Section - 7 Technik */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(210, 40%, 15%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-block px-6 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: "hsl(45, 85%, 50%)",
                  color: "hsl(210, 20%, 8%)",
                }}
              >
                <span className="text-lg font-bold">
                  BONUS O WARTOŚCI 497 ZŁ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                BONUS: Otrzymasz również kurs
                <br />
                <span style={{ color: "hsl(45, 85%, 50%)" }}>
                  "7 technik produktywności"
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Zapisując się na Męski Kompas, automatycznie otrzymujesz dostęp
                do pełnego kursu "7 technik, które natychmiast zwiększą Twoją
                produktywność" -{" "}
                <Link to="https://buy.siadlak.com/checkout/7technik">
                  normalnie sprzedawanego za 497 zł
                </Link>
                .
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Course Image */}
              <div className="order-2 lg:order-1">
                <img
                  src="/lovable-uploads/7technik_transparent.png"
                  alt="7 technik produktywności - kurs bonus"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>

              {/* Course Details */}
              <div className="order-1 lg:order-2">
                <GlassCard
                  className="p-8"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Co znajdziesz w bonusowym kursie:
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      "7 sprawdzonych technik zwiększania produktywności",
                      "Konkretne narzędzia do natychmiastowego wdrożenia",
                      "Praktyczne ćwiczenia i case studies",
                      "Materiały video i audio w wysokiej jakości",
                      "Dostęp na zawsze - bez ograniczeń czasowych",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle
                          className="w-5 h-5 flex-shrink-0 mt-1"
                          style={{ color: "hsl(45, 85%, 50%)" }}
                        />
                        <p className="text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="p-6 rounded-xl text-center"
                    style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
                  >
                    <p
                      className="text-xl font-bold"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Wartość bonusu:{" "}
                      <span className="line-through">497 zł</span>
                    </p>
                    <p
                      className="text-2xl font-bold"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Dla Ciebie: Bezpłatnie!
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="text-center mt-12">
              <div
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "hsl(45, 85%, 50%)" }}
                >
                  Razem otrzymujesz pakiet o wartości 2494 zł
                </h3>
                <p className="text-xl text-white/90 mb-4">
                  Męski Kompas (1997 zł) + 7 Technik Produktywności (497 zł)
                </p>
                <p className="text-3xl font-bold text-white">
                  Twoja cena: tylko 497 zł (pilot)
                </p>
                <p className="text-lg text-white/70 mt-2">
                  To prawdziwa oferta 2 w 1 - płacisz za jeden, dostajesz dwa
                  kursy!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lifehackerzy Community Bonus Section */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(270, 70%, 8%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div
                className="inline-block px-6 py-2 rounded-full mb-6"
                style={{
                  backgroundColor: "hsl(270, 90%, 60%)",
                  color: "white",
                }}
              >
                <span className="text-lg font-bold">BONUS BEZCENNY</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Dożywotni dostęp do społeczności
                <br />
                <span style={{ color: "hsl(270, 90%, 60%)" }}>
                  LIFEHACKERZY
                </span>
              </h2>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Ekskluzywna społeczność dostępna wyłącznie dla klientów moich
                programów rozwojowych. Miejsce, gdzie spotkasz ludzi o podobnych
                wartościach, gotowych do wspólnego rozwoju.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Community Logo & Visual */}
              <div className="order-2 lg:order-1 text-center">
                <img
                  src="/lovable-uploads/lifehackerzy-community-call.png"
                  alt="Lifehackerzy - Codzienne spotkania społeczności"
                  className="w-full h-auto rounded-2xl shadow-2xl mb-8"
                />
                <img
                  src="/lovable-uploads/lifehackerzy.svg"
                  alt="Lifehackerzy - Ekskluzywna społeczność"
                  className="w-full max-w-md h-auto mx-auto mb-6"
                />
                <div
                  className="p-6 rounded-xl"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <p className="text-2xl font-bold text-white mb-2">
                    Hackerzy łamią ograniczenia systemów.
                  </p>
                  <p
                    className="text-xl"
                    style={{ color: "hsl(270, 90%, 60%)" }}
                  >
                    Z nami złamiesz ograniczenia swojego życia.
                  </p>
                </div>
              </div>

              {/* Community Benefits */}
              <div className="order-1 lg:order-2">
                <GlassCard
                  className="p-8"
                  style={{
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                  }}
                >
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Co zyskujesz w społeczności Lifehackerów:
                  </h3>

                  <div className="space-y-4 mb-8">
                    {[
                      "Codzienne spotkania live z ekspertami i uczestnikami",
                      "Wymiana wiedzy i doświadczeń z profesjonalistami",
                      "Sekrety produktywności niedostępne nigdzie indziej",
                      "Eksperymentalne warsztaty i kreatywne metody pracy",
                      "Wsparcie motywacyjne i inspiracja każdego dnia",
                      "Społeczność z całego świata o podobnych wartościach",
                      "Dostęp dożywotni - bez ograniczeń czasowych",
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Users
                          className="w-5 h-5 flex-shrink-0 mt-1"
                          style={{ color: "hsl(270, 90%, 60%)" }}
                        />
                        <p className="text-white/90">{item}</p>
                      </div>
                    ))}
                  </div>

                  <div
                    className="p-6 rounded-xl text-center"
                    style={{ backgroundColor: "hsl(270, 90%, 60%)" }}
                  >
                    <p className="text-2xl font-bold text-white mb-2">
                      Wartość społeczności: BEZCENNA
                    </p>
                    <p className="text-xl font-bold text-white">
                      Dla Ciebie: DOSTĘP LIFETIME. W cenie Kompasu.
                    </p>
                  </div>
                </GlassCard>
              </div>
            </div>

            <div className="text-center mt-12">
              <div
                className="p-8 rounded-2xl"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3
                  className="text-2xl font-bold mb-4"
                  style={{ color: "hsl(270, 90%, 60%)" }}
                >
                  Społeczność dostępna wyłącznie dla moich Klientów
                </h3>
                <p className="text-xl text-white/90 mb-4">
                  "Jesteśmy wypadkową pięciu osób, z którymi spędzamy najwięcej
                  czasu" - Jim Rohn
                </p>
                <p className="text-lg text-white/70">
                  Otocz się ludźmi, którzy tak jak Ty chcą od życia czegoś
                  więcej
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience - Dla Kogo Jest Męski Kompas */}
      <section className="py-20" style={{ backgroundColor: "hsl(0, 0%, 99%)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ color: "hsl(210, 20%, 8%)" }}
            >
              Dla Kogo Jest Męski Kompas?
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
              {/* FOR */}
              <div>
                <h3
                  className="text-3xl font-bold mb-8"
                  style={{ color: "hsl(120, 60%, 40%)" }}
                >
                  ✅ To JEST dla Ciebie, jeśli:
                </h3>

                {/* Demograficznie */}
                <div className="mb-8">
                  <h4
                    className="text-xl font-bold mb-4"
                    style={{ color: "hsl(210, 20%, 8%)" }}
                  >
                    Demograficznie:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Masz 30+ lat (lub czujesz się na tyle)",
                      "Masz analityczny, dociekliwy umysł (często IT, przedsiębiorcy, managerowie, finansiści)",
                      "Masz stabilną sytuację finansową",
                    ].map((item, index) => (
                      <GlassCard
                        key={index}
                        className="p-4"
                        style={{
                          backgroundColor: "hsl(120, 40%, 95%)",
                          border: "1px solid hsl(120, 40%, 70%)",
                        }}
                      >
                        <p
                          className="flex items-start gap-3"
                          style={{ color: "hsl(210, 10%, 45%)" }}
                        >
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: "hsl(120, 60%, 40%)" }}
                          />
                          <span>{item}</span>
                        </p>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* Mentalnie */}
                <div className="mb-8">
                  <h4
                    className="text-xl font-bold mb-4"
                    style={{ color: "hsl(210, 20%, 8%)" }}
                  >
                    Mentalnie:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Masz pewien poziom samoświadomości",
                      "Nie szukasz prostych odpowiedzi",
                      "Chcesz skutecznych narzędzi, nie teorii",
                      "Jesteś gotowy na konkretną pracę",
                    ].map((item, index) => (
                      <GlassCard
                        key={index}
                        className="p-4"
                        style={{
                          backgroundColor: "hsl(120, 40%, 95%)",
                          border: "1px solid hsl(120, 40%, 70%)",
                        }}
                      >
                        <p
                          className="flex items-start gap-3"
                          style={{ color: "hsl(210, 10%, 45%)" }}
                        >
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: "hsl(120, 60%, 40%)" }}
                          />
                          <span>{item}</span>
                        </p>
                      </GlassCard>
                    ))}
                  </div>
                </div>

                {/* Wartościowo */}
                <div>
                  <h4
                    className="text-xl font-bold mb-4"
                    style={{ color: "hsl(210, 20%, 8%)" }}
                  >
                    Wartościowo:
                  </h4>
                  <div className="space-y-3">
                    {[
                      "Cenisz strukturę, rytm i działanie",
                      "Preferujesz konkret nad niekończącymi się dyskusjami",
                      "Wolisz jakość od ilości (również wśród ludzi)",
                    ].map((item, index) => (
                      <GlassCard
                        key={index}
                        className="p-4"
                        style={{
                          backgroundColor: "hsl(120, 40%, 95%)",
                          border: "1px solid hsl(120, 40%, 70%)",
                        }}
                      >
                        <p
                          className="flex items-start gap-3"
                          style={{ color: "hsl(210, 10%, 45%)" }}
                        >
                          <CheckCircle
                            className="w-5 h-5 flex-shrink-0 mt-0.5"
                            style={{ color: "hsl(120, 60%, 40%)" }}
                          />
                          <span>{item}</span>
                        </p>
                      </GlassCard>
                    ))}
                  </div>
                </div>
              </div>

              {/* NOT FOR */}
              <div>
                <h3
                  className="text-3xl font-bold mb-8"
                  style={{ color: "hsl(0, 60%, 50%)" }}
                >
                  ❌ To NIE jest dla Ciebie, jeśli:
                </h3>
                <div className="space-y-4">
                  {[
                    'Szukasz magicznej pigułki ("jedna technika rozwiąże wszystko")',
                    "Chcesz terapii grupowej z przytulaniem",
                    "Potrzebujesz ciągłej motywacji z zewnątrz",
                    "Nie jesteś gotów robić ćwiczeń (tylko słuchać teorii)",
                    "Oczekujesz, że ktoś zrobi to za Ciebie",
                  ].map((item, index) => (
                    <GlassCard
                      key={index}
                      className="p-4"
                      style={{
                        backgroundColor: "hsl(0, 40%, 95%)",
                        border: "1px solid hsl(0, 40%, 70%)",
                      }}
                    >
                      <p
                        className="flex items-start gap-3"
                        style={{ color: "hsl(210, 10%, 45%)" }}
                      >
                        <AlertCircle
                          className="w-5 h-5 flex-shrink-0 mt-0.5"
                          style={{ color: "hsl(0, 60%, 50%)" }}
                        />
                        <span>{item}</span>
                      </p>
                    </GlassCard>
                  ))}
                </div>
              </div>
            </div>

            {/* Strong Closing Statement */}
            <div className="mt-12">
              <GlassCard
                className="p-8"
                style={{
                  backgroundColor: "hsl(210, 40%, 15%)",
                  border: "2px solid hsl(45, 85%, 50%)",
                }}
              >
                <p className="text-xl md:text-2xl font-bold mb-6 text-white text-center">
                  Ten program wymaga PRACY w trakcie TYCH 5 tygodni. Nie za rok.
                  Teraz. W tej edycji.
                </p>
                <p
                  className="text-lg leading-relaxed text-center"
                  style={{ color: "hsl(210, 20%, 85%)" }}
                >
                  Energia tej grupy 10 mężczyzn, którzy przechodzą przez te same
                  wyzwania w tym samym czasie - to coś, czego nie odtworzysz z
                  nagrania za pół roku. To momentum, które powstaje tylko tutaj
                  i tylko teraz. Albo jesteś w środku, albo patrzysz, jak inni
                  to przeżywają.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table - Męski Kompas vs Everything Else */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(210, 40%, 15%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              Męski Kompas vs. Wszystko Inne
            </h2>

            {/* Comparison Table - Desktop */}
            <div className="hidden md:block overflow-x-auto mb-8">
              <table
                className="w-full border-collapse"
                style={{ backgroundColor: "hsl(0, 0%, 99%)" }}
              >
                <thead>
                  <tr style={{ backgroundColor: "hsl(210, 20%, 8%)" }}>
                    <th className="p-4 text-left text-white font-bold border border-gray-700"></th>
                    <th
                      className="p-4 text-center font-bold border border-gray-700"
                      style={{
                        backgroundColor: "hsl(45, 85%, 50%)",
                        color: "hsl(210, 20%, 8%)",
                      }}
                    >
                      Męski Kompas
                    </th>
                    <th className="p-4 text-center text-white font-bold border border-gray-700">
                      Typowy kurs online
                    </th>
                    <th className="p-4 text-center text-white font-bold border border-gray-700">
                      Coaching 1-on-1
                    </th>
                    <th className="p-4 text-center text-white font-bold border border-gray-700">
                      Terapia
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td
                      className="p-4 font-bold border border-gray-300"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Czas trwania
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 95%)",
                        color: "hsl(210, 20%, 8%)",
                        fontWeight: "bold",
                      }}
                    >
                      5 tygodni (sprint)
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      3-6 miesięcy
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      6-12 miesięcy
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      1-3+ lata
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-4 font-bold border border-gray-300"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Format
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 95%)",
                        color: "hsl(210, 20%, 8%)",
                        fontWeight: "bold",
                      }}
                    >
                      Grupa 10 osób
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      100+ osób lub sam
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Tylko ty
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Tylko ty
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-4 font-bold border border-gray-300"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Fokus
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 95%)",
                        color: "hsl(210, 20%, 8%)",
                        fontWeight: "bold",
                      }}
                    >
                      System na przyszłość
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Wiedza teoretyczna
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Twoje problemy
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Rozumienie przeszłości
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-4 font-bold border border-gray-300"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Rezultat
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 95%)",
                        color: "hsl(210, 20%, 8%)",
                        fontWeight: "bold",
                      }}
                    >
                      Działający OS
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      "Wiem więcej"
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Zależne od coacha
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Rozumienie
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-4 font-bold border border-gray-300"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Cena
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 95%)",
                        color: "hsl(210, 20%, 8%)",
                        fontWeight: "bold",
                      }}
                    >
                      497 zł
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      500-2000 zł
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      5000-20000 zł
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      10000-50000+ zł
                    </td>
                  </tr>
                  <tr>
                    <td
                      className="p-4 font-bold border border-gray-300"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      Accountability
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{
                        backgroundColor: "hsl(45, 85%, 95%)",
                        color: "hsl(210, 20%, 8%)",
                        fontWeight: "bold",
                      }}
                    >
                      Grupa 10 + 2 liderów
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      Zero
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      1-on-1
                    </td>
                    <td
                      className="p-4 text-center border border-gray-300"
                      style={{ color: "hsl(210, 10%, 45%)" }}
                    >
                      1-on-1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Comparison Cards - Mobile */}
            <div className="md:hidden space-y-6 mb-8">
              {[
                {
                  feature: "Czas trwania",
                  meskiKompas: "5 tygodni (sprint)",
                  others: [
                    "Typowy kurs: 3-6 miesięcy",
                    "Coaching: 6-12 miesięcy",
                    "Terapia: 1-3+ lata",
                  ],
                },
                {
                  feature: "Format",
                  meskiKompas: "Grupa 10 osób",
                  others: [
                    "Typowy kurs: 100+ osób lub sam",
                    "Coaching: Tylko ty",
                    "Terapia: Tylko ty",
                  ],
                },
                {
                  feature: "Fokus",
                  meskiKompas: "System na przyszłość",
                  others: [
                    "Typowy kurs: Wiedza teoretyczna",
                    "Coaching: Twoje problemy",
                    "Terapia: Rozumienie przeszłości",
                  ],
                },
                {
                  feature: "Rezultat",
                  meskiKompas: "Działający OS",
                  others: [
                    'Typowy kurs: "Wiem więcej"',
                    "Coaching: Zależne od coacha",
                    "Terapia: Rozumienie",
                  ],
                },
                {
                  feature: "Cena",
                  meskiKompas: "497 zł",
                  others: [
                    "Typowy kurs: 500-2000 zł",
                    "Coaching: 5000-20000 zł",
                    "Terapia: 10000-50000+ zł",
                  ],
                },
                {
                  feature: "Accountability",
                  meskiKompas: "Grupa 10 + 2 liderów",
                  others: [
                    "Typowy kurs: Zero",
                    "Coaching: 1-on-1",
                    "Terapia: 1-on-1",
                  ],
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="rounded-lg overflow-hidden"
                  style={{
                    backgroundColor: "hsl(0, 0%, 99%)",
                    border: "2px solid hsl(45, 85%, 50%)",
                  }}
                >
                  <div
                    className="p-4"
                    style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
                  >
                    <h4
                      className="font-bold text-lg"
                      style={{ color: "hsl(210, 20%, 8%)" }}
                    >
                      {item.feature}
                    </h4>
                  </div>
                  <div className="p-4">
                    <div
                      className="mb-4 p-3 rounded-lg"
                      style={{ backgroundColor: "hsl(45, 85%, 95%)" }}
                    >
                      <p
                        className="text-sm font-semibold mb-1"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        ✓ Męski Kompas:
                      </p>
                      <p
                        className="font-bold text-lg"
                        style={{ color: "hsl(210, 20%, 8%)" }}
                      >
                        {item.meskiKompas}
                      </p>
                    </div>
                    <div className="space-y-2">
                      {item.others.map((other, i) => (
                        <p
                          key={i}
                          className="text-sm"
                          style={{ color: "hsl(210, 10%, 45%)" }}
                        >
                          • {other}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Closing Statement */}
            <div className="text-center mt-12">
              <GlassCard
                className="p-8"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  border: "2px solid hsl(45, 85%, 50%)",
                }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">
                  Męski Kompas to nie konkurencja dla terapii czy coachingu. To
                  fundament, który budujesz raz, a używasz latami.
                </p>
              </GlassCard>
            </div>
          </div>
        </div>
      </section>

      {/* Ostatnia Rzecz - Final Value Proposition */}
      <section className="py-20" style={{ backgroundColor: "hsl(0, 0%, 99%)" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-12 text-center"
              style={{ color: "hsl(210, 20%, 8%)" }}
            >
              Ostatnia Rzecz (Najważniejsza)
            </h2>

            <div
              className="space-y-8 text-lg"
              style={{ color: "hsl(210, 10%, 45%)" }}
            >
              <p className="text-xl leading-relaxed">
                Pozwól, że powiem Ci coś, czego nikt inny Ci nie powie.
              </p>

              <p
                className="text-2xl font-bold"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                Ten program kosztuje 497 zł.
              </p>

              <p className="leading-relaxed">
                To jest cena pilotażowa. To znaczy: testujemy format, zbieramy
                feedback, poprawiamy.
              </p>

              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "hsl(210, 20%, 95%)",
                  border: "2px solid hsl(210, 20%, 85%)",
                }}
              >
                <p className="mb-4 leading-relaxed">
                  Przy normalnej wartości (1997 zł), to wciąż byłoby śmiesznie
                  tanie dla tego, co dostajesz:
                </p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-lg leading-none mt-1">•</span>
                    <span>5 tygodni intensywnej pracy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg leading-none mt-1">•</span>
                    <span>2 doświadczonych prowadzących</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg leading-none mt-1">•</span>
                    <span>Edycja tylko 10 osób (mega osobista uwaga)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg leading-none mt-1">•</span>
                    <span>System, który działa latami</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg leading-none mt-1">•</span>
                    <span>Dożywotni dostęp do materiałów</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-lg leading-none mt-1">•</span>
                    <span>Dożywotni dostęp do Lifehackerów</span>
                  </li>
                </ul>
              </div>

              <p
                className="text-2xl font-bold"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                Prawdziwa wartość? Niepoliczalna.
              </p>

              <p className="leading-relaxed">
                Bo ile kosztują lata błądzenia bez systemu?
              </p>

              <div className="space-y-3 ml-6">
                <p className="flex items-start gap-2">
                  <span
                    className="text-lg leading-none mt-1"
                    style={{ color: "hsl(0, 60%, 50%)" }}
                  >
                    •
                  </span>
                  <span>Stracony czas (nieodzyskany)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span
                    className="text-lg leading-none mt-1"
                    style={{ color: "hsl(0, 60%, 50%)" }}
                  >
                    •
                  </span>
                  <span>Stracone możliwości (których nie widziałeś)</span>
                </p>
                <p className="flex items-start gap-2">
                  <span
                    className="text-lg leading-none mt-1"
                    style={{ color: "hsl(0, 60%, 50%)" }}
                  >
                    •
                  </span>
                  <span>
                    Stracone relacje (które się rozpadły z braku obecności)
                  </span>
                </p>
                <p className="flex items-start gap-2">
                  <span
                    className="text-lg leading-none mt-1"
                    style={{ color: "hsl(0, 60%, 50%)" }}
                  >
                    •
                  </span>
                  <span>
                    Stracony spokój (bo nie wiedziałeś, dokąd idziesz)
                  </span>
                </p>
              </div>

              <div
                className="p-8 rounded-2xl text-center my-12"
                style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
              >
                <p
                  className="text-2xl md:text-3xl font-bold mb-2"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  Jeśli mógłbyś kupić 5 lat swojego życia z powrotem za 497 zł,
                  zrobiłbyś to?
                </p>
              </div>

              <p className="leading-relaxed text-center">
                Bo to jest transakcja, której podejmujesz się dzisiaj.
              </p>

              <p
                className="text-xl font-bold text-center"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                497 zł za system, który daje Ci te lata z powrotem.
              </p>

              <div
                className="p-8 rounded-2xl text-center"
                style={{
                  backgroundColor: "hsl(210, 40%, 15%)",
                  border: "2px solid hsl(45, 85%, 50%)",
                }}
              >
                <p className="text-2xl md:text-3xl font-bold text-white">
                  To nie jest wydatek. To najbardziej asymetryczna inwestycja,
                  jaką możesz zrobić.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20"
        style={{ backgroundColor: "hsl(210, 20%, 95%)" }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2
              className="text-4xl md:text-5xl font-bold mb-8 text-center"
              style={{ color: "hsl(210, 20%, 8%)" }}
            >
              Gotowy, By Obrać Właściwy Kurs?
            </h2>

            <p
              className="text-2xl font-bold mb-8 text-center"
              style={{ color: "hsl(210, 10%, 45%)" }}
            >
              Pierwsza, pilotażowa edycja Męskiego Kompasu to wyjątkowa okazja.
            </p>

            {/* Value Stack */}
            <div className="mb-8 space-y-3 text-left">
              {[
                "5-tygodniowy program warsztatowy",
                "Dostęp do materiałów wideo, audio i PDF",
                "Udział w 3 sesjach LIVE z prowadzącymi",
                "Praca w zamkniętej, wspierającej grupie 10 mężczyzn",
                'Kurs bonusowy "7 Technik Produktywności" (497 zł)',
                "Dożywotni dostęp do społeczności Lifehackerzy (10,000+/bezcenne)",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 text-lg">
                  <span
                    className="text-2xl leading-none mt-0.5"
                    style={{ color: "hsl(120, 60%, 40%)" }}
                  >
                    ✅
                  </span>
                  <span style={{ color: "hsl(210, 10%, 45%)" }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Pricing */}
            <div
              className="p-8 rounded-2xl mb-8 text-center"
              style={{
                backgroundColor: "hsl(0, 0%, 99%)",
                border: "2px solid hsl(45, 85%, 50%)",
              }}
            >
              <p
                className="text-2xl font-bold mb-2"
                style={{ color: "hsl(210, 20%, 8%)" }}
              >
                Łączna wartość: 12494 zł
              </p>
              <p
                className="text-3xl md:text-4xl font-bold mb-2"
                style={{ color: "hsl(45, 85%, 50%)" }}
              >
                Twoja inwestycja:{" "}
                <span className="line-through opacity-60">1997 zł</span> 497 zł
              </p>
              <p className="text-lg" style={{ color: "hsl(210, 10%, 45%)" }}>
                (edycja pilotażowa)
              </p>
            </div>

            <p
              className="text-2xl font-bold mb-6 text-center"
              style={{ color: "hsl(0, 60%, 50%)" }}
            >
              Zostały 4 miejsca.
            </p>

            <div
              className="mb-8 text-center text-lg space-y-2"
              style={{ color: "hsl(210, 10%, 45%)" }}
            >
              <p>Nie ma skomplikowanych formularzy.</p>
              <p>Nie ma "rozmów kwalifikacyjnych".</p>
              <p className="font-bold" style={{ color: "hsl(210, 20%, 8%)" }}>
                Po prostu dołącz i zacznij działać.
              </p>
            </div>

            {/* 100% Satisfaction Guarantee */}
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8 p-6 rounded-xl"
              style={{
                backgroundColor: "hsl(120, 40%, 95%)",
                border: "2px solid hsl(120, 60%, 40%)",
              }}
            >
              <div className="flex-shrink-0">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "hsl(120, 60%, 40%)" }}
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
              </div>
              <div className="text-center md:text-left">
                <p
                  className="text-xl font-bold mb-1"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  100% Gwarancja Satysfakcji
                </p>
                <p
                  className="text-base"
                  style={{ color: "hsl(210, 10%, 45%)" }}
                >
                  Ukończ Tydzień 1. Jeśli nie widzisz wartości - zwrot 100%
                  pieniędzy. Bez pytań.
                </p>
              </div>
            </div>

            {/* Primary CTA */}
            <div className="text-center mb-8">
              <Link to="https://buy.siadlak.com/checkout/meski-kompas">
                <CTAButton
                  variant="primary"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl mb-4 font-bold !text-black border-0 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 !bg-yellow-500 hover:!bg-yellow-600 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                  aria-label="Zapisuję się i zaczynam nawigować - zostały 4 miejsca"
                  showArrow
                >
                  <span className="inline sm:hidden">BIORĘ MIEJSCE</span>
                  <span className="hidden sm:inline lg:hidden">
                    ZAPISUJĘ SIĘ - 4 MIEJSCA
                  </span>
                  <span className="hidden lg:inline">
                    ZAPISUJĘ SIĘ I ZACZYNAM NAWIGOWAĆ - ZOSTAŁY 4 MIEJSCA
                  </span>
                </CTAButton>
              </Link>
            </div>

            {/* P.S. Sections */}
            <div className="space-y-6 mt-12 text-left">
              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "hsl(0, 0%, 99%)",
                  border: "1px solid hsl(210, 20%, 85%)",
                }}
              >
                <p
                  className="text-lg mb-2 font-bold"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  P.S.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "hsl(210, 10%, 45%)" }}
                >
                  Jeśli myślisz "zrobię to później" - to ten sam mechanizm,
                  który trzyma Cię w paraliżu analitycznym. Jest 10 miejsc.
                  Zostały 4. Decyzja jest prosta: albo płyniesz z nami, albo
                  zostajesz na brzegu.
                </p>
              </div>

              <div
                className="p-6 rounded-xl"
                style={{
                  backgroundColor: "hsl(0, 0%, 99%)",
                  border: "1px solid hsl(210, 20%, 85%)",
                }}
              >
                <p
                  className="text-lg mb-2 font-bold"
                  style={{ color: "hsl(210, 20%, 8%)" }}
                >
                  P.P.S.
                </p>
                <p
                  className="text-lg leading-relaxed"
                  style={{ color: "hsl(210, 10%, 45%)" }}
                >
                  Jeśli zastanawiasz się "czy to dla mnie" - jeśli przeczytałeś
                  do tego miejsca, jest dla Ciebie. Ludzie, dla których to nie
                  jest, zrezygnowali 3 sekcje temu. Ty jesteś wciąż tutaj. To
                  wystarczający sygnał.
                </p>
              </div>
            </div>

            {/* Secondary CTA */}
            <div className="text-center mt-8">
              <Link to="https://buy.siadlak.com/checkout/meski-kompas">
                <CTAButton
                  variant="primary"
                  size="xl"
                  className="shadow-2xl hover:shadow-3xl font-bold !text-black border-0 px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 !bg-yellow-500 hover:!bg-yellow-600 text-sm sm:text-base md:text-lg w-full sm:w-auto"
                  aria-label="Tak, chcę miejsce w Męskim Kompasie"
                  showArrow
                >
                  <span className="inline sm:hidden">TAK, CHCĘ MIEJSCE</span>
                  <span className="hidden sm:inline">
                    TAK, CHCĘ MIEJSCE W MĘSKIM KOMPASIE
                  </span>
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Floating CTA Bar */}
      {showFloatingCTA && (
        <div
          className="fixed bottom-0 left-0 right-0 z-50 shadow-2xl animate-in slide-in-from-bottom-4 duration-300"
          style={{ backgroundColor: "hsl(45, 85%, 50%)" }}
        >
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <AlertTriangle
                  className="w-5 h-5 flex-shrink-0"
                  style={{ color: "hsl(0, 60%, 50%)" }}
                />
                <div>
                  <p
                    className="font-bold text-base sm:text-lg"
                    style={{ color: "hsl(210, 20%, 8%)" }}
                  >
                    Zostały tylko 4 miejsca
                  </p>
                  <p
                    className="text-sm hidden sm:block"
                    style={{ color: "hsl(210, 20%, 20%)" }}
                  >
                    Program startuje w październiku - nie przegap
                  </p>
                </div>
              </div>
              <Link to="https://buy.siadlak.com/checkout/meski-kompas">
                <button
                  className="whitespace-nowrap px-6 py-3 rounded-lg font-bold shadow-lg hover:shadow-xl transition-all text-sm sm:text-base"
                  style={{
                    backgroundColor: "hsl(210, 20%, 8%)",
                    color: "white",
                  }}
                >
                  Rezerwuję Miejsce →
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
