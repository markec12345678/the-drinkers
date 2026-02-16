/**
 * Konfiguracija strani – pripravljeni uradni profili (scrape: Spirit of Rock, YouTube, Facebook).
 * Spotify: iskanje (direktnega Artist ID še ni).
 * YouTube: kanal @TheDrinkersSlovenija, videospoti Deset majhnih jagrov (340k), Žeja (93k).
 * Facebook: the.drunkers.official (znana stran).
 */

/** Mailchimp: https://XXX.us1.list-manage.com/subscribe/post?u=XXX&id=XXX */
export const newsletterFormUrl = "";

export const siteConfig = {
  /** Uradni profili – scrape: YouTube, Spirit of Rock, Facebook */
  social: {
    spotify: "https://open.spotify.com/search/The%20Drinkers%20Slovenia",
    youtube: "https://www.youtube.com/@TheDrinkersSlovenija",
    facebook: "https://www.facebook.com/the.drunkers.official",
    instagram: "https://www.instagram.com/explore/tags/thedrinkers/",
    website: "https://www.thedrinkers.net",
  },
  /** Spotify embed: ko imaš Artist ID → https://open.spotify.com/embed/artist/XXX */
  spotifyEmbedUrl: "",
  /** YouTube embed – Deset majhnih jagrov (340k ogledov) */
  youtubeEmbedUrl: "https://www.youtube.com/embed/5bYFArOho7U",
  /** YouTube video ID-ji za Video sekcijo (Deset majhnih jagrov, Žeja, nastopi) */
  videoIds: ["5bYFArOho7U", "lK5sHyjXfz4"] as string[],
  /** Prihajajoči koncerti */
  concerts: [
    // { date: "15. 3. 2025", venue: "Kino Šiška", city: "Ljubljana", link: "https://..." },
  ] as { date: string; venue: string; city: string; link?: string }[],
  /** Manager – booking in kontakt */
  manager: {
    name: "Robert Pezdirc",
    phone: "040 451 250",
    tel: "+38640451250",
  },
  /** Osnovni URL strani (za og:image, canonical) */
  siteUrl: "https://thedrinkers.si",
} as const;
