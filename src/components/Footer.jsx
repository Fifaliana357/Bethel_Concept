import { Link } from 'react-router-dom';
import { NAV } from '../data.js';
import { SITE, WHATSAPP_URL } from '../config.js';
import Maybe from './Maybe.jsx';

const isTodo = (v) => v.trim().startsWith('[');

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
            {isTodo(SITE.email)
              ? <Maybe value={SITE.email} />
              : <a href={`mailto:${SITE.email}`}>{SITE.email}</a>}
            <Maybe value={SITE.address} />
            {isTodo(SITE.facebook)
              ? <Maybe value={SITE.facebook} />
              : <a href={SITE.facebook} target="_blank" rel="noopener noreferrer">Facebook : Bethel Concept</a>}
          </div>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Bethel Concept. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
