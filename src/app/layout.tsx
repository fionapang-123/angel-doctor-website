import type { Metadata } from "next";
import Script from "next/script";
import type { ReactNode } from "react";
import { CtaModalProvider } from "@/components/CtaModal";
import { ExitIntentListener } from "@/components/ExitIntentListener";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { WhatsAppQuickContact } from "@/components/WhatsAppQuickContact";
import { siteConfig } from "@/config/site";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Angel Doctor | Medical Travel to China",
    template: "%s",
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Script id="site-header-scroll-state" strategy="beforeInteractive">
          {`
            (function () {
              var root = document.documentElement;
              var frame = null;
              function updateHeader() {
                var threshold = Math.max(420, window.innerHeight - 80);
                if (window.scrollY >= threshold) {
                  root.setAttribute('data-site-header', 'sticky');
                } else {
                  root.removeAttribute('data-site-header');
                }
              }
              function scheduleUpdate() {
                if (frame !== null) return;
                frame = window.requestAnimationFrame(function () {
                  frame = null;
                  updateHeader();
                });
              }
              updateHeader();
              window.addEventListener('scroll', scheduleUpdate, { passive: true });
              window.addEventListener('resize', scheduleUpdate);
              document.addEventListener('scroll', scheduleUpdate, { passive: true });
            })();
          `}
        </Script>
        <CtaModalProvider>
          <ExitIntentListener />
          <ScrollReveal />
          <SiteHeader />
          {children}
          <WhatsAppQuickContact />
          <SiteFooter />
        </CtaModalProvider>
      </body>
    </html>
  );
}
