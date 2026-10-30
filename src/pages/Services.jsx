import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { SERVICES } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import Maybe from '../components/Maybe.jsx';

// Affiche un texte en pointillés si c'est un « [À CONFIRMER] » au début.
function Text({ children }) {
  const m = /^(\[[^\]]+\])\s*(.*)$/.exec(children);
  if (!m) return children;
  return (
    <>
      <Maybe value={m[1]} /> {m[2]}
    </>
  );
}

export default function Services() {
  usePageMeta(
    'Services — Bethel Concept',
    'Faux plafonds, murs décoratifs, éclairage LED, meubles TV sur mesure, sols et finitions : les services de décoration intérieure de Bethel Concept.'
  );

  return (
    <>
      <section className="wrap page-intro">
        <Reveal as="span" className="eyebrow">Nos services</Reveal>
        <Reveal as="h1" delay={80}>Chaque pièce mérite un décor à sa mesure.</Reveal>
        <Reveal delay={160}>
          <Maybe as="p" className="lead" value="[À CONFIRMER avec l’entreprise : liste définitive des prestations proposées]" />
        </Reveal>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`wrap service${i % 2 ? ' rev' : ''}`}>
          <Reveal className="service-media">
            <Photo tone={s.tone} label={s.photo} img={s.img} />
          </Reveal>
          <Reveal delay={120} className="service-text">
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h2>{s.title}</h2>
            <p><Text>{s.long}</Text></p>
            <Link className="btn btn-primary" to="/contact">Demander un devis</Link>
          </Reveal>
        </section>
      ))}

      <div className="gap" />
    </>
  );
}
