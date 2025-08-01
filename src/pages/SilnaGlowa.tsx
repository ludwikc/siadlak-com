import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, ArrowRight } from 'lucide-react';

const SilnaGlowa = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/50">
      {/* Hero Section */}
      <section className="relative px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-8">
            <h1 className="text-2xl md:text-3xl font-medium text-foreground leading-tight">
              Problemy z realizacją celów?<br />
              Trudności?<br />
              Przytłoczenie?
            </h1>
            <p className="text-lg text-muted-foreground">
              Obejrzyj to video! ⤴️
            </p>
          </div>

          {/* Video placeholder */}
          <div className="aspect-video bg-muted rounded-lg mb-12 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <div className="w-0 h-0 border-l-[8px] border-l-primary border-y-[6px] border-y-transparent ml-1"></div>
              </div>
              <p className="text-muted-foreground">Video zostanie wkrótce dodane</p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground leading-tight">
              Zamień swój umysł<br />
              ze zwykłej tratwy<br />
              w <span className="text-primary">niezatapialny pancernik</span>, któremu<br />
              niestraszne życiowe sztormy
            </h2>
            
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Naucz się radzić sobie z trudnościami, by realizować swoje cele. 
              Dołącz do ponad 118 osób gotowych do działania pomimo przeciwności losu
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Button size="lg" className="text-lg px-8 py-4">
                Dołączam teraz
              </Button>
              <p className="text-primary font-medium">
                Przedsprzedaż trwa tylko do 10 stycznia!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Od początku bądźmy ze sobą szczerzy:<br />
            żyjemy w <span className="text-destructive">piekielnie trudnym świecie</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              "otaczają nas media społecznościowe, których właściciele wydają grube pieniądze, by nas od tych platform uzależnić",
              "obserwujemy sukcesy innych w mediach społecznościowych, gdzie w rzeczywistości to jest tylko ułamek prawdy",
              "każdego dnia przyswajamy więcej danych, niż kilka wieków temu nasi przodkowie przyswajali przez całe życie",
              "korporacje wydają miliardy na specjalistów i reklamy, żeby tylko zdobyć naszą uwagę",
              "presja wyścigu szczurów, osiągnięć i \"hustlowania\" jest nie do zniesienia",
              "dodatkowo nosimy w sobie traumy międzypokoleniowe i własne"
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <p className="text-muted-foreground">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card p-8 rounded-lg border">
            <h3 className="text-2xl font-bold mb-6">Dodaj do tego uwarunkowania rodzinne i presję otoczenia</h3>
            <p className="text-muted-foreground mb-6">
              Bardzo często nasi rodzice, krewni i znajomi przenoszą na nas swoje braki i kompleksy.
              I to nawet nie z własnej winy! Oni po prostu nie wiedzą, że można inaczej. Nawet czasem nie chcą wiedzieć.
            </p>
            
            <div className="bg-destructive/10 p-6 rounded-lg">
              <h4 className="font-bold mb-4">Zrób sobie test</h4>
              <p className="mb-4">Czy zdarzyło Ci się od nich słyszeć coś w rodzaju:</p>
              <ul className="space-y-2">
                {[
                  "\"I tak Ci się nie uda, jak zwykle\"",
                  "\"Po co to robisz? Tylko się napracujesz i nic z tego nie będzie\"",
                  "\"Nie nadajesz się do tego\"",
                  "\"Weź się do roboty, bo co z Ciebie będzie?\"",
                  "\"Wymyślasz\"",
                  "\"Daj sobie spokój, wracaj do domu\""
                ].map((quote, index) => (
                  <li key={index} className="text-destructive font-medium">{quote}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Metaphor Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Wyobraź sobie, że jesteś łodzią</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Osoby z Twojego otoczenia i środowisko wytyczyły Ci kurs na niespokojne wody. To nie jest Twoja wina.
            </p>
          </div>

          <Card className="p-8 mb-12">
            <CardContent className="p-0 space-y-4 text-lg">
              <p>Nie jest Twoją winą, że łódź się chwieje, żagle rwą, że kadłub przecieka.</p>
              <p>Nie jest też Twoją winą to, że ocean jest wzburzony.</p>
              <p className="text-muted-foreground">
                Owszem, są łodzie, które całe życie pływają po spokojnych morzach. Ba! Są takie, które nie pływają, 
                tylko ciągną je holowniki (np. bogaci rodzice).
              </p>
              <p className="font-bold text-primary">
                Ty nie jesteś jedną z nich i nie będziesz i w ogóle nie powinieneś się na nich oglądać. 
                Oni nie przepłyną za Ciebie Twojego kursu.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Author Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Kim jestem i jakie rezultaty ode mnie otrzymasz?
          </h2>
          
          <Card className="p-8">
            <CardContent className="p-0">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1 space-y-6">
                  <p className="text-lg">
                    Nazywam się <span className="font-bold text-primary">Ludwik C. Siadlak</span> i od ponad 18 lat 
                    żyję z aktualizowania oprogramowania w głowach moich Klientów.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Mówię im także o ich barierach, lękach, przekonaniach i schematach, które często nie są ich własne.
                    I mówię, jak z nimi zerwać, by osiągnąć swój pełny potencjał i żyć w zgodzie ze sobą.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Latami uczyłem się różnych technik autohipnozy, medytacji, afirmacji, prowadzenia dialogu wewnętrznego 
                    i radzenia sobie z trudnościami. Wszystko najpierw sprawdziłem na sobie, a gdy zobaczyłem, że działa, 
                    sprawdziłem na podopiecznych.
                  </p>
                  
                  <p className="text-lg font-medium text-primary">
                    Dzisiaj pokażę Ci, jak żeglować po oceanie życia, by przetrwać każdy sztorm.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Course Modules */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Co zawiera kurs?</h2>
          <p className="text-xl text-muted-foreground text-center mb-12">
            6 modułów, które zmienią Twoje podejście do życiowych wyzwań
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: 1,
                title: "Żeglując po morzach życia, to Ty jesteś żaglówką",
                description: "Jeśli czujesz się zagubiony w życiowych burzach, pokażę Ci potężną metaforę żaglówki, która pomoże Ci zrozumieć siebie i swoje otoczenie."
              },
              {
                number: 2,
                title: "Sterowanie umysłem: Opanowanie sztuki skupienia uwagi",
                description: "Czy zdarza Ci się, że negatywne myśli przejmują nad Tobą kontrolę? Już za chwilę poznasz techniki, które pomogą Ci wyrwać się z błędnego koła pesymizmu."
              },
              {
                number: 3,
                title: "Ujarzmianie myśli: Moc percepcji",
                description: "Czy zauważyłeś, że Twoje myśli czasem sabotują Twój sukces? W tym module odkryjesz, jak przekształcić zagrożenia w wyzwania."
              },
              {
                number: 4,
                title: "Napędzanie swojej podróży: Motywacja do ciągłego rozwoju",
                description: "Czujesz, że brakuje Ci motywacji do działania? Wspólnie odkryjemy Twoje prawdziwe wartości i nauczysz się żyć w zgodzie z nimi na co dzień."
              },
              {
                number: 5,
                title: "Nawigacja przez burze: Skuteczne strategie radzenia sobie z przeciwnościami",
                description: "Czy czasem czujesz się bezradny w obliczu życiowych wyzwań? Poznasz naprawdę skuteczne strategie radzenia sobie ze stresem i przeciwnościami."
              },
              {
                number: 6,
                title: "Tworzenie własnego kompasu: Plan budowania odporności psychicznej",
                description: "Chcesz być odporny na życiowe zawirowania? Stworzysz swój personalny plan budowania odporności psychicznej."
              }
            ].map((module) => (
              <Card key={module.number} className="p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {module.number}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-3 leading-tight">{module.title}</h3>
                      <p className="text-muted-foreground">{module.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ile za ten rejs ku spokojowi ducha?
          </h2>
          
          <Card className="p-8 max-w-lg mx-auto">
            <CardContent className="p-0">
              <div className="space-y-6">
                <div>
                  <p className="text-muted-foreground line-through text-xl">12 000 zł</p>
                  <p className="text-sm text-muted-foreground">
                    (tyle kosztuje 1 dzień mentoringu 1:1)
                  </p>
                </div>
                
                <div>
                  <p className="text-5xl font-bold text-primary">777 zł</p>
                  <p className="text-muted-foreground">za pełny dostęp na zawsze</p>
                </div>
                
                <Button size="lg" className="w-full text-lg py-4">
                  To dobra cena za ten rejs, wchodzę na pokład
                </Button>
                
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Shield className="w-4 h-4" />
                  <span>30-dniowa gwarancja zwrotu pieniędzy</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Objections Section */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Możesz się wahać
          </h2>
          
          <div className="space-y-8">
            {[
              {
                objection: "Nie mam teraz pieniędzy",
                response: "W tym cały problem. Twój mental blokuje Cię przed zarobieniem dobrych pieniędzy. I będzie Cię blokował przez całe życie, jeśli tak to zostawisz. Gdyby Twój umysł był zaprogramowany na dobrą kasę, to już byś ją miał."
              },
              {
                objection: "Nie mam czasu na kursy",
                response: "Pomyśl o tych wszystkich momentach, kiedy się martwisz. Kiedy nie możesz zasnąć. Kiedy łapiesz się na rozpamiętywaniu stresujących sytuacji. Ile czasu na to tracisz? Ile czasu możesz odzyskać?"
              },
              {
                objection: "Z moim mentalem już nic nie da się zrobić",
                response: "Z każdym mentalem się da. Nigdy nie jest za późno na zmiany. Umysł to dość giętkie narzędzie. Tak jak mięśnie można rozciągać, żeby zrobić szpagat, tak samo można gimnastykować umysł."
              }
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold text-destructive mb-4">"{item.objection}"</h3>
                  <p className="text-muted-foreground">{item.response}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Chcesz wypracować swoją własną odporność psychiczną?
          </h2>
          <p className="text-xl opacity-90 mb-8">
            Wskakuj na pokład i naucz się, jak sterować łodzią życia, by pokonać każdy sztorm.
          </p>
          
          <div className="space-y-4">
            <Button 
              size="lg" 
              variant="secondary" 
              className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90"
            >
              Nie mam już wątpliwości, dołączam do kursu
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-primary-foreground/80">
              Przedsprzedaż trwa tylko do 10 stycznia!
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">FAQ</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "Kiedy dostanę kurs?",
                answer: "Dostęp otrzymasz natychmiast po zakupie. Wszystkie materiały są już gotowe i czekają na Ciebie."
              },
              {
                question: "Jak długo będę mieć dostęp do kursu?",
                answer: "Na zawsze. Świat się zmienia i chcąc zostać on top of the game musimy dostosowywać się do nowych wyzwań. Kiedy będę nagrywał dodatkowe materiały - zawsze będziesz otrzymywać do nich dostęp. Od razu, bez czekania."
              }
            ].map((faq, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SilnaGlowa;