import { usePageMeta } from '../hooks.js';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Services from '../sections/Services.jsx';
import Showcase from '../sections/Showcase.jsx';
import Contact from '../sections/Contact.jsx';

export default function Home() {
  usePageMeta(
    'Bethel Concept — Décoration d’intérieur : plafonds, murs, LED',
    'Bethel Concept transforme l’intérieur de votre maison : faux plafonds, murs décoratifs, éclairages LED et finitions sur mesure. Demandez votre devis gratuit.'
  );
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Showcase />
      <Contact />
    </>
  );
}
