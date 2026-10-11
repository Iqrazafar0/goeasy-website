"use client";
import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import FleetGrid from "@/components/FleetGrid";
import CategoryGrid from "@/components/CategoryGrid";
import Payments from "@/components/Payments";
import BrandStrip from "@/components/BrandStrip";
import { IconShield, IconTag, IconPlane, IconHeadset, IconCheck, IconWhatsApp } from "@/components/Icons";
import { photo } from "@/data/cars";
import { whatsappLink } from "@/data/site";
import { useLang } from "@/components/LanguageProvider";

const HERO_IMAGE = "photo-1634823929885-b12342dfc408";
const AIRPORT_IMAGE = "photo-1707399720709-cd14e30d5e3a";
const featureIcons = [IconPlane, IconTag, IconShield, IconHeadset];

export default function HomePage() {
  const { t } = useLang();
  return (
    <>
      {/* HERO */}
      <section className="hero hero-photo">
        <div className="hero-bg" aria-hidden="true">
          <img src={photo(HERO_IMAGE, 1920)} alt="" />
        </div>
        <div className="hero-glow" aria-hidden="true" />
        <div className="container">
          <div>
            <span className="eyebrow hero-in" style={{ "--d": "0ms" }}>{t.hero.eyebrow}</span>
            <h1 className="hero-in" style={{ "--d": "100ms" }}>{t.hero.h1a}<em className="shine">{t.hero.h1b}</em></h1>
            <p className="lead hero-in" style={{ "--d": "220ms" }}>{t.hero.lead}</p>
            <div className="hero-actions hero-in" style={{ "--d": "340ms" }}>
              <Link href="/fleet" className="btn btn-gold">{t.hero.explore} <span className="arrow">→</span></Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <IconWhatsApp size={18} /> {t.hero.chat}
              </a>
            </div>
            <div className="hero-points hero-in" style={{ "--d": "460ms" }}>
              {t.hero.points.map(([a, b]) => <div key={a}><strong>{a}</strong>{b}</div>)}
            </div>
          </div>
          <div className="hero-in hero-card" style={{ "--d": "300ms" }}>
            <BookingForm />
          </div>
        </div>
      </section>

      {/* BRANDS — upar chalti gaari, neeche brands */}
      <BrandStrip />

      {/* CATEGORIES */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t.cat.eyebrow}</span>
            <h2>{t.cat.title}</h2>
            <p className="muted">{t.cat.text}</p>
          </div>
          <CategoryGrid />
        </div>
      </section>

      {/* FEATURED FLEET */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head section-head-row reveal">
            <div>
              <span className="eyebrow">{t.featured.eyebrow}</span>
              <h2>{t.featured.title}</h2>
              <p className="muted" style={{ margin: 0 }}>{t.featured.text}</p>
            </div>
            <Link href="/fleet" className="btn btn-ghost">{t.featured.seeAll} <span className="arrow">→</span></Link>
          </div>
          <FleetGrid featuredOnly />
        </div>
      </section>

      {/* AIRPORT BANNER */}
      <section className="section">
        <div className="container">
          <div className="airport-banner reveal zoom">
            <img src={photo(AIRPORT_IMAGE, 1600)} alt="" aria-hidden="true" loading="lazy" />
            <div className="airport-overlay" />
            <div className="airport-content">
              <span className="eyebrow">{t.airport.eyebrow}</span>
              <h2>{t.airport.title}</h2>
              <p>{t.airport.text}</p>
              <a href={whatsappLink("Hello Go Easy Adventure, I need a car at the airport. My flight details are:")} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                <IconPlane width={18} height={18} /> {t.airport.btn}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t.why.eyebrow}</span>
            <h2>{t.why.title}</h2>
          </div>
          <div className="features stagger">
            {t.why.items.map(([title, text], i) => {
              const Icon = featureIcons[i];
              return (
                <div className="feature" key={i}>
                  <div className="icon"><Icon /></div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PAYMENTS */}
      <Payments />

      {/* HOW IT WORKS */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{t.how.eyebrow}</span>
            <h2>{t.how.title}</h2>
          </div>
          <div className="steps stagger">
            {t.how.steps.map(([title, text], i) => (
              <div className="step" key={i}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTS + FAQ */}
      <section className="section">
        <div className="container split">
          <Documents />
          <div className="reveal" style={{ "--d": "120ms" }}>
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2>{t.faq.title}</h2>
            <FaqList />
          </div>
        </div>
      </section>

      <CtaBox />
    </>
  );
}

export function Documents() {
  const { t } = useLang();
  return (
    <div className="reveal">
      <span className="eyebrow">{t.docs.eyebrow}</span>
      <h2>{t.docs.title}</h2>
      <p className="muted">{t.docs.text}</p>
      <ul className="check-list stagger">
        {t.docs.items.map(([title, text], i) => (
          <li key={i}>
            <IconCheck />
            <div><strong>{title}</strong><span>{text}</span></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FaqList() {
  const { t } = useLang();
  return (
    <div className="faq">
      {t.faq.items.map(([q, a], i) => (
        <details key={i}>
          <summary>{q}</summary>
          <p>{a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBox() {
  const { t } = useLang();
  return (
    <section className="section" style={{ paddingTop: 0 }}>
      <div className="container">
        <div className="cta reveal zoom">
          <div>
            <h2>{t.cta.title}</h2>
            <p>{t.cta.text}</p>
          </div>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold pulse">
            <IconWhatsApp size={18} /> {t.cta.btn}
          </a>
        </div>
      </div>
    </section>
  );
}
