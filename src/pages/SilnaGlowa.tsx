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
              <ul className="space-y-2 mb-6">
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
              
              <p className="text-muted-foreground mb-4">
                Doradzają nam według własnego uznania, według swojej najlepszej wiedzy, dodając na koniec: "Chcę dla Ciebie jak najlepiej".
              </p>
              
              <p className="font-bold">
                Ale prawda jest taka, że najczęściej chcą jak najlepiej dla siebie.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">
                Wiesz, kiedy ludzie najczęściej mówią: "Zmieniłeś się"?
              </h4>
              <p className="text-lg font-medium text-primary mb-4">
                Alex Hormozi powiedział: "Ludzie nie chcą widzieć najlepszej wersji Ciebie, tylko wersję, która najlepiej im służy".
              </p>
              <p className="text-muted-foreground">
                Mało tego! Potrafią się obrazić, bo nie robisz tego, czego od Ciebie oczekują. Wzbudzić poczucie winy, nagiąć do swojej woli.
              </p>
            </div>
            
            <div className="mt-8">
              <h4 className="text-xl font-bold mb-4">Potem idziesz do pracy i tu znowu jest loteria</h4>
              <p className="text-muted-foreground mb-4">
                Albo trafisz w dobre miejsce, które szanuje człowieka, dba o rozwój, a błąd to okazja do poprawy, a nie przestępstwo.
              </p>
              <p className="text-muted-foreground">
                Albo trafisz do mordoru, gdzie mobbing jest na porządku dziennym, a jak Ci się nie podoba, to szef ma 10 osób na Twoje miejsce.
              </p>
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

      {/* Adversity Section */}
      <section className="px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            A jak znosisz przeciwności losu?
          </h2>
          
          <p className="text-lg text-center mb-8">
            Zakładam, że to nie jest "bułka z masłem" i że:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-12">
            {[
              "przeżywasz",
              "rozpamiętujesz", 
              "wyrzucasz sobie",
              "obwiniasz siebie",
              "marzysz o życiu, w którym dana sytuacja nie miała miejsca",
              "patrzysz na innych, którzy nie mają takich problemów",
              "masz dość słuchania: \"Będzie dobrze\", \"Poradzisz sobie\" itd."
            ].map((item, index) => (
              <div key={index} className="text-center p-4 bg-destructive/10 rounded-lg">
                <p className="text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
          
          <Card className="p-8 mb-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold mb-6">Najpierw wiedz, że to, co się z Tobą dzieje jest normalne</h3>
              <p className="text-muted-foreground mb-6">
                Wszyscy to przechodzimy, tylko jedni znoszą to lepiej, inni gorzej.
              </p>
              <p className="text-lg font-medium mb-6">
                Są ludzie, którzy porażki przyjmują na klatę, widzą to jako szansę i myślą: "Jak mogę to przekuć na swoją korzyść?".
              </p>
            </CardContent>
          </Card>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { situation: "Uciekł mi pociąg?", response: "Wrócę do domu, pomogę rodzicom przy pracy." },
              { situation: "zwolnili mnie z pracy?", response: "Znajdę lepszą, i tak miałem się zwolnić." },
              { situation: "odmówili mi kredytu?", response: "Nie zadłużę się na lata, jakoś uzbieram." },
              { situation: "zachorowałem?", response: "W końcu sobie poleżę i dam ciału to, na co zasługuje." },
              { situation: "nie mam zleceń?", response: "Wykorzystam czas wolny i popracuję nad firmą." }
            ].map((example, index) => (
              <Card key={index} className="p-6">
                <CardContent className="p-0">
                  <p className="font-bold text-destructive mb-2">{example.situation}</p>
                  <p className="text-primary font-medium">{example.response}</p>
                </CardContent>
              </Card>
            ))}
          </div>
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
                     Dzisiaj pokażę Ci, jak żeglować po oceanie życia, by przetrwać każy sztorm.
                   </p>
                 </div>
               </div>
             </CardContent>
           </Card>
           
           <div className="mt-12 space-y-8">
             <h3 className="text-2xl font-bold">Moja praca już przynosi efekty</h3>
             <p className="text-primary font-medium text-center">Przedsprzedaż trwa tylko do 10 stycznia!</p>
             
             <div className="space-y-6">
               <h4 className="text-xl font-bold">Temat mentalu wraca do mnie co chwilę</h4>
               <p className="text-muted-foreground">
                 Czy to w rozmowach z podopiecznymi na mentoringu, czy w społeczności Hakerów Produktywności.
               </p>
               <p className="text-muted-foreground">
                 Co chwilę czytam i słyszę o lękach, blokadach, niskiej samoocenie.
               </p>
               <p className="text-lg font-bold">Też tak masz?</p>
               
               <div className="bg-primary/10 p-6 rounded-lg">
                 <p className="text-muted-foreground mb-4">
                   Brian Tracy w "Psychologii sprzedaży" pisał, że osoby z biednych domów i z bogatych mają szansę na bogactwo.
                 </p>
                 <p className="text-muted-foreground mb-4">I taką samą szansę, by popaść w biedę.</p>
                 <p className="text-xl font-bold text-primary">Różnica jest w głowie.</p>
                 <p className="text-lg mt-4">Spokojnie, pomogę Ci z tym.</p>
               </div>
             </div>
           </div>
         </div>
       </section>

       {/* Benefits Section */}
       <section className="px-4 py-16">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
             Z moją pomocą stworzysz swój własny plan wytrwałości
           </h2>
           
           <div className="grid md:grid-cols-2 gap-6">
             {[
               "Nauczysz się nawigowania po oceanie życia i odporności na zmienną pogodę.",
               "Przejmiesz stery nad swoim umysłem, by prowadzić go na spokojne wody życia.",
               "Opanujesz ocean myśli i uciszysz go, tak że burza to będzie wyjątek.", 
               "Wiatr motywacji wypełni Twoje żagle, dzięki czemu będziesz przeć cała naprzód, w zgodzie ze swoimi wartościami.",
               "Posiądziesz strategie radzenia sobie w trudnych sytuacjach, żeby wyjść z nich jeszcze silniejszym.",
               "Stworzysz własny kompas, który zawsze będzie wskazywał właściwy kierunek."
             ].map((benefit, index) => (
               <Card key={index} className="p-6">
                 <CardContent className="p-0">
                   <p className="text-muted-foreground">{benefit}</p>
                 </CardContent>
               </Card>
             ))}
           </div>
         </div>
       </section>

       {/* Target Audience Section */}
       <section className="px-4 py-16 bg-muted/30">
         <div className="max-w-4xl mx-auto">
           <div className="grid md:grid-cols-2 gap-8">
             <Card className="p-6">
               <CardContent className="p-0">
                 <h3 className="text-xl font-bold text-primary mb-6">Ten program jest dla Ciebie, jeśli:</h3>
                 <ul className="space-y-3">
                   {[
                     "męczysz się ze sobą",
                     "masz wrażenie, że brniesz przez życie z kulą u nogi",
                     "otoczenie Cię nie wspiera, przeciwnie, ciągnie cię w dół",
                     "każde trudne wydarzenie w życiu dokłada Ci cierpień i frustracji",
                     "chcesz odpocząć od ciągłej presji",
                     "boisz się o jutro",
                     "nie potrafisz sobie poradzić z własnymi myślami"
                   ].map((item, index) => (
                     <li key={index} className="text-muted-foreground">• {item}</li>
                   ))}
                 </ul>
               </CardContent>
             </Card>
             
             <Card className="p-6">
               <CardContent className="p-0">
                 <h3 className="text-xl font-bold text-destructive mb-6">Ten program nie jest dla Ciebie, jeśli:</h3>
                 <ul className="space-y-3">
                   {[
                     "masz wspierające otoczenie i pomoc na każdym kroku",
                     "otaczasz się ludźmi, którzy w Ciebie wierzą",
                     "masz wiarę w to, co robisz, i bez problemu przechodzisz do działania",
                     "masz pewność siebie i lubisz to, kim jesteś",
                     "perfekcyjnie radzisz sobie z trudnościami, a nieprzewidziane zdarzenia są dla Ciebie miłą odmianą, a nie tragedią"
                   ].map((item, index) => (
                     <li key={index} className="text-muted-foreground">• {item}</li>
                   ))}
                 </ul>
               </CardContent>
             </Card>
           </div>
         </div>
       </section>

       {/* Vision Section */}
       <section className="px-4 py-16">
         <div className="max-w-4xl mx-auto">
           <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
             Pomyśl, że już niedługo Twoje problemy przestaną Cię przytłaczać
           </h2>
           
           <Card className="p-8 mb-8">
             <CardContent className="p-0">
               <h3 className="text-2xl font-bold mb-6">Jak będzie wtedy wyglądało Twoje życie?</h3>
               <p className="text-lg mb-6">Teraz możesz puścić wodze fantazji.</p>
               <p className="text-lg mb-8">Przypomnij sobie swoje najśmielsze sny. O czym marzysz?</p>
               
               <div className="space-y-4">
                 {[
                   "→ Pozbędziesz się długów?",
                   "→ Rzucisz mobbingującą pracę i znajdziesz lepszą?", 
                   "→ Przestaniesz brać do siebie ciężkie słowa swoich bliskich?",
                   "→ Osiągniesz wymarzony sukces w pracy lub w biznesie?",
                   "→ Odpoczniesz finansowo?",
                   "→ Zapewnisz byt sobie i swojej rodzinie?"
                 ].map((dream, index) => (
                   <p key={index} className="text-lg font-medium text-primary">{dream}</p>
                 ))}
               </div>
               
               <p className="text-lg mt-8 font-bold">
                 Wszystko to stanie się możliwe, kiedy pokonasz swoje bariery mentalne.
               </p>
               
               <div className="mt-8 bg-primary/10 p-6 rounded-lg">
                 <p className="text-muted-foreground mb-4">
                   Wracając do metafory łodzi – wyobraź sobie, że płyniesz, i nie boisz się niczego.
                 </p>
                 <p className="text-muted-foreground mb-4">
                   I wiesz, że nawet jak przyjdzie sztorm, zacznie padać deszcz albo wielka fala znienacka uderzy w burtę, 
                   to przyjmiesz to z godnością i będziesz płynąć dalej.
                 </p>
                 <p className="font-bold">Bo wiesz, co robić.</p>
                 <p className="text-muted-foreground mt-4">
                   Wiesz, jak sterować, jak ustawić żagle, jaki obrać kurs i jakie rozkazy wydać załodze.
                 </p>
                 <p className="text-lg font-bold text-primary mt-4">
                   Masz zbudowaną strategię odporności psychicznej.
                 </p>
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
                      <p className="text-muted-foreground mb-4">{module.description}</p>
                      
                      {/* Detailed content for each module */}
                      {module.number === 1 && (
                        <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                          <li>• Potęga metafor w kształtowaniu Twojej odporności psychicznej</li>
                          <li>• Jak Twoje środowisko i emocje wpływają na kurs Twojego życia?</li>
                          <li>• Wartości kontra słabości: Co naprawdę steruje Twoją łodzią?</li>
                          <li>• Siła i przeciwności losu: Jak wykorzystać swoje mocne strony w obliczu życiowych burz?</li>
                          <li>• Sieć wsparcia i cele: Kto płynie obok Ciebie i dokąd zmierzasz?</li>
                          <li>• Zadanie: Operacja "Kapitan"</li>
                        </ul>
                      )}
                      
                      {module.number === 2 && (
                        <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                          <li>• Negatywne nastawienie: Dlaczego Twój mózg jest zaprogramowany na pesymizm?</li>
                          <li>• Jak wyrwać się z błędnego koła negatywnego myślenia?</li>
                          <li>• Siła pozytywnego nastawienia: Jak zmienić perspektywę i poszerzyć horyzonty</li>
                          <li>• Kotwica spokoju: Zachowaj równowagę w każdej sytuacji</li>
                          <li>• Sztuka dostrzegania pozytywów: Jak trenować umysł, by widział szklankę do połowy pełną?</li>
                          <li>• Zadanie: Misja "Pozytywny fokus"</li>
                        </ul>
                      )}
                      
                      {module.number === 3 && (
                        <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                          <li>• Teoria oceny sytuacji: Jak Twoje myśli kształtują Twoją rzeczywistość?</li>
                          <li>• Myśli jak chmury: Obserwacja bez osądzania</li>
                          <li>• Z zagrożenia do wyzwania: Jak zmienić perspektywę i zyskać przewagę?</li>
                          <li>• Znajdowanie srebra w chmurach: Technika odkrywania korzyści w przeciwnościach losu</li>
                          <li>• Optymizm na receptę: Jak wyrobić w sobie pozytywny styl myślenia?</li>
                          <li>• Zadanie: Projekt "Zmiana perspektywy"</li>
                        </ul>
                      )}
                      
                      {module.number === 4 && (
                        <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                          <li>• Mapa skarbów: Jak odkryć swoje prawdziwe wartości życiowe?</li>
                          <li>• Od teorii do praktyki: Jak żyć zgodnie ze swoimi wartościami na co dzień?</li>
                          <li>• Wartości jako koło ratunkowe: Rola głębokich przekonań w budowaniu odporności</li>
                          <li>• Projektowanie życia: Jak stworzyć plan działania zgodny z Twoimi wartościami?</li>
                          <li>• Pokonywanie przeszkód: Co robić, gdy życie utrudnia realizację Twoich wartości?</li>
                          <li>• Zadanie: Eksperyment "Życie według wartości"</li>
                        </ul>
                      )}
                      
                      {module.number === 5 && (
                        <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                          <li>• Rozpoznawanie swojego stylu: Jak reagujesz na stres i dlaczego to ważne?</li>
                          <li>• Mapa kontroli: Jak odróżnić to, na co masz wpływ, od tego, co jest poza Twoim zasięgiem?</li>
                          <li>• Aktywne strategie radzenia sobie ze stresem: Kiedy działać, a kiedy odpuścić?</li>
                          <li>• Sztuka poddania się: Dlaczego czasem odpuszczenie jest najlepszym wyjściem?</li>
                          <li>• Balansowanie na linie: Jak uniknąć pułapek nadmiernej kontroli i bierności?</li>
                          <li>• Zadanie: Operacja "Antystres"</li>
                        </ul>
                      )}
                      
                      {module.number === 6 && (
                        <ul className="text-sm text-muted-foreground space-y-1 mt-3">
                          <li>• Podsumowanie podróży: Jakie skarby odkryłeś podczas naszej wyprawy?</li>
                          <li>• Lustro rozwoju: Jak zmierzyć swój postęp w czterech kluczowych obszarach?</li>
                          <li>• Projektowanie mentalnej mapy: Jak stworzyć plan zarządzania uwagą i myślami?</li>
                          <li>• Od motywacji do działania: Jak przekuć swoje wartości w konkretne kroki?</li>
                          <li>• Układanka odporności: Jak połączyć wszystkie elementy w spójną strategię?</li>
                          <li>• Final Boss: Misja "Odporność psychiczna 10/10"</li>
                        </ul>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold mb-6">Po kursie Silna Głowa będziesz mieć silną psychikę.</h3>
            
            <Card className="p-8 max-w-3xl mx-auto">
              <CardContent className="p-0">
                <h4 className="text-xl font-bold mb-6">
                  Kurs jest także biletem na pokład najbardziej wspierającej załogi w oceanie Internetu
                </h4>
                <p className="text-muted-foreground mb-4">Każdego dnia.</p>
                <p className="text-lg font-medium text-primary">
                  To jedna z niewielu społeczności totalnie pozbawionych hejtu.
                </p>
                
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="font-medium">Zobacz przykładową lekcję:</p>
                  <div className="aspect-video bg-muted rounded-lg mt-4 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                        <div className="w-0 h-0 border-l-[8px] border-l-primary border-y-[6px] border-y-transparent ml-1"></div>
                      </div>
                      <p className="text-muted-foreground">Przykładowa lekcja</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="px-4 py-16 bg-gradient-to-r from-primary/5 to-primary/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ile za ten rejs ku spokojowi ducha?
          </h2>
          
          <div className="mb-12">
            <Card className="p-8 mb-8">
              <CardContent className="p-0">
                <p className="text-lg mb-6">Gdybym miał podsumować:</p>
                <ul className="space-y-2 text-muted-foreground mb-6">
                  <li>• 18+ lat mówienia do ludzi,</li>
                  <li>• 30+ lat testowania zdobywanej wiedzy na sobie,</li>
                  <li>• dziesiątki przebytych kursów i szkoleń na temat mentalu,</li>
                  <li>• setki książek o tej tematyce,</li>
                  <li>• zniezmierzone pieniądze wydane na naukę,</li>
                  <li>• zniezliczone godziny spędzone na uczeniu innych.</li>
                </ul>
                <p className="text-lg">wyszłoby dużo pieniędzy 🙂</p>
                
                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <p className="text-lg font-medium mb-2">Sam mentoring u mnie kosztuje dzisiaj 12 000 zł za 1 dzień (netto).</p>
                  <p className="text-sm text-muted-foreground">
                    (Jeśli jesteś zainteresowany pracą 1:1, kliknij tutaj, aby umówić sesję Discovery.)
                  </p>
                </div>
                
                <p className="text-lg mt-6">
                  Ale kurs "Silna Głowa" możesz mieć za ułamek tej kwoty, czyli:
                </p>
              </CardContent>
            </Card>
          </div>
          
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
                
                <div className="mt-8 p-6 bg-primary/10 rounded-lg">
                  <h4 className="font-bold mb-4">Dopłyniesz, gdzie chcesz, albo odstawię Cię na brzeg</h4>
                  <p className="text-muted-foreground mb-4">
                    Wierzę w to, co robię. Widziałem ludzi, którym pomogłem. Wiem, że mogę pomóc także Tobie. 
                    I wiem, że się boisz. To też rozwiąże kurs Silna Głowa.
                  </p>
                  <p className="text-muted-foreground">
                    Ale jeśli dołączysz do kursu, przerobisz go i stwierdzisz, że Ci się nie podoba, 
                    zwrócę Ci środki w ciągu 30 dni bez żadnego problemu.
                  </p>
                </div>
                
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
          
          <Card className="p-8 mb-12">
            <CardContent className="p-0">
              <p className="text-lg mb-6">Wcale mnie to nie dziwi.</p>
              <p className="text-muted-foreground mb-6">
                Życie nauczyło Cię nie podejmować ryzyka, unikać wystawiania się na krytykę, omijać okazje.
              </p>
              <p className="text-lg font-medium mb-6">"Ja go nie widzę, to ono też mnie nie widzi".</p>
              <p className="text-xl font-bold text-primary">Ale życie Cię widzi.</p>
            </CardContent>
          </Card>
          
          <div className="space-y-8">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-destructive mb-6">"Nie mam teraz pieniędzy"</h3>
                <p className="text-lg font-medium mb-4">W tym cały problem. Twój mental blokuje Cię przed zarobieniem dobrych pieniędzy. I będzie Cię blokował przez całe życie, jeśli tak to zostawisz.</p>
                
                <p className="text-muted-foreground mb-4">
                  Otoczenie nauczyło Cię myśleć źle o pieniądzach. Że są domeną chciwych i chytrych ludzi. Że można je stracić. Że można z ich powodu cierpieć albo dostać w dziób na ulicy.
                </p>
                
                <p className="text-lg font-bold mb-4">Twój umysł broni Cię przed dużymi pieniędzmi!</p>
                
                <p className="text-muted-foreground mb-4">
                  Weźmy znowu tę łódź – boisz się wypłynąć na szerokie wody, bo Ci ktoś naopowiadał, że tam pływają tylko piraci. I że można łatwo zatonąć.
                </p>
                
                <p className="text-lg font-bold mb-4">To nieprawda!</p>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-muted-foreground mb-4">
                    Na pewno masz marzenia. Bez pieniędzy ich nie zrealizujesz. Musisz coś zrobić.
                    Musisz przełamać ten schemat. To może być kurs Silna Głowa, może być mentoring, coaching, YouTube, terapia. Ale coś musi być. Bo możesz też łudzić się, że ciężką pracą zasłużysz na dobry grosz. Że Twój pracodawca w swej łaskawości da Ci awans. Ale wierz mi – to się nie stanie.
                  </p>
                  
                  <p className="text-lg font-medium">Osobiście wolę sam decydować o tym, ile zarabiam 🙂.</p>
                  
                  <p className="text-lg font-bold text-primary mt-4">
                    Gdyby Twój umysł był zaprogramowany na dobrą kasę, to już byś ją miał.
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-destructive mb-6">"Nie mam czasu na kursy"</h3>
                <p className="text-muted-foreground mb-4">
                  Oczywiście. Świat pędzi, nie czeka, presja, hustlowanie, wyścig szczurów.
                </p>
                <p className="text-muted-foreground mb-4">
                  Gnasz ze spotkania na spotkanie. Gdzie tu jeszcze wcisnąć kurs?
                </p>
                
                <p className="text-lg font-medium mb-4">
                  Ale pomyśl o tych wszystkich momentach, kiedy się martwisz. Kiedy nie możesz zasnąć. Kiedy łapiesz się na rozpamiętywaniu stresujących sytuacji.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Kiedy utrudnia Ci to pracę, powoduje prokrastynację, niewytłumaczalny strach.
                </p>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-lg font-bold mb-2 text-primary">Ile czasu na to tracisz?</p>
                  <p className="text-lg font-bold mb-4 text-primary">Ile czasu możesz odzyskać?</p>
                  
                  <p className="text-muted-foreground mb-4">
                    Pomyśl o tym, jak kolejne trudne wydarzenia z życia powstrzymują Cię przed działaniem.
                  </p>
                  
                  <p className="text-muted-foreground">
                    Ile masz takich złych dni? Ile są warte w przeliczeniu na pieniądze? Ile kursów możesz za to kupić?
                  </p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-destructive mb-6">"Z moim mentalem już nic nie da się zrobić"</h3>
                <p className="text-lg font-bold mb-4">Z każdym mentalem się da.</p>
                
                <p className="text-muted-foreground mb-4">
                  Spotykałem w swojej pracy ludzi, którzy mieli, nazwijmy to, łatwe życie.
                </p>
                <p className="text-muted-foreground mb-4">
                  I spotykałem też takich, których życie nie rozpieszczało od najmłodszych lat.
                  Większość z nich wyszła z tego. Dzisiaj są w innym, o wiele lepszym miejscu.
                </p>
                
                <p className="text-lg font-bold mb-4 text-primary">Nigdy nie jest za późno na zmiany.</p>
                
                <p className="text-muted-foreground mb-4">
                  Zwłaszcza na zmiany na lepsze. Umysł to dość giętkie narzędzie.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Tak jak mięśnie można rozciągać, żeby zrobić szpagat, tak samo można gimnastykować umysł. I jeśli tylko będziesz trenować, osiągniesz cel.
                </p>
                
                <p className="text-lg font-medium mb-4">Prędzej czy później, ale go osiągniesz.</p>
                
                <div className="bg-primary/10 p-6 rounded-lg">
                  <p className="text-lg font-bold mb-4">To jest biologia, a biologii nie oszukasz.</p>
                  
                  <p className="text-muted-foreground mb-4">
                    Jedyny sposób, żeby celu nie osiągnąć, to nie podjąć działania, czyli zrobić to, co właśnie teraz chcesz zrobić.
                  </p>
                  
                  <p className="text-destructive font-medium mb-4">
                    "Mnie się nie da pomóc". Cyk, wymówka, odhaczone.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    Przekonanie potwierdziło się. Schemat pozostaje bez zmian.
                  </p>
                  
                  <p className="text-muted-foreground mb-4">
                    Jeśli właśnie tego chcesz od życia, to nie mnie nakazywać Ci wybór.
                  </p>
                  
                  <p className="text-lg font-bold text-primary">
                    Ale wierzę, że jesteś na tej stronie, że czytasz te słowa, bo chcesz czegoś więcej. Chcesz przełamać schemat.
                  </p>
                  
                  <p className="text-lg mt-4">Jeśli tak, zapraszam na pokład 🙂.</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Investment Section */}
          <section className="mt-16">
            <Card className="p-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6">"Czy to mi się zwróci?"</h3>
                
                <p className="text-lg mb-6">
                  Warren Buffett powiedział, że najlepszą inwestycją jest inwestycja w siebie. Jeśli tak mówi najwybitniejszy inwestor wszech czasów, to widocznie musi tak być.
                </p>
                
                <p className="text-muted-foreground mb-6">
                  Cokolwiek robisz w życiu, czymkolwiek się zajmujesz, Twój mental pozwoli Ci osiągać cele, ale też przed nimi powstrzyma.
                </p>
                
                <p className="text-muted-foreground mb-6">Spójrz na ludzi, którzy osiągają sukces.</p>
                
                <p className="text-muted-foreground mb-6">
                  Przebojowi, może nieco aroganccy, ale przede wszystkim wierzą w siebie.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-muted-foreground mb-4">Jak piłkarz, który wykonuje rzut karny.</p>
                    <p className="text-muted-foreground">Jak koszykarz, który bierze piłkę w ręce na 3 sekundy przed końcem meczu.</p>
                  </div>
                  <div className="bg-primary/10 p-6 rounded-lg">
                    <p className="text-muted-foreground">
                      Im nie drży noga czy ręka. Wierzą w siebie. Ufają sobie, choć patrzą na nich miliony.
                    </p>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-6">
                  Czasem trafią, czasem nie, ale nikt z nich nie rzuca potem kariery.
                </p>
                
                <div className="bg-primary/10 p-6 rounded-lg mb-6">
                  <p className="text-lg font-bold mb-4">
                    Michael Jordan powiedział takie słowa: "Nie trafiłem ponad 9000 rzutów w moim życiu.
                  </p>
                  <p className="text-muted-foreground mb-4">
                    Przegrałem ponad 300 meczów. 26 razu zaufano mi, gdy miałem oddać rzut na miarę zwycięstwa i spudłowałem. Przegrywałem w moim życiu ciągle. Dlatego właśnie osiągnąłem sukces".
                  </p>
                </div>
                
                <p className="text-lg font-bold mb-4 text-primary">To się da wypracować. Oni pracowali. Nikt się z tym nie rodzi. Silną Głowę się zdobywa poprzez wiedzę i pracę.</p>
                
                <p className="text-lg font-bold">A kiedy będziesz mieć Silną Głowę, osiągniesz wszystko, co chcesz.</p>
                
                <p className="text-xl font-bold text-primary mt-4">Przede wszystkim spokój.</p>
              </CardContent>
            </Card>
          </section>
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