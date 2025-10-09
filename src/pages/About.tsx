import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle, Users, Star } from "@/lib/icons";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import {
  ContentTextSection,
  ContentGridSection,
} from "@/components/sections/content";

const About = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/about")} />

      {/* Hero Section - Premium Design */}
      <section className="py-12 md:py-20 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neural-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-twilight-indigo/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Urgency Badge - Top */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-neural-blue/20 to-twilight-indigo/20 backdrop-blur-sm border border-neural-blue/30 rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-xs sm:text-sm font-bold text-locked-white">
                  19 LAT DOŚWIADCZENIA
                </span>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight text-locked-white text-center">
              Dobra, <span className="text-locked-gradient">słuchaj</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-locked-silver leading-relaxed text-center max-w-4xl mx-auto">
              Będę z Tobą szczery – większość tego, co widzisz na tej stronie, to... niepełna prawda. Bo kiedy mówię "coaching produktywności", to jak sprzedawanie Ci biletu na koncert, a potem zabranie Cię na ceremonię zmiany życia, od której nie ma już odwrotu.
            </p>

            {/* Callout */}
            <div className="mb-8">
              <p className="text-xl sm:text-2xl font-bold text-center text-twilight-indigo">
                Produktywność to był koń trojański. To, po co naprawdę tu jesteś, to coś zupełnie innego.
              </p>
            </div>

            {/* Social Proof - Above CTA */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 bg-locked-white/10 backdrop-blur-sm rounded-lg px-3 sm:px-4 py-2 border border-locked-white/20">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-twilight-indigo" />
                <span className="text-sm sm:text-base font-semibold text-locked-white">
                  Fortune 500 + Jednostki Wojskowe
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-400 fill-yellow-400"
                  />
                ))}
                <span className="ml-2 text-sm sm:text-base font-semibold text-locked-white">
                  Certyfikowany Trener Microsoft
                </span>
              </div>
            </div>

            {/* Primary CTA - Prominent */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <Link to="/discovery" onClick={() => window.scrollTo(0, 0)} className="w-full sm:w-auto">
                <div className="relative group inline-block w-full sm:w-auto">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-pulse"></div>
                  <Button
                    variant="special"
                    size="lg"
                    className="relative btn-locked-primary text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-5 w-full sm:w-auto shadow-2xl hover:scale-105 transition-transform duration-200"
                  >
                    <span className="flex items-center justify-center gap-3">
                      <span className="font-bold">
                        Umów Sesję Discovery
                      </span>
                      <Calendar className="h-5 w-5" aria-hidden="true" />
                    </span>
                  </Button>
                </div>
              </Link>

              {/* Scarcity - Below CTA */}
              <p className="text-sm sm:text-base font-semibold text-locked-white">
                <span className="text-twilight-indigo">
                  Bezpłatna 30-minutowa rozmowa
                </span>{" "}
                • Maksymalnie 5 aktywnych klientów jednocześnie
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Byłem tam Section */}
      <ContentTextSection
        title="Byłem tam, gdzie Ty teraz jesteś"
        backgroundVariant="muted"
        alignment="center"
        maxWidth="900px"
      >
        <p>
          W wieku 16 lat byłem uzależniony od kodeiny. Migreny, które nie
          pozwalały mi żyć. Systemy produktywności budowałem, żeby przetrwać,
          nie żeby się rozwijać. Potem przyszedł sukces. Certyfikowany Trener
          Microsoft. 19 lat doświadczenia. Fortune 500. Jednostki wojskowe.
          Setki szkoleń. Wszystko działało.
        </p>

        <div className="glass-card rounded-2xl p-8 border border-neural-blue/20 text-center my-8">
          <p className="font-bold mb-4">
            I pewnego dnia, w 2014 roku, stałem na balkonie i myślałem o skoku.
          </p>
          <p className="text-deep-charcoal/80">
            Miałem wszystko, o czym marzyłem. I absolutnie nic, czego
            potrzebowałem.
          </p>
        </div>

        <p className="pt-8">Jeśli tu trafiłeś, prawdopodobnie:</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="glass-card rounded-xl p-8 border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-deep-charcoal">
              Zarabiasz świetne pieniądze
            </h3>
            <p className="leading-relaxed">
              Osiągnąłeś zewnętrzny sukces – ale czujesz pustkę tam, gdzie
              powinna być satysfakcja.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-deep-charcoal">
              Jesteś uwięziony w narracjach
            </h3>
            <p className="leading-relaxed">
              Które kiedyś Ci służyły, a teraz Cię więzą. Walczysz z
              niewidzialnymi wrogami lub czujesz, że ciągle za mało.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-deep-charcoal">
              Testujesz kolejne systemy
            </h3>
            <p className="leading-relaxed">
              Które dodają tylko więcej chaosu zamiast porządku. Kolejna
              aplikacja. Kolejna metodologia. To samo bagno.
            </p>
          </div>

          <div className="glass-card rounded-xl p-8 border border-neural-blue/20 hover:border-neural-blue/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 bg-gradient-to-br from-neural-blue to-twilight-indigo rounded-full flex items-center justify-center mb-4 shadow-lg">
              <CheckCircle className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold mb-3 text-deep-charcoal">
              Jesteś "produktywny"
            </h3>
            <p className="leading-relaxed">
              Ale tracisz kontakt z tym, dlaczego w ogóle to wszystko robisz.
              Zajęty, ale wypalony.
            </p>
          </div>
        </div>

        <div className="glass-card rounded-2xl p-8 border border-neural-blue/20 text-center mt-8">
          <p className="font-bold mb-4">
            Byłem chomikiem w kole. Nie wiedziałem tylko, że to klatka.
            Myślałem, że to sukces.
          </p>
          <p>Przełom przyszedł, kiedy zrozumiałem coś brutalnie prostego:</p>
        </div>

        <div className="glass-card rounded-2xl p-8 border border-neural-blue/20 text-center bg-neural-blue/5">
          <p className="font-bold">
            Próbowałem rozwiązać ludzki problem za pomocą technologicznych
            narzędzi. To nigdy nie zadziała.
          </p>
        </div>
      </ContentTextSection>

      {/* Nie uczę Section with Image */}
      <section className="section-content bg-luminous-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="lg:w-1/2 space-y-8">
              <h2 className="content-h2 text-deep-charcoal">
                Nie uczę. Katalizuję. Prowadzę. Transformuję.
              </h2>

              <p className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                Pracuję na dwóch ścieżkach, bo sam przeszedłem obie:
              </p>

              <div className="space-y-6">
                <div className="glass-card p-8 rounded-xl border border-neural-blue/20">
                  <h3 className="text-lg font-bold mb-3 text-neural-blue">
                    ŚCIEŻKA WOJOWNIKA
                  </h3>
                  <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                    Dla tych, którzy utknęli w narracjach ofiary i
                    sprawiedliwości. Którzy walczą z niewidzialnymi wrogami i
                    potrzebują kogoś, kto odciągnie ich skrzydła, zanim nauczą
                    się lecieć. To praca filozoficzna, konfrontacyjna, czasem
                    brutalna. Używam Junga, Fausta, Mistrza i Małgorzaty.
                  </p>
                </div>

                <div className="glass-card p-8 rounded-xl border border-neural-blue/20">
                  <h3 className="text-lg font-bold mb-3 text-neural-blue">
                    ŚCIEŻKA POSZUKIWACZA
                  </h3>
                  <p className="text-lg text-deep-charcoal/80 leading-relaxed">
                    Dla tych, którzy osiągnęli już wszystko, ale czują, że to za
                    mało. Którzy potrzebują pozwolenia na przestanie osiągania.
                    Na bycie. Na integrację duchowości z biznesem, nie
                    wybieranie jednego kosztem drugiego. To praca delikatna,
                    wspierająca, otwierająca przestrzeń.
                  </p>
                </div>
              </div>

              <p className="text-lg font-bold text-deep-charcoal">
                Większość klientów potrzebuje obu. W różnych momentach. I ja
                wiem, kiedy której ścieżki użyć, bo sam byłem zarówno
                wojownikiem, jak i poszukiwaczem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* To nie dla każdego Section */}
      <ContentGridSection
        title="To nie dla każdego (i dobrze)"
        columns={2}
        gap="lg"
        backgroundVariant="muted"
      >
        <div className="glass-card p-8 rounded-xl border border-neural-blue/20">
          <h3 className="text-xl font-bold mb-6 text-deep-charcoal">
            ❌ Jeśli szukasz:
          </h3>
          <ul className="space-y-4 text-lg text-deep-charcoal/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Kolejnej aplikacji do zarządzania zadaniami</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Szybkich trików na produktywność</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Bezpiecznego coachingu, który Cię przytuli i powie, że wszystko
                jest okej
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Powierzchownych rozwiązań bez głębokiej pracy</span>
            </li>
          </ul>
          <p className="mt-6 font-bold text-deep-charcoal">
            To nie jest miejsce dla Ciebie.
          </p>
        </div>

        <div className="glass-card p-8 rounded-xl border border-neural-blue/20 bg-neural-blue/5">
          <h3 className="text-xl font-bold mb-6 text-neural-blue">
            ✅ Ale jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-deep-charcoal/80">
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Zarabiasz €100K-10M+ rocznie i czujesz, że to za mało</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>Jesteś uwięziony w narracjach, które Cię więzą</span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Potrzebujesz kogoś wystarczająco brutalnego, by powiedzieć Ci
                prawdę
              </span>
            </li>
            <li className="flex items-start">
              <span className="mr-3">•</span>
              <span>
                Chcesz filozofii, która się opłaca – nie teorii, która brzmi
                ładnie
              </span>
            </li>
          </ul>
          <p className="mt-6 font-bold text-neural-blue text-2xl">
            Witaj w domu.
          </p>
        </div>
      </ContentGridSection>

      {/* Life OS Callout */}
      <ContentTextSection alignment="center" maxWidth="900px">
        <div className="glass-card rounded-2xl p-8 border border-neural-blue/20 text-center">
          <p className="font-bold mb-4">
            Moja metoda jest inna, bo opiera się na brutalnie prostej prawdzie:
          </p>
          <p className="text-2xl font-bold text-neural-blue mb-6">
            Twoje człowieczeństwo jest Twoją największą przewagą konkurencyjną.
          </p>
          <p className="mb-4">
            Nie potrzebujesz kolejnego systemu. Potrzebujesz upgrade'u systemu
            operacyjnego, na którym działasz.
          </p>
          <p className="font-bold text-neural-blue">Nazywam to Life OS.</p>
        </div>

        <p className="italic mt-8">
          Bo prawda jest taka:{" "}
          <strong>
            Produktywność była koniem trojańskim. Praca z duszą to to, po co
            naprawdę przyszedłeś.
          </strong>
        </p>
      </ContentTextSection>

      {/* Credentials Section with Image */}
      <section className="section-content bg-luminous-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="content-h2 text-deep-charcoal">
                Dlaczego możesz mi zaufać
              </h2>

              <p className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                Nie jestem teoretykiem. Nie jestem kolejnym guru produktywności,
                który sprzedaje tę samą metodologię w nowym opakowaniu.
              </p>

              <p className="text-lg md:text-xl text-deep-charcoal font-bold leading-relaxed">
                Jestem kimś, kto:
              </p>

              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                    Zbudował systemy produktywności jako mechanizm przetrwania w
                    wieku 16 lat
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                    Osiągnął zewnętrzny sukces i odkrył wewnętrzną pustkę
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                    Przeszedł przez transformację PRZED tym, jak zaczął pomagać
                    innym
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                    <strong>Pracował z najlepszymi</strong> – Fortune 500,
                    jednostki wojskowe, przedsiębiorcy na poziomie 6-7 cyfr
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                    Ma tatuaż Profesora Wołanda (Mistrz i Małgorzata) zrobiony w
                    Wielki Piątek, synchronistycznie
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                    Żyje tym, czego uczy – codziennie o 12:30 na Discordzie, nie
                    jako odległy guru
                  </span>
                </li>
              </ul>

              <p className="text-lg md:text-xl text-deep-charcoal/80 leading-relaxed">
                Mam{" "}
                <strong>
                  19 lat doświadczenia jako Certyfikowany Trener Microsoft
                </strong>{" "}
                w SQL, PowerBI i Copilot.
              </p>

              <p className="text-lg md:text-xl font-bold text-deep-charcoal leading-relaxed">
                Ale to, czego naprawdę nauczyłem się przez te lata, to że{" "}
                <span className="text-neural-blue">
                  technologia nigdy nie była problemem. Człowiek był
                </span>
                .
              </p>
            </div>

            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/SIADLAK-ig.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContentTextSection
        backgroundVariant="muted"
        alignment="center"
        maxWidth="900px"
      >
        <div className="glass-card rounded-2xl p-12 border border-neural-blue/20 shadow-xl">
          <h2 className="content-h2 mb-6 text-deep-charcoal">Jesteś gotów?</h2>

          <p className="mb-6">
            Jeśli to, co przeczytałeś, rezonuje – jeśli czujesz, że to jest coś,
            czego szukałeś, nawet jeśli nie wiedziałeś, że tego szukasz –{" "}
            <strong>mamy o czym rozmawiać</strong>.
          </p>

          <p className="mb-8">
            Nie obiecuję, że będzie łatwo.{" "}
            <strong>Obiecuję, że będzie prawdziwe.</strong>
          </p>

          <div className="mb-6">
            <Link to="/discovery" onClick={() => window.scrollTo(0, 0)}>
              <div className="relative inline-block group">
                <div className="absolute -inset-1 bg-gradient-to-r from-neural-blue to-twilight-indigo rounded-xl blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                <Button
                  size="lg"
                  className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white text-lg px-8 py-4"
                  aria-label="Umów Sesję Discovery"
                >
                  Umów bezpłatną 30-minutową Sesję Discovery
                  <Calendar className="h-5 w-5 ml-2" aria-hidden="true" />
                </Button>
              </div>
            </Link>
          </div>

          <p className="text-deep-charcoal/60 mb-8">
            (Liczba miejsc ograniczona – pracuję maksymalnie z 5 klientami
            jednocześnie, bo jakość &gt; ilość)
          </p>

          <div className="border-t border-neural-blue/20 pt-8 mt-8">
            <p className="text-deep-charcoal/70 italic mb-4">
              "Potrzeba 20 lat, żeby zbudować reputację, i 5 minut, żeby ją
              zrujnować. Jeśli o tym pomyślisz, będziesz robić rzeczy inaczej."
            </p>
            <p className="text-deep-charcoal/60">— Warren Buffett</p>
          </div>

          <p className="text-deep-charcoal mt-6 font-medium">
            I ja myślę o tym każdego dnia.
          </p>

          <p className="text-xl font-bold text-neural-blue mt-4">— Ludwik</p>
        </div>
      </ContentTextSection>
    </Layout>
  );
};

export default About;
