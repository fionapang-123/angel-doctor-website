# WhatsApp Follow-Up Flow Plan

## Task
Make the lead flow smoother by keeping forms as the main path and adding WhatsApp as the immediate follow-up path after submission.

## Approved scope
- Keep primary CTAs as `Get Your Care Plan` and `Book Local Medical Escort`.
- Add `Continue on WhatsApp` after successful form submission.
- Add a low-distraction WhatsApp quick contact entry for users who do not want to fill the form.
- Use the configured WhatsApp number and URL from shared site config.
- Do not add new medical claims, fake providers, fake prices, testimonials, user accounts, Stripe, or Supabase behavior.

## Planned files
- `src/config/site.ts`
- `src/app/contact/page.tsx`
- `src/components/forms.tsx`
- Potentially a small shared helper/component if it avoids duplication.

## Compliance notes
- WhatsApp wording will be for quick questions and next steps only.
- Copy will not imply emergency support, diagnosis, treatment, guaranteed appointments, or guaranteed outcomes.

## Verification
- Run `npm run build`.
