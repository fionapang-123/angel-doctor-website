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

type HeaderTone = "dark" | "light";

const navLinkClass = (tone: HeaderTone) =>
  `relative rounded-lg px-1.5 py-2 text-sm font-semibold transition-colors after:absolute after:bottom-1 after:left-0 after:h-[2px] after:w-0 after:rounded-full after:transition-all after:duration-300 hover:after:w-full ${
    tone === "dark"
      ? "text-white/90 hover:text-white after:bg-white/75"
      : "text-foreground/78 hover:text-foreground after:bg-foreground/70"
  }`;

function Dropdown({
  label,
  items,
  viewAll,
  tone,
}: {
  label: string;
  items: { label: string; href: string }[];
  viewAll: { label: string; href: string };
  tone: HeaderTone;
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
        className={`flex cursor-pointer items-center gap-1 rounded-lg px-1.5 py-2 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 ${
          tone === "dark"
            ? "text-white/90 hover:text-white focus-visible:text-white focus-visible:ring-white/20"
            : "text-foreground/78 hover:text-foreground focus-visible:text-foreground focus-visible:ring-foreground/15"
        }`}
        onFocus={() => { cancelClose(); setOpen(true); }}
        onBlur={() => scheduleClose()}
      >
        {label}
        <ChevronDown className={`size-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`} />
      </span>
      <div
        className={`absolute left-0 top-full z-[80] mt-1.5 w-52 rounded-xl border border-slate-200 bg-white p-2 shadow-[0_20px_60px_rgba(16,24,40,0.24)] ring-1 ring-white transition-all duration-150 ${
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
            className="block rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-950 transition-colors hover:bg-[#fff1f8] hover:text-primary"
            onClick={() => setOpen(false)}
          >
            {item.label}
          </Link>
        ))}
        <div className="my-1 border-t border-line" />
        <Link
          href={viewAll.href}
          className="block rounded-lg px-3 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-[#fff1f8]"
          onClick={() => setOpen(false)}
        >
          {viewAll.label}
        </Link>
      </div>
    </div>
  );
}

function HeaderContent({ tone }: { tone: HeaderTone }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const mobileButtonClass =
    tone === "dark"
      ? "text-white/90 hover:bg-white/10 active:bg-white/15"
      : "text-foreground/75 hover:bg-mist";
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 px-4 py-1 sm:px-6 lg:px-8">
      <div className="flex shrink-0 items-center">
        <BrandMark
          src="/images/angel-doctor-header-logo.png"
          imageWidth={1573}
          imageHeight={312}
          logoClassName="w-[158px] transition-all duration-300 sm:w-[188px] lg:w-[206px]"
        />
      </div>

      {/* Desktop nav */}
      <nav
        aria-label="Main navigation"
        className="hidden items-center gap-0.5 lg:flex"
      >
        {mainLinks.map((item) => (
          <Link key={item.href} href={item.href} className={navLinkClass(tone)}>
            {item.label}
          </Link>
        ))}
        <Dropdown
          label="Treatments"
          items={treatmentLinks}
          tone={tone}
          viewAll={{ label: "View All Treatments", href: "/treatments" }}
        />
        <Dropdown
          label="Destinations"
          items={destinationLinks}
          tone={tone}
          viewAll={{ label: "View All Destinations", href: "/destinations" }}
        />
        <Link href="/how-it-works" className={navLinkClass(tone)}>
          How It Works
        </Link>
        <Link href="/pricing" className={navLinkClass(tone)}>
          Pricing
        </Link>
        <Link href="/why-angel-doctor" className={navLinkClass(tone)}>
          Why Angel Doctor
        </Link>
        <Link href="/guides" className={navLinkClass(tone)}>
          Guides
        </Link>
        <Link href="/contact" className={navLinkClass(tone)}>
          Contact
        </Link>
      </nav>

      {/* Desktop CTA */}
      <div className="hidden lg:block">
        <CTAButton
          cta="carePlan"
          className="min-h-10 rounded-lg !bg-[linear-gradient(135deg,#d81b92_0%,#2664d9_100%)] px-4 py-2 text-sm !text-white shadow-[0_14px_34px_rgba(38,100,217,0.28)] transition-transform duration-200 hover:scale-[1.03] hover:brightness-[1.03] active:scale-[0.97] [&_svg]:!size-4 [&_svg]:!text-white"
        />
      </div>

      {/* Mobile: CTA + hamburger */}
      <div className="flex min-w-0 shrink-0 items-center gap-2 lg:hidden">
        <CTAButton
          cta="carePlan"
          className="hidden min-h-10 rounded-lg !bg-[linear-gradient(135deg,#d81b92_0%,#2664d9_100%)] px-3 py-2 text-sm !text-white shadow-[0_14px_34px_rgba(38,100,217,0.28)] hover:brightness-[1.03] sm:inline-flex [&_svg]:!size-4 [&_svg]:!text-white"
        />
        <div className="relative">
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            className={`flex size-10 cursor-pointer list-none items-center justify-center rounded-xl transition-all duration-200 hover:scale-105 active:scale-95 ${mobileButtonClass}`}
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
          <nav
            aria-label="Mobile navigation"
            className={`absolute right-0 top-full mt-2 max-h-[80vh] w-[min(18rem,calc(100vw-2rem))] origin-top-right overflow-y-auto rounded-2xl border border-line bg-surface p-3 shadow-elevated transition-all duration-150 ${
              mobileMenuOpen
                ? "pointer-events-auto scale-100 opacity-100"
                : "pointer-events-none scale-95 opacity-0"
            }`}
          >
            {mainLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
              >
                {item.label}
              </Link>
            ))}
            <div className="my-2 border-t border-line" />
            <Link
              href="/how-it-works"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              onClick={closeMobileMenu}
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              onClick={closeMobileMenu}
            >
              Pricing
            </Link>
            <Link
              href="/why-angel-doctor"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              onClick={closeMobileMenu}
            >
              Why Angel Doctor
            </Link>
            <Link
              href="/guides"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              onClick={closeMobileMenu}
            >
              Guides
            </Link>
            <Link
              href="/contact"
              className="block rounded-xl px-4 py-3 text-sm font-medium text-foreground transition-colors hover:bg-mist"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>
            <div className="mt-2 border-t border-line pt-2">
              <Link
                href={CTA.escort.href}
                className="block rounded-xl px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-blush"
                onClick={closeMobileMenu}
              >
                {CTA.escort.label}
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  return (
    <>
      <header className="relative z-40 bg-[#101828] shadow-[0_16px_40px_rgba(16,24,40,0.22)]">
        <HeaderContent tone="dark" />
      </header>
      <header className="site-header-sticky fixed inset-x-0 top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur-xl transition-all duration-300">
        <HeaderContent tone="light" />
      </header>
    </>
  );
}
