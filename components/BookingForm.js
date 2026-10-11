"use client";
import { useState } from "react";
import { cars } from "@/data/cars";
import { whatsappLink } from "@/data/site";
import { IconWhatsApp } from "./Icons";
import { useLang } from "./LanguageProvider";

export default function BookingForm({ variant = "home", defaultCar = "", title: customTitle, subtitle: customSubtitle }) {
  const { t } = useLang();
  const title = customTitle || (variant === "contact" ? t.form.contactTitle : t.form.title);
  const subtitle = customSubtitle || (variant === "contact" ? t.form.contactSubtitle : t.form.subtitle);
  const [f, setF] = useState({ name: "", car: defaultCar, pickup: "", ret: "", location: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  function submit(e) {
    e.preventDefault();
    // WhatsApp message English mein jata hai taake staff aasani se parh sake
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
          <label htmlFor={`bf-name-${variant}`}>{t.form.name}</label>
          <input id={`bf-name-${variant}`} required value={f.name} onChange={set("name")} placeholder={t.form.namePh} />
        </div>
        <div className="field full">
          <label htmlFor={`bf-car-${variant}`}>{t.form.car}</label>
          <select id={`bf-car-${variant}`} value={f.car} onChange={set("car")}>
            <option value="">{t.form.anyCar}</option>
            {cars.map((c) => <option key={c.id} value={c.name}>{c.name} (AED {c.daily.toLocaleString()}/{t.form.perDay})</option>)}
          </select>
        </div>
        <div className="field">
          <label htmlFor={`bf-pick-${variant}`}>{t.form.pickup}</label>
          <input id={`bf-pick-${variant}`} type="date" required value={f.pickup} onChange={set("pickup")} />
        </div>
        <div className="field">
          <label htmlFor={`bf-ret-${variant}`}>{t.form.ret}</label>
          <input id={`bf-ret-${variant}`} type="date" required value={f.ret} onChange={set("ret")} />
        </div>
        <div className="field full">
          <label htmlFor={`bf-loc-${variant}`}>{t.form.location}</label>
          <input id={`bf-loc-${variant}`} value={f.location} onChange={set("location")} placeholder={t.form.locationPh} />
        </div>
      </div>
      <button type="submit" className="btn btn-gold btn-block" style={{ marginTop: 18 }}>
        <IconWhatsApp size={18} /> {t.form.send}
      </button>
      <p className="form-note">{t.form.note}</p>
    </form>
  );
}
