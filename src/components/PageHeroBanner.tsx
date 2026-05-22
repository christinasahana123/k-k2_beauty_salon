import { Sparkles } from "lucide-react";

export function PageHeroBanner({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with subtle scale-on-load animation */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-center scale-105 animate-[pulse-slow_8s_ease-in-out_infinite]"
        style={{
          animation: "fade-in-scale 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        }}
      />
      {/* Dark luxury gradient overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(30, 15, 10, 0.75) 0%, rgba(20, 10, 8, 0.85) 60%, rgba(30, 15, 10, 0.9) 100%)",
        }}
      />
      
      {/* Visual top border blend */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10" />

      {/* Content Container */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="inline-flex items-center gap-2 mb-4 animate-fade-up">
          <span className="block w-6 h-px bg-[#B8893A]" />
          <span className="text-xs tracking-[0.3em] uppercase font-semibold text-[#D4AF7F] flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> {eyebrow}
          </span>
          <span className="block w-6 h-px bg-[#B8893A]" />
        </div>
        
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-white mb-5 animate-fade-up tracking-wide"
          style={{ animationDelay: "150ms" }}
        >
          {title}
        </h1>
        
        <p 
          className="text-sm md:text-base text-white/80 leading-relaxed max-w-xl mx-auto font-body font-light animate-fade-up tracking-wider"
          style={{ animationDelay: "300ms" }}
        >
          {description}
        </p>
      </div>

      {/* Elegant bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none" 
        style={{ background: "linear-gradient(to top, var(--background) 0%, transparent 100%)" }}
      />
    </section>
  );
}
