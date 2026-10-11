"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import FleetGrid from "@/components/FleetGrid";
import { getCar, photo } from "@/data/cars";
import { site, whatsappLink } from "@/data/site";
import { useLang } from "@/components/LanguageProvider";
import {
  IconWhatsApp, IconPhone, IconCalendar, IconChevron, IconGauge, IconEngine, IconDoor, IconFuel, IconBag,
  IconRoad, IconWheel, IconSeat, IconGear, IconCard, IconShieldSmall, IconTag, IconCheck,
} from "@/components/Icons";

export default function CarDetail({ id }) {
  const { t, cat } = useLang();
  const car = getCar(id);
  const d = t.detail;
  const images = [car.image, ...(car.gallery || [])];
  const [index, setIndex] = useState(0);
  const go = (step) => setIndex((i) => (i + step + images.length) % images.length);

  // Keyboard ke arrows se bhi photos badlein
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const wa = (extra = "") => whatsappLink(`Hello Go Easy Adventure, I am interested in the ${car.name}.${extra}`);

  const specs = [
    { icon: IconShieldSmall, label: d.deposit, value: d.depositVal, gold: true },
    { icon: IconRoad, label: d.mileage, value: d.mileageVal, gold: true },
    { icon: IconTag, label: d.extra, value: d.extraVal },
    { icon: IconCard, label: d.payment, value: d.paymentVal },
    { icon: IconGear, label: d.transmission, value: d.auto },
    { icon: IconCheck, label: d.type, value: cat(car.category) },
    { icon: IconEngine, label: d.engine, value: car.engine, ltr: true },
    { icon: IconSeat, label: d.seats, value: car.seats },
    { icon: IconDoor, label: d.doors, value: car.doors },
    { icon: IconGauge, label: d.accel, value: `${car.accel} ${d.sec}` },
    { icon: IconWheel, label: d.drive, value: car.drive, ltr: true },
    { icon: IconFuel, label: d.fuel, value: d.fuels[car.fuel] || car.fuel },
    { icon: IconBag, label: d.luggage, value: `${car.luggage} ${d.bags}` },
  ];

  return (
    <>
      {/* Breadcrumb + title */}
      <section className="detail-top">
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/">{d.home}</Link>
            <span>/</span>
            <Link href={`/fleet?category=${encodeURIComponent(car.category)}`}>{cat(car.category)}</Link>
            <span>/</span>
            <strong>{car.name}</strong>
          </nav>
        </div>
      </section>

      <section className="section detail-section">
        <div className="container detail-grid">
          {/* GALLERY */}
          <div className="gallery hero-in" style={{ "--d": "0ms" }}>
            <div className="gallery-main">
              {images.map((img, i) => (
                <img
                  key={img}
                  src={photo(img, 1400)}
                  alt={`${car.name} — ${d.photo} ${i + 1}`}
                  className={i === index ? "active" : ""}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              ))}
              <span className="car-tag">{cat(car.category)}</span>
              <span className="car-brand">{car.brand}</span>
              {images.length > 1 && (
                <>
                  <button className="gal-btn prev" onClick={() => go(-1)} aria-label={d.prev}><IconChevron dir="left" /></button>
                  <button className="gal-btn next" onClick={() => go(1)} aria-label={d.next}><IconChevron dir="right" /></button>
                  <span className="gal-count" dir="ltr">{index + 1} / {images.length}</span>
                </>
              )}
            </div>
            {images.length > 1 && (
              <div className="gallery-thumbs">
                {images.map((img, i) => (
                  <button key={img} className={i === index ? "active" : ""} onClick={() => setIndex(i)} aria-label={`${d.photo} ${i + 1}`}>
                    <img src={photo(img, 300)} alt="" loading="lazy" />
                  </button>
                ))}
              </div>
            )}
            <ul className="perks">
              {d.perks.map((p) => <li key={p}><IconCheck /> {p}</li>)}
            </ul>
          </div>

          {/* INFO PANEL */}
          <div className="detail-panel hero-in" style={{ "--d": "150ms" }}>
            <span className="eyebrow">{car.brand}</span>
            <h1>{car.name}</h1>

            <div className="spec-grid">
              {specs.map((s) => (
                <div className="spec" key={s.label}>
                  <s.icon width={18} height={18} />
                  <span className="spec-label">{s.label}</span>
                  <strong className={s.gold ? "gold" : ""} dir={s.ltr ? "ltr" : undefined}>{s.value}</strong>
                </div>
              ))}
            </div>

            <div className="rate-box">
              <div>
                <span>{d.daily}</span>
                <strong dir="ltr">AED {car.daily.toLocaleString()}</strong>
              </div>
              <div>
                <span>{d.weekly}</span>
                <a href={wa(" Please share the weekly rate.")} target="_blank" rel="noopener noreferrer">{d.askNow}</a>
              </div>
              <div>
                <span>{d.monthly}</span>
                <a href={wa(" Please share the monthly rate.")} target="_blank" rel="noopener noreferrer">{d.askNow}</a>
              </div>
            </div>

            <div className="detail-actions">
              <a className="btn btn-wa" href={wa(" Please share availability.")} target="_blank" rel="noopener noreferrer">
                <IconWhatsApp size={18} /> {d.whatsapp}
              </a>
              <a className="btn btn-ghost" href={`tel:${site.phoneLink}`}>
                <IconPhone width={18} height={18} /> {d.call}
              </a>
              <a className="btn btn-gold" href="#book">
                <IconCalendar width={18} height={18} /> {d.book}
              </a>
            </div>
            <p className="detail-note">{d.note}</p>
          </div>
        </div>
      </section>

      {/* BOOKING FORM */}
      <section className="section section-white" id="book">
        <div className="container detail-book reveal">
          <BookingForm variant={`car-${car.id}`} defaultCar={car.name} title={d.bookTitle} subtitle={d.bookSubtitle} />
        </div>
      </section>

      {/* SIMILAR CARS */}
      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <h2>{d.similar}</h2>
          </div>
          <FleetGrid onlyCategories={[car.category]} exclude={car.id} limit={3} />
        </div>
      </section>
    </>
  );
}
