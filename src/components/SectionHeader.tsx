export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 ${center ? "text-center mx-auto max-w-2xl" : ""}`}>
      {eyebrow && (
        <div className="text-xs tracking-[0.3em] uppercase text-accent font-semibold mb-3">{eyebrow}</div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground text-base md:text-lg">{subtitle}</p>}
    </div>
  );
}