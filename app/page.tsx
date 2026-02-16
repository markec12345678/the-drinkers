import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Gallery } from "@/components/sections/gallery";
import { Music } from "@/components/sections/music";
import { Concerts } from "@/components/sections/concerts";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { BackToTop } from "@/components/back-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <a
        href="#main"
        className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-sm focus:border-2 focus:border-amber-500 focus:bg-amber-950 focus:px-4 focus:py-2 focus:text-amber-200 focus:outline-none"
      >
        Preskoči na vsebino
      </a>
      <Header />
      <main id="main">
        <Hero />
        <About />
        <Gallery />
        <Music />
        <Concerts />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}
