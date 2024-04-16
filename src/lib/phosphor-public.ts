import type { ProofOfCrabFrame } from '../domain/poc-frame';
import { env } from '$env/dynamic/public';

export async function getPublicItemForFrame(pocFrame: ProofOfCrabFrame) {
	const itemResponse = await fetch(
		`${env.PUBLIC_PHOSPHOR_PUBLIC_URL}/v1/items/${pocFrame.phosphor_proof_item_id}`,
		{
			method: 'GET',
			headers: { 'Content-Type': 'application/json' }
		}
	);
	const item = await itemResponse.json();
	//console.log(JSON.stringify(item));
	return item;
}
