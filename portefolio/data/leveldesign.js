// Chaque entrée devient une fiche de level design consultable sur /level-design/[slug].
// `sections` alimente à la fois le sommaire cliquable et le contenu de la fiche.
// Garde au minimum les id "schema", "blockout" et "art-pass" si tu veux rester
// cohérent avec la structure attendue, mais tu peux en ajouter d'autres.

export const levelDesigns = [
  {
    slug: "glimmer-of-hope",
    title: "Glimmer of Hope",
    project: "genesis",
    projectTitle: "Génésis",
    summary:
      "Niveau de course poursuite entre soi et son soi d'il y a 3 secondes. Dans le cadre d'une game jam pour intégrer un projet plus gros.",
    cover: "/images/ld/glimmer_minia.png",
    meta: {
      engine: "Unity",
      duration: "≈ 2/3 minutes de jeu",
      role: "Level design et intégration"
    },
    sections: [
      {
        id: "intentions",
        label: "Intentions",
        content: [
          "Le thème imposé était celui de la gestion du stress. Le joueur devait donc apprendre a controler son stress pour réussir le niveau, et le level design devait l'y aider.",
          "Pour ce faire, reprendre le principe de Celeste avec Badeline sans informer au joueur en amont que c'est une course contre soi-même. Le niveau est séparé en trois segments. Le premier, est très simple pour apprendre au joueur les mécaniques de déplacement, cependant, la caméra (side scroller) est très proche du joueur pour créer un sentiment d'oppression. Le deuxième segment, légèrement plus difficile, introduit les mécaniques moyennes et la caméra recule progressivement jusqu'à la fin du segment 3. Le troisième segment, est le plus difficile et combine les mécaniques des deux premiers segments.",
          "Le niveau démarre linéairement pour terminer avec beaucoup d'aller-retour. Au début on ne cherche qu'à avancer dans la direction opposée a son pourchasseur, puis quand on comprend qu'il avance au meme rythme que nous, alors on peut prendre plus le temps de revenir en arrière, récupérer des collectibles etc... La couleur des segments rajoute un effet d'urgent au début avec le rouge, puis calme avec le vert à la fin."
        ]
      },
      {
        id: "schema",
        label: "Schéma",
        content: [
          "Le schéma ci-dessous pose le flow critique : un couloir linéaire en trois temps qui introduit chaque leçon isolément avant de les combiner dans le dernier segment.",
          "L'étoile est un collectible non obligatoire qui peut être très facile si on ne stress pas en prenant un chemin facile, ou très compliqué si on veut aller trop vite sans prendre le temps de comprendre le chemin facile. Le carreau lui est une clé pour ouvrir un passage",
          "Segment 1 (facile mais oppressif) : le joueur découvre les déplacements. Segment 2 (tension) : On commence a jouer légerement sur la verticalité avec l'intro des walls jump et des ressorts. Segment 3 (application) : On aligne l'ensemble des mécaniques apprises dans un niveau technique qui peut poser soucis avec son jumeaux d'il y a 3 secondes."
        ],
        images: [
          { src: "/images/ld/glimmer_schema.png", alt: "Schéma de flow en trois segments" }
        ]
      },
      {
        id: "blockout",
        label: "Blockout",
        content: [
          "Le greybox a été construit en volumes simples pour valider les distances de lecture et des tests rapides.",
          "Playtests internes (n=6) : Le segment 1 a été celui qui a causé le plus de difficultés non pas a cause des mécaniques ou de sauts trop complexes, mais par la pression créée par le timing et la non visibilité du reste du niveau à cause de la caméra proche, ce qui représente bien ce qu'il se passe en étât de stress intense. Plus le niveau avance et plus il a été simple de résolution avec quand même quelques échecs mécaniques. L'ensemble du niveau m'a alors semblé une réussite."
        ],
        images: [
          { src: "/images/ld/glimmer_blockout.png", alt: "Vue de côté du blockout" }
        ]
      },
    ]
  },
  {
    slug: "overhead",
    title: "Level tuto - Staff Room",
    project: "overhead",
    projectTitle: "Overhead",
    summary:
      "Le niveau au démarrage du jeu. Les joueurs devront comprendre leur environnement et les mécaniques de base pour progresser dans le niveau et atteindre le hub",
    cover: "/images/ld/overhead_minia.png",
    meta: {
      engine: "Godot, Moteur Custom",
      duration: "Entre 2 et 5 minutes de jeu",
      role: "Design du niveau"
    },
    sections: [
      {
        id: "intentions",
        label: "Intentions",
        content: [
          "Apprendre au binôme les mécaniques principales et utilisées dans tous les niveaux. Le niveau doit être simple en mettant l’accent sur le décalage humoristique entre le sérieux du travail et le côté crétin. La salle du personnel est simple dans sa forme (cubique / rectangulaire)"
        ]
      },
      {
        id: "mecaniques",
        label: "Mécaniques présentes",
        content: [
          "Interactions = Pick up des équipements; frame code; demander un indice",
          "Porter/Rotate des éléments du local",
          "Jeter des éléments du local avec une jauge de force"
        ]
      },
      {
        id: "deroulement",
        label: "Déroulement du niveau",
        content: [
          "Entrée du niveau: Le joueur 1 (P1) se retrouve au sol, le joueur 2 (P2) au plafond. P1 est bloqué dans le couloir accédant au local. P2 lui, arrive depuis le conduit directement dans le local. P2 doit activer un bouton débloquant l’accès au local pour P1.",
          "1ère énigme: P2 voit son gravity gun bloqué dans une vitrine fermée avec un code à 7 chiffres. P1 lui, peut récupérer librement son gravity gun dans un des casiers ouverts. P1 doit utiliser son gravity gun pour remettre en ordre les fiches employés. Une fiche employé possède une image d’employé, un nom prénom avec une majuscule prononcé sur l’initiale du nom de famille (ex: Verstappen max), un métier et un ID. P2 à de son côté un livre qui possède un titre sur la couverture de la même police, de même couleur que les initiales sur les affiches. P1 devra positionner les affiches dans l’ordre des initiales via l’ordre des lettres du titre du livre. (Titre: Branche, ordre: Bazin, Rozin, Azin, Nizin, Chuzin, Hezin, Ezin) ce qui donnera un nouvel ordre des chiffres ID afin de récupérer un code à 7 chiffres, qu’il donnera à P2 pour l’utiliser dans la vitrine et récupérer son gravity gun.",
          "2ème énigme:  P2 a désormais son gravity gun, il peut maintenant porter tous les cartons éparpillés autour de lui, sous un gros carton il trouve une clé de casier, sous un autre carton il trouve aussi une pièce carré avec dessiné dessus un triangle rouge qu’il peut récupérer avec le gravity gun. Lorsque P1 reçoit la clé que P2 a trouvé, il peut ouvrir un casier et y trouver une autre pièce avec cette fois une étoile bleue sur cette pièce, également récupérable. Enfin, il faudra assembler ces 2 pièces dans le puzzle désormais complet posé sur une chaise posée au plafond. Pour faire ce puzzle, il devra arranger les pièces dans le bon ordre, comment savoir l’ordre ? A l’aide de l’affiche collée à côté des casiers visible uniquement par P1, il devra donc communiquer avec P2 pour qu’il complète le puzzle et débloque la carte d’accès de toutes les salles du vaisseau.",
          "3ème énigme:  P1 peut désormais sortir de la salle par la porte mais P2 reste bloqué dans le local, lorsque P1 arrive dans le hub central, il verra au dessus de la porte une aération bloqué par quelque chose de fragile (glace, verre…?), il devra prendre quelque chose de solide dans le hub et le balancer sur la grille, ce qui la libérera et P2 se verra aspirer par la ventilation."
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
          { src: "/images/ld/overhead_staffroom_schema.png", alt: "schema de la staff room" }
        ]
      },
      {
        id: "blockout",
        label: "Blockout",
        content: [
          "Blockout réalisé sur Godot pour tester la disposition des éléments et les mécaniques de jeu rapidement."
        ],
      },
      {
        id: "art-pass",
        label: "Art pass",
        content: [
          "Art pass réalisé sur Godot pour assurer la cohérence visuelle du niveau et une application fiable des assets."
        ],
        images: [
          { src: "/images/ld/overhead_staffroom_artpass.png", alt: "Fissure visible dès la vague 1" }
        ]
      }
    ]
  }
];