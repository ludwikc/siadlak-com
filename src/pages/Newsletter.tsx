
import Layout from '@/components/layout/Layout';
import { CheckCircle } from '@/lib/icons';
import { X, Brain, Bot, Heart, MessageSquare, Zap, Users } from 'lucide-react';
import { CTAButton } from '@/components/ui/cta-button';

export default function NewsletterPage() {
  return (
    <Layout>
      {/* Hero Section with Gradient Background */}
      <section className="relative min-h-screen bg-gradient-to-br from-neural-violet via-quantum-blue to-deep-space overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(218,30,174,0.15),transparent)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(59,15,119,0.2),transparent)] pointer-events-none" />
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
              {/* Left Content */}
              <div className="text-center lg:text-left space-y-8">

                <div className="space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    Nie newsletter.<br />
                    <span className="text-luminal-magenta">Rozmowa.</span>
                  </h2>
                  <p className="text-lg md:text-xl text-silver-mist/80">
                    Każda niedziela o 19:00: Jedna myśl. Tysiąc możliwości.
                  </p>
                </div>

                <CTAButton
                  size="xl"
                  onClick={() =>
                    window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")
                  }
                  className="text-lg px-8 py-4 shadow-lg shadow-luminal-magenta/25"
                >
                  ZACZNIJ ROZMOWĘ
                </CTAButton>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-r from-luminal-magenta/20 to-neural-violet/20 rounded-full blur-3xl" />
                <div className="relative z-10 flex items-center justify-center h-96">
                  <div className="grid grid-cols-3 gap-8 items-center">
                    <MessageSquare className="h-16 w-16 text-luminal-magenta/60 animate-pulse" />
                    <Brain className="h-20 w-20 text-white" />
                    <Zap className="h-16 w-16 text-luminal-magenta/60 animate-pulse delay-1000" />
                    <Bot className="h-16 w-16 text-luminal-magenta/60 animate-pulse delay-500" />
                    <Heart className="h-24 w-24 text-luminal-magenta animate-pulse delay-300" />
                    <Users className="h-16 w-16 text-luminal-magenta/60 animate-pulse delay-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-luminous-white dark:bg-deep-space">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            
            {/* Introduction */}
            <div className="mb-20 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                Cześć,
              </h2>
              <div className="prose prose-lg dark:prose-invert max-w-3xl mx-auto text-deep-charcoal dark:text-silver-mist">
                <p className="mb-6 text-xl leading-relaxed">
                  To nie jest kolejny newsletter, który przeczytasz i zapomnisz.
                </p>
                <p className="mb-6 text-xl font-semibold text-neural-violet dark:text-luminal-magenta">
                  To zaproszenie.
                </p>
                <p className="mb-6 leading-relaxed">
                  Każdego tygodnia dzielę się z Tobą jedną myślą, która intensywnie towarzyszyła mi przez ostatnie dni. Czasem o balansie między sztuczną inteligencją a ludzką intuicją. Czasem o mindfulness w świecie notyfikacji. Czasem o leadership, gdy każdy ma dostęp do tych samych narzędzi.
                </p>
                <p className="mb-6 text-lg font-medium">
                  <strong>Ale tu jest haczyk:</strong>
                </p>
                <p className="mb-6">
                  Nie chcę, żebyś po prostu czytał.
                </p>
                <p className="text-2xl font-bold text-neural-violet dark:text-luminal-magenta">
                  Chcę, żeby te myśli ZDERZYŁY się z Twoimi.
                </p>
              </div>
            </div>

            {/* How It Works - More Visual */}
            <div className="mb-20">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-deep-charcoal dark:text-silver-mist">
                JAK TO DZIAŁA:
              </h2>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-neural-violet/20 hover:border-luminal-magenta/40 transition-all duration-300 hover:scale-105">
                  <div className="mb-6">
                    <span className="text-4xl">📧</span>
                  </div>
                  <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-3">
                    NIEDZIELA, 19:00
                  </h3>
                  <p className="text-deep-charcoal dark:text-silver-mist/80">
                    Rzucam myśl. Jeden temat. Jedna perspektywa. Czasem kontrowersyjna. Zawsze szczera.
                  </p>
                </div>

                <div className="text-center p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-neural-violet/20 hover:border-luminal-magenta/40 transition-all duration-300 hover:scale-105">
                  <div className="mb-6">
                    <span className="text-4xl">💬</span>
                  </div>
                  <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-3">
                    PONIEDZIAŁEK-PIĄTEK
                  </h3>
                  <p className="text-deep-charcoal dark:text-silver-mist/80">
                    Ty odpowiadasz. Reply na maila. Podziel się swoją perspektywą. Podważ moją. Rozbuduj ją.
                  </p>
                </div>

                <div className="text-center p-8 rounded-2xl bg-white/50 dark:bg-white/5 backdrop-blur-sm border border-neural-violet/20 hover:border-luminal-magenta/40 transition-all duration-300 hover:scale-105">
                  <div className="mb-6">
                    <span className="text-4xl">🔥</span>
                  </div>
                  <h3 className="font-bold text-lg text-deep-charcoal dark:text-silver-mist mb-3">
                    SOBOTA
                  </h3>
                  <p className="text-deep-charcoal dark:text-silver-mist/80">
                    Najlepsze insights ze wszystkich rozmów. Kompilacja przełomowych wymian myśli z tygodnia.
                  </p>
                </div>
              </div>
            </div>

            {/* Target Audience - Side by Side */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12">
                {/* Not For You */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist flex items-center">
                    <X className="h-6 w-6 mr-3 text-red-500" />
                    TO NIE JEST DLA CIEBIE, JEŚLI:
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Szukasz gotowych odpowiedzi",
                      "Chcesz być bierny w konsumpcji treści", 
                      "Nie lubisz, gdy ktoś kwestionuje Twoje przekonania",
                      "Unikasz głębokich rozmów"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-xl">❌</span>
                        <span className="text-deep-charcoal dark:text-silver-mist">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* For You */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist flex items-center">
                    <CheckCircle className="h-6 w-6 mr-3 text-green-500" />
                    TO JEST DLA CIEBIE, JEŚLI:
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Myśli innych zmieniają Twój sposób patrzenia na świat",
                      "Lubisz inteligentne spory konstruktywne",
                      "Cenisz jakość myślenia nad ilością informacji",
                      "Jesteś gotowy/a podzielić się swoją perspektywą",
                      "Wierzysz, że najlepsze idee rodzą się w zderzeniu"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-xl">✅</span>
                        <span className="text-deep-charcoal dark:text-silver-mist">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

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

            {/* Rules - No Boxes */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                    NIE MA TUTAJ MIEJSCA NA:
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Klepanie się po plecach i przytakiwanie sobie nawzajem",
                      "Content generowany przez AI",
                      "\"Jesteś zwycięzcą\" i inne puste afirmacje",
                      "Grzeczne kłamstwa zamiast niewygodnej prawdy"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-red-500 mr-3 mt-1 text-xl">❌</span>
                        <span className="text-deep-charcoal dark:text-silver-mist">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-6">
                  <h3 className="text-2xl font-bold text-deep-charcoal dark:text-silver-mist">
                    Jest miejsce na:
                  </h3>
                  <div className="space-y-4">
                    {[
                      "Konstruktywne spory",
                      "Zmienianie perspektyw",
                      "Głębokie pytania",
                      "Inteligentną niewiedzy",
                      "Ewolucję myślenia"
                    ].map((item, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-green-500 mr-3 mt-1 text-xl">✅</span>
                        <span className="text-deep-charcoal dark:text-silver-mist">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Promise */}
            <div className="mb-20">
              <div className="text-center p-12 rounded-3xl bg-gradient-to-br from-white/60 to-white/30 dark:from-white/10 dark:to-white/5 backdrop-blur-sm">
                <h3 className="text-3xl font-bold mb-8 text-deep-charcoal dark:text-silver-mist">
                  MOJA OBIETNICA:
                </h3>
                <div className="space-y-6 text-deep-charcoal dark:text-silver-mist max-w-2xl mx-auto">
                  <p className="text-lg">Nigdy nie dam Ci gotowej odpowiedzi.</p>
                  <p className="text-lg">Zawsze dam Ci nową perspektywę.</p>
                  <p className="text-lg">I zawsze będę słuchał, gdy podzielisz się swoją.</p>
                  <p className="text-xl md:text-2xl font-bold text-neural-violet dark:text-luminal-magenta">
                    Bo prawda jest taka: najlepsze myśli rodzą się nie w pojedynczych głowach, ale w zderzeniu między nimi.
                  </p>
                </div>
              </div>
            </div>

            {/* Example */}
            <div className="mb-20">
              <div className="p-8 rounded-2xl bg-gradient-to-r from-neural-violet/5 to-ascension-pink/5 border border-neural-violet/20">
                <h3 className="text-xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
                  PRZYKŁAD Z TEGO TYGODNIA:
                </h3>
                <blockquote className="text-xl md:text-2xl italic text-neural-violet dark:text-luminal-magenta mb-4 font-medium">
                  "Czy AI czyni nas mądrzejszymi, czy tylko bardziej wydajnymi? I czy to w ogóle ta sama rzecz?"
                </blockquote>
                <p className="text-sm text-subtle-slate dark:text-silver-mist/60">
                  (Zobacz, jak na to odpowiedzieli inni w komentarzach poniżej)
                </p>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center">
              <CTAButton
                size="xl"
                onClick={() =>
                  window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank")
                }
                aria-label="Zacznij rozmowę - dołącz do newslettera"
                className="mb-8 text-xl px-12 py-6 shadow-xl shadow-luminal-magenta/25"
              >
                ZACZNIJ ROZMOWĘ
              </CTAButton>
              
              <p className="text-subtle-slate dark:text-silver-mist/70 italic max-w-2xl mx-auto">
                P.S. Pamiętasz stare Nokie 3310? Ja właśnie tak myślę o rozmowach. Proste. Niezawodne. I łączące ludzi, nie algorytmy.
              </p>
            </div>

          </div>
        </div>
      </section>
    </Layout>
  );
}
