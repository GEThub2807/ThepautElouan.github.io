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
    slug: "aosts",
    title: "AOSTS",
    year: "2026",
    tags: ["Unreal Engine", "C++", "UI"],
    team: "solo, stage au sein du CASPOA",
    role: "UI & gameplay programmer",
    summary:
      "Refonte d'interfaces utilisateur et ajouts de fonctionnalités réalistes pour un simulateur de vol de drône et de missions aériennes pédagogiques.",
    description: [
      "Recherches sur l'HUD du Reaper, drône éxistant et utilisé pour appliqué ce même HUD dans le simulateur. Amélioration de l'UX et de l'UI pour rendre la création de scénario plus intuitive et user friendly.",
      "Amélioration des déplacements de véhicules sur une spline, rendant la rencontre d'obstacles plus réalistes et une mise en formation dès qu'un groupe de véhicule doit s'arrêter."
    ],
    media: [
      { type: "image", src: "/images/projects/aosts_ui_drone.png", alt: "HUD drone améliorée" },
      { type: "video", src: "/videos/aosts_ui_demo.mp4", poster: "/images/projects/aosts_ui_paths.png" },
      { type: "image", src: "/images/projects/aosts_ui_errors.png", alt: "Affichage d'erreurs utilisateur dans l'interface" },
      { type: "video", src: "/videos/aosts_ui_demo.mp4", poster: "/images/projects/aosts_minia_crater.png" }
    ]
  },
  {
    slug: "overhead",
    title: "Overhead",
    year: "2026",
    tags: ["Moteur Custom", "LUA", "C++"],
    team: "Équipe de 15, 5 artistes, 7 programmeurs moteurs, 3 developpeurs gameplay",
    role: "Lead gameplay programmer, level designer",
    summary:
      "Jeu d'énigmes en coopération dans une station spatiale où chaque joueur contrôle une gravité différente. Le but est de faire collaborer les joueurs pour atteindre la sortie.",
    description: [
      "Chaque salle est coupée en 2 et un joueur démarre au plafond, l'autre au sol. Les joueurs doivent collaborer pour résoudre des énigmes et atteindre la sortie, en utilisant la gravité à leur avantage.",
      "Un éditeur de niveau maison en interne pour itérer plus vite. Conception du jeu en LUA, avec un moteur maison en C++ pour gérer le rendu, la physique et l'audio, inspiré de Godot car nodal."
    ],
    media: [
      { type: "image", src: "/images/projects/overhead_moteur.png", alt: "Visuel de l'interface du moteur custom" },
      { type: "video", src: "/videos/overhead_gameplay(3).mkv", poster: "/images/projects/overhead_bouee.png" },
      { type: "video", src: "/videos/overhead_gameplay(4).mkv", poster: "/images/projects/overhead_bouee.png" },
      { type: "video", src: "/videos/overhead_gameplay(2).mkv", poster: "/images/projects/overhead_bouee.png" },
      { type: "video", src: "/videos/overhead_gameplay.mkv", poster: "/images/projects/overhead_bouee.png" }
    ]
  },
  {
    slug: "hungry-shark",
    title: "Hungry Shark But a Bit Better(Kinda)",
    year: "2026",
    tags: ["Unity", "Généraion procédurale", "C#"],
    team: "Équipe de 2 — projet d'école",
    role: "gameplay programmer",
    summary:
      "Jeu inspiré du jeu 'Hungry Shark' mais avec une map générée procéduralement.",
    description: [
      "On incarne un requin qui se déplace dans les eaux afin de dévorer un maximum de poissons tout en évitant les méduses dans un temps imparti.",
      "L'idée du temps imparti rend le jeu plus amusant et donne un côté plus arcade, qui permet d'affronter un ami sur une seed pour avoir le plus de points que l'autre."
    ],
    links: [
      { label: "Lien Itchi.io", href: "https://gethub2807.itch.io/hungryshark" }
    ],
    media: [
      { type: "video", src: "/videos/hungry_shark.mp4", poster: "/images/projects/hungry_shark_minia.png" }
    ]
  },
  {
    slug: "highway_road",
    title: "Highway Road Simulator",
    year: "2026",
    tags: ["Unity", "C#", "UI"],
    team: "solo - 2 semaines",
    role: "UI & gameplay programmer",
    summary:
      "Le jeu à boire de l'autoroute en version numérique. Faite une erreur et buvez un coup ! Attention à garder la tête claire car vous pourriez avoir des visions.",
    description: [
      "Projet d'école dans le but d'apprendre le modèle MVC et de créer une interface utilisateur intuitive et simple à utiliser.",
      "Jeu polish avec ambiance sonore agréable dans le but de créer une expérience immersive et amusante pour les joueurs."
    ],
    media: [
      { type: "image", src: "/images/projects/highwayRoad.png", alt: "screen du jeu 'Highway Road Simulator'" },
      { type: "video", src: "/videos/highway_road.mp4", poster: "/images/projects/highway_road_minia.jpg" }
    ]
  },
  {
    slug: "dark-ruins",
    title: "Dark Ruins Trailer",
    year: "2026",
    tags: ["Unreal Engine", "Sequencer"],
    team: "solo - 1 semaine",
    role: "Cinematic artist",
    summary:
      "Court trailer d'une map récupérée sur le marketplace d'Unreal Engine. Le but était de créer un trailer immersif et de mettre en avant les assets réalisés.",
    description: [
      "Projet perso pour apprendre des outils d'Unreal Engine 5, le sequencer et le plugin Movie Render Queue.",
      "Cela m'a également permis d'apprendre les bases du montage vidéo et de la post-production, ainsi que de créer une ambiance sonore immersive pour le trailer."
    ],
    media: [
      { type: "video", src: "/videos/dark_ruins_trailer.mp4", poster: "/images/projects/dark_ruins_trailer_minia.png" }
    ]
  },
  {
    slug: "ShootEmUp",
    title: "Shoot 'Em Up pour le musée Malartre",
    year: "2025",
    tags: ["SFML", "C#"],
    team: "Équipe de 3 - 2 semaines",
    role: "Lead gameplay programmer",
    summary:
      "Un Shoot 'Em Up en 2D pour le musée Malartre, donc dans le thème de l'automobile...et de l'espace(?). Le but est de créer un jeu amusant et immersif pour les visiteurs du musée.",
    description: [
      "Un classique en terme de gameplay, mais avec un twist : le joueur doit éviter les obstacles et tirer sur les ennemis à l'aide de plusieurs armes équipées dans la voiture.",
      "Une première expérience en tant que Lead gameplay programmer, où j'ai pu apprendre à gérer une équipe de développeurs et à travailler en collaboration avec des artistes."
    ],
    media: [
      { type: "video", src: "/videos/shootemup_gameplay.mp4", poster: "/images/projects/shootemup_minia.jpg" }
    ]
  }
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
).sort();
