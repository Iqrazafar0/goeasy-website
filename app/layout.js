import "./globals.css";
import ScrollEffects from "@/components/ScrollEffects";
import { site } from "@/data/site";

export const metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "Go Easy Adventure | Car Rental in Dubai",
    template: "%s | Go Easy Adventure Car Rental",
  },
  description:
    "Rent a car in Dubai with Go Easy Adventure Car Rental L.L.C. Economy cars, sedans, SUVs and luxury cars with daily, weekly and monthly rates. Book on WhatsApp.",
  keywords: ["car rental Dubai", "rent a car Dubai", "monthly car rental Dubai", "SUV rental Dubai", "Go Easy Adventure"],
  icons: { icon: "/logo-mark.svg" },
  openGraph: {
    title: "Go Easy Adventure | Car Rental in Dubai",
    description: "Daily, weekly and monthly car rental in Dubai. Book on WhatsApp.",
    url: site.domain,
    siteName: site.name,
    locale: "en_AE",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRental",
  name: site.legalName,
  telephone: site.phoneLink,
  email: site.email,
  url: site.domain,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop No. 8, Al Ghurair Building, Al Barsha 1",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        {/* Animations sirf tab chalein jab JavaScript on ho, warna content seedha nazar aaye */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <ScrollEffects />
        {children}
      </body>
    </html>
  );
}
