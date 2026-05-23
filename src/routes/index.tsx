import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Sparkles, Gift, Star, Scissors, Sparkle, Hand, Heart, MapPin, Award, Clock, ShieldCheck } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { FaqSection } from "@/components/FaqSection";
import { GallerySection } from "@/components/GallerySection";
import heroBanner from "@/assets/hero-banner.png";

import haircare from "@/assets/haircare-model.jpg";
import skincare from "@/assets/skincare-model.jpg";
import bodycare from "@/assets/bodycare-model.jpg";
import bridal1 from "@/assets/bridal-1.jpg";
import bridal2 from "@/assets/bridal-2.jpg";
import bridal3 from "@/assets/bridal-3.jpg";
import bridal6 from "@/assets/bridal-6.jpeg";
import bridal10 from "@/assets/bridal-10.jpeg";
import bridal11 from "@/assets/bridal-11.jpeg";

export const Route = createFileRoute("/")({
  component: Index,
});

const loyalty = [
  { v: "1st Visit", o: "15% OFF", d: "On your first service" },
  { v: "2nd Visit", o: "20% OFF", d: "On your next visit" },
  { v: "3rd Visit", o: "25% OFF", d: "Indulgent rewards" },
  { v: "4th Visit", o: "Flat 30% OFF", d: "On your bill" },
  { v: "5th Visit", o: "Surprise Gift", d: "A special gift from us" },
];

const tickerItems = [
  "27+ years experience",
  "3 boutique salons",
  "Easily accessible",
  "Uncompromised quality",
  "Experienced service",
  "Premium products",
];

const services = [
  { icon: Scissors, title: "Hair", note: "Cuts, color, spa & treatments crafted by master stylists.", to: "/haircare", img: haircare, msg: "I want to book a hair service" },
  { icon: Sparkle, title: "Skin", note: "Luxury facials, glow-boost rituals & advanced clean-ups.", to: "/skincare", img: skincare, msg: "I want to book a skin service" },
  { icon: Hand, title: "Body", note: "Waxing, mani-pedi, bleach & soothing body rituals.", to: "/bodycare", img: bodycare, msg: "I want to book a body service" },
  { icon: Heart, title: "Pre-Wedding & Bridal", note: "Signature bridal makeovers for your forever moment.", to: "/bridal", img: bridal1, msg: "I want to book a bridal consultation" },
] as const;

const reviews = [
  { name: "Priya R.", rating: 5, text: "Absolutely loved my facial — skin glowing for days! The ambience is so calming and the therapists are pros.", initial: "P" },
  { name: "Aishwarya M.", rating: 5, text: "K2 did my bridal makeup and I have never felt more beautiful. Worth every rupee.", initial: "A" },
  { name: "Divya S.", rating: 5, text: "Best hair spa in Chennai. My hair feels brand new. The staff really listen to what you want.", initial: "D" },
  { name: "Megha K.", rating: 5, text: "Loyalty card is the cherry on top. Premium service at great value across all 3 branches.", initial: "M" },
];



function Index() {
  const [activeCategory, setActiveCategory] = useState<"bridal" | "body" | "skin" | "hair">("body");

  return (
    <>


      {/* HERO BANNER */}
      <section className="relative w-full flex flex-col md:block bg-[#3B2A28] overflow-hidden" style={{ minHeight: "auto", maxHeight: "none" }}>
        {/* Banner Image Container - relative on mobile, absolute on desktop */}
        <div className="relative w-full h-[320px] sm:h-[400px] md:absolute md:inset-0 md:h-full">
          <img
            src={heroBanner}
            alt="K&K2 Beauty Salon – Luxury Hair & Beauty"
            className="w-full h-full object-cover object-center"
          />
          {/* Dark gradient overlay – desktop only */}
          <div className="hidden md:block absolute inset-0" style={{
            background: "linear-gradient(100deg, rgba(20,10,8,0.88) 0%, rgba(30,15,10,0.70) 38%, rgba(30,15,10,0.25) 65%, rgba(0,0,0,0.05) 100%)"
          }} />
          {/* Subtle mobile overlay to blend top/bottom */}
          <div className="md:hidden absolute inset-0 bg-gradient-to-t from-[#3B2A28] via-[#201210]/20 to-transparent" />
        </div>

        {/* Vertical hours strip – right side, desktop only */}
        <div className="hidden lg:flex absolute right-0 top-0 bottom-0 w-12 items-center justify-center"
          style={{ background: "rgba(184,137,58,0.18)", backdropFilter: "blur(4px)", borderLeft: "1px solid rgba(184,137,58,0.3)", zIndex: 10 }}>
          <span className="text-white/80 text-[10px] font-semibold tracking-[0.2em] uppercase"
            style={{ writingMode: "vertical-rl", transform: "rotate(180deg)", letterSpacing: "0.22em" }}>
            MON – SAT: 10:00 AM – 8:00 PM &nbsp;·&nbsp; SUN: 11:00 AM – 7:00 PM
          </span>
        </div>

        {/* Content - stacked below the image on mobile, positioned absolute overlay on desktop */}
        <div className="relative z-10 w-full flex items-center bg-[#3B2A28] md:bg-transparent py-12 md:py-28 lg:py-32 md:min-h-[580px] lg:min-h-[640px]">
          <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
            <div className="max-w-xl animate-fade-up">

              {/* Eyebrow label */}
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="block w-8 h-px" style={{ background: "#B8893A" }} />
                <span className="text-xs tracking-[0.35em] uppercase font-semibold" style={{ color: "#D4AF7F" }}>
                  27+ Years of Excellence
                </span>
              </div>

              {/* Main heading */}
              <h1 className="font-display font-normal leading-[1.08] mb-5"
                style={{
                  fontSize: "clamp(2.6rem, 6vw, 5rem)",
                  color: "#FFFFFF",
                  letterSpacing: "-0.01em",
                  textShadow: "0 2px 24px rgba(0,0,0,0.4)"
                }}>
                Beauty &amp; <br className="hidden sm:block" />
                <span style={{ color: "#D4AF7F" }}>Hair Salon</span>
              </h1>

              {/* Subtitle */}
              <p className="text-sm sm:text-base md:text-lg mb-8 max-w-sm"
                style={{
                  color: "rgba(255,255,255,0.75)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  fontFamily: "var(--font-body)",
                  fontWeight: 400
                }}>
                Change your look with our talented stylists
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 items-center">
                <a
                  href={waLink("I want to book a service")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300"
                  style={{
                    background: "#B8893A",
                    color: "#fff",
                    border: "none",
                    letterSpacing: "0.12em"
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#8A6428")}
                  onMouseLeave={e => (e.currentTarget.style.background = "#B8893A")}
                >
                  → &nbsp; Book a Service
                </a>
                <Link
                  to="/pricing"
                  className="inline-flex items-center gap-2 px-7 py-3 text-sm font-semibold tracking-[0.12em] uppercase transition-all duration-300"
                  style={{
                    background: "transparent",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.45)",
                    letterSpacing: "0.12em"
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#B8893A"; (e.currentTarget as HTMLElement).style.color = "#D4AF7F"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.45)"; (e.currentTarget as HTMLElement).style.color = "#fff"; }}
                >
                  Our Pricing
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap gap-8">
                {[
                  { value: "27+", label: "Years Experience" },
                  { value: "3", label: "Boutique Salons" },
                  { value: "2000+", label: "Happy Clients" },
                ].map(s => (
                  <div key={s.label}>
                    <div className="font-display text-2xl font-semibold" style={{ color: "#D4AF7F" }}>{s.value}</div>
                    <div className="text-xs tracking-widest uppercase mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom gradient fade into next section – desktop only */}
        <div className="hidden md:block absolute bottom-0 left-0 right-0 h-20 pointer-events-none"
          style={{ background: "linear-gradient(to top, #3B2A28 0%, transparent 100%)" }} />
      </section>

      {/* HIGHLIGHT STRIP / WHY CHOOSE US */}
      <section className="relative w-full bg-[#3B2A28] pt-12 md:pt-20 overflow-hidden">
        <div className="relative bg-white rounded-t-[3.5rem] md:rounded-t-[6rem] px-6 sm:px-12 lg:px-20 py-16 md:py-24 border-t border-border/30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Left Column - Uncompromised Quality */}
            <div className="flex flex-col justify-center animate-fade-up">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#B8893A] font-medium text-center tracking-normal mb-8">
                Uncompromised Quality
              </h2>
              <div className="relative h-32 overflow-hidden w-full max-w-sm mx-auto mb-8">
                {/* Fade overlays for premium transition effect */}
                <div className="absolute top-0 inset-x-0 h-8 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none" />
                <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
                
                <div className="flex flex-col gap-5 py-2 animate-scroll-up">
                  {[
                    "Experienced Service",
                    "Easily Accessible",
                    "27+ Years Experience",
                    "Premium Products",
                    "Experienced Service",
                    "Easily Accessible",
                    "27+ Years Experience",
                    "Premium Products"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-center gap-2.5 text-base md:text-lg text-[#7A5A55]/85 font-medium tracking-wide h-6 shrink-0">
                      <Sparkles className="w-4 h-4 text-[#B8893A]/80" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center">
                <a
                  href={waLink("I want to book a service")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-[#B8893A] hover:bg-[#8A6428] text-white px-8 py-3.5 rounded-lg text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  Book A Service Today
                </a>
              </div>
            </div>

            {/* Right Column - Why Choose Us */}
            <div className="flex flex-col justify-center animate-fade-up [animation-delay:200ms]">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-[#3B2A28] font-medium text-center tracking-normal mb-8">
                Why Choose US?
              </h2>
              <p className="text-[#7A5A55] text-center leading-relaxed text-sm sm:text-base md:text-lg max-w-md mx-auto font-normal">
                With 27+ years of experience, K&K2 Beauty Salon offers the benefit of over two decades of expertise in the beauty industry. Our personalized services are tailored to meet your unique needs and preferences, ensuring that you receive the care and attention you deserve. We are committed to uncompromised quality, using only the highest quality premium products to provide exceptional care.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="relative w-full bg-[#3B2A28] py-20 md:py-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
          <div className="grid lg:grid-cols-12 gap-12 md:gap-16 items-center">
            
            {/* Left Column: Dynamic Elegant Model Image */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="absolute -inset-4 bg-[#B8893A]/10 rounded-[2.5rem] blur-2xl pointer-events-none" />
              <div className="relative w-full max-w-[340px] md:max-w-[400px] aspect-[4/5] overflow-hidden rounded-[2rem] border border-[#B8893A]/30 shadow-elegant bg-[#3B2A28]">
                {/* We map the images and render them absolutely, setting opacity based on activeCategory for a smooth fade transition */}
                {[
                  { id: "bridal", img: bridal1, alt: "Pre-wedding & Bridal" },
                  { id: "body", img: bodycare, alt: "Body rituals" },
                  { id: "skin", img: skincare, alt: "Skin treatments" },
                  { id: "hair", img: haircare, alt: "Hair styling" }
                ].map((item) => (
                  <img
                    key={item.id}
                    src={item.img}
                    alt={item.alt}
                    loading="lazy"
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                      activeCategory === item.id ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Right Column: Title, Category Selector, Description, Book Button */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-end text-center lg:text-right">
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-white font-medium tracking-normal mb-8">
                Our Services
              </h2>

              {/* Category selector */}
              <div className="flex flex-wrap justify-center lg:justify-end gap-x-6 gap-y-4 mb-8 border-b border-white/10 pb-6 w-full">
                {[
                  { id: "bridal", label: "Pre - wedding & Bridal" },
                  { id: "body", label: "Body" },
                  { id: "skin", label: "Skin" },
                  { id: "hair", label: "Hair" }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveCategory(tab.id as any)}
                    className={`font-body text-base md:text-lg font-medium transition-all duration-300 relative py-1 focus:outline-none ${
                      activeCategory === tab.id
                        ? "text-[#B8893A] font-semibold"
                        : "text-white/60 hover:text-white"
                    }`}
                  >
                    {tab.label}
                    {activeCategory === tab.id && (
                      <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#B8893A] animate-fade-in" />
                    )}
                  </button>
                ))}
              </div>

              {/* Dynamic Description & Details */}
              <div className="min-h-[140px] md:min-h-[120px] flex flex-col justify-start items-center lg:items-end w-full mb-8">
                {activeCategory === "bridal" && (
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl animate-fade-up">
                    K&K2 Beauty Salon offers exquisite, customized pre-wedding packages and signature bridal makeovers. Crafted with premium products, our tailored services ensure a timeless, radiant, and photogenic look for your most special day.
                  </p>
                )}
                {activeCategory === "body" && (
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl animate-fade-up">
                    Indulge in our range of luxury women's body treatments including calming massages, gentle exfoliating scrubs, soothing detan packs, and complete body pampering rituals designed for total physical and mental rejuvenation.
                  </p>
                )}
                {activeCategory === "skin" && (
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl animate-fade-up">
                    Restore your natural luminosity with our customized skin treatments. From deep-cleansing organic facials to specialized gold glows, we nurture and revitalize your skin barrier to achieve long-lasting radiance.
                  </p>
                )}
                {activeCategory === "hair" && (
                  <p className="text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl animate-fade-up">
                    Transform your hair with our premier cut, coloring, styling, and restorative spa treatments. Our skilled master stylists personalize every session to boost hair strength, shine, and style suited perfectly to you.
                  </p>
                )}
              </div>

              {/* Small Book Now button with the color of the logo */}
              <div className="animate-fade-up">
                <a
                  href={waLink(
                    activeCategory === "bridal" ? "I want to book a Pre-wedding & Bridal consultation" :
                    activeCategory === "body" ? "I want to book a Body treatment" :
                    activeCategory === "skin" ? "I want to book a Skin treatment" :
                    "I want to book a Hair service"
                  )}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center bg-[#B8893A] hover:bg-[#8A6428] text-white px-6 py-2.5 rounded text-xs md:text-sm font-semibold tracking-wider transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Book Now
                </a>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* BRIDAL WORKS */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center mx-auto max-w-2xl">
            <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Bridal Works</div>
            <h2 className="text-3xl md:text-5xl font-bold">Brides we've made unforgettable</h2>
            <p className="mt-4 text-muted-foreground">Signature bridal looks crafted with timeless grace and modern glamour.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: bridal6, label: "South Indian Elegance" },
              { img: bridal10, label: "Hair Styling & Draping" },
              { img: bridal11, label: "Classic Red Veil Look" },
            ].map((b, i) => (
              <div key={i} className="relative group overflow-hidden rounded-[1.5rem] luxe-card">
                <img src={b.img} alt={`Bridal work ${i + 1}`} loading="lazy" className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-foreground/85 to-transparent p-5">
                  <div className="text-primary-foreground font-semibold">{b.label}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/bridal" className="btn-outline-rose">View Bridal Studio</Link>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="mb-14 text-center mx-auto max-w-2xl">
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Loved by clients</div>
          <h2 className="text-3xl md:text-5xl font-bold">Customer valued feedback</h2>
          <p className="mt-4 text-muted-foreground">Real reviews from our cherished clients across Chennai.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {reviews.map((r) => (
            <div key={r.name} className="luxe-card p-6 flex flex-col">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-rose text-white flex items-center justify-center font-bold">{r.initial}</div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{r.name}</div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-accent text-accent" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{r.text}"</p>
              <div className="mt-4 flex items-center gap-1.5 text-[11px] text-muted-foreground">
                <span className="font-semibold text-primary">G</span> Posted on Google
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <GallerySection />

      {/* FAQ ACCORDION SECTION */}
      <FaqSection />
    </>
  );
}
