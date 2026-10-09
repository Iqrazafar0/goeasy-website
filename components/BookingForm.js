"use client";
import { useState } from "react";
import { cars } from "@/data/cars";
import { whatsappLink } from "@/data/site";
import { IconWhatsApp } from "./Icons";

export default function BookingForm({ title = "Book Your Car", subtitle = "Fill in the details and confirm on WhatsApp in seconds." }) {
  const [f, setF] = useState({ name: "", car: "", pickup: "", ret: "", location: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    const msg = [
      "Hello Go Easy Adventure, I would like to book a car.",
      `Name: ${f.name}`,
      `Car: ${f.car || "Any available"}`,
      `Pickup date: ${f.pickup}`,
      `Return date: ${f.ret}`,
      `Pickup location: ${f.location || "Office"}`,
    ].join("\n");
    window.open(whatsappLink(msg), "_blank", "noopener");
  }

  return (
    <form className="booking-card" onSubmit={submit}>
      <h3>{title}</h3>
      <p className="muted">{subtitle}</p>
      <div className="form-grid">
        <div className="field full">
          <label htmlFor="bf-name">Full Name</label>
          <input id="bf-name" required value={f.name} onChange={set("name")} placeholder="Your name" />
        </div>
        <div className="field full">
          <label htmlFor="bf-car">Select Car</label>
          <select id="bf-car" value={f.car} onChange={set("car")}>
            <option value="">Any available car</option>
            {cars.map((c) => <option key={c.id} value={`${c.name} ${c.year}`}>{c.name} {c.year}</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor="bf-pick">Pickup Date</label>
          <input id="bf-pick" type="date" required value={f.pickup} onChange={set("pickup")} />
        </div>
        <div className="field">
          <label htmlFor="bf-ret">Return Date</label>
          <input id="bf-ret" type="date" required value={f.ret} onChange={set("ret")} />
        </div>
        <div className="field full">
          <label htmlFor="bf-loc">Pickup Location</label>
          <input id="bf-loc" value={f.location} onChange={set("location")} placeholder="Our office, hotel, airport or your address" />
        </div>
      </div>
      <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: 18 }}>
        <IconWhatsApp size={18} /> Send Booking Request
      </button>
      <p className="form-note">We reply on WhatsApp to confirm availability and price.</p>
    </form>
  );
}
