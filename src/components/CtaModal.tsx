"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
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

  const open = useCallback((cta: CtaKey) => setActive(cta), []);
  const close = useCallback(() => setActive(null), []);

  return (
    <CtaModalContext.Provider value={{ open, close }}>
      {children}

      {active && (
        <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto pt-20 pb-20 pointer-events-none">
          {/* Panel — only this is interactive */}
          <div className="pointer-events-auto relative w-full max-w-lg px-4">
            <button
              onClick={close}
              className="absolute -top-1 right-6 z-10 flex size-8 items-center justify-center rounded-full border border-line bg-surface text-muted shadow-soft transition hover:text-foreground"
              aria-label="Close"
            >
              <X className="size-3.5" />
            </button>

            <div className="rounded-2xl shadow-elevated ring-1 ring-ink/5">
              {active === "carePlan" && <ContactForm />}
              {active === "escort" && <EscortForm />}
            </div>
          </div>
        </div>
      )}
    </CtaModalContext.Provider>
  );
}
