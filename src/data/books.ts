import coverAsset from "@/assets/concealments-front-cover.jpg.asset.json";

export type Retailer = {
  name: string;
  /** Leave empty until a real store link is available — the site shows "Link coming soon". */
  url: string;
};

export type Volume = {
  number: 1 | 2 | 3;
  numeral: string;
  title: string;
  theme: string;
  description: string;
};

export const featuredBook = {
  slug: "concealments-conspiracies-and-confessions",
  title: "Concealments, Conspiracies, and Confessions",
  subtitle: "A Midwestern Boomer Trilogy Novel",
  author: "Steve Davis",
  publisher: "Parker Publishers",
  genre: "Historical Fiction",
  cover: coverAsset.url,
  coverAlt:
    "Book cover of Concealments, Conspiracies, and Confessions by Steve Davis: an antique hourglass with a sapphire pendant on a walnut desk beside leather-bound books, overlooking a sunlit American countryside with a columned mansion and a couple walking toward a river.",
  tagline: "A Middle American Boomer Story, Told by Someone Who Lived It.",
  short:
    "Born in 1946, Jennifer Palm and Jack Walker belong to a generation that witnessed some of the most transformative changes in American history.",
  synopsis: [
    "Born in 1946, Jennifer Palm and Jack Walker belong to a generation that witnessed some of the most transformative changes in American history. Their parallel life stories unfold against the backdrop of an evolving nation, capturing the hopes, struggles, discoveries, and contradictions of a generation unlike any other since the founding of the Republic.",
    "Told across three volumes, this historical reflection and romantic adventure follows Jack and Jen through nearly six decades of life, as they experience its sweetest rewards, bitterest disappointments, and unexpected turns. Each follows a different path, until fate brings them to the same crossroads on New Year's Eve.",
    "Rich with nostalgia, cultural reflection, romance, and unexpected adventure, this is a journey through the lives and times of the Baby Boomer generation.",
  ],
  /** Add real store links here. Empty URLs render as "Link coming soon". */
  retailers: [
    { name: "Amazon", url: "" },
    { name: "Barnes & Noble", url: "" },
    { name: "Bookshop.org", url: "" },
  ] satisfies Retailer[],
};

export const volumes: Volume[] = [
  {
    number: 1,
    numeral: "I",
    title: "The Family Sagas of a Young Jack and Jen",
    theme: "Childhood, family roots, and early life",
    description:
      "Two children of 1946 grow up in Middle America — shaped by the families, places, and stories that will follow them for a lifetime.",
  },
  {
    number: 2,
    numeral: "II",
    title: "Adulthood: Joys, Disappointments, and Cocoons",
    theme: "Love, adulthood, and personal transformation",
    description:
      "Love arrives, plans unravel, and life's sweetest rewards come hand in hand with its bitterest disappointments as a nation changes around them.",
  },
  {
    number: 3,
    numeral: "III",
    title: "The Grand and Secret Mystical Adventures of Jack and Jen",
    theme: "Mystery, revelation, and extraordinary discovery",
    description:
      "Hidden truths surface and unexpected adventures begin, as separate paths draw toward the same crossroads on New Year's Eve.",
  },
];

export const books = [featuredBook];

export function getBookBySlug(slug: string) {
  return books.find((b) => b.slug === slug);
}
