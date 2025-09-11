import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Star, Users, BookOpen, Compass, GitMerge, Book, Crown, Shield, AlertCircle } from '@/lib/icons';

export default function TrainTheTrainer() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden" style={{ backgroundColor: 'hsl(220, 70%, 20%)' }}>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
          style={{
            backgroundImage: `url('/lovable-uploads/2b4bb1bb-6c2c-4c52-be4b-83bc755ec926.png')`,
          }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <Badge className="bg-red-600 text-white border-0">8 miejsc dostępnych</Badge>
                  <Badge className="border-2" style={{ borderColor: 'hsl(45, 95%, 60%)', color: 'hsl(45, 95%, 60%)' }}>
                    8-tygodniowa transformacja
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight">
                  Jesteś Ekspertem.<br />
                  <span style={{ color: 'hsl(45, 95%, 60%)' }}>Pora zostać<br />Przewodnikiem.</span>
                </h1>
                
                <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
                  Prawdziwa wartość twojej wiedzy (nawet, jeśli to najsuchszy nawet temat – jak konfiguracja SQL, 
                  czy architektura Azure) objawia się dopiero wtedy, gdy zmienia myślenie i umiejętności innych ludzi.
                </p>
                
                <p className="text-base md:text-lg mb-8 text-gray-400 leading-relaxed">
                  Naucz się świadomie kształtować umysły swoich słuchaczy i zostawiać po sobie trwały ślad. 
                  Zdobywaj kompetencje, które pozwolą ci nie tylko uczyć, ale i inspirować do prawdziwej zmiany.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <a href="https://link.siadlak.com/discovery" target="_blank" rel="noopener noreferrer">
                    <CTAButton
                      variant="primary"
                      size="lg"
                      className="font-bold px-8 py-4 border-0 !bg-yellow-400 !text-black hover:!bg-yellow-500"
                      showArrow
                    >
                      Przejdź do aplikacji
                    </CTAButton>
                  </a>
                  <CTAButton
                    variant="secondary"
                    size="lg"
                    className="font-bold px-8 py-4 text-white border-2 border-yellow-400"
                  >
                    Dowiedz się więcej
                  </CTAButton>
                </div>
                
                <div className="p-4 rounded-lg bg-white/10 backdrop-blur-sm">
                  <p className="text-sm text-white/90 italic">
                    "Exceptional training methodology that transformed our technical capabilities" 
                    <span className="font-semibold">- US Department of Defense</span>
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="/lovable-uploads/2b4bb1bb-6c2c-4c52-be4b-83bc755ec926.png" 
                  alt="Professional training presentation"
                  className="w-full rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-red-50 dark:bg-red-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-red-800 dark:text-red-300">
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
                <GlassCard key={index} className="flex items-start gap-4 p-6 bg-white dark:bg-red-900/30 border border-red-200 dark:border-red-800">
                  <CheckCircle className="w-6 h-6 flex-shrink-0 mt-1 text-red-600" />
                  <p className="text-lg text-red-800 dark:text-red-200">{item}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(220, 70%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Train The Trainer: <span style={{ color: 'hsl(45, 95%, 60%)' }}>Elite Academy</span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                8-tygodniowa transformacja z inżyniera w międzynarodowego trenera technologii
              </p>
              <Badge className="text-lg px-6 py-2 bg-red-600 text-white border-0">
                Ograniczone do 8 miejsc - hard cap. Żadnych wyjątków.
              </Badge>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: "Mindset Elity", icon: Star, description: "Transformacja mentalności z programisty na lidera myśli" },
                { title: "Architektura Emocji", icon: Users, description: "Zarządzanie energią i emocjami grupy szkoleniowej" },
                { title: "Warsztat Mistrza", icon: BookOpen, description: "Techniki prezentacji i storytelling dla IT" },
                { title: "System Pozyskiwania Klientów", icon: Compass, description: "Budowanie marki osobistej i pozyskiwanie zleceń" },
                { title: "Bezcenna Sieć Kontaktów", icon: GitMerge, description: "Dostęp do sieci międzynarodowych trenerów" }
              ].map((feature, index) => (
                <GlassCard key={index} className="p-8 text-center bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all">
                  <feature.icon className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(45, 95%, 60%)' }} />
                  <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center" style={{ color: 'hsl(220, 70%, 20%)' }}>
              Zaufali nam globalni liderzy
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {[
                { company: "US Army", text: "Outstanding technical training delivery", rating: 5 },
                { company: "NATO", text: "Exceptional methodology and results", rating: 5 },
                { company: "Fortune 500 Corp", text: "Transformed our technical capabilities", rating: 5 }
              ].map((testimonial, index) => (
                <GlassCard key={index} className="p-6 bg-white dark:bg-gray-800">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-current" style={{ color: 'hsl(45, 95%, 60%)' }} />
                    ))}
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-semibold" style={{ color: 'hsl(220, 70%, 20%)' }}>- {testimonial.company}</p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Audience Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(220, 70%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              Program dedykowany dla
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { title: "Senior Developer", icon: Book, description: "5+ lat doświadczenia w rozwoju oprogramowania" },
                { title: "Architekt IT", icon: Crown, description: "Projektowanie i nadzór nad systemami IT" },
                { title: "IT Manager", icon: Users, description: "Zarządzanie zespołami technicznymi" },
                { title: "Administrator", icon: Shield, description: "Administracja systemów i infrastruktury" }
              ].map((persona, index) => (
                <GlassCard key={index} className="p-6 text-center bg-white/10 backdrop-blur-sm border border-white/20">
                  <persona.icon className="w-12 h-12 mx-auto mb-4" style={{ color: 'hsl(45, 95%, 60%)' }} />
                  <h3 className="text-lg font-bold mb-3 text-white">{persona.title}</h3>
                  <p className="text-sm text-gray-300">{persona.description}</p>
                </GlassCard>
              ))}
            </div>
            
            <div className="p-6 rounded-lg bg-yellow-100 dark:bg-yellow-900/20 border border-yellow-300 dark:border-yellow-700">
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 flex-shrink-0 mt-1 text-yellow-600" />
                <div>
                  <h3 className="font-bold text-yellow-800 dark:text-yellow-300 mb-2">Ważne:</h3>
                  <p className="text-yellow-700 dark:text-yellow-400">
                    Materiały szkoleniowe są w języku angielskim. Wymagana jest dobra znajomość języka angielskiego w mowie i piśmie.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mentor Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: 'hsl(220, 70%, 20%)' }}>
                  Ludwik C. Siadlak
                </h2>
                <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 italic">
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
                      <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(45, 95%, 60%)' }} />
                      <p className="text-gray-700 dark:text-gray-300">{achievement}</p>
                    </div>
                  ))}
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'hsl(220, 70%, 20%)' }}>19</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">lat doświadczenia</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'hsl(220, 70%, 20%)' }}>500+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">międzynarodowych szkoleń</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'hsl(220, 70%, 20%)' }}>10K+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">wyszkolonych specjalistów</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold" style={{ color: 'hsl(220, 70%, 20%)' }}>50+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">organizacji Fortune 500</div>
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

      {/* Final CTA Section */}
      <section className="py-20" style={{ backgroundColor: 'hsl(220, 70%, 20%)' }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 text-lg px-6 py-2 bg-red-600 text-white border-0">
              Ilość miejsc jest bezwzględnie ograniczona do 8 osób
            </Badge>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">
              Transformacja kariery nie zaczyna się za tydzień.<br />
              <span style={{ color: 'hsl(45, 95%, 60%)' }}>Zaczyna się od jednej decyzji.</span>
            </h2>
            
            <div className="mb-12">
              <h3 className="text-2xl font-bold mb-6 text-white">Sesja Discovery</h3>
              <p className="text-lg text-gray-300 mb-8">30-minutowa konsultacja online, podczas której:</p>
              
              <div className="space-y-4 mb-8 text-left max-w-2xl mx-auto">
                {[
                  "Przeanalizujemy Twoją obecną sytuację zawodową i cele",
                  "Określimy, czy program Train The Trainer jest dla Ciebie odpowiedni",
                  "Przedstawimy szczegółowy plan transformacji kariery"
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 flex-shrink-0 mt-1" style={{ color: 'hsl(45, 95%, 60%)' }} />
                    <p className="text-gray-300">{point}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <a href="https://link.siadlak.com/discovery" target="_blank" rel="noopener noreferrer">
              <CTAButton
                variant="primary"
                size="xl"
                className="font-bold px-12 py-6 text-xl border-0 mb-6 !bg-yellow-400 !text-black hover:!bg-yellow-500"
                showArrow
              >
                Sprawdź dostępne terminy
              </CTAButton>
            </a>
            
            <div className="flex justify-center gap-8 text-sm text-gray-400">
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