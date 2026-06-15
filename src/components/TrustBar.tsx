import { BadgeCheck, HeartHandshake, Languages, ShieldCheck } from "lucide-react";

const trustItems = [
  { label: "Healthcare group since 1998", icon: BadgeCheck },
  { label: "200+ hospitals and healthcare providers", icon: HeartHandshake },
  { label: "600+ trained medical escorts", icon: ShieldCheck },
  { label: "English-speaking support", icon: Languages },
];

export function TrustBar() {
  return (
    <div className="border-y border-line bg-mist/40">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-sm font-medium text-muted sm:justify-between">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="flex items-center gap-2.5"
              >
                {i > 0 && (
                  <span className="hidden h-4 w-px bg-line sm:block" aria-hidden="true" />
                )}
                <Icon aria-hidden="true" className="size-4 shrink-0 text-primary/60" />
                <span>{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
