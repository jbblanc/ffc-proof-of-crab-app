import { error } from '@sveltejs/kit';
import { env } from '$env/dynamic/private';
import { getPocChallengesForFrame, getPocFrame } from '../../../lib/db.js';
import { getPublicItemForFrame } from '../../../lib/phosphor-public.js';

export async function load({ params, fetch }) {
	if (!params.id) {
		throw error(404, 'Invalid route');
	}
	try {
		const frame = await getPocFrame(params.id);
		if (frame) {
			const crabs = await getPocChallengesForFrame(frame.id);
			const phosphorItem = await getPublicItemForFrame(frame);
			return {
				id: params.id,
				frame,
				crabs,
				phosphorItem
			};
		}
	} catch (e: any) {
		console.log(e);
		throw error(500, { message: e?.message });
	}
	throw error(404, `Frame not found for ${params.id}`);
}
