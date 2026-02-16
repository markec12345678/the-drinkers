import Link from "next/link";
import Image from "next/image";
import { Music, Calendar } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center gap-8 px-4 py-24 text-center md:py-32 grain-overlay">
      <div className="absolute inset-0">
        <Image
          src="/hero-bg.jpg"
          alt=""
          fill
          priority
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
      <div className="container relative z-10 flex flex-col items-center gap-8">
        <h1
          className="font-rye text-5xl font-normal tracking-[0.15em] text-[#f59e0b] md:text-7xl lg:text-8xl"
          style={{
            textShadow:
              "4px 4px 0 #991b1b, -3px -3px 0 #000, 3px -3px 0 #000, -4px 3px 0 #000, 0 0 40px rgba(245,158,11,0.3), 0 0 80px rgba(153,27,27,0.2)",
            letterSpacing: "0.2em",
            transform: "rotate(-2deg)",
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
        <p className="text-lg font-bold tracking-widest text-amber-500/90">
          LITIJA · 1993
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6">
          <Link
            href="#glasba"
            className="inline-flex h-14 min-w-[160px] items-center justify-center rounded-sm border-2 border-amber-600 bg-transparent px-10 text-base font-bold text-amber-400 transition-all duration-200 hover:border-amber-500 hover:bg-amber-600/30 hover:text-amber-300 active:scale-[0.98]"
          >
            <Music className="mr-2 h-5 w-5" />
            Poslušaj
          </Link>
          <Link
            href="#koncerti"
            className="inline-flex h-14 min-w-[160px] items-center justify-center rounded-sm border-2 border-amber-600 bg-amber-600 px-10 text-base font-bold text-black transition-all duration-200 hover:bg-amber-500 hover:text-black active:scale-[0.98]"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Koncerti
          </Link>
        </div>
      </div>
    </section>
  );
}
