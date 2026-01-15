import SEO from "@/components/SEO";
import Layout from "@/components/layout/Layout";
import { CTAButton } from "@/components/ui/cta-button";
import { Card } from "@/components/ui/card";
import { Anchor, Compass, Target, Ship, MapPin } from "lucide-react";
import kodKapitanaHero from "@/assets/kod-kapitana-hero.png";

export default function WebinarKodKapitana() {
  const ctaUrl = "https://lifehackerzy.pl/kod-kapitana";

  return (
    <Layout hideHeader={true}>
      <SEO
        title="Kod Kapitana: Jak przestać reagować i zacząć projektować swoją rzeczywistość"
        description="Przestań być zakładnikiem własnych reakcji. Zacznij być Architektem swojej rzeczywistości. Webinar na żywo 27 stycznia o 20:05."
      />

      {/* HERO SECTION */}
      <section
        className="relative min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #1a3a5c 100%)",
        }}
      >
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-2 h-2 bg-sky-400 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white/50 rounded-full"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-sky-300/60 rounded-full animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Event Badge */}
            <div className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-400/30 rounded-full px-4 py-2 mb-8 animate-fade-in">
              <Anchor className="h-4 w-4 text-sky-400" />
              <span className="text-sky-300 text-sm font-medium">
                Webinar na żywo: 27 stycznia, godz. 20:05
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight animate-fade-in">
              <span className="text-sky-400">⚓ KOD KAPITANA:</span>
              <br />
              <span className="text-white">Jak przestać reagować i zacząć projektować swoją rzeczywistość.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-sky-100/90 mb-8 leading-relaxed animate-fade-in max-w-3xl mx-auto">
              Przestań być zakładnikiem własnych reakcji.{" "}
              <span className="font-bold text-sky-300">Zacznij być Architektem swojej rzeczywistości.</span>
            </p>

            {/* Hero Image */}
            <div className="mb-10 animate-fade-in">
              <img 
                src={kodKapitanaHero} 
                alt="Kapitan przy sterze statku podczas burzy" 
                className="w-full max-w-2xl mx-auto rounded-xl shadow-2xl"
              />
            </div>

            {/* Primary CTA */}
            <div className="mb-10 animate-fade-in">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <CTAButton
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 text-white font-bold text-sm md:text-lg px-4 md:px-10 py-4 md:py-6 shadow-lg shadow-sky-500/30 whitespace-normal leading-tight"
                  size="lg"
                >
                  <span className="hidden md:inline">REZERWUJĘ MIEJSCE NA POKŁADZIE →</span>
                  <span className="md:hidden">REZERWUJĘ MIEJSCE →</span>
                </CTAButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SŁUCHAJ, SPRAWA JEST PROSTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Słuchaj, sprawa jest prosta.
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Możesz budować najbardziej zaawansowane automatyzacje w biznesie – ustawiać Make'a, Zapiera i n8n tak, żeby wszystko działo się „samo". Ale jeśli Twoja własna uwaga działa na starym oprogramowaniu – <strong className="text-foreground">lęku, reaktywności i spełnianiu cudzych oczekiwań</strong> – to wciąż jesteś tylko pasażerem we własnej głowie.
              </p>
              <p>
                Obserwujesz, jak wadliwe pętle decyzyjne przepalają Twoją energię i czas. Widzisz, jak Twoja łódź dryfuje tam, gdzie pcha ją algorytm otoczenia, zamiast płynąć tam, gdzie <strong className="text-foreground">Ty</strong> chcesz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CZYM JEST KOD KAPITANA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Czym jest „Kod Kapitana"?
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                To nie jest magiczne zaklęcie. To moment, w którym przestajesz patrzeć na swoje życie jak na ciąg zdarzeń, które Ci się przytrafiają, a zaczynasz widzieć je jako <strong className="text-foreground">proces, który Ty prowadzisz</strong>.
              </p>
              <p>
                Większość ludzi spędza życie na dnie łodzi, próbując wylewać wodę (rozwiązywać problemy), podczas gdy ich ster jest zablokowany w jednej pozycji przez „skrypty" z przeszłości. <strong className="text-foreground">Kod Kapitana to instrukcja, jak wyjść na pokład i przejąć stery.</strong>
              </p>
              <p className="text-xl md:text-2xl font-bold text-center text-sky-600 dark:text-sky-400 mt-8">
                27 stycznia o 20:05 pokażę Ci, jak to zrobić. Bez lania wody. Sam konkret.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CZEGO NAUCZYSZ SIĘ */}
      <section className="py-20 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-12 text-foreground">
              Czego nauczysz się podczas tego spotkania?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Lokalizacja wycieków */}
              <Card className="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/20 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Lokalizacja wycieków
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Znajdziemy miejsca, w których Twoja energia i skupienie uciekają bez Twojej wiedzy. Zidentyfikujesz słabości, które sabotują Twoje najsilniejsze żagle.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Kalibracja kompasu */}
              <Card className="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/20 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Compass className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Kalibracja kompasu
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Pokażę Ci, jak przestać walczyć z emocjami i zacząć traktować je jak czyste dane nawigacyjne. Jeśli czujesz opór – to jest informacja o kursie, a nie przeszkoda.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Pauza Kapitana */}
              <Card className="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/20 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Anchor className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Pauza Kapitana
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jedno proste narzędzie, które pozwala przerwać automatyczny skrypt reakcji w ułamku sekundy. Nauczysz się „zrzucać kotwicę" tam, gdzie inni wpadają w panikę.
                    </p>
                  </div>
                </div>
              </Card>

              {/* Projektowanie Kursu */}
              <Card className="bg-gradient-to-br from-sky-500/10 to-blue-600/10 border-sky-500/20 p-6 md:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-sky-500/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-sky-400" />
                  </div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                      Projektowanie Kursu
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Jak ustawić swoją „Północną Gwiazdę", żebyś przestał biegać w kółko i zaczął płynąć w stronę wolności, o której marzyłeś, zaczynając swój biznes.
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <CTAButton
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-blue-600 hover:to-sky-500 text-white font-bold text-sm md:text-lg px-4 md:px-10 py-4 md:py-6 shadow-lg shadow-sky-500/30 whitespace-normal leading-tight"
                  size="lg"
                >
                  <span className="hidden md:inline">CHCĘ ODKODOWAĆ SWÓJ SYSTEM →</span>
                  <span className="md:hidden">ODKODUJ SYSTEM →</span>
                </CTAButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* UWAŻNOŚĆ TO NIE RELAKSACJA */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Uważność to nie relaksacja. To najwyższa forma dyscypliny.
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Wielu ludziom mindfulness kojarzy się z siedzeniem na poduszce i „nie-myśleniem". Dla mnie to strata czasu. <strong className="text-foreground">Prawdziwa uważność to bojowa zdolność do utrzymania kursu, gdy wokół szaleje sztorm.</strong>
              </p>
              <p>
                To dyscyplina, która pozwala Ci widzieć rzeczywistość taką, jaka jest – bez filtrów, bez projekcji i bez lęku. Dopiero z tego miejsca możesz realnie projektować to, co ma się wydarzyć.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DLACZEGO WARTO TU BYĆ */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-foreground">
              Dlaczego warto tu być?
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              <p>
                Widziałem to u setek osób, które budują ambitne projekty. Mają świetne łodzie, mocne żagle, ale nie mają umiejętności, żeby realnie stanąć przy sterze. <strong className="text-foreground">To spotkanie jest dla tych, którzy mają już dość dryfowania.</strong>
              </p>
              <p className="text-xl md:text-2xl font-bold text-center text-sky-600 dark:text-sky-400 mt-8">
                To nie jest „kurs uważności". To Twój System Override.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a href={ctaUrl} target="_blank" rel="noopener noreferrer">
                <CTAButton
                  className="bg-gradient-to-r from-emerald-500 to-green-600 hover:from-green-600 hover:to-emerald-500 text-white font-bold text-sm md:text-lg px-4 md:px-10 py-4 md:py-6 shadow-lg shadow-emerald-500/30 whitespace-normal leading-tight"
                  size="lg"
                >
                  <span className="hidden md:inline">PRZEJMUJĘ STERY – ZAPISZ MNIE →</span>
                  <span className="md:hidden">PRZEJMUJĘ STERY →</span>
                </CTAButton>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL QUOTE & CTA */}
      <section
        className="py-20 md:py-24"
        style={{
          background: "linear-gradient(135deg, #0a1628 0%, #0f2847 50%, #1a3a5c 100%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Quote */}
            <blockquote className="text-xl md:text-2xl lg:text-3xl text-sky-100 italic leading-relaxed mb-8">
              „Twoje życie to nie jest coś, co Ci się przydarza. To Twoje największe dzieło sztuki. Czas zacząć je tworzyć z intencją."
            </blockquote>

            {/* Farewell */}
            <p className="text-lg md:text-xl text-sky-300 font-medium mb-10">
              Do zobaczenia 27 stycznia na otwartym morzu.
            </p>

            {/* Ship Icon */}
            <div className="flex justify-center mb-10">
              <div className="w-20 h-20 bg-sky-500/20 rounded-full flex items-center justify-center">
                <Ship className="h-10 w-10 text-sky-400" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
