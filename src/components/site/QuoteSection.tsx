import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import sunsetImg from "@/assets/sunset-path.jpg";
import { quote } from "@/data/siteContent";
import { Ornament } from "./Ornament";
import { Reveal } from "./Reveal";

export function QuoteSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} className="relative flex min-h-[80vh] items-center overflow-hidden bg-charcoal py-32">
      <motion.img
        src={sunsetImg}
        alt=""
        aria-hidden
        loading="lazy"
        style={{ y }}
        className="absolute inset-0 h-[124%] w-full -translate-y-[12%] object-cover object-[35%_center]"
      />
      <div aria-hidden className="bg-quote-overlay absolute inset-0" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        <Ornament />
        <Reveal delay={0.1}>
          <blockquote className="mt-12 font-display text-3xl font-light italic leading-[1.25] text-on-dark sm:text-5xl lg:text-6xl">
            “{quote.line}”
          </blockquote>
        </Reveal>
        <Reveal delay={0.5}>
          <p className="mt-12 font-serif text-xl text-gold-gradient sm:text-2xl">{quote.coda}</p>
        </Reveal>
      </div>
    </section>
  );
}
