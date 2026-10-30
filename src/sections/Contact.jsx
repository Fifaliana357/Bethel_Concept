import { SITE, WHATSAPP_URL, TEL_URL } from '../config.js';
import ContactForm from '../components/ContactForm.jsx';
import Maybe from '../components/Maybe.jsx';
import Reveal from '../components/Reveal.jsx';

const icon = { width: 26, height: 26, viewBox: '0 0 26 26', fill: 'none', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true };
const isTodo = (v) => v.trim().startsWith('[');

export default function Contact() {
  return (
    <div id="contact">
      <section className="wrap contact-section">
        <div className="contact-box">
          <Reveal className="contact-info">
            <span className="eyebrow">Contact</span>
            <h2>Envie de déco pour votre maison ?</h2>
            <p className="lead">Décrivez-nous votre projet : nous vous répondons rapidement avec un devis gratuit.</p>

            <div className="info-blocks">
              <div className="info-block">
                <svg {...icon}><path d="M3 22l1.6-5.2A9.5 9.5 0 1 1 8.4 20.5z" /><path d="M9.5 9.5c.4 2.6 3.4 5.6 6 6l1.4-1.4-2-1.2-1 .8c-.9-.4-1.7-1.2-2.1-2.1l.8-1-1.2-2z" /></svg>
                <div>
                  <strong>WhatsApp</strong>
                  <a className="phone" href={TEL_URL}>{SITE.phoneDisplay}</a>
                  <a className="small-link" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">Écrire sur WhatsApp</a>
                </div>
              </div>

              <div className="info-block">
                <svg {...icon}><rect x="3" y="6" width="20" height="14" rx="2.5" /><path d="M4 8l9 6.5L22 8" /></svg>
                <div>
                  <strong>Email</strong>
                  {isTodo(SITE.email)
                    ? <Maybe value={SITE.email} />
                    : <a className="phone" href={`mailto:${SITE.email}`}>{SITE.email}</a>}
                </div>
              </div>

              <div className="info-block">
                <svg {...icon}><path d="M13 23s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12z" /><circle cx="13" cy="11" r="2.6" /></svg>
                <div>
                  <strong>Adresse et horaires d’ouverture</strong>
                  <Maybe value={SITE.address} />
                  <Maybe value={SITE.hours} />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120} className="form-wrap">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </div>
  );
}
