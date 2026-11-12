import { describe, expect, it } from "vitest";
import { findCenter } from "./catalog";
import { buildNotification, toGmailRaw } from "./notify";
import { bookingRequestSchema } from "./request";

const request = bookingRequestSchema.parse({
  center: "pl",
  company: "Asseco",
  training: "dp-600",
  days: 4,
  startDate: "2027-01-11",
  name: "Anna Nowak",
  email: "anna@example.com",
  delivery: "onsite",
  city: "Rzeszów",
  language: "pl",
  participants: 12,
});

describe("buildNotification", () => {
  it("summarises the request with the calendar link", () => {
    const { subject, text } = buildNotification(request, findCenter("pl")!, "https://calendar.google.com/e/1");
    expect(subject).toEqual("[Booking] Asseco: DP-600 · 2027-01-11 – 2027-01-14");
    expect(text).toContain("Termin: 2027-01-11 – 2027-01-14 (4 d.)");
    expect(text).toContain("Forma: stacjonarnie, Rzeszów · język PL");
    expect(text).toContain("Kontakt: Anna Nowak · anna@example.com");
    expect(text).toContain("Blokada w kalendarzu: https://calendar.google.com/e/1");
  });

  it("omits empty optional lines", () => {
    const { text } = buildNotification({ ...request, participants: undefined }, findCenter("pl")!);
    expect(text).not.toContain("Uczestnicy");
    expect(text).not.toContain("Blokada w kalendarzu");
  });
});

describe("toGmailRaw", () => {
  it("encodes a UTF-8 message as base64url with an encoded subject", () => {
    const raw = toGmailRaw("ludwikc@siadlak.com", { subject: "Zażółć", text: "gęślą jaźń" }, "anna@example.com");
    const decoded = Buffer.from(raw, "base64url").toString("utf8");
    expect(raw).not.toMatch(/[+/=]/);
    expect(decoded).toContain("To: ludwikc@siadlak.com\r\nReply-To: anna@example.com\r\n");
    expect(decoded).toContain(`Subject: =?UTF-8?B?${Buffer.from("Zażółć").toString("base64")}?=`);
    expect(decoded.endsWith(Buffer.from("gęślą jaźń").toString("base64"))).toBe(true);
  });
});
