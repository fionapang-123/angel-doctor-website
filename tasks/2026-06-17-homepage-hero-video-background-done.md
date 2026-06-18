# Homepage Hero Video Background Done

## Task completed
Updated the homepage hero to use a desktop video background and a mobile static hero image while keeping GEO / SEO content as visible HTML.

## Files changed
- `src/components/HomePage.tsx`
- `public/videos/angel-doctor-hero-hospital-access.mp4`
- `public/videos/angel-doctor-hero-hospital-access-poster.jpg`
- `public/videos/angel-doctor-hero-mobile-escort.jpg`
- `tasks/2026-06-17-homepage-hero-video-background-plan.md`
- `tasks/2026-06-17-homepage-hero-video-background-done.md`

## Routes affected
- `/`

## Components created or modified
- Modified `HomePage` hero section.

## SEO / GEO changes
- Kept the hero H1, value proposition, service description, CTA text, and trust cues as visible HTML.
- Video is decorative only and hidden from assistive technology with `aria-hidden`.
- Added a poster image fallback for stable first paint.
- Mobile uses a static optimized image instead of video for faster loading.

## Schema changes
- No schema changes.

## Build result
- `npm run build` passed.

## Known issues
- `next dev` initially produced file watcher warnings in this environment, so visual QA used production preview from `npm run start`.
- Production preview was stopped after verification to avoid leaving port `3000` occupied.

## Next recommended task
- Fine-tune the hero copy and trust cues if the brand wants to move closer to the reference wording style.
