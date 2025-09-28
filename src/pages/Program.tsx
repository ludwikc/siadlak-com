import Layout from '@/components/layout/Layout';
import AppStoreStats from '@/components/sections/AppStoreStats';
import HeroSection from '@/components/sections/HeroSection';
import AppCard from '@/components/ui/app-card';
import { Badge } from '@/components/ui/badge';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { Calendar, Clock, MessageSquare, Shield, Users } from '@/lib/icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import effectGif from '@/assets/I-know-kung-fu.gif';
import redPillGif from '@/assets/red-pill.gif';

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
    status: 'NIEDOSTĘPNA' as const,
    duration: '6 tygodni',
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
    status: 'DOSTĘPNA' as const,
    duration: '5 tygodni',
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
    title: 'Discord & Portal Lifehackerów',
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
  const [isFaqOverlayVisible, setIsFaqOverlayVisible] = useState(true);

  const handleUnlockAccess = () => {
    setIsOverlayVisible(false);
  };

  const handleShowEffect = () => {
    setIsFaqOverlayVisible(false);
  };

  return (
    <Layout>
      <HeroSection
        title="Mental AppStore"
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
                🔥 NOWY PROGRAM - DOŁĄCZ TERAZ!
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

      {/* FAQ: Efekt? Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4 text-neural-violet dark:text-luminal-magenta border-neural-violet dark:border-luminal-magenta">
                FAQ: EFEKT?
              </Badge>
              
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Pokaż mi jak wygląda proces instalacji
              </h2>
            </div>
            
            {/* Effect Display with Overlay */}
            <div className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden">
              {/* Privacy Overlay */}
              {isFaqOverlayVisible && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 animate-fade-in rounded-2xl">
                  <div className="space-y-6">
                    <div className="w-16 h-16 bg-neural-violet/20 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mx-auto">
                      <MessageSquare className="h-8 w-8 text-neural-violet dark:text-luminal-magenta" />
                    </div>
                    
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-white">
                        Chcesz zobaczyć efekt?
                      </h3>
                      <p className="text-white/80 text-lg">
                        Zobacz jak wygląda proces mentalnej transformacji
                      </p>
                    </div>
                    
                    <CTAButton 
                      onClick={handleShowEffect}
                      className="bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90"
                      size="lg"
                    >
                      Pokaż Efekt
                    </CTAButton>
                  </div>
                </div>
              )}

              {/* GIF Content */}
              <div className="bg-gradient-to-br from-deep-space/50 to-quantum-blue/50 p-8 rounded-2xl border border-neural-violet/20">
                <img 
                  src={effectGif} 
                  alt="Mental transformation effect demonstration"
                  className="w-full rounded-lg shadow-2xl"
                />
                <p className="text-xs text-white/50 mt-4 text-center">
                  Źródło: Matrix (1999), Warner Bros.
                </p>
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
              Społeczność Lifehackerów
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              <strong>Dołączając do dowolnego programu otrzymujesz dostęp LIFETIME do ekskluzywnej społeczności Klientów Premium. To jedyny sposób, aby dołączyć do Lifehackerów.</strong>
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
      
      {/* Section 4: Premium App - Mental Elevator - FULL WIDTH "FINAL BOSS" */}
      <section className="py-20 bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-ascension-pink/10 to-luminal-magenta/10 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-gradient-to-r from-ascension-pink to-luminal-magenta text-white border-0 px-6 py-2 text-lg font-medium">
                💎 LIFE OS UPGRADE
              </Badge>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Life OS: System Upgrade
              </h2>
              
              <p className="text-xl md:text-2xl font-medium mb-8 text-white/90 max-w-4xl mx-auto">
                Fundamentalna rekonstrukcja całego systemu operacyjnego. Nie aplikacja - cały nowy system.
              </p>
            </div>
            
            {/* FULL WIDTH PREMIUM CARD */}
            <div className="w-full">
              <div className="glass-card rounded-2xl overflow-hidden hover-scale transition-all duration-300 hover:shadow-2xl hover:shadow-neural-violet/20 bg-gradient-to-br from-deep-space/50 to-quantum-blue/50 relative border-2 border-ascension-pink/30">
                {/* Privacy Overlay */}
                {isOverlayVisible && (
                  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-4 sm:p-8 transition-all duration-500 animate-fade-in rounded-2xl">
                    <div className="mb-8">
                      <Shield className="h-20 w-20 text-ascension-pink mx-auto mb-6" />
                      <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                        Ten program jest dla zaawansowanych
                      </h3>
                      <p className="text-white/80 text-lg sm:text-xl px-4 max-w-2xl mx-auto">
                        Rozpocznij swoją podróż od podstawowych aplikacji, a później odblokuj dostęp do programu premium.
                      </p>
                    </div>
                    
                    <div className="space-y-4 w-full max-w-md">
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

                {/* WIDE 2-COLUMN LAYOUT */}
                <div className="p-8 md:p-12 bg-gradient-to-br from-deep-space to-quantum-blue border border-ascension-pink/20 rounded-2xl">
                  <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left Column - Content */}
                    <div>
                      {/* Header */}
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-20 h-20 bg-gradient-to-br from-ascension-pink to-luminal-magenta rounded-2xl flex items-center justify-center">
                          <span className="text-white text-3xl font-bold">OS</span>
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white mb-2">System Upgrade</h3>
                          <p className="text-white/70 text-lg">Indywidualny Program Mentoringowy</p>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex items-center gap-3 mb-8">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <span key={i} className="text-yellow-400 text-2xl">★</span>
                          ))}
                        </div>
                        <span className="text-white/70 text-lg">5.0 • Ekskluzywny</span>
                      </div>
                      
                      {/* Description */}
                      <p className="text-white/80 mb-8 text-xl leading-relaxed">
                        Jak przejście z Windows 98 na macOS. 8 tygodni intensywnej pracy, maksymalnie 5 osób jednocześnie. To nie coaching - to przeprogramowanie całego systemu operacyjnego w Twojej głowie. I w emocjach.
                      </p>
                      
                      {/* Features */}
                      <div className="space-y-4">
                        {[
                          'Indywidualna sesja diagnostyczna (3h)',
                          '8 x sesje mentoringowe 1:1 (90 min)',
                          'Dostęp LIFETIME do społeczności absolwentów',
                          'Materiały i narzędzia premium',
                          '24/7 wsparcie przez cały program',
                          'Gwarancja rezultatu lub zwrot pieniędzy'
                        ].map((feature, index) => (
                          <div key={index} className="flex items-center gap-4 text-white/90 text-lg">
                            <div className="w-3 h-3 bg-ascension-pink rounded-full flex-shrink-0"></div>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Column - Price & CTA */}
                    <div className="text-center lg:text-right">
                      {/* Price */}
                      <div className="mb-8">
                        <div className="text-5xl lg:text-6xl font-bold text-ascension-pink mb-3">16 000 PLN</div>
                        <div className="text-white/60 text-xl">8 tygodni intensywnej transformacji</div>
                        <div className="text-white/40 text-lg mt-2">≈ 2000 PLN / tydzień</div>
                      </div>
                      
                      {/* Exclusivity Badge */}
                      <div className="bg-gradient-to-r from-ascension-pink/20 to-luminal-magenta/20 border-2 border-ascension-pink/40 rounded-2xl p-6 mb-8">
                        <div className="text-ascension-pink text-2xl mb-2">👑</div>
                        <p className="text-ascension-pink font-bold text-lg">
                          Prowadzę max 5 osób jednocześnie
                        </p>
                        <p className="text-white/70 text-sm mt-2">
                          Najbardziej ekskluzywny program w portfolio
                        </p>
                      </div>
                      
                      {/* CTA Button */}
                      <CTAButton 
                        className="w-full lg:w-auto px-12 py-4 text-xl bg-gradient-to-r from-ascension-pink/50 to-luminal-magenta/50 hover:from-ascension-pink/50 hover:to-luminal-magenta/50 cursor-not-allowed opacity-60"
                        size="lg"
                        showArrow={false}
                      >
                        Obecnie niedostępne
                      </CTAButton>
                      
                      <p className="text-white/50 text-sm mt-4">
                        Następny nabór: Q4 2025
                      </p>
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
                  Wróć na górę i dołącz do nas
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Red Pill GIF Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <img 
              src={redPillGif} 
              alt="Red pill choice matrix scene"
              className="w-full rounded-lg shadow-2xl"
            />
            <p className="text-xs text-muted-foreground mt-4 mb-8">
              Źródło: Matrix (1999), Warner Bros.
            </p>
            
            <div className="relative inline-block">
              <div className="absolute -inset-2 bg-gradient-to-r from-red-500 to-red-700 rounded-xl blur-sm opacity-60 transition-opacity duration-300 hover:opacity-80"></div>
              <Link to="/discovery" className="relative z-10">
                <CTAButton 
                  size="xl" 
                  className="text-xl px-12 py-6 font-bold bg-red-600 hover:bg-red-700 text-white border-0 relative transition-all duration-300"
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