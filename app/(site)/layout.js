import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Asli website ke sab pages is layout mein hain (header + footer ke saath)
export default function SiteLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
