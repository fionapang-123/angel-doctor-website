# Mobile Menu Auto Close Done

## Task completed

Fixed the mobile header menu so it closes automatically after tapping a navigation item.

## Files changed

- `src/components/SiteHeader.tsx`
- `tasks/2026-06-18-mobile-menu-auto-close-plan.md`
- `tasks/2026-06-18-mobile-menu-auto-close-done.md`

## Routes affected

- Global header across all routes.
- Verified from `/pricing`.

## Components created or modified

- Modified `SiteHeader` mobile navigation state handling.

## SEO / GEO changes

- None.

## Schema changes

- None.

## Build result

- `npm run lint` passed.
- `npm run build` passed.

## Known issues

- The documented `docs/website/mobile-responsive-rules.md` file is not present; the existing `docs/website/手机端响应式设计规则.md` was read instead.

## Next recommended task

Review mobile menu scroll height and spacing after the auto-close behavior, especially on short screens.
