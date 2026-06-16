import Link from "next/link";
import { ArrowRight, Building2, Globe, HeartHandshake, Languages, MapPinned, ShieldCheck, Sparkles, Users } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { TrustBar } from "@/components/TrustBar";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Badge } from "@/components/ui/badge";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "About Angel Doctor", href: "/about" },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-56 bg-[linear-gradient(180deg,rgba(235,245,255,0.7),rgba(255,255,255,0))]" />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">Our Story</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About Angel Doctor
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              Angel Doctor helps international patients access trusted healthcare in China with AI-assisted hospital matching, transparent coordination, and trained local medical escorts.
            </p>
          </div>
        </div>
      </section>

      <TrustBar />

      {/* What Angel Doctor Does */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">What We Do</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Healthcare Coordination, Guided End to End</h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
          Angel Doctor is a healthcare coordination and medical travel support platform for international patients seeking care in China. We don't just match you with a hospital — we coordinate your entire care journey.
        </p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Search, title: "AI-Assisted Hospital Matching", body: "Technology-supported matching helps identify suitable hospitals, departments, and providers based on your medical needs, city preference, timeline, and language requirements." },
            { icon: CalendarClock, title: "Appointment Coordination", body: "We handle scheduling, information preparation, and hospital communication so you arrive prepared." },
            { icon: MapPinned, title: "Local Medical Escorts", body: "Trained escorts support you inside the hospital — registration, navigation, communication, payment guidance, and follow-up." },
            { icon: Languages, title: "Translation & Communication", body: "English-speaking coordination and translation support throughout your care journey." },
            { icon: Sparkles, title: "Transparent Planning", body: "Clear pricing guidance and timeline estimates before you commit — no hidden costs, no fake fixed prices." },
            { icon: Globe, title: "International Patient Focus", body: "Designed for overseas patients, short-stay travelers, dental visitors, and overseas Chinese families." },
          ].map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex gap-4 rounded-2xl border border-line bg-surface p-5 shadow-soft">
                <Icon className="mt-0.5 size-5 shrink-0 text-primary" />
                <div>
                  <h3 className="text-sm font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-6 text-muted">{item.body}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Backed by Healthcare Group */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Our Background</p>
              <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">Backed by a Healthcare Group Founded in 1998</h2>
              <p className="mt-4 text-base leading-7 text-muted">
                Angel Doctor is backed by a healthcare group founded in 1998, with long-term experience in healthcare service operations, medical coordination, and patient support across China.
              </p>
              <p className="mt-3 text-base leading-7 text-muted">
                This operational foundation means Angel Doctor is not a startup experiment in medical tourism. It is built on decades of healthcare infrastructure, service management, and patient care experience within China's medical system.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { n: "200+", l: "Hospitals & healthcare providers in our coordination network" },
                { n: "600+", l: "Trained local medical escorts across major Chinese cities" },
                { n: "1998", l: "Founding year of the backing healthcare group" },
                { n: "11", l: "Major medical destination cities with coordination coverage" },
              ].map((s) => (
                <div key={s.n} className="rounded-2xl border border-line bg-surface p-5 text-center shadow-soft">
                  <p className="text-3xl font-bold text-primary">{s.n}</p>
                  <p className="mt-2 text-xs leading-5 text-muted">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Who We Help</p>
        <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">International Patients Seeking Care in China</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Overseas patients facing long wait times", b: "Patients who face extended waiting periods in their home country and want faster access to healthcare options in China." },
            { t: "Cost-sensitive private healthcare users", b: "Patients who find private healthcare in their home country too expensive and want to compare care options in China." },
            { t: "Dental patients", b: "Patients seeking dental implants, crowns, veneers, checkups, or dental treatment planning in China." },
            { t: "Health checkup users", b: "Patients seeking executive health checkups, preventive screening, imaging, blood tests, and specialist review." },
            { t: "Second opinion patients", b: "Patients who want another medical opinion from suitable hospitals or specialists in China." },
            { t: "TCM & recovery users", b: "Patients seeking acupuncture, pain relief, sleep support, fatigue recovery, or wellness-focused TCM programs." },
            { t: "Overseas Chinese families", b: "Patients with Chinese family background who don't live in China and need professional coordination instead of relying on relatives." },
            { t: "Short-stay travelers to China", b: "Travelers visiting China who want dental care, checkups, or medical escort support during their stay." },
            { t: "Patients needing local hospital support", b: "Patients who already have a hospital visit planned and need help with registration, navigation, translation, and follow-up." },
          ].map((u) => (
            <div key={u.t} className="flex items-start gap-3 rounded-xl border border-line bg-surface p-4 shadow-soft">
              <Users className="mt-0.5 size-4 shrink-0 text-primary/60" />
              <div>
                <h3 className="text-sm font-semibold text-foreground">{u.t}</h3>
                <p className="mt-1 text-xs leading-5 text-muted">{u.b}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What We Do Not Do */}
      <section className="border-y border-line bg-mist/50">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Clear Boundaries</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">What Angel Doctor Does Not Do</h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
            Being clear about our boundaries is part of building trust. Here is what Angel Doctor does not do:
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {[
              "Angel Doctor is not a hospital, clinic, or medical practice.",
              "Angel Doctor does not provide medical diagnosis or treatment.",
              "Angel Doctor does not guarantee specific doctor availability.",
              "Angel Doctor does not guarantee treatment outcomes.",
              "Angel Doctor does not publish fake fixed medical prices.",
              "Angel Doctor does not replace licensed healthcare professionals.",
            ].map((s) => (
              <div key={s} className="flex items-start gap-2.5 rounded-xl border border-line bg-surface p-4 shadow-soft">
                <ShieldCheck className="mt-0.5 size-4 shrink-0 text-primary/60" />
                <span className="text-sm leading-6 text-muted">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-2xl border border-primary/10 bg-blush px-6 py-12 text-center sm:px-12 sm:py-14">
          <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full bg-primary/4" />
          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">Ready to explore your options?</h2>
            <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-muted">
              Tell us what care you need and your preferred city. Angel Doctor will help you understand suitable coordination and local support options.
            </p>
            <div className="mt-8">
              <CTAButton cta="carePlan" />
            </div>
          </div>
        </div>
      </section>

      <StickyMobileCTA page={{ slug: "/about", cta: "carePlan" } as any} />
    </main>
  );
}

/* inline icons */
function Search({ className }: { className?: string }) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>; }
function CalendarClock({ className }: { className?: string }) { return <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><circle cx="17" cy="17" r="3"/><path d="M17 15.5V17l1.5 1"/></svg>; }
