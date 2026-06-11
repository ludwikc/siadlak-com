import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "@/lib/icons";
import { toast } from "sonner";
import SEO from "@/components/SEO";

import ludwikAvatar from "@/assets/ludwik-avatar.png.asset.json";

const UTM = "?utm_source=instagram&utm_medium=bio&utm_campaign=ig";

const PATHS = [
  {
    keyword: "TRENER",
    emoji: "🎤",
    title: "Szkolisz z AI - albo chcesz zacząć?",
    desc: "Twoja wiedza jest warta więcej, niż za nią dziś dostajesz. Problem nie jest techniczny. Train The Trainer: AI - 8 tygodni pracy 1:1 nad rzemiosłem, sceną i stawkami.",
    cta: "Zobacz program",
    href: `/program/ttt-ai${UTM}`,
  },
  {
    keyword: "SYSTEM",
    emoji: "⚡",
    title: "Sukces na zewnątrz, chaos w środku?",
    desc: "Testowałeś narzędzia, kursy, coaching - i wciąż kręcisz się w kółko. Bo problem leży głębiej. Zacznij od Sesji Discovery: 30 minut, bez zobowiązań.",
    cta: "Zarezerwuj Sesję Discovery",
    href: `/discovery${UTM}`,
  },
];

export default function IGPage() {
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
        title="Ludwik C. Siadlak - zacznij tutaj"
        description="Jedna teza: problem nie jest w narzędziach, jest w systemie operacyjnym Twojej głowy. Dwie ścieżki, żeby coś z tym zrobić."
        url="https://siadlak.com/ig"
      />

      <div className="min-h-screen bg-[hsl(var(--surface-dark-base))] text-[hsl(var(--text-on-dark))]">
        <div className="max-w-md mx-auto px-4 py-10 space-y-8">
          {/* === HEADER === */}
          <div className="text-center space-y-3">
            <img
              src={ludwikAvatar.url}
              alt="Ludwik C. Siadlak"
              className="w-24 h-24 mx-auto rounded-full object-cover border-2 border-[hsl(var(--depth-purple)/0.5)]"
            />
            <h1 className="text-xl font-heading font-bold">
              Cześć. Skoro tu jesteś - pewnie przez rolkę.
            </h1>
            <p className="text-sm text-[hsl(var(--text-dim))] leading-relaxed">
              Tu nie znajdziesz 10 trików dziennie. Znajdziesz jedną tezę:
              problem nie jest w narzędziach -{" "}
              <span className="text-[hsl(var(--text-on-dark))] font-medium">
                jest w systemie operacyjnym Twojej głowy.
              </span>{" "}
              I dwie ścieżki, żeby coś z tym zrobić.
            </p>
          </div>

          {/* === DWIE ŚCIEŻKI === */}
          <div className="space-y-3">
            {PATHS.map((path) => (
              <a
                key={path.keyword}
                href={path.href}
                className="group block w-full rounded-2xl border border-[hsl(var(--text-dim)/0.15)] bg-[hsl(var(--surface-dark-elevated))] p-6 transition-all duration-200 hover:border-[hsl(var(--electric-blue)/0.4)] hover:bg-[hsl(var(--surface-dark-floating))]"
              >
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[hsl(var(--electric-blue))] mb-2">
                  <span aria-hidden="true">{path.emoji}</span> {path.keyword}
                </p>
                <h2 className="font-heading font-bold text-base mb-2">
                  {path.title}
                </h2>
                <p className="text-sm text-[hsl(var(--text-dim))] leading-relaxed mb-4">
                  {path.desc}
                </p>
                <p className="text-sm font-bold text-[hsl(var(--electric-blue))] group-hover:underline">
                  {path.cta} →
                </p>
              </a>
            ))}
          </div>

          {/* === MAILING === */}
          <div className="rounded-2xl bg-[hsl(var(--surface-dark-elevated))] border border-[hsl(var(--electric-blue)/0.2)] p-6 space-y-4">
            <h2 className="text-lg font-heading font-bold text-center">
              Za wcześnie na rozmowy? W porządku.
            </h2>
            <p className="text-sm text-[hsl(var(--text-dim))] text-center leading-relaxed">
              Najpierw sprawdź, czy mój język do Ciebie trafia. Mailing bez
              harmonogramu - jedna myśl, wtedy, kiedy naprawdę jest coś do
              powiedzenia. Bez porad. Bez listicli. Bez bzdur.
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
              1 500+ osób już czyta. Zero spamu. Odejdziesz jednym kliknięciem.
            </p>
          </div>

          {/* === FOOTER === */}
          <div className="text-center pt-4 pb-8 space-y-3">
            <a
              href={`/start${UTM}`}
              className="text-sm text-[hsl(var(--text-dim))] hover:text-[hsl(var(--electric-blue))] transition-colors"
            >
              Programy, podcasty, społeczność - cała reszta jest tutaj →
            </a>
            <p className="text-sm text-[hsl(var(--text-dim)/0.5)]">- Ludwik</p>
          </div>
        </div>
      </div>
    </>
  );
}
