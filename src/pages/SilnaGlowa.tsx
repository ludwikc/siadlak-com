import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, ArrowRight } from 'lucide-react';

const SilnaGlowa = () => {
  return (
    <Layout>
      {/* Hero Section - Theme Locked */}
      <section className="py-16 md:py-24 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="space-y-6 mb-8">
              <h1 className="text-2xl md:text-3xl font-medium text-locked-white leading-tight">
                Problemy z realizacją celów?<br />
                Trudności?<br />
                Przytłoczenie?
              </h1>
              <p className="text-lg text-locked-silver">
                Obejrzyj to video! ⤴️
              </p>
            </div>

            {/* Video placeholder */}
            <div className="aspect-video bg-locked-white/10 rounded-lg mb-12 flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-ascension-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-l-[8px] border-l-ascension-pink border-y-[6px] border-y-transparent ml-1"></div>
                </div>
                <p className="text-locked-silver">Video zostanie wkrótce dodane</p>
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-locked-white leading-tight">
                Zamień swój umysł<br />
                ze zwykłej tratwy<br />
                w <span className="text-locked-gradient">niezatapialny pancernik</span>, któremu<br />
                niestraszne życiowe sztormy
              </h2>
              
              <p className="text-xl text-locked-silver max-w-3xl mx-auto">
                Naucz się radzić sobie z trudnościami, by realizować swoje cele. 
                Dołącz do ponad 118 osób gotowych do działania pomimo przeciwności losu
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
                <Button 
                  variant="special" 
                  size="lg"
                  className="btn-locked-primary text-lg px-8 py-4 shadow-2xl hover:shadow-ascension-pink/25"
                >
                  Dołączam teraz
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <p className="text-locked-gradient font-medium">
                  Przedsprzedaż trwa tylko do 10 stycznia!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section - Theme Adaptive */}
      <section className="py-16 bg-background-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Od początku bądźmy ze sobą szczerzy:<br />
              żyjemy w <span className="text-color-error">piekielnie trudnym świecie</span>
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
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <p className="text-text-secondary">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="glass-card p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-text-primary">Dodaj do tego uwarunkowania rodzinne i presję otoczenia</h3>
              <p className="text-text-secondary mb-6">
                Bardzo często nasi rodzice, krewni i znajomi przenoszą na nas swoje braki i kompleksy.
                I to nawet nie z własnej winy! Oni po prostu nie wiedzą, że można inaczej. Nawet czasem nie chcą wiedzieć.
              </p>
              
              <div className="bg-color-error/10 p-6 rounded-lg">
                <h4 className="font-bold mb-4 text-text-primary">Zrób sobie test</h4>
                <p className="mb-4 text-text-secondary">Czy zdarzyło Ci się od nich słyszeć coś w rodzaju:</p>
                <ul className="space-y-2 mb-6">
                  {[
                    "\"I tak Ci się nie uda, jak zwykle\"",
                    "\"Po co to robisz? Tylko się napracujesz i nic z tego nie będzie\"",
                    "\"Nie nadajesz się do tego\"",
                    "\"Weź się do roboty, bo co z Ciebie będzie?\"",
                    "\"Wymyślasz\"",
                    "\"Daj sobie spokój, wracaj do domu\""
                  ].map((quote, index) => (
                    <li key={index} className="text-color-error font-medium">{quote}</li>
                  ))}
                </ul>
                
                <p className="text-text-secondary mb-4">
                  Doradzają nam według własnego uznania, według swojej najlepszej wiedzy, dodając na koniec: "Chcę dla Ciebie jak najlepiej".
                </p>
                
                <p className="font-bold text-text-primary">
                  Ale prawda jest taka, że najczęściej chcą jak najlepiej dla siebie.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-text-primary">
                  Wiesz, kiedy ludzie najczęściej mówią: "Zmieniłeś się"?
                </h4>
                <p className="text-lg font-medium text-ascension-pink mb-4">
                  Alex Hormozi powiedział: "Ludzie nie chcą widzieć najlepszej wersji Ciebie, tylko wersję, która najlepiej im służy".
                </p>
                <p className="text-text-secondary">
                  Mało tego! Potrafią się obrazić, bo nie robisz tego, czego od Ciebie oczekują. Wzbudzić poczucie winy, nagiąć do swojej woli.
                </p>
              </div>
              
              <div className="mt-8">
                <h4 className="text-xl font-bold mb-4 text-text-primary">Potem idziesz do pracy i tu znowu jest loteria</h4>
                <p className="text-text-secondary mb-4">
                  Albo trafisz w dobre miejsce, które szanuje człowieka, dba o rozwój, a błąd to okazja do poprawy, a nie przestępstwo.
                </p>
                <p className="text-text-secondary">
                  Albo trafisz do mordoru, gdzie mobbing jest na porządku dziennym, a jak Ci się nie podoba, to szef ma 10 osób na Twoje miejsce.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Boat Metaphor Section - Theme Adaptive */}
      <section className="py-16 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">Wyobraź sobie, że jesteś łodzią</h2>
              <p className="text-xl text-text-secondary max-w-3xl mx-auto">
                Osoby z Twojego otoczenia i środowisko wytyczyły Ci kurs na niespokojne wody. To nie jest Twoja wina.
              </p>
            </div>

            <Card className="glass-card p-8 mb-12">
              <CardContent className="p-0 space-y-4 text-lg">
                <p className="text-text-primary">Nie jest Twoją winą, że łódź się chwieje, żagle rwą, że kadłub przecieka.</p>
                <p className="text-text-primary">Nie jest też Twoją winą to, że ocean jest wzburzony.</p>
                <p className="text-text-secondary">
                  Owszem, są łodzie, które całe życie pływają po spokojnych morzach. Ba! Są takie, które nie pływają, 
                  tylko ciągną je holowniki (np. bogaci rodzice).
                </p>
                <p className="font-bold text-ascension-pink">
                  Ty nie jesteś jedną z nich i nie będziesz i w ogóle nie powinieneś się na nich oglądać. 
                  Oni nie przepłyną za Ciebie Twojego kursu.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Adversity Section - Theme Adaptive */}
      <section className="py-16 bg-card-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              A jak znosisz przeciwności losu?
            </h2>
            
            <p className="text-lg text-center mb-8 text-text-secondary">
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
                <div key={index} className="text-center p-4 bg-color-error/10 rounded-lg">
                  <p className="text-text-secondary">{item}</p>
                </div>
              ))}
            </div>
            
            <Card className="glass-card p-8 mb-8">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">Najpierw wiedz, że to, co się z Tobą dzieje jest normalne</h3>
                <p className="text-text-secondary mb-6">
                  Wszyscy to przechodzimy, tylko jedni znoszą to lepiej, inni gorzej.
                </p>
                <p className="text-lg font-medium mb-6 text-text-primary">
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
                <Card key={index} className="glass-card p-6">
                  <CardContent className="p-0">
                    <p className="font-bold text-color-error mb-2">{example.situation}</p>
                    <p className="text-ascension-pink font-medium">{example.response}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Author Section - Theme Adaptive */}
      <section className="py-16 bg-background-tertiary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
              Kim jestem i jakie rezultaty ode mnie otrzymasz?
            </h2>
            
            <Card className="glass-card p-8">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row gap-8 items-start">
                  <div className="flex-1 space-y-6">
                    <p className="text-lg text-text-primary">
                      Nazywam się <span className="font-bold text-ascension-pink">Ludwik C. Siadlak</span> i od ponad 18 lat 
                      żyję z aktualizowania oprogramowania w głowach moich Klientów.
                    </p>
                    
                    <p className="text-text-secondary">
                      Mówię im także o ich barierach, lękach, przekonaniach i schematach, które często nie są ich własne.
                      I mówię, jak z nimi zerwać, by osiągnąć swój pełny potencjał i żyć w zgodzie ze sobą.
                    </p>
                    
                    <p className="text-text-secondary">
                      Latami uczyłem się różnych technik autohipnozy, medytacji, afirmacji, prowadzenia dialogu wewnętrznego 
                      i radzenia sobie z trudnościami. Wszystko najpierw sprawdziłem na sobie, a gdy zobaczyłem, że działa, 
                      sprawdziłem na podopiecznych.
                    </p>
                    
                     <p className="text-lg font-medium text-ascension-pink">
                       Dzisiaj pokażę Ci, jak żeglować po oceanie życia, by przetrwać każdy sztorm.
                     </p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mt-12 space-y-8">
               <h3 className="text-2xl font-bold text-text-primary">Moja praca już przynosi efekty</h3>
               <p className="text-ascension-pink font-medium text-center">Przedsprzedaż trwa tylko do 10 stycznia!</p>
               
               <div className="space-y-6">
                 <h4 className="text-xl font-bold text-text-primary">Temat mentalu wraca do mnie co chwilę</h4>
                 <p className="text-text-secondary">
                   Czy to w rozmowach z podopiecznymi na mentoringu, czy w społeczności Hakerów Produktywności.
                 </p>
                 <p className="text-text-secondary">
                   Co chwilę czytam i słyszę o lękach, blokadach, niskiej samoocenie.
                 </p>
                 <p className="text-lg font-bold text-text-primary">Też tak masz?</p>
                 
                 <div className="bg-ascension-pink/10 p-6 rounded-lg">
                   <p className="text-text-secondary mb-4">
                     Brian Tracy w "Psychologii sprzedaży" pisał, że osoby z biednych domów i z bogatych mają szansę na bogactwo.
                   </p>
                   <p className="text-text-secondary mb-4">I taką samą szansę, by popaść w biedę.</p>
                   <p className="text-xl font-bold text-ascension-pink">Różnica jest w głowie.</p>
                   <p className="text-lg mt-4 text-text-primary">Spokojnie, pomogę Ci z tym.</p>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </section>

         {/* Benefits Section - Theme Adaptive */}
         <section className="py-16 bg-background-primary">
           <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
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
                   <Card key={index} className="glass-card p-6">
                     <CardContent className="p-0">
                       <p className="text-text-secondary">{benefit}</p>
                     </CardContent>
                   </Card>
                 ))}
               </div>
             </div>
           </div>
         </section>

         {/* Target Audience Section - Theme Adaptive */}
         <section className="py-16 bg-background-secondary">
           <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <div className="grid md:grid-cols-2 gap-8">
                 <Card className="glass-card p-6">
                   <CardContent className="p-0">
                     <h3 className="text-xl font-bold text-color-success mb-6">Ten program jest dla Ciebie, jeśli:</h3>
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
                         <li key={index} className="text-text-secondary">• {item}</li>
                       ))}
                     </ul>
                   </CardContent>
                 </Card>
                 
                 <Card className="glass-card p-6">
                   <CardContent className="p-0">
                     <h3 className="text-xl font-bold text-color-error mb-6">Ten program nie jest dla Ciebie, jeśli:</h3>
                     <ul className="space-y-3">
                       {[
                         "masz wspierające otoczenie i pomoc na każdym kroku",
                         "otaczasz się ludźmi, którzy w Ciebie wierzą",
                         "masz wiarę w to, co robisz, i bez problemu przechodzisz do działania",
                         "masz pewność siebie i lubisz to, kim jesteś",
                         "perfekcyjnie radzisz sobie z trudnościami, a nieprzewidziane zdarzenia są dla Ciebie miłą odmianą, a nie tragedią"
                       ].map((item, index) => (
                         <li key={index} className="text-text-secondary">• {item}</li>
                       ))}
                     </ul>
                   </CardContent>
                 </Card>
               </div>
             </div>
           </div>
         </section>

         {/* Vision Section - Theme Adaptive */}
         <section className="py-16 bg-card-bg">
           <div className="container mx-auto px-4">
             <div className="max-w-4xl mx-auto">
               <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">
                 Pomyśl, że już niedługo Twoje problemy przestaną Cię przytłaczać
               </h2>
               
               <Card className="glass-card p-8 mb-8">
                 <CardContent className="p-0">
                   <h3 className="text-2xl font-bold mb-6 text-text-primary">Jak będzie wtedy wyglądało Twoje życie?</h3>
                   <p className="text-lg mb-6 text-text-secondary">Teraz możesz puścić wodze fantazji.</p>
                   <p className="text-lg mb-8 text-text-secondary">Przypomnij sobie swoje najśmielsze sny. O czym marzysz?</p>
                   
                   <div className="space-y-4">
                     {[
                       "→ Pozbędziesz się długów?",
                       "→ Rzucisz mobbingującą pracę i znajdziesz lepszą?", 
                       "→ Przestaniesz brać do siebie ciężkie słowa swoich bliskich?",
                       "→ Osiągniesz wymarzony sukces w pracy lub w biznesie?",
                       "→ Odpoczniesz finansowo?",
                       "→ Zapewnisz byt sobie i swojej rodzinie?"
                     ].map((dream, index) => (
                       <p key={index} className="text-lg font-medium text-ascension-pink">{dream}</p>
                     ))}
                   </div>
                   
                   <p className="text-lg mt-8 font-bold text-text-primary">
                     Wszystko to stanie się możliwe, kiedy pokonasz swoje bariery mentalne.
                   </p>
                   
                   <div className="mt-8 bg-ascension-pink/10 p-6 rounded-lg">
                     <p className="text-text-secondary mb-4">
                       Wracając do metafory łodzi – wyobraź sobie, że płyniesz, i nie boisz się niczego.
                     </p>
                     <p className="text-text-secondary mb-4">
                       I wiesz, że nawet jak przyjdzie sztorm, zacznie padać deszcz albo wielka fala znienacka uderzy w burtę, 
                       to przyjmiesz to z godnością i będziesz płynąć dalej.
                     </p>
                     <p className="font-bold text-text-primary">Bo wiesz, co robić.</p>
                     <p className="text-text-secondary mt-4">
                       Wiesz, jak sterować, jak ustawić żagle, jaki obrać kurs i jakie rozkazy wydać załodze.
                     </p>
                     <p className="text-lg font-bold text-ascension-pink mt-4">
                       Masz zbudowaną strategię odporności psychicznej.
                     </p>
                   </div>
                 </CardContent>
               </Card>
             </div>
           </div>
         </section>

        {/* Course Modules - Theme Adaptive */}
        <section className="py-16 bg-background-tertiary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-primary">Co zawiera kurs?</h2>
              <p className="text-xl text-text-secondary text-center mb-12">
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
                  <Card key={module.number} className="glass-card p-6 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-ascension-pink text-locked-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                          {module.number}
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-3 leading-tight text-text-primary">{module.title}</h3>
                          <p className="text-text-secondary mb-4">{module.description}</p>
                          
                          {/* ... rest of module details ... */}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="mt-16 text-center">
                <h3 className="text-2xl font-bold mb-6 text-text-primary">Po kursie Silna Głowa będziesz mieć silną psychikę.</h3>
                
                <Card className="glass-card p-8 max-w-3xl mx-auto">
                  <CardContent className="p-0">
                    <h4 className="text-xl font-bold mb-6 text-text-primary">
                      Kurs jest także biletem na pokład najbardziej wspierającej załogi w oceanie Internetu
                    </h4>
                    <p className="text-text-secondary mb-4">Każdego dnia.</p>
                    <p className="text-lg font-medium text-ascension-pink">
                      To jedna z niewielu społeczności totalnie pozbawionych hejtu.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section - Theme Adaptive */}
        <section className="py-16 bg-background-primary">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-primary">
                Ile za ten rejs ku spokojowi ducha?
              </h2>
              
              <Card className="glass-card p-8 max-w-lg mx-auto">
                <CardContent className="p-0">
                  <div className="space-y-6">
                    <div>
                      <p className="text-text-secondary line-through text-xl">12 000 zł</p>
                      <p className="text-sm text-text-secondary">
                        (tyle kosztuje 1 dzień mentoringu 1:1)
                      </p>
                    </div>
                    
                    <div>
                      <p className="text-5xl font-bold text-ascension-pink">777 zł</p>
                      <p className="text-text-secondary">za pełny dostęp na zawsze</p>
                    </div>
                    
                    <Button 
                      variant="special" 
                      size="lg" 
                      className="btn-locked-primary w-full text-lg py-4"
                    >
                      To dobra cena za ten rejs, wchodzę na pokład
                    </Button>
                    
                    <div className="mt-8 bg-ascension-pink/10 p-6 rounded-lg">
                      <h4 className="font-bold mb-4 text-text-primary">Dopłyniesz, gdzie chcesz, albo odstawię Cię na brzeg</h4>
                      <p className="text-text-secondary mb-4">
                        Wierzę w to, co robię. Widziałem ludzi, którym pomogłem. Wiem, że mogę pomóc także Tobie. 
                        I wiem, że się boisz. To też rozwiąże kurs Silna Głowa.
                      </p>
                      <p className="text-text-secondary">
                        Ale jeśli dołączysz do kursu, przerobisz go i stwierdzisz, że Ci się nie podoba, 
                        zwrócę Ci środki w ciągu 30 dni bez żadnego problemu.
                      </p>
                    </div>
                    
                    <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
                      <Shield className="w-4 h-4" />
                      <span>30-dniowa gwarancja zwrotu pieniędzy</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Objections Section - Theme Adaptive */}
        <section className="py-16 bg-background-secondary">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-primary">
                  Możesz się wahać
                </h2>
                
                <Card className="glass-card p-8 max-w-3xl mx-auto border-l-4 border-l-ascension-pink">
                  <CardContent className="p-0">
                    <p className="text-lg mb-4 text-text-secondary">Wcale mnie to nie dziwi.</p>
                    <p className="text-text-secondary mb-4">
                      Życie nauczyło Cię nie podejmować ryzyka, unikać wystawiania się na krytykę, omijać okazje.
                    </p>
                    <div className="bg-card-bg p-4 rounded-lg mb-4">
                      <p className="text-lg font-medium text-center italic text-text-primary">"Ja go nie widzę, to ono też mnie nie widzi".</p>
                    </div>
                    <p className="text-xl font-bold text-ascension-pink text-center">Ale życie Cię widzi.</p>
                  </CardContent>
                </Card>
              </div>
              
              <div className="grid lg:grid-cols-1 gap-12">
                {/* Money Objection */}
                <div className="group">
                  <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-color-error/10 to-color-error/5 p-6 border-b">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-color-error/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💰</span>
                        </div>
                        <h3 className="text-2xl font-bold text-color-error">"Nie mam teraz pieniędzy"</h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="bg-ascension-pink/10 p-6 rounded-lg border-l-4 border-l-ascension-pink">
                          <p className="text-lg font-bold text-ascension-pink mb-3">W tym cały problem.</p>
                          <p className="text-text-secondary">Twój mental blokuje Cię przed zarobieniem dobrych pieniędzy. I będzie Cię blokował przez całe życie, jeśli tak to zostawisz.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-ascension-pink/10 to-ascension-pink/5 p-6 rounded-lg">
                          <p className="text-lg font-bold text-ascension-pink mb-4">
                            Gdyby Twój umysł był zaprogramowany na dobrą kasę, to już byś ją miał.
                          </p>
                          <p className="text-text-secondary">
                            Osobiście wolę sam decydować o tym, ile zarabiam 🙂
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Time Objection */}
                <div className="group">
                  <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-color-error/10 to-color-error/5 p-6 border-b">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-color-error/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">⏰</span>
                        </div>
                        <h3 className="text-2xl font-bold text-color-error">"Nie mam czasu na kursy"</h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="bg-ascension-pink/10 p-6 rounded-lg">
                          <h4 className="font-bold mb-4 text-ascension-pink">Ale pomyśl o tym:</h4>
                          <div className="text-center space-y-3">
                            <p className="text-xl font-bold text-ascension-pink">Ile czasu na to tracisz?</p>
                            <p className="text-xl font-bold text-ascension-pink">Ile czasu możesz odzyskać?</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Mindset Objection */}
                <div className="group">
                  <Card className="glass-card overflow-hidden border-2 hover:border-ascension-pink/50 transition-all duration-300 hover:shadow-xl">
                    <div className="bg-gradient-to-r from-color-error/10 to-color-error/5 p-6 border-b">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 bg-color-error/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">🧠</span>
                        </div>
                        <h3 className="text-2xl font-bold text-color-error">"Z moim mentalem już nic nie da się zrobić"</h3>
                      </div>
                    </div>
                    
                    <CardContent className="p-8">
                      <div className="space-y-6">
                        <div className="text-center bg-ascension-pink/10 p-6 rounded-lg">
                          <p className="text-2xl font-bold text-ascension-pink mb-4">Z każdym mentalem się da.</p>
                          <p className="text-lg text-ascension-pink">Nigdy nie jest za późno na zmiany.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-ascension-pink/10 to-ascension-pink/5 p-6 rounded-lg border border-ascension-pink/20">
                          <p className="text-lg font-bold text-center mb-4 text-text-primary">To jest biologia, a biologii nie oszukasz.</p>
                          
                          <div className="text-center space-y-3">
                            <p className="text-lg font-bold text-ascension-pink">
                              Ale wierzę, że jesteś na tej stronie, bo chcesz czegoś więcej.
                            </p>
                            <p className="text-lg text-text-primary">Jeśli tak, zapraszam na pokład 🙂</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA - Theme Locked */}
        <section className="py-16 bg-gradient-locked-hero section-locked text-locked-white relative overflow-hidden">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-ascension-pink/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-luminal-magenta/20 rounded-full blur-3xl"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-locked-white">
                Chcesz wypracować swoją własną odporność psychiczną?
              </h2>
              <p className="text-xl text-locked-silver mb-8">
                Wskakuj na pokład i naucz się, jak sterować łodzią życia, by pokonać każdy sztorm.
              </p>
              
              <div className="space-y-4">
                <Button 
                  variant="special" 
                  size="lg" 
                  className="btn-locked-primary text-lg px-8 py-4"
                >
                  Nie mam już wątpliwości, dołączam do kursu
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-locked-gradient">
                  Przedsprzedaż trwa tylko do 10 stycznia!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ - Theme Adaptive */}
        <section className="py-16 bg-card-bg">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-text-primary">FAQ</h2>
              
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
                  <Card key={index} className="glass-card p-6">
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold mb-3 text-text-primary">{faq.question}</h3>
                      <p className="text-text-secondary">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default SilnaGlowa;