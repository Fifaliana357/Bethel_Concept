# Site Bethel Concept — projet React

Site vitrine en **React 18** (Vite) avec **React Router**. Il se compile en fichiers statiques : aucun serveur à gérer, hébergement gratuit possible sur Cloudflare Pages.

## Démarrer

Il faut Node.js 18 ou plus.

```bash
npm install        # une seule fois
npm run dev        # site en développement : http://localhost:5173
npm run build      # produit le dossier dist/ (le site final)
npm run preview    # teste le site compilé en local
```

## Où modifier quoi

| Je veux changer… | Fichier |
|---|---|
| Téléphone, WhatsApp, email, adresse, horaires, Facebook | `src/config.js` |
| Services, projets de la galerie, étapes, engagements, équipe | `src/data.js` |
| Couleurs et design | `src/styles.css` (variables en haut, section `:root`) |
| Texte d'une page | `src/pages/` (Home, About, Services, Gallery, Contact) |
| Menu et pied de page | `src/components/Header.jsx` et `Footer.jsx` (une seule fois pour tout le site) |

Toute valeur qui commence par `[` (par exemple `[VOTRE EMAIL]`) est provisoire : elle s'affiche en pointillés sur le site. Remplacez-la par la vraie valeur et les pointillés disparaissent.

## Ajouter les vraies photos

1. Préparez des JPG ou WebP d'environ 1600 px de large, moins de 300 Ko chacun.
2. Copiez-les dans `public/images/realisations/` (créez le dossier).
3. Dans `src/data.js`, renseignez le champ `img` du projet concerné :

```js
{ id: 'p1', cat: 'plafonds', tone: 'gold', label: 'Plafond jaune', img: '/images/realisations/plafond-jaune.jpg' },
```

Le cadre coloré est alors remplacé par la photo, partout où le projet apparaît (accueil, galerie, fenêtre agrandie). Faites de même avec `img` dans `SERVICES` et `TEAM`. Pour ajouter un projet, ajoutez une ligne dans `PROJECTS`.

## Activer le formulaire de contact

Le formulaire envoie les messages par email via le service gratuit Web3Forms (vérifiez ses conditions actuelles).

1. Sur https://web3forms.com, saisissez l'adresse qui doit recevoir les messages et récupérez la clé d'accès.
2. Copiez `.env.example` en `.env` et remplacez la valeur de `VITE_WEB3FORMS_KEY`.
3. Recompilez (`npm run build`).

Tant que la clé n'est pas renseignée, le formulaire affiche un message de démonstration. La clé est conçue pour être publique : elle ne donne pas accès à votre boîte mail.

## Mise en ligne sur Cloudflare Pages

**Option A : envoi direct du dossier compilé (la plus simple)**
1. Renseignez la clé du formulaire dans `.env`, puis lancez `npm run build`.
2. Sur https://dash.cloudflare.com, ouvrez **Workers & Pages**, créez un projet **Pages** et choisissez l'envoi direct de fichiers.
3. Glissez **le contenu du dossier `dist/`**. Le site est en ligne sur `nom-du-projet.pages.dev`.
4. À chaque modification : `npm run build`, puis renvoyez `dist/`.

**Option B : avec GitHub (publication automatique à chaque modification)**
1. Mettez le projet sur GitHub (le fichier `.gitignore` exclut déjà `node_modules`, `dist` et `.env`).
2. Dans Cloudflare, créez un projet Pages connecté à ce dépôt.
3. Réglages : commande de build `npm run build`, dossier de sortie `dist`.
4. Dans les variables du projet, ajoutez `VITE_WEB3FORMS_KEY` avec votre clé. Si le build échoue pour une question de version, ajoutez `NODE_VERSION` = `22`.

Le fichier `public/_redirects` fait que les liens directs (`/services`, `/contact`…) fonctionnent aussi après rechargement de la page.

## Bon à savoir

- **Référencement** : le site est rendu dans le navigateur. Google sait l'indexer, mais un site pré-rendu (Astro ou Next.js en export statique) est un peu plus fiable pour le référencement local. À envisager si le positionnement sur Google devient un enjeu.
- **Animations** : elles sont désactivées automatiquement pour les visiteurs qui ont demandé de réduire les animations dans leur système.
- **Sécurité des outils** : `npm audit` signale une alerte modérée sur l'outil de développement (`vite`/`esbuild`). Elle concerne uniquement `npm run dev` sur votre ordinateur, pas le site publié.
