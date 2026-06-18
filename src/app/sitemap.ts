import type { MetadataRoute } from "next";
import { absoluteSiteUrl, getPublicRoutes, getRoutePriority } from "@/config/geo";

export default function sitemap(): MetadataRoute.Sitemap {
  return getPublicRoutes().map((route) => ({
    url: absoluteSiteUrl(route.path),
    lastModified: route.lastModified ? new Date(route.lastModified) : new Date("2026-06-17"),
    changeFrequency: route.path.startsWith("/guides/") ? "monthly" : "weekly",
    priority: getRoutePriority(route.path),
  }));
}
