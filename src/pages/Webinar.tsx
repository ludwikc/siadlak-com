import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';
import WebinarTestimonials from '@/components/webinar/WebinarTestimonials';
import { Badge } from '@/components/ui/badge';

// Webinar component

const Webinar = () => {
  // Define workshop date info
  const workshopDate = {
    date: "16.10",
    day: "",
    time: "19:00",
    timezone: ""
  };

  // Workshop agenda points
  const workshopAgenda = [
    "KRYZYS CZY PRZEMIANA? - Dialog: Dlaczego tak wielu facetów czuje, że się gubi? Zderzymy perspektywę tożsamości (Ludwik) z codziennymi wyzwaniami braku struktury (Mateusz).",
    "KOMPAS MĘŻCZYZNY - Mini-warsztat z Mateuszem: Otrzymasz proste narzędzie do zmapowania swojego 'tu i teraz' i wyznaczenia kierunku na przyszłość.", 
    "MAPA + ZAŁOGA = NOWA DROGA - Rozmowa: Dlaczego wizja bez działania to marzycielstwo, a plan bez wizji to pusta checklista?",
    "Q&A - Sesja pytań i odpowiedzi, podczas której będziesz mógł zadać nam każde pytanie."
  ];
  return <Layout>
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
                  Borykasz się z męskim kryzysem? <br/>Czas zbudować nową siłę.
                </h1>

                <p className="text-xl md:text-2xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/90">
                  Weź udział w bezpłatnym webinarze dla mężczyzn 30+ z analitycznym umysłem, którzy mają dość dryfowania. Pokażemy Ci, jak odzyskać kontrolę i spokój, używając konkretnych, systemowych narzędzi.
                </p>

                {/* Workshop Details */}
                <div className="bg-neural-violet/10 rounded-xl p-6 mb-8 border border-neural-violet/20">
                  <div className="space-y-3">
                    <div className="text-lg font-medium text-neural-violet">
                      📅 Data: {workshopDate.date}
                    </div>
                    <div className="text-lg font-medium text-neural-violet">
                      🕒 Godzina: {workshopDate.time}
                    </div>
                    <div className="text-lg font-medium text-neural-violet">🎥 Miejsce: Online (link otrzymasz po zapisie)</div>
                  </div>
                </div>

                <div className="max-w-md mx-auto lg:mx-0">
                  <WebinarCountdown />
                </div>
              </div>

              <div className="w-full lg:w-2/5">
                <div id="registration-form" className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg animate-fade-in">
                  {/* Date Badge - More prominent styling */}
                  <div className="mb-8 text-center">
                    <Badge variant="outline" className="bg-neural-violet text-white text-sm px-3 py-1 mb-2">
                      Zarezerwuj swoje miejsce na bezpłatny warsztat online
                    </Badge>
                    <div className="bg-neural-violet/10 rounded-xl p-4 border-2 border-neural-violet/30 shadow-inner">
                      {/* Reserved for MailerLite embed */}
                    </div>
                  </div>
                 {/* DO NOT EDIT  CODE BELOW UNDER ANY CIRCUMSTANCES */}
                  <div className="ml-embedded" data-form="QWxEaM"></div>
                  {/* DO NOT EDIT  CODE ABOVE UNDER ANY CIRCUMSTANCES */}

              </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16 bg-red-50 dark:bg-red-950/20">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-800 dark:text-red-300">
                Masz wrażenie, że biegniesz w miejscu, chociaż robisz wszystko "jak należy"?
              </h2>
              
              <p className="text-xl mb-8 text-center text-deep-charcoal/80 dark:text-silver-mist/90">
                To spotkanie jest dla Ciebie, jeśli:
              </p>

              <div className="space-y-4 mb-12">
                {[
                  "Czujesz, że utknąłeś w pętli myśli i analiz, które nie prowadzą do żadnych konkretnych decyzji.",
                  "Z jednej strony słyszysz o 'kryzysie męskości', z drugiej o 'toksyczności'. Trudno się w tym odnaleźć.",
                  "Szukasz praktycznych narzędzi, a nie kolejnej dawki motywacyjnego 'bullshitu'.",
                  "Chcesz zrozumieć, jak połączyć swoje wartości z codziennym planem działania, aby Twoje życie nabrało sensu i spójności."
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-red-900/30 rounded-xl border border-red-200 dark:border-red-800">
                    <span className="text-red-600 font-bold text-xl flex-shrink-0">✓</span>
                    <p className="text-lg text-red-800 dark:text-red-200">{item}</p>
                  </div>
                ))}
              </div>

              <div className="bg-neural-violet/10 rounded-xl p-8 border border-neural-violet/20">
                <h3 className="text-2xl font-bold mb-6 text-neural-violet">
                  Podczas tego 60-minutowego, intensywnego warsztatu online:
                </h3>
                <div className="space-y-4">
                  {[
                    "Zdiagnozujesz, czy to, czego doświadczasz, to kryzys, czy naturalna przemiana, która wymaga nowych narzędzi.",
                    "Otrzymasz proste, praktyczne narzędzie do zdefiniowania swojego punktu 'tu i teraz' w 4 kluczowych obszarach życia.",
                    "Zrozumiesz, dlaczego sama wizja (wartości) lub sam plan (checklista) nie działają – i co jest brakującym ogniwem.",
                    "Zobaczysz, jak zbudować wewnętrzny kompas, który stanie się Twoim systemem nawigacyjnym w chaosie codzienności."
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="bg-neural-violet text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                        <span className="font-medium">{index + 1}</span>
                      </div>
                      <p className="text-lg text-neural-violet">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Host Credentials Section */}
        <section className="py-16 bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm border-t border-b border-gray-200 dark:border-gray-800">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 text-center">
                <span className="text-4xl">⸻</span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
                Poznaj dwie strony męskiej drogi.
              </h2>
              
              <p className="text-xl mb-12 text-center text-deep-charcoal/80 dark:text-silver-mist/90">
                Webinar poprowadzi duet, który łączy wizję ze strukturą, serce z działaniem.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="bg-white/50 dark:bg-deep-space/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-neural-violet">Ludwik C. Siadlak</h3>
                  <p className="text-lg mb-4 text-deep-charcoal/80 dark:text-silver-mist/90">
                    Ekspert od męskiej tożsamości i wewnętrznej siły. Pomoże Ci zrozumieć "dlaczego" – co jest Twoim prawdziwym napędem i gdzie leżą Twoje blokady.
                  </p>
                </div>
                
                <div className="bg-white/50 dark:bg-deep-space/50 rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
                  <h3 className="text-xl font-bold mb-4 text-neural-violet">Mateusz Lizak</h3>
                  <p className="text-lg mb-4 text-deep-charcoal/80 dark:text-silver-mist/90">
                    Mistrz systemów i wdrażania. Pokaże Ci "jak" – da konkretne narzędzia i frameworki, które zamienią Twoje cele w realny, codzienny plan.
                  </p>
                </div>
              </div>

              <p className="text-center text-lg font-medium text-deep-charcoal/80 dark:text-silver-mist/90">
                Razem tworzymy przestrzeń, w której męski rozwój to nie puste słowa, ale konkretny, inżynierski proces.
              </p>
              
              <div className="mt-8 text-center">
                <span className="text-4xl">⸻</span>
              </div>
            </div>
          </div>
        </section>

        {/* Workshop Agenda Section */}
        <section className="py-16">
          <div className="container max-w-6xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Co dokładnie wydarzy się na webinarze?
            </h2>
            
            <p className="text-xl font-bold text-center mb-12 text-neural-violet">
              ZERO LANIA WODY. CZYSTY KONKRET.
            </p>

            <div className="grid gap-6 max-w-4xl mx-auto">
              {workshopAgenda.map((item, index) => {
                const titles = ["CZĘŚĆ 1:", "CZĘŚĆ 2:", "CZĘŚĆ 3:", "CZĘŚĆ 4:"];
                const [title, ...description] = item.split(" - ");
                return (
                  <div key={index} className="flex items-start gap-4 p-6 bg-white/70 dark:bg-deep-space/70 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-sm">
                    <div className="bg-neural-violet text-white h-8 w-8 rounded-full flex items-center justify-center shrink-0">
                      <span className="font-medium">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-neural-violet mb-2">{titles[index]} {title}</h3>
                      <p className="text-lg">{description.join(" - ")}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 bg-gradient-to-br from-neural-violet/5 via-background to-ascension-pink/5">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
                Przestań zbierać informacje. <br/>
                <span className="text-neural-violet">Czas zdobyć narzędzia.</span>
              </h2>
              
              <p className="text-xl mb-8 text-deep-charcoal/80 dark:text-silver-mist/90">
                Liczba miejsc jest ograniczona, aby zapewnić komfort i możliwość interakcji. Jeśli czujesz, że to czas, aby przestać dryfować i zacząć świadomie nawigować, dołącz do nas.
              </p>

              <p className="text-lg mb-12 font-medium text-neural-violet">
                Zapis jest bezpłatny i niezobowiązujący. Przychodzimy szczerze pogadać o tym turbo-ważnym temacie
              </p>
              
              <Button onClick={() => document.getElementById("registration-form")?.scrollIntoView({
                behavior: "smooth"
              })} className="bg-neural-violet hover:bg-neural-violet/90 text-white px-12 py-6 text-xl mb-6">
                TAK, ZAPISUJĘ SIĘ NA SPOTKANIE
              </Button>
              
              <p className="text-sm text-deep-charcoal/60 dark:text-silver-mist/70">
                Gwarantujemy 100% wartości i zero bullshitu. Po prostu przyjdź i sprawdź.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof */}
        <WebinarTestimonials />

      </div>
    </Layout>;
};
export default Webinar;