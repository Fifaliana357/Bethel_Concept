import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Gallery from './pages/Gallery.jsx';
import NotFound from './pages/NotFound.jsx';

// Défilement à chaque navigation : vers la section demandée (#…) ou en haut de la page.
function ScrollManager() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
      return;
    }
    let tries = 0;
    const go = () => {
      const el = document.getElementById(decodeURIComponent(hash.slice(1)));
      if (el) el.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'start' });
      else if (tries++ < 20) setTimeout(go, 50);
    };
    go();
  }, [pathname, hash, key]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  return (
    <>
      <ScrollManager />
      <a className="skip" href="#main">Aller au contenu</a>
      <Header />
      <main id="main" key={pathname} className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/realisations" element={<Gallery />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
