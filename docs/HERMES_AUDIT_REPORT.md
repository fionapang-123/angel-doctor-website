# Hermes Website Audit Report

Audit date: 2026-06-15

Scope: read-only audit of the Angel Doctor / Hermes website in the local Next.js app. No website code was modified.

Local URL reviewed: http://127.0.0.1:3001

Routes sampled:
- /
- /treatments
- /destinations
- /hospital-access
- /pricing
- /guides
- /contact
- /get-care-plan
- /book-local-medical-escort

Reference docs reviewed:
- PROJECT_BRIEF.md
- docs/website/00_geo_first_website_structure.md
- docs/website/cta-rules-simplified.md
- docs/website/schema-rules-for-geo-seo.md
- docs/website/mobile-responsive-rules.md or the available Chinese responsive rules file

## Executive Summary

The Hermes site has a strong foundation for a Phase 1 medical travel coordination website. The homepage is visually polished, trust-forward, and largely aligned with the Angel Doctor positioning: healthcare coordination, hospital matching, local medical escort support, and clear medical boundaries.

The main risks are not the overall concept or visual direction. The main risks are execution details:

- Mobile header overflow and layout strain at phone width.
- Missing JSON-LD schema and custom metadata on several important hand-built pages.
- CTA behavior is clear visually, but accessibility and route consistency need tightening.
- Production build currently fails in the restricted local environment because Google Fonts cannot be fetched by next/font.
- Some trust claims are powerful but need internal proof and careful source control before launch.

Overall audit rating: strong early-stage brand and conversion foundation, with several fixable technical and responsive issues before production deployment.

## 1. Visual Design Quality

### What Works Well

The homepage has a premium, calm medical-service feel. The white, mist-blue, ink, and magenta palette feels cleaner and more trustworthy than a generic hospital directory. The hero hierarchy is strong: brand mark, concise headline, explanatory copy, primary CTA, and a structured care-plan panel.

The design communicates "guided coordination" rather than "cheap medical tourism." That is important and should be preserved.

The best visual elements are:

- The Angel Doctor logo presence in the header.
- The large homepage headline: "Fast Care. Fair Price. Clear Guidance."
- The right-side "Your Care Plan" process card.
- The compact trust bar.
- The rounded but restrained cards for treatments, destinations, and process steps.
- The medical escort network section, which gives the business a more defensible operational story.

### Issues

Priority: Medium

The visual system relies almost entirely on typography, icons, cards, gradients, and decorative blobs. It looks polished, but it lacks real-world medical travel signals such as city photos, clinic/hospital environment imagery, escort workflow imagery, or patient journey visuals. For a trust-heavy medical travel business, this can make the site feel slightly abstract.

Priority: Low

The design uses several card-heavy sections. The cards look good, but long homepage scroll depth may dilute the primary conversion journey. The homepage has many valid sections, but the user may need a clearer "why now / what happens next / start here" path.

## 2. Homepage Conversion

### What Works Well

The homepage primary CTA is visible above the fold on desktop and mobile. The value proposition is direct and easy to understand. The line "Free · 2 minutes · No commitment" reduces friction.

The homepage answers the right conversion questions:

- What does Angel Doctor do?
- What can it coordinate?
- Why should I trust it?
- How does the process work?
- What are the boundaries around diagnosis and outcomes?

The lightweight care-plan modal is a good Phase 1 conversion pattern because it avoids a heavy medical intake process.

### Issues

Priority: Medium

The homepage has multiple conversion paths, but the CTA destination model is mixed:

- Header and homepage buttons open a modal.
- /get-care-plan redirects to /contact.
- /contact contains a standalone form.
- The modal and contact page are not identical experiences.

This is not fatal, but it creates tracking, analytics, and UX inconsistency. The site should eventually define one primary lead-capture flow and use it consistently.

Priority: Medium

The homepage is long. It has strong sections, but the order could be sharpened around conversion intent. The "Standardized Medical Escort Network" section is one of the strongest differentiators and may deserve a more prominent conversion bridge earlier on the page.

## 3. CTA Clarity

### What Works Well

The global CTA mostly follows the required system:

- Get Your Care Plan
- Book Local Medical Escort

The modal form fields match the simplified CTA rules well:

- Email / WhatsApp
- Interested in
- Travel timing
- City
- Local support need
- Free-text need
- Consent language

The escort form also aligns well with the required support-task concept.

### Issues

Priority: High

The CTA modal behaves visually like a modal, but it does not expose modal semantics. In the rendered audit, the form opened, but no role="dialog" or aria-modal="true" container was detected. There is also no obvious backdrop, so the background remains visually active behind the form.

This matters for accessibility, keyboard users, screen readers, and perceived polish.

Priority: Medium

The contact page submit button says "Get My Care Plan." The CTA rules prefer and standardize "Get Your Care Plan." This is a small wording inconsistency, but CTA consistency matters for analytics, trust, and compliance.

Priority: Medium

On mobile, there are multiple visible "Get Your Care Plan" buttons in close vertical proximity: header CTA, hero CTA, and sticky bottom CTA. This supports conversion, but the header layout currently suffers from overflow, so the extra CTA density is contributing to mobile strain.

## 4. Trust-Building Sections

### What Works Well

The trust narrative is one of the site's strongest parts. The site clearly explains:

- Healthcare group experience.
- 200+ hospitals and providers.
- 600+ trained medical escorts.
- English-speaking support.
- AI-assisted matching.
- Clear medical boundaries.
- No diagnosis or treatment by Angel Doctor.
- No guaranteed appointment or outcome claims.

The medical escort section is especially strong because it reframes escorts as a trained and managed offline service network, not informal helpers.

The FAQ and disclaimer language is generally safe and aligned with the project brief.

### Issues

Priority: High

The claims "Healthcare group since 1998," "200+ hospitals and healthcare providers," "600+ trained medical escorts," "48 hospitals," and "11 cities" are powerful trust signals. They should be preserved only if internally verified and legally safe to publish. If any of these are not fully substantiated, they should be softened or sourced before launch.

Priority: Medium

The site says "Partner Hospitals" in some areas. That can imply formal partnership. If the relationship is coordination access, referral relationship, network listing, or provider database rather than signed partnership, wording should be reviewed carefully.

Priority: Medium

The hospital access and destination sections are good for trust, but they need consistent disclaimers near hospital/provider cards so users do not infer guaranteed access, direct medical endorsement, or fixed appointment availability.

## 5. Mobile Responsiveness

### What Works Well

The homepage uses a single responsive URL and keeps the primary CTA above the fold. The sticky mobile CTA is present, which aligns with the mobile rules.

The hero content remains readable on a phone-size viewport. The headline, intro copy, and hero CTA are visible and understandable.

### Issues

Priority: High

At a phone-size viewport, horizontal overflow was detected. The browser measured document width larger than the visible client width. The hamburger control appeared partly offscreen, and the header became unusually tall.

Observed mobile evidence:

- Viewport tested around 390px wide.
- Client width rendered around 375px.
- Document scroll width was wider than the client width.
- The hamburger summary control was positioned beyond the visible width.
- Header height was about 172px, which is too tall for a conversion landing page header.

Priority: Medium

The mobile header includes logo, CTA, and hamburger. This is a good intent, but it needs tighter layout rules. The current header competes with the hero and consumes too much first-screen space.

Priority: Medium

The sticky bottom CTA works, but together with the header CTA and hero CTA, the first screen feels crowded. After fixing the header, preserve one clear primary CTA above the fold plus the sticky bottom CTA.

## 6. SEO/GEO Structure

### What Works Well

The site architecture is very strong for GEO and SEO:

- /treatments
- /destinations
- /hospital-access
- /why-angel-doctor
- /guides
- /pricing
- /contact

The treatment and destination strategy maps well to search and AI-answer intent. The pages use plain-language H1s and explanatory content. The homepage has JSON-LD, metadata, FAQ content, and clear entity language.

The footer includes AI-summary links, which is directionally aligned with GEO discovery.

### Issues

Priority: High

Several important custom-built routes rendered without JSON-LD in the browser audit:

- /treatments
- /destinations
- /hospital-access
- /pricing
- /contact

The homepage and /guides did emit JSON-LD. This suggests schema is implemented for some template-driven pages but missing on hand-built pages. This conflicts with the schema rules that call for primary page schema, Organization/Website reference, BreadcrumbList, FAQPage where relevant, and Service schema where relevant.

Priority: High

Several sampled routes rendered with the default title and default description rather than route-specific metadata:

- /treatments
- /destinations
- /hospital-access
- /contact

This weakens SEO/GEO page clarity and may reduce search snippet quality.

Priority: Medium

The H1 text in DOM extraction appeared as "Fast Care. Fair Price.Clear Guidance." without a space before "Clear Guidance." This is likely caused by a line break in the JSX. Visually it looks fine, but screen readers, DOM extraction, and AI crawlers may read it without the intended spacing.

Priority: Medium

The footer AI-summary links reference "https://www.angeldoc.com" in prompts, while site config uses "https://www.angeldoctor.com". This domain mismatch could confuse AI summaries and GEO consistency.

Priority: Medium

/get-care-plan redirects to /contact. The CTA rules recommend /get-care-plan as the primary route. Redirecting can work, but canonical, analytics, and user-facing consistency should be intentional.

## 7. Technical Issues

### Build Health

Production build result: failed in the local restricted environment.

Build command:

```bash
npm run build
```

Observed failure:

```text
Failed to fetch Inter from Google Fonts.
Failed to fetch Sora from Google Fonts.
```

Likely cause: next/font needs network access to fetch Google Fonts during build, and the local environment could not establish that connection.

Deployment impact: Vercel builds usually have network access, so this may pass on Vercel. However, for reliable local/offline builds, consider self-hosting fonts or ensuring the build environment can fetch Google Fonts.

### Local Runtime Health

The dev server started on:

```text
http://127.0.0.1:3001
```

Homepage response:

```text
HTTP 200
```

Observed runtime/dev warning:

```text
Watchpack Error (watcher): Error: EMFILE: too many open files, watch
```

Impact: the site can render, but local hot reload and file watching may be unreliable until the file watcher/open-file limit issue is addressed.

### Browser Console

No app-level console errors or warnings were observed during sampled browser route checks.

### Accessibility Issues

Priority: High

The CTA modal lacks detected dialog semantics. Recommended future fix:

- Add role="dialog".
- Add aria-modal="true".
- Add an accessible title association.
- Add focus management.
- Add Escape key close behavior.
- Consider a visible backdrop.

Priority: Medium

The desktop dropdowns appear hover-based. They should be checked for keyboard accessibility before launch.

## 8. What Should Be Preserved From the Hermes Design

Preserve these elements:

- The Angel Doctor logo prominence and clean header identity.
- The core headline: "Fast Care. Fair Price. Clear Guidance."
- The positioning: healthcare coordination and medical travel support, not a hospital or treatment provider.
- The magenta primary CTA color with restrained medical neutrals.
- The "Your Care Plan" hero card explaining the process.
- The compact trust bar format.
- The "China Healthcare, Guided End to End" narrative.
- The treatment cards and destination cards as SEO/GEO entry points.
- The standardized medical escort section and its operational language.
- The FAQ and disclaimer approach.
- The sticky mobile CTA concept.
- The distinction between global care-plan CTA and escort-specific CTA.

Avoid losing the calm, premium, coordination-first feel. The design should not become a loud medical marketplace, a fake hospital directory, or a discount tourism landing page.

## Recommended Priority Fix Order

1. Fix mobile header overflow and phone-width layout issues.
2. Add missing metadata and JSON-LD to all major custom routes.
3. Make the CTA modal accessible and consistent with the /get-care-plan flow.
4. Verify and source all major trust claims before launch.
5. Resolve build reliability around Google Fonts.
6. Align footer AI-summary domain prompts with the final canonical domain.
7. Tighten CTA wording consistency, especially "Get My Care Plan" vs "Get Your Care Plan."
8. Add selective real-world visual assets where they increase trust without making fake claims.

## Known Issues

- Build failed locally because Google Fonts could not be fetched.
- Dev server reported repeated EMFILE watcher warnings.
- Mobile horizontal overflow was observed.
- Several important routes lack rendered JSON-LD.
- Several custom routes use default metadata.
- CTA modal needs accessibility improvements.

## Next Recommended Task

Create a focused implementation plan for "mobile header, schema/metadata coverage, and CTA modal accessibility" before editing code. This should be handled as a scoped Phase 1 polish task with a build verification step.
