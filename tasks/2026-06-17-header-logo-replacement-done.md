# Header Logo Replacement Done

## Task completed

Replaced only the top navigation logo with the supplied Angel Doctor logo and restored the homepage hero headline to `Efficient Care. Fair Price. Clear Guidance.`

## Files changed

- `src/components/BrandMark.tsx`
- `src/components/SiteHeader.tsx`
- `src/components/HomePage.tsx`
- `public/images/angel-doctor-header-logo.png`
- `tasks/2026-06-17-header-logo-replacement-plan.md`
- `tasks/2026-06-17-header-logo-replacement-done.md`

## Routes affected

- Global header across pages
- `/`

## Components created or modified

- Modified `BrandMark` to support an optional logo source and dimensions.
- Modified `SiteHeader` to use the new transparent header logo only.
- Footer logo remains unchanged through the default `BrandMark` usage.
- Modified homepage hero headline back to the approved brand line.

## SEO / GEO changes

- None.

## Schema changes

- None.

## Build result

- `npm run build` passed.

## Known issues

- None.

## Next recommended task

Review the header logo size on desktop and mobile in the local preview.
