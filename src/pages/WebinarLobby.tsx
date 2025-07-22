
import { useState } from 'react';
import Layout from '../components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Download, MessageSquare, CheckCircle, HelpCircle, Volume2 } from 'lucide-react';
import WebinarCountdown from '@/components/webinar/WebinarCountdown';
import { toast } from '@/hooks/use-toast';

const WebinarLobby = () => {
  const [audioTested, setAudioTested] = useState(false);
  
  const handleAudioTest = () => {
    // In a real implementation, this would play a test sound
    setAudioTested(true);
    toast({
      title: "Test audio",
      description: "Jeśli słyszysz dźwięk, Twoje audio działa prawidłowo.",
    });
  };
  
  const handleDownloadWorksheet = () => {
    toast({
      title: "Pobieranie arkusza",
      description: "Arkusz pracy został pobrany.",
    });
  };
  
  const handleHelpRequest = () => {
    toast({
      title: "Pomoc techniczna",
      description: "Zespół pomocy technicznej został powiadomiony o Twoim problemie.",
    });
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-luminous-white to-secondary dark:from-deep-space dark:to-neural-violet/30 pt-12 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-neural-violet to-ascension-pink bg-clip-text text-transparent">
              Witaj w Sali Webinarowej Black Panther
            </h1>
            <p className="text-xl mb-6 text-deep-charcoal/80 dark:text-silver-mist/80">
              Webinar rozpocznie się dokładnie o 19:00 (czasu polskiego)
            </p>
            
            <div className="max-w-md mx-auto mb-8">
              <WebinarCountdown />
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Podczas gdy czekasz, przygotuj się:</h2>
                
                <div className="space-y-4">
                  <div className="flex gap-4 items-start">
                    <Download className="h-6 w-6 text-neural-violet flex-shrink-0 mt-1" />
                    <div>
                      <p className="mb-2">Pobierz arkusz pracy webinaru – pomoże Ci ustrukturyzować notatki i kluczowe insighty:</p>
                      <Button 
                        variant="outline" 
                        className="border-neural-violet text-neural-violet"
                        onClick={handleDownloadWorksheet}
                      >
                        Pobierz arkusz pracy
                      </Button>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <MessageSquare className="h-6 w-6 text-neural-violet flex-shrink-0 mt-1" />
                    <div>
                      <p>Podziel się swoim największym wyzwaniem w czacie – poruszę najczęściej wymieniane problemy podczas webinaru</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4 items-start">
                    <Volume2 className="h-6 w-6 text-neural-violet flex-shrink-0 mt-1" />
                    <div>
                      <p className="mb-2">Upewnij się, że Twoje audio działa prawidłowo – kliknij przycisk testowy poniżej:</p>
                      <Button 
                        variant={audioTested ? "outline" : "default"}
                        className={audioTested ? "border-green-500 text-green-500" : ""}
                        onClick={handleAudioTest}
                      >
                        {audioTested ? (
                          <>
                            <CheckCircle className="mr-2 h-4 w-4" /> Audio działa poprawnie
                          </>
                        ) : (
                          "Test Audio"
                        )}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                <h2 className="text-xl font-bold mb-4">Poznaj innych uczestników:</h2>
                <p className="mb-4">Przedstaw się w czacie, podając:</p>
                <ul className="list-disc list-inside space-y-2 mb-6">
                  <li>Swoje imię</li>
                  <li>Aktualną rolę zawodową</li>
                  <li>Jedno słowo opisujące, czego oczekujesz od dzisiejszego webinaru</li>
                </ul>
                
                <div className="p-4 bg-neural-violet/5 rounded-lg border border-neural-violet/20">
                  <p className="text-sm italic">
                    "Cześć wszystkim! Jestem Anna, pracuję jako frontend developer. 
                    Od dzisiejszego webinaru oczekuję: inspiracji."
                  </p>
                </div>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white dark:bg-deep-space/60 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 dark:border-gray-800 shadow-lg">
                <div className="flex items-center gap-2 text-neural-violet mb-4">
                  <HelpCircle className="h-5 w-5" />
                  <h2 className="text-xl font-bold">Wsparcie techniczne:</h2>
                </div>
                
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-violet flex-shrink-0 mt-0.5" />
                    <span>Dla najlepszego doświadczenia zalecamy przeglądarkę Chrome lub Firefox</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-violet flex-shrink-0 mt-0.5" />
                    <span>Upewnij się, że masz stabilne połączenie internetowe</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-neural-violet flex-shrink-0 mt-0.5" />
                    <span>Jeśli napotkasz problemy, odśwież stronę lub użyj przycisku pomocy</span>
                  </li>
                </ul>
                
                <Button 
                  variant="outline"
                  className="w-full"
                  onClick={handleHelpRequest}
                >
                  <HelpCircle className="mr-2 h-4 w-4" /> Pomoc techniczna
                </Button>
              </div>
              
              <div className="bg-gradient-to-r from-neural-violet/20 to-ascension-pink/20 dark:from-neural-violet/30 dark:to-ascension-pink/30 backdrop-blur-lg rounded-2xl p-8 border border-neural-violet/30 dark:border-neural-violet/40 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse mr-2"></div>
                  <h2 className="text-xl font-bold">Ekskluzywna sesja Q&A dla wcześnie dołączających!</h2>
                </div>
                
                <p className="mb-6">
                  Sesja Q&A rozpocznie się o 18:50! Ludwik odpowie na wybrane pytania uczestników, 
                  którzy dołączą przed oficjalnym rozpoczęciem webinaru. To Twoja szansa na bezpośrednią interakcję.
                </p>
                
                <Button
                  size="lg"
                  className="w-full bg-neural-violet hover:bg-neural-violet/90 text-white"
                >
                  DOŁĄCZ DO WEBINARU TERAZ
                </Button>
                
                <p className="text-sm text-center mt-4">
                  Webinar rozpocznie się automatycznie, gdy odliczanie dobiegnie końca
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default WebinarLobby;
