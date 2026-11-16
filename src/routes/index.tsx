import { createFileRoute } from "@tanstack/react-router";
import { AuthorPreview } from "@/components/site/AuthorPreview";
import { BookShowcase } from "@/components/site/BookShowcase";
import { Hero } from "@/components/site/Hero";
import { HistoricalTimeline } from "@/components/site/HistoricalTimeline";
import { NewsletterSection } from "@/components/site/NewsletterSection";
import { QuoteSection } from "@/components/site/QuoteSection";
import { ReviewsCarousel } from "@/components/site/ReviewsCarousel";
import { ThemesGrid } from "@/components/site/ThemesGrid";
import { TrilogySection } from "@/components/site/TrilogySection";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steve Davis — Concealments, Conspiracies, and Confessions" },
      {
        name: "description",
        content:
          "Discover Steve Davis's historical fiction trilogy following Jack Walker and Jennifer Palm across nearly six decades of a changing America.",
      },
      { property: "og:title", content: "Steve Davis — Concealments, Conspiracies, and Confessions" },
      {
        property: "og:description",
        content: "Some stories are written in time. Others are hidden within it. A Midwestern Boomer trilogy.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <BookShowcase />
      <TrilogySection />
      <AuthorPreview />
      <HistoricalTimeline />
      <ThemesGrid />
      <QuoteSection />
      <ReviewsCarousel />
      <NewsletterSection />
    </>
  );
}
