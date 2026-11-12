import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { enGB, pl as plLocale } from "date-fns/locale";
import { AlertTriangle, CalendarCheck, Mail, Phone } from "lucide-react";
import Layout from "@/components/layout/Layout";
import SEO from "@/components/SEO";
import NotFound from "@/pages/NotFound";
import {
  blockStartFor,
  bookableDays,
  isValidTrainingLength,
  startDatesFor,
  trainingDates,
} from "@/config/booking/availability";
import TrainingMenu from "@/components/booking/TrainingMenu";
import {
  BOOKING_PATH,
  CUSTOM_TRAINING,
  findCenter,
  findTraining,
  legacyCenterPath,
  trainingLabel,
} from "@/config/booking/catalog";
import type { BookingCenter } from "@/config/booking/catalog";
import { BOOKING_EMAIL, BOOKING_PHONE, BOOKING_PHONE_TEL, bookingCopy } from "@/config/booking/copy";
import { bookingRequestSchema } from "@/config/booking/request";
import type { BookingRequest } from "@/config/booking/request";
import { forgetContact, loadContact, saveContact } from "@/config/booking/stored-contact";
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
type Copy = (typeof bookingCopy)["pl"];
type SubmitState = { status: "idle" } | { status: "error"; message: string } | { status: "done"; values: FormValues };

const errorClass = "mt-2 mb-0 text-sm font-medium text-color-error-strong";
const sectionTitleClass = "text-xl font-bold";
const linkClass = "font-bold underline underline-offset-4 hover:text-electric";
const cardClass = "rounded-[var(--border-radius-md)] border border-border bg-card";

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

const ContactLinks = () => (
  <span className="inline-flex flex-wrap gap-x-4 gap-y-1">
    <a href={`mailto:${BOOKING_EMAIL}`} className={linkClass}>
      {BOOKING_EMAIL}
    </a>
    <a href={`tel:${BOOKING_PHONE_TEL}`} className={linkClass}>
      {BOOKING_PHONE}
    </a>
  </span>
);

const LegendSwatch = ({ className, label }: { className: string; label: string }) => (
  <span className="inline-flex items-center gap-2">
    <span className={cn("inline-block h-4 w-4 rounded", className)} aria-hidden="true" />
    {label}
  </span>
);

type SummaryProps = { values: FormValues; center: BookingCenter; t: Copy; formatDay: (key: string) => string };

function BookingSummary({ values, center, t, formatDay }: SummaryProps) {
  const dates = trainingDates(values.startDate, values.days);
  const training = findTraining(values.training);
  const rows: Array<[string, ReactNode]> = [
    [t.done.labels.center, values.company],
    [t.done.labels.training, training ? trainingLabel(training, center.locale) : values.customTraining],
    ...(!training && values.requirements
      ? [[t.done.labels.requirements, <span className="whitespace-pre-line">{values.requirements}</span>] as [string, ReactNode]]
      : []),
    [
      t.done.labels.dates,
      <>
        <span className="block">
          {t.startLabel}: {formatDay(dates[0])}
        </span>
        {dates.length > 1 && (
          <span className="block">
            {t.endLabel}: {formatDay(dates[dates.length - 1])}
          </span>
        )}
        <span className="block text-on-light-dim">
          {values.days} {t.dayUnit(values.days)}
        </span>
      </>,
    ],
    [
      t.done.labels.delivery,
      values.delivery === "onsite" ? `${t.deliveryOptions.onsite}, ${values.city}` : t.deliveryOptions.remote,
    ],
    [t.done.labels.language, t.languageOptions[values.language]],
    ...(values.participants ? [[t.done.labels.participants, String(values.participants)] as [string, ReactNode]] : []),
    [
      t.done.labels.contact,
      <>
        <span className="block">{values.name}</span>
        <span className="block text-on-light-dim">{values.email}</span>
        {values.phone && <span className="block text-on-light-dim">{values.phone}</span>}
      </>,
    ],
  ];

  return (
    <section className={cn(cardClass, "mt-10 overflow-hidden")} aria-labelledby="booking-summary-title">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-6 py-4">
        <h2 id="booking-summary-title" className="m-0 text-lg font-bold">
          {t.done.summary}
        </h2>
        <span className="rounded-full bg-electric/10 px-3 py-1 text-sm font-bold text-electric">{t.done.status}</span>
      </div>
      <dl className="m-0 divide-y divide-border">
        {rows.map(([label, value]) => (
          <div key={label} className="grid gap-1 px-6 py-4 sm:grid-cols-[10rem_1fr] sm:gap-6">
            <dt className="text-sm font-bold uppercase tracking-wider text-on-light-dim">{label}</dt>
            <dd className="m-0 text-base">{value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function BookingForm({ center }: { center: BookingCenter }) {
  const t = bookingCopy[center.locale];
  const [searchParams] = useSearchParams();
  const prefillCompany = (searchParams.get("company") ?? "").trim().slice(0, 120);
  const dateLocale = center.locale === "pl" ? plLocale : enGB;
  const [submitState, setSubmitState] = useState<SubmitState>({ status: "idle" });
  const [storedContact, setStoredContact] = useState(() => loadContact(center.slug));

  const availability = useQuery({
    queryKey: ["booking-availability", center.slug],
    queryFn: () => fetchAvailability(center.slug),
    staleTime: 60_000,
    retry: 1,
  });

  const emptyValues: FormValues = {
    center: center.slug,
    company: "",
    training: "",
    customTraining: "",
    requirements: "",
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
  };

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
    defaultValues: { ...emptyValues, ...storedContact, ...(prefillCompany ? { company: prefillCompany } : {}) },
  });

  const training = watch("training");
  const days = watch("days");
  const startDate = watch("startDate");
  const delivery = watch("delivery");

  const [hoveredDay, setHoveredDay] = useState("");
  const freeDays = availability.data?.freeDays;
  const startDates = useMemo(() => (freeDays ? startDatesFor(freeDays, days) : []), [freeDays, days]);
  const bookable = useMemo(() => bookableDays(startDates, days), [startDates, days]);
  const tightDays = useMemo(() => (freeDays ?? []).filter((day) => !bookable.has(day)), [freeDays, bookable]);
  const selectedDates = startDate && startDates.includes(startDate) ? trainingDates(startDate, days) : [];
  const previewStart = hoveredDay ? blockStartFor(startDates, days, hoveredDay) : undefined;
  const previewDates = previewStart
    ? trainingDates(previewStart, days).filter((day) => !selectedDates.includes(day))
    : [];
  const formatDay = (key: string) => format(fromDateKey(key), "EEEE, d MMMM yyyy", { locale: dateLocale });

  const chooseTraining = (value: string) => {
    setValue("training", value, { shouldValidate: true });
    setValue("days", findTraining(value)?.defaultDays ?? 1);
    setValue("startDate", "");
  };

  const clearStoredContact = () => {
    forgetContact(center.slug);
    setStoredContact(null);
    for (const field of ["company", "name", "email", "phone", "delivery", "city", "language"] as const) {
      setValue(field, emptyValues[field]);
    }
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
      const contact = {
        company: values.company,
        name: values.name,
        email: values.email,
        phone: values.phone,
        delivery: values.delivery,
        city: values.city,
        language: values.language,
      };
      saveContact(center.slug, contact);
      setStoredContact(contact);
      setSubmitState({ status: "done", values });
      availability.refetch();
      window.scrollTo({ top: 0 });
    } catch {
      setSubmitState({ status: "error", message: t.errors.generic });
    }
  };

  if (submitState.status === "done") {
    return (
      <div className="mt-12" aria-live="polite">
        <CalendarCheck className="h-10 w-10 text-electric" aria-hidden="true" />
        <h1 className="mt-6 text-3xl md:text-5xl font-bold">{t.done.title}</h1>
        <p className="mt-6 text-lg leading-relaxed text-on-light-dim">{t.done.body}</p>

        <BookingSummary values={submitState.values} center={center} t={t} formatDay={formatDay} />

        <div className={cn(cardClass, "mt-6 flex flex-wrap items-center justify-between gap-4 px-6 py-5")}>
          <p className="m-0 text-base font-bold">{t.done.faster}</p>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <a href={`tel:${BOOKING_PHONE_TEL}`} className="inline-flex items-center gap-2 font-bold hover:text-electric">
              <Phone className="h-4 w-4 text-electric" aria-hidden="true" />
              {t.done.call}: {BOOKING_PHONE}
            </a>
            <a href={`mailto:${BOOKING_EMAIL}`} className="inline-flex items-center gap-2 font-bold hover:text-electric">
              <Mail className="h-4 w-4 text-electric" aria-hidden="true" />
              {BOOKING_EMAIL}
            </a>
          </div>
        </div>

        <div className="mt-10">
          <CTAButton
            variant="secondary"
            showArrow={false}
            onClick={() => {
              reset({ ...emptyValues, ...storedContact });
              setHoveredDay("");
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
        <h1 className="mt-3 text-3xl md:text-5xl font-bold">{t.title}</h1>
        <p className="mt-5 text-lg leading-relaxed text-on-light-dim">{t.lead}</p>
        <p className="mt-3 text-base text-on-light-dim">
          {t.contact.questions} <ContactLinks />
        </p>
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
                <TrainingMenu
                  id="booking-training"
                  value={field.value}
                  locale={center.locale}
                  copy={{
                    placeholder: t.trainingPlaceholder,
                    certified: t.certified,
                    customGroup: t.customGroup,
                    customOption: t.customOption,
                    ...t.menu,
                    dayUnit: t.dayUnit,
                  }}
                  onChange={chooseTraining}
                  invalid={Boolean(errors.training)}
                />
              )}
            />
          </Field>

          {training === CUSTOM_TRAINING && (
            <Field id="booking-custom" label={t.customTraining} error={fieldError("customTraining")}>
              <Input id="booking-custom" className="text-base" placeholder={t.customPlaceholder} {...register("customTraining")} />
            </Field>
          )}

          {training === CUSTOM_TRAINING && (
            <Field id="booking-requirements" label={t.requirements} optional={t.optional}>
              <Textarea
                id="booking-requirements"
                rows={5}
                className="text-base"
                placeholder={t.requirementsPlaceholder}
                {...register("requirements")}
              />
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
                  onChange: (event) => {
                    const next = Number(event.target.value);
                    if (!startDatesFor(freeDays ?? [], next).includes(startDate)) setValue("startDate", "");
                  },
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
            <p className="text-on-light-dim" aria-live="polite">
              {t.loading}
            </p>
          ) : availability.isError ? (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-[var(--border-radius-md)] border border-color-error-strong p-4 text-color-error-strong"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p className="m-0 font-bold">
                {t.errors.calendar} <ContactLinks />
              </p>
            </div>
          ) : !isValidTrainingLength(days) ? (
            <p className="text-on-light-dim">{t.daysInvalid}</p>
          ) : startDates.length === 0 ? (
            <p className="text-on-light">
              {t.noSlots(days)} <ContactLinks />
            </p>
          ) : (
            <>
              <p className="text-base text-on-light-dim">{t.calendarHint(days)}</p>
              <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-on-light-dim">
                <LegendSwatch className="border border-electric/40 bg-electric/10" label={t.legend.available} />
                <LegendSwatch className="bg-electric" label={t.legend.selected} />
                <LegendSwatch className="border border-border bg-transparent" label={t.legend.unavailable} />
                {tightDays.length > 0 && (
                  <LegendSwatch className="border border-dashed border-on-light-dim" label={t.legend.tight(days)} />
                )}
              </div>
              <Controller
                control={control}
                name="startDate"
                render={({ field }) => (
                  <Calendar
                    locale={dateLocale}
                    weekStartsOn={1}
                    numberOfMonths={2}
                    showOutsideDays={false}
                    fromDate={fromDateKey(availability.data.from)}
                    toDate={fromDateKey(availability.data.to)}
                    onDayClick={(date) => {
                      const start = blockStartFor(startDates, days, toDateKey(date));
                      if (start) field.onChange(start);
                    }}
                    onDayMouseEnter={(date) => setHoveredDay(toDateKey(date))}
                    onDayMouseLeave={() => setHoveredDay("")}
                    onDayFocus={(date) => setHoveredDay(toDateKey(date))}
                    onDayBlur={() => setHoveredDay("")}
                    disabled={(date) => !bookable.has(toDateKey(date))}
                    modifiers={{
                      available: [...bookable].map(fromDateKey),
                      tight: tightDays.map(fromDateKey),
                      preview: previewDates.map(fromDateKey),
                      booked: selectedDates.map(fromDateKey),
                    }}
                    modifiersClassNames={{
                      available: "border border-electric/40 bg-electric/10 font-bold text-electric",
                      tight: "border border-dashed border-on-light-dim !opacity-70",
                      preview: "!bg-electric/30",
                      booked: "!bg-electric !text-white !opacity-100 font-bold",
                    }}
                    classNames={{
                      months: "flex flex-col gap-8 sm:flex-row",
                      caption_label: "text-base font-bold capitalize",
                      head_cell: "w-10 text-xs font-medium uppercase text-on-light-dim",
                      row: "mt-1.5 flex w-full gap-1",
                      head_row: "flex gap-1",
                      cell: "relative h-10 w-10 p-0 text-center",
                      day: "h-10 w-10 rounded-md p-0 text-base font-normal transition-colors",
                      day_today: "underline underline-offset-4",
                      day_disabled: "text-on-light-dim opacity-40 hover:bg-transparent",
                    }}
                    className={cn(cardClass, "w-fit p-4")}
                  />
                )}
              />
              {selectedDates.length > 0 && (
                <div className={cn(cardClass, "grid gap-4 p-5 sm:grid-cols-3")} aria-live="polite">
                  <div>
                    <p className="m-0 text-sm font-bold uppercase tracking-wider text-on-light-dim">{t.startLabel}</p>
                    <p className="m-0 mt-1 text-base font-bold">{formatDay(selectedDates[0])}</p>
                  </div>
                  <div>
                    <p className="m-0 text-sm font-bold uppercase tracking-wider text-on-light-dim">{t.endLabel}</p>
                    <p className="m-0 mt-1 text-base font-bold">{formatDay(selectedDates[selectedDates.length - 1])}</p>
                  </div>
                  <div>
                    <p className="m-0 text-sm font-bold uppercase tracking-wider text-on-light-dim">{t.days}</p>
                    <p className="m-0 mt-1 text-base font-bold">
                      {days} {t.dayUnit(days)}
                    </p>
                  </div>
                </div>
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
          {storedContact && (
            <p className="text-sm text-on-light-dim">
              {t.remembered}{" "}
              <button type="button" onClick={clearStoredContact} className="font-bold underline underline-offset-4 hover:text-electric">
                {t.forget}
              </button>
            </p>
          )}
          <div className="grid gap-5 sm:grid-cols-2">
            <Field id="booking-company" label={t.company} error={fieldError("company")}>
              <Input id="booking-company" autoComplete="organization" className="text-base" {...register("company")} />
            </Field>
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
            {submitState.message} {submitState.message === t.errors.generic && <ContactLinks />}
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
  const legacyPath = legacyCenterPath(slug);
  if (legacyPath) return <Navigate to={legacyPath} replace />;
  if (!center) return <NotFound />;

  return (
    <Layout hideHeader hideFooter>
      <SEO
        title={bookingCopy[center.locale].title}
        description={bookingCopy[center.locale].lead}
        url={`${BOOKING_PATH}/${center.slug}`}
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
