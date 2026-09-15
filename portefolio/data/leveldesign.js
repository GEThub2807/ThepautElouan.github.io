// Chaque entrée devient une fiche de level design consultable sur /level-design/[slug].
// `sections` alimente à la fois le sommaire cliquable et le contenu de la fiche.
// Garde au minimum les id "schema", "blockout" et "art-pass" si tu veux rester
// cohérent avec la structure attendue, mais tu peux en ajouter d'autres.

export const levelDesigns = [
  {
    slug: "glimmer-of-hope",
    title: "Glimmer of Hope",
    project: "echos-du-gouffre",
    projectTitle: "Échos du Gouffre",
    summary:
      "Première zone jouable : apprendre au joueur à économiser sa lumière sans jamais lui dire de le faire.",
    cover: "/images/ld/galerie-cover.svg",
    meta: {
      engine: "Unreal Engine 5",
      duration: "≈ 6 minutes de jeu",
      role: "Level design solo, intégration en binôme"
    },
    sections: [
      {
        id: "intentions",
        label: "Intentions",
        content: [
          "Cette galerie est la première rencontre du joueur avec la mécanique de lampe à autonomie limitée. L'objectif n'est pas de faire peur tout de suite, mais d'apprendre une règle : la lumière attire.",
          "Trois leçons doivent passer sans texte ni tutoriel explicite : la lumière consomme une ressource, l'obscurité cache un danger réel, et éteindre sa lampe est parfois la bonne décision."
        ]
      },
      {
        id: "schema",
        label: "Schéma",
        content: [
          "Le schéma ci-dessous pose le flow critique : un couloir linéaire en trois temps qui introduit chaque leçon isolément avant de les combiner dans le dernier segment.",
          "Segment 1 (sûr) : le joueur découvre la jauge de lampe sans danger. Segment 2 (tension) : une créature traverse un couloir parallèle visible mais inatteignable, pour associer bruit et lumière au danger. Segment 3 (application) : le joueur doit traverser une salle ouverte en gérant les deux à la fois."
        ],
        images: [
          { src: "/images/ld/galerie-schema-1.svg", alt: "Schéma de flow en trois segments" }
        ]
      },
      {
        id: "blockout",
        label: "Blockout",
        content: [
          "Le greybox a été construit en volumes simples pour valider les distances de lecture avant tout habillage : largeur de couloir suffisante pour distinguer une silhouette en contre-jour, hauteur de plafond qui écrase légèrement le segment 3.",
          "Playtests internes (n=6) : 5 joueurs sur 6 ont éteint spontanément leur lampe au passage de la créature dans le segment 2, sans qu'on le leur demande — ce qui validait l'intention avant de passer à l'habillage."
        ],
        images: [
          { src: "/images/ld/galerie-blockout-1.svg", alt: "Vue de dessus du blockout" },
          { src: "/images/ld/galerie-blockout-2.svg", alt: "Vue en jeu du greybox, segment 3" }
        ]
      },
      {
        id: "art-pass",
        label: "Art pass",
        content: [
          "L'habillage renforce la lecture plutôt que de la décorer : les zones sûres reçoivent une teinte plus chaude et des reflets d'eau calmes, les zones de tension basculent vers un bleu plus froid avec des particules de sédiment en suspension.",
          "Un seul point lumineux fixe existe dans tout le niveau (le phare, visible au loin dès le segment 1) : il sert de repère de navigation constant, pour que le joueur ne se sente jamais perdu même lampe éteinte."
        ],
        images: [
          { src: "/images/ld/galerie-artpass-1.svg", alt: "Rendu final, segment 1 réchauffé" },
          { src: "/images/ld/galerie-artpass-2.svg", alt: "Rendu final, segment 3 avec sédiments" }
        ]
      }
    ]
  },
  {
    slug: "pont-rompu",
    title: "Vague 7 — Le Pont Rompu",
    project: "pixel-siege",
    projectTitle: "Pixel Siege",
    summary:
      "La vague qui casse l'illusion de terrain stable et force à replanifier sa défense en plein combat.",
    cover: "/images/ld/pont-cover.svg",
    meta: {
      engine: "Godot 4",
      duration: "≈ 90 secondes de vague",
      role: "Design de la vague, script de l'effondrement"
    },
    sections: [
      {
        id: "intentions",
        label: "Intentions",
        content: [
          "Jusqu'à la vague 6, le joueur a pu optimiser une défense statique. La vague 7 doit briser cette confiance sans donner l'impression d'être injuste : le pont qui s'effondre doit avoir été visible dès la vague 1."
        ]
      },
      {
        id: "schema",
        label: "Schéma",
        content: [
          "Le pont central relie les deux seules zones constructibles. Sa fissure est visible en fond de décor dès le début de la partie ; la vague 7 la fait céder à mi-vague, coupant temporairement le renfort entre les deux zones.",
          "Le schéma marque le timing exact : effondrement à 45 secondes, ouverture d'un tunnel alternatif à 55 secondes — soit une fenêtre de 10 secondes où le joueur doit gérer une défense scindée en deux avant que l'alternative n'apparaisse."
        ],
        images: [
          { src: "/images/ld/pont-schema-1.svg", alt: "Chronologie de la vague 7" }
        ]
      },
      {
        id: "blockout",
        label: "Blockout",
        content: [
          "Grayboxé en tuiles neutres pour vérifier que les deux zones restent lisibles et défendables séparément, et que le tunnel alternatif n'est pas une meilleure option que le pont dès le départ (sinon la mécanique perd son intérêt).",
          "Ajustement post-playtest : le tunnel était trop court et rendait le pont inutile après la vague 7 ; sa longueur a été augmentée de 40% pour rester une solution de secours, pas un raccourci permanent."
        ],
        images: [
          { src: "/images/ld/pont-blockout-1.svg", alt: "Carte greybox des deux zones et du tunnel" }
        ]
      },
      {
        id: "art-pass",
        label: "Art pass",
        content: [
          "La fissure du pont est peinte en pixel art dès la vague 1, en très légère surbrillance, pour que sa rupture en vague 7 soit une confirmation visuelle plutôt qu'une surprise arbitraire.",
          "L'effondrement lui-même dure 1,2 seconde avec un léger tremblement de caméra et un fondu de poussière, suffisant pour être lisible sans masquer les tours du joueur pendant l'action."
        ],
        images: [
          { src: "/images/ld/pont-artpass-1.svg", alt: "Fissure visible dès la vague 1" },
          { src: "/images/ld/pont-artpass-2.svg", alt: "Effondrement du pont en vague 7" }
        ]
      }
    ]
  }
];
