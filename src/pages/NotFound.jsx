import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';

export default function NotFound() {
  usePageMeta('Page introuvable — Bethel Concept', 'Cette page n’existe pas ou a été déplacée.');
  return (
    <section className="wrap nf">
      <span className="eyebrow">Erreur 404</span>
      <h1>Page introuvable.</h1>
      <p className="lead">Cette page n’existe pas ou a été déplacée.</p>
      <Link className="btn btn-primary" to="/">Retour à l’accueil</Link>
    </section>
  );
}
