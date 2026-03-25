import Layout from "../../components/layout/Layout";
import SEO from "../../components/SEO";
import { getSEOConfig } from "../../lib/seo-config";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CTAButton } from "@/components/ui/cta-button";
import {
  ArrowRight,
  AlertTriangle,
  Brain,
  Sparkles,
  Target,
  Users,
  CheckCircle,
  X,
  Zap,
  Crown,
} from "../../lib/icons";
import { Link } from "react-router-dom";

const Index2601 = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("home")} />

      {/* SECTION 1: HERO - THE HOOK */}
      <section className="relative pt-32 md:pt-40 pb-0 bg-gradient-to-br from-deep-space via-deep-charcoal to-deep-space overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neural-blue rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-zenith-gold rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* TIER 1: Full-Width Headline */}
            <div className="text-center mb-12 md:mb-16">
              <h1 className="whitespace-pre-line break-words hyphens-auto text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] max-w-5xl mx-auto px-4">
                {`Ludwik C. Siadlak - `}
                <span className="bg-gradient-to-r from-zenith-gold to-orange-500 bg-clip-text text-transparent">
                  przeprogramowuję fundamenty
                </span>
                {`, na których budujesz życie`}
              </h1>
            </div>

            {/* TIER 2: Identity Statement */}
            <div className="text-center mb-16 md:mb-20">
              <p className="whitespace-pre-line break-words hyphens-auto text-2xl md:text-3xl text-white/90 max-w-4xl mx-auto px-4 leading-relaxed">
                {`Życie to nie problem do rozwiązania.
To system do zhackowania.
A Ty od lat grzebiesz w interfejsie, nie dotykając kodu źródłowego.`}
              </p>
            </div>

            {/* TIER 3: Asymmetric Split (40% Body + 60% Image) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">
              {/* Body Copy - Takes 2 columns on desktop (40%) */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="space-y-4 text-xl text-white/90 leading-relaxed mb-12">
                  <p>
                    Todoist, Notion, GTD, PARA, mindfulness appki - to wszystko
                    interfejs.
                  </p>
                  <p>Problem nie leży w ikonkach.</p>
                  <p>
                    <span className="text-zenith-gold font-bold">
                      Leży w systemie operacyjnym, który działa w Twojej głowie.
                    </span>
                  </p>
                  <p className="text-2xl font-bold text-white mt-8">
                    Jestem Ludwik C. Siadlak.
                  </p>
                  <p>Nie uczę Cię kolejnej metody.</p>
                  <p>Przepisuję z Tobą reguły gry.</p>
                </div>

                <div className="flex flex-col gap-4 items-center md:items-start">
                  <Link to="/discovery">
                    <CTAButton
                      variant="premium"
                      size="xl"
                      className="shadow-xl"
                    >
                      Umów bezpłatną sesję odkrywczą
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </CTAButton>
                  </Link>
                  <Link
                    to="#truth"
                    className="text-white/70 hover:text-white text-lg transition-colors"
                  >
                    Czytaj dalej ↓
                  </Link>
                </div>
              </div>

              {/* Profile Image - Takes 3 columns on desktop (60%), frameless and sticks to bottom */}
              <div className="md:col-span-3 relative flex items-end">
                <img
                  src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                  alt="Ludwik C. Siadlak - Lifehacker"
                  className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain object-bottom drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    filter: "saturate(1.1) brightness(1.05)",
                    maskImage:
                      "linear-gradient(to right, transparent 0%, black 8%, black 100%)",
                    WebkitMaskImage:
                      "linear-gradient(to right, transparent 0%, black 8%, black 100%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE TRUTH - PRAWDA */}
      <section id="truth" className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-lg px-6 py-3 mb-6">
                <AlertTriangle className="inline h-5 w-5 mr-2" />
                Prawda, którą już czujesz
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                Branża rozwoju osobistego sprzedaje Ci plasterki 🩹
              </h2>
              <p className="text-2xl text-deep-charcoal/80">
                Tymczasem Ty potrzebujesz operacji na otwartym umyśle 👨‍⚕️.
              </p>
            </div>

            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-50 to-orange-50 mb-8">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl text-deep-charcoal mb-6 font-semibold">
                  Próbowałeś już:
                </p>
                <ul className="space-y-4 text-lg text-deep-charcoal/80 mb-8">
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>wielu aplikacji zarządzania zadaniami (Todoist, Asana, Trello, etc) </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>metodologii produktywności (Getting Things Done, Flow, etc) </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>medytacji prowadzonych (Headspace, Calm, etc)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>coachów, którzy klepali Cię po plecach.</span>
                  </li>
                </ul>

                <p className="text-2xl text-deep-charcoal mb-4 font-bold">
                  Działało?
                </p>
                <p className="text-xl text-deep-charcoal mb-6">
                  Na tydzień. Na miesiąc.
                </p>
                <p className="text-xl text-deep-charcoal mb-8">
                  A potem wracałeś do punktu wyjścia - tylko z kolejną warstwą
                  niespełnionych obietnic.
                </p>

                <div className="bg-white p-6 rounded-xl border-2 border-neural-blue/20 mb-6">
                  <p className="text-2xl font-bold text-neural-blue mb-3">
                    Bo problem nigdy nie był w narzędziach.
                  </p>
                  <p className="text-xl text-deep-charcoal">
                    Był w fundamentach, na których je stawiałeś.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: MOJA DROGA - ORIGIN STORY */}
      <section className="py-20 md:py-32 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">
                Moja droga -{" "}
                <span className="text-zenith-gold">
                  od wojownika do przewodnika
                </span>
              </h2>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-white/90 leading-relaxed">
                  <p>W wieku 16 lat byłem uzależniony od kodeiny.</p>
                  <p>Migreny codziennie.</p>
                  <p>Systemy produktywności budowałem po to, żeby przetrwać.</p>

                  <p className="text-xl text-white/90 mt-8">
                    Potem przyszedł „sukces": 19 lat jako certyfikowany trener
                    Microsoft, Fortune 500, jednostki specjalne, setki szkoleń.
                  </p>

                  <p className="text-2xl text-zenith-gold font-bold mt-8">
                    W 2014 roku stałem na balkonie i myślałem o skoku.
                  </p>

                  <p className="text-xl">Miałem wszystko, o czym marzyłem.</p>
                  <p className="text-xl">
                    I nic, czego naprawdę potrzebowałem.
                  </p>

                  <div className="bg-zenith-gold/10 p-6 rounded-xl border-2 border-zenith-gold/30 my-8">
                    <p className="text-2xl font-bold text-zenith-gold mb-4">
                      Zrozumiałem wtedy jedną rzecz:
                    </p>
                    <p className="text-xl text-white">
                      Żeby zmienić grę, musiałem zmienić gracza.
                    </p>
                    <p className="text-lg text-white/80 mt-3">
                      Nie aplikacje - tylko system operacyjny duszy.
                    </p>
                  </div>

                  <p className="text-xl font-semibold text-white mt-8">
                    Przeszedłem obie ścieżki:
                  </p>
                  <ul className="space-y-3 text-lg text-white/90 ml-6">
                    <li className="flex items-start gap-3">
                      <span className="text-zenith-gold mt-1">•</span>
                      <span>
                        <strong className="text-white">wojownika</strong>, który
                        myślał, że musi podbić świat,
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-zenith-gold mt-1">•</span>
                      <span>
                        <strong className="text-white">poszukiwacza</strong>,
                        który odkrył, że świat już jest cały.
                      </span>
                    </li>
                  </ul>

                  <p className="text-2xl font-bold text-white text-center mt-12">
                    Dzielę się tym, co odkryłem.
                  </p>
                  <p className="text-xl text-center text-white/90">
                    Nie jako guru. Jako ktoś, kto przechodził przez to samo
                    bagno, w którym Ty teraz stoisz.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: DWIE ŚCIEŻKI - DUAL PATH */}
      <section className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-lg px-6 py-3 mb-6">
                <Target className="inline h-5 w-5 mr-2" />
                Dwie ścieżki
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                Dwie ścieżki.{" "}
                <span className="text-neural-blue">Jedna decyzja.</span>
              </h2>
              <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto leading-relaxed">
                Nie każdy potrzebuje tego samego.
              </p>
              <p className="text-xl text-deep-charcoal/80 mt-4">
                Dlatego pracuję na dwóch poziomach.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* WARRIOR PATH */}
              <Card className="relative overflow-hidden border-2 border-red-500/30 hover:border-red-500/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Zap className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-red-600 mb-2">
                        🛡 ŚCIEŻKA WOJOWNIKA
                      </h3>
                      <p className="text-xl font-semibold text-deep-charcoal">
                        dla tych, którzy wciąż walczą
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                    <p>
                      Jesteś uwięziony w narracjach walki, sprawiedliwości,
                      niewidzialnych wrogów.
                    </p>
                    <p>Masz wszystko, a czujesz, że to za mało.</p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200 my-6">
                      <p className="font-bold text-red-700">
                        Pracujemy wglądami, konfrontacją, filozoficznym
                        rozbijaniem schematów.
                      </p>
                    </div>
                    <p>
                      Używam metafor z życia - diamentowego umysłu, żaglówki,
                      jazdy po torze - by pokazać Ci, że to{" "}
                      <strong className="text-deep-charcoal">
                        Ty trzymasz kierownicę
                      </strong>
                      .
                    </p>
                    <p className="text-xl font-semibold text-deep-charcoal mt-6">
                      To praca dla tych, którzy potrzebują, by ktoś odciął im
                      skrzydła - żeby nauczyli się latać od nowa.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* SEEKER PATH */}
              <Card className="relative overflow-hidden border-2 border-twilight-indigo/30 hover:border-twilight-indigo/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-twilight-indigo/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Sparkles className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="break-words hyphens-auto text-3xl font-bold text-twilight-indigo mb-2">
                        🌿 ŚCIEŻKA POSZUKIWACZA
                      </h3>
                      <p className="text-xl font-semibold text-deep-charcoal">
                        dla tych, którzy osiągnęli szczyt i zobaczyli pustkę
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                    <p>Zbudowałeś sukces. Zarabiasz. Masz uznanie.</p>
                    <p>A w środku - cisza, która woła.</p>
                    <div className="bg-twilight-indigo/5 p-4 rounded-lg border border-twilight-indigo/20 my-6">
                      <p className="font-bold text-twilight-indigo">
                        Tu nie chodzi o kolejny cel. Chodzi o przestanie
                        gonienia.
                      </p>
                    </div>
                    <p>O integrację ducha z codziennością.</p>
                    <p>
                      O pozwolenie sobie na to, by być już tam, gdzie jesteś.
                    </p>
                    <p className="text-xl font-semibold text-deep-charcoal mt-6">
                      To praca delikatna, głęboka, oparta na uważności i
                      akceptacji - bez walki.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OFFERINGS - NIE COACHING, TRANSFORMACJA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neural-blue/5 via-luminous-white to-twilight-indigo/5">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                Nie "coaching".{" "}
                <span className="text-neural-blue">
                  Transformacja fundamentów.
                </span>
              </h2>
              <p className="text-2xl text-deep-charcoal/80 max-w-3xl mx-auto">
                Nie sprzedaję godzin rozmów.
              </p>
              <p className="text-2xl font-bold text-neural-blue mt-4">
                Oferuję przeprogramowanie systemu, na którym działasz.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* APLIKACJE MENTALNE */}
              <Card className="relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-neural-blue mb-2">
                        🔧 Aplikacje Mentalne
                      </h3>
                      <p className="text-lg font-semibold text-deep-charcoal/70">
                        Kompaktowe programy (4–6 tygodni)
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                    <p className="text-xl font-semibold text-deep-charcoal">
                      Do zhakowania jednego obszaru:
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-neural-blue flex-shrink-0 mt-1" />
                        <span>produktywność bez spalania,</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-neural-blue flex-shrink-0 mt-1" />
                        <span>odporność psychiczna,</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-neural-blue flex-shrink-0 mt-1" />
                        <span>męskość w działaniu.</span>
                      </li>
                    </ul>
                    <p className="text-xl font-bold text-deep-charcoal mt-6">
                      To nie kolejny kurs. To aktualizacja oprogramowania w
                      Twojej głowie.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* LIFE OS */}
              <Card className="relative overflow-hidden border-2 border-zenith-gold/30 hover:border-zenith-gold/50 transition-all duration-300 group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-zenith-gold mb-2">
                        ⚙️ Life OS: System Upgrade
                      </h3>
                      <p className="text-lg font-semibold text-deep-charcoal/70">
                        8 tygodni. Maksymalnie 5 osób.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                    <p className="text-xl font-semibold text-deep-charcoal">
                      Pełne przeprogramowanie fundamentów:
                    </p>
                    <ul className="space-y-3 ml-6">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-zenith-gold flex-shrink-0 mt-1" />
                        <span>energia, której nie musisz oszczędzać,</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-zenith-gold flex-shrink-0 mt-1" />
                        <span>narracje, które już Cię nie więżą,</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-zenith-gold flex-shrink-0 mt-1" />
                        <span>tożsamość, która nie wymaga udowadniania.</span>
                      </li>
                    </ul>
                    <div className="bg-zenith-gold/10 p-4 rounded-lg border border-zenith-gold/30 mt-6">
                      <p className="text-xl font-bold text-deep-charcoal">
                        To nie jest dla każdego.
                      </p>
                      <p className="text-lg text-deep-charcoal/80 mt-2">
                        To dla tych, którzy gotowi są wymienić cały system.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: PROOF - REAL TRANSFORMATIONS */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neural-blue/5 via-luminous-white to-twilight-indigo/5">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-zenith-gold to-orange-500 text-white border-0 text-lg px-6 py-3 mb-6">
                <Users className="inline h-5 w-5 mr-2" />
                Prawdziwe transformacje
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6">
                To nie są 5-gwiazdkowe opinie.{" "}
                <span className="text-neural-blue">
                  To są prawdziwe transformacje.
                </span>
              </h2>
              <p className="text-xl text-deep-charcoal/80">
                Nie pokażę Ci anonimowych testimoniali z "Dyrektorem Marketingu"
                i "Starszym Kierownikiem Projektów".
              </p>
              <p className="text-xl text-deep-charcoal/80 mt-4">
                Pokażę Ci prawdziwe historie ludzi, którzy przeszli przez tę
                samą drogę co Ty.
              </p>
            </div>

            <div className="space-y-8">
              {/* ANNA */}
              <Card className="relative overflow-hidden border-2 border-neural-blue/20 hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0">
                      <CheckCircle className="w-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-neural-blue">
                        ANNA
                      </h3>
                      <p className="text-lg text-deep-charcoal/60">
                        CEO, 6-cyfrowe przychody
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                    <p>
                      "Przyszłam z przekonaniem, że świat jest niesprawiedliwy
                      wobec kobiet w biznesie. Ludwik nie powiedział mi, że mam
                      rację. Zapytał:{" "}
                      <span className="font-bold italic text-neural-blue">
                        'Ile podatku płacisz każdego dnia za tę historię?'
                      </span>
                    </p>
                    <p className="font-bold text-xl text-deep-charcoal">
                      To pytanie rozwaliło mi głowę.
                    </p>
                    <p>
                      W 8 tygodni przeszłam od narracji ofiary do agenta zmiany.
                      Zmieniłem sposób, w jaki myślę o pieniądzach, granicach, i
                      swojej roli. Nie dlatego, że Ludwik mi to powiedział.
                      Dlatego, że wymusił na mnie spojrzenie w lustro.
                    </p>
                    <p className="font-semibold text-deep-charcoal">
                      To nie był komfortowy proces. Ale był prawdziwy."
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* LUCJA */}
              <Card className="relative overflow-hidden border-2 border-twilight-indigo/20 hover:shadow-2xl transition-shadow">
                <div className="absolute top-0 right-0 w-32 h-32 bg-twilight-indigo/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 md:p-12 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-twilight-indigo to-neural-blue rounded-xl flex items-center justify-center shrink-0">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-twilight-indigo">
                        LUCJA
                      </h3>
                      <p className="text-lg text-deep-charcoal/60">
                        Founder RevSpace
                      </p>
                    </div>
                  </div>
                  <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                    <p>
                      "Pracowałam na wakacjach w mentalnym garniturze. Sukces w
                      biznesie, chaos w głowie. Konflikt między kobietą biznesu
                      a duchową stroną.
                    </p>
                    <p className="font-bold text-xl text-deep-charcoal">
                      Ludwik pokazał mi, że to nie jest konflikt do rozwiązania
                      – to integracja do przyjęcia.
                    </p>
                    <p>
                      Teraz medytuję codziennie. Moja córka poszła do terapii
                      (po miesiącach oporu). Biznes rośnie szybciej, a ja w
                      końcu mogę oddychać.
                    </p>
                    <p>
                      Powiedział mi:{" "}
                      <span className="font-bold italic text-twilight-indigo">
                        'Nic nie jest dla Ciebie zbyt dobre.'
                      </span>{" "}
                      I uwierzyłam."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7: THE OPTIONS - CLEAR PATHS FORWARD */}
      <section className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6">
                Dwie opcje.{" "}
                <span className="text-neural-blue">
                  Wybierz tę, której teraz potrzebujesz.
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* APLIKACJE MENTALNE */}
              <Card className="relative overflow-hidden border-2 border-neural-blue/30 hover:border-neural-blue/50 transition-all hover:shadow-2xl group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-neural-blue mb-2">
                        APLIKACJE MENTALNE
                      </h3>
                      <p className="text-lg text-deep-charcoal/70">
                        Fundamenty, które muszą działać najpierw.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-deep-charcoal/80">
                      Notion nie zadziała. Asana nie zadziała. Todoist nie
                      zadziała – dopóki nie zaktualizujesz programów w swojej
                      głowie.
                    </p>
                    <div className="bg-neural-blue/5 p-4 rounded-lg">
                      <p className="font-semibold text-deep-charcoal">
                        Kompaktowe, intensywne programy do przeprogramowania
                        jednego fundamentalnego obszaru:
                      </p>
                      <ul className="mt-3 space-y-2 text-deep-charcoal/80">
                        <li>• Produktywność</li>
                        <li>• Odporność psychiczna</li>
                        <li>• Męskość</li>
                      </ul>
                    </div>
                    <p className="text-lg text-deep-charcoal font-semibold">
                      4-6 tygodni. Jedna rzecz. Głębokie przeprogramowanie.
                    </p>
                  </div>

                  <Link to="/program">
                    <CTAButton className="w-full group">
                      Zobacz dostępne aplikacje
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </CTAButton>
                  </Link>
                </CardContent>
              </Card>

              {/* LIFE OS: SYSTEM UPGRADE */}
              <Card className="relative overflow-hidden border-2 border-zenith-gold/30 hover:border-zenith-gold/50 transition-all hover:shadow-2xl group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-zenith-gold/10 rounded-full blur-3xl"></div>
                <CardContent className="p-8 relative">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-zenith-gold to-orange-500 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg">
                      <Crown className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-zenith-gold mb-2">
                        LIFE OS: SYSTEM UPGRADE
                      </h3>
                      <p className="text-lg text-deep-charcoal/70">
                        Pełne przeprogramowanie systemu operacyjnego.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8">
                    <p className="text-lg text-deep-charcoal/80">
                      8 tygodni intensywnej pracy. Maksymalnie 5 osób
                      jednocześnie.
                    </p>
                    <div className="bg-zenith-gold/5 p-4 rounded-lg">
                      <p className="font-semibold text-deep-charcoal mb-2">
                        To nie jest coaching. To jest transformacja tożsamości.
                      </p>
                      <p className="text-deep-charcoal/80">
                        Przeprogramowanie fundamentów, na których budujesz
                        wszystko.
                      </p>
                    </div>
                    <p className="text-lg text-deep-charcoal">
                      Pracujemy nad energią, narracjami, podatkami, które
                      płacisz każdego dnia. Nad tym, kim musisz przestać być,
                      żeby stać się tym, kim możesz być.
                    </p>
                    <p className="text-xl font-bold text-zenith-gold">
                      To nie jest dla każdego.
                    </p>
                  </div>

                  <Link to="/program/lifeos-system-upgrade">
                    <CTAButton variant="premium" className="w-full group">
                      Sprawdź dostępność
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </CTAButton>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 8: WHO THIS IS FOR - POLARIZING FILTER */}
      <section className="py-20 md:py-32 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                To nie jest dla każdego.{" "}
                <span className="text-zenith-gold">I to jest w porządku.</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* NOT FOR YOU */}
              <Card className="bg-red-500/10 border-2 border-red-500/30">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-red-400 mb-6">
                    To NIE jest dla Ciebie, jeśli:
                  </h3>
                  <ul className="space-y-4 text-lg text-white/90">
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>
                        Zarabiasz poniżej €100K rocznie (po prostu nie dotarłeś
                        jeszcze do punktu bólu, który obsługuję)
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>
                        Szukasz kolejnego systemu produktywności, który "w końcu
                        zadziała"
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>Chcesz walidacji, nie transformacji</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>
                        Potrzebujesz kogoś, kto powie Ci, że wszystko jest okej
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>
                        Nie jesteś gotów zapłacić energetycznego podatku za
                        zmianę
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <X className="h-6 w-6 text-red-400 flex-shrink-0 mt-1" />
                      <span>Szukasz quick fixes i surface solutions</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* FOR YOU */}
              <Card className="bg-zenith-gold/10 border-2 border-zenith-gold/30">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-zenith-gold mb-6">
                    To JEST dla Ciebie, jeśli:
                  </h3>
                  <ul className="space-y-4 text-lg text-white/90">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Osiągnąłeś sukces zewnętrzny (€100K-10M+ rocznie), ale
                        czujesz wewnętrzną pustkę
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Testowałeś już wszystkie systemy i wiesz, że problem
                        jest głębiej
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Jesteś uwięziony w narracjach, które kiedyś Ci służyły,
                        a teraz Cię więzią
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Potrzebujesz kogoś wystarczająco brutalnego, żeby
                        powiedzieć Ci prawdę
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Albo kogoś, kto da Ci pozwolenie na przestanie walki
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>
                        Jesteś gotów na intensywną pracę transformacyjną
                      </span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-zenith-gold flex-shrink-0 mt-1" />
                      <span>Rozumiesz, że filozofia może się opłacać</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-2xl text-white/90 mb-6">
                Jeśli nie jesteś pewien –{" "}
                <span className="text-white font-bold">
                  to prawdopodobnie nie.
                </span>
              </p>
              <p className="text-2xl text-zenith-gold font-bold">
                A jeśli jesteś pewien – umów sesję discovery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: FINAL CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-neural-blue/10 via-luminous-white to-zenith-gold/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
              Jeśli dotarłeś tutaj -{" "}
              <span className="text-neural-blue">
                wiesz, że to nie jest zwykła oferta.
              </span>
            </h2>

            <Card className="relative overflow-hidden border-2 border-neural-blue/20 mb-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative">
                <p className="text-2xl font-bold text-deep-charcoal mb-6">
                  To zaproszenie do pracy, która:
                </p>
                <div className="space-y-4 text-lg text-deep-charcoal/80 leading-relaxed">
                  <ul className="space-y-4 text-left">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-neural-blue flex-shrink-0 mt-1" />
                      <span>wymaga odwagi, by spojrzeć w lustro,</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-neural-blue flex-shrink-0 mt-1" />
                      <span>oferuje prawdę zamiast pocieszenia,</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-neural-blue flex-shrink-0 mt-1" />
                      <span>
                        zmienia nie to, co robisz, ale{" "}
                        <strong className="text-deep-charcoal">
                          kim jesteś, kiedy to robisz
                        </strong>
                        .
                      </span>
                    </li>
                  </ul>

                  <div className="bg-neural-blue/5 p-6 rounded-xl mt-8">
                    <p className="text-xl font-bold text-deep-charcoal mb-3">
                      Mam miejsce dla garści ludzi na raz.
                    </p>
                    <p>Nie dlatego, że taki mam marketing.</p>
                    <p className="font-semibold text-deep-charcoal mt-2">
                      Dlatego, że taka jest natura głębokiej zmiany.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6 text-xl text-deep-charcoal/80 mb-12">
              <p className="text-2xl font-bold text-deep-charcoal">
                Jeśli czujesz, że to rezonuje - nie potrzebujesz więcej tekstu.
              </p>
              <p className="text-2xl font-semibold text-neural-blue">
                Potrzebujesz rozmowy.
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <Link to="/discovery">
                  <CTAButton
                    variant="premium"
                    size="xl"
                    className="relative shadow-2xl"
                  >
                    Umów bezpłatną 30-minutową sesję odkrywczą
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </CTAButton>
                </Link>
              </div>
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-xl border border-neural-blue/10">
              <p className="text-lg text-deep-charcoal/70 mb-2">
                Bez sprzedaży. Bez obiecanek.
              </p>
              <p className="text-lg text-deep-charcoal/70 mb-2">
                Sprawdzimy, czy jesteśmy sobie potrzebni.
              </p>
              <p className="text-lg text-deep-charcoal/70">
                I czy w ogóle chcemy iść tą drogą razem.
              </p>
            </div>

            <div className="border-t-2 border-neural-blue/20 pt-8 mt-12">
              <p className="text-2xl font-bold text-deep-charcoal mb-2">
                - Ludwik C. Siadlak
              </p>
              <p className="text-lg italic text-deep-charcoal/70">
                Life Hacker. Przewodnik po własnym umyśle.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index2601;
