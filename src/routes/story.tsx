import { createFileRoute, Link } from "@tanstack/react-router";
import journalImg from "@/assets/journal-keepsakes.jpg";
import sunsetImg from "@/assets/sunset-path.jpg";
import { HistoricalTimeline } from "@/components/site/HistoricalTimeline";
import { PageHero } from "@/components/site/PageHero";
import { QuoteSection } from "@/components/site/QuoteSection";
import { Reveal } from "@/components/site/Reveal";
import { ThemesGrid } from "@/components/site/ThemesGrid";
import { Button } from "@/components/ui/button";
import { featuredBook } from "@/data/books";

export const Route = createFileRoute("/story")({
  head: () => ({
    meta: [
      { title: "The Story of Jack and Jen | Steve Davis" },
      {
        name: "description",
        content:
          "Born in 1946, Jack Walker and Jennifer Palm live parallel lives through a changing America until fate brings them together on New Year's Eve.",
      },
      { property: "og:title", content: "The Story of Jack and Jen | Steve Davis" },
      {
        property: "og:description",
        content: "A lifetime shaped by a changing America — the story behind the trilogy.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: StoryPage,
});

function StoryPage() {
  return (
    <>
      <PageHero
        eyebrow="The Story"
        title="Two Lives. One Generation."
        accent="A Single Crossroads."
        description="Born in 1946, Jack Walker and Jennifer Palm grow up alongside a nation in transformation — each following a different path toward the same New Year's Eve."
        image={sunsetImg}
        imagePosition="30% center"
      />

      <section className="bg-paper py-28 sm:py-36">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="group relative">
              <div aria-hidden className="absolute -right-5 -top-5 h-full w-full border border-gold/60" />
              <div className="relative overflow-hidden shadow-card">
                <img
                  src={journalImg}
                  alt="Vintage photographs, letters and a sapphire pendant in an old keepsake album"
                  width={1280}
                  height={1280}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                />
              </div>
            </div>
          </Reveal>
          <div>
            <Reveal>
              <p className="eyebrow">Jack Walker &amp; Jennifer Palm</p>
              <h2 className="mt-6 text-4xl leading-tight text-forest sm:text-5xl">
                Parallel lives against the backdrop of <em className="italic text-walnut">an evolving nation</em>
              </h2>
              <div className="gold-rule mt-8 w-32" />
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 space-y-6 text-lg leading-relaxed text-ink-soft">
                <p>{featuredBook.synopsis[0]}</p>
                <p>{featuredBook.synopsis[1]}</p>
              </div>
              <Button asChild variant="forest" size="xl" className="mt-10">
                <Link to="/books">Explore the Trilogy</Link>
              </Button>
            </Reveal>
          </div>
        </div>
      </section>

      <HistoricalTimeline />
      <ThemesGrid />
      <QuoteSection />
    </>
  );
}
