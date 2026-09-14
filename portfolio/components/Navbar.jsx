"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "@/data/profile";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/projets", label: "Projets" },
  { href: "/level-design", label: "Level Design" }
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line-500/60 bg-navy-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <Link
          href="/"
          className="font-display text-lg font-semibold tracking-tight text-paper"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </Link>

        <nav className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded px-3 py-2 text-sm transition-colors ${
                  active
                    ? "text-amber-500"
                    : "text-muted hover:text-paper"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="ml-2 rounded border border-amber-500/70 px-3 py-2 text-sm font-medium text-amber-500 transition-colors hover:bg-amber-500 hover:text-navy-950"
          >
            Me contacter
          </a>
        </nav>

        <button
          type="button"
          className="rounded p-2 text-paper sm:hidden"
          aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-line-500/60 bg-navy-950 px-5 pb-4 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded px-2 py-3 text-base text-paper/90"
            >
              {link.label}
            </Link>
          ))}
          <a
            href={`mailto:${profile.email}`}
            onClick={() => setOpen(false)}
            className="mt-2 block rounded border border-amber-500/70 px-3 py-2 text-center text-sm font-medium text-amber-500"
          >
            Me contacter
          </a>
        </nav>
      )}
    </header>
  );
}
