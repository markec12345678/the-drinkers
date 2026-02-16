import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";
import { Phone, Mail, Music2, Youtube, Facebook, Globe, ExternalLink } from "lucide-react";

export const metadata = {
  title: "EPK | The Drinkers – Elektronični press kit",
  description:
    "Elektronični press kit The Drinkers – biografija, fotografije, glasba in kontakt za booking.",
};

const lineup = [
  { name: "Domen Kolenc", role: "vokal" },
  { name: "Robert Likar", role: "kitara, vokal" },
  { name: "Primož Trebec", role: "klaviature, vokal" },
  { name: "Janez Želvak", role: "bobni" },
  { name: "Kristian Buovski", role: "bas" },
];

export default function EPKPage() {
  return (
    <div className="min-h-screen bg-black text-amber-100">
      <header className="border-b-2 border-amber-900/50 py-6">
        <div className="container px-4 sm:px-6">
          <Link
            href="/"
            className="font-rye text-2xl tracking-widest text-amber-500 hover:text-amber-400"
            style={{ textShadow: "1px 1px 0 #991b1b" }}
          >
            THE DRINKERS
          </Link>
          <p className="mt-1 text-sm text-amber-400/70">Elektronični press kit – za promotorje in bookerje</p>
        </div>
      </header>

      <main className="container px-4 py-12 sm:px-6 sm:py-16">
        <section className="mb-12">
          <h1
            className="mb-6 font-rye text-3xl tracking-widest text-amber-500 sm:text-4xl"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
          >
            O SKUPINI
          </h1>
          <p className="mb-4 max-w-2xl text-lg leading-relaxed text-amber-100/90">
            The Drinkers smo slovenska booze rock skupina, ustanovljena julija 1993 v Litiji. Pet prijateljev, vsi
            nekdanji glasbeniki različnih zasedb, smo se zbrali z idejo nastopiti na lokalnem rock festivalu Rusty
            Trumpets.
          </p>
          <p className="max-w-2xl text-lg leading-relaxed text-amber-100/90">
            Presenetljivo smo zmagali. In tako se je začela zgodba – rock z humorjem, energijo in kultno
            slovesnostjo slovenske pub scene. Žanr: booze rock, rock.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className="mb-6 font-rye text-2xl tracking-widest text-amber-500 sm:text-3xl"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
          >
            ZASEDBA
          </h2>
          <ul className="space-y-2">
            {lineup.map((m) => (
              <li key={m.name} className="flex gap-3 text-amber-200">
                <span className="font-bold text-amber-300">{m.name}</span>
                <span className="text-amber-400/80">–</span>
                <span>{m.role}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2
            className="mb-6 font-rye text-2xl tracking-widest text-amber-500 sm:text-3xl"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
          >
            FOTOGRAFIJE
          </h2>
          <p className="mb-6 text-sm text-amber-200/70">
            Prenesi fotografije, ovitke albumov in promo material. Klikni na sliko za prenos.
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { src: "/drinkers-band-photo.jpg", alt: "The Drinkers – skupinska fotografija" },
              { src: "/ko-to-tamo-peva.jpg", alt: "Ko to tamo peva" },
              { src: "/hero-bg.jpg", alt: "The Drinkers – koncert" },
              { src: "/album-lepi-in-trezni.jpg", alt: "Album Lepi in trezni (1995)" },
              { src: "/album-zeja.jpg", alt: "Album Žeja (1997)" },
              { src: "/album-pivolucija.jpg", alt: "Album Pivolucija (1999)" },
              { src: "/album-prohibicija.jpg", alt: "Album Prohibicija (2003)" },
            ].map((img) => ({
              ...img,
              fullSrc: siteConfig.imageBaseUrl ? `${siteConfig.imageBaseUrl}${img.src}` : img.src,
            })).map((img) => (
              <a
                key={img.src}
                href={img.fullSrc}
                download
                target="_blank"
                rel="noopener noreferrer"
                className="group relative aspect-square overflow-hidden rounded-sm border-2 border-amber-800/40 transition-colors hover:border-amber-500/70"
              >
                <Image
                  src={img.fullSrc}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute bottom-2 left-2 rounded bg-black/80 px-2 py-1 text-xs text-amber-300">
                  Prenesi
                </span>
              </a>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2
            className="mb-6 font-rye text-2xl tracking-widest text-amber-500 sm:text-3xl"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
          >
            GLASBA
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-4 py-2.5 font-medium text-amber-200 transition-colors hover:border-amber-500 hover:bg-amber-600/40"
            >
              <Music2 className="h-5 w-5" />
              Spotify
            </a>
            <a
              href={siteConfig.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-4 py-2.5 font-medium text-amber-200 transition-colors hover:border-amber-500 hover:bg-amber-600/40"
            >
              <Youtube className="h-5 w-5" />
              YouTube
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-4 py-2.5 font-medium text-amber-200 transition-colors hover:border-amber-500 hover:bg-amber-600/40"
            >
              <Facebook className="h-5 w-5" />
              Facebook
            </a>
            {siteConfig.social.website && (
              <a
                href={siteConfig.social.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-4 py-2.5 font-medium text-amber-200 transition-colors hover:border-amber-500 hover:bg-amber-600/40"
              >
                <Globe className="h-5 w-5" />
                Splet
              </a>
            )}
          </div>
        </section>

        <section>
          <h2
            className="mb-6 font-rye text-2xl tracking-widest text-amber-500 sm:text-3xl"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
          >
            BOOKING
          </h2>
          <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6">
            <a
              href={`tel:${siteConfig.manager.tel}`}
              className="flex items-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 px-5 py-4 text-amber-200 transition-colors hover:border-amber-500"
            >
              <Phone className="h-5 w-5 text-amber-500" />
              <span>
                {siteConfig.manager.name} · {siteConfig.manager.phone}
              </span>
            </a>
            <a
              href="mailto:contact@thedrinkers.si"
              className="flex items-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 px-5 py-4 text-amber-200 transition-colors hover:border-amber-500"
            >
              <Mail className="h-5 w-5 text-amber-500" />
              contact@thedrinkers.si
            </a>
          </div>
        </section>

        <div className="mt-16 border-t border-amber-900/30 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-amber-400 underline transition-colors hover:text-amber-300"
          >
            <ExternalLink className="h-4 w-4" />
            Nazaj na glavno stran
          </Link>
        </div>
      </main>
    </div>
  );
}
