import { useEffect, useState } from 'react';

const Webinar = () => {
  const [timeLeft, setTimeLeft] = useState('');
  
  useEffect(() => {
    const targetDate = new Date('2025-10-16T19:00:00').getTime();
    
    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("WEBINAR ZAKOŃCZONY");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const format = (num: number) => num < 10 ? '0' + num : num;
      setTimeLeft(`${format(days)}:${format(hours)}:${format(minutes)}:${format(seconds)}`);
    };

    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    
    return () => clearInterval(timerInterval);
  }, []);

  return (
    <>
      <title>Męski Kompas - Webinar: Jak odzyskać kierunek?</title>
      <meta name="description" content="Bezpłatny warsztat online dla profesjonalistów 30+, którzy mają dość dryfowania i szukają logicznego systemu do nawigacji w karierze i życiu." />
      
      <div className="min-h-screen bg-luminous-white dark:bg-deep-space text-deep-charcoal dark:text-silver-mist">
        {/* Hero Section */}
        <header className="bg-primary text-white py-16">
          <div className="max-w-4xl mx-auto px-5 text-center">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Jak odzyskać kierunek, gdy analityczny umysł generuje więcej pytań niż odpowiedzi?
            </h1>
            <h2 className="text-xl md:text-2xl font-normal max-w-3xl mx-auto mb-8 opacity-90">
              Bezpłatny warsztat online dla profesjonalistów 30+, którzy mają dość dryfowania i szukają logicznego systemu do nawigacji w karierze i życiu. Bez bullshitu.
            </h2>
            
            <div className="inline-block bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <form action="https://buy.siadlak.com/checkout/spotkanie-online?lang=pl" method="post">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Twój adres e-mail" 
                  required 
                  className="w-80 max-w-full p-3 mb-4 border border-gray-300 rounded text-deep-charcoal"
                />
                <br />
                <button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold rounded transition-colors cursor-pointer border-none"
                >
                  Zarezerwuj swoje bezpłatne miejsce
                </button>
              </form>
            </div>
          </div>
        </header>

        <main>
          {/* Problem & Benefits Section */}
          <section id="dlaczego-warto" className="py-16 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-5">
              <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-10">
                Diagnoza systemu: Czy to o Tobie?
              </h3>
              <div className="grid md:grid-cols-2 gap-10">
                <div className="problems">
                  <h4 className="text-xl font-semibold text-primary border-b-2 border-secondary pb-3 mb-4">
                    Identyfikacja problemów:
                  </h4>
                  <ul className="space-y-4">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-xl text-red-600">×</span>
                      Czy czujesz, że Twój analityczny umysł, zamiast pomagać, prowadzi do <strong>paraliżu decyzyjnego</strong> i gromadzenia zasobów (kursów, książek), których nie przerabiasz?
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-xl text-red-600">×</span>
                      Czy masz problem z mentalnym <strong>"wyłączeniem się" po pracy</strong>, a Twój mózg ciągle optymalizuje, analizuje i przetwarza problemy zawodowe?
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-xl text-red-600">×</span>
                      Czy towarzyszy Ci ciągła presja, że "powinieneś być już dalej" i <strong>lęk przed zmarnowaniem swojego potencjału</strong>, który odbiera satysfakcję z osiągnięć?
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-xl text-red-600">×</span>
                      Czy dążysz do spokoju przez budowanie systemów i kontrolę, tylko po to, by odkryć, że <strong>generują one jeszcze więcej stresu</strong> i poczucia uwięzienia?
                    </li>
                  </ul>
                </div>
                <div className="benefits">
                  <h4 className="text-xl font-semibold text-primary border-b-2 border-secondary pb-3 mb-4">
                    Co wdrożysz po tym warsztacie:
                  </h4>
                  <ul className="space-y-4">
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-lg text-green-600">✓</span>
                      <strong>Zrozumiesz, dlaczego</strong> mimo inteligencji i kompetencji czujesz, że utknąłeś – zidentyfikujesz główną blokadę w swoim systemie operacyjnym.
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-lg text-green-600">✓</span>
                      <strong>Poznasz framework</strong> do podejmowania trudnych decyzji, który pozwoli Ci wyjść z pętli wiecznej analizy i zacząć działać z przekonaniem.
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-lg text-green-600">✓</span>
                      <strong>Dowiesz się, dlaczego rytm i obecność</strong> są skuteczniejsze niż idealny, ale nierealistyczny plan – i jak wdrożyć je w 4 minuty dziennie.
                    </li>
                    <li className="pl-6 relative">
                      <span className="absolute left-0 text-lg text-green-600">✓</span>
                      <strong>Odkryjesz, czym jest siła mężczyzny</strong> w 2025 roku – nie w teorii, ale w praktyce, w codziennych wyborach i działaniach.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Host Section */}
          <section id="prowadzacy" className="py-16 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-5">
              <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-10">
                Kto prowadzi ten warsztat?
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-8">
                <img 
                  src="https://via.placeholder.com/150" 
                  alt="Zdjęcie Mateusza Lizaka" 
                  className="w-40 h-40 rounded-full object-cover border-4 border-secondary"
                />
                <div className="flex-1">
                  <h4 className="text-2xl font-semibold mb-4">Mateusz Lizak</h4>
                  <p className="mb-4 leading-relaxed">
                    Twórca "Męskiego Kompasu". Przez ponad 10 lat optymalizował systemy i procesy w branży technologicznej, aż odkrył, że najtrudniejszym systemem do zoptymalizowania jest jego własne życie. Zderzył się z wypaleniem, paraliżem decyzyjnym i pułapką własnego analitycznego umysłu.
                  </p>
                  <p className="leading-relaxed">
                    Dziś pomaga mężczyznom takim jak on – inteligentnym, analitycznym profesjonalistom – budować wewnętrzne systemy nawigacji, które łączą ambicję ze spokojem. Bez ogólników i motywacyjnej papki. Tylko sprawdzone w boju, logiczne narzędzia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section id="szczegoly" className="py-16 border-b border-gray-200 dark:border-gray-700">
            <div className="max-w-4xl mx-auto px-5">
              <h3 className="text-center text-3xl md:text-4xl font-bold text-primary mb-10">
                Logistyka i plan działania
              </h3>
              <div className="grid md:grid-cols-2 gap-10 items-center">
                <div className="countdown bg-primary text-white p-6 rounded-lg text-center">
                  <h4 className="text-xl font-semibold mb-4 text-white">Do startu warsztatu pozostało:</h4>
                  <div className="text-4xl font-bold tracking-wider mb-4">{timeLeft}</div>
                  <p className="mb-2"><strong>Data:</strong> Czwartek, 16 października 2025</p>
                  <p className="mb-2"><strong>Godzina:</strong> 19:00 CET (czasu polskiego)</p>
                  <p><strong>Format:</strong> Live online (otrzymasz link po zapisie)</p>
                </div>
                <div className="agenda">
                  <h4 className="text-xl font-semibold mb-4">Agenda spotkania (ok. 75 minut):</h4>
                  <ul className="space-y-2">
                    <li className="bg-white dark:bg-deep-space/60 p-3 border-l-4 border-secondary rounded">
                      <strong>Blok 1: Diagnoza</strong> – Gdzie jesteś i dlaczego to ważne? Analiza obecnego stanu bez oceny.
                    </li>
                    <li className="bg-white dark:bg-deep-space/60 p-3 border-l-4 border-secondary rounded">
                      <strong>Blok 2: Pułapki Analitycznego Umysłu</strong> – Co się dzieje, gdy działasz bez kierunku lub masz kierunek, ale nie działasz?
                    </li>
                    <li className="bg-white dark:bg-deep-space/60 p-3 border-l-4 border-secondary rounded">
                      <strong>Blok 3: Fundamenty Wewnętrznego Systemu</strong> – Czym jest siła, rytm i obecność w praktyce? Konkretne narzędzia.
                    </li>
                    <li className="bg-white dark:bg-deep-space/60 p-3 border-l-4 border-secondary rounded">
                      <strong>Blok 4: Sesja Q&A</strong> – Odpowiedzi na najtrudniejsze pytania. Zero lania wody.
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-10 bg-white dark:bg-deep-space/60 p-6 rounded-lg">
                <h4 className="text-xl font-semibold mb-4">Dla kogo jest ten warsztat?</h4>
                <p className="mb-4">
                  Dla analitycznych profesjonalistów, developerów, team leaderów, managerów i freelancerów (30+), którzy czują, że utknęli w pętli analizy, presji i braku klarownego kierunku. Dla mężczyzn, którzy cenią logikę, strukturę i konkretne rozwiązania, a nie puste frazesy.
                </p>
                <p className="text-red-600 font-bold">
                  To NIE jest warsztat dla osób szukających szybkich recept na sukces, motywacyjnych uniesień czy duchowego oświecenia.
                </p>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="final-cta bg-white dark:bg-deep-space/60 py-16 text-center">
            <div className="max-w-4xl mx-auto px-5">
              <h3 className="text-3xl font-bold mb-6">Przestań analizować. Zacznij nawigować.</h3>
              <p className="text-lg mb-8">
                Zdobądź framework, który pozwoli Ci odzyskać kontrolę nad swoim kierunkiem, bez rezygnacji z analitycznego myślenia. Po prostu wykorzystaj je we właściwy sposób.
              </p>
              <a 
                href="#" 
                className="inline-block bg-accent hover:bg-accent/90 text-white px-8 py-4 text-lg font-bold rounded transition-colors"
              >
                Zarezerwuj swoje bezpłatne miejsce
              </a>
              <p className="mt-4 text-sm">
                Liczba miejsc jest ograniczona, aby zapewnić jakość sesji Q&A.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-white py-8 text-center">
          <div className="max-w-4xl mx-auto px-5">
            <p>&copy; 2025 Ludwik C. Siadlak & Fundacja HACKERZY.PL . Wszelkie prawa zastrzeżone.</p>
            <p className="mt-2">
              <a href="#" className="text-secondary hover:underline">Polityka Prywatności</a>
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Webinar;