import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Users, Clock, Calendar, MessageSquare, Shield } from '@/lib/icons';
import HeroSection from '@/components/sections/HeroSection';
import AppCard from '@/components/ui/app-card';
import AppStoreStats from '@/components/sections/AppStoreStats';

const apps = [
  {
    title: 'Hakowanie Produktywności',
    subtitle: 'System produktywności zgodny z wartościami',
    description: 'Przestań być kontrolowanym przez technologię. Odzyskaj sprawczość i zbuduj system, który faktycznie wspiera Twoje cele.',
    category: 'Produktywność' as const,
    rating: 5.0,
    downloads: '115 instalacji',
    status: 'DOSTĘPNA' as const,
    duration: '6 tygodni',
    target: 'Dla świadomych optymalizatorów',
    features: [
      'Kompleksowa diagnoza blokad produktywności',
      'Zintegrowany system zarządzania zadaniami',
      'Protokoły głębokiej pracy',
      'Praktyczne wdrożenie narzędzi'
    ],
    link: '/program/hakowanie-produktywnosci'
  },
  {
    title: 'Silna Głowa',
    subtitle: 'Odporność psychiczna w wymagającym świecie',
    description: 'Zbuduj psychiczną odporność, która pozwoli Ci zachować spokój i klarowność myślenia nawet w najbardziej wymagających okolicznościach.',
    category: 'Odporność psychiczna' as const,
    rating: 5.0,
    downloads: '64 instalacji',
    status: 'DOSTĘPNA' as const,
    duration: '5 tygodni',
    target: 'Dla poszukujących balansu',
    features: [
      'Praktyczne techniki redukcji stresu',
      'Protokoły zarządzania energią mentalną',
      'Strategie podejmowania decyzji pod presją',
      'Metody budowania długoterminowej odporności'
    ],
    link: '/program/silna-glowa'
  },
  {
    title: 'Męski Kompas',
    subtitle: 'Mapa transformacji dla świadomych mężczyzn',
    description: 'Program dla mężczyzn gotowych przejąć pełną odpowiedzialność za swoje życie. Odkryj i wzmocnij swoją autentyczną męskość.',
    category: 'Męskość' as const,
    rating: 5.0,
    downloads: '6 instalacji',
    status: 'NOWA' as const,
    duration: '8 tygodni',
    target: 'Dla gotowych na transformację',
    features: [
      'Kompleksowa analiza sytuacji życiowej',
      'Praktyczne narzędzia przywództwa osobistego',
      'Strategie budowania autentycznych relacji',
      'Protokoły rozwoju fizycznego i mentalnego'
    ],
    link: '/program/meski-kompas',
    featured: true
  }
];

const communityBenefits = [
  {
    icon: Clock,
    title: 'Daily meetings 12:34',
    description: 'Codzienne spotkania o stałej porze'
  },
  {
    icon: MessageSquare,
    title: 'Discord & Portal Lifehackeró',
    description: 'Dostęp do ekskluzywnych kanałów'
  },
  {
    icon: Users,
    title: 'Networking z profesjonalistami',
    description: 'Sieć kontaktów z branży'
  },
  {
    icon: Calendar,
    title: 'Cotygodniowe warsztaty',
    description: 'Regularne sesje rozwojowe'
  }
];

export default function Program() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleUnlockAccess = () => {
    setIsOverlayVisible(false);
  };

  return (
    <Layout>
      <HeroSection
        title="LifeOS AppStore"
        subtitle={<>Aplikacje mentalnej transformacji. Zainstaluj nowe oprogramowanie <span className="italic text-ascension-pink">w głowie</span></>}
      />
      
      {/* App Store Statistics */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <AppStoreStats />
        </div>
      </section>
      
      {/* Section 1: Basic Apps (50%/50%) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-neural-violet dark:text-luminal-magenta border-neural-violet dark:border-luminal-magenta">
                PODSTAWOWE APLIKACJE
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Instaluj Aplikacje
              </h2>
              <p className="text-lg text-subtle-slate dark:text-silver-mist/80 mb-8">
                Konkretne umiejętności: produktywność, odporność psychiczna czy męskość. Wybierz aplikację, której właśnie potrzebujesz - tak jak nową aplikację do telefonu.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                {apps.slice(0, 2).map((app) => (
                  <AppCard key={app.title} {...app} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Featured New App - Męski Kompas */}
      <section className="py-16 bg-gradient-to-r from-neural-violet/5 to-ascension-pink/5 dark:from-neural-violet/10 dark:to-ascension-pink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="bg-gradient-to-r from-ascension-pink to-luminal-magenta text-white border-0 text-sm px-4 py-2 animate-pulse">
                🔥 NOWA APLIKACJA - ZAINSTALUJ TERAZ!
              </Badge>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <AppCard {...apps[2]} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 3: Community Benefits - Installation Bonus */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-ascension-pink dark:text-luminal-magenta border-ascension-pink dark:border-luminal-magenta">
              BONUS INSTALACJI 🎁
            </Badge>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              Społeczność Lifehackerzy
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              <strong>Instalując dowolną aplikację otrzymujesz dostęp LIFETIME do ekskluzywnej społeczności klientów. To jedyny sposób, aby dołączyć do Lifehackerów.</strong>
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {communityBenefits.map((benefit, index) => (
                <GlassCard 
                  key={index} 
                  className="text-center"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                  </div>
                  
                  <h3 className="font-medium mb-2 text-deep-charcoal dark:text-silver-mist">
                    {benefit.title}
                  </h3>
                  
                  <p className="text-sm text-subtle-slate dark:text-silver-mist/80">
                    {benefit.description}
                  </p>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Section 4: Premium App - Mental Elevator */}
      <section className="py-20 bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-ascension-pink/10 to-luminal-magenta/10 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-ascension-pink to-luminal-magenta text-white border-0 px-4 py-1">
                PREMIUM APP • LIFE OS UPGRADE
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Mental Elevator
              </h2>
              
              <p className="text-xl md:text-2xl font-medium mb-6 text-white/90">
                Fundamentalna rekonstrukcja całego systemu operacyjnego
              </p>
            </div>
            
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <div className="glass-card rounded-xl overflow-hidden hover-scale transition-all duration-300 hover:shadow-xl hover:shadow-neural-violet/10 bg-gradient-to-br from-deep-space/50 to-quantum-blue/50 relative">
                  {/* Privacy Overlay */}
                  {isOverlayVisible && (
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-4 sm:p-8 transition-all duration-500 animate-fade-in rounded-xl">
                      <div className="mb-6">
                        <Shield className="h-16 w-16 text-ascension-pink mx-auto mb-4" />
                        <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                          Ta aplikacja jest dla zaawansowanych
                        </h3>
                        <p className="text-white/80 text-base sm:text-lg px-2">
                          Rozpocznij swoją podróż od podstawowych aplikacji, a później odblokuj dostęp do programu premium.
                        </p>
                      </div>
                      
                      <div className="space-y-3 w-full max-w-xs">
                        <CTAButton 
                          onClick={handleUnlockAccess}
                          className="w-full bg-gradient-to-r from-ascension-pink to-luminal-magenta hover:from-ascension-pink/90 hover:to-luminal-magenta/90"
                          size="lg"
                        >
                          Sprawdź dostępność
                        </CTAButton>
                        
                        <Link to="/discovery" className="block">
                        <CTAButton 
                          variant="secondary"
                          className="w-full"
                          size="lg"
                        >
                          Zarezerwuj sesję Discovery
                        </CTAButton>
                        </Link>
                      </div>
                    </div>
                  )}

                  {/* Custom Mental Elevator Card */}
                  <div className="p-6 bg-gradient-to-br from-deep-space to-quantum-blue border border-ascension-pink/20 rounded-xl">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-ascension-pink to-luminal-magenta rounded-lg flex items-center justify-center">
                          <span className="text-white text-xl font-bold">ME</span>
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white">Mental Elevator</h3>
                          <p className="text-white/70 text-sm">Indywidualny Program Mentoringowy</p>
                        </div>
                      </div>
                      
                      {/* Price */}
                      <div className="text-right">
                        <div className="text-2xl font-bold text-ascension-pink">16 000 PLN</div>
                        <div className="text-xs text-white/60">8 tygodni</div>
                      </div>
                    </div>
                    
                    {/* Rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                      <span className="text-white/70 text-sm">5.0</span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-white/80 text-sm mb-4 leading-relaxed">
                      Jak przejście z Windows 98 na macOS. 8 tygodni intensywnej pracy, maksymalnie 5 osób jednocześnie. To nie coaching - to przeprogramowanie.
                    </p>
                    
                    {/* Exclusivity Message */}
                    <div className="bg-ascension-pink/10 border border-ascension-pink/20 rounded-lg p-3 mb-4">
                      <p className="text-ascension-pink text-sm font-medium text-center">
                        Prowadzę max 5 osób w tym samym czasie
                      </p>
                    </div>
                    
                    {/* Features */}
                    <div className="space-y-2 mb-6">
                      {[
                        'Indywidualna sesja diagnostyczna',
                        'Tygodniowe sesje mentoringowe 1:1',
                        'Dostęp do społeczności absolwentów',
                        'Materiały i narzędzia premium'
                      ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2 text-white/80 text-sm">
                          <div className="w-1.5 h-1.5 bg-ascension-pink rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="block">
                      <CTAButton 
                        className="w-full bg-gradient-to-r from-ascension-pink/50 to-luminal-magenta/50 hover:from-ascension-pink/50 hover:to-luminal-magenta/50 cursor-not-allowed opacity-60"
                        showArrow={false}
                      >
                        Obecnie niedostępne
                      </CTAButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Gotowy na upgrade systemu?
            </h3>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Nie potrzebujesz więcej informacji. Potrzebujesz upgrade'u systemu. Wybierz aplikację i zacznij transformację już dziś.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/assessment">
                <CTAButton size="lg" className="text-lg px-8 py-4">
                  Sprawdź gotowość na upgrade
                </CTAButton>
              </Link>
              
              <Link to="/discovery">
              <CTAButton 
                variant="secondary" 
                size="lg" 
                className="text-lg px-8 py-4"
              >
                  Zarezerwuj sesję Discovery
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}