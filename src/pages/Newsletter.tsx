import Layout from '@/components/layout/Layout';
import { CheckCircle, Mail, Users, Zap, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import SEO from '@/components/SEO';
import { getSEOConfig } from '@/lib/seo-config';

export default function NewsletterPage() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank");
      setIsSubmitted(true);
    }
  };

  return (
    <Layout>
      <SEO {...getSEOConfig("/newsletter")} />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-background via-background to-secondary/10 flex items-center relative overflow-hidden">
        {/* Animated background element */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-l from-neural-violet/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left side - Content */}
              <div className="space-y-8">
                <div className="space-y-6">
                  <div className="text-lg font-bold text-neural-violet dark:text-luminal-magenta mb-4">
                    (🧠 + 🤖)💜
                  </div>
                  <div className="text-xl font-bold text-deep-charcoal dark:text-silver-mist mb-6">
                    INTELIGENCJA DO POTĘGI SERCA
                  </div>
                  <h1 className="text-4xl md:text-5xl font-bold text-deep-charcoal dark:text-silver-mist leading-tight">
                    Nie newsletter.<br />
                    <span className="text-neural-violet dark:text-luminal-magenta">Wymiana myśli.</span>
                  </h1>
                  <p className="text-lg md:text-xl text-deep-charcoal/70 dark:text-silver-mist/70">
                    Każda niedziela o 19:00: Jedna myśl. Tysiąc możliwości.
                  </p>
                </div>

                {/* Email Form */}
                <div className="space-y-4">
                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                    <Input
                      type="email"
                      placeholder="Twój adres email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="text-lg px-6 py-4 flex-1 bg-white/80 dark:bg-white/10 backdrop-blur-sm border-neural-violet/30"
                      required
                    />
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-4 text-lg font-semibold shadow-lg shadow-neural-violet/25 hover:shadow-xl hover:shadow-neural-violet/30 transition-all duration-300"
                    >
                      Dołącz Teraz
                    </Button>
                  </form>
                  {isSubmitted && (
                    <p className="text-green-600 dark:text-green-400 text-sm">
                      Dziękuję! Zaraz zostaniesz przekierowany do rejestracji.
                    </p>
                  )}
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap items-center gap-6 text-deep-charcoal/60 dark:text-silver-mist/60">
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5" />
                    <span>150+ profesjonalistów</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-5 w-5" />
                    <span>0 spamu, tylko wartość</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="h-5 w-5" />
                    <span>Każda niedziela o 19:00</span>
                  </div>
                </div>
              </div>

              {/* Right side - Visual element */}
              <div className="hidden lg:block">
                <div className="relative">
                  <div className="w-80 h-80 bg-gradient-to-br from-neural-violet/30 to-luminal-magenta/30 rounded-full blur-3xl animate-pulse"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl animate-bounce">💬</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white dark:bg-deep-charcoal/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-6 text-base text-deep-charcoal dark:text-silver-mist leading-relaxed">
            <p className="text-lg">
              Cześć,
            </p>
            <p>
              To nie jest kolejny newsletter, który przeczytasz i zapomnisz.
            </p>
            <p>
              To zaproszenie.
            </p>
            <p>
              Każdego tygodnia dzielę się z Tobą <strong>jedną myślą</strong>, która intensywnie towarzyszyła mi przez ostatnie dni. Czasem o balansie między sztuczną inteligencją a ludzką intuicją. Czasem o mindfulness w świecie notyfikacji. Czasem o leadership, gdy każdy ma dostęp do tych samych narzędzi.
            </p>
            <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 p-8 rounded-2xl border-l-4 border-neural-violet my-12">
              <p className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-4">
                Ale tu jest haczyk:
              </p>
              <p className="text-base mb-4">
                Nie chcę, żebyś po prostu czytał.
              </p>
              <p className="font-bold text-lg text-neural-violet dark:text-luminal-magenta">
                Chcę, żeby te myśli ZDERZYŁY się z Twoimi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-secondary/20 dark:bg-quantum-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-deep-charcoal dark:text-silver-mist">
              JAK TO DZIAŁA:
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white dark:bg-deep-charcoal/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-6">📧</div>
                <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-4">
                  NIEDZIELA, 19:00: Rzucam myśl
                </h3>
                <p className="text-base text-deep-charcoal/70 dark:text-silver-mist/70">
                  Jeden temat. Jedna perspektywa. Czasem kontrowersyjna. Zawsze szczera.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-white dark:bg-deep-charcoal/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-6">💬</div>
                <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-4">
                  PONIEDZIAŁEK-PIĄTEK: Ty odpowiadasz
                </h3>
                <p className="text-base text-deep-charcoal/70 dark:text-silver-mist/70">
                  Reply na maila. Podziel się swoją perspektywą. Podważ moją. Rozbuduj ją.
                </p>
              </div>

              <div className="text-center p-8 rounded-2xl bg-white dark:bg-deep-charcoal/30 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-3xl mb-6">🔥</div>
                <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-4">
                  SOBOTA: Najlepsze insights
                </h3>
                <p className="text-base text-deep-charcoal/70 dark:text-silver-mist/70">
                  Kompilacja najbardziej przełomowych wymian myśli z tygodnia. Anonimowo, z szacunkiem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Not For You */}
              <div className="space-y-8">
                <h3 className="text-xl md:text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  TO NIE JEST DLA CIEBIE, JEŚLI:
                </h3>
                <div className="space-y-6">
                  {[
                    "Szukasz gotowych odpowiedzi",
                    "Chcesz być bierny w konsumpcji treści", 
                    "Nie lubisz, gdy ktoś kwestionuje Twoje przekonania",
                    "Unikasz głębokich rozmów"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-base text-deep-charcoal dark:text-silver-mist">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* For You */}
              <div className="space-y-8">
                <h3 className="text-xl md:text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  TO JEST DLA CIEBIE, JEŚLI:
                </h3>
                <div className="space-y-6">
                  {[
                    "Myśli innych zmieniają Twój sposób patrzenia na świat",
                    "Lubisz inteligentne spory konstruktywne",
                    "Cenisz jakość myślenia nad ilością informacji",
                    "Jesteś gotowy/a podzielić się swoją perspektywą",
                    "Wierzysz, że najlepsze idee rodzą się w zderzeniu"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-base text-deep-charcoal dark:text-silver-mist">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-secondary/20 dark:bg-quantum-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-deep-charcoal dark:text-silver-mist">
              DWA POZIOMY ROZMOWY:
            </h2>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Free Tier */}
              <div className="relative p-10 rounded-3xl text-center bg-gradient-to-br from-white/80 to-white/60 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-neural-violet/20 hover:border-luminal-magenta/40 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center mb-8">
                  <span className="text-4xl mr-4">🆓</span>
                  <h3 className="text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
                    OTWARTY KRĄG
                  </h3>
                </div>
                
                <div className="space-y-6 mb-10 text-left">
                  {[
                    "Cotygodniowa myśl w niedzielę",
                    "Możliwość odpowiedzi przez email",
                    "Comiesięczne kompilacje najlepszych wymian"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <CheckCircle className="h-6 w-6 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                      <span className="text-lg text-deep-charcoal dark:text-silver-mist">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <a
                  href="https://app.easycart.pl/checkout/siadlak/newsletter"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full bg-neural-violet hover:bg-neural-violet/90 text-white py-5 px-8 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-neural-violet/25"
                >
                  Dołącz do Otwartego Kręgu
                </a>
              </div>

              {/* Premium Tier */}
              <div className="relative p-10 rounded-3xl text-center bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 backdrop-blur-sm border-2 border-luminal-magenta/40 hover:border-luminal-magenta/60 transition-all duration-300 hover:scale-105">
                <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet to-ascension-pink rounded-3xl blur-sm opacity-20"></div>
                <div className="relative">
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-3xl mr-4">💎</span>
                    <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                      WEWNĘTRZNY KRĄG
                    </h3>
                  </div>
                  
                  <p className="text-2xl font-bold mb-8 text-neural-violet dark:text-luminal-magenta">
                    147 PLN/mies.
                  </p>
                  
                    <div className="mb-10 text-left space-y-6">
                    <p className="text-base font-semibold text-deep-charcoal dark:text-silver-mist mb-4">
                      Wszystko z Otwartego Kręgu +
                    </p>
                    {[
                      "Prywatna grupa zamkniętych rozmów (max 50 osób)",
                      "Cotygodniowe live Q&A (czwartek 20:00)",
                      "Dostęp do archiwum wszystkich \"Zderzeń myśli\"",
                      "Priorytet w odpowiedziach na Twoje perspektywy"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <CheckCircle className="h-5 w-5 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                        <span className="text-base text-deep-charcoal dark:text-silver-mist">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="https://app.easycart.pl/checkout/siadlak/newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90 text-white py-5 px-8 rounded-2xl text-lg font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-luminal-magenta/25"
                  >
                    Dołącz do Wewnętrznego Kręgu
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founding Moment - Special Highlight */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center p-16 rounded-3xl bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 border-2 border-neural-violet/30 relative overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,30,174,0.1),transparent)]"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="text-2xl md:text-3xl font-bold text-neural-violet dark:text-luminal-magenta flex items-center justify-center">
                  <Zap className="h-8 w-8 mr-4" />
                  MOMENT ZAŁOŻYCIELSKI
                </h3>
                <p className="text-lg md:text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                  Pierwsze 50 osób wchodzi do <span className="text-neural-violet dark:text-luminal-magenta">WEWNĘTRZNEGO KRĘGU za 47 PLN/mies. DOŻYWOTNIO</span>
                </p>
                <p className="text-base text-deep-charcoal dark:text-silver-mist/80 max-w-3xl mx-auto">
                  Bo buduję coś, czego świat potrzebuje. Społeczność ludzi, którzy <strong>myślą razem</strong>, nie obok siebie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white dark:bg-deep-charcoal/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* What's NOT Here */}
              <div className="space-y-8">
                <h3 className="text-xl md:text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  NIE MA TUTAJ MIEJSCA NA:
                </h3>
                <div className="space-y-6">
                  {[
                    "Klepanie się po plecach i przytakiwanie sobie nawzajem",
                    "Content generowany przez AI",
                    "\"Jesteś zwycięzcą\" i inne puste afirmacje",
                    "Grzeczne kłamstwa zamiast niewygodnej prawdy"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-red-500 text-xl">❌</span>
                      <span className="text-base text-deep-charcoal dark:text-silver-mist">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What IS Here */}
              <div className="space-y-8">
                <h3 className="text-xl md:text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                  W ZAMIAN, TO JEST MIEJSCE NA:
                </h3>
                <div className="space-y-6">
                  {[
                    "Konstruktywne spory",
                    "Zmienianie perspektyw",
                    "Głębokie pytania",
                    "Inteligentną niewiedzy",
                    "Ewolucję myślenia"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-green-500 text-xl">✅</span>
                      <span className="text-base text-deep-charcoal dark:text-silver-mist">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Promise */}
      <section className="py-20 bg-secondary/20 dark:bg-quantum-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <h3 className="text-2xl md:text-3xl font-bold text-deep-charcoal dark:text-silver-mist">
              MOJA OBIETNICA:
            </h3>
            <div className="space-y-6 text-lg text-deep-charcoal dark:text-silver-mist leading-relaxed">
              <p>Nigdy nie dam Ci gotowej odpowiedzi.</p>
              <p>Zawsze dam Ci nową perspektywę.</p>
              <p>I zawsze będę słuchał, gdy podzielisz się swoją.</p>
              <p className="text-xl font-bold text-neural-violet dark:text-luminal-magenta mt-8">
                Bo prawda jest taka: <span className="underline">najlepsze myśli rodzą się nie w pojedynczych głowach, ale w zderzeniu między nimi.</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Newsletter */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold text-center mb-12 text-deep-charcoal dark:text-silver-mist">
              PRZYKŁAD NEWSLETTERA:
            </h3>
            
            <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 rounded-2xl p-8 border border-neural-violet/20 hover:border-neural-violet/40 transition-all duration-300">
              <div className="flex flex-col lg:flex-row gap-8 items-center">
                <div className="lg:w-1/2">
                  <div className="relative group cursor-pointer">
                    <img 
                      src="/lovable-uploads/newsletter-example.png"
                      alt="Przykład newslettera - Fake it till you make it"
                      className="w-full rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-300 transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-neural-violet/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                      <ExternalLink className="h-8 w-8 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="lg:w-1/2 space-y-6">
                  <blockquote className="text-xl font-semibold text-neural-violet dark:text-luminal-magenta">
                    "Fake it till you make it - robisz to dobrze czy.... źle?"
                  </blockquote>
                  <p className="text-base text-deep-charcoal dark:text-silver-mist">
                    Przykład rzeczywistej wymiany myśli, która wywołała dziesiątki odpowiedzi i debat. 
                    Zobacz, jak jedna prowokacyjna myśl może zmienić perspektywy całej społeczności.
                  </p>
                  <a 
                    href="https://connect.siadlak.email/preview/484845/emails/163624365229868308"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-neural-violet hover:bg-neural-violet/90 text-white px-6 py-3 rounded-lg transition-all duration-300 font-semibold text-base shadow-lg shadow-neural-violet/25 hover:shadow-xl hover:shadow-neural-violet/30 transform hover:scale-105"
                  >
                    Czytaj newsletter i komentarze
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-deep-charcoal/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-16 text-center text-deep-charcoal dark:text-silver-mist">
              TESTIMONIALE:
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <blockquote className="p-8 bg-secondary/30 dark:bg-white/5 rounded-2xl shadow-lg">
                <p className="text-base italic mb-6 text-deep-charcoal dark:text-silver-mist">
                  "To nie jest newsletter. To laboratoryjna rozmowy. Myśli, które dostaję w niedzielę, noszę w sobie cały tydzień."
                </p>
                <cite className="text-neural-violet dark:text-luminal-magenta font-semibold">
                  - Anna K.
                </cite>
              </blockquote>
              <blockquote className="p-8 bg-secondary/30 dark:bg-white/5 rounded-2xl shadow-lg">
                <p className="text-base italic mb-6 text-deep-charcoal dark:text-silver-mist">
                  "Po raz pierwszy mam ochotę odpowiadać na emaile, nie je kasować."
                </p>
                <cite className="text-neural-violet dark:text-luminal-magenta font-semibold">
                  - Tomasz M.
                </cite>
              </blockquote>
              <blockquote className="p-8 bg-secondary/30 dark:bg-white/5 rounded-2xl shadow-lg">
                <p className="text-base italic mb-6 text-deep-charcoal dark:text-silver-mist">
                  "Marcin nie ma racji w 40% przypadków. I właśnie dlatego warto z nim rozmawiać."
                </p>
                <cite className="text-neural-violet dark:text-luminal-magenta font-semibold">
                  - Katarzyna L.
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-8">
              <Button
                onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                size="lg"
                className="bg-neural-violet hover:bg-neural-violet/90 text-white text-lg px-16 py-8 rounded-2xl shadow-xl shadow-neural-violet/30 hover:shadow-2xl hover:shadow-neural-violet/40 transition-all duration-300 hover:scale-105"
              >
                DOŁĄCZ TERAZ
              </Button>

              <p className="text-base text-deep-charcoal/70 dark:text-silver-mist/70 italic max-w-2xl mx-auto leading-relaxed">
                <strong>P.S.</strong> Pamiętasz stare Nokia 3310? Ja właśnie tak myślę o rozmowach. Proste. Niezawodne. <strong>Connecting People</strong>
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}