import { useState, useEffect, useCallback } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/design-system/components/button";
import { Progress } from "@/design-system/components/progress";
import { ArrowRight } from "@/lib/icons";
import {
  RESET_QUESTIONS,
  ANSWER_OPTIONS,
  BLOCK_INTROS,
  getResultTier,
} from "@/data/reset-quiz-data";
import MailerLiteEmbed from "@/components/MailerLiteEmbed";

type Phase = "intro" | "quiz" | "block-intro" | "analyzing" | "lead-capture" | "result";

const STORAGE_KEY = "reset-quiz-answers";

export default function Reset() {
  const [phase, setPhase] = useState<Phase>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.length >= RESET_QUESTIONS.length) {
          localStorage.removeItem(STORAGE_KEY);
        } else if (parsed.length > 0) {
          return "quiz";
        }
      }
    } catch { /* ignore */ }
    return "intro";
  });
  const [answers, setAnswers] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return [];
      const parsed = JSON.parse(saved);
      return parsed.length < RESET_QUESTIONS.length ? parsed : [];
    } catch {
      return [];
    }
  });
  const [currentQ, setCurrentQ] = useState(() => answers.length);
  const [visible, setVisible] = useState(true);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  

  const totalScore = answers.reduce((a, b) => a + b, 0);

  const handleAnswer = useCallback(
    (value: number) => {
      setVisible(false);
      setTimeout(() => {
        const next = [...answers, value];
        setAnswers(next);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(next));

        const nextQ = currentQ + 1;
        if (nextQ >= RESET_QUESTIONS.length) {
          setPhase("analyzing");
        } else if (BLOCK_INTROS[nextQ]) {
          setCurrentQ(nextQ);
          setPhase("block-intro");
        } else {
          setCurrentQ(nextQ);
        }
        setVisible(true);
      }, 300);
    },
    [answers, currentQ],
  );

  useEffect(() => {
    if (phase !== "analyzing") return;
    setAnalyzeProgress(0);
    const start = Date.now();
    const duration = 1200;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min((elapsed / duration) * 100, 100);
      setAnalyzeProgress(pct);
      if (pct < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setPhase("lead-capture"), 400);
      }
    };
    requestAnimationFrame(tick);
  }, [phase]);

  useEffect(() => {
    if (phase !== "lead-capture") return;

    const observer = new MutationObserver(() => {
      const successEl = document.querySelector(".ml-form-successBody");
      if (successEl && getComputedStyle(successEl).display !== "none") {
        observer.disconnect();
        localStorage.removeItem(STORAGE_KEY);
        setTimeout(() => setPhase("result"), 1500);
      }
    });

    const container = document.querySelector(".ml-embedded");
    if (container) {
      observer.observe(container, { attributes: true, childList: true, subtree: true });
    }

    return () => observer.disconnect();
  }, [phase]);

  const tier = getResultTier(totalScore);

  return (
    <>
      <SEO
        title="Reset — Test Otwartych Pętli"
        description="Sprawdź, czy Twoje otwarte pętle sabotują Twoją efektywność."
        noindex
      />

      <div className="min-h-screen bg-void-glow flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-2xl">
          {/* INTRO */}
          {phase === "intro" && (
            <div className="animate-fade-in text-center">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-4">
                AUDYT SYSTEMU
              </p>
              <h1 className="font-heading text-3xl md:text-4xl font-bold text-diamond mb-4 tracking-[-0.02em]">
                Test Otwartych Pętli
              </h1>
              <p className="text-dim text-lg mb-2 max-w-md mx-auto leading-relaxed">
                Ile energii zżera Ci to, co krąży w głowie i nie jest domknięte?
              </p>
              <p className="text-dim text-sm mb-10">
                10 pytań · 2 minuty · bez dobrych i złych odpowiedzi
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto min-h-[56px] text-lg"
                onClick={() => setPhase("quiz")}
              >
                Zaczynam
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
              <p className="text-xs text-dim mt-6">
                Odpowiadaj pierwszą myślą — ona jest najbliżej prawdy.
              </p>
            </div>
          )}

          {/* QUIZ */}
          {phase === "quiz" && (
            <div className="animate-fade-in">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-electric mb-2 text-center">
                Pytanie {currentQ + 1}/{RESET_QUESTIONS.length}
              </p>
              <Progress
                value={((currentQ + 1) / RESET_QUESTIONS.length) * 100}
                className="h-1 mb-10 bg-surface"
              />

              <div
                className={`transition-all duration-300 ease-in-out ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
              >
                <h2 className="font-heading text-2xl md:text-3xl font-bold leading-[1.1] tracking-[-0.02em] text-diamond mb-8 text-center">
                  {RESET_QUESTIONS[currentQ]}
                </h2>

                <div className="flex flex-col gap-3">
                  {ANSWER_OPTIONS.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleAnswer(opt.value)}
                      className="w-full rounded-md border border-white/15 bg-surface px-6 py-5 text-left text-lg text-diamond transition-all duration-200 hover:border-electric hover:bg-[hsl(220_60%_15%)] active:scale-[0.99] active:border-electric focus-visible:ring-2 focus-visible:ring-electric min-h-[56px]"
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* BLOCK INTRO */}
          {phase === "block-intro" && BLOCK_INTROS[currentQ] && (
            <div className="animate-fade-in text-center">
              <span className="text-5xl mb-6 block">{BLOCK_INTROS[currentQ].emoji}</span>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-diamond mb-4 tracking-[-0.02em]">
                {BLOCK_INTROS[currentQ].title}
              </h2>
              <p className="text-dim text-lg mb-10 max-w-md mx-auto leading-relaxed">
                {BLOCK_INTROS[currentQ].description}
              </p>
              <Button
                size="lg"
                className="w-full sm:w-auto min-h-[56px] text-lg"
                onClick={() => setPhase("quiz")}
              >
                Dalej
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Button>
            </div>
          )}

          {phase === "analyzing" && (
            <div className="animate-fade-in text-center">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-diamond mb-6">
                Liczę Twój wynik…
              </h2>
              <Progress
                value={analyzeProgress}
                className="h-2 bg-surface"
              />
            </div>
          )}

          {/* LEAD CAPTURE */}
          {phase === "lead-capture" && (
            <div className="animate-fade-in">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-diamond mb-2 text-center">
                Twój wynik jest gotowy
              </h2>
              <p className="text-dim text-center mb-8 max-w-md mx-auto leading-relaxed">
                Zobaczysz go tak czy inaczej — przycisk jest niżej. Ale jeśli
                zostawisz maila, dostaniesz ode mnie też to, co z tym wynikiem
                zrobić. I od czasu do czasu jedną myśl, która domyka pętle
                zamiast otwierać nowe.
              </p>

              <div className="max-w-sm mx-auto">
                <MailerLiteEmbed
                  dataForm="9Ffuno"
                  hiddenFields={{
                    reset_score: totalScore,
                    reset_tier: tier.heading,
                  }}
                />
              </div>

              <button
                onClick={() => { localStorage.removeItem(STORAGE_KEY); setPhase("result"); }}
                className="block mx-auto mt-6 text-sm text-dim underline hover:text-diamond transition-colors"
              >
                Pokaż mi tylko wynik
              </button>
            </div>
          )}

          {/* RESULT */}
          {phase === "result" && (
            <div className="animate-fade-in text-center">
              <span className="text-5xl mb-4 block" role="img" aria-label="wynik">
                {tier.emoji}
              </span>
              <h2
                className={`font-heading text-2xl md:text-3xl font-bold mb-4 ${tier.colorClass}`}
              >
                {tier.heading}
              </h2>
              <p className="text-dim text-lg mb-2">
                Twój wynik: <span className="text-diamond font-bold">{totalScore}/20</span>
              </p>
              <p className="text-dim text-lg mb-10 max-w-md mx-auto">
                {tier.description}
              </p>

              {totalScore >= 14 ? (
                <div className="space-y-4">
                  <p className="text-dim text-sm max-w-md mx-auto">
                    Przy tym poziomie przeciążenia kolejny kurs to za mało -
                    problem leży głębiej niż technika. Porozmawiajmy.
                  </p>
                  <Button size="lg" asChild>
                    <a href="/discovery">
                      Zarezerwuj Sesję Discovery
                      <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                    </a>
                  </Button>
                  <a
                    href="/program/produktywnosc"
                    className="block text-sm text-dim underline hover:text-diamond transition-colors"
                  >
                    Wolę zacząć samodzielnie — program Produktywność
                  </a>
                </div>
              ) : (
                <Button size="lg" asChild>
                  <a href="/program/produktywnosc">
                    Zrób pełny reset systemu
                    <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                  </a>
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
