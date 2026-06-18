# Pricing Button Style Consistency Plan

## Scope
- Fix the blue CTA buttons on `/pricing`.
- Remove page-level color overrides so pricing CTAs use the shared `CTAButton` primary style.
- Keep CTA labels and behavior unchanged.

## Files Expected To Change
- `src/components/PricingPage.tsx`
- `tasks/2026-06-17-pricing-button-style-consistency-done.md`

## Verification
- Run `npm run build`.
- Render-check `/pricing` desktop and mobile to confirm the buttons match shared CTA styling and do not overflow.
