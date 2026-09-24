import Link from "next/link";
import {
  ArrowUpRight,
  CalendarDays,
  Disc3,
  ExternalLink,
  Instagram,
  MapPin,
  Music2,
  Play,
  Youtube,
} from "lucide-react";
import { siteConfig } from "@/lib/site-config";

const image = (path: string) => siteConfig.imageBaseUrl + path;

const releases = [
  { year: "1995", title: "Lepi in trezni", image: "/album-lepi-in-trezni.jpg", kind: "ALBUM" },
  { year: "1997", title: "Žeja", image: "/album-zeja.jpg", kind: "ALBUM" },
  { year: "1999", title: "Pivolucija", image: "/album-pivolucija.jpg", kind: "ALBUM" },
  { year: "1999", title: "Zadnja večerja", image: "/album-zadnja-vecerja.jpg", kind: "EP" },
  { year: "2001", title: "De best of", image: "/album-de-best-of.jpg", kind: "KOMPILACIJA" },
  { year: "2003", title: "Prohibicija", image: "/album-prohibicija.jpg", kind: "ALBUM" },
  { year: "2007", title: "Hajdi", image: "/album-hajdi.jpg", kind: "ALBUM" },
  { year: "2014", title: "Recidiv", image: "/album-recidiv.jpg", kind: "ALBUM" },
];

const songs = [
  { title: "Pijemo ga radi", note: "kultna skladba" },
  { title: "Deset majhnih jagrov", note: "Žeja · 1997" },
  { title: "Žeja", note: "Žeja · 1997" },
  { title: "Alkohol je moj idol", note: "Lepi in trezni · 1995" },
  { title: "Ko to tamo peva", note: "singel · 1998" },
];

const chapters = [
  { year: "1993", title: "Litija", text: "Začetek zgodbe in prvo poglavje drink'n'rolla." },
  { year: "1995", title: "Lepi in trezni", text: "Prvenec pri Megatonu in prvi veliki preboj." },
  { year: "1997", title: "Žeja", text: "Album, ki je skupino ponesel na velike odre." },
  { year: "1999", title: "Pivolucija", text: "Še ena plošča in obdobje največjih himen." },
  { year: "2003", title: "Prohibicija", text: "Novo poglavje in velika obletnica." },
  { year: "2014", title: "Recidiv", text: "Album, ki je sklenil pomembno obdobje zgodbe." },
];

export default function Home() {
  const hasConcerts = siteConfig.concerts.length > 0;

  return (
    <div className="bg-[#070605] text-[#f5eee3] selection:bg-amber-500 selection:text-black">
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded bg-amber-500 px-4 py-2 font-bold text-black"
      >
        Preskoči na vsebino
      </a>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070605]/55 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link
            href="/"
            className="font-rye text-sm tracking-[0.28em] text-amber-400 transition hover:text-amber-300 sm:text-base"
          >
            THE DRINKERS
          </Link>

          <nav className="hidden items-center gap-8 text-xs font-bold uppercase tracking-[0.18em] text-white/65 md:flex">
            <a className="transition hover:text-amber-300" href="#glasba">Glasba</a>
            <a className="transition hover:text-amber-300" href="#zgodba">Zgodba</a>
            <a className="transition hover:text-amber-300" href="#koncerti">Koncerti</a>
            <a className="transition hover:text-amber-300" href="#galerija">Galerija</a>
            <a className="transition hover:text-amber-300" href="#kontakt">Kontakt</a>
          </nav>

          <Link
            href="/epk"
            className="hidden items-center gap-2 border border-amber-500/60 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-amber-300 transition hover:bg-amber-500 hover:text-black md:flex"
          >
            EPK <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <details className="relative md:hidden">
            <summary className="flex h-10 cursor-pointer list-none items-center border border-white/15 px-3 text-xs font-bold uppercase tracking-[0.15em] text-amber-300">
              Meni
            </summary>
            <div className="absolute right-0 top-12 w-52 border border-white/10 bg-[#0d0a08]/98 p-2 shadow-2xl">
              {[
                ["#glasba", "Glasba"],
                ["#zgodba", "Zgodba"],
                ["#koncerti", "Koncerti"],
                ["#galerija", "Galerija"],
                ["#kontakt", "Kontakt"],
                ["/epk", "EPK"],
              ].map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  className="block px-4 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white/75 hover:bg-amber-500/10 hover:text-amber-300"
                >
                  {label}
                </a>
              ))}
            </div>
          </details>
        </div>
      </header>

      <main id="main">
        <section className="relative min-h-[100svh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={image("/hero-bg.jpg")}
              alt=""
              className="h-full w-full object-cover object-center"
              fetchPriority="high"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,6,5,.98)_0%,rgba(7,6,5,.84)_28%,rgba(7,6,5,.35)_64%,rgba(7,6,5,.72)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,6,5,.55)_0%,transparent_32%,rgba(7,6,5,.98)_100%)]" />
          </div>

          <div className="absolute inset-0 opacity-[0.14] grain-overlay" />

          <div className="relative z-10 mx-auto grid min-h-[100svh] max-w-[1400px] items-end gap-10 px-4 pb-12 pt-28 sm:px-6 sm:pb-16 lg:grid-cols-[1.15fr_.85fr] lg:px-10 lg:pb-20">
            <div className="max-w-5xl">
              <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.42em] text-amber-300/80 sm:text-xs">
                LITIJA · SLOVENIJA · EST. 1993
              </p>

              <h1 className="font-rye text-[18vw] leading-[0.78] tracking-[-0.06em] text-[#f6ead8] sm:text-[13vw] lg:text-[10.2rem]">
                THE
                <span className="block text-amber-400 [text-shadow:8px_8px_0_#6f160e]">
                  DRINKERS
                </span>
              </h1>

              <div className="mt-8 flex max-w-2xl flex-col gap-5 sm:mt-10 sm:flex-row sm:items-end sm:justify-between">
                <p className="max-w-xl text-base leading-relaxed text-white/60 sm:text-lg">
                  Drink&apos;n&apos;roll iz Litije. Trije desetletji zgodovine, humorja,
                  himen in odrov — predstavljeno brez odvečnega hrupa.
                </p>
                <div className="shrink-0 font-marker text-2xl text-amber-300 -rotate-2">
                  Pijemo ga radi.
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3 sm:mt-10">
                <Link
                  href="#glasba"
                  className="inline-flex min-h-12 items-center gap-2 bg-amber-500 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-black transition hover:bg-amber-300"
                >
                  <Play className="h-4 w-4 fill-current" />
                  Poslušaj
                </Link>
                <Link
                  href="#koncerti"
                  className="inline-flex min-h-12 items-center gap-2 border border-white/35 bg-black/20 px-6 py-3 text-sm font-black uppercase tracking-[0.12em] text-white transition hover:border-amber-400 hover:text-amber-300"
                >
                  <CalendarDays className="h-4 w-4" />
                  Koncerti
                </Link>
              </div>
            </div>

            <div className="hidden justify-self-end lg:block">
              <div className="relative w-[320px] border border-white/15 bg-black/35 p-3 backdrop-blur-sm">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={image("/album-recidiv.jpg")}
                    alt="The Drinkers – Recidiv"
                    className="h-full w-full object-cover transition duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.32em] text-amber-300/80">RELEASE</p>
                    <div className="mt-1 flex items-end justify-between gap-4">
                      <div>
                        <p className="font-rye text-2xl tracking-wider text-white">RECIDIV</p>
                        <p className="text-xs text-white/50">2014</p>
                      </div>
                      <a
                        href={siteConfig.social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 w-10 items-center justify-center border border-white/25 bg-black/50 text-white transition hover:border-amber-400 hover:text-amber-300"
                        aria-label="The Drinkers na YouTubu"
                      >
                        <Youtube className="h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 z-20 border-t border-white/10 bg-black/35 backdrop-blur-md">
            <div className="flex overflow-hidden whitespace-nowrap py-3 text-[10px] font-bold uppercase tracking-[0.32em] text-white/45">
              <div className="drinkers-marquee flex shrink-0 gap-12">
                <span>DRINK &apos;N&apos; ROLL</span><span>1993 — LITIJA</span><span>LEPI IN TREZNI</span><span>ŽEJA</span><span>PIVOLUCIJA</span><span>RECIDIV</span>
                <span>DRINK &apos;N&apos; ROLL</span><span>1993 — LITIJA</span><span>LEPI IN TREZNI</span><span>ŽEJA</span><span>PIVOLUCIJA</span><span>RECIDIV</span>
              </div>
            </div>
          </div>
        </section>

        <section id="glasba" className="border-t border-white/10 bg-[#0b0908] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-amber-300/70">01 / GLASBA</p>
                <h2 className="mt-4 font-rye text-5xl leading-none tracking-tight sm:text-6xl lg:text-7xl">POSLUŠAJ.</h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/45 sm:text-base">
                  Od prvenca <span className="text-white/75">Lepi in trezni</span> do <span className="text-white/75">Recidiva</span>.
                  Glasba je jedro zgodbe — zato je tukaj prej kot vse ostalo.
                </p>
                <a
                  href={siteConfig.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-300 transition hover:text-amber-200"
                >
                  YouTube kanal <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>

              <div className="grid gap-4 sm:grid-cols-[1.15fr_.85fr]">
                <div className="relative overflow-hidden border border-white/10 bg-black">
                  <div className="aspect-video">
                    <iframe
                      src={siteConfig.youtubeEmbedUrl}
                      title="The Drinkers – Deset majhnih jagrov"
                      className="h-full w-full"
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-amber-300/60">FEATURED VIDEO</p>
                      <p className="mt-1 text-sm font-semibold text-white">Deset majhnih jagrov</p>
                    </div>
                    <Youtube className="h-5 w-5 text-amber-400" />
                  </div>
                </div>

                <div className="border border-white/10 bg-[#100d0b] p-5">
                  <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4">
                    <span className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/35">SELECTED TRACKS</span>
                    <Music2 className="h-4 w-4 text-amber-400" />
                  </div>
                  <div className="space-y-1">
                    {songs.map((song, index) => (
                      <div key={song.title} className="group flex items-center gap-3 border-b border-white/5 py-3">
                        <span className="w-5 text-[10px] font-mono text-white/25">0{index + 1}</span>
                        <div className="min-w-0 flex-1">
                          <p className="truncate text-sm font-semibold text-white/85 group-hover:text-amber-300">{song.title}</p>
                          <p className="text-[10px] uppercase tracking-[0.13em] text-white/25">{song.note}</p>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 text-white/15 group-hover:text-amber-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-20 border-t border-white/10 pt-12">
              <div className="mb-8 flex items-end justify-between gap-6">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.34em] text-white/30">THE CATALOGUE</p>
                  <h3 className="mt-2 font-rye text-3xl sm:text-4xl">IZDAJE</h3>
                </div>
                <div className="hidden text-right text-[10px] font-bold uppercase tracking-[0.25em] text-white/25 sm:block">
                  1995 — 2014
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
                {releases.map((release) => (
                  <article key={release.year + "-" + release.title} className="group">
                    <div className="relative aspect-square overflow-hidden border border-white/10 bg-black">
                      <img
                        src={image(release.image)}
                        alt={release.title + " (" + release.year + ")"}
                        className="h-full w-full object-cover grayscale-[20%] transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-3 pt-10">
                        <p className="text-[9px] font-bold tracking-[0.22em] text-amber-300/75">{release.year}</p>
                        <p className="mt-1 text-xs font-bold leading-tight text-white">{release.title}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">{release.kind}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="zgodba" className="relative overflow-hidden border-t border-white/10 bg-[#f0e6d8] text-[#17110d]">
          <div className="grid min-h-[760px] lg:grid-cols-2">
            <div className="relative min-h-[420px] lg:min-h-full">
              <img
                src={image("/drinkers-band-photo.jpg")}
                alt="The Drinkers – arhivska fotografija"
                className="absolute inset-0 h-full w-full object-cover object-center sepia-[0.18]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#17110d]/75 via-transparent to-[#17110d]/15" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-6 sm:bottom-10 sm:left-10 sm:right-10">
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.35em] text-white/60">ARCHIVE</p>
                  <p className="mt-2 max-w-sm font-rye text-2xl text-white sm:text-3xl">TRI DESETLETJA, EN ZVOK.</p>
                </div>
                <span className="hidden rounded-full border border-white/25 px-3 py-1 text-[9px] font-bold uppercase tracking-[0.25em] text-white/70 sm:block">LITIJA</span>
              </div>
            </div>

            <div className="flex items-center p-6 sm:p-10 lg:p-16 xl:p-20">
              <div className="max-w-xl">
                <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#a44f19]/75">02 / ZGODBA</p>
                <h2 className="mt-5 font-rye text-5xl leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                  OD 1993
                  <span className="block text-[#a44f19]">NAPREJ.</span>
                </h2>
                <p className="mt-7 text-base leading-8 text-[#4e4035]">
                  The Drinkers so nastali leta 1993 v Litiji. Njihova zgodba je povezana z
                  živo koncertno energijo, humorjem in slogom, ki so ga sami poimenovali
                  <span className="font-semibold text-[#17110d]"> drink&apos;n&apos;roll</span>.
                </p>
                <p className="mt-5 text-sm leading-7 text-[#6b5c50]">
                  Leta 1995 je izšel prvenec, leta 1997 <span className="font-semibold">Žeja</span>,
                  leta 1999 <span className="font-semibold">Pivolucija</span>, sledili pa so še
                  <span className="font-semibold"> Zadnja večerja</span>, <span className="font-semibold">De best of</span>,
                  <span className="font-semibold"> Prohibicija</span>, <span className="font-semibold">Hajdi</span> in
                  <span className="font-semibold"> Recidiv</span>.
                </p>

                <div className="mt-10 grid grid-cols-3 gap-5 border-t border-[#17110d]/15 pt-8">
                  <div>
                    <p className="font-rye text-4xl text-[#a44f19]">33</p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#79685b]">LET</p>
                  </div>
                  <div>
                    <p className="font-rye text-4xl text-[#a44f19]">8</p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#79685b]">IZDAJ</p>
                  </div>
                  <div>
                    <p className="font-rye text-4xl text-[#a44f19]">∞</p>
                    <p className="mt-1 text-[9px] font-black uppercase tracking-[0.2em] text-[#79685b]">ZABAV</p>
                  </div>
                </div>

                <div className="mt-12 space-y-3">
                  {chapters.map((chapter) => (
                    <div key={chapter.year} className="group flex gap-4 border-b border-[#17110d]/10 py-4">
                      <span className="w-14 shrink-0 font-mono text-[11px] font-bold text-[#a44f19]">{chapter.year}</span>
                      <div className="min-w-0">
                        <p className="font-bold text-[#17110d]">{chapter.title}</p>
                        <p className="mt-1 text-xs leading-5 text-[#7a695b]">{chapter.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="koncerti" className="border-t border-white/10 bg-[#090807] py-20 sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.38em] text-amber-300/70">03 / KONCERTI</p>
                <h2 className="mt-4 max-w-lg font-rye text-5xl leading-[0.94] sm:text-6xl lg:text-7xl">
                  GLASBA JE
                  <span className="block text-amber-400">ZA V ŽIVO.</span>
                </h2>
                <p className="mt-6 max-w-md text-sm leading-7 text-white/40">
                  Aktualnih datumov brez preverjenega vira ne izmišljamo. Tukaj ostane le tisto,
                  kar je mogoče potrditi.
                </p>
              </div>

              {hasConcerts ? (
                <div className="space-y-3">
                  {siteConfig.concerts.map((concert) => (
                    <div key={concert.date + "-" + concert.venue} className="flex flex-col gap-4 border border-white/10 bg-white/[0.02] p-5 sm:flex-row sm:items-center sm:justify-between">
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center border border-amber-500/40 bg-amber-500/10">
                          <CalendarDays className="h-5 w-5 text-amber-300" />
                        </div>
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-300/65">{concert.date}</p>
                          <p className="mt-1 text-base font-bold text-white">{concert.venue}</p>
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-white/35">
                            <MapPin className="h-3.5 w-3.5" /> {concert.city}
                          </p>
                        </div>
                      </div>
                      {concert.link && (
                        <a href={concert.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-amber-300 hover:text-white">
                          Vstopnice <ArrowUpRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              ) : (
                <div className="border border-white/10 bg-[#0e0c0a] p-8 sm:p-10">
                  <div className="flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">NO DATES PUBLISHED</p>
                      <p className="mt-3 max-w-md text-lg font-semibold leading-7 text-white/85">
                        Ko so datumi potrjeni, bodo najprej vidni tukaj.
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href={siteConfig.social.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/65 transition hover:border-amber-400 hover:text-amber-300">
                        Facebook <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                      <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-white/15 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] text-white/65 transition hover:border-amber-400 hover:text-amber-300">
                        YouTube <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        <section id="galerija" className="border-t border-white/10 bg-[#f0e6d8] py-20 text-[#17110d] sm:py-24 lg:py-32">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.38em] text-[#a44f19]/75">04 / GALERIJA</p>
                <h2 className="mt-3 font-rye text-5xl tracking-tight sm:text-6xl">ARHIV.</h2>
              </div>
              <p className="max-w-sm text-xs leading-6 text-[#746256]">
                Albumi, arhivske fotografije in vizualni drobci skozi različna obdobja skupine.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[
                ["/drinkers-band-photo.jpg", "Skupinska fotografija"],
                ["/ko-to-tamo-peva.jpg", "Ko to tamo peva"],
                ["/album-lepi-in-trezni.jpg", "Lepi in trezni"],
                ["/album-zeja.jpg", "Žeja"],
                ["/album-pivolucija.jpg", "Pivolucija"],
                ["/album-prohibicija.jpg", "Prohibicija"],
                ["/album-zadnja-vecerja.jpg", "Zadnja večerja"],
                ["/album-recidiv.jpg", "Recidiv"],
              ].map(([src, alt], index) => (
                <a
                  key={src}
                  href={image(src)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={"group relative overflow-hidden border border-[#17110d]/10 bg-[#d8cdbf] " + (index === 0 ? "md:row-span-2" : "")}
                >
                  <div className="aspect-square">
                    <img src={image(src)} alt={alt} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/75 px-4 py-3 text-xs font-semibold text-white transition-transform duration-300 group-hover:translate-y-0">
                    {alt}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="relative overflow-hidden border-t border-white/10 bg-amber-500 text-black">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(45deg,transparent_48%,#000_49%,#000_51%,transparent_52%)] [background-size:9px_9px]" />
          <div className="relative mx-auto max-w-[1400px] px-4 py-20 sm:px-6 sm:py-24 lg:px-10 lg:py-28">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
              <div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-black/50">05 / BOOKING & KONTAKT</p>
                <h2 className="mt-4 max-w-4xl font-rye text-6xl leading-[0.88] tracking-tight sm:text-7xl lg:text-[7rem]">
                  NAREDI
                  <span className="block">HRUP.</span>
                </h2>
              </div>

              <div className="space-y-4 lg:justify-self-end lg:max-w-md">
                <a
                  href={"tel:" + siteConfig.manager.tel}
                  className="flex items-center justify-between border-t border-black/20 py-4 text-sm font-black uppercase tracking-[0.14em] transition hover:pl-2"
                >
                  <span>{siteConfig.manager.name}</span>
                  <span>{siteConfig.manager.phone}</span>
                </a>
                <a
                  href="mailto:contact@thedrinkers.si"
                  className="flex items-center justify-between border-t border-black/20 py-4 text-sm font-black uppercase tracking-[0.14em] transition hover:pl-2"
                >
                  <span>Email</span>
                  <span className="normal-case tracking-normal">contact@thedrinkers.si</span>
                </a>
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <a
                    href={siteConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-black/20 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-black hover:text-amber-400"
                  >
                    <Instagram className="h-4 w-4" /> Instagram
                  </a>
                  <a
                    href={siteConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border border-black/20 px-4 py-3 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-black hover:text-amber-400"
                  >
                    <ExternalLink className="h-4 w-4" /> Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#070605]">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-5 px-4 py-8 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <p className="font-rye text-lg tracking-wider text-amber-400">THE DRINKERS</p>
            <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.25em] text-white/25">Litija · Slovenia · Drink 'n' Roll</p>
          </div>
          <div className="flex items-center gap-4 text-white/30">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">1993 — {new Date().getFullYear()}</span>
            <Disc3 className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Official Site</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
