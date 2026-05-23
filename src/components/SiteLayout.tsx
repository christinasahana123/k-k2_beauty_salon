import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "./WhatsAppFloat";
import { EnquiryForm } from "./EnquiryForm";
import { PromoPopup } from "./PromoPopup";
import logo from "@/assets/logo.png";

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const isHome = typeof window !== "undefined" && window.location.pathname === "/";

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#1C110F] via-[#261816] to-[#120B0A] text-[#FFF8F2]">
        {/* Subtle glowing gold background radial gradient */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,137,58,0.08)_0%,transparent_70%)] pointer-events-none" />
        
        {/* Shaking Logo */}
        <div className="relative animate-gentle-shake flex flex-col items-center">
          <img
            src={logo}
            alt="K&K2 Beauty Salon"
            className="h-20 sm:h-24 w-auto object-contain mb-4 filter drop-shadow-[0_4px_12px_rgba(184,137,58,0.3)]"
          />
          {/* Subtle gold loader line/text */}
          <div className="text-[10px] uppercase tracking-[0.3em] text-[#D4AF7F] font-semibold animate-pulse mt-2">
            Loading Luxury
          </div>
        </div>
      </div>
    );
  }

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