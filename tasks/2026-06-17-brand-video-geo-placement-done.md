# Brand Video GEO Placement Done

## Task completed
Added the Jumper brand film in a GEO-safe location that explains the healthcare group background behind the Angel Doctor sub-brand.

## Files changed
- `src/app/why-angel-doctor/page.tsx`
- `src/components/HomePage.tsx`
- `tasks/2026-06-17-brand-video-geo-placement-plan.md`

## Routes affected
- `/why-angel-doctor`
- `/`

## Components created or modified
- Modified Why Angel Doctor page with a Jumper Brand Film section after the hero and before Four Pillars.
- Modified homepage Why Angel Doctor section with a text link to `/why-angel-doctor#brand-film`.

## SEO / GEO changes
- Added visible copy around the video explaining Angel Doctor as a Jumper healthcare sub-brand focused on China healthcare coordination, hospital matching, appointment preparation, translation support, local medical escort support, arrival coordination, and follow-up communication.
- Kept the video off the homepage hero to preserve homepage GEO clarity and speed.
- Used a privacy-enhanced YouTube embed with lazy loading.

## Schema changes
- No schema changes.
- Did not add VideoObject schema because the official upload date and YouTube metadata were not verified.

## Build result
- `npm run build` passed.

## Known issues
- Brand film thumbnail and official upload date are not stored in schema yet.

## Next recommended task
- If needed, verify the YouTube metadata and add compliant `VideoObject` schema to `/why-angel-doctor`.
