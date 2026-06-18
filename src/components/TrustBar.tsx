import { BadgeCheck, HeartHandshake, Languages, ShieldCheck } from "lucide-react";

const trustItems = [
  { label: "Healthcare group since 1998", icon: BadgeCheck },
  { label: "200+ hospitals and providers", icon: HeartHandshake },
  { label: "600+ trained medical escorts", icon: ShieldCheck },
  { label: "English-speaking support", icon: Languages },
];

export function TrustBar() {
  return (
    <div className="border-y border-line bg-white/70">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-7">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trustItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium text-muted shadow-soft transition hover:border-primary/25 hover:text-foreground"
              >
                <Icon aria-hidden="true" className="size-[18px] shrink-0 text-primary" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
