import { createFileRoute, Link } from "@tanstack/react-router";
import { Phone, MapPin, Mail, Clock } from "lucide-react";
import { waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Us — K&K2 Beauty Salon Chennai" },
      { name: "description", content: "Get in touch with K&K2 Beauty Salon — call, WhatsApp or visit any of our 3 Chennai boutique salons." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Get In Touch"
        title="We'd love to hear from you"
        description="Have a question or ready to indulge in a luxury beauty experience? Reach us on WhatsApp for instant booking, or visit one of our boutique salons."
        image="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">

      <div className="grid md:grid-cols-2 gap-6">
        {[
          { icon: Phone, title: "Call Us", value: `+91 ${WHATSAPP_NUMBER}`, href: `tel:+91${WHATSAPP_NUMBER}` },
          { icon: Mail, title: "WhatsApp", value: "Chat with us instantly", href: waLink("I want to book a service") },
          { icon: MapPin, title: "Visit Us", value: "Besant Nagar · Adyar · Nungambakkam", href: "/locations" },
          { icon: Clock, title: "Hours", value: "Mon - Sat: 10:00 AM - 8:00 PM · Sunday: 11:00 AM - 7:00 PM" },
        ].map((c) => (
          <div key={c.title} className="luxe-card p-7 flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground shrink-0">
              <c.icon className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-lg">{c.title}</h3>
              {c.href ? (
                c.href.startsWith("/") ? (
                  <Link to="/locations" className="text-primary hover:text-primary-hover">{c.value}</Link>
                ) : (
                  <a href={c.href} target="_blank" rel="noreferrer" className="text-primary hover:text-primary-hover">{c.value}</a>
                )
              ) : (
                <p className="text-muted-foreground">{c.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href={waLink("I want to book a service")} target="_blank" rel="noreferrer" className="btn-whatsapp">
          Book Now on WhatsApp
        </a>
      </div>
    </section>
    </>
  );
}