import { Brain, Zap, Target, TrendingUp, Award, BookOpen, Users, Lightbulb, CheckCircle2, ArrowRight, Star, Sparkles, Trophy, Rocket, Shield, Heart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function SilnaGlowa() {
  return (
    <div className="min-h-screen bg-diamond">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-depth via-electric to-depth py-24">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utb3BhY2l0eT0iLjA1IiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20"></div>
        
        <div className="container-custom relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric/20 border border-electric/30 mb-8">
              <Brain className="w-5 h-5 text-electric" />
              <span className="text-sm font-medium text-diamond">Program Rozwoju Mentalnego</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-diamond mb-6">
              Silna Głowa
            </h1>
            
            <p className="text-xl md:text-2xl text-diamond/90 mb-8 leading-relaxed">
              Zbuduj niezniszczalną mentalność, która pozwoli Ci osiągać cele
              i radzić sobie z każdym wyzwaniem
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/zapisz-sie"
                className="btn-primary text-lg px-8 py-4 group"
              >
                Dołącz do Programu
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="#program"
                className="btn-secondary text-lg px-8 py-4"
              >
                Zobacz Program
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Users, label: '500+ uczestników', value: '500+' },
                { icon: Star, label: 'Ocena 4.9/5', value: '4.9/5' },
                { icon: Trophy, label: '12 tygodni', value: '12 tyg.' },
                { icon: Rocket, label: '100% online', value: 'Online' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-electric mx-auto mb-2" />
                  <div className="text-2xl font-bold text-diamond mb-1">{stat.value}</div>
                  <div className="text-sm text-diamond/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="section-padding bg-diamond">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-on-light mb-6">
                Czy to brzmi znajomo?
              </h2>
              <p className="text-xl text-on-light/70">
                Większość ludzi zmaga się z tymi wyzwaniami mentalnym
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: 'Prokrastynacja i brak motywacji',
                  description: 'Odkładasz ważne zadania na później, tracisz zapał do działania i nie możesz się zmobilizować do pracy nad celami.'
                },
                {
                  title: 'Stres i przytłoczenie',
                  description: 'Czujesz się przytłoczony ilością obowiązków, stres paraliżuje Cię i nie pozwala myśleć jasno.'
                },
                {
                  title: 'Brak pewności siebie',
                  description: 'Wątpisz w swoje możliwości, boisz się porażki i nie podejmujesz działań, które mogłyby zmienić Twoje życie.'
                },
                {
                  title: 'Negatywne myślenie',
                  description: 'Skupiasz się na problemach zamiast rozwiązaniach, widzisz przeszkody zamiast możliwości.'
                },
                {
                  title: 'Brak wytrwałości',
                  description: 'Zaczynasz z entuzjazmem, ale szybko się poddajesz gdy napotykasz pierwsze trudności.'
                },
                {
                  title: 'Słaba koncentracja',
                  description: 'Nie możesz się skupić na jednej rzeczy, ciągle się rozpraszasz i tracisz czas na nieistotne sprawy.'
                }
              ].map((problem, index) => (
                <div key={index} className="card-elevated p-6 border-l-4 border-electric">
                  <h3 className="text-xl font-bold text-on-light mb-3">{problem.title}</h3>
                  <p className="text-on-light/70">{problem.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-gradient-to-br from-electric/10 to-depth/10 rounded-2xl border border-electric/20">
              <p className="text-lg text-on-light/80 text-center leading-relaxed">
                <strong className="text-on-light">Prawda jest taka:</strong> Twoja mentalność to fundament sukcesu w każdej dziedzinie życia.
                Bez silnej głowy, nawet najlepsze strategie i narzędzia nie przyniosą rezultatów.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="section-padding bg-gradient-to-br from-depth via-electric to-depth">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-diamond mb-6">
              Rozwiązanie: Silna Głowa
            </h2>
            <p className="text-xl text-diamond/90 leading-relaxed">
              12-tygodniowy program, który nauczy Cię budować niezniszczalną mentalność,
              radzić sobie ze stresem i osiągać cele, które wydawały się niemożliwe.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Brain,
                title: 'Psychologia Sukcesu',
                description: 'Poznaj sprawdzone techniki z psychologii pozytywnej, neurobiologii i coachingu mentalnego.'
              },
              {
                icon: Target,
                title: 'Praktyczne Ćwiczenia',
                description: 'Codzienne zadania i wyzwania, które wzmocnią Twoją mentalność i wytrwałość.'
              },
              {
                icon: Users,
                title: 'Wsparcie Społeczności',
                description: 'Dołącz do grupy zmotywowanych osób, które wspierają się nawzajem w rozwoju.'
              }
            ].map((feature, index) => (
              <div key={index} className="card-elevated bg-diamond/95 backdrop-blur-sm p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-electric to-depth rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-diamond" />
                </div>
                <h3 className="text-xl font-bold text-on-light mb-4">{feature.title}</h3>
                <p className="text-on-light/70">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Details */}
      <section id="program" className="section-padding bg-diamond">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-on-light mb-6">
                Co Zyskasz w Programie?
              </h2>
              <p className="text-xl text-on-light/70">
                12 tygodni intensywnej transformacji mentalnej
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  week: 'Tydzień 1-2',
                  title: 'Fundamenty Silnej Mentalności',
                  topics: [
                    'Zrozumienie swojego umysłu i emocji',
                    'Identyfikacja ograniczających przekonań',
                    'Budowanie świadomości własnych myśli',
                    'Techniki mindfulness i medytacji'
                  ]
                },
                {
                  week: 'Tydzień 3-4',
                  title: 'Zarządzanie Stresem i Emocjami',
                  topics: [
                    'Skuteczne techniki radzenia sobie ze stresem',
                    'Regulacja emocji w trudnych sytuacjach',
                    'Budowanie odporności psychicznej',
                    'Praktyki relaksacyjne i oddechowe'
                  ]
                },
                {
                  week: 'Tydzień 5-6',
                  title: 'Pewność Siebie i Asertywność',
                  topics: [
                    'Budowanie zdrowej pewności siebie',
                    'Asertywna komunikacja',
                    'Przezwyciężanie strachu przed porażką',
                    'Wzmacnianie poczucia własnej wartości'
                  ]
                },
                {
                  week: 'Tydzień 7-8',
                  title: 'Motywacja i Wytrwałość',
                  topics: [
                    'Znajdowanie wewnętrznej motywacji',
                    'Budowanie nawyków sukcesu',
                    'Radzenie sobie z przeszkodami',
                    'Techniki utrzymania długoterminowej motywacji'
                  ]
                },
                {
                  week: 'Tydzień 9-10',
                  title: 'Pozytywne Myślenie i Optymizm',
                  topics: [
                    'Przeprogramowanie negatywnych wzorców myślowych',
                    'Praktyki wdzięczności i afirmacji',
                    'Wizualizacja i pozytywne scenariusze',
                    'Budowanie optymistycznego nastawienia'
                  ]
                },
                {
                  week: 'Tydzień 11-12',
                  title: 'Integracja i Utrzymanie Zmian',
                  topics: [
                    'Stworzenie osobistego planu rozwoju mentalnego',
                    'Techniki utrzymania silnej mentalności',
                    'Radzenie sobie z nawrotami starych wzorców',
                    'Planowanie dalszego rozwoju'
                  ]
                }
              ].map((module, index) => (
                <div key={index} className="card-elevated p-8 border-l-4 border-electric">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-xl flex items-center justify-center flex-shrink-0">
                      <span className="text-diamond font-bold">{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-electric mb-1">{module.week}</div>
                      <h3 className="text-2xl font-bold text-on-light">{module.title}</h3>
                    </div>
                  </div>
                  <ul className="space-y-3 ml-16">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-electric flex-shrink-0 mt-0.5" />
                        <span className="text-on-light/80">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-br from-depth via-electric to-depth">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-diamond mb-6">
                Korzyści z Programu
              </h2>
              <p className="text-xl text-diamond/90">
                Co zmieni się w Twoim życiu po ukończeniu programu?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: Brain,
                  title: 'Silniejsza Mentalność',
                  description: 'Zbudujesz niezniszczalną mentalność, która pozwoli Ci radzić sobie z każdym wyzwaniem.'
                },
                {
                  icon: Shield,
                  title: 'Odporność na Stres',
                  description: 'Nauczysz się skutecznie zarządzać stresem i nie pozwolisz, by paraliżował Twoje działania.'
                },
                {
                  icon: Target,
                  title: 'Większa Pewność Siebie',
                  description: 'Uwierzysz w swoje możliwości i przestaniesz się bać podejmowania wyzwań.'
                },
                {
                  icon: Zap,
                  title: 'Więcej Energii i Motywacji',
                  description: 'Znajdziesz wewnętrzne źródło motywacji, które będzie napędzać Cię do działania.'
                },
                {
                  icon: TrendingUp,
                  title: 'Lepsze Wyniki',
                  description: 'Osiągniesz cele, które wcześniej wydawały się niemożliwe do zrealizowania.'
                },
                {
                  icon: Heart,
                  title: 'Większe Zadowolenie z Życia',
                  description: 'Poczujesz się szczęśliwszy, bardziej spełniony i zadowolony z życia.'
                },
                {
                  icon: Lightbulb,
                  title: 'Pozytywne Myślenie',
                  description: 'Zmienisz sposób myślenia z negatywnego na pozytywny i konstruktywny.'
                },
                {
                  icon: Rocket,
                  title: 'Większa Wytrwałość',
                  description: 'Nie będziesz się poddawać przy pierwszych trudnościach, ale wytrwale dążyć do celu.'
                }
              ].map((benefit, index) => (
                <div key={index} className="card-elevated bg-diamond/95 backdrop-blur-sm p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-xl flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-diamond" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-on-light mb-2">{benefit.title}</h3>
                      <p className="text-on-light/70">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-diamond">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-on-light mb-6">
                Jak Działa Program?
              </h2>
              <p className="text-xl text-on-light/70">
                Prosty, sprawdzony proces transformacji mentalnej
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: '1',
                  title: 'Zapisz się do programu',
                  description: 'Wypełnij formularz zgłoszeniowy i otrzymaj natychmiastowy dostęp do platformy oraz pierwszego modułu.'
                },
                {
                  step: '2',
                  title: 'Realizuj cotygodniowe moduły',
                  description: 'Każdego tygodnia otrzymujesz nowy moduł z lekcjami wideo, materiałami do pobrania i praktycznymi ćwiczeniami.'
                },
                {
                  step: '3',
                  title: 'Wykonuj codzienne zadania',
                  description: 'Praktykuj techniki i ćwiczenia mentalne, które stopniowo wzmocnią Twoją mentalność i odporność.'
                },
                {
                  step: '4',
                  title: 'Korzystaj ze wsparcia społeczności',
                  description: 'Dziel się swoimi postępami, zadawaj pytania i wspieraj innych uczestników w prywatnej grupie.'
                },
                {
                  step: '5',
                  title: 'Obserwuj swoją transformację',
                  description: 'Śledź swoje postępy, celebruj małe zwycięstwa i ciesz się rosnącą siłą mentalną.'
                }
              ].map((step, index) => (
                <div key={index} className="flex gap-6 items-start">
                  <div className="w-16 h-16 bg-gradient-to-br from-electric to-depth rounded-2xl flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-diamond">{step.step}</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-on-light mb-3">{step.title}</h3>
                    <p className="text-lg text-on-light/70">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-gradient-to-br from-depth via-electric to-depth">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-diamond mb-6">
                Co Zawiera Program?
              </h2>
              <p className="text-xl text-diamond/90">
                Wszystko, czego potrzebujesz do transformacji mentalnej
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  icon: BookOpen,
                  title: '12 Modułów Szkoleniowych',
                  description: 'Kompleksowe lekcje wideo z psychologii, neurobiologii i coachingu mentalnego.',
                  value: 'Wartość: 997 zł'
                },
                {
                  icon: Target,
                  title: 'Praktyczne Ćwiczenia',
                  description: 'Codzienne zadania i wyzwania mentalne do wykonania.',
                  value: 'Wartość: 497 zł'
                },
                {
                  icon: Users,
                  title: 'Prywatna Grupa Wsparcia',
                  description: 'Dostęp do społeczności zmotywowanych uczestników.',
                  value: 'Wartość: 397 zł'
                },
                {
                  icon: BookOpen,
                  title: 'Materiały do Pobrania',
                  description: 'Workbooki, checklisty, szablony i narzędzia mentalne.',
                  value: 'Wartość: 297 zł'
                },
                {
                  icon: Lightbulb,
                  title: 'Techniki Medytacji',
                  description: 'Nagrania audio z prowadzonymi medytacjami i praktykami mindfulness.',
                  value: 'Wartość: 197 zł'
                },
                {
                  icon: Award,
                  title: 'Certyfikat Ukończenia',
                  description: 'Oficjalny certyfikat po ukończeniu programu.',
                  value: 'Wartość: 97 zł'
                },
                {
                  icon: Clock,
                  title: 'Dożywotni Dostęp',
                  description: 'Nieograniczony dostęp do wszystkich materiałów programu.',
                  value: 'Wartość: 497 zł'
                },
                {
                  icon: Sparkles,
                  title: 'Bonusy Specjalne',
                  description: 'Dodatkowe materiały, webinary i narzędzia rozwojowe.',
                  value: 'Wartość: 397 zł'
                }
              ].map((item, index) => (
                <div key={index} className="card-elevated bg-diamond/95 backdrop-blur-sm p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-electric to-depth rounded-xl flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-diamond" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-on-light mb-2">{item.title}</h3>
                      <p className="text-on-light/70 mb-2">{item.description}</p>
                      <p className="text-sm font-medium text-electric">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 bg-diamond/95 backdrop-blur-sm rounded-2xl border-2 border-electric">
              <div className="text-center">
                <p className="text-lg text-on-light/70 mb-2">Łączna wartość:</p>
                <p className="text-4xl font-bold text-on-light mb-4 line-through">3,376 zł</p>
                <p className="text-lg text-on-light/70 mb-2">Twoja cena:</p>
                <p className="text-5xl font-bold text-electric mb-6">997 zł</p>
                <p className="text-on-light/70">Oszczędzasz: 2,379 zł (70%)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-diamond">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-on-light mb-6">
                Co Mówią Uczestnicy?
              </h2>
              <p className="text-xl text-on-light/70">
                Prawdziwe historie transformacji mentalnej
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  name: 'Anna Kowalska',
                  role: 'Przedsiębiorca',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
                  content: 'Program "Silna Głowa" całkowicie zmienił moje podejście do wyzwań. Nauczyłam się radzić sobie ze stresem i nie poddawać się przy pierwszych trudnościach. Moja pewność siebie wzrosła o 200%!',
                  rating: 5
                },
                {
                  name: 'Piotr Nowak',
                  role: 'Manager',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
                  content: 'Wreszcie znalazłem program, który naprawdę działa. Techniki mentalne, których się nauczyłem, stosuję codziennie. Czuję się silniejszy, bardziej zmotywowany i gotowy na każde wyzwanie.',
                  rating: 5
                },
                {
                  name: 'Magdalena Wiśniewska',
                  role: 'Freelancer',
                  image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
                  content: 'Zmagałam się z prokrastynacją i brakiem motywacji. Po programie wszystko się zmieniło. Mam jasny umysł, silną wolę i osiągam cele, które wcześniej wydawały się niemożliwe.',
                  rating: 5
                },
                {
                  name: 'Tomasz Kamiński',
                  role: 'Student',
                  image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
                  content: 'Najlepsza inwestycja w siebie, jaką kiedykolwiek zrobiłem. Program nauczył mnie, jak budować silną mentalność i nie poddawać się. Polecam każdemu, kto chce osiągnąć więcej w życiu!',
                  rating: 5
                }
              ].map((testimonial, index) => (
                <div key={index} className="card-elevated p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-on-light">{testimonial.name}</h4>
                      <p className="text-sm text-on-light/60">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-electric text-electric" />
                    ))}
                  </div>
                  <p className="text-on-light/80 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-gradient-to-br from-depth via-electric to-depth">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-diamond mb-6">
                Najczęściej Zadawane Pytania
              </h2>
            </div>

            <div className="space-y-6">
              {[
                {
                  question: 'Czy program jest odpowiedni dla początkujących?',
                  answer: 'Tak! Program jest zaprojektowany tak, aby był dostępny dla każdego, niezależnie od poziomu doświadczenia. Zaczynamy od podstaw i stopniowo przechodzimy do bardziej zaawansowanych technik.'
                },
                {
                  question: 'Ile czasu dziennie muszę poświęcić na program?',
                  answer: 'Zalecamy poświęcenie 30-60 minut dziennie na naukę i praktykę. Możesz jednak dostosować tempo do swoich możliwości - materiały są dostępne 24/7.'
                },
                {
                  question: 'Czy otrzymam certyfikat po ukończeniu?',
                  answer: 'Tak, po ukończeniu wszystkich modułów i zadań otrzymasz oficjalny certyfikat ukończenia programu "Silna Głowa".'
                },
                {
                  question: 'Jak długo mam dostęp do materiałów?',
                  answer: 'Otrzymujesz dożywotni dostęp do wszystkich materiałów programu. Możesz wracać do nich w dowolnym momencie i odświeżać swoją wiedzę.'
                },
                {
                  question: 'Czy mogę otrzymać zwrot pieniędzy?',
                  answer: 'Tak, oferujemy 30-dniową gwarancję satysfakcji. Jeśli program nie spełni Twoich oczekiwań, zwrócimy Ci 100% wpłaconej kwoty.'
                },
                {
                  question: 'Czy program wymaga specjalnego sprzętu?',
                  answer: 'Nie, potrzebujesz tylko komputera, tabletu lub smartfona z dostępem do internetu. Wszystkie materiały są dostępne online.'
                }
              ].map((faq, index) => (
                <div key={index} className="card-elevated bg-diamond/95 backdrop-blur-sm p-6">
                  <h3 className="text-xl font-bold text-on-light mb-3">{faq.question}</h3>
                  <p className="text-on-light/70">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-diamond">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="card-elevated p-12 text-center bg-gradient-to-br from-depth via-electric to-depth">
              <h2 className="text-4xl md:text-5xl font-bold text-diamond mb-6">
                Gotowy na Transformację Mentalną?
              </h2>
              <p className="text-xl text-diamond/90 mb-8 max-w-2xl mx-auto">
                Dołącz do programu "Silna Głowa" i zbuduj niezniszczalną mentalność,
                która pozwoli Ci osiągnąć wszystko, czego pragniesz.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/zapisz-sie"
                  className="btn-primary text-lg px-8 py-4 group bg-diamond text-depth hover:bg-diamond/90"
                >
                  Zapisz się Teraz
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              <div className="flex flex-wrap justify-center gap-6 text-diamond/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric" />
                  <span>30-dniowa gwarancja</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric" />
                  <span>Dożywotni dostęp</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-electric" />
                  <span>Wsparcie społeczności</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
