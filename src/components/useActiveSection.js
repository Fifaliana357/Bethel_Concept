import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NAV } from '../data.js';

// Section visible à l'écran (page d'accueil) ; « realisations » sur la page galerie.
export default function useActiveSection() {
  const { pathname } = useLocation();
  const [active, setActive] = useState('accueil');

  useEffect(() => {
    if (pathname !== '/') {
      setActive(pathname === '/realisations' ? 'realisations' : '');
      return;
    }
    let raf = 0;
    const compute = () => {
      raf = 0;
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      let cur = NAV[0].id;
      if (atBottom) cur = NAV[NAV.length - 1].id;
      else {
        const line = 120;
        for (const n of NAV) {
          const el = document.getElementById(n.id);
          if (el && el.getBoundingClientRect().top <= line) cur = n.id;
        }
      }
      setActive(cur);
    };
    const onScroll = () => { if (!raf) raf = requestAnimationFrame(compute); };
    compute();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    // le contenu peut encore changer de hauteur juste après l'affichage
    const t = setTimeout(compute, 400);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(raf);
      clearTimeout(t);
    };
  }, [pathname]);

  return active;
}
