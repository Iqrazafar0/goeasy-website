"use client";
import { useState } from "react";
import Link from "next/link";
import { site, whatsappLink } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/fleet", label: "Our Fleet" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="topbar">
        <div className="container">
          <span className="hide-sm">{site.address}</span>
          <span>
            <a href={`tel:${site.phoneLink}`}>{site.phoneDisplay}</a>
            <span className="hide-sm"> &nbsp;·&nbsp; {site.hours}</span>
          </span>
        </div>
      </div>
      <header className="header">
        <div className="container">
          <Link href="/" className="logo" aria-label={site.name}>
            <img src="/logo.svg" alt={site.legalName} />
          </Link>
          <button className="menu-btn" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
          <nav className={`nav ${open ? "open" : ""}`}>
            {links.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)}>{l.label}</Link>
            ))}
            <a className="btn btn-navy" href={whatsappLink()} target="_blank" rel="noopener noreferrer">Book Now</a>
          </nav>
        </div>
      </header>
    </>
  );
}
