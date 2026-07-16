import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Brain, ShieldCheck, Award, TrendingUp, MessageSquare, Mic, Repeat } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";
import { Button } from "@/design-system/components/button";
import { Card, CardContent } from "@/design-system/components/card";

import RelatedPrograms from "@/components/sections/RelatedPrograms";
import devJutraImg from "@/assets/ttt-ai/devjutra.webp";
import aiDevs4Img from "@/assets/ttt-ai/aidevs4.webp";

const tttFaqs = [
  {
    question:
      "Dziś łapię zlecenia za 1 500 zł. Dlaczego miałbym zainwestować 8 000 zł?",
    answer:
      "Jeśli odpowiedź matematyczna jest jedyną, która Cię przekonuje — to jest sygnał, że jeszcze nie pora. Bo w tygodniu 4 matematyka nie pomaga. Pomaga zobowiązanie. Ale skoro matematykę lubisz — oto ona. Za 2 lata freelance'u na obecnej ścieżce zarobisz ~60-120 tys. zł. Za 2 lata pracy jako certyfikowany trener AI — 250-400 tys. zł. Różnica rzędu 200 tys. zł. Program kosztuje 3-4% tej różnicy. Matematyka domyka się w pierwszych 60-90 dniach po zakończeniu programu.",
  },
  {
    question: "Czy jest wersja grupowa, tańsza?",
    answer:
      "Nie. Nie dlatego, że nie potrafiłbym jej zrobić — tylko dlatego, że dla geeka uczącego się rzemiosła trenerskiego grupa nie działa. Rzemiosła trenerskiego uczy się w bezpośredniej relacji, tak samo jak rzemiosła stolarskiego czy chirurgicznego. W grupie można się nauczyć teorii i zestawu technik. W relacji 1:1 — faktycznie się transformujesz. Różnica jest ta sama, co między kursem angielskiego z podręcznika a rokiem życia w Londynie.",
  },
  {
    question: "Co jeśli po 3 tygodniach okaże się, że to nie dla mnie?",
    answer:
      "Rozmowa wstępna ma za zadanie wyeliminować ten scenariusz. Ale jeśli mimo wszystko po 3 tygodniach widzimy, że program się nie uda — rozstajemy się, zwracam Ci 50% proporcjonalnej reszty. Nie chcę pracować z kimś, kto nie chce pracować ze mną. Ani odwrotnie.",
  },
  {
    question: "Boję się stać przed ludźmi. Naprawdę się boję. Czy ten program jest dla mnie?",
    answer:
      "Tak. Szczególnie dla Ciebie. Większość moich najlepszych uczniów była dokładnie w tym miejscu, w którym Ty jesteś. Strach przed wystąpieniem jest trenowalny. To nie jest kwestia osobowości — to kwestia liczby powtórzeń w bezpiecznym środowisku. Tygodnie 4 i 5 programu są zaprojektowane dokładnie pod to. Na koniec programu prowadzisz 90-minutowy warsztat przed realną grupą. Nie dlatego, że będziesz gotowy w 100%. Dlatego, że ludzie czekający na „pełną gotowość” nigdy nie wchodzą na scenę. Uczymy się działania w obliczu strachu, nie jego eliminacji.",
  },
  {
    question: "Czy muszę mieć firmę, żeby wziąć udział?",
    answer:
      "Nie, ale ułatwia to rozliczenie. Jeśli jesteś na etacie i chcesz przejść do praktyki trenerskiej — to też działa. Jeśli nie wiesz, czy etat jest dobrym punktem startu — pomówmy o tym w rozmowie wstępnej.",
  },
  {
    question: "Jak szybko mogę zacząć?",
    answer:
      "Edycja inauguracyjna właśnie trwa — jedno z trzech miejsc jest już zajęte. Po jej wypełnieniu kolejna edycja (Q3 2026) rusza w cenie regularnej 24 999 zł.",
  },
  {
    question: "Pracujesz po polsku czy angielsku?",
    answer:
      "Obie opcje. Domyślnie po polsku. Jeśli Twój target to rynek Nordic/EU i chcesz prowadzić w angielskim — dostosowuję program.",
  },
];

const pillars = [
  {
    icon: Mic,
    title: "Twoja prezencja poza klawiaturą",
    text: "Nie „umiejętności miękkie” z HR-owego katalogu. Fizyczna, realna, namacalna obecność, która sprawia, że kiedy wchodzisz na salę konferencyjną, ludzie podnoszą głowy znad telefonów. Od głosu przez postawę, tempo, oddech, kontakt wzrokowy. To się da wytrenować — i wiem to, bo sam przechodziłem przez to 20 lat temu jako geek, którego pierwsze wystąpienie zakończyło się tym, że mówiłem tak szybko, że moderator musiał mnie delikatnie przerwać po 7 minutach z planowanych 40.",
  },
  {
    icon: Brain,
    title: "Twoja metoda dydaktyczna",
    text: "Jak z wiedzy, która u Ciebie jest intuicyjna, stworzyć ścieżkę, którą tamten człowiek — księgowa z 20-letnim stażem, która pierwszy raz w życiu widzi Claude'a — może przejść. Jak zaprojektować warsztat, w którym uczestnik wychodzi z konkretną, mierzalną umiejętnością, a nie z „wrażeniem, że coś tam pokazywali”.",
  },
  {
    icon: MessageSquare,
    title: "Twoja architektura oferty i sprzedaży",
    text: "Jak rozmawiać z centrum szkoleniowym, żeby zaproponowali Ci stałą współpracę, a nie jednorazowy test. Jak poprowadzić rozmowę z dyrektorem HR tak, że na końcu to on proponuje stawkę, a Ty ją tylko akceptujesz (albo delikatnie podnosisz). Jak pisać ofertę, która sprzedaje bez Ciebie w pokoju. To rzemiosło, nie teoria.",
  },
  {
    icon: Repeat,
    title: "Twoja dźwignia",
    text: "Jak zamienić każde zlecenie w 2-3 kolejne, bez spamowania LinkedIna. Jak zbudować pierwsze case study, które pracuje dla Ciebie przez najbliższe 2 lata. Jak sprawić, żeby HR-manager z jednej firmy opowiadał o Tobie kolegom z dwóch innych przez pełen miesiąc.",
  },
];

const protocolRows = [
  {
    letter: "P",
    name: "Pozycja",
    crossing: "Od „freelancera, który łapie zlecenia” do „autorytet, którego się szuka”",
    builds: "Twoja narracja o sobie, pozycjonowanie, strategia autorytetu",
  },
  {
    letter: "O",
    name: "Odbiorca",
    crossing: "Od „każdy, kto zapłaci” do „ten jeden typ klienta, którego rozwiązuję jak nikt inny”",
    builds: "Segmentacja, język bólu klienta (Clear, Ugly, Specific Problem)",
  },
  {
    letter: "M",
    name: "Metoda",
    crossing: "Od wiedzy u Ciebie do doświadczenia uczestnika",
    builds: "Twój własny framework dydaktyczny, projektowanie warsztatów, Cykl Kolba w praktyce",
  },
  {
    letter: "O",
    name: "Obecność",
    crossing: "Od fotela przy klawiaturze do sceny, sali konferencyjnej, kamery",
    builds: "Techniki trenerskie, praca z głosem i ciałem, zarządzanie grupą, praca z oporem",
  },
  {
    letter: "S",
    name: "Sprzedaż",
    crossing: "Od „wyślij ofertę i się modlić” do rozmowy, w której klient sam dochodzi do decyzji",
    builds: "Cztery Bramy Zobowiązania, konwersacja sprzedażowa 1:1, obsługa decydentów",
  },
  {
    letter: "T",
    name: "Transmisja",
    crossing: "Od pojedynczego zlecenia do strumienia zleceń, który się samoreprodukuje",
    builds: "Mechanizmy follow-upu, case studies, systemowe generowanie poleceń",
  },
];

const weeks = [
  {
    n: 1,
    title: "Pozycja. Kim chcesz być, kiedy to się skończy.",
    text: "Zaczynamy od najtwardszej rozmowy: kim Ty chcesz być za 18 miesięcy, i jak musi brzmieć Twoja narracja o sobie, żeby ten człowiek za 18 miesięcy był w ogóle możliwy? Pracujemy nad Twoim Profilem Autorytetu, nad językiem LinkedInowym, nad pierwszą wersją Twojego 60-sekundowego „strzału” — odpowiedzi na pytanie „czym się zajmujesz?”, po której rozmówca chce wejść głębiej. Zadanie wdrożeniowe: 3 realne rozmowy poprowadzone według naszego formatu.",
  },
  {
    n: 2,
    title:
      "Odbiorca. Bo nie sprzedajesz „szkoleń z AI”. Sprzedajesz rozwiązanie konkretnego bólu konkretnego człowieka.",
    text: "Narzędzie: CUSP Mapping — technika adaptowana z zachodniego podejścia do sprzedaży konsultingowej na polski rynek B2B. Uczę Cię wchodzić w głowę HR-managerki z korporacji finansowej i wyciągać stamtąd dokładne, emocjonalne, bolesne sformułowanie problemu — w jej języku, nie Twoim. To jest moment, w którym Twoja wiedza o Claude przestaje być „ciekawostką techniczną” i zaczyna być „rozwiązaniem, na które ona czeka od 6 miesięcy, ale nie potrafi tego nazwać”.",
  },
  {
    n: 3,
    title: "Metoda. Projektowanie warsztatu, który działa.",
    text: "Tu robimy ciężką pracę dydaktyczną. Cykl Kolba (doświadczenie → refleksja → teoria → zastosowanie) na poziomie, który daje Ci strukturę na całe życie zawodowe — nie podręcznikowej. Projektujemy razem Twój pierwszy flagowy warsztat (1 dzień lub 2 dni) w Twojej niszy — może to być „AI dla HR i rekrutacji”, „Agenci AI w obsłudze klienta”, „Automatyzacja procesów back-office z Claude”, „AI dla działów prawnych i compliance”, „Prompt engineering dla analityków danych” — w zależności od tego, gdzie masz najmocniejsze doświadczenie techniczne. Piszemy scenariusz, nie tylko slajdy. Tworzymy ćwiczenia, które nie mogą nie zadziałać. Na końcu tygodnia masz gotowy produkt, który możesz sprzedawać — i wiesz dokładnie, dlaczego każdy jego element tam jest.",
  },
  {
    n: 4,
    title: "Obecność (część 1). Fizyka sali.",
    text: "Jak stać. Jak oddychać. Co robi Twoja twarz, kiedy uczestnik pyta „czy AI nie zabierze nam pracy” — i co powinna robić. Gdzie stać w sali, żeby przyciągnąć uwagę rozproszonej grupy. Jak używać ciszy (największa broń trenera, o której nikt Cię nie nauczył). Jak pracować z uczestnikiem, który chce Cię sprawdzić — a taki zawsze jest, zwłaszcza kiedy wchodzisz jako ktoś nowy. Trenujemy na symulacjach. Na końcu tygodnia nagrywasz swoje pierwsze 20-minutowe wystąpienie, które rozbieramy razem na czynniki pierwsze.",
  },
  {
    n: 5,
    title: "Obecność (część 2). Dynamika grupy i praca z oporem.",
    text: "Co zrobić z grupą, która nie chce. Jak przekuwać sceptyka na ambasadora w czasie jednego warsztatu. Co zrobić, kiedy ktoś podważa Twoje kompetencje — nawet delikatnie, to się zdarza nawet na poziomie średnich firm. Jak zarządzać energią sali po obiedzie, kiedy wszyscy są w komie trawiennej. To czysto rzemieślnicza robota. Trenujemy na symulacjach 1:1 i na nagraniach z realnych sytuacji, które przerabiałem osobiście przez 20 lat.",
  },
  {
    n: 6,
    title: "Sprzedaż. Cztery Bramy Zobowiązania.",
    text: "Najbardziej niekomfortowy tydzień dla geeka. I jednocześnie ten, który odblokowuje resztę życia zawodowego. Bierzemy framework Four Gates z zachodniego coachingu sprzedażowego — Prawda o Problemie, Prawda o Wizji, Prawda o Zobowiązaniu, Prawda o Decyzji — i adaptujemy go do polskiej konwersacji sprzedażowej B2B. Uczę Cię zadawać pytania, po których klient sam siebie przekonuje, że musi kupić. Bez nacisku. Bez skryptu. Bez „zamknięć”. Na końcu tygodnia odbywasz 3 prawdziwe rozmowy sprzedażowe — z centrami szkoleniowymi, bezpośrednimi klientami albo obiema grupami — i razem robimy ich debrief. Cel tego tygodnia: pierwsze „tak”.",
  },
  {
    n: 7,
    title: "Transmisja. System, który pracuje po Tobie.",
    text: "Jedno zlecenie = średnio 0,3 kolejne. To jest scenariusz geeka-freelancera. U trenera, który opanował ten filar, jeden warsztat = 2,3 kolejne zlecenia w ciągu 90 dni. Różnica jest w systemie, nie w jakości pracy. Uczę Cię, jak: zaprojektować warsztat tak, żeby naturalnie prowadził do rozmowy o kontynuacji; robić follow-up, za który HR-manager Ci dziękuje, zamiast go ignorować; budować bank case studies, który zamienia Twoich byłych klientów w aktywnych sprzedawców Twojej usługi — bez programów partnerskich i prowizji.",
  },
  {
    n: 8,
    title: "Certyfikacja i Twój pierwszy realny dzień jako Trener AI.",
    text: "Ostatni tydzień to egzamin praktyczny: prowadzisz 90-minutowy mini-warsztat dla realnej grupy uczestników (organizuję ją ja — to rzeczywiści ludzie, często z mojej sieci coachingowej i Fundacji HACKERZY.PL, nie aktorzy). Ja siedzę z tyłu i nie pomagam. Po warsztacie robimy 3-godzinny debrief — ostatnią, najgłębszą rozmowę mentorską w tym programie. Jeśli spełniasz standard — a po 7 tygodniach intensywnej pracy zwykle tak — zostajesz Certyfikowanym Trenerem AI Lifehackerzy, z dożywotnim dostępem do sieci certyfikowanych trenerów i pierwszeństwem w zleceniach, których sam nie biorę. Cel minimalny na koniec programu: masz pierwsze płatne zlecenie w kieszeni albo na stole. Zwykle pierwsze zlecenie przychodzi między tygodniem 6 a tygodniem 10 (dwa tygodnie po formalnym końcu programu).",
  },
];

const deliverables = [
  "8 × 1,5-godzinna sesja mentoringowa 1:1, co tydzień, w stałym terminie ustalonym z Tobą. To nie są konsultacje „na wypadek gdybyś miał pytanie”. To prowadzone przeze mnie, strukturalne sesje z agendą i celem.",
  "Nieograniczony kontakt tekstowy (Telegram/Signal) przez cały czas trwania programu. Piszesz, kiedy trafiasz na ścianę. Odpowiadam w ciągu 24h, zwykle szybciej. W tygodniu Twojego pierwszego warsztatu — praktycznie na żywo.",
  "Dwie „interwencje ratunkowe” — sesje na zamówienie (60 min), które możesz wywołać w dowolnym momencie. Zwykle wykorzystuje się je przed pierwszą realną rozmową sprzedażową i przed pierwszym realnym warsztatem po programie.",
  "Nagrania i analiza Twoich wystąpień. Przynosisz materiał (nagrania symulacji od tygodnia 4, nagrania realnych wystąpień od tygodnia 8). Rozbieramy je wspólnie. Dostajesz arkusz obserwacji, który sam potem aplikujesz do następnych sesji.",
  "Twój osobisty Trainer's Toolbox. Nie gotowe szablony od kogoś innego. Twoje własne scenariusze, Twoje ćwiczenia, Twoja oferta, Twoja metoda — projektowane razem ze mną. Na końcu programu jest to gotowy do produkcji zestaw, którego nikt Ci nie zabierze i który jest Twoim własnym IP.",
  "Certyfikacja Lifehackerzy Certified AI Trainer po egzaminie praktycznym.",
  "Dożywotni dostęp do sieci certyfikowanych trenerów — zamknięta grupa Discord + pierwszeństwo w zleceniach, których sam nie biorę.",
  "Jedno fizyczne spotkanie, dzień pracy, na zakończenie programu. W Warszawie lub u Ciebie, do uzgodnienia. Bo niektórych rzeczy nie da się przekazać przez Zoom.",
];

const forYou = [
  "Jesteś biegły w narzędziach AI — Claude, Gemini, ChatGPT, Bielik, Perplexity, agenci, MCP, prompt engineering — i ta biegłość to efekt setek godzin realnej pracy, a nie trzydniowego kursu.",
  "Obecnie łapiesz pojedyncze zlecenia — freelance, na godziny, za setki złotych albo niskie kilka tysięcy. I czujesz w kościach, że to jest dramatycznie poniżej Twojej faktycznej wartości.",
  "Nigdy nie stałeś przed salą pełną dyrektorów, HR-owców, menedżerów średniego szczebla. Cała Twoja praca dzieje się dziś przed ekranem.",
  "Widzisz agentów i systemy, które zbudowałeś, i wiesz, że są warte krotnie więcej, niż za nie dostajesz — tylko jeszcze nie masz mechanizmu, żeby to uzasadnić i pokazać właściwym ludziom.",
  "Jesteś gotowy wyjść zza klawiatury. Nie „planujesz kiedyś”. Teraz. W ciągu najbliższych 2 miesięcy.",
  "Jesteś gotowy pracować. To nie jest kurs, który się „przerabia”. To jest transformacja, którą robimy razem.",
];

const notForYou = [
  "Dopiero zaczynasz z AI i traktujesz ten program jako sposób na szybką zmianę kariery. To nie jest program dla początkujących — zakładam, że narzędzia masz w kościach. Uczymy tu rzemiosła trenerskiego, nie AI.",
  "Szukasz certyfikatu, który powiesisz na ścianie. Dostaniesz certyfikat Lifehackerzy — ale on jest konsekwencją pracy, nie celem.",
  "Chcesz gotowych scenariuszy do odklepania z kartki. Uczymy tu tworzenia Twojego własnego warsztatu — zbudowanego od zera na Twojej unikalnej wiedzy, nie kopiowania cudzego zestawu.",
  "Wolisz dynamikę grupową i networking. To program 1:1. Jesteśmy we dwóch. Czasem to jest niewygodne.",
  "Masz w głowie, że „umiejętności miękkie” to coś gorszego od kompetencji technicznej. Jeśli nie traktujesz komunikacji, prezencji i sprzedaży jako rzemiosła wartego 8 tygodni skupionej pracy — masz rację, że tu Ci nie pasuje.",
];

const transformationItems = [
  {
    label: "Twoje pieniądze",
    text: "Z 36-70 tys. zł rocznie jako freelancer techniczny do 180-360 tys. zł rocznie jako trener AI pracujący 3-4 dni w miesiącu. To jest konkret, ale to jest jedna warstwa.",
  },
  {
    label: "Twoja prezencja",
    text: "Ta sama praca, która sprawia, że jesteś wiarygodny przed salą, zmienia też Twoje rozmowy rekrutacyjne, negocjacje z kontrahentami, rozmowy z bankiem, konferencje rodzicielskie w szkole dzieci. Rzemiosła komunikacji nie da się włączać i wyłączać — działa wszędzie.",
  },
  {
    label: "Twój wybór klientów",
    text: "Przestajesz ścigać setki osób na grupach. Zaczynasz być szukany. Różnica energetyczna między „dam radę wziąć zlecenie” a „niestety w tym kwartale nie mam już miejsc” zmienia sposób, w jaki siebie widzisz.",
  },
  {
    label: "Twoje IP",
    text: "Po 8 tygodniach masz własny flagowy warsztat, scenariusz, ofertę. To jest asset, którego nikt Ci nie zabierze i który pracuje dla Ciebie przez kolejne 3-5 lat bez żadnych zmian.",
  },
  {
    label: "Twoja sieć",
    text: "Dostajesz się do grupy certyfikowanych trenerów Lifehackerzy, której członkowie wzajemnie przekazują sobie zlecenia. W środowisku, w którym większość konkuruje, Ty operujesz w trybie współpracy.",
  },
  {
    label: "Twój spokój",
    text: "Ten, którego dziś nie masz, bo dziś nie wiesz, że nigdy nie byłeś po drugiej stronie mostu. Ludzie, którzy zamknęli tę zmianę, opisują to jedną frazą: „w końcu robię to, do czego zostałem zbudowany”. To nie jest marketingowa fraza. To jest to, co słyszę w 8 tygodniu, kiedy rozmowa schodzi z taktyki na sens.",
  },
];

export default function TrainTheTrainerAI() {
  return (
    <Layout>
      <SEO
        {...getSEOConfig("/program/ttt-ai")}
        jsonLd={[
          getBreadcrumbSchema([
            { name: "Strona główna", path: "/" },
            { name: "Programy", path: "/program" },
            { name: "Train The Trainer: AI", path: "/program/ttt-ai" },
          ]),
          getFAQSchema(tttFaqs),
        ]}
      />
      {(() => {
        const t = getTopicalConfig("/program/ttt-ai");
        return t ? <TopicalMeta {...t} /> : null;
      })()}

      {/* HERO */}
      <section className="py-20 md:py-32 bg-void-glow relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 border border-white/10 rounded-sm px-5 py-2.5 mb-8">
              <Award className="h-4 w-4 text-electric" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-on-dark">
                Edycja inauguracyjna · 1 z 3 miejsc zajęte
              </span>
            </div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-electric mb-4">
              TRAIN THE TRAINER: AI
            </p>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em] break-words">
              Twoja wiedza o AI jest warta 5–10× więcej, niż za nią dziś dostajesz. <br /> Problem jest jeden — i nie jest techniczny.
            </h1>
            <p className="text-xl md:text-2xl text-dim mb-8 leading-relaxed">
              Prywatny, 8-tygodniowy mentoring 1:1. Edycja inauguracyjna: 3 miejsca (od edycji regularnej — maksymalnie 4 na kwartał). Prowadzi Ludwik C. Siadlak — Microsoft Certified Trainer z 20-letnim doświadczeniem szkolenia m.in. jednostek US Army, US Navy, US Air Force i US Marine Corps.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-gradient text-white hover:-translate-y-px hover:shadow-lg text-base px-8 py-6 rounded-sm"
            >
              <Link to="/discovery">
                Zapisz się na rozmowę
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* WHAT YOU ALREADY HAVE */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Zacznijmy od tego, co już masz
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>
                Jesteś biegły w Claude. W Gemini. W ChatGPT. W rzeczach, o których większość „ekspertów AI” na
                LinkedInie nawet nie słyszała.
              </p>
              <p>
                Twój agent, którego zbudowałeś w zeszły weekend na własnym laptopie, robi rzeczy, na które Twoi znajomi
                patrzą z otwartymi ustami. Nowy model od Anthropic wychodzi o 21:00? Masz z nim pierwsze testy do 23:30.
              </p>
              <p>
                To jest coś rzadkiego. Ludzi, którzy naprawdę widzą, co się dzieje pod maską tych modeli, jest w Polsce
                kilka tysięcy. Na ponad siedem milionów aktywnych zawodowo.
              </p>
              <p>I jednocześnie — jeśli czytasz to dalej — wiesz, że coś tu nie gra.</p>
              <p>
                Zlecenia, które łapiesz, to setki złotych. Czasem niskie kilka tysięcy. Klient z grupy na Facebooku.
                Drugi z polecenia siostry. Każde ze swoją „całą historią”: negocjacje,
                wyjaśnianie, dowożenie w nocy, czekanie na przelew. A potem znowu od zera.
              </p>
              <p>
                Patrzysz na agentów, których zbudowałeś — i wiesz, że są warte nie setki złotych. Są warte krocie. Ktoś,
                gdzieś w Polsce, bierze dokładnie takie rozwiązanie i inkasuje za nie pięciocyfrowe stawki dziennie.
              </p>
              <p className="font-bold text-on-light text-xl">Tylko to nie jesteś Ty.</p>
              <p>
                I tu jest rzecz, którą chcę Ci powiedzieć bez owijania w bawełnę.
              </p>
              <p>
                To nie jest kwestia umiejętności technicznej. Twoja jest w top 1%. To kwestia jednej brakującej części układanki — i ta część nie jest oprogramowaniem.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* THE GAP - MARTWA STREFA */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-10 leading-[1.1] tracking-[-0.02em]">
              Przepaść, w której leżą pieniądze
            </h2>
            <div className="space-y-6 text-lg text-dim leading-relaxed">
              <p>Pozwól, że narysuję Ci mapę.</p>
              <p>
                Po jednej stronie — Ty. I jeszcze kilka tysięcy takich jak Ty w Polsce. Może skończyłeś którąś edycję
                AI_Devs albo kupiłeś Developer Jutra od Maćka Aniserowicza. Ludzie z kompetencją techniczną. Którzy
                rozumieją, co się dzieje wewnątrz modelu. Którzy potrafią zbudować rzeczy, o których trenerzy po
                „trzydniowym kursie AI” nie mają bladego pojęcia.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-10">
                <figure className="space-y-3">
                  <img
                    src={devJutraImg}
                    alt="Developer Jutra — 2000+ Developerów Jutra już na pokładzie"
                    width={760}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-sm border border-white/10"
                  />
                  <figcaption className="text-sm text-dim text-center">
                    Źródło: DeveloperJutra.pl (kwiecień 2026)
                  </figcaption>
                </figure>
                <figure className="space-y-3">
                  <img
                    src={aiDevs4Img}
                    alt="AI_devs 4 — 6695 zapisanych, 10000+ absolwentów"
                    width={760}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-auto rounded-sm border border-white/10"
                  />
                  <figcaption className="text-sm text-dim text-center">
                    Źródło: AIDevs.pl (kwiecień 2026)
                  </figcaption>
                </figure>
              </div>

              <p>
                Po drugiej stronie — 2,5 miliona aktywnych firm w Polsce. Zarządy, które w 2026 mają w budżetach linię
                „transformacja AI” i szukają, komu zapłacić, żeby to <em>nie</em> skończyło się kolejną porażką wdrożeniową.
              </p>
              <p>
                Pomiędzy wami — <strong className="text-on-dark">Martwa Strefa</strong>.
              </p>
              <p>
                Oto jak ona wygląda: decydenci nie potrafią ocenić, kto jest dobry. Nie mają narzędzi do weryfikacji oferty. Więc kupują od człowieka, który potrafi mówić ich językiem — nie od człowieka, który potrafi „tylko” zbudować rozwiązanie.
              </p>
              <blockquote className="border-l-4 border-electric pl-6 my-10 italic text-on-dark text-xl md:text-2xl leading-relaxed">
                Przepaść Kompetencyjna nie jest przypadkiem. Ona jest Twoim Rynkiem. Tylko musisz umieć przez nią przejść — i wiedzieć, jak przeprowadzić innych na drugą stronę.
              </blockquote>
              <p>
                Człowiek, który to potrafi, nie jest lepszym inżynierem promptów niż Ty. Ma coś, czego Ty dziś
                jeszcze nie masz: <strong className="text-on-dark">rzemiosło trenerskie i rzemiosło sprzedażowe</strong>
                . Umiejętność stanięcia przed 30 nieufnymi dorosłymi w garniturach i wciągnięcia ich w materiał tak, że
                po warsztacie sami pytają o kolejny termin.
              </p>
              <p className="font-bold text-electric text-xl">
                To są umiejętności. Nie talent. Umiejętności. A umiejętności się trenuje.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* PAUSE - VISION SCENE */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Listopad 2026. Wyobraź sobie jeden konkretny poranek.
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>
                Siedzisz w sali konferencyjnej w centrum dużego miasta. 32 osoby. Przyszło czterech dyrektorów, bo słyszeli od HR-owczyni z innej firmy, że to się warto było odsłuchać.
              </p>
              <p>
                Prowadzisz dzień. Wiesz, gdzie stanąć. Wiesz, co zrobić z osobą, która próbuje Cię sprawdzić (bo taka zawsze jest). Wiesz, kiedy
                zamilknąć na trzy sekundy — i dlaczego ta cisza działa mocniej niż kolejny slajd.
              </p>
              <p>
                Po południu podchodzi do Ciebie dyrektorka HR: „Mamy jeszcze trzy działy. Możemy ustawić kolejny
                termin w styczniu? I — chciałabym porozmawiać o akademii wewnętrznej. Znajdziesz we wtorek 45 minut?”.
              </p>
              <p>
                Wieczorem wystawiasz fakturę. <strong className="text-on-light">8 000 zł</strong> za dzień. Plus styczeń. Plus rozmowa o akademii — kontrakt na 80 000 zł rozłożony na kwartał.
              </p>
              <p>
                Wracasz do domu. Ktoś pyta, jak było. Mówisz: „Dobrze.” Już wiesz, że to się będzie powtarzało.
              </p>
              <p className="font-bold text-on-light text-xl">
                To jest 5 miesięcy od dziś.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* FOR / NOT FOR */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="rounded-md bg-surface border-white/10">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-on-dark mb-2">Dla kogo to jest</h3>
                <p className="text-dim mb-6 text-sm">To jest dla Ciebie, jeśli:</p>
                <ul className="space-y-4">
                  {forYou.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="h-5 w-5 text-electric flex-shrink-0 mt-1" />
                      <span className="text-dim leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-md bg-surface border-white/10">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-on-dark mb-2">Dla kogo to nie jest</h3>
                <p className="text-dim mb-6 text-sm">Dobry mentoring zaczyna się od wiedzy, kto nie jest klientem. Nie wezmę Cię na pokład, jeśli:</p>
                <ul className="space-y-4">
                  {notForYou.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                      <span className="text-dim leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-dim text-sm mt-6 italic">
                  Jeśli rozpoznajesz się w którymkolwiek z tych punktów, program nie jest dla Ciebie dzisiaj. To nie jest
                  osąd. Nie każdy geek ma być trenerem. Niektórzy idą dalej drogą inżynieryjną i tam też są pieniądze — 
                  tylko innym torem.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* WHAT IT IS - PILLARS */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-6 leading-[1.1] tracking-[-0.02em]">
              To, co dostajesz - w 8 tygodniach razem
            </h2>
            <p className="text-lg text-on-light-dim leading-relaxed mb-4">
              <strong className="text-on-light">
                Train The Trainer: AI to prywatny mentoring 1:1, który prowadzi Cię z „technicznego freelancera za kilkaset złotych za zlecenie” do „certyfikowanego trenera AI, który za pierwszy dzień warsztatowy bierze 2 000 zł, a za dzień u bezpośredniego
                klienta&nbsp;- &nbsp;5&nbsp;000–10&nbsp;000&nbsp;zł”.
              </strong>
            </p>
            <p className="text-on-light-dim leading-relaxed">
              To jest moment przełomu. Nie „docelowa gra”. Docelowa gra jest dużo większa — 15 000, 25 000 zł dziennie,
              kontrakty in-house, programy akademii — ale to przychodzi <em>po</em> tej przemianie. Najpierw musisz się
              tu przenieść.
            </p>
            <p className="text-on-light-dim leading-relaxed mt-4">
              Pracujemy nad tym, czego geek techniczny dziś <em>jeszcze nie ma</em>:
            </p>
          </div>
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Card key={i} className="rounded-md bg-paper border-on-light/10 light-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <p.icon className="h-6 w-6 text-electric" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-1">Filar {i + 1}</p>
                      <h3 className="font-heading text-xl font-bold text-on-light leading-tight">{p.title}</h3>
                    </div>
                  </div>
                  <p className="text-on-light-dim leading-relaxed text-sm">{p.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-on-light-dim leading-relaxed mt-12 text-center">
            To jest <strong className="text-on-light">rzemiosło</strong>. A rzemiosła nie uczy się z nagrań ani w grupie
            10 osób. Uczy się w bezpośredniej relacji mistrz-uczeń. Dlatego ten program jest 1:1.
          </p>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* PROTOCOL POMOSTU */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Metoda: Protokół Pomostu
            </h2>
            <p className="text-lg text-dim leading-relaxed mb-4">
              Każda praca, którą tu robimy, to przekraczanie tej samej przepaści — tylko z coraz głębszego poziomu.
            </p>
            <p className="text-dim leading-relaxed">
              Nazwałem to <strong className="text-on-dark">Protokół Pomostu</strong>. Sześć filarów, które razem tworzą
              most od Twojego laptopa do portfela klienta biznesowego:
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-3">
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-dim border-b border-white/10">
              <div className="col-span-3">Filar</div>
              <div className="col-span-5">Co przekraczamy</div>
              <div className="col-span-4">Co buduje</div>
            </div>
            {protocolRows.map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-4 px-6 py-5 rounded-md bg-surface border border-white/10"
              >
                <div className="md:col-span-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-brand-gradient flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0">
                    {row.letter}
                  </div>
                  <span className="font-heading font-bold text-on-dark">{row.name}</span>
                </div>
                <div className="md:col-span-5 text-dim text-sm leading-relaxed">{row.crossing}</div>
                <div className="md:col-span-4 text-dim text-sm leading-relaxed">{row.builds}</div>
              </div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto text-dim text-center mt-12">
            Każdy filar = jeden tydzień głębokiej pracy + jeden tydzień integracji praktycznej. Razem:{" "}
            <strong className="text-on-dark">8&nbsp;tygodni</strong>.
          </p>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* 8 WEEKS */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-4 leading-[1.1] tracking-[-0.02em]">
              Program — 8&nbsp;tygodni, tydzień po tygodniu
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {weeks.map((w) => (
              <Card key={w.n} className="rounded-md bg-paper border-on-light/10 light-card">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-sm bg-brand-gradient flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-80">Tydz.</span>
                      <span className="font-heading font-bold text-xl leading-none">{w.n}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-on-light mb-3 leading-tight">
                        {w.title}
                      </h3>
                      <p className="text-on-light-dim leading-relaxed text-sm md:text-base">{w.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* WHAT YOU GET */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Co konkretnie dostajesz
            </h2>
            <p className="text-lg text-dim leading-relaxed mb-4">
              <strong className="text-on-dark">Osiem tygodni prywatnego dostępu do mnie.</strong> To jest rdzeń oferty.
              Nie „dostęp do platformy”. Nie „cotygodniowe Q&A”. Mnie.&nbsp;1:1.
            </p>
            <p className="text-dim">To oznacza:</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {deliverables.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-md bg-surface border border-white/10">
                <Check className="h-5 w-5 text-electric flex-shrink-0 mt-1" />
                <p className="text-dim leading-relaxed text-sm md:text-base">{item}</p>
              </div>
            ))}
            <Card className="rounded-md bg-brand-gradient border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-8 w-8 text-white flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">Uczciwe rozstanie</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                      Rozmowa wstępna filtruje dopasowanie. Ale jeśli mimo wszystko po 3 tygodniach widzimy,
                      że program się nie uda — rozstajemy się i zwracam Ci 50% proporcjonalnej reszty.
                      Nie chcę pracować z kimś, kto nie chce pracować ze mną. Ani odwrotnie.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* SIX TRANSFORMATIONS */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-6 leading-[1.1] tracking-[-0.02em]">
              Co się tu naprawdę zmienia
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>
                Zanim policzymy, ile to jest warte w złotówkach, jedna uwaga, na której zależy mi najbardziej.
              </p>
              <p>
                Pieniądze są pierwszą falą — najbardziej widoczną, najłatwiejszą do zmierzenia. Ale nie są tym, po co tu
                naprawdę przychodzisz. Przychodzisz, bo w którymś momencie w ciągu ostatnich 18 miesięcy złapałeś się na
                tym, że Twoja kompetencja techniczna nie ma gdzie być widoczna — i zaczęło Cię to kosztować{" "}
                <em>kto jesteś</em>, nie tylko ile zarabiasz.
              </p>
              <p>Ta praca zmienia sześć rzeczy. Pieniądze są jedną z nich:</p>
            </div>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {transformationItems.map((item, i) => (
              <Card key={i} className="rounded-md bg-paper border-on-light/10 light-card">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-bold text-on-light mb-3">{item.label}</h3>
                  <p className="text-on-light-dim leading-relaxed text-sm">{item.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* ROI */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Policzmy uczciwie
            </h2>
            <p className="text-lg text-dim leading-relaxed mb-12">
              Filozofia wysokich ofert mówi, że program powinien dostarczać co najmniej 10× kwotę inwestycji w realnej,
              mierzalnej wartości. Zróbmy tę matematykę. Bez naciągania.
            </p>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-electric" />
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark">
                    Zwrot z inwestycji - ile, jak szybko
                  </h3>
                </div>
                <div className="space-y-4 text-dim leading-relaxed">
                  <p>
                    Dziś łapiesz zlecenia za setki złotych albo niskie kilka tysięcy. Zakładamy realistycznie: średnio 1
                    500 zł za typowe zlecenie freelancerskie, 2-4 zlecenia miesięcznie. Roczny przychód z tej ścieżki:{" "}
                    <strong className="text-on-dark">36&nbsp;000&nbsp;-&nbsp;70&nbsp;000 zł</strong>.
                  </p>
                  <p>Cel programu: ustawić Cię na ścieżce trenera AI. Pierwsze kamienie milowe, realistycznie:</p>
                  <ul className="space-y-2 pl-6 list-disc marker:text-electric">
                    <li>
                      <strong className="text-on-dark">Pierwsze zlecenie dla centrum szkoleniowego:</strong> 1&nbsp;500&nbsp;-&nbsp;2&nbsp;
                      500 zł netto za dzień (często z perspektywą stałej współpracy — 2-4 dni miesięcznie,
                      powtarzalnie).
                    </li>
                    <li>
                      <strong className="text-on-dark">Pierwsze bezpośrednie zlecenie u klienta końcowego:</strong> 5&nbsp;000&nbsp;-&nbsp;10&nbsp;000&nbsp;zł netto za dzień.
                    </li>
                    <li>
                      <strong className="text-on-dark">Przy 3-4 dniach szkoleniowych miesięcznie</strong> (mieszanka
                      centrów i klientów bezpośrednich), stabilny przychód po 6 miesiącach: 15&nbsp;000&nbsp;-&nbsp;30&nbsp;000&nbsp;zł netto
                      miesięcznie.
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
                  Return OF investment — kiedy odzyskasz pieniądze
                </h3>
                <ul className="space-y-3 pl-6 list-disc marker:text-electric text-dim leading-relaxed">
                  <li>
                    <strong className="text-on-dark">Edycja inauguracyjna (7 999 zł):</strong> 1 dzień u bezpośredniego
                    klienta pokrywa inwestycję z nawiązką. 4 dni w centrum szkoleniowym pokrywają ją w pełni.
                    Realistyczne okno: <strong className="text-electric">60-90 dni po zakończeniu programu.</strong>
                  </li>
                  <li>
                    <strong className="text-on-dark">Cena regularna (24 999 zł):</strong> 3-5 dni u bezpośredniego
                    klienta albo 10-12 dni w centrum szkoleniowym. Realistyczne okno:{" "}
                    <strong className="text-electric">4-6 miesięcy.</strong>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
                  Return ON investment przez 2 lata
                </h3>
                <div className="space-y-4 text-dim leading-relaxed">
                  <p>
                    Przy spokojnym scenariuszu — 3 dni szkoleniowe miesięcznie, średnia stawka 4 000 zł netto — 
                    24-miesięczny przychód z tej ścieżki: <strong className="text-on-dark">288 000 zł netto.</strong>
                  </p>
                  <p>Twoja obecna ścieżka freelancerska za ten sam czas: ~60 000 — 120 000 zł netto.</p>
                  <p>
                    Różnica: <strong className="text-electric">170 000 — 230 000 zł netto</strong> w ciągu dwóch lat.
                    Program kosztuje 3-4% tej różnicy.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
                  Co jeszcze staje się możliwe — dopiero po tej zmianie
                </h3>
                <ul className="space-y-2 pl-6 list-disc marker:text-electric text-dim leading-relaxed">
                  <li>
                    Prowadzenie programów in-house dla średnich firm i korporacji (3-6 miesięcy, kontrakt 30-100 tys.
                    zł)
                  </li>
                  <li>
                    Własna mała akademia, w której <em>Ty</em> szkolisz kolejnych — przychód skalowalny niezależny od
                    Twojego czasu
                  </li>
                  <li>Prelekcje na konferencjach z 4-cyfrowymi honorariami</li>
                  <li>
                    Książka, podcast, kurs online — na fundamencie autorytetu zbudowanego przez rzemiosło, nie przez
                    marketing
                  </li>
                  <li>
                    Pozycja „konsultanta AI” u stałego klienta (retainer 8-15 tys. zł miesięcznie, praca 4-6 dni
                    miesięcznie)
                  </li>
                </ul>
                <p className="text-dim mt-6 leading-relaxed">
                  Każda z tych rzeczy jest dziś poza Twoim zasięgiem — nie dlatego, że nie masz kompetencji, tylko
                  dlatego, że nie masz Protokołu Pomostu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* WHY ME - moved before Investment */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Dlaczego ja — i dlaczego to ważne, że sam przez to przeszedłem
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>Zacznę od początku, bo jest w tej historii coś, co ma znaczenie dla Ciebie.</p>
              <p>
                Byłem geek. Wiedziałem wszystko o swoich narzędziach. I na pierwszym prawdziwym wystąpieniu mówiłem tak szybko, że moderator musiał mnie delikatnie przerwać po 7 minutach z planowanych 40.
              </p>
              <p className="font-bold text-on-light">Nie z braku wiedzy. Z braku rzemiosła.</p>
              <p>
                Kolejne kilkanaście lat spędziłem, budując to rzemiosło na bardzo wymagającej szkole — salach konferencyjnych baz wojskowych. Szkolenia dla jednostek US Army w Wiesbaden, US Air Force w Ramstein, US Navy w Neapolu, US Marine Corps i personelu NATO w Mons i Vicenzy. Oficerowie operacyjni, których zawodem jest weryfikowanie kompetencji innych w 30 sekund.
              </p>
              <p className="font-bold text-on-light">
                Jeśli nauczyłem się robić to tam — mogę nauczyć Cię robić to w polskiej sali konferencyjnej.
              </p>
              <p>
                Dziś jestem też coachem transformacyjnym i twórcą ekosystemu Lifehackerzy. Ten program to nie „kurs z certyfikatem”. To jest to samo przejście, przez które ja sam przeszedłem — ustrukturyzowane i skrócone do 8 tygodni.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* INVESTMENT */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Inwestycja
            </h2>
            <p className="text-lg text-dim leading-relaxed">
              Jedna uczciwa liczba, zanim przejdziesz dalej:
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="rounded-md border-electric/40 bg-surface border relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-gradient text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                Edycja inauguracyjna
              </div>
              <CardContent className="p-8 pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-dim mb-2">
                  Q2 2026 · 3 miejsca
                </p>
                <div className="mb-4">
                  <span className="font-heading text-5xl font-bold text-on-dark">7 999 zł</span>
                  <span className="text-dim ml-2">netto</span>
                </div>
                <p className="text-on-dark font-bold text-sm mb-4">Jedno miejsce zajęte. Zostały 2.</p>
                <p className="text-dim text-sm leading-relaxed mb-6">
                  <strong className="text-on-dark">Bonus:</strong> dwa dodatkowe dni mentoringu po zakończeniu programu
                  (9 i 12 miesiąc) do kalibracji praktyki.
                </p>
                <Button asChild size="lg" className="w-full bg-brand-gradient text-white hover:-translate-y-px hover:shadow-lg rounded-sm">
                  <Link to="/discovery">
                    Zapisz się na rozmowę
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-md border-white/10 bg-surface">
              <CardContent className="p-8 pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-dim mb-2">
                  Cena regularna od Q3 2026
                </p>
                <div className="mb-4">
                  <span className="font-heading text-5xl font-bold text-on-dark">24 999 zł</span>
                  <span className="text-dim ml-2">netto</span>
                </div>
                <p className="text-dim text-sm leading-relaxed mb-6">
                  Maksymalnie 4 miejsca na kwartał.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-sm border-white/20 text-on-dark hover:bg-white/5"
                >
                  <Link to="/discovery">Zarezerwuj miejsce w kolejce</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-10 space-y-4 text-dim leading-relaxed">
            <p>
              Płatność w dwóch ratach możliwa. Płatność w całości — dodatkowy dzień mentoringu w 6. miesiącu
              gratis. Program kwalifikuje się do odpisania jako koszt uzyskania przychodu.
            </p>
            <p className="text-sm">
              <strong className="text-on-dark">Dlaczego tak niska cena teraz:</strong>{" "}
              Buduję pierwsze case studies. 3 osoby, które przejdą przez program teraz, dostarczą mi materiał dowodowy — wyniki, liczby, historie. To fair deal: Ty dostajesz cenę niższą o ponad 17 000 zł, ja dostaję social proof. Kiedy te miejsca się wypełnią, cena inauguracyjna nie wraca.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* DECISION + CTA */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Decyzja — i rozmowa, która ją poprzedza
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed mb-10">
              <p>Nie sprzedaję tego programu przez formularz. Sprzedaję go przez rozmowę.</p>
              <p>
                Powód jest prosty: nie biorę każdego. W 2025 odmówiłem 6 osobom, które były gotowe zapłacić pełną
                stawkę — ale nie widziałem w nich tego, co potrzebne, żeby program się udał. Program skuteczny to
                program, który skutecznie kończy się transformacją. Transformacja wymaga zgodności energii z mojej
                strony i z Twojej.
              </p>
              <p>
                Dlatego pierwszy krok to{" "}
                <strong className="text-on-light">30-minutowa rozmowa ze mną, 1:1, online</strong>. Bezpłatna, bez
                zobowiązań.
              </p>
              <p>
                Framing tej rozmowy jest taki: chcę się dowiedzieć, czy to, co robię, może Ci pomóc. Jeśli może — 
                umawiamy się na start. Jeśli nie może — powiem Ci to wprost i często wskażę kierunek, w którym warto
                iść. Nawet jeśli okaże się, że nie pracujemy razem, ta rozmowa jest warta Twojego czasu.
              </p>
              <p>W praktyce:</p>
              <ol className="space-y-3 pl-6 list-decimal marker:text-electric marker:font-bold">
                <li>
                  Opowiadasz mi o sobie — doświadczenie techniczne, zlecenia, które dziś łapiesz, gdzie chcesz dojść.
                </li>
                <li>Zadaję Ci kilka pytań, które pomogą nam obu zobaczyć, czy to jest spójne.</li>
                <li>Jeśli tak — omawiam szczegóły programu i startujemy.</li>
                <li>
                  Jeśli nie — mówię Ci uczciwie dlaczego, i często wskazuję kierunek, w którym warto iść.
                </li>
              </ol>
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-gradient text-white hover:-translate-y-px hover:shadow-lg text-base px-8 py-6 rounded-sm"
              >
                <Link to="/discovery">
                  Zapisz się na rozmowę
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* FAQ */}
      <section className="py-24 md:py-32 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-10 leading-[1.1] tracking-[-0.02em] text-center">
              Najczęstsze pytania
            </h2>
            <div className="space-y-4">
              {tttFaqs.map((faq, i) => (
                <details key={i} className="group border border-white/10 rounded-md bg-surface">
                  <summary className="flex items-start justify-between cursor-pointer p-5 text-on-dark font-medium hover:text-electric transition-colors gap-4">
                    <span>{faq.question}</span>
                    <span className="text-dim group-open:rotate-45 transition-transform text-xl flex-shrink-0">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-dim leading-relaxed">{faq.answer}</div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 divider-gradient" />

      {/* CLOSING */}
      <section className="py-24 md:py-32 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Ostatnie słowo
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed mb-10">
              <p>
                Jeśli masz kompetencję techniczną, której Twoje konto bankowe dotąd nie zauważyło — napisz do mnie.
              </p>
              <p>
                Jeśli wolisz jeszcze trochę poczekać, zbudować kolejnego agenta, przeczytać jeszcze jedną książkę zanim
                „naprawdę zaczniesz” — to też jest uczciwa odpowiedź. Wracaj, kiedy będziesz gotowy. Rynek na Ciebie nie
                będzie czekał wiecznie, ale ja tu jestem.
              </p>
              <p>Do usłyszenia,</p>
              <p>
                <strong className="text-on-light">Ludwik Siadlak</strong>
                <br />
                <span className="text-sm">
                  Microsoft Certified Trainer · Twórca{" "}
                  <a
                    href="https://lifehackerzy.pl"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-electric hover:underline"
                  >
                    Lifehackerzy
                  </a>{" "}
                  · Twój mentor w Train The Trainer: AI
                </span>
              </p>
              <p className="text-on-light-dim italic border-l-4 border-on-light/20 pl-6">
                P.S. Rynek szkoleń AI w Polsce jest dziś dokładnie tam, gdzie był rynek szkoleń z Excela w 2005. Za 3 lata będzie nasycony. Trenerzy, którzy wejdą teraz — z rzemiosłem — zbudują praktyki na 15 lat.
              </p>
              <p className="text-on-light-dim italic border-l-4 border-on-light/20 pl-6">
                P.P.S. Jeśli masz wątpliwości, czy to jest dla Ciebie — zapisz się na rozmowę wstępną. Jest bezpłatna, trwa 30 minut i nawet jeśli nie wejdziemy w program, wyjdziesz z niej z czymś konkretnym. To jedyne miejsce, gdzie mogę Ci to obiecać.
              </p>
            </div>
            <div className="text-center mb-10">
              <Button
                asChild
                size="lg"
                className="bg-brand-gradient text-white hover:-translate-y-px hover:shadow-lg text-base px-8 py-6 rounded-sm"
              >
                <Link to="/discovery">
                  Zapisz się na rozmowę
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-on-light-dim italic text-center max-w-2xl mx-auto">
              Program Train The Trainer: AI prowadzony jest przez Lifehackerzy / SIADLAK.VIP. Certyfikat „Lifehackerzy
              Certified AI Trainer” wydawany jest po pozytywnym zaliczeniu egzaminu praktycznego w 8. tygodniu. Edycja
              inauguracyjna Q2 2026 — 3 miejsca w cenie 7 999 zł netto. Edycja regularna od Q3 2026 — maksymalnie 4
              miejsca na kwartał, 24 999 zł netto.
            </p>
          </div>
        </div>
      </section>

      <RelatedPrograms currentPath="/program/ttt-ai" />
    </Layout>
  );
}
