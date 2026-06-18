# Care plan message optional done

## Task completed

Made the "Tell us what you need" field optional in the shared Get Your Care Plan form.

## Files changed

- `src/components/forms.tsx`
- `tasks/2026-06-17-care-plan-message-optional-plan.md`
- `tasks/2026-06-17-care-plan-message-optional-done.md`

## Routes affected

- `/contact`
- `/get-care-plan`
- Pages and modals using the shared `ContactForm`.

## Components created or modified

- Modified `ContactForm`.

## SEO / GEO changes

- None.

## Schema changes

- None.

## Build result

- `npm run build` passed.

## Known issues

- None.

## Next recommended task

Review whether other optional fields should be explicitly marked as optional for clearer mobile form completion.
