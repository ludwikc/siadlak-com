
import Layout from '@/components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    quote:
      "Po 15 latach w zarządzaniu technologią, cyfrowe wymagania zaczęły mnie przytłaczać. Podejście Ludwika całkowicie zmieniło sposób, w jaki współdziałam z technologią. Teraz wykonuję więcej znaczącej pracy w krótszym czasie, odzyskując przestrzeń mentalną na myślenie strategiczne.",
    name: "Marcin K.",
    title: "CTO",
    company: "Financial Technology",
    program: "Mental Elevator",
    results:
      "Redukcja cyfrowych zakłóceń o 60%, poprawa produktywności zespołu o 35%, i uruchomienie dwóch głównych inicjatyw, które były zablokowane od miesięcy.",
    featured: true,
    image: "",
  },
  {
    quote:
      "Tonąłem w narzędziach AI, analityce i platformach - wszystko rzekomo miało zwiększać moją efektywność, a w rzeczywistości kradło mój czas i kreatywność. Praca z Ludwikiem pokazała mi, jak sprawić, by te narzędzia faktycznie służyły mojej wizji, zamiast dyktować mój dzień.",
    name: "Anna W.",
    title: "Dyrektor Marketingu",
    company: "Agencja Kreatywna",
    program: "Mental Elevator",
    results:
      "Stworzenie usprawnionego workflow, które zaoszczędziło 12 godzin tygodniowo, podwojenie kreatywnego output'u i poprawa wyników kampanii o 28%.",
    featured: true,
    image: "",
  },
  {
    quote:
      "Jako niezależny specjalista, byłem uwięziony w cyklu ciągłego sprawdzania maili, wiadomości i aktualizacji. Systemy Ludwika pomogły mi przejąć kontrolę nad moim cyfrowym środowiskiem, jednocześnie poprawiając responsywność wobec klientów.",
    name: "Tomasz B.",
    title: "Niezależny Konsultant",
    company: "Strategia Biznesowa",
    program: "Hakowanie Produktywności",
    results:
      "Odzyskanie 2 godzin dziennie, zwiększenie wskaźników satysfakcji klientów i wreszcie ukończenie długo odkładanej certyfikacji, która zwiększyła moje stawki o 40%.",
    featured: true,
    image: "",
  },
  {
    quote:
      "Techniki, których uczy Ludwik, to nie zwykłe hacki produktywności - to odzyskiwanie sprawczości w świecie zaprojektowanym, by przechwytywać Twoją uwagę. To kwestia siły, skupienia i intencjonalności w przestrzeniach cyfrowych.",
    name: "Kasia L.",
    title: "CTO",
    company: "Tech Startup",
    program: "Tech Leadership Mastery",
    results:
      "Transformacja kultury zespołowej wokół używania technologii, wdrożenie bloków głębokiej pracy i eliminacja mentalności 'zawsze dostępny', która wypalała wszystkich.",
    featured: false,
    image: "",
  },
  {
    quote:
      "To, co wyróżnia Ludwika, to zrozumienie zarówno systemów technicznych, jak i psychologii człowieka. Większość trenerów skupia się na jednym lub drugim - on integruje je perfekcyjnie.",
    name: "Jan B.",
    title: "Dyrektor",
    company: "Firma Mediowa",
    program: "Hakowanie Produktywności",
    results:
      "Ustanowienie granic, które wcześniej wydawały się niemożliwe, stworzenie systemów wspierających skupioną pracę kreatywną i zaprzestanie pozwalania narzędziom cyfrowym na dyktowanie priorytetów.",
    featured: false,
    image: "",
  },
  {
    quote:
      "To nie jest tylko kwestia produktywności - to odzyskiwanie życia z cyfrowej kolonizacji. Metody Ludwika pomogły mi ustanowić zdrowe granice bez poświęcania zawodowej skuteczności.",
    name: "Maria J.",
    title: "Engineering Manager",
    company: "Software Development",
    program: "Tech Leadership Mastery",
    results:
      "Redukcja czasu spotkań o 50%, ustanowienie zrównoważonych protokołów komunikacji i stworzenie przestrzeni na głęboką pracę, która zaowocowała naszymi najbardziej innowacyjnymi funkcjami.",
    featured: false,
    image: "",
  },
];

const Testimonials = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Historie Transformacji
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Ci profesjonaliści odzyskali kontrolę nad swoim cyfrowym życiem i
              przekształcili swoją relację z technologią. Ich historie pokazują,
              co jest możliwe, gdy przestajesz służyć technologii i zaczynasz
              nią dowodzić.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
            Transformation Stories
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials
              .filter((t) => t.featured)
              .map((testimonial, index) => (
                <div
                  key={index}
                  className="glass-card p-8 rounded-xl border-2 border-ascension-pink dark:border-luminal-magenta relative"
                >
                  <div className="absolute top-4 right-4">
                    <Quote className="h-8 w-8 text-neural-violet/20 dark:text-luminal-magenta/20" />
                  </div>

                  <p className="text-subtle-slate dark:text-silver-mist/90 mb-6 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-brand-primary mr-4"></div>
                    <div>
                      <p className="font-bold text-deep-charcoal dark:text-silver-mist">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-subtle-slate dark:text-silver-mist/70">
                        {testimonial.title}, {testimonial.company}
                      </p>
                      <p className="text-sm text-neural-violet dark:text-luminal-magenta">
                        {testimonial.program} Program
                      </p>
                    </div>
                  </div>

                  <div className="bg-neural-violet/5 dark:bg-luminal-magenta/10 p-4 rounded-lg">
                    <p className="text-sm text-deep-charcoal dark:text-silver-mist">
                      <strong>Results:</strong> {testimonial.results}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* All Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist text-center">
            More Success Stories
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {testimonials
              .filter((t) => !t.featured)
              .map((testimonial, index) => (
                <div key={index} className="glass-card p-6 rounded-xl relative">
                  <div className="absolute top-4 right-4">
                    <Quote className="h-6 w-6 text-neural-violet/20 dark:text-luminal-magenta/20" />
                  </div>

                  <p className="text-subtle-slate dark:text-silver-mist/90 mb-4 italic">
                    "{testimonial.quote}"
                  </p>

                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-brand-primary mr-3"></div>
                    <div>
                      <p className="font-bold text-deep-charcoal dark:text-silver-mist">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-subtle-slate dark:text-silver-mist/70">
                        {testimonial.title}, {testimonial.company}
                      </p>
                      <p className="text-xs text-neural-violet dark:text-luminal-magenta">
                        {testimonial.program} Program
                      </p>
                    </div>
                  </div>

                  <div className="bg-neural-violet/5 dark:bg-luminal-magenta/10 p-3 rounded-lg">
                    <p className="text-xs text-deep-charcoal dark:text-silver-mist">
                      <strong>Results:</strong> {testimonial.results}
                    </p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-brand-primary">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-white">
              Ready to Write Your Own Success Story?
            </h2>

            <p className="text-lg mb-8 text-white/90">
              Take the first step toward commanding your digital life.
            </p>

            <Link to="/contact">
              <Button
                variant="default"
                className="bg-white text-neural-violet hover:bg-white/90"
              >
                Book a Discovery Call
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;
