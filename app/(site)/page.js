import Link from "next/link";
import BookingForm from "@/components/BookingForm";
import FleetGrid from "@/components/FleetGrid";
import { IconShield, IconTag, IconTruck, IconHeadset, IconCheck, IconWhatsApp } from "@/components/Icons";
import { requirements, faqs } from "@/data/faqs";
import { whatsappLink } from "@/data/site";

const features = [
  { icon: <IconTag />, title: "Clear Prices", text: "Daily, weekly and monthly rates shown upfront, with VAT included. No surprises at pickup." },
  { icon: <IconShield />, title: "Well-Maintained Cars", text: "Every car is cleaned, checked and serviced on schedule before each rental." },
  { icon: <IconTruck />, title: "Delivery & Pick-Up", text: "Pick up from our Al Barsha branch or get the car delivered to your home, hotel or the airport." },
  { icon: <IconHeadset />, title: "Quick WhatsApp Support", text: "Book, extend or ask a question on WhatsApp and get a fast reply from our team." },
];

const steps = [
  { title: "Choose Your Car", text: "Browse our fleet and pick the car that fits your trip and budget." },
  { title: "Send Your Dates", text: "Share your pickup and return dates on WhatsApp or through the booking form." },
  { title: "Drive Away", text: "Show your documents, sign the agreement and enjoy the road." },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="container">
          <div>
            <span className="eyebrow hero-in" style={{ "--d": "0ms" }}>Car Rental in Dubai</span>
            <h1 className="hero-in" style={{ "--d": "100ms" }}>Rent a car in Dubai, <em className="shine">the easy way.</em></h1>
            <p className="lead hero-in" style={{ "--d": "220ms" }}>
              Economy cars, sedans, SUVs and luxury cars on daily, weekly and monthly plans.
              Simple booking, clear prices and friendly service.
            </p>
            <div className="hero-actions hero-in" style={{ "--d": "340ms" }}>
              <Link href="/fleet" className="btn btn-gold">View Our Fleet <span className="arrow">→</span></Link>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                <IconWhatsApp size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="hero-points hero-in" style={{ "--d": "460ms" }}>
              <div><strong>Daily to Monthly</strong>Flexible rental plans</div>
              <div><strong>VAT Included</strong>Prices you can trust</div>
              <div><strong>Dubai Licensed</strong>Registered with DET</div>
            </div>
          </div>
          <div className="hero-in hero-card" style={{ "--d": "300ms" }}>
            <BookingForm />
          </div>
        </div>

        {/* Animated road with a car driving across */}
        <div className="road" aria-hidden="true">
          <div className="road-lines" />
          <img className="road-car" src="/cars/car-side.svg" alt="" />
        </div>
      </section>

      {/* WHY US */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Car rental without the hassle</h2>
            <p className="muted">We keep things simple, so you can focus on your trip, your work or your family.</p>
          </div>
          <div className="features stagger">
            {features.map((f) => (
              <div className="feature" key={f.title}>
                <div className="icon">{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FLEET */}
      <section className="section section-white">
        <div className="container">
          <div className="section-head reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", maxWidth: "none", gap: 20, flexWrap: "wrap" }}>
            <div style={{ maxWidth: 560 }}>
              <span className="eyebrow">Our Fleet</span>
              <h2>Popular cars for rent</h2>
              <p className="muted" style={{ margin: 0 }}>From everyday city cars to spacious SUVs for family trips and desert drives.</p>
            </div>
            <Link href="/fleet" className="btn btn-ghost">See All Cars <span className="arrow">→</span></Link>
          </div>
          <FleetGrid limit={6} showFilters={false} />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-head center reveal">
            <span className="eyebrow">How It Works</span>
            <h2>Book your car in 3 simple steps</h2>
          </div>
          <div className="steps stagger">
            {steps.map((s) => (
              <div className="step" key={s.title} style={{ background: "#fff" }}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REQUIREMENTS + FAQ */}
      <section className="section section-white">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Documents Needed</span>
            <h2>What you need to rent</h2>
            <p className="muted">Bring these documents at pickup or delivery. Our team will guide you if anything is missing.</p>
            <ul className="check-list stagger">
              {requirements.map((r) => (
                <li key={r.title}>
                  <IconCheck />
                  <div><strong>{r.title}</strong><span>{r.text}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="reveal" style={{ "--d": "120ms" }}>
            <span className="eyebrow">FAQs</span>
            <h2>Common questions</h2>
            <div className="faq">
              {faqs.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta reveal zoom">
            <div>
              <h2>Ready to hit the road?</h2>
              <p>Message us now and get your car confirmed today.</p>
            </div>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="btn btn-gold pulse">
              <IconWhatsApp size={18} /> Book on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
