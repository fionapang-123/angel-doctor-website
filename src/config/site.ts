const defaultSiteUrl = "https://angel-doctor-global.vercel.app";
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;
const isLocalSiteUrl = configuredSiteUrl
  ? /^https?:\/\/(localhost|127\.0\.0\.1|0\.0\.0\.0)(:\d+)?\/?$/.test(configuredSiteUrl)
  : false;

export const siteConfig = {
  name: "Angel Doctor",
  url: configuredSiteUrl && !(process.env.NODE_ENV === "production" && isLocalSiteUrl)
    ? configuredSiteUrl
    : defaultSiteUrl,
  locale: process.env.NEXT_PUBLIC_SITE_LOCALE || "en",
  description:
    "Angel Doctor helps international patients access trusted healthcare in China through hospital and provider matching, transparent coordination, and trained local medical escorts.",
  slogan: "China Healthcare, Guided End to End.",
  heroValue: "Efficient care. Fair price. Clear guidance.",
  trustLine:
    "Healthcare group since 1998 · 200+ hospitals and healthcare providers · 600+ trained medical escorts · English-speaking support",
  contactEmail: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "marketing@jumper-medical.com",
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "+86 185 6670 0732",
  whatsappUrl: process.env.NEXT_PUBLIC_WHATSAPP_URL || "https://wa.me/8618566700732",
  whatsappDefaultMessage:
    "Hi Angel Doctor, I would like help understanding care options in China.",
  logo: "/images/angel-doctor-logo.png",
};

export function createWhatsAppUrl(message = siteConfig.whatsappDefaultMessage) {
  const separator = siteConfig.whatsappUrl.includes("?") ? "&" : "?";
  return `${siteConfig.whatsappUrl}${separator}text=${encodeURIComponent(message)}`;
}

export const medicalDisclaimer =
  "Angel Doctor provides healthcare coordination, hospital matching, translation support, and local medical escort services. Angel Doctor does not provide medical diagnosis, treatment, prescriptions, procedures, emergency medical services, or guaranteed access to any specific doctor, hospital, or treatment outcome. Medical diagnosis, treatment decisions, prescriptions, procedures, and clinical recommendations are made by licensed healthcare providers.";

export const hospitalAvailabilityDisclaimer =
  "Hospital access and appointment availability depend on the patient's condition, department capacity, doctor schedule, medical record review, city preference, timeline, and provider confirmation.";
