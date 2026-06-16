"use client";

import { useEffect, useRef } from "react";
import { useCtaModal } from "@/components/CtaModal";

/**
 * Listens for mouse leaving the viewport (exit intent) and opens the
 * care plan CTA modal. Fires at most once per browser session.
 */
export function ExitIntentListener() {
  const { open } = useCtaModal();
  const fired = useRef(false);

  useEffect(() => {
    // Only fire once per session
    if (typeof window !== "undefined" && sessionStorage.getItem("exit_intent_fired") === "1") {
      return;
    }

    const handleMouseLeave = (e: MouseEvent) => {
      // Only trigger when mouse leaves through the TOP of the page
      if (e.clientY <= 0 && !fired.current) {
        fired.current = true;
        sessionStorage.setItem("exit_intent_fired", "1");
        open("carePlan");
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, [open]);

  // Renders nothing — purely behavioral
  return null;
}
