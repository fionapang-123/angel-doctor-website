"use client";

import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useRef, useState, useCallback } from "react";
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

const mainLinks = [{ label: "Home", href: "/" }];

const navLinkClass =
  "relative rounded-lg px-1.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:bg-primary after:transition-all after:duration-300 hover:after:w-full";

function Dropdown({
  label,
  items,
  viewAll,
}: {
  label: string;
  items: { label: string; href: string }[];
  viewAll: { label: string; href: string };
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const scheduleClose = useCallback(() => {
    closeTimer.current = setTimeout(() => setOpen(false), 200);
  }, []);

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  }, []);

  useEffect(() => {
    return () => { if (closeTimer.current) clearTimeout(closeTimer.current); };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={() => { cancelClose(); setOpen(true); }}
      onMouseLeave={scheduleClose}
    >
      <span
        tabIndex={0}
        role="button"
        aria-haspopup="true"
        aria-expanded={open}
        className="flex cursor-pointer items-center gap-1 rounded-lg px-1.5 py-2 text-sm font-medium text-muted transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20"
        onFocus={() => { cancelClose(); setOpen(true); }}
        onBlur={() => scheduleClose()}
      >
        {label}
        <ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </span>
      <div
        className={`absolute left-0 top-full z-50 mt-1.5 w-48 rounded-xl border border-line bg-surface p-1.5 shadow-elevated transition-all duration-150 ${
          open
            ? "pointer-events-auto scale-100 opacity-100"
            : "pointer-events-none scale-95 opacity-0"
        }`}
        onMouseEnter={cancelClose}
        onMouseLeave={scheduleClose}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-2 py-2 text-sm text-muted transition-colors hover:bg-mist hover:text-foreground"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="my-1 border-t border-line" />
        <Link
          href={viewAll.href}
          className="block rounded-lg px-2 py-2 text-sm font-medium text-primary transition-colors hover:bg-blush"
          onClick={() => setOpen(false)}
        >
          {viewAll.label}
        </Link>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-shadow duration-300 ${
        scrolled
          ? "border-line bg-white/95 shadow-sm backdrop-blur-xl"
          : "border-line/50 bg-white/92 backdrop-blur-xl"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex shrink-0 flex-col">
          <BrandMark compact />
          <p className="mt-1.5 font-sora text-[11px] font-semibold uppercase tracking-[0.15em] text-muted leading-none">
            China Healthcare, Guided End to End
          </p>
        </div>

        {/* Desktop nav */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-0.5 lg:flex"
        >
          {mainLinks.map((item) => (
            <Link key={item.href} href={item.href} className={navLinkClass}>
              {item.label}
            </Link>
          ))}
          <Dropdown
            label="Treatments"
            items={treatmentLinks}
            viewAll={{ label: "View All Treatments", href: "/treatments" }}
          />
          <Dropdown
            label="Destinations"
            items={destinationLinks}
            viewAll={{ label: "View All Destinations", href: "/destinations" }}
          />
          <Link href="/how-it-works" className={navLinkClass}>
            How It Works
          </Link>
          <Link href="/pricing" className={navLinkClass}>
            Pricing
          </Link>
          <Link href="/why-angel-doctor" className={navLinkClass}>
            Why Angel Doctor
          </Link>
          <Link href="/guides" className={navLinkClass}>
            Guides
          </Link>
          <Link href="/contact" className={navLinkClass}>
            Contact
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <CTAButton
            cta="carePlan"
            className="text-sm px-3.5 py-2 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]"
          />
        </div>

        {/* Mobile: CTA + hamburger */}
        <div className="flex min-w-0 shrink-0 items-center gap-2 lg:hidden">
          <CTAButton cta="carePlan" className="hidden min-h-10 rounded-lg px-3 py-2 text-sm sm:inline-flex" />
          <details className="group relative">
            <summary
              aria-label="Open menu"
              className="flex size-10 cursor-pointer list-none items-center justify-center rounded-xl text-muted transition-all duration-200 hover:bg-mist hover:scale-105 active:scale-95 [&::-webkit-details-marker]:hidden"
            >
              <Menu className="size-5 group-open:hidden" />
              <X className="hidden size-5 group-open:block" />
            </summary>
            <nav
              aria-label="Mobile navigation"
              className="absolute right-0 top-full mt-2 max-h-[80vh] w-[min(18rem,calc(100vw-2rem))] origin-top-right scale-95 overflow-y-auto rounded-2xl border border-line bg-surface p-3 opacity-0 shadow-elevated transition-all duration-150 group-open:scale-100 group-open:opacity-100"
            >
              {mainLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <p className="px-4 py-2 text-base font-semibold uppercase tracking-wider text-primary">
                Treatments
              </p>
              {treatmentLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <p className="px-4 py-2 text-base font-semibold uppercase tracking-wider text-primary">
                Destinations
              </p>
              {destinationLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-xl px-4 py-2.5 text-[13px] text-foreground transition-colors hover:bg-mist"
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-2 border-t border-line" />
              <Link
                href="/how-it-works"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              >
                Pricing
              </Link>
              <Link
                href="/why-angel-doctor"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              >
                Why Angel Doctor
              </Link>
              <Link
                href="/guides"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              >
                Guides
              </Link>
              <Link
                href="/contact"
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              >
                Contact
              </Link>
              <div className="mt-2 border-t border-line pt-2">
                <Link
                  href={CTA.escort.href}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-blush"
                >
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
