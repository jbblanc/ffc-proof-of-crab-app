import { redirect } from '@sveltejs/kit';
import { env } from '$env/dynamic/public';

export async function load({ params, fetch }) {
	console.log(env.PUBLIC_DEFAULT_POC_FRAME_ID);
	redirect(301, `/frames/${env.PUBLIC_DEFAULT_POC_FRAME_ID}`); //TODO get default frame id here
}
