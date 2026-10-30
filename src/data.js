// Contenu du site. Pour ajouter une vraie photo : copiez-la dans public/images/realisations/
// puis renseignez `img: '/images/realisations/nom-du-fichier.jpg'` sur le projet voulu.

export const NAV = [
  { id: 'accueil', to: '/', label: 'Accueil' },
  { id: 'a-propos', to: '/#a-propos', label: 'À propos' },
  { id: 'services', to: '/#services', label: 'Services' },
  { id: 'realisations', to: '/#realisations', label: 'Réalisations' },
  { id: 'contact', to: '/#contact', label: 'Contact' },
];

export const SERVICES = [
  {
    id: 'plafonds',
    icon: 'plafond',
    title: 'Faux plafonds',
    short: 'Plafonds en plâtre et formes géométriques au rendu moderne.',
    long: 'Plafonds en plâtre, formes géométriques, retombées et corniches. Un rendu moderne, propre et durable.',
    tone: 'gold',
    photo: 'Faux plafond',
    img: null,
  },
  {
    id: 'murs',
    icon: 'mur',
    title: 'Murs décoratifs',
    short: 'Niches, arches et motifs en relief qui donnent du caractère.',
    long: 'Niches, arches, panneaux en relief et revêtements décoratifs pour donner du caractère à vos murs.',
    tone: 'green',
    photo: 'Mur en relief',
    img: null,
  },
  {
    id: 'led',
    icon: 'led',
    title: 'Éclairage LED & meubles TV',
    shortTitle: 'Éclairage LED',
    short: 'Ambiances lumineuses intégrées aux plafonds et murs TV.',
    long: 'Bandes LED intégrées, murs TV sur mesure et étagères lumineuses pour créer l’ambiance de votre salon.',
    tone: 'violet',
    photo: 'Éclairage LED',
    img: null,
  },
  {
    id: 'sols',
    icon: 'sol',
    title: 'Sols & finitions',
    short: '[À CONFIRMER] Pose de sols et finitions intérieures.',
    long: '[À CONFIRMER] Pose de sols, peinture et finitions intérieures pour un résultat complet.',
    tone: 'sand',
    photo: 'Sol et finitions',
    img: null,
  },
];

export const CATEGORIES = [
  { id: 'all', label: 'Tous' },
  { id: 'plafonds', label: 'Plafonds' },
  { id: 'murs', label: 'Murs' },
  { id: 'led', label: 'LED & TV' },
];

export const PROJECTS = [
  { id: 'p1', cat: 'plafonds', tone: 'gold', label: 'Plafond jaune', img: null },
  { id: 'p2', cat: 'murs', tone: 'green', label: 'Mur en relief', img: null },
  { id: 'p3', cat: 'led', tone: 'violet', label: 'LED violet', img: null },
  { id: 'p4', cat: 'led', tone: 'rose', label: 'Meuble TV mural', img: null },
  { id: 'p5', cat: 'plafonds', tone: 'sand', label: 'Faux plafond', img: null },
  { id: 'p6', cat: 'murs', tone: 'blue', label: 'Colonnes et structure', img: null },
  { id: 'p7', cat: 'plafonds', tone: 'brown', label: 'Plafond LED doré', img: null },
  { id: 'p8', cat: 'murs', tone: 'teal', label: 'Niches arrondies', img: null },
  { id: 'p9', cat: 'led', tone: 'lilac', label: 'Salon éclairé', img: null },
];

export const STEPS = [
  { title: 'Échange', text: 'Vous nous racontez votre projet et vos envies.' },
  { title: 'Conception & devis', text: 'Design et devis clair adapté à votre budget.' },
  { title: 'Réalisation', text: 'Travaux réalisés avec soin et propreté.' },
  { title: 'Livraison', text: 'Finitions contrôlées avec vous.' },
];

export const VALUES = [
  { title: 'Sur mesure', text: 'Chaque projet est conçu selon vos envies, votre espace et votre budget.' },
  { title: 'Finitions soignées', text: 'Une attention particulière aux détails, du premier trait à la dernière retouche.' },
  { title: 'Écoute & clarté', text: 'Un devis clair et un suivi régulier pour savoir où en est votre chantier.' },
];

export const TEAM = [
  { id: 't1', tone: 'sand', name: '[NOM Prénom]', role: '[Rôle : fondateur, chef d’équipe…]', img: null },
  { id: 't2', tone: 'gold', name: '[NOM Prénom]', role: '[Rôle]', img: null },
  { id: 't3', tone: 'blue', name: '[NOM Prénom]', role: '[Rôle]', img: null },
];

export const RIBBON = ['Faux plafonds', 'Murs décoratifs', 'Éclairage LED', 'Meubles TV sur mesure', 'Finitions soignées'];
