import FleetGrid from "@/components/FleetGrid";

export const metadata = {
  title: "Our Fleet",
  description: "Browse economy cars, sedans, SUVs and luxury cars for rent in Dubai with daily, weekly and monthly prices including VAT.",
};

export default function FleetPage() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Fleet</span>
          <h1>Find the right car for your trip</h1>
          <p>Daily, weekly and monthly rates on every car. Pick one and book it on WhatsApp in a minute.</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FleetGrid />
        </div>
      </section>
    </>
  );
}
