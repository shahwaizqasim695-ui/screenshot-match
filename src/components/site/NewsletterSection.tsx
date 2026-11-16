import { Loader2 } from "lucide-react";
import { useId, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { integrations } from "@/data/siteContent";
import { fieldErrors, newsletterSchema, submitToEndpoint, type SubmitResult } from "@/lib/forms";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

const messages: Record<SubmitResult, string> = {
  sent: "Thank you — you're on the list. Watch your inbox for news from the author's world.",
  "not-configured":
    "Thank you for your interest. The mailing list isn't connected yet, so your address has not been saved — please check back soon.",
  error: "Something went wrong and your address wasn't added. Please try again in a moment.",
};

export function NewsletterSection() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [status, setStatus] = useState<SubmitResult | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus(null);
    const v = fieldErrors(newsletterSchema, { email });
    if (!v.ok) {
      setError(v.errors["email"] ?? "Please enter a valid email address.");
      return;
    }
    setError(null);
    setPending(true);
    const result = await submitToEndpoint(integrations.newsletterEndpoint, v.data);
    setPending(false);
    setStatus(result);
    if (result === "sent") setEmail("");
  }

  return (
    <section className="bg-emerald-glow relative overflow-hidden py-28 sm:py-32">
      <div aria-hidden className="absolute inset-6 border border-gold/20 sm:inset-10" />
      <div className="relative mx-auto max-w-3xl px-5 text-center sm:px-8">
        <Reveal>
          <Ornament />
          <h2 className="mt-10 text-4xl text-on-dark sm:text-5xl lg:text-6xl">
            Stay Close to <em className="text-gold-gradient italic">the Story</em>
          </h2>
          <p className="mx-auto mt-6 max-w-xl leading-relaxed text-on-dark-soft">
            Receive news about Steve Davis, the trilogy, book announcements, and updates from the author's world.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <form onSubmit={onSubmit} noValidate className="mx-auto mt-12 max-w-xl">
            <div className="flex flex-col gap-3 sm:flex-row">
              <label htmlFor={`${id}-email`} className="sr-only">
                Email address
              </label>
              <input
                id={`${id}-email`}
                type="email"
                autoComplete="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={error ? true : undefined}
                aria-describedby={error ? `${id}-error` : undefined}
                className="field-parchment flex-1 rounded-none bg-parchment"
              />
              <Button type="submit" variant="gold" size="xl" disabled={pending}>
                {pending && <Loader2 className="animate-spin" />}
                Join the Mailing List
              </Button>
            </div>
            {error && (
              <p id={`${id}-error`} role="alert" className="mt-3 text-left text-sm text-champagne">
                {error}
              </p>
            )}
            {status && (
              <p role="status" className="mt-6 border border-gold/30 bg-forest/60 px-5 py-4 text-sm leading-relaxed text-on-dark-soft">
                {messages[status]}
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}
