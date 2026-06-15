export type CtaKey = "carePlan" | "escort";

export type FaqItem = {
  question: string;
  answer: string;
};

export type LinkItem = {
  label: string;
  href: string;
};

export type CardItem = {
  title: string;
  body: string;
  href?: string;
};

export type PageKind =
  | "webpage"
  | "collection"
  | "service"
  | "article"
  | "contact"
  | "about"
  | "howto";

export type PageContent = {
  slug: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  kind: PageKind;
  cta: CtaKey;
  secondaryCta?: CtaKey;
  breadcrumbs: LinkItem[];
  quickAnswer?: string;
  sections: CardItem[];
  relatedLinks?: LinkItem[];
  faqs?: FaqItem[];
  disclaimer?: "medical" | "hospital" | "legal" | "none";
  lastUpdated?: string;
};
