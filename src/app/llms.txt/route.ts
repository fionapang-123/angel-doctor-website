import { getPublicRoutes, absoluteSiteUrl } from "@/config/geo";
import { hospitalAvailabilityDisclaimer, medicalDisclaimer, siteConfig } from "@/config/site";

export const dynamic = "force-static";

export function GET() {
  const routes = getPublicRoutes();
  const lines = [
    "# Angel Doctor",
    "",
    "Angel Doctor is a healthcare coordination and medical travel support platform for international patients seeking care in China.",
    "",
    "Core positioning:",
    `- Brand: ${siteConfig.name}`,
    `- Website: ${siteConfig.url}`,
    `- Slogan: ${siteConfig.slogan}`,
    "- Services: hospital and provider matching, appointment coordination, care pathway planning, translation and communication support, trained local medical escorts, pricing guidance, and follow-up coordination where available.",
    "- Treatment areas: dental care, health checkups, medical second opinions, and TCM recovery.",
    "- Destinations: Shenzhen, Guangzhou, Shanghai, Beijing, Chengdu, Chongqing, Hangzhou, Nanjing, Wuhan, Xi'an, and Zhuhai.",
    "",
    "Important medical boundaries:",
    `- ${medicalDisclaimer}`,
    `- ${hospitalAvailabilityDisclaimer}`,
    "",
    "Primary conversion paths:",
    `- Get Your Care Plan: ${absoluteSiteUrl("/get-care-plan")}`,
    `- Book Local Medical Escort: ${absoluteSiteUrl("/book-local-medical-escort")}`,
    "",
    "Canonical routes:",
    ...routes.map((route) => `- ${route.title}: ${absoluteSiteUrl(route.path)} - ${route.description}`),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: {
      "content-type": "text/plain; charset=utf-8",
    },
  });
}
