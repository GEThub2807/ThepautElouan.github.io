import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/data/profile";

export default function HomePage() {
  return (
    <>
      {/* HERO — feuille de plan */}
      <section className="bp-grid relative overflow-hidden border-b border-line-500/60">
        <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <div>
              <p className="font-mono text-xs text-amber-500">
                Portfolio — développement &amp; level design
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-[1.05] text-paper text-balance sm:text-5xl lg:text-6xl">
                {profile.name}
              </h1>
              <p className="mt-3 font-display text-xl text-muted sm:text-2xl">
                {profile.role}
              </p>
              <p className="mt-6 max-w-[54ch] text-base text-paper/90 sm:text-lg">
                {profile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/projets"
                  className="inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
                >
                  Voir mes projets
                  <ArrowUpRight size={16} />
                </Link>
                <Link
                  href="/level-design"
                  className="inline-flex items-center gap-2 rounded border border-line-400 px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-amber-500 hover:text-amber-500"
                >
                  Mes fiches de level design
                </Link>
              </div>
            </div>

            {/* Cartouche, comme un cadre de plan technique */}
            <div className="relative">
              <div className="stamp absolute -top-5 right-4 z-10 rounded-sm border-2 border-amber-500 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-amber-500 sm:right-8">
                {profile.status}
              </div>
              <dl className="reg-corners border border-line-400 bg-navy-900/70 text-amber-500/80">
                {[
                  ["Rôle", profile.role],
                  ["Recherche", "Alternance"],
                  ["Disponibilité", profile.availability],
                  ["Localisation", profile.location],
                  ["Contact", profile.email]
                ].map(([label, value], i) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-4 px-4 py-3 text-sm ${
                      i !== 0 ? "border-t border-line-500/60" : ""
                    }`}
                  >
                    <dt className="font-mono text-xs text-muted">{label}</dt>
                    <dd className="text-right text-paper">{value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* PRÉSENTATION */}
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper">
              Présentation
            </h2>
            <div className="mt-5 space-y-4 max-w-[68ch] text-[15px] leading-relaxed text-paper/90 sm:text-base">
              {profile.bio.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {profile.skills.map((group) => (
              <div key={group.group}>
                <h3 className="font-mono text-xs text-muted">
                  {group.group}
                </h3>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line-400 px-3 py-1 text-sm text-paper/90"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="border-t border-line-500/60 bg-navy-900/40">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
          <h2 className="font-display text-2xl font-semibold text-paper">
            Contact
          </h2>
          <p className="mt-2 max-w-[60ch] text-paper/80">
            Le plus simple reste le mail — je réponds sous 48h, y compris le
            week-end en période de recherche active.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded bg-amber-500 px-4 py-2.5 text-sm font-semibold text-navy-950 transition-transform hover:-translate-y-0.5"
            >
              <Mail size={16} />
              {profile.email}
            </a>
            {profile.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                className="inline-flex items-center gap-2 rounded border border-line-400 px-4 py-2.5 text-sm font-medium text-paper transition-colors hover:border-amber-500 hover:text-amber-500"
              >
                {link.label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
