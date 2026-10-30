import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { SERVICES, PROJECTS, STEPS, RIBBON } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import { ServiceIcon } from '../components/Icons.jsx';

export default function Home() {
  usePageMeta(
    'Bethel Concept — Décoration d’intérieur : plafonds, murs, LED',
    'Bethel Concept transforme l’intérieur de votre maison : faux plafonds, murs décoratifs, éclairages LED et finitions sur mesure. Demandez votre devis gratuit.'
  );

  return (
    <>
      <section className="wrap hero">
        <div className="hero-text">
          <Reveal as="span" className="eyebrow">Décoration d’intérieur · Madagascar</Reveal>
          <Reveal as="h1" delay={80}>Votre vision,<br />notre construction.</Reveal>
          <Reveal as="p" delay={160} className="lead">
            Faux plafonds, murs décoratifs, éclairages LED et finitions sur mesure : nous transformons chaque pièce de votre maison en un espace qui vous ressemble.
          </Reveal>
          <Reveal delay={240} className="hero-actions">
            <Link className="btn btn-primary" to="/contact">Obtenir un devis gratuit</Link>
            <Link className="btn btn-outline" to="/realisations">Voir nos réalisations</Link>
          </Reveal>
        </div>
        <Reveal delay={120} className="hero-media">
          <Photo tone="green" arch className="float" label="Plafond design avec éclairage LED" />
        </Reveal>
      </section>

      <div className="ribbon" aria-hidden="true">
        <div className="ribbon-track">
          {[0, 1].map((k) =>
            RIBBON.map((t) => (
              <span key={`${k}-${t}`}>{t}<i /></span>
            ))
          )}
        </div>
      </div>

      <section className="section section-dark on-dark">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Nos services</span>
            <h2>Tout pour sublimer l’intérieur de votre maison</h2>
          </Reveal>
          <div className="cards">
            {SERVICES.map((s, i) => (
              <Reveal as="article" key={s.id} delay={i * 90} className="card-dark">
                <ServiceIcon name={s.icon} />
                <h3>{s.shortTitle || s.title}</h3>
                <p>{s.short}</p>
              </Reveal>
            ))}
          </div>
          <Link className="btn btn-outline-light more" to="/services">Tous nos services</Link>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Nos réalisations</span>
            <h2>Des projets qui parlent d’eux-mêmes</h2>
          </Reveal>
          <div className="tiles two">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <Link to="/realisations" className="tile" aria-label={`Voir les réalisations : ${p.label}`}>
                  <Photo tone={p.tone} label={p.label} img={p.img} />
                </Link>
              </Reveal>
            ))}
          </div>
          <Link className="btn btn-outline more" to="/realisations">Voir toutes les réalisations</Link>
        </div>
      </section>

      <section className="section section-sand">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Notre méthode</span>
            <h2>Un projet simple, du devis à la livraison</h2>
          </Reveal>
          <ol className="steps">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 100} className="step">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="wrap cta-wrap">
        <Reveal className="cta">
          <h2>Envie de déco pour votre maison ?</h2>
          <Link className="btn btn-light" to="/contact">Nous contacter</Link>
        </Reveal>
      </section>
    </>
  );
}
