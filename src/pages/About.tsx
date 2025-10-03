import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, CheckCircle } from "@/lib/icons";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";

const About = () => {
  return (
    <Layout>
      <SEO {...getSEOConfig("/about")} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/30">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Static gradient orbs for subtle depth */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neural-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-twilight-indigo rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-block mb-6 px-6 py-2.5 bg-neural-blue/10 backdrop-blur-sm rounded-full border border-neural-blue/30 shadow-lg animate-fade-in">
              <span className="text-sm font-semibold text-neural-blue uppercase tracking-wide">
                Metoda Cyfrowego Dowodzenia™
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-8 text-deep-charcoal animate-fade-in leading-tight">
              Większość "guru produktywności" kłamie.
              <br />
              Nie potrzebujesz kolejnej aplikacji.
              <br />
              <span className="bg-gradient-to-r from-neural-blue to-twilight-indigo bg-clip-text text-transparent">
                Potrzebujesz odzyskać kontrolę.
              </span>
            </h1>

            {/* Subheading */}
            <p
              className="text-lg md:text-xl lg:text-2xl mb-10 text-deep-charcoal/80 animate-fade-in max-w-3xl mx-auto leading-relaxed"
              style={{ animationDelay: "0.2s" }}
            >
              <strong>
                Dla liderów, founderów i topowych specjalistów IT, którzy mimo
                sukcesu czują, że technologia zaczyna nimi rządzić, zamiast im
                służyć.
              </strong>
            </p>

            {/* CTA Button with gradient glow */}
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Link to="/discovery" onClick={() => window.scrollTo(0, 0)}>
                <div className="relative inline-block group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
                  <button className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white px-10 py-5 rounded-xl text-lg font-bold shadow-xl flex items-center gap-3 transition-all hover:scale-105">
                    Umów Sesję Discovery
                    <Calendar className="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </Link>
              <p className="mt-4 text-sm text-deep-charcoal/60 italic">
                Bezpłatna 30-minutowa rozmowa
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-b from-background to-muted/20 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        {/* Static gradient orbs */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-neural-blue rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-growth-gold rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-block mb-4 px-5 py-2 bg-red-500/10 rounded-full border border-red-500/20">
                <span className="text-sm font-semibold text-red-600 uppercase tracking-wide">
                  Rozpoznaj problem
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-deep-charcoal leading-tight">
                Zarabiasz świetne pieniądze i jesteś na szczycie w swojej
                dziedzinie
              </h2>
              <p className="text-2xl text-red-600 font-bold">
                Ale prawda jest taka, że stałeś się niewolnikiem własnych
                systemów.
              </p>
            </div>

            <p className="text-xl mb-12 text-deep-charcoal text-center font-medium">
              Jeśli tu trafiłeś, prawdopodobnie rozpoznajesz ten scenariusz:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-8 border-2 border-red-500/20 hover:border-red-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  Jesteś w pułapce "produktywności"
                </h3>
                <p className="text-deep-charcoal/80 leading-relaxed">
                  Testowałeś już wszystko – GTD, Notion, Asanę, Slack... i sto
                  innych narzędzi. Każde z nich obiecywało wolność, a w efekcie
                  dodało tylko kolejną warstwę chaosu i powiadomień.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-500/20 hover:border-red-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  Twój kalendarz Cię nienawidzi
                </h3>
                <p className="text-deep-charcoal/80 leading-relaxed">
                  Dni są wypełnione po brzegi spotkaniami i zadaniami, ale
                  wieczorem masz poczucie, że nie zrobiłeś nic naprawdę{" "}
                  <em>ważnego</em>. Jesteś zajęty, ale niekoniecznie efektywny.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-500/20 hover:border-red-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  Technologia Cię rozprasza, zamiast wspierać
                </h3>
                <p className="text-deep-charcoal/80 leading-relaxed">
                  Miała być lewarem, a stała się kulą u nogi. Zamiast realizować
                  wizję, gasisz pożary i reagujesz na ciągły strumień
                  informacji.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 border-2 border-red-500/20 hover:border-red-500/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  Straciłeś "ludzką przewagę"
                </h3>
                <p className="text-deep-charcoal/80 leading-relaxed">
                  Twoja kreatywność i zdolność do głębokiego myślenia są
                  degradowane przez powierzchowną, reaktywną pracę, której
                  wymaga od Ciebie cyfrowy ekosystem.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-neural-blue/10 rounded-2xl p-10 border-2 border-red-500/30 text-center shadow-xl">
              <p className="text-2xl md:text-3xl text-deep-charcoal font-bold">
                <strong>Problem jest prosty:</strong> Próbujesz rozwiązać ludzki
                problem za pomocą technologicznych narzędzi. To nigdy nie
                zadziała.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section with Image */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/18c4e8c1-8757-4b04-89ac-7f17deeae65f.png"
                alt="Ludwik Siadlak"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>

            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal">
                Moja historia: Jak odkryłem błąd w systemie
              </h2>

              <p className="text-lg mb-6 text-subtle-slate">
                Przez 19 lat, jako certyfikowany trener Microsoft, widziałem to
                z pierwszej ręki. Pracowałem z najlepszymi – od zespołów w
                firmach z listy Fortune 500 po elitarne jednostki wojskowe.
                Wszędzie widziałem ten sam schemat: genialni ludzie,
                przytłoczeni przez technologię, której mieli być panami.
              </p>

              <p className="text-lg mb-6 text-subtle-slate">
                Przełom nastąpił, gdy obserwowałem w korporacyjnej sali
                szkoleniowej dewelopera-gwiazdę, który próbował wdrożyć kolejne
                narzędzie do automatyzacji. Zamiast ulgi, na twarzach jego
                zespołu widziałem tylko rezygnację i zmęczenie.
              </p>

              <p className="text-lg mb-6 text-subtle-slate">
                Zrozumiałem wtedy, że{" "}
                <strong>
                  brakującym elementem nie jest technologia, ale człowiek
                </strong>
                . Wszyscy uczyli <em>jak używać narzędzi</em>. Nikt nie uczył,{" "}
                <em>
                  jak pozostać człowiekiem, który tymi narzędziami dowodzi
                </em>
                .
              </p>

              <p className="text-lg text-deep-charcoal">
                Dlatego porzuciłem tradycyjne szkolenia i stworzyłem{" "}
                <strong>Metodę Cyfrowego Dowodzenia™</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Method Section */}
      <section className="py-16 md:py-24 bg-luminous-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal">
              Nie uczę Cię obsługi narzędzi. Uczę Cię, jak zbudować system, w
              którym to Ty wydajesz rozkazy.
            </h2>

            <p className="text-lg mb-6 text-subtle-slate">
              Moje podejście jest inne, bo opiera się na brutalnie prostej
              prawdzie:
            </p>

            <p className="text-2xl font-bold mb-8 text-neural-blue text-center">
              Twoje człowieczeństwo jest Twoją największą przewagą
              konkurencyjną.
            </p>

            <p className="text-lg mb-8 text-subtle-slate">
              Zamiast wciskać Ci kolejną aplikację, pracujemy nad trzema
              filarami <strong>Cyfrowego Dowodzenia™</strong>:
            </p>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  1. Filozofia Dowódcy:
                </h3>
                <p className="text-subtle-slate">
                  Najpierw definiujemy Twoje cele, wartości i unikalny styl
                  pracy. Zanim dotkniemy technologii, musimy wiedzieć,{" "}
                  <em>czemu</em> ma służyć.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  2. Architektura Systemu:
                </h3>
                <p className="text-subtle-slate">
                  Projektujemy spersonalizowany, minimalistyczny system, w
                  którym technologia jest Twoim posłusznym żołnierzem, a nie
                  chaotycznym najemnikiem.
                </p>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-deep-charcoal">
                  3. Integracja, nie adaptacja:
                </h3>
                <p className="text-subtle-slate">
                  Pokazuję, jak zintegrować ten system z Twoim życiem, aby
                  działał w tle, dając Ci przestrzeń na to, co najważniejsze –
                  myślenie, tworzenie i przewodzenie.
                </p>
              </div>
            </div>

            <p className="text-xl font-bold text-center mt-8 text-deep-charcoal">
              To nie jest kolejny kurs produktywności. To odzyskanie Twojej
              cyfrowej suwerenności.
            </p>
          </div>
        </div>
      </section>

      {/* Credentials Section with Image */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal">
                Dlaczego możesz mi zaufać? Bo nie jestem teoretykiem.
              </h2>

              <p className="text-lg mb-6 text-subtle-slate">
                To, czego uczę, przetestowałem w ogniu walki – na sobie i
                setkach klientów w najbardziej wymagających środowiskach.
              </p>

              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-deep-charcoal">
                    <strong>19+ lat doświadczenia</strong> jako Certyfikowany
                    Trener Microsoft.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-deep-charcoal">
                    <strong>
                      Szkoliłem zespoły w firmach z listy Fortune 500
                    </strong>{" "}
                    i organizacjach wojskowych.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-deep-charcoal">
                    <strong>Twórca Metody Hakowania Produktywnosci™</strong>,
                    używanej przez profesjonalistów na całym świecie.
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-neural-blue mt-1 mr-3 flex-shrink-0" />
                  <span className="text-deep-charcoal">
                    <strong>Założyciel społeczności "Lifehackerzy"</strong> z
                    ponad 150 aktywnymi członkami, którzy odzyskali kontrolę.
                  </span>
                </li>
              </ul>

              <p className="text-lg text-subtle-slate">
                A kiedy nie pracuję, nie znajdziesz mnie medytującego nad
                aplikacją do mindfulness. Znajdziesz mnie na torze wyścigowym z
                moim motocyklem, gdzie liczy się 100% skupienia, albo ćwiczącego
                śpiew, gdzie technika musi służyć emocjom. Rozumiem, że
                prawdziwe życie dzieje się poza ekranem.
              </p>
            </div>

            <div className="lg:w-1/2">
              <img
                src="/lovable-uploads/SIADLAK-ig.png"
                alt="Ludwik Siadlak - życie poza ekranem"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-24 bg-gradient-to-br from-neural-blue/10 to-growth-gold/5 overflow-hidden">
        {/* Grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] opacity-20"></div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-10 md:p-16 border-2 border-neural-blue/20 shadow-2xl">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal">
                Jesteś gotów, by technologia znów zaczęła pracować dla Ciebie?
              </h2>

              <p className="text-lg mb-4 text-deep-charcoal/80">
                Jeśli rezonuje z Tobą idea, że to{" "}
                <strong>Ty masz być dowódcą, a nie sługą technologii</strong>,
                mamy o czym rozmawiać.
              </p>

              <p className="text-lg mb-8 text-deep-charcoal/80">
                Przestań szukać magicznych rozwiązań w kolejnej aplikacji.
                Zainwestuj w system, który przywróci Ci kontrolę.
              </p>

              <div className="mb-4">
                <Link to="/discovery" onClick={() => window.scrollTo(0, 0)}>
                  <div className="relative inline-block group">
                    <div className="absolute -inset-1.5 bg-gradient-to-r from-neural-blue via-twilight-indigo to-neural-blue rounded-xl blur-md opacity-60 group-hover:opacity-100 transition duration-300"></div>
                    <Button
                      size="lg"
                      className="relative bg-gradient-to-r from-neural-blue to-twilight-indigo hover:from-twilight-indigo hover:to-neural-blue text-white text-lg px-8 py-4"
                      aria-label="Umów Sesję Discovery"
                    >
                      Umów Sesję Discovery
                      <Calendar className="h-5 w-5 ml-2" aria-hidden="true" />
                    </Button>
                  </div>
                </Link>
              </div>

              <p className="text-sm text-deep-charcoal/60 italic">
                (Liczba miejsc ograniczona, aby zapewnić najwyższą jakość pracy
                z każdym Klientem)
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
