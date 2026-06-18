# Contact Info Update Done

## Task completed
Added the confirmed public email and WhatsApp contact details to Angel Doctor contact surfaces.

## Files changed
- `.env.example`
- `src/config/site.ts`
- `src/config/schema.ts`
- `src/app/contact/page.tsx`
- `src/components/SiteFooter.tsx`
- `tasks/2026-06-17-contact-info-plan.md`
- `tasks/2026-06-17-contact-info-done.md`

## Routes affected
- `/contact`
- Sitewide footer on all routes
- Organization schema generated across schema-enabled pages

## Components created or modified
- Modified `SiteFooter`
- Modified Contact page direct contact options
- Modified shared site config
- Modified Organization schema contact point

## SEO / GEO changes
- Public contact email now uses `marketing@jumper-medical.com`.
- Public WhatsApp / phone number now uses `+86 185 6670 0732`.
- Contact details are visible on the Contact page and sitewide footer for trust and discoverability.

## Schema changes
- Organization `ContactPoint` now includes the configured email and telephone.

## Build result
- `npm run build` passed.

## Known issues
- None from this task.

## Next recommended task
- Confirm production environment variables on Vercel use the same public email and WhatsApp values before the next deployment.
