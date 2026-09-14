import os

OUT_PROJECTS = "public/images/projects"
OUT_LD = "public/images/ld"

os.makedirs(OUT_PROJECTS, exist_ok=True)
os.makedirs(OUT_LD, exist_ok=True)

TEMPLATE = """<svg viewBox="0 0 1280 720" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="{c1}"/>
      <stop offset="100%" stop-color="{c2}"/>
    </linearGradient>
    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#2C4E70" stroke-width="1" opacity="0.35"/>
    </pattern>
  </defs>
  <rect width="1280" height="720" fill="url(#bg)"/>
  <rect width="1280" height="720" fill="url(#grid)"/>
  <rect x="1" y="1" width="1278" height="718" fill="none" stroke="#2C4E70" stroke-width="2"/>
  <line x1="0" y1="0" x2="60" y2="60" stroke="#FFB020" stroke-width="2" opacity="0.6"/>
  <line x1="1280" y1="720" x2="1220" y2="660" stroke="#FFB020" stroke-width="2" opacity="0.6"/>
  <text x="48" y="72" font-family="monospace" font-size="20" fill="#FFB020" opacity="0.9">{tag}</text>
  <text x="48" y="660" font-family="sans-serif" font-size="34" fill="#E9EFF5" opacity="0.95">{label}</text>
</svg>"""

# (filename, category tag shown top-left, big label bottom-left, color1, color2)
projects = [
    ("echos-1", "ECHOS DU GOUFFRE — 01", "Blockout — galerie inondée", "#0B1520", "#16283D"),
    ("echos-2", "ECHOS DU GOUFFRE — 02", "Poster vidéo — gameplay", "#0B1520", "#1D3350"),
    ("echos-3", "ECHOS DU GOUFFRE — 03", "Art pass — phare englouti", "#0B1520", "#16283D"),
    ("gravity-1", "GRAVITY SHIFT — 01", "Plateformes en inversion", "#101E30", "#1D3350"),
    ("gravity-2", "GRAVITY SHIFT — 02", "Editeur de niveau interne", "#101E30", "#16283D"),
    ("gravity-3", "GRAVITY SHIFT — 03", "Fin de niveau", "#101E30", "#1D3350"),
    ("siege-1", "PIXEL SIEGE — 01", "Vague 7 — pont effondre", "#0B1520", "#16283D"),
    ("siege-2", "PIXEL SIEGE — 02", "Arbre de ressources", "#0B1520", "#1D3350"),
    ("siege-3", "PIXEL SIEGE — 03", "Carte complete", "#0B1520", "#16283D"),
    ("moteur-1", "MOTEUR MAISON — 01", "Debug collisions AABB", "#101E30", "#16283D"),
    ("moteur-2", "MOTEUR MAISON — 02", "Batching de sprites", "#101E30", "#1D3350"),
]

ld_images = [
    ("galerie-cover", "LD — GALERIE DU PHARE", "Dossier de level design", "#0B1520", "#1D3350"),
    ("galerie-schema-1", "SCHEMA", "Flow en trois segments", "#0B1520", "#16283D"),
    ("galerie-blockout-1", "BLOCKOUT", "Vue de dessus", "#101E30", "#16283D"),
    ("galerie-blockout-2", "BLOCKOUT", "Vue en jeu — segment 3", "#101E30", "#1D3350"),
    ("galerie-artpass-1", "ART PASS", "Segment 1 rechauffe", "#0B1520", "#16283D"),
    ("galerie-artpass-2", "ART PASS", "Segment 3 — sediments", "#0B1520", "#1D3350"),
    ("pont-cover", "LD — LE PONT ROMPU", "Dossier de level design", "#0B1520", "#1D3350"),
    ("pont-schema-1", "SCHEMA", "Chronologie vague 7", "#0B1520", "#16283D"),
    ("pont-blockout-1", "BLOCKOUT", "Carte greybox", "#101E30", "#16283D"),
    ("pont-artpass-1", "ART PASS", "Fissure visible — vague 1", "#0B1520", "#16283D"),
    ("pont-artpass-2", "ART PASS", "Effondrement — vague 7", "#0B1520", "#1D3350"),
]

def write(path, items):
    for name, tag, label, c1, c2 in items:
        svg = TEMPLATE.format(tag=tag, label=label, c1=c1, c2=c2)
        with open(os.path.join(path, f"{name}.svg"), "w") as f:
            f.write(svg)

write(OUT_PROJECTS, projects)
write(OUT_LD, ld_images)
print("Generated", len(projects), "project placeholders and", len(ld_images), "LD placeholders")
