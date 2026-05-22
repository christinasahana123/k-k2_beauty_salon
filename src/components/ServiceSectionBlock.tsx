import { waLink } from "@/lib/whatsapp";
import { Sparkles, CalendarCheck } from "lucide-react";

export function ServiceSectionBlock({
  title,
  description,
  image,
  items,
  priceNote,
  bgColor = "bg-[#4C1D5C]",
  bookMessage,
  imageRight = false,
}: {
  title: string;
  description: string;
  image: string;
  items: string[];
  priceNote?: string;
  bgColor?: string;
  bookMessage: string;
  imageRight?: boolean;
}) {
  return (
    <div 
      className={`w-full overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] shadow-elegant text-white border border-white/10 transition-transform duration-500 hover:scale-[1.005] ${bgColor}`}
    >
      <div 
        className={`flex flex-col ${
          imageRight ? "lg:flex-row-reverse" : "lg:flex-row"
        } items-stretch min-h-[460px]`}
      >
        {/* Model Image Column */}
        <div className="lg:w-[42%] relative overflow-hidden min-h-[300px] lg:min-h-auto flex items-center justify-center">
          {/* Subtle overlay inside image for smooth blend */}
          <div className="absolute inset-0 bg-black/10 z-10" />
          <img 
            src={image} 
            alt={title} 
            loading="lazy" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* Details Column */}
        <div className="lg:w-[58%] p-8 sm:p-12 lg:p-16 flex flex-col justify-between gap-8">
          {/* Header & Description */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-1.5 text-[10px] tracking-[0.25em] uppercase font-bold text-white/70">
              <Sparkles className="w-3.5 h-3.5" /> Signature Selection
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium text-white leading-tight">
              {title}
            </h2>
            
            <p className="text-sm sm:text-base text-white/90 leading-relaxed font-light font-body max-w-xl">
              {description}
            </p>
          </div>

          {/* Interactive Service Badge Pills */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-white/60">Services Menu</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <a
                  key={item}
                  href={waLink(`I want to book ${item} in ${title}`)}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-xs px-4 py-2 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#2D1A3B] border border-white/15 hover:border-white transition-all duration-300 font-medium tracking-wide shadow-sm"
                  style={{
                    fontFamily: "var(--font-body)"
                  }}
                >
                  <span>{item}</span>
                  <span className="opacity-50 text-[10px]">→</span>
                </a>
              ))}
            </div>
          </div>

          {/* Pricing Highlight & Booking Action */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-6 border-t border-white/10 mt-2">
            {priceNote && (
              <div className="text-sm text-white/90 italic font-body tracking-wider max-w-xs leading-relaxed">
                {priceNote}
              </div>
            )}
            
            <a
              href={waLink(bookMessage)}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white hover:bg-white text-white hover:text-black font-semibold text-xs tracking-widest uppercase transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              <CalendarCheck className="w-4 h-4" /> Book Now!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
