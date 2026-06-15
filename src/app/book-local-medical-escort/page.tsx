import { EscortForm } from "@/components/forms";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { AmbientBlobs } from "@/components/AmbientBlobs";
import { Badge } from "@/components/ui/badge";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Book Local Medical Escort", href: "/book-local-medical-escort" },
];

export default function BookEscortPage() {
  return (
    <main>
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
