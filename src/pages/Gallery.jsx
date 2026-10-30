import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { CATEGORIES, PROJECTS } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import Lightbox from '../components/Lightbox.jsx';

export default function Gallery() {
  usePageMeta(
    'Réalisations — Bethel Concept',
    'Galerie des réalisations de Bethel Concept : faux plafonds, murs décoratifs, éclairages LED et meubles TV sur mesure.'
  );

  const [filter, setFilter] = useState('all');
  const [active, setActive] = useState(null);

  const list = useMemo(
    () => PROJECTS.filter((p) => filter === 'all' || p.cat === filter),
    [filter]
  );

  return (
    <>
      <section className="wrap page-intro">
        <Reveal as="span" className="eyebrow">Nos réalisations</Reveal>
        <Reveal as="h1" delay={80}>Du plâtre à la lumière, nos projets en images.</Reveal>
        <Reveal delay={160} className="filters" role="group" aria-label="Filtrer les réalisations">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              className="chip"
              aria-pressed={filter === c.id}
              onClick={() => setFilter(c.id)}
            >
              {c.label}
            </button>
          ))}
        </Reveal>
      </section>

      <section className="wrap gallery-wrap">
        <div className="gallery" aria-live="polite">
          {list.map((p, i) => (
            <button
              key={p.id}
              type="button"
              className="tile pop"
              style={{ '--i': i }}
              onClick={() => setActive(i)}
              aria-label={`Agrandir : ${p.label}`}
            >
              <Photo tone={p.tone} label={p.label} img={p.img} />
            </button>
          ))}
        </div>
        <p className="note">Les cadres colorés seront remplacés par les vraies photos de chantiers.</p>
      </section>

      <section className="wrap cta-wrap">
        <Reveal className="cta">
          <h2>Le prochain projet, c’est le vôtre.</h2>
          <Link className="btn btn-light" to="/contact">Demander un devis</Link>
        </Reveal>
      </section>

      {active !== null && (
        <Lightbox items={list} index={active} onClose={() => setActive(null)} onChange={setActive} />
      )}
    </>
  );
}
