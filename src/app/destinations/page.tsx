import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Badge } from "@/components/ui/badge";
import { getHospitalsByCity } from "@/data/hospitals";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
];

const allCities = [
  { city: "Shenzhen", slug: "/destinations/shenzhen-medical-travel", badge: "Dental · Checkups · TCM", pos: "Fast, modern medical access near Hong Kong — dental care, health checkups, and cross-border support." },
  { city: "Guangzhou", slug: "/destinations/guangzhou-medical-travel", badge: "TCM · Rehab · Specialist", pos: "Southern China's medical hub — deep TCM tradition, strong specialist resources, and comprehensive care." },
  { city: "Shanghai", slug: "/destinations/shanghai-medical-travel", badge: "Executive Checkup · Second Opinion", pos: "International-standard medical care with top executive checkup centers and specialist hospitals." },
  { city: "Beijing", slug: "/destinations/beijing-medical-travel", badge: "Specialist · Second Opinion · Pediatric", pos: "China's capital of medical excellence — top national hospitals and unmatched specialist depth." },
  { city: "Chengdu", slug: "/destinations/chengdu-medical-travel", badge: "Health Checkup · Comprehensive", pos: "Western China's medical powerhouse — home to West China Hospital, one of the country's largest medical centers." },
  { city: "Chongqing", slug: "/destinations/chongqing-medical-travel", badge: "Pediatric · Specialist", pos: "Southwest China's major medical center with a leading children's hospital and comprehensive care." },
  { city: "Hangzhou", slug: "/destinations/hangzhou-medical-travel", badge: "Specialist · Women's Health", pos: "Zhejiang University's top-ranked medical institutions in one of China's most scenic cities." },
  { city: "Nanjing", slug: "/destinations/nanjing-medical-travel", badge: "Health Checkup · Second Opinion", pos: "Eastern China's medical hub anchored by Jiangsu Province Hospital and Nanjing Drum Tower Hospital." },
  { city: "Wuhan", slug: "/destinations/wuhan-medical-travel", badge: "Tongji · Xiehe · Specialist", pos: "Central China's premier destination with two of the country's largest university hospital systems." },
  { city: "Xi'an", slug: "/destinations/xian-medical-travel", badge: "Specialist · Health Checkup", pos: "Northwest China's medical center at Xi'an Jiaotong University's First Affiliated Hospital." },
  { city: "Zhuhai", slug: "/destinations/zhuhai-medical-travel", badge: "General Care · Cross-Border", pos: "Convenient medical access near Macau and Hong Kong for international patients." },
];

export default function DestinationsHubPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(235,245,255,0.7),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="mx-auto max-w-3xl pt-10 text-center">
            <Badge className="mx-auto w-fit" variant="secondary">11 Cities · 48 Hospitals</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Medical Travel Destinations in China
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Find the right Chinese city for dental care, health checkups, second opinions, TCM recovery, and specialist medical support — with Angel Doctor's hospital coordination and trained local medical escorts.
            </p>
            <div className="mt-7">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* City Cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {allCities.map((c) => {
            const count = getHospitalsByCity(c.city).length;
            return (
              <Link key={c.city} href={c.slug} className="group block">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-surface p-5 shadow-soft transition hover:-translate-y-0.5 hover:border-primary/20 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-blush">
                      <MapPin className="size-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{c.city}</h3>
                      <p className="text-xs text-muted">{count} hospital{count !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="mt-3 w-fit text-[10px]">{c.badge}</Badge>
                  <p className="mt-3 flex-1 text-sm leading-6 text-muted">{c.pos}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-primary">
                    Explore {c.city} <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/4" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Not sure which city is right for you?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us what treatment you need and where you're travelling from. Angel Doctor will help match you to the right city and hospital.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
            <p className="mt-5 text-xs text-muted">Free · 2 minutes · No commitment</p>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: "/destinations", cta: "carePlan" } as any} />
    </main>
  );
}
