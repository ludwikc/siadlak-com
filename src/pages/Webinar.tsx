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

  const scrollToForm = () => {
    const formElement = document.getElementById('registration-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
      // Focus for accessibility
      const emailInput = formElement.querySelector('input[type="email"]') as HTMLInputElement;
      if (emailInput) {
        emailInput.focus();
      }
    }
  };

  return (
    <>
      <title>Męski Kompas - Webinar: Jak odzyskać kierunek?</title>
      <meta name="description" content="Bezpłatny warsztat online dla profesjonalistów 30+, którzy mają dość dryfowania i szukają logicznego systemu do nawigacji w karierze i życiu." />
      
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50">
        Przejdź do głównej treści
      </a>
      
      <div className="min-h-screen bg-background text-foreground font-primary animate-fade-in">
        {/* Hero Section */}
        <header className="relative overflow-hidden bg-gradient-to-br from-primary to-primary/90">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold font-heading leading-tight mb-6 text-primary-foreground">
                Jak odzyskać kierunek, gdy analityczny umysł generuje więcej pytań niż odpowiedzi?
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-10 text-primary-foreground/90 leading-relaxed">
                Bezpłatny warsztat online dla profesjonalistów 30+, którzy mają dość dryfowania i szukają logicznego systemu do nawigacji w karierze i życiu. <span className="font-bold">Bez bullshitu.</span>
              </p>
              
              {/* Registration Form */}
              <div id="registration-form" className="inline-block bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl max-w-md mx-auto">
                <form 
                  action="https://buy.siadlak.com/checkout/spotkanie-online?lang=pl" 
                  method="post"
                  className="space-y-4"
                >
                  <label htmlFor="email" className="sr-only">Adres e-mail</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    placeholder="Twój adres e-mail" 
                    required 
                    aria-required="true"
                    className="w-full p-4 text-lg border border-gray-300 rounded-lg text-foreground bg-white focus:ring-2 focus:ring-accent focus:border-accent transition-all"
                  />
                  <button 
                    type="submit" 
                    className="w-full bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-bold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-accent focus:ring-offset-2"
                  >
                    Zarezerwuj swoje bezpłatne miejsce
                  </button>
                </form>
              </div>
            </div>
          </div>
        </header>

        <main id="main-content">
          {/* Problem & Benefits Section */}
          <section aria-labelledby="diagnosis-heading" className="py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <h2 id="diagnosis-heading" className="text-4xl md:text-5xl font-bold font-heading mb-6 text-foreground">
                  Diagnoza systemu: Czy to o Tobie?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Sprawdź, czy rozpoznajesz te wzorce w swoim życiu
                </p>
              </div>
              
              <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Problems */}
                <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-destructive border-b-3 border-destructive pb-3">
                    🚫 Identyfikacja problemów:
                  </h3>
                  <ul className="space-y-6" role="list">
                    {[
                      'Czy czujesz, że Twój analityczny umysł, zamiast pomagać, prowadzi do **paraliżu decyzyjnego** i gromadzenia zasobów (kursów, książek), których nie przerabiasz?',
                      'Czy masz problem z mentalnym **"wyłączeniem się" po pracy**, a Twój mózg ciągle optymalizuje, analizuje i przetwarza problemy zawodowe?',
                      'Czy towarzyszy Ci ciągła presja, że "powinieneś być już dalej" i **lęk przed zmarnowaniem swojego potencjału**, który odbiera satysfakcję z osiągnięć?',
                      'Czy dążysz do spokoju przez budowanie systemów i kontrolę, tylko po to, by odkryć, że **generują one jeszcze więcej stresu** i poczucia uwięzienia?'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 bg-white/50 rounded-lg" role="listitem">
                        <span className="flex-shrink-0 w-6 h-6 bg-destructive text-white rounded-full flex items-center justify-center font-bold text-sm" aria-hidden="true">
                          ×
                        </span>
                        <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-green-50 dark:bg-green-950/20 rounded-2xl p-8 border border-green-200 dark:border-green-800 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-green-700 dark:text-green-400 border-b-3 border-green-500 pb-3">
                    ✅ Co wdrożysz po tym warsztacie:
                  </h3>
                  <ul className="space-y-6" role="list">
                    {[
                      '**Zrozumiesz, dlaczego** mimo inteligencji i kompetencji czujesz, że utknąłeś – zidentyfikujesz główną blokadę w swoim systemie operacyjnym.',
                      '**Poznasz framework** do podejmowania trudnych decyzji, który pozwoli Ci wyjść z pętli wiecznej analizy i zacząć działać z przekonaniem.',
                      '**Dowiesz się, dlaczego rytm i obecność** są skuteczniejsze niż idealny, ale nierealistyczny plan – i jak wdrożyć je w 4 minuty dziennie.',
                      '**Odkryjesz, czym jest siła mężczyzny** w 2025 roku – nie w teorii, ale w praktyce, w codziennych wyborach i działaniach.'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-4 p-4 bg-white/50 dark:bg-green-900/20 rounded-lg" role="listitem">
                        <span className="flex-shrink-0 w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center font-bold text-sm" aria-hidden="true">
                          ✓
                        </span>
                        <p className="text-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Host Section */}
          <section aria-labelledby="host-heading" className="py-20 bg-card">
            <div className="max-w-5xl mx-auto px-6">
              <h2 id="host-heading" className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-foreground">
                Kto prowadzi ten warsztat?
              </h2>
              
              <div className="bg-white dark:bg-card rounded-3xl p-8 shadow-2xl border border-border">
                <div className="flex flex-col lg:flex-row items-center gap-10">
                  <div className="flex-shrink-0">
                    <img 
                      src="https://via.placeholder.com/200" 
                      alt="Portret Mateusza Lizaka - prowadzącego warsztat" 
                      className="w-48 h-48 rounded-full object-cover border-4 border-accent shadow-xl"
                    />
                  </div>
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-6 text-foreground font-heading">
                      Mateusz Lizak
                    </h3>
                    <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                      <p>
                        Twórca <strong className="text-foreground">"Męskiego Kompasu"</strong>. Przez ponad 10 lat optymalizował systemy i procesy w branży technologicznej, aż odkrył, że najtrudniejszym systemem do zoptymalizowania jest jego własne życie. Zderzył się z wypaleniem, paraliżem decyzyjnym i pułapką własnego analitycznego umysłu.
                      </p>
                      <p>
                        Dziś pomaga mężczyznom takim jak on – inteligentnym, analitycznym profesjonalistom – budować wewnętrzne systemy nawigacji, które łączą ambicję ze spokojem. <strong className="text-foreground">Bez ogólników i motywacyjnej papki. Tylko sprawdzone w boju, logiczne narzędzia.</strong>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Details Section */}
          <section aria-labelledby="details-heading" className="py-20 bg-gradient-to-b from-muted/30 to-background">
            <div className="max-w-6xl mx-auto px-6">
              <h2 id="details-heading" className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-foreground">
                Logistyka i plan działania
              </h2>
              
              <div className="grid lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                {/* Countdown */}
                <div className="bg-white dark:bg-card border-2 border-primary/30 p-8 rounded-3xl text-center shadow-2xl">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Do startu warsztatu pozostało:</h3>
                  <div 
                    className="mb-6"
                    aria-live="polite"
                    aria-label={`Czas do rozpoczęcia warsztatu: ${timeLeft}`}
                  >
                    {(() => {
                      if (timeLeft === "WEBINAR ZAKOŃCZONY") {
                        return (
                          <div className="text-2xl font-bold text-destructive">
                            WEBINAR ZAKOŃCZONY
                          </div>
                        );
                      }
                      
                      const parts = timeLeft.split(':');
                      if (parts.length === 4) {
                        const days = parts[0];
                        const hours = parts[1];
                        const minutes = parts[2];
                        const seconds = parts[3];
                        
                        return (
                          <div className="space-y-2">
                            <div className="text-4xl md:text-5xl font-bold text-primary font-mono">
                              {days} {parseInt(days) === 1 ? 'dzień' : 'dni'}
                            </div>
                            <div className="text-3xl md:text-4xl font-bold text-foreground font-mono tracking-wider">
                              {hours}:{minutes}:{seconds}
                            </div>
                          </div>
                        );
                      }
                      
                      return (
                        <div className="text-3xl md:text-4xl font-bold text-foreground font-mono tracking-wider">
                          {timeLeft}
                        </div>
                      );
                    })()}
                  </div>
                  <div className="space-y-3 text-lg text-muted-foreground">
                    <p><strong className="text-foreground">📅 Data:</strong> Czwartek, 16 października 2025</p>
                    <p><strong className="text-foreground">🕐 Godzina:</strong> 19:00 CET (czasu polskiego)</p>
                    <p><strong className="text-foreground">💻 Format:</strong> Live online (otrzymasz link po zapisie)</p>
                  </div>
                </div>

                {/* Agenda */}
                <div className="bg-white dark:bg-card rounded-3xl p-8 shadow-2xl border border-border">
                  <h3 className="text-2xl font-bold mb-6 text-foreground">Agenda spotkania (ok. 75 minut):</h3>
                  <ul className="space-y-4" role="list">
                    {[
                      { title: 'Blok 1: Diagnoza', desc: 'Gdzie jesteś i dlaczego to ważne? Analiza obecnego stanu bez oceny.' },
                      { title: 'Blok 2: Pułapki Analitycznego Umysłu', desc: 'Co się dzieje, gdy działasz bez kierunku lub masz kierunek, ale nie działasz?' },
                      { title: 'Blok 3: Fundamenty Wewnętrznego Systemu', desc: 'Czym jest siła, rytm i obecność w praktyce? Konkretne narzędzia.' },
                      { title: 'Blok 4: Sesja Q&A', desc: 'Odpowiedzi na najtrudniejsze pytania. Zero lania wody.' }
                    ].map((block, index) => (
                      <li key={index} className="bg-muted/50 p-4 border-l-4 border-accent rounded-lg" role="listitem">
                        <h4 className="font-bold text-foreground mb-2">{block.title}</h4>
                        <p className="text-muted-foreground">{block.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Target Audience */}
              <div className="mt-16 bg-white dark:bg-card rounded-3xl p-8 shadow-2xl border border-border max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-foreground">Dla kogo jest ten warsztat?</h3>
                <p className="text-lg mb-6 text-muted-foreground leading-relaxed">
                  Dla analitycznych profesjonalistów, developerów, team leaderów, managerów i freelancerów (30+), którzy czują, że utknęli w pętli analizy, presji i braku klarownego kierunku. Dla mężczyzn, którzy cenią logikę, strukturę i konkretne rozwiązania, a nie puste frazesy.
                </p>
                <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4">
                  <p className="text-destructive font-bold">
                    ⚠️ To NIE jest warsztat dla osób szukających szybkich recept na sukces, motywacyjnych uniesień czy duchowego oświecenia.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA Section */}
          <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10 text-center">
            <div className="max-w-4xl mx-auto px-6">
              <h2 className="text-4xl md:text-5xl font-bold font-heading mb-8 text-foreground">
                Przestań analizować. Zacznij nawigować.
              </h2>
              <p className="text-xl mb-10 text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Zdobądź framework, który pozwoli Ci odzyskać kontrolę nad swoim kierunkiem, bez rezygnacji z analitycznego myślenia. Po prostu wykorzystaj je we właściwy sposób.
              </p>
              <button 
                onClick={scrollToForm}
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 inline-flex items-center gap-3"
              >
                Zarezerwuj swoje bezpłatne miejsce
                <span aria-hidden="true">↑</span>
              </button>
              <p className="mt-6 text-muted-foreground">
                Liczba miejsc jest ograniczona, aby zapewnić jakość sesji Q&A.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-primary text-primary-foreground py-10" role="contentinfo">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg mb-4">
              &copy; 2025 Ludwik C. Siadlak & Fundacja HACKERZY.PL. Wszelkie prawa zastrzeżone.
            </p>
            <nav aria-label="Footer navigation">
              <a 
                href="#" 
                className="text-primary-foreground/80 hover:text-primary-foreground underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary rounded"
              >
                Polityka Prywatności
              </a>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Webinar;