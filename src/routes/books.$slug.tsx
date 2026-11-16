import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import heroImg from "@/assets/hero-countryside.jpg";
import { BookMockup } from "@/components/site/BookMockup";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { Ornament } from "@/components/site/Ornament";
import { Reveal } from "@/components/site/Reveal";
import { RetailerLinks } from "@/components/site/RetailerLinks";
import { SectionHeading } from "@/components/site/SectionHeading";
import { VolumePlaceholder } from "@/components/site/VolumePlaceholder";
import { Button } from "@/components/ui/button";
import { getBookBySlug, volumes } from "@/data/books";

export const Route = createFileRoute("/books/$slug")({
  loader: ({ params }) => {
    const book = getBookBySlug(params.slug);
    if (!book) throw notFound();
    return { book };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Book not found | Steve Davis" }, { name: "robots", content: "noindex" }] };
    }
    const { book } = loaderData;
    return {
      meta: [
        { title: `${book.title} — ${book.subtitle} | Steve Davis` },
        { name: "description", content: book.short },
        { property: "og:title", content: `${book.title} by Steve Davis` },
        { property: "og:description", content: book.short },
        { property: "og:type", content: "book" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="bg-emerald-glow flex min-h-[80vh] flex-col items-center justify-center px-5 pb-20 pt-36 text-center">
      <h1 className="text-5xl text-on-dark">This volume isn't on the shelf</h1>
      <p className="mt-4 text-on-dark-soft">We couldn't find that book.</p>
      <Button asChild variant="gold" size="xl" className="mt-8">
        <Link to="/books">View the Trilogy</Link>
      </Button>
    </div>
  ),
  component: BookDetailPage,
});

function BookDetailPage() {
  const { book } = Route.useLoaderData();
  return (
    <>
      <section className="relative overflow-hidden bg-forest">
        <img src={heroImg} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-35" />
        <div aria-hidden className="bg-hero-overlay absolute inset-0" />
        <div aria-hidden className="bg-hero-fade absolute inset-0" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 pb-28 pt-40 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-44">
          <Reveal>
            <Link
              to="/books"
              className="inline-flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.24em] text-on-dark-soft hover:text-champagne"
            >
              <ArrowLeft className="h-4 w-4" /> The Trilogy
            </Link>
            <p className="eyebrow mt-10">{book.genre}</p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.08] text-on-dark sm:text-6xl">{book.title}</h1>
            <p className="mt-5 font-display text-2xl italic text-gold sm:text-3xl">{book.subtitle}</p>
            <div className="gold-rule mt-9 w-36" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-on-dark-soft">{book.short}</p>
            <dl className="mt-10 grid max-w-md grid-cols-2 gap-6 border-t border-gold/25 pt-8 text-sm">
              <div>
                <dt className="eyebrow text-[0.6rem]">Author</dt>
                <dd className="mt-2 font-serif text-on-dark">{book.author}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem]">Publisher</dt>
                <dd className="mt-2 font-serif text-on-dark">{book.publisher}</dd>
              </div>
            </dl>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button asChild variant="gold" size="xl">
                <a href="#buy">Buy the Book</a>
              </Button>
              <Button asChild variant="outline-light" size="xl">
                <a href="#volumes">The Three Volumes</a>
              </Button>
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <BookMockup priority className="w-[70%] max-w-[400px] sm:w-[55%] lg:w-[85%]" />
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-28 sm:py-32">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <Reveal>
            <p className="eyebrow text-center">From the Book Jacket</p>
            <p className="mt-8 text-center font-display text-3xl italic leading-snug text-forest sm:text-4xl">
              {book.tagline}
            </p>
            <Ornament className="my-12" />
          </Reveal>
          <div className="space-y-7 text-lg leading-[1.85] text-ink-soft">
            {book.synopsis.map((p, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className={i === 0 ? "first-letter:float-left first-letter:mr-3 first-letter:font-display first-letter:text-7xl first-letter:leading-[0.8] first-letter:text-walnut" : ""}>
                  {p}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="volumes" className="scroll-mt-24 bg-ivory py-28 sm:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading eyebrow="The Three Volumes" title="One Life Story," accent="Told in Three Parts" />
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {volumes.map((v, i) => (
              <Reveal key={v.number} delay={i * 0.1}>
                <article id={`volume-${v.number}`} className="scroll-mt-32">
                  <VolumePlaceholder volume={v} className="shadow-card" />
                  <h3 className="mt-7 font-serif text-2xl leading-snug text-forest">{v.title}</h3>
                  <p className="mt-2 font-display text-lg italic text-walnut">{v.theme}</p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-soft">{v.description}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="buy" className="bg-emerald-glow scroll-mt-20 py-28">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <SectionHeading tone="dark" eyebrow="Where to Buy" title="Bring the Story" accent="Home" />
          <div className="mt-12">
            <RetailerLinks tone="dark" />
          </div>
        </div>
      </section>

      <NewsletterSection />
    </>
  );
}
