import Layout from "@/components/layout/Layout";
import { Link } from "react-router-dom";
import { ArrowRight, Check, X, Brain, ShieldCheck, Award, TrendingUp, MessageSquare, Mic, Repeat } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getBreadcrumbSchema, getFAQSchema } from "@/lib/structured-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import RelatedPrograms from "@/components/sections/RelatedPrograms";

const tttFaqs = [
  {
    question:
      "Dziś łapię zlecenia za 1 500 zł. Dlaczego miałbym zainwestować 8 000 zł — ponad 5 moich obecnych dniówek — w program, żeby to zmienić?",
    answer:
      "Bo za dwa lata freelance'u na obecnej ścieżce zarobisz około 60-120 tys. zł. Za dwa lata pracy jako certyfikowany trener AI — 250-400 tys. zł. Różnica rzędu 200 tys. zł. Program kosztuje 3-4% tej różnicy. To jest dźwignia. Jeśli boisz się zainwestować 3% wyniku, który zmieni Ci następne 24 miesiące — to jest dokładnie ten mental, na który ten program odpowiada.",
  },
  {
    question: "Czy jest wersja grupowa, tańsza?",
    answer:
      "Nie. Nie dlatego, że nie potrafiłbym jej zrobić — tylko dlatego, że dla geeka uczącego się rzemiosła trenerskiego grupa nie działa. Rzemiosła trenerskiego uczy się w bezpośredniej relacji, tak samo jak rzemiosła stolarskiego czy chirurgicznego. W grupie można się nauczyć teorii i zestawu technik. W relacji 1:1 — faktycznie się transformujesz. Różnica jest ta sama, co między kursem angielskiego z podręcznika a rokiem życia w Londynie.",
  },
  {
    question: "Co jeśli po 3 tygodniach okaże się, że to nie dla mnie?",
    answer:
      "Rozmowa kwalifikacyjna ma za zadanie wyeliminować ten scenariusz. Ale jeśli mimo wszystko po 3 tygodniach widzimy, że program się nie uda — rozstajemy się, zwracam Ci 50% proporcjonalnej reszty. Nie chcę pracować z kimś, kto nie chce pracować ze mną. Ani odwrotnie.",
  },
  {
    question: "Boję się stać przed ludźmi. Naprawdę się boję. Czy ten program jest dla mnie?",
    answer:
      "Tak. Szczególnie dla Ciebie. Większość moich najlepszych uczniów była dokładnie w tym miejscu, w którym Ty jesteś. Strach przed wystąpieniem jest trenowalny. To nie jest kwestia osobowości — to kwestia liczby powtórzeń w bezpiecznym środowisku. Tygodnie 4 i 5 programu są zaprojektowane dokładnie pod to. Na koniec programu prowadzisz 90-minutowy warsztat przed realną grupą. Nie dlatego, że będziesz gotowy w 100%. Dlatego, że ludzie stający się w pełni gotowi to ludzie, którzy nigdy nie wchodzą na scenę. Uczymy się działania w obliczu strachu, nie jego eliminacji.",
  },
  {
    question: "Czy muszę mieć firmę, żeby wziąć udział?",
    answer:
      "Nie, ale ułatwia to rozliczenie. Jeśli jesteś na etacie i chcesz przejść do praktyki trenerskiej — to też działa. Jeśli nie wiesz, czy etat jest dobrym punktem startu — pomówmy o tym w rozmowie kwalifikacyjnej.",
  },
  {
    question: "Jak szybko mogę zacząć?",
    answer:
      "Najbliższa edycja rusza w Q2 2026. 3 miejsca w cenie inauguracyjnej. Jeśli nie trafisz — kolejna edycja Q3 2026 już w cenie regularnej 24 999 zł.",
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
    text: "Jak zamienić każde zlecenie w 2–3 kolejne, bez spamowania LinkedIna. Jak zbudować pierwsze case study, które pracuje dla Ciebie przez najbliższe 2 lata. Jak sprawić, żeby HR-manager z jednej firmy opowiadał o Tobie kolegom z dwóch innych przez pełen miesiąc.",
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
    text: "Zaczynamy od najtwardszej rozmowy: kim Ty chcesz być za 18 miesięcy, i jak musi brzmieć Twoja narracja o sobie, żeby ten człowiek za 18 miesięcy był w ogóle możliwy?. Pracujemy nad Twoim Profilem Autorytetu, nad językiem LinkedInowym, nad pierwszą wersją Twojego 60-sekundowego „strzału” — odpowiedzi na pytanie „czym się zajmujesz?”, po której rozmówca chce wejść głębiej. Zadanie wdrożeniowe: 3 realne rozmowy poprowadzone według naszego formatu.",
  },
  {
    n: 2,
    title:
      "Odbiorca. Bo nie sprzedajesz „szkoleń z AI”. Sprzedajesz rozwiązanie konkretnego bólu konkretnego człowieka.",
    text: "Narzędzie: CUSP Mapping™ — technika adaptowana z zachodniego podejścia do sprzedaży konsultingowej na polski rynek B2B. Uczę Cię wchodzić w głowę HR-managerki z korporacji finansowej i wyciągać stamtąd dokładne, emocjonalne, bolesne sformułowanie problemu — w jej języku, nie Twoim. To jest moment, w którym Twoja wiedza o Claude przestaje być „ciekawostką techniczną” i zaczyna być „rozwiązaniem, na które ona czeka od 6 miesięcy, ale nie potrafi tego nazwać”.",
  },
  {
    n: 3,
    title: "Metoda. Projektowanie warsztatu, który działa.",
    text: "Tu robimy ciężką pracę dydaktyczną. Cykl Kolba (doświadczenie → refleksja → teoria → zastosowanie) na poziomie, który daje Ci strukturę na całe życie zawodowe — nie podręcznikowej. Projektujemy razem Twój pierwszy flagowy warsztat (1 dzień lub 2 dni). Piszemy scenariusz, nie tylko slajdy. Tworzymy ćwiczenia, które nie mogą nie zadziałać. Na końcu tygodnia masz gotowy produkt, który możesz sprzedawać — i wiesz dokładnie, dlaczego każdy jego element tam jest.",
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
    text: "Jedno zlecenie = średnio 0,3 kolejne. To jest scenariusz geeka-freelancera. U trenera, który opanował ten filar, jeden warsztat = 2,3 kolejne zlecenia w ciągu 90 dni. Różnica jest w systemie, nie w jakości pracy. Uczę Cię, jak zaprojektować warsztat tak, żeby naturalnie prowadził do rozmowy o kontynuacji; robić follow-up, za który HR-manager Ci dziękuje, zamiast go ignorować; budować bank case studies, który zamienia Twoich byłych klientów w aktywnych sprzedawców Twojej usługi — bez programów partnerskich i prowizji.",
  },
  {
    n: 8,
    title: "Certyfikacja i Twój pierwszy realny dzień jako Trener AI.",
    text: "Ostatni tydzień to egzamin praktyczny: prowadzisz 90-minutowy mini-warsztat dla realnej grupy uczestników (organizuję ją ja — to rzeczywiści ludzie, często z mojej sieci coachingowej, społeczności LIFEHACKERZY i Fundacji HACKERZY.PL — realny feedback, nie „klepanie po ramieniu”). Ja siedzę z tyłu i nie pomagam. Po warsztacie robimy całogodzinny debrief — ostatnią, najgłębszą rozmowę mentorską w tym programie. Jeśli spełniasz standard — a po 7 tygodniach intensywnej pracy zwykle tak — zostajesz Certyfikowanym Trenerem AI HACKERZY.PL, z dożywotnim dostępem do sieci certyfikowanych trenerów i pierwszeństwem w zleceniach, których sam nie biorę. Cel minimalny na koniec programu: masz pierwsze płatne zlecenie w kieszeni albo na stole. Zwykle pierwsze zlecenie przychodzi między tygodniem 6 a tygodniem 12 (cztery tygodnie po formalnym końcu programu).",
  },
];

const deliverables = [
  "8 × półtoragodzinna sesja mentoringowa 1:1, co tydzień, w stałym terminie ustalonym z Tobą. To nie są konsultacje „na wypadek gdybyś miał pytanie”. To prowadzone przeze mnie, strukturalne sesje z agendą i celem.",
  "Nieograniczony kontakt tekstowy (prywatny Slack) przez cały czas trwania programu. Piszesz, kiedy trafiasz na ścianę. Odpowiadam w ciągu 24h, zwykle szybciej. W tygodniu Twojego pierwszego warsztatu — praktycznie na żywo.",
  "Dwa „interwencje ratunkowe” — sesje na zamówienie (60 min), które możesz wywołać w dowolnym momencie. Zwykle wykorzystuje się je przed pierwszą realną rozmową sprzedażową i przed pierwszym realnym warsztatem po programie.",
  "Nagrania i analiza Twoich wystąpień. Przynosisz materiał (nagrania symulacji od tygodnia 4, nagrania realnych wystąpień od tygodnia 8). Rozbieramy je wspólnie. Dostajesz arkusz obserwacji, który sam potem aplikujesz do następnych sesji.",
  "Twój osobisty Trainer's Toolbox. Nie gotowe szablony od kogoś innego. Twoje własne scenariusze, Twoje ćwiczenia, Twoja oferta, Twoja metoda — projektowane razem ze mną. Na końcu programu jest to gotowy do produkcji zestaw, którego nikt Ci nie zabierze i który jest Twoim własnym IP.",
  "Certyfikacja HACKERZY.PL: Certified AI Trainer po egzaminie praktycznym.",
  "Dożywotni dostęp do sieci certyfikowanych trenerów — zamknięta grupa Discord + pierwszeństwo w zleceniach, których sam nie biorę.",
  "Jedno fizyczne spotkanie, dzień pracy, na zakończenie programu. W Warszawie lub u Ciebie, do uzgodnienia. Bo niektórych rzeczy nie da się przekazać przez Zoom.",
];

const forYou = [
  "Jesteś biegły w narzędziach AI — Claude, Gemini, ChatGPT, agenci, MCP, prompt engineering — i ta biegłość to efekt setek godzin realnej pracy, a nie trzydniowego kursu.",
  "Obecnie łapiesz pojedyncze zlecenia — freelance, na godziny, za setki złotych albo niskie kilka tysięcy. Czujesz w kościach, że to jest dramatycznie poniżej Twojej faktycznej wartości.",
  "Nigdy nie stałeś przed salą pełną dyrektorów, HR-owców, menedżerów średniego szczebla. Cała Twoja praca dzieje się dziś przed ekranem — na Twoim komputerze, może czasem na czacie z klientem.",
  "Widzisz agentów i systemy, które zbudowałeś, i wiesz, że są warte krotnie więcej, niż za nie dostajesz — tylko jeszcze nie masz mechanizmu, żeby to uzasadnić i pokazać właściwym ludziom.",
  "Jesteś gotowy wyjść zza klawiatury. Nie „planujesz kiedyś”. Teraz. W ciągu najbliższych 2 miesięcy.",
  "Jesteś gotowy pracować. To nie jest kurs, który się „przerabia”. To jest transformacja, którą robimy razem.",
];

const notForYou = [
  "Dopiero zaczynasz z AI i traktujesz ten program jako sposób na szybką zmianę kariery. To nie jest program dla początkujących. Zakładam, że narzędzia masz w kościach. Uczymy tu rzemiosła trenerskiego, nie AI.",
  "Szukasz certyfikatu z hologramem, który powiesisz na ścianie. Dostaniesz certyfikat Lifehackerzy — ale on jest konsekwencją pracy, nie celem.",
  "Chcesz gotowych scenariuszy do odklepania z kartki. Uczymy tu tworzenia własnego warsztatu — zbudowanego od zera na Twojej unikalnej wiedzy, nie kopiowania cudzego zestawu.",
  "Wolisz dynamikę grupową, społeczność, networking. To program 1:1. Jesteśmy we dwóch. Czasem to jest niewygodne.",
  "Masz w głowie, że „umiejętności miękkie” to coś gorszego, mniej poważnego od kompetencji technicznej. Jeśli nie traktujesz komunikacji, prezencji i sprzedaży jako rzemiosła wartego 8 tygodni skupionej pracy — zostajesz tam, gdzie jesteś.",
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
                Edycja inauguracyjna · Q2 2026 · 3 miejsca
              </span>
            </div>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              TRAIN THE TRAINER: AI
            </h1>
            <p className="text-xl md:text-2xl text-dim mb-8 leading-relaxed">
              Prywatny, 8-tygodniowy mentoring 1:1 dla ekspertów AI, którzy zbudowali potęgę na swoim laptopie — i są
              gotowi w końcu dostawać za nią stawki, które są warci.
            </p>
            <p className="text-sm md:text-base text-dim italic mb-10 max-w-2xl mx-auto">
              Prowadzi Ludwik C. Siadlak — Microsoft Certified Trainer, który przez dwie dekady uczył oficerów US Army,
              Navy, Air Force i Marine Corps w bazach NATO w Niemczech, Belgii i Włoszech, jak obsługiwać systemy, w
              których margines błędu nie istnieje. Dziś uczy polskich ekspertów AI, jak przekładać kompetencję
              techniczną na stawki, które ona jest warta. Maksymalnie 4 miejsca na kwartał.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-brand-gradient text-white hover:opacity-90 text-base px-8 py-6 rounded-sm"
            >
              <Link to="/discovery">
                Zapisz się na rozmowę kwalifikacyjną
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* TRUTH THAT HURTS */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Zacznijmy od prawdy, która boli
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>
                Biegłość w Claude Code czy Gemini to dziś podstawa. Prawdziwa gra toczy się w warstwie integracji:
                MCP, skill.md, autonomiczne agenty — o których większość tzw. „ekspertów AI” na LinkedInie pewnie
                nawet nie słyszała.
              </p>
              <p>
                Twój agent, którego zbudowałeś w zeszły weekend na własnym laptopie, robi rzeczy, na które Twoi znajomi
                patrzą z otwartymi ustami. Nowy model od Anthropic wychodzi o 21:00? Masz z nim zrobione pierwsze testy
                do 23:30. Czytasz release notes OpenAI jak inni czytają sport.
              </p>
              <p>I jednocześnie — jeśli jesteś tu dalej — coś fundamentalnie nie gra.</p>
              <p>
                Zlecenia, które łapiesz, to setki złotych. Czasem, jak dobrze pójdzie, niskie kilka tysięcy. Klient
                znaleziony na grupie na Facebooku. Drugi z polecenia siostry. Trzeci — przez zupełny przypadek.
              </p>
              <p>
                Każde zlecenie osobno to „cała historia”: negocjacje, wyjaśnianie, dowożenie w nocy, wystawianie
                faktury, czekanie na przelew. A potem znowu od zera. Znowu szukanie. Znowu tłumaczenie komuś, po co to
                wszystko.
              </p>
              <p>
                I patrzysz na to, co zbudowałeś na swoim komputerze — na tego agenta, tę automatyzację, ten system — i{" "}
                <em>wiesz</em>, że to jest warte nie setki złotych. To jest warte krocie. Ktoś, gdzieś w Polsce, bierze
                dokładnie takie rozwiązanie i inkasuje za nie pięciocyfrowe stawki dziennie.
              </p>
              <p>Tylko to nie jesteś Ty.</p>
              <p className="font-bold text-on-light text-xl">
                To nie jest Twoja wina. Ale jest Twoja odpowiedzialność.
              </p>
              <p>
                Bo prawda jest taka, i powiem Ci ją bez owijania: rynek nie płaci za to, co potrafisz <em>zbudować</em>.
                Rynek płaci za to, co potrafisz <em>przekazać</em> innemu człowiekowi tak, żeby <em>on</em> poczuł, że
                musi to mieć.
              </p>
              <p>I to jest dokładnie ta umiejętność, której na laptopie się nie nabywa.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* THE GAP */}
      <section className="py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-10 leading-[1.1] tracking-[-0.02em]">
              Przepaść, w której leżą pieniądze
            </h2>
            <div className="space-y-6 text-lg text-dim leading-relaxed">
              <p>Pozwól, że narysuję Ci mapę.</p>
              <p>
                Po jednej stronie — Ty. I jeszcze kilka tysięcy takich jak Ty w Polsce. Ludzi, którzy mają kompetencję
                techniczną. Którzy rozumieją, co się dzieje wewnątrz modelu. Którzy potrafią zbudować rzeczy, o których
                trenerzy po „trzydniowym kursie AI” nie mają bladego pojęcia.
              </p>
              <p>
                Po drugiej stronie — 2,5 miliona aktywnych firm w Polsce. Zarządy, które w 2026 mają w budżetach linię
                „transformacja AI” i szukają, komu zapłacić, żeby to <em>nie</em> skończyło się porażką. HR-y
                korporacji, centra szkoleniowe, urzędy, banki, firmy produkcyjne — cała gospodarka potrzebuje{" "}
                <em>dziś</em> kogoś, kto pokaże pracownikom, jak zacząć używać tych narzędzi w realnej pracy.
              </p>
              <p>
                Pomiędzy wami — <strong className="text-on-dark">przepaść kompetencyjna</strong>. Decydenci po drugiej
                stronie nie mają pojęcia, czego nie wiedzą. Nie potrafią ocenić, kto jest dobry. Nie potrafią
                zweryfikować oferty. Więc kupują to, co brzmi wiarygodnie. Kupują od człowieka, który potrafi{" "}
                <em>mówić</em> ich językiem, nie od człowieka, który potrafi <em>budować</em> w ich problemie.
              </p>
              <blockquote className="border-l-4 border-electric pl-6 my-10 italic text-on-dark text-xl md:text-2xl leading-relaxed">
                W tej przepaści — nie na jej brzegach, dokładnie w środku — leżą pieniądze.
              </blockquote>
              <p>
                Nie leżą po Twojej stronie. Ty konkurujesz z 50 innymi geekami o te same zlecenia, licytując się w dół.
              </p>
              <p>Nie leżą po stronie biznesu. Biznes nie wie, czego nie wie.</p>
              <p className="font-bold text-on-dark">
                Leżą w moście. W człowieku, który potrafi przejść tę przepaść w obie strony — i przeprowadzić innych.
              </p>
              <p>
                Ten człowiek nie jest <em>lepszym</em> inżynierem promptów. Ten człowiek ma coś, czego Ty dziś jeszcze
                nie masz: <strong className="text-on-dark">rzemiosło trenerskie i rzemiosło sprzedażowe</strong>.
                Umiejętność stanięcia przed 30 nieufnymi dorosłymi w garniturach i wciągnięcia ich w materiał tak, że po
                warsztacie sami pytają, kiedy kolejny. Umiejętność usiąść naprzeciw dyrektora HR i przez 45 minut tak
                poprowadzić rozmowę, że na końcu <em>on</em> mówi: „rozumiem, wchodzimy w to, jaka jest stawka za
                dzień?”.
              </p>
              <p>To są umiejętności. Nie talent. Umiejętności. A umiejętności się trenuje.</p>
              <p className="font-bold text-electric text-xl">Train The Trainer: AI to jest właśnie o tym trenowaniu.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* FOR / NOT FOR */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            <Card className="rounded-md border-on-light/10 light-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-on-light mb-2">Dla kogo to jest</h3>
                <p className="text-on-light-dim mb-6 text-sm">To jest dla Ciebie, jeśli:</p>
                <ul className="space-y-4">
                  {forYou.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <Check className="h-5 w-5 text-electric flex-shrink-0 mt-1" />
                      <span className="text-on-light-dim leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card className="rounded-md border-on-light/10 light-card">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-on-light mb-2">Dla kogo to nie jest</h3>
                <p className="text-on-light-dim mb-6 text-sm">Nie wezmę Cię na pokład, jeśli:</p>
                <ul className="space-y-4">
                  {notForYou.map((item, i) => (
                    <li key={i} className="flex gap-3">
                      <X className="h-5 w-5 text-destructive flex-shrink-0 mt-1" />
                      <span className="text-on-light-dim leading-relaxed text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-on-light-dim text-sm mt-6 italic">
                  Jeśli coś z tej listy Cię ugryzło — to nie jest dla Ciebie. I to jest w porządku. Nie każdy geek musi
                  stać na scenie.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* WHAT IT IS — PILLARS */}
      <section className="py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Co to <em>właściwie</em> jest
            </h2>
            <p className="text-lg text-dim leading-relaxed mb-4">
              <strong className="text-on-dark">
                Train The Trainer: AI to 8-tygodniowy prywatny mentoring 1:1, który prowadzi Cię z pozycji „freelancera
                technicznego, który łapie zlecenia za kilkaset złotych” do pozycji „certyfikowanego trenera AI, który za
                pierwszy dzień warsztatowy w centrum szkoleniowym bierze 2 000 zł, a za pierwszy dzień u bezpośredniego
                klienta — 5 000–10 000 zł”.
              </strong>
            </p>
            <p className="text-dim leading-relaxed">
              To jest moment przełomu. Nie „docelowa gra”. Docelowa gra jest dużo większa — 15 000, 25 000 zł dziennie,
              kontrakty in-house, programy akademii — ale to przychodzi <em>po</em> tej przemianie. Najpierw musisz się
              tu przenieść.
            </p>
            <p className="text-dim leading-relaxed mt-4">
              Pracujemy nad tym, czego geek techniczny dziś <em>jeszcze nie ma</em>:
            </p>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            {pillars.map((p, i) => (
              <Card key={i} className="rounded-md bg-surface border-white/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-sm bg-electric/10 flex items-center justify-center flex-shrink-0">
                      <p.icon className="h-6 w-6 text-electric" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-1">Filar {i + 1}</p>
                      <h3 className="font-heading text-xl font-bold text-on-dark leading-tight">{p.title}</h3>
                    </div>
                  </div>
                  <p className="text-dim leading-relaxed text-sm">{p.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="max-w-3xl mx-auto text-dim leading-relaxed mt-12 text-center">
            To jest <strong className="text-on-dark">rzemiosło</strong>. A rzemiosła nie uczy się z nagrań ani w grupie
            10 osób. Uczy się w bezpośredniej relacji mistrz–uczeń. Dlatego ten program jest 1:1.
          </p>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* PROTOCOL POMOSTU */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-6 leading-[1.1] tracking-[-0.02em]">
              Metoda: Protokół Pomostu™
            </h2>
            <p className="text-lg text-on-light-dim leading-relaxed mb-4">
              Każda praca, którą tu robimy, to przekraczanie tej samej przepaści — tylko z coraz głębszego poziomu.
            </p>
            <p className="text-on-light-dim leading-relaxed">
              Nazwałem to <strong>Protokół Pomostu™</strong>. Sześć filarów, które razem tworzą most od Twojego laptopa
              do portfela klienta biznesowego:
            </p>
          </div>

          <div className="max-w-5xl mx-auto space-y-3">
            {/* Header (desktop only) */}
            <div className="hidden md:grid md:grid-cols-12 gap-4 px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-on-light-dim border-b border-on-light/10">
              <div className="col-span-3">Filar</div>
              <div className="col-span-5">Co przekraczamy</div>
              <div className="col-span-4">Co buduje</div>
            </div>
            {protocolRows.map((row, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-4 px-6 py-5 rounded-md bg-paper border border-on-light/10 light-card"
              >
                <div className="md:col-span-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-sm bg-brand-gradient flex items-center justify-center text-white font-heading font-bold text-lg flex-shrink-0">
                    {row.letter}
                  </div>
                  <span className="font-heading font-bold text-on-light">{row.name}</span>
                </div>
                <div className="md:col-span-5 text-on-light-dim text-sm leading-relaxed">{row.crossing}</div>
                <div className="md:col-span-4 text-on-light-dim text-sm leading-relaxed">{row.builds}</div>
              </div>
            ))}
          </div>

          <p className="max-w-3xl mx-auto text-on-light-dim text-center mt-12">
            Każdy filar = jeden tydzień głębokiej pracy + jeden tydzień integracji praktycznej. Razem:{" "}
            <strong className="text-on-light">8 tygodni</strong>.
          </p>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* 8 WEEKS */}
      <section className="py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-4 leading-[1.1] tracking-[-0.02em]">
              Program — 8 tygodni, tydzień po tygodniu
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {weeks.map((w) => (
              <Card key={w.n} className="rounded-md bg-surface border-white/10">
                <CardContent className="p-8">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-sm bg-brand-gradient flex flex-col items-center justify-center text-white flex-shrink-0">
                      <span className="text-xs font-bold uppercase tracking-wider opacity-80">Tydz.</span>
                      <span className="font-heading font-bold text-xl leading-none">{w.n}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-3 leading-tight">
                        {w.title}
                      </h3>
                      <p className="text-dim leading-relaxed text-sm md:text-base">{w.text}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <Card className="max-w-4xl mx-auto mt-8 rounded-md bg-electric/5 border-electric/30">
            <CardContent className="p-8">
              <p className="text-on-dark leading-relaxed">
                <strong>Cel minimalny na koniec programu:</strong> masz pierwsze płatne zlecenie w kieszeni albo na
                stole. Zwykle pierwsze zlecenie przychodzi między tygodniem 6 a tygodniem 12 (cztery tygodnie po
                formalnym końcu programu).
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* WHAT YOU GET */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-6 leading-[1.1] tracking-[-0.02em]">
              Co konkretnie dostajesz
            </h2>
            <p className="text-lg text-on-light-dim leading-relaxed mb-4">
              <strong className="text-on-light">Osiem tygodni prywatnego dostępu do mnie.</strong> To jest rdzeń oferty.
              Nie „dostęp do platformy”. Nie „cotygodniowe grupowe calls”. Dostęp do mnie. 1:1.
            </p>
            <p className="text-on-light-dim">To oznacza:</p>
          </div>
          <div className="max-w-4xl mx-auto space-y-4">
            {deliverables.map((item, i) => (
              <div key={i} className="flex gap-4 p-6 rounded-md bg-paper border border-on-light/10 light-card">
                <Check className="h-5 w-5 text-electric flex-shrink-0 mt-1" />
                <p className="text-on-light-dim leading-relaxed text-sm md:text-base">{item}</p>
              </div>
            ))}
            <Card className="rounded-md bg-brand-gradient border-0">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <ShieldCheck className="h-8 w-8 text-white flex-shrink-0" />
                  <div>
                    <h3 className="font-heading text-xl font-bold text-white mb-2">Gwarancja pierwszego zlecenia</h3>
                    <p className="text-white/90 leading-relaxed text-sm md:text-base">
                      Jeśli do tygodnia 12 (4 tygodnie po formalnym końcu programu) nie masz pierwszej płatnej faktury
                      za dzień szkoleniowy — pracujemy dalej, bezpłatnie, aż ją wystawisz.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* ROI */}
      <section className="py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-6 leading-[1.1] tracking-[-0.02em]">
              Co to jest warte — policzmy uczciwie
            </h2>
            <p className="text-lg text-dim leading-relaxed mb-12">
              Filozofia wysokich ofert mówi, że program powinien dostarczać co najmniej 10× kwotę inwestycji w realnej,
              mierzalnej wartości. Zróbmy tę matematykę razem. Bez naciągania.
            </p>

            <div className="space-y-10">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="h-6 w-6 text-electric" />
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark">
                    Zwrot z inwestycji — ile, jak szybko
                  </h3>
                </div>
                <div className="space-y-4 text-dim leading-relaxed">
                  <p>
                    Dziś łapiesz zlecenia za setki złotych albo niskie kilka tysięcy. Zakładamy realistycznie: średnio 1
                    500 zł za typowe zlecenie freelancerskie, 2-4 zlecenia miesięcznie. Roczny przychód z tej ścieżki:
                    36 000 – 70 000 zł.
                  </p>
                  <p>Cel programu: ustawić Cię na ścieżce trenera AI. Pierwsze milestone'y, realistycznie:</p>
                  <ul className="space-y-2 pl-6 list-disc marker:text-electric">
                    <li>
                      <strong className="text-on-dark">Pierwsze zlecenie dla centrum szkoleniowego:</strong> 1 500 – 2
                      500 zł netto za dzień (często z perspektywą stałej współpracy — 2-4 dni miesięcznie,
                      powtarzalnie).
                    </li>
                    <li>
                      <strong className="text-on-dark">Pierwsze bezpośrednie zlecenie u klienta końcowego:</strong> 5
                      000 – 10 000 zł netto za dzień.
                    </li>
                    <li>
                      <strong className="text-on-dark">Przy 3-4 dniach szkoleniowych miesięcznie</strong> (mieszanka
                      centrów i klientów bezpośrednich), stabilny przychód po 6 miesiącach: 15 000 – 30 000 zł netto
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
                  <p>Twoja obecna ścieżka freelancerska za ten sam czas: ~60 000 – 120 000 zł netto.</p>
                  <p>
                    Różnica: <strong className="text-electric">170 000 – 230 000 zł netto</strong> w ciągu dwóch lat.
                    Program kosztuje 3-4% tej różnicy.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
                  Wartość radialna — co jeszcze się poprawia, czego dziś nie masz
                </h3>
                <ul className="space-y-2 pl-6 list-disc marker:text-electric text-dim leading-relaxed">
                  <li>Jakość klientów — przestajesz ścigać setki osób na grupach, zaczynasz być szukany</li>
                  <li>Twoja obecność na LinkedInie jako autorytet AI, nie „kolejny chętny do współpracy”</li>
                  <li>
                    Twój spokój przed salą — ten, którego dziś nie masz, bo dziś nie wiesz, że nigdy tam nie byłeś
                  </li>
                  <li>
                    Twoja oferta produktowa — po 8 tygodniach masz własny flagowy program, którego do dziś nie
                    zbudowałeś w pięć lat freelance'u
                  </li>
                  <li>
                    Twoja sieć — dostajesz się do grupy certyfikowanych trenerów, której członkowie wzajemnie przekazują
                    sobie zlecenia
                  </li>
                  <li>
                    Twoja zdolność komunikacji w ogóle — to samo rzemiosło komunikacji zamienia Twoje konsultacje,
                    rozmowy rekrutacyjne, negocjacje wszelkiego typu w zupełnie inną klasę interakcji
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
                  Amplifikator możliwości — co dopiero staje się w ogóle możliwe
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
                  dlatego, że nie masz mostu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* INVESTMENT */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-6 leading-[1.1] tracking-[-0.02em]">
              Inwestycja
            </h2>
            <p className="text-lg text-on-light-dim leading-relaxed">
              Stara zasada sprzedażowa mówi, że cena musi podniecać obie strony. Moja podnieca mnie, bo żeby ją
              uzasadnić, muszę dostarczyć Ci transformację, którą sam będę nazywał swoją najlepszą pracą. Twoja ma
              podniecać Ciebie, bo oznacza, że wchodzisz w to z zobowiązaniem — mentalnym, emocjonalnym, fizycznym i
              finansowym — które uniemożliwia Ci nie zmienić się.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
            <Card className="rounded-md border-electric/40 bg-paper light-card relative">
              <div className="absolute -top-3 left-6 px-3 py-1 bg-brand-gradient text-white text-xs font-bold uppercase tracking-[0.2em] rounded-sm">
                Edycja inauguracyjna
              </div>
              <CardContent className="p-8 pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-light-dim mb-2">
                  Q2 2026 · 3 miejsca
                </p>
                <div className="mb-4">
                  <span className="font-heading text-5xl font-bold text-on-light">7 999 zł</span>
                  <span className="text-on-light-dim ml-2">netto</span>
                </div>
                <p className="text-on-light-dim text-sm leading-relaxed mb-6">
                  <strong className="text-on-light">Bonus:</strong> dwa dodatkowe dni mentoringu po zakończeniu programu
                  (9 i 12 miesiąc) do kalibracji praktyki.
                </p>
                <Button asChild size="lg" className="w-full bg-brand-gradient text-white hover:opacity-90 rounded-sm">
                  <Link to="/discovery">
                    Zapisz się na rozmowę kwalifikacyjną
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="rounded-md border-on-light/10 bg-paper light-card">
              <CardContent className="p-8 pt-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-on-light-dim mb-2">
                  Cena regularna od Q3 2026
                </p>
                <div className="mb-4">
                  <span className="font-heading text-5xl font-bold text-on-light">24 999 zł</span>
                  <span className="text-on-light-dim ml-2">netto</span>
                </div>
                <p className="text-on-light-dim text-sm leading-relaxed mb-6">
                  Maksymalnie 4 miejsca na kwartał. Po Q2 2026 edycja inauguracyjna jest zamknięta na zawsze.
                </p>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full rounded-sm border-on-light/20 text-on-light hover:bg-on-light/5"
                >
                  <Link to="/discovery">Zarezerwuj miejsce w kolejce</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-3xl mx-auto mt-10 space-y-4 text-on-light-dim leading-relaxed">
            <p>
              Płatność w dwóch ratach 50/50 możliwa. Płatność w całości — dodatkowy dzień mentoringu w 6 miesiącu
              gratis.
            </p>
            <p>
              Program kwalifikuje się do rozliczenia jako inwestycja w rozwój kompetencji zawodowych. Jeśli prowadzisz
              JDG lub spółkę — odpisujesz jako koszt uzyskania przychodu.
            </p>
            <p className="text-sm">
              <strong className="text-on-light">Dlaczego edycja inauguracyjna kosztuje ponad trzykrotnie mniej:</strong>{" "}
              Bo buduję pierwsze case studies. Potrzebuję 3 osób, które przejdą przez program na tej cenie i dostarczą
              mi później materiał dowodowy — wyniki, liczby, historie. To jest fair deal: Ty dostajesz dramatycznie
              lepszą cenę, ja dostaję social proof, który napędza kolejne edycje.
            </p>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* WHY ME */}
      <section className="py-20 md:py-28 bg-void-glow">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-dark mb-10 leading-[1.1] tracking-[-0.02em]">
              Dlaczego ja
            </h2>
            <div className="space-y-6 text-lg text-dim leading-relaxed">
              <p>
                Nie napiszę Ci tu CV. Napiszę Ci, dlaczego rzecz, której uczę, mogłem nauczyć się tylko w taki sposób, w
                jaki się jej nauczyłem — i dlaczego nie nauczysz się tego na kursie z pakietem slajdów.
              </p>
              <p>
                Prowadzę szkolenia od 20+ lat. Zacząłem jako geek techniczny — znałem swoje narzędzia od podszewki, ale
                pierwsze wystąpienie skończyłem w 7 minut z planowanych 40, bo mówiłem tak szybko, że moderator musiał
                mnie delikatnie przerwać. <em>Dokładnie</em> ten problem, który Ty masz dziś, miałem ja wtedy.
              </p>
              <p>
                Potem zostałem Microsoft Certified Trainerem. Przez kolejne kilkanaście lat prowadziłem szkolenia z
                SharePoint, Power BI, Microsoft 365, Microsoft Fabric dla korporacji na trzech kontynentach.
              </p>
              <p>
                Przed pandemią robiłem 100 lotów rocznie. W praktyce oznaczało to na przykład: w poniedziałek rano
                wsiadam w samolot do Oslo, prowadzę 3 dni warsztatu dla oficerów Policji Norweskiej (w języku
                angielskim), zamykam w piątek, wsiadam w sobotę w samolot do Wiesbaden, prowadzę 3 dni dla jednostki US
                Army na bazie, wracam do Warszawy w środę, w czwartek Fortune 500, w piątek znowu samolot.
              </p>
              <p>
                Przez te lata szkoliłem m.in. jednostki <strong className="text-on-dark">US Army</strong> w Wiesbaden
                (Niemcy), <strong className="text-on-dark">US Air Force</strong> w Ramstein (Niemcy),{" "}
                <strong className="text-on-dark">US Navy</strong> w Neapolu (Włochy),{" "}
                <strong className="text-on-dark">US Marine Corps</strong> i personel NATO w Mons (Belgia), a także w
                Vicenzy (Włochy). Jeśli potrafisz wejść na salę z oficerami operacyjnymi armii amerykańskiej — ludźmi,
                których zawodem jest weryfikowanie kompetencji innych w 30 sekund — i po 45 minutach mają do Ciebie
                zaufanie, to potrafisz wejść na każdą polską salę konferencyjną w korporacji. I potrafisz nauczyć tego
                kogoś innego.
              </p>
              <p>
                Od 2022 pracuję też jako coach transformacyjny. Prowadzę ekosystem <em>Lifehackerzy</em> — społeczność,
                w której pomagam ludziom zamieniać wiedzę techniczną w realną zmianę zawodową i osobistą. Uważam, że
                szkolenie jest Trojan Horse — metodą wejścia do człowieka z głębszą transformacją, niż on sam oczekuje.
                To jest dokładnie to, co robię z Tobą w tym programie. Nie „uczę Cię trenować”. Przeprowadzam Cię z
                jednej wersji Ciebie do kolejnej.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* DECISION + CTA */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Decyzja — i rozmowa, która ją poprzedza
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed mb-10">
              <p>Nie sprzedaję tego programu przez formularz. Sprzedaję go przez rozmowę.</p>
              <p>
                Powód jest prozaiczny: nie biorę każdego. W 2025 odmówiłem 6 osobom, które były gotowe zapłacić pełną
                stawkę — ale nie widziałem w nich tego, co potrzebne, żeby program się udał. Program skuteczny to
                program, który skutecznie kończy się transformacją. Transformacja wymaga zgodności energii z mojej
                strony i z Twojej.
              </p>
              <p>
                Dlatego pierwszy krok to{" "}
                <strong className="text-on-light">60-minutowa rozmowa kwalifikacyjna ze mną, 1:1, na Zoom</strong>. Bez
                zobowiązań. Bezpłatna.
              </p>
              <p>W czasie tej rozmowy:</p>
              <ol className="space-y-3 pl-6 list-decimal marker:text-electric marker:font-bold">
                <li>
                  Opowiadasz mi o sobie, Twoim doświadczeniu technicznym, o zleceniach, które dziś łapiesz, o tym, dokąd
                  chcesz dojść.
                </li>
                <li>Ja zadaję Ci kilka pytań, które pomogą nam obu zobaczyć, czy to jest spójne.</li>
                <li>Jeśli tak — omawiam szczegóły programu i startujemy.</li>
                <li>
                  Jeśli nie — mówię Ci uczciwie dlaczego, i często wskazuję kierunek, w którym warto iść. Nawet jeśli
                  nie pracujemy razem, ta rozmowa jest warta Twojego czasu.
                </li>
              </ol>
            </div>
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-brand-gradient text-white hover:opacity-90 text-base px-8 py-6 rounded-sm"
              >
                <Link to="/discovery">
                  Zapisz się na rozmowę kwalifikacyjną
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* FAQ */}
      <section className="py-20 md:py-28 bg-void-glow">
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

      <div className="h-1 bg-[linear-gradient(90deg,#080808_0%,#007AFF_40%,#6D28D9_60%,#F9FAFB_100%)]" />

      {/* CLOSING */}
      <section className="py-20 md:py-28 bg-diamond">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-on-light mb-10 leading-[1.1] tracking-[-0.02em]">
              Ostatnie słowo
            </h2>
            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed mb-10">
              <p>
                Rynek szkoleń AI w Polsce jest dziś taki, jaki był rynek szkoleń z Excela w 2005 roku. Za 3 lata będzie
                nasycony. Trenerzy, którzy wejdą teraz — z rzemiosłem, nie z amatorką — zbudują praktyki, które będą
                pracować przez 15 lat. Trenerzy, którzy wejdą w 2029, będą konkurować z tysiącami certyfikowanych
                „trenerów AI” na LinkedInie.
              </p>
              <p>
                Ta różnica — 2026 vs. 2029 — jest <em>teraz</em>. Okno się zamyka szybciej, niż myślisz.
              </p>
              <p>Jeśli masz kompetencję techniczną, której Twoje konto bankowe dotąd nie zauważyło — napisz do mnie.</p>
              <p>
                Jeśli wolisz jeszcze trochę poczekać, zbudować kolejnego agenta, przeczytać jeszcze jedną książkę zanim
                „naprawdę zaczniesz” — to też jest uczciwa odpowiedź. Wracaj, kiedy będziesz gotowy.
              </p>
              <p>Ale nie udawaj, że nie widziałeś tej strony.</p>
              <p>Do usłyszenia,</p>
              <p>
                <strong className="text-on-light">Ludwik Siadlak</strong>
                <br />
                <span className="text-sm">
                  Microsoft Certified Trainer · Twórca Lifehackerzy · Twój mentor w Train The Trainer: AI
                </span>
              </p>
            </div>
            <div className="text-center mb-10">
              <Button
                asChild
                size="lg"
                className="bg-brand-gradient text-white hover:opacity-90 text-base px-8 py-6 rounded-sm"
              >
                <Link to="/discovery">
                  Zapisz się na rozmowę kwalifikacyjną
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <p className="text-xs text-on-light-dim italic text-center max-w-2xl mx-auto">
              Program Train The Trainer: AI prowadzony jest indywidualnie przeze mnie. Certyfikat „Certified AI Trainer”
              wydawany jest po pozytywnym zaliczeniu egzaminu praktycznego w 8. tygodniu. Edycja inauguracyjna Q2 2026 —
              3 miejsca w cenie 7 999 zł netto. Edycja regularna od Q3 2026 — maksymalnie 4 miejsca na kwartał, 24 999
              zł netto.
            </p>
          </div>
        </div>
      </section>

      <RelatedPrograms currentPath="/program/ttt-ai" />
    </Layout>
  );
}
