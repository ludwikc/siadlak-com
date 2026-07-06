import Layout from "@/components/layout/Layout";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import { ExternalLink } from "lucide-react";
import SEO from "@/components/SEO";
import { getSEOConfig } from "@/lib/seo-config";
import { Link } from "react-router-dom";
import MailerLiteEmbed from "@/components/MailerLiteEmbed";

export default function NewsletterPage() {

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
                Umysł + AI do potęgi Serca.
              </h2>

              <p className="text-lg sm:text-xl text-dim max-w-2xl mx-auto leading-relaxed">
                Mailing Ludwika C. Siadlaka.
                <br />
                Bez harmonogramu i bez kalendarza treści. Piszę, kiedy mam coś, co naprawdę warto
                wysłać - prosto na Twoją skrzynkę, jedyne miejsce, gdzie algorytm nie decyduje, czy
                to zobaczysz.
              </p>

              <a
                href="#formularz"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white uppercase tracking-wide rounded"
                style={{
                  background: "linear-gradient(135deg, hsl(211 100% 50%), hsl(263 70% 50%))",
                  boxShadow: "0 4px 15px rgba(109,40,217,0.4)",
                }}
              >
                Zapisuję się</a>
            </div>
          </div>
        </section>

        {/* ===== 2. DLACZEGO EMAIL (DARK) ===== */}
        <section className="py-20 sm:py-20 bg-void">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                Dlaczego piszę do Ciebie na email?
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-dim leading-relaxed">
                <p>
                  Bo to jedyne miejsce, w którym mogę do Ciebie <em>dotrzeć</em>.
                </p>

                <p>
                  Pomyśl o tym. Na LinkedInie algorytm decyduje, czy zobaczysz mój post - w
                  zależności od tego, ile osób go polubiło w pierwszej godzinie. Na Instagramie
                  Twój feed jest kuratorem treści, ale kuratorem nie jesteś Ty - jest nim maszyna,
                  która zarabia na Twojej uwadze. Na YouTube’ie „polecane” to synonim
                  „uzależniające”, nie „wartościowe”.
                </p>

                <p>
                  Wszędzie tam ktoś stoi między nami. Ktoś, kto nie zna Cię, nie rozumie
                  Cię i - co najważniejsze - nie obchodzi go, czy to, co zobaczysz, cokolwiek w Tobie zmieni.
                  Obchodzi go, żebyś <em>scrollował dalej</em>.
                </p>

                <p className="text-on-dark font-bold text-lg sm:text-xl">
                  Twoja skrzynka email to ostatnia jeszcze w miarę intymna przystań w internecie.
                </p>

                <p>
                  Kiedy wysyłam Ci wiadomość - ona na Ciebie czeka. Nie musi
                  walczyć z algorytmem. Nie musi zbierać polubień, żeby do Ciebie dotrzeć. Nie
                  musi być „viralowa”. Musi być tylko <em>prawdziwa</em>.
                </p>

                <p>
                  I dlatego piszę właśnie tu. Bo zależy mi na kontakcie z żywym
                  człowiekiem. Z Tobą - nie z Twoim profilem, nie z Twoim avatarem, nie z Twoją
                  „siecią kontaktów”. Z Tobą.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* ===== 3. JAK TO DZIAŁA (LIGHT) ===== */}
        <section className="py-20 sm:py-20 bg-diamond">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-light leading-[1.1] tracking-[-0.02em]">
                Jak to działa?
              </h2>

              {/* Kiedy przychodzi myśl */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-on-light">
                  Kiedy przychodzi myśl - wysyłam.
                </h3>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Nie piszę w każdą niedzielę o 19:00, bo nie jestem maszyną do produkcji
                  treści. Piszę wtedy, kiedy coś we mnie dojrzeje na tyle, że nie wysłać
                  byłoby stratą - czasem dwa razy w tygodniu, czasem raz na dwa. Inspiracja nie zagląda
                  do kalendarza. Ja też przestałem.
                </p>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Nie poradę. Nie „5 kroków do lepszego Ciebie”. Jedną perspektywę,
                  która ma szansę zderzyć się z Twoją. Czasem o AI i o tym, jak zmienia
                  sposób, w jaki myślimy. Czasem o produktywności i o tym, dlaczego robimy więcej,
                  a czujemy mniej. Czasem o czymś, co zobaczyłem z okna hotelowego pokoju w Norwegii i co
                  zmieniło mi sposób patrzenia na resztę tygodnia.
                </p>
                <div className="space-y-2 pl-4 border-l-2 border-electric">
                  <p className="text-base text-on-light-dim italic">
                    „Udawaj, aż ci się uda - robisz to dobrze czy źle?”
                  </p>
                  <p className="text-base text-on-light-dim italic">
                    „Czy sztuczna inteligencja czyni nas mądrzejszymi, czy tylko bardziej wydajnymi?”
                  </p>
                  <p className="text-base text-on-light-dim italic">
                    „Dlaczego najlepsi liderzy w erze AI mówią ‚nie wiem’
                    częściej niż kiedykolwiek?”
                  </p>
                </div>
              </div>

              {/* Ty odpowiadasz */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-on-light">
                  Ty odpowiadasz - jeśli chcesz.
                </h3>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Odpowiedź na wiadomość. Podważ moją myśl. Rozbuduj ją. Podziel
                  się swoją historią. Albo po prostu przeczytaj i idź dalej - to też jest w
                  porządku.
                </p>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Ale jeśli odpowiesz - czytam. I odpisuję. Nie autoresponder, nie „Twoja
                  wiadomość jest dla nas ważna”.{" "}
                  <strong className="text-on-light">Ja. Osobiście.</strong>
                </p>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Bo po to wybrałem email. Żeby móc z Tobą <em>rozmawiać</em>, nie
                  „budować zasięg”.
                </p>
              </div>

              {/* Sobota */}
              <div className="space-y-4">
                <h3 className="text-lg sm:text-xl font-heading font-bold text-on-light">
                  Discord Lifehackerów — zderzenie perspektyw.
                </h3>
                <p className="text-base text-on-light-dim leading-relaxed">
                  Najlepsze wymiany z tygodnia. 12 różnych punktów widzenia na jeden temat. Zero
                  zgody. Mnóstwo mądrości. Bo prawda rzadko leży po jednej stronie -
                  częściej jest tym, co widzisz, kiedy staniesz pośrodku i spojrzysz w obie strony naraz.
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
                Jak wygląda prawdziwy mail?
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
                „Udawaj, aż ci się uda - robisz to dobrze czy źle?”
              </blockquote>

              <p className="text-base text-on-light-dim leading-relaxed">
                47 odpowiedzi. 12 zupełnie przeciwstawnych perspektyw. To nie jest artykuł do przeczytania i
                zamknięcia. To jest żywa rozmowa, która ewoluuje przez cały tydzień.
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
        <section className="py-20 sm:py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-16">
              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                  Dla kogo to jest?
                </h2>

                <div className="space-y-6 text-base sm:text-lg text-dim leading-relaxed">
                  <p>
                    <strong className="text-on-dark">Nie dla Ciebie, jeśli</strong> szukasz kolejnej listy „10
                    narzędzi AI, które musisz znać”. Mam do Ciebie zbyt dużo szacunku,
                    żeby wysyłać Ci coś, co jutro będzie nieaktualne.
                  </p>

                  <p>
                    <strong className="text-on-dark">Dla Ciebie, jeśli</strong> masz dość konsumowania
                    trendów i chcesz coś z nimi <em>zrobić</em>. Jeśli czujesz, że im
                    więcej narzędzi, tym bardziej brakuje Ci czegoś, co trudno nazwać. Jeśli
                    chcesz myśleć głębiej - i mieć z kim.
                  </p>

                  <p>
                    Większość ludzi, którzy tu trafiają, to programiści, liderzy,
                    przedsiębiorcy, twórcy - ludzie, którzy mają wiedzę, ale szukają
                    mądrości. Którzy wiedzą <em>jak</em>, ale coraz częściej pytają{" "}
                    <em>po co</em>.
                  </p>
                </div>
              </div>

              <div className="space-y-8">
                <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                  Co mówią czytelnicy?
                </h2>

                <div className="space-y-6">
                  <blockquote className="border-l-2 border-electric pl-6 space-y-3">
                    <p className="text-base sm:text-lg text-dim italic leading-relaxed">
                      „Ludwik nie ma racji w 40% przypadków. I właśnie dlatego rozmowy z nim
                      są najcenniejsze. Kwestionuje moje założenia, nie potakuje im.”
                    </p>
                    <footer className="text-sm text-dim not-italic">— Katarzyna L., konsultantka AI</footer>
                  </blockquote>

                  <blockquote className="border-l-2 border-electric pl-6 space-y-3">
                    <p className="text-base sm:text-lg text-dim italic leading-relaxed">
                      „Jedna myśl z newslettera zmieniła więcej niż 100 ‚porad
                      produktywności’ z LinkedIn. Przestałam optymalizować czas. Zaczęłam
                      optymalizować jakość myślenia.”
                    </p>
                    <footer className="text-sm text-dim not-italic">— Anna K., trenerka przywództwa</footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 7. CTA ZAPIS (LIGHT) ===== */}
        <section id="formularz" className="py-20 sm:py-20 bg-diamond">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center space-y-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-light leading-[1.1] tracking-[-0.02em]">
                Dołącz do rozmowy
              </h2>

              <p className="text-base text-on-light-dim leading-relaxed">
                Żadnego harmonogramu - tylko wiadomości, które miały powód powstać.
                Prosto na Twój email - bez algorytmów, bez paywalli, bez bzdur.
              </p>

              <MailerLiteEmbed dataForm="lFFyEs" />

              <p className="text-sm text-on-light-dim">
                1 500+ osób już czyta. Dołącz, jeśli chcesz myśleć głębiej.
              </p>
            </div>
          </div>
        </section>

        <div className="the-cut" />

        {/* ===== 8. ZAMKNIĘCIE + P.S. (DARK) ===== */}
        <section className="py-20 sm:py-20 bg-void-glow">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-2xl sm:text-3xl font-heading font-bold text-on-dark leading-[1.1] tracking-[-0.02em]">
                Ostatnia rzecz
              </h2>

              <div className="space-y-6 text-base sm:text-lg text-dim leading-relaxed">
                <p>Wiesz, co jest ironiczne?</p>

                <p>
                  Żyjemy w erze, w której mamy nieograniczony dostęp do informacji - i
                  jednocześnie coraz mniej okazji do prawdziwej rozmowy. Mamy tysiące
                  „połączeń” na LinkedInie i zero ludzi, którym możemy
                  powiedzieć „nie wiem, co dalej”.
                </p>

                <p>Ten mailing nie rozwiąże tego problemu. Ale może być początkiem.</p>

                <p>
                  Bo każda dobra rozmowa zaczyna się od jednej myśli, którą ktoś
                  miał odwagę wypowiedzieć na głos. I od drugiej osoby, która miała
                  odwagę odpowiedzieć: „widzę to inaczej.”
                </p>

                <p>
                  To jest to, co robię za każdym razem, kiedy do Ciebie piszę. Rzucam myśl. Ty
                  decydujesz, co z nią zrobisz.
                </p>

                <p className="text-on-dark font-bold text-lg sm:text-xl">Dziękuję, że jesteś.</p>

                <p className="text-on-dark font-bold">— Ludwik</p>
              </div>

              {/* P.S. ladder */}
              <div className="pt-8 border-t border-white/10 space-y-6 text-sm sm:text-base text-dim leading-relaxed">
                <p>
                  <strong className="text-on-dark">P.S.</strong> Jeśli po kilku mailach poczujesz, że
                  chcesz więcej - mam{" "}
                  <Link to="/program" className="text-electric underline underline-offset-4 hover:text-electric/80">
                    programy
                  </Link>
                  , które możesz zainstalować samodzielnie, w swoim tempie. Wiele osób zaczyna
                  od newslettera, a potem trafia do Aplikacji Mentalnych - kiedy są gotowe. Nie ma pośpiechu.
                </p>

                <p>
                  <strong className="text-on-dark">P.P.S.</strong> Jeśli czujesz, że Twój problem
                  leży głębiej niż produktywność czy narzędzia - jest{" "}
                  <Link to="/discovery" className="text-electric underline underline-offset-4 hover:text-electric/80">
                    Sesja Discovery
                  </Link>
                  . 30 minut rozmowy, żebyśmy obaj wiedzieli, czy możemy sobie pomóc. Ale to jest
                  rozmowa na później. Najpierw - przeczytaj kilka moich maili. Zobaczysz, czy mój
                  język do Ciebie trafia.
                </p>

                <p>
                  <strong className="text-on-dark">P.P.P.S.</strong> A jeśli zastanawiasz się, czy to jest
                  „kolejny mailing, który przeczytam dwa razy i zapomnę” - to uczciwe
                  pytanie. Nie obiecuję, że zmienię Ci życie jednym emailem. Obiecuję coś
                  innego: jeśli coś ode mnie dostaniesz, to będzie coś, nad czym warto się na
                  chwilę zatrzymać. A w świecie, który krzyczy „scrolluj dalej” -
                  zatrzymanie się to już jest coś.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
