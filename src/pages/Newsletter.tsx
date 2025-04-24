
import React from 'react';
import Layout from '@/components/layout/Layout';
import Newsletter from '@/components/sections/Newsletter';
import { ArrowRight, Mail, BookOpen, Bell, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewsletterPage = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Uwolnij Swój Potencjał z AI: Gdzie Technologia Spotyka Człowieka
            </h1>
            <p className="text-lg md:text-xl mb-4 text-silver-mist/90 italic">
              "Każda technologia wystarczająco zaawansowana jest nieodróżnialna od magii" – Arthur C. Clarke
            </p>
            <p className="text-base md:text-lg mb-8">
              Wyobraź sobie, że budzisz się rano z jasnym planem wykorzystania AI nie tylko do automatyzacji zadań, ale do <strong>faktycznego przełomu w Twoim rozwoju osobistym i zawodowym</strong>.
            </p>
            <p className="text-lg">
              To właśnie oferuję Ci w tym newsletterze.
            </p>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Dlaczego stworzyłem ten newsletter?
              </h2>
              
              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Przez 19 lat jako Microsoft Certified Trainer przeprowadziłem setki szkoleń technicznych dla profesjonalistów IT. W tym czasie odkryłem coś fascynującego:
                </p>
                <p className="font-bold">
                  Największa luka na rynku nie istnieje między różnymi technologiami, ale między światem zaawansowanej AI a niewykorzystanym ludzkim potencjałem.
                </p>
                <p>
                  Z jednej strony mamy coraz potężniejsze narzędzia AI, z drugiej – specjalistów, którzy używają ich zaledwie powierzchownie, nie dostrzegając ich transformacyjnego potencjału.
                </p>
                <p className="font-bold">
                  Co się dzieje, gdy świadomie połączysz te dwa światy? To jest właśnie pytanie, na które odpowiadam co tydzień.
                </p>
              </div>
            </div>

            {/* What You Get */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Co dokładnie otrzymasz?
              </h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl space-y-6">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Praktyczne ramy implementacji – nie tylko "co", ale dokładnie "jak" wykorzystać AI do konkretnych obszarów Twojego rozwoju
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Strategiczne ścieżki transformacji – jak przejść od specjalisty technicznego do lidera o szerszym wpływie
                  </p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Tygodniowe wyzwania wdrożeniowe – małe kroki, które możesz zacząć stosować jeszcze tego samego dnia
                  </p>
                </div>

                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 mr-4 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                  <p className="text-deep-charcoal dark:text-silver-mist">
                    Analizy przypadków – historie osób, które wykorzystały AI jako katalizator swojego rozwoju, z konkretnymi wnioskami
                  </p>
                </div>
              </div>

              <p className="mt-6 text-subtle-slate dark:text-silver-mist/80">
                Ten newsletter <strong>nie jest</strong> kolejnym przeglądem narzędzi AI ani ogólnikowym poradnikiem rozwoju osobistego. To precyzyjny pomost między światami, którego brakuje na rynku.
              </p>
            </div>

            {/* For Whom */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Dla kogo stworzyłem ten newsletter?
              </h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <p className="mb-4 text-deep-charcoal dark:text-silver-mist">
                  Ten newsletter jest dla Ciebie, jeśli:
                </p>
                <ul className="space-y-4">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Pracujesz w obszarze technologii i czujesz, że Twój potencjał wykracza daleko poza role czysto techniczne
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Widzisz w AI zarówno szansę, jak i wyzwanie dla swojej przyszłości zawodowej
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Masz dość teoretyzowania i potrzebujesz konkretnych ram implementacji
                    </span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Dążysz do większego wpływu i głębszego znaczenia w swojej pracy
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
                Wybierz swoją ścieżkę:
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Tier */}
                <div className="glass-card p-6 rounded-xl text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,15,119,0.3)] dark:hover:shadow-[0_0_15px_rgba(218,30,174,0.3)] group">
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
                  <a 
                    href="https://app.easycart.pl/checkout/siadlak/newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-neural-violet hover:bg-neural-violet/90 text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    Wybieram PODSTAWOWY
                  </a>
                </div>

                {/* Premium Tier */}
                <div className="glass-card p-6 rounded-xl text-center border-2 border-neural-violet dark:border-luminal-magenta transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,15,119,0.4)] dark:hover:shadow-[0_0_20px_rgba(218,30,174,0.4)] animate-pulse group">
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
                  <a 
                    href="https://app.easycart.pl/checkout/siadlak/newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-ascension-pink hover:bg-luminal-magenta text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    Wybieram EDGE
                  </a>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-neural-violet dark:text-luminal-magenta font-bold mb-4">
                  ⚡ OFERTA LIMITOWANA: Pierwsze 1000 osób otrzymuje dostęp do wersji EDGE za darmo! ⚡
                </p>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Zamiast płacić 99 PLN miesięcznie, możesz dołączyć do programu sponsorowanego przez Fundację HACKERZY.PL, która pokrywa koszty dostępu dla pierwszych 1000 osób, które wybiorą wersję EDGE.
                </p>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <Newsletter />
            
            <div className="text-center mt-8 space-y-4">
              <p className="text-subtle-slate dark:text-silver-mist/60 text-sm">
                PS. Z newslettera możesz zrezygnować w każdej chwili jednym kliknięciem. Twoje dane są u mnie bezpieczne, a Twoja prywatność – szanowana.
              </p>
              <p className="text-subtle-slate dark:text-silver-mist/60 text-sm">
                PPS. Miejsca są ograniczone – chcę budować społeczność osób, które faktycznie wdrażają, a nie tylko czytają.
              </p>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Narzędzia AI dla ludzkiej ewolucji, nie zastąpienia.
              </h2>
              
              <Button size="lg" className="bg-neural-violet hover:bg-neural-violet/90 text-white">
                DOŁĄCZ TERAZ DO SPOŁECZNOŚCI
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
