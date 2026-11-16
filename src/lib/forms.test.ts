import { describe, expect, it, vi } from "vitest";
import { contactSchema, fieldErrors, newsletterSchema, submitToEndpoint } from "./forms";

describe("form delivery", () => {
  it("never reports success when no delivery endpoint is configured", async () => {
    const fetcher = vi.fn();
    const result = await submitToEndpoint("", { email: "reader@example.com" }, fetcher as unknown as typeof fetch);
    expect(result).toBe("not-configured");
    expect(fetcher).not.toHaveBeenCalled();
  });

  it("reports an error when the endpoint rejects the submission", async () => {
    const fetcher = vi.fn().mockResolvedValue({ ok: false });
    const result = await submitToEndpoint("https://example.com/hook", { a: "b" }, fetcher as unknown as typeof fetch);
    expect(result).toBe("error");
  });
});

describe("form validation", () => {
  it("rejects an invalid newsletter email", () => {
    expect(fieldErrors(newsletterSchema, { email: "not-an-email" }).ok).toBe(false);
  });

  it("requires a contact message of at least 10 characters", () => {
    const r = fieldErrors(contactSchema, { name: "A", email: "a@b.co", subject: "Hi", message: "short" });
    expect(r.errors["message"]).toBeDefined();
  });
});
