"use client";

import Image from "next/image";
import { useState } from "react";
import { X } from "lucide-react";

const galleryImages = [
  { src: "/drinkers-band-photo.jpg", alt: "The Drinkers – skupinska fotografija" },
  { src: "/ko-to-tamo-peva.jpg", alt: "Ko to tamo peva" },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null);

  return (
    <>
      <section
        id="galerija"
        className="scroll-mt-20 border-t-2 border-amber-900/40 bg-black py-24 md:py-32 grain-overlay"
      >
        <div className="container px-4 md:px-6">
          <h2
            className="mb-4 text-center font-rye text-3xl tracking-widest text-amber-500 md:text-4xl"
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
                className="group relative aspect-square overflow-hidden rounded-sm border-2 border-amber-800/40 bg-black transition-all hover:border-amber-500/70 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)]"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-h-[90vh] max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={600}
              className="max-h-[90vh] w-auto object-contain"
            />
            <button
              type="button"
              onClick={() => setSelectedImage(null)}
              className="absolute -right-2 -top-2 flex h-10 w-10 items-center justify-center rounded-full border-2 border-amber-600 bg-black/80 text-amber-400 transition-colors hover:bg-amber-600/30"
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
