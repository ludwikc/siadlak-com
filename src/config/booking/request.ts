import { z } from "zod";
import { addDays, isDateKey, MAX_TRAINING_DAYS, trainingDates } from "./availability.js";
import { CUSTOM_TRAINING, findTraining, trainingLabel } from "./catalog.js";
import type { BookingCenter } from "./catalog";

export const bookingRequestSchema = z
  .object({
    center: z.string().trim().min(1).max(60),
    training: z.string().trim().min(1).max(60),
    customTraining: z.string().trim().max(200).optional().default(""),
    requirements: z.string().trim().max(4000).optional().default(""),
    days: z.number().int().min(1).max(MAX_TRAINING_DAYS),
    startDate: z.string().refine(isDateKey, "invalid-date"),
    name: z.string().trim().min(2).max(120),
    email: z.string().trim().email().max(200),
    phone: z.string().trim().max(40).optional().default(""),
    delivery: z.enum(["remote", "onsite"]),
    city: z.string().trim().max(120).optional().default(""),
    language: z.enum(["pl", "en"]),
    participants: z.number().int().min(1).max(500).optional(),
    notes: z.string().trim().max(4000).optional().default(""),
  })
  .superRefine((value, ctx) => {
    if (value.training === CUSTOM_TRAINING) {
      if (value.customTraining.length < 3) {
        ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["customTraining"], message: "required" });
      }
    } else if (!findTraining(value.training)) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["training"], message: "unknown-training" });
    }
    if (value.delivery === "onsite" && value.city.length < 2) {
      ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["city"], message: "required" });
    }
  });

export type BookingRequest = z.infer<typeof bookingRequestSchema>;

export type BlockerEvent = {
  summary: string;
  description: string;
  start: { date: string };
  end: { date: string };
  transparency: "opaque";
  status: "tentative";
  extendedProperties: { private: Record<string, string> };
};

const requestedTraining = (request: BookingRequest): { short: string; full: string } => {
  const training = findTraining(request.training);
  if (!training) return { short: request.customTraining, full: request.customTraining };
  return { short: training.shortName, full: trainingLabel(training, "pl") };
};

export function buildBlockerEvent(request: BookingRequest, center: BookingCenter, requestId: string): BlockerEvent {
  const { short, full } = requestedTraining(request);
  const dates = trainingDates(request.startDate, request.days);
  const delivery = request.delivery === "onsite" ? `stacjonarnie, ${request.city}` : "zdalnie";
  const description = [
    "Prośba o termin szkolenia — do zatwierdzenia.",
    "",
    `Centrum: ${center.name}`,
    `Szkolenie: ${full}`,
    `Termin: ${dates[0]} – ${dates[dates.length - 1]} (${request.days} d.)`,
    `Forma: ${delivery}`,
    `Język: ${request.language.toUpperCase()}`,
    `Uczestnicy: ${request.participants ?? "—"}`,
    "",
    `Kontakt: ${request.name}`,
    `E-mail: ${request.email}`,
    `Telefon: ${request.phone || "—"}`,
    "",
    ...(request.requirements ? ["Opis wymagań:", request.requirements, ""] : []),
    "Uwagi:",
    request.notes || "—",
    "",
    "Zatwierdzenie: odpisz klientowi i zmień tytuł (usuń [Blocker]).",
    "Odrzucenie: odpisz klientowi i usuń to wydarzenie.",
    `ID: ${requestId}`,
  ].join("\n");

  return {
    summary: `[Blocker] ${short} – ${center.name}`,
    description,
    start: { date: request.startDate },
    end: { date: addDays(request.startDate, request.days) },
    transparency: "opaque",
    status: "tentative",
    extendedProperties: { private: { bookingRequestId: requestId, bookingCenter: center.slug } },
  };
}
