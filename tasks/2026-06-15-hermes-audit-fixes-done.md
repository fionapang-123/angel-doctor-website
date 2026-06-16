# Hermes Audit Fixes Done

## Task completed

Implemented the highest-priority fixes from `docs/HERMES_AUDIT_REPORT.md` for build reliability, mobile header behavior, CTA consistency, CTA modal accessibility, and SEO/GEO metadata/schema coverage.

## Files changed

- `package.json`
- `next-env.d.ts`
- `src/app/layout.tsx`
- `src/app/globals.css`
- `src/app/treatments/page.tsx`
- `src/app/destinations/page.tsx`
- `src/app/hospital-access/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/book-local-medical-escort/page.tsx`
- `src/app/about/page.tsx`
- `src/app/legal/privacy-policy/page.tsx`
- `src/components/CtaModal.tsx`
- `src/components/BrandMark.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/SiteFooter.tsx`
- `src/components/forms.tsx`
- `src/components/HomePage.tsx`
- `src/components/PricingPage.tsx`
- `src/components/DestinationCityPage.tsx`
- `src/components/TreatmentPage.tsx`
- `tasks/2026-06-15-hermes-audit-fixes-plan.md`
- `tsconfig.tsbuildinfo`

## Routes affected

- `/`
- `/treatments`
- `/destinations`
- `/hospital-access`
- `/pricing`
- `/contact`
- `/book-local-medical-escort`
- Supporting text-only lint cleanup touched existing About, legal, treatment, destination city, and homepage surfaces.

## Components created or modified

- Modified `BrandMark` and `SiteHeader` to prevent mobile overflow and reduce mobile header height by using a smaller responsive compact logo, hiding the header CTA below `sm`, preserving the hamburger, and constraining mobile menu width to the viewport.
- Modified `CtaModal` to add dialog semantics, `aria-modal`, title linkage, backdrop, Escape close, and backdrop click close.
- Modified `ContactForm` and `EscortForm` to accept modal title IDs for accessible dialog labelling.
- Modified `SiteFooter` to use the configured Angel Doctor domain in AI summary prompts.
- Modified `PricingPage` to emit JSON-LD matching visible pricing FAQ content.

## SEO / GEO changes

- Added route-specific metadata to major custom pages that previously used default metadata.
- Standardized AI/GEO footer prompts from the old `angeldoc.com` reference to `siteConfig.url`.
- Preserved GEO-first route structure for treatments, destinations, hospital access, pricing, contact, and escort conversion.

## Schema changes

- Added JSON-LD output to:
  - `/treatments`
  - `/destinations`
  - `/hospital-access`
  - `/pricing`
  - `/contact`
  - `/book-local-medical-escort`
- Verified pre-rendered HTML includes JSON-LD and route-specific title/description for the sampled routes.
- Verified pre-rendered HTML includes the compact logo class, viewport-constrained mobile menu class, and no old `angeldoc.com` footer prompt reference.

## Build result

- `npm run lint`: passed.
- `npm run build`: passed.
- `npm run typecheck`: passed.

Note: `npm run build` now uses `next build --webpack` because Turbopack attempted to bind a local port in this sandbox and failed with `EPERM`. The original Google Fonts build failure was removed by replacing remote `next/font/google` usage with local system font variables.

## Known issues

- Live browser verification on `127.0.0.1:3001` could not be completed in this tool session because the sandbox rejected local port binding with `listen EPERM` on repeated attempts, even though port `3001` was free.
- Mobile header changes were verified through source/build output and successful production build, but not through a live screenshot in this session.
- Trust claims such as 1998, 200+ providers, 600+ escorts, 48 hospitals, and 11 cities still need business/legal source verification before public launch.

## Next recommended task

Run a live browser QA pass outside the current port-restricted tool environment at `http://127.0.0.1:3001`, checking mobile widths 375px and 390px, CTA modal keyboard behavior, and the homepage/header visual layout.
