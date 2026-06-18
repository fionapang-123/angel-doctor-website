# Task Plan: Destination Hainan and Rating Data Cleanup

## Scope
- Remove Hainan from the Destinations city finder table because there is no current Hainan destination route/card.
- Remove hospital rating-related fields from hospital data so fake or unverified ratings cannot be displayed later.

## Files Expected to Change
- `src/app/destinations/page.tsx`
- `src/data/hospitals.ts`
- `tasks/2026-06-17-destination-hainan-rating-data-cleanup-done.md`

## Compliance Notes
- No new hospitals, doctors, prices, testimonials, reviews, or ratings.
- No deployment.
- No GitHub push.

## Verification
- Run `npm run build`.
