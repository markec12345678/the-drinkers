import Link from "next/link";
import { Calendar, MapPin, ExternalLink, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const upcomingConcerts: { date: string; venue: string; city: string; link?: string }[] = [];

export function Concerts() {
  return (
    <section
      id="koncerti"
      className="scroll-mt-20 border-t-2 border-amber-900/40 bg-[#0c0a09] py-24 md:py-32 grain-overlay"
    >
      <div className="container px-4 md:px-6">
        <h2
          className="mb-4 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          KONCERTI
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-200/70">
          Sledi nam za novice o prihajajočih nastopih.
        </p>

        {upcomingConcerts.length > 0 ? (
          <div className="mx-auto max-w-2xl space-y-4">
            {upcomingConcerts.map((concert) => (
              <div
                key={`${concert.date}-${concert.venue}`}
                className="flex flex-col gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 p-6 transition-all hover:border-amber-500/70 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-sm border-2 border-amber-600/60 bg-amber-950/50">
                    <Calendar className="h-6 w-6 text-amber-500" />
                  </div>
                  <div>
                    <p className="font-bold text-amber-200">{concert.date}</p>
                    <p className="font-semibold text-amber-300/90">{concert.venue}</p>
                    <p className="flex items-center gap-2 text-sm text-amber-400/70">
                      <MapPin className="h-4 w-4" />
                      {concert.city}
                    </p>
                  </div>
                </div>
                {concert.link && (
                  <a
                    href={concert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-sm border-2 border-amber-600 px-4 py-2 font-medium text-amber-300 transition-colors hover:bg-amber-600/30"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Vstopnice
                  </a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-6">
            <p className="text-center text-amber-200/80">
              Naši koncerti so objavljeni na socialnih omrežjih. Sledi nam, da ne zamudiš!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-8 py-3 font-bold text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-600/40 active:scale-[0.98]"
              >
                <Facebook className="h-5 w-5" />
                Sledi nam na Facebooku
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-8 py-3 font-bold text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-600/40 active:scale-[0.98]"
              >
                <Instagram className="h-5 w-5" />
                Sledi nam na Instagramu
              </a>
            </div>
            <Link
              href="#kontakt"
              className="text-sm text-amber-400/80 underline transition-colors hover:text-amber-300"
            >
              Povprašaj za booking
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
