# Care plan message optional plan

## Goal

Make the "Tell us what you need" textarea in the Get Your Care Plan form optional so users can submit the lead form without filling that field.

## Scope

- Update the contact/care plan form textarea required state.
- Update the visible field label to show that the field is optional.
- Keep the existing note that records, reports, and photos can be shared later.
- Confirm the API already accepts an empty message.

## Routes affected

- `/contact`
- `/get-care-plan`
- Any page using the shared `ContactForm`.

## Out of scope

- Escort form changes.
- New fields.
- API storage or email integration changes.
