import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { enGB, pl as plLocale } from "date-fns/locale";
import { CalendarCheck } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import { startDatesFor, trainingDates } from "@/config/booking/availability";
import { CUSTOM_TRAINING, findCenter, findTraining, TRAININGS, trainingLabel } from "@/config/booking/catalog";
import type { BookingCenter } from "@/config/booking/catalog";
import { bookingCopy } from "@/config/booking/copy";
import { bookingRequestSchema } from "@/config/booking/request";
import type { BookingRequest } from "@/config/booking/request";
import { EMAIL } from "@/config/mct/contact";
import { Calendar } from "@/design-system/components/calendar";
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
import { cn } from "@/lib/utils";

type Availability = { from: string; to: string; freeDays: string[] };
type FormValues = BookingRequest & { website?: string };
type SubmitState = { status: "idle" } | { status: "error"; message: string } | { status: "done"; range: string };

const errorClass = "mt-2 mb-0 text-sm font-medium text-color-error-strong";
const sectionTitleClass = "text-xl font-bold";

const toDateKey = (date: Date): string => format(date, "yyyy-MM-dd");
const fromDateKey = (key: string): Date => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, m - 1, d);
};

async function fetchAvailability(center: string): Promise<Availability> {
  const response = await fetch(`/api/booking?center=${encodeURIComponent(center)}`);
  if (!response.ok) throw new Error(`HTTP ${response.status}`);
  return (await response.json()) as Availability;
}

type FieldProps = { id: string; label: string; optional?: string; error?: string; children: ReactNode };

const Field = ({ id, label, optional, error, children }: FieldProps) => (
  <div>
    <Label htmlFor={id} className="mb-2 block">
      {label}
      {optional && <span className="ml-1 font-normal text-on-light-dim">{optional}</span>}
    </Label>
    {children}
    {error && (
      <p className={errorClass} role="alert">
        {error}
      </p>
    )}
  </div>
);

const MailLink = () => (
  <a href={`mailto:${EMAIL}`} className="font-bold underline underline-offset-4 hover:text-electric">
    {EMAIL}
  </a>
);

function BookingForm({ center }: { center: BookingCenter }) {
  const t = bookingCopy[center.locale];
  const dateLocale = center.locale === "pl" ? plLocale : enGB;
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });

  const availability = useQuery({
    queryKey: ["booking-availability", center.slug],
    queryFn: () => fetchAvailability(center.slug),
    staleTime: 60_000,
    retry: 1,
  });

  const {
    register,
    control,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(bookingRequestSchema),
    defaultValues: {
      center: center.slug,
      training: "",
      customTraining: "",
      days: 1,
      startDate: "",
      name: "",
      email: "",
      phone: "",
      delivery: "remote",
      city: "",
      language: center.locale,
      notes: "",
      website: "",
    },
  });

  const training = watch("training");
  const days = watch("days");
  const startDate = watch("startDate");
  const delivery = watch("delivery");

  const startDates = useMemo(
    () => new Set(availability.data ? startDatesFor(availability.data.freeDays, days) : []),
    [availability.data, days],
  );
  const selectedDates = startDate && startDates.has(startDate) ? trainingDates(startDate, days) : [];
  const formatRange = (dates: string[]) =>
    dates.length === 0
      ? ""
      : dates.length === 1
        ? format(fromDateKey(dates[0]), "EEEE, d MMMM yyyy", { locale: dateLocale })
        : `${format(fromDateKey(dates[0]), "EEEE, d MMMM", { locale: dateLocale })} – ${format(
            fromDateKey(dates[dates.length - 1]),
            "EEEE, d MMMM yyyy",
            { locale: dateLocale },
          )}`;

  const chooseTraining = (value: string) => {
    setValue("training", value, { shouldValidate: true });
    setValue("days", findTraining(value)?.defaultDays ?? 1);
    setValue("startDate", "");
  };

  const fieldError = (name: keyof FormValues): string | undefined => {
    const error = errors[name];
    if (!error) return undefined;
    if (name === "email") return t.errors.email;
    if (name === "startDate") return t.errors.startDate;
    return t.errors.required;
  };

  const onSubmit = async (values: FormValues) => {
    if (values.website) return;
    setSubmitState({ status: "idle" });
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (response.status === 409) {
        setValue("startDate", "");
        await availability.refetch();
        setSubmitState({ status: "error", message: t.errors.slotTaken });
        return;
      }
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      track("booking_requested", { center: center.slug, training: values.training, days: values.days });
      setSubmitState({ status: "done", range: formatRange(trainingDates(values.startDate, values.days)) });
      availability.refetch();
      window.scrollTo({ top: 0 });
    } catch {
      setSubmitState({ status: "error", message: t.errors.generic });
    }
  };

  if (submitState.status === "done") {
    return (
      <div className="mt-16" aria-live="polite">
        <CalendarCheck className="h-10 w-10 text-electric" aria-hidden="true" />
        <h1 className="mt-6 text-3xl md:text-5xl font-bold">{t.done.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-on-light-dim">{t.done.body(submitState.range)}</p>
        <div className="mt-10">
          <CTAButton
            variant="secondary"
            showArrow={false}
            onClick={() => {
              reset();
              setSubmitState({ status: "idle" });
            }}
          >
            {t.done.again}
          </CTAButton>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-10 md:mt-14">
        <p className="text-sm font-bold uppercase tracking-widest text-electric">{t.eyebrow}</p>
        <h1 className="mt-3 text-3xl md:text-5xl font-bold">{t.title(center.name)}</h1>
        <p className="mt-5 text-lg leading-relaxed text-on-light-dim">{t.lead}</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-12 space-y-12" noValidate>
        <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, overflow: "hidden" }}>
          <label>
            Website
            <input type="text" tabIndex={-1} autoComplete="off" {...register("website")} />
          </label>
        </div>

        <section className="space-y-6">
          <h2 className={sectionTitleClass}>{t.sections.training}</h2>
          <Field id="booking-training" label={t.training} error={fieldError("training")}>
            <Controller
              control={control}
              name="training"
              render={({ field }) => (
                <Select value={field.value} onValueChange={chooseTraining}>
                  <SelectTrigger id="booking-training" className="text-base">
                    <SelectValue placeholder={t.trainingPlaceholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {TRAININGS.map((item) => (
                      <SelectItem key={item.id} value={item.id} className="text-base">
                        {trainingLabel(item, center.locale)} · {item.defaultDays} {t.dayUnit(item.defaultDays)}
                      </SelectItem>
                    ))}
                    <SelectItem value={CUSTOM_TRAINING} className="text-base">
                      {t.customOption}
                    </SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </Field>

          {training === CUSTOM_TRAINING && (
            <Field id="booking-custom" label={t.customTraining} error={fieldError("customTraining")}>
              <Input id="booking-custom" className="text-base" placeholder={t.customPlaceholder} {...register("customTraining")} />
            </Field>
          )}

          {training && (
            <Field id="booking-days" label={t.days} error={fieldError("days")}>
              <Input
                id="booking-days"
                type="number"
                min={1}
                max={5}
                inputMode="numeric"
                className="w-28 text-base"
                {...register("days", {
                  valueAsNumber: true,
                  onChange: () => setValue("startDate", ""),
                })}
              />
              <p className="mt-2 mb-0 text-sm text-on-light-dim">
                {t.daysHint(findTraining(training)?.defaultDays ?? 1)}
              </p>
            </Field>
          )}
        </section>

        <section className="space-y-4">
          <h2 className={sectionTitleClass}>{t.sections.date}</h2>
          {!training ? (
            <p className="text-on-light-dim">{t.pickTrainingFirst}</p>
          ) : availability.isPending ? (
            <div aria-live="polite">
              <p className="text-sm text-on-light-dim">{t.loading}</p>
            </div>
          ) : availability.isError ? (
            <p role="alert" className="text-on-light">
              {t.errors.calendar} <MailLink />
            </p>
          ) : startDates.size === 0 ? (
            <p className="text-on-light">
              {t.noSlots(days)} <MailLink />
            </p>
          ) : (
            <>
              <p className="text-sm text-on-light-dim">{t.calendarHint}</p>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <Calendar
                    mode="single"
                    locale={dateLocale}
                    weekStartsOn={1}
                    numberOfMonths={2}
                    showOutsideDays={false}
                    fromDate={fromDateKey(availability.data.from)}
                    toDate={fromDateKey(availability.data.to)}
                    selected={field.value ? fromDateKey(field.value) : undefined}
                    onSelect={(date) => field.onChange(date ? toDateKey(date) : "")}
                    disabled={(date) => !startDates.has(toDateKey(date))}
                    modifiers={{ available: [...startDates].map(fromDateKey), booked: selectedDates.map(fromDateKey) }}
                    modifiersClassNames={{ available: "font-bold text-electric", booked: "rounded-md !bg-electric/15 !text-on-light !opacity-100" }}
                    className="w-fit rounded-[var(--border-radius-sm)] border border-border"
                  />
                )}
              />
              {selectedDates.length > 0 && (
                <p className="font-bold" aria-live="polite">
                  {t.selected}: {formatRange(selectedDates)}
                </p>
              )}
              {errors.startDate && (
                <p className={errorClass} role="alert">
                  {t.errors.startDate}
                </p>
              )}
            </>
          )}
        </section>

        <section className="space-y-6">
          <h2 className={sectionTitleClass}>{t.sections.details}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="booking-delivery" label={t.delivery}>
              <Controller
                control={control}
                name="delivery"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="booking-delivery" className="text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(["remote", "onsite"] as const).map((option) => (
                        <SelectItem key={option} value={option} className="text-base">
                          {t.deliveryOptions[option]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            {delivery === "onsite" && (
              <Field id="booking-city" label={t.city} error={fieldError("city")}>
                <Input id="booking-city" className="text-base" autoComplete="address-level2" {...register("city")} />
              </Field>
            )}
            <Field id="booking-language" label={t.language}>
              <Controller
                control={control}
                name="language"
                render={({ field }) => (
                  <Select value={field.value} onValueChange={field.onChange}>
                    <SelectTrigger id="booking-language" className="text-base">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {(["pl", "en"] as const).map((option) => (
                        <SelectItem key={option} value={option} className="text-base">
                          {t.languageOptions[option]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
            </Field>
            <Field id="booking-participants" label={t.participants} optional={t.optional} error={fieldError("participants")}>
              <Input
                id="booking-participants"
                type="number"
                min={1}
                inputMode="numeric"
                className="text-base"
                {...register("participants", {
                  setValueAs: (value: string) => (value === "" ? undefined : Number(value)),
                })}
              />
            </Field>
          </div>
          <Field id="booking-notes" label={t.notes} optional={t.optional}>
            <Textarea id="booking-notes" rows={4} className="text-base" placeholder={t.notesPlaceholder} {...register("notes")} />
          </Field>
        </section>

        <section className="space-y-6 border-t border-border pt-10">
          <h2 className={sectionTitleClass}>{t.sections.contact}</h2>
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="booking-name" label={t.name} error={fieldError("name")}>
              <Input id="booking-name" autoComplete="name" className="text-base" {...register("name")} />
            </Field>
            <Field id="booking-email" label={t.email} error={fieldError("email")}>
              <Input
                id="booking-email"
                type="email"
                inputMode="email"
                autoComplete="email"
                autoCapitalize="none"
                spellCheck={false}
                className="text-base"
                {...register("email")}
              />
            </Field>
            <Field id="booking-phone" label={t.phone} optional={t.optional}>
              <Input id="booking-phone" type="tel" autoComplete="tel" className="text-base" {...register("phone")} />
            </Field>
          </div>
        </section>

        {submitState.status === "error" && (
          <p role="alert" className={cn(errorClass, "text-base")}>
            {submitState.message} {submitState.message === t.errors.generic && <MailLink />}
          </p>
        )}

        <CTAButton type="submit" variant="primary" disabled={isSubmitting} showArrow={false}>
          {isSubmitting ? t.submitting : t.submit}
        </CTAButton>
      </form>
    </>
  );
}

export default function Booking() {
  const { center: slug } = useParams();
  const center = findCenter(slug);
  if (!center) return <NotFound />;

  return (
    <Layout hideHeader hideFooter>
      <SEO
        title={bookingCopy[center.locale].title(center.name)}
        description={bookingCopy[center.locale].lead}
        url={`/rezerwacja/${center.slug}`}
        lang={center.locale}
        noindex
      />
      <section className="py-14 md:py-20">
        <div className="container mx-auto max-w-3xl px-6">
          <p className="text-sm font-bold uppercase tracking-widest text-on-light-dim">siadlak.com</p>
          <BookingForm center={center} />
        </div>
      </section>
    </Layout>
  );
}
