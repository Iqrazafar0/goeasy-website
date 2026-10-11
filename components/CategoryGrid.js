"use client";
import Link from "next/link";
import { categories, cars, photo } from "@/data/cars";
import { useLang } from "./LanguageProvider";

export default function CategoryGrid() {
  const { t, cat } = useLang();
  return (
    <div className="cat-grid stagger">
      {categories.map((c) => {
        const inCat = cars.filter((x) => x.category === c.name);
        const from = Math.min(...inCat.map((x) => x.daily));
        return (
          <Link key={c.name} href={`/fleet?category=${encodeURIComponent(c.name)}`} className="cat-tile">
            <img src={photo(c.image, 800)} alt={`${c.name} cars for rent in Dubai`} loading="lazy" />
            <div className="cat-overlay" />
            <div className="cat-info">
              <span className="cat-count">{inCat.length} {t.cat.cars} · {t.cat.from} <span dir="ltr">AED {from.toLocaleString()}</span></span>
              <h3>{cat(c.name)}{t.cat.suffix}</h3>
              <p>{t.cat.texts[c.name]}</p>
              <span className="cat-link">{t.cat.explore} <span className="arrow">→</span></span>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
