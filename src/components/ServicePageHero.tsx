import { waLink } from "@/lib/whatsapp";
import { Sparkles } from "lucide-react";

export function ServicePageHero({
  eyebrow,
  title,
  description,
  image,
  bookMessage,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  bookMessage: string;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div className="animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-card border border-border text-xs tracking-[0.25em] uppercase text-accent font-semibold mb-5">
            <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h1>
          <p className="mt-5 text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
            {description}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={waLink(bookMessage)} target="_blank" rel="noreferrer" className="btn-rose">
              Book Now on WhatsApp
            </a>
            <a href="/pricing" className="btn-outline-rose">View Pricing</a>
          </div>
        </div>
        <div className="relative animate-fade-up">
          <div className="absolute -inset-4 bg-gradient-rose opacity-20 rounded-[2rem] blur-2xl" />
          <img src={image} alt={title} loading="lazy" className="relative rounded-[2rem] shadow-elegant w-full h-[420px] md:h-[520px] object-cover" />
        </div>
      </div>
    </section>
  );
}