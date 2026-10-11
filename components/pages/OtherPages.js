"use client";
import { Suspense } from "react";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import FleetBrowser from "@/components/FleetBrowser";
import FleetGrid from "@/components/FleetGrid";
import BookingForm from "@/components/BookingForm";
import { Documents, FaqList, CtaBox } from "./HomePage";
import { IconPhone, IconMail, IconPin, IconClock, IconWhatsApp, IconCheck } from "@/components/Icons";
import { site, whatsappLink } from "@/data/site";
import { cars, categories, photo } from "@/data/cars";
import { useLang } from "@/components/LanguageProvider";

// ------------------------------------------------ FLEET
export function FleetPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.fleetPage.eyebrow} title={t.fleetPage.title} text={t.fleetPage.text} />
      <section className="section">
        <div className="container">
          <Suspense fallback={null}>
            <FleetBrowser />
          </Suspense>
        </div>
      </section>
    </>
  );
}

// ------------------------------------------------ PRICES
export function PricesPage() {
  const { t, cat } = useLang();
  return (
    <>
      <PageHero eyebrow={t.pricesPage.eyebrow} title={t.pricesPage.title} text={t.pricesPage.text} />
      <section className="section">
        <div className="container">
          {categories.map((c) => {
            const list = cars.filter((x) => x.category === c.name).sort((a, b) => a.daily - b.daily);
            return (
              <div className="price-block reveal" key={c.name}>
                <h2 className="price-cat">{cat(c.name)}</h2>
                <div className="price-table">
                  <div className="price-row price-head">
                    <span>{t.pricesPage.car}</span>
                    <span>{t.pricesPage.daily}</span>
                    <span />
                  </div>
                  {list.map((car) => (
                    <div className="price-row" key={car.id}>
                      <span className="price-car">
                        <img src={photo(car.image, 160)} alt="" loading="lazy" />
                        <span><Link href={`/cars/${car.id}`}><strong>{car.name}</strong></Link><small>{car.brand}</small></span>
                      </span>
                      <span className="price-val" dir="ltr">AED {car.daily.toLocaleString()}</span>
                      <a className="btn btn-navy btn-sm" href={whatsappLink(`Hello Go Easy Adventure, I would like to book the ${car.name}.`)} target="_blank" rel="noopener noreferrer">
                        <IconWhatsApp size={16} /> {t.pricesPage.book}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
          <p className="vat-note">{t.fleetNote}</p>
        </div>
      </section>
      <CtaBox />
    </>
  );
}

// ------------------------------------------------ MONTHLY RENTALS
export function MonthlyPage() {
  const { t } = useLang();
  const m = t.monthlyPage;
  return (
    <>
      <PageHero eyebrow={m.eyebrow} title={m.title} text={m.text} />
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <h2>{m.benefitsTitle}</h2>
          </div>
          <div className="features stagger">
            {m.benefits.map(([title, text], i) => (
              <div className="feature" key={i}>
                <div className="icon"><IconCheck width={22} height={22} /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 36 }} className="reveal">
            <a className="btn btn-gold pulse" href={whatsappLink("Hello Go Easy Adventure, I would like a monthly rental quote. Car and dates:")} target="_blank" rel="noopener noreferrer">
              <IconWhatsApp size={18} /> {m.quote}
            </a>
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>{m.popular}</h2>
          </div>
          <FleetGrid onlyCategories={["Economy", "SUV", "Luxury"]} limit={6} />
        </div>
      </section>
    </>
  );
}

// ------------------------------------------------ FAQS
export function FaqsPage() {
  const { t } = useLang();
  return (
    <>
      <PageHero eyebrow={t.faqsPage.eyebrow} title={t.faqsPage.title} text={t.faqsPage.text} />
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{t.faq.eyebrow}</span>
            <h2>{t.faq.title}</h2>
            <FaqList />
          </div>
          <Documents />
        </div>
      </section>
      <CtaBox />
    </>
  );
}

// ------------------------------------------------ ABOUT
export function AboutPage() {
  const { t } = useLang();
  const a = t.about;
  return (
    <>
      <PageHero eyebrow={a.eyebrow} title={a.title} text={a.text} />
      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">{a.whoEyebrow}</span>
            <h2>{site.name}</h2>
            <p>{site.legalName}{a.who1}</p>
            <p>{a.who2}</p>
            <div className="stats stagger">
              {a.stats.map(([big, small], i) => (
                <div className="stat" key={i}><strong>{big}</strong><span>{small}</span></div>
              ))}
            </div>
          </div>
          <div className="about-visual reveal zoom" style={{ "--d": "150ms" }}>
            <img src="/logo-mark.svg" alt="" />
          </div>
        </div>
      </section>
      <section className="section section-white">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">{a.promiseEyebrow}</span>
            <h2>{a.promiseTitle}</h2>
          </div>
          <div className="steps stagger">
            {a.values.map(([title, text], i) => (
              <div className="step" key={i}>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/fleet" className="btn btn-navy">{a.browse}</Link>
          </div>
        </div>
      </section>
    </>
  );
}

// ------------------------------------------------ CONTACT
export function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <>
      <PageHero eyebrow={c.eyebrow} title={c.title} text={c.text} />
      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="info-list stagger">
              <a className="info-item" href={`tel:${site.phoneLink}`}>
                <div className="icon"><IconPhone /></div>
                <div><span>{c.phone}</span><strong dir="ltr">{site.phoneDisplay}</strong></div>
              </a>
              <a className="info-item" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <div className="icon"><IconWhatsApp /></div>
                <div><span>{c.whatsapp}</span><strong dir="ltr">{site.phoneDisplay}</strong></div>
              </a>
              <a className="info-item" href={`mailto:${site.email}`}>
                <div className="icon"><IconMail /></div>
                <div><span>{c.email}</span><strong>{site.email}</strong></div>
              </a>
              <a className="info-item" href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                <div className="icon"><IconPin /></div>
                <div><span>{c.office}</span><strong>{t.addressShort}</strong></div>
              </a>
              <div className="info-item">
                <div className="icon"><IconClock /></div>
                <div><span>{c.hours}</span><strong>{t.hours}</strong></div>
              </div>
            </div>
            <div className="license-box reveal">
              <strong>{site.legalName}</strong>
              <div className="ar">{site.arabicName}</div>
              <div className="muted" style={{ marginTop: 6 }}>{c.license} {site.licenseNo} · {c.authority}</div>
            </div>
          </div>
          <div className="reveal" style={{ "--d": "150ms" }}>
            <BookingForm variant="contact" />
          </div>
        </div>
      </section>
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="map-wrap reveal">
            <iframe src={site.mapsEmbed} title={c.mapTitle} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>
    </>
  );
}
