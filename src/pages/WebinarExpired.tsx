import { useNavigate } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, MailIcon, Download } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const WebinarExpired = () => {
  const navigate = useNavigate();

  const handleNewsletterSignup = () => {
    navigate("/newsletter");
  };

  const handleDownloadGuide = () => {
    toast({
      title: "Pobieranie przewodnika",
      description: "Przewodnik '5 technik Czarnej Pantery' został pobrany.",
    });
  };

  return (
    <Layout hideFooter={true}>
      <div className="min-h-screen bg-gradient-to-br from-luminous-white to-secondary pt-16 pb-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-500/20 backdrop-blur-sm border border-gray-500/30 text-gray-500 mb-6">
            <Clock className="h-4 w-4 mr-2" />
            <span className="text-sm font-medium">Webinar zakończony</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Webinar został zakończony
          </h1>

          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Dziękujemy za Twoje zainteresowanie metodologią Black Panther
          </p>

          <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg max-w-3xl mx-auto mb-12">
            <p className="text-xl mb-8">
              Niestety, transmisja na żywo już się odbyła.
              <br />
              Webinar "Jak przejąć kontrolę nad swoją karierą i życiem w erze
              sztucznej inteligencji" został przeprowadzony w środę, 20 maja
              2025.
            </p>

            <p className="text-lg font-medium mb-8">
              Możesz podjąć jeden z następujących kroków:
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <MailIcon className="h-10 w-10 text-twilight-indigo mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-4">
                  Zapisz się na powiadomienie o kolejnym webinarze
                </h3>
                <p className="text-sm mb-6">
                  Otrzymasz informację, gdy zaplanujemy następną sesję. Nie
                  przegapisz kolejnej okazji!
                </p>
                <Button
                  className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  onClick={handleNewsletterSignup}
                >
                  ZAPISZ SIĘ NA POWIADOMIENIE
                </Button>
              </div>

              <div className="bg-gradient-to-br from-twilight-indigo/10 to-zenith-gold/10 p-6 rounded-xl border border-twilight-indigo/20">
                <ArrowRight className="h-10 w-10 text-twilight-indigo mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-4">
                  Sprawdź program LifeOS: System Upgrade
                </h3>
                <p className="text-sm mb-6">
                  Odkryj, jak możesz przejść transformację z reaktywnego
                  specjalisty do suwerennego lidera.
                </p>
                <Button
                  className="w-full bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                  onClick={() => navigate("/program/lifeos-system-upgrade")}
                >
                  DOWIEDZ SIĘ WIĘCEJ O PROGRAMIE
                </Button>
              </div>
            </div>
          </div>

          {/* Bonus Content */}
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">📚 Podczas gdy czekasz:</h2>

            <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg mb-12">
              <p className="text-lg mb-6">
                Pobierz bezpłatny przewodnik "5 technik Czarnej Pantery, które
                możesz wdrożyć od zaraz", aby rozpocząć swoją transformację:
              </p>

              <Button
                size="lg"
                className="bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                onClick={handleDownloadGuide}
              >
                <Download className="mr-2 h-5 w-5" /> Pobierz Bezpłatny
                Przewodnik
              </Button>
            </div>

            {/* Social Proof */}
            <div className="bg-white backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg">
              <p className="italic text-lg mb-4">
                "Webinar Ludwika był przełomowym momentem w mojej karierze.
                Metodologia Black Panther pomogła mi odzyskać kontrolę nad swoim
                życiem zawodowym i zwiększyć zarobki o 62% w ciągu 6 miesięcy."
              </p>
              <p className="font-medium">- Karol M., Software Architect</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebinarExpired;
