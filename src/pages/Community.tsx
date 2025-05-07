import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import { Link } from 'react-router-dom';
import { CheckCircle, Users, Diamond, Award, Compass, Heart, MapPin } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ValueProposition from '../components/podcast/ValueProposition';
import PersonaSection from '../components/sections/PersonaSection';
import { Button } from '@/components/ui/button';

export default function Community() {
  return (
    <Layout>
      {/* Hero Section with Background Image */}
      <Hero
        title="SIADLAXITY: Nasze Cyfrowe Miasto Rozwoju"
        subtitle="Zobacz, w jakiej dzielnicy naszej społeczności odnajdziesz swoje miejsce"
        ctaText="Dołącz do społeczności"
        ctaLink="#community-districts"
        backgroundImage="/lovable-uploads/5eb2feb4-928a-4b2b-baea-129edbb57b25.png"
        imageDescription="Cyfrowe miasto społeczności SIADLAXITY"
      />
      
      {/* Intro Section */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl mb-8 text-deep-charcoal dark:text-silver-mist">
              Hej 👋
            </p>
            <p className="text-lg mb-8 text-deep-charcoal dark:text-silver-mist">
              Wiesz, co łączy najbardziej skutecznych ludzi? To nie kolejna aplikacja do zarządzania czasem czy poranne wstawanie o 5:00. To <strong>otoczenie</strong> - społeczność osób, które ciągną Cię w górę, nawet gdy na moment tracisz energię.
            </p>
          </div>
        </div>
      </section>
      
      {/* Community Districts Section */}
      <section id="community-districts" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              🏙️ Dzielnice Naszego Miasta
            </h2>
            <p className="text-lg text-subtle-slate dark:text-silver-mist/80 max-w-3xl mx-auto">
              W naszej cyfrowej przestrzeni każda dzielnica ma swój unikalny charakter i mieszkańców. Zobacz, która z nich będzie Twoim nowym domem:
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Community districts as program-style cards */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-deep-space/60 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-luminal-magenta/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">🌱 ODKRYWCY</h3>
                <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
                  Dołącz bezpłatnie
                </p>
                <div className="mb-6 flex-grow">
                  <p className="mb-4 font-medium text-deep-charcoal dark:text-silver-mist">
                    <strong>Dla kogo?</strong> Dla wszystkich, którzy rozpoczynają świadomą podróż ku lepszej wersji siebie.
                  </p>
                  <p className="mb-2 text-deep-charcoal dark:text-silver-mist">
                    <strong>Co otrzymujesz?</strong>
                  </p>
                  <ul className="space-y-2">
                    {['Dostęp do regularnych **Silent Coworków** - przestrzeni, gdzie wszyscy pracują w skupieniu', 
                      'Cotygodniowe **sesje medytacyjne na żywo** - buduj praktykę mindfulness w grupie', 
                      '**Inspirujące cytaty** i fragmenty wartościowych treści',
                      'Możliwość korzystania z **trackerów nawyków** i postępów',
                      'Szansę na **podglądanie mistrzów w akcji** - osób, które już przeszły drogę, którą Ty zaczynasz'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                        <span className="text-subtle-slate dark:text-silver-mist/80" 
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="#join-community" 
                  className="block w-full py-3 px-4 bg-neural-violet hover:bg-neural-violet/80 dark:bg-luminal-magenta dark:hover:bg-luminal-magenta/80 text-white text-center rounded-md transition-colors mt-auto"
                >
                  Dołącz jako Odkrywca
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-deep-space/60 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-luminal-magenta/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">🌍 EXPLORERS</h3>
                <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
                  Join for free
                </p>
                <div className="mb-6 flex-grow">
                  <p className="mb-4 font-medium text-deep-charcoal dark:text-silver-mist">
                    <strong>Who is for?</strong> For international growth-seekers and those who prefer English communication.
                  </p>
                  <p className="mb-2 text-deep-charcoal dark:text-silver-mist">
                    <strong>What do you get?</strong>
                  </p>
                  <ul className="space-y-2">
                    {['All benefits of the Polish Odkrywcy district', 
                      'Chance to connect with international productivity enthusiasts', 
                      'Occasional English-language events and resources'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                        <span className="text-subtle-slate dark:text-silver-mist/80" 
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="#join-community" 
                  className="block w-full py-3 px-4 bg-neural-violet hover:bg-neural-violet/80 dark:bg-luminal-magenta dark:hover:bg-luminal-magenta/80 text-white text-center rounded-md transition-colors mt-auto"
                >
                  Join as Explorer
                </Link>
              </div>
            </div>
            
            {/* Highlighted Lifehackerzy card with glow effect */}
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-deep-space/60 shadow-lg transition-all hover:shadow-xl animate-pulse-subtle">
              <div className="absolute inset-0 bg-gradient-to-r from-neural-violet/20 to-ascension-pink/30 dark:from-neural-violet/40 dark:to-luminal-magenta/40 opacity-80 group-hover:opacity-100 transition-opacity"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-neural-violet to-ascension-pink rounded-xl blur-md opacity-50 group-hover:opacity-75 transition-opacity animate-glow"></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full border-2 border-neural-violet/50 dark:border-luminal-magenta/50 rounded-xl bg-white/80 dark:bg-deep-space/80 z-10">
                <div className="w-12 h-12 bg-neural-violet/20 dark:bg-neural-violet/40 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <div className="absolute top-3 right-3 bg-neural-violet/20 dark:bg-neural-violet/40 px-2 py-1 rounded-full">
                  <span className="text-xs font-bold text-neural-violet dark:text-luminal-magenta">Absolutnie Najlepszy Wybór</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">⚡ LIFEHACKERZY</h3>
                <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
                  Ekskluzywna społeczność moich Klientów
                </p>
                <div className="mb-6 flex-grow">
                  <p className="mb-4 font-medium text-deep-charcoal dark:text-silver-mist">
                    <strong>Dla kogo?</strong> WYŁCZĄNIE la absolwentów moich programów rozwojowych - osób, które zdecydowały się zainwestować w siebie.
                  </p>
                  <p className="mb-2 text-deep-charcoal dark:text-silver-mist">
                    <strong>Co otrzymujesz?</strong>
                  </p>
                  <ul className="space-y-2">
                    {['Wszystko z poziomu Odkrywcy PLUS:',
                      'Dostęp do **codziennych spotkań o 12:34** - rytm, który buduje fundamenty codziennego rozwoju',
                      'Dedykowane **kanały tematyczne** dla pogłębionej dyskusji',
                      'Możliwość uczestnictwa w **ekskluzywnych warsztatach** i webinarach',
                      '**Społeczność ludzi**, którzy są na podobnym etapie transformacji życiowej',
                      'Regularne **Q&A z Ludwikiem**'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                        <span className="text-subtle-slate dark:text-silver-mist/80" 
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="/courses" 
                  className="block w-full py-3 px-4 bg-gradient-to-r from-neural-violet to-ascension-pink hover:from-neural-violet/90 hover:to-ascension-pink/90 dark:from-neural-violet dark:to-luminal-magenta dark:hover:from-neural-violet/90 dark:hover:to-luminal-magenta/90 text-white text-center rounded-md transition-colors mt-auto shadow-md shadow-neural-violet/30 dark:shadow-luminal-magenta/30"
                >
                  Sprawdź nasze kursy
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-deep-space/60 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-luminal-magenta/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                  <Diamond className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">💎 NFT (Nasze Fenomenalne Towarzystwo)</h3>
                <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
                  Dla najbardziej zaangażowanych
                </p>
                <div className="mb-6 flex-grow">
                  <p className="mb-4 font-medium text-deep-charcoal dark:text-silver-mist">
                    <strong>Dla kogo?</strong> Dla najbardziej zaangażowanych członków społeczności, którzy zdecydowali się na dożywotni dostęp do wszystkich moich materiałów.
                  </p>
                  <p className="mb-2 text-deep-charcoal dark:text-silver-mist">
                    <strong>Co otrzymujesz?</strong>
                  </p>
                  <ul className="space-y-2">
                    {['Wszystko z poprzednich poziomów PLUS:',
                      '**Priorytetowy dostęp** do nowych programów i materiałów',
                      'Możliwość **bezpośredniego wpływu** na kierunek rozwoju społeczności',
                      'Regularne **sesje mastermind** w małych grupach',
                      '**Mentoringowe wsparcie** w kluczowych momentach Twojej drogi'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                        <span className="text-subtle-slate dark:text-silver-mist/80" 
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 px-4 bg-neural-violet hover:bg-neural-violet/80 dark:bg-luminal-magenta dark:hover:bg-luminal-magenta/80 text-white text-center rounded-md transition-colors mt-auto"
                >
                  Dostęp tylko na zaproszenie 🔒
                </Link>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-deep-space/60 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-luminal-magenta/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">PATRONI FUNDACJI HACKERZY.PL</h3>
                <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
                  Dla wspierających naszą misję
                </p>
                <div className="mb-6 flex-grow">
                  <p className="mb-4 font-medium text-deep-charcoal dark:text-silver-mist">
                    <strong>Dla kogo?</strong> Dla osób, które chcą wspierać misję szerszego udostępniania wartościowej wiedzy.
                  </p>
                  <p className="mb-2 text-deep-charcoal dark:text-silver-mist">
                    <strong>Co otrzymujesz?</strong>
                  </p>
                  <ul className="space-y-2">
                    {['Satysfakcję z **wspierania ważnej misji**',
                      'Specjalne **podziękowania i uznanie** w społeczności',
                      'Dostęp do **ekskluzywnych treści** dla Patronów',
                      'Możliwość **współtworzenia inicjatyw** Fundacji'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                        <span className="text-subtle-slate dark:text-silver-mist/80" 
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <a 
                  href="https://patronite.pl/hackerzy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full py-3 px-4 bg-neural-violet hover:bg-neural-violet/80 dark:bg-luminal-magenta dark:hover:bg-luminal-magenta/80 text-white text-center rounded-md transition-colors mt-auto"
                >
                  Zostań Patronem Fundacji
                </a>
              </div>
            </div>
            
            <div className="group relative overflow-hidden rounded-xl bg-white dark:bg-deep-space/60 shadow-lg transition-all hover:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-neural-violet/10 to-ascension-pink/10 dark:from-neural-violet/20 dark:to-luminal-magenta/20 opacity-70 group-hover:opacity-90 transition-opacity"></div>
              <div className="relative p-6 md:p-8 flex flex-col h-full">
                <div className="w-12 h-12 bg-neural-violet/10 dark:bg-neural-violet/30 rounded-full flex items-center justify-center mb-4">
                  <Compass className="h-6 w-6 text-neural-violet dark:text-luminal-magenta" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-2 text-deep-charcoal dark:text-silver-mist">🧭 MĘSKI KOMPAS</h3>
                <p className="text-subtle-slate dark:text-silver-mist/70 mb-4">
                  Dla mężczyzn szukających autentycznej przestrzeni
                </p>
                <div className="mb-6 flex-grow">
                  <p className="mb-4 font-medium text-deep-charcoal dark:text-silver-mist">
                    <strong>Dla kogo?</strong> Dla mężczyzn szukających autentycznej przestrzeni do rozmów o współczesnej męskości.
                  </p>
                  <p className="mb-2 text-deep-charcoal dark:text-silver-mist">
                    <strong>Co otrzymujesz?</strong>
                  </p>
                  <ul className="space-y-2">
                    {['Przestrzeń do **głębokich, męskich rozmów**',
                      'Wsparcie w budowaniu **własnego kodeksu**',
                      'Możliwość uczestnictwa w **cyklicznych spotkaniach**',
                      'Społeczność braci, którzy **rozumieją Twoje wyzwania**'].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-5 w-5 mr-2 text-neural-violet dark:text-luminal-magenta flex-shrink-0 mt-0.5" />
                        <span className="text-subtle-slate dark:text-silver-mist/80" 
                              dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to="/contact" 
                  className="block w-full py-3 px-4 bg-neural-violet hover:bg-neural-violet/80 dark:bg-luminal-magenta dark:hover:bg-luminal-magenta/80 text-white text-center rounded-md transition-colors mt-auto"
                >
                  Dowiedz się więcej (wkrótce)
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Journey Section */}
      <section className="py-16 bg-secondary/30 dark:bg-quantum-blue/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              🚇 Twoja Podróż w Społeczności
            </h2>
            <p className="text-lg text-subtle-slate dark:text-silver-mist/80 max-w-3xl mx-auto mb-12">
              Każdy z nas przechodzi podobną transformację, niezależnie od punktu startowego.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto relative">
            {/* Connecting line between journey points */}
            <div className="hidden lg:block absolute h-1 bg-gradient-to-r from-neural-violet to-ascension-pink top-1/2 left-[15%] right-[15%] -translate-y-1/2 z-0"></div>
            
            {/* Journey Points */}
            {[
              {
                icon: <MapPin className="h-6 w-6" />,
                title: "Przystanek Zwątpienia",
                description: "Gdzie konfrontujesz swoje lęki i wątpliwości"
              },
              {
                icon: <Users className="h-6 w-6" />,
                title: "Centrum Lifehackerów",
                description: "Gdzie znajdujesz inspirację i połączenia"
              },
              {
                icon: <Award className="h-6 w-6" />,
                title: "Hakowanie Produktywności",
                description: "Gdzie rozwijasz mistrzowskie flow"
              },
              {
                icon: <Heart className="h-6 w-6" />,
                title: "Ogród Uważnego Życia",
                description: "Gdzie cieszysz się wolnością spełnionego życia"
              }
            ].map((point, index) => (
              <div key={index} className="z-10 flex flex-col items-center">
                <div className="w-14 h-14 bg-neural-violet dark:bg-luminal-magenta text-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                  {point.icon}
                </div>
                <h3 className="text-lg font-semibold text-deep-charcoal dark:text-silver-mist mb-2 text-center">
                  {point.title}
                </h3>
                <p className="text-subtle-slate dark:text-silver-mist/80 text-center">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Join Section */}
      <section id="join-community" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-deep-charcoal dark:text-silver-mist">
              ✨ Dlaczego warto dołączyć wczoraj? (A jeśli nie wczoraj, to przynajmniej dzisiaj)
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="order-2 lg:order-1">
              <ValueProposition
                title="Nawet jako Odkrywca, otrzymujesz dostęp do potężnych narzędzi transformacji:"
                items={[
                  "Obserwujesz, jak działają osoby, które są kilka kroków przed Tobą",
                  "Przełamujesz cykl prokrastynacji dzięki regularnym Silent Coworkom",
                  "Budujesz fundamenty skupienia przez praktykę mindfulness",
                  "Otaczasz się ludźmi, którzy podnoszą poprzeczkę"
                ]}
              />
              
              <div className="bg-neural-violet/10 dark:bg-luminal-magenta/20 p-6 rounded-lg mt-8">
                <p className="text-lg text-deep-charcoal dark:text-silver-mist font-medium">
                  Czy wiesz, że <strong>94% uczestników</strong> pyta "Dlaczego nikt mi nie powiedział, aby dołączyć wcześniej 😭?"?
                </p>
              </div>
              
              <div className="mt-8 text-center">
                <Link to="/contact?subject=Dołączenie do społeczności">
                  <Button 
                    variant="default" 
                    size="lg"
                  >
                    Dołącz do SIADLAXITY TERAZ
                  </Button>
                </Link>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="bg-secondary/50 dark:bg-quantum-blue/30 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-deep-charcoal dark:text-silver-mist mb-4">
                  Co mówią uczestnicy?
                </h3>
                
                <div className="space-y-6">
                  <div className="bg-white dark:bg-deep-space p-4 rounded-lg">
                    <p className="italic text-subtle-slate dark:text-silver-mist/90 mb-3">
                      "Przez lata szukałem społeczności, która nie tylko inspiruje, ale faktycznie tworzy przestrzeń do zmiany. Siadlaxity to najlepsza inwestycja w mój rozwój od lat."
                    </p>
                    <p className="text-right text-deep-charcoal dark:text-silver-mist font-medium">
                      — Marcin K., Programista
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-deep-space p-4 rounded-lg">
                    <p className="italic text-subtle-slate dark:text-silver-mist/90 mb-3">
                      "Silent Coworki zmieniły moje podejście do pracy. Świadomość, że inni też pracują w skupieniu obok mnie online, daje mi strukturę, której zawsze brakowało w mojej pracy zdalnej."
                    </p>
                    <p className="text-right text-deep-charcoal dark:text-silver-mist font-medium">
                      — Anna W., Graficzka
                    </p>
                  </div>
                  
                  <div className="bg-white dark:bg-deep-space p-4 rounded-lg">
                    <p className="italic text-subtle-slate dark:text-silver-mist/90 mb-3">
                      "Moja produktywność wzrosła o 40% w ciągu 3 miesięcy od dołączenia. To nie tylko techniki, ale przede wszystkim energia ludzi, którzy naprawdę chcą się rozwijać."
                    </p>
                    <p className="text-right text-deep-charcoal dark:text-silver-mist font-medium">
                      — Tomasz L., Manager
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="max-w-3xl mx-auto mt-16 bg-secondary/20 dark:bg-deep-space/50 p-6 rounded-lg">
            <p className="text-lg text-subtle-slate dark:text-silver-mist/90 italic">
              P.S. Nie musisz od razu dołączać do Lifehackerów. Zacznij jako Odkrywca, poczuj energię społeczności i zdecyduj, czy to miejsce jest dla Ciebie. Drzwi są otwarte - i uwierz mi, nawet przedsionek tej cyfrowej metropolii jest wart Twojego czasu.
            </p>
            <p className="text-right text-deep-charcoal dark:text-silver-mist mt-4 font-medium">
              — Ludwik
            </p>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <CTASection
        title="Gotowy na dołączenie do naszej społeczności?"
        description="Odkryj moc wspólnego wzrostu razem z osobami dążącymi do rozwoju. Pierwszy krok to zawsze najtrudniejszy - ale czeka na Ciebie społeczność gotowa Cię przyjąć."
        buttonText="Dołącz do SIADLAXITY"
        buttonLink="/contact?subject=Dołączenie do społeczności"
      />
      
      <PersonaSection 
        title="Dla kogo jest nasza społeczność?"
        personas={[
          {
            title: "Profesjonaliści szukający rozwoju",
            description: "Osoby z doświadczeniem zawodowym, które chcą przejść na wyższy poziom produktywności i spełnienia.",
            icon: <Users size={24} />
          },
          {
            title: "Samodzielni przedsiębiorcy",
            description: "Freelancerzy i właściciele firm, którzy chcą połączyć swoje wysiłki z podobnie myślącymi liderami.",
            icon: <Award size={24} />
          },
          {
            title: "Poszukujący równowagi",
            description: "Osoby, które chcą pogodzić wysokie ambicje z wewnętrznym spokojem i zdrowym stylem życia.",
            icon: <Heart size={24} />
          }
        ]}
        callout="Bez względu na to, jaki masz cel - nasza społeczność pomoże Ci go osiągnąć szybciej i bardziej efektywnie niż w pojedynkę."
        ctaText="Dołącz już dziś"
        ctaLink="/contact?subject=Dołączenie do społeczności"
      />
    </Layout>
  );
}
