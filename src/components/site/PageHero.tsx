import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

type Props = {
  eyebrow: string;
  title: string;
  accent?: string | undefined;
  description?: string | undefined;
  image: string;
  imagePosition?: string | undefined;
  children?: ReactNode;
};

export function PageHero({ eyebrow, title, accent, description, image, imagePosition, children }: Props) {
  return (
    <section className="relative overflow-hidden bg-forest">
      <img
        src={image}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-cover opacity-45"
        style={{ objectPosition: imagePosition ?? "center" }}
      />
      <div aria-hidden className="bg-hero-overlay absolute inset-0" />
      <div aria-hidden className="absolute inset-0 bg-forest/55 lg:hidden" />
      <div aria-hidden className="bg-hero-fade absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-44 sm:px-8 sm:pb-28 sm:pt-52">
        <motion.p
          className="eyebrow"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-6 max-w-4xl text-5xl leading-[1.04] text-on-dark sm:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease }}
        >
          {title}
          {accent && (
            <>
              {" "}
              <em className="text-gold-gradient font-light italic">{accent}</em>
            </>
          )}
        </motion.h1>
        <motion.div
          className="gold-rule mt-8 w-36 origin-left"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease }}
        />
        {description && (
          <motion.p
            className="mt-8 max-w-2xl text-base leading-relaxed text-on-dark-soft sm:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
          >
            {description}
          </motion.p>
        )}
        {children}
      </div>
    </section>
  );
}
