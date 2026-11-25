import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { SERVICES } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';

export default function Services() {
  usePageMeta(
    'Services — Bethel Concept',
    'Bâtiment et rénovation, solutions techniques, aménagement intérieur et services immobiliers par Bethel Concept.'
  );

  return (
    <>
      <section className="wrap page-intro">
        <Reveal as="span" className="eyebrow">Nos services</Reveal>
        <Reveal as="h1" delay={80}>Des solutions pour vos projets, de la conception à la réalisation.</Reveal>
        <Reveal as="p" delay={160} className="lead">
          Bethel Concept vous accompagne dans vos travaux, vos installations techniques et vos projets immobiliers.
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
            <p>{s.long}</p>
            <Link className="btn btn-primary" to="/contact">Demander un devis</Link>
          </Reveal>
        </section>
      ))}

      <div className="gap" />
    </>
  );
}
