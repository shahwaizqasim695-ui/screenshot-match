import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero-countryside.jpg";
import { ContactForm } from "@/components/site/ContactForm";
import { Ornament } from "@/components/site/Ornament";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Steve Davis | Historical Fiction Author" },
      {
        name: "description",
        content: "Get in touch with Steve Davis about the trilogy, readings, interviews, or reader reflections.",
      },
      { property: "og:title", content: "Contact Steve Davis" },
      { property: "og:description", content: "Send a note to the author of Concealments, Conspiracies, and Confessions." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Correspondence"
        title="Get in"
        accent="Touch"
        description="For reader letters, interviews, book clubs, and events — every note is read with care."
        image={heroImg}
        imagePosition="70% center"
      />
      <section className="bg-paper py-28 sm:py-32">
        <div className="mx-auto grid max-w-6xl gap-16 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <Reveal>
            <p className="eyebrow">Write to the Author</p>
            <h2 className="mt-6 text-4xl leading-tight text-forest sm:text-5xl">
              Every story begins with <em className="italic text-walnut">a letter</em>
            </h2>
            <div className="gold-rule mt-8 w-28" />
            <p className="mt-8 leading-relaxed text-ink-soft">
              Whether you'd like to share a memory the trilogy stirred, invite Steve to your book club, or ask about
              interviews and appearances, use the form to send a note.
            </p>
            <Ornament className="mt-12 justify-start [&>span:first-child]:hidden" />
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-gold/40 bg-ivory p-7 shadow-card sm:p-12">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
