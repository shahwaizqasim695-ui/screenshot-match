import { motion } from "framer-motion";
import { volumes } from "@/data/books";
import { staggerParent } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { TrilogyCard } from "./TrilogyCard";

export function TrilogySection() {
  return (
    <section className="bg-paper py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Trilogy"
          title="One Generation. Three Volumes."
          accent="A Lifetime of Stories."
          description="Follow Jack and Jennifer through almost six decades of changing American history, personal discoveries, romance, disappointment, and unexpected adventure."
        />
        <motion.div
          className="mt-20 grid gap-8 md:grid-cols-3 lg:gap-10"
          variants={staggerParent}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
        >
          {volumes.map((v, i) => (
            <div key={v.number} className={i === 1 ? "md:mt-14" : ""}>
              <TrilogyCard volume={v} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
