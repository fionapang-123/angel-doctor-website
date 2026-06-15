# AGENTS.md 

 ## Project 
 Angel Doctor international medical tourism website. 
 
 ## Phase 
 Phase 1 Frontend Only. 
 Phase 2 will add Supabase, Stripe webhook, lead database, and admin tools. 
 
 ## Primary Goals 
 1. Lead capture 
 2. GEO / SEO 
 3. Trust 
 4. Fast Vercel deployment 
 5. Medical compliance 
 
 ## Tech Stack 
 Next.js App Router 
 TypeScript 
 Tailwind CSS 
 Vercel 
 
 ## Required Docs 
 Before editing, read: 
 - /docs/website/00_geo_first_website_structure.md 
 - /docs/website/cta-rules-simplified.md 
 - /docs/website/schema-rules-for-geo-seo.md 
 - /docs/website/mobile-responsive-rules.md 
 
 For destination work, also read: 
 - /docs/website/destinations-page-spec.md 
 
 For hospital access work, also read: 
 - /docs/website/hospital-access-page-rules.md 
 - /docs/website/footer-navigation-geo-rules.md 
 
 ## Hard Rules 
 Do not create fake hospitals. 
 Do not create fake doctors. 
 Do not create fake prices. 
 Do not create fake testimonials. 
 Do not create fake reviews or ratings. 
 Do not claim guaranteed appointments. 
 Do not claim guaranteed outcomes. 
 Do not claim Angel Doctor provides diagnosis or treatment. 
 Do not add Supabase in Phase 1 unless explicitly requested. 
 Do not add user accounts in Phase 1. 
 Do not add Stripe webhook in Phase 1. 
 Do not add unnecessary dependencies. 
 Do not deploy unless I explicitly say "deploy".
 Do not push to GitHub unless I explicitly say "push".
 
 ## Navigation 
 Main navigation: 
 Home 
 Treatments 
 Destinations 
 How It Works 
 Pricing 
 Why Angel Doctor 
 Guides 
 Contact 
 
 Footer navigation: 
 About Angel Doctor 
 Hospital Access 
 Trust & Safety 
 Medical Disclaimer 
 Privacy Policy 
 Terms 
 Contact 
 
 ## CTA System 
 Use only: 
 1. Get Your Care Plan 
 2. Book Local Medical Escort 
 
 Do not use Buy Now, Guaranteed Appointment, Upload Full Case, or Book Treatment Now. 
 
 ## Development Workflow 
 For each task: 
 1. Read relevant docs. 
 2. Create a plan file under /tasks. 
 3. Wait for approval if requested. 
 4. Implement only the approved scope. 
 5. Run npm run build. 
 6. Create a done file under /tasks. 
 
 ## Done File Format 
 Include: 
 - Task completed 
 - Files changed 
 - Routes affected 
 - Components created or modified 
 - SEO / GEO changes 
 - Schema changes 
 - Build result 
 - Known issues 
 - Next recommended task.

 Before making website changes, always read PROJECT_BRIEF.md and the relevant docs under /docs/website.