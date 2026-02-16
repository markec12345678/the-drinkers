import { Mail, ExternalLink } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const links = [
  { label: "Spotify", href: siteConfig.social.spotify },
  { label: "YouTube", href: siteConfig.social.youtube },
  { label: "Facebook", href: siteConfig.social.facebook },
];

export function Contact() {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t-2 border-amber-900/40 bg-black py-24 md:py-32 grain-overlay"
    >
      <div className="container px-4 md:px-6">
        <h2
          className="mb-4 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          KONTAKT
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-amber-200/70">
          Za booking ali povezavo nas kontaktiraj.
        </p>

        <div className="mx-auto flex max-w-2xl flex-col items-center gap-8 md:flex-row md:justify-center md:gap-12">
          <a
            href="mailto:contact@thedrinkers.si"
            className="flex min-h-[52px] items-center gap-3 rounded-sm border-2 border-amber-700/50 bg-black/60 px-6 py-4 text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-950/40 active:scale-[0.99]"
          >
            <Mail className="h-5 w-5 text-amber-500" />
            <span>contact@thedrinkers.si</span>
          </a>
          <div className="flex flex-wrap justify-center gap-4">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[44px] items-center gap-2 rounded-sm border-2 border-amber-700/50 bg-black/60 px-5 py-3 text-sm text-amber-200 transition-all duration-200 hover:border-amber-500 hover:bg-amber-950/40 hover:text-amber-100 active:scale-[0.99]"
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
