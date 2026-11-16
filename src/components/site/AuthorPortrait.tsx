import { cn } from "@/lib/utils";

/** Framed portrait placeholder until a real author photograph is supplied. */
export function AuthorPortrait({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("relative", className)}>
      <div aria-hidden className="absolute -left-5 -top-5 h-full w-full border border-gold/60" />
      <div
        role="img"
        aria-label="Author portrait placeholder — photograph of Steve Davis coming soon"
        className="bg-volume gold-frame relative flex aspect-[4/5] flex-col items-center justify-center overflow-hidden text-center shadow-card"
      >
        <div aria-hidden className="absolute inset-x-0 top-0 h-1/2 bg-gold/10 blur-3xl" />
        <span className="relative font-display text-8xl font-light italic text-gold-gradient sm:text-9xl">
          SD
        </span>
        <span className="gold-rule relative my-6 w-20" />
        <span className="relative text-[0.62rem] uppercase tracking-[0.32em] text-on-dark-soft/80">
          Author portrait coming soon
        </span>
      </div>
    </div>
  );
}
