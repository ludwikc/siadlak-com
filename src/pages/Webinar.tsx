import { useEffect, useState } from 'react';

const Webinar = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [email, setEmail] = useState('');
  
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
      
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary text-white px-4 py-2 rounded z-50">
        Przejdź do głównej treści
      </a>
      
      <div className="min-h-screen bg-background text-foreground font-primary animate-fade-in">
        {/* Hero Section */}
        <header className="hero relative overflow-hidden bg-gradient-to-br from-primary to-primary/90">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-accent/15 to-accent/5 rounded-full blur-2xl"></div>
          </div>
          
          <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="font-bold text-primary-foreground">
                Jak odzyskać kierunek, gdy analityczny umysł generuje więcej pytań niż odpowiedzi?
              </h1>
              <p className="text-xl md:text-2xl font-medium max-w-3xl mx-auto mb-10 text-primary-foreground/90 leading-relaxed">
                Bezpłatny warsztat online dla profesjonalistów 30+, którzy mają dość dryfowania i szukają logicznego systemu do nawigacji w karierze i życiu. <span className="font-bold">Bez bullshitu.</span>
              </p>
              
              {/* Registration Form */}
              <div id="registration-form" className="inline-block bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-2xl max-w-md mx-auto">
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email.trim()) {
                      const encodedEmail = encodeURIComponent(email.trim());
                      window.location.href = `https://buy.siadlak.com/checkout/spotkanie-online?email=${encodedEmail}&lang=pl`;
                    }
                  }}
                  className="space-y-4"
                >
                  <label htmlFor="email" className="sr-only">Adres e-mail</label>
                  <input 
                    id="email"
                    type="email" 
                    name="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
            <div className="max-w-6xl mx-auto px-6">
              <h2 id="host-heading" className="text-4xl md:text-5xl font-bold font-heading text-center mb-16 text-foreground">
                Kto prowadzi ten warsztat?
              </h2>
              
              {/* Mateusz Lizak */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-primary/5 dark:from-card dark:via-card/90 dark:to-primary/10 rounded-3xl shadow-2xl border border-primary/20 mb-12">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent/10 rounded-full blur-2xl"></div>
                
                <div className="relative flex flex-col lg:flex-row-reverse items-center gap-12 p-12">
                  {/* Enhanced Photo Section */}
                  <div className="flex-shrink-0 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 p-2 rounded-full shadow-xl">
                      <img 
                        src="/lovable-uploads/mateusz-lizak-webinar-leader.png" 
                        alt="Mateusz Lizak - Mentor świadomych mężczyzn i mistrz pracy warsztatowej" 
                        className="w-56 h-56 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Leadership badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-primary to-accent text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      MENTOR
                    </div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="flex-1 text-center lg:text-right space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold text-foreground font-heading tracking-tight">
                        Mateusz Lizak
                      </h3>
                      <div className="flex items-center justify-center lg:justify-end gap-2 text-primary font-medium">
                        <span>Mentor Świadomych Mężczyzn</span>
                        <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div className="space-y-6 text-lg leading-relaxed">
                      <p className="text-muted-foreground font-medium">
                        <strong className="text-foreground">Praktyk, który przeszedł przez wszystkie pułapki analitycznego umysłu.</strong> Od operatora maszyn CNC po mentora świadomych mężczyzn. Mistrz konkretu i pracy warsztatowej.
                      </p>
                      <p className="text-muted-foreground">
                        Mateusz twardo stąpa po ziemi, dostarcza sprawdzonych narzędzi i dba o to, by każda idea została przełożona na <strong className="text-primary">praktyczne działanie</strong>.
                      </p>
                    </div>
                    
                    {/* Leadership qualities */}
                    <div className="flex flex-wrap justify-center lg:justify-end gap-3 pt-4">
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Warsztatowy podział pracy
                      </span>
                      <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        Sprawdzone narzędzia
                      </span>
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Praktyczne działania
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ludwik C. Siadlak */}
              <div className="relative overflow-hidden bg-gradient-to-br from-white via-gray-50 to-accent/5 dark:from-card dark:via-card/90 dark:to-accent/10 rounded-3xl shadow-2xl border border-accent/20">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"></div>
                <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
                
                <div className="relative flex flex-col lg:flex-row items-center gap-12 p-12">
                  {/* Enhanced Photo Section */}
                  <div className="flex-shrink-0 relative group">
                    <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                    <div className="relative bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-700 p-2 rounded-full shadow-xl">
                      <img 
                        src="/lovable-uploads/ludwik-siadlak-profile.png" 
                        alt="Ludwik C. Siadlak - Założyciel i wizjoner systemu Męskiego Kompasu" 
                        className="w-56 h-56 rounded-full object-cover border-4 border-white dark:border-gray-600 shadow-2xl group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    {/* Leadership badge */}
                    <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-accent to-primary text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      ZAŁOŻYCIEL
                    </div>
                  </div>
                  
                  {/* Enhanced Content Section */}
                  <div className="flex-1 text-center lg:text-left space-y-6">
                    <div className="space-y-2">
                      <h3 className="text-4xl font-bold text-foreground font-heading tracking-tight">
                        Ludwik C. Siadlak
                      </h3>
                      <div className="flex items-center justify-center lg:justify-start gap-2 text-accent font-medium">
                        <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                        <span>Założyciel i Architekt Systemu</span>
                      </div>
                    </div>
                    
                    <div className="space-y-6 text-lg leading-relaxed">
                      <p className="text-muted-foreground font-medium">
                        <strong className="text-foreground">Wizjoner i architekt systemu Męskiego Kompasu.</strong> Autor bestsellera "Hakowanie Produktywności", mentor tysięcy profesjonalistów, twórca strukturalnych rozwiązań dla analitycznych umysłów.
                      </p>
                      <p className="text-muted-foreground">
                        Ludwik łączy głęboką analizę systemu z praktycznym doświadczeniem w budowaniu <strong className="text-accent">strukturalnych rozwiązań</strong> dla mężczyzn, którzy myślą systemowo.
                      </p>
                    </div>
                    
                    {/* Leadership qualities */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 pt-4">
                      <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        Architekt systemu
                      </span>
                      <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        Strukturalne rozwiązania
                      </span>
                      <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        Systemowe myślenie
                      </span>
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
              <a 
                href="https://buy.siadlak.com/checkout/spotkanie-online"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-10 py-5 text-xl font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-accent focus:ring-offset-2 inline-flex items-center gap-3"
              >
                Zarezerwuj swoje bezpłatne miejsce
                <span aria-hidden="true">→</span>
              </a>
              <p className="mt-6 text-muted-foreground">
                Liczba miejsc jest ograniczona, aby zapewnić jakość sesji Q&A.
              </p>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-gradient-to-br from-neural-violet to-quantum-blue text-white py-10" role="contentinfo">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-lg mb-4 text-white">
              &copy; 2025 Ludwik C. Siadlak & Fundacja HACKERZY.PL. Wszelkie prawa zastrzeżone.
            </p>
            <nav aria-label="Nawigacja prawna">
              <ul className="flex flex-wrap justify-center gap-6 text-sm">
                <li>
                  <a 
                    href="https://docs.siadlak.com/legal/regulaminy/b/A1991136-C165-40B4-9C1E-21CBAEC4C8D7/Polityka-Prywatno%C5%9Bci-Serwis%C3%B3w-Grupy-"
                    className="text-white/80 hover:text-white underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neural-violet rounded px-2 py-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Polityka Prywatności
                  </a>
                </li>
                <li>
                  <a 
                    href="https://docs.siadlak.com/legal/regulaminy"
                    className="text-white/80 hover:text-white underline transition-colors focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neural-violet rounded px-2 py-1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Regulaminy i Warunki Użytkowania
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Webinar;