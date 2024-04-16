import type { ProofOfCrabChallenge } from '../domain/poc-challenge';
import type { ProofOfCrabFrame } from '../domain/poc-frame';
import { getSupabaseClient } from './supabase';

export async function getPocFrame(frameId: string): Promise<ProofOfCrabFrame> {
	let { data: poc_frame, error } = await getSupabaseClient()
		.from('poc_frame')
		.select(
			'id,name,security_level,created_at,phosphor_proof_item_id, phosphor_proof_url, phosphor_organization_id, phosphor_proof_collection_id, account_fid, account_user'
		) // ignore phosphor apikey here
		.eq('id', frameId);
	if (poc_frame) {
		return poc_frame[0];
	} else {
		throw new Error(`Frame not found or Invalid frame id: ${frameId}`);
	}
}

export async function getPocChallengesForFrame(frameId: string): Promise<ProofOfCrabChallenge[]> {
	let { data: poc_frame_challenge, error } = await getSupabaseClient()
		.from('poc_frame_challenge')
		.select('*')
		.eq('frame_id', frameId)
		.order('created_at', { ascending: false });
	if (poc_frame_challenge) {
		return poc_frame_challenge;
	} else {
		return [];
	}
}
