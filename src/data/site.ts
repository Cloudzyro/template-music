// Everything on the site comes from this file. Change the text, releases, tour
// dates and links here; the pages update on the next build.

export const site = {
  name: "Halcyon Wire",
  tagline: "Four-piece synth-rock from Lake Arden",
  description:
    "Halcyon Wire is a four-piece synth-rock band. Listen to the new album Static Bloom, find tour dates and tickets, shop merch and join the mailing list.",
  email: "hello@halcyonwire.example",
  bookingEmail: "booking@halcyonwire.example",
  pressEmail: "press@halcyonwire.example",
  social: [
    { label: "Instagram", url: "https://instagram.com/" },
    { label: "YouTube", url: "https://youtube.com/" },
    { label: "Bandcamp", url: "https://bandcamp.com/" },
    { label: "TikTok", url: "https://tiktok.com/" },
  ],
};

// The release shown big at the top of the home page.
export const latestRelease = {
  kicker: "New album out now",
  title: "Static Bloom",
  type: "Album",
  released: "October 17, 2026",
  text: "Ten songs written in a borrowed farmhouse over one long winter. Louder, warmer and stranger than anything we've made before.",
  // Links to wherever people can stream or buy it.
  links: [
    { label: "Listen on Spotify", url: "https://open.spotify.com/" },
    { label: "Apple Music", url: "https://music.apple.com/" },
    { label: "Buy on Bandcamp", url: "https://bandcamp.com/" },
  ],
};

// Players load only when a visitor clicks, so nothing from these services runs
// until then. Paste the embed address each service gives you under Share, Embed.
export type Embed = {
  service: "Spotify" | "SoundCloud" | "Apple Music";
  title: string;
  subtitle: string;
  embedUrl: string;
  height: number;
  art: "bloom" | "wire" | "tide";
};

export const embeds: Embed[] = [
  {
    service: "Spotify",
    title: "Static Bloom",
    subtitle: "Album, 2026",
    embedUrl: "https://open.spotify.com/embed/album/REPLACE_WITH_YOUR_ALBUM_ID",
    height: 352,
    art: "bloom",
  },
  {
    service: "SoundCloud",
    title: "Copper Lungs (demo)",
    subtitle: "Single, 2025",
    embedUrl:
      "https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/REPLACE_WITH_YOUR_TRACK&color=%23c6ff3d&visual=true",
    height: 352,
    art: "wire",
  },
  {
    service: "Apple Music",
    title: "Night Swimmer EP",
    subtitle: "EP, 2024",
    embedUrl: "https://embed.music.apple.com/us/album/REPLACE_WITH_YOUR_ALBUM",
    height: 352,
    art: "tide",
  },
];

// Dates are YYYY-MM-DD. Shows before today move to "Past shows" by themselves.
export type Show = {
  date: string;
  city: string;
  venue: string;
  ticketsUrl?: string;
  soldOut?: boolean;
  note?: string;
};

export const shows: Show[] = [
  { date: "2026-10-24", city: "Lake Arden, MN", venue: "The Foundry Room", note: "Album release show" },
  { date: "2026-11-07", city: "Millbrook, WI", venue: "Paper Moon Hall" },
  { date: "2026-11-14", city: "Cedar Falls, IA", venue: "Old Mill Ballroom" },
  { date: "2026-12-04", city: "Harlow, IL", venue: "The Lantern", ticketsUrl: "https://example.com/tickets", soldOut: true },
  { date: "2026-12-05", city: "Harlow, IL", venue: "The Lantern", ticketsUrl: "https://example.com/tickets", note: "Second night added" },
  { date: "2026-12-12", city: "Brightwater, MI", venue: "Signal Hall", ticketsUrl: "https://example.com/tickets" },
  { date: "2027-01-22", city: "Port Ellery, OH", venue: "Union Works", ticketsUrl: "https://example.com/tickets" },
  { date: "2027-01-29", city: "Kingsford, PA", venue: "The Assembly", ticketsUrl: "https://example.com/tickets" },
  { date: "2027-02-05", city: "Wrenfield, NY", venue: "Glasshouse", ticketsUrl: "https://example.com/tickets" },
  { date: "2027-02-12", city: "Bay Hollow, MA", venue: "Harbor Light Theater", ticketsUrl: "https://example.com/tickets" },
];

export const merch = [
  { name: "Static Bloom vinyl", detail: "180g, translucent green", price: 32, url: "https://example.com/shop", art: "vinyl" },
  { name: "Bloom tour tee", detail: "Heavyweight cotton, black", price: 28, url: "https://example.com/shop", art: "tee" },
  { name: "Wire logo hoodie", detail: "Garment dyed, charcoal", price: 55, url: "https://example.com/shop", art: "hoodie" },
  { name: "Cassette and zine", detail: "Limited run of 300", price: 18, url: "https://example.com/shop", art: "tape" },
] as const;

export const press = {
  shortBio:
    "Halcyon Wire is a four-piece synth-rock band from Lake Arden, Minnesota, known for big-hearted choruses, analog synths and a live show that runs on pure volume.",
  longBio: [
    "Halcyon Wire started in 2019 when singer Juno Marlowe and guitarist Theo Brannigan swapped demos over a long Lake Arden winter. Bassist Priya Castellane and drummer Ollie Varga joined a year later, and the band spent the next three years playing every basement, bar and backyard that would have them.",
    "Their 2024 debut, Night Swimmer EP, built a word-of-mouth following on college radio. Static Bloom, their first full-length album, was recorded live to tape in a borrowed farmhouse and released in October 2026.",
    "On stage the band trades the polish of the records for something rawer: longer songs, louder synths and a crowd that sings every word back.",
  ],
  members: [
    { name: "Juno Marlowe", role: "Vocals, synths" },
    { name: "Theo Brannigan", role: "Guitar" },
    { name: "Priya Castellane", role: "Bass, vocals" },
    { name: "Ollie Varga", role: "Drums" },
  ],
  facts: [
    { label: "From", value: "Lake Arden, Minnesota" },
    { label: "For fans of", value: "Big choruses, analog synths, loud rooms" },
    { label: "Latest release", value: "Static Bloom (2026)" },
  ],
  quotes: [
    { text: "A record that sounds like headlights through snow.", source: "The Northbound Review" },
    { text: "The best live band you haven't seen yet.", source: "Riverline Weekly" },
  ],
  // Files in public/press/. Replace them with your own photos, logos and one-sheet.
  assets: [
    { label: "Logo (SVG)", file: "/press/halcyon-wire-logo.svg", size: "1 KB" },
    { label: "Static Bloom cover art (SVG)", file: "/press/static-bloom-cover.svg", size: "2 KB" },
    { label: "Full press kit (ZIP)", file: "/press/halcyon-wire-press-kit.zip", size: "2 KB" },
  ],
};

export const signup = {
  title: "Get on the list",
  text: "New music, tour dates before they go public, and the odd voice memo from the van. One email a month at most.",
};
