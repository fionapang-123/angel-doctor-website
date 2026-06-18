Task plan
- Improve mobile conversion flow and readability across key Angel Doctor pages.

Approved scope
- Make primary CTA visible above the fold on mobile for Contact, Book Local Medical Escort, Treatments, and Pricing.
- Keep mobile sticky CTA available on key conversion pages without blocking active form work.
- Improve mobile form flow so users are guided to the submit action without losing context.
- Replace mobile horizontal tables on Destinations and Why Angel Doctor with stacked card alternatives while keeping desktop tables.
- Shorten or split early long mobile paragraphs where they hurt scanning.
- Preserve the same URLs and same content across mobile and desktop.
- Use only approved CTA labels: Get Your Care Plan and Book Local Medical Escort.

Files expected to change
- src/components/StickyMobileCTA.tsx
- src/app/contact/page.tsx
- src/app/book-local-medical-escort/page.tsx
- src/app/treatments/page.tsx
- src/components/PricingPage.tsx
- src/app/destinations/page.tsx
- src/app/why-angel-doctor/page.tsx
- tasks/2026-06-17-mobile-flow-polish-done.md

Verification
- Run npm run build.
- Check /contact, /book-local-medical-escort, /treatments, /pricing, /destinations, and /why-angel-doctor at 375px, 390px, 768px, 1024px, and desktop width where feasible.

Out of scope
- No separate mobile pages.
- No new CTA labels.
- No fake hospitals, doctors, prices, testimonials, ratings, or guaranteed outcomes.
- No deployment or push.
