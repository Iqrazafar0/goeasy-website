"use client";
import { useState } from "react";
import CarCard from "./CarCard";
import { cars, categories } from "@/data/cars";

export default function FleetGrid({ limit, showFilters = true }) {
  const [active, setActive] = useState("All");
  const list = (active === "All" ? cars : cars.filter((c) => c.category === active)).slice(0, limit || cars.length);

  return (
    <div className="reveal fleet-wrap">
      {showFilters && (
        <div className="filters">
          {["All", ...categories].map((c) => (
            <button key={c} className={`filter-btn ${active === c ? "active" : ""}`} onClick={() => setActive(c)}>
              {c}
            </button>
          ))}
        </div>
      )}
      {/* key badalne se filter change par cards dobara animate hote hain */}
      <div className="fleet-grid" key={active}>
        {list.map((car, i) => (
          <div className="car-anim" key={car.id} style={{ "--i": i }}>
            <CarCard car={car} />
          </div>
        ))}
      </div>
      <p className="vat-note">All prices are in AED and include 5% VAT. Security deposit and terms apply.</p>
    </div>
  );
}
