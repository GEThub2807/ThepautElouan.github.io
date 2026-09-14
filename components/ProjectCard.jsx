"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, X } from "lucide-react";
import MediaCarousel from "@/components/MediaCarousel";
import Tag from "@/components/Tag";

export default function ProjectCard({ project }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <article className="reg-corners flex flex-col border border-line-500/70 bg-navy-900/50 text-line-500">
        <MediaCarousel media={project.media} title={project.title} />

        <div className="flex flex-1 flex-col gap-3 p-5 text-paper">
          <div className="flex items-start justify-between gap-3">
            <h3 className="font-display text-lg font-semibold leading-snug">
              {project.title}
            </h3>
            <span className="shrink-0 font-mono text-xs text-muted">
              {project.year}
            </span>
          </div>

          <p className="text-sm leading-relaxed text-paper/80">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tags.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-sm font-medium text-amber-500 hover:text-amber-400"
          >
            Voir le détail
            <ArrowUpRight size={15} />
          </button>
        </div>
      </article>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`modal-title-${project.slug}`}
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-navy-950/85 p-4 backdrop-blur-sm sm:items-center sm:p-8"
          onClick={(e) => {
            if (e.target === e.currentTarget) setOpen(false);
          }}
        >
          <div className="reg-corners w-full max-w-2xl border border-line-400 bg-navy-900 text-line-500">
            <div className="flex items-start justify-between gap-4 border-b border-line-500/60 p-5 text-paper">
              <div>
                <h3
                  id={`modal-title-${project.slug}`}
                  className="font-display text-xl font-semibold"
                >
                  {project.title}
                </h3>
                <p className="mt-1 font-mono text-xs text-muted">
                  {project.team}
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Fermer"
                className="rounded p-1 text-muted hover:text-amber-500"
              >
                <X size={20} />
              </button>
            </div>

            <div className="p-5">
              <MediaCarousel media={project.media} title={project.title} />
            </div>

            <div className="space-y-4 px-5 pb-5 text-paper">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </div>

              <dl className="grid grid-cols-2 gap-x-4 gap-y-2 border-y border-line-500/60 py-3 text-sm sm:grid-cols-3">
                <div>
                  <dt className="font-mono text-[11px] text-muted">Rôle</dt>
                  <dd>{project.role}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted">Année</dt>
                  <dd>{project.year}</dd>
                </div>
                <div>
                  <dt className="font-mono text-[11px] text-muted">Équipe</dt>
                  <dd>{project.team}</dd>
                </div>
              </dl>

              <div className="space-y-3 text-[15px] leading-relaxed text-paper/90">
                {project.description.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>

              {project.links?.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 rounded border border-line-400 px-3 py-1.5 text-sm font-medium hover:border-amber-500 hover:text-amber-500"
                    >
                      {link.label}
                      <ArrowUpRight size={14} />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
