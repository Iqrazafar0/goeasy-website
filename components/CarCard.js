import { whatsappLink } from "@/data/site";
import { IconSeat, IconGear, IconCalendar, IconWhatsApp } from "./Icons";

export default function CarCard({ car }) {
  const msg = `Hello Go Easy Adventure, I would like to book the ${car.name} ${car.year}. Please share availability.`;
  return (
    <article className="car-card">
      <div className="car-img">
        <img src={car.image} alt={`${car.name} ${car.year} for rent in Dubai`} loading="lazy" />
        <span className="car-tag">{car.category}</span>
      </div>
      <div className="car-body">
        <h3>{car.name}</h3>
        <div className="car-specs">
          <span><IconCalendar style={{ verticalAlign: "-3px" }} /> {car.year}</span>
          <span><IconSeat style={{ verticalAlign: "-3px" }} /> {car.seats} Seats</span>
          <span><IconGear style={{ verticalAlign: "-3px" }} /> {car.transmission}</span>
        </div>
        <div className="car-prices">
          <div><span>Day</span><strong>AED {car.daily}</strong></div>
          <div><span>Week</span><strong>AED {car.weekly.toLocaleString()}</strong></div>
          <div><span>Month</span><strong>AED {car.monthly.toLocaleString()}</strong></div>
        </div>
        <a className="btn btn-navy btn-block" href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer">
          <IconWhatsApp size={18} /> Book on WhatsApp
        </a>
      </div>
    </article>
  );
}
