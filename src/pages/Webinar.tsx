


import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';
import WebinarTestimonials from '@/components/webinar/WebinarTestimonials';
import { Badge } from '@/components/ui/badge';

// Webinar component

const Webinar = () => {

  // What attendees will learn during the workshop
  const workshopPromises = [
    "Czy Twoja biznesowa, korporacyjna lub freelancerska siekiera jest ostra, czy raczej tępa — i dlaczego większość ludzi wybiera to drugie.",
    "Jak rozpoznać, czy to w ogóle jest Twoje narzędzie — takie, które pasuje do Twojej natury i stylu pracy.",
    "Jak upewnić się, że jesteś we właściwym lesie — i jak wyjść z tego, który prowadzi donikąd.",
    "MEGA BONUS: jednodniowy dostęp do #1234-daily-coaching — przyjdź z własnym problemem, wyjdź z gotowym planem działania (tak codziennie pracują Lifehackerzy).",
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-luminous-white to-secondary dark:from-deep-space dark:to-neural-violet/30 min-h-screen">
        {/* Event Header Section with Countdown */}
        <section className="relative pt-10 pb-20 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
          </div>

          <div className="container max-w-6xl mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
              <div className="w-full lg:w-3/5">
                <div className="inline-flex items-center px-3 py-1 rounded-full bg-white/30 backdrop-blur-sm border border-neural-violet/30 text-neural-violet dark:text-neural-violet-light mb-4">
                  <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-neural-violet"></span>
                  <span className="text-sm font-medium">Warsztat na żywo</span>
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6 text-neural-violet dark:text-neural-violet bg-gradient-to-r from-neural-violet dark:from-neural-violet to-ascension-pink dark:to-ascension-pink bg-clip-text text-transparent">
                  Drwal w Białym Kołnierzyku: 4-dniowy warsztat ostrzenia życiowej siekiery
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/90">
                  Przestań machać tępym narzędziem w przypadkowym kierunku, "bo tak trzeba". Naucz się ostrzyć swoją produktywność tak, by wreszcie docierać do tego, co naprawdę się liczy.
                </p>

                <p className="text-lg mb-8 text-deep-charcoal/70 dark:text-silver-mist/80 font-medium">
                  Intensywny 4-dniowy warsztat z Ludwikiem C. Siadlakiem: Jak przestać rąbać nie ten las i nie tą siekierą
                </p>

                <div className="bg-white/20 dark:bg-deep-space/20 backdrop-blur-sm rounded-xl p-6 mb-8 border border-neural-violet/30">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-lg font-medium text-neural-violet dark:text-neural-violet-light">
                      <span>📅</span>
                      <span>18–21 sierpnia 2025</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg font-medium text-neural-violet dark:text-neural-violet-light">
                      <span>🕒</span>
                      <span>Godzina: kiedy będę gotowy</span>
                    </div>
                    <div className="flex items-center gap-3 text-lg font-medium text-neural-violet dark:text-neural-violet-light">
                      <span>🎥</span>
                      <span>Video tylko na żywo + nagrania (tylko audio)</span>
                    </div>
                  </div>
                </div>

                <div className="max-w-md mx-auto lg:mx-0">
                  <WebinarCountdown />
                </div>
              </div>

              <div className="w-full lg:w-2/5">
                <div
                  id="registration-form"
                  className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in"
                >
                  {/* MailerLite embed placeholder */}
                  <div className="text-center">
                    <Badge
                      variant="outline"
                      className="bg-neural-violet text-white text-sm px-3 py-1 mb-6"
                    >
                      Zarezerwuj swoje miejsce
                    </Badge>
                    
                    {/* MailerLite embed will be inserted here */}
                    <div className="bg-neural-violet/10 rounded-xl p-8 border-2 border-dashed border-neural-violet/30">
                      <p className="text-neural-violet font-medium">
                        MailerLite embed section
                      </p>
                      <p className="text-sm text-neural-violet/70 mt-2">
                        Registration form will be embedded here
                      </p>
                    </div>
                  </div>
                  <div className="ml-embedded" data-form="ZfnmS1"></div>
                  <script
                    dangerouslySetInnerHTML={{
                      __html: `
                      if (window.ml && window.ml.fn && window.ml.fn.jsonpRequest) {
                        window.ml.fn.jsonpRequest.make('/jsonp/484845/forms/ZfnmS1', 'renderEmbeddedForm');
                      } else {
                        window.addEventListener('DOMContentLoaded', function() {
                        if (window.ml && window.ml.fn && window.ml.fn.jsonpRequest) {
                          window.ml.fn.jsonpRequest.make('/jsonp/484845/forms/ZfnmS1', 'renderEmbeddedForm');
                        }
                        });
                      }
                      `,
                    }}
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notice Section */}
        <section className="py-8 bg-white/50 dark:bg-deep-space/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto px-4 text-center">
            <p className="text-lg font-medium text-deep-charcoal/80 dark:text-silver-mist/90">
              Liczba miejsc ograniczona – Discord ma swoje limity.
            </p>
          </div>
        </section>

        {/* Host Credentials Section */}
        <section className="py-16 bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm border-t border-b border-gray-200 dark:border-gray-800">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <span className="text-4xl">⸻</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-6">
                Prowadzi: Ludwik C. Siadlak
              </h2>
              
              <div className="space-y-4 text-lg text-deep-charcoal/80 dark:text-silver-mist/90">
                <p>
                  Prawie 20 lat "rąbania" przez wszystkie możliwe systemy produktywności
                </p>
                <p>
                  Autor kursu Hakowanie Produktywności, który przeszedł drogę od aplikacji po duchowość
                </p>
                <p>
                  Twórca społeczności Lifehackerzy, gdzie codziennie o 12:34 pomagam ludziom ostrzyć ich narzędzia
                </p>
                <p className="font-medium">
                  Przeczytałem wszystkie najważniejsze książki rozwojowe, przetestowałem niemal wszystkie aplikacje TODO i wykarczowałem ścieżkę, którą możesz przejść znacznie szybciej i wygodniej.
                </p>
              </div>
              
              <div className="mt-8">
                <span className="text-4xl">⸻</span>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Content Section */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
              Podczas tych warsztatów dowiesz się:
            </h2>

            <div className="grid gap-6 max-w-3xl mx-auto">
              {workshopPromises.map((promise, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-6 bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm"
                >
                  <div className="bg-neural-violet text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                    <span className="font-medium">{index + 1}</span>
                  </div>
                  <p className="text-lg">{promise}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience Section */}
        <section className="py-16 bg-white/50 dark:bg-deep-space/50 backdrop-blur-sm">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <span className="text-4xl">⸻</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
                Dla kogo jest ten warsztat?
              </h2>
              
              <p className="text-xl text-center mb-8 font-medium">
                Jesteś "drwalem w białym kołnierzyku", jeśli:
              </p>

              <div className="space-y-4 max-w-3xl mx-auto">
                <div className="flex items-start gap-4 p-4">
                  <span className="text-neural-violet font-bold text-xl">→</span>
                  <p className="text-lg">
                    Masz narzędzia AI (może nawet zbyt wiele), ale nie wiesz, czy używasz ich właściwie.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-neural-violet font-bold text-xl">→</span>
                  <p className="text-lg">
                    Pracujesz ciężko, a mimo to masz wrażenie, że oddalasz się od tego, co jest dla Ciebie najważniejsze.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-neural-violet font-bold text-xl">→</span>
                  <p className="text-lg">
                    Znasz dziesiątki technik produktywności, słuchasz podcastów, inwestowałeś w kursy — ale z wdrożeniem… sam wiesz, że bywa różnie.
                  </p>
                </div>
                <div className="flex items-start gap-4 p-4">
                  <span className="text-neural-violet font-bold text-xl">→</span>
                  <p className="text-lg">
                    A najgorzej… czasem zastanawiasz się, czy w ogóle jesteś w tym lesie, w którym naprawdę chcesz być.
                  </p>
                </div>
              </div>

              <div className="mt-12 text-center">
                <Button
                  onClick={() =>
                    document
                      .getElementById("registration-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="bg-neural-violet hover:bg-neural-violet/90 text-white px-8 py-6 text-lg"
                >
                  Zarezerwuj swoje miejsce
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <WebinarTestimonials />

      </div>
    </Layout>
  );
};

export default Webinar;
