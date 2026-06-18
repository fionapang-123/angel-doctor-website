# Lint Unescaped Entities Fix Done

## Task completed

Fixed `react/no-unescaped-entities` lint errors by escaping apostrophes in JSX text.

## Files changed

- `src/app/about/page.tsx`
- `src/app/ai-summary/page.tsx`
- `src/app/destinations/page.tsx`
- `src/app/hospital-access/page.tsx`
- `src/app/why-angel-doctor/page.tsx`
- `tasks/2026-06-17-lint-unescaped-entities-fix-plan.md`
- `tasks/2026-06-17-lint-unescaped-entities-fix-done.md`

## Routes affected

- `/about`
- `/ai-summary`
- `/destinations`
- `/hospital-access`
- `/why-angel-doctor`

## Components created or modified

- No shared components were created or modified.

## SEO / GEO changes

- No SEO or GEO content changes.
- Visible text meaning remains unchanged.

## Schema changes

- No schema changes.

## Build result

- `npm run lint` passed.
- `npm run build` passed after rerunning once. The first build attempt was blocked by a temporary Next build lock, then the rerun completed successfully.

## Known issues

- Existing Phase 1 Supabase concern remains unchanged.
- Local `next start` port binding issue from the previous audit remains unchanged.

## Next recommended task

Review whether Supabase lead storage should be removed or isolated until Phase 2.
