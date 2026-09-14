// Ajoute, retire ou modifie tes projets ici.
// `tags` sert au filtre de la page /projets : garde des libellés courts et cohérents
// (ex: "Unreal Engine", "Unity", "Godot", "C++", "C#") pour que le tri reste lisible.
//
// media: liste ordonnée d'images et/ou d'une vidéo.
//   { type: "image", src, alt }
//   { type: "video", src, poster }   -> dépose ton .mp4 dans /public/videos
//   { type: "youtube", id, title }   -> id = ID de la vidéo YouTube

export const projects = [
  {
    slug: "echos-du-gouffre",
    title: "Échos du Gouffre",
    year: "2026",
    tags: ["Unreal Engine", "C++", "Blueprint"],
    team: "Équipe de 4 — projet de fin de licence",
    role: "Level designer & gameplay programmer",
    summary:
      "Exploration horrifique sous-marine où la lumière est une ressource qu'on rationne, pas un confort.",
    description: [
      "Un système de lampe à autonomie limitée pousse le joueur à choisir entre avancer vite dans le noir ou avancer lentement mais visible — et donc repérable par les créatures qui suivent le bruit.",
      "J'ai conçu le level design des trois premières zones (greybox, pacing, placement des rencontres) et codé le comportement d'IA de traque en C++, exposé ensuite à l'équipe design via des Blueprints pour l'itération rapide."
    ],
    links: [
      { label: "Voir sur itch.io", href: "https://ton-pseudo.itch.io/echos-du-gouffre" },
      { label: "Dépôt GitHub", href: "https://github.com/ton-pseudo/echos-du-gouffre" }
    ],
    media: [
      { type: "image", src: "/images/projects/echos-1.svg", alt: "Blockout d'une galerie inondée" },
      { type: "video", src: "/videos/echos-gameplay.mp4", poster: "/images/projects/echos-2.svg" },
      { type: "image", src: "/images/projects/echos-3.svg", alt: "Passe lumière dans la zone du phare englouti" }
    ]
  },
  {
    slug: "gravity-shift",
    title: "Gravity Shift",
    year: "2025",
    tags: ["Unity", "C#"],
    team: "Solo — Game jam 48h (Ludum Dare)",
    role: "Programmeur & designer unique",
    summary:
      "Puzzle-platformer où retourner la gravité d'une seule plateforme redessine tout le niveau.",
    description: [
      "Contrainte de jam oblige : une seule mécanique, poussée le plus loin possible en 48h. Chaque plateforme a un état gravité propre, et le joueur compose des chemins en inversant les bonnes plateformes dans le bon ordre.",
      "24 niveaux livrés, un éditeur de niveau maison en interne pour itérer plus vite que l'inspecteur Unity, et un système de replay pour visualiser où les testeurs bloquaient."
    ],
    links: [
      { label: "Jouer sur itch.io", href: "https://ton-pseudo.itch.io/gravity-shift" }
    ],
    media: [
      { type: "image", src: "/images/projects/gravity-1.svg", alt: "Niveau avec plateformes en inversion de gravité" },
      { type: "image", src: "/images/projects/gravity-2.svg", alt: "Éditeur de niveau interne" },
      { type: "image", src: "/images/projects/gravity-3.svg", alt: "Écran de fin de niveau" }
    ]
  },
  {
    slug: "pixel-siege",
    title: "Pixel Siege",
    year: "2025",
    tags: ["Godot", "GDScript"],
    team: "Équipe de 3 — projet de module",
    role: "Level designer & intégration gameplay",
    summary:
      "Tower defense en pixel art où le terrain se déforme à chaque vague et oblige à repenser sa défense.",
    description: [
      "Le terrain n'est pas figé : certaines vagues font s'effondrer des ponts ou ouvrent des tunnels, ce qui force à replanifier les zones de tir plutôt qu'à optimiser une seule fois en début de partie.",
      "J'ai designé la courbe de difficulté des 12 vagues et intégré les données de vague dans des ressources Godot (.tres) pour que le reste de l'équipe puisse en ajouter sans toucher au code."
    ],
    links: [
      { label: "Dépôt GitHub", href: "https://github.com/ton-pseudo/pixel-siege" }
    ],
    media: [
      { type: "image", src: "/images/projects/siege-1.svg", alt: "Vague 7, pont effondré" },
      { type: "image", src: "/images/projects/siege-2.svg", alt: "Arbre de ressources de vague" },
      { type: "image", src: "/images/projects/siege-3.svg", alt: "Carte complète de la carte de siège" }
    ]
  },
  {
    slug: "moteur-maison",
    title: "Moteur maison",
    year: "2024",
    tags: ["C++"],
    team: "Solo — projet personnel",
    role: "Programmeur",
    summary:
      "Un petit moteur 2D écrit sans framework de jeu, pour comprendre ce que Unity et Godot font à ma place.",
    description: [
      "Boucle de jeu, rendu par batching de sprites, détection de collisions AABB et un petit système d'entités maison — tout en C++ pur au-dessus de SDL2, sans ECS ni moteur physique tiers.",
      "Le but n'était pas de remplacer un moteur existant mais de savoir précisément ce qui se passe entre l'appui sur une touche et le pixel qui bouge à l'écran."
    ],
    links: [
      { label: "Dépôt GitHub", href: "https://github.com/ton-pseudo/moteur-maison" }
    ],
    media: [
      { type: "image", src: "/images/projects/moteur-1.svg", alt: "Rendu de debug des boîtes de collision" },
      { type: "image", src: "/images/projects/moteur-2.svg", alt: "Batching de sprites en action" }
    ]
  }
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
