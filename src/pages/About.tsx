import Layout from "@/components/layout/Layout";
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

      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-void-glow relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Badge */}
            <div className="flex justify-center mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-4 sm:px-6 py-2 sm:py-3">
                <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-xs sm:text-sm font-bold text-text-on-dark">
                  19 LAT DOŚWIADCZENIA
                </span>
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold mb-4 sm:mb-6 leading-tight text-text-on-dark text-center break-words">
              Dobra, <span className="text-electric">słuchaj</span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium mb-6 sm:mb-8 text-text-dim leading-relaxed text-center max-w-4xl mx-auto">
              Będę z Tobą szczery – większość tego, co widzisz na tej stronie, to... niepełna prawda. Bo kiedy mówię "coaching produktywności", to jak sprzedawanie Ci biletu na koncert, a potem zabranie Cię na ceremonię zmiany życia, od której nie ma już odwrotu.
            </p>

            <div className="mb-8">
              <p className="text-xl sm:text-2xl font-bold text-center text-electric">
                Produktywność to był koń trojański. To, po co naprawdę tu jesteś, to coś zupełnie innego.
              </p>
            </div>

            {/* Social Proof */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-8">
              <div className="flex items-center gap-2 border border-white/10 rounded-sm px-3 sm:px-4 py-2">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-electric" />
                <span className="text-sm sm:text-base font-semibold text-text-on-dark">
                  Fortune 500 + Jednostki Wojskowe
                </span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 sm:h-5 sm:w-5 text-electric fill-electric"
                  />
                ))}
                <span className="ml-2 text-sm sm:text-base font-semibold text-text-on-dark">
                  Certyfikowany Trener Microsoft
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-col items-center gap-4 mb-6">
              <Link to="/discovery" onClick={() => window.scrollTo(0, 0)} className="w-full sm:w-auto">
                <button
                  className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded font-semibold text-white uppercase tracking-wide text-sm w-full sm:w-auto"
                  style={{
                    background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                    boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                  }}
                >
                  <span className="font-bold">Umów Sesję Discovery</span>
                  <Calendar className="h-5 w-5" aria-hidden="true" />
                </button>
              </Link>

              <p className="text-sm sm:text-base font-semibold text-text-on-dark">
                <span className="text-electric">
                  Bezpłatna 30-minutowa rozmowa
                </span>{" "}
                • Maksymalnie 5 aktywnych klientów jednocześnie
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* Byłem tam Section */}
      <ContentTextSection
        title="Byłem tam, gdzie Ty teraz jesteś"
        backgroundVariant="light"
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

        <div className="rounded-sm p-8 border border-text-on-light/10 text-center my-8">
          <p className="font-bold mb-4">
            I pewnego dnia, w 2014 roku, stałem na balkonie i myślałem o skoku.
          </p>
          <p className="text-text-on-light/80">
            Miałem wszystko, o czym marzyłem. I absolutnie nic, czego
            potrzebowałem.
          </p>
        </div>

        <p className="pt-8">Jeśli tu trafiłeś, prawdopodobnie:</p>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {[
            { title: "Zarabiasz świetne pieniądze", desc: "Osiągnąłeś zewnętrzny sukces – ale czujesz pustkę tam, gdzie powinna być satysfakcja." },
            { title: "Jesteś uwięziony w narracjach", desc: "Które kiedyś Ci służyły, a teraz Cię więzą. Walczysz z niewidzialnymi wrogami lub czujesz, że ciągle za mało." },
            { title: "Testujesz kolejne systemy", desc: "Które dodają tylko więcej chaosu zamiast porządku. Kolejna aplikacja. Kolejna metodologia. To samo bagno." },
            { title: "Jesteś \"produktywny\"", desc: "Ale tracisz kontakt z tym, dlaczego w ogóle to wszystko robisz. Zajęty, ale wypalony." },
          ].map((item) => (
            <div key={item.title} className="rounded-sm p-8 border border-text-on-light/10">
              <div className="w-12 h-12 bg-depth rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-3 text-text-on-light">{item.title}</h3>
              <p className="leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="rounded-sm p-8 border border-text-on-light/10 text-center mt-8">
          <p className="font-bold mb-4">
            Byłem chomikiem w kole. Nie wiedziałem tylko, że to klatka.
            Myślałem, że to sukces.
          </p>
          <p>Przełom przyszedł, kiedy zrozumiałem coś brutalnie prostego:</p>
        </div>

        <div className="rounded-sm p-8 border border-text-on-light/10 text-center bg-electric/5">
          <p className="font-bold">
            Próbowałem rozwiązać ludzki problem za pomocą technologicznych
            narzędzi. To nigdy nie zadziała.
          </p>
        </div>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Nie uczę Section with Image */}
      <section className="section-content bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto rounded-sm"
              />
            </div>

            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-text-on-dark">
                Nie uczę. Katalizuję. Prowadzę. Transformuję.
              </h2>

              <p className="text-lg md:text-xl text-text-dim leading-relaxed">
                Pracuję na dwóch ścieżkach, bo sam przeszedłem obie:
              </p>

              <div className="space-y-6">
                <div className="p-8 rounded-sm border border-white/10">
                  <h3 className="text-lg font-bold mb-3 text-electric">
                    ŚCIEŻKA WOJOWNIKA
                  </h3>
                  <p className="text-lg text-text-dim leading-relaxed">
                    Dla tych, którzy utknęli w narracjach ofiary i
                    sprawiedliwości. Którzy walczą z niewidzialnymi wrogami i
                    potrzebują kogoś, kto odciągnie ich skrzydła, zanim nauczą
                    się lecieć. To praca filozoficzna, konfrontacyjna, czasem
                    brutalna. Używam Junga, Fausta, Mistrza i Małgorzaty.
                  </p>
                </div>

                <div className="p-8 rounded-sm border border-white/10">
                  <h3 className="text-lg font-bold mb-3 text-electric">
                    ŚCIEŻKA POSZUKIWACZA
                  </h3>
                  <p className="text-lg text-text-dim leading-relaxed">
                    Dla tych, którzy osiągnęli już wszystko, ale czują, że to za
                    mało. Którzy potrzebują pozwolenia na przestanie osiągania.
                    Na bycie. Na integrację duchowości z biznesem, nie
                    wybieranie jednego kosztem drugiego. To praca delikatna,
                    wspierająca, otwierająca przestrzeń.
                  </p>
                </div>
              </div>

              <p className="text-lg font-bold text-text-on-dark">
                Większość klientów potrzebuje obu. W różnych momentach. I ja
                wiem, kiedy której ścieżki użyć, bo sam byłem zarówno
                wojownikiem, jak i poszukiwaczem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* To nie dla każdego Section */}
      <ContentGridSection
        title="To nie dla każdego (i dobrze)"
        columns={2}
        gap="lg"
        backgroundVariant="light"
      >
        <div className="p-8 rounded-sm border border-text-on-light/10">
          <h3 className="text-xl font-bold mb-6 text-text-on-light">
            ❌ Jeśli szukasz:
          </h3>
          <ul className="space-y-4 text-lg text-text-on-light/80">
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
          <p className="mt-6 font-bold text-text-on-light">
            To nie jest miejsce dla Ciebie.
          </p>
        </div>

        <div className="p-8 rounded-sm border border-electric/20 bg-electric/5">
          <h3 className="text-xl font-bold mb-6 text-electric">
            ✅ Ale jeśli:
          </h3>
          <ul className="space-y-4 text-lg text-text-on-light/80">
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
          <p className="mt-6 font-bold text-electric text-2xl">
            Witaj w domu.
          </p>
        </div>
      </ContentGridSection>

      <div className="the-cut" />

      {/* Life OS Callout */}
      <ContentTextSection alignment="center" maxWidth="900px" backgroundVariant="muted">
        <div className="rounded-sm p-8 border border-white/10 text-center">
          <p className="font-bold mb-4">
            Moja metoda jest inna, bo opiera się na brutalnie prostej prawdzie:
          </p>
          <p className="text-2xl font-bold text-electric mb-6">
            Twoje człowieczeństwo jest Twoją największą przewagą konkurencyjną.
          </p>
          <p className="mb-4">
            Nie potrzebujesz kolejnego systemu. Potrzebujesz upgrade'u systemu
            operacyjnego, na którym działasz.
          </p>
          <p className="font-bold text-electric">Nazywam to Life OS.</p>
        </div>

        <p className="italic mt-8">
          Bo prawda jest taka:{" "}
          <strong>
            Produktywność była koniem trojańskim. Praca z duszą to to, po co
            naprawdę przyszedłeś.
          </strong>
        </p>
      </ContentTextSection>

      <div className="the-cut" />

      {/* Credentials Section with Image */}
      <section className="section-content bg-diamond-light">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col lg:flex-row gap-12 items-center max-w-6xl mx-auto">
            <div className="lg:w-1/2 space-y-8">
              <h2 className="font-heading text-2xl md:text-4xl font-bold text-text-on-light">
                Dlaczego możesz mi zaufać
              </h2>

              <p className="text-lg md:text-xl text-text-on-light/80 leading-relaxed">
                Nie jestem teoretykiem. Nie jestem kolejnym guru produktywności,
                który sprzedaje tę samą metodologię w nowym opakowaniu.
              </p>

              <p className="text-lg md:text-xl text-text-on-light font-bold leading-relaxed">
                Jestem kimś, kto:
              </p>

              <ul className="space-y-3">
                {[
                  "Zbudował systemy produktywności jako mechanizm przetrwania w wieku 16 lat",
                  "Osiągnął zewnętrzny sukces i odkrył wewnętrzną pustkę",
                  "Przeszedł przez transformację PRZED tym, jak zaczął pomagać innym",
                  "Pracował z najlepszymi – Fortune 500, jednostki wojskowe, przedsiębiorcy na poziomie 6-7 cyfr",
                  "Ma tatuaż Profesora Wołanda (Mistrz i Małgorzata) zrobiony w Wielki Piątek, synchronistycznie",
                  "Żyje tym, czego uczy – codziennie o 12:30 na Discordzie, nie jako odległy guru",
                ].map((text) => (
                  <li key={text} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-electric mt-1 mr-3 flex-shrink-0" />
                    <span className="text-lg md:text-xl text-text-on-light/80 leading-relaxed">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <p className="text-lg md:text-xl text-text-on-light/80 leading-relaxed">
                Mam{" "}
                <strong>
                  19 lat doświadczenia jako Certyfikowany Trener Microsoft
                </strong>{" "}
                w SQL, PowerBI i Copilot.
              </p>

              <p className="text-lg md:text-xl font-bold text-text-on-light leading-relaxed">
                Ale to, czego naprawdę nauczyłem się przez te lata, to że{" "}
                <span className="text-electric">
                  technologia nigdy nie była problemem. Człowiek był
                </span>
                .
              </p>
            </div>

            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/SIADLAK-ig.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="the-cut" />

      {/* CTA Section */}
      <ContentTextSection
        backgroundVariant="muted"
        alignment="center"
        maxWidth="900px"
      >
        <div className="rounded-sm p-12 border border-white/10">
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-6 text-text-on-dark">Jesteś gotów?</h2>

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
              <button
                className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded font-semibold text-white uppercase tracking-wide text-sm"
                style={{
                  background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                  boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                }}
              >
                Umów bezpłatną 30-minutową Sesję Discovery
                <Calendar className="h-5 w-5" aria-hidden="true" />
              </button>
            </Link>
          </div>

          <p className="text-text-dim mb-8">
            (Liczba miejsc ograniczona – pracuję maksymalnie z 5 klientami
            jednocześnie, bo jakość &gt; ilość)
          </p>

          <div className="border-t border-white/10 pt-8 mt-8">
            <p className="text-text-dim italic mb-4">
              "Potrzeba 20 lat, żeby zbudować reputację, i 5 minut, żeby ją
              zrujnować. Jeśli o tym pomyślisz, będziesz robić rzeczy inaczej."
            </p>
            <p className="text-text-dim">— Warren Buffett</p>
          </div>

          <p className="text-text-on-dark mt-6 font-medium">
            I ja myślę o tym każdego dnia.
          </p>

          <p className="text-xl font-bold text-electric mt-4">— Ludwik</p>
        </div>
      </ContentTextSection>
    </Layout>
  );
};

export default About;
