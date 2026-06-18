# Mobile Responsive Audit Notes

Checked pages
- /
- /contact
- /treatments
- /destinations
- /how-it-works
- /pricing
- /why-angel-doctor
- /guides
- /hospital-access
- /book-local-medical-escort

Checked widths
- 375px
- 390px
- 768px
- 1024px
- 1440px desktop

Evidence screenshots
- /private/tmp/mobile-responsive-audit-2026-06-17/01-contact-375.png
- /private/tmp/mobile-responsive-audit-2026-06-17/02-contact-390.png
- /private/tmp/mobile-responsive-audit-2026-06-17/03-destinations-390-table.png
- /private/tmp/mobile-responsive-audit-2026-06-17/04-why-390-table.png
- /private/tmp/mobile-responsive-audit-2026-06-17/05-escort-390.png

Step review
1. Mobile same URL / same content
- Health: Good.
- No separate mobile pages were found.
- Responsive layout is handled through the same app routes.

2. 375px and 390px mobile layout
- Health: Mostly good, with CTA issues on key conversion pages.
- Main content stacks into a single column on checked pages.
- No full-page horizontal scroll was detected.
- Some carousel/table contents extend inside their own scroll areas, which is acceptable technically but can still feel heavy on mobile.

3. Mobile primary CTA above the fold
- Health: Needs work.
- /, /destinations, /guides, /how-it-works, and /hospital-access have a visible primary CTA in the mobile first viewport.
- /contact has no visible primary CTA button above the fold at 375px or 390px. The form begins near the bottom of the first viewport, but the submit button is far below.
- /book-local-medical-escort has the same issue visually: the first screen explains the service but does not show a clear primary action button.
- /treatments and /pricing also did not show a main content CTA in the mobile first viewport during the compact scan.

4. Mobile sticky bottom CTA
- Health: Inconsistent.
- Sticky primary CTA appears on /, /guides, and /how-it-works at 375px and 390px.
- Sticky primary CTA is absent on /contact and /book-local-medical-escort because a lead form exists and the current StickyMobileCTA hides when a form approaches the viewport.
- Sticky primary CTA is also absent on /treatments, /destinations, /pricing, /why-angel-doctor, and /hospital-access in the mobile scan. WhatsApp floating contact remains visible, but it is not one of the approved primary CTA labels.

5. FAQ accordions
- Health: Good where FAQ exists.
- Pages with FAQ use details/summary-style accordions.
- /destinations, /why-angel-doctor, and /book-local-medical-escort have little or no FAQ accordion presence in the checked surface, which may be acceptable depending on page intent.

6. Long paragraphs on mobile
- Health: Needs polish on several pages.
- /treatments hero intro is long on mobile.
- /why-angel-doctor has long early paragraphs around the brand film / company explanation.
- /book-local-medical-escort has a long early paragraph in the team/service explanation section.

7. Tables on mobile
- Health: Functional, but not ideal.
- /destinations has a 640px table inside horizontal scroll on 375px and 390px.
- /why-angel-doctor has a 600px comparison table inside horizontal scroll on 375px and 390px.
- There is no full-page horizontal overflow, but horizontal tables are harder to scan on phones.

Recommended changes
1. Add explicit hero CTA buttons to /contact, /book-local-medical-escort, /treatments, and /pricing mobile first view.
2. Change StickyMobileCTA so it does not fully disappear just because a form is near the viewport. Hide it only when the actual submit button is visible or when the user is actively focused inside the form.
3. Ensure all key conversion pages pass: visible in-page CTA above the fold plus sticky bottom CTA on 375px and 390px.
4. Convert mobile tables on /destinations and /why-angel-doctor into stacked comparison cards below 640px while keeping tables for tablet/desktop.
5. Split long early paragraphs on /treatments, /why-angel-doctor, and /book-local-medical-escort into shorter bullets or two short paragraphs on mobile.
6. Add consistent mobile CTA coverage for /treatments and /pricing using the approved labels only: Get Your Care Plan or Book Local Medical Escort.

Limits
- No real lead submission was performed.
- Screenshot files were saved to /private/tmp because the browser sandbox could not write screenshots directly into the project folder.
