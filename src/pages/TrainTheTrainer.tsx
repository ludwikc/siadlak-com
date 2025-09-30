import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Users, Compass, GitMerge, Book, Crown, Shield, AlertCircle } from '@/lib/icons';

export default function TrainTheTrainer() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="flex items-center gap-4 mb-6">
              <Badge className="bg-destructive text-destructive-foreground border-0">8 miejsc dostępnych</Badge>
              <Badge className="border-2 border-gold text-gold bg-transparent">
                8-tygodniowa transformacja
              </Badge>
            </div>
            
            <h1 className="hero-title">
              Jesteś Ekspertem.<br />
              <span className="hero-gradient-text">Pora zostać<br />Przewodnikiem.</span>
            </h1>
            
            <p className="hero-description">
              Prawdziwa wartość twojej wiedzy (nawet, jeśli to najsuchszy nawet temat – jak konfiguracja SQL, 
              czy architektura Azure) objawia się dopiero wtedy, gdy zmienia myślenie i umiejętności innych ludzi.
            </p>
            
            <p className="text-base md:text-lg mb-8 text-muted-foreground leading-relaxed">
              Naucz się świadomie kształtować umysły swoich słuchaczy i zostawiać po sobie trwały ślad. 
              Zdobywaj kompetencje, które pozwolą ci nie tylko uczyć, ale i inspirować do prawdziwej zmiany.
            </p>
            
            <div className="hero-buttons">
              <a href="https://link.siadlak.com/discovery" target="_blank" rel="noopener noreferrer">
                <CTAButton
                  variant="primary"
                  size="lg"
                  className="btn-hero border-0"
                  showArrow
                >
                  Przejdź do aplikacji
                </CTAButton>
              </a>
              <CTAButton
                variant="secondary"
                size="lg"
                className="btn-outline"
              >
                Dowiedz się więcej
              </CTAButton>
            </div>
            
            <div className="hero-status">
              <div className="status-indicator">
                <div className="status-dot status-dot--gold"></div>
                <span>Tylko 8 miejsc</span>
              </div>
              <div className="status-indicator">
                <div className="status-dot status-dot--premium"></div>
                <span>8 tygodni intensywnej pracy</span>
              </div>
            </div>
          </div>
          
          <div className="hero-image-container">
            <div className="hero-image-wrapper">
              <img 
                src="/lovable-uploads/2b4bb1bb-6c2c-4c52-be4b-83bc755ec926.png" 
                alt="Professional training presentation"
                className="hero-image"
              />
              <div className="hero-image-overlay"></div>
            </div>
            <div className="hero-testimonial">
              <div className="testimonial-label">US Department of Defense</div>
              <div className="testimonial-text">
                "Exceptional training methodology that transformed our technical capabilities"
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-red-800">
              Czy to brzmi znajomo?
            </h2>
            
            <div className="space-y-6">
              {[
                "Masz już dość kodzenia w jednym projekcie? Chcesz, aby twoja wiedza służyła szerszemu gronu...",
                "Marzysz o zawodzie, który otwiera drzwi do sal szkoleniowych na całym świecie...",
                "Boisz się, że pomimo swojej ogromnej wiedzy technicznej, nie dasz rady utrzymać uwagi grupy...",
                "Czujesz frustrację, gdy widzisz, jak inni 'szkoleniowcy' marnują czas i potencjał grupy...",
                "Wiesz, że masz to 'coś', ale nie wiesz, jak to opakować i sprzedać jako premiumową usługę szkoleniową?"
              ].map((item, index) => (
                <GlassCard key={index} className="flex items-start gap-4 p-6 bg-white border border-red-200">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" />
                  <p className="text-lg text-red-800">{item}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mentoring Program Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 text-sm px-4 py-2 bg-premium text-white border-0 rounded-full">
                Program Mentoringowy
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                Train The Trainer: Elite <span className="text-gold">Academy</span>
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-4xl mx-auto">
                8-tygodniowa transformacja z inżyniera w międzynarodowego trenera technologii.
              </p>
              <p className="text-base text-muted-foreground max-w-4xl mx-auto">
                To program, którego sam potrzebowałem 19 lat temu. To esencja wszystkiego, czego nauczyłem się 
                prowadząc szkolenia dla US Army, US Navy, NATO, Norweskiej Policji, GM, GE, ING Banku i dziesiątek 
                innych prestiżowych organizacji.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "Mindset Elity", 
                  icon: Star, 
                  description: "Odetniesz się od mentalności 'technicznego najemnika'. Nauczysz się myśleć jak consultant premium, a nie techniczny najemnik." 
                },
                { 
                  title: "Architektura Emocji", 
                  icon: Users, 
                  description: "Nauczysz się projektować szkolenia tak, aby budować zaangażowanie w pierwsze do ostatni minuty. Zastapisz nudne wykłady historiami, metaforami i ćwiczeniami." 
                },
                { 
                  title: "Warsztat Mistrza", 
                  icon: Book, 
                  description: "Dowiesz się, jak radzić sobie z trudnymi uczestnikami, jak prowadzić grupę przez techniczne labirynty i jak zawsze wyjść z twarzą z najtu¬dnej sytuacji." 
                },
                { 
                  title: "System Pozyskiwania Klientów", 
                  icon: Compass, 
                  description: "Pokażę Ci sprawdzone metody na dotarcie do klientów korporacyjnych i rządowych. Jak wykonać usługę? Jak budować ofertę nie do odrzucenia?" 
                },
                { 
                  title: "Bezcenna Sieć Kontaktów", 
                  icon: GitMerge, 
                  description: "Dołączysz do zamkniętej grupy absolwentów - przyszłych i obecnych trenerów premium, z którymi będziesz dzielić się zleceniami i wspierać w rozwoju." 
                }
              ].map((feature, index) => (
                <GlassCard key={index} className="p-6 text-left bg-card/50 backdrop-blur-sm border border-border hover:bg-card/90 transition-all hover:shadow-lg hover:shadow-premium/10">
                  <feature.icon className="w-8 h-8 mb-4 text-gold" />
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
            
            <div className="text-center">
              <Badge className="text-base px-6 py-3 bg-gold/20 text-gold border border-gold/30 rounded-full">
                ⚠️ Ograniczone do 8 miejsc - hard cap. Żadnych wyjątków.
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-foreground">
              Zaufali nam globalni liderzy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { company: "US Army", text: "Outstanding technical training delivery", rating: 5 },
                { company: "NATO", text: "Exceptional methodology and results", rating: 5 },
                { company: "Fortune 500 Corp", text: "Transformed our technical capabilities", rating: 5 }
              ].map((testimonial, index) => (
                <GlassCard key={index} className="p-6 bg-card">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current text-gold" />
                    ))}
                  </div>
                  <p className="text-card-foreground mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold text-premium">- {testimonial.company}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20 bg-gradient-to-br from-background via-secondary/30 to-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-foreground">
              Program dedykowany dla
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { title: "Senior Developer", icon: Book, description: "5+ lat doświadczenia w rozwoju oprogramowania" },
                { title: "Architekt IT", icon: Crown, description: "Projektowanie i nadzór nad systemami IT" },
                { title: "IT Manager", icon: Users, description: "Zarządzanie zespołami technicznymi" },
                { title: "Administrator", icon: Shield, description: "Administracja systemów i infrastruktury" }
              ].map((persona, index) => (
                <GlassCard key={index} className="p-6 text-center bg-card/80 backdrop-blur-sm border border-border hover:bg-card/90 transition-all">
                  <persona.icon className="w-12 h-12 mx-auto mb-4 text-gold" />
                  <h3 className="text-lg font-bold mb-3 text-card-foreground">{persona.title}</h3>
                  <p className="text-sm text-muted-foreground">{persona.description}</p>
                </GlassCard>
              ))}
            </div>
            
            <div className="p-6 rounded-lg bg-accent/10 border border-accent/30">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-accent" />
                <div>
                  <h3 className="font-bold text-accent-foreground mb-2">Ważne:</h3>
                  <p className="text-accent-foreground/80">
                    Materiały szkoleniowe są w języku angielskim. Wymagana jest dobra znajomość języka angielskiego w mowie i piśmie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
                  Ludwik C. Siadlak
                </h2>
                <p className="text-xl mb-8 text-muted-foreground italic">
                  "From Code to Classroom. From Technician to Travelling Trainer."
                </p>
                
                <div className="space-y-4 mb-8">
                  {[
                    "Międzynarodowy trener technologii z 19-letnim doświadczeniem",
                    "Prowadził szkolenia dla US Army, NATO, i Fortune 500",
                    "Wyszkolił ponad 10,000 specjalistów IT na całym świecie",
                    "Autor metodologii Train The Trainer dla branży IT",
                    "Ekspert w transformacji wiedzy technicznej w umiejętności szkoleniowe"
                  ].map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1 text-gold" />
                      <p className="text-card-foreground">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                    <div className="text-3xl font-bold text-premium">19</div>
                    <div className="text-sm text-muted-foreground">lat doświadczenia</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                    <div className="text-3xl font-bold text-premium">500+</div>
                    <div className="text-sm text-muted-foreground">międzynarodowych szkoleń</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                    <div className="text-3xl font-bold text-premium">10K+</div>
                    <div className="text-sm text-muted-foreground">wyszkolonych specjalistów</div>
                  </div>
                  <div className="text-center p-6 bg-card/50 backdrop-blur-sm rounded-lg border border-border">
                    <div className="text-3xl font-bold text-premium">50+</div>
                    <div className="text-sm text-muted-foreground">organizacji Fortune 500</div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/dff62bdb-7bca-402f-ba02-85591cef2f5c.png" 
                  alt="Ludwik C. Siadlak - International IT Trainer"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Testimonials Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Zaufali nam najwięksi <span className="text-gold">gracze</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-12">
              19 lat na rynku szkoleniowym IT. Doświadczenie z największymi organizacjami świata.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-premium/5 via-background to-gold/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-destructive text-destructive-foreground border-0">
              Ilość miejsc jest bezwzględnie ograniczona do 8 osób
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-foreground">
              Transformacja kariery nie zaczyna się za tydzień.<br />
              <span className="text-gold">Zaczyna się od jednej decyzji.</span>
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-foreground">Sesja Discovery</h3>
              <p className="text-lg text-muted-foreground mb-8">30-minutowa konsultacja online, podczas której:</p>
              
              <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "Przeanalizujemy Twoją obecną sytuację zawodową i cele",
                  "Określimy, czy program Train The Trainer jest dla Ciebie odpowiedni",
                  "Przedstawimy szczegółowy plan transformacji kariery"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1 text-gold" />
                    <p className="text-muted-foreground">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="https://link.siadlak.com/discovery" target="_blank" rel="noopener noreferrer">
              <CTAButton
                variant="primary"
                size="xl"
                className="btn-hero text-xl px-12 py-6 mb-6 border-0"
                showArrow
              >
                Sprawdź dostępne terminy
              </CTAButton>
            </a>
            
            <div className="flex justify-center gap-8 text-sm text-muted-foreground">
              <span>✓ Bez opłat</span>
              <span>✓ Bez zobowiązań</span>
              <span>✓ 30 minut wartościowej rozmowy</span>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}