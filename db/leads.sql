-- Run this in Supabase SQL Editor (https://supabase.com/dashboard/project/_/sql)
-- Creates the leads table for Angel Doctor contact form submissions.

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

-- Allow inserts from the public anon key (for API routes using service_role)
-- Service role bypasses RLS, so this is for future client-side use if needed
CREATE POLICY "anon_can_insert" ON leads
  FOR INSERT TO anon
  WITH CHECK (true);

-- Only authenticated users (admin dashboard) can read
CREATE POLICY "auth_can_select" ON leads
  FOR SELECT TO authenticated
  USING (true);
