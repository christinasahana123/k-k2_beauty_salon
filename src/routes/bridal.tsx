import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Crown, Heart, Star } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import bridalHero from "@/assets/bridal-hero.jpg";
import mobile_banner from "@/assets/mobile_banner.jpg";
import b1 from "@/assets/bridal-1.jpg";
import b2 from "@/assets/bridal-2.jpg";
import b3 from "@/assets/bridal-3.jpg";
import b15 from "@/assets/bridal-15.jpeg";

export const Route = createFileRoute("/bridal")({
  head: () => ({
    meta: [
      { title: "Bridal Studio — K&K2 Beauty Salon | Bridal Makeup Chennai" },
      { name: "description", content: "Signature bridal makeovers, pre-wedding rituals and trousseau styling at K&K2 Beauty Salon Chennai." },
      { property: "og:image", content: bridalHero },
    ],
  }),
  component: BridalPage,
});

const packages = [
  { name: "Signature Bridal", price: "₹15,000+", icon: Crown, perks: ["Outdoor HD Makeup", "Hair Styling", "Saree/Lehenga Draping", "Trial Session"] },
  { name: "Classic Bridal", price: "₹10,000+", icon: Sparkles, perks: ["Indoor Makeup", "Hair Do", "Indoor Draping", "Touch-up Kit"] },
  { name: "Pre-Wedding Glow", price: "On request", icon: Heart, perks: ["6-week Skin Plan", "Hair Spa Rituals", "Mani-Pedi Care", "Body Polishing"] },
];

const testimonials = [
  { name: "Sneha", text: "K&K2 made my wedding day flawless. From skincare prep to the final look — every detail was perfect." },
  { name: "Ananya", text: "Professional, calm and incredibly talented. I felt like royalty on my big day." },
  { name: "Rhea", text: "Their pre-wedding plan transformed my skin. The bridal trial session was magical." },
];

function BridalPage() {
  return (
    <>
      {/* ── HERO BANNER – mobile-fixed ── */}
      <section className="relative overflow-hidden">
        {/*
          picture element: on mobile we use bridal-hero1 (portrait crop),
          on md+ we use the original wide bridal-hero.
          Both are sized to 55vh on mobile and 80vh on desktop.
        */}
        <picture>
          {/* Mobile: portrait-optimized image */}
          <source media="(max-width: 767px)" srcSet={mobile_banner} />
          {/* Desktop: full bridal-hero.jpg shown in its entirety */}
          <img
            src={bridalHero}
            alt="K2 Bridal Studio"
            className="w-full h-auto block"
          />
        </picture>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/40 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-xl text-background animate-fade-up">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/20 backdrop-blur border border-white/30 text-[10px] tracking-[0.2em] uppercase font-semibold mb-3">
                <Sparkles className="w-3 h-3 text-accent" /> K&K2 Bridal Studio
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
                For the bride who<br className="sm:hidden" /> deserves <span className="text-accent">forever</span>
              </h1>
              <p className="mt-4 text-sm sm:text-base md:text-lg text-background/90">
                From the first trial to the final touch-up — we'll be by your side for every moment of your beautiful day.
              </p>
              <a
                href={waLink("I want to book a bridal consultation")}
                target="_blank"
                rel="noreferrer"
                className="btn-rose mt-6 inline-flex"
              >
                Book Bridal Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Bridal Packages</div>
          <h2 className="text-3xl md:text-5xl font-bold">Choose your bridal ritual</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {packages.map((p) => (
            <div key={p.name} className="luxe-card p-8 flex flex-col">
              <p.icon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <div className="text-primary font-bold text-xl mt-1 mb-5">{p.price}</div>
              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                {p.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-2">
                    <Sparkles className="w-4 h-4 text-accent mt-0.5 shrink-0" /> {perk}
                  </li>
                ))}
              </ul>
              <a href={waLink(`I want to book ${p.name}`)} target="_blank" rel="noreferrer" className="btn-rose mt-6">
                Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-gradient-soft py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Makeup Gallery</div>
            <h2 className="text-3xl md:text-5xl font-bold">Brides we've made glow</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[b1, b2, b3].map((src, i) => (
              <img key={i} src={src} alt={`Bridal ${i + 1}`} loading="lazy" className="rounded-[1.5rem] shadow-elegant w-full h-[460px] object-cover hover:scale-[1.02] transition-transform duration-500" />
            ))}
          </div>
        </div>
      </section>

      {/* Pre-wedding — image now points to bridal-15 */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Pre-Wedding Rituals</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Glow that starts weeks before "I do"</h2>
          <p className="text-muted-foreground mb-6">Our 6-week pre-wedding program combines facials, hair spa, body polishing and nail care to bring out your most radiant self on the big day.</p>
          <ul className="space-y-3 text-foreground">
            {["Customized skin diagnosis", "Weekly facial & spa rituals", "Nail & hand care sessions", "Bridal hair trial included"].map((p) => (
              <li key={p} className="flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary" /> {p}</li>
            ))}
          </ul>
          <a href={waLink("I want to book Pre-Wedding ritual")} target="_blank" rel="noreferrer" className="btn-rose mt-7">Start Pre-Wedding Plan</a>
        </div>
        <img src={b15} alt="Pre wedding glow" loading="lazy" className="rounded-[2rem] shadow-elegant w-full h-[520px] object-cover" />
      </section>

      {/* Testimonials */}
      <section className="bg-gradient-soft py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Bridal Love</div>
            <h2 className="text-3xl md:text-5xl font-bold">Words from our brides</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="luxe-card p-7">
                <div className="flex gap-0.5 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                </div>
                <p className="text-muted-foreground italic">"{t.text}"</p>
                <div className="mt-4 font-semibold text-foreground">— {t.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}