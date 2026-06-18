# Supabase and Resend Lead Backend Plan

## Scope

Enable Supabase lead storage and Resend email notifications for the current Angel Doctor website forms.

## Planned Changes

- Update project rules so Supabase lead storage and Resend email notifications are allowed when explicitly requested.
- Keep Stripe webhook, user accounts, admin tools, and medical record upload out of scope.
- Make Resend team notification recipient configurable through environment variables.
- Improve form notification payloads so care plan and escort requests include useful operational details.
- Keep the existing lightweight CTA and form flow unchanged.
- Run `npm run lint` and `npm run build`.

## Out of Scope

- No Stripe webhook.
- No user accounts.
- No admin dashboard.
- No deployment.
- No GitHub push.
