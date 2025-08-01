import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { CTAButton } from '@/components/ui/cta-button';
import { GlassCard } from '@/components/ui/glass-card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Users, Clock, Calendar, CheckCircle, Star, MessageSquare, Zap, Shield } from '@/lib/icons';
import HeroSection from '@/components/sections/HeroSection';

const fundamentalPrograms = [
  {
    id: 'hakowanie-produktywnosci',
    title: 'Hakowanie Produktywności',
    subtitle: 'System produktywności zgodny z Twoimi wartościami',
    description: 'Przestań być kontrolowanym przez technologię. Odzyskaj sprawczość i zbuduj system, który faktycznie wspiera Twoje cele.',
    features: [
      'Kompleksowa diagnoza Twoich blokad produktywności',
      'Zintegrowany system zarządzania zadaniami i energią',
      'Protokoły głębokiej pracy dostosowane do Twojego kontekstu',
      'Praktyczne wdrożenie narzędzi, nie tylko teoria'
    ],
    duration: '6 tygodni',
    format: 'Online + Spotkania grupowe',
    level: 'Dla świadomych optymalizatorów',
    startDate: 'Rekrutacja kwartalna',
    category: 'Produktywność'
  },
  {
    id: 'silna-glowa',
    title: 'Silna Głowa',
    subtitle: 'Odporność psychiczna w wymagającym świecie',
    description: 'Zbuduj psychiczną odporność, która pozwoli Ci zachować spokój i klarowność myślenia nawet w najbardziej wymagających okolicznościach.',
    features: [
      'Praktyczne techniki redukcji stresu',
      'Protokoły zarządzania energią mentalną',
      'Strategie podejmowania decyzji pod presją',
      'Metody budowania długoterminowej odporności'
    ],
    duration: '5 tygodni',
    format: 'Kurs online + praktyki',
    level: 'Dla poszukujących balansu',
    startDate: 'Dostęp natychmiastowy',
    category: 'Odporność psychiczna'
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
    title: 'Discord & Platforma',
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

export default function Courses() {
  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handleUnlockAccess = () => {
    setIsOverlayVisible(false);
  };

  return (
    <Layout>
      <HeroSection
        title="TRANSFORMACJA"
        subtitle={<>Sprawdzone programy, które prowadzą Cię przez kolejne etapy rozwoju – od podstaw po program <span className="italic text-ascension-pink">premium</span> dla wybranych</>}
      />
      
      {/* Section 1: Fundamental Programs (50%/50%) */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="outline" className="mb-4 text-neural-violet dark:text-luminal-magenta border-neural-violet dark:border-luminal-magenta">
                KROK 1
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
                Programy Fundamentalne
              </h2>
                <div className="text-lg text-subtle-slate dark:text-silver-mist/80">
                <p>Zacznij swoją podróż transformacji od solidnych podstaw.</p>
                <p>Czego teraz bardziej potrzebujesz?</p>
                <p>(Wiesz czego, zacznij sobie ufać)</p>
                </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {fundamentalPrograms.map((program) => (
                <GlassCard 
                  key={program.id}
                  className="overflow-hidden h-fit"
                  padding="sm"
                >
                  <div className="h-32 bg-gradient-to-br from-neural-violet to-ascension-pink dark:from-neural-violet dark:to-luminal-magenta flex items-center justify-center">
                  <span className="text-white text-lg font-medium text-center px-4 uppercase">
                    {program.category}
                  </span>
                  </div>
                  
                  <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">
                    {program.title}
                  </h3>
                  
                  <p className="text-neural-violet dark:text-luminal-magenta font-medium mb-3 text-sm">
                    {program.subtitle}
                  </p>
                  
                  <p className="text-subtle-slate dark:text-silver-mist/80 mb-4 text-sm">
                    {program.description}
                  </p>
                  
                  {/* Course Quick Info - Compact */}
                  <div className="grid grid-cols-2 gap-2 mb-4 text-xs">
                    <div className="flex items-center">
                    <Clock className="h-3 w-3 mr-1 text-neural-violet dark:text-luminal-magenta" />
                    <span className="text-subtle-slate dark:text-silver-mist/80">{program.duration}</span>
                    </div>
                    
                    <div className="flex items-center">
                    <Star className="h-3 w-3 mr-1 text-neural-violet dark:text-luminal-magenta" />
                    <span className="text-subtle-slate dark:text-silver-mist/80">{program.level}</span>
                    </div>
                  </div>
                  
                  {/* Key Features - Compact */}
                  <div className="mb-6">
                    <div className="space-y-1">
                    {program.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className="flex items-start text-xs">
                      <CheckCircle className="h-3 w-3 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                      <span className="text-subtle-slate dark:text-silver-mist/90">{feature}</span>
                      </div>
                    ))}
                    </div>
                  </div>
                  
                  <Link to={`/program/${program.id}`}>
                    <CTAButton 
                      className="w-full" 
                      size="default"
                      aria-label={`Zacznij kurs ${program.title}`}
                    >
                      Zacznij swoją podróż
                    </CTAButton>
                  </Link>
                  </div>
                </GlassCard>
                ))}
              </div>
              </div>
            </div>
          </div>
      </section>
      
      {/* Section 2: Community Bridge (100% Width) */}
      <section className="py-16 bg-gradient-to-r from-neural-violet/5 to-ascension-pink/5 dark:from-neural-violet/10 dark:to-ascension-pink/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="outline" className="mb-4 text-ascension-pink dark:text-luminal-magenta border-ascension-pink dark:border-luminal-magenta">
              KROK 2 • BONUS 🎁
            </Badge>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              Dołącz do społeczności Lifehackerzy
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              <strong>Dołączając do dowolnego Programu otrzymujesz dostęp LIFETIME do ekskluzywnej społeczności Klientów. P.S. To jedyny sposób, aby dołączyć do Lifehackerów.</strong>
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
      
      {/* Section 3: Premium Mental Elevator (100% Width, Hero Treatment) */}
      <section className="py-20 bg-gradient-to-br from-deep-space via-quantum-blue to-neural-violet relative overflow-hidden">
        {/* Premium Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-ascension-pink/10 to-luminal-magenta/10 opacity-50"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-ascension-pink to-luminal-magenta text-white border-0 px-4 py-1">
                PROGRAM PREMIUM • KROK 3
              </Badge>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Mental Elevator
              </h2>
              
              <p className="text-xl md:text-2xl font-medium mb-6 text-white/90">
                Indywidualny Program Mentoringowy
              </p>
            </div>
            
            <GlassCard 
              variant="subtle" 
              className="overflow-hidden hover:transform hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-ascension-pink/20 relative"
              padding="xl"
            >
              {/* Privacy Overlay */}
              {isOverlayVisible && (
                <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 transition-all duration-500 animate-fade-in">
                  <div className="mb-6">
                    <Shield className="h-16 w-16 text-ascension-pink mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-white mb-3">
                      Ta sekcja jest dla zaawansowanych
                    </h3>
                    <p className="text-white/80 text-lg">
                      Rozpocznij swoją podróż od fundamentów, a później odblokuj dostęp do programu premium.
                    </p>
                  </div>
                  
                  <CTAButton 
                    variant="premium" 
                    className="shadow-lg hover:shadow-xl px-8 py-3" 
                    size="lg"
                    onClick={handleUnlockAccess}
                    aria-label="Odblokuj dostęp do Mental Elevator"
                  >
                    Jestem zaawansowanym Lifehackerem i... chcę od życia WIĘCEJ. Odblokuj dostęp ≫ 
                  </CTAButton>
                </div>
              )}

              {/* Blurred Content Behind */}
              <div className={`transition-all duration-500 ${isOverlayVisible ? 'filter blur-sm' : ''}`}>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                  {/* Left Column - Social Proof */}
                  <div className="lg:col-span-1 text-center lg:text-left">
                    <div className="mb-6">
                      <div className="flex items-center justify-center lg:justify-start mb-2">
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <Star className="h-5 w-5 text-yellow-400 mr-1" />
                        <Star className="h-5 w-5 text-yellow-400" />
                      </div>
                      <p className="text-sm text-white/80 italic">
                        "Rzeczywista transformacja zawsze zaczyna się od decyzji."
                      </p>
                    </div>
                    
                    <div className="bg-ascension-pink/20 rounded-lg p-4 mb-4">
                      <p className="text-white font-medium text-sm">
                        🔥 Prowadzę max 5 osób w tym samym czasie. 
                      </p>
                      <p className="text-white/80 text-xs">
                        Ograniczona dostępność
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-2xl font-bold text-ascension-pink mb-1">
                        16 000 PLN
                      </p>
                      <p className="text-white/80 text-sm">
                        Inwestycja w transformację
                      </p>
                    </div>
                  </div>
                  
                  {/* Center Column - Main Content */}
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                      Dla Wybranych Profesjonalistów Gotowych Przejąć Kontrolę
                    </h3>
                    
                    <p className="text-white/90 mb-6 text-lg">
                      Program dla wybranych profesjonalistów gotowych przejąć kontrolę nad swoją karierą i cyfrowym życiem. 
                      Transformacja zaczyna się od decyzji, nie od kolejnego kursu.
                    </p>
                    
                    {/* Premium Features */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {[
                        { icon: Shield, text: 'Indywidualne sesje mentoringowe (8 tygodni)' },
                        { icon: Zap, text: 'Metodologia Black Panther dla naturalnego autorytetu' },
                        { icon: Star, text: 'Strategiczne ramy wdrożeniowe' },
                        { icon: Users, text: 'Dostęp do ekskluzywnej społeczności praktyków' }
                      ].map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-6 h-6 bg-ascension-pink/20 rounded flex items-center justify-center mr-3 flex-shrink-0">
                            <feature.icon className="h-3 w-3 text-ascension-pink" />
                          </div>
                          <span className="text-white/90 text-sm">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link to="/mental-elevator" className="flex-1">
                        <CTAButton 
                          variant="premium" 
                          className="w-full shadow-lg hover:shadow-xl" 
                          size="lg"
                          aria-label="Sprawdź dostępność Mental Elevator"
                        >
                          Sprawdź dostępność
                        </CTAButton>
                      </Link>
                      
                      <Link to="/contact">
                        <CTAButton 
                          variant="secondary" 
                          className="border-white/30 text-white hover:bg-white/10" 
                          size="lg"
                          showArrow={false}
                          aria-label="Zarezerwuj Sesję Discovery"
                        >
                          Umów Sesję Discovery
                        </CTAButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-deep-charcoal dark:text-silver-mist">
              Gotowy na transformację?
            </h2>
            
            <p className="text-lg mb-8 text-subtle-slate dark:text-silver-mist/80">
              Wybierz swój punkt wejścia i rozpocznij podróż ku pełnemu potencjałowi. 
              Każdy krok przybliża Cię do celu.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <CTAButton 
                  aria-label="Umów Sesję Discovery - przejdź do formularza kontaktowego"
                >
                  Umów Sesję Discovery
                </CTAButton>
              </Link>
              
              <Link to="/newsletter">
                <CTAButton 
                  variant="secondary" 
                  showArrow={false}
                  aria-label="Dołącz do newslettera"
                >
                  Dołącz do newslettera
                </CTAButton>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}