# Destinations less-AI directory done

## Task completed

Reduced the AI-generated feel of the `/destinations` city section by replacing the oversized repeated card grid with a tighter curated destination directory.

## Files changed

- `src/app/destinations/page.tsx`
- `tasks/2026-06-18-destinations-less-ai-directory-plan.md`
- `tasks/2026-06-18-destinations-less-ai-directory-done.md`

## Routes affected

- `/destinations`

## Components created or modified

- Modified the city overview section inside `DestinationsHubPage`.

## SEO / GEO changes

- Kept all city names visible as crawlable HTML text.
- Kept each city linked to its destination page.
- Preserved treatment-fit language for each city.
- Removed visible hospital counts from the overview section to avoid a synthetic or unverifiable feel.

## Schema changes

- None.

## Build result

- `npm run build` passed.

## Known issues

- Browser preview was not restarted in this task.

## Next recommended task

Preview `/destinations` on desktop and mobile widths, then tune spacing if the directory feels too dense or too plain.
