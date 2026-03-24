import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "@/lib/icons";
import { toast } from "sonner";
import SEO from "@/components/SEO";

const UTM = "?utm_source=instagram&utm_medium=bio&utm_campaign=links";

const LINKS = [
  {
    emoji: "🎙️",
    label: "Najbliższy Webinar",
    desc: "Wkrótce — zapisz się, żeby nie przegapić",
    href: `/webinar${UTM}`,
    internal: true,
  },
  {
    emoji: "📦",
    label: "Programy — Aplikacje Mentalne",
    desc: "Od produktywności po odporność psychiczną. Instalujesz samodzielnie, w swoim tempie.",
    href: `/program${UTM}`,
    internal: true,
  },
  {
    emoji: "🔍",
    label: "Sesja Discovery — pracuj ze mną 1:1",
    desc: "30 minut. Jedno pytanie, które może zmienić wszystko.",
    href: `/discovery${UTM}`,
    internal: true,
  },
  {
    emoji: "💬",
    label: "Lifehackerzy — darmowa społeczność",
    desc: "Discord dla tych, którzy myślą głębiej. Wejście przez dowolny program.",
    href: `https://lifehackerzy.pl${UTM}`,
    internal: false,
  },
  {
    emoji: "⭐",
    label: "Opinie Klientów (120+)",
    desc: "Nie mów mi, że jestem dobry. Posłuchaj, co mówią inni.",
    href: `/testimonials${UTM}`,
    internal: true,
  },
  {
    emoji: "👤",
    label: "O mnie",
    desc: "19 lat, 10 000+ profesjonalistów, Oxford, NATO — i historia, jak to wszystko prawie się skończyło na peronie metra.",
    href: `/about${UTM}`,
    internal: true,
  },
];

export default function LinksPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast.error("Proszę wprowadź adres email");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      window.open(
        "https://app.easycart.pl/checkout/siadlak/newsletter",
        "_blank",
      );
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      <SEO
        title="Ludwik C. Siadlak — Links"
        description="Life Hacker. Katalizuję wojowników. Prowadzę poszukiwaczy. Newsletter, programy, mentoring 1:1."
        path="/links"
      />

      <div className="min-h-screen bg-[hsl(var(--surface-dark-base))] text-[hsl(var(--text-on-dark))]">
        <div className="max-w-md mx-auto px-4 py-10 space-y-8">
          {/* === AVATAR + BIO === */}
          <div className="text-center space-y-3">
            <div className="w-24 h-24 mx-auto rounded-full bg-[hsl(var(--depth-purple)/0.3)] border-2 border-[hsl(var(--depth-purple)/0.5)] flex items-center justify-center">
              <span className="text-3xl font-heading font-bold text-[hsl(var(--electric-blue))]">
                LS
              </span>
            </div>
            <h1 className="text-xl font-heading font-bold">
              Ludwik C. Siadlak
            </h1>
            <p className="text-sm text-[hsl(var(--text-dim))]">
              Life Hacker. Katalizuję wojowników. Prowadzę poszukiwaczy.
            </p>
          </div>

          {/* === NEWSLETTER CTA (PRIMARY) === */}
          <div className="rounded-2xl bg-[hsl(var(--surface-dark-elevated))] border border-[hsl(var(--electric-blue)/0.2)] p-6 space-y-4">
            <h2 className="text-lg font-heading font-bold text-center">
              Jedno miejsce bez algorytmu
            </h2>
            <p className="text-sm text-[hsl(var(--text-dim))] text-center leading-relaxed">
              Na Instagramie algorytm decyduje, czy to zobaczysz. Na moim
              newsletterze — decydujesz Ty.
            </p>
            <p className="text-sm text-[hsl(var(--text-dim))] text-center leading-relaxed">
              Co niedzielę o 19:00 — jedna myśl, która ma szansę zderzyć się
              z Twoją. Bez porad. Bez listicli. Bez bzdur.
            </p>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <Input
                type="email"
                placeholder="Twój email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-[hsl(var(--surface-dark-floating))] border-[hsl(var(--text-dim)/0.2)] text-[hsl(var(--text-on-dark))] placeholder:text-[hsl(var(--text-dim)/0.5)] text-sm"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="bg-[hsl(var(--electric-blue))] hover:bg-[hsl(var(--electric-blue-light))] text-white shrink-0 text-sm px-4"
              >
                {isLoading ? "..." : (
                  <>
                    Zapisuję się
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-[hsl(var(--text-dim)/0.6)] text-center">
              150+ osób już czyta. Zero spam. Możesz odejść jednym kliknięciem.
            </p>
          </div>

          {/* === LINK STACK === */}
          <div className="space-y-3">
            <h2 className="text-sm font-medium text-[hsl(var(--text-dim))] text-center uppercase tracking-widest">
              Co jeszcze mogę Ci pokazać?
            </h2>

            {LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.internal ? undefined : "_blank"}
                rel={link.internal ? undefined : "noopener noreferrer"}
                className="group block w-full rounded-xl border border-[hsl(var(--text-dim)/0.15)] bg-[hsl(var(--surface-dark-elevated))] p-4 transition-all duration-200 hover:border-[hsl(var(--electric-blue)/0.4)] hover:bg-[hsl(var(--surface-dark-floating))]"
              >
                <div className="flex items-start gap-3">
                  <span className="text-lg shrink-0" aria-hidden="true">
                    {link.emoji}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="font-medium text-sm text-[hsl(var(--text-on-dark))]">
                        {link.label}
                      </span>
                      {!link.internal && (
                        <ExternalLink className="h-3 w-3 text-[hsl(var(--text-dim)/0.5)]" />
                      )}
                    </div>
                    <p className="text-xs text-[hsl(var(--text-dim))] mt-0.5 leading-relaxed">
                      {link.desc}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* === FOOTER === */}
          <div className="text-center pt-4 pb-8">
            <p className="text-sm text-[hsl(var(--text-dim)/0.5)]">
              — Ludwik
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
