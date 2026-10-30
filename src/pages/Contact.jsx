import { usePageMeta } from '../hooks.js';
import { SITE, WHATSAPP_URL, TEL_URL } from '../config.js';
import ContactForm from '../components/ContactForm.jsx';
import Maybe from '../components/Maybe.jsx';
import Reveal from '../components/Reveal.jsx';

export default function Contact() {
  usePageMeta(
    'Contact et devis gratuit — Bethel Concept',
    'Contactez Bethel Concept par WhatsApp, téléphone ou via le formulaire pour décrire votre projet de décoration intérieure et recevoir un devis gratuit.'
  );

  return (
    <section className="wrap contact-section">
      <div className="contact-box">
        <Reveal className="contact-info">
          <span className="eyebrow light">Contact</span>
          <h1>Envie de déco pour votre maison ?</h1>
          <p className="lead">Décrivez-nous votre projet : nous vous répondons rapidement avec un devis gratuit.</p>
          <div className="contact-actions">
            <a className="btn btn-light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp : {SITE.phoneDisplay}</a>
            <a className="btn btn-outline-light" href={TEL_URL}>Appeler maintenant</a>
          </div>
          <div className="contact-lines">
            <Maybe value={SITE.email} />
            <Maybe value={SITE.address} />
            <Maybe value={SITE.hours} />
          </div>
        </Reveal>
        <Reveal delay={120} className="form-wrap">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
