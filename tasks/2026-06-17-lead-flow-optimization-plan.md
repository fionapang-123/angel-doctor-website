# Task Plan: Lead Flow Optimization

## Scope
- Reduce friction in the Get Your Care Plan form.
- Move `/contact` toward a faster first-screen conversion layout.
- Improve CTA modal focus, scrolling, and close behavior.
- Add user-facing fallback paths when lead submission fails.
- Reuse the shared lead form instead of maintaining separate contact-page logic.
- Hide sticky mobile CTA when a lead form is already visible.
- Add lightweight conversion event tracking hooks.

## Files Expected to Change
- `src/app/contact/page.tsx`
- `src/app/api/contact/route.ts`
- `src/app/api/escort/route.ts`
- `src/components/CtaModal.tsx`
- `src/components/CTAButton.tsx`
- `src/components/forms.tsx`
- `src/components/StickyMobileCTA.tsx`
- `src/components/WhatsAppQuickContact.tsx`
- `src/lib/conversion.ts`
- `tasks/2026-06-17-lead-flow-optimization-done.md`

## Compliance Notes
- Use only approved CTA labels: `Get Your Care Plan` and `Book Local Medical Escort`.
- Do not add Supabase, Stripe, accounts, fake prices, fake testimonials, or fake medical claims.
- Do not deploy or push.

## Verification
- Run `npm run build`.
