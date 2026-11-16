import antiqueDesk from "@/assets/antique-desk.jpg";
import heroImg from "@/assets/hero-countryside.jpg";
import journalImg from "@/assets/journal-keepsakes.jpg";
import sunsetImg from "@/assets/sunset-path.jpg";
import { themes } from "@/data/siteContent";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const layout = [
  { img: sunsetImg, pos: "30% center", cls: "md:col-span-4 md:row-span-2 min-h-[420px] md:min-h-[560px]", alt: "A couple walking hand in hand along a countryside path at sunset" },
  { img: journalImg, pos: "20% 30%", cls: "md:col-span-2 min-h-[270px]", alt: "Vintage family photographs in a keepsake album" },
  { img: null, pos: "", cls: "md:col-span-2 min-h-[270px]", alt: "" },
  { img: heroImg, pos: "60% center", cls: "md:col-span-3 min-h-[320px]", alt: "A columned historic mansion overlooking a river valley at sunset" },
  { img: antiqueDesk, pos: "80% center", cls: "md:col-span-3 min-h-[320px]", alt: "An antique hourglass beside leather-bound books on a walnut desk" },
];

export function ThemesGrid() {
  return (
    <section className="bg-forest relative overflow-hidden py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          tone="dark"
          eyebrow="Story & Themes"
          title="More Than a Story."
          accent="A Reflection of a Generation."
        />
        <div className="mt-20 grid gap-5 md:grid-cols-6">
          {themes.map((t, i) => {
            const l = layout[i]!;
            return (
              <Reveal key={t.title} delay={i * 0.08} className={cn("group relative overflow-hidden border border-gold/25", l.cls)}>
                {l.img ? (
                  <>
                    <img
                      src={l.img}
                      alt={l.alt}
                      loading="lazy"
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.6s] ease-out group-hover:scale-105"
                      style={{ objectPosition: l.pos }}
                    />
                    <div aria-hidden className="bg-quote-overlay absolute inset-0 opacity-90 transition-opacity duration-700 group-hover:opacity-75" />
                  </>
                ) : (
                  <div aria-hidden className="bg-volume absolute inset-0">
                    <div className="absolute right-6 top-6 h-16 w-16 rounded-full bg-sapphire/60 blur-xl" />
                  </div>
                )}
                <div className="relative flex h-full flex-col justify-end p-7 sm:p-9">
                  <span className="font-display text-sm italic text-gold">No. {String(i + 1).padStart(2, "0")}</span>
                  <h3 className={cn("mt-2 font-serif text-on-dark", i === 0 ? "text-4xl sm:text-5xl" : "text-2xl sm:text-3xl")}>
                    {t.title}
                  </h3>
                  <span className="gold-rule mt-4 w-14 transition-all duration-700 group-hover:w-28" />
                  <p className="mt-4 max-w-sm text-on-dark-soft">{t.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
