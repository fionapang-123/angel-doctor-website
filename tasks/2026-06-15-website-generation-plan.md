# Website Generation Plan — Angel Doctor Phase 1

**Date:** 2026-06-15  
**Task:** Generate the full Angel Doctor GEO-first website based on project docs.

## Scope
Build all Phase 1 frontend pages as specified in GOAL.md, PROJECT_BRIEF.md, and the docs under `/docs/website/`.

## Approach
1. Read all project docs (AGENTS.md, GOAL.md, PROJECT_BRIEF.md, docs/website/*)
2. Audit existing codebase structure (Next.js App Router, TypeScript, Tailwind CSS)
3. Verify page data completeness in `src/data/pages.ts`
4. Verify all stub pages use `getPage()` with correct slugs
5. Verify all components, config, and types are complete
6. Run `npm run build` to confirm zero errors

## Pages to Verify (25 routes)
- Home: /
- Treatments hub + 4 detail pages
- Destinations hub + 3 city pages
- Guides hub + 2 guide pages
- Core pages: /how-it-works, /pricing, /why-angel-doctor, /hospital-access, /trust-and-safety
- CTA forms: /get-care-plan, /book-local-medical-escort
- Contact: /contact, /about
- Legal: /legal/medical-disclaimer, /legal/privacy-policy, /legal/terms

## Decisions
- Content data centralised in `src/data/pages.ts` (574 lines, all 25 pages defined)
- Components are generic and reusable (no dental-specific components)
- CTA system uses only "Get Your Care Plan" and "Book Local Medical Escort"
- All schema JSON-LD generated programmatically from page data
- Mobile-first with sticky bottom CTA
- No fake data anywhere

## Build Command
```bash
npm run build
```
