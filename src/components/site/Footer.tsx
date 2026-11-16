import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, BookOpen, Twitter } from "lucide-react";
import { footerNav, site, socialLinks } from "@/data/siteContent";
import { Ornament } from "./Ornament";

const socialMeta = [
  { key: "facebook", label: "Facebook", Icon: Facebook },
  { key: "instagram", label: "Instagram", Icon: Instagram },
  { key: "x", label: "X (Twitter)", Icon: Twitter },
  { key: "goodreads", label: "Goodreads", Icon: BookOpen },
] as const;

export function Footer() {
  const socials = socialMeta.filter((s) => socialLinks[s.key]);
  return (
    <footer className="relative overflow-hidden bg-forest text-on-dark">
      <div className="gold-rule" />
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
        <div className="flex flex-col items-center text-center">
          <p className="font-display text-4xl tracking-[0.3em] sm:text-5xl">{site.name.toUpperCase()}</p>
          <p className="mt-3 font-display text-lg italic text-gold">{site.role}</p>
          <Ornament className="my-8" />
          <p className="font-serif text-lg text-on-dark-soft sm:text-xl">{site.tagline}</p>
        </div>

        <nav aria-label="Footer" className="mt-14">
          <ul className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {footerNav.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="link-underline text-[0.72rem] uppercase tracking-[0.22em] text-on-dark/80 hover:text-champagne"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {socials.length > 0 && (
          <ul className="mt-10 flex justify-center gap-4">
            {socials.map(({ key, label, Icon }) => (
              <li key={key}>
                <a
                  href={socialLinks[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="inline-flex h-10 w-10 items-center justify-center border border-gold/40 text-gold transition-colors hover:bg-gold hover:text-charcoal"
                >
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        )}

        <div className="gold-rule mt-14 opacity-50" />
        <p className="mt-8 text-center text-xs tracking-wider text-on-dark-soft/70">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
