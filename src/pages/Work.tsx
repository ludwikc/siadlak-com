
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Target, Users, Zap } from 'lucide-react';

export default function Work() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            
            {/* Main Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-deep-charcoal mb-6 leading-tight">
                Osiągnąłeś sukces. Dlaczego czujesz, że to nie wystarcza?
              </h1>
              <p className="text-xl md:text-2xl text-subtle-slate max-w-4xl mx-auto leading-relaxed">
                Głęboki proces transformacyjny dla liderów, founderów i freelancerów z warszawskiego IT, 
                którzy utknęli na szczycie i szukają czegoś więcej niż kolejny cel do osiągnięcia.
              </p>
            </div>
            
            {/* Problem Statement */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-8 text-center">
                Zbudowałeś karierę, firmę, reputację. Coś jednak nie działa.
              </h2>
              
              <div className="bg-white/50 rounded-xl p-8 border border-neural-violet/20 mb-8">
                <p className="text-lg text-subtle-slate mb-6 leading-relaxed">
                  Jeśli tu jesteś, to prawdopodobnie dlatego, że logika, która zaprowadziła Cię na szczyt, 
                  przestała rozwiązywać Twoje wewnętrzne problemy. Rozpoznajesz ten stan:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-neural-violet rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-deep-charcoal mb-2">Wewnętrzny konflikt:</h3>
                        <p className="text-subtle-slate">
                          Czujesz rozziew między rolą prezesa, lidera czy eksperta, a tym, kim jesteś naprawdę. 
                          Ta "maska" staje się coraz cięższa.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-neural-violet rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-deep-charcoal mb-2">Pętla analityczna:</h3>
                        <p className="text-subtle-slate">
                          Intelektualizujesz każdy problem. Twój umysł, największy atut w biznesie, 
                          stał się klatką, która blokuje realną zmianę i odczuwanie.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-neural-violet rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-deep-charcoal mb-2">Cynizm i wypalenie:</h3>
                        <p className="text-subtle-slate">
                          Pragmatyzm biznesu i presja wyników coraz częściej wygrywają z Twoimi wartościami. 
                          Tracisz energię i sens, który kiedyś Cię napędzał.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-3 h-3 bg-neural-violet rounded-full mt-2 mr-4 flex-shrink-0"></div>
                      <div>
                        <h3 className="font-semibold text-deep-charcoal mb-2">Poczucie fragmentacji:</h3>
                        <p className="text-subtle-slate">
                          Żonglujesz rolami – CEO, partner, rodzic, innowator – ale żadna z nich nie jest w pełni spójna z pozostałymi. 
                          Czujesz, jakbyś składał się z niepasujących do siebie części.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 rounded-xl p-6 border border-neural-violet/20">
                <p className="text-lg text-deep-charcoal font-medium text-center">
                  To nie jest kryzys, który można rozwiązać kolejną książką o produktywności czy urlopem. 
                  To sygnał, że Twój dotychczasowy system operacyjny wymaga fundamentalnej aktualizacji.
                </p>
              </div>
            </section>
            
            {/* Process Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-8 text-center">
                Mój proces to nie jest standardowy coaching.<br />
                To inżynieria Twojej wewnętrznej tożsamości.
              </h2>
              
              <div className="bg-white/50 rounded-xl p-8 border border-neural-violet/20 mb-8">
                <p className="text-lg text-subtle-slate mb-6 leading-relaxed">
                  Nie oferuję gotowych rozwiązań ani motywacyjnych frazesów. Pracuję z Twoim unikalnym systemem – 
                  inteligencją, mechanizmami obronnymi i wewnętrznymi konfliktami. Moja metoda to <strong>adaptacyjne podejście transformacyjne</strong>, 
                  które dopasowuje styl pracy do tego, czego naprawdę potrzebujesz.
                </p>
                
                <h3 className="text-xl font-semibold text-deep-charcoal mb-6">Jak to działa?</h3>
                <p className="text-lg text-subtle-slate mb-8">
                  Rozpoznaję Twój dominujący tryb działania i na tej podstawie dobieram jeden z dwóch protokołów interwencji:
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white/70 rounded-lg p-6 border border-neural-violet/30">
                    <h4 className="text-xl font-bold text-deep-charcoal mb-4 flex items-center">
                      <Target className="mr-3 text-neural-violet" size={24} />
                      Protokół A: Konfrontacja dla Analityków
                    </h4>
                    <p className="text-subtle-slate leading-relaxed">
                      Jeśli zbudowałeś wokół siebie mur obronny z intelektualizacji i cynizmu, potrzebujesz precyzyjnego przełamania. 
                      Stosuję <strong>ostre, bezpośrednie interwencje i pracę z symbolami</strong>, które omijają Twoje racjonalne filtry 
                      i uderzają w sedno problemu. To nie zawsze jest komfortowe, ale jest radykalnie skuteczne.
                    </p>
                  </div>
                  
                  <div className="bg-white/70 rounded-lg p-6 border border-neural-violet/30">
                    <h4 className="text-xl font-bold text-deep-charcoal mb-4 flex items-center">
                      <Users className="mr-3 text-neural-violet" size={24} />
                      Protokół B: Integracja dla Wizjonerów
                    </h4>
                    <p className="text-subtle-slate leading-relaxed">
                      Jeśli jesteś gotów na głęboką, partnerską eksplorację, prowadzę Cię przez proces za pomocą 
                      <strong> metafor systemowych i sokratejskich pytań</strong>. Budujemy bezpieczną przestrzeń, 
                      w której możesz zintegrować swoje "fragmenty" (np. "wewnętrznego CEO" i "autentycznego ja") w spójną, potężną całość.
                    </p>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-gradient-to-r from-ascension-pink/10 to-luminal-magenta/10 rounded-lg border border-ascension-pink/30">
                  <p className="text-lg text-deep-charcoal font-medium text-center">
                    W obu przypadkach celem jest to samo: nie eliminacja problematycznych części, ale ich <strong>integracja</strong>. 
                    Bo Twoja siła nie leży w wyborze między byciem skutecznym liderem a autentycznym człowiekiem. Leży w ich połączeniu.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Benefits Section */}
            <section className="mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-8 text-center">
                Co zyskasz? To więcej niż "lepsze samopoczucie".
              </h2>
              
              <p className="text-xl text-subtle-slate mb-8 text-center">
                To mierzalna zmiana w sposobie, w jaki działasz, myślisz i przewodzisz.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/50 rounded-xl p-6 border border-neural-violet/20">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="text-neural-violet mr-3 mt-1 flex-shrink-0" size={24} />
                    <h3 className="text-xl font-semibold text-deep-charcoal">
                      Zintegrowana Tożsamość Lidera
                    </h3>
                  </div>
                  <p className="text-subtle-slate">
                    Koniec z poczuciem rozdarcia. Połączysz swoją zawodową efektywność z wewnętrzną spójnością, 
                    co da Ci niespotykaną dotąd pewność siebie.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-xl p-6 border border-neural-violet/20">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="text-neural-violet mr-3 mt-1 flex-shrink-0" size={24} />
                    <h3 className="text-xl font-semibold text-deep-charcoal">
                      Autentyczne Przywództwo
                    </h3>
                  </div>
                  <p className="text-subtle-slate">
                    Będziesz podejmować decyzje w zgodzie z najgłębszymi wartościami, 
                    co w naturalny sposób przełoży się na zaangażowanie zespołu i lojalność klientów.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-xl p-6 border border-neural-violet/20">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="text-neural-violet mr-3 mt-1 flex-shrink-0" size={24} />
                    <h3 className="text-xl font-semibold text-deep-charcoal">
                      Klarowność i Spokój Wewnętrzny
                    </h3>
                  </div>
                  <p className="text-subtle-slate">
                    Zrozumiesz i "zaadoptujesz" swoje wewnętrzne części. Chaos zamieni się w źródło siły, 
                    a Ty odzyskasz kontrolę i spokój, nawet w warunkach ekstremalnej presji.
                  </p>
                </div>
                
                <div className="bg-white/50 rounded-xl p-6 border border-neural-violet/20">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="text-neural-violet mr-3 mt-1 flex-shrink-0" size={24} />
                    <h3 className="text-xl font-semibold text-deep-charcoal">
                      Trwała Odporność na Wypalenie
                    </h3>
                  </div>
                  <p className="text-subtle-slate">
                    Zbudujesz fundamenty emocjonalne i mentalne, które pozwolą Ci zarządzać złożonością współczesnego biznesu 
                    bez poświęcania swojego zdrowia i życia prywatnego.
                  </p>
                </div>
              </div>
            </section>
            
            {/* Final CTA */}
            <section className="bg-gradient-to-r from-neural-violet/10 via-ascension-pink/10 to-luminal-magenta/10 rounded-xl p-8 text-center border border-neural-violet/20">
              <h2 className="text-3xl md:text-4xl font-bold text-deep-charcoal mb-6">
                Nie jesteś skazany na ten wewnętrzny konflikt.
              </h2>
              <p className="text-xl text-subtle-slate mb-8 max-w-3xl mx-auto">
                Jeśli jesteś gotów na pracę, która jest równie wymagająca, co przynosząca fundamentalną zmianę – zrób pierwszy krok.
              </p>
              
              <div className="bg-white/70 rounded-lg p-6 mb-8 border border-neural-violet/30">
                <h3 className="text-2xl font-semibold text-deep-charcoal mb-4 flex items-center justify-center">
                  <Zap className="mr-3 text-neural-violet" size={28} />
                  Wezwanie do Działania
                </h3>
                <p className="text-lg text-deep-charcoal font-medium">
                  Umów się na Sesję Discovery, by zdiagnozować Twój unikalny przypadek.
                </p>
              </div>
              
              <Link to="/discovery">
                <Button variant="special" size="lg" className="text-lg px-8 py-4">
                  <Target size={20} className="mr-2" />
                  Rozpocznij Sesję Discovery
                </Button>
              </Link>
            </section>
            
          </div>
        </div>
      </div>
    </Layout>
  );
}