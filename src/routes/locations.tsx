import { createFileRoute } from "@tanstack/react-router";
import { MapPin, Phone, Navigation, Clock, Sparkles } from "lucide-react";
import { waLink, WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { PageHeroBanner } from "@/components/PageHeroBanner";

export const Route = createFileRoute("/locations")({
  head: () => ({
    meta: [
      { title: "Salon Locations — K2 Beauty Salon Chennai" },
      { name: "description", content: "Visit K2 Beauty Salon at Besant Nagar, Adyar or Nungambakkam in Chennai." },
    ],
  }),
  component: LocationsPage,
});

const locations = [
  {
    name: "Besant Nagar",
    placeId: "ChIJf78qo4pnUjoRI2qw-o2GEF8",
    address: "K&K2 Beauty Salon, 1st Floor, No 61, B/5, MG Rd, opposite to bus stop, Vannandhurai, Besant Nagar, Chennai – 600090",
    map: "https://maps.google.com/maps?q=K%26K2%20Beauty%20Salon%20Besant%20Nagar&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    hours: [
      "Mon - Sat: 10:00 AM - 8:00 PM",
      "Sunday: 11:00 AM - 7:00 PM"
    ],
    tags: ["Bridal Suite", "Hair & Skin Specialists", "Air Conditioned"]
  },
  {
    name: "Adyar",
    placeId: "ChIJzYV6zcJnUjoRXaImcAn3JGU",
    address: "K&K2 Beauty Salon, Arcade, 21, Basement, Nathans, Malavia Ave, Adyar, Chennai, Tamil Nadu – 600041",
    map: "https://maps.google.com/maps?q=K%26K2%20Beauty%20Salon%20Adyar&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    hours: [
      "Mon - Sat: 10:00 AM - 8:00 PM",
      "Sunday: 11:00 AM - 7:00 PM"
    ],
    tags: ["Aroma Body Rituals", "Luxury Facials", "Unisex Section Available"]
  },
  {
    name: "Nungambakkam",
    placeId: "ChIJFdvrnmhmUjoRDYxt-1IG7Jk",
    address: "K&K2 Beauty Salon, New #23, Old #26, Noor Veerasamy Ln, behind Police Station Perumal Kovil, opposite Mangadu Samy Street, Ponnangipuram, Nungambakkam, Chennai, Tamil Nadu – 600034",
    map: "https://maps.google.com/maps?q=K%26K2%20Beauty%20Salon%20Nungambakkam&t=&z=14&ie=UTF8&iwloc=B&output=embed",
    hours: [
      "Mon - Sat: 10:00 AM - 8:00 PM",
      "Sunday: 11:00 AM - 7:00 PM"
    ],
    tags: ["Expert Stylists", "Advanced Skincare", "Comfort Lounge"]
  },
];

function LocationsPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Our Branches"
        title="Visit Our Boutique Salons"
        description="Three premium addresses across Chennai — each crafted with a luxurious aesthetic and dedicated to giving you an indulgent beauty experience."
        image="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
      />

      <section className="bg-gradient-soft py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc) => (
            <div key={loc.name} className="luxe-card overflow-hidden bg-white flex flex-col hover:shadow-elegant border border-border/60 rounded-3xl transition-all duration-300">
              <div className="relative w-full h-64 overflow-hidden bg-muted">
                <iframe
                  src={loc.map}
                  title={`${loc.name} map`}
                  className="absolute inset-0 w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                {/* Branch Header */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex items-center gap-2 text-primary">
                    <MapPin className="w-5 h-5 text-[#B8893A]" />
                    <h3 className="text-xl md:text-2xl font-bold font-display text-[#3B2A28]">{loc.name}</h3>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#B8893A] bg-[#FFF8F2] px-2.5 py-1 rounded-full border border-[#E8D8C3]/30">
                    <Sparkles className="w-3 h-3" /> Salon
                  </span>
                </div>

                {/* Address */}
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {loc.address}
                </p>

                {/* Operational Details */}
                <div className="flex flex-col gap-1.5 text-xs text-[#7A5A55] mb-4 pb-4 border-b border-border/40">
                  {loc.hours.map((hourLine, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#B8893A]/80 shrink-0" />
                      <span>{hourLine}</span>
                    </div>
                  ))}
                </div>

                {/* Badges/Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {loc.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] md:text-xs text-[#7A5A55]/90 font-medium bg-[#FFF8F2] border border-[#E8D8C3]/40 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-2 mt-auto">
                  <a 
                    href={`tel:+91${WHATSAPP_NUMBER}`} 
                    className="flex items-center justify-center gap-1.5 border border-[#B8893A] text-[#B8893A] hover:bg-[#B8893A] hover:text-white rounded-lg py-2.5 text-xs font-semibold tracking-wide transition-all duration-300"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Branch
                  </a>
                  <a 
                    href={waLink(`I want to visit your ${loc.name} salon`)} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="flex items-center justify-center gap-1.5 bg-[#B8893A] hover:bg-[#8A6428] text-white rounded-lg py-2.5 text-xs font-semibold tracking-wide transition-all duration-300 shadow-sm"
                  >
                    Book Appointment
                  </a>
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("K&K2 Beauty Salon " + loc.name + " Chennai")}&query_place_id=${loc.placeId}`} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="col-span-2 flex items-center justify-center gap-1.5 border border-border hover:bg-muted text-muted-foreground rounded-lg py-2 text-xs font-medium transition-all duration-300"
                  >
                    <Navigation className="w-3.5 h-3.5" /> Get Directions via Maps
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}