import { waLink } from "@/lib/whatsapp";

export interface PriceItem {
  name: string;
  price: string;
  note?: string;
}

export function PriceList({ title, items }: { title: string; items: PriceItem[] }) {
  return (
    <div className="luxe-card p-6 md:p-8">
      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-6 pb-4 border-b border-border">
        {title}
      </h3>
      <ul className="space-y-4">
        {items.map((it) => (
          <li key={it.name} className="flex items-start justify-between gap-4 group">
            <div>
              <div className="font-medium text-foreground">{it.name}</div>
              {it.note && <div className="text-xs text-muted-foreground mt-0.5">{it.note}</div>}
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <span className="font-semibold text-primary whitespace-nowrap">{it.price}</span>
              <a
                href={waLink(`I want to book ${it.name}`)}
                target="_blank"
                rel="noreferrer"
                className="opacity-0 group-hover:opacity-100 transition-opacity text-xs px-3 py-1.5 rounded-full bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground"
              >
                Book
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}