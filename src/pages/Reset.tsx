import { useState, useEffect, useCallback, useRef } from "react";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { ArrowRight } from "@/lib/icons";
import {
  RESET_QUESTIONS,
  ANSWER_OPTIONS,
  BLOCK_INTROS,
  getResultTier,
} from "@/data/reset-quiz-data";

type Phase = "quiz" | "block-intro" | "analyzing" | "lead-capture" | "result";

const STORAGE_KEY = "reset-quiz-answers";

export default function Reset() {
  const [phase, setPhase] = useState<Phase>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && JSON.parse(saved).length >= RESET_QUESTIONS.length) {
        localStorage.removeItem(STORAGE_KEY);
      }
    } catch { /* ignore */ }
    return "quiz";
  });
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<number[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [visible, setVisible] = useState(true);
  const [analyzeProgress, setAnalyzeProgress] = useState(0);
  const embedRef = useRef<HTMLDivElement>(null);

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
    const duration = 3000;
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
    if (embedRef.current && typeof window.ml === "function") {
      window.ml("embed", embedRef.current);
    }
    const handler = () => { localStorage.removeItem(STORAGE_KEY); setPhase("result"); };
    document.addEventListener("mailerlite:form:success", handler);
    return () => document.removeEventListener("mailerlite:form:success", handler);
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
                      className="w-full rounded-md border border-[var(--border-primary)] bg-surface px-6 py-5 text-left text-lg text-diamond transition-colors duration-200 hover:border-electric hover:bg-[hsl(220_60%_15%)] focus-visible:ring-2 focus-visible:ring-electric min-h-[56px]"
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
                Analizuję Twoje odpowiedzi…
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
              <p className="text-dim text-center mb-8">
                Podaj dane, żeby zobaczyć szczegółową analizę.
              </p>

              <div className="max-w-sm mx-auto">
                <div ref={embedRef} className="ml-embedded" data-form="9Ffuno" />
              </div>

              <button
                onClick={() => { localStorage.removeItem(STORAGE_KEY); setPhase("result"); }}
                className="block mx-auto mt-6 text-sm text-dim underline hover:text-diamond transition-colors"
              >
                Pomiń i zobacz wynik
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

              <Button size="lg" asChild>
                <a href="/program/produktywnosc">
                  Zrób pełny reset systemu
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
