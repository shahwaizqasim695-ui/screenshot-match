import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";
import { reviews } from "@/data/siteContent";
import { SectionHeading } from "./SectionHeading";

export function ReviewsCarousel() {
  const [index, setIndex] = useState(0);
  const total = reviews.length;
  const go = (d: number) => setIndex((i) => (i + d + total) % total);
  const r = reviews[index]!;

  return (
    <section className="bg-ivory py-28 sm:py-36" aria-roledescription="carousel" aria-label="Reader reviews">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading eyebrow="Reader Reviews" title="Words From" accent="Readers" />
        <div className="relative mt-16 border border-gold/40 bg-parchment px-6 py-16 shadow-card sm:px-16 sm:py-20">
          <span aria-hidden className="absolute left-6 top-2 font-display text-[9rem] leading-none text-gold/40 sm:left-10">
            “
          </span>
          <AnimatePresence mode="wait">
            <motion.figure
              key={index}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative text-center"
              aria-live="polite"
            >
              {r.isSample && (
                <span className="inline-block border border-walnut/40 px-3 py-1 text-[0.6rem] uppercase tracking-[0.26em] text-walnut">
                  Sample placeholder
                </span>
              )}
              <blockquote className="mx-auto mt-8 max-w-3xl font-display text-2xl italic leading-snug text-forest sm:text-3xl">
                {r.quote}
              </blockquote>
              <div className="gold-rule mx-auto mt-10 w-20" />
              <figcaption className="mt-6">
                <span className="block font-serif text-lg text-forest">{r.name}</span>
                <span className="mt-1 block text-xs uppercase tracking-[0.2em] text-ink-soft">{r.detail}</span>
              </figcaption>
            </motion.figure>
          </AnimatePresence>

          <div className="mt-12 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous review"
              className="inline-flex h-11 w-11 items-center justify-center border border-gold/60 text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show review ${i + 1}`}
                  aria-current={i === index}
                  className={`h-1.5 transition-all duration-500 ${i === index ? "w-8 bg-gold" : "w-3 bg-gold/35"}`}
                />
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next review"
              className="inline-flex h-11 w-11 items-center justify-center border border-gold/60 text-forest transition-colors hover:bg-forest hover:text-ivory"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-6 text-center text-xs italic text-ink-soft">
          Authentic reader reviews will appear here once they are received.
        </p>
      </div>
    </section>
  );
}
