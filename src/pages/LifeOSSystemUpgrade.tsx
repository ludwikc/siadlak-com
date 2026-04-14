import { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import { CTAButton } from "@/components/ui/cta-button";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, ChevronDown } from "@/lib/icons";
import { Link } from "react-router-dom";
import TestimonialCarousel from "@/components/sections/TestimonialCarousel";
import SEO from "@/components/SEO";
import { getSEOConfig, getTopicalConfig } from "@/lib/seo-config";
import TopicalMeta from "@/components/TopicalMeta";
import { getServiceLifeOS, getFAQSchema, getWebPageEntity, getCourseBreadcrumb, getReviewSchema } from "@/lib/structured-data";
import RelatedPrograms from "@/components/sections/RelatedPrograms";

export default function LifeOSSystemUpgrade() {
  const [spotsAvailable, setSpotsAvailable] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(false);

  const scrollToDiscovery = () => {
    const discoverySection = document.getElementById("discovery-section");
    if (discoverySection) {
      discoverySection.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    let count = 0;
    const targetCount = 2;
    const interval = setInterval(() => {
      if (count < targetCount) {
        count++;
        setSpotsAvailable(count);
      } else {
        clearInterval(interval);
      }
    }, 500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector("section");
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        setShowStickyBar(window.scrollY > heroBottom);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      quote: "Nie zdawałem sobie sprawy, ile energii szło na walkę z samym sobą.",
      name: "Tomek, 38 lat",
      title: "CTO startupu, ojciec dwójki",
    },
    {
      quote:
        "Wcześniej decyzja o zatrudnieniu kosztowała mnie 3 tygodnie snu. Teraz wiem w 20 minut. I nie mylę się częściej - wręcz przeciwnie.",
      name: "Klientka Life OS",
      title: "Life OS Absolwentka",
    },
    {
      quote: "Pierwszy raz od 14 lat spędziłem sobotę z rodziną i nie myślałem o firmie. I firma nie spłonęła.",
      name: "Klient Life OS",
      title: "Life OS Absolwent",
    },
    {
      quote:
        "Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary do prawdziwej wiary w możliwości, które mam.",
      name: "Anna",
      title: "CEO Agencji Marketingowej",
    },
  ];

  const faqs = [
    {
      question: "Czym jest Life OS: System Upgrade?",
      answer:
        'Life OS: System Upgrade to 8-tygodniowy program mentoringowy 1:1 z Ludwikiem C. Siadlakiem. Pe\u0142na reinstalacja systemu operacyjnego \u017Cycia metod\u0105 Diamentowego Umys\u0142u \u2014 praca na poziomie to\u017Csamo\u015Bci i sposobu my\u015Blenia, nie technik. Obejmuje cotygodniowe sesje (50 min\u20132,5 h), diagnostyk\u0119 Life OS, dost\u0119p VIP 24/7 i do\u017Cywotni dost\u0119p do spo\u0142eczno\u015Bci Lifehackerzy. Maksymalnie 5 klient\u00F3w jednocze\u015Bnie. Cena: 16 000 PLN z gwarancj\u0105 zwrotu po 2 tygodniach.',
    },
    {
      question: "Jak to się różni od terapii?",
      answer:
        'Terapia pomaga zrozumieć przeszłość. Life OS pomaga zmienić sposób, w jaki podejmujesz decyzje w teraźniejszości. To nie jest albo-albo - wielu moich klientów kontynuuje terapię równolegle. Ale jeśli Twój problem brzmi "wiem, skąd się to bierze, ale nie wiem, co z tym zrobić" - to jest miejsce, w którym zaczynam ja.',
    },
    {
      question: "Czy to coaching?",
      answer:
        "I tak, i nie. Coaching zwykle daje Ci narzędzia i strategie. Ja daję Ci pytania - i czekam, aż sam znajdziesz odpowiedzi, które już w sobie masz. Brzmi mistycznie? Moi klienci powiedzieliby, że to najbardziej praktyczna praca, jaką kiedykolwiek wykonali. Bo zmiana perspektywy zmienia wszystko - łącznie z tym, jak prowadzisz firmę w poniedziałek rano.",
    },
    {
      question: "Co jeśli nie pasuje mi Twój styl?",
      answer:
        "Dlatego jest Sesja Discovery. 30 minut, żebyśmy obaj wiedzieli. Jeśli nie czujesz, że możesz mi zaufać - nie podejmujemy współpracy. I to jest absolutnie w porządku. Lepiej to wiedzieć po 30 minutach niż po 3 tygodniach.",
    },
    {
      question: "Czy gwarantujesz rezultaty?",
      answer:
        "Nie. I uciekaj od każdego, kto gwarantuje. Co gwarantuję: jeśli po 2 tygodniach nie poczujesz, że ta praca jest fundamentalnie inna niż cokolwiek, co próbowałeś do tej pory - oddaję pieniądze. Bez pytań, bez tłumaczenia się.",
    },
    {
      question: "Co jeśli nie mam 8 tygodni?",
      answer:
        'Masz. Nie mówię tego lekceważąco - ale jeśli prowadzisz firmę, masz rodzinę i czytasz tę stronę, to masz sesję w kalendarzu raz w tygodniu. Sesje trwają od 50 minut do 2,5 godziny. Między sesjami masz Signal. To nie wymaga "porzucenia życia na 8 tygodni". To wymaga pół godziny do dwóch godzin tygodniowo czystego skupienia.',
    },
    {
      question: "Z iloma osobami pracujesz?",
      answer:
        "Maksymalnie 5 jednocześnie. Z każdą indywidualnie.. Nie dlatego, żeby tworzyć sztuczny pośpiech - dlatego, że nie da się prowadzić kogoś przez zobaczenie własnego diamentu, jednocześnie pracując z 20 osobami. Ta praca wymaga, żebym pamiętał Twoje odpowiedzi z zeszłego tygodnia. I pamiętam.",
    },
    {
      question: "A co jeśli znowu zainwestuję i znowu nic się nie zmieni?",
      answer:
        'To jest najuczciwsze pytanie na tej liście. I nie zamierzam Ci powiedzieć "tym razem będzie inaczej" - bo tak mówił każdy program, który kupowałeś do tej pory. Mogę Ci powiedzieć trzy rzeczy: (1) dlatego jest gwarancja zwrotu po 2 tygodniach, (2) dlatego jest Sesja Discovery, na której obaj sprawdzamy, czy to ma sens, i (3) dlatego nie pracuję z szablonem - bo szablon nie widzi Ciebie. Ja widzę.',
    },
  ];

  return (
    <Layout>
      <SEO {...getSEOConfig("/program/lifeos-system-upgrade")} jsonLd={[
        getServiceLifeOS(),
        getWebPageEntity('/program/lifeos-system-upgrade', 'Life OS: System Upgrade', '8-tygodniowy program mentoringu 1:1 z Ludwikiem C. Siadlakiem.', ['/discovery', '/program', '/testimonials']),
        getFAQSchema(faqs),
        getCourseBreadcrumb('Life OS: System Upgrade', '/program/lifeos-system-upgrade'),
        getReviewSchema('Life OS: System Upgrade', '/program/lifeos-system-upgrade', [
          { author: 'Tomek, 38 lat', reviewBody: 'Nie zdawa\u0142em sobie sprawy, ile energii sz\u0142o na walk\u0119 z samym sob\u0105.', ratingValue: 5 },
          { author: 'Anna', reviewBody: 'W 8 tygodni przesz\u0142am od narracji ofiary do prawdziwej wiary w mo\u017Cliwo\u015Bci, kt\u00F3re mam.', ratingValue: 5 },
        ], { ratingValue: 4.9, reviewCount: 42 }),
      ]} />
      {(() => { const t = getTopicalConfig("/program/lifeos-system-upgrade"); return t ? <TopicalMeta {...t} /> : null; })()}
      {/* Sticky CTA Bar */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-brand-gradient transition-transform duration-300 ${
          showStickyBar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-white">
            <span className="font-bold text-lg">Life OS: System Upgrade</span>
            <span className="ml-4 text-sm text-white/90">{spotsAvailable}/5 miejsc dostępnych</span>
          </div>
          <CTAButton variant="premium" size="lg" onClick={scrollToDiscovery} showArrow>
            Zarezerwuj Sesję
          </CTAButton>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-void overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 80% 20%, rgba(109,40,217,0.25) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0,122,255,0.15) 0%, transparent 50%)",
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-8">
              Tylko 5 miejsc jednocześnie
            </p>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
              Life OS: <span className="text-electric">System Upgrade</span>
            </h1>

            <h2 className="text-2xl md:text-3xl font-medium mb-8 text-white/90 leading-tight">
              Nie kolejna aplikacja mentalna. Cały nowy system operacyjny.
            </h2>

            <p className="text-lg text-dim leading-relaxed mb-8 max-w-3xl mx-auto">
              8 tygodni pracy 1:1 ze mną. Dla tych, którzy przeglądali programy i czuli, że żaden nie trafia w sedno -
              bo problem leży głębiej, na poziomie tego, kim jesteś, a nie tego, co robisz.
            </p>

            <p className="text-sm text-dim mb-10">8 tygodni · 1:1 z Ludwikiem · Maksymalnie 5 os&#243;b · Aktualizacja: <time dateTime="2026-04-14">kwiecie&#324; 2026</time></p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <CTAButton
                variant="premium"
                size="xl"
                aria-label="Sprawdź dostępność - Sesja Discovery"
                showArrow
                onClick={scrollToDiscovery}
              >
                Sprawdź dostępność - Sesja Discovery
              </CTAButton>
              <a
                href="#nie-dla-ciebie"
                className="text-sm text-dim hover:text-electric transition-colors underline underline-offset-4"
              >
                Dla kogo to NIE jest →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Definicja — extractable block dla AI */}
      <section className="py-12 md:py-16 bg-void-glow">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="font-heading text-xl md:text-2xl font-bold text-on-dark mb-4">
            Czym jest Life OS: System Upgrade?
          </h2>
          <p className="text-lg text-dim leading-relaxed">
            Life OS: System Upgrade to 8-tygodniowy program mentoringowy 1:1
            z Ludwikiem C. Siadlakiem. Pe&#322;na reinstalacja systemu
            operacyjnego &#380;ycia metod&#261; Diamentowego Umys&#322;u
            &#8212; praca na poziomie to&#380;samo&#347;ci i sposobu
            my&#347;lenia, nie technik. Cotygodniowe sesje (50 min&#8211;2,5 h),
            diagnostyka Life OS, dost&#281;p VIP 24/7. Maksymalnie 5
            klient&#243;w jednocze&#347;nie. Cena: 16 000 PLN z gwarancj&#261;
            zwrotu po 2 tygodniach.
          </p>
        </div>
      </section>

      {/* Rozpoznanie */}
      <section className="py-20 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-on-light text-center">Rozpoznajesz ten stan?</h2>

            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>Twoje cele są zrealizowane. Twoje projekty działają. Twoje życie wygląda dobrze z zewnątrz.</p>

              <p>A w środku? Konflikt, który zżera gigawaty energii:</p>

              <div className="space-y-3 text-on-light pl-4 border-l-4 border-electric/30 my-8">
                <p>Część Ciebie chce budować dalej → Część Ciebie chce wreszcie odpocząć</p>
                <p>Część Ciebie potrzebuje kontroli → Część Ciebie wie, że kontrola to iluzja</p>
                <p>Część Ciebie goni kolejny cel → Część Ciebie pyta "po co?"</p>
              </div>

              <p>
                Te części walczą ze sobą każdego dnia. A Ty stoisz pośrodku, próbując je pogodzić - i zużywasz na to
                więcej energii niż na samą pracę.
              </p>

              <p className="font-semibold text-on-light mt-8 mb-4">Próbowałeś to rozwiązać:</p>

              <div className="space-y-3">
                <p>
                  <strong className="text-on-light">Mówisz o tym znajomym</strong> → "Musisz więcej odpoczywać"
                </p>
                <p>
                  <strong className="text-on-light">Próbujesz z coachingiem</strong> → "Ustaw nowe cele SMART"
                </p>
                <p>
                  <strong className="text-on-light">Idziesz na terapię</strong> → "Opowiedz mi o swoich rodzicach"
                </p>
                <p>
                  <strong className="text-on-light">Kupujesz kurs</strong> → "Oto 7 kroków do lepszego Ciebie"
                </p>
              </div>

              <p className="mt-8">
                Żadne z tych rozwiązań nie trafia w sedno. Bo problem nie leży w strategii, celach ani przeszłości.{" "}
                <strong className="text-on-light">Problem leży na poziomie tożsamości.</strong> Na suknie, które
                nałożyłeś na diament lata temu - i które od tamtego czasu zdążyło wrosnąć.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego inne nie zadziałały */}
      <section className="py-20 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-on-light text-center">
              Dlaczego to, co próbowałeś, nie zadziałało?
            </h2>

            <p className="text-lg text-on-light-dim leading-relaxed mb-8">
              Nie dlatego, że było złe. Dlatego, że celowało nie tam, gdzie trzeba.
            </p>

            <div className="space-y-8 text-lg text-on-light-dim leading-relaxed">
              <div>
                <p>
                  <strong className="text-on-light text-xl">Coaching i mentoring</strong> dają Ci nowe strategie, więcej
                  narzędzi, kolejne frameworki. I działają - na chwilę. A potem wracasz do starych wzorców, bo nowe
                  narzędzia zainstalowałeś na starym, skonfliktowanym systemie. To jak wstawianie nowych mebli do domu,
                  który ma pęknięty fundament. Pięknie wygląda. Przez tydzień.
                </p>
              </div>

              <div>
                <p>
                  <strong className="text-on-light text-xl">Terapia</strong> pomaga zrozumieć przeszłość. I to jest
                  wartościowe - serio, bez ironii. Ale Ty już rozumiesz "skąd". Rozumiesz tak głęboko, że mógłbyś
                  napisać o sobie pracę magisterską. Problem w tym, że w poniedziałek o 9 rano, kiedy musisz podjąć
                  ważną decyzję, to zrozumienie nie pomaga. Insight bez zmiany perspektywy to ciekawa historyjka.
                </p>
              </div>

              <div>
                <p>
                  <strong className="text-on-light text-xl">Kursy i książki</strong> dostarczają wiedzę. Masz jej
                  wystarczająco dużo, żeby prowadzić podcast. (Może nawet prowadzisz.) Ale prawdziwa zmiana nie zachodzi
                  na poziomie intelektualnym. Możesz przeczytać 100 książek o pływaniu - i nadal nie popłyniesz, dopóki
                  nie wejdziesz do wody.
                </p>
              </div>

              <div>
                <p>
                  <strong className="text-on-light text-xl">Duchowość i medytacja</strong> dają spokój. Perspektywę.
                  Kontakt z czymś głębszym. A potem wracasz do biura i znowu jesteś tym samym człowiekiem, podejmującym
                  te same decyzje z tego samego strachu. Zen na macie, chaos w Excelu.
                </p>
              </div>
            </div>

            <div className="mt-12 text-lg text-on-light-dim leading-relaxed space-y-4">
              <p>
                <strong className="text-on-light">Żadne z tych podejść nie jest złe.</strong> Ale każde pracuje na
                jednej warstwie - powierzchni. Coaching zmienia strategię. Terapia zmienia narrację. Kursy zmieniają
                wiedzę. Medytacja zmienia stan.
              </p>
              <p className="text-xl font-bold text-on-light">Żadne nie zmienia tła. A problem jest tam.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metodologia - Czym jest Life OS */}
      <section className="relative py-20 bg-void-glow overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-transparent"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric text-center mb-8">Metodologia</p>

            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white">
              Czym jest Life OS: System Upgrade?
            </h2>

            <div className="space-y-6 text-lg text-dim leading-relaxed">
              <p>Wyobraź sobie, że Twój umysł to diament. Czysty, przezroczysty, niezniszczalny.</p>

              <p>
                Ale leży pod warstwami sukna - narracji, oczekiwań, ról, lęków - które nagromadziły się przez lata.
                Czerwone sukno sprawia, że widzisz siebie jako kogoś, kto musi walczyć. Zielone - jako kogoś, kto musi
                więcej. Niebieskie - jako kogoś, kto nie zasługuje na spokój.
              </p>

              <p>
                Każda warstwa zmienia "kolor" tego, kim myślisz, że jesteś. Ale diament pod spodem? Nie zmienił się ani
                na chwilę.
              </p>

              <p className="text-xl font-bold text-white">Life OS to 8 tygodni zdejmowania sukna.</p>

              <p>Nie daję Ci nowych narzędzi. Nie uczę Cię nowych technik. Nie mówię Ci, kim powinieneś być.</p>

              <p>
                Zadaję Ci pytania. Buduję z Tobą metaforę, która jest <em>Twoja</em>. I czekam - bo metafora działa tam,
                gdzie logika się zatrzymuje. Logika mówi "powinieneś". Metafora mówi "aha - <em>widzę</em>". I w tym
                "aha" wszystko się zmienia.
              </p>

              <p>
                Czasem potrzebujesz kogoś, kto przetnie więzy. Czasem kogoś, kto da pozwolenie na rozwinięcie skrzydeł.
                Najczęściej - obu, naprzemiennie.
              </p>

              <p>Skąd wiem, czego potrzebujesz? Z 19 lat praktyki. I z tego, że sam przeszłem obie drogi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Fazy procesu */}
      <section className="relative py-20 bg-void-glow overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center text-white">4 fazy procesu</h2>

            <div className="space-y-12">
              {/* Faza 1 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Tydzień 1-2: Diagnostyka systemu</h3>
                <div className="space-y-4 text-lg text-dim leading-relaxed">
                  <p>
                    Głęboki skan - gdzie jest konflikt tożsamości, jaka narracja Cię blokuje, jakiego rodzaju pracy
                    potrzebujesz.
                  </p>
                  <p>
                    Niektórzy potrzebują, żeby ktoś im przeciął więzy. Inni - pozwolenia na rozwinięcie skrzydeł.
                    Większość - obu, naprzemiennie. Pierwsza faza to ustalenie, co leży na diamencie i w jakiej
                    kolejności będziemy to zdejmować.
                  </p>
                  <p>
                    Nie jest to przyjemna rozmowa. Ale nie jest też brutalna - jest uczciwa. A uczciwość, jak się
                    okazuje, wystarczy.
                  </p>
                </div>
              </div>

              {/* Faza 2 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Tydzień 3-4: Dekonstrukcja</h3>
                <div className="space-y-4 text-lg text-dim leading-relaxed">
                  <p>Tu zaczynamy zdejmować sukno. Warstwa po warstwie.</p>
                  <p>
                    Czasem przez metaforę. Czasem przez filozofię - Jung, Faust i Mistrz i Małgorzata to moje ulubione
                    lustra. Czasem przez pytanie, po którym zapada cisza na kilka minut - i ta cisza mówi więcej niż
                    wszystkie poprzednie odpowiedzi.
                  </p>
                  <p>To jest ta faza, w której ludzie mówią: "Nie wiem, co się właśnie wydarzyło." I uśmiechają się.</p>
                </div>
              </div>

              {/* Faza 3 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Tydzień 5-6: Integracja</h3>
                <div className="space-y-4 text-lg text-dim leading-relaxed">
                  <p>
                    Teraz uczymy Twoje konfliktowe części współpracować. Bezwzględny CEO i wrażliwy wizjoner to nie
                    wrogowie - to zespół. Energia, która szła na wewnętrzną wojnę, zaczyna iść na tworzenie.
                  </p>
                  <p>
                    Decyzje przestają być polem bitwy. Działasz z miejsca spójności, nie wymuszonej dyscypliny.
                    Wewnętrzny krytyk zostaje zintegrowany - nie uciszony. (Uciszanie nigdy nie działa. On zawsze wraca.
                    Ale zintegrowany krytyk staje się doradcą.)
                  </p>
                </div>
              </div>

              {/* Faza 4 */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Tydzień 7-8: Nowy standard</h3>
                <div className="space-y-4 text-lg text-dim leading-relaxed">
                  <p>Nowy system operacyjny staje się Twoją drugą naturą.</p>
                  <p>
                    Nie "fake it till you make it". Nie "stosuj tę technikę codziennie". Fundamentalna zmiana tego, jak
                    podejmujesz decyzje, jak prowadzisz ludzi i jak żyjesz.
                  </p>
                </div>
              </div>
            </div>

            {/* Before/After: Poniedziałek 9 rano */}
            <div className="mt-16 bg-white/5 p-8 rounded-md border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Jak to wygląda w praktyce?</h3>
              <p className="text-lg text-dim mb-4">
                <strong className="text-white">Poniedziałek, 9 rano.</strong> Decyzja, na której stoi dużo.
              </p>
              <p className="text-dim mb-2">
                <span className="font-bold text-dim">Przed:</span> Paraliż. Analiza. Więcej analiz. Lęk. Prokrastynacja.
                Decyzja z desperacji pod presją czasu.
              </p>
              <p className="text-dim mb-4">
                <span className="font-bold text-electric">Po:</span> Jasność. Połączenie intuicji i danych. Decyzja w
                pół godziny. Spokój niezależnie od wyniku. Bo wiesz, że decyzja nie definiuje Ciebie - Ty definiujesz
                decyzję.
              </p>
            </div>

            <div className="text-center mt-16">
              <CTAButton variant="premium" size="xl" showArrow onClick={scrollToDiscovery}>
                Sprawdź dostępność - Sesja Discovery
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Rezultaty */}
      <section className="py-20 bg-diamond">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-on-light text-center">
              Czego możesz się spodziewać?
            </h2>

            <p className="text-lg text-on-light-dim text-center mb-12 leading-relaxed">
              Nie obiecuję cudów. Obiecuję pracę, po której zobaczysz wymierne zmiany:
            </p>

            <div className="space-y-10">
              {/* Rezultat 1 */}
              <div>
                <h3 className="text-2xl font-bold text-on-light mb-3">Koniec z wewnętrzną wojną</h3>
                <p className="text-lg text-on-light-dim leading-relaxed mb-4">
                  Przestajesz zużywać 80% energii na konflikt między częściami siebie. Nagle masz zasób mocy, o którym
                  zapomniałeś.
                </p>
                <blockquote className="border-l-4 border-electric/30 pl-6 italic text-on-light-dim">
                  "Nie zdawałem sobie sprawy, ile energii szło na walkę z samym sobą."
                  <footer className="mt-2 not-italic text-sm text-on-light-dim">
                    - Tomek, 38 lat, CTO startupu, ojciec dwójki
                  </footer>
                </blockquote>
              </div>

              {/* Rezultat 2 */}
              <div>
                <h3 className="text-2xl font-bold text-on-light mb-3">Decyzyjność bez paraliżu</h3>
                <p className="text-lg text-on-light-dim leading-relaxed mb-4">
                  Intuicja + dane = szybkie, pewne decyzje. Bez trzech tygodni bezsennych nocy nad każdym wyborem.
                </p>
                <blockquote className="border-l-4 border-electric/30 pl-6 italic text-on-light-dim">
                  "Wcześniej decyzja o zatrudnieniu kosztowała mnie 3 tygodnie snu. Teraz wiem w 20 minut. I nie mylę
                  się częściej - wręcz przeciwnie."
                  <footer className="mt-2 not-italic text-sm text-on-light-dim">- Klientka Life OS</footer>
                </blockquote>
              </div>

              {/* Rezultat 3 */}
              <div>
                <h3 className="text-2xl font-bold text-on-light mb-3">Prawdziwy spokój - nie tylko przerwa w pracy</h3>
                <p className="text-lg text-on-light-dim leading-relaxed mb-4">
                  Weekend staje się regeneracją, nie poczuciem winy. Urlop staje się urlopem, nie "zmianą lokalizacji
                  pracy z laptopem".
                </p>
                <blockquote className="border-l-4 border-electric/30 pl-6 italic text-on-light-dim">
                  "Pierwszy raz od 14 lat spędziłem sobotę z rodziną i nie myślałem o firmie. I firma nie spłonęła."
                  <footer className="mt-2 not-italic text-sm text-on-light-dim">- Klient Life OS</footer>
                </blockquote>
              </div>

              {/* Rezultat 4 */}
              <div>
                <h3 className="text-2xl font-bold text-on-light mb-3">Ambicja bez lęku</h3>
                <p className="text-lg text-on-light-dim leading-relaxed mb-4">
                  Przestajesz potrzebować sukcesu jako potwierdzenia wartości. Ale nadal go budujesz - tyle że z
                  radości, nie ze strachu. To nie jest rezygnacja z ambicji. To uwolnienie jej z lęku.
                </p>
                <blockquote className="border-l-4 border-electric/30 pl-6 italic text-on-light-dim">
                  "Zapytał: 'Ile podatku płacisz każdego dnia za tę historię?' W 8 tygodni przeszłam od narracji ofiary
                  do prawdziwej wiary w możliwości, które mam."
                  <footer className="mt-2 not-italic text-sm text-on-light-dim">
                    - Anna, CEO Agencji Marketingowej
                  </footer>
                </blockquote>
              </div>
            </div>

            {/* Testimonial Carousel */}
            <div className="mt-20">
              <TestimonialCarousel testimonials={testimonials} title="Co mówią absolwenci programu" />
            </div>
          </div>
        </div>
      </section>

      {/* Dlaczego ja */}
      <section className="relative py-20 bg-diamond overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-on-light text-center">Dlaczego akurat ja?</h2>

            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <p>
                19 lat jako Microsoft Certified Trainer. Fortune 500, NATO, jednostki specjalne, Oxford. 10 000+
                profesjonalistów, których szkoliłem z systemów, produktywności i AI.
              </p>

              <p>Brzmi imponująco? Może. Ale nie dlatego tu jestem.</p>

              <p>
                Jestem tu, bo w 2014 roku stałem na peronie metra Dworzec Gdański i rozważałem, czy nie zrobić jednego
                kroku za dużo. Miałem dyplom z Oxfordu, kontrakty z NATO i zero powodów, żeby wstać rano.
              </p>

              <p>
                Zbudowałem cały system produktywności jako mechanizm przetrwania. Nie dlatego, że kochałem
                „optymalizację" - dlatego, że bez systemu nie wiedziałem, jak przeżyć kolejny dzień.
              </p>

              <p>
                A potem zrozumiałem, że system nie wystarczy. Że problem nie leży w tym, co robisz, ale w tym, kim się
                uważasz.
              </p>

              <p className="font-bold text-on-light text-xl">
                Nie jestem guru transformacji. Jestem trenerem, który przeszedł przez to wszystko - depresję,
                uzależnienie, sukces bez sensu - i wyszedł z drugiej strony z mapą.
              </p>

              <p>
                Ta mapa to nie teoria. To jest coś, co zbudowałem na własnej skórze przez 25 lat. I teraz prowadzę
                innych tą samą drogą - ale szybciej, bo nie muszą szukać ścieżki sami.
              </p>

              <p className="font-bold text-on-light">Co mam, czego inni nie mają?</p>

              <p>
                <strong>Filozofia spotyka biznes.</strong> Cytuję Junga podczas rozmowy o ARR. Bułhakowa wplatam w
                strategię exit-u. Bo tak naprawdę działa świat - tylko nikt Ci tego nie mówi.
              </p>

              <p>
                <strong>Biegłość w obu ścieżkach.</strong> Większość coachów potrafi albo konfrontować, albo wspierać.
                Ja robię oba - i wiem, kiedy którego potrzebujesz. Anna potrzebowała ostrej konfrontacji. Lucja
                potrzebowała delikatnego prowadzenia. Obie przeszły transformację.
              </p>

              <p>
                <strong>Wschodnia głębia + zachodnia precyzja.</strong> Mam dostęp do tradycji, których amerykańscy
                coachowie nie mają. Ale działam z fokusem na rezultatach, nie na „energetycznych wibracjach".
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Co w cenie */}
      <section className="relative py-20 bg-void overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, rgba(109,40,217,0.15) 0%, transparent 50%)" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">Co jest w cenie?</h2>

            <div className="space-y-5">
              {[
                {
                  title: "8 sesji 1:1",
                  desc: "Od 50 minut do 2,5 godziny - w zależności od tego, gdzie jesteśmy w procesie. Bez sztucznego limitu czasowego.",
                },
                {
                  title: "Dostęp do mnie między sesjami",
                  desc: 'Signal lub SMS - dla nagłych przełomów, gdy coś "kliknie" o 3 w nocy i potrzebujesz to przepracować.',
                },
                {
                  title: "Pełna diagnostyka Life OS",
                  desc: "Głęboki skan Twojego systemu operacyjnego na starcie - zanim cokolwiek zmienimy.",
                },
                {
                  title: "Spersonalizowana mapa transformacji",
                  desc: "Nie szablon. Plan szyty na miarę, który ewoluuje z każdą sesją.",
                },
                {
                  title: "Nagrania wszystkich sesji",
                  desc: "Żebyś mógł wracać do kluczowych momentów. Często to, co usłyszysz za trzecim razem, zmieni wszystko.",
                },
                {
                  title: "Społeczność absolwentów",
                  desc: "Dożywotni dostęp do 1234 Daily Coaching - codziennie o 12:34 na Discordzie Lifehackerów.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start bg-white/5 rounded-lg p-5">
                  <CheckCircle className="w-5 h-5 mr-4 text-electric flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-bold text-white">{item.title}</p>
                    <p className="text-dim text-base mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inwestycja */}
      <section className="relative py-20 bg-diamond overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-on-light text-center">Inwestycja</h2>

            <div className="text-center mb-10">
              <p className="text-5xl font-bold text-electric mb-3">16 000 PLN</p>
              <p className="text-lg text-on-light-dim">Lub 2 × 6 500 PLN netto, jeśli masz firmę i wolisz rozłożyć.</p>
            </div>

            <div className="space-y-6 text-lg text-on-light-dim leading-relaxed">
              <h3 className="text-2xl font-bold text-on-light">Dlaczego tyle?</h3>

              <p>Bo to nie jest kurs online. To nie jest godzinna sesja „trzymaj się tam".</p>

              <p>
                To jest moja pełna obecność przez 8 tygodni - nie „3 pytania na email". Adaptacyjna metodologia, nie
                szablon w PDF dla każdego. Filozoficzna głębia i biznesowa precyzja w jednym - rzadka kombinacja.
              </p>

              <p>
                Plus: ludzie, którzy płacą więcej, angażują się bardziej. Inwestycja finansowa = inwestycja emocjonalna.
                A transformacja wymaga full skin in the game.
              </p>

              <p className="font-bold text-on-light text-xl">
                Pytanie nie brzmi „czy to drogie". Pytanie brzmi: ile kosztuje Cię kolejny rok życia w wewnętrznej
                wojnie?
              </p>

              <div className="bg-electric/5 border border-electric/20 rounded-lg p-6 mt-8">
                <p className="font-bold text-on-light mb-3">Gwarancja zwrotu - 2 tygodnie.</p>
                <p>
                  Jeśli po 2 tygodniach nie poczujesz, że ta praca jest fundamentalnie inna niż cokolwiek, co próbowałeś
                  do tej pory - oddaję pieniądze. Bez pytań, bez tłumaczenia się.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dla kogo TAK / NIE */}
      <section id="nie-dla-ciebie" className="relative py-20 bg-void overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle at 70% 30%, rgba(109,40,217,0.15) 0%, transparent 50%)" }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
              Dla kogo to jest - i dla kogo nie
            </h2>

            <div className="space-y-6 text-lg text-dim leading-relaxed mb-12">
              <p>
                Nie pracuję z każdym. Nie dlatego, że jestem elitarny - dlatego, że ta praca wymaga gotowości, której
                nie da się sfabrykować.
              </p>

              <p className="font-bold text-white text-xl">To jest dla Ciebie, jeśli:</p>

              <p>
                Osiągnąłeś coś - firmę, stanowisko, status - ale czujesz, że „coś nie gra". Nie potrzebujesz motywacji.
                Potrzebujesz kogoś, kto zobaczy to, czego sam nie widzisz.
              </p>
              <p>
                Myślisz systemowo. Interesujesz się Jungiem, filozofią, wzorcami. Widzisz połączenia tam, gdzie inni
                widzą chaos. I właśnie dlatego standardowy coaching Cię nudzi.
              </p>
              <p>
                Masz poczucie fragmentacji - różne role (lider, partner, ojciec, wizjoner) wojują ze sobą. Szukasz
                spójności, nie kolejnej techniki.
              </p>
              <p>
                Jesteś gotowy na proces. 8 tygodni. Bez quick fixów, bez „3 kroków do sukcesu". Rozumiesz, że prawdziwa
                zmiana wymaga czasu i odwagi.
              </p>

              <p className="font-bold text-white text-xl mt-10">To NIE jest dla Ciebie, jeśli:</p>

              <p>
                <strong className="text-white">Szukasz motywacyjnego kopa.</strong> Nie jestem cheerleaderem. Jeśli
                chcesz, żebym Ci mówił „jesteś super, dasz radę" - to nie tutaj.
              </p>
              <p>
                <strong className="text-white">Oczekujesz gotowych rozwiązań.</strong> Nie dam Ci „3 kroki do
                szczęścia". Pomogę Ci znaleźć własne odpowiedzi. Jeśli chcesz przepisu - kup kurs online.
              </p>
              <p>
                <strong className="text-white">Nie jesteś gotowy zakwestionować siebie.</strong> Jeśli uważasz, że
                problem jest „tam na zewnątrz" - rynek, ludzie, okoliczności - nie pomogę Ci. Problem zawsze zaczyna się
                wewnątrz.
              </p>
              <p>
                <strong className="text-white">Przeżywasz ostry kryzys.</strong> To nie jest terapia kryzysowa. Jeśli
                jesteś w gwałtownym załamaniu - najpierw stabilizacja (psychiatra/terapeuta), potem transformacja.
              </p>
              <p>
                <strong className="text-white">Nie stać Cię na tę inwestycję bez stresu.</strong> Jeśli 16K PLN to duży
                wysiłek finansowy - poczekaj. Wolę, żebyś dołączył, gdy będziesz gotowy, niż żebyś się zadłużał i przez
                to blokował proces.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-20 bg-diamond overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-on-light text-center">
              Prawdziwe pytania, uczciwe odpowiedzi
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem key={index} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sesja Discovery */}
      <section
        id="discovery-section"
        className="py-20 bg-void"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 80% 20%, rgba(109,40,217,0.25) 0%, transparent 50%), radial-gradient(ellipse at 20% 80%, rgba(0,122,255,0.15) 0%, transparent 50%)",
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-10 text-white text-center">
              Następny krok
            </h2>

            <div className="space-y-6 text-lg text-dim leading-relaxed mb-10">
              <p>Zanim cokolwiek zdecydujemy, musimy porozmawiać.</p>

              <p>
                30 minut na Zoom. Kamera włączona. Żadnego slajdu, żadnego pitcha. Zadam Ci kilka pytań - nie takich, jakie zadają na rozmowie kwalifikacyjnej, raczej takich, na które sam nie wpadłbyś, że potrzebujesz na nie odpowiedzieć.
              </p>

              <p>
                To nie jest rozmowa sprzedażowa. To wzajemna ocena - ja sprawdzam, czy mogę Ci pomóc, Ty sprawdzasz, czy chcesz mi zaufać w najtrudniejszych momentach. Obaj mamy prawo powiedzieć „nie". I to jest w porządku.
              </p>

              <p>
                Muszę Cię uprzedzić o jednej rzeczy: ta rozmowa bywa intensywna. Ludzie wychodzą z niej z clarity - niezależnie od tego, czy potem zdecydujemy się na współpracę. Niektórzy mówią, że te 30 minut dało im więcej niż pół roku terapii. (Terapeuci, przepraszam. Ale nie za bardzo.)
              </p>
            </div>

            <div className="text-center mb-10">
              <Link to="/discovery">
                <CTAButton variant="premium" size="xl" className="mb-6" showArrow>
                  Zarezerwuj Sesję Discovery
                </CTAButton>
              </Link>

              <p className="text-dim text-sm">Maksymalnie 5 aktywnych klientów jednocześnie.</p>
            </div>

            {/* P.S. Ladder */}
            <div className="space-y-6 text-lg text-dim leading-relaxed border-t border-white/10 pt-10">
              <p>
                <span className="font-bold text-white">P.S.</span> Nie muszę Cię przekonywać. Jeśli to jest Twoje,
                wiesz. Jeśli nie wiesz - nie jest (jeszcze). Ufam Twojej intuicji. Zaufaj jej też.
              </p>
              <p>
                <span className="font-bold text-white">P.P.S.</span> Życie jest za krótkie, żeby żyć w wewnętrznej
                wojnie. Nawet jeśli nie wybierzesz Life OS - znajdź kogoś, kto pomoże Ci to rozwiązać. Bo sukces bez
                spokoju to nie jest sukces. To wysokopłatne więzienie.
              </p>
              <p>
                <span className="font-bold text-white">P.P.P.S.</span> Jeśli dotarłeś aż tutaj i wciąż się wahasz - to
                jest właśnie jeden ze wzorców, z którym będziemy pracować. Twój analityczny umysł próbuje zapewnić sobie
                100% pewności przed podjęciem decyzji. Sesja Discovery to bezpieczny sposób, by zbadać tę niepewność.
              </p>

              <p className="text-center text-white/80 mt-8 italic">Dziękuję, że jesteś.</p>
              <p className="text-center text-white font-bold text-xl">- Ludwik</p>
            </div>
          </div>
        </div>
      </section>

      <RelatedPrograms currentPath="/program/lifeos-system-upgrade" />
    </Layout>
  );
}

// FAQ Accordion Item Component
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="cursor-pointer hover:shadow-lg transition-all duration-300" onClick={() => setIsOpen(!isOpen)}>
      <CardContent className="p-8">
        <div className="flex items-start justify-between">
          <h3 className="text-xl font-bold text-on-light pr-8">{question}</h3>
          <ChevronDown
            className={`w-6 h-6 text-depth flex-shrink-0 transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>
        {isOpen && (
          <div className="mt-4 pt-4 border-t border-depth/20 animate-fade-in">
            <p className="text-on-light-dim leading-relaxed">{answer}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
