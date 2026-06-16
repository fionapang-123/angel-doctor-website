import Link from "next/link";
import { ArrowRight, MapPin, Stethoscope } from "lucide-react";
import type { CardItem } from "@/types/page";

function cardIcon(title: string) {
  const t = title.toLowerCase();
  if (t.includes("city") || t.includes("shenzhen") || t.includes("guangzhou") || t.includes("shanghai"))
    return <MapPin aria-hidden="true" className="size-4" />;
  return <Stethoscope aria-hidden="true" className="size-4" />;
}

function CardShell({ item }: { item: CardItem }) {
  return (
    <div className="group flex h-full flex-col rounded-2xl border border-line bg-surface p-6 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/15 hover:shadow-card">
      <div className="mb-4 flex size-11 items-center justify-center rounded-xl bg-blush text-primary">
        {cardIcon(item.title)}
      </div>
      <h3 className="text-base font-semibold tracking-tight text-foreground group-hover:text-primary transition-colors">
        {item.title}
      </h3>
      <p className="mt-2.5 flex-1 text-sm leading-6 text-muted">{item.body}</p>
      {item.href && (
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors group-hover:text-primary-strong">
          Learn more
          <ArrowRight aria-hidden="true" className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </span>
      )}
    </div>
  );
}

export function TreatmentCard({ item }: { item: CardItem }) {
  return item.href ? (
    <Link href={item.href} className="block h-full">
      <CardShell item={item} />
    </Link>
  ) : (
    <CardShell item={item} />
  );
}

export function DestinationCard({ item }: { item: CardItem }) {
  return <TreatmentCard item={item} />;
}

export function HospitalCard({ item }: { item: CardItem }) {
  return <TreatmentCard item={item} />;
}

export function CardGrid({ items, variant = "default" }: { items: CardItem[]; variant?: "default" | "article" }) {
  if (!items?.length) return null;

  // Article layout: stacked, linear, scannable — designed for reading
  if (variant === "article") {
    return (
      <div className="space-y-10">
        {items.map((item, i) => (
          <section key={item.title} className="animate-fade-up" style={{ animationDelay: `${i * 60}ms` }}>
            <h2 className="font-sora text-xl font-semibold tracking-tight text-foreground">
              {item.title}
            </h2>
            <p className="mt-3 text-[15px] leading-7 text-muted">
              {item.body}
            </p>
            {item.href && (
              <Link
                href={item.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary-strong"
              >
                Read more <ArrowRight className="size-3.5" />
              </Link>
            )}
          </section>
        ))}
      </div>
    );
  }

  // Default layout: card grid — designed for scanning / discovery
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => (
        <TreatmentCard key={item.title} item={item} />
      ))}
    </div>
  );
}
