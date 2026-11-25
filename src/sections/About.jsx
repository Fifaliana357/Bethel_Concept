import { Link } from 'react-router-dom';
import { VALUES } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';

export default function About() {
  return (
    <div id="a-propos">
      <section className="wrap story">
        <Reveal className="story-media">
          <Photo tone="green" arch label="Bethel Concept · bâtiment, rénovation et immobilier" />
        </Reveal>
        <Reveal delay={120} className="story-text">
          <span className="eyebrow">À propos de Bethel Concept</span>
          <h2>Un partenaire pour vos projets de bâtiment et d’immobilier.</h2>
          <p>
            Bethel Concept rassemble des services de bâtiment et rénovation, des solutions techniques et un accompagnement immobilier.
          </p>
          <p>
            De la préparation des travaux aux finitions, en passant par l’achat, la vente, la location ou la gestion d’un bien, nous vous accompagnons selon votre projet.
          </p>
          <Link className="btn btn-outline" to="/#realisations" style={{ alignSelf: 'flex-start' }}>Voir nos réalisations</Link>
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
    </div>
  );
}
