import { Link } from 'react-router-dom';
import { VALUES, RIBBON } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';

export default function Hero() {
  return (
    <div id="accueil">
      <section className="wrap hero">
        <div className="hero-text">
          <Reveal as="span" className="eyebrow">Décoration d’intérieur · Madagascar</Reveal>
          <Reveal as="h1" delay={80}>Votre vision,<br />notre construction.</Reveal>
          <Reveal as="p" delay={160} className="lead">
            Faux plafonds, murs décoratifs, éclairages LED et finitions sur mesure : nous transformons chaque pièce de votre maison en un espace qui vous ressemble.
          </Reveal>
          <Reveal delay={240} className="hero-actions">
            <Link className="btn btn-primary" to="/#contact">Obtenir un devis gratuit</Link>
            <Link className="btn btn-outline" to="/#realisations">Voir nos réalisations</Link>
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

      <section className="section section-paper">
        <div className="wrap teaser">
          <Reveal className="teaser-text">
            <span className="eyebrow">Qui sommes-nous</span>
            <h2>Nous donnons forme à l’intérieur de vos rêves.</h2>
          </Reveal>
          <Reveal delay={120} className="teaser-side">
            <p className="lead">
              Bethel Concept accompagne les particuliers dans la décoration de leur maison : plafonds, murs et finitions pensés avec soin.
            </p>
            <ul className="points">
              {VALUES.map((v) => <li key={v.title}>{v.title}</li>)}
            </ul>
            <Link className="btn btn-outline" to="/#a-propos">Découvrir notre histoire</Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
