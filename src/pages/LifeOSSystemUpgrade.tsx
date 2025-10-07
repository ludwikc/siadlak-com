import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';

export default function LifeOSSystemUpgrade() {
  const scrollToDiscovery = () => {
    const discoverySection = document.getElementById('discovery-section');
    if (discoverySection) {
      discoverySection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-deep-space via-twilight-indigo to-neural-blue overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Life OS: System Upgrade
            </h1>
            <p className="text-2xl md:text-3xl font-medium mb-8 text-silver-mist leading-tight">
              <strong>8 tygodni transformacji dla liderów, którzy osiągnęli wszystko... i właśnie dlatego czują się pusto.</strong>
            </p>
            <CTAButton
              variant="premium"
              size="xl"
              className="shadow-2xl hover:shadow-3xl"
              aria-label="Zarezerwuj Sesję Discovery"
              showArrow
              onClick={scrollToDiscovery}
            >
              Zarezerwuj Sesję Discovery
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Rozpoznajesz ten stan */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Rozpoznajesz ten stan?
            </h2>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Osiągnąłeś sukces, którego większość ludzi nie zrozumie.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Twoje cele są zrealizowane. Twoje firmy działają. Twoje życie wygląda perfekcyjnie z zewnątrz.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Ale w środku? <strong className="text-foreground">Pustka.</strong>
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              I co gorsza - nikt nie rozumie tego problemu:
            </p>
            
            <ul className="space-y-4 mb-8">
              <li className="text-lg">Mówisz o tym znajomym → "Musisz więcej odpoczywać"</li>
              <li className="text-lg">Próbujesz z coachingiem → "Ustaw nowe cele SMART"</li>
              <li className="text-lg">Idziesz na terapię → "Opowiedz mi o swoich rodzicach"</li>
            </ul>
            
            <p className="text-2xl font-bold text-foreground mb-6">
              Żadne z tych rozwiązań nie trafia w sedno.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Bo Twój problem nie leży w strategii, celach ani przeszłości.
            </p>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              Twój problem jest na poziomie tożsamości.
            </p>
            
            <div className="bg-muted p-8 rounded-lg my-8">
              <p className="text-xl leading-relaxed mb-4">
                Jesteś jak komputer z Windows 98, próbujący obsłużyć dzisiejsze oprogramowanie. System jest przestarzały, skonfliktowany, przeciążony.
              </p>
              
              <p className="text-xl leading-relaxed mb-4">
                Nie potrzebujesz więcej aplikacji (kolejnych "tricków").
              </p>
              
              <p className="text-2xl font-bold text-primary">
                Potrzebujesz upgrade'u całego Systemu Operacyjnego.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego to, co próbowałeś, nie zadziałało */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-foreground">
              Dlaczego to, co próbowałeś, nie zadziałało?
            </h2>

            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-bold mb-4">Standard Coaching / Mentoring</h3>
              <p className="mb-4">Daje Ci nowe strategie. Więcej narzędzi. Kolejne frameworki.</p>
              <p className="mb-4"><strong>Problem:</strong> Instalujesz nowe aplikacje na starym, skonfliktowanym systemie. Efekt jest chwilowy, a potem wracasz do starych wzorców.</p>
              <p className="mb-8 italic">To jak dokładanie krzeseł na Titanicu.</p>

              <h3 className="text-2xl font-bold mb-4">Terapia</h3>
              <p className="mb-4">Pomaga zrozumieć przeszłość. Analizować trauma. Rozumieć, skąd się to bierze.</p>
              <p className="mb-4"><strong>Problem:</strong> Rozumiesz już SKĄD. Ale nadal nie wiesz JAK podjąć odważną decyzję w poniedziałek o 9 rano, kiedy na szali jest 2M PLN i przyszłość firmy.</p>
              <p className="mb-8 italic">Insight bez transformacji to tylko ciekawa historyjka.</p>

              <h3 className="text-2xl font-bold mb-4">Kursy Online / Książki</h3>
              <p className="mb-4">Dostarczają wiedzę. Ramowe modele. Inspirację.</p>
              <p className="mb-8"><strong>Problem:</strong> Prawdziwa transformacja nie zachodzi na poziomie intelektualnym. Możesz przeczytać 100 książek o pływaniu i nadal utoniesz, gdy wrzucą Cię do oceanu.</p>

              <h3 className="text-2xl font-bold mb-4">Duchowość / Medytacja</h3>
              <p className="mb-4">Daje spokój. Perspektywę. Kontakt z czymś większym.</p>
              <p className="mb-8"><strong>Problem:</strong> Często oderwan od rzeczywistości biznesowej. Medutujesz, czujesz zen... a potem wracasz do biura i znowu jesteś tym samym człowiekiem podejmującym te same decyzje z tego samego strachu.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery CTA Section */}
      <section id="discovery-section" className="py-20 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Następny krok: Sesja Discovery
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              <strong>To nie jest rozmowa sprzedażowa.</strong> To wzajemna ocena, czy mamy ze sobą pracować.
            </p>
            
            <CTAButton
              variant="primary"
              size="xl"
              href="/contact"
              showArrow
              className="mb-8"
            >
              Zarezerwuj Sesję Discovery
            </CTAButton>
            
            <p className="text-lg text-muted-foreground italic">
              <strong>P.S.</strong> Nie muszę Cię przekonywać. Jeśli to jest Twoje, wiesz. Jeśli nie wiesz - nie jest (jeszcze). Ufam Twojej intuicji. Zaufaj jej też.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
