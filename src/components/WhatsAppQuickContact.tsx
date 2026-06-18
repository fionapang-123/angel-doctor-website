"use client";

import { MessageCircle } from "lucide-react";
import { createWhatsAppUrl, siteConfig } from "@/config/site";
import { trackConversionEvent } from "@/lib/conversion";

export function WhatsAppQuickContact() {
  return (
    <a
      href={createWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Chat with Angel Doctor on WhatsApp at ${siteConfig.whatsappNumber}`}
      title="Chat on WhatsApp"
      onClick={() => trackConversionEvent("whatsapp_clicked", { source: "global", location: "floating" })}
      className="fixed bottom-20 right-4 z-40 inline-flex min-h-11 items-center justify-center gap-2 rounded-full border border-primary/20 bg-white/82 px-4 py-3 text-sm font-semibold shadow-[0_14px_34px_rgba(16,24,40,0.14)] backdrop-blur-xl transition hover:scale-[1.03] hover:border-primary/35 hover:bg-white/94 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25 active:scale-[0.97] md:bottom-6"
    >
      <MessageCircle className="size-4 text-primary" />
      <span className="hidden bg-[linear-gradient(135deg,#d81b92_0%,#2664d9_100%)] bg-clip-text text-transparent sm:inline">
        WhatsApp
      </span>
    </a>
  );
}
