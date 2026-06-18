import Image from "next/image";
import { CTAButton } from "@/components/CTAButton";
import { EscortForm } from "@/components/forms";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/config/metadata";
import { createPageSchema } from "@/config/schema";
import { AnswerBlock } from "@/components/AnswerBlock";
import type { PageContent } from "@/types/page";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Book Local Medical Escort", href: "/book-local-medical-escort" },
];

const page: PageContent = {
  slug: "/book-local-medical-escort",
  title: "Book Local Medical Escort in China | Angel Doctor",
  description:
    "Book trained local medical escort support for hospital and clinic visits in China, including registration, navigation, communication, payment guidance, and follow-up coordination.",
  h1: "Book a Local Medical Escort",
  intro:
    "A trained English-speaking medical escort can support international patients during hospital and clinic visits in China.",
  kind: "service",
  cta: "escort",
  breadcrumbs: crumbs,
  quickAnswer:
    "Angel Doctor medical escorts provide non-clinical local support for hospital navigation, registration, communication, payment guidance, and follow-up coordination.",
  sections: [],
  relatedLinks: [
    { label: "Hospital Access", href: "/hospital-access" },
    { label: "Get Your Care Plan", href: "/get-care-plan" },
  ],
  faqs: [
    {
      question: "Does a medical escort provide diagnosis or treatment?",
      answer:
        "No. Medical escorts provide local visit support, communication assistance, navigation, registration, payment guidance, and follow-up coordination. Licensed healthcare providers make medical decisions.",
    },
  ],
  disclaimer: "medical",
};

export const metadata = createMetadata(page);

const escortScenes = [
  {
    src: "/images/escort-scenes/angel-doctor-real-local-escort-reception-china.jpg",
    alt: "Angel Doctor real local medical escort employees supporting reception and hospital visit coordination in China",
  },
  {
    src: "/images/escort-scenes/angel-doctor-real-medical-escort-team-china.jpg",
    alt: "Angel Doctor real trained medical escort team for international patients in China",
  },
];

export default function BookEscortPage() {
  return (
    <main>
      <SchemaJsonLd data={createPageSchema(page)} />
      <section className="relative overflow-hidden border-b border-line">
        <AmbientBlobs />
        <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8 lg:pb-18">
          <Breadcrumbs items={crumbs} />
          <div className="max-w-3xl pt-10">
            <Badge className="w-fit" variant="secondary">Local Support</Badge>
            <h1 className="mt-4 text-4xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Book a Local Medical Escort
            </h1>
            <p className="mt-5 text-lg leading-8 text-muted">
              A trained English-speaking medical escort can support you during hospital visits in China — registration, navigation, translation, payment guidance, and follow-up coordination.
            </p>
            <div className="mt-7">
              <CTAButton cta="escort" className="w-full sm:w-auto" />
            </div>
          </div>
        </div>
      </section>

      <AnswerBlock title="What does a local medical escort do in China?">
        <p>
          A local medical escort provides non-clinical support during hospital and clinic visits, including arrival coordination, registration flow, department navigation, communication assistance, payment guidance, examination routing, report collection, and follow-up coordination. Medical escorts do not diagnose, prescribe, or make treatment decisions.
        </p>
      </AnswerBlock>

      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8 lg:hidden">
          <EscortForm />
        </div>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">Real Angel Doctor Escort Team</p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground sm:text-4xl">
              Trained local employees for hospital visits in China
            </h2>
            <p className="mt-4 text-base leading-7 text-muted">
              Angel Doctor medical escorts are trained employees who support international patients during hospital and clinic visits in China.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Common support includes arrival coordination, registration flow, department navigation, communication assistance, payment guidance, examination routing, and follow-up coordination.
            </p>
            <p className="mt-3 text-sm leading-6 text-muted">
              Vehicle pickup or drop-off support may be arranged when needed, but medical escort service remains non-clinical. Angel Doctor does not provide diagnosis, treatment, prescriptions, or guaranteed hospital access.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {escortScenes.map((scene) => (
                <div key={scene.src} className="overflow-hidden rounded-2xl border border-line bg-surface shadow-soft">
                  <Image
                    src={scene.src}
                    alt={scene.alt}
                    width={1536}
                    height={1024}
                    className="h-56 w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="hidden rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8 lg:block">
            <EscortForm />
          </div>
        </div>
      </section>
      <StickyMobileCTA page={page} />
    </main>
  );
}
