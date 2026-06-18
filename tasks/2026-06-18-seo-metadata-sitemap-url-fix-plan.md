# SEO Metadata and Sitemap URL Fix Plan

## Task
Fix SEO issues found on the current `pre-release-cleanup` branch.

## Scope
- Update site URL fallback so robots, sitemap, canonical, Open Graph URLs, and schema URLs do not default to localhost.
- Preserve `NEXT_PUBLIC_SITE_URL` override support.
- Reduce homepage HTML to one true `h1` while preserving desktop and mobile visual layout.
- Convert `/contact` page to a server component with page-level metadata and move client interactivity into a client component.
- Add page-level metadata and canonical for major pages currently inheriting global defaults.
- Run production build and verify robots, sitemap, homepage H1 count, and contact metadata output.

## Out of Scope
- No design changes.
- No content rewrites beyond metadata.
- No environment file changes.
- No main branch merge or push.
