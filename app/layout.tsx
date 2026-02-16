import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Inter, Rye, Permanent_Marker } from "next/font/google";
import { siteConfig } from "@/lib/site-config";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const rye = Rye({
  weight: "400",
  variable: "--font-rye",
  subsets: ["latin"],
});

const permanentMarker = Permanent_Marker({
  weight: "400",
  variable: "--font-marker",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0c0a09",
};

const siteUrl = "https://thedrinkers.si";

export const metadata: Metadata = {
  title: "The Drinkers | Slovenska booze rock skupina",
  icons: { icon: "/icon.svg" },
  description:
    "The Drinkers – slovenska rock skupina iz Litije (1993). Prohibicija, Žeja, Pijemo ga radi. Booze rock od Rusty Trumpets.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "The Drinkers | Slovenska booze rock",
    description:
      "Slovenska booze rock skupina od 1993. Pet prijateljev iz Litije – rock z humorjem in energijo.",
    url: siteUrl,
    siteName: "The Drinkers",
    images: [{ url: "/hero-bg.jpg", width: 1200, height: 630, alt: "The Drinkers – slovenska booze rock skupina" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Drinkers | Slovenska booze rock",
    description:
      "Slovenska booze rock skupina od 1993. Pet prijateljev iz Litije – rock z humorjem in energijo.",
    images: ["/hero-bg.jpg"],
  },
};

const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "The Drinkers",
  description:
    "Slovenska booze rock skupina od 1993. Pet prijateljev iz Litije – rock z humorjem in energijo.",
  foundingDate: "1993",
  url: siteUrl,
  genre: ["rock", "booze rock"],
  sameAs: [
    siteConfig.social.spotify,
    siteConfig.social.youtube,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    ...(siteConfig.social.website ? [siteConfig.social.website] : []),
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sl" className="dark">
      <body
        className={`${bebas.variable} ${inter.variable} ${rye.variable} ${permanentMarker.variable} font-sans antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(musicGroupSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
