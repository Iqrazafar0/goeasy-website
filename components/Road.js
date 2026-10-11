// Chalti hui gaari wali sadak (animation)
export default function Road({ className = "" }) {
  return (
    <div className={`road ${className}`} aria-hidden="true">
      <div className="road-lines" />
      <img className="road-car" src="/cars/car-side.svg" alt="" />
    </div>
  );
}
