
import Layout from '@/components/layout/Layout';
import { CheckCircle, Mail, Users, Zap } from 'lucide-react';
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
      <section className="min-h-screen bg-gradient-to-b from-background to-secondary/20 flex items-center">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            {/* Main Headline */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-charcoal dark:text-silver-mist leading-tight">
                Cotygodniowa Rozmowa<br />
                <span className="text-neural-violet dark:text-luminal-magenta">o Myślach, Które Zmieniają</span>
              </h1>
              <p className="text-xl md:text-2xl text-deep-charcoal/70 dark:text-silver-mist/70 max-w-3xl mx-auto">
                Każda niedziela: jedna prowokująca myśl. Ty odpowiadasz. Razem tworzymy coś więcej niż newsletter – prawdziwą rozmowę.
              </p>
            </div>

            {/* Email Form */}
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Twój adres email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="text-lg px-6 py-4 flex-1"
                  required
                />
                <Button
                  type="submit"
                  size="lg"
                  className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-4 text-lg font-semibold"
                >
                  Zacznij Rozmowę
                </Button>
              </form>
              {isSubmitted && (
                <p className="text-green-600 dark:text-green-400 mt-4 text-sm">
                  Dziękuję! Zaraz zostaniesz przekierowany do rejestracji.
                </p>
              )}
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-deep-charcoal/60 dark:text-silver-mist/60">
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
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-16 bg-white dark:bg-deep-charcoal/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-deep-charcoal dark:text-silver-mist">
              Dołącz do Rozmowy
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <blockquote className="p-6 bg-secondary/30 dark:bg-white/5 rounded-xl">
                <p className="text-lg italic mb-4 text-deep-charcoal dark:text-silver-mist">
                  "Praca z Ludwikiem zmieniła wszystko w sposobie, w jaki korzystam z technologii. Przeszedłem od ciągłego poczucia bycia w tyle do skutecznego wykorzystywania narzędzi AI."
                </p>
                <cite className="text-neural-violet dark:text-luminal-magenta font-semibold">
                  Dyrektor marketingu, sektor technologiczny
                </cite>
              </blockquote>
              <blockquote className="p-6 bg-secondary/30 dark:bg-white/5 rounded-xl">
                <p className="text-lg italic mb-4 text-deep-charcoal dark:text-silver-mist">
                  "Zwiększyłem swoją wydajność o 40%, spędzając przy tym mniej czasu przed ekranami. Nie chodzi o więcej technologii — chodzi o mądrzejszą kontrolę."
                </p>
                <cite className="text-neural-violet dark:text-luminal-magenta font-semibold">
                  Starszy kierownik projektów, branża finansowa
                </cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-secondary/20 dark:bg-quantum-blue/10">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-deep-charcoal dark:text-silver-mist">
              Jak to działa?
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-white dark:bg-deep-charcoal/30 shadow-sm">
                <div className="w-16 h-16 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-3">
                  Niedziela, 19:00
                </h3>
                <p className="text-deep-charcoal/70 dark:text-silver-mist/70">
                  Otrzymujesz jedną prowokującą myśl. Czasem kontrowersyjną, zawsze szczerą.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white dark:bg-deep-charcoal/30 shadow-sm">
                <div className="w-16 h-16 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-3">
                  Ty odpowiadasz
                </h3>
                <p className="text-deep-charcoal/70 dark:text-silver-mist/70">
                  Reply na email. Podziel się swoją perspektywą. Podważ moją. Rozbuduj ją.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl bg-white dark:bg-deep-charcoal/30 shadow-sm">
                <div className="w-16 h-16 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-3">
                  Społeczność myśli
                </h3>
                <p className="text-deep-charcoal/70 dark:text-silver-mist/70">
                  Najlepsze insights ze wszystkich rozmów. Kompilacja przełomowych wymian myśli.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>


            {/* Two Levels - Cards without boxes */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-deep-charcoal dark:text-silver-mist">
                DWA POZIOMY ROZMOWY:
              </h2>

              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Free Tier */}
                <div className="relative p-8 rounded-2xl text-center bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-sm border border-neural-violet/20 hover:border-luminal-magenta/40 transition-all duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <span className="text-3xl mr-3">🆓</span>
                    <h3 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                      OTWARTY KRĄG
                    </h3>
                  </div>
                  
                  <div className="space-y-4 mb-8 text-left">
                    {[
                      "Cotygodniowa myśl w niedzielę",
                      "Możliwość odpowiedzi przez email",
                      "Comiesięczne kompilacje najlepszych wymian"
                    ].map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                        <span className="text-deep-charcoal dark:text-silver-mist">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <a
                    href="https://app.easycart.pl/checkout/siadlak/newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-neural-violet hover:bg-neural-violet/90 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-neural-violet/25"
                  >
                    Dołącz do Otwartego Kręgu
                  </a>
                </div>

                {/* Premium Tier */}
                <div className="relative p-8 rounded-2xl text-center bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 backdrop-blur-sm border-2 border-luminal-magenta/40 hover:border-luminal-magenta/60 transition-all duration-300 transform hover:scale-105">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet to-ascension-pink rounded-2xl blur-sm opacity-20"></div>
                  <div className="relative">
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-3xl mr-3">💎</span>
                      <h3 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                        WEWNĘTRZNY KRĄG
                      </h3>
                    </div>
                    
                    <p className="text-2xl font-bold mb-6 text-neural-violet dark:text-luminal-magenta">
                      97 PLN/mies.
                    </p>
                    
                    <div className="mb-8 text-left space-y-4">
                      <p className="text-sm font-semibold text-deep-charcoal dark:text-silver-mist mb-3">
                        Wszystko z Otwartego Kręgu +
                      </p>
                      {[
                        "Dostęp do archiwum wszystkich \"Zderzeń myśli\"",
                        "Priorytet w odpowiedziach na Twoje perspektywy"
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                          <span className="text-deep-charcoal dark:text-silver-mist text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <a
                      href="https://app.easycart.pl/checkout/siadlak/newsletter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90 text-white py-4 px-6 rounded-xl font-semibold transition-all duration-300 hover:scale-105 shadow-lg shadow-luminal-magenta/25"
                    >
                      Dołącz do Wewnętrznego Kręgu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founding Moment - Special Highlight */}
            <div className="mb-20">
              <div className="text-center p-12 rounded-3xl bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 border-2 border-neural-violet/30 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(218,30,174,0.1),transparent)]"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-4xl font-bold mb-6 text-neural-violet dark:text-luminal-magenta flex items-center justify-center">
                    <Zap className="h-8 w-8 mr-3" />
                    MOMENT ZAŁOŻYCIELSKI
                  </h3>
                  <p className="text-xl md:text-2xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                    Pierwsze 1,000 osób wchodzi do WEWNĘTRZNEGO KRĘGU za 0 PLN/mies. DOŻYWOTNIO
                  </p>
                  <p className="text-lg text-deep-charcoal dark:text-silver-mist/80 max-w-3xl mx-auto">
                    Dlaczego? Dzięki Fundacji HACKERZY.PL i dlatego, że buduję coś, czego świat potrzebuje. Społeczność ludzi, którzy myślą razem, nie obok siebie.
                  </p>
                </div>
              </div>
            </div>

      {/* Promise & Final CTA */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-12">
            <div>
              <h3 className="text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Moja obietnica:
              </h3>
              <div className="space-y-4 text-lg text-deep-charcoal dark:text-silver-mist">
                <p>Nigdy nie dam Ci gotowej odpowiedzi.</p>
                <p>Zawsze dam Ci nową perspektywę.</p>
                <p>I zawsze będę słuchał, gdy podzielisz się swoją.</p>
                <p className="text-xl font-bold text-neural-violet dark:text-luminal-magenta mt-6">
                  Bo najlepsze myśli rodzą się w zderzeniu między umysłami.
                </p>
              </div>
            </div>

            <div className="p-8 rounded-xl bg-gradient-to-r from-neural-violet/5 to-luminal-magenta/5 border border-neural-violet/20">
              <h4 className="text-xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Przykład z tego tygodnia:
              </h4>
              <blockquote className="text-xl italic text-neural-violet dark:text-luminal-magenta mb-2">
                "Czy AI czyni nas mądrzejszymi, czy tylko bardziej wydajnymi? I czy to w ogóle ta sama rzecz?"
              </blockquote>
            </div>

            <div className="space-y-6">
              <Button
                onClick={() => window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")}
                size="lg"
                className="bg-neural-violet hover:bg-neural-violet/90 text-white text-xl px-12 py-6"
              >
                Zacznij Rozmowę
              </Button>

              <p className="text-deep-charcoal/60 dark:text-silver-mist/60 italic">
                P.S. Pamiętasz stare Nokia 3310? Ja właśnie tak myślę o rozmowach. Proste. Niezawodne. I łączące ludzi, nie algorytmy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
