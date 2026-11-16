export const site = {
  name: "Steve Davis",
  role: "Historical Fiction Author",
  tagline: "Stories of a Generation. Secrets of a Lifetime.",
};

export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About the Author" },
  { to: "/books", label: "The Trilogy" },
  { to: "/story", label: "The Story" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export const footerNav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/books", label: "The Trilogy" },
  { to: "/story", label: "The Story" },
  { to: "/contact", label: "Contact" },
] as const;

/**
 * Social profiles — icons only appear in the footer when a URL is filled in.
 */
export const socialLinks: { facebook: string; instagram: string; x: string; goodreads: string } = {
  facebook: "",
  instagram: "",
  x: "",
  goodreads: "",
};

/**
 * Form delivery. When an endpoint is empty the forms validate but clearly tell
 * the visitor that nothing has been sent or saved yet.
 */
export const integrations = {
  newsletterEndpoint: "",
  contactEndpoint: "",
};

export const hero = {
  eyebrow: "A Middle American Boomer Story",
  headingLead: "Some Stories Are Written in Time.",
  headingAccent: "Others Are Hidden Within It.",
  description:
    "Discover the lives, loves, secrets, and extraordinary journeys of Jack Walker and Jennifer Palm in Steve Davis's sweeping historical fiction trilogy.",
};

export const timeline = [
  {
    marker: "1946",
    title: "A Generation Begins",
    text: "Jack Walker and Jennifer Palm are born into a nation standing at the threshold of extraordinary change.",
  },
  {
    marker: "Chapter I",
    title: "Youth & Family",
    text: "Family sagas, small-town roots, and the bonds that quietly shape who they will become.",
  },
  {
    marker: "Chapter II",
    title: "Coming of Age",
    text: "Hopes, struggles, and discoveries — as America itself comes of age around them.",
  },
  {
    marker: "Chapter III",
    title: "Love & Adulthood",
    text: "Life's sweetest rewards arrive alongside its bitterest disappointments.",
  },
  {
    marker: "Chapter IV",
    title: "Life's Unexpected Turns",
    text: "Each follows a different path through the contradictions of a changing era.",
  },
  {
    marker: "New Year's Eve",
    title: "Paths Reunite",
    text: "Until fate brings them to the same crossroads on New Year's Eve.",
  },
];

export const themes = [
  { title: "Love & Romance", text: "The relationships that shape a lifetime." },
  { title: "Family & Legacy", text: "The stories and bonds passed through generations." },
  { title: "Secrets & Mystery", text: "The hidden truths that change everything." },
  { title: "American Nostalgia", text: "A journey through decades of transformation." },
  { title: "Time & Destiny", text: "Different paths leading toward unexpected reunions." },
];

export const quote = {
  line: "If you are a Boomer and find a little of yourself in these pages, that is no coincidence.",
  coda: "This story was written for you.",
};

/**
 * SAMPLE PLACEHOLDERS — replace with authentic reader reviews before launch.
 * Keep `isSample: true` on any entry that is not a real review.
 */
export const reviews = [
  {
    quote:
      "Your reader's words will appear here — a reflection on Jack and Jen's journey and what it stirred in them.",
    name: "Sample Reader Review",
    detail: "Placeholder · awaiting authentic review",
    isSample: true,
  },
  {
    quote:
      "A space reserved for a reader who found a little of themselves in these pages. Authentic reviews will replace this text.",
    name: "Sample Reader Review",
    detail: "Placeholder · awaiting authentic review",
    isSample: true,
  },
  {
    quote:
      "Reserved for genuine feedback from readers of Concealments, Conspiracies, and Confessions.",
    name: "Sample Reader Review",
    detail: "Placeholder · awaiting authentic review",
    isSample: true,
  },
];
