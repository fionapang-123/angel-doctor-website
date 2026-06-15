import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { BrandMark } from "@/components/BrandMark";
import { CTAButton } from "@/components/CTAButton";
import { CTA } from "@/config/cta";

const treatmentLinks = [
  { label: "Dental Care", href: "/treatments/dental-care-china" },
  { label: "Health Checkup", href: "/treatments/health-checkup-china" },
  { label: "Second Opinion", href: "/treatments/medical-second-opinion-china" },
  { label: "TCM Recovery", href: "/treatments/tcm-recovery-china" },
];

const destinationLinks = [
  { label: "Shenzhen", href: "/destinations/shenzhen-medical-travel" },
  { label: "Guangzhou", href: "/destinations/guangzhou-medical-travel" },
  { label: "Shanghai", href: "/destinations/shanghai-medical-travel" },
  { label: "Beijing", href: "/destinations/beijing-medical-travel" },
  { label: "Chengdu", href: "/destinations/chengdu-medical-travel" },
  { label: "Chongqing", href: "/destinations/chongqing-medical-travel" },
  { label: "Hangzhou", href: "/destinations/hangzhou-medical-travel" },
  { label: "Nanjing", href: "/destinations/nanjing-medical-travel" },
  { label: "Wuhan", href: "/destinations/wuhan-medical-travel" },
  { label: "Xi'an", href: "/destinations/xian-medical-travel" },
  { label: "Zhuhai", href: "/destinations/zhuhai-medical-travel" },
];

const mainLinks = [
  { label: "Home", href: "/" },
];

function Dropdown({ label, items, viewAll }: { label: string; items: { label: string; href: string }[]; viewAll: { label: string; href: string } }) {
  return (
    <div className="group relative">
      <span className="flex cursor-pointer items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground">
        {label}
        <ChevronDown className="size-3 transition-transform duration-200 group-hover:rotate-180" />
      </span>
      <div className="pointer-events-none absolute left-0 top-full z-50 mt-1.5 w-48 rounded-xl border border-line bg-surface p-1.5 opacity-0 shadow-elevated transition-all duration-150 group-hover:pointer-events-auto group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-mist hover:text-foreground"
          >
            {item.label}
          </Link>
        ))}
        <div className="my-1 border-t border-line" />
        <Link
          href={viewAll.href}
          className="block rounded-lg px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-blush"
        >
          {viewAll.label}
        </Link>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line/60 bg-white/92 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <BrandMark compact />

        {/* Desktop nav */}
        <nav aria-label="Main navigation" className="hidden items-center gap-0.5 lg:flex">
          {mainLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Dropdown label="Treatments" items={treatmentLinks} viewAll={{ label: "View All Treatments", href: "/treatments" }} />
          <Dropdown label="Destinations" items={destinationLinks} viewAll={{ label: "View All Destinations", href: "/destinations" }} />
          <Link href="/how-it-works" className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground">How It Works</Link>
          <Link href="/pricing" className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground">Pricing</Link>
          <Link href="/why-angel-doctor" className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground">Why Angel Doctor</Link>
          <Link href="/guides" className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground">Guides</Link>
          <Link href="/contact" className="rounded-lg px-3 py-2 text-sm font-medium text-muted transition-colors hover:bg-mist hover:text-foreground">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <CTAButton cta="carePlan" />
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <CTAButton cta="carePlan" />
          <details className="group relative">
            <summary className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl text-muted transition-colors hover:bg-mist [&::-webkit-details-marker]:hidden">
              <Menu className="size-5 group-open:hidden" />
              <X className="hidden size-5 group-open:block" />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full mt-2 w-72 rounded-2xl border border-line bg-surface p-3 shadow-elevated max-h-[80vh] overflow-y-auto"
            >
              {mainLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist">
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted">Treatments</p>
              {treatmentLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-mist">
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <p className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-muted">Destinations</p>
              {destinationLinks.map((item) => (
                <Link key={item.href} href={item.href} className="block rounded-xl px-4 py-3 text-sm text-foreground transition-colors hover:bg-mist">
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <Link href="/how-it-works" className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist">How It Works</Link>
              <Link href="/pricing" className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist">Pricing</Link>
              <Link href="/why-angel-doctor" className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist">Why Angel Doctor</Link>
              <Link href="/guides" className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist">Guides</Link>
              <Link href="/contact" className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist">Contact</Link>
              <div className="mt-2 border-t border-line pt-2">
                <Link href={CTA.escort.href} className="block rounded-xl px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-blush">
                  {CTA.escort.label}
                </Link>
              </div>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
