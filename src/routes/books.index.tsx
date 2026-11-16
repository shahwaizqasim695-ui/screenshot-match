import { createFileRoute, Link } from "@tanstack/react-router";
import antiqueDesk from "@/assets/antique-desk.jpg";
import { BookMockup } from "@/components/site/BookMockup";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { RetailerLinks } from "@/components/site/RetailerLinks";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VolumePlaceholder } from "@/components/site/VolumePlaceholder";
import { Button } from "@/components/ui/button";
import { featuredBook, volumes } from "@/data/books";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/books/")({
  head: () => ({
    meta: [
      { title: "The Trilogy — Concealments, Conspiracies, and Confessions | Steve Davis" },
      {
        name: "description",
        content:
          "One generation, three volumes, a lifetime of stories. Explore Steve Davis's Midwestern Boomer trilogy.",
      },
      { property: "og:title", content: "The Trilogy | Steve Davis" },
      {
        property: "og:description",
        content: "One Generation. Three Volumes. A Lifetime of Stories.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BooksPage,
});

function BooksPage() {
  return (
    <>
      <PageHero
        eyebrow="The Trilogy"
        title="One Generation. Three Volumes."
        accent="A Lifetime of Stories."
        description="Follow Jack and Jennifer through almost six decades of changing American history, personal discoveries, romance, disappointment, and unexpected adventure."
        image={antiqueDesk}
      />

      <section className="bg-emerald-glow py-28 sm:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <Reveal>
            <BookMockup className="w-[65%] max-w-[360px] sm:w-[50%] lg:w-[70%]" />
          </Reveal>
          <Reveal delay={0.15}>
            <p className="eyebrow">The Complete Saga</p>
            <h2 className="mt-6 font-serif text-4xl leading-tight text-on-dark sm:text-5xl">{featuredBook.title}</h2>
            <p className="mt-4 font-display text-2xl italic text-gold">{featuredBook.subtitle}</p>
            <p className="mt-8 leading-relaxed text-on-dark-soft">{featuredBook.synopsis[2]}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <Link to="/books/$slug" params={{ slug: featuredBook.slug }}>
                  Discover the Book
                </Link>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <Link to="/books/$slug" params={{ slug: featuredBook.slug }} hash="buy">
                  Buy the Book
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-28 sm:py-36">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <SectionHeading eyebrow="The Three Volumes" title="A Literary Journey in" accent="Three Movements" />
          <div className="mt-20 space-y-24 sm:space-y-32">
            {volumes.map((v, i) => (
              <article
                key={v.number}
                className={cn("grid items-center gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-20", i % 2 === 1 && "md:grid-cols-[1.2fr_0.8fr]")}
              >
                <Reveal className={cn("mx-auto w-full max-w-xs", i % 2 === 1 && "md:order-2")}>
                  <VolumePlaceholder volume={v} className="shadow-book" />
                </Reveal>
                <Reveal delay={0.15}>
                  <p className="font-display text-8xl font-light leading-none text-gold/50">{v.numeral}</p>
                  <p className="eyebrow mt-4">Volume {v.number}</p>
                  <h3 className="mt-4 font-serif text-3xl leading-snug text-forest sm:text-4xl">{v.title}</h3>
                  <p className="mt-3 font-display text-xl italic text-walnut">{v.theme}</p>
                  <div className="gold-rule mt-7 w-24" />
                  <p className="mt-7 max-w-lg leading-relaxed text-ink-soft">{v.description}</p>
                  <Button asChild variant="outline-dark" size="xl" className="mt-9">
                    <Link to="/books/$slug" params={{ slug: featuredBook.slug }} hash={`volume-${v.number}`}>
                      Explore Volume {v.numeral}
                    </Link>
                  </Button>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ivory py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading eyebrow="Where to Buy" title="Bring the Story" accent="Home" />
          <div className="mt-12">
            <RetailerLinks />
          </div>
        </div>
      </section>
    </>
  );
}
