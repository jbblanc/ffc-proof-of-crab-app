import { createClient } from '@supabase/supabase-js';
import { env } from '$env/dynamic/private';

let _client: any;
// !! ONLY WORKS SERVERSIDE !!
export function getSupabaseClient() {
	if (!_client) {
		_client = createClient(env.SERVER_SUPABASE_URL, env.SERVER_SUPABASE_KEY);
	}
	return _client;
}
