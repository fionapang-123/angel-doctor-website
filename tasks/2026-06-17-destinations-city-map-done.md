# Destinations city map done

## Task completed

Added a lightweight China Medical Travel City Map section to the `/destinations` main page.
Revised the first abstract map treatment into a cleaner City Atlas layout after visual feedback.
Replaced the City Atlas treatment with the user-provided China map hero image and retained crawlable city links.

## Files changed

- `src/app/destinations/page.tsx`
- `public/images/destinations/china-medical-travel-city-map.png`
- `tasks/2026-06-17-destinations-city-map-plan.md`
- `tasks/2026-06-17-destinations-city-map-done.md`

## Routes affected

- `/destinations`

## Components created or modified

- Added `ChinaCityMap` inside the destinations page.
- Reused the existing destinations city data and added map coordinates for the 11 supported cities.
- Replaced the abstract map-shape panel with a regional city atlas grouped by North China, East China, Central China, South China, and West China.
- Replaced the atlas panel with the user-provided China medical map image, overlaid desktop city labels, and added a mobile-friendly linked city list below the image.

## SEO / GEO changes

- Added a visible city-map section titled `China Medical Travel City Map`.
- Added linked, crawlable city labels for Shenzhen, Guangzhou, Shanghai, Beijing, Chengdu, Chongqing, Hangzhou, Nanjing, Wuhan, Xi'an, and Zhuhai.
- Added explanatory copy that connects city choice to treatment need, provider type, travel route, timeline, and local support requirements.
- Added compliance copy noting that city recommendations depend on treatment need, provider availability, appointment timing, medical record review when needed, and support requirements.
- Added descriptive image alt text covering the China medical travel destination map and supported city names.

## Schema changes

- None.

## Build result

- `npm run build` passed.

## Known issues

- Browser preview restart on port 3005 could not be completed because local network permission was not granted for starting a new server in this turn.
- The current implementation uses the provided bitmap map asset plus HTML city links, so city labels remain accurate and crawlable.

## Next recommended task

Preview `/destinations` at 375px, 390px, 768px, 1024px, and desktop width after the local preview server is restarted.
