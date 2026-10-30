import { Link } from 'react-router-dom';
import { NAV } from '../data.js';
import { SITE, WHATSAPP_URL } from '../config.js';
import Maybe from './Maybe.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src="/images/logo-stack-notag.png" alt="Bethel Concept" width="160" height="134" loading="lazy" />
            <p>Votre vision, notre construction.</p>
          </div>
          <div className="footer-col">
            <strong>Navigation</strong>
            {NAV.map((n) => (
              <Link key={n.id} to={n.to}>{n.label}</Link>
            ))}
          </div>
          <div className="footer-col">
            <strong>Contact</strong>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp : {SITE.phoneDisplay}</a>
            <Maybe value={SITE.email} />
            <Maybe value={SITE.address} />
            <Maybe value={SITE.facebook} />
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Bethel Concept. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
