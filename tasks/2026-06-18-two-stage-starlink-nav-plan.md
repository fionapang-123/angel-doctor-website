# Two Stage Starlink Inspired Navigation Plan

## Task

Update the global navigation to behave like the requested Starlink reference:

- First screen: black background, white navigation text.
- Logo and primary CTA colors stay unchanged.
- First-screen navigation is not sticky and scrolls away with the hero area.
- From the second screen onward: show the current white background, dark text navigation as a sticky/fixed bar.

## Scope

- Modify only the global site header component.
- Preserve current navigation labels, links, dropdown items, CTA labels, and CTA behavior.
- Preserve mobile menu content.
- Do not change page content, schema, forms, pricing, hospitals, testimonials, or medical claims.

## Routes affected

- Global header across all routes.

## Validation

- Run `npm run build`.

## Notes

- `docs/website/mobile-responsive-rules.md` was referenced by AGENTS.md but is not present at that exact path in this workspace.
