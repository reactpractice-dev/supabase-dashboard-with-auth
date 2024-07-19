import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://qwzwydjpcvtxzpqkbnbq.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF3end5ZGpwY3Z0eHpwcWtibmJxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjE0MDkxNjQsImV4cCI6MjAzNjk4NTE2NH0.vQMrxDhlcv8ADcX20CnFuP70GI-oRxb9EXpzeu4dbvc"
);

export default supabase;
