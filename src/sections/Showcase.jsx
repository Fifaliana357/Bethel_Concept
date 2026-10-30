import { Link } from 'react-router-dom';
import { PROJECTS } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';

export default function Showcase() {
  return (
    <div id="realisations">
      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">Nos réalisations</span>
            <h2>Des projets qui parlent d’eux-mêmes</h2>
          </Reveal>
          <div className="tiles two">
            {PROJECTS.slice(0, 4).map((p, i) => (
              <Reveal key={p.id} delay={i * 90}>
                <Link to="/realisations" className="tile" aria-label={`Voir toutes les réalisations (${p.label})`}>
                  <Photo tone={p.tone} label={p.label} img={p.img} />
                </Link>
              </Reveal>
            ))}
          </div>
          <Link className="btn btn-primary more" to="/realisations">Voir toutes les réalisations</Link>
        </div>
      </section>
    </div>
  );
}
