import Layout from "@/components/layout/Layout";
import OptimizedImage from "@/components/ui/OptimizedImage";
import { ExternalLink } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { toast } from "sonner";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import { Link } from "react-router-dom";

export default function NewsletterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Proszę wprowadź adres email");
      return;
    }

    setIsLoading(true);

    if (typeof window.ml === 'function') {
      window.ml('subscribe', {
        fields: { email, name },
        groups: ['99579628001166406'],
      });
    }

    setTimeout(() => {
      window.open("https://app.easycart.pl/checkout/siadlak/newsletter", "_blank");
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Layout>
      <SEO {...getSEOConfig("/newsletter")} />

      <div className="min-h-screen">
        {/* ===== 1. HERO (DARK) ===== */}
        <section className="relative py-20 sm:py-28 bg-void-glow overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center space-y-6 sm:space-y-8">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-heading font-bold text-on-dark">
                (<span aria-hidden="true">🧠</span> + <span aria-hidden="true">🤖</span>)^
                <span aria-hidden="true">💜</span>
              </h1>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                Umysł + AI do pot&#281;gi Serca.
              </h2>

              <p className="text-lg sm:text-xl text-dim max-w-2xl mx-auto leading-relaxed">
                Cotygodniowy newsletter Ludwika&nbsp;C.&nbsp;Siadlaka.
                <br />
                Ka&#380;da niedziela, 19:00. Prosto na Twoj&#261; skrzynk&#281; - jedyne miejsce, gdzie algorytm nie
                decyduje, czy to zobaczysz.
              </p>

              <a
                href="#formularz"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase tracking-wide rounded"
                style={{
                  background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                  boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                }}
              >
                Zapisuj&#281; si&#281; →
              </a>
            </div>
          </div>
        </section>

        {/* ===== 2. DLACZEGO EMAIL (DARK) ===== */}
        <section className="py-16 sm:py-20 bg-void">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                Dlaczego pisz&#281; do Ciebie na email?
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-dim leading-relaxed">
                <p>
                  Bo to jedyne miejsce, w kt&oacute;rym mog&#281; do Ciebie <em>dotrze&#263;</em>.
                </p>

                <p>
                  Pomy&#347;l o tym. Na LinkedInie algorytm decyduje, czy zobaczysz m&oacute;j post - w
                  zale&#380;no&#347;ci od tego, ile os&oacute;b go polubiło w pierwszej godzinie. Na Instagramie
                  Tw&oacute;j feed jest kuratorem tre&#347;ci, ale kuratorem nie jeste&#347; Ty - jest nim maszyna,
                  kt&oacute;ra zarabia na Twojej uwadze. Na YouTube&#8217;ie &#8222;polecane&#8221; to synonim
                  &#8222;uzale&#380;niaj&#261;ce&#8221;, nie &#8222;warto&#347;ciowe&#8221;.
                </p>

                <p>
                  Wsz&#281;dzie tam kto&#347; stoi mi&#281;dzy nami. Kto&#347;, kto nie zna Ci&#281;, nie rozumie
                  Ci&#281; i - co najwa&#380;niejsze - nie obchodzi go, czy to, co zobaczysz, cokolwiek w Tobie zmieni.
                  Obchodzi go, &#380;eby&#347; <em>scrollowa&#322; dalej</em>.
                </p>

                <p className="text-on-dark font-bold text-lg sm:text-xl">
                  Twoja skrzynka email to ostatnia jeszcze w miar&#281; intymna przysta&#324; w internecie.
                </p>

                <p>
                  Kiedy wysy&#322;am Ci wiadomo&#347;&#263; w niedziel&#281; o 19:00 - ona na Ciebie czeka. Nie musi
                  walczy&#263; z algorytmem. Nie musi zbiera&#263; polubie&#324;, &#380;eby do Ciebie dotrze&#263;. Nie
                  musi by&#263; &#8222;viralowa&#8221;. Musi by&#263; tylko <em>prawdziwa</em>.
                </p>

                <p>
                  I dlatego pisz&#281; w&#322;a&#347;nie tu. Bo zale&#380;y mi na kontakcie z &#380;ywym
                  cz&#322;owiekiem. Z Tob&#261; - nie z Twoim profilem, nie z Twoim avatarem, nie z Twoj&#261;
                  &#8222;sieci&#261; kontakt&oacute;w&#8221;. Z&nbsp;Tob&#261;.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* ===== 3. JAK TO DZIAŁA (LIGHT) ===== */}
        <section className="py-16 sm:py-20 bg-diamond">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-light leading-[1.1] tracking-[-0.02em]">
                Jak to dzia&#322;a?
              </h2>

              {/* Niedziela */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-on-light">
                  Niedziela, 19:00 - rzucam my&#347;l.
                </h3>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Nie porad&#281;. Nie &#8222;5 krok&oacute;w do lepszego Ciebie&#8221;. Jedn&#261; perspektyw&#281;,
                  kt&oacute;ra ma szans&#281; zderzy&#263; si&#281; z Twoj&#261;. Czasem o AI i o tym, jak zmienia
                  spos&oacute;b, w jaki my&#347;limy. Czasem o produktywno&#347;ci i o tym, dlaczego robimy wi&#281;cej,
                  a czujemy mniej. Czasem o czym&#347;, co zobaczy&#322;em z okna hotelowego pokoju w Norwegii i co
                  zmieni&#322;o mi spos&oacute;b patrzenia na reszt&#281; tygodnia.
                </p>
                <div className="space-y-2 pl-4 border-l-2 border-electric">
                  <p className="text-base text-on-light-dim italic">
                    &#8222;Udawaj, a&#380; ci si&#281; uda - robisz to dobrze czy &#378;le?&#8221;
                  </p>
                  <p className="text-base text-on-light-dim italic">
                    &#8222;Czy sztuczna inteligencja czyni nas m&#261;drzejszymi, czy tylko bardziej wydajnymi?&#8221;
                  </p>
                  <p className="text-base text-on-light-dim italic">
                    &#8222;Dlaczego najlepsi liderzy w erze AI m&oacute;wi&#261; &#8218;nie wiem&#8217;
                    cz&#281;&#347;ciej ni&#380; kiedykolwiek?&#8221;
                  </p>
                </div>
              </div>

              {/* Ty odpowiadasz */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-on-light">
                  Ty odpowiadasz - je&#347;li chcesz.
                </h3>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Odpowied&#378; na wiadomo&#347;&#263;. Podwa&#380; moj&#261; my&#347;l. Rozbuduj j&#261;. Podziel
                  si&#281; swoj&#261; histori&#261;. Albo po prostu przeczytaj i id&#378; dalej - to te&#380; jest w
                  porz&#261;dku.
                </p>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Ale je&#347;li odpowiesz - czytam. I odpisuj&#281;. Nie autoresponder, nie &#8222;Twoja
                  wiadomo&#347;&#263; jest dla nas wa&#380;na&#8221;.{" "}
                  <strong className="text-on-light">Ja. Osobi&#347;cie.</strong>
                </p>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Bo po to wybra&#322;em email. &#379;eby m&oacute;c z Tob&#261; <em>rozmawia&#263;</em>, nie
                  &#8222;budowa&#263; zasi&#281;g&#8221;.
                </p>
              </div>

              {/* Sobota */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-on-light">
                  Discord Lifehackerów - zderzenie perspektyw.
                </h3>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Najlepsze wymiany z tygodnia. 12 r&oacute;&#380;nych punkt&oacute;w widzenia na jeden temat. Zero
                  zgody. Mn&oacute;stwo m&#261;dro&#347;ci. Bo prawda rzadko le&#380;y po jednej stronie -
                  cz&#281;&#347;ciej jest tym, co widzisz, kiedy staniesz po&#347;rodku i spojrzysz w obie strony naraz.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. PRZYKŁAD TREŚCI (LIGHT continuation) ===== */}
        <section className="pb-16 sm:pb-20 bg-diamond">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h3 className="text-xl sm:text-2xl font-heading font-bold text-on-light">
                Jak wygl&#261;da prawdziwy newsletter?
              </h3>

              <div className="rounded-sm border border-on-light/10 overflow-hidden">
                <OptimizedImage
                  src="/lovable-uploads/newsletter-example.png"
                  alt="Przykład newslettera — Fake it till you make it"
                  className="w-full"
                  width={284}
                  height={292}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <blockquote className="border-l-2 border-electric pl-6 italic text-on-light-dim text-lg">
                &#8222;Udawaj, a&#380; ci si&#281; uda - robisz to dobrze czy &#378;le?&#8221;
              </blockquote>

              <p className="text-base text-on-light-dim leading-relaxed">
                47 odpowiedzi. 12 zupe&#322;nie przeciwstawnych perspektyw. To nie jest artyku&#322; do przeczytania i
                zamkni&#281;cia. To jest &#380;ywa rozmowa, kt&oacute;ra ewoluuje przez ca&#322;y tydzie&#324;.
              </p>

              <a
                href="https://connect.siadlak.email/preview/484845/emails/163624365229868308"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded font-semibold text-base text-white"
                style={{
                  background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                  boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                }}
              >
                Przeczytaj ten newsletter i odpowiedzi
                <ExternalLink className="h-5 w-5" />
              </a>
            </div>
          </div>
        </section>


        {/* ===== 5-6. DLA KOGO + SOCIAL PROOF (DARK) ===== */}
        <section className="py-16 sm:py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-16">
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                  Dla kogo to jest?
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-dim leading-relaxed">
                  <p>
                    <strong className="text-on-dark">Nie dla Ciebie, je&#347;li</strong> szukasz kolejnej listy &#8222;10
                    narz&#281;dzi AI, kt&oacute;re musisz zna&#263;&#8221;. Mam do Ciebie zbyt du&#380;o szacunku,
                    &#380;eby wysy&#322;a&#263; Ci co&#347;, co jutro b&#281;dzie nieaktualne.
                  </p>

                  <p>
                    <strong className="text-on-dark">Dla Ciebie, je&#347;li</strong> masz do&#347;&#263; konsumowania
                    trend&oacute;w i chcesz co&#347; z nimi <em>zrobi&#263;</em>. Je&#347;li czujesz, &#380;e im
                    wi&#281;cej narz&#281;dzi, tym bardziej brakuje Ci czego&#347;, co trudno nazwa&#263;. Je&#347;li
                    chcesz my&#347;le&#263; g&#322;&#281;biej - i mie&#263; z kim.
                  </p>

                  <p>
                    Wi&#281;kszo&#347;&#263; ludzi, kt&oacute;rzy tu trafiaj&#261;, to programi&#347;ci, liderzy,
                    przedsi&#281;biorcy, tw&oacute;rcy - ludzie, kt&oacute;rzy maj&#261; wiedz&#281;, ale szukaj&#261;
                    m&#261;dro&#347;ci. Kt&oacute;rzy wiedz&#261; <em>jak</em>, ale coraz cz&#281;&#347;ciej pytaj&#261;{" "}
                    <em>po co</em>.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                  Co m&oacute;wi&#261; czytelnicy?
                </h2>

                <div className="space-y-6">
                  <blockquote className="border-l-2 border-electric pl-6 space-y-3">
                    <p className="text-base sm:text-lg text-dim italic leading-relaxed">
                      &#8222;Ludwik nie ma racji w 40% przypadk&oacute;w. I w&#322;a&#347;nie dlatego rozmowy z nim
                      s&#261; najcenniejsze. Kwestionuje moje za&#322;o&#380;enia, nie potakuje im.&#8221;
                    </p>
                    <footer className="text-sm text-dim not-italic">- Katarzyna L., konsultantka AI</footer>
                  </blockquote>

                  <blockquote className="border-l-2 border-electric pl-6 space-y-3">
                    <p className="text-base sm:text-lg text-dim italic leading-relaxed">
                      &#8222;Jedna my&#347;l z newslettera zmieni&#322;a wi&#281;cej ni&#380; 100 &#8218;porad
                      produktywno&#347;ci&#8217; z LinkedIn. Przesta&#322;am optymalizowa&#263; czas. Zacz&#281;&#322;am
                      optymalizowa&#263; jako&#347;&#263; my&#347;lenia.&#8221;
                    </p>
                    <footer className="text-sm text-dim not-italic">- Anna K., trenerka przyw&oacute;dztwa</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. CTA ZAPIS (LIGHT) ===== */}
        <section id="formularz" className="py-16 sm:py-20 bg-diamond">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-light leading-[1.1] tracking-[-0.02em]">
                Do&#322;&#261;cz do rozmowy
              </h2>

              <p className="text-base text-on-light-dim leading-relaxed">
                Jedna wiadomo&#347;&#263; w tygodniu. W ka&#380;d&#261; niedziel&#281; o 19:00. Prosto na Tw&oacute;j
                email - bez algorytm&oacute;w, bez paywalli, bez bzdur.
              </p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 max-w-md mx-auto">
                <Input
                  type="text"
                  placeholder="Twoje imię"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="text-center sm:text-left"
                  disabled={isLoading}
                />
                <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Twój adres email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 text-center sm:text-left"
                  disabled={isLoading}
                  required
                />
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2.5 font-bold text-white rounded text-sm uppercase tracking-wide disabled:opacity-50 whitespace-nowrap"
                  style={{
                    background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                    boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                  }}
                >
                  {isLoading ? "Rejestruj\u0119..." : "Zapisuj\u0119 si\u0119 \u2192"}
                </button>
              </form>

              <p className="text-sm text-on-light-dim">
                150+ os&oacute;b ju&#380; czyta. Do&#322;&#261;cz, je&#347;li chcesz my&#347;le&#263; g&#322;&#281;biej.
              </p>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* ===== 8. ZAMKNIĘCIE + P.S. (DARK) ===== */}
        <section className="py-16 sm:py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                Ostatnia rzecz
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-dim leading-relaxed">
                <p>Wiesz, co jest ironiczne?</p>

                <p>
                  &#379;yjemy w erze, w kt&oacute;rej mamy nieograniczony dost&#281;p do informacji - i
                  jednocze&#347;nie coraz mniej okazji do prawdziwej rozmowy. Mamy tysi&#261;ce
                  &#8222;po&#322;&#261;cze&#324;&#8221; na LinkedInie i zero ludzi, kt&oacute;rym mo&#380;emy
                  powiedzie&#263; &#8222;nie wiem, co dalej&#8221;.
                </p>

                <p>Ten newsletter nie rozwi&#261;&#380;e tego problemu. Ale mo&#380;e by&#263; pocz&#261;tkiem.</p>

                <p>
                  Bo ka&#380;da dobra rozmowa zaczyna si&#281; od jednej my&#347;li, kt&oacute;r&#261; kto&#347;
                  mia&#322; odwag&#281; wypowiedzie&#263; na g&#322;os. I od drugiej osoby, kt&oacute;ra mia&#322;a
                  odwag&#281; odpowiedzie&#263;: &#8222;widz&#281; to inaczej.&#8221;
                </p>

                <p>
                  To jest to, co robi&#281; w ka&#380;d&#261; niedziel&#281; o 19:00. Rzucam my&#347;l. Ty decydujesz,
                  co z ni&#261; zrobisz.
                </p>

                <p className="text-on-dark font-bold text-lg sm:text-xl">Dzi&#281;kuj&#281;, &#380;e jeste&#347;.</p>

                <p className="text-on-dark font-bold">- Ludwik</p>
              </div>

              {/* P.S. ladder */}
              <div className="pt-8 border-t border-white/10 space-y-6 text-sm sm:text-base text-dim leading-relaxed">
                <p>
                  <strong className="text-on-dark">P.S.</strong> Je&#347;li po kilku newsletterach poczujesz, &#380;e
                  chcesz wi&#281;cej - mam{" "}
                  <Link to="/program" className="text-electric underline underline-offset-4 hover:text-electric/80">
                    programy
                  </Link>
                  , kt&oacute;re mo&#380;esz zainstalowa&#263; samodzielnie, w swoim tempie. Wiele os&oacute;b zaczyna
                  od newslettera, a potem trafia do Aplikacji Mentalnych - kiedy s&#261; gotowe. Nie ma po&#347;piechu.
                </p>

                <p>
                  <strong className="text-on-dark">P.P.S.</strong> Je&#347;li czujesz, &#380;e Tw&oacute;j problem
                  le&#380;y g&#322;&#281;biej ni&#380; produktywno&#347;&#263; czy narz&#281;dzia - jest{" "}
                  <Link to="/discovery" className="text-electric underline underline-offset-4 hover:text-electric/80">
                    Sesja Discovery
                  </Link>
                  . 30 minut rozmowy, &#380;eby&#347;my obaj wiedzieli, czy mo&#380;emy sobie pom&oacute;c. Ale to jest
                  rozmowa na p&oacute;&#378;niej. Najpierw - przeczytaj kilka niedziel. Zobaczysz, czy m&oacute;j
                  j&#281;zyk do Ciebie trafia.
                </p>

                <p>
                  <strong className="text-on-dark">P.P.P.S.</strong> A je&#347;li zastanawiasz si&#281;, czy to jest
                  &#8222;kolejny newsletter, kt&oacute;ry przeczytam dwa razy i zapomn&#281;&#8221; - to uczciwe
                  pytanie. Nie obiecuj&#281;, &#380;e zmieni&#281; Ci &#380;ycie jednym emailem. Obiecuj&#281;, &#380;e
                  w ka&#380;d&#261; niedziel&#281; wy&#347;l&#281; Ci co&#347;, nad czym warto si&#281; na chwil&#281;
                  zatrzyma&#263;. A w &#347;wiecie, kt&oacute;ry krzyczy &#8222;scrolluj dalej&#8221; - zatrzymanie
                  si&#281; to ju&#380; jest co&#347;.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
