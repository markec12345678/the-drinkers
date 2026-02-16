"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/drinkers-band-photo.jpg", alt: "The Drinkers – skupinska fotografija" },
  { src: "/ko-to-tamo-peva.jpg", alt: "Ko to tamo peva" },
  { src: "/album-lepi-in-trezni.jpg", alt: "Album Lepi in trezni (1995)" },
  { src: "/album-zeja.jpg", alt: "Album Žeja (1997)" },
  { src: "/album-pivolucija.jpg", alt: "Album Pivolucija (1999)" },
  { src: "/album-prohibicija.jpg", alt: "Album Prohibicija (2003)" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <>
      <section
        id="galerija"
        className="scroll-mt-16 border-t-2 border-amber-900/40 bg-black py-16 sm:py-20 md:scroll-mt-20 md:py-24 lg:py-32 grain-overlay"
      >
        <div className="container px-4 sm:px-6 md:px-6 lg:px-8">
          <h2
            className="mb-3 text-center font-rye text-2xl tracking-widest text-amber-500 sm:mb-4 sm:text-3xl md:text-4xl"
            style={{ textShadow: "2px 2px 0 #991b1b" }}
          >
            GALERIJA
          </h2>
          <p className="mx-auto mb-12 max-w-2xl text-center text-amber-200/70">
            Fotografije skupine in albumi skozi leta.
          </p>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img) => (
              <button
                key={img.src}
                type="button"
                onClick={() => setSelectedImage(img)}
                className="bar-poster group relative aspect-square overflow-hidden rounded-sm border-2 border-amber-800/40 bg-black transition-all hover:border-amber-500/70"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  unoptimized
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {selectedImage && (
        <div
          role="dialog"
          aria-modal
          aria-label="Povečana fotografija"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          style={{ paddingTop: "env(safe-area-inset-top)", paddingBottom: "env(safe-area-inset-bottom)" }}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[85svh] max-w-full md:max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              unoptimized
              className="max-h-[85svh] w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="tap-target fixed right-4 top-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-600 bg-black/90 text-amber-400 transition-colors hover:bg-amber-600/30 active:scale-95"
              aria-label="Zapri"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
