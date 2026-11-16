import { createFileRoute, Link } from "@tanstack/react-router";
import antiqueDesk from "@/assets/antique-desk.jpg";
import { AuthorPortrait } from "@/components/site/AuthorPortrait";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { Ornament } from "@/components/site/Ornament";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Button } from "@/components/ui/button";
import { featuredBook } from "@/data/books";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Steve Davis — Historical Fiction Author" },
      {
        name: "description",
        content:
          "Meet Steve Davis, the storyteller behind a sweeping historical reflection on the Baby Boomer generation and American life.",
      },
      { property: "og:title", content: "About Steve Davis — Historical Fiction Author" },
      {
        property: "og:description",
        content: "The storyteller behind Concealments, Conspiracies, and Confessions.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="The Storyteller"
        title="Meet"
        accent="Steve Davis"
        description="The storyteller behind a sweeping historical reflection on the Baby Boomer generation, American life, and the extraordinary journeys of Jack and Jennifer."
        image={antiqueDesk}
        imagePosition="center 40%"
      />

      <section className="bg-paper py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          <Reveal className="mx-auto w-full max-w-sm lg:sticky lg:top-32 lg:max-w-none lg:self-start">
            <AuthorPortrait />
          </Reveal>

          <div>
            <Reveal>
              <p className="font-display text-3xl italic leading-snug text-forest sm:text-4xl">
                “{featuredBook.tagline}”
              </p>
              <div className="gold-rule mt-10 w-32" />
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-10 space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>
                  <span className="float-left mr-3 mt-1 font-display text-7xl leading-[0.8] text-walnut">S</span>
                  teve Davis is the author of <em className="font-serif text-forest">{featuredBook.title}</em>, a
                  Midwestern Boomer trilogy that follows Jack Walker and Jennifer Palm — both born in 1946 — through
                  nearly six decades of a changing nation.
                </p>
                <p>
                  Told as a historical reflection and romantic adventure, the trilogy captures the hopes, struggles,
                  discoveries, and contradictions of a generation, from childhood family sagas to secret, mystical
                  adventures.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <aside className="mt-12 border border-dashed border-gold/60 bg-ivory p-8">
                <p className="eyebrow text-walnut">Biography in progress</p>
                <p className="mt-4 leading-relaxed text-ink-soft">
                  Steve's full author biography and portrait will be shared here soon. In the meantime, the best way
                  to know the storyteller is through the story itself.
                </p>
              </aside>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-12 flex flex-col gap-4 sm:flex-row">
                <Button asChild variant="forest" size="xl">
                  <Link to="/books">Explore the Trilogy</Link>
                </Button>
                <Button asChild variant="outline-dark" size="xl">
                  <Link to="/contact">Get in Touch</Link>
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-forest py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <Ornament />
          <Reveal>
            <p className="mt-10 font-display text-3xl font-light italic leading-snug text-on-dark sm:text-5xl">
              “If you are a Boomer and find a little of yourself in these pages, that is no coincidence.”
            </p>
          </Reveal>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
