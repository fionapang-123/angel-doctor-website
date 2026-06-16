# Hermes Audit Fixes Plan

## Task

Implement the highest-priority fixes from `docs/HERMES_AUDIT_REPORT.md` without adding Phase 2 backend features.

## Approved Scope

- Fix production build failure caused by remote Google Font fetching.
- Fix mobile header overflow and cramped CTA/menu layout.
- Add missing route-specific metadata and JSON-LD schema to major custom pages.
- Improve CTA modal accessibility while preserving the existing lightweight lead form.
- Standardize visible CTA wording to approved labels.
- Fix GEO/AI footer domain consistency.
- Run `npm run build`.
- Validate key rendered pages at desktop and mobile sizes.

## Out of Scope

- No Supabase.
- No Stripe webhook.
- No user accounts.
- No deployment.
- No GitHub push.
- No fake hospitals, doctors, prices, testimonials, reviews, or ratings.

## Routes Affected

- `/`
- `/treatments`
- `/destinations`
- `/hospital-access`
- `/pricing`
- `/contact`
- `/book-local-medical-escort`

## Expected Verification

- `npm run build` succeeds.
- Mobile homepage has no horizontal overflow at 390px and 375px widths.
- Primary CTA remains visible above the fold on mobile.
- CTA modal exposes dialog semantics and opens the correct form.
- Major custom pages emit JSON-LD.
- Major custom pages have route-specific metadata.
