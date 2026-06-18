Task plan
- Execute the first GEO optimization batch for Angel Doctor.

Approved scope
- Replace /ai-summary redirect with a real AI-readable summary page.
- Add /llms.txt as a machine-readable site summary.
- Add dynamic sitemap and robots routes using siteConfig.url.
- Preserve existing URLs and content strategy.
- Add concise answer blocks to priority pages where they are missing.
- Add metadata exports to high-priority custom pages where feasible without major component refactors.
- Keep medical compliance boundaries explicit.

Files expected to change
- src/app/ai-summary/page.tsx
- src/app/llms.txt/route.ts
- src/app/sitemap.ts
- src/app/robots.ts
- src/components/AnswerBlock.tsx
- src/app/treatments/page.tsx
- src/app/destinations/page.tsx
- src/app/why-angel-doctor/page.tsx
- src/app/hospital-access/page.tsx
- src/app/book-local-medical-escort/page.tsx
- src/app/pricing/page.tsx or src/components/PricingPage.tsx
- public/sitemap.xml
- public/robots.txt
- tasks/2026-06-17-geo-foundation-execution-done.md

Verification
- Run npm run build.
- Check /ai-summary and /llms.txt locally.
- Confirm sitemap and robots routes build without conflict.

Out of scope
- No deployment.
- No GitHub push.
- No fake hospitals, doctors, reviews, ratings, prices, or testimonials.
- No guaranteed appointments or guaranteed outcomes.
- No long-tail content matrix in this batch unless explicitly requested after the foundation is live.
