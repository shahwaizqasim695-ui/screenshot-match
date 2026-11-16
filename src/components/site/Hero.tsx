import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useRef } from "react";
import heroImg from "@/assets/hero-countryside.jpg";
import { Button } from "@/components/ui/button";
import { hero } from "@/data/siteContent";
import { BookMockup } from "./BookMockup";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-forest"
      aria-labelledby="hero-heading"
    >
      <motion.div className="absolute inset-0 scale-110" style={{ y: bgY }} aria-hidden>
        <img
          src={heroImg}
          alt=""
          width={1920}
          height={1088}
          fetchPriority="high"
          className="h-full w-full object-cover object-[70%_center]"
        />
      </motion.div>
      <div aria-hidden className="bg-hero-overlay absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-forest/55 lg:hidden" />
      <div aria-hidden className="bg-hero-fade absolute inset-0" />

      <motion.div
        style={{ opacity: fade }}
        className="relative mx-auto grid w-full max-w-7xl items-center gap-14 px-5 pb-24 pt-36 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10 lg:pt-32"
      >
        <div className="max-w-2xl">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease }}
          >
            {hero.eyebrow}
          </motion.p>
          <h1
            id="hero-heading"
            className="mt-7 text-5xl leading-[1.02] text-on-dark sm:text-6xl lg:text-7xl xl:text-[5.4rem]"
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.35, ease }}
            >
              {hero.headingLead}
            </motion.span>
            <motion.em
              className="text-gold-gradient mt-2 block font-light italic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease }}
            >
              {hero.headingAccent}
            </motion.em>
          </h1>
          <motion.div
            className="gold-rule mt-9 w-40 origin-left"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, delay: 0.9, ease }}
          />
          <motion.p
            className="mt-8 max-w-xl text-base leading-relaxed text-on-dark-soft sm:text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
          >
            {hero.description}
          </motion.p>
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2, ease }}
          >
            <Button asChild variant="gold" size="xl">
              <Link to="/books">Explore the Trilogy</Link>
            </Button>
            <Button asChild variant="outline-light" size="xl">
              <Link to="/story">Discover the Story</Link>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40, rotate: 2 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.6, delay: 0.5, ease }}
        >
          <BookMockup priority className="w-[68%] max-w-[380px] sm:w-[52%] lg:w-[82%]" />
        </motion.div>
      </motion.div>

      <motion.a
        href="#featured"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-on-dark-soft sm:flex"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        aria-label="Scroll to the featured novel"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em]">Scroll</span>
        <motion.span animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="h-4 w-4 text-gold" />
        </motion.span>
      </motion.a>
    </section>
  );
}
