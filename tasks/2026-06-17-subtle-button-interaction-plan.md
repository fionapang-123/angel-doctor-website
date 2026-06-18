# Subtle Button Interaction Plan

Task: make non-navigation CTA interaction states calmer after visual review.

Scope:
- Keep CTA labels unchanged.
- Keep the header CTA gradient unchanged.
- Reduce the default primary CTA hover/focus/active color jump so buttons do not turn bright blue after click or hover.

Routes affected:
- Treatment pages using the shared CTA button, including `/treatments/dental-care-china`
- Other pages using the shared default CTA button

Build check:
- Run `npm run build` after implementation.
