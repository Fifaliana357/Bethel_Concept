import { Link } from 'react-router-dom';
import { SERVICES, STEPS } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';

export default function Services() {
  return (
    <div id="services">
      <section className="section services-head">
        <div className="wrap">
          <Reveal className="section-head wide">
            <span className="eyebrow">Nos services</span>
            <h2>Des solutions pour vos projets, de la conception à la réalisation.</h2>
            <p className="lead">
              Bethel Concept vous accompagne dans vos travaux, vos installations techniques et vos projets immobiliers.
            </p>
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
            <p>{s.long}</p>
            <Link className="btn btn-primary" to="/#contact">Demander un devis</Link>
          </Reveal>
        </section>
      ))}

      <section className="section section-paper business-offerings" aria-labelledby="business-offerings-title">
        <div className="wrap">
          <Reveal className="section-head wide">
            <span className="eyebrow">Nos expertises</span>
            <h2 id="business-offerings-title">Un accompagnement complet pour vos projets</h2>
          </Reveal>

          <div className="business-pillars">
            <Reveal className="business-pillar">
              <h3>Bâtiment &amp; rénovation</h3>
              <ul>
                <li>Plans, calculs, permis</li>
                <li>Carrelage, aménagement intérieur</li>
              </ul>
            </Reveal>
            <Reveal delay={100} className="business-pillar">
              <h3>Solutions techniques</h3>
              <ul>
                <li>Électricité, plomberie</li>
                <li>Automatisation</li>
              </ul>
            </Reveal>
            <Reveal delay={200} className="business-pillar">
              <h3>Agence immobilière</h3>
              <ul>
                <li>Achat, vente, location</li>
                <li>Gestion immobilière</li>
              </ul>
            </Reveal>
          </div>
          <Reveal className="property-brand">
            <h3>Bethel <strong>Immobilier</strong></h3>
            <p>Achat <i /> Vente <i /> Location <i /> Gestion</p>
          </Reveal>

          <Reveal className="business-commitments">
            <span className="eyebrow">Nos engagements</span>
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
