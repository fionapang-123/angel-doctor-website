# Project Foundation Plan for Angel Doctor Phase 1

## Summary

Set up the Angel Doctor Phase 1 frontend foundation as a new Next.js App Router project in the existing repository.

Current-state findings:

- `package.json` does not exist.
- There is no `src/`, `app/`, `components/`, `public/`, or Tailwind/Next config yet.
- Existing files are project docs, website specs, assets, data CSVs, `.env.example`, `.gitignore`, and prior task notes.
- Phase 1 remains frontend-only: no Supabase client wiring, no Stripe integration, no user accounts, no webhook, no backend logic.

## Files to Create

- Next.js foundation: `package.json`, `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `postcss.config.js`, `src/app/layout.tsx`, `src/app/page.tsx`, `src/app/globals.css`.
- Shared foundation: `src/config/site.ts`, `src/config/cta.ts`, `src/config/navigation.ts`, `src/config/schema.ts`.
- Components: header, footer, CTA button/link, trust bar, breadcrumb, FAQ block, medical disclaimer block, schema JSON-LD renderer, page section primitives, card primitives, contact/escort form shell components.
- Routes: homepage plus all Phase 1 required routes from `GOAL.md`, including treatment, destination, guide, trust/legal, contact, `/get-care-plan`, and `/book-local-medical-escort`.
- Static asset setup: copy the approved Angel Doctor logo asset into `public/` with a safe filename. Do not use unapproved hospital or doctor imagery.

## Files to Modify

- Keep `.env.example` and `.gitignore` as existing foundation files; update only if implementation needs additional public placeholder variables.
- Do not modify application logic for Supabase, Stripe, analytics, or form providers in this foundation task.
- Do not modify source docs except this task plan and the task done file.

## Components to Build

- `SiteHeader`: main nav exactly `Home`, `Treatments`, `Destinations`, `How It Works`, `Pricing`, `Why Angel Doctor`, `Guides`, `Contact`.
- `SiteFooter`: footer links exactly `About Angel Doctor`, `Hospital Access`, `Trust & Safety`, `Medical Disclaimer`, `Privacy Policy`, `Terms`, `Contact`.
- `CTAButton`: only supports `Get Your Care Plan` and `Book Local Medical Escort` from centralized CTA config.
- `SchemaJsonLd`: renders JSON-LD only, using reusable schema helpers.
- `ContactForm` and `EscortForm`: static frontend forms only, with accessible labels and no required medical upload.

## Routes to Create

- `/`
- `/treatments`
- `/treatments/dental-care-china`
- `/treatments/health-checkup-china`
- `/treatments/medical-second-opinion-china`
- `/treatments/tcm-recovery-china`
- `/destinations`
- `/destinations/shenzhen-medical-travel`
- `/destinations/guangzhou-medical-travel`
- `/destinations/shanghai-medical-travel`
- `/guides`
- `/guides/dental-implants-china-cost`
- `/guides/can-foreigners-see-doctors-in-china`
- `/how-it-works`
- `/pricing`
- `/why-angel-doctor`
- `/hospital-access`
- `/trust-and-safety`
- `/get-care-plan`
- `/book-local-medical-escort`
- `/contact`
- `/legal/medical-disclaimer`
- `/legal/privacy-policy`
- `/legal/terms`

## SEO / GEO Requirements

- Every major route must include a unique H1, title, meta description, canonical URL, internal links, breadcrumbs where appropriate, and visible medical boundary language where relevant.
- JSON-LD must use Schema.org JSON-LD only, match visible content exactly, and never mark Angel Doctor as a hospital or physician.
- Required schema patterns: Organization/WebSite/WebPage for home, CollectionPage/ItemList for hubs, Service for treatment/destination/pricing/hospital access pages, Article for guides, ContactPage for contact, BreadcrumbList everywhere appropriate, FAQPage only when visible FAQ exists.
- Do not add fake hospitals, doctors, prices, testimonials, reviews, ratings, aggregate ratings, guaranteed appointments, guaranteed outcomes, or unsupported "best/top" claims.

## Mobile Requirements

- Use the same URL and content on mobile and desktop.
- Use single-column mobile layouts by default and multi-column layouts only from tablet/desktop breakpoints.
- Keep the primary CTA above the fold on mobile.
- Use native accordion behavior for FAQ content on mobile-friendly layouts.
- Avoid long paragraphs on mobile.
- Test at 375px, 390px, 768px, 1024px, and desktop width.
- Key conversion pages should include a mobile sticky bottom CTA using only approved CTA labels.

## Build Command

```bash
npm run build
```

## Acceptance Criteria

- `package.json` exists and includes at least `dev`, `build`, `start`, and `lint` scripts.
- `npm run build` completes successfully.
- All listed Phase 1 routes render without runtime errors.
- Header and footer navigation match approved labels and placement rules.
- CTA labels are centralized and limited to the approved two primary CTA paths.
- Forms are frontend-only and do not require medical records, passport data, accounts, Supabase, Stripe, or webhooks.
- Schema is valid JSON-LD and does not include fake or unsupported medical/business claims.
- Mobile layouts avoid overflow and keep primary CTAs visible.
- A done file is created under `/tasks` with files changed, routes affected, components created, SEO/GEO changes, schema changes, build result, known issues, and next recommended task.

## Assumptions

- The foundation implementation should scaffold a new Next.js App Router + TypeScript + Tailwind CSS app in the existing repo, not create a nested app directory.
- Initial route pages may use compliant foundation content and reusable page templates; full long-form treatment/destination/guide copy can be expanded in later approved tasks.
- Phase 2 placeholders may remain in `.env.example`, but no Supabase or Stripe runtime code should be added during this foundation task.
