# Task Plan: Environment Example Setup

## Scope

- Create a root `.env.example` file with placeholder-only values.
- Prepare Phase 1 frontend configuration placeholders.
- Include Phase 2 placeholder variables for Supabase and Stripe without adding application logic.
- Ensure local environment files are ignored in `.gitignore`.

## Rules

- Do not add real secrets.
- Do not invent real API keys.
- Do not change application logic.
- Keep Supabase and Stripe as future placeholders only.

## Verification

- Confirm `.env.example` contains placeholders only.
- Confirm `.gitignore` ignores local env files while allowing `.env.example`.
- Run `npm run build` if a package script exists.
