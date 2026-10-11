"use client";
import { useState } from "react";
import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { categories, cars, brands, photo } from "@/data/cars";
import { useLang, LanguageSwitch } from "./LanguageProvider";

// Sirf wo brands jin ki cars hamare paas hain
const menuBrands = brands.filter((b) => cars.some((c) => c.brand === b.name));

function Dropdown({ label, children, onClose, wide = "" }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`nav-drop ${wide ? "is-mega" : ""} ${open ? "open" : ""}`} onMouseLeave={() => setOpen(false)}>
      <button type="button" className="nav-drop-btn" aria-expanded={open} onClick={() => setOpen(!open)} onMouseEnter={() => setOpen(true)}>
        {label} <span className="caret" aria-hidden="true">▾</span>
      </button>
      <div className={`nav-drop-menu ${wide}`} onClick={() => { setOpen(false); onClose(); }}>{children}</div>
    </div>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const { t, cat } = useLang();
  const close = () => setOpen(false);

  return (
    <>
      <header className="header">
        <div className="container">
          <Link href="/" className="logo" aria-label={site.name}>
            <img src="/logo.svg" alt={site.legalName} />
          </Link>

          <div className="header-right">
            <LanguageSwitch className="hide-desktop" />
            <button className="menu-btn" aria-label={t.nav.menu} aria-expanded={open} onClick={() => setOpen(!open)}>
              <span /><span /><span />
            </button>
          </div>

          <nav className={`nav ${open ? "open" : ""}`}>
            <Dropdown label={t.nav.carTypes} onClose={close} wide="mega mega-types">
              {categories.map((c) => (
                <Link key={c.name} className="mega-type" href={`/fleet?category=${encodeURIComponent(c.name)}`}>
                  <img src={photo(c.image, 240)} alt="" loading="lazy" />
                  <span>
                    <strong>{cat(c.name)}</strong>
                    <small>{cars.filter((x) => x.category === c.name).length} {t.cat.cars}</small>
                  </span>
                </Link>
              ))}
              <Link className="mega-all" href="/fleet">{t.nav.allCars} <span className="arrow">→</span></Link>
            </Dropdown>
            <Dropdown label={t.nav.brands} onClose={close} wide="mega mega-brands">
              {menuBrands.map((b) => (
                <Link key={b.name} className="mega-brand" href={`/fleet?brand=${encodeURIComponent(b.name)}`}>
                  {b.logo ? <img src={b.logo} alt="" /> : <span className="brand-badge">{b.name.charAt(0)}</span>}
                  <span>{b.name}</span>
                </Link>
              ))}
              <Link className="mega-all" href="/fleet">{t.allBrandsLink} <span className="arrow">→</span></Link>
            </Dropdown>
            <Link href="/monthly-rentals" onClick={close}>{t.nav.monthly}</Link>
            <Link href="/prices" onClick={close}>{t.nav.prices}</Link>
            <Link href="/about" onClick={close}>{t.nav.about}</Link>
            <Link href="/faqs" onClick={close}>{t.nav.faqs}</Link>
            <Link href="/contact" onClick={close}>{t.nav.contact}</Link>
            <LanguageSwitch className="hide-mobile" />
          </nav>
        </div>
      </header>
    </>
  );
}
