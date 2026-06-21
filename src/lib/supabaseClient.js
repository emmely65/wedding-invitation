import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hyskutdeuxsurxtzphwu.supabase.co';
const supabaseAnonKey = 'sb_publishable_CjW_a7No56BbCinwdnoTlA_FJQi3XIN';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
