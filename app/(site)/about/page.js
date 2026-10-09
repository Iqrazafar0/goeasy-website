import Link from "next/link";
import { site } from "@/data/site";

export const metadata = {
  title: "About Us",
  description: "Go Easy Adventure Car Rental L.L.C is a Dubai-licensed car rental company offering reliable cars with clear prices and simple booking.",
};

const values = [
  { title: "Honest Pricing", text: "The price you see is the price you pay. VAT is included and every charge is explained before you sign." },
  { title: "Cars You Can Rely On", text: "Our cars are serviced on schedule and checked before every handover, so your trip runs smoothly." },
  { title: "Service That Responds", text: "Questions, extensions or changes are handled quickly on WhatsApp or by phone." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Making car rental in Dubai simple</h1>
          <p>A Dubai-licensed rental company built on clear prices, reliable cars and quick service.</p>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="reveal">
            <span className="eyebrow">Who We Are</span>
            <h2>{site.name}</h2>
            <p>
              {site.legalName} is a car rental company based in Al Barsha, Dubai. We help residents,
              visitors and businesses get a dependable car without long paperwork or hidden costs.
            </p>
            <p>
              Whether you need a small car for daily commuting, a sedan for business meetings or an SUV for a
              family weekend, we offer flexible daily, weekly and monthly plans to suit you.
            </p>
            <div className="stats stagger">
              <div className="stat"><strong>Daily</strong><span>to monthly plans</span></div>
              <div className="stat"><strong>4</strong><span>car categories</span></div>
              <div className="stat"><strong>VAT</strong><span>included prices</span></div>
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
            <span className="eyebrow">Our Promise</span>
            <h2>What you can expect from us</h2>
          </div>
          <div className="steps stagger">
            {values.map((v) => (
              <div className="step" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/fleet" className="btn btn-navy">Browse Our Fleet</Link>
          </div>
        </div>
      </section>
    </>
  );
}
