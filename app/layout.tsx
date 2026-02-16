import type { Metadata } from "next";
import { Bebas_Neue, Inter, Rye, Permanent_Marker } from "next/font/google";
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

export const metadata: Metadata = {
  title: "The Drinkers | Slovenska booze rock skupina",
  description:
    "The Drinkers – slovenska rock skupina iz Litije (1993). Prohibicija, Žeja, Pijemo ga radi. Booze rock od Rusty Trumpets.",
  openGraph: {
    title: "The Drinkers | Slovenska booze rock",
    description:
      "Slovenska booze rock skupina od 1993. Pet prijateljev iz Litije – rock z humorjem in energijo.",
  },
};

const musicGroupSchema = {
  "@context": "https://schema.org",
  "@type": "MusicGroup",
  name: "The Drinkers",
  description:
    "Slovenska booze rock skupina od 1993. Pet prijateljev iz Litije – rock z humorjem in energijo.",
  foundingDate: "1993",
  url: "https://thedrinkers.si",
  genre: ["rock", "booze rock"],
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
