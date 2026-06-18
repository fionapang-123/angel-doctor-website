# Mobile Lead Form CTA Overlap Done

## Task completed

Improved mobile lead capture usability by preventing the global mobile sticky CTA from competing with visible lead forms.

## Files changed

- `src/components/StickyMobileCTA.tsx`
- `src/components/forms.tsx`
- `tasks/2026-06-18-mobile-lead-form-cta-overlap-plan.md`
- `tasks/2026-06-18-mobile-lead-form-cta-overlap-done.md`

## Routes affected

- `/contact`
- `/get-care-plan`
- `/book-local-medical-escort`
- Any page with a visible `[data-lead-form]` and `StickyMobileCTA`

## Components created or modified

- Modified `StickyMobileCTA` so it hides when lead forms or submit buttons enter the viewport.
- Modified `ContactForm` and `EscortForm` to add extra bottom breathing room when used inside sticky-submit modals.

## SEO / GEO changes

- None.

## Schema changes

- None.

## Build result

- `npm run lint` passed.
- `npm run build` passed.

## Known issues

- Browser automation disconnected during final visual re-check, so final visual confirmation was limited to code path review plus successful lint/build.
- The local production preview was restarted on `http://127.0.0.1:3004`.

## Next recommended task

Open `/book-local-medical-escort` on mobile width and confirm the global bottom CTA disappears once the embedded escort form is visible.
