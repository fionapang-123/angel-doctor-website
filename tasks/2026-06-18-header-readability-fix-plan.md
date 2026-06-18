# Header Readability Fix Plan

## Task

Fix the header readability issue where the logo and CTA disappear against a light navigation background.

## Scope

- Remove the fragile dark/light hero-specific header logic.
- Use a consistently readable slim translucent header.
- Keep the original visible logo and dark navigation text.
- Restore the global CTA to the Angel Doctor logo primary color.
- Make desktop dropdown panels solid white with high-contrast dark text.
- Keep navigation links, CTA label, schema, and page content unchanged.

## Routes affected

- Global header on all routes.

## Validation

- Run `npm run build`.
- Start a clean local production preview. Use `3003` if the old `3002` process cannot be stopped.
