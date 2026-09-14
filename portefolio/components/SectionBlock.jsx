export default function SectionBlock({ section, index }) {
  return (
    <section
      id={section.id}
      className="scroll-mt-32 border-b border-line-500/40 py-10 first:pt-0 last:border-b-0"
    >
      <p className="font-mono text-xs text-amber-500">
        Planche {String(index + 1).padStart(2, "0")}
      </p>
      <h2 className="mt-1.5 font-display text-xl font-semibold text-paper sm:text-2xl">
        {section.label}
      </h2>

      <div className="mt-4 max-w-[68ch] space-y-4 text-[15px] leading-relaxed text-paper/90">
        {section.content.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>

      {section.images?.length > 0 && (
        <div
          className={`mt-6 grid gap-4 ${
            section.images.length > 1 ? "sm:grid-cols-2" : "max-w-xl"
          }`}
        >
          {section.images.map((img) => (
            <figure
              key={img.src}
              className="border border-line-500/60 bg-navy-950"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={img.alt || ""}
                className="aspect-video w-full object-cover"
              />
              {img.alt && (
                <figcaption className="border-t border-line-500/60 px-3 py-2 font-mono text-xs text-muted">
                  {img.alt}
                </figcaption>
              )}
            </figure>
          ))}
        </div>
      )}
    </section>
  );
}
