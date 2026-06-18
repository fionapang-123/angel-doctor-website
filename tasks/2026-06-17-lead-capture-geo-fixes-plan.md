# Lead Capture and GEO Fixes Plan

## Task
Improve the project based on the GEO and consumer lead-capture audit.

## Scope
- Make care-plan and escort form validation match the visible `Email / WhatsApp` label.
- Normalize lead payloads so local-support selections are stored correctly.
- Reduce Phase 1 lead-loss risk when optional Supabase or email integrations are not configured.
- Add JSON-LD schema and page metadata coverage to custom treatment and destination templates.
- Correct city-specific `Service.areaServed` schema for all destination pages.
- Remove unsupported doctor-count display from hospital cards.

## Out of Scope
- No deployment.
- No GitHub push.
- No new dependencies.
- No fake hospitals, doctors, prices, reviews, ratings, or guaranteed claims.
- No Supabase database expansion or admin tools.

## Verification
- Run `npm run build`.
- Spot-check rendered schema for a treatment page and several destination pages.
- Spot-check API validation for email and WhatsApp-style contact values.
