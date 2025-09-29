
import Layout from '@/components/layout/Layout';
import { CheckCircle } from '@/lib/icons';
import { X } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import HeroSection from '@/components/sections/HeroSection';

export default function NewsletterPage() {
  return (
    <Layout>
      <HeroSection
        title={<>(🧠 + 🤖)💜</>}
        subtitle="INTELIGENCJA DO POTĘGI SERCA"
        titleBold={false}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          Nie newsletter. Rozmowa.
        </h2>
        <p className="text-lg md:text-xl text-silver-mist/90">
          Każda niedziela o 19:00: Jedna myśl. Tysiąc możliwości.
        </p>
      </HeroSection>

      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Cześć,
              </h2>
              <div className="prose dark:prose-invert max-w-none text-deep-charcoal dark:text-silver-mist">
                <p className="mb-4">
                  To nie jest kolejny newsletter, który przeczytasz i zapomnisz.
                </p>
                <p className="mb-4">
                  <strong>To zaproszenie.</strong>
                </p>
                <p className="mb-4">
                  Każdego tygodnia dzielę się z Tobą jedną myślą, która intensywnie towarzyszyła mi przez ostatnie dni. Czasem o balansie między sztuczną inteligencją a ludzką intuicją. Czasem o mindfulness w świecie notyfikacji. Czasem o leadership, gdy każdy ma dostęp do tych samych narzędzi.
                </p>
                <p className="mb-4">
                  <strong>Ale tu jest haczyk:</strong>
                </p>
                <p className="mb-4">
                  Nie chcę, żebyś po prostu czytał.
                </p>
                <p className="text-xl font-bold text-neural-violet dark:text-luminal-magenta">
                  Chcę, żeby te myśli ZDERZYŁY się z Twoimi.
                </p>
              </div>
            </div>

            {/* How It Works */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                JAK TO DZIAŁA:
              </h2>

              <div className="space-y-8">
                <GlassCard padding="lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 flex-shrink-0 leading-none">📧</span>
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-2">
                        NIEDZIELA, 19:00: Rzucam myśl
                      </h3>
                      <p className="text-deep-charcoal dark:text-silver-mist">
                        Jeden temat. Jedna perspektywa. Czasem kontrowersyjna. Zawsze szczera.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard padding="lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 flex-shrink-0 leading-none">💬</span>
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-2">
                        PONIEDZIAŁEK-PIĄTEK: Ty odpowiadasz
                      </h3>
                      <p className="text-deep-charcoal dark:text-silver-mist">
                        Reply na maila. Podziel się swoją perspektywą. Podważ moją. Rozbuduj ją.
                      </p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard padding="lg">
                  <div className="flex items-start">
                    <span className="text-2xl mr-4 flex-shrink-0 leading-none">🔥</span>
                    <div>
                      <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-2">
                        SOBOTA: Najlepsze insights ze wszystkich rozmów
                      </h3>
                      <p className="text-deep-charcoal dark:text-silver-mist">
                        Kompilacja najbardziej przełomowych wymian myśli z tygodnia. Anonimowo, z szacunkiem.
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>
            </div>

            {/* Target Audience */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Not For You */}
                <GlassCard padding="lg" className="border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist flex items-center">
                    <X className="h-6 w-6 mr-3 text-red-500" />
                    TO NIE JEST DLA CIEBIE, JEŚLI:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Szukasz gotowych odpowiedzi
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Chcesz być bierny w konsumpcji treści
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Nie lubisz, gdy ktoś kwestionuje Twoje przekonania
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Unikasz głębokich rozmów
                      </span>
                    </li>
                  </ul>
                </GlassCard>

                {/* For You */}
                <GlassCard padding="lg" className="border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist flex items-center">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                    TO JEST DLA CIEBIE, JEŚLI:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Myśli innych zmieniają Twój sposób patrzenia na świat
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Lubisz inteligentne spory konstruktywne
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Cenisz jakość myślenia nad ilością informacji
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Jesteś gotowy/a podzielić się swoją perspektywą
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Wierzysz, że najlepsze idee rodzą się w zderzeniu
                      </span>
                    </li>
                  </ul>
                </GlassCard>
              </div>
            </div>

            {/* Two Levels */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
                DWA POZIOMY ROZMOWY:
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Tier - Otwarty Krąg */}
                <div className="glass-card p-6 rounded-xl text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,15,119,0.3)] dark:hover:shadow-[0_0_15px_rgba(218,30,174,0.3)]">
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-2xl mr-2">🆓</span>
                    <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                      OTWARTY KRĄG
                    </h3>
                  </div>
                  
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Cotygodniowa myśl w niedzielę
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Możliwość odpowiedzi przez email
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Comiesięczne kompilacje najlepszych wymian
                      </span>
                    </li>
                  </ul>
                  
                  <a
                    href="https://app.easycart.pl/checkout/siadlak/newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-neural-violet hover:bg-neural-violet/90 text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    Dołącz do Otwartego Kręgu
                  </a>
                </div>

                {/* Premium Tier - Wewnętrzny Krąg */}
                <div className="glass-card p-6 rounded-xl text-center relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet to-ascension-pink rounded-xl blur-md opacity-30"></div>
                  <div className="relative z-10 bg-white/90 dark:bg-deep-space/90 p-6 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-2xl mr-2">💎</span>
                      <h3 className="text-xl font-bold text-deep-charcoal dark:text-silver-mist">
                        WEWNĘTRZNY KRĄG
                      </h3>
                    </div>
                    
                    <p className="text-lg font-semibold mb-6 text-neural-violet dark:text-luminal-magenta">
                      97 PLN/mies.
                    </p>
                    
                    <div className="mb-6 text-left">
                      <p className="text-sm font-semibold text-deep-charcoal dark:text-silver-mist mb-2">
                        Wszystko z Otwartego Kręgu:
                      </p>
                      <ul className="space-y-2 text-sm text-subtle-slate dark:text-silver-mist/80 mb-4">
                        <li>• Cotygodniowa myśl w niedzielę</li>
                        <li>• Możliwość odpowiedzi przez email</li>
                        <li>• Comiesięczne kompilacje najlepszych wymian</li>
                      </ul>
                      
                      <p className="text-sm font-semibold text-deep-charcoal dark:text-silver-mist mb-2">+</p>
                      
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                          <span className="text-deep-charcoal dark:text-silver-mist text-sm">
                            Dostęp do archiwum wszystkich "Zderzeń myśli"
                          </span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-1" />
                          <span className="text-deep-charcoal dark:text-silver-mist text-sm">
                            Priorytet w odpowiedziach na Twoje perspektywy
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <a
                      href="https://app.easycart.pl/checkout/siadlak/newsletter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90 text-white py-3 px-6 rounded-lg transition-colors shadow-md"
                    >
                      Dołącz do Wewnętrznego Kręgu
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Founding Moment */}
            <div className="mb-16">
              <GlassCard padding="lg" className="text-center border-2 border-neural-violet/30">
                <h3 className="text-2xl font-bold mb-4 text-neural-violet dark:text-luminal-magenta">
                  ⚡ MOMENT ZAŁOŻYCIELSKI:
                </h3>
                <p className="text-lg font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                  Pierwsze 1,000 osób wchodzi do WEWNĘTRZNEGO KRĘGU za 0 PLN/mies. DOŻYWOTNIO
                </p>
                <p className="text-deep-charcoal dark:text-silver-mist">
                  Dlaczego? Dzięki Fundacji HACKERZY.PL i dlatego, że buduję coś, czego świat potrzebuje. Społeczność ludzi, którzy myślą razem, nie obok siebie.
                </p>
              </GlassCard>
            </div>

            {/* Rules */}
            <div className="mb-16">
              <div className="grid md:grid-cols-2 gap-8">
                <GlassCard padding="lg" className="border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                    NIE MA TUTAJ MIEJSCA NA:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Klepanie się po plecach i przytakiwanie sobie nawzajem
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Content generowany przez AI
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        "Jesteś zwycięzcą" i inne puste afirmacje
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-3 mt-1">❌</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Grzeczne kłamstwa zamiast niewygodnej prawdy
                      </span>
                    </li>
                  </ul>
                </GlassCard>

                <GlassCard padding="lg" className="border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                    Jest miejsce na:
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Konstruktywne spory
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Zmienianie perspektyw
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Głębokie pytania
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Inteligentną niewiedzy
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-500 mr-3 mt-1">✅</span>
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Ewolucję myślenia
                      </span>
                    </li>
                  </ul>
                </GlassCard>
              </div>
            </div>

            {/* Promise */}
            <div className="mb-16">
              <GlassCard padding="lg" className="text-center">
                <h3 className="text-2xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                  MOJA OBIETNICA:
                </h3>
                <div className="space-y-4 text-deep-charcoal dark:text-silver-mist">
                  <p>Nigdy nie dam Ci gotowej odpowiedzi.</p>
                  <p>Zawsze dam Ci nową perspektywę.</p>
                  <p>I zawsze będę słuchał, gdy podzielisz się swoją.</p>
                  <p className="text-lg font-semibold text-neural-violet dark:text-luminal-magenta">
                    Bo prawda jest taka: najlepsze myśli rodzą się nie w pojedynczych głowach, ale w zderzeniu między nimi.
                  </p>
                </div>
              </GlassCard>
            </div>

            {/* Example */}
            <div className="mb-16">
              <GlassCard padding="lg">
                <h3 className="text-xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                  PRZYKŁAD Z TEGO TYGODNIA:
                </h3>
                <p className="text-lg italic text-neural-violet dark:text-luminal-magenta mb-4">
                  "Czy AI czyni nas mądrzejszymi, czy tylko bardziej wydajnymi? I czy to w ogóle ta sama rzecz?"
                </p>
                <p className="text-sm text-subtle-slate dark:text-silver-mist/80">
                  (Zobacz, jak na to odpowiedzieli inni w komentarzach poniżej)
                </p>
              </GlassCard>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <CTAButton
                size="xl"
                onClick={() =>
                  window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")
                }
                aria-label="Zacznij rozmowę - dołącz do newslettera"
                className="mb-8"
              >
                ZACZNIJ ROZMOWĘ
              </CTAButton>
              
              <p className="text-sm text-subtle-slate dark:text-silver-mist/80 italic">
                P.S. Pamiętasz stare Nokie 3310? Ja właśnie tak myślę o rozmowach. Proste. Niezawodne. I łączące ludzi, nie algorytmy.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
