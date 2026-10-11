import { brands } from "@/data/cars";
import Road from "./Road";

// Brands ki chalti patti: upar gaari chalti hai, neeche har brand ka naam aur logo
export default function BrandStrip() {
  const list = [...brands, ...brands]; // do dafa, taake patti bina ruke chale
  return (
    <div className="brand-zone" aria-label="Brands we offer">
      <Road className="road-strip" />
      <div className="brand-strip">
        <div className="brand-track">
          {list.map((b, i) => (
            <div className="brand-item" key={i}>
              <span className="brand-name">{b.name}</span>
              {b.logo ? (
                <img className="brand-logo" src={b.logo} alt={`${b.name} logo`} loading="lazy" />
              ) : (
                <span className="brand-badge">{b.name.charAt(0)}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
