import { Mail, Phone, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "Spotify", href: siteConfig.social.spotify },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "Facebook", href: siteConfig.social.facebook },
  { label: "Instagram", href: siteConfig.social.instagram },
  ...(siteConfig.social.website ? [{ label: "Splet", href: siteConfig.social.website }] : []),
];

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t-2 border-amber-900/40 bg-black py-24 md:py-32 grain-overlay"
    >
      <div className="container px-4 sm:px-6 md:px-6 lg:px-8">
        <h2
          className="mb-4 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          KONTAKT
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-amber-200/70 sm:mb-12 sm:text-base">
          Za booking ali povezavo nas kontaktiraj.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col items-stretch gap-6 sm:gap-8 md:flex-row md:flex-wrap md:items-center md:justify-center md:gap-6 lg:gap-12">
          <a
            href={`tel:${siteConfig.manager.tel}`}
            title="Pokliči – odgovorimo tudi ob 3h zjutraj 🍺"
            className="hover-drunk tap-target flex min-h-[48px] items-center justify-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 px-5 py-4 text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-950/40 active:scale-[0.99] sm:min-h-[52px] sm:px-6"
          >
            <Phone className="h-5 w-5 shrink-0 text-amber-500" />
            <span className="text-center">
              {siteConfig.manager.name} · {siteConfig.manager.phone}
            </span>
          </a>
          <a
            href="mailto:contact@thedrinkers.si"
            title="Piši – preberemo tudi z jutranje kave"
            className="hover-drunk tap-target flex min-h-[48px] items-center justify-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 px-5 py-4 text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-950/40 active:scale-[0.99] sm:min-h-[52px] sm:px-6"
          >
            <Mail className="h-5 w-5 shrink-0 text-amber-500" />
            <span className="truncate text-center">contact@thedrinkers.si</span>
          </a>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-drunk tap-target inline-flex min-h-[44px] items-center justify-center gap-2 rounded-sm border-2 border-amber-700/50 bg-black/60 px-4 py-3 text-sm text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-950/40 hover:text-amber-100 active:scale-[0.99] sm:px-5"
              >
                <ExternalLink className="h-4 w-4 text-amber-500" />
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
