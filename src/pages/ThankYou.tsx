
import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Zap, Calendar, Mail, Clock, ArrowRight, CheckCheck } from 'lucide-react';
import SpecialOfferCountdown from '@/components/webinar/SpecialOfferCountdown';

type ThankYouProps = {
  type?: "contact" | "newsletter" | "discovery-call" | "webinar";
};

export default function ThankYou({ type = "newsletter" }: ThankYouProps) {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTime = new Date().toLocaleTimeString("pl-PL", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const currentDate = new Date().toLocaleDateString("pl-PL", {
    day: "2-digit",
    month: "long",
  });
  const [isOfferExpired, setIsOfferExpired] = useState(false);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);

    // Check if offer is expired
    const storedEndTime = localStorage.getItem("specialOfferEndTime");
    if (storedEndTime) {
      const endTimeMs = parseInt(storedEndTime, 10);
      const currentTime = new Date().getTime();
      if (currentTime >= endTimeMs) {
        setIsOfferExpired(true);
      } else {
        // Set a timeout to update the expired state when the timer ends
        const timeLeft = endTimeMs - currentTime;
        const timeout = setTimeout(() => {
          setIsOfferExpired(true);
        }, timeLeft);
        return () => clearTimeout(timeout);
      }
    }
  }, [location.pathname]);

  const renderThankYouContent = () => {
    switch (type) {
      case "contact":
        return (
          <div className="w-full space-y-8 bg-card/80 backdrop-blur-lg p-10 rounded-3xl border border-border/50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-neural-violet/10 px-3 py-1 rounded-full text-sm text-neural-violet flex items-center">
                <Mail className="h-4 w-4 mr-2" />
                <span>Wiadomość wysłana</span>
              </div>
              <div className="text-xs text-gray-500">
                {currentDate}, {currentTime}
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-2">
              Wiadomość dotarła
            </h1>
            <p className="text-lg font-medium text-muted-foreground mb-4">
              Ale to nie jest automatyczna odpowiedź
            </p>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Twoja wiadomość trafiła do{" "}
              <span className="font-semibold text-foreground">prawdziwego człowieka</span>, nie do
              bota. Odezwę się do Ciebie w ciągu najbliższych 24 godzin (zwykle
              szybciej).
            </p>

            <div className="bg-muted/50 p-6 rounded-2xl border border-border/50">
              <h2 className="font-semibold mb-3 text-primary flex items-center">
                <span className="text-xl mr-2">💡</span>
                Podczas czekania:
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                <span className="font-semibold text-foreground">83% osób</span>, które wysyłają do
                mnie wiadomość, zapoznaje się z moim bezpłatnym webinarem o
                transformacji kariery.
              </p>
              <Button
                variant="link"
                className="text-primary p-0 mt-3 font-medium hover:text-primary/80"
                onClick={() => navigate("/webinar")}
              >
                Sprawdź termin webinaru <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => window.open("mailto:", "_blank")}
            >
              <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Sprawdź swoją skrzynkę email
            </Button>

            <div className="flex justify-center mt-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                Wróć do strony głównej
              </Button>
            </div>
          </div>
        );

      case "newsletter":
        return (
          <div className="w-full space-y-8 bg-card/80 backdrop-blur-lg p-10 rounded-3xl border border-border/50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-neural-violet/10 px-3 py-1 rounded-full text-sm text-neural-violet flex items-center">
                <Zap className="h-4 w-4 mr-2" />
                <span>Newsletter</span>
              </div>
              <div className="text-xs text-gray-500">
                {currentDate}, {currentTime}
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-4">
                <Zap className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-2">
                Zapisano!
              </h1>
              <p className="text-lg font-medium text-muted-foreground">
                Ale to dopiero początek...
              </p>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Właśnie dołączyłeś do{" "}
              <span className="font-semibold text-foreground">elitarnego grona</span> osób, które
              zdecydowały się wziąć swoją karierę we własne ręce. Pierwszy email
              otrzymasz w ciągu 24 godzin.
            </p>

            <div className="bg-muted/50 p-6 rounded-2xl border border-border/50">
              <h2 className="font-semibold mb-3 text-primary flex items-center">
                <span className="text-xl mr-2">🔍</span>
                Czy wiedziałeś?
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Należysz do elitarnych{" "}
                <span className="font-semibold text-foreground">13% osób</span>, które faktycznie
                czytają newslettery, na które się zapisują. Potwierdź to teraz.
              </p>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => window.open("mailto:", "_blank")}
            >
              <Zap className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Sprawdź teraz swoją skrzynkę → Pierwszy prezent już czeka
            </Button>

            <div className="flex justify-center mt-6">
              <Button 
                variant="ghost" 
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                Wróć do strony głównej
              </Button>
            </div>
          </div>
        );

      case "discovery-call":
        return (
          <div className="w-full space-y-8 bg-card/80 backdrop-blur-lg p-10 rounded-3xl border border-border/50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-neural-violet/10 px-3 py-1 rounded-full text-sm text-neural-violet flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <span>Discovery Call</span>
              </div>
              <div className="text-xs text-gray-500">
                {currentDate}, {currentTime}
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-4">
                <Calendar className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-2">
                Gratulacje!
              </h1>
              <p className="text-lg font-medium text-muted-foreground">
                Twoje życie właśnie weszło na inny tor
              </p>
            </div>

            <p className="text-md text-deep-charcoal/80 dark:text-silver-mist/90">
              Doceniam Twoją odwagę. Większość ludzi nigdy nie podejmuje tego
              pierwszego kroku. Wysłałem szczegóły spotkania na Twój adres
              email. Sprawdź swoją skrzynkę i dodaj spotkanie do kalendarza.
            </p>

            <div className="bg-gray-50 dark:bg-deep-space p-4 rounded-lg border border-gray-100 dark:border-gray-800">
              <h3 className="font-medium mb-2 text-neural-violet">
                🔍 Zaskakujący fakt:
              </h3>
              <p className="text-sm">
                <span className="font-medium">83% moich klientów</span>{" "}
                przyznaje, że chciało anulować tę rozmowę tuż przed jej
                rozpoczęciem. A dziś są wdzięczni, że tego nie zrobili.
              </p>
            </div>

            <div className="space-y-4 mt-6">
              <h3 className="font-medium text-lg">
                Wykonaj te 3 kroki przed naszą rozmową:
              </h3>
              <div className="flex items-start space-x-3">
                <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-medium">1</span>
                </div>
                <p className="text-sm">Dodaj spotkanie do kalendarza</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-medium">2</span>
                </div>
                <p className="text-sm">Znajdź spokojne miejsce na rozmowę</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-neural-violet text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-sm font-medium">3</span>
                </div>
                <p className="text-sm">
                  Przygotuj 1-2 pytania lub wątpliwości, które chcesz omówić
                </p>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() =>
                window.open("https://calendar.google.com", "_blank")
              }
            >
              <Calendar className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Dodaj spotkanie do kalendarza TERAZ → Zarezerwuj transformację
            </Button>

            <div className="flex justify-center mt-4">
              <Button variant="ghost" onClick={() => navigate("/")}>
                Wróć do strony głównej
              </Button>
            </div>
          </div>
        );

      case "webinar":
        return (
          <div className="w-full space-y-8 bg-card/80 backdrop-blur-lg p-10 rounded-3xl border border-border/50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-neural-violet/10 px-3 py-1 rounded-full text-sm text-neural-violet flex items-center">
                <Clock className="h-4 w-4 mr-2" />
                <span>Webinar</span>
              </div>
              <div className="text-xs text-gray-500">
                {currentDate}, {currentTime}
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-4">
                <Clock className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-2">
                Zarezerwowano miejsce
              </h1>
              <p className="text-lg font-medium text-muted-foreground">
                A teraz mam pytanie...
              </p>
            </div>

            <p className="text-md text-deep-charcoal/80 dark:text-silver-mist/90">
              Twoje miejsce zostało potwierdzone! Wysłałem szczegóły na Twój
              adres email. Sprawdź swoją skrzynkę i dodaj wydarzenie do
              kalendarza, aby nie przegapić webinaru.
            </p>

            <SpecialOfferCountdown />

            <div
              className={`p-4 rounded-lg border ${
                isOfferExpired
                  ? "bg-gray-100 dark:bg-gray-800/60 border-gray-300 dark:border-gray-700"
                  : "bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 border-neural-violet/20"
              }`}
            >
              <div className="flex justify-between items-center mb-2">
                <h3
                  className={`font-medium ${isOfferExpired ? "text-gray-500" : "text-neural-violet"}`}
                >
                  {isOfferExpired
                    ? "⏱️ Było, minęło..."
                    : "⏱️ Czy chcesz przyspieszyć?"}
                </h3>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    isOfferExpired
                      ? "bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"
                      : "bg-neural-violet/20 text-neural-violet"
                  }`}
                >
                  {isOfferExpired ? "Oferta wygasła" : "Oferta specjalna"}
                </span>
              </div>
              <p
                className={`text-sm mb-3 ${isOfferExpired ? "text-gray-500" : ""}`}
              >
                <span className="font-medium">68% uczestników</span> webinarów
                nigdy nie wdraża tego, czego się nauczy. Dlatego stworzyłem ten
                skrót dla ludzi, którzy działają natychmiast...
              </p>
              <div
                className={`text-sm ${isOfferExpired ? "text-gray-500" : ""}`}
              >
                <p className="font-medium">
                  7 technik transformacji programisty w lidera
                </p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center">
                    <span className="line-through text-gray-500 mr-2">
                      499 PLN
                    </span>
                    <span
                      className={`font-bold ${isOfferExpired ? "text-gray-500" : "text-neural-violet"}`}
                    >
                      77 PLN
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">
                    {isOfferExpired
                      ? "Oferta wygasła"
                      : "Oferta ważna przez ograniczony czas"}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-5 mt-6">
              <Button
                className={`w-full font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group ${
                  isOfferExpired
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : "bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground"
                }`}
                onClick={() =>
                  !isOfferExpired && navigate("/checkout/special-offer")
                }
                disabled={isOfferExpired}
              >
                {isOfferExpired ? (
                  <>
                    <Clock className="mr-3 h-5 w-5" />
                    Oferta wygasła - Było, minęło...
                  </>
                ) : (
                  <>
                    <Zap className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                    Tak, chcę natychmiastowe rezultaty (77 PLN)
                  </>
                )}
              </Button>

              <Button
                variant="outline"
                className="w-full py-4 px-6 rounded-2xl border-2 hover:bg-accent/50 transition-all duration-300 hover:shadow-md group"
                onClick={() =>
                  window.open("https://calendar.google.com", "_blank")
                }
              >
                <Calendar className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                Dodaj webinar do kalendarza
              </Button>

              <Button
                variant="ghost"
                className="text-muted-foreground hover:text-foreground py-3"
                onClick={() => navigate("/")}
              >
                Nie teraz, wróć do strony głównej
              </Button>
            </div>
          </div>
        );

      default:
        return (
          <div className="w-full space-y-8 bg-card/80 backdrop-blur-lg p-10 rounded-3xl border border-border/50 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <div className="bg-neural-violet/10 px-3 py-1 rounded-full text-sm text-neural-violet flex items-center">
                <CheckCheck className="h-4 w-4 mr-2" />
                <span>Potwierdzenie</span>
              </div>
              <div className="text-xs text-gray-500">
                {currentDate}, {currentTime}
              </div>
            </div>

            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-primary/80 rounded-2xl mb-4">
                <CheckCheck className="h-8 w-8 text-primary-foreground" />
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground leading-tight mb-2">
                Dziękujemy za kontakt!
              </h1>
            </div>

            <p className="text-md text-deep-charcoal/80 dark:text-silver-mist/90">
              Twoja wiadomość została pomyślnie wysłana. Odezwiemy się do Ciebie
              wkrótce.
            </p>

            <Button
              className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground font-semibold py-4 px-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => navigate("/")}
            >
              <ArrowRight className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              Wróć do strony głównej
            </Button>
          </div>
        );
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-luminous-white to-secondary/30 dark:from-deep-space dark:to-neural-violet/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-ascension-pink/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 w-full max-w-lg">
          {renderThankYouContent()}
        </div>
      </div>
    </Layout>
  );
}
