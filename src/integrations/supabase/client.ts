import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const supabaseUrl = 'https://swgjfcicvaxedtvlqisd.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN3Z2pmY2ljdmF4ZWR0dmxxaXNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk4MjI0MDAsImV4cCI6MjAyNTM5ODQwMH0.Ij5l-GZxgzXirF_Hs-QxNnHmXFYEbKcS0-Rh_t8FJ_Q';

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);