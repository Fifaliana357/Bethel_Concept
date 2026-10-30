import { Link } from 'react-router-dom';
import { usePageMeta } from '../hooks.js';
import { VALUES, TEAM } from '../data.js';
import Reveal from '../components/Reveal.jsx';
import Photo from '../components/Photo.jsx';
import Maybe from '../components/Maybe.jsx';

export default function About() {
  usePageMeta(
    'À propos — Bethel Concept',
    'Découvrez Bethel Concept, une équipe qui accompagne les particuliers dans la décoration de leur maison : plafonds, murs et finitions pensés avec soin.'
  );

  return (
    <>
      <section className="wrap page-intro">
        <Reveal as="span" className="eyebrow">À propos</Reveal>
        <Reveal as="h1" delay={80}>Nous donnons forme à l’intérieur de vos rêves.</Reveal>
        <Reveal as="p" delay={160} className="lead">
          Bethel Concept accompagne les particuliers dans la décoration de leur maison : plafonds, murs et finitions pensés avec soin.
        </Reveal>
      </section>

      <section className="wrap story">
        <Reveal className="story-media">
          <Photo tone="green" arch label="L’équipe sur un chantier" />
        </Reveal>
        <Reveal delay={120} className="story-text">
          <span className="eyebrow">Notre histoire</span>
          <Maybe as="h2" value="[TITRE : l’origine de Bethel Concept]" />
          <Maybe as="p" value="[À FOURNIR : comment l’entreprise est née, depuis quand elle existe, ce qui la motive.]" />
          <Maybe as="p" value="[À FOURNIR : le savoir-faire de l’équipe et le type de clients accompagnés.]" />
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
          <p className="note">
            <Maybe value="[À CONFIRMER avec l’entreprise : engagements réels à afficher]" />
          </p>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <Reveal className="section-head">
            <span className="eyebrow">L’équipe</span>
            <h2>Les mains derrière vos projets</h2>
          </Reveal>
          <div className="team">
            {TEAM.map((m, i) => (
              <Reveal key={m.id} delay={i * 100} className="member">
                <Photo tone={m.tone} label="Photo" img={m.img} alt={m.name} />
                <Maybe as="h3" value={m.name} style={{ alignSelf: 'flex-start' }} />
                <Maybe className="role" value={m.role} style={{ alignSelf: 'flex-start' }} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
