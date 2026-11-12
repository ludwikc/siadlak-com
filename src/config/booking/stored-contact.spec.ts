import { describe, expect, it } from "vitest";
import { parseStoredContact } from "./stored-contact";

const contact = {
  company: "Asseco",
  name: "Anna Nowak",
  email: "anna@example.com",
  phone: "",
  delivery: "onsite",
  city: "Rzeszów",
  language: "pl",
};

describe("parseStoredContact", () => {
  it("restores a valid stored contact", () => {
    expect(parseStoredContact(JSON.stringify(contact))).toEqual(contact);
  });

  it("returns null for missing, malformed or tampered data", () => {
    expect(parseStoredContact(null)).toBeNull();
    expect(parseStoredContact("{not json")).toBeNull();
    expect(parseStoredContact(JSON.stringify({ ...contact, delivery: "teleport" }))).toBeNull();
  });
});
