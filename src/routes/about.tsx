import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Heart, Sparkles } from "lucide-react";
import { waLink } from "@/lib/whatsapp";
import { PageHeroBanner } from "@/components/PageHeroBanner";
import owner from "@/assets/owner.jpg";
import interior from "@/assets/salon-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — K&K2 Beauty Salon Chennai" },
      { name: "description", content: "K&K2 Beauty Salon — 27+ years of beauty artistry, 3 boutique salons across Chennai, crafted around a customer-first philosophy." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeroBanner
        eyebrow="Our Legacy"
        title="About K&K2 Beauty Salon"
        description="Chennai's leading unisex sanctuary, combining 27+ years of industry artistry across three boutique locations designed for ultimate care."
        image={interior}
      />

      <section className="bg-gradient-soft py-20 md:py-28">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Our Story</div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">A legacy of beauty, built one client at a time</h1>
            <p className="mt-5 text-muted-foreground text-lg">Since 2012, K&K2 Beauty Salon has been Chennai's trusted destination for luxury beauty — built on 27+ years of expertise and a deep love for the craft.</p>
            <a href={waLink("I'd love to know more about K&K2 Beauty Salon")} target="_blank" rel="noreferrer" className="btn-rose mt-7">Chat With Us</a>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-rose opacity-25 rounded-[2rem] blur-2xl" />
            <img src={owner} alt="K2 Salon Owner" className="relative rounded-[2rem] shadow-elegant w-full h-[520px] object-cover" />
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <img src={interior} alt="Salon interior" loading="lazy" className="rounded-[2rem] shadow-soft w-full h-[420px] object-cover" />
        <div className="space-y-6">
          <div>
            <h3 className="text-2xl font-bold mb-2">Our Vision</h3>
            <p className="text-muted-foreground">To be Chennai's most loved luxury salon — where every visit feels personal, indulgent and transformative.</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
            <p className="text-muted-foreground">Deliver premium beauty experiences through master craftsmanship, thoughtful service and the finest international products.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Milestones</div>
          <h2 className="text-3xl md:text-5xl font-bold">A journey of craft & care</h2>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Sparkles, t: "Started in 2012", s: "Founded with passion in Chennai" },
            { icon: Award, t: "27+ Years", s: "Combined industry expertise" },
            { icon: Users, t: "3 Salons", s: "Besant Nagar · Adyar · Nungambakkam" },
            { icon: Heart, t: "Customer-First", s: "Every detail designed for you" },
          ].map((m) => (
            <div key={m.t} className="luxe-card p-7 text-center">
              <m.icon className="w-9 h-9 mx-auto text-primary mb-3" />
              <div className="font-bold text-lg">{m.t}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.s}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}