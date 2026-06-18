# TCM Recovery Content Revision Done

## Task completed

Revised the TCM Recovery treatment page so it is positioned as a wellness and recovery-oriented product for international patients, instead of a narrow university hospital treatment list.

## Files changed

- `src/app/treatments/tcm-recovery-china/page.tsx`
- `src/components/TreatmentPage.tsx`
- `tasks/2026-06-17-tcm-recovery-content-revision-plan.md`
- `tasks/2026-06-17-tcm-recovery-content-revision-done.md`

## Routes affected

- `/treatments/tcm-recovery-china`

## Components created or modified

- Modified TCM-specific page data in `src/app/treatments/tcm-recovery-china/page.tsx`.
- Modified TCM-specific highlight and pricing comparison behavior in `src/components/TreatmentPage.tsx`.

## SEO / GEO changes

- Updated the TCM page subtitle and metadata source text around acupuncture, pain relief, sleep support, stress recovery, fatigue, women's health support, post-travel recovery, and general wellness.
- Reframed city recommendations around TCM recovery fit rather than naming specific hospitals or claiming university hospital access.
- Added clearer wellness and recovery search language for international patients considering TCM in China.

## Schema changes

- No schema component changes.
- Page schema content will reflect the revised visible title, description, FAQ, and service sections through existing `treatmentPageToContent` and `createPageSchema` flow.

## Build result

- `npm run build` passed.

## Known issues

- The global CTA system only allows `Get Your Care Plan` and `Book Local Medical Escort`, so the visible primary button remains `Get Your Care Plan`. "Plan your TCM recovery" is used as supporting journey copy rather than a separate CTA label.
- Existing uncommitted visual/layout changes are present in the workspace outside this task.

## Next recommended task

Review the linked TCM guide pages so their tone matches this more wellness-oriented TCM Recovery positioning and avoids over-medicalized claims.
