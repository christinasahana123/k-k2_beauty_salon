import { useState, useEffect } from "react";
import { Navbar } from "./Navbar";
import { Link } from "@tanstack/react-router";
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
      <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white">
        {/* Zoom in/out logo */}
        <div className="flex flex-col items-center">
          <Link to="/">
            <img
              src={logo}
              alt="K&K2 Beauty Salon"
              className="h-20 sm:h-24 w-auto object-contain animate-zoom-pulse"
            />
          </Link>
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