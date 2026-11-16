import { cn } from "@/lib/utils";

/** Small hourglass ornament flanked by gold rules. */
export function Ornament({ className }: { className?: string | undefined }) {
  return (
    <div className={cn("flex items-center justify-center gap-4 text-gold", className)} aria-hidden>
      <span className="gold-rule w-16" />
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M1 1h12M1 21h12M2 1c0 6 10 6 10 10S2 15 2 21M12 1c0 6-10 6-10 10s10 4 10 10" />
      </svg>
      <span className="gold-rule w-16" />
    </div>
  );
}
