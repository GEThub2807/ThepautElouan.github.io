import { profile } from "@/data/profile";

export default function Footer() {
  return (
    <footer className="border-t border-line-500/60 bg-navy-950">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs">
          {profile.name} — {profile.location}
        </p>
      </div>
    </footer>
  );
}
