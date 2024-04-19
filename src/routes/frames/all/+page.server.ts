import { error } from '@sveltejs/kit';
import { getPocFrames } from '../../../lib/db.js';

export async function load() {
	try {
		const allFrames = await getPocFrames();
		return {
			frames: allFrames
		};
	} catch (e: any) {
		console.log(e);
		throw error(500, { message: e?.message });
	}
}
