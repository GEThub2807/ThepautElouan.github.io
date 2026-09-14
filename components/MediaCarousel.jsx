"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, Play } from "lucide-react";

export default function MediaCarousel({ media, title }) {
  const [index, setIndex] = useState(0);

  if (!media || media.length === 0) return null;

  const go = (delta) => {
    setIndex((i) => (i + delta + media.length) % media.length);
  };

  const current = media[index];

  return (
    <div className="group relative aspect-video w-full overflow-hidden border border-line-500/70 bg-navy-950">
      <div className="absolute inset-0">
        {current.type === "video" && (
          <video
            key={current.src}
            src={current.src}
            poster={current.poster}
            controls
            className="h-full w-full object-cover"
          >
            Ton navigateur ne supporte pas la lecture vidéo intégrée.
          </video>
        )}

        {current.type === "youtube" && (
          <iframe
            key={current.id}
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${current.id}`}
            title={current.title || title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        )}

        {current.type === "image" && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={current.src}
            src={current.src}
            alt={current.alt || title}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {media.length > 1 && (
        <>
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Média précédent"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-navy-950/80 p-1.5 text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Média suivant"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-navy-950/80 p-1.5 text-paper opacity-0 transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
          >
            <ChevronRight size={20} />
          </button>

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
            {media.map((m, i) => (
              <button
                key={i}
                type="button"
                aria-label={`Aller au média ${i + 1}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-5 bg-amber-500" : "w-1.5 bg-paper/40"
                }`}
              />
            ))}
          </div>
        </>
      )}

      {current.type !== "image" && (
        <span className="pointer-events-none absolute right-2 top-2 inline-flex items-center gap-1 rounded bg-navy-950/80 px-2 py-1 font-mono text-[10px] uppercase text-amber-500">
          <Play size={10} /> {current.type === "youtube" ? "vidéo" : "gameplay"}
        </span>
      )}
    </div>
  );
}
