import { CheckCircle } from "@/lib/icons";

export default function DiscoveryLifeOSOffer() {
  const features = [
    {
      title: "8 tygodni pracy 1:1",
      desc: "Sesje ze mną (50 min do 2,5 godziny, w zależności od tego, gdzie jesteśmy w procesie). Nie z nagraniem, nie z chatbotem. Z człowiekiem, który zadaje pytania, o których nie wiedziałeś, że ich potrzebujesz.",
    },
    {
      title: "Diagnostyka Life OS",
      desc: 'Na starcie przeskanujemy cały Twój "system operacyjny": od wartości, przez narracje, po codzienne nawyki. Żeby wiedzieć, co zdejmować — trzeba najpierw zobaczyć, co leży na diamencie.',
    },
    {
      title: "Dostęp VIP 24/7",
      desc: "Między sesjami nie zostajesz sam. Masz do mnie bezpośredni kontakt (Signal) — bo przełomy nie czekają na następną zaplanowaną sesję.",
    },
    {
      title: "Nagrania wszystkich sesji",
      desc: "Żebyś mógł wracać do kluczowych momentów. Czasem zdanie, które przeszło niezauważone w środę, okazuje się najważniejszym zdaniem miesiąca w sobotę rano.",
    },
    {
      title: "Społeczność absolwentów",
      desc: "Dożywotni dostęp do grupy ludzi, którzy przeszli ten sam proces. Codziennie o 12:34 na Discordzie Lifehackerów.",
    },
    {
      title: "Gwarancja zwrotu po 2 tygodniach",
      desc: 'Jeśli po dwóch tygodniach nie poczujesz, że ta praca jest fundamentalnie inna niż cokolwiek, co próbowałeś do tej pory — powiemy sobie "do widzenia" i nie zapłacisz ani złotówki więcej.',
    },
  ];

  const phases = [
    {
      title: "Tydzień 1-2: Diagnostyka systemu",
      desc: "Głęboki skan — gdzie jest konflikt tożsamości, jaka narracja Cię blokuje, jakiego rodzaju pracy potrzebujesz. Niektórzy potrzebują, żeby ktoś im przeciął więzy. Inni — pozwolenia na rozwinięcie skrzydeł. Większość — obu, naprzemiennie.",
    },
    {
      title: "Tydzień 3-4: Dekonstrukcja",
      desc: "Tu zaczynamy zdejmować sukno. Warstwa po warstwie. Czasem przez metaforę. Czasem przez filozofię (Jung, Faust i Mistrz i Małgorzata to moje ulubione lustra). Czasem przez pytanie, po którym zapada cisza na kilka minut — i ta cisza mówi więcej niż wszystkie poprzednie odpowiedzi.",
    },
    {
      title: "Tydzień 5-6: Integracja",
      desc: "Teraz uczymy Twoje konfliktowe części współpracować. Bezwzględny CEO i wrażliwy wizjoner to nie wrogowie — to zespół. Energia, która szła na wewnętrzną wojnę, zaczyna iść na tworzenie. Decyzje przestają być polem bitwy.",
    },
    {
      title: "Tydzień 7-8: Nowy standard",
      desc: 'Nowy system operacyjny staje się Twoją drugą naturą. Nie "fake it till you make it". Nie "stosuj tę technikę codziennie". Fundamentalna zmiana tego, jak podejmujesz decyzje, jak prowadzisz i jak żyjesz.',
    },
  ];

  return (
    <section className="section-content bg-diamond-light">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="mx-auto" style={{ maxWidth: "900px" }}>
          <h2 className="font-heading text-2xl md:text-4xl font-bold mb-8 text-text-on-light">
            Life OS: System Upgrade — co instalujesz
          </h2>

          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-text-on-light/80">
            <p>
              Jeśli po sesji Discovery obaj zdecydujemy, że to ma sens, oto co
              Cię czeka:
            </p>

            {/* Features */}
            <div className="space-y-4 mt-8">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="flex items-start gap-4 p-6 rounded-sm border border-text-on-light/10"
                >
                  <CheckCircle className="h-5 w-5 text-electric mt-1 shrink-0" />
                  <div>
                    <h3 className="font-bold text-text-on-light mb-1">
                      {f.title}
                    </h3>
                    <p className="text-base">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 4 Phases */}
            <h3 className="font-heading text-xl md:text-2xl font-bold mt-12 mb-6 text-text-on-light">
              4 fazy procesu
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {phases.map((p) => (
                <div
                  key={p.title}
                  className="p-6 rounded-sm border border-text-on-light/10"
                >
                  <h4 className="font-bold text-electric mb-2">{p.title}</h4>
                  <p className="text-base text-text-on-light/70">{p.desc}</p>
                </div>
              ))}
            </div>

            {/* Before/After */}
            <div className="mt-12 p-8 rounded-sm border border-text-on-light/10">
              <h3 className="font-heading text-lg font-bold mb-4 text-text-on-light">
                Jak to wygląda w praktyce?
              </h3>
              <p className="font-semibold text-text-on-light mb-4">
                Poniedziałek, 9 rano. Decyzja, na której stoi dużo.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <p className="font-bold text-text-on-light/60 mb-2">Przed:</p>
                  <p className="text-base">
                    Paraliż. Analiza. Więcej analiz. Lęk. Prokrastynacja.
                    Decyzja z desperacji pod presją czasu.
                  </p>
                </div>
                <div>
                  <p className="font-bold text-electric mb-2">Po:</p>
                  <p className="text-base">
                    Jasność. Połączenie intuicji i danych. Decyzja w pół
                    godziny. Spokój niezależnie od wyniku. Bo wiesz, że decyzja
                    nie definiuje Ciebie — Ty definiujesz decyzję.
                  </p>
                </div>
              </div>
            </div>

            {/* Price CTA */}
            <div className="mt-12 text-center p-12 rounded-sm border border-electric/20 bg-electric/5">
              <p className="text-sm font-bold uppercase tracking-wider text-electric mb-2">
                PREMIUM · Pełen Proces
              </p>
              <p className="text-4xl md:text-5xl font-heading font-extrabold text-text-on-light mb-2">
                16 000 PLN
              </p>
              <p className="text-base text-text-on-light/60 mb-8">
                Faktura VAT · Możliwość rozłożenia na 2 raty
              </p>
              <button
                className="px-10 py-4 rounded font-bold text-lg text-white"
                style={{
                  background:
                    "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                  boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                }}
                onClick={() => {
                  const el = document.querySelector("#formularz");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Sprawdź dostępność →
              </button>
              <p className="text-sm text-text-on-light/50 mt-4">
                Dostępne: max 5 aktywnych klientów jednocześnie
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
