# Dark Header Navigation Contrast Fix Done

## Task completed

Fixed the first-screen black navigation text so desktop menu labels are visible without hover or click.

## Files changed

- `src/components/SiteHeader.tsx`
- `tasks/2026-06-18-dark-header-nav-contrast-fix-plan.md`
- `tasks/2026-06-18-dark-header-nav-contrast-fix-done.md`

## Routes affected

- Global header across all routes.

## Components created or modified

- Modified `SiteHeader` dark-header text classes.

## SEO / GEO changes

- None.

## Schema changes

- None.

## Build result

- `npm run build` passed.

## Visual / behavior check

- Production preview on `http://127.0.0.1:3005/why-angel-doctor` confirmed dark-header desktop navigation links compute to `rgba(255, 255, 255, 0.9)`.
- Dropdown panel links remain dark text on white background.

## Known issues

- None for this fix.

## Next recommended task

- Review the desktop header at full browser width to decide whether logo width or right-side CTA spacing needs a separate polish pass.
