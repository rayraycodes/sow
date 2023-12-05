import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://uicktjplhqafbpofkxnq.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVpY2t0anBsaHFhZmJwb2ZreG5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTk5MDI4NzIsImV4cCI6MjAxNTQ3ODg3Mn0._22mizpUQkptTC5xgbjAB4Gc8amR_ozkET3RS-bNX5Y';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;