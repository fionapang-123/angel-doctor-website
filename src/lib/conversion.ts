"use client";

export type ConversionEventName =
  | "cta_opened"
  | "form_started"
  | "form_submitted"
  | "form_failed"
  | "whatsapp_clicked";

type ConversionEventDetail = Record<string, string | number | boolean | null | undefined>;

declare global {
  interface Window {
    dataLayer?: ConversionEventDetail[];
  }
}

export function trackConversionEvent(name: ConversionEventName, detail: ConversionEventDetail = {}) {
  if (typeof window === "undefined") return;

  const payload = {
    event: name,
    ...detail,
  };

  window.dataLayer?.push(payload);
  window.dispatchEvent(new CustomEvent(name, { detail: payload }));
}
