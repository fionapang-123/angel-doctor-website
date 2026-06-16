export const siteConfig = {
  name: "Angel Doctor",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.angeldoctor.com",
  locale: process.env.NEXT_PUBLIC_SITE_LOCALE || "en",
  description:
    "Angel Doctor helps international patients access trusted healthcare in China through hospital and provider matching, transparent coordination, and trained local medical escorts.",
  slogan: "China Healthcare, Guided End to End.",
  heroValue: "Fast Care. Fair Price. Clear Guidance.",
  trustLine:
    "Healthcare group since 1998 · 200+ hospitals and healthcare providers · 600+ trained medical escorts · English-speaking support",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "contact@example.com",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/000000000000",
  logo: "/images/angel-doctor-logo.png",
};

export const medicalDisclaimer =
  "Angel Doctor provides healthcare coordination, hospital matching, translation support, and local medical escort services. Angel Doctor does not provide medical diagnosis, treatment, prescriptions, procedures, emergency medical services, or guaranteed access to any specific doctor, hospital, or treatment outcome. Medical diagnosis, treatment decisions, prescriptions, procedures, and clinical recommendations are made by licensed healthcare providers.";

export const hospitalAvailabilityDisclaimer =
  "Hospital access and appointment availability depend on the patient's condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.";
