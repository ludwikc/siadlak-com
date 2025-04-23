
import React from 'react';
import Layout from '@/components/layout/Layout';
import Newsletter from '@/components/sections/Newsletter';
import { ArrowRight, Mail, BookOpen, Bell, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const NewsletterPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Odblokuj swój pełny potencjał
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Technologia w służbie Twojego rozwoju, nie zastąpienia.
            </p>
            <p className="text-base md:text-lg mb-8">
              Odkryj niewykorzystany potencjał, który w Tobie drzemie.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Main Value Proposition */}
            <div className="text-center mb-16">
              <p className="text-lg md:text-xl mb-8 text-deep-charcoal dark:text-silver-mist">
                Dołącz do newslettera "Tam, gdzie AI spotyka ludzki potencjał" – mojego cotygodniowego przewodnika, który pokazuje jak wykorzystać sztuczną inteligencję nie tylko jako narzędzie, ale jako katalizator Twojej osobistej i zawodowej transformacji.
              </p>
            </div>

            {/* Weekly Benefits */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
                Każdą środę otrzymasz:
              </h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Sposoby na odkrywanie umiejętności, o których nie wiedziałeś, że je posiadasz
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Praktyczne ramy działania, które dają CI kontrolę nad technologią
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Jedno proste działanie do natychmiastowego zwiększenia Twojego wpływu
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
                Wybierz swoją ścieżkę:
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Tier */}
                <div className="glass-card p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                    PODSTAWOWY
                  </h3>
                  <p className="text-2xl font-bold mb-6 text-neural-violet dark:text-luminal-magenta">
                    Bezpłatny
                  </p>
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Cotygodniowy newsletter</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Dostęp do archiwum</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Podstawowe wyzwania implementacyjne</span>
                    </li>
                  </ul>
                </div>

                {/* Premium Tier */}
                <div className="glass-card p-6 rounded-xl text-center border-2 border-neural-violet dark:border-luminal-magenta">
                  <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                    EDGE
                  </h3>
                  <div className="mb-6">
                    <span className="line-through text-subtle-slate dark:text-silver-mist/60">99 PLN</span>
                    <p className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">
                      0 PLN
                    </p>
                    <span className="text-sm text-subtle-slate dark:text-silver-mist/60">
                      z kodem "EARLYBIRD"
                    </span>
                  </div>
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Wszystko z planu podstawowego</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Rozszerzone studia przypadków</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Zaawansowane ramy implementacyjne</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Dostęp do zamkniętych treści</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">Pytania i odpowiedzi w wersji rozszerzonej</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Example Topics */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
                Dlaczego ten newsletter jest inny
              </h2>
              
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-8">
                W czasach gdy większość treści o AI skupia się na samej technologii i jej możliwościach, "Tam, gdzie AI spotyka ludzki potencjał" stawia człowieka w centrum. Nie pokazuję jedynie, jak używać AI – pokazuję, jak sprawić, by te narzędzia służyły Tobie, wzmacniając to, co czyni Cię wyjątkowo ludzkim.
              </p>

              <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Przykładowe tematy:
              </h3>
              
              <div className="space-y-4">
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    "Zapomniana moc: Trzy zdolności, których AI nigdy nie zastąpi (i jak je wzmocnić)"
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    "Poza algorytmem: Odzyskiwanie Twojej kreatywnej sprawczości w świecie AI"
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    "Panowie, nie słudzy: Struktura utrzymująca technologię na właściwym miejscu"
                  </p>
                </div>
                <div className="glass-card p-4 rounded-lg">
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    "Matryca od sprawczości do mocy: Transformacja cyfrowego niepokoju w rozwój"
                  </p>
                </div>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <Newsletter />
            
            <div className="text-center mt-8">
              <p className="text-subtle-slate dark:text-silver-mist/60 text-sm">
                Twoje dane są bezpieczne. Możesz zrezygnować w każdej chwili jednym kliknięciem.
              </p>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Dołącz do ruchu odzyskiwania ludzkiej sprawczości w cyfrowym świecie.
              </h2>
              
              <Button size="lg" className="bg-neural-violet hover:bg-neural-violet/90 text-white">
                ROZPOCZNIJ SWOJĄ EWOLUCJĘ
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default NewsletterPage;
