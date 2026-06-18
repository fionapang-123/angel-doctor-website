import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import type { PageContent } from "@/types/page";

type MetadataPage = Pick<PageContent, "slug" | "title" | "description">;

const normalizePath = (path: string) => {
  if (path === "/") return "";
  return path.startsWith("/") ? path : `/${path}`;
};

export function createMetadata(page: MetadataPage): Metadata {
  const path = normalizePath(page.slug);
  return {
    title: page.title,
    description: page.description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `${siteConfig.url}${path}`,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "website",
    },
  };
}
