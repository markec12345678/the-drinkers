import Link from "next/link";
import Image from "next/image";
import { Music, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  const heroBg = siteConfig.imageBaseUrl
    ? `${siteConfig.imageBaseUrl}/hero-bg.jpg`
    : "/hero-bg.jpg";

  return (
    <section className="relative flex min-h-[80svh] flex-col items-center justify-center gap-6 px-4 py-16 text-center sm:min-h-[85vh] sm:gap-8 sm:py-20 md:min-h-[90vh] md:py-28 lg:py-32 grain-overlay">
      <div className="absolute inset-0">
        <Image
          src={heroBg}
          alt=""
          fill
          priority
          unoptimized
          quality={85}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-black/75" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_30%,rgba(217,119,6,0.15)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(153,27,27,0.08)_0%,transparent_60%)]" />
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: `linear-gradient(45deg, transparent 48%, rgba(217,119,6,0.1) 50%, transparent 52%)`,
          backgroundSize: "8px 8px",
        }}
      />
      <div className="container relative z-10 flex flex-col items-center gap-4 sm:gap-6 md:gap-8">
        <h1
          className="animate-wobble-once font-rye text-4xl font-normal leading-tight text-[#f59e0b] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
          style={{
            textShadow:
              "4px 4px 0 #991b1b, -3px -3px 0 #000, 3px -3px 0 #000, -4px 3px 0 #000, 0 0 40px rgba(245,158,11,0.3), 0 0 80px rgba(153,27,27,0.2)",
            letterSpacing: "0.2em",
          }}
        >
          THE DRINKERS
        </h1>
        <p
          className="font-marker text-2xl text-[#d97706] md:text-3xl"
          style={{
            textShadow: "2px 2px 0 #000, 0 0 20px rgba(217,119,6,0.5)",
            transform: "rotate(1deg)",
          }}
        >
          DRINK 'N' ROLL
        </p>
        <p className="text-base font-bold tracking-widest text-amber-500/90 sm:text-lg">
          LITIJA · 1993
        </p>
        <div className="mt-2 flex flex-wrap items-center justify-center gap-3 sm:mt-4 sm:gap-4 md:mt-6 md:gap-6">
          <Link
            href="#glasba"
            className="hover-drunk tap-target inline-flex h-12 min-w-[140px] items-center justify-center rounded-sm border-2 border-amber-600 bg-transparent px-6 text-sm font-bold text-amber-400 transition-all duration-200 hover:border-amber-500 hover:bg-amber-600/30 hover:text-amber-300 active:scale-[0.98] sm:h-14 sm:min-w-[160px] sm:px-10 sm:text-base"
          >
            <Music className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Poslušaj
          </Link>
          <Link
            href="#koncerti"
            className="hover-drunk tap-target inline-flex h-12 min-w-[140px] items-center justify-center rounded-sm border-2 border-amber-600 bg-amber-600 px-6 text-sm font-bold text-black transition-all duration-200 hover:bg-amber-500 hover:text-black active:scale-[0.98] sm:h-14 sm:min-w-[160px] sm:px-10 sm:text-base"
          >
            <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Koncerti
          </Link>
        </div>
      </div>
    </section>
  );
}
