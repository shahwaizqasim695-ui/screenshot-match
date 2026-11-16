import { ArrowUpRight } from "lucide-react";
import { featuredBook } from "@/data/books";
import { cn } from "@/lib/utils";

export function RetailerLinks({ tone = "light" }: { tone?: "light" | "dark" | undefined }) {
  const dark = tone === "dark";
  return (
    <ul className="grid gap-3 sm:grid-cols-3">
      {featuredBook.retailers.map((r) => (
        <li key={r.name}>
          {r.url ? (
            <a
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "group flex items-center justify-between border px-5 py-4 transition-colors duration-500",
                dark
                  ? "border-gold/40 text-on-dark hover:bg-gold hover:text-charcoal"
                  : "border-gold/50 text-forest hover:bg-forest hover:text-ivory",
              )}
            >
              <span className="font-serif">{r.name}</span>
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ) : (
            <div
              className={cn(
                "flex items-center justify-between border border-dashed px-5 py-4",
                dark ? "border-gold/30 text-on-dark-soft" : "border-gold/50 text-ink-soft",
              )}
            >
              <span className="font-serif">{r.name}</span>
              <span className="text-[0.6rem] uppercase tracking-[0.2em]">Link coming soon</span>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
}
