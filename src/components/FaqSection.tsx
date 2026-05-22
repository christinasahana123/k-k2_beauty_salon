import { useState } from "react";
import { ChevronDown, MessageCircle, HelpCircle } from "lucide-react";
import { waLink } from "@/lib/whatsapp";

interface FaqItem {
  q: string;
  a: string;
}

const faqData: FaqItem[] = [
  {
    q: "Do I need to book an appointment, or can I walk in?",
    a: "We highly recommend booking an appointment in advance, especially during weekends and bridal seasons, to ensure you receive prompt attention without waiting. However, we do accept walk-ins based on our stylists' real-time availability.",
  },
  {
    q: "What premium brands and products do you use for hair and skin?",
    a: "We are committed to uncompromised quality. We exclusively partner with leading international premium brands such as L'Oreal Professionnel, Wella Koleston Perfect, and specialized biological organic actives for our skin-rejuvenating facials.",
  },
  {
    q: "Can I customize a bridal or pre-wedding treatment package?",
    a: "Absolutely! Every bride is unique. Our expert consultants offer specialized bridal trials and diagnostics to design a bespoke 6-week skin and hair glow program matching your wedding outfits and aesthetic preferences.",
  },
  {
    q: "Where are your salons located in Chennai, and what are the hours?",
    a: "We have three easily accessible boutique branches across Chennai: Besant Nagar, Adyar, and Nungambakkam. All locations operate Mon - Sat: 10:00 AM - 8:00 PM and Sundays: 11:00 AM - 7:00 PM.",
  },
  {
    q: "What is your cancellation or rescheduling policy?",
    a: "We understand that plans can change. We kindly request at least 2 to 4 hours of advance notice for cancellations or rescheduling. This allows us to offer the slot to other guests on our waiting list.",
  },
  {
    q: "Do you offer specialized member pricing or loyalty discounts?",
    a: "Yes! We run a highly rewarding boutique loyalty card program offering flat discounts (e.g. 15% off first visit, up to flat 30% off on your 4th visit, and custom surprise gifts). Members enjoy premium pricing on all services.",
  },
];

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden border-t border-border/40">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Headline */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-center text-center lg:text-left animate-fade-up">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 text-xs tracking-[0.25em] uppercase text-accent font-semibold">
              <HelpCircle className="w-4 h-4 text-[#B8893A]" /> Care &amp; Support
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-[#3B2A28] leading-tight">
              Frequently Asked <br className="hidden lg:block" />
              Questions
            </h2>
            
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body font-light max-w-md mx-auto lg:mx-0">
              Find instant answers regarding bookings, products, locations, and safety guidelines. If you have any additional queries, reach out directly.
            </p>

            <div className="pt-4 flex justify-center lg:justify-start">
              <a
                href={waLink("I have a quick question about your services")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#FFF8F2] hover:bg-secondary text-[#B8893A] hover:text-[#8A6428] px-6 py-3 rounded-full border border-[#E8D8C3] hover:border-[#B8893A] text-xs font-semibold uppercase tracking-wider transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" /> Ask on WhatsApp
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Accordion */}
          <div className="lg:col-span-7 space-y-4 animate-fade-up">
            {faqData.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className="overflow-hidden border border-border/80 rounded-2xl bg-card hover:bg-muted/5 transition-colors duration-300"
                >
                  {/* Trigger Header */}
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between text-left p-6 gap-4 font-semibold text-[#3B2A28] hover:text-[#B8893A] transition-colors focus:outline-none"
                  >
                    <span className="text-base font-body font-medium tracking-wide">
                      {item.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#B8893A] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Body Content Container */}
                  <div
                    className={`transition-all duration-300 ease-in-out overflow-hidden ${
                      isOpen ? "max-h-[250px] opacity-100 border-t border-border/40" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="p-6 text-sm text-[#7A5A55] leading-relaxed font-body font-light">
                      {item.a}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
