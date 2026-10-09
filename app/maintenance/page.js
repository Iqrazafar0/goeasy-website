import { site, whatsappLink } from "@/data/site";
import { IconPhone, IconMail, IconPin, IconWhatsApp } from "@/components/Icons";

export const metadata = {
  title: "Coming Soon",
  description: "Our new website is under maintenance. Contact Go Easy Adventure Car Rental on WhatsApp to book a car in Dubai.",
  robots: { index: false, follow: false },
};

export default function Maintenance() {
  return (
    <main className="mt-page">
      <div className="mt-glow" aria-hidden="true" />
      <div className="mt-box">
        <img className="mt-logo hero-in" src="/logo-white.svg" alt={site.legalName} style={{ "--d": "0ms" }} />

        <span className="eyebrow hero-in" style={{ "--d": "120ms" }}>Website Under Maintenance</span>
        <h1 className="hero-in" style={{ "--d": "220ms" }}>
          Our new website is <em className="shine">on the way.</em>
        </h1>
        <p className="mt-lead hero-in" style={{ "--d": "320ms" }}>
          We are making a few improvements and will be back very soon.
          Our cars are still available — contact us on WhatsApp or call us to book today.
        </p>
        <p className="mt-ar hero-in" style={{ "--d": "380ms" }}>الموقع قيد الصيانة حالياً، تواصلوا معنا عبر واتساب للحجز</p>

        <div className="hero-actions mt-actions hero-in" style={{ "--d": "460ms" }}>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold pulse">
            <IconWhatsApp size={18} /> Book on WhatsApp
          </a>
          <a href={`tel:${site.phoneLink}`} className="btn btn-outline">
            <IconPhone width={18} height={18} /> {site.phoneDisplay}
          </a>
        </div>

        <div className="mt-info hero-in" style={{ "--d": "560ms" }}>
          <a href={`mailto:${site.email}`}><IconMail width={18} height={18} /> {site.email}</a>
          <a href={site.mapsLink} target="_blank" rel="noopener noreferrer"><IconPin width={18} height={18} /> {site.address}</a>
        </div>
      </div>

      <div className="road" aria-hidden="true">
        <div className="road-lines" />
        <img className="road-car" src="/cars/car-side.svg" alt="" />
      </div>
      <p className="mt-foot">© {new Date().getFullYear()} {site.legalName}</p>
    </main>
  );
}
