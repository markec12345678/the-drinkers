"use client";

import Link from "next/link";
import { useState } from "react";
import { Music2, Youtube, Facebook, Globe } from "lucide-react";
import { siteConfig, newsletterFormUrl } from "@/lib/site-config";

const footerLinks = [
  { href: "#o-nas", label: "O nas" },
  { href: "#galerija", label: "Galerija" },
  { href: "#glasba", label: "Glasba" },
  { href: "#video", label: "Video" },
  { href: "#koncerti", label: "Koncerti" },
  { href: "#kontakt", label: "Kontakt" },
  { href: "/epk", label: "EPK" },
];

const socialLinks = [
  { href: siteConfig.social.spotify, label: "Spotify", icon: Music2, title: "Poslušaj, ko si trezen" },
  { href: siteConfig.social.youtube, label: "YouTube", icon: Youtube, title: "Videospoti – tudi na trezen dan" },
  { href: siteConfig.social.facebook, label: "Facebook", icon: Facebook, title: "Sledi nam – tudi ponoči" },
  ...(siteConfig.social.website
    ? [{ href: siteConfig.social.website, label: "Splet", icon: Globe, title: "Uradna stran – pristani tukaj" }]
    : []),
];

export function Footer() {
  const year = new Date().getFullYear();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterFormUrl) {
      const form = e.target as HTMLFormElement;
      form.action = newsletterFormUrl;
      form.submit();
    }
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="border-t-2 border-amber-900/50 bg-[#0a0807] py-10 sm:py-12 grain-overlay">
      <div className="container px-4 sm:px-6 md:px-6 lg:px-8">
        <div className="mb-8 flex flex-col items-center border-b border-amber-900/30 pb-8 md:mb-0 md:border-b-0 md:pb-0">
          <p className="mb-2 text-center text-sm font-semibold text-amber-400/90">
            Prijavi se za novice o koncertih in novostih
          </p>
          {submitted ? (
            <p className="text-sm text-amber-500/80">Hvala! Kmalu te bomo obvestili.</p>
          ) : (
            <form
              onSubmit={handleNewsletterSubmit}
              action={newsletterFormUrl || undefined}
              method={newsletterFormUrl ? "post" : undefined}
              target={newsletterFormUrl ? "_blank" : undefined}
              className="flex w-full max-w-sm flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                name="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tvoj@email.si"
                required
                className="min-h-[44px] min-w-0 flex-1 rounded-sm border-2 border-amber-700/50 bg-black/60 px-4 py-2.5 text-base text-amber-200 placeholder:text-amber-500/50 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
                aria-label="E-pošta"
              />
              <button
                type="submit"
                className="rounded-sm border-2 border-amber-600 bg-amber-600/30 px-6 py-2.5 font-bold text-amber-200 transition-colors hover:bg-amber-600/50 active:scale-[0.98]"
              >
                Prijavi se
              </button>
            </form>
          )}
        </div>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <p className="font-rye text-lg text-amber-500">The Drinkers</p>
            <p className="text-sm text-amber-400/50">Litija · Slovenija</p>
            <div className="mt-4 flex justify-center gap-4 md:justify-start">
              {socialLinks.map(({ href, label, icon: Icon, title }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={title}
                  className="tap-target flex h-10 w-10 items-center justify-center rounded-sm border-2 border-amber-700/50 text-amber-500 transition-colors hover:border-amber-500 hover:bg-amber-950/50 hover:text-amber-400"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8">
            {footerLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="tap-target py-2 font-semibold text-amber-300/70 transition-colors hover:text-amber-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="mt-8 border-t border-amber-900/30 pt-8 text-center">
          <p className="font-marker text-sm text-amber-500/60">
            ©1993–{year} The Drinkers · DRINK 'N' ROLL
          </p>
        </div>
      </div>
    </footer>
  );
}
