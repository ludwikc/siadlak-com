
import Layout from '@/components/layout/Layout';
import { CheckCircle, Ribbon } from '@/lib/icons';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import HeroSection from '@/components/sections/HeroSection';

export default function NewsletterPage() {
  return (
    <Layout>
      <HeroSection
        title={<>(🧠 + 🤖)<sup>💜</sup></>}
        subtitle={<>Rozszerz swój Intelekt o możliwości AI: <br/>a dopiero wtedy podnieś do potęgi <span className="italic text-ascension-pink">serca</span></>}
        titleBold={false}
      >
        <p className="text-lg md:text-xl mb-4 text-silver-mist/90 italic">
          "Każda technologia wystarczająco zaawansowana jest nieodróżnialna
          od magii" – Arthur C. Clarke
        </p>
      </HeroSection>

      <section className="py-16 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Why Section */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Dlaczego?
              </h2>

              <div className="prose dark:prose-invert max-w-none">
                <p>
                  Tematyka AI rozrasta się w takim tempie, że nie sposób nadążyć nad wszystkimi trendami: [PLACEHOLDER] Trochę jak w 2010, kiedy "chmura", to była tylko pojedyncza VM na Azure.
                </p>
                <p>
                  A tymczasem jest 2025 i LinkedIn to wylęgarnia speców od LLM, AI i vibe codingu.
                </p>
                <p>
                  Komu wierzyć? Gdzie jest original content?
                </p>
                <p>
                  Ja nie wiem. Ale wiem co działa. I zamiast rzucać się na każdą nowinkę, starannie wybieram narzędzia, na które może nie ma ultra-hype'u, ale za to są po prostu skuteczne.
                </p>
                <p>
                  Jeśli chcesz wiedzieć z jakich narzędzi korzystam - to jest miejsce dla Ciebie.
                </p>
                <p>
                  Ale to nie koniec.
                </p>
                <p>
                  W tym wszystkim wielu ludzi zapomina o human connection. Pamiętasz Nokię 3310 i slogan Connecting People?
                </p>
                <p>
                  Chcę o sobie myśleć jak o takiej Nokii. Tak twarda, że rozbija podłogę o którą uderza. Snake 🐍 jest minimalistyczną, ale wystarczającą rozrywką. A reszta? Absolutnie doskonała esencja: Rejestr połączeń, smsy i łączenie ludzi ze sobą, a nie konsumowanie tego co podpowiada nam algorytm. Dlatego zapraszam. Let's connect some people!
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Newsletter Visual - Full Width */}
        <div className="mb-16">
          <img 
            src="/lovable-uploads/e9cfea53-36f8-4170-92f4-ea7b4b064a53.png" 
            alt="Newsletter - Brain and AI working together"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">

            {/* For Whom */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Dla kogo?
              </h2>

              <div className="prose dark:prose-invert max-w-none">
                <p>Czy rozpoznajesz się w którymś z tych zdań?</p>
                <ul className="space-y-4 mt-6">
                  <li className="flex items-start">
                    <span className="text-neural-violet dark:text-luminal-magenta mr-3 mt-1">•</span>
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Jesteś z branży, więc "oczekuje się" od Ciebie znajomości każdego nowego narzędzia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neural-violet dark:text-luminal-magenta mr-3 mt-1">•</span>
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Potrafisz docenić wartość jednej głębokiej rozkminy nad płytkimi rozmowami o niczym
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neural-violet dark:text-luminal-magenta mr-3 mt-1">•</span>
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Rozumiesz, że mądrość to nie ćpanie wiedzy, ale jakość zrozumienia
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-neural-violet dark:text-luminal-magenta mr-3 mt-1">•</span>
                    <span className="text-deep-charcoal dark:text-silver-mist">
                      Chcesz używać AI, a nie dostawać zadyszki od "trzymania ręki na pulsie"
                    </span>
                  </li>
                </ul>
                <p className="mt-6">Jeśli tak - masz tutaj miejsce.</p>
              </div>
            </div>

            {/* What I Send */}
            <div className="mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Co wysyłam w niedzielę o 19.?
              </h2>

              <GlassCard padding="lg" className="space-y-6">
                <div className="flex items-start">
                  <span className="text-2xl mr-4 flex-shrink-0 leading-none">🧠</span>
                  <div>
                    <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-2 leading-tight -mt-1">Jedną myśl</h3>
                    <p className="text-deep-charcoal dark:text-silver-mist">
                      To, co intensywnie towarzyszyło mi w tym tygodniu. Produktywność? Mindfulness? leadership? Bycie Człowiekiem w świecie AI-first? Nie jestem filozofem, ale dzielę się swoimi przemyśleniami, które zmieniają sposób, w jaki konstruuję rzeczywistość.
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <span className="text-2xl mr-4 flex-shrink-0 leading-none">🔧</span>
                  <div>
                    <h3 className="font-bold text-deep-charcoal dark:text-silver-mist mb-2 leading-tight -mt-1">Jedno narzędzie AI</h3>
                    <p className="text-deep-charcoal dark:text-silver-mist">
                      Przetestowane. Z konkretnym zastosowaniem. Z moją szczerą oceną. Czasem aplikacja, czasem prompt, czasem zupełnie nowe rozwiązanie starego problemu.
                    </p>
                  </div>
                </div>
              </GlassCard>

              <p className="mt-6 text-subtle-slate dark:text-silver-mist/80">
                Zero szumu. Żadnych "10 najlepszych AI tego miesiąca", ani "agregacji linków" (a są do tego super prompty).
              </p>
              
              <p className="mt-4 text-deep-charcoal dark:text-silver-mist font-semibold">
                Wybierz plan i dołącz:
              </p>
            </div>

            {/* Pricing Tiers */}
            <div className="mb-16 relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist text-center">
                Wybierz swoją ścieżkę:
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Free Tier */}
                <div className="glass-card p-6 rounded-xl text-center transition-all duration-300 hover:shadow-[0_0_15px_rgba(59,15,119,0.3)] dark:hover:shadow-[0_0_15px_rgba(218,30,174,0.3)]">
                  <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                    PODSTAWOWY
                  </h3>
                  <p className="text-2xl font-bold mb-6 text-neural-violet dark:text-luminal-magenta">
                    Bezpłatny
                  </p>
                  <ul className="space-y-4 mb-8 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Cotygodniowy newsletter
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Dostęp do archiwum
                      </span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                      <span className="text-deep-charcoal dark:text-silver-mist">
                        Podstawowe wyzwania implementacyjne
                      </span>
                    </li>
                  </ul>
                  <a
                    href="https://app.easycart.pl/checkout/siadlak/newsletter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block w-full bg-neural-violet hover:bg-neural-violet/90 text-white py-3 px-6 rounded-lg transition-colors"
                  >
                    Wybierz PODSTAWOWY
                  </a>
                </div>

                {/* Premium Tier with highlighted glow effect */}
                <div className="glass-card p-6 rounded-xl text-center relative animate-pulse-subtle">
                  <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet to-ascension-pink rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-glow"></div>
                  <div className="absolute inset-0 border-2 border-neural-violet/50 dark:border-luminal-magenta/50 rounded-xl"></div>
                  <div className="relative z-10 bg-white/80 dark:bg-deep-space/80 p-6 rounded-lg">
                    <div className="absolute -top-1 -right-1 bg-[#FEF7CD] text-neural-violet px-4 py-1 rounded-tr-lg rounded-bl-lg border-t-2 border-r-2 border-neural-violet/20 shadow-md">
                      <span className="text-sm font-semibold flex items-center gap-1">
                        <Ribbon className="w-4 h-4" />
                        tylko teraz
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                      EDGE
                    </h3>
                    <div className="mb-6">
                      <span className="line-through text-subtle-slate dark:text-silver-mist/60">
                        99 PLN
                      </span>
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
                        <span className="text-deep-charcoal dark:text-silver-mist">
                          Wszystko z planu podstawowego
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-deep-charcoal dark:text-silver-mist">
                          Rozszerzone studia przypadków
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-deep-charcoal dark:text-silver-mist">
                          Zaawansowane ramy implementacyjne
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-deep-charcoal dark:text-silver-mist">
                          Dostęp do zamkniętych treści
                        </span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 text-neural-violet dark:text-luminal-magenta" />
                        <span className="text-deep-charcoal dark:text-silver-mist">
                          Pytania i odpowiedzi w wersji rozszerzonej
                        </span>
                      </li>
                    </ul>
                    <a
                      href="https://app.easycart.pl/checkout/siadlak/newsletter"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90 dark:from-neural-violet dark:to-luminal-magenta dark:hover:from-neural-violet/90 dark:hover:to-luminal-magenta/90 text-white py-3 px-6 rounded-lg transition-colors shadow-md shadow-neural-violet/30 dark:shadow-luminal-magenta/30"
                    >
                      Wybierz EDGE
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center">
                <p className="text-neural-violet dark:text-luminal-magenta font-bold mb-4">
                  ⚡ OFERTA LIMITOWANA: Pierwsze 1000 osób otrzymuje dostęp do
                  wersji EDGE za darmo! ⚡
                </p>
                <p className="text-subtle-slate dark:text-silver-mist/80">
                  Zamiast płacić 99 PLN miesięcznie, możesz dołączyć do programu
                  sponsorowanego przez Fundację HACKERZY.PL, która pokrywa
                  koszty dostępu dla pierwszych 1000 osób, które wybiorą wersję
                  EDGE.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                Narzędzia AI dla ludzkiej ewolucji, nie zastąpienia.
              </h2>

              <CTAButton
                size="xl"
                onClick={() =>
                  window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")
                }
                aria-label="Dołącz do newslettera - otwiera formularz rejestracji"
              >
                DOŁĄCZ TERAZ DO SPOŁECZNOŚCI
              </CTAButton>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
