"use client";
import Link from "next/link";
import { whatsappLink } from "@/data/site";
import { photo } from "@/data/cars";
import { IconSeat, IconGear, IconWhatsApp } from "./Icons";
import { useLang } from "./LanguageProvider";

export default function CarCard({ car }) {
  const { t, cat } = useLang();
  const msg = `Hello Go Easy Adventure, I would like to book the ${car.name}. Please share availability and price.`;
  return (
    <article className="car-card">
      <Link href={`/cars/${car.id}`} className="car-img" aria-label={car.name}>
        <img
          src={photo(car.image, 700)}
          srcSet={`${photo(car.image, 500)} 500w, ${photo(car.image, 900)} 900w`}
          sizes="(max-width: 760px) 100vw, 33vw"
          alt={`${car.name} for rent in Dubai`}
          loading="lazy"
          style={car.focus ? { objectPosition: car.focus } : undefined}
        />
        <span className="car-tag">{cat(car.category)}</span>
        <span className="car-brand">{car.brand}</span>
        <span className="car-view">{t.viewDetails} <span className="arrow">→</span></span>
      </Link>
      <div className="car-body">
        <h3><Link href={`/cars/${car.id}`}>{car.name}</Link></h3>
        <div className="car-specs">
          <span><IconSeat style={{ verticalAlign: "-3px" }} /> {car.seats} {t.car.seats}</span>
          <span><IconGear style={{ verticalAlign: "-3px" }} /> {t.car.auto}</span>
        </div>
        <div className="car-price">
          <div>
            <span className="from">{t.car.from}</span>
            <strong dir="ltr">AED {car.daily.toLocaleString()}</strong>
            <span className="per">{t.car.perDay}</span>
          </div>
          <span className="long-term">{t.car.deals}</span>
        </div>
        <div className="car-actions">
          <Link className="btn btn-ghost" href={`/cars/${car.id}`}>{t.viewDetails}</Link>
          <a className="btn btn-navy" href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer" aria-label={t.car.book}>
            <IconWhatsApp size={18} /> <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </article>
  );
}
