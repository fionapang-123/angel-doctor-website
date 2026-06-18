# Lead Capture and GEO Fixes Done

## Task completed
Improved the Angel Doctor project for consumer lead capture reliability, GEO schema coverage, and trust/compliance cleanup.

## Files changed
- `src/app/api/contact/route.ts`
- `src/app/api/escort/route.ts`
- `src/app/contact/page.tsx`
- `src/app/destinations/beijing-medical-travel/page.tsx`
- `src/app/destinations/chengdu-medical-travel/page.tsx`
- `src/app/destinations/chongqing-medical-travel/page.tsx`
- `src/app/destinations/guangzhou-medical-travel/page.tsx`
- `src/app/destinations/hangzhou-medical-travel/page.tsx`
- `src/app/destinations/nanjing-medical-travel/page.tsx`
- `src/app/destinations/shenzhen-medical-travel/page.tsx`
- `src/app/destinations/wuhan-medical-travel/page.tsx`
- `src/app/destinations/xian-medical-travel/page.tsx`
- `src/app/destinations/zhuhai-medical-travel/page.tsx`
- `src/app/treatments/dental-care-china/page.tsx`
- `src/app/treatments/health-checkup-china/page.tsx`
- `src/app/treatments/medical-second-opinion-china/page.tsx`
- `src/app/treatments/tcm-recovery-china/page.tsx`
- `src/components/DestinationCityPage.tsx`
- `src/components/HospitalCard.tsx`
- `src/components/TreatmentPage.tsx`
- `src/components/forms.tsx`
- `src/config/metadata.ts`
- `src/config/schema.ts`
- `src/lib/email.ts`
- `src/lib/lead.ts`
- `tasks/2026-06-17-lead-capture-geo-fixes-plan.md`
- `tasks/2026-06-17-lead-capture-geo-fixes-done.md`

## Routes affected
- `/api/contact`
- `/api/escort`
- `/contact`
- `/treatments/dental-care-china`
- `/treatments/health-checkup-china`
- `/treatments/medical-second-opinion-china`
- `/treatments/tcm-recovery-china`
- `/destinations/beijing-medical-travel`
- `/destinations/chengdu-medical-travel`
- `/destinations/chongqing-medical-travel`
- `/destinations/guangzhou-medical-travel`
- `/destinations/hangzhou-medical-travel`
- `/destinations/nanjing-medical-travel`
- `/destinations/shanghai-medical-travel`
- `/destinations/shenzhen-medical-travel`
- `/destinations/wuhan-medical-travel`
- `/destinations/xian-medical-travel`
- `/destinations/zhuhai-medical-travel`

## Components created or modified
- Created `src/lib/lead.ts` for contact validation and lead-capture configuration checks.
- Modified `TreatmentPage` to generate page schema from treatment data.
- Modified `DestinationCityPage` to generate page schema from city data when needed.
- Modified `HospitalCard` to remove unsupported doctor-count display.
- Modified contact and modal forms to align visible fields with accepted contact formats.

## SEO / GEO changes
- Added metadata generation for all custom treatment pages.
- Added schema generation for custom treatment pages.
- Added schema generation for destination pages that previously missed JSON-LD.
- Normalized slugs with or without leading `/` for canonical/schema URL generation.
- Corrected city-level `Service.areaServed` mapping for Beijing, Chengdu, Chongqing, Guangzhou, Hangzhou, Nanjing, Shanghai, Shenzhen, Wuhan, Xi'an, and Zhuhai.

## Schema changes
- Treatment detail pages now output Organization, WebSite, WebPage, BreadcrumbList, Service, and FAQPage schema where FAQs are visible.
- City destination pages now output city-specific Service schema where schema is generated from city data.
- Existing manually injected destination schemas were preserved while disabling duplicate component schema on those routes.

## Build result
Passed.

Commands:
```bash
npm run typecheck
npm run build
npm run lint
```

Result:
- TypeScript passed before production build generation.
- Next.js production build passed.
- 49 static pages generated.
- 2 dynamic API routes generated.
- Lint still fails on pre-existing `react/no-unescaped-entities` issues in pages not changed by this task: `src/app/about/page.tsx`, `src/app/destinations/page.tsx`, `src/app/hospital-access/page.tsx`, `src/components/HomePage.tsx`, and `src/components/PricingPage.tsx`.
- Running `npm run typecheck` after `npm run build` can fail on generated `.next/types/validator.ts` route constraints because the repo includes both `.next/types/**/*.ts` and `.next/dev/types/**/*.ts` in `tsconfig.json`; `next build` itself passes TypeScript.

## Runtime verification
Production server verification was run locally.

Results:
- `/api/contact` accepts WhatsApp-style contact values.
- `/api/contact` rejects invalid contact values with `Please provide a valid email address or WhatsApp number.`
- `/api/escort` accepts WhatsApp-style contact values.
- `/treatments/health-checkup-china` renders Service and FAQPage schema.
- `/destinations/chengdu-medical-travel` renders `Service.areaServed.name = Chengdu`.
- `/destinations/chongqing-medical-travel` renders `Service.areaServed.name = Chongqing`.
- `/destinations/shanghai-medical-travel` renders `Service.areaServed.name = Shanghai`.

## Known issues
- The local Resend key returned an invalid API key error during runtime verification.
- The runtime API test used `audit validation only` and may have created test leads if Supabase was configured.
- Supabase remains present because the current project already had API routes and dependencies using it; this task reduced lead-loss behavior but did not remove the existing integration.
- Several treatment pages still contain concrete cost and speed comparison claims that should remain source-backed before launch.

## Next recommended task
Decide the Phase 1 lead-capture operating mode:
- Resend-only email notifications,
- Supabase-backed lead storage,
- or a strictly frontend/static fallback.

Then clean environment variables so production either has a valid notification channel or returns a clear setup error before launch.
