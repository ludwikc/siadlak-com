import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import SEO from '@/components/SEO';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Mail, CheckCircle2, AlertCircle } from 'lucide-react';

export default function ThankYouMeskiKompas() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <SEO
        title="Miejsce Zarezerwowane - Męski Kompas"
        description="Potwierdzenie rejestracji na warsztat 'Koniec z dryfowaniem' - 16 października 2025 o 19:00"
        keywords="męski kompas, warsztat, webinar, rozwój osobisty, mężczyźni 30+"
        url="/thank-you/meski-kompas"
      />

      <div className="min-h-screen bg-gradient-to-br from-background via-muted/20 to-background py-12 px-4">
        <div className="container max-w-4xl mx-auto">
          {/* Header Badge */}
          <div className="flex justify-center mb-8">
            <div className="bg-primary/10 px-4 py-2 rounded-full text-sm font-medium text-primary flex items-center animate-fade-in">
              <CheckCircle2 className="h-4 w-4 mr-2" />
              Rejestracja potwierdzona
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-card/80 backdrop-blur-lg rounded-3xl border border-border/50 shadow-2xl p-8 md:p-12 space-y-8 animate-scale-in">
            
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary to-primary/60 rounded-2xl mb-4">
                <Calendar className="h-10 w-10 text-primary-foreground" />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-foreground break-words">
                MIEJSCE ZAREZERWOWANE
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-primary break-words">
                Widzimy się 16 października o 19:00
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Właśnie zarezerwowałeś miejsce na warsztat <strong className="text-foreground">"Koniec z dryfowaniem"</strong> z Ludwikiem i Mateuszem.
              </p>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Workshop Details */}
            <div className="bg-muted/30 rounded-2xl p-6 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center break-words">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 shrink-0">📋</span>
                <span className="break-words">SZCZEGÓŁY TWOJEGO WARSZTATU:</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-muted-foreground">
                <div className="flex items-start space-x-3">
                  <Calendar className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Data:</p>
                    <p>Czwartek, 16 października 2025</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Godzina:</p>
                    <p>19:00 CET (czas polski)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Czas trwania:</p>
                    <p>90 minut</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <p className="font-medium text-foreground">Format:</p>
                    <p>Online (link otrzymasz mailem)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* What Happens Now */}
            <div className="space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center break-words">
                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 shrink-0">✅</span>
                <span className="break-words">CO DZIEJE SIĘ TERAZ:</span>
              </h3>

              {/* Step 1 */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center shrink-0 font-bold">
                    1
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    Sprawdź swoją skrzynkę (następne 5 minut)
                  </h4>
                </div>
                <p className="text-muted-foreground pl-11">
                  Właśnie wysłałem Ci email z tematem: <strong className="text-foreground">"🧭 Potwierdzenie zapisu „Koniec z dryfowaniem”"</strong>
                </p>
                <div className="pl-11 space-y-2 text-sm text-muted-foreground">
                  <p>Email zawiera:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Potwierdzenie daty i godziny</li>
                    <li>Link do dodania wydarzenia do kalendarza</li>
                    <li>Krótką instrukcję przygotowawczą</li>
                  </ul>
                </div>
                <div className="pl-11 bg-amber-500/10 border border-amber-500/20 rounded-lg p-3 flex items-start space-x-2">
                  <AlertCircle className="h-5 w-5 text-amber-600 mt-0.5 shrink-0" />
                  <p className="text-sm text-amber-900 dark:text-amber-200">
                    <strong>Nie widzisz emaila?</strong> Sprawdź folder SPAM lub Promocje.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center shrink-0 font-bold">
                    2
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    Dodaj warsztat do kalendarza (zrób to TERAZ)
                  </h4>
                </div>
                <p className="text-muted-foreground pl-11">
                  Kliknij link w emailu lub dodaj ręcznie:
                </p>
                <div className="pl-11 space-y-1 text-sm">
                  <p><strong className="text-foreground">Dzień:</strong> Czwartek, 16 października 2025</p>
                  <p><strong className="text-foreground">Godzina:</strong> 19:00 CET</p>
                  <p><strong className="text-foreground">Czas:</strong> 90 minut</p>
                </div>
                <div className="pl-11 bg-electric/5 border border-electric/20 rounded-lg p-3">
                  <p className="text-sm text-foreground">
                    <strong>Dlaczego to ważne?</strong> 87% osób które dodają wydarzenie do kalendarza faktycznie się pojawia. Reszta zapomina.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary text-primary-foreground h-8 w-8 rounded-full flex items-center justify-center shrink-0 font-bold">
                    3
                  </div>
                  <h4 className="text-lg font-bold text-foreground">
                    Przygotuj się do pracy
                  </h4>
                </div>
                <p className="text-muted-foreground pl-11">
                  To nie jest pasywny webinar. Będziesz pracować przez 90 minut.
                </p>
                <div className="pl-11 space-y-2 text-sm text-muted-foreground">
                  <p className="font-medium text-foreground">Przygotuj:</p>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Notes i długopis (wypełniasz 2 szablony live)</li>
                    <li>Spokojne miejsce (bez rozpraszaczy)</li>
                    <li>Otwartość na konkret (zero teorii, same narzędzia)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Reminders Timeline */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center break-words">
                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 shrink-0">📧</span>
                <span className="break-words">KIEDY DOSTANIESZ PRZYPOMNIENIA:</span>
              </h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-4 bg-muted/20 rounded-lg p-4">
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium shrink-0">
                    -24h
                  </div>
                  <div>
                    <p className="font-medium text-foreground">24 godziny przed warsztatem</p>
                    <p className="text-sm text-muted-foreground">15 października, 19:00 → Mail z linkiem do spotkania + ostatnie wskazówki</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-muted/20 rounded-lg p-4">
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium shrink-0">
                    -1h
                  </div>
                  <div>
                    <p className="font-medium text-foreground">1 godzina przed warsztatem</p>
                    <p className="text-sm text-muted-foreground">16 października, 18:00 → SMS z linkiem (jeśli podałeś numer)</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-muted/20 rounded-lg p-4">
                  <div className="bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium shrink-0">
                    -10min
                  </div>
                  <div>
                    <p className="font-medium text-foreground">10 minut przed startem</p>
                    <p className="text-sm text-muted-foreground">16 października, 18:50 → Finalne przypomnienie + sprawdzenie techniki</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Workshop Agenda */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center break-words">
                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 shrink-0">🎯</span>
                <span className="break-words">CO DOKŁADNIE ZROBIMY W TE 90 MINUT:</span>
              </h3>

              <div className="space-y-3">
                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-bold text-foreground">19:00-19:20</p>
                  <p className="text-muted-foreground">Dlaczego analityczny umysł Cię sabotuje (diagnoza 3 pułapek)</p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5">
                  <p className="font-bold text-foreground">19:20-19:50</p>
                  <p className="text-muted-foreground">Narzędzie #1: Deklaracja Odpowiedzialności</p>
                  <p className="text-sm italic text-muted-foreground mt-1">Wypełniasz szablon live. Wychodzisz z jasnym podziałem: co jest Twoje, co nie.</p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2 bg-primary/5">
                  <p className="font-bold text-foreground">19:50-20:20</p>
                  <p className="text-muted-foreground">Narzędzie #2: Decyzje 3-3-3</p>
                  <p className="text-sm italic text-muted-foreground mt-1">Identyfikujesz jedną mikrodecyzję do wykonania w tym tygodniu.</p>
                </div>

                <div className="border-l-4 border-primary pl-4 py-2">
                  <p className="font-bold text-foreground">20:20-20:30</p>
                  <p className="text-muted-foreground">Q&A + informacja o pełnym kursie Męski Kompas</p>
                </div>
              </div>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Important Notice */}
            <div className="bg-destructive/5 border-2 border-destructive/30 rounded-xl p-6 space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-foreground flex items-center break-words">
                <span className="text-xl sm:text-2xl mr-2 sm:mr-3 shrink-0">⚠️</span>
                <span className="break-words">WAŻNE - PRZECZYTAJ:</span>
              </h3>
              <p className="text-lg font-semibold text-foreground">
                To NIE jest typowy webinar motywacyjny.
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-medium text-foreground mb-2">Nie będzie:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>❌ Godzinnej prezentacji PowerPoint</li>
                    <li>❌ Ogólników i teorii</li>
                    <li>❌ Nudnych slajdów</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-foreground mb-2">Będzie:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>✅ 2 narzędzia do wypełnienia live</li>
                    <li>✅ Konkretne szablony robocze</li>
                    <li>✅ Praktyczne działanie</li>
                  </ul>
                </div>
              </div>

              <div className="bg-background/50 rounded-lg p-4 space-y-2">
                <p className="text-sm"><strong className="text-foreground">Jeśli szukasz inspiracji i motywacji</strong> - to nie jest dla Ciebie.</p>
                <p className="text-sm"><strong className="text-foreground">Jeśli szukasz konkretnych narzędzi do pracy</strong> - jesteś we właściwym miejscu.</p>
              </div>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Maximize Value Tips */}
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center break-words">
                <span className="text-2xl sm:text-3xl mr-2 sm:mr-3 shrink-0">💡</span>
                <span className="break-words">JAK ZMAKSYMALIZOWAĆ WARTOŚĆ Z WARSZTATU:</span>
              </h3>

              <ol className="space-y-3">
                {[
                  'Przyjdź 5 minut wcześniej - sprawdź dźwięk, obraz, połączenie',
                  'Wyłącz powiadomienia - telefon, email, Slack - wszystko',
                  'Przygotuj notes - będziesz pisał, nie tylko słuchał',
                  'Przyjdź z konkretnym problemem - jedna decyzja którą odkładasz',
                  'Zostań na Q&A - tam padają najcenniejsze pytania - również Twoje'
                ].map((tip, index) => (
                  <li key={index} className="flex items-start space-x-3 bg-muted/20 rounded-lg p-4">
                    <div className="bg-primary text-primary-foreground h-6 w-6 rounded-full flex items-center justify-center shrink-0 text-sm font-bold mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-muted-foreground">{tip}</p>
                  </li>
                ))}
              </ol>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Contact & Privacy */}
            <div className="space-y-6">
              <div className="bg-muted/30 rounded-xl p-6">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center mb-3 break-words">
                  <span className="text-lg sm:text-xl mr-2 shrink-0">❓</span>
                  <span className="break-words">MASZ PYTANIA PRZED WARSZTATEM?</span>
                </h3>
                <p className="text-muted-foreground mb-4">
                  Odpowiedz na ten email lub napisz do mnie na <a href="mailto:ludwikc@siadlak.email" className="text-primary hover:underline font-medium">ludwikc@siadlak.email</a> lub <a href="mailto:mateusz@hackerzy.pl" className="text-primary hover:underline font-medium">mateusz@hackerzy.pl</a>
                </p>
                <p className="text-sm text-muted-foreground">Odpowiadamy w ciągu 24h.</p>
              </div>

              <div className="bg-muted/20 rounded-xl p-6">
                <h3 className="text-base sm:text-lg font-bold text-foreground flex items-center mb-3 break-words">
                  <span className="text-lg sm:text-xl mr-2 shrink-0">🔒</span>
                  <span className="break-words">TWOJE DANE SĄ BEZPIECZNE</span>
                </h3>
                <p className="text-sm text-muted-foreground">
                  Nie sprzedajemy, nie wynajmujemy, nie przekazujemy. Używamy tylko do komunikacji dot. warsztatu i kursu Męski Kompas. Możesz wypisać się w każdej chwili.
                </p>
              </div>
            </div>

            <div className="h-px bg-border/50 my-8" />

            {/* Final CTA */}
            <div className="text-center space-y-6 py-8">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground break-words">
                DO ZOBACZENIA 16 PAŹDZIERNIKA O 19:00
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Zarezerwowałeś 90 minut na wypełnienie 2 narzędzi nawigacyjnych.
              </p>
              <div className="flex flex-col items-center space-y-2 text-xl font-medium">
                <p className="text-muted-foreground">Wejdziesz z chaosem.</p>
                <p className="text-primary text-2xl font-bold">Wyjdziesz z kompasem.</p>
              </div>
              <p className="text-lg font-semibold text-foreground pt-4">Do roboty,</p>
              <div className="text-lg font-bold text-foreground">
                <p>Ludwik + Mateusz</p>
                <p className="text-primary">Męski Kompas</p>
              </div>

              <div className="pt-8 space-y-4">
                <Button
                  className="w-full max-w-md bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-6 px-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
                  onClick={() => window.open('mailto:', '_blank')}
                >
                  <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Sprawdź swoją skrzynkę email
                </Button>

                <Button
                  variant="outline"
                  className="w-full max-w-md py-4"
                  onClick={() => navigate('/')}
                >
                  Wróć do strony głównej
                </Button>
              </div>
            </div>

            {/* P.S. Notes */}
            <div className="border-t border-border/50 pt-6 space-y-4 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">P.S.</strong> Jeśli znasz innego analitycznego faceta 30+, który dryfuje zamiast nawigować - prześlij mu link do zapisu. Warsztat jest darmowy, a miejsc ograniczona liczba.
              </p>
              <p>
                <strong className="text-foreground">P.P.S.</strong> Link do spotkania dostaniesz 24h przed warsztatem. Zachowaj tego maila - będziesz go potrzebował.
              </p>
              <p className="italic text-xs pt-4">
                *Liczba miejsc ograniczona do 98 osób + my, aby zapewnić jakość sesji Q&A
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
