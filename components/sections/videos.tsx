import { siteConfig } from "@/lib/site-config";

export function Videos() {
  const videoIds = siteConfig.videoIds;

  if (videoIds.length === 0) return null;

  return (
    <section
      id="video"
      className="scroll-mt-16 border-t-2 border-amber-900/40 bg-black py-16 sm:py-20 md:scroll-mt-20 md:py-24 lg:py-32 grain-overlay"
    >
      <div className="container px-4 sm:px-6 lg:px-8">
        <h2
          className="mb-3 text-center font-rye text-2xl tracking-widest text-amber-500 sm:mb-4 sm:text-3xl md:text-4xl"
          style={{ textShadow: "2px 2px 0 #991b1b" }}
        >
          VIDEO
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-sm text-amber-200/70 sm:mb-12 sm:text-base">
          Videospoti in nastopi v živo.
        </p>

        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videoIds.map((videoId) => (
            <div
              key={videoId}
              className="aspect-video overflow-hidden rounded-sm border-2 border-amber-800/40 bg-black/60"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                className="h-full w-full"
                title={`The Drinkers - Video`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
