"use client";

export default function FilterBar({ tags, active, onToggle, onReset }) {
  return (
    <div
      role="group"
      aria-label="Filtrer les projets par technologie"
      className="flex flex-wrap items-center gap-2"
    >
      <button
        type="button"
        onClick={onReset}
        aria-pressed={active.length === 0}
        className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
          active.length === 0
            ? "border-amber-500 bg-amber-500 text-navy-950"
            : "border-line-400 text-paper/80 hover:border-amber-500/70 hover:text-amber-500"
        }`}
      >
        Tous
      </button>
      {tags.map((tag) => {
        const isActive = active.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
            aria-pressed={isActive}
            className={`rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors ${
              isActive
                ? "border-amber-500 bg-amber-500 text-navy-950"
                : "border-line-400 text-paper/80 hover:border-amber-500/70 hover:text-amber-500"
            }`}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}
