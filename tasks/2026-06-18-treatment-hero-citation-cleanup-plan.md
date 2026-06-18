# Treatment hero citation cleanup plan

## Goal

Remove academic-style inline citation markers from treatment page hero copy while preserving GEO evidence elsewhere on the page.

## Scope

- Clean hero copy on `/treatments/health-checkup-china`.
- Clean hero copy on `/treatments/medical-second-opinion-china`.
- Keep references, guide citations, and schema citation support intact.

## Routes affected

- `/treatments/health-checkup-china`
- `/treatments/medical-second-opinion-china`

## Out of scope

- Removing references from long-form body sections.
- Changing guide articles.
- Changing claims, prices, or hospital data.

## Verification

- Run `npm run build`.
