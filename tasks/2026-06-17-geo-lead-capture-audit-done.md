# GEO and Lead Capture Audit Done

## Task completed
Ran a read-only audit of the Angel Doctor website from GEO / SEO discoverability and consumer lead capture perspectives.

## Files changed
- `tasks/2026-06-17-geo-lead-capture-audit-plan.md`
- `tasks/2026-06-17-geo-lead-capture-audit-done.md`

## Routes affected
No website routes were changed.

Routes sampled:
- `/`
- `/contact`
- `/get-care-plan`
- `/book-local-medical-escort`
- `/destinations/chengdu-medical-travel`
- `/destinations/chongqing-medical-travel`
- `/destinations/shanghai-medical-travel`
- `/treatments/health-checkup-china`
- `/guides/dental-implants-china-cost`

## Components created or modified
No website components were created or modified.

Components reviewed:
- `SiteHeader`
- `CTAButton`
- `CtaModal`
- `ContactForm`
- `EscortForm`
- `StickyMobileCTA`
- `TreatmentPage`
- `DestinationCityPage`
- `HospitalCard`
- `SchemaJsonLd`

## SEO / GEO changes
No SEO / GEO implementation changes were made.

Audit findings:
- Core navigation matches the approved GEO structure.
- Homepage has a clear GEO positioning foundation and visible trust signals.
- Several custom pages do not inject JSON-LD schema even though template-based pages do.
- Some route metadata falls back to the global default instead of page-specific titles and descriptions.
- Some city service schema maps destination pages to `China` instead of the actual city.
- City expansion content exists, but some of it is not machine-readable through schema.

## Schema changes
No schema changes were made.

Schema issues found:
- `/destinations/chengdu-medical-travel` rendered no JSON-LD in browser audit.
- `/destinations/shanghai-medical-travel` rendered no JSON-LD in browser audit.
- `/treatments/health-checkup-china` rendered no JSON-LD in browser audit.
- `/destinations/chongqing-medical-travel` rendered `Service.areaServed.name` as `China` instead of `Chongqing`.

## Build result
Passed.

Command:
```bash
npm run build
```

Result:
- Next.js production build completed successfully.
- 49 static pages generated.
- 2 dynamic API routes generated.

## Runtime result
Local site ran at:
- `http://localhost:3000`

Notes:
- Accessing the existing dev server through `127.0.0.1:3000` triggered a Next.js development origin warning and caused CTA testing to produce a false negative.
- Using `http://localhost:3000`, homepage CTA opened the care plan modal correctly.

## Lead capture findings
- Mobile homepage at 390px showed the primary CTA above the fold and a sticky bottom CTA.
- No horizontal overflow was detected at the sampled 390px viewport.
- The CTA system uses the approved labels: `Get Your Care Plan` and `Book Local Medical Escort`.
- `/get-care-plan` redirects to `/contact`, while most page CTAs open a modal. This creates tracking and UX inconsistency.
- The form label says `Email / WhatsApp`, but `/api/contact` rejects WhatsApp-only input and requires an email-shaped value.
- Modal `localSupport` is submitted as a string, but the API only stores `local_support` as true when the value is boolean `true`; modal submissions likely store this field as false.
- Phase 1 rules say not to add Supabase unless explicitly requested, but API routes import and attempt Supabase writes.
- If Supabase and Resend are not configured, the API can still return success after logging failures, creating a risk that users see success while the team receives no lead.

## Compliance / trust findings
- Hospital cards display real hospital names from `src/data/hospitals.ts`; this must remain source-verifiable.
- Hospital cards display doctor counts. These counts should be removed or backed by a documented source before launch.
- Rating fields exist in the hospital data but are not displayed by `HospitalCard`, which avoids the most direct fake-rating risk.
- Several treatment pages include concrete price comparisons and strong speed claims. They should be source-backed and softened where provider confirmation is required.

## Known issues
- Some custom treatment and destination pages bypass the reusable metadata/schema pattern.
- City schema generation only handles a few destinations explicitly.
- The standalone contact page and modal form are not the same lead capture experience.
- WhatsApp-only leads are blocked by current API validation.
- Supabase/Resend behavior does not provide a reliable Phase 1 lead-capture guarantee without environment configuration.

## Next recommended task
Fix lead capture reliability first:
1. Decide whether Phase 1 should be frontend-only static forms, email-only API forms, or configured Resend-only forms.
2. Make `Email / WhatsApp` validation match the visible label.
3. Align modal and `/contact` form fields and submission payloads.
4. Add source-safe metadata/schema to custom treatment and destination pages.
5. Correct city-specific `Service.areaServed` for all destination pages.
