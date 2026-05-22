import { waLink } from "@/lib/whatsapp";

export function ServiceGrid({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">{title}</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((item) => (
          <div key={item} className="luxe-card p-5 flex items-center justify-between gap-3">
            <span className="font-medium text-foreground">{item}</span>
            <a
              href={waLink(`I want to book ${item}`)}
              target="_blank"
              rel="noreferrer"
              className="text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-colors whitespace-nowrap"
            >
              Book Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}