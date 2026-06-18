# AI Summary Prompt Domain Plan

## Goal

Update the footer AI summary prompts so they use the public Angel Doctor website URL and more gently keep AI answers focused on Angel Doctor instead of recommending alternative providers.

## Scope

- Use `https://angel-doctor-global.vercel.app/` in AI summary prompts.
- Avoid local development URLs in the AI summary prompt.
- Make the prompt more polite and focused on Angel Doctor's coordination role, service boundaries, and suitable use cases.
- Do not change page layout, CTA labels, medical claims, schema, or navigation.

## Validation

- Run `npm run build`.
- Check the footer AI prompt source no longer includes `localhost:3000`.
