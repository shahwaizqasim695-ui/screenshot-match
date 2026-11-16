import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import journalImg from "@/assets/journal-keepsakes.jpg";
import { timeline } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function HistoricalTimeline() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 75%", "end 60%"] });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="bg-paper relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="A Journey Through Generations"
          title="A Lifetime Shaped by a"
          accent="Changing America"
          description="Turn the pages of Jack and Jen's story — a narrative journey across nearly six decades."
        />

        <Reveal className="mx-auto mt-16 max-w-3xl">
          <div className="group relative overflow-hidden border border-gold/40 p-2 shadow-card">
            <img
              src={journalImg}
              alt="An open keepsake journal with vintage family photographs, letters tied with twine, pressed flowers, and a sapphire pendant on a silver chain"
              width={1280}
              height={1280}
              loading="lazy"
              className="aspect-[21/9] w-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
            />
          </div>
        </Reveal>

        <ol ref={listRef} className="relative mx-auto mt-20 max-w-5xl">
          <span aria-hidden className="absolute left-4 top-0 h-full w-px bg-gold/25 md:left-1/2" />
          <motion.span
            aria-hidden
            style={{ scaleY: lineScale }}
            className="absolute left-4 top-0 h-full w-px origin-top bg-gold md:left-1/2"
          />
          {timeline.map((point, i) => {
            const right = i % 2 === 1;
            return (
              <li key={point.title} className="relative pb-14 pl-14 last:pb-0 md:grid md:grid-cols-2 md:gap-16 md:pl-0">
                <span
                  aria-hidden
                  className="absolute left-4 top-2 h-3 w-3 -translate-x-1/2 rotate-45 border border-gold bg-parchment md:left-1/2"
                />
                <Reveal
                  y={20}
                  className={cn(
                    right ? "md:col-start-2" : "md:col-start-1 md:text-right",
                  )}
                >
                  <p className="font-display text-xl italic text-walnut">{point.marker}</p>
                  <h3 className="mt-2 font-serif text-2xl text-forest sm:text-3xl">{point.title}</h3>
                  <p className={cn("mt-3 max-w-md leading-relaxed text-ink-soft", !right && "md:ml-auto")}>
                    {point.text}
                  </p>
                </Reveal>
              </li>
            );
          })}
        </ol>
        <p className="mx-auto mt-16 max-w-xl text-center text-xs italic text-ink-soft/80">
          The timeline traces the novel's narrative arc rather than verified dates for individual fictional events.
        </p>
      </div>
    </section>
  );
}
