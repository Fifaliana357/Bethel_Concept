// Affiche une valeur ; si elle est provisoire (commence par « [ »), elle est entourée de pointillés.
export default function Maybe({ value, as: Tag = 'span', className = '', ...rest }) {
  const todo = typeof value === 'string' && value.trim().startsWith('[');
  return (
    <Tag className={`${todo ? 'todo ' : ''}${className}`.trim() || undefined} {...rest}>
      {value}
    </Tag>
  );
}
