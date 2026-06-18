# Homepage Hero Secondary Escort Link Plan

## Task
Reduce the homepage hero CTA choice from two competing buttons to one primary button plus a lower-weight escort support link.

## Approved Scope
- Keep `Get Your Care Plan` as the primary homepage hero CTA.
- Replace the hero's secondary `Book Local Medical Escort` button with a text-style link: `Need local escort support?`
- Keep the escort inquiry flow available through the existing escort modal.
- Do not change pricing, hospitals, doctors, testimonials, reviews, schema, or deployment settings.

## Docs Read
- `PROJECT_BRIEF.md`
- `docs/website/00_geo_first_website_structure.md`
- `docs/website/cta-rules-simplified.md`
- `docs/website/schema-rules-for-geo-seo.md`
- `docs/website/手机端响应式设计规则.md`

## Implementation Notes
- Add a small client-side CTA text link component if needed.
- Update only the homepage hero CTA row unless the existing code requires a tightly scoped helper change.

## Verification
- Run `npm run build`.
