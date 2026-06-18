"use client";

import { useEffect, useState } from "react";
import { CTAButton } from "@/components/CTAButton";
import type { CtaKey, PageContent } from "@/types/page";

const stickyEligibleKinds = new Set(["webpage", "collection", "service", "article", "contact", "about", "howto"]);

type StickyMobileCTAProps = {
  page: Pick<PageContent, "slug" | "cta"> & Partial<Pick<PageContent, "kind">>;
  cta?: CtaKey;
};

export function StickyMobileCTA({ page, cta }: StickyMobileCTAProps) {
  const [hideForForm, setHideForForm] = useState(false);
  const [pastHero, setPastHero] = useState(page.slug !== "/");

  useEffect(() => {
    const forms = Array.from(document.querySelectorAll("[data-lead-form]"));
    const submitButtons = Array.from(document.querySelectorAll("[data-lead-form] button[type='submit']"));
    if (forms.length === 0 && submitButtons.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        setHideForForm(() => {
          const activeElement = document.activeElement;
          const formFocused = forms.some((form) => activeElement instanceof Node && form.contains(activeElement));
          return formFocused || entries.some((entry) => entry.isIntersecting);
        });
      },
      { rootMargin: "0px 0px 72px 0px", threshold: 0 }
    );

    const handleFocusIn = () => setHideForForm(true);
    const handleFocusOut = () => {
      window.setTimeout(() => {
        const activeElement = document.activeElement;
        setHideForForm(forms.some((form) => activeElement instanceof Node && form.contains(activeElement)));
      }, 0);
    };

    forms.forEach((form) => observer.observe(form));
    submitButtons.forEach((button) => observer.observe(button));
    forms.forEach((form) => {
      form.addEventListener("focusin", handleFocusIn);
      form.addEventListener("focusout", handleFocusOut);
    });

    return () => {
      observer.disconnect();
      forms.forEach((form) => {
        form.removeEventListener("focusin", handleFocusIn);
        form.removeEventListener("focusout", handleFocusOut);
      });
    };
  }, []);

  useEffect(() => {
    if (page.slug !== "/") return;

    const updatePastHero = () => {
      const threshold = Math.max(620, window.innerHeight * 0.9);
      setPastHero(window.scrollY > threshold);
    };

    updatePastHero();
    window.addEventListener("scroll", updatePastHero, { passive: true });
    window.addEventListener("resize", updatePastHero);
    return () => {
      window.removeEventListener("scroll", updatePastHero);
      window.removeEventListener("resize", updatePastHero);
    };
  }, [page.slug]);

  const isEligible = page.kind ? stickyEligibleKinds.has(page.kind) : true;

  if (!pastHero || hideForForm || page.slug.startsWith("/legal/") || !isEligible) {
    return null;
  }

  return (
    <div className="sticky bottom-0 z-30 border-t border-line/60 bg-white/92 p-3 backdrop-blur-xl supports-[backdrop-filter]:bg-white/80 md:hidden">
      <CTAButton cta={cta ?? page.cta} className="w-full" />
    </div>
  );
}
