import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { levelDesigns } from "@/data/leveldesign";
import { projects } from "@/data/projects";
import TableOfContents from "@/components/TableOfContents";
import SectionBlock from "@/components/SectionBlock";

export function generateStaticParams() {
  return levelDesigns.map((ld) => ({ slug: ld.slug }));
}

export function generateMetadata({ params }) {
  const ld = levelDesigns.find((l) => l.slug === params.slug);
  return { title: ld ? ld.title : "Level Design" };
}

export default function LevelDesignDetailPage({ params }) {
  const ld = levelDesigns.find((l) => l.slug === params.slug);
  if (!ld) notFound();

  const relatedProject = projects.find((p) => p.slug === ld.project);
  const sections = ld.sections.map((s) => ({ id: s.id, label: s.label }));

  return (
    <div className="bp-grid min-h-[70vh]">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <Link
          href="/level-design"
          className="inline-flex items-center gap-1.5 font-mono text-xs text-muted hover:text-amber-500"
        >
          <ArrowLeft size={14} />
          Retour aux dossiers de level design
        </Link>

        <div className="mt-6 border border-line-400 bg-navy-900/60">
          <div className="grid gap-6 border-b border-line-500/60 p-6 sm:p-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <p className="font-mono text-xs text-amber-500">
                Dossier de level design
              </p>
              <h1 className="mt-2 font-display text-2xl font-semibold text-paper sm:text-3xl">
                {ld.title}
              </h1>
              <p className="mt-2 max-w-[60ch] text-paper/80">{ld.summary}</p>
              {relatedProject && (
                <Link
                  href="/projets"
                  className="mt-3 inline-flex items-center gap-1.5 text-sm text-amber-500 hover:text-amber-400"
                >
                  Voir le projet « {ld.projectTitle} »
                  <ArrowUpRight size={14} />
                </Link>
              )}
            </div>

            <dl className="grid min-w-[220px] grid-cols-1 gap-px border border-line-500/60 bg-line-500/30 text-sm">
              {[
                ["Moteur", ld.meta.engine],
                ["Durée", ld.meta.duration],
                ["Rôle", ld.meta.role]
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="flex items-center justify-between gap-4 bg-navy-900 px-4 py-2.5"
                >
                  <dt className="font-mono text-xs text-muted">{label}</dt>
                  <dd className="text-right text-paper">{value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="p-5 sm:p-8 lg:grid lg:grid-cols-[200px_1fr] lg:items-start lg:gap-10">
            <TableOfContents sections={sections} />

            <div>
              {ld.sections.map((section, i) => (
                <SectionBlock key={section.id} section={section} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
