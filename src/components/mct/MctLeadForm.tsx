import { useEffect, useMemo, useRef, useState } from "react";
import type { KeyboardEvent, ReactNode } from "react";
import { Controller, useForm } from "react-hook-form";
import type { FieldErrors, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { fill } from "@/config/mct/copy";
import type { DeliveryOption, FormMode, StackOption } from "@/config/mct/copy";
import { CALENDAR_URL, EMAIL, PORTAL_PRIVACY_URL } from "@/config/mct/contact";
import { courseList, courses } from "@/config/mct/courses";
import { leadSchema } from "@/config/mct/lead-schema";
import { sessions } from "@/config/mct/schedule";
import { formatSessionRange, getSessionsForCourse, getUpcomingSessions } from "@/config/mct/schedule-utils";
import type { CourseSlug, Locale } from "@/config/mct/types";
import { Checkbox } from "@/design-system/components/checkbox";
import { CTAButton } from "@/design-system/components/cta-button";
import { Input } from "@/design-system/components/input";
import { Label } from "@/design-system/components/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/design-system/components/select";
import { Textarea } from "@/design-system/components/textarea";
import { track } from "@/lib/analytics";
import { getFlatAttribution } from "@/lib/attribution";
import { cn } from "@/lib/utils";
import {
  buildLeadPayload,
  leadRequestBody,
  missingModeFields,
  MODE_TIER,
  nextSessionChoice,
  NOTIFY_SESSION,
  pickSessionChoice,
  PRIVATE_QUOTE_FROM_SEATS,
  TIER_MODE,
} from "./lead-form-payload";
import type { LeadFormValues, LeadPayloadContext, TopicChoice } from "./lead-form-payload";
import { useMct } from "./MctContext";
import SeatQuote from "./SeatQuote";

type MctLeadFormProps = { defaultMode?: FormMode; defaultCourseSlug?: CourseSlug };

type SubmitState = { status: "idle" } | { status: "success"; mode: FormMode } | { status: "error"; reason: string };

const MODES: FormMode[] = ["seat", "briefing", "scope"];
const TOPICS: TopicChoice[] = ["a", "b", "c", "custom"];
const STACK_OPTIONS: StackOption[] = ["copilot", "fabric", "sql", "powerbi", "m365", "other"];
const DELIVERY_OPTIONS: DeliveryOption[] = ["remote", "onsite", "hybrid"];
const LANGUAGES: Locale[] = ["en", "pl"];
const LEADERS_RANGE = { min: 1, max: 10 };

const errorClass = "mt-2 mb-0 text-sm font-medium text-color-error";
const hintClass = "text-sm leading-relaxed text-on-light-dim";
const textLinkClass = "underline underline-offset-4 hover:text-electric";

const validateLead = zodResolver(leadSchema);

const bookableSessions = (slug: CourseSlug | "", now: Date) =>
  slug ? getSessionsForCourse(sessions, slug, now).filter((s) => s.status !== "full") : [];

type FieldProps = { id: string; label: string; error?: string; className?: string; children: ReactNode };

function Field({ id, label, error, className, children }: FieldProps) {
  return (
    <div className={className}>
      <Label htmlFor={id} className="mb-2 block">
        {label}
      </Label>
      {children}
      {error && (
        <p id={`${id}-error`} className={errorClass} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default function MctLeadForm({ defaultMode = "seat", defaultCourseSlug }: MctLeadFormProps) {
  const { locale, t, surface, prefill } = useMct();
  const [now] = useState(() => new Date());
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const successHeadingRef = useRef<HTMLHeadingElement>(null);

  const topicLabels = useMemo<Record<TopicChoice, string>>(
    () => ({
      a: t.briefing.topics.a.title,
      b: t.briefing.topics.b.title,
      c: t.briefing.topics.c.title,
      custom: t.form.options.topicCustom,
    }),
    [t],
  );

  const payloadContext = (): LeadPayloadContext => ({
    locale,
    pagePath: typeof window === "undefined" ? "" : window.location.pathname,
    topicLabels,
  });

  const resolver: Resolver<LeadFormValues> = async (values, context, options) => {
    const { errors } = await validateLead(buildLeadPayload(values, payloadContext()), context, options as never);
    const formErrors: Record<string, unknown> = {};
    for (const [path, error] of Object.entries(errors)) {
      formErrors[path === "sessionId" ? "sessionChoice" : path] = error;
    }
    for (const field of missingModeFields(values)) {
      formErrors[field] ??= { type: "custom", message: "required" };
    }
    return Object.keys(formErrors).length > 0
      ? { values: {}, errors: formErrors as FieldErrors<LeadFormValues> }
      : { values, errors: {} };
  };

  const initialCourse = prefill?.courseSlug ?? defaultCourseSlug ?? "";
  const {
    register,
    control,
    handleSubmit,
    setValue,
    getValues,
    watch,
    clearErrors,
    formState: { errors, isSubmitting },
  } = useForm<LeadFormValues>({
    resolver,
    defaultValues: {
      mode: prefill ? TIER_MODE[prefill.tier] : defaultMode,
      courseSlug: initialCourse,
      sessionChoice: pickSessionChoice(
        bookableSessions(initialCourse, now).map((s) => s.id),
        prefill ?? undefined,
      ),
      seats: 1,
      wantsPrivateQuote: false,
      topic: "",
      windows: "",
      leaders: "",
      stack: [],
      teamSize: "",
      timeline: "",
      delivery: "",
      procurement: "",
      language: locale,
      name: "",
      email: "",
      company: "",
      phone: "",
      message: "",
      consent: false,
      website: "",
    },
  });

  const mode = watch("mode");
  const courseSlug = watch("courseSlug");
  const sessionChoice = watch("sessionChoice");
  const seats = watch("seats");
  const courseSessions = bookableSessions(courseSlug, now);
  const selectedSession = courseSessions.find((s) => s.id === sessionChoice);
  const quoteDays = selectedSession?.days ?? (courseSlug ? courses[courseSlug].days : 1);

  const chooseSession = (choice: string) => {
    setValue("sessionChoice", choice);
    const session = courseSessions.find((s) => s.id === choice);
    if (session) setValue("language", session.language);
  };

  useEffect(() => {
    if (!prefill) return;
    setSubmitState({ status: "idle" });
    clearErrors();
    setValue("mode", TIER_MODE[prefill.tier]);
    const upcoming = getUpcomingSessions(sessions, now);
    const choice = nextSessionChoice(getValues("sessionChoice"), prefill, getValues("courseSlug"), upcoming);
    if (prefill.courseSlug) setValue("courseSlug", prefill.courseSlug);
    if (choice === getValues("sessionChoice")) return;
    setValue("sessionChoice", choice);
    const session = upcoming.find((s) => s.id === choice);
    if (session) setValue("language", session.language);
  }, [prefill, now, setValue, getValues, clearErrors]);

  const selectMode = (next: FormMode) => {
    clearErrors();
    setValue("mode", next);
  };

  const onTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const step = event.key === "ArrowRight" ? 1 : event.key === "ArrowLeft" ? -1 : 0;
    if (step === 0) return;
    event.preventDefault();
    const next = MODES[(MODES.indexOf(mode) + step + MODES.length) % MODES.length];
    selectMode(next);
    document.getElementById(`mct-mode-${next}`)?.focus();
  };

  const errorText = (field: keyof LeadFormValues): string | undefined => {
    if (!errors[field]) return undefined;
    if (field === "email") return t.form.errors.email;
    if (field === "consent") return t.form.errors.consent;
    if (field === "leaders") return fill(t.form.errors.range, LEADERS_RANGE);
    if (errors[field]?.type === "too_small" && String(getValues(field)).trim() !== "") return t.form.errors.tooShort;
    return t.form.errors.required;
  };

  const invalid = (field: keyof LeadFormValues) =>
    errors[field] ? { "aria-invalid": true, "aria-describedby": `mct-${field}-error` } : {};

  const onSubmit = async (values: LeadFormValues) => {
    const payload = buildLeadPayload(values, payloadContext());
    const tier = MODE_TIER[values.mode];
    setSubmitState({ status: "idle" });
    try {
      const response = await fetch("/api/mct-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadRequestBody(payload, values.website, getFlatAttribution())),
      });
      const body = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!response.ok || !body?.ok) throw new Error(body?.error ?? `http-${response.status}`);
      track("mct_lead_submitted", {
        locale,
        tier,
        intent: payload.intent,
        course_slug: payload.courseSlug,
        session_id: payload.sessionId,
        seats: payload.seats,
        language: payload.language,
        page_path: payload.pagePath,
      });
      setSubmitState({ status: "success", mode: values.mode });
    } catch (error) {
      const reason = error instanceof TypeError ? "network" : error instanceof Error ? error.message : "unknown";
      track("mct_lead_submit_error", { locale, tier, page_path: payload.pagePath, reason });
      setSubmitState({ status: "error", reason });
    }
  };

  useEffect(() => {
    if (submitState.status === "success") successHeadingRef.current?.focus();
  }, [submitState]);

  const languageField = (
    <Field id="mct-language" label={t.form.labels.language}>
      <Controller
        control={control}
        name="language"
        render={({ field }) => (
          <Select value={field.value} onValueChange={field.onChange}>
            <SelectTrigger id="mct-language" ref={field.ref}>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {LANGUAGES.map((language) => (
                <SelectItem key={language} value={language}>
                  {t.form.options.languages[language]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      />
    </Field>
  );

  const submitErrorTemplate =
    submitState.status !== "error"
      ? ""
      : submitState.reason === "session-unavailable"
        ? t.form.apiErrors.sessionUnavailable
        : submitState.reason === "rate-limited"
          ? t.form.apiErrors.rateLimited
          : t.form.error;
  const [errorBefore, errorAfter] = submitErrorTemplate.split("{email}");

  return (
    <section id="request" className="scroll-mt-20 py-20">
      <div className="mx-auto max-w-3xl px-4">
        <div className="rounded-2xl bg-background p-6 text-foreground [box-shadow:var(--shadow-card)] md:p-10">
          <div role="status" aria-live="polite">
            {submitState.status === "success" && (
              <div>
                <p className="mct-eyebrow mt-0 mb-3 text-electric-blue-dark">{t.form.eyebrow}</p>
                <h2 ref={successHeadingRef} tabIndex={-1} className="m-0 text-3xl font-bold focus:outline-none">
                  {t.form.success.title}
                </h2>
                <p className="mt-4 mb-0 text-lg leading-relaxed text-on-light-dim">
                  {t.form.success.body[submitState.mode]}
                </p>
                {submitState.mode === "scope" && (
                  <CTAButton
                    href={CALENDAR_URL}
                    target="_blank"
                    variant="secondary"
                    onClick={() => track("mct_calendar_click", { locale, placement: "form-success" })}
                    data-cta={`${surface}:form-calendar`}
                    className="mt-8"
                  >
                    {t.form.success.calendar}
                  </CTAButton>
                )}
              </div>
            )}
          </div>

          {submitState.status !== "success" && (
            <>
              <p className="mct-eyebrow mt-0 mb-3 text-electric-blue-dark">{t.form.eyebrow}</p>
              <h2 className="m-0 text-3xl font-bold">{t.form.titles[mode]}</h2>

              <div role="tablist" aria-label={t.form.eyebrow} className="mt-6 flex flex-wrap gap-2">
                {MODES.map((item) => (
                  <button
                    key={item}
                    id={`mct-mode-${item}`}
                    type="button"
                    role="tab"
                    aria-selected={mode === item}
                    aria-controls="mct-lead-fields"
                    tabIndex={mode === item ? 0 : -1}
                    onClick={() => selectMode(item)}
                    onKeyDown={onTabKeyDown}
                    className={cn(
                      "min-h-11 rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2",
                      mode === item
                        ? "border-electric bg-electric/10 text-foreground"
                        : "border-border text-on-light-dim hover:border-electric/60",
                    )}
                  >
                    {t.form.modes[item]}
                  </button>
                ))}
              </div>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-8">
                <input
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                  {...register("website")}
                />

                <div
                  id="mct-lead-fields"
                  role="tabpanel"
                  aria-labelledby={`mct-mode-${mode}`}
                  className="grid gap-5 sm:grid-cols-2"
                >
                  {mode === "seat" && (
                    <>
                      <div className="space-y-5">
                        <Field id="mct-courseSlug" label={t.form.labels.course} error={errorText("courseSlug")}>
                          <Controller
                            control={control}
                            name="courseSlug"
                            render={({ field }) => (
                              <Select
                                value={field.value || undefined}
                                onValueChange={(value) => {
                                  const slug = value as CourseSlug;
                                  field.onChange(slug);
                                  const offered = bookableSessions(slug, now);
                                  setValue("sessionChoice", pickSessionChoice(offered.map((s) => s.id)));
                                }}
                              >
                                <SelectTrigger id="mct-courseSlug" ref={field.ref} {...invalid("courseSlug")}>
                                  <SelectValue placeholder={t.form.labels.course} />
                                </SelectTrigger>
                                <SelectContent>
                                  {courseList.map((course) => (
                                    <SelectItem key={course.slug} value={course.slug}>
                                      {course.codes.length > 0
                                        ? `${course.codes.join(" / ")} · ${course.title[locale]}`
                                        : course.title[locale]}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            )}
                          />
                        </Field>

                        <Field id="mct-sessionChoice" label={t.form.labels.session} error={errorText("sessionChoice")}>
                          <Select value={sessionChoice} onValueChange={chooseSession}>
                            <SelectTrigger id="mct-sessionChoice" {...invalid("sessionChoice")}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {courseSessions.map((session) => (
                                <SelectItem key={session.id} value={session.id}>
                                  {`${formatSessionRange(session, locale)} · ${t.form.options.languages[session.language]}`}
                                </SelectItem>
                              ))}
                              <SelectItem value={NOTIFY_SESSION}>{t.form.labels.sessionNotify}</SelectItem>
                            </SelectContent>
                          </Select>
                        </Field>

                        {languageField}
                      </div>

                      <div>
                        <Controller
                          control={control}
                          name="seats"
                          render={({ field }) => (
                            <SeatQuote days={quoteDays} seats={field.value} onSeatsChange={field.onChange} />
                          )}
                        />
                        {seats >= PRIVATE_QUOTE_FROM_SEATS && (
                          <Controller
                            control={control}
                            name="wantsPrivateQuote"
                            render={({ field }) => (
                              <label className="mt-4 flex cursor-pointer items-start gap-3">
                                <Checkbox
                                  checked={field.value}
                                  onCheckedChange={(checked) => field.onChange(checked === true)}
                                  className="mt-0.5"
                                />
                                <span className="text-sm leading-relaxed">{t.form.labels.wantsPrivateQuote}</span>
                              </label>
                            )}
                          />
                        )}
                      </div>
                    </>
                  )}

                  {mode === "briefing" && (
                    <>
                      <Field id="mct-topic" label={t.form.labels.topic} error={errorText("topic")}>
                        <Controller
                          control={control}
                          name="topic"
                          render={({ field }) => (
                            <Select value={field.value || undefined} onValueChange={field.onChange}>
                              <SelectTrigger id="mct-topic" ref={field.ref} {...invalid("topic")}>
                                <SelectValue placeholder={t.form.labels.topic} />
                              </SelectTrigger>
                              <SelectContent>
                                {TOPICS.map((topic) => (
                                  <SelectItem key={topic} value={topic}>
                                    {topicLabels[topic]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </Field>
                      <Field id="mct-leaders" label={t.form.labels.leaders} error={errorText("leaders")}>
                        <Input
                          id="mct-leaders"
                          type="number"
                          inputMode="numeric"
                          min={LEADERS_RANGE.min}
                          max={LEADERS_RANGE.max}
                          {...invalid("leaders")}
                          {...register("leaders")}
                        />
                      </Field>
                      <Field id="mct-windows" label={t.form.labels.windows} className="sm:col-span-2">
                        <Textarea
                          id="mct-windows"
                          rows={2}
                          placeholder={t.form.placeholders.windows}
                          {...register("windows")}
                        />
                      </Field>
                      {languageField}
                    </>
                  )}

                  {mode === "scope" && (
                    <>
                      <fieldset className="m-0 border-0 p-0 sm:col-span-2">
                        <legend className="mb-3 text-sm font-medium">{t.form.labels.stack}</legend>
                        <Controller
                          control={control}
                          name="stack"
                          render={({ field }) => (
                            <div className="grid gap-3 sm:grid-cols-3">
                              {STACK_OPTIONS.map((option) => (
                                <label key={option} className="flex cursor-pointer items-center gap-3">
                                  <Checkbox
                                    checked={field.value.includes(option)}
                                    onCheckedChange={(checked) =>
                                      field.onChange(
                                        checked === true
                                          ? [...field.value, option]
                                          : field.value.filter((item) => item !== option),
                                      )
                                    }
                                  />
                                  <span className="text-sm">{t.form.options.stack[option]}</span>
                                </label>
                              ))}
                            </div>
                          )}
                        />
                      </fieldset>
                      <Field id="mct-teamSize" label={t.form.labels.teamSize}>
                        <Input id="mct-teamSize" placeholder={t.form.placeholders.teamSize} {...register("teamSize")} />
                      </Field>
                      <Field id="mct-timeline" label={t.form.labels.timeline}>
                        <Input id="mct-timeline" placeholder={t.form.placeholders.timeline} {...register("timeline")} />
                      </Field>
                      <Field id="mct-delivery" label={t.form.labels.delivery}>
                        <Controller
                          control={control}
                          name="delivery"
                          render={({ field }) => (
                            <Select value={field.value || undefined} onValueChange={field.onChange}>
                              <SelectTrigger id="mct-delivery" ref={field.ref}>
                                <SelectValue placeholder={t.form.labels.delivery} />
                              </SelectTrigger>
                              <SelectContent>
                                {DELIVERY_OPTIONS.map((option) => (
                                  <SelectItem key={option} value={option}>
                                    {t.form.options.delivery[option]}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        />
                      </Field>
                      {languageField}
                      <Field id="mct-procurement" label={t.form.labels.procurement} className="sm:col-span-2">
                        <Textarea
                          id="mct-procurement"
                          rows={3}
                          placeholder={t.form.placeholders.procurement}
                          {...register("procurement")}
                        />
                      </Field>
                    </>
                  )}

                </div>

                <div className="mt-5 grid gap-5 sm:grid-cols-2">
                  <Field id="mct-name" label={t.form.labels.name} error={errorText("name")}>
                    <Input id="mct-name" autoComplete="name" {...invalid("name")} {...register("name")} />
                  </Field>
                  <Field id="mct-email" label={t.form.labels.email} error={errorText("email")}>
                    <Input
                      id="mct-email"
                      type="email"
                      inputMode="email"
                      autoComplete="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      {...invalid("email")}
                      {...register("email")}
                    />
                  </Field>
                  <Field id="mct-company" label={t.form.labels.company} error={errorText("company")}>
                    <Input id="mct-company" autoComplete="organization" {...invalid("company")} {...register("company")} />
                  </Field>
                  <Field id="mct-phone" label={t.form.labels.phone} error={errorText("phone")}>
                    <Input id="mct-phone" type="tel" autoComplete="tel" {...invalid("phone")} {...register("phone")} />
                  </Field>

                  {mode !== "scope" && (
                    <Field id="mct-message" label={t.form.labels.message} className="sm:col-span-2">
                      <Textarea
                        id="mct-message"
                        rows={4}
                        placeholder={mode === "briefing" ? t.form.placeholders.briefingMessage : t.form.placeholders.message}
                        {...register("message")}
                      />
                    </Field>
                  )}

                  <div className="sm:col-span-2">
                    <Controller
                      control={control}
                      name="consent"
                      render={({ field }) => (
                        <label className="flex cursor-pointer items-start gap-3">
                          <Checkbox
                            ref={field.ref}
                            checked={field.value}
                            onCheckedChange={(checked) => field.onChange(checked === true)}
                            className="mt-0.5"
                            {...invalid("consent")}
                          />
                          <span className={hintClass}>{t.form.labels.consent}</span>
                        </label>
                      )}
                    />
                    {errors.consent && (
                      <p id="mct-consent-error" className={errorClass} role="alert">
                        {errorText("consent")}
                      </p>
                    )}
                    <p className="mt-2 mb-0 pl-7 text-xs">
                      <a href={PORTAL_PRIVACY_URL} target="_blank" rel="noopener noreferrer" className={cn(textLinkClass, "text-on-light-dim")}>
                        {t.footer.privacy}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <CTAButton
                    type="submit"
                    variant="primary"
                    loading={isSubmitting}
                    data-cta={`${surface}:form-submit`}
                    className="w-full sm:w-auto"
                  >
                    {isSubmitting ? t.form.sending : t.form.submit[mode]}
                  </CTAButton>
                  {mode === "seat" && <p className={cn(hintClass, "mt-4 mb-0")}>{t.form.microcopy.seat}</p>}
                  {submitState.status === "error" && (
                    <p className={errorClass} role="alert">
                      {errorBefore}
                      {errorAfter !== undefined && (
                        <>
                          <a href={`mailto:${EMAIL}`} className={textLinkClass}>
                            {EMAIL}
                          </a>
                          {errorAfter}
                        </>
                      )}
                    </p>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
