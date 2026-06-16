"use client";

import { useEffect, useRef } from "react";

/**
 * ScrollReveal — IntersectionObserver + fallback timeout.
 * Adds .is-visible to .reveal-on-scroll elements when they enter viewport.
 * Falls back: reveals all after 1.2s. Respects prefers-reduced-motion.
 */
export function ScrollReveal() {
  const fallbackRef = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let revealed = new Set<Element>();

    const reveal = (el: Element) => {
      if (revealed.has(el)) return;
      revealed.add(el);
      el.classList.add("is-visible");
    };

    const observe = () => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      if (elements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              reveal(entry.target);
              observer.unobserve(entry.target);
            }
          }
        },
        { threshold: 0.1, rootMargin: "0px 0px -40px 0px" },
      );

      for (const el of elements) {
        observer.observe(el);
      }

      return observer;
    };

    // Try immediately, retry after hydration delay if needed
    let observer = observe();
    if (!observer) {
      const retry = setTimeout(() => {
        observer = observe();
      }, 300);
      fallbackRef.current = retry;
    }

    // Fallback: reveal all remaining after 1.5s
    const fallback = setTimeout(() => {
      const elements = document.querySelectorAll(".reveal-on-scroll");
      for (const el of elements) {
        reveal(el);
      }
    }, 1500);

    return () => {
      clearTimeout(fallback);
      if (fallbackRef.current) clearTimeout(fallbackRef.current);
      observer?.disconnect();
    };
  }, []);

  return null;
}
