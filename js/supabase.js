const supabaseUrl = "https://qsysogqxkargikvpsrud.supabase.co";
const supabaseKey = "sb_publishable_-qxCSgUq6IEmKMNEg3vzYw_hWg0e9-i";

const _supabase = (typeof window !== 'undefined' && window.supabase)
    ? window.supabase.createClient(supabaseUrl, supabaseKey)
    : null;

export const supabase = _supabase;