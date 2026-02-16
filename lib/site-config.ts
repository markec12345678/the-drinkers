/**
 * Konfiguracija strani – posodobi URL-je, ko jih imaš.
 */

/** Mailchimp/Resend form URL – ko ga imaš, dodaj tukaj. */
export const newsletterFormUrl = "";

export const siteConfig = {
  social: {
    spotify: "https://open.spotify.com/search/The%20Drinkers",
    youtube: "https://www.youtube.com/results?search_query=The+Drinkers+Slovenija",
    facebook: "https://www.facebook.com/search/pages?q=The%20Drinkers%20Slovenia",
    instagram: "https://www.instagram.com/explore/tags/thedrinkers/",
  },
  /** Embed za Music sekcijo: https://open.spotify.com/embed/artist/XXX */
  spotifyEmbedUrl: "",
  /** Embed za Music sekcijo: https://www.youtube.com/embed/VIDEO_ID */
  youtubeEmbedUrl: "",
} as const;
