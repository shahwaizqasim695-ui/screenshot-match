import { motion } from "framer-motion";
import { featuredBook } from "@/data/books";
import { cn } from "@/lib/utils";

type Props = {
  className?: string | undefined;
  float?: boolean | undefined;
  priority?: boolean | undefined;
};

export function BookMockup({ className, float = true, priority = false }: Props) {
  return (
    <div className={cn("relative mx-auto", className)}>
      <div
        aria-hidden
        className="absolute inset-[-12%] -z-0 rounded-full bg-gold/20 blur-3xl"
      />
      <motion.div
        className="relative"
        animate={float ? { y: [0, -14, 0] } : { y: 0 }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="book-3d shadow-book">
          <img
            src={featuredBook.cover}
            alt={featuredBook.coverAlt}
            width={916}
            height={1386}
            loading={priority ? "eager" : "lazy"}
            fetchPriority={priority ? "high" : "auto"}
            className="relative block h-auto w-full"
          />
          <span className="book-pages" aria-hidden />
        </div>
      </motion.div>
      <div
        aria-hidden
        className="mx-auto mt-8 h-5 w-4/5 rounded-[50%] bg-charcoal/50 blur-xl"
      />
    </div>
  );
}
