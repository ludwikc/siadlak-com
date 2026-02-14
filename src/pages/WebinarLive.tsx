import { useState } from "react";
import Layout from "../components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Facebook, Linkedin, Youtube } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import calendarGcal from "@/assets/calendar-gcal.png";
import calendarApple from "@/assets/calendar-apple.png";
import calendarOutlook from "@/assets/calendar-outlook.png";

const WebinarLive = () => {
  const [showOffer, setShowOffer] = useState(false);

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
      <div
        className="min-h-screen pt-12 pb-20"
        style={{ backgroundColor: "#1E1F22" }}
      >
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
              prowadzi: <strong>Ludwik C. Siadlak</strong> (MCT, MCSA, MCSE,
              MCP, ECC)
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
                    src="https://www.youtube.com/watch?v=X7gsG0T6Kno"
                    frameBorder="0"
                    allow="autoplay; fullscreen"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>

              {/* GÓRNY BOKS - Data + Zapisz w kalendarzu */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">
                  Poniedziałek, 23 lutego 2026, <br />
                  godzina 19:05 (Berlin/Warszawa)
                </h2>

                <div className="pt-6">
                  <p className="text-sm text-center text-gray-300 mb-6">
                    Dodaj wydarzenie do swojego kalendarza, żeby nie przegapić
                    warsztatu
                  </p>

                  <div className="flex flex-wrap justify-center items-center gap-4">
                    {/* GOOGLE CALENDAR */}
                    <a
                      href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dzie%C5%84+Walki+z+Depresj%C4%85+%28spotkanie+online%29&details=Sta%C5%82em+na+peronie+i+chcia%C5%82em+zrobi%C4%87+jeden+krok+%E2%80%94+opowiem+jak+z+tego+wr%C3%B3ci%C5%82em.+Do%C5%82%C4%85cz+do+naszego+spotkania+w+poniedzia%C5%82ek+23+lutego+2026+o+19%3A05+na+https%3A%2F%2Fsiadlak.com%2Fwebinar%2Flive&location=https%3A%2F%2Fsiadlak.com%2Fwebinar%2Flive&dates=20260223T180500Z%2F20260223T190000Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform duration-200 hover:scale-105"
                    >
                      <div className="bg-gray-700 rounded-lg px-6 py-3 flex items-center gap-3 shadow-md hover:shadow-lg hover:bg-gray-600">
                        <img
                          src={calendarGcal}
                          alt="Google Calendar"
                          className="h-8 w-8"
                        />
                        <span className="text-white font-medium text-sm">
                          Google
                        </span>
                      </div>
                    </a>

                    {/* APPLE CALENDAR (ICS) */}
                    <a
                      href="/webinar.ics"
                      className="transition-transform duration-200 hover:scale-105"
                    >
                      <div className="bg-gray-700 rounded-lg px-6 py-3 flex items-center gap-3 shadow-md hover:shadow-lg hover:bg-gray-600">
                        <img
                          src={calendarApple}
                          alt="Apple Calendar"
                          className="h-8 w-8"
                        />
                        <span className="text-white font-medium text-sm">
                          Apple
                        </span>
                      </div>
                    </a>

                    {/* OUTLOOK (WEB) */}
                    <a
                      href="https://outlook.live.com/calendar/0/deeplink/compose?path=%2Fcalendar%2Faction%2Fcompose&rru=addevent&subject=Dzie%C5%84+Walki+z+Depresj%C4%85+%28spotkanie+online%29&body=Sta%C5%82em+na+peronie+i+chcia%C5%82em+zrobi%C4%87+jeden+krok+%E2%80%94+opowiem+jak+z+tego+wr%C3%B3ci%C5%82em.+Do%C5%82%C4%85cz+do+naszego+spotkania+w+poniedzia%C5%82ek+23+lutego+2026+o+19%3A05+na+https%3A%2F%2Fsiadlak.com%2Fwebinar%2Flive&location=https%3A%2F%2Fsiadlak.com%2Fwebinar%2Flive&startdt=20260223T180500Z&enddt=20260223T190000Z"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="transition-transform duration-200 hover:scale-105"
                    >
                      <div className="bg-gray-700 rounded-lg px-6 py-3 flex items-center gap-3 shadow-md hover:shadow-lg hover:bg-gray-600">
                        <img
                          src={calendarOutlook}
                          alt="Outlook Calendar"
                          className="h-8 w-8"
                        />
                        <span className="text-white font-medium text-sm">
                          Outlook
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* DOLNY BOKS - Oglądaj na platformach */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg text-white mb-4 text-center">
                  Możesz też oglądać na swojej ulubionej platformie:
                </h3>
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

              {/* CTA During Webinar - HIDDEN */}
              {false && showOffer && (
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

              {false && (
                <div className="text-center">
                  <Button
                    variant="outline"
                    className="border-twilight-indigo text-twilight-indigo"
                    onClick={handleCTAClick}
                  >
                    Pokaż ofertę specjalną
                  </Button>
                </div>
              )}
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
