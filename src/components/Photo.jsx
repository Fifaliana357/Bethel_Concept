// Cadre photo : affiche la vraie photo si `img` est renseigné, sinon un cadre coloré provisoire.
export default function Photo({ tone = 'gold', label, img, alt, className = '', arch = false, note = true }) {
  return (
    <figure className={`ph ph-${tone}${arch ? ' arch' : ''}${className ? ' ' + className : ''}`}>
      {img && <img src={img} alt={alt || label || ''} loading="lazy" />}
      {label && (
        <figcaption>
          <span>{label}</span>
          {!img && note && <small>Photo à ajouter</small>}
        </figcaption>
      )}
    </figure>
  );
}
