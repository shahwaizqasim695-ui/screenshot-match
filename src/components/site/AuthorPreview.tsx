import { Link } from "@tanstack/react-router";
import { Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { featuredBook } from "@/data/books";
import { AuthorPortrait } from "./AuthorPortrait";
import { Reveal } from "./Reveal";

export function AuthorPreview() {
  return (
    <section className="bg-paper relative overflow-hidden border-t border-gold/25 py-28 sm:py-36">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="mx-auto w-full max-w-sm lg:max-w-none">
          <AuthorPortrait />
        </Reveal>
        <div>
          <Reveal>
            <p className="eyebrow">The Storyteller</p>
            <h2 className="mt-6 text-5xl text-forest sm:text-6xl lg:text-7xl">
              Meet <em className="italic text-walnut">Steve Davis</em>
            </h2>
            <div className="gold-rule mt-8 w-32" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
              Explore the storyteller behind a sweeping historical reflection on the Baby Boomer
              generation, American life, and the extraordinary journeys of Jack and Jennifer.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <figure className="relative mt-12 max-w-xl border-l border-gold pl-8">
              <Quote aria-hidden className="absolute -left-4 -top-3 h-8 w-8 bg-parchment p-1 text-gold" />
              <blockquote className="font-display text-2xl italic leading-snug text-forest sm:text-3xl">
                {featuredBook.tagline}
              </blockquote>
              <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.26em] text-walnut">
                From the book jacket
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.3}>
            <Button asChild variant="forest" size="xl" className="mt-12">
              <Link to="/about">Read the Author's Story</Link>
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
