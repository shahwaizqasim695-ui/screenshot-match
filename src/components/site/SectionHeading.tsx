import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string | undefined;
  title: string;
  accent?: string | undefined;
  description?: string | undefined;
  align?: "left" | "center" | undefined;
  tone?: "light" | "dark" | undefined;
  className?: string | undefined;
};

export function SectionHeading({
  eyebrow,
  title,
  accent,
  description,
  align = "center",
  tone = "light",
  className,
}: Props) {
  const dark = tone === "dark";
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className,
      )}
    >
      {eyebrow && <p className="eyebrow mb-5">{eyebrow}</p>}
      <h2
        className={cn(
          "text-4xl leading-[1.05] sm:text-5xl lg:text-6xl",
          dark ? "text-on-dark" : "text-forest",
        )}
      >
        {title}
        {accent && (
          <>
            {" "}
            <em className="text-gold-gradient italic">{accent}</em>
          </>
        )}
      </h2>
      <div
        className={cn(
          "gold-rule mt-7 w-32",
          align === "center" ? "mx-auto" : "",
        )}
      />
      {description && (
        <p
          className={cn(
            "mt-7 text-base leading-relaxed sm:text-lg",
            dark ? "text-on-dark-soft" : "text-ink-soft",
          )}
        >
          {description}
        </p>
      )}
    </Reveal>
  );
}
