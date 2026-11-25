import { Link } from 'react-router-dom';
import { SERVICES, STEPS } from '../data.js';
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
  return (
    <div id="services">
      <section className="section services-head">
        <div className="wrap">
          <Reveal className="section-head wide">
            <span className="eyebrow">Nos services</span>
            <h2>Chaque pièce mérite un décor à sa mesure.</h2>
            <Maybe as="p" className="lead" value="[À CONFIRMER avec l’entreprise : liste définitive des prestations proposées]" />
          </Reveal>
        </div>
      </section>

      {SERVICES.map((s, i) => (
        <section key={s.id} id={s.id} className={`wrap service${i % 2 ? ' rev' : ''}`}>
          <Reveal className="service-media">
            <Photo tone={s.tone} label={s.photo} img={s.img} />
          </Reveal>
          <Reveal delay={120} className="service-text">
            <span className="num">{String(i + 1).padStart(2, '0')}</span>
            <h3>{s.title}</h3>
            <p><Text>{s.long}</Text></p>
            <Link className="btn btn-primary" to="/#contact">Demander un devis</Link>
          </Reveal>
        </section>
      ))}

      <section className="section section-paper video-services" aria-labelledby="video-services-title">
        <div className="wrap">
          <Reveal className="section-head wide">
            <span className="eyebrow">Pistes à valider</span>
            <h2 id="video-services-title">D’autres pôles évoqués dans la vidéo</h2>
            <p className="lead">
              Ces activités et leur disponibilité sont à confirmer avec l’entreprise avant de les présenter comme des services proposés.
            </p>
          </Reveal>

          <div className="video-pillars">
            <Reveal className="video-pillar">
              <h3>Bâtiment &amp; rénovation</h3>
              <ul>
                <li>Plans, calculs, permis</li>
                <li>Carrelage, aménagement intérieur</li>
              </ul>
            </Reveal>
            <Reveal delay={100} className="video-pillar">
              <h3>Solutions techniques</h3>
              <ul>
                <li>Électricité, plomberie</li>
                <li>Automatisation</li>
              </ul>
            </Reveal>
            <Reveal delay={200} className="video-pillar">
              <h3>Agence immobilière</h3>
              <ul>
                <li>Achat, vente, location</li>
                <li>Gestion immobilière</li>
              </ul>
            </Reveal>
          </div>

          <Reveal className="property-brand">
            <span className="eyebrow">Nom à confirmer</span>
            <h3>Bethel <strong>Immobilier</strong></h3>
            <p>Achat <i /> Vente <i /> Location <i /> Gestion</p>
          </Reveal>

          <Reveal className="video-commitments">
            <span className="eyebrow">Valeurs citées dans la vidéo · à confirmer</span>
            <ul>
              <li>Qualité</li>
              <li>Confiance</li>
              <li>Respect des délais</li>
              <li>Satisfaction</li>
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="section section-sand steps-section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Notre méthode</span>
            <h2>Un projet simple, du devis à la livraison</h2>
          </Reveal>
          <ol className="steps">
            {STEPS.map((st, i) => (
              <Reveal as="li" key={st.title} delay={i * 100} className="step">
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{st.title}</h3>
                <p>{st.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}
