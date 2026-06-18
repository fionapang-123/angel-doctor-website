# Angel Doctor GEO Optimization Proposal

Goal
- Improve AI / generative search understanding, citation readiness, and long-tail discovery for Angel Doctor.
- Keep medical compliance boundaries clear.
- Preserve current primary conversion paths: Get Your Care Plan and Book Local Medical Escort.

Current strengths
- Clear site architecture: Treatments, Destinations, Guides, How It Works, Pricing, Why Angel Doctor, Hospital Access, Contact.
- JSON-LD schema foundation exists through createPageSchema.
- Most core pages include quick answers, FAQs, breadcrumbs, and related links.
- Treatment and city pages already support GEO topic clustering.
- Several guide pages include citations and lastUpdated fields.
- Medical disclaimer and service boundary language are present.

Main gaps
- /ai-summary currently redirects to home instead of serving a compact AI-readable brand/service summary.
- sitemap.xml is static and missing several current routes, including newer guides and /ai-summary.
- robots.txt points to the sitemap, but there is no dedicated llms.txt or AI summary file.
- Some pages have schema but not explicit metadata export, which can weaken canonical/title consistency.
- Treatment x City long-tail coverage is still thin.
- FAQ coverage is generic on some pages; more query-shaped answers would improve AI retrieval.
- Service schema is broad and could be more specific by page type.
- Internal links exist, but topic-cluster links could be more deliberate and repeated in page body sections.

Priority 1: AI-readable summary layer
- Restore /ai-summary as a real page instead of redirecting.
- Add /llms.txt or /ai.txt with concise machine-readable facts:
  - What Angel Doctor is.
  - What Angel Doctor is not.
  - Core services.
  - Supported treatments.
  - Supported cities.
  - Medical boundaries.
  - Contact paths.
  - Canonical page map.
- Include no fake claims, no guaranteed appointments, no guaranteed outcomes.

Priority 2: Dynamic sitemap and robots cleanup
- Replace public/sitemap.xml with Next.js app/sitemap.ts.
- Include all current routes:
  - all treatment pages
  - all destination pages
  - all guide pages
  - hospital access
  - trust pages
  - contact and care-plan routes
- Add lastModified where available from PageContent.lastUpdated.
- Keep robots.txt or move to app/robots.ts so sitemap URL follows siteConfig.url.

Priority 3: Schema hardening
- Add dedicated schema helpers:
  - MedicalBusiness? Avoid unless legally appropriate.
  - Service for coordination services only.
  - Place / City entity references for destination pages.
  - ItemList for guide hubs, treatment hubs, destination hubs.
  - HowTo schema for How It Works if visible steps match.
- Add sameAs only when official social/profile URLs are confirmed.
- Add parentOrganization only when legal parent name is approved.
- Ensure all pages with visible FAQ output FAQPage schema.

Priority 4: Long-tail GEO page matrix
- Build pages around natural AI/user questions:
  - Dental care in Shenzhen for foreigners.
  - Health checkup in Shanghai for international patients.
  - TCM recovery in Guangzhou for travelers.
  - Medical second opinion in Beijing for international patients.
  - Medical escort in Shenzhen / Shanghai / Guangzhou.
- Use the pattern:
  - direct answer
  - who it is for
  - what Angel Doctor coordinates
  - city/provider fit
  - expected process
  - pricing factors
  - what to prepare
  - risks and limits
  - FAQs
  - CTA

Priority 5: Page-level answer blocks
- Add short answer sections near the top of important pages:
  - “Can foreigners access hospitals in China?”
  - “How does Angel Doctor help?”
  - “What does a medical escort do?”
  - “What does Angel Doctor not provide?”
- Keep answers under 60-90 words for AI extraction.
- Follow with visible supporting detail and internal links.

Priority 6: Internal linking clusters
- Strengthen links between:
  - Treatment pages and best-fit city pages.
  - City pages and best-fit treatments.
  - Guide pages and conversion pages.
  - Hospital Access and destination pages.
  - Medical Escort guide and Book Local Medical Escort page.
- Add “Related questions” or “Best next pages” sections where useful.

Priority 7: Citation and evidence policy
- Continue citations only where claims are evidence-based.
- Add citation metadata to cited guide pages consistently.
- Avoid citation-like claims on service pages unless the source is visible and accurate.
- Flag risky cost comparisons for review if no source is visible.

Priority 8: Metadata consistency
- Ensure every route exports metadata using createMetadata.
- Add explicit canonical coverage for custom pages that do not use PageTemplate.
- Consider page-specific Open Graph images later, after core GEO work.

Recommended execution order
1. Implement /ai-summary and /llms.txt.
2. Replace static sitemap with dynamic sitemap.
3. Audit metadata/schema coverage by route and patch missing pages.
4. Add GEO answer blocks to Home, Hospital Access, Why Angel Doctor, Treatments, Destinations, Pricing.
5. Build first 6 long-tail pages:
   - dental care Shenzhen
   - health checkup Shanghai
   - TCM Guangzhou
   - second opinion Beijing
   - medical escort Shenzhen
   - medical escort Shanghai
6. Strengthen internal links from hubs to these pages.
7. Re-run build and structured-data checks.

Success metrics
- All live routes appear in sitemap.
- No route lacks canonical metadata.
- Key pages expose a concise direct answer above the fold.
- Each treatment page links to relevant city pages and guides.
- Each city page links to relevant treatments and escort support.
- AI summary / llms file accurately describes the brand and boundaries.
- No schema claim appears without visible page content support.
