# 02-visual-design-system — DONE

**Task completed**: Refactored visual design system across all reusable components and pages for a premium, calm, trustworthy, and medical-but-not-cold feel.

**Date**: June 15, 2026

---

## Files Changed

### Core Styles
- **`src/app/globals.css`** — Added subtle radial-gradient body background (blush + mist atmosphere, fixed attachment). Refined `::selection` to primary-tinted.

### Reusable Components (refactored)
- **`src/components/HeroSection.tsx`** — Uses custom `text-hero-mobile` / `text-hero` font sizes from tailwind config. Refined spacing (pb-14/pb-20, pt-12 on desktop). Better Quick Answer card with decorative accent dots, improved typography, subtle ring on trust box.
- **`src/components/TrustBar.tsx`** — Subtle vertical dividers between items on desktop. Refined background (`bg-mist/40`), icon opacity, flex-based layout.
- **`src/components/CardGrid.tsx`** — Cleaner cards (`mb-4` → `mb-4 11px icons`, `mt-5` learn-more link). Better hover transitions (`border-primary/15`, `shadow-card`, `-translate-y-0.5`). Consistent `transition-all duration-300`.
- **`src/components/FAQBlock.tsx`** — Switched from raw `<details>/<summary>` to Accordion UI components (`Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent`). Better heading (larger, Sora font, "Frequently Asked Questions"). More generous spacing.
- **`src/components/CTASection.tsx`** — More premium: constrained max-w-3xl, rounded decorative accents, Sora heading, better CTA emphasis, `pb-20` section spacing.
- **`src/components/SiteHeader.tsx`** — Refined mobile hamburger (rounded-xl hover, wider 72rem panel). Better backdrop-blur (`bg-white/92`, `supports-[backdrop-filter]`). Slightly transparent border. Smoother dropdown transitions.
- **`src/components/SiteFooter.tsx`** — Better typography contrast (`text-white/80` headers, `text-white/50` links). More generous padding (`py-16`, `gap-12` columns). Refined CTA button (rounded-xl, bg-white hover:bg-blush).
- **`src/components/CTAButton.tsx`** — Added `ArrowRight` icon on primary variant. Added `active:scale-[0.98]` press feedback. Wider padding (`px-6`). Uses `text-white` instead of `text-primary-foreground` for consistency.
- **`src/components/forms.tsx`** — Replaced inline SVG checkmark with `CheckCircle` Lucide icon. Better confirmation cards (larger icon container 16px, Sora headings, `gap-5`). Refined consent checkbox (`cursor-pointer`, `shrink-0`). Consistent `border-primary/10` cards.
- **`src/components/StickyMobileCTA.tsx`** — Better backdrop-blur (`bg-white/92`, `backdrop-blur-xl`), `border-line/60`.
- **`src/components/DisclaimerBlock.tsx`** — Refined padding and background (`bg-mist/50`, `px-6`).

### UI Components
- **`src/components/ui/card.tsx`** — Changed default shadow from `shadow-card` to `shadow-soft` for lighter, cleaner cards.

### Page Components
- **`src/components/HomePage.tsx`** — Hero matches HeroSection improvements (custom font sizes, radial gradient, better spacing). All 12 sections refined:
  - Section labels changed ("Our Promise" → "Guided Care", "Differentiation" → "Why Angel Doctor")
  - All h2 headings now use `font-sora` with consistent `text-3xl sm:text-4xl` sizing
  - Body text refined to `text-[15px] leading-7` for better readability
  - Cards: `transition-all duration-300`, `hover:border-primary/15`, `hover:shadow-card`, `group-hover:text-primary-strong`
  - Icon containers: `ring-1 ring-primary/5` for subtle definition
  - Section spacing: `py-20` with consistent `mt-12`/`mt-14` card grids
  - Background sections: `bg-mist/40` instead of `bg-mist/50`
  - Step numbers: `shadow-button` for subtle depth
  - All learn-more links: `transition-colors hover:text-primary-strong` (removed underlines)
  - ArrowRight icons: `transition-transform group-hover:translate-x-0.5`
  - "Free · 2 minutes · No commitment" text: `text-muted/70` for subtlety
- **`src/components/PageTemplate.tsx`** — Section heading now uses `font-sora` for consistency.
- **`src/components/HospitalCard.tsx`** — Updated hover to `border-primary/15 hover:shadow-card` to match new card style.

---

## Design Improvements Summary

1. **Hero hierarchy** — Custom `hero-mobile`/`hero` font sizes create dramatic scale difference between desktop and mobile. Radial-gradient instead of linear gradient for softer atmosphere.

2. **Cards cleaner** — Consistent `shadow-soft` base, `hover:shadow-card` on hover. Icons get `ring-1 ring-primary/5` for subtle definition. Transition: `duration-300` with `-translate-y-1` lift.

3. **CTA consistency** — All primary CTA buttons now include `ArrowRight` icon. Press feedback (`active:scale-[0.98]`). Consistent `px-6 py-3` sizing.

4. **Mobile layout** — Better sticky header/footer CTA (backdrop-blur-xl). Mobile hamburger wider (72rem) with better spacing. Responsive hero font scaling.

5. **Typography** — Sora used consistently for h1-h2 across all pages. Body text refined to `text-[15px]` for better readability on large screens, `text-sm` for body content.

---

## Build Result
✅ **PASS** — `npm run build` — 36 routes, zero errors, zero warnings. Next.js 16.2.9 (Turbopack).

---

## Known Issues
- Fixed: FAQBlock was blank on all pages except homepage due to key mismatch (`{q, a}` vs `{question, answer}`). Now handles both patterns.
- None other.

---

## Next Recommended Task
- 03-check-responsive-mobile — test all 36 routes on mobile viewports.
- 04-accessibility-audit — run Lighthouse, check focus states, aria labels.
