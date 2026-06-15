import { CTAButton } from "@/components/CTAButton";
import type { PageContent } from "@/types/page";

const stickyEligibleKinds = new Set(["webpage", "collection", "service", "article", "contact", "about", "howto"]);

export function StickyMobileCTA({ page }: { page: PageContent }) {
  if (page.slug.startsWith("/legal/") || !stickyEligibleKinds.has(page.kind)) {
    return null;
  }

  return (
    <div className="sticky bottom-0 z-30 border-t border-line/60 bg-white/92 p-3 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 md:hidden">
      <CTAButton cta={page.cta} className="w-full" />
    </div>
  );
}
