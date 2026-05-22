import { Link } from "@tanstack/react-router";
import { Phone, MapPin, Instagram, Facebook } from "lucide-react";
import { waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4 inline-block bg-white rounded-xl p-3">
              <img src={logo} alt="K&K2 Beauty Salon" className="h-14 w-auto object-contain" />
            </div>
            <p className="text-sm text-background/70 leading-relaxed">
              Premium beauty experiences crafted with 27+ years of artistry across 3 boutique salons in Chennai.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/" className="hover:text-accent">Home</Link></li>
              <li><Link to="/about" className="hover:text-accent">About Us</Link></li>
              <li><Link to="/bridal" className="hover:text-accent">Bridal</Link></li>
              <li><Link to="/pricing" className="hover:text-accent">Pricing</Link></li>
              <li><Link to="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Services</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li><Link to="/haircare" className="hover:text-accent">Haircare</Link></li>
              <li><Link to="/skincare" className="hover:text-accent">Skincare</Link></li>
              <li><Link to="/bodycare" className="hover:text-accent">Bodycare</Link></li>
              <li><Link to="/bridal" className="hover:text-accent">Bridal Studio</Link></li>
              <li><Link to="/locations" className="hover:text-accent">Locations</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-accent">Reach Us</h4>
            <ul className="space-y-3 text-sm text-background/80">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <a href={`tel:+91${WHATSAPP_NUMBER}`} className="hover:text-accent">+91 {WHATSAPP_NUMBER}</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 text-accent shrink-0" />
                <span>Besant Nagar · Adyar · Nungambakkam</span>
              </li>
              <li className="flex gap-3 pt-2">
                <a href="https://www.instagram.com/k2beauty_salon_/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-foreground transition-colors" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
                <a href="https://www.facebook.com/beauty.salon.k2/" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-background/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:text-foreground transition-colors" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              </li>
              <li>
                <a href={waLink("I want to book a service")} target="_blank" rel="noreferrer" className="btn-whatsapp text-sm mt-2">
                  Book on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} K&K2 Beauty Salon. All rights reserved.</p>
          <p>Crafted with love in Chennai</p>
        </div>
      </div>
    </footer>
  );
}