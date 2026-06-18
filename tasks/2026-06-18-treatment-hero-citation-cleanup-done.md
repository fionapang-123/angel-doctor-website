# Treatment hero citation cleanup done

## Task completed

Removed academic-style inline citation markers from treatment hero copy while preserving references and GEO citation support elsewhere.

## Files changed

- `src/app/treatments/health-checkup-china/page.tsx`
- `src/app/treatments/medical-second-opinion-china/page.tsx`
- `tasks/2026-06-18-treatment-hero-citation-cleanup-plan.md`
- `tasks/2026-06-18-treatment-hero-citation-cleanup-done.md`

## Routes affected

- `/treatments/health-checkup-china`
- `/treatments/medical-second-opinion-china`

## Components created or modified

- No components created.
- Updated treatment page data hero copy.

## SEO / GEO changes

- Removed `[1]` and `[2]` style citations from hero paragraphs.
- Kept supporting reference sections and structured citation support intact for GEO.
- Updated hero wording to sound less academic and less AI-generated.

## Schema changes

- No schema system changes.
- Page metadata now uses cleaner hero descriptions because `treatmentPageToContent` derives page description from the hero copy.

## Build result

- `npm run build` passed.

## Known issues

- Some lower-page educational sections still include inline citations. This is intentional for evidence-heavy body content.

## Next recommended task

Review other treatment body sections for overly academic or AI-like phrasing, while keeping references available near the bottom of each page.
