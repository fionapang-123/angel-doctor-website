-- Run this in Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- Creates the leads table for Angel Doctor contact and escort form submissions.
-- The website writes leads through Next.js API routes with SUPABASE_SERVICE_ROLE_KEY.
-- Do not expose direct client-side inserts unless a future task explicitly adds abuse controls.

CREATE TABLE IF NOT EXISTS leads (
  id            uuid DEFAULT gen_random_uuid() PRIMARY KEY,
  source        text NOT NULL CHECK (source IN ('contact', 'escort')),
  contact       text NOT NULL,
  treatment     text,
  city          text,
  timeline      text,
  local_support boolean DEFAULT false,
  message       text,
  -- escort-specific fields
  provider      text,
  visit_date    text,
  duration      text,
  language      text,
  tasks         text,
  -- metadata
  status        text DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
  created_at    timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Service role bypasses RLS for the server API routes.
DROP POLICY IF EXISTS "anon_can_insert" ON leads;

-- Only authenticated users (admin dashboard) can read
CREATE POLICY "auth_can_select" ON leads
  FOR SELECT TO authenticated
  USING (true);

CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
CREATE INDEX IF NOT EXISTS leads_source_status_idx ON leads (source, status);
