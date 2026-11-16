import { z } from "zod";

export const newsletterSchema = z.object({
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address.").max(255),
});

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Please enter your name.").max(100),
  email: z.string().trim().min(1, "Please enter your email address.").email("Please enter a valid email address.").max(255),
  subject: z.string().trim().min(1, "Please add a subject.").max(150),
  message: z.string().trim().min(10, "Your message should be at least 10 characters.").max(2000),
});

export type SubmitResult = "sent" | "not-configured" | "error";

/**
 * Sends form data to a configured endpoint. With no endpoint configured it
 * never pretends to succeed — it reports "not-configured".
 */
export async function submitToEndpoint(
  endpoint: string,
  data: Record<string, string>,
  fetcher: typeof fetch = fetch,
): Promise<SubmitResult> {
  if (!endpoint.trim()) return "not-configured";
  try {
    const res = await fetcher(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return res.ok ? "sent" : "error";
  } catch {
    return "error";
  }
}

export function fieldErrors<T extends z.ZodTypeAny>(schema: T, data: unknown) {
  const parsed = schema.safeParse(data);
  if (parsed.success) return { ok: true as const, data: parsed.data as z.infer<T>, errors: {} as Record<string, string> };
  const errors: Record<string, string> = {};
  for (const issue of parsed.error.issues) {
    const key = String(issue.path[0] ?? "form");
    if (!errors[key]) errors[key] = issue.message;
  }
  return { ok: false as const, data: null, errors };
}
