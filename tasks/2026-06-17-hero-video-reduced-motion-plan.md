# Hero Video Reduced Motion Plan

## Task
Add a reduced-motion fallback for the homepage hero video.

## Scope
- Keep desktop hero video for normal motion settings.
- Hide the video when `prefers-reduced-motion: reduce` is active.
- Show the existing poster image in that case.
- Do not change routes, schema, CTA labels, or page copy.

## Validation
- Run `npm run build`.
