<script lang="ts">
	import Button from '../../../../components/Button.svelte';
	import type { ProofOfCrabFrame } from '../../../../domain/poc-frame';
	import SecurityLevel from './SecurityLevel.svelte';
	import { env } from '$env/dynamic/public';

	export let frame: ProofOfCrabFrame;
	export let phosphorItem: any;
</script>

<div class="grid w-full grid-cols-3 space-x-20">
	<div class="p-3">
		<div class="flex">
			<div>
				<img
					class="rounded-badge"
					src={frame.account_user?.pfp_url}
					width="100px"
					height="100px"
					alt="{frame.account_user?.username} profile picture"
				/>
			</div>
			<div class="p-3">
				<div class="font-bold">{frame.account_user?.display_name}</div>
				<div>&#64;{frame.account_user?.username}</div>
			</div>
		</div>
		<div class="mt-3 text-lg font-bold">
			{frame.name}
		</div>
		<div class="mt-3 flex space-x-3">
			<div>Challenge Security Level</div>
			<div><SecurityLevel level={frame.security_level} /></div>
		</div>
	</div>
	<div class="flex flex-col space-y-5 p-10">
		<Button
			label="Re-Cast in Warpcast"
			href="https://warpcast.com/~/compose?embeds[]={env.PUBLIC_FRAME_URL}/api/proof-of-crab/{frame.id}"
		/>
		<Button
			style="secondary"
			label="Copy Link"
			on:click={() => {
				navigator.clipboard.writeText(`${env.PUBLIC_FRAME_URL}/api/proof-of-crab/${frame.id}`);
			}}
			><svelte:fragment slot="icon"
				><svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M17.8333 18C20.1345 18 22 16.0972 22 13.75V5.25C22 2.90279 20.1345 1 17.8333 1H11.1667C8.86548 1 7 2.90279 7 5.25"
						stroke="white"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<path
						d="M2 10.25C2 7.90279 3.86548 6 6.16667 6H12.8333C15.1345 6 17 7.90279 17 10.25V18.75C17 21.0972 15.1345 23 12.8333 23H6.16667C3.86548 23 2 21.0972 2 18.75V10.25Z"
						stroke="white"
						stroke-width="1.5"
					/>
				</svg></svelte:fragment
			>
		</Button>
		<Button style="secondary" label="View Proof" href={frame.phosphor_proof_url} />
	</div>
	<div class="p-3">
		<div>
			<img src={phosphorItem?.media.image.thumb} alt="proof of crab" class="rounded-badge" />
		</div>
		<div class="text-center">{phosphorItem?.attributes.title}</div>
	</div>
</div>
