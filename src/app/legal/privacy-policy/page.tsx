import { Breadcrumbs } from "@/components/Breadcrumbs";

const crumbs = [
  { label: "Home", href: "/" },
  { label: "Privacy Policy", href: "/legal/privacy-policy" },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-8 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">Privacy Policy</h1>

      <div className="mt-8 space-y-6 text-base leading-7 text-muted">
        <section>
          <h2 className="text-xl font-semibold text-foreground">Introduction</h2>
          <p className="mt-3">Angel Doctor ("we," "us," or "our") is committed to protecting the privacy of individuals who use our website and services. This Privacy Policy explains how we collect, use, and protect personal information and medical travel inquiry details.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Information We Collect</h2>
          <p className="mt-3">When you submit a care plan request or contact form, we may collect: email address, phone/WhatsApp number, country/region, preferred city, treatment interest, travel timeline, and medical concern descriptions.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Medical Inquiry Information</h2>
          <p className="mt-3">Medical inquiry information is used only for care coordination purposes — hospital matching, appointment planning, and provider communication. You should not submit emergency medical information through this website. In a medical emergency, contact local emergency services immediately.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">How We Use Information</h2>
          <p className="mt-3">We use submitted information to: respond to your inquiry, provide care coordination services, suggest suitable hospitals and providers, coordinate appointments, arrange local medical escort services, and communicate about your care plan.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Hospitals, Providers & Care Coordination Partners</h2>
          <p className="mt-3">With your consent, relevant care coordination information may be shared with hospitals and providers to support appointment scheduling and care planning. We do not sell personal information to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Data Storage & Protection</h2>
          <p className="mt-3">We implement reasonable measures to protect personal information. However, no method of electronic storage or transmission is 100% secure.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">International Users</h2>
          <p className="mt-3">Angel Doctor operates in China. Information submitted may be transferred to and processed in China. By using our services, you consent to this transfer and processing.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Cookies & Analytics</h2>
          <p className="mt-3">Our website may use cookies and analytics tools to understand usage and improve the service. You can manage cookie preferences through your browser settings.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Your Rights & Choices</h2>
          <p className="mt-3">You may request access to, correction of, or deletion of your personal information by contacting us. We will respond to reasonable requests in accordance with applicable laws.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p className="mt-3">For privacy-related questions, contact Angel Doctor through the contact page.</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-foreground">Updates to This Policy</h2>
          <p className="mt-3">This Privacy Policy may be updated from time to time. Changes will be posted on this page.</p>
        </section>
      </div>
    </main>
  );
}
