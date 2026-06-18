Task completed
- Optimized the lead-capture flow for care plan and medical escort requests.
- Moved the Contact page toward a first-screen conversion layout with the shared care plan form visible in the hero area.
- Reduced care plan form friction by making city and local support optional while keeping contact, treatment, message, and consent required.
- Added WhatsApp and email fallback paths when lead submission fails.
- Added lightweight conversion event hooks for CTA opens, form starts, successful submissions, failed submissions, and WhatsApp clicks.
- Improved CTA modal behavior with scroll lock, outside-click close, mobile-friendly max height, and sticky submit buttons inside the modal.
- Updated mobile sticky CTA behavior so it hides when a lead form is visible or approaching the viewport.

Files changed
- src/app/contact/page.tsx
- src/components/forms.tsx
- src/components/CtaModal.tsx
- src/components/StickyMobileCTA.tsx
- src/components/WhatsAppQuickContact.tsx
- src/app/api/contact/route.ts
- src/app/api/escort/route.ts
- src/lib/conversion.ts
- tasks/2026-06-17-lead-flow-optimization-plan.md
- tasks/2026-06-17-lead-flow-optimization-done.md

Routes affected
- /contact
- /api/contact
- /api/escort
- Global CTA modal behavior across pages using CTAButton
- Mobile sticky CTA behavior across eligible pages

Components created or modified
- Modified ContactForm and EscortForm
- Modified CtaModalProvider
- Modified StickyMobileCTA
- Modified WhatsAppQuickContact
- Created shared conversion tracking helper

SEO / GEO changes
- No SEO copy, metadata, or GEO page structure changes.
- Contact page still uses existing page schema source and FAQ data.

Schema changes
- No schema rule changes.
- No structured data fields were added or removed.

Build result
- npm run build passed.
- Production preview was checked at /contact on desktop and mobile widths.
- CTA modal open behavior was checked from the homepage.

Known issues
- In this sandbox, next dev showed EMFILE watcher warnings and returned 404 during verification. The production build and next start preview worked correctly.
- No real lead submission was performed during browser verification to avoid sending test contact data.

Next recommended task
- Add a lightweight thank-you/next-step state or dedicated confirmation route for analytics attribution once Phase 2 lead storage is connected.
