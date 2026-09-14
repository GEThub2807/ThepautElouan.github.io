"use client";

import { useMemo, useState } from "react";
import { projects, allTags } from "@/data/projects";
import FilterBar from "@/components/FilterBar";
import ProjectCard from "@/components/ProjectCard";

export default function ProjetsPage() {
  const [active, setActive] = useState([]);

  const toggleTag = (tag) => {
    setActive((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filtered = useMemo(() => {
    if (active.length === 0) return projects;
    return projects.filter((p) => active.every((tag) => p.tags.includes(tag)));
  }, [active]);

  return (
    <div className="bp-grid min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <p className="font-mono text-xs text-amber-500">Catalogue</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Projets
        </h1>
        <p className="mt-3 max-w-[60ch] text-paper/80">
          Prototypes de jam, projets d'école et un moteur maison — filtre par
          moteur ou langage pour aller droit au but.
        </p>

        <div className="mt-8">
          <FilterBar
            tags={allTags}
            active={active}
            onToggle={toggleTag}
            onReset={() => setActive([])}
          />
        </div>

        {filtered.length === 0 ? (
          <p className="mt-16 text-center text-muted">
            Aucun projet ne combine ces filtres pour l'instant. Essaie d'en
            retirer un.
          </p>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
