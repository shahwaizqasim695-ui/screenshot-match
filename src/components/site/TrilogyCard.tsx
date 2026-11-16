import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { featuredBook, type Volume } from "@/data/books";
import { staggerChild } from "./Reveal";
import { VolumePlaceholder } from "./VolumePlaceholder";

export function TrilogyCard({ volume }: { volume: Volume }) {
  return (
    <motion.article
      variants={staggerChild}
      className="group relative flex flex-col border border-gold/30 bg-ivory p-5 transition-all duration-700 hover:-translate-y-2 hover:border-gold hover:shadow-card sm:p-6"
    >
      <div className="overflow-hidden">
        <VolumePlaceholder
          volume={volume}
          className="transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col px-1 pt-7">
        <p className="eyebrow text-[0.62rem]">Volume {volume.numeral}</p>
        <h3 className="mt-3 font-serif text-2xl leading-snug text-forest">{volume.title}</h3>
        <p className="mt-2 font-display text-lg italic text-walnut">{volume.theme}</p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-soft">{volume.description}</p>
        <Link
          to="/books/$slug"
          params={{ slug: featuredBook.slug }}
          hash={`volume-${volume.number}`}
          className="mt-7 inline-flex items-center gap-3 self-start text-[0.7rem] uppercase tracking-[0.22em] text-forest"
          aria-label={`Explore Volume ${volume.number}: ${volume.title}`}
        >
          <span className="link-underline">Explore</span>
          <ArrowRight className="h-4 w-4 text-gold transition-transform duration-500 group-hover:translate-x-1.5" />
        </Link>
      </div>
    </motion.article>
  );
}
