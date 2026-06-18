import { Breadcrumbs } from "@/components/Breadcrumbs";
import { createMetadata } from "@/config/metadata";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Medical Disclaimer", href: "/legal/medical-disclaimer" },
];

const page = {
  slug: "/legal/medical-disclaimer",
  title: "Medical Disclaimer | Angel Doctor",
  description:
    "Understand Angel Doctor's role as a healthcare coordination and medical travel support platform, not a provider of diagnosis or treatment.",
};

export const metadata = createMetadata(page);

export default function MedicalDisclaimerPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Medical Disclaimer</h1>

      <div className="mt-8 space-y-6 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Role of Angel Doctor</h2>
          <p className="mt-3">Angel Doctor is a healthcare coordination and medical travel support platform. Angel Doctor is not a hospital, clinic, medical practice, or emergency medical service provider.</p>
          <p className="mt-3">Information provided on this website is for general informational and care coordination purposes only. It is not medical advice, diagnosis, treatment, or a substitute for consultation with a licensed healthcare professional.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">No Medical Advice</h2>
          <p className="mt-3">Angel Doctor does not provide medical diagnosis, treatment recommendations, prescriptions, or clinical advice. All medical decisions should be made in consultation with licensed healthcare providers.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Licensed Healthcare Providers</h2>
          <p className="mt-3">Medical diagnosis, treatment decisions, prescriptions, procedures, and clinical recommendations are made by licensed healthcare providers, hospitals, clinics, or medical institutions. Angel Doctor may assist with hospital matching, appointment coordination, medical record preparation, translation support, local medical escort services, and follow-up communication.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">No Guarantee of Outcomes</h2>
          <p className="mt-3">Angel Doctor does not guarantee appointment availability, doctor access, treatment outcomes, recovery results, or medical cost estimates. Estimated costs provided during care planning are for guidance and depend on provider confirmation.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Emergency Care</h2>
          <p className="mt-3">This website is not intended for emergency medical communication. In a medical emergency, contact local emergency services immediately. Angel Doctor does not provide emergency medical coordination.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Medical Records & Patient Responsibility</h2>
          <p className="mt-3">Patients are responsible for the accuracy and completeness of medical information shared for care coordination. Angel Doctor handles medical inquiry information with care but does not assume responsibility for clinical outcomes based on patient-provided information.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Third-Party Hospitals & Providers</h2>
          <p className="mt-3">Angel Doctor coordinates with third-party hospitals, clinics, and healthcare providers. Angel Doctor does not own, operate, or control third-party hospitals and providers. Each provider is responsible for its own medical services, clinical decisions, and treatment outcomes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">For questions about this disclaimer, contact Angel Doctor through the contact page.</p>
        </section>
      </div>
    </main>
  );
}
