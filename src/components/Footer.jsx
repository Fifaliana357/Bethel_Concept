import { Link } from 'react-router-dom';
import { NAV, } from '../data.js';
import { SITE, WHATSAPP_URL } from '../config.js';
import Maybe from './Maybe.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <img src="/images/logo-stack.png" alt="Bethel Concept — Votre vision, notre construction" width="160" height="150" loading="lazy" />
        <div className="footer-col">
          <strong>Pages</strong>
          {NAV.map((n) => (
            <Link key={n.to} to={n.to}>{n.label}</Link>
          ))}
        </div>
        <div className="footer-col">
          <strong>Contact</strong>
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">WhatsApp : {SITE.phoneDisplay}</a>
          <Maybe value={SITE.email} />
          <Maybe value={SITE.address} />
          <Maybe value={SITE.facebook} />
        </div>
        <span className="copyright">© {new Date().getFullYear()} Bethel Concept</span>
      </div>
    </footer>
  );
}
