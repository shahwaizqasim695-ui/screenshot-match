import { createFileRoute, Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import antiqueDesk from "@/assets/antique-desk.jpg";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { reviews } from "@/data/siteContent";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Reader Reviews | Steve Davis" },
      {
        name: "description",
        content: "Words from readers of Concealments, Conspiracies, and Confessions by Steve Davis.",
      },
      { property: "og:title", content: "Reader Reviews | Steve Davis" },
      { property: "og:description", content: "Words from readers of the Midwestern Boomer trilogy." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        eyebrow="Reader Reviews"
        title="Words From"
        accent="Readers"
        description="Reflections from readers who found a little of themselves in these pages."
        image={antiqueDesk}
        imagePosition="center 30%"
      />

      <section className="bg-paper py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal>
            <p className="mx-auto max-w-2xl border border-dashed border-walnut/40 bg-ivory px-6 py-4 text-center text-sm text-walnut">
              The reviews below are sample placeholders. Authentic reader reviews will replace them once received.
            </p>
          </Reveal>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {reviews.map((r, i) => (
              <Reveal key={i} delay={i * 0.1} className={i === 1 ? "md:mt-12" : ""}>
                <figure className="relative h-full border border-gold/40 bg-ivory p-9 shadow-card transition-transform duration-700 hover:-translate-y-1.5">
                  <Quote aria-hidden className="h-8 w-8 text-gold" />
                  {r.isSample && (
                    <span className="mt-6 inline-block border border-walnut/40 px-3 py-1 text-[0.58rem] uppercase tracking-[0.24em] text-walnut">
                      Sample placeholder
                    </span>
                  )}
                  <blockquote className="mt-6 font-display text-2xl italic leading-snug text-forest">{r.quote}</blockquote>
                  <div className="gold-rule mt-8 w-16" />
                  <figcaption className="mt-5">
                    <span className="block font-serif text-forest">{r.name}</span>
                    <span className="mt-1 block text-xs uppercase tracking-[0.18em] text-ink-soft">{r.detail}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-24 text-center">
            <h2 className="text-4xl text-forest sm:text-5xl">
              Have you read the <em className="italic text-walnut">trilogy?</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-ink-soft">
              Steve would love to hear what Jack and Jen's journey meant to you.
            </p>
            <Button asChild variant="forest" size="xl" className="mt-9">
              <Link to="/contact">Share Your Thoughts</Link>
            </Button>
          </Reveal>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
