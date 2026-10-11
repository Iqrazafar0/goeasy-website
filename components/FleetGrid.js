"use client";
import CarCard from "./CarCard";
import { cars, categories } from "@/data/cars";
import { useLang } from "./LanguageProvider";

export const allBrands = [...new Set(cars.map((c) => c.brand))];

// filters = { category, brand, onChange } — sirf Fleet page par
export default function FleetGrid({ limit, featuredOnly = false, onlyCategories, filters, exclude }) {
  const { t, cat } = useLang();
  const active = filters?.category || "All";
  const brand = filters?.brand || "All";

  let list = featuredOnly ? cars.filter((c) => c.featured) : cars;
  if (onlyCategories) list = list.filter((c) => onlyCategories.includes(c.category));
  if (exclude) list = list.filter((c) => c.id !== exclude);
  if (active !== "All") list = list.filter((c) => c.category === active);
  if (brand !== "All") list = list.filter((c) => c.brand === brand);
  list = list.slice(0, limit || list.length);

  return (
    <div className="reveal fleet-wrap">
      {filters && (
        <div className="filter-bar">
          <div className="filters">
            {["All", ...categories.map((c) => c.name)].map((c) => (
              <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => filters.onChange(c, "All")}>
                {cat(c)}{c !== "All" && <span className="count">{cars.filter((x) => x.category === c).length}</span>}
              </button>
            ))}
          </div>
          <label className="brand-select">
            <span>{t.fleetPage.brand}</span>
            <select value={brand} onChange={(e) => filters.onChange("All", e.target.value)}>
              <option value="All">{cat("All")}</option>
              {allBrands.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
          </label>
        </div>
      )}
      <div className="fleet-grid" key={`${active}-${brand}`}>
        {list.map((car, i) => (
          <div className="car-anim" key={car.id} style={{ "--i": i }}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      {list.length === 0 && <p className="empty-note">{t.noCars}</p>}
      <p className="vat-note">{t.fleetNote}</p>
    </div>
  );
}
