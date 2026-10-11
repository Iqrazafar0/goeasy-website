"use client";
import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { categories } from "@/data/cars";
import { IconWhatsApp } from "./Icons";
import { useLang } from "./LanguageProvider";

export default function Footer() {
  const { t, cat } = useLang();
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="logo"><img src="/logo-white.svg" alt={site.legalName} /></Link>
              <p>{t.footer.text}</p>
              <p className="ar">{site.arabicName}</p>
            </div>
            <div>
              <h4>{t.footer.quick}</h4>
              <ul>
                <li><Link href="/fleet">{t.nav.allCars}</Link></li>
                <li><Link href="/monthly-rentals">{t.nav.monthly}</Link></li>
                <li><Link href="/prices">{t.nav.prices}</Link></li>
                <li><Link href="/about">{t.nav.about}</Link></li>
                <li><Link href="/faqs">{t.nav.faqs}</Link></li>
                <li><Link href="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>
            <div>
              <h4>{t.footer.types}</h4>
              <ul>
                {categories.map((c) => (
                  <li key={c.name}><Link href={`/fleet?category=${encodeURIComponent(c.name)}`}>{cat(c.name)}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4>{t.footer.contact}</h4>
              <ul>
                <li><a href={`tel:${site.phoneLink}`} dir="ltr">{site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>{t.addressShort}</li>
                <li>{t.hours}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} {site.legalName}. {t.footer.rights}</span>
            <span>{t.footer.license} {site.licenseNo}</span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
        <IconWhatsApp size={30} />
      </a>
    </>
  );
}
