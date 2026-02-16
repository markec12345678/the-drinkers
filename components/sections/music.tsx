import Image from "next/image";
import Link from "next/link";
import { Card, CardHeader } from "@/components/ui/card";
import { Music2, Disc3, Headphones } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const spotifyEmbedUrl = siteConfig.spotifyEmbedUrl;
const youtubeEmbedUrl = siteConfig.youtubeEmbedUrl;

const albums = [
  { title: "Lepi in trezni", year: "1995" },
  { title: "Prohibicija", year: "—" },
  { title: "The Best Of", year: "—" },
  { title: "Žeja", year: "—" },
  { title: "Pivolucija", year: "1999" },
  { title: "Ko to tamo peva", year: "—" },
];

const lepiInTrezniTracks = [
  "Na stol se bom privezal",
  "Ko boš prišla na Bled",
  "Zeleno sonce",
  "Slovenac",
  "Ona",
  "Simona",
  "Prepozno",
  "Pošast",
  "To bo dan",
];

const topTracks = [
  "Pijemo ga radi",
  "Deset majhnih jagrov",
  "Ko to tamo peva",
  "I Love Alcohol",
  "Alkohol je moj idol",
];

export function Music() {
  return (
    <section
      id="glasba"
      className="scroll-mt-20 border-t-2 border-amber-900/40 bg-black py-24 md:py-32 grain-overlay"
    >
      <div className="container px-4 md:px-6">
        <h2
          className="mb-4 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          GLASBA
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-200/70">
          Albumi in pesmi, ki so nas spremljali skozi leta.
        </p>

        <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
                  ) : album.title === "Prohibicija" ? (
                    <Image
                      src="/album-prohibicija.jpg"
                      alt={album.title}
                      fill
                      className="object-contain"
                    />
                  ) : album.title === "The Best Of" ? (
                    <Image
                      src="/drinkers-band-photo.jpg"
                      alt="Črno-bela fotografija petih članov The Drinkers, naslonjenih na grobo steno, v rockovskem slogu"
                      fill
                      className="object-cover object-center"
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
                  ) : album.title === "Ko to tamo peva" ? (
                    <Image
                      src="/ko-to-tamo-peva.jpg"
                      alt={album.title}
                      fill
                      className="object-cover object-center"
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

        <div className="mx-auto mb-16 max-w-2xl">
          <h3
            className="mb-4 text-center font-rye text-xl text-amber-500 md:text-2xl"
            style={{ textShadow: "1px 1px 0 #991b1b" }}
          >
            Lepi in trezni (1995)
          </h3>
          <div className="flex flex-col gap-6 rounded-sm border-2 border-amber-800/40 bg-black/60 p-6 md:flex-row">
            <div className="relative aspect-square w-48 shrink-0 overflow-hidden rounded bg-black">
              <Image
                src="/album-lepi-in-trezni.jpg"
                alt="Lepi in trezni"
                fill
                className="object-contain"
              />
            </div>
            <div className="min-w-0 flex-1">
              <ol className="list-decimal list-inside space-y-1 text-sm text-amber-200/80">
                {lepiInTrezniTracks.map((track) => (
                  <li key={track}>{track}</li>
                ))}
              </ol>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3
            className="mb-6 text-center font-rye text-xl text-amber-500 md:text-2xl"
            style={{ textShadow: "1px 1px 0 #991b1b" }}
          >
            Znane pesmi
          </h3>
          <div className="mx-auto flex max-w-md flex-wrap justify-center gap-3">
            {topTracks.map((track) => (
              <span
                key={track}
                className="inline-flex items-center gap-2 rounded-full border-2 border-amber-700/50 bg-black/60 px-4 py-2.5 text-sm text-amber-200 transition-all duration-200 hover:scale-105 hover:border-amber-500 hover:bg-amber-950/50"
              >
                <Music2 className="h-4 w-4 text-amber-500" />
                {track}
              </span>
            ))}
          </div>
        </div>

        <div className="mx-auto max-w-3xl">
          <h3
            className="mb-6 text-center font-rye text-xl text-amber-500 md:text-2xl"
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
