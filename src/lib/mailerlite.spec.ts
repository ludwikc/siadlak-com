import { describe, expect, it } from "vitest";
import { buildSubscribePayload, subscribeEndpoint, subscribeToForm } from "./mailerlite";

describe("mailerlite subscribe payload", () => {
  it("wraps every field as fields[key] and appends the submit markers", () => {
    const body = buildSubscribePayload({ email: "a@b.pl", source: "newsletter", reset_score: 12 });
    expect(body.get("fields[email]")).toBe("a@b.pl");
    expect(body.get("fields[source]")).toBe("newsletter");
    expect(body.get("fields[reset_score]")).toBe("12");
    expect(body.get("ml-submit")).toBe("1");
    expect(body.get("anticsrf")).toBe("true");
  });

  it("builds the account-scoped subscribe endpoint", () => {
    expect(subscribeEndpoint("123456")).toBe(
      "https://assets.mailerlite.com/jsonp/484845/forms/123456/subscribe",
    );
  });

  it("refuses to submit a form whose numeric id is not yet configured", async () => {
    // ML_FORMS.newsletter.subscribeId is empty until activation (Step 0).
    const result = await subscribeToForm("newsletter", { email: "a@b.pl" });
    expect(result).toEqual({ ok: false, error: "form_not_configured" });
  });
});
