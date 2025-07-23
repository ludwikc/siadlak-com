
import Layout from '../components/layout/Layout';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Headphones, Video, Bell, GraduationCap, Users, Compass, Mail } from 'lucide-react';

export default function Work() {
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-accent/20">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-deep-charcoal dark:text-silver-mist mb-6">
                Możliwości
              </h1>
              <p className="text-lg text-subtle-slate dark:text-silver-mist/80 max-w-3xl mx-auto leading-relaxed">
                Jesteś tu, bo chcesz więcej niż tylko 'produktywność'. Chcesz wpływu, głębi, a może nawet lekkości działania. 
                Poniżej znajdziesz ścieżki, które dla Ciebie przygotowałem. Wybierz swoją.
              </p>
            </div>

            <div className="space-y-12">
              {/* Podcast Section */}
              <section className="bg-white/50 dark:bg-quantum-blue/10 rounded-xl p-8 border border-neural-violet/20">
                <div className="flex items-center mb-6">
                  <Headphones className="h-8 w-8 text-neural-violet dark:text-luminal-magenta mr-3" />
                  <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist">
                    Posłuchać czegoś wartościowego
                  </h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-neural-violet/30 pl-6">
                    <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                      Podcast „Lifehacking Podcast"
                    </h3>
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                      Narzędzia, praktyki i rozmowy o nowoczesnej produktywności z ludzką twarzą.
                    </p>
                    <Link to="/podcast/life-hacking">
                      <Button variant="secondary">
                        <Headphones size={18} />
                        Przejdź do podcastu
                      </Button>
                    </Link>
                  </div>

                  <div className="border-l-4 border-neural-violet/30 pl-6">
                    <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                      Medytacje na żywo "Uważne Życie"
                    </h3>
                    <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                      W każdy wtorek o 6:30 - Twoja kotwica uważności w każdym tygodniu. Ja jestem zawsze. A Ty będziesz? :)
                    </p>
                    <Link to="/podcast/uwazne-zycie">
                      <Button variant="secondary">
                        <Headphones size={18} />
                        Przejdź do podcastu
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>

              {/* Video Section */}
              <section className="bg-white/50 dark:bg-quantum-blue/10 rounded-xl p-8 border border-neural-violet/20">
                <div className="flex items-center mb-6">
                  <Video className="h-8 w-8 text-neural-violet dark:text-luminal-magenta mr-3" />
                  <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist">
                    Obejrzeć coś konkretnego
                  </h2>
                </div>
                
                <div className="border-l-4 border-neural-violet/30 pl-6">
                  <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                    Archiwum vlogów
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Na YouTube masz dostęp do wybranych 300+ nagrań. Dołącz do Lifehackerów, by mieć LIFETIME dostęp do wszystkiego
                  </p>
                  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                    <Button variant="secondary">
                      <Video size={18} />
                      Oglądaj na YouTube
                    </Button>
                  </a>
                </div>
              </section>

              {/* Newsletter Section */}
              <section className="bg-white/50 dark:bg-quantum-blue/10 rounded-xl p-8 border border-neural-violet/20">
                <div className="flex items-center mb-6">
                  <Bell className="h-8 w-8 text-neural-violet dark:text-luminal-magenta mr-3" />
                  <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist">
                    Poczytać coś głębszego
                  </h2>
                </div>
                
                <div className="border-l-4 border-neural-violet/30 pl-6">
                  <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                    Newsletter
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Bo połączenie technologii i psychologii wymaga solidnych źródeł.
                  </p>
                  <Link to="/newsletter">
                    <Button variant="secondary">
                      <Bell size={18} />
                      Dołącz do Newslettera (odbierz prezent za 1188PLN)
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Courses Section */}
              <section className="bg-white/50 dark:bg-quantum-blue/10 rounded-xl p-8 border border-neural-violet/20">
                <div className="flex items-center mb-6">
                  <GraduationCap className="h-8 w-8 text-neural-violet dark:text-luminal-magenta mr-3" />
                  <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist">
                    Nauczyć się, jak ogarniać życie
                  </h2>
                </div>
                
                <div className="border-l-4 border-neural-violet/30 pl-6">
                  <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                    Kursy i materiały szkoleniowe
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Dla tych, którzy chcą sami – ale nie samotnie. (dołączając do dowolnego kursu premium uzyskasz dostęp LIFETIME do społeczności Lifehackerów)
                  </p>
                  <Link to="/program">
                    <Button variant="secondary">
                      <GraduationCap size={18} />
                      Zobacz dostępne kursy
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Community Section */}
              <section className="bg-white/50 dark:bg-quantum-blue/10 rounded-xl p-8 border border-neural-violet/20">
                <div className="flex items-center mb-6">
                  <Users className="h-8 w-8 text-neural-violet dark:text-luminal-magenta mr-3" />
                  <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist">
                    Poznać ludzi podobnych do mnie
                  </h2>
                </div>
                
                <div className="border-l-4 border-neural-violet/30 pl-6">
                  <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                    Społeczność Lifehackerów
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Zamknięta przestrzeń dla ludzi, którzy chcą rosnąć razem. Inspiracja, wsparcie i techniki bez lania wody. 
                    Tylko i wyłącznie moi Klienci Premium. Nie ma tam przypadkowych ludzi.
                  </p>
                  <Link to="/community">
                    <Button variant="secondary">
                      <Users size={18} />
                      Dołącz do społeczności
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Mentoring Section */}
              <section className="bg-white/50 dark:bg-quantum-blue/10 rounded-xl p-8 border border-neural-violet/20">
                <div className="flex items-center mb-6">
                  <Compass className="h-8 w-8 text-neural-violet dark:text-luminal-magenta mr-3" />
                  <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist">
                    Porozmawiać zupełnie na osobności i z pełnym fokusem na Tobie
                  </h2>
                </div>
                
                <div className="border-l-4 border-neural-violet/30 pl-6">
                  <h3 className="text-xl font-medium text-deep-charcoal dark:text-silver-mist mb-2">
                    Mentoring 1:1
                  </h3>
                  <p className="text-subtle-slate dark:text-silver-mist/80 mb-4">
                    Dla tych, którzy są gotowi na przełom i nie chcą iść na skróty – tylko głębiej i mądrzej.
                  </p>
                  <Link to="/contact">
                    <Button variant="secondary">
                      <Compass size={18} />
                      Sprawdź mentoring
                    </Button>
                  </Link>
                </div>
              </section>

              {/* Final CTA */}
              <section className="bg-gradient-to-r from-neural-violet/10 to-luminal-magenta/10 dark:from-neural-violet/20 dark:to-luminal-magenta/20 rounded-xl p-8 text-center border border-neural-violet/20">
                <h2 className="text-2xl font-semibold text-deep-charcoal dark:text-silver-mist mb-4">
                  Nie wiesz, od czego zacząć?
                </h2>
                <p className="text-subtle-slate dark:text-silver-mist/80 mb-6">
                  Opowiedz mi o sobie – a ja wskażę Ci kierunek.
                </p>
                <Link to="/assessment">
                  <Button variant="special" size="lg">
                    <Mail size={18} />
                    Wypełnij krótką ankietę
                  </Button>
                </Link>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}