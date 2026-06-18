# SEO Metadata and Sitemap URL Fix Done

## Task completed
Fixed SEO metadata, sitemap URL, robots URL, canonical URL, and homepage H1 issues on `pre-release-cleanup`.

## Files changed
- `src/config/site.ts`
- `src/config/metadata.ts`
- `src/components/HomePage.tsx`
- `src/app/contact/page.tsx`
- `src/app/contact/ContactPageClient.tsx`
- `src/app/about/page.tsx`
- `src/app/trust-and-safety/page.tsx`
- `src/app/get-care-plan/page.tsx`
- `src/app/legal/privacy-policy/page.tsx`
- `src/app/legal/terms/page.tsx`
- `src/app/legal/medical-disclaimer/page.tsx`
- `tasks/2026-06-18-seo-metadata-sitemap-url-fix-plan.md`
- `tasks/2026-06-18-seo-metadata-sitemap-url-fix-done.md`

## Routes affected
- `/`
- `/contact`
- `/about`
- `/trust-and-safety`
- `/get-care-plan`
- `/legal/privacy-policy`
- `/legal/terms`
- `/legal/medical-disclaimer`
- `/robots.txt`
- `/sitemap.xml`

## Components created or modified
- Created `ContactPageClient` for the interactive contact page UI.
- Modified `HomePage` so only one real `h1` is rendered in HTML.

## SEO / GEO changes
- Site URL fallback changed to `https://angel-doctor-global.vercel.app`.
- Production builds ignore localhost-style `NEXT_PUBLIC_SITE_URL` values and fall back to the public default.
- `NEXT_PUBLIC_SITE_URL` can still override the site URL when set to a non-local public URL.
- `/contact` now has page-level title, description, and canonical.
- About, trust, legal, and get-care-plan pages now have page-level metadata and canonical.

## Schema changes
- No schema type changes.
- Schema URLs now follow the corrected site URL behavior through shared site config.

## Build result
- `npm run build` completed successfully.

## Verification
- `robots.txt` no longer points to localhost.
- `sitemap.xml` contains no localhost URLs.
- Homepage build output contains one `h1`.
- `/contact` build output has independent title, description, and canonical.

## Known issues
- None found in this scope.

## Next recommended task
- Confirm production `NEXT_PUBLIC_SITE_URL` in Vercel points to the preferred final public domain before launch.
