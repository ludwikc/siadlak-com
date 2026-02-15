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
    window.scrollTo(0, 0);
    const storedEndTime = localStorage.getItem("specialOfferEndTime");
    if (storedEndTime) {
      const endTimeMs = parseInt(storedEndTime, 10);
      const currentTime = new Date().getTime();
      if (currentTime >= endTimeMs) {
        setIsOfferExpired(true);
      } else {
        const timeLeft = endTimeMs - currentTime;
        const timeout = setTimeout(() => {
          setIsOfferExpired(true);
        }, timeLeft);
        return () => clearTimeout(timeout);
      }
    }
  }, [location.pathname]);

  const renderContent = () => {
    switch (type) {
      case "contact":
        return (
          <>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4 flex items-center gap-2">
              <Mail className="h-4 w-4" /> Wiadomość wysłana
            </span>
            <p className="text-sm text-white/60 mb-10">
              {currentDate}, {currentTime}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              Wiadomość dotarła
            </h1>
            <p className="text-lg text-white/60 mb-8">
              Ale to nie jest automatyczna odpowiedź
            </p>

            <p className="text-base text-white/60 leading-relaxed mb-10">
              Twoja wiadomość trafiła do{" "}
              <span className="font-semibold text-white">prawdziwego człowieka</span>, nie do
              bota. Odezwę się do Ciebie w ciągu najbliższych 24 godzin (zwykle szybciej).
            </p>

            <Button
              className="w-full bg-brand-gradient text-white font-semibold py-4 px-6 rounded shadow-[0_4px_20px_rgba(109,40,217,0.4)] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => navigate("/webinar")}
            >
              Sprawdź termin webinaru
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex justify-center mt-6">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-white/60 hover:text-white"
              >
                Wróć do strony głównej
              </Button>
            </div>
          </>
        );

      case "newsletter":
        return (
          <>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4 flex items-center gap-2">
              <Zap className="h-4 w-4" /> Potwierdzenie
            </span>
            <p className="text-sm text-white/60 mb-10">
              {currentDate}, {currentTime}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              Zapisano!
            </h1>
            <p className="text-lg text-white/60 mb-8">
              A to dopiero początek...
            </p>

            <p className="text-base text-white/60 leading-relaxed mb-10">
              Właśnie dołączasz do{" "}
              <span className="font-semibold text-white">elitarnego grona</span> osób, które
              zdecydowały się wziąć sprawy we własne ręce. Pierwszy email otrzymasz w ciągu 24 godzin.
            </p>

            <Button
              className="w-full bg-brand-gradient text-white font-semibold py-4 px-6 rounded shadow-[0_4px_20px_rgba(109,40,217,0.4)] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => navigate("/program")}
            >
              Zobacz dostępne Aplikacje Mentalne
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex justify-center mt-6">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-white/60 hover:text-white"
              >
                Wróć do strony głównej
              </Button>
            </div>
          </>
        );

      case "discovery-call":
        return (
          <>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4 flex items-center gap-2">
              <Calendar className="h-4 w-4" /> Discovery Call
            </span>
            <p className="text-sm text-white/60 mb-10">
              {currentDate}, {currentTime}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              Gratulacje!
            </h1>
            <p className="text-lg text-white/60 mb-8">
              Twoje życie właśnie weszło na inny tor
            </p>

            <p className="text-base text-white/60 leading-relaxed mb-10">
              Doceniam Twoją odwagę. Większość ludzi nigdy nie podejmuje tego
              pierwszego kroku. Wysłałem szczegóły spotkania na Twój adres
              email.
            </p>

            <div className="space-y-4 mb-10">
              <h3 className="font-medium text-lg text-white">
                Wykonaj te 3 kroki przed naszą rozmową:
              </h3>
              {["Dodaj spotkanie do kalendarza", "Znajdź spokojne miejsce na rozmowę", "Przygotuj 1-2 pytania, które chcesz omówić"].map((step, i) => (
                <div key={i} className="flex items-start space-x-3">
                  <div className="bg-electric text-white h-6 w-6 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-sm font-medium">{i + 1}</span>
                  </div>
                  <p className="text-sm text-white/60">{step}</p>
                </div>
              ))}
            </div>

            <Button
              className="w-full bg-brand-gradient text-white font-semibold py-4 px-6 rounded shadow-[0_4px_20px_rgba(109,40,217,0.4)] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => window.open("https://calendar.google.com", "_blank")}
            >
              <Calendar className="mr-2 h-5 w-5" />
              Dodaj spotkanie do kalendarza
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <div className="flex justify-center mt-6">
              <Button variant="ghost" onClick={() => navigate("/")} className="text-white/60 hover:text-white">
                Wróć do strony głównej
              </Button>
            </div>
          </>
        );

      case "webinar":
        return (
          <>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4 flex items-center gap-2">
              <Clock className="h-4 w-4" /> Webinar
            </span>
            <p className="text-sm text-white/60 mb-10">
              {currentDate}, {currentTime}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              Zarezerwowano miejsce
            </h1>
            <p className="text-lg text-white/60 mb-8">
              A teraz mam pytanie...
            </p>

            <p className="text-base text-white/60 leading-relaxed mb-10">
              Twoje miejsce zostało potwierdzone! Wysłałem szczegóły na Twój
              adres email. Sprawdź swoją skrzynkę i dodaj wydarzenie do kalendarza.
            </p>

            <SpecialOfferCountdown />

            <div className={`p-4 rounded border mt-6 ${isOfferExpired ? "bg-white/5 border-white/10" : "bg-depth/10 border-depth/20"}`}>
              <div className="flex justify-between items-center mb-2">
                <h3 className={`font-medium ${isOfferExpired ? "text-white/40" : "text-electric"}`}>
                  {isOfferExpired ? "⏱️ Było, minęło..." : "⏱️ Czy chcesz przyspieszyć?"}
                </h3>
                <span className={`text-xs px-2 py-0.5 rounded-full ${isOfferExpired ? "bg-white/10 text-white/40" : "bg-depth/20 text-depth"}`}>
                  {isOfferExpired ? "Oferta wygasła" : "Oferta specjalna"}
                </span>
              </div>
              <p className="text-sm mb-3 text-white/60">
                <span className="font-medium text-white">68% uczestników</span> webinarów
                nigdy nie wdraża tego, czego się nauczy. Dlatego stworzyłem ten
                skrót dla ludzi, którzy działają natychmiast...
              </p>
              <div className="text-sm text-white/60">
                <p className="font-medium text-white">7 technik transformacji programisty w lidera</p>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center">
                    <span className="line-through mr-2">499 PLN</span>
                    <span className={`font-bold ${isOfferExpired ? "text-white/40" : "text-electric"}`}>77 PLN</span>
                  </div>
                  <span className="text-xs">{isOfferExpired ? "Oferta wygasła" : "Oferta ważna przez ograniczony czas"}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col space-y-4 mt-8">
              <Button
                className={`w-full font-semibold py-4 px-6 rounded shadow-lg transition-all duration-300 group ${
                  isOfferExpired
                    ? "bg-white/10 text-white/40 cursor-not-allowed"
                    : "bg-brand-gradient text-white hover:shadow-xl hover:-translate-y-0.5"
                }`}
                onClick={() => !isOfferExpired && navigate("/checkout/special-offer")}
                disabled={isOfferExpired}
              >
                {isOfferExpired ? (
                  <><Clock className="mr-2 h-5 w-5" />Oferta wygasła</>
                ) : (
                  <><Zap className="mr-2 h-5 w-5" />Tak, chcę natychmiastowe rezultaty (77 PLN)</>
                )}
              </Button>

              <Button
                variant="outline"
                className="w-full py-4 px-6 rounded border-white/20 text-white hover:bg-white/10 group"
                onClick={() => window.open("https://calendar.google.com", "_blank")}
              >
                <Calendar className="mr-2 h-5 w-5" />
                Dodaj webinar do kalendarza
              </Button>

              <Button
                variant="ghost"
                className="text-white/60 hover:text-white"
                onClick={() => navigate("/")}
              >
                Nie teraz, wróć do strony głównej
              </Button>
            </div>
          </>
        );

      default:
        return (
          <>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4 flex items-center gap-2">
              <CheckCheck className="h-4 w-4" /> Potwierdzenie
            </span>
            <p className="text-sm text-white/60 mb-10">
              {currentDate}, {currentTime}
            </p>

            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-3">
              Dziękujemy za kontakt!
            </h1>

            <p className="text-base text-white/60 leading-relaxed mb-10">
              Twoja wiadomość została pomyślnie wysłana. Odezwiemy się do Ciebie wkrótce.
            </p>

            <Button
              className="w-full bg-brand-gradient text-white font-semibold py-4 px-6 rounded shadow-[0_4px_20px_rgba(109,40,217,0.4)] transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5 group"
              onClick={() => navigate("/")}
            >
              Wróć do strony głównej
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </>
        );
    }
  };

  return (
    <Layout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-void-glow text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          {renderContent()}
        </div>
      </div>
    </Layout>
  );
}