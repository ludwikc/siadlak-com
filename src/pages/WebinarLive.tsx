import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { HelpCircle, Download, ExternalLink } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Facebook, Linkedin, Youtube } from "lucide-react";

const WebinarLive = () => {
  const [showOffer, setShowOffer] = useState(false);

  const handleResourceClick = (resource: string) => {
    toast({
      title: "Zasób",
      description: `Pobieranie: ${resource}`,
    });
  };

  const handleCTAClick = () => {
    // In a real implementation, this would navigate to the offer page or open a modal
    setShowOffer(true);
    toast({
      title: "Dowiedz się więcej",
      description: "Więcej informacji o programie LifeOS: System Upgrade.",
    });
  };

  return (
    <Layout hideFooter={true}>
      <div className="min-h-screen bg-gradient-to-br from-deep-space to-twilight-indigo/50 pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-500 mb-4">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-sm font-medium">TRANSMISJA NA ŻYWO</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              KOD KAPITANA
            </h1>

            <p className="text-lg mb-6 text-gray-300">
              Uważność, która po prostu działa.
            </p>

            <p className="text-md mb-6 text-gray-400">
              prowadzi: <strong>Ludwik C. Siadlak</strong> (MCT, MCSA, MCSE, MCP, ECC)
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Main Content Area - 3 columns wide */}
            <div className="md:col-span-3 space-y-6">
              {/* Webinar Video Window */}
              <div
                className="rounded-lg overflow-hidden"
                style={{ padding: "56.25% 0 0 0", position: "relative" }}
              >
                <div
                  style={{
                    height: "100%",
                    left: 0,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <iframe
                    height="100%"
                    width="100%"
                    src="https://webinar.mywave.video/snaxhXbnHls4orbg?embed"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>

              {/* Platform Links */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h2 className="text-xl font-bold text-white mb-4 text-center">
                  Oglądaj na swojej ulubionej platformie:
                </h2>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button
                    asChild
                    className="bg-red-600 hover:bg-red-700 text-white border-0"
                  >
                    <a
                      href="https://www.youtube.com/watch?v=jHphriFDJKM"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Youtube className="w-5 h-5" />
                      YouTube
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-blue-600 hover:bg-blue-700 text-white border-0"
                  >
                    <a
                      href="https://www.facebook.com/events/1722489938708332"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Facebook className="w-5 h-5" />
                      Facebook
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-[#0077b5] hover:bg-[#006399] text-white border-0"
                  >
                    <a
                      href="https://www.linkedin.com/feed/update/urn:li:ugcPost:7420418135205494785"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Linkedin className="w-5 h-5" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
              </div>

              {/* CTA During Webinar */}
              {showOffer && (
                <div className="bg-gradient-to-r from-twilight-indigo/30 to-zenith-gold/30 backdrop-blur-lg rounded-xl p-6 border border-twilight-indigo/30 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Program LifeOS: System Upgrade - Odkryj pełną transformację
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Teraz możesz dowiedzieć się więcej o pełnym programie
                    transformacji, który przeprowadzi Cię z reaktywnego
                    wykonawcy do suwerennego lidera.
                  </p>
                  <Button
                    size="lg"
                    className="bg-twilight-indigo hover:bg-twilight-indigo/90 text-white"
                    onClick={() =>
                      window.open("/program/lifeos-system-upgrade", "_blank")
                    }
                  >
                    TAK, CHCĘ DOWIEDZIEĆ SIĘ WIĘCEJ O PROGRAMIE LIFEOS
                  </Button>
                  <p className="text-sm text-center text-gray-400 mt-2">
                    Kliknij, aby zobaczyć szczegóły - nie przegapisz żadnej
                    części webinaru
                  </p>
                </div>
              )}

              <div className="text-center">
                <Button
                  variant="outline"
                  className="border-twilight-indigo text-twilight-indigo"
                  onClick={handleCTAClick}
                >
                  Pokaż ofertę specjalną
                </Button>
              </div>
            </div>

            {/* Sidebar - Discord Widget */}
            <div>
              <iframe
                src="https://discord.com/widget?id=428530875085619200&theme=dark"
                width="350"
                height="700"
                allowTransparency={true}
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebinarLive;
