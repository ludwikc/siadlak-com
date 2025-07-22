
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { HelpCircle, Download, ExternalLink } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";

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
      description: "Więcej informacji o programie Mental Elevator.",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-deep-space to-neural-violet/50 pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-500 mb-4">
              <span className="animate-pulse mr-2 h-2 w-2 rounded-full bg-red-500"></span>
              <span className="text-sm font-medium">TRANSMISJA NA ŻYWO</span>
            </div>

            <h1 className="text-2xl md:text-3xl font-bold mb-2 text-white">
              Jak przejąć kontrolę nad swoją karierą i życiem w erze sztucznej
              inteligencji
            </h1>

            <p className="text-lg mb-6 text-gray-300">
              z Ludwikiem C. Siadlakiem
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {/* Main Content Area - 3 columns wide */}
            <div className="md:col-span-3 space-y-6">
              {/* Webinar Video Window */}
              <div className="bg-black aspect-video rounded-lg flex items-center justify-center">
                <p className="text-white text-lg">Okno transmisji webinaru</p>
              </div>

              {/* Interactive Elements */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <Tabs defaultValue="chat">
                  <TabsList className="grid grid-cols-3 mb-4">
                    <TabsTrigger value="chat">Chat</TabsTrigger>
                    <TabsTrigger value="polls">Ankiety</TabsTrigger>
                    <TabsTrigger value="questions">Pytania</TabsTrigger>
                  </TabsList>

                  <TabsContent
                    value="chat"
                    className="h-64 overflow-y-auto p-4 bg-white/5 rounded-lg"
                  >
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="bg-neural-violet h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                          LCS
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Ludwik C. Siadlak
                          </p>
                          <p className="text-gray-300">
                            Witam wszystkich na dzisiejszym webinarze! Zaczynamy
                            za chwilę.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                          AK
                        </div>
                        <div>
                          <p className="font-medium text-white">
                            Anna Kowalska
                          </p>
                          <p className="text-gray-300">
                            Bardzo się cieszę, że mogę uczestniczyć! Pozdrawiam
                            z Krakowa.
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <div className="bg-gray-500 h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-bold shrink-0">
                          JN
                        </div>
                        <div>
                          <p className="font-medium text-white">Jan Nowak</p>
                          <p className="text-gray-300">
                            Czekam z niecierpliwością na omówienie metodologii
                            Black Panther!
                          </p>
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="polls"
                    className="h-64 overflow-y-auto p-4 bg-white/5 rounded-lg"
                  >
                    <div className="text-center text-white p-4">
                      <p className="mb-4">Aktywna ankieta:</p>
                      <p className="font-medium mb-6">
                        Które wyzwanie jest dla Ciebie największe?
                      </p>

                      <div className="space-y-3">
                        <Button
                          variant="outline"
                          className="w-full border-white/30 text-white hover:bg-white/10"
                        >
                          Brak czasu na rozwój
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-white/30 text-white hover:bg-white/10"
                        >
                          Trudności w komunikacji wartości
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-white/30 text-white hover:bg-white/10"
                        >
                          Wypalenie zawodowe
                        </Button>
                        <Button
                          variant="outline"
                          className="w-full border-white/30 text-white hover:bg-white/10"
                        >
                          Trudności w delegowaniu zadań
                        </Button>
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent
                    value="questions"
                    className="h-64 overflow-y-auto p-4 bg-white/5 rounded-lg"
                  >
                    <div className="space-y-6 text-white">
                      <p className="mb-2">Zadaj pytanie prowadzącemu:</p>
                      <textarea
                        className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                        placeholder="Wpisz swoje pytanie tutaj..."
                        rows={3}
                      ></textarea>
                      <Button className="bg-neural-violet hover:bg-neural-violet/90">
                        Wyślij pytanie
                      </Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              {/* CTA During Webinar */}
              {showOffer && (
                <div className="bg-gradient-to-r from-neural-violet/30 to-ascension-pink/30 backdrop-blur-lg rounded-xl p-6 border border-neural-violet/30 animate-fade-in">
                  <h3 className="text-xl font-bold text-white mb-4">
                    Program Mental Elevator - Odkryj pełną transformację
                  </h3>
                  <p className="text-gray-300 mb-6">
                    Teraz możesz dowiedzieć się więcej o pełnym programie
                    transformacji, który przeprowadzi Cię z reaktywnego
                    wykonawcy do suwerennego lidera.
                  </p>
                  <Button
                    size="lg"
                    className="bg-neural-violet hover:bg-neural-violet/90 text-white"
                    onClick={() => window.open("/mental-elevator", "_blank")}
                  >
                    TAK, CHCĘ DOWIEDZIEĆ SIĘ WIĘCEJ O PROGRAMIE MENTAL ELEVATOR
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
                  className="border-neural-violet text-neural-violet"
                  onClick={handleCTAClick}
                >
                  Pokaż ofertę specjalną
                </Button>
              </div>
            </div>

            {/* Sidebar - 1 column wide */}
            <div className="space-y-6">
              {/* Resources Panel */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">
                  Materiały pomocnicze:
                </h3>

                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/30 text-white"
                    onClick={() => handleResourceClick("Arkusz pracy webinaru")}
                  >
                    <Download className="mr-2 h-4 w-4" /> Arkusz pracy webinaru
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/30 text-white"
                    onClick={() => handleResourceClick("Prezentacja")}
                  >
                    <Download className="mr-2 h-4 w-4" /> Prezentacja (po
                    webinarze)
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full justify-start border-white/30 text-white"
                    onClick={() => handleResourceClick("Lista narzędzi")}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Polecane narzędzia
                  </Button>
                </div>
              </div>

              {/* Notes Panel */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <h3 className="text-lg font-bold text-white mb-4">
                  Twoje notatki:
                </h3>

                <textarea
                  className="w-full bg-white/10 border border-white/20 rounded-lg p-3 text-white"
                  placeholder="Zapisuj tutaj swoje kluczowe insighty..."
                  rows={8}
                ></textarea>
              </div>

              {/* Help Button */}
              <Button
                variant="outline"
                className="w-full justify-center border-white/30 text-white"
                onClick={() => {
                  toast({
                    title: "Pomoc techniczna",
                    description:
                      "Zespół pomocy technicznej został powiadomiony o Twoim problemie.",
                  });
                }}
              >
                <HelpCircle className="mr-2 h-4 w-4" /> Pomoc techniczna
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebinarLive;
