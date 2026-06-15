import { Breadcrumbs } from "@/components/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Terms", href: "/legal/terms" },
];

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Terms of Use</h1>

      <div className="mt-8 space-y-6 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Acceptance of Terms</h2>
          <p className="mt-3">By accessing and using the Angel Doctor website, you agree to these Terms of Use. If you do not agree, please do not use the website.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">About Angel Doctor Services</h2>
          <p className="mt-3">Angel Doctor provides healthcare coordination, hospital matching, translation support, appointment assistance, and local medical escort services. Angel Doctor does not provide medical diagnosis, medical treatment, prescriptions, emergency medical care, or guaranteed access to any specific doctor, hospital, or treatment outcome.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">No Medical Advice</h2>
          <p className="mt-3">Information on this website is for care coordination and informational purposes only. It is not medical advice. Consult licensed healthcare professionals for medical decisions.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">User Responsibilities</h2>
          <p className="mt-3">You are responsible for the accuracy of information you provide through our forms. You agree not to use the website for emergency medical communication.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Care Coordination & Third-Party Providers</h2>
          <p className="mt-3">Angel Doctor coordinates with third-party hospitals, clinics, and healthcare providers. These providers are independently responsible for their medical services, clinical decisions, and treatment outcomes.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Pricing & Estimates</h2>
          <p className="mt-3">Cost estimates provided during care planning are for guidance only. Final costs are confirmed by the provider after examination and depend on treatment type, materials, and diagnostic requirements.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Appointment Availability</h2>
          <p className="mt-3">Appointment availability depends on department capacity, doctor schedule, medical record review, patient condition, city preference, timeline, and provider confirmation. Angel Doctor does not guarantee appointment availability.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Intellectual Property</h2>
          <p className="mt-3">Website content, including text, images, and design, is protected by applicable intellectual property laws. Hospital names and logos belong to their respective owners.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Limitation of Liability</h2>
          <p className="mt-3">Angel Doctor is not liable for medical outcomes, treatment decisions, or services provided by third-party hospitals and healthcare providers. Use of this website and Angel Doctor coordination services is at your own risk.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Changes to Terms</h2>
          <p className="mt-3">These Terms may be updated from time to time. Continued use of the website after changes constitutes acceptance of the updated Terms.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">For questions about these Terms, contact Angel Doctor through the contact page.</p>
        </section>
      </div>
    </main>
  );
}
