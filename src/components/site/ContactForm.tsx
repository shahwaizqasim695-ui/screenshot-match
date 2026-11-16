import { Loader2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { integrations } from "@/data/siteContent";
import { contactSchema, fieldErrors, submitToEndpoint, type SubmitResult } from "@/lib/forms";
import { cn } from "@/lib/utils";

const empty = { name: "", email: "", subject: "", message: "" };
type Field = keyof typeof empty;

const statusText: Record<SubmitResult, string> = {
  sent: "Thank you — your message has been sent. Steve will be in touch.",
  "not-configured":
    "Message delivery isn't connected yet, so this note has not been sent. Please check back soon.",
  error: "Your message couldn't be sent. Please try again in a moment.",
};

export function ContactForm() {
  const id = useId();
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<SubmitResult | null>(null);
  const [pending, setPending] = useState(false);

  const set = (k: Field) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [k]: e.target.value }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus(null);
    const v = fieldErrors(contactSchema, values);
    setErrors(v.errors);
    if (!v.ok) return;
    setPending(true);
    const result = await submitToEndpoint(integrations.contactEndpoint, v.data);
    setPending(false);
    setStatus(result);
    if (result === "sent") setValues(empty);
  }

  const fieldProps = (k: Field) => ({
    id: `${id}-${k}`,
    name: k,
    value: values[k],
    onChange: set(k),
    "aria-invalid": errors[k] ? true : undefined,
    "aria-describedby": errors[k] ? `${id}-${k}-error` : undefined,
    className: "field-parchment",
  });

  const label = (k: Field, text: string) => (
    <label htmlFor={`${id}-${k}`} className="mb-2 block text-[0.68rem] uppercase tracking-[0.22em] text-walnut">
      {text}
    </label>
  );
  const err = (k: Field) =>
    errors[k] ? (
      <p id={`${id}-${k}-error`} role="alert" className="mt-2 text-sm text-destructive">
        {errors[k]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          {label("name", "Name")}
          <input type="text" autoComplete="name" maxLength={100} {...fieldProps("name")} />
          {err("name")}
        </div>
        <div>
          {label("email", "Email")}
          <input type="email" autoComplete="email" maxLength={255} {...fieldProps("email")} />
          {err("email")}
        </div>
      </div>
      <div>
        {label("subject", "Subject")}
        <input type="text" maxLength={150} {...fieldProps("subject")} />
        {err("subject")}
      </div>
      <div>
        {label("message", "Message")}
        <textarea rows={7} maxLength={2000} {...fieldProps("message")} className={cn("field-parchment resize-y")} />
        {err("message")}
      </div>
      <Button type="submit" variant="forest" size="xl" disabled={pending}>
        {pending && <Loader2 className="animate-spin" />}
        Send Message
      </Button>
      {status && (
        <p
          role="status"
          className={cn(
            "border px-5 py-4 text-sm leading-relaxed",
            status === "error" ? "border-destructive/40 text-destructive" : "border-gold/50 bg-parchment text-ink",
          )}
        >
          {statusText[status]}
        </p>
      )}
    </form>
  );
}
