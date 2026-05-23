import { createFileRoute } from "@tanstack/react-router";
import { Award, Users, Heart, Sparkles, Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";
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
        description="Chennai's leading beauty sanctuary, combining 27+ years of industry artistry across three boutique locations designed for ultimate care."
        image={interior}
      />

      {/* ── OWNER SECTION ── */}
      <section className="bg-gradient-soft py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Owner Photo */}
            <div className="relative flex justify-center md:justify-start">
              <div className="absolute -inset-4 bg-gradient-rose opacity-20 rounded-[2rem] blur-2xl pointer-events-none" />
              <img
                src={owner}
                alt="K&K2 Salon Owner"
                className="relative rounded-[2rem] shadow-elegant w-full max-w-sm md:max-w-full h-auto block"
              />
            </div>

            {/* Owner Bio */}
            <div className="flex flex-col justify-center space-y-6">
              <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold">Meet the Founder</div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground">
                A Passion for Beauty,<br />
                <span className="text-[#B8893A]">Built Over 27 Years</span>
              </h1>

              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                "I started K&K2 with one simple belief — every woman deserves to feel truly beautiful, confident and pampered. Over the years, beauty has been more than just a profession for me; it's been my calling."
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                "From our very first salon to our three boutique locations today, each client who walks through our doors is treated like family. We don't just transform looks — we transform how you feel about yourself. That's the K&K2 promise."
              </p>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                "Every service we offer reflects our commitment to quality — from the premium international products we choose to the skilled, experienced team we've built. I am proud of what we've created together."
              </p>

              <div className="pt-2">
                <div className="font-bold text-lg text-foreground">— Founder & Director</div>
                <div className="text-sm text-muted-foreground mt-0.5">K&K2 Beauty Salon, Chennai</div>
              </div>

              <a
                href={waLink("I'd love to know more about K&K2 Beauty Salon")}
                target="_blank"
                rel="noreferrer"
                className="btn-rose self-start mt-2"
              >
                Chat With Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Milestones</div>
          <h2 className="text-3xl md:text-5xl font-bold">A journey of craft &amp; care</h2>
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

      {/* ── CONNECT WITH US ── */}
      <section className="bg-gradient-soft py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">Stay Connected</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Find Us &amp; Follow Along</h2>
          <p className="text-muted-foreground text-base md:text-lg mb-12 max-w-xl mx-auto">
            Stay updated with our latest looks, offers and beauty tips — follow us on social media or reach out directly.
          </p>

          {/* Social Links */}
          <div className="flex flex-col sm:flex-row justify-center gap-5 mb-14">
            <a
              href="https://www.instagram.com/k2beauty_salon_/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{
                background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                color: "#fff"
              }}
              id="instagram-link"
            >
              <Instagram className="w-5 h-5" />
              Follow on Instagram
            </a>
            <a
              href="https://www.facebook.com/beauty.salon.k2/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-sm tracking-wide transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              style={{ background: "#1877F2", color: "#fff" }}
              id="facebook-link"
            >
              <Facebook className="w-5 h-5" />
              Like on Facebook
            </a>
          </div>

          {/* Contact Details */}
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Our Locations",
                lines: ["Besant Nagar", "Adyar", "Nungambakkam"],
              },
              {
                icon: Phone,
                title: "Call / WhatsApp",
                lines: ["+91 98765 43210"],
                href: waLink("Hello! I'd like to book a service at K&K2 Beauty Salon"),
              },
              {
                icon: Mail,
                title: "Email Us",
                lines: ["kk2beautysalon@gmail.com"],
                href: "mailto:kk2beautysalon@gmail.com",
              },
            ].map((c) => (
              <div key={c.title} className="luxe-card p-6 text-center flex flex-col items-center gap-3">
                <c.icon className="w-7 h-7 text-primary" />
                <div className="font-bold text-base">{c.title}</div>
                {c.lines.map((line) =>
                  c.href ? (
                    <a
                      key={line}
                      href={c.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {line}
                    </a>
                  ) : (
                    <div key={line} className="text-sm text-muted-foreground">{line}</div>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}