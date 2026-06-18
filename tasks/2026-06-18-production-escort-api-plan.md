# Production Escort API Upgrade Plan

- Replace the escort API route with the supplied resilient field mapping and validation flow.
- Adapt Supabase initialization and required lead fields to the repository's existing server-side API.
- Run the production build.
- Record the result, stage all requested files, commit, and push the current branch without merging main.
