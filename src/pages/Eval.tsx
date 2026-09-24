import { useState } from "react";
import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import { Input } from "@/design-system/components/input";
import { Label } from "@/design-system/components/label";
import { Textarea } from "@/design-system/components/textarea";
import { Checkbox } from "@/design-system/components/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design-system/components/select";
import { CTAButton } from "@/design-system/components/cta-button";
import { cn } from "@/lib/utils";
import { track } from "@/lib/analytics";
import { TRAININGS } from "@/config/evaluations";

const schema = z.object({
  training: z.string().min(1, "Pick your training from the list."),
  enjoyed: z.string().trim().min(1, "Even one sentence helps.").max(4000),
  apply: z.string().trim().min(1, "Even one sentence helps.").max(4000),
  nps: z
    .number({ required_error: "Pick a number.", invalid_type_error: "Pick a number." })
    .int()
    .min(0)
    .max(10),
  testimonial: z.string().trim().min(1, "Even one sentence helps.").max(4000),
  improve: z.string().trim().max(4000).optional(),
  name: z.string().trim().min(2, "We'd love to know who this is from.").max(120),
  email: z.string().trim().email("This address looks incomplete — check for a typo."),
  role: z.string().trim().max(120).optional(),
  company: z.string().trim().max(120).optional(),
  consentQuote: z.boolean(),
  consentContact: z.boolean(),
  website: z.string().max(0).optional(),
});

type FormValues = z.infer<typeof schema>;

const errorClass = "mt-2 text-sm text-color-error-strong";

type QuestionProps = {
  number: string;
  label: string;
  htmlFor?: string;
  optional?: boolean;
  error?: string;
  children: ReactNode;
};

const Question = ({ number, label, htmlFor, optional, error, children }: QuestionProps) => (
  <div>
    <div className="flex items-baseline gap-3">
      <span className="text-sm font-bold text-electric" aria-hidden="true">
        {number}
      </span>
      <Label htmlFor={htmlFor} className="text-base md:text-lg font-bold leading-snug">
        {label}
        {optional && (
          <span className="ml-2 text-sm font-normal text-on-light-dim">(optional)</span>
        )}
      </Label>
    </div>
    <div className="mt-3 pl-7">{children}</div>
    {error && (
      <p className={cn(errorClass, "pl-7")} role="alert">
        {error}
      </p>
    )}
  </div>
);

export default function Eval() {
  const [done, setDone] = useState(false);
  const [quoteAllowed, setQuoteAllowed] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    control,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      training: TRAININGS.length === 1 ? TRAININGS[0].id : "",
      consentQuote: false,
      consentContact: false,
    },
  });

  const nps = watch("nps");

  const onSubmit = async (values: FormValues) => {
    if (values.website) return; // honeypot tripped
    setSubmitError(null);
    const trainingLabel =
      TRAININGS.find((t) => t.id === values.training)?.label ?? values.training;
    try {
      const response = await fetch("/api/eval", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, trainingLabel }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      track("eval_submitted", {
        page_path: window.location.pathname,
        training: values.training,
        nps: values.nps,
      });
      setQuoteAllowed(values.consentQuote);
      setDone(true);
      window.scrollTo({ top: 0 });
      import("canvas-confetti").then(({ default: confetti }) =>
        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.4 },
          colors: ["#007AFF", "#6D28D9", "#F9FAFB"],
        }),
      );
    } catch {
      track("eval_submit_error", { page_path: window.location.pathname });
      setSubmitError(
        "Your feedback didn't go through — nothing was lost, it's all still here. Please try again, and if it keeps failing, just tell your trainer.",
      );
    }
  };

  return (
    <Layout hideHeader hideFooter>
      <SEO
        title="Training Feedback"
        description="Share your feedback after the training."
        url="/eval"
        noindex
      />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-6">
          <Link
            to="/"
            className="text-sm font-bold uppercase tracking-widest text-on-light-dim hover:text-electric transition-colors duration-200"
          >
            siadlak.com
          </Link>

          {done ? (
            <div className="mt-16 md:mt-24" aria-live="polite">
              <h1 className="text-3xl md:text-5xl font-bold">Thank you — truly.</h1>
              <p className="mt-6 text-lg leading-relaxed text-on-light-dim">
                Your feedback just landed on my desk, and it will shape the next
                training more than you'd think. Thank you for taking the time to
                write it.
              </p>
              {quoteAllowed && (
                <p className="mt-4 text-lg leading-relaxed text-on-light-dim">
                  And since you're happy to be quoted — don't be surprised if you
                  spot your own words on this site one day.
                </p>
              )}
              <p className="mt-4 text-lg leading-relaxed text-on-light-dim">
                Enjoy the rest of your day — and go put it all to work.
              </p>
              <div className="mt-10">
                <CTAButton to="/" variant="tertiary">
                  Explore siadlak.com
                </CTAButton>
              </div>
            </div>
          ) : (
            <>
              <div className="mt-10 md:mt-14">
                <p className="text-sm font-bold uppercase tracking-widest text-electric">
                  Training feedback
                </p>
                <h1 className="mt-3 text-3xl md:text-5xl font-bold">How was it?</h1>
                <p className="mt-5 text-lg leading-relaxed text-on-light-dim">
                  Thank you for training with me today. This takes about three
                  minutes, and honestly — reading your answers is the best part of
                  my job. Your words shape what the next edition looks like.
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-12" noValidate>
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "-9999px",
                    width: 1,
                    height: 1,
                    overflow: "hidden",
                  }}
                >
                  <label>
                    Website
                    <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
                  </label>
                </div>

                <Question
                  number="01"
                  label="Which training did you attend?"
                  error={errors.training?.message}
                >
                  <Controller
                    control={control}
                    name="training"
                    render={({ field }) => (
                      <Select value={field.value} onValueChange={field.onChange}>
                        <SelectTrigger className="text-base" aria-label="Training">
                          <SelectValue placeholder="Pick your training" />
                        </SelectTrigger>
                        <SelectContent>
                          {TRAININGS.map((t) => (
                            <SelectItem key={t.id} value={t.id} className="text-base">
                              {t.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                </Question>

                <Question
                  number="02"
                  label="What did you enjoy most about the training?"
                  htmlFor="eval-enjoyed"
                  error={errors.enjoyed?.message}
                >
                  <Textarea
                    id="eval-enjoyed"
                    rows={4}
                    className="text-base"
                    placeholder="A topic, a moment, an aha — whatever comes to mind first."
                    {...register("enjoyed")}
                  />
                </Question>

                <Question
                  number="03"
                  label="What's the first thing you'll do with what you've learned?"
                  htmlFor="eval-apply"
                  error={errors.apply?.message}
                >
                  <Textarea
                    id="eval-apply"
                    rows={4}
                    className="text-base"
                    placeholder="Monday morning, back at your desk — where does this land first?"
                    {...register("apply")}
                  />
                </Question>

                <Question
                  number="04"
                  label="How likely are you to recommend this training to a friend or colleague?"
                  error={errors.nps?.message}
                >
                  <div
                    className="grid grid-cols-11 gap-1 sm:gap-2"
                    role="radiogroup"
                    aria-label="0 to 10"
                  >
                    {Array.from({ length: 11 }, (_, i) => (
                      <button
                        key={i}
                        type="button"
                        role="radio"
                        aria-checked={nps === i}
                        onClick={() => setValue("nps", i, { shouldValidate: true })}
                        className={cn(
                          "h-10 rounded-[var(--border-radius-sm)] border text-sm font-bold",
                          "transition-all duration-200 ease-out hover:-translate-y-px hover:shadow-sm",
                          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2",
                          nps === i
                            ? "[background:var(--gradient-premium)] text-white border-transparent shadow-sm"
                            : "border-border bg-transparent text-on-light",
                        )}
                      >
                        {i}
                      </button>
                    ))}
                  </div>
                  <div className="mt-2 flex justify-between text-xs text-on-light-dim">
                    <span>Not likely</span>
                    <span>Absolutely</span>
                  </div>
                </Question>

                <Question
                  number="05"
                  label="What would you tell a colleague who's wondering whether this training is worth their time?"
                  htmlFor="eval-testimonial"
                  error={errors.testimonial?.message}
                >
                  <Textarea
                    id="eval-testimonial"
                    rows={4}
                    className="text-base"
                    placeholder="They're on the fence. What would you say?"
                    {...register("testimonial")}
                  />
                </Question>

                <Question
                  number="06"
                  label="Anything we should make even better next time?"
                  htmlFor="eval-improve"
                  optional
                  error={errors.improve?.message}
                >
                  <Textarea
                    id="eval-improve"
                    rows={3}
                    className="text-base"
                    placeholder="Pace, topics, coffee — everything counts."
                    {...register("improve")}
                  />
                </Question>

                <div className="border-t border-border pt-10">
                  <h2 className="text-xl font-bold">Almost done — who's this from?</h2>
                  <p className="mt-2 text-sm text-on-light-dim">
                    Your role and company help us say who the good words came from.
                  </p>
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label htmlFor="eval-name">Name</Label>
                      <Input
                        id="eval-name"
                        type="text"
                        autoComplete="name"
                        enterKeyHint="next"
                        className="text-base"
                        aria-invalid={errors.name ? "true" : undefined}
                        {...register("name")}
                      />
                      {errors.name && (
                        <p className={errorClass} role="alert">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="eval-email">Email</Label>
                      <Input
                        id="eval-email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        autoCapitalize="none"
                        spellCheck={false}
                        enterKeyHint="next"
                        className="text-base"
                        aria-invalid={errors.email ? "true" : undefined}
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className={errorClass} role="alert">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="eval-role">
                        Job title{" "}
                        <span className="font-normal text-on-light-dim">(optional)</span>
                      </Label>
                      <Input
                        id="eval-role"
                        type="text"
                        autoComplete="organization-title"
                        enterKeyHint="next"
                        className="text-base"
                        {...register("role")}
                      />
                    </div>
                    <div>
                      <Label htmlFor="eval-company">
                        Company{" "}
                        <span className="font-normal text-on-light-dim">(optional)</span>
                      </Label>
                      <Input
                        id="eval-company"
                        type="text"
                        autoComplete="organization"
                        enterKeyHint="done"
                        className="text-base"
                        {...register("company")}
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <Controller
                    control={control}
                    name="consentQuote"
                    render={({ field }) => (
                      <label className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          className="mt-0.5"
                        />
                        <span className="text-sm leading-relaxed text-on-light-dim">
                          You're welcome to quote my answers publicly — on siadlak.com
                          or in program materials — signed with my name, role and
                          company.
                        </span>
                      </label>
                    )}
                  />
                  <Controller
                    control={control}
                    name="consentContact"
                    render={({ field }) => (
                      <label className="flex cursor-pointer items-start gap-3">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={(checked) => field.onChange(checked === true)}
                          className="mt-0.5"
                        />
                        <span className="text-sm leading-relaxed text-on-light-dim">
                          Keep me posted about upcoming trainings, new programs and
                          occasional practical tips by email. Unsubscribe anytime.
                        </span>
                      </label>
                    )}
                  />
                  <p className="text-xs leading-relaxed text-on-light-dim">
                    Your responses are stored securely and your contact details are
                    never shared with anyone.{" "}
                    <a
                      href="https://docs.siadlak.com/legal/privacy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-electric"
                    >
                      Privacy Policy
                    </a>
                  </p>
                </div>

                <div>
                  <CTAButton
                    type="submit"
                    variant="primary"
                    size="lg"
                    loading={isSubmitting}
                    className="w-full sm:w-auto"
                    data-cta="eval:submit"
                  >
                    Send feedback
                  </CTAButton>
                  {submitError && (
                    <p className={errorClass} role="alert">
                      {submitError}
                    </p>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>
    </Layout>
  );
}
