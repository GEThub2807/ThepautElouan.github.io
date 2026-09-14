# Portfolio — développeur jeu vidéo

Portfolio réalisé avec Next.js (App Router) + Tailwind CSS. Thème "plan
technique / blueprint" : grille de fond, cartouche façon plan côté accueil,
et fiches de level design présentées comme des planches numérotées.

## Structure du contenu (ce que tu dois modifier)

Tout le contenu éditable est regroupé dans `data/`, séparé du code des pages :

- `data/profile.js` — ton nom, ta bio, tes compétences, tes liens (CV, GitHub,
  LinkedIn, itch.io) et ton mail. C'est le seul fichier à toucher pour la
  page d'accueil.
- `data/projects.js` — un objet par projet : titre, résumé, description,
  `tags` (utilisés pour le filtre — garde des libellés courts et cohérents
  du type `"Unreal Engine"`, `"Unity"`, `"Godot"`, `"C++"`, `"C#"`), liens,
  et `media` (images / vidéo / YouTube défilables).
- `data/leveldesign.js` — une fiche par dossier de level design, avec ses
  `sections` (Intentions, Schéma, Blockout, Art pass...). Chaque section
  alimente à la fois le sommaire cliquable et le contenu affiché.

Les images placeholder sont dans `public/images/` (générées, à remplacer
par tes propres captures). Pour une vidéo de gameplay, dépose ton fichier
`.mp4` dans `public/videos/` et référence-le dans `data/projects.js` avec
`{ type: "video", src: "/videos/ton-fichier.mp4", poster: "..." }`.
Ton CV va dans `public/` (ex: `public/cv-ton-nom.pdf`), référencé depuis
`data/profile.js`.

## Lancer en local

```bash
npm install
npm run dev
```

Ouvre http://localhost:3000

## Déployer sur Vercel

1. Pousse ce dossier sur un dépôt GitHub (public ou privé).
2. Sur [vercel.com](https://vercel.com), clique "Add New… → Project" et
   importe le dépôt. Vercel détecte Next.js automatiquement, aucune
   configuration n'est nécessaire.
3. Déploie. Chaque futur `git push` sur la branche principale redéploie
   automatiquement.

Ou en ligne de commande, depuis ce dossier :

```bash
npm install -g vercel
vercel
```

## Notes techniques

- Les polices (Space Grotesk, IBM Plex Sans, IBM Plex Mono) se chargent
  depuis Google Fonts au moment du build via `next/font/google` — une
  connexion internet normale (ta machine ou les serveurs de build de
  Vercel) suffit ; aucune clé ni configuration requise.
- Le filtre de la page `/projets` est un `ET` logique : sélectionner
  "Unreal Engine" puis "C++" affiche les projets qui ont les deux tags.
- Les fiches de level design sont pré-rendues en statique au build
  (`generateStaticParams`), donc rapides et gratuites à héberger.
