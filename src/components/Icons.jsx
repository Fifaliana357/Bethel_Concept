const base = { width: 40, height: 40, viewBox: '0 0 40 40', fill: 'none', strokeWidth: 1.8, 'aria-hidden': true };

export function ServiceIcon({ name }) {
  switch (name) {
    case 'plafond':
      return <svg {...base}><rect x="4" y="8" width="32" height="24" rx="2" /><path d="M10 14h20M10 20h20" /></svg>;
    case 'mur':
      return <svg {...base}><path d="M8 34V16a12 12 0 0 1 24 0v18z" /><path d="M14 34V18a6 6 0 0 1 12 0v16" /></svg>;
    case 'led':
      return <svg {...base}><path d="M20 6a10 10 0 0 1 6 18v4H14v-4A10 10 0 0 1 20 6z" /><path d="M16 33h8M17 36h6" /></svg>;
    default:
      return <svg {...base}><path d="M4 28l16-8 16 8-16 8z" /><path d="M4 22l16-8 16 8" /></svg>;
  }
}
