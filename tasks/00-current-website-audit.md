# Current Website Audit: Angel Doctor Phase 1 Frontend

## Audit Context

Required docs reviewed:

- `AGENTS.md`
- `GOAL.md`
- `PROJECT_BRIEF.md`
- `docs/website/00_geo_first_website_structure.md`
- `docs/website/cta-rules-simplified.md`
- `docs/website/手机端响应式设计规则.md`

Current route check:

- All required Phase 1 routes currently return `200` on the local production server.
- The site has a working Next.js foundation, centralized page data, schema helpers, header, footer, CTA buttons, reusable page template, static contact form, and static escort form.
- The current implementation is still foundation-level. It is not yet conversion-ready or content-complete.

---

## Issues

### 1. Homepage is too thin for the primary conversion page

**Problem:** The homepage currently has a hero, quick answer card, trust bar, three generic cards, related links, FAQ, and disclaimer. It does not yet include the required full sequence: guided platform explanation, popular treatments, how it works, featured destinations, why Angel Doctor, pricing transparency, featured guides, robust FAQ, and final CTA.

**Why it hurts conversion or trust:** New visitors do not get enough context to understand the offer, evaluate credibility, compare next steps, or feel confident submitting a care request.

**Recommended fix:** Rebuild the homepage as the core conversion page with the required section order from the GEO-first structure doc: hero, trust bar, China Healthcare Guided End to End, popular treatments, standardized medical escort network, how it works, featured destinations, why Angel Doctor, pricing transparency, featured guides, FAQ, and final CTA.

**Priority:** P0

---

### 2. Forms are visually present but not a real conversion flow

**Problem:** `ContactForm` and `EscortForm` are static frontend forms with no action, no submit handling, no validation, no success state, no clear fallback contact method, and no explanation that Phase 1 submissions are placeholder-only.

**Why it hurts conversion or trust:** A user can fill the form and click the CTA but nothing meaningful happens. This breaks the main lead capture goal and creates distrust at the most important moment.

**Recommended fix:** Add a safe Phase 1 form behavior: accessible required fields, client-side validation, clear confirmation state, and either a `mailto:`/WhatsApp fallback or approved static form endpoint. Keep Supabase, Stripe, user accounts, and uploads out of scope.

**Priority:** P0

---

### 3. Contact form is missing required care-plan fields

**Problem:** The care-plan form lacks several fields required or recommended by the CTA rules and footer/contact docs: country/region, need local support, and a clearer combined Email/WhatsApp primary contact option. It also uses a submit button label matching the CTA but does not communicate what happens after submission near the form itself.

**Why it hurts conversion or trust:** Angel Doctor needs enough lightweight context to qualify a lead. Missing city, local support, country/region, and next-step clarity reduces lead quality and confidence.

**Recommended fix:** Align the form fields with the approved care-plan form: name, email, WhatsApp/phone, country/region, treatment interested in, preferred city, travel timing, need local support, message, consent checkbox, and a visible "What happens next" note beside or below the form.

**Priority:** P0

---

### 4. Medical disclaimer and legal pages are incomplete for launch

**Problem:** The site includes visible disclaimer language on medical pages, but the dedicated `Medical Disclaimer`, `Privacy Policy`, and `Terms` pages are short foundation stubs. The medical disclaimer page does not yet include the full required sections and emergency-care instruction from the docs.

**Why it hurts conversion or trust:** Healthcare coordination requires unusually clear boundaries. Thin legal pages make the site feel unfinished and increase compliance risk.

**Recommended fix:** Expand legal pages using the required page structures: role of Angel Doctor, no medical advice, licensed providers, no guaranteed outcomes, emergency care, medical records, third-party providers, privacy handling, terms, and contact. Keep them factual and not marketing-heavy.

**Priority:** P0

---

### 5. Treatment pages are missing required conversion content

**Problem:** Treatment detail pages currently contain only three short cards plus generic FAQ and disclaimer. They do not yet include the required modules: who this is for, common patient needs, what treatment may include, how Angel Doctor helps, best-fit destinations, hospital/provider access, estimated timeline, pricing guidance, what to prepare, risks and limitations, FAQ, CTA, and medical disclaimer.

**Why it hurts conversion or trust:** Treatment pages are supposed to convert intent into inquiries. Thin pages do not answer enough patient questions to earn a care-plan submission.

**Recommended fix:** Expand each initial treatment page into the full approved treatment template, starting with dental care and health checkup. Keep pricing as factors/ranges only if verified, never fake fixed prices.

**Priority:** P1

---

### 6. Destination pages are missing required GEO decision blocks

**Problem:** Destination pages have a quick answer and three cards, but they do not yet include full city decision content: why choose this city, best-fit treatments, hospital/provider access by city, provider cards, sample patient journey, local escort support, pricing guidance, what to prepare, related guides, city FAQ, and last updated date.

**Why it hurts conversion or trust:** Destination pages are intended to be city-based GEO and conversion engines. The current pages are too shallow to rank well or help patients choose a city.

**Recommended fix:** Build the full destination template for Shenzhen, Guangzhou, and Shanghai, using generic provider category cards unless approved public hospital names are available.

**Priority:** P1

---

### 7. Medical escort positioning is underdeveloped

**Problem:** The site mentions trained medical escorts, but it does not yet make the 600+ escort network feel like a standardized service system. Missing proof modules include training system, service standards, backend coordination, privacy agreements, complaint handling, escalation, service records, coordinator oversight, and follow-up communication.

**Why it hurts conversion or trust:** The escort network is Angel Doctor's main differentiation. If it reads like generic accompaniment or translation, users may compare it to informal agents instead of a managed healthcare support product.

**Recommended fix:** Add a dedicated "Standardized Medical Escort Network" section on the homepage, Why Angel Doctor, Trust & Safety, Pricing, dental/local support sections, and the escort form page. Use task-scope language and clear non-clinical boundaries.

**Priority:** P1

---

### 8. Trust proof is mostly a trust bar, not evidence

**Problem:** The site repeats trust claims such as healthcare group since 1998, 200+ hospitals/providers, and 600+ escorts, but it does not yet explain what those claims mean operationally. There are no proof modules, process details, care standards, privacy overview, complaint handling, or backend coordination examples.

**Why it hurts conversion or trust:** Medical travel users need confidence that Angel Doctor is real, organized, and safe. Repeated numeric claims without explanation can feel like marketing decoration.

**Recommended fix:** Add evidence-based trust sections: what "healthcare group since 1998" means, what the provider coordination network does, how medical escorts are trained/managed, how patient information is handled, and what happens if a visit issue occurs.

**Priority:** P1

---

### 9. UI pattern is generic and repetitive

**Problem:** Nearly every page uses the same template: hero plus quick-answer box, trust bar, three cards, related links, FAQ, disclaimer, sticky CTA. The visual system is clean but generic and does not yet feel like a premium international medical coordination brand.

**Why it hurts conversion or trust:** Repetition makes key pages feel interchangeable. Important page types, such as homepage, treatment, destination, hospital access, and pricing, need distinct information architecture and visual hierarchy.

**Recommended fix:** Create page-specific layouts: homepage conversion layout, treatment detail layout, city destination layout, hospital access layout, pricing explanation layout, guide article layout, and form page layout. Keep shared components but vary section rhythm, density, and content structure.

**Priority:** P1

---

### 10. Visual hierarchy and spacing are too flat

**Problem:** The current design relies on uniform rounded cards, borders, small text, and similar spacing across all sections. There is little visual contrast between primary conversion content, support proof, legal cautions, related links, and FAQ.

**Why it hurts conversion or trust:** Users cannot easily tell what to read first, what matters most, or where the strongest proof is. Medical travel pages need calm hierarchy, not equal-weight blocks.

**Recommended fix:** Introduce stronger section hierarchy: clearer H2s, supporting section intros, more varied layout bands, better grouping for proof/process/pricing, stronger CTA zones, and more deliberate typography scale. Avoid nested cards and keep medical pages calm and readable.

**Priority:** P1

---

### 11. Mobile CTA is present but not selective enough

**Problem:** The sticky mobile CTA is rendered by the shared `PageTemplate` on every templated page, including legal pages. The header CTA is hidden below desktop, and mobile nav consumes vertical space with wrapped links.

**Why it hurts conversion or trust:** Sticky CTAs help key conversion pages, but on legal/privacy/terms pages they can feel pushy. The mobile header may also push important hero content lower, weakening the above-the-fold CTA requirement.

**Recommended fix:** Make sticky mobile CTA conditional by page type. Enable it on homepage, treatments, destinations, pricing, guide articles, contact, care-plan, and escort pages. Disable or soften it on legal pages. Consider a compact mobile header with a menu pattern and one visible primary CTA.

**Priority:** P1

---

### 12. GEO blocks are incomplete and not standardized per page type

**Problem:** Pages include a "Quick Answer" box, but many required GEO blocks are missing: who this is for, what Angel Doctor helps with, what to prepare, timeline, cost factors, risks and limitations, city/treatment matching, related destinations, related treatments, and last updated date.

**Why it hurts conversion or trust:** GEO and AI-search visibility depend on clear extractable answers and topic coverage. One generic quick answer is not enough for citation-ready pages.

**Recommended fix:** Add page-type-specific GEO blocks and repeat them consistently: treatment pages need treatment/timeline/cost/preparation/risk blocks; destination pages need city/treatment/provider/journey/pricing/FAQ blocks; guides need quick answer, preparation, risks, related pages, FAQ, and last updated date.

**Priority:** P1

---

### 13. Internal linking is present but too generic

**Problem:** Related links currently appear as a generic tag cluster. Treatment pages mostly link to destinations, destination pages mostly link to treatments, and guides link lightly. Contextual links inside explanatory content are limited.

**Why it hurts conversion or trust:** Users need guided paths, not just tags. GEO also benefits from contextual internal links that explain why a treatment, destination, hospital access, pricing, or trust page is relevant.

**Recommended fix:** Add contextual links inside body copy and section CTAs: treatment to best-fit cities, destination to relevant treatments and guides, hospital access to treatment/destination pages, pricing to care plan and escort request, trust pages to disclaimer/privacy/contact.

**Priority:** P2

---

### 14. Hospital Access page does not yet build enough network trust

**Problem:** Hospital Access currently explains provider types and generic provider cards, but it lacks the full required page structure: what hospital access means, major medical destinations, provider type explanations, hospital/provider card support, how matching works, what affects availability, patient safety, FAQ, and CTA.

**Why it hurts conversion or trust:** Hospital Access is a footer-level trust/GEO page. If it remains shallow, users may not believe Angel Doctor has real coordination capability.

**Recommended fix:** Expand Hospital Access into its own layout with provider category cards, city sections, matching logic, availability boundaries, internal links, and a stronger FAQ. Continue avoiding unapproved hospital names/logos.

**Priority:** P1

---

### 15. FAQ content is duplicated and not page-specific

**Problem:** The same two FAQ items appear across many pages. They are useful compliance questions, but they do not answer page-specific intent such as dental timelines, health checkup preparation, city suitability, escort tasks, hospital access, or pricing factors.

**Why it hurts conversion or trust:** Repeated FAQ content feels thin and templated. Users with specific intent do not get the answers needed to submit a qualified inquiry.

**Recommended fix:** Keep the compliance questions, but add 4-8 page-specific FAQ items for each major page type. Ensure FAQ schema matches visible FAQ exactly.

**Priority:** P2

---

### 16. Schema is present but too generic for final SEO/GEO

**Problem:** JSON-LD exists, but service schema uses a generic `serviceType` across many service pages, and some page schemas are not yet rich enough for city/treatment specificity. FAQ schema mirrors duplicated FAQ content.

**Why it hurts conversion or trust:** Generic schema helps less with AI/search understanding. It also fails to fully reinforce Angel Doctor's core entities: treatment coordination, city-based medical travel, hospital access, and medical escort service.

**Recommended fix:** Make schema helpers page-type aware: treatment pages should use specific service names, destination pages should include city-specific service and City schema, guides should use Article with visible last updated dates, and FAQ schema should use page-specific visible FAQs.

**Priority:** P2

---

### 17. Missing final CTA sections on most pages

**Problem:** Pages have hero CTAs and sticky mobile CTAs, but most pages lack a strong final CTA section above the footer.

**Why it hurts conversion or trust:** After users read content, there is no tailored closing prompt that reflects their page intent. This weakens the conversion path from education to inquiry.

**Recommended fix:** Add page-specific final CTA sections: treatment pages prompt care-plan request, destination pages prompt city care-plan request using approved CTA label, escort sections prompt local escort booking, legal/trust pages prompt contact only where appropriate.

**Priority:** P1

---

### 18. Contact and care-plan routes duplicate each other

**Problem:** `/contact` and `/get-care-plan` currently share nearly the same content and form experience. The distinction between general contact and primary care-plan conversion is unclear.

**Why it hurts conversion or trust:** Users may not understand which route to use. It also dilutes the primary conversion path.

**Recommended fix:** Make `/get-care-plan` the primary lead capture page and `/contact` a lighter contact-options page with WhatsApp/email, care-plan link, escort link, next steps, and compliance reminder.

**Priority:** P2

---

### 19. No visual assets beyond the logo

**Problem:** The current site uses no meaningful healthcare, escort, city, process, or trust visuals. The existing logo appears, but there are no supporting visual assets or diagrams.

**Why it hurts conversion or trust:** A medical travel website needs a strong sense of place, support, and operational credibility. Pure text/card layouts feel abstract and unfinished.

**Recommended fix:** Add approved, compliant visual assets: city/location imagery, process diagrams, neutral hospital navigation visuals, medical escort workflow illustrations, or carefully generated non-clinical support imagery. Do not use fake doctors, fake hospital imagery implying partnership, or unapproved hospital logos.

**Priority:** P2

---

### 20. Phase 1 pages are created, but many are not launch-ready

**Problem:** Route coverage is complete, but content depth, layout specificity, trust proof, conversion flow, mobile behavior, and legal detail are not yet at launch quality.

**Why it hurts conversion or trust:** The site can build and render, but a real patient may still feel there is not enough proof, specificity, or working lead-capture behavior to take action.

**Recommended fix:** Treat the current frontend as a foundation scaffold. Next tasks should prioritize homepage conversion, forms, legal/compliance pages, treatment pages, destination pages, hospital access, and medical escort positioning before any deployment.

**Priority:** P0
