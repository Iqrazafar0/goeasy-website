"use client";
import { IconCard, IconTerminal, IconCash, IconStore, IconCrypto, IconGlobe } from "./Icons";
import { useLang } from "./LanguageProvider";

// Icons usi tarteeb mein jaisi i18n.js mein payment ki list hai
const icons = [IconCard, IconTerminal, IconCash, IconStore, IconCrypto, IconGlobe];
const currencies = ["AED", "USD", "EUR", "GBP", "Crypto"];

export default function Payments() {
  const { t } = useLang();
  return (
    <section className="section payments-section">
      <div className="container">
        <div className="section-head center reveal">
          <span className="eyebrow">{t.pay.eyebrow}</span>
          <h2>{t.pay.title}</h2>
          <p className="muted">{t.pay.text}</p>
          <div className="currency-row" dir="ltr">
            {currencies.map((c) => <span key={c} className="currency">{c}</span>)}
          </div>
        </div>
        <div className="pay-grid stagger">
          {t.pay.items.map(([title, text], i) => {
            const Icon = icons[i];
            return (
              <div className="pay-card" key={i}>
                <div className="icon"><Icon /></div>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
