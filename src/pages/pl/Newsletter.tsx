
import React from 'react';
import Layout from '@/components/layout/Layout';
import Newsletter from '@/components/sections/Newsletter';
import { ArrowRight, Mail, BookOpen, Bell } from 'lucide-react';
import { Link } from 'react-router-dom';

const PolishNewsletter = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-deep-space to-quantum-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Newsletter
            </h1>
            <p className="text-lg md:text-xl mb-8 text-silver-mist/90">
              Inspiracje na styku technologii i ludzkiego potencjału, dostarczane prosto do Twojej skrzynki.
            </p>
          </div>
        </div>
      </section>
      
      {/* Newsletter Features */}
      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-6 md:p-8 rounded-xl mb-12">
              <blockquote className="text-xl md:text-2xl italic text-center mb-4">
                "Każda wystarczająco zaawansowana technologia jest nieodróżnialna od magii." – Arthur C. Clarke
              </blockquote>
              
              <p className="text-center mb-4">
                Zastanawiasz się czasem, jak wykorzystać sztuczną inteligencję nie tylko do automatyzacji, ale faktycznego <strong>rozwoju Twojego potencjału</strong>?
              </p>
              
              <p className="text-center text-lg font-medium">
                Mam dla Ciebie propozycję.
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Bell className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Bądź na bieżąco
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Dowiedz się pierwszy o nowych programach, zasobach i ekskluzywnych wydarzeniach.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-ascension-pink/10 dark:bg-ascension-pink/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <BookOpen className="text-ascension-pink dark:text-luminal-magenta" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Praktyczne wskazówki
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Otrzymuj praktyczne strategie i ramy, które możesz wdrożyć natychmiast.
                </p>
              </div>
              
              <div className="glass-card p-6 rounded-xl text-center">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Mail className="text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-lg font-bold mb-3 text-deep-charcoal dark:text-silver-mist">
                  Wyselekcjonowana zawartość
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Starannie wybrane zasoby bez szumu informacyjnego i przeciążenia.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Dlaczego powstał ten newsletter?
              </h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl space-y-4">
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  Przez 15+ lat pracowałem jako certyfikowany trener Microsoft, prowadząc szkolenia techniczne dla profesjonalistów IT. Jednocześnie odkrywałem, jak głęboko technologia może wspierać nasz rozwój osobisty.
                </p>
                
                <p className="text-subtle-slate dark:text-silver-mist/90">
                  Zauważyłem lukę między światem technologii a rozwojem człowieka. Z jednej strony mamy zaawansowane narzędzia AI, z drugiej – nasz niewykorzystany potencjał.
                </p>
                
                <p className="text-center text-lg font-medium text-deep-charcoal dark:text-silver-mist mt-6">
                  Co się dzieje, gdy połączymy te dwa światy?
                </p>
              </div>
            </div>
            
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist text-center">
                Co znajdziesz w newsletterze?
              </h2>
              
              <div className="glass-card p-6 md:p-8 rounded-xl">
                <div className="space-y-4">
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <p className="text-subtle-slate dark:text-silver-mist/90">
                        Cotygodniowe ramy implementacji narzędzi AI dla osobistego i zawodowego rozwoju
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <p className="text-subtle-slate dark:text-silver-mist/90">
                        Konkretne strategie przekształcania wiedzy technicznej w szerszy wpływ
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <p className="text-subtle-slate dark:text-silver-mist/90">
                        Przykłady transformacji specjalistów technicznych w liderów o głębszym oddziaływaniu
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <ArrowRight className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0" />
                    <div>
                      <p className="text-subtle-slate dark:text-silver-mist/90">
                        Praktyczne wyzwania implementacyjne do zastosowania od razu
                      </p>
                    </div>
                  </div>
                </div>
                
                <p className="mt-6 text-subtle-slate dark:text-silver-mist/90">
                  Ten newsletter <strong>nie jest</strong> kolejnym przeglądem narzędzi AI ani abstrakcyjnym poradnikiem rozwoju osobistego. To pomost między tymi światami, którego brakuje na rynku.
                </p>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="glass-card p-8 rounded-xl mb-16">
              <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist text-center">
                Zapisz się teraz
              </h3>
              <Newsletter />
              <p className="text-center text-sm text-subtle-slate dark:text-silver-mist/70 mt-4">
                Narzędzia AI dla ludzkiej ewolucji, nie zastąpienia. Z tego newslettera możesz zrezygnować w każdej chwili, jednym kliknięciem. Twoje dane są u mnie bezpieczne.
              </p>
            </div>
            
            <div className="text-center">
              <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                Szukasz bardziej spersonalizowanych wskazówek?
              </p>
              
              <Link to="/pl/contact" className="inline-flex items-center text-neural-violet dark:text-luminal-magenta font-medium">
                Umów rozmowę Discovery
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default PolishNewsletter;
