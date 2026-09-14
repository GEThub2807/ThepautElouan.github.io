"use client";

import { useEffect, useState } from "react";

export default function TableOfContents({ sections }) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Mobile / tablet : barre horizontale collante */}
      <nav
        aria-label="Sommaire"
        className="sticky top-[57px] z-30 -mx-5 mb-6 overflow-x-auto border-b border-line-500/60 bg-navy-950/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:hidden"
      >
        <ul className="flex gap-4 whitespace-nowrap">
          {sections.map((s, i) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={`font-mono text-xs uppercase tracking-wide ${
                  activeId === s.id ? "text-amber-500" : "text-muted"
                }`}
              >
                {String(i + 1).padStart(2, "0")} · {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop : sommaire latéral fixe */}
      <nav
        aria-label="Sommaire"
        className="sticky top-24 hidden h-fit border border-line-500/60 bg-navy-900/50 lg:block"
      >
        <p className="border-b border-line-500/60 px-4 py-3 font-mono text-[11px] uppercase tracking-wide text-muted">
          Sommaire
        </p>
        <ul>
          {sections.map((s, i) => (
            <li key={s.id} className="border-b border-line-500/40 last:border-b-0">
              <a
                href={`#${s.id}`}
                className={`flex items-baseline gap-2 px-4 py-2.5 text-sm transition-colors ${
                  activeId === s.id
                    ? "bg-navy-800 text-amber-500"
                    : "text-paper/80 hover:text-amber-500"
                }`}
              >
                <span className="font-mono text-xs text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
