// src/lib/supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = '<your-supabase-url>';
const supabaseKey = '<your-anon-key>';
export const supabase = createClient(supabaseUrl, supabaseKey);
