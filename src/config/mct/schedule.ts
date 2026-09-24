import type { ScheduledSession } from "./types";

// EMPTY on purpose — the owner adds real dates here as they are confirmed.
// Shape of one entry:
// { id: "dp-600-2026-11-16-en", courseSlug: "dp-600", startsAt: "2026-11-16T09:00:00+01:00", days: 2, language: "en", seatsTotal: 8, status: "open" }
export const sessions: ScheduledSession[] = [];
