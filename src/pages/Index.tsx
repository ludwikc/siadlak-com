import Layout from "../components/layout/Layout";
import SEO from "../components/SEO";
import { getSEOConfig } from "../lib/seo-config";
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
} from "../lib/icons";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("home")} />

      {/* SECTION 1: HERO - THE HOOK */}
      <section className="relative py-32 md:py-40 bg-gradient-to-br from-deep-space via-deep-charcoal to-deep-space overflow-hidden">
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
              <h1 className="whitespace-pre-line text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] max-w-5xl mx-auto px-4">
                {`Life Hacking to nie droga na skróty.
`}
                <span className="bg-gradient-to-r from-zenith-gold to-orange-500 bg-clip-text text-transparent">
                  To włamanie do własnego umysłu.
                </span>
                {`
I przeprogramowanie fundamentów.`}
              </h1>
            </div>

            {/* TIER 2: Identity Statement */}
            <div className="text-center mb-16 md:mb-20">
              <p className="whitespace-pre-line text-2xl md:text-3xl text-white/90 max-w-3xl mx-auto px-4">
                {`Jestem Ludwik C. Siadlak – Life Hacker.
Nie szukam skrótów. Przepisuję zasady.`}
              </p>
            </div>

            {/* TIER 3: Asymmetric Split (40% Body + 60% Image) */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-20 items-start">

              {/* Body Copy - Takes 2 columns on desktop (40%) */}
              <div className="md:col-span-2 text-center md:text-left">
                <div className="space-y-4 text-xl text-white/90 leading-relaxed mb-12">
                  <p>
                    Testowałeś już Todoist, Asanę, Notion, wszystkie inne appki i&nbsp;systemy produktywności — i&nbsp;wciąż kręcisz się w&nbsp;kółko.
                  </p>
                  <p>
                    Bo problem nie jest w&nbsp;narzędziach.{" "}
                    <span className="text-zenith-gold">
                      Jest w&nbsp;systemie operacyjnym, na&nbsp;którym działasz.
                    </span>
                  </p>
                  <p>
                    Hackuję fundamenty Twojego myślenia — o&nbsp;czasie, energii, tożsamości i&nbsp;narracjach.
                  </p>
                </div>

                <div className="flex flex-col gap-4 items-center md:items-start">
                  <Link to="/discovery">
                    <CTAButton
                      variant="premium"
                      size="xl"
                      className="shadow-xl"
                    >
                      Umów Sesję Discovery
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </CTAButton>
                  </Link>
                  <Link to="#truth" className="text-white/70 hover:text-white text-lg transition-colors">
                    Czytaj dalej ↓
                  </Link>
                </div>
              </div>

              {/* Profile Image - Takes 3 columns on desktop (60%), frameless and matches text height */}
              <div className="md:col-span-3 relative flex items-start">
                <img
                  src="/lovable-uploads/SIADLAK-coffee-transparent.png"
                  alt="Ludwik C. Siadlak - Lifehacker"
                  className="w-full h-auto max-h-[600px] md:max-h-[700px] object-contain object-top drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  style={{
                    filter: 'saturate(1.1) brightness(1.05)',
                    maskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 8%, black 100%)'
                  }}
                />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE LIE - INDUSTRY CALLOUT */}
      <section className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 text-lg px-6 py-3 mb-6">
                <AlertTriangle className="inline h-5 w-5 mr-2" />
                Prawda, której nikt Ci nie powie
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                Branża "produktywności" Cię okłamała.
              </h2>
            </div>

            <Card className="border-2 border-red-500/20 bg-gradient-to-br from-red-50 to-orange-50 mb-8">
              <CardContent className="p-8 md:p-12">
                <p className="text-xl text-deep-charcoal mb-6">
                  Powiedzieli Ci, że potrzebujesz:
                </p>
                <ul className="space-y-4 text-lg text-deep-charcoal/80 mb-8">
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>Lepszego systemu zarządzania zadaniami</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>Notion template za $99</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>
                      Kolejnej metodologii (GTD, Zettelkasten, PARA, co tam
                      jeszcze wymyślą)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                    <span>Work-life balance i mindfulness app</span>
                  </li>
                </ul>

                <p className="text-xl text-deep-charcoal mb-6">
                  I próbowałeś. Wszystkiego.
                </p>
                <p className="text-xl text-deep-charcoal mb-6">
                  Przez tydzień działało. Może dwa.
                </p>
                <p className="text-xl text-deep-charcoal mb-8">
                  A potem wracałeś do tego samego miejsca – tylko z kolejną
                  warstwą narzędzi, które nie działają, i rosnącym poczuciem, że{" "}
                  <strong>problem jest w Tobie, a nie w systemie</strong>.
                </p>

                <div className="bg-white p-6 rounded-xl border-2 border-neural-blue/20 mb-6">
                  <p className="text-xl font-bold text-neural-blue mb-3">
                    I mieli rację. Ale nie w taki sposób, jak myślałeś.
                  </p>
                  <p className="text-lg text-deep-charcoal">
                    Problem nigdy nie był w tym, że źle używasz narzędzi.
                  </p>
                </div>

                <p className="text-2xl font-bold text-deep-charcoal text-center">
                  Problem był w tym, że próbowałeś rozwiązać ludzki problem za
                  pomocą technologicznych rozwiązań.
                </p>
                <p className="text-xl text-center text-deep-charcoal/80 mt-4">
                  A to nigdy nie zadziała.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE TRUTH - PHILOSOPHICAL FOUNDATION */}
      <section
        id="truth"
        className="py-20 md:py-32 bg-gradient-to-br from-neural-blue/5 via-luminous-white to-twilight-indigo/5"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-lg px-6 py-3 mb-6">
                <Brain className="inline h-5 w-5 mr-2" />
                Filozoficzna głębia
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                To, czego naprawdę potrzebujesz, nie sprzedaje się dobrze.
              </h2>
            </div>

            <Card className="relative overflow-hidden border-2 border-neural-blue/20 mb-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative">
                <p className="text-xl text-deep-charcoal mb-8">
                  Bo wymaga czegoś więcej niż subskrypcji.
                </p>
                <p className="text-xl text-deep-charcoal mb-8">
                  Wymaga spojrzenia w lustro i zadania pytań, których większość
                  ludzi unika całe życie:
                </p>

                <div className="space-y-8">
                  <div className="bg-neural-blue/5 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-neural-blue mb-3">
                      Za co walczysz?
                    </h3>
                    <p className="text-lg text-deep-charcoal/80">
                      Jaki niewidzialny wróg trzyma Cię w miejscu? Jaką
                      sprawiedliwość próbujesz przywrócić? W jakiej narracji
                      ofiary lub sprawiedliwości ugrzązłeś?
                    </p>
                  </div>

                  <div className="bg-twilight-indigo/5 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-twilight-indigo mb-3">
                      Ile podatku płacisz każdego dnia?
                    </h3>
                    <p className="text-lg text-deep-charcoal/80">
                      Za historie, które sobie opowiadasz. Za tożsamość, którą
                      zbudowałeś. Za przekonania, które kiedyś Ci służyły, a
                      teraz Cię więzią.
                    </p>
                  </div>

                  <div className="bg-zenith-gold/5 p-6 rounded-xl">
                    <h3 className="text-2xl font-bold text-zenith-gold mb-3">
                      Kim musisz przestać być, żeby stać się tym, kim możesz
                      być?
                    </h3>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white rounded-xl border-2 border-neural-blue/20">
                  <p className="text-xl text-deep-charcoal mb-4">
                    To nie są pytania coachingowe. To są pytania filozoficzne.
                  </p>
                  <p className="text-xl text-deep-charcoal mb-4">
                    I odpowiedzi na nie nie znajdziesz w Notion template.
                  </p>
                  <p className="text-2xl font-bold text-neural-blue">
                    Znajdziesz je w przeprogramowaniu fundamentów – sposobu, w
                    jaki myślisz o czasie, energii, tożsamości i tym, co
                    naprawdę ważne.
                  </p>
                </div>

                <p className="text-xl text-center text-deep-charcoal mt-8">
                  To nie jest praca na powierzchni. To praca w głębi.
                </p>
                <p className="text-xl text-center text-deep-charcoal/80 mt-4">
                  I dlatego większość ludzi nigdy tego nie zrobi.
                </p>
                <p className="text-2xl font-bold text-center text-neural-blue mt-6">
                  Pytanie brzmi: czy Ty jesteś w tej większości?
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO AM I - ORIGIN STORY */}
      <section className="py-20 md:py-32 bg-deep-charcoal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Byłem chomikiem w kole.{" "}
                <span className="text-zenith-gold">
                  Myślałem, że to sukces.
                </span>
              </h2>
            </div>

            <Card className="bg-white/5 backdrop-blur-sm border-2 border-white/20">
              <CardContent className="p-8 md:p-12">
                <div className="space-y-6 text-lg text-white/90">
                  <p>
                    W wieku 16 lat byłem uzależniony od kodeiny. Migreny.
                    Systemy produktywności budowałem, żeby przetrwać.
                  </p>
                  <p>
                    Potem przyszedł sukces. 19 lat jako Certyfikowany Trener
                    Microsoft. Fortune 500. Jednostki wojskowe. Setki szkoleń.
                  </p>
                  <p className="text-xl text-white font-bold">
                    W 2014 roku stałem na balkonie i myślałem o skoku.
                  </p>
                  <p>
                    Miałem wszystko, o czym marzyłem. I absolutnie nic, czego
                    potrzebowałem.
                  </p>

                  <div className="bg-zenith-gold/10 p-6 rounded-xl border-2 border-zenith-gold/30 my-8">
                    <p className="text-2xl font-bold text-zenith-gold mb-4">
                      Zrozumiałem wtedy coś brutalnie prostego:
                    </p>
                    <p className="text-xl text-white">
                      Próbowałem rozwiązać ludzki problem za pomocą
                      technologicznych narzędzi. Byłem genialny w uczeniu
                      innych, jak używać systemów. Ale nikt nie nauczył mnie,
                      jak pozostać człowiekiem, który tym systemom dowodzi.
                    </p>
                  </div>

                  <p>
                    Więc musiałem to odkryć sam. Przez lata. Bolesnie. Na
                    własnej skórze.
                  </p>
                  <p>
                    Przeszedłem obie ścieżki – wojownika, który walczył z
                    niewidzialnymi wrogami. I poszukiwacza, który znalazł spokój
                    w przestaniu walki.
                  </p>
                  <p className="text-2xl font-bold text-white text-center mt-8">
                    Teraz uczę tego, co odkryłem.
                  </p>
                  <p className="text-xl text-center">
                    Nie jako guru. Jako ktoś, kto przeszedł przez to samo bagno,
                    w którym Ty teraz stoisz.
                  </p>
                  <p className="text-xl text-zenith-gold font-bold text-center">
                    I znalazł wyjście.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SECTION 5: THE METHOD - DUAL PATH REVEAL */}
      <section className="py-20 md:py-32 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-neural-blue to-twilight-indigo text-white border-0 text-lg px-6 py-3 mb-6">
                <Target className="inline h-5 w-5 mr-2" />
                Metodologia
              </Badge>
              <h2 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-8">
                Nie ma jednej ścieżki. Są dwie.{" "}
                <span className="text-neural-blue">
                  I musisz wiedzieć, której potrzebujesz.
                </span>
              </h2>
              <p className="text-xl text-deep-charcoal/80 max-w-3xl mx-auto">
                Większość coachów mówi Ci, że mają JEDNO rozwiązanie dla
                wszystkich.
              </p>
              <p className="text-2xl font-bold text-neural-blue mt-4">
                Ja mówię Ci prawdę: ludzie są w różnych miejscach i potrzebują
                różnych rzeczy.
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
                        ŚCIEŻKA WOJOWNIKA
                      </h3>
                      <p className="text-xl font-semibold text-deep-charcoal">
                        Dla tych, którzy walczą.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-deep-charcoal/80">
                    <p>
                      Jesteś uwięziony w narracjach ofiary, sprawiedliwości,
                      walki z niewidzialnymi wrogami. Masz wszystko, ale ciągle
                      czujesz, że za mało. Ciągle walczysz.
                    </p>
                    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                      <p className="font-bold text-red-700">
                        Potrzebujesz kogoś, kto odciągnie Ci skrzydła, zanim
                        nauczysz się lecieć.
                      </p>
                    </div>
                    <p>
                      To praca konfrontacyjna. Filozoficzna. Czasem brutalna.
                      Używam Junga, Fausta, Mistrza i Małgorzaty. Zadaję
                      pytania, które bolą. Robię rzeczy trudniejszymi, zanim
                      staną się łatwiejsze.
                    </p>
                    <p className="font-semibold text-deep-charcoal">
                      Bo czasem musisz przejść przez kontrolowany chaos, żeby
                      zobaczyć, że to Ty go tworzysz.
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
                      <h3 className="text-3xl font-bold text-twilight-indigo mb-2">
                        ŚCIEŻKA POSZUKIWACZA
                      </h3>
                      <p className="text-xl font-semibold text-deep-charcoal">
                        Dla tych, którzy osiągnęli już wszystko.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-lg text-deep-charcoal/80">
                    <p>
                      Zbudowałeś sukces. Zarabiasz dobrze. Masz to, o czym inni
                      marzą.
                    </p>
                    <p>I czujesz pustkę.</p>
                    <div className="bg-twilight-indigo/5 p-4 rounded-lg border border-twilight-indigo/20">
                      <p className="font-bold text-twilight-indigo">
                        Potrzebujesz pozwolenia na przestanie osiągania.
                      </p>
                    </div>
                    <p>
                      To praca delikatna. Wspierająca. Otwierająca przestrzeń.
                      Pokazuję, jak zintegrować duchowość z biznesem. Jak
                      przestać walczyć. Jak przyjąć to, co już masz.
                    </p>
                    <p className="font-semibold text-deep-charcoal">
                      Bo czasem największą transformacją jest odkrycie, że już
                      jesteś tam, gdzie chciałeś być.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="border-2 border-zenith-gold/30 bg-gradient-to-br from-zenith-gold/5 to-white">
              <CardContent className="p-8 text-center">
                <h3 className="text-3xl font-bold text-deep-charcoal mb-6">
                  Która ścieżka dla Ciebie?
                </h3>
                <p className="text-xl text-deep-charcoal mb-4">
                  Nie wiem. Ale po 30 minutach rozmowy – będę wiedział.
                </p>
                <p className="text-lg text-deep-charcoal/80 mb-6">
                  Bo to nie jest one-size-fits-all coaching. To diagnostyczna
                  praca, która wymaga zrozumienia, gdzie naprawdę jesteś.
                </p>
                <p className="text-2xl font-bold text-neural-blue">
                  Większość ludzi potrzebuje obu ścieżek. W różnych momentach.
                </p>
                <p className="text-xl text-deep-charcoal mt-4">
                  I to jest sztuka – wiedzieć, kiedy której użyć.
                </p>
              </CardContent>
            </Card>
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
              Jesteś gotów spojrzeć głębiej?
            </h2>

            <div className="space-y-6 text-xl text-deep-charcoal/80 mb-12">
              <p>Nie obiecuję, że będzie łatwo.</p>
              <p className="text-2xl font-bold text-neural-blue">
                Obiecuję, że będzie prawdziwe.
              </p>
              <p>
                Jeśli dotarłeś aż tutaj i to wszystko rezonuje – nie
                potrzebujesz więcej informacji.
              </p>
              <p className="text-2xl font-semibold text-deep-charcoal">
                Potrzebujesz rozmowy.
              </p>
            </div>

            <Card className="relative overflow-hidden border-2 border-neural-blue/20 mb-12">
              <div className="absolute top-0 right-0 w-32 h-32 bg-neural-blue/10 rounded-full blur-3xl"></div>
              <CardContent className="p-8 md:p-12 relative">
                <p className="text-2xl font-bold text-deep-charcoal mb-6">
                  30 minut. Bez sprzedaży. Bez bullshitu.
                </p>
                <div className="space-y-4 text-lg text-deep-charcoal/80">
                  <p>
                    Dowiem się, gdzie jesteś. Powiem Ci, czy mogę Ci pomóc. I
                    czy w ogóle chcę.
                  </p>
                  <div className="bg-neural-blue/5 p-6 rounded-xl">
                    <p className="text-xl font-semibold text-deep-charcoal mb-3">
                      Bo prawda jest taka:
                    </p>
                    <p>
                      Mam maksymalnie 5 miejsc jednocześnie. To nie jest
                      skalowalny biznes. To jest głęboka, intensywna praca
                      transformacyjna.
                    </p>
                  </div>
                  <p className="font-semibold">
                    I jeśli nie jesteś gotów – marnujemy sobie nawzajem czas.
                  </p>
                  <p className="text-2xl font-bold text-neural-blue">
                    Ale jeśli jesteś?
                  </p>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mb-12">
              <div className="relative inline-block">
                <div className="absolute -inset-2 bg-gradient-to-r from-neural-blue via-zenith-gold to-neural-blue rounded-2xl blur-xl opacity-50 animate-pulse"></div>
                <Link to="/discovery">
                  <CTAButton
                    variant="premium"
                    size="xl"
                    className="relative shadow-2xl"
                  >
                    Umów Sesję Discovery
                    <ArrowRight className="ml-2 h-6 w-6" />
                  </CTAButton>
                </Link>
              </div>
            </div>

            <div className="border-t-2 border-neural-blue/20 pt-8">
              <blockquote className="text-lg italic text-deep-charcoal/70 mb-4">
                "Potrzeba 20 lat, żeby zbudować reputację, i 5 minut, żeby ją
                zrujnować. Jeśli o tym pomyślisz, będziesz robić rzeczy
                inaczej."
              </blockquote>
              <p className="text-deep-charcoal/60">— Warren Buffett</p>
              <p className="text-xl text-neural-blue font-semibold mt-6">
                I ja myślę o tym każdego dnia.
              </p>
              <p className="text-2xl font-bold text-deep-charcoal mt-2">
                — Ludwik
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
