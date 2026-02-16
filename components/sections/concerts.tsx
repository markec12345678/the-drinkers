import Link from "next/link";
import { Calendar, MapPin, ExternalLink, Facebook, Instagram } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Concerts() {
  const upcomingConcerts = siteConfig.concerts;
  return (
    <section
      id="koncerti"
      className="scroll-mt-16 border-t-2 border-amber-900/40 bg-[#0c0a09] py-16 sm:py-20 md:scroll-mt-20 md:py-24 lg:py-32 grain-overlay"
    >
      <div className="container px-4 sm:px-6 md:px-6 lg:px-8">
        <h2
          className="mb-3 text-center font-rye text-2xl tracking-widest text-amber-500 sm:mb-4 sm:text-3xl md:text-4xl"
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
                className="hover-drunk flex flex-col gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 p-6 transition-all hover:border-amber-500/70 md:flex-row md:items-center md:justify-between"
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
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-5 sm:gap-6">
            <p className="text-center text-sm text-amber-200/80 sm:text-base">
              Naši koncerti so objavljeni na socialnih omrežjih. Sledi nam, da ne zamudiš!
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="tap-target inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-6 py-3 font-bold text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-600/40 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                <Facebook className="h-5 w-5 shrink-0" />
                <span className="truncate">Sledi nam na Facebooku</span>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-drunk tap-target inline-flex min-h-[48px] w-full items-center justify-center gap-2 rounded-sm border-2 border-amber-600 bg-amber-600/20 px-6 py-3 font-bold text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-600/40 active:scale-[0.98] sm:w-auto sm:px-8"
              >
                <Instagram className="h-5 w-5 shrink-0" />
                <span className="truncate">Sledi nam na Instagramu</span>
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
