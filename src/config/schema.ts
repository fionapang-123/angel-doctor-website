import { CTA } from "@/config/cta";
import { siteConfig } from "@/config/site";
import type { FaqItem, LinkItem, PageContent } from "@/types/page";

type JsonObject = Record<string, unknown>;

const absoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${siteConfig.url}${path === "/" ? "" : path}`;

export function createOrganizationSchema() {
  return {
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    slogan: siteConfig.slogan,
    description: siteConfig.description,
    areaServed: [
      "China",
      "United States",
      "United Kingdom",
      "Canada",
      "Australia",
      "Southeast Asia",
      "Middle East",
    ],
    knowsAbout: [
      "medical travel to China",
      "hospital matching in China",
      "medical escort services",
      "dental care in China",
      "health checkups in China",
      "medical second opinions in China",
      "traditional Chinese medicine recovery",
    ],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: siteConfig.contactEmail,
        availableLanguage: ["English", "Chinese"],
        areaServed: "International",
      },
    ],
  };
}

export function createWebsiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    description:
      "Medical travel coordination, hospital matching, and local medical escort support for international patients seeking healthcare in China.",
    publisher: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: siteConfig.locale,
  };
}

export function createBreadcrumbSchema(items: LinkItem[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.href),
    })),
  };
}

export function createFaqSchema(faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function pagePrimarySchema(page: PageContent) {
  const base = {
    "@id": `${absoluteUrl(page.slug)}#webpage`,
    url: absoluteUrl(page.slug),
    name: page.title,
    description: page.description,
    isPartOf: { "@id": `${siteConfig.url}/#website` },
    about: { "@id": `${siteConfig.url}/#organization` },
    inLanguage: siteConfig.locale,
  };

  if (page.kind === "collection") {
    return { "@type": "CollectionPage", ...base };
  }

  if (page.kind === "article") {
    return {
      "@type": "Article",
      "@id": `${absoluteUrl(page.slug)}#article`,
      headline: page.h1,
      description: page.description,
      author: { "@id": `${siteConfig.url}/#organization` },
      publisher: { "@id": `${siteConfig.url}/#organization` },
      mainEntityOfPage: { "@id": `${absoluteUrl(page.slug)}#webpage` },
      datePublished: page.lastUpdated || "2026-06-15",
      dateModified: page.lastUpdated || "2026-06-15",
      inLanguage: siteConfig.locale,
    };
  }

  if (page.kind === "contact") {
    return { "@type": "ContactPage", ...base };
  }

  if (page.kind === "about") {
    return { "@type": "AboutPage", ...base };
  }

  return { "@type": "WebPage", ...base };
}

function createServiceSchema(page: PageContent) {
  return {
    "@type": "Service",
    "@id": `${absoluteUrl(page.slug)}#service`,
    name: page.h1,
    serviceType: "Medical travel coordination and local medical escort support",
    provider: { "@id": `${siteConfig.url}/#organization` },
    areaServed: {
      "@type": page.slug.includes("/destinations/") ? "City" : "Country",
      name: page.slug.includes("shenzhen")
        ? "Shenzhen"
        : page.slug.includes("guangzhou")
          ? "Guangzhou"
          : page.slug.includes("shanghai")
            ? "Shanghai"
            : "China",
    },
    audience: {
      "@type": "Audience",
      audienceType: "International patients",
    },
    description: page.description,
    offers: {
      "@type": "Offer",
      name: CTA[page.cta].label,
      url: absoluteUrl(CTA[page.cta].href),
      availability: "https://schema.org/InStock",
    },
  };
}

function createItemListSchema(page: PageContent) {
  return {
    "@type": "ItemList",
    "@id": `${absoluteUrl(page.slug)}#itemlist`,
    name: `${page.h1} links`,
    itemListElement: (page.relatedLinks || []).map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      url: absoluteUrl(item.href),
    })),
  };
}

export function createPageSchema(page: PageContent): JsonObject {
  const graph: JsonObject[] = [
    createOrganizationSchema(),
    createWebsiteSchema(),
    pagePrimarySchema(page),
    createBreadcrumbSchema(page.breadcrumbs),
  ];

  if (["service", "howto"].includes(page.kind) || page.slug === "/pricing") {
    graph.push(createServiceSchema(page));
  }

  if ((page.kind === "collection" || page.slug === "/hospital-access") && page.relatedLinks?.length) {
    graph.push(createItemListSchema(page));
  }

  if (page.faqs?.length) {
    graph.push(createFaqSchema(page.faqs));
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}
