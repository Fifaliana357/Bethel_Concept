import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import Photo from './Photo.jsx';

// Affiche une réalisation en grand, avec navigation au clavier (← → Échap).
export default function Lightbox({ items, index, onClose, onChange }) {
  const closeRef = useRef(null);
  const item = items[index];
  const total = items.length;
  const go = (d) => onChange((index + d + total) % total);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prevOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') go(-1);
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'Tab') {
        const f = document.querySelectorAll('.lb button');
        if (!f.length) return;
        const first = f[0];
        const last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
        else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  });

  if (!item) return null;

  return createPortal(
    <div
      className="lb"
      role="dialog"
      aria-modal="true"
      aria-label={`${item.label} — réalisation ${index + 1} sur ${total}`}
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <button ref={closeRef} className="lb-btn lb-close" type="button" onClick={onClose} aria-label="Fermer">
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true"><path d="M6 6l16 16M22 6L6 22" /></svg>
      </button>
      <button className="lb-btn lb-prev" type="button" onClick={() => go(-1)} aria-label="Photo précédente">
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M17 5l-9 9 9 9" /></svg>
      </button>
      <button className="lb-btn lb-next" type="button" onClick={() => go(1)} aria-label="Photo suivante">
        <svg width="26" height="26" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M11 5l9 9-9 9" /></svg>
      </button>
      <div className="lb-body" key={item.id}>
        <Photo className="lb-photo" tone={item.tone} label={item.label} img={item.img} />
        <p className="lb-count" aria-hidden="true">{index + 1} / {total}</p>
      </div>
    </div>,
    document.body
  );
}
