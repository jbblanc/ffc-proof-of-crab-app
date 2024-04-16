import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';

export async function load({ params, fetch }) {
	if (!params.id) {
		throw error(404, 'Invalid route');
	}
	try {
		const frame = 'null';
		console.log(env.SERVER_SUPABASE_URL);
		if (frame) {
			return {
				id: params.id
				//frame:
				//crabs:
			};
		}
	} catch (e: any) {
		console.log(e);
		throw error(500, { message: e?.message });
	}
	throw error(404, `Frame not found for ${params.id}`);
}
