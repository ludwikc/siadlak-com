import { z } from "zod";

const STORAGE_PREFIX = "siadlak-booking:";

const storedContactSchema = z.object({
  name: z.string().max(120),
  email: z.string().max(200),
  phone: z.string().max(40),
  delivery: z.enum(["remote", "onsite"]),
  city: z.string().max(120),
  language: z.enum(["pl", "en"]),
});

export type StoredContact = z.infer<typeof storedContactSchema>;

export const parseStoredContact = (raw: string | null): StoredContact | null => {
  if (!raw) return null;
  try {
    const parsed = storedContactSchema.safeParse(JSON.parse(raw));
    return parsed.success ? parsed.data : null;
  } catch {
    return null;
  }
};

export function loadContact(center: string): StoredContact | null {
  try {
    return parseStoredContact(window.localStorage.getItem(STORAGE_PREFIX + center));
  } catch {
    return null;
  }
}

export function saveContact(center: string, contact: StoredContact): void {
  try {
    window.localStorage.setItem(STORAGE_PREFIX + center, JSON.stringify(storedContactSchema.parse(contact)));
  } catch {
    // storage unavailable (private mode, blocked site data)
  }
}

export function forgetContact(center: string): void {
  try {
    window.localStorage.removeItem(STORAGE_PREFIX + center);
  } catch {
    // storage unavailable
  }
}
