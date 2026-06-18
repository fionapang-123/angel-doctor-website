# Homepage Hero Secondary Escort Link Done

## Task completed
Changed the homepage hero CTA layout so `Get Your Care Plan` remains the only primary button and escort support appears as a lower-weight text link: `Need local escort support?`.

## Files changed
- `src/components/HomePage.tsx`
- `src/components/CTATextLink.tsx`
- `tasks/2026-06-17-homepage-hero-secondary-escort-link-plan.md`
- `tasks/2026-06-17-homepage-hero-secondary-escort-link-done.md`

## Routes affected
- `/`

## Components created or modified
- Created `CTATextLink` to open an existing CTA modal from text-style UI.
- Modified `HomePage` hero CTA row.

## SEO / GEO changes
- No SEO or GEO content changes.

## Schema changes
- None.

## Build result
- `npm run build` passed.

## Known issues
- None found.
- Existing local preview server is running at `http://localhost:3001`.

## Next recommended task
Review other non-escort homepage sections where `Book Local Medical Escort` appears as a full button and decide whether to keep only escort-specific sections as strong CTA placements.
