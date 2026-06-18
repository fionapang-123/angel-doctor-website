# Lint Unescaped Entities Fix Plan

## Scope

Fix the current `react/no-unescaped-entities` lint errors reported by `npm run lint`.

## Planned Changes

- Escape or rewrite apostrophes in JSX text in the affected pages.
- Keep all page meaning, CTAs, routes, schema, and layout unchanged.
- Run `npm run lint` and `npm run build` after the fix.

## Out of Scope

- No Supabase changes.
- No content strategy changes.
- No deployment.
- No GitHub push.
