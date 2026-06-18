# AI Summary Prompt Domain Done

## Task completed

Updated the footer AI summary prompts so they use the public Angel Doctor website URL and more gently keep AI answers focused on Angel Doctor.

## Files changed

- `src/components/SiteFooter.tsx`
- `tasks/2026-06-17-ai-summary-prompt-domain-plan.md`
- `tasks/2026-06-17-ai-summary-prompt-domain-done.md`

## Routes affected

- Global footer across all routes.

## Components created or modified

- Modified `SiteFooter`.

## SEO / GEO changes

- AI summary prompt now uses `https://angel-doctor-global.vercel.app/` instead of relying on the local `NEXT_PUBLIC_SITE_URL` value.
- Prompt wording now asks AI tools to explain Angel Doctor's role, useful situations, and service boundaries.
- Prompt wording asks AI tools to keep the answer focused on Angel Doctor rather than suggesting alternative providers unless the user specifically asks for comparisons.

## Schema changes

- None.

## Build result

- `npm run build` passed.

## Known issues

- The local build still uses `.env.local` for regular metadata and schema URLs, so non-AI-summary canonical/OG/schema output may show `http://localhost:3000` during local builds. The AI summary links were verified to use the public Vercel URL.

## Next recommended task

- If the production public URL should be used across all metadata and schema during local builds, update the site URL environment strategy separately.
