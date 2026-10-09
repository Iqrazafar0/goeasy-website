import BookingForm from "@/components/BookingForm";
import { site, whatsappLink } from "@/data/site";
import { IconPhone, IconMail, IconPin, IconClock, IconWhatsApp } from "@/components/Icons";

export const metadata = {
  title: "Contact Us",
  description: "Contact Go Easy Adventure Car Rental in Al Khabaisi, Dubai. Call or WhatsApp +971 55 909 8306 to book a car.",
};

export default function ContactPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>We are here to help</h1>
          <p>Call, WhatsApp or visit our office. Most booking requests are confirmed the same day.</p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div>
            <div className="info-list stagger">
              <a className="info-item" href={`tel:${site.phoneLink}`}>
                <div className="icon"><IconPhone /></div>
                <div><span>Phone</span><strong>{site.phoneDisplay}</strong></div>
              </a>
              <a className="info-item" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <div className="icon"><IconWhatsApp /></div>
                <div><span>WhatsApp</span><strong>{site.phoneDisplay}</strong></div>
              </a>
              <a className="info-item" href={`mailto:${site.email}`}>
                <div className="icon"><IconMail /></div>
                <div><span>Email</span><strong>{site.email}</strong></div>
              </a>
              <a className="info-item" href={site.mapsLink} target="_blank" rel="noopener noreferrer">
                <div className="icon"><IconPin /></div>
                <div><span>Office</span><strong>{site.address}</strong></div>
              </a>
              <div className="info-item">
                <div className="icon"><IconClock /></div>
                <div><span>Working Hours</span><strong>{site.hours}</strong></div>
              </div>
            </div>
            <div className="license-box reveal">
              <strong>{site.legalName}</strong>
              <div className="ar">{site.arabicName}</div>
              <div className="muted" style={{ marginTop: 6 }}>Trade License No. {site.licenseNo} · {site.licenseAuthority}</div>            </div>
          </div>
          <div className="reveal" style={{ "--d": "150ms" }}>
            <BookingForm title="Send a Booking Request" subtitle="Tell us your dates and we will confirm on WhatsApp." />
          </div>
        </div>
      </section>

      <section className="section section-white" style={{ paddingTop: 0, background: "transparent" }}>
        <div className="container">
          <div className="map-wrap reveal">
            <iframe
              src={site.mapsEmbed}
              title="Go Easy Adventure location on Google Maps"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    </>
  );
}
