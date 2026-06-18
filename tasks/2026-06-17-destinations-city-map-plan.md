# Destinations city map plan

## Goal

Add a lightweight China Medical Travel City Map section to the `/destinations` main page.

## Scope

- Add one overview map section between the quick answer and city cards.
- Use a single project image asset as the map background.
- Overlay the 11 supported cities with text labels and links to city pages.
- Keep mobile layout readable with a single-column city list under the map.
- Add compliance copy that city recommendations depend on treatment need, provider availability, timeline, and local support requirements.

## Routes affected

- `/destinations`

## Out of scope

- Separate image per city.
- Hospital-specific map points.
- Heavy map library or geolocation.
- New destination routes.

## Verification

- Run `npm run build`.
- Preview `/destinations` at mobile and desktop widths if possible.
