"use client";

import { createContext, useCallback, useContext, useEffect, useId, useState, type ReactNode } from "react";
import { X } from "lucide-react";
import { ContactForm, EscortForm } from "@/components/forms";
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

  const open = useCallback((cta: CtaKey) => setActive(cta), []);
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

  return (
    <CtaModalContext.Provider value={{ open, close }}>
      {children}

      {active && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto px-4 pb-16 pt-16 sm:pb-20 sm:pt-20 pointer-events-none"
          role="presentation"
        >
          <div
            aria-labelledby={titleId}
            aria-modal="true"
            className="pointer-events-auto relative w-full max-w-lg"
            role="dialog"
          >
            <button
              onClick={close}
              className="absolute -top-3 right-3 z-10 flex size-9 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-soft transition hover:text-foreground focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary/25"
              aria-label="Close"
            >
              <X className="size-3.5" />
            </button>

            <div className="rounded-2xl shadow-elevated ring-1 ring-ink/5">
              {active === "carePlan" && <ContactForm titleId={titleId} />}
              {active === "escort" && <EscortForm titleId={titleId} />}
            </div>
          </div>
        </div>
      )}
    </CtaModalContext.Provider>
  );
}
