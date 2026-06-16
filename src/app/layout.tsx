import type { Metadata } from "next";
import type { ReactNode } from "react";
import { CtaModalProvider } from "@/components/CtaModal";
import { ExitIntentListener } from "@/components/ExitIntentListener";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
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
        <CtaModalProvider>
          <ExitIntentListener />
          <ScrollReveal />
          <SiteHeader />
          {children}
          <SiteFooter />
        </CtaModalProvider>
      </body>
    </html>
  );
}
