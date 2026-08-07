import { useState, useEffect } from "react";
import { ArrowRight, Check, Timer } from "@/lib/icons";
import { OTOCountdown } from "./OTOCountdown";
import { OTOStickyBar } from "./OTOStickyBar";
import OptimizedImage from "@/design-system/components/OptimizedImage";
import { CTAButton } from "@/design-system/components/cta-button";
import { track } from "@/lib/analytics";
import { withAttribution } from "@/lib/attribution";

interface OTOProductDisplayProps {
  onExpired: () => void;
}

const OTO_CHECKOUT_URL =
  "https://cart.easy.tools/checkout/siadlak/7technik?plan=price_1QY7IaLDgmse4Mm3CGLkB7VI&lang=pl";

const CHECKOUT_HREF = withAttribution(OTO_CHECKOUT_URL);

const handleOtoPurchaseClick = () => {
  track("oto_purchase_click", {
    product: "7-technik",
    value: 77,
    currency: "PLN",
  });
};

const TECHNIQUES = [
  {
    number: "1",
    title: "Blokowanie zadań",
    description:
      "grupujesz podobne rzeczy w jednym bloku; jedziesz A→B bez postojów.",
  },
  {
    number: "2",
    title: "Praca głęboka",
    description: "25 minut w trybie „samolot”: powiadomienia OFF, Ty ON.",
  },
  {
    number: "3",
    title: "Zatrudnij pierwszego robota",
    description:
      "Zapier/IFTTT/Make: zaloguj → połącz → start; gwiazdka w Gmailu = zadanie w Todoist.",
  },
  {
    number: "4",
    title: "Hackowanie własnego maila",
    description:
      "plusy i kropki (ludwik+fb@… / lu.dw.ik@…) = porządek, filtry i automaty.",
  },
  {
    number: "5",
    title: "Werwa do pracy",
    description:
      "zrób „próżnię”: usuń Gmail z telefonu na weekend, zainstaluj w poniedziałek.",
  },
  {
    number: "6",
    title: "Estymowanie czasochłonności",
    description:
      "doliczasz połowę czasu i pracujesz spokojnie, bez czerwonego pola.",
  },
  {
    number: "7",
    title: "Otaczanie się skutecznymi Ludźmi",
    description:
      "silent co-working i społeczność siadlak.wip (PL kanał) trzymają Cię w działaniu.",
  },
];

const INCLUDED = [
  "7 sprawdzonych technik w prostych punktach — zero „teorii dla teorii”.",
  "Po każdej technice jedno zadanie, które wdrażasz od razu.",
  "Zero aplikacji — wystarczy zwykły timer.",
  "Dostęp natychmiast po zakupie i na zawsze.",
];

const FAQ = [
  {
    q: "Ile to zajmie?",
    a: "77 minut. Możesz obejrzeć wszystko za jednym razem albo technikę dziennie przez tydzień.",
  },
  {
    q: "Czy potrzebuję jakichś narzędzi?",
    a: "Nie. Wystarczy zwykły timer i Twoja skrzynka mailowa. Nic nie musisz kupować ani instalować.",
  },
  {
    q: "Kiedy dostanę dostęp?",
    a: "Natychmiast po płatności — link trafia na Twojego maila w kilkanaście sekund. Dostęp jest bezterminowy.",
  },
  {
    q: "Co, jeśli nie zdążę w te 7 minut?",
    a: "Kurs zostaje w katalogu w cenie 497 PLN. Ta cena jest tylko tutaj i tylko teraz.",
  },
];

function TrustRow({ dark = false }: { dark?: boolean }) {
  const items = [
    "Bezpieczne płatności",
    "Dostęp natychmiast",
    "Dostęp na zawsze",
  ];
  return (
    <ul
      className={`flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs uppercase tracking-widest ${
        dark ? "text-dim" : "text-on-light-dim"
      }`}
    >
      {items.map((item) => (
        <li key={item} className="flex items-center gap-1.5">
          <Check className="h-3.5 w-3.5 text-electric" aria-hidden="true" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PaymentIcons() {
  return (
    <OptimizedImage
      src="/lovable-uploads/payment-processors.png"
      alt="Dostępne metody płatności: Apple Pay, Google Pay, BLIK, Przelewy24, Visa, Mastercard"
      className="mx-auto h-7 w-auto object-contain opacity-80"
      width={300}
      height={60}
      sizes="300px"
    />
  );
}

function PriceBlock({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-end justify-center gap-4">
      <div className="text-center">
        <p
          className={`mb-1 text-[11px] uppercase tracking-widest ${dark ? "text-on-dark-tertiary" : "text-on-light-dim"}`}
        >
          Cena katalogowa
        </p>
        <p
          className={`text-2xl font-bold line-through ${dark ? "text-on-dark-tertiary" : "text-on-light-dim"}`}
        >
          497 PLN
        </p>
      </div>
      <div className="text-center">
        <p className="mb-1 text-[11px] uppercase tracking-widest text-electric">
          Teraz, dla Gościa webinaru
        </p>
        <p
          className={`text-5xl font-bold leading-none ${dark ? "text-locked-white" : "text-on-light"}`}
        >
          77 PLN
        </p>
      </div>
    </div>
  );
}

export function OTOProductDisplay({ onExpired }: OTOProductDisplayProps) {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const monthNames = [
      "stycznia",
      "lutego",
      "marca",
      "kwietnia",
      "maja",
      "czerwca",
      "lipca",
      "sierpnia",
      "września",
      "października",
      "listopada",
      "grudnia",
    ];

    const day = now.getDate();
    const month = monthNames[now.getMonth()];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");

    setCurrentDateTime(`${day} ${month} (dzisiaj), ${hours}:${minutes}`);
  }, []);

  return (
    <div className="min-h-screen pb-24 md:pb-0">
      <OTOStickyBar
        href={CHECKOUT_HREF}
        onClick={handleOtoPurchaseClick}
        onExpired={onExpired}
      />

      {/* 1. OFFER HERO — decision above the fold */}
      <section className="relative bg-void-glow py-12 md:py-20">
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5">
                <Timer className="h-4 w-4 text-electric" aria-hidden="true" />
                <span className="text-[11px] font-bold uppercase tracking-widest text-locked-white">
                  Oferta jednorazowa · 7 minut
                </span>
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight text-locked-white md:text-5xl">
                7 najskuteczniejszych technik produktywności
              </h1>
              <p className="mb-6 text-lg text-dim md:text-xl">
                77 minut, które ustawią Ci — każdy — dzień. Bez aplikacji, bez
                systemów, bez teorii. Siedem rzeczy, które wdrażasz jeszcze
                dzisiaj.
              </p>

              <div className="mb-6 rounded-[var(--border-radius-sm)] border border-white/15 bg-white/5 p-5">
                <PriceBlock dark />
                <div className="mt-5">
                  <OTOCountdown onExpired={onExpired} />
                </div>
              </div>

              <CTAButton
                href={CHECKOUT_HREF}
                onClick={handleOtoPurchaseClick}
                size="lg"
                className="w-full sm:w-auto"
                data-cta="oto:hero"
                aria-label="Kup 7 Technik Produktywności za 77 PLN"
              >
                Tak, chcę to za 77 PLN
              </CTAButton>

              <div className="mt-5 space-y-3">
                <TrustRow dark />
                <PaymentIcons />
              </div>
            </div>

            <div className="relative">
              <OptimizedImage
                src="/lovable-uploads/e615021d-1367-4c9b-a003-5ceae847d2e8.png"
                alt="7 Technik Produktywności — kurs wideo"
                className="mx-auto h-auto w-full max-w-xl rounded-[var(--border-radius-sm)]"
                width={672}
                height={377}
                sizes="(max-width: 1024px) 100vw, 560px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. WHY YOU SEE THIS — the email context */}
      <section className="bg-diamond py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <div className="overflow-hidden rounded-[var(--border-radius-sm)] border border-border bg-white">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-3">
                <OptimizedImage
                  src="/lovable-uploads/3e37de9f-9414-4fdb-b6b8-927ece65c2ca.png"
                  alt="Ludwik C. Siadlak"
                  className="h-10 w-10 rounded-full object-cover"
                  width={40}
                  height={40}
                  sizes="40px"
                />
                <div>
                  <div className="font-medium text-on-light">
                    Ludwik C. Siadlak
                  </div>
                  <div className="text-sm text-on-light-dim">
                    ludwik@siadlak.email
                  </div>
                </div>
              </div>
              <div className="hidden text-sm text-on-light-dim sm:block">
                {currentDateTime}
              </div>
            </div>

            <div className="space-y-4 px-5 py-6 text-base leading-relaxed text-on-light-dim">
              <p>Właśnie zapisał(a)eś się na mój webinar.</p>
              <p>
                A to oznacza, że jesteś <strong>moim Gościem</strong> — i że
                traktuję Cię z szacunkiem należnym Gościom. Zacznę od
                podziękowania za to, że jesteś.
              </p>
              <p>
                Mam już pomysł, jak zrobić to najlepiej:{" "}
                <strong className="text-on-light">
                  oddaję Ci mój kurs za 77 PLN zamiast 497 PLN.
                </strong>{" "}
                Bez haczyków, bez subskrypcji. Jednorazowo, tylko na tej
                stronie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU GET */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-on-light md:text-4xl">
            Co dostajesz w 77 minut
          </h2>
          <ul className="mb-12 grid gap-4 sm:grid-cols-2">
            {INCLUDED.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-[var(--border-radius-sm)] border border-border bg-white p-5"
              >
                <Check
                  className="mt-0.5 h-5 w-5 flex-shrink-0 text-electric"
                  aria-hidden="true"
                />
                <span className="leading-relaxed text-on-light-dim">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mb-6 text-center text-2xl font-bold text-on-light">
            Siedem technik — po jednym zdaniu
          </h3>
          <ol className="grid gap-4">
            {TECHNIQUES.map((t) => (
              <li
                key={t.number}
                className="flex gap-4 rounded-[var(--border-radius-sm)] border border-border bg-white p-5 transition-colors duration-200 hover:border-electric/40"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-brand-gradient text-base font-bold text-white">
                  {t.number}
                </span>
                <p className="leading-relaxed text-on-light-dim">
                  <strong className="text-on-light">{t.title}</strong> —{" "}
                  {t.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 4. PRODUCT PREVIEW */}
      <section className="bg-diamond py-16 md:py-20">
        <div className="container mx-auto max-w-6xl px-4">
          <OptimizedImage
            src="/lovable-uploads/d08df776-7e4c-49e0-aa5a-b43910072e53.png"
            alt="7 Technik Produktywności — podgląd kursu na różnych urządzeniach"
            className="mx-auto h-auto w-full max-w-4xl object-contain"
            width={1024}
            height={728}
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>
      </section>

      {/* 5. WHY 7 MINUTES */}
      <section className="bg-void py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-6 text-center text-3xl font-bold text-locked-white md:text-4xl">
            Dlaczego tylko 7 minut
          </h2>
          <div className="space-y-5 text-lg leading-relaxed text-dim">
            <p>
              Cenię ludzi decyzyjnych. Powiem wprost: to jest bardzo dobra
              oferta i nie potrzebujesz więcej informacji. Dlatego system
              wyłączy ją automatycznie 7 minut po otwarciu tej strony.
            </p>
            <p>
              Albo widzisz w tym wartość, albo nie. Jeśli 77 PLN to dla Ciebie
              za dużo — w porządku, spotkamy się na webinarze i i tak pokażę
              Ci, jak pracuję.
            </p>
            <p className="text-locked-white">
              Jeśli jednak — tak jak ja — widzisz sens w tym, żeby mieć ten
              fundament już teraz, kliknij poniżej.
            </p>
          </div>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-background py-16 md:py-20">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-on-light md:text-4xl">
            Zanim klikniesz
          </h2>
          <dl className="grid gap-4">
            {FAQ.map((item) => (
              <div
                key={item.q}
                className="rounded-[var(--border-radius-sm)] border border-border bg-white p-5"
              >
                <dt className="mb-2 font-bold text-on-light">{item.q}</dt>
                <dd className="leading-relaxed text-on-light-dim">{item.a}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 7. FINAL CTA */}
      <section className="bg-void-glow py-16 md:py-24">
        <div className="container mx-auto max-w-2xl px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold text-locked-white md:text-4xl">
            Ostatni moment na tę cenę
          </h2>

          <div className="mb-8 rounded-[var(--border-radius-sm)] border border-white/15 bg-white/5 p-6">
            <PriceBlock dark />
            <div className="mt-6">
              <OTOCountdown onExpired={onExpired} />
            </div>
          </div>

          <CTAButton
            href={CHECKOUT_HREF}
            onClick={handleOtoPurchaseClick}
            size="lg"
            className="w-full"
            data-cta="oto:final"
            aria-label="Kup 7 Technik Produktywności za 77 PLN"
          >
            Tak, chcę to za 77 PLN
          </CTAButton>

          <div className="mt-6 space-y-3">
            <TrustRow dark />
            <PaymentIcons />
          </div>

          <p className="mx-auto mt-10 max-w-xl text-sm italic leading-relaxed text-on-dark-tertiary">
            <strong className="text-dim">PS.</strong> Nie będzie maili
            przypominających. Nie będzie „ostatniej szansy”. To jedyna okazja,
            żeby dostać ten kurs w tej — przyznaję, nieprzyzwoicie niskiej —
            cenie. Decyzja należy do Ciebie.
          </p>
        </div>
      </section>
    </div>
  );
}
