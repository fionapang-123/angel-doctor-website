import { EscortForm } from "@/components/forms";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { SchemaJsonLd } from "@/components/SchemaJsonLd";
import { Badge } from "@/components/ui/badge";
import { createMetadata } from "@/config/metadata";
import { createPageSchema } from "@/config/schema";
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
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-line bg-surface p-6 shadow-soft sm:p-8">
          <EscortForm />
        </div>
      </section>
    </main>
  );
}
