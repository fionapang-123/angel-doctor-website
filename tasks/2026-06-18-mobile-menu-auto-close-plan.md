# Mobile Menu Auto Close Plan

## Scope

Fix the mobile header menu so it closes automatically after a user taps a navigation item.

## Planned Changes

- Replace the mobile menu's implicit `details` open state with explicit React state.
- Close the mobile menu when any mobile navigation link is clicked.
- Preserve existing menu labels, URLs, CTA wording, and desktop header behavior.
- Re-test at mobile width and run lint/build.

## Out of Scope

- No navigation restructuring.
- No desktop header changes.
- No CTA label changes.
- No deployment.
- No GitHub push.
