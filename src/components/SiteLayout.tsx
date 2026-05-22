import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { EnquiryForm } from "./EnquiryForm";
import { PromoPopup } from "./PromoPopup";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const isHome = typeof window !== "undefined" && window.location.pathname === "/";
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navbar />
      <main className="flex-1">{children}</main>
      <EnquiryForm />
      <Footer />
      <WhatsAppFloat />
      {isHome && <PromoPopup />}
    </div>
  );
}