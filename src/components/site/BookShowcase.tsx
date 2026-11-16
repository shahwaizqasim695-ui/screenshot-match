import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { featuredBook } from "@/data/books";
import { BookMockup } from "./BookMockup";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function BookShowcase() {
  return (
    <section id="featured" className="bg-emerald-glow relative scroll-mt-20 overflow-hidden py-28 sm:py-36">
      <div aria-hidden className="absolute left-0 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-gold/10 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
        <Reveal>
          <BookMockup className="w-[70%] max-w-[400px] sm:w-[55%] lg:w-[80%]" />
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">The Featured Novel</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.12] text-on-dark sm:text-5xl lg:text-[3.4rem]">
              {featuredBook.title}
            </h2>
            <p className="mt-5 font-display text-2xl italic text-gold">{featuredBook.subtitle}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-10 flex items-start gap-6">
              <span aria-hidden className="mt-2 hidden h-28 w-px shrink-0 bg-gold/60 sm:block" />
              <div className="space-y-5 text-base leading-relaxed text-on-dark-soft sm:text-[1.05rem]">
                <p>{featuredBook.synopsis[0]}</p>
                <p>{featuredBook.synopsis[1]}</p>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
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
            <Ornament className="mt-14 justify-start [&>span:first-child]:hidden" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
