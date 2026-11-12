import { trainingDates } from "./availability.js";
import { findTraining, trainingLabel } from "./catalog.js";
import type { BookingCenter } from "./catalog";
import type { BookingRequest } from "./request";

export type BookingNotification = { subject: string; text: string };

export function buildNotification(
  request: BookingRequest,
  center: BookingCenter,
  eventLink?: string,
): BookingNotification {
  const training = findTraining(request.training);
  const name = training ? trainingLabel(training, "pl") : request.customTraining;
  const dates = trainingDates(request.startDate, request.days);
  const range = dates.length > 1 ? `${dates[0]} – ${dates[dates.length - 1]}` : dates[0];
  const delivery = request.delivery === "onsite" ? `stacjonarnie, ${request.city}` : "zdalnie";
  const lines = [
    `Nowa prośba o termin od ${request.company} (${center.slug.toUpperCase()})`,
    "",
    `Szkolenie: ${name}`,
    `Termin: ${range} (${request.days} d.)`,
    `Forma: ${delivery} · język ${request.language.toUpperCase()}`,
    ...(request.participants ? [`Uczestnicy: ${request.participants}`] : []),
    `Kontakt: ${request.name} · ${request.email}${request.phone ? ` · ${request.phone}` : ""}`,
    ...(request.requirements ? ["", `Wymagania: ${request.requirements}`] : []),
    ...(request.notes ? ["", `Uwagi: ${request.notes}`] : []),
    ...(eventLink ? ["", `Blokada w kalendarzu: ${eventLink}`] : []),
  ];
  return {
    subject: `[Booking] ${request.company}: ${training?.shortName ?? request.customTraining} · ${range}`,
    text: lines.join("\n"),
  };
}

const base64 = (value: string): string => Buffer.from(value, "utf8").toString("base64");

export function toGmailRaw(to: string, { subject, text }: BookingNotification, replyTo?: string): string {
  const message = [
    `To: ${to}`,
    ...(replyTo ? [`Reply-To: ${replyTo}`] : []),
    `Subject: =?UTF-8?B?${base64(subject)}?=`,
    "MIME-Version: 1.0",
    "Content-Type: text/plain; charset=UTF-8",
    "Content-Transfer-Encoding: base64",
    "",
    base64(text),
  ].join("\r\n");
  return Buffer.from(message, "utf8").toString("base64url");
}
