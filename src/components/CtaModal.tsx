"use client";

import { createContext, useCallback, useContext, useEffect, useId, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { ContactForm, EscortForm } from "@/components/forms";
import { trackConversionEvent } from "@/lib/conversion";
import type { CtaKey } from "@/types/page";

/* ─── Context ─── */

type CtaModalCtx = {
  open: (cta: CtaKey) => void;
  close: () => void;
};

const CtaModalContext = createContext<CtaModalCtx>({
  open: () => {},
  close: () => {},
});

export function useCtaModal() {
  return useContext(CtaModalContext);
}

/* ─── Provider + Panel ─── */

export function CtaModalProvider({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<CtaKey | null>(null);
  const titleId = useId();

  const open = useCallback((cta: CtaKey) => {
    setActive(cta);
    trackConversionEvent("cta_opened", { cta });
  }, []);
  const close = useCallback(() => setActive(null), []);

  useEffect(() => {
    if (!active) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [active, close]);

  useEffect(() => {
    if (!active) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [active]);

  return (
    <CtaModalContext.Provider value={{ open, close }}>
      {children}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pb-8 pt-8 sm:pb-10 sm:pt-10"
          role="presentation"
        >
          <button
            aria-label="Close form"
            className="fixed inset-0 cursor-default bg-ink/55 backdrop-blur-sm"
            onClick={close}
            type="button"
          />
          <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="pointer-events-auto relative z-10 max-h-[calc(100vh-4rem)] w-full max-w-lg overflow-y-auto rounded-2xl shadow-elevated ring-1 ring-ink/10"
            role="dialog"
          >
            <button
              onClick={close}
              className="absolute -top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-soft transition hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
              aria-label="Close"
            >
              <X className="size-3.5" />
            </button>

            <div>
              {active === "carePlan" && <ContactForm titleId={titleId} stickySubmit />}
              {active === "escort" && <EscortForm titleId={titleId} stickySubmit />}
            </div>
          </div>
        </div>
      )}
    </CtaModalContext.Provider>
  );
}
