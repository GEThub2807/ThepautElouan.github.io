import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { levelDesigns } from "@/data/leveldesign";

export const metadata = {
  title: "Level Design"
};

export default function LevelDesignPage() {
  return (
    <div className="bp-grid min-h-[60vh]">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <p className="font-mono text-xs text-amber-500">Dossiers</p>
        <h1 className="mt-3 font-display text-3xl font-semibold text-paper sm:text-4xl">
          Level Design
        </h1>
        <p className="mt-3 max-w-[60ch] text-paper/80">
          Le détail derrière un blockout : intentions, schéma de flow, notes
          de playtest et passe artistique, planche par planche.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {levelDesigns.map((ld) => (
            <Link
              key={ld.slug}
              href={`/level-design/${ld.slug}`}
              className="reg-corners group flex flex-col border border-line-500/70 bg-navy-900/50 text-line-500 transition-colors hover:border-amber-500/70"
            >
              <div className="aspect-[16/9] w-full overflow-hidden border-b border-line-500/70">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={ld.cover}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                />
              </div>
              <div className="flex flex-1 flex-col gap-2 p-5 text-paper">
                <p className="font-mono text-xs text-muted">
                  {ld.projectTitle} · {ld.meta.engine}
                </p>
                <h2 className="font-display text-lg font-semibold">
                  {ld.title}
                </h2>
                <p className="text-sm leading-relaxed text-paper/80">
                  {ld.summary}
                </p>
                <span className="mt-auto inline-flex w-fit items-center gap-1.5 pt-3 text-sm font-medium text-amber-500">
                  Ouvrir la fiche
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
