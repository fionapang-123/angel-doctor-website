import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Badge } from "@/components/ui/badge";
import { AnswerBlock } from "@/components/AnswerBlock";
import { createMetadata } from "@/config/metadata";
import { getPage } from "@/data/pages";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Destinations", href: "/destinations" },
];

const allCities = [
  { city: "Shenzhen", slug: "/destinations/shenzhen-medical-travel", badge: "Dental · Checkups · TCM", pos: "Fast, modern medical access near Hong Kong — dental care, health checkups, and cross-border support.", map: { x: 72, y: 81 } },
  { city: "Guangzhou", slug: "/destinations/guangzhou-medical-travel", badge: "TCM · Rehab · Specialist", pos: "Southern China's medical hub — deep TCM tradition, strong specialist resources, and comprehensive care.", map: { x: 67, y: 79 } },
  { city: "Shanghai", slug: "/destinations/shanghai-medical-travel", badge: "Executive Checkup · Second Opinion", pos: "International-standard medical care with top executive checkup centers and specialist hospitals.", map: { x: 78, y: 59 } },
  { city: "Beijing", slug: "/destinations/beijing-medical-travel", badge: "Specialist · Second Opinion · Pediatric", pos: "China's capital medical hub — national hospitals and strong specialist depth.", map: { x: 66, y: 37 } },
  { city: "Chengdu", slug: "/destinations/chengdu-medical-travel", badge: "Health Checkup · Comprehensive", pos: "Western China's medical center with comprehensive diagnostics and care coordination options.", map: { x: 44, y: 67 } },
  { city: "Chongqing", slug: "/destinations/chongqing-medical-travel", badge: "Pediatric · Specialist", pos: "Southwest China's major medical center with pediatric and comprehensive care resources.", map: { x: 51, y: 70 } },
  { city: "Hangzhou", slug: "/destinations/hangzhou-medical-travel", badge: "Specialist · Women's Health", pos: "Zhejiang University-affiliated medical institutions in one of China's most scenic cities.", map: { x: 76, y: 63 } },
  { city: "Nanjing", slug: "/destinations/nanjing-medical-travel", badge: "Health Checkup · Second Opinion", pos: "Eastern China's medical hub anchored by Jiangsu Province Hospital and Nanjing Drum Tower Hospital.", map: { x: 73, y: 57 } },
  { city: "Wuhan", slug: "/destinations/wuhan-medical-travel", badge: "Tongji · Xiehe · Specialist", pos: "Central China destination with major university hospital systems and specialist coordination options.", map: { x: 62, y: 64 } },
  { city: "Xi'an", slug: "/destinations/xian-medical-travel", badge: "Specialist · Health Checkup", pos: "Northwest China's medical center with specialist and health checkup coordination options.", map: { x: 52, y: 54 } },
  { city: "Zhuhai", slug: "/destinations/zhuhai-medical-travel", badge: "General Care · Cross-Border", pos: "Convenient medical access near Macau and Hong Kong for international patients.", map: { x: 69, y: 84 } },
];

const treatmentCityRows = [
  { treatment: "Dental Care", cities: "Shenzhen, Shanghai, Guangzhou", why: "Modern dental providers, strong access, short treatment trips" },
  { treatment: "Health Checkup", cities: "Shanghai, Shenzhen, Guangzhou, Beijing", why: "Executive checkup centers, imaging, specialist review" },
  { treatment: "Second Opinion", cities: "Beijing, Shanghai, Guangzhou", why: "Strong specialist hospitals and department depth" },
  { treatment: "TCM Recovery", cities: "Guangzhou, Chengdu, Shanghai", why: "TCM institutions, acupuncture, pain/sleep/stress recovery" },
  { treatment: "Rehabilitation", cities: "Guangzhou, Shanghai, Beijing", why: "Orthopedic, neurological, post-surgery and wellness recovery" },
];

const page = getPage("/destinations");

export const metadata = createMetadata(page);

function ChinaCityMap() {
  return (
    <section className="border-y border-line bg-surface">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">China Medical Travel City Map</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              11 city options, one coordinated care pathway
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Angel Doctor helps international patients compare major Chinese medical travel destinations by treatment need, travel route, provider type, timeline, and local support requirements.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              City recommendations depend on treatment need, provider availability, appointment timing, medical record review when needed, and local support requirements.
            </p>
          </div>

          <div className="overflow-hidden rounded-xl border border-line bg-mist shadow-soft">
            <div className="relative bg-white">
              <Image
                src="/images/destinations/china-medical-travel-city-map.png"
                alt="China medical travel destination map for Angel Doctor cities including Beijing, Shanghai, Guangzhou, Shenzhen, Zhuhai, Chengdu, Chongqing, Hangzhou, Nanjing, Wuhan, and Xi'an"
                width={1672}
                height={941}
                className="h-auto w-full"
                sizes="(min-width: 1024px) 720px, calc(100vw - 32px)"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 hidden md:block">
                {allCities.map((city) => (
                  <Link
                    key={city.city}
                    href={city.slug}
                    className="pointer-events-auto group absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${city.map.x}%`, top: `${city.map.y}%` }}
                    aria-label={`Explore ${city.city} medical travel`}
                  >
                    <span className="flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3 py-1.5 text-[11px] font-semibold text-foreground shadow-soft backdrop-blur transition hover:-translate-y-0.5 hover:border-primary/30 hover:text-primary">
                      <span className="size-2 rounded-full bg-primary" aria-hidden="true" />
                      {city.city}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="border-t border-line bg-white/90 p-4 sm:p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted">Linked city guides</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {allCities.map((city) => (
                  <Link
                    key={city.city}
                    href={city.slug}
                    className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-primary/10 bg-blush px-3 py-2 text-xs font-semibold text-foreground transition hover:border-primary/25 hover:text-primary"
                    aria-label={`Explore ${city.city} medical travel`}
                  >
                    <MapPin className="size-3.5 text-primary/70" aria-hidden="true" />
                    {city.city}
                  </Link>
                ))}
              </div>
              <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                {treatmentCityRows.slice(0, 4).map((row) => (
                  <div key={row.treatment} className="flex items-start gap-2 text-muted">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden="true" />
                    <p>
                      <span className="font-semibold text-foreground">{row.treatment}:</span> {row.cities}
                    </p>
                  </div>
                ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function DestinationsHubPage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(235,245,255,0.7),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="mx-auto max-w-3xl pt-10 text-center">
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Medical Travel Destinations in China
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Find the right Chinese city for dental care, health checkups, second opinions, TCM recovery, and specialist medical support — with Angel Doctor&apos;s hospital coordination and trained local medical escorts.
            </p>
            <div className="mt-7">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <TrustBar />

      <AnswerBlock title="How should international patients choose a medical travel city in China?">
        <p>
          Choose the city based on treatment need, provider type, travel route, timeline, language support, and follow-up requirements. Angel Doctor helps compare Chinese destinations such as Shenzhen, Guangzhou, Shanghai, Beijing, Chengdu, Chongqing, Hangzhou, Nanjing, Wuhan, Xi&apos;an, and Zhuhai, then coordinates local support when needed.
        </p>
      </AnswerBlock>

      <ChinaCityMap />

      {/* City Directory */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-4 border-b border-line pb-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Destination Directory</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Compare cities by care need
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-muted">
            These city guides are organized around practical care access: treatment fit, travel route, local support, and follow-up needs.
          </p>
        </div>

        <div className="divide-y divide-line">
          {allCities.map((city) => (
            <Link
              key={city.city}
              href={city.slug}
              className="group grid gap-4 py-5 transition hover:bg-white/60 sm:grid-cols-[0.75fr_1.6fr_0.65fr] sm:items-center"
            >
              <div className="flex items-center gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blush">
                  <MapPin className="size-4 text-primary" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary">{city.city}</h3>
                  <p className="mt-1 text-xs font-semibold text-primary">{city.badge}</p>
                </div>
              </div>
              <p className="text-sm leading-6 text-muted">{city.pos}</p>
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary sm:justify-end">
                Explore city <ArrowRight className="size-3.5" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </section>

        {/* Best City by Treatment — comparison matrix */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">City Finder</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Best City by Treatment</h2>
        <div className="mt-8 grid gap-3 md:hidden">
          {treatmentCityRows.map((row) => (
            <div key={row.treatment} className="rounded-2xl border border-line bg-surface p-5 shadow-soft">
              <p className="text-base font-semibold text-foreground">{row.treatment}</p>
              <p className="mt-2 text-sm font-medium text-primary">{row.cities}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{row.why}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 hidden overflow-x-auto md:block">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b border-line">
                <th className="pb-3 pr-4 font-semibold text-foreground">Treatment</th>
                <th className="pb-3 pr-4 font-semibold text-foreground">Recommended Cities</th>
                <th className="pb-3 font-medium text-muted">Why</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line">
              {treatmentCityRows.map((row) => (
                <tr key={row.treatment}>
                  <td className="py-3 pr-4 font-medium text-foreground">{row.treatment}</td>
                  <td className="py-3 pr-4 text-muted">{row.cities}</td>
                  <td className="py-3 text-muted">{row.why}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-6 text-center text-sm text-muted">
          Not sure which city is right for you?{' '}
          <Link href="/contact" className="font-medium text-primary hover:underline">Get a personalized care plan.</Link>
        </p>
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
              Tell us what treatment you need and where you&apos;re travelling from. Angel Doctor will help match you to the right city and hospital.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: "/destinations", cta: "carePlan" } as any} />
    </main>
  );
}
