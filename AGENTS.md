# AGENTS.md 

 ## Project 
 Angel Doctor international medical tourism website. 
 
 ## Phase 
 Phase 1 Website + Lead Backend. 
 Supabase lead storage and Resend email notifications are approved for current lead capture. 
 Phase 2 will add Stripe webhook, admin tools, account access, payment tracking, and deeper operations workflows. 
 
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
 Supabase for lead storage 
 Resend for lead notification and auto-reply 
 
 ## Required Docs 
 Before editing, read: 
 - /docs/website/00_geo_first_website_structure.md 
 - /docs/website/cta-rules-simplified.md 
 - /docs/website/schema-rules-for-geo-seo.md 
 - /docs/website/手机端响应式设计规则.md 
 
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
 Supabase lead storage and Resend email notification are allowed for lead capture because they were explicitly requested. 
 Do not expose Supabase service role keys to the browser. 
 Do not allow direct public client writes to the leads table unless a future task explicitly adds abuse controls. 
 Do not add user accounts in Phase 1. 
 Do not add Stripe webhook in Phase 1. 
 Do not add admin dashboard in Phase 1 unless explicitly requested. 
 Do not add unnecessary dependencies. 
 Do not deploy unless I explicitly say "deploy".
 Do not push to GitHub unless I explicitly say "push".

 ## Lead Backend 
 Current approved lead backend: 
 - Supabase stores care plan and medical escort leads in the `leads` table. 
 - Next.js API routes write leads server-side using `SUPABASE_SERVICE_ROLE_KEY`. 
 - Resend sends team notifications and email auto-replies when configured. 
 - Required environment variables are documented in `.env.example`. 
 - Supabase table setup is documented in `/db/leads.sql`. 
 
 Lead backend boundaries: 
 - Keep forms lightweight. 
 - Do not require medical record uploads. 
 - Do not add patient accounts or login. 
 - Do not add Stripe webhook or payment status tracking yet. 
 - Do not add complex CRM automation unless explicitly requested. 
 
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
