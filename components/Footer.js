import Link from "next/link";
import { site, whatsappLink } from "@/data/site";
import { IconWhatsApp } from "./Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <Link href="/" className="logo"><img src="/logo-white.svg" alt={site.legalName} /></Link>
              <p>Reliable, well-maintained rental cars in Dubai with clear prices and simple WhatsApp booking.</p>
              <p className="ar">{site.arabicName}</p>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/fleet">Our Fleet</Link></li>
                <li><Link href="/about">About Us</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4>Car Types</h4>
              <ul>
                <li><Link href="/fleet">Economy Cars</Link></li>
                <li><Link href="/fleet">Sedans</Link></li>
                <li><Link href="/fleet">SUVs</Link></li>
                <li><Link href="/fleet">Luxury Cars</Link></li>
              </ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul>
                <li><a href={`tel:${site.phoneLink}`}>{site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>{site.address}</li>
                <li>{site.hours}</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© {year} {site.legalName}. All rights reserved.</span>
            <span>Dubai Trade License No. {site.licenseNo}</span>
          </div>
        </div>
      </footer>
      <a className="wa-float" href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <IconWhatsApp size={30} />
      </a>
    </>
  );
}
