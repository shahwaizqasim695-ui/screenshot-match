import type { Volume } from "@/data/books";
import { cn } from "@/lib/utils";

/** Editorial stand-in until official volume covers are supplied. */
export function VolumePlaceholder({ volume, className }: { volume: Volume; className?: string | undefined }) {
  return (
    <div
      className={cn(
        "bg-volume gold-frame relative flex aspect-[2/3] flex-col items-center justify-between overflow-hidden p-8 text-center",
        className,
      )}
      role="img"
      aria-label={`Volume ${volume.number} placeholder — official cover coming soon`}
    >
      <div aria-hidden className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gold/10 blur-2xl" />
      <p className="eyebrow relative pt-4 text-[0.6rem]">Volume</p>
      <div className="relative">
        <p className="font-display text-7xl font-light text-gold-gradient">{volume.numeral}</p>
        <div className="gold-rule mx-auto my-5 w-16" />
        <p className="font-serif text-base leading-snug text-on-dark sm:text-lg">{volume.title}</p>
      </div>
      <p className="relative pb-4 text-[0.6rem] uppercase tracking-[0.3em] text-on-dark-soft/70">
        Cover coming soon
      </p>
    </div>
  );
}
