import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import useActiveSection from './useActiveSection.js';
import { NAV } from '../data.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { key } = useLocation();
  const active = useActiveSection();

  useEffect(() => setOpen(false), [key]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 901px)');
    const onChange = (e) => e.matches && setOpen(false);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
      <div className="wrap bar">
        <Link className="brand" to="/" aria-label="Bethel Concept — accueil">
          <img src="/images/logo-icon-green.png" alt="" width="45" height="48" />
          <img src="/images/logo-wordmark-green.png" alt="Bethel Concept" width="138" height="48" />
        </Link>

        <nav className="nav" aria-label="Navigation principale">
          {NAV.map((n) => (
            <Link key={n.id} to={n.to} aria-current={active === n.id ? 'page' : undefined}>{n.label}</Link>
          ))}
        </nav>

        <Link className="btn btn-primary header-cta" to="/#contact">Demander un devis</Link>

        <button
          className="burger"
          type="button"
          aria-expanded={open}
          aria-controls="mpanel"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l16 16M22 6L6 22" /></svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M4 8h20M4 14h20M4 20h20" /></svg>
          )}
        </button>
      </div>

      <div className={`mpanel${open ? ' open' : ''}`} id="mpanel">
        <nav aria-label="Menu mobile">
          {NAV.map((n) => (
            <Link key={n.id} to={n.to} aria-current={active === n.id ? 'page' : undefined} tabIndex={open ? 0 : -1}>{n.label}</Link>
          ))}
        </nav>
        <Link className="btn btn-primary" to="/#contact" tabIndex={open ? 0 : -1}>Demander un devis</Link>
      </div>
    </header>
  );
}
