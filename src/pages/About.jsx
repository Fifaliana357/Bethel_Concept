import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { VALUES } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';

export default function About() {
  usePageMeta(
    'À propos — Bethel Concept',
    'Découvrez Bethel Concept : bâtiment et rénovation, solutions techniques et accompagnement immobilier.'
  );

  return (
    <>
      <section className="wrap page-intro">
        <Reveal as="span" className="eyebrow">À propos</Reveal>
        <Reveal as="h1" delay={80}>Un partenaire pour vos projets de bâtiment et d’immobilier.</Reveal>
        <Reveal as="p" delay={160} className="lead">
          Bethel Concept rassemble des services de bâtiment et rénovation, des solutions techniques et un accompagnement immobilier.
        </Reveal>
      </section>

      <section className="wrap story">
        <Reveal className="story-media">
          <Photo tone="green" arch label="Bethel Concept · bâtiment, rénovation et immobilier" />
        </Reveal>
        <Reveal delay={120} className="story-text">
          <span className="eyebrow">Nos domaines d’activité</span>
          <h2>Des services pensés autour de vos projets.</h2>
          <p>
            De la préparation des travaux aux finitions, en passant par l’achat, la vente, la location ou la gestion d’un bien, nous vous accompagnons selon votre projet.
          </p>
          <Link className="btn btn-outline" to="/realisations" style={{ alignSelf: 'flex-start' }}>Voir nos réalisations</Link>
        </Reveal>
      </section>

      <section className="section section-sage">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Nos engagements</span>
            <h2>Ce qui guide chacun de nos chantiers</h2>
          </Reveal>
          <div className="values">
            {VALUES.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="value">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
