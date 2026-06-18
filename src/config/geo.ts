import { siteConfig } from "@/config/site";
import { pages } from "@/data/pages";

export type PublicRoute = {
  path: string;
  title: string;
  description: string;
  lastModified?: string;
};

const manualRoutes: PublicRoute[] = [
  {
    path: "/ai-summary",
    title: "AI Summary for Angel Doctor",
    description:
      "Machine-friendly overview of Angel Doctor's positioning, services, boundaries, and canonical website routes.",
    lastModified: "2026-06-17",
  },
  {
    path: "/llms.txt",
    title: "llms.txt for Angel Doctor",
    description:
      "Plain text AI and LLM reference file for Angel Doctor's positioning, services, boundaries, and canonical routes.",
    lastModified: "2026-06-17",
  },
  {
    path: "/book-local-medical-escort",
    title: "Book Local Medical Escort in China",
    description:
      "Request non-clinical local medical escort support for hospital and clinic visits in China.",
    lastModified: "2026-06-17",
  },
];

const normalizePath = (path: string) => (path === "/" ? "/" : `/${path.replace(/^\/+/, "")}`);

export function absoluteSiteUrl(path: string) {
  const normalized = normalizePath(path);
  return `${siteConfig.url}${normalized === "/" ? "" : normalized}`;
}

export function getPublicRoutes(): PublicRoute[] {
  const routeMap = new Map<string, PublicRoute>();

  Object.values(pages).forEach((page) => {
    routeMap.set(normalizePath(page.slug), {
      path: normalizePath(page.slug),
      title: page.title,
      description: page.description,
      lastModified: page.lastUpdated,
    });
  });

  manualRoutes.forEach((route) => {
    routeMap.set(normalizePath(route.path), {
      ...route,
      path: normalizePath(route.path),
    });
  });

  return Array.from(routeMap.values()).sort((a, b) => {
    if (a.path === "/") return -1;
    if (b.path === "/") return 1;
    return a.path.localeCompare(b.path);
  });
}

export function getRoutePriority(path: string) {
  if (path === "/") return 1;
  if (["/treatments", "/destinations", "/pricing"].includes(path)) return 0.9;
  if (path.startsWith("/treatments/")) return 0.88;
  if (path.startsWith("/destinations/")) return 0.85;
  if (path.startsWith("/guides/")) return 0.8;
  if (["/ai-summary", "/llms.txt", "/hospital-access", "/why-angel-doctor"].includes(path)) return 0.75;
  if (["/contact", "/get-care-plan", "/book-local-medical-escort"].includes(path)) return 0.7;
  if (path.startsWith("/legal/")) return 0.3;
  return 0.6;
}
