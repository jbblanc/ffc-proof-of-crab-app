import type { FarcasterUser } from "./farcaster-user";


export interface ProofOfCrabFrame {
  id: string;
  name: string;
  security_level: number;
  phosphor_organization_id: string;
  phosphor_proof_collection_id: string;
  phosphor_proof_item_id: string;
  phosphor_proof_url: string;
  account_fid: string;
  account_user: FarcasterUser;
  created_at: Date;
}
