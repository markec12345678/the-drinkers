import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { Music2, Disc3, Headphones } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const spotifyEmbedUrl = siteConfig.spotifyEmbedUrl;
const youtubeEmbedUrl = siteConfig.youtubeEmbedUrl;

const albums = [
  { title: "Lepi in trezni", year: "1995" },
  { title: "Žeja", year: "1997" },
  { title: "Pivolucija", year: "1999" },
  { title: "Zadnja Večerja", year: "1999" },
  { title: "De best of", year: "2001" },
  { title: "Prohibicija", year: "2003" },
];

/** Tracklist albuma Žeja (1997) – vir: Spirit of Rock */
const zejaTracks = [
  "Še Vedno Sem Tu",
  "Lepi In Trezni",
  "Bele Školjke Blues",
  "Gnus",
  "Žeja",
  "Alkohol Je Moj Idol",
  "Deset Majhnih Jagrov",
  "Lit'r Vina",
  "Epitaf",
  "Delirij",
];

/** Znane pesmi – vir: Spirit of Rock, Pivolucija (1999) */
const topTracks = [
  "Pijemo ga radi",
  "Deset majhnih jagrov",
  "Alkohol je moj idol",
  "I Love Alcohol",
  "Žeja",
];

export function Music() {
  return (
    <section
      id="glasba"
      className="scroll-mt-16 border-t-2 border-amber-900/40 bg-black py-16 sm:py-20 md:scroll-mt-20 md:py-24 lg:py-32 grain-overlay"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-4 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          GLASBA
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-amber-200/70 sm:mb-12 sm:text-base">
          Albumi in pesmi, ki so nas spremljali skozi leta.
        </p>

        <div className="mb-12 grid gap-4 sm:grid-cols-2 sm:gap-6 md:mb-16 lg:grid-cols-3 xl:grid-cols-4">
          {albums.map((album) => (
            <Card
              key={album.title}
              className="border-2 border-amber-800/40 bg-black/80 transition-all duration-200 hover:scale-[1.02] hover:border-amber-600/60 hover:bg-amber-950/40 hover:shadow-[0_0_30px_rgba(217,119,6,0.2)]"
            >
              <CardHeader className="pb-2">
                <div className="relative mb-2 aspect-square w-full overflow-hidden rounded bg-black">
                  {album.title === "Lepi in trezni" ? (
                    <Image
                      src="/album-lepi-in-trezni.jpg"
                      alt={album.title}
                      fill
                      className="object-contain"
                    />
                  ) : album.title === "Žeja" ? (
                    <Image
                      src="/album-zeja.jpg"
                      alt={album.title}
                      fill
                      className="object-contain"
                    />
                  ) : album.title === "Pivolucija" ? (
                    <Image
                      src="/album-pivolucija.jpg"
                      alt={album.title}
                      fill
                      className="object-contain"
                    />
                  ) : album.title === "Zadnja Večerja" ? (
                    <Image
                      src="/album-zadnja-vecerja.jpg"
                      alt={album.title}
                      fill
                      className="object-contain"
                    />
                  ) : album.title === "De best of" ? (
                    <Image
                      src="/album-de-best-of.jpg"
                      alt="The Drinkers – De best of"
                      fill
                      className="object-contain"
                    />
                  ) : album.title === "Prohibicija" ? (
                    <Image
                      src="/album-prohibicija.jpg"
                      alt={album.title}
                      fill
                      className="object-contain"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <Disc3 className="h-12 w-12 text-amber-700/50" />
                    </div>
                  )}
                </div>
                <h3 className="font-semibold text-white">{album.title}</h3>
                <p className="text-sm text-zinc-500">{album.year}</p>
              </CardHeader>
            </Card>
          ))}
        </div>

        <div className="mx-auto mb-12 max-w-2xl md:mb-16">
          <h3
            className="mb-3 text-center font-rye text-lg text-amber-500 sm:mb-4 sm:text-xl md:text-2xl"
            style={{ textShadow: "1px 1px 0 #991b1b" }}
          >
            Žeja (1997)
          </h3>
          <div className="flex flex-col gap-4 rounded-sm border-2 border-amber-800/40 bg-black/60 p-4 sm:gap-6 sm:p-6 md:flex-row">
            <div className="relative mx-auto aspect-square w-40 shrink-0 overflow-hidden rounded bg-black sm:w-48">
              <Image
                src="/album-zeja.jpg"
                alt="Žeja"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <ol className="list-decimal list-inside space-y-1 text-sm text-amber-200/80">
                {zejaTracks.map((track) => (
                  <li key={track}>{track}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mb-12 md:mb-16">
          <h3
            className="mb-4 text-center font-rye text-lg text-amber-500 sm:mb-6 sm:text-xl md:text-2xl"
            style={{ textShadow: "1px 1px 0 #991b1b" }}
          >
            Znane pesmi
          </h3>
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-3">
            {topTracks.map((track) => (
              <span
                key={track}
                className="hover-shake inline-flex items-center gap-2 rounded-full border-2 border-amber-700/50 bg-black/60 px-4 py-2.5 text-sm text-amber-200 transition-all duration-200 hover:scale-105 hover:border-amber-500 hover:bg-amber-950/50"
              >
                <Music2 className="h-3.5 w-3.5 shrink-0 text-amber-500 sm:h-4 sm:w-4" />
                {track}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h3
            className="mb-4 text-center font-rye text-lg text-amber-500 sm:mb-6 sm:text-xl md:text-2xl"
            style={{ textShadow: "1px 1px 0 #991b1b" }}
          >
            Poslušaj
          </h3>
          {spotifyEmbedUrl || youtubeEmbedUrl ? (
            <div className="grid gap-6 md:grid-cols-2">
              {spotifyEmbedUrl && (
                <div className="aspect-video overflow-hidden rounded-sm border-2 border-amber-800/40 bg-black/60">
                  <iframe
                    src={spotifyEmbedUrl}
                    width="100%"
                    height="100%"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="h-full w-full"
                    title="Spotify"
                  />
                </div>
              )}
              {youtubeEmbedUrl && (
                <div className="aspect-video overflow-hidden rounded-sm border-2 border-amber-800/40 bg-black/60">
                  <iframe
                    src={youtubeEmbedUrl}
                    width="100%"
                    height="100%"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    className="h-full w-full"
                    title="YouTube"
                  />
                </div>
              )}
            </div>
          ) : (
            <Link
              href="#kontakt"
              className="flex flex-col items-center justify-center gap-4 rounded-sm border-2 border-amber-700/50 bg-black/60 p-12 text-center transition-all hover:border-amber-500/70 hover:bg-amber-950/30"
            >
              <Headphones className="h-16 w-16 text-amber-500" />
              <p className="font-semibold text-amber-300">Povezave kmalu</p>
              <p className="text-sm text-amber-200/70">
                Za poslušanje nas sledi na socialnih omrežjih ali nas kontaktiraj.
              </p>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
