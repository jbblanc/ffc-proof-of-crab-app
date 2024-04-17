<script lang="ts">
	import Button from '../../../../components/Button.svelte';
	import type { ProofOfCrabFrame } from '../../../../domain/poc-frame';
	import SecurityLevel from './SecurityLevel.svelte';
	import { env } from '$env/dynamic/public';

	export let frame: ProofOfCrabFrame;
	export let phosphorItem: any;
</script>

<div class="grid w-full sm:grid-cols-3 space-x-20">
	<div class="p-3">
		<div class="mt-3 text-xl font-bold">
			{frame.name}
		</div>
		<div class="mt-3 flex space-x-3">
			<div>Challenge Security Level</div>
			<div><SecurityLevel level={frame.security_level} /></div>
		</div>
		<div class="mt-5 flex">
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
	</div>
	<div class="flex flex-col space-y-5 p-10">
		<Button
			label="Re-Cast in Warpcast"
			href="https://warpcast.com/~/compose?embeds[]={env.PUBLIC_FRAME_URL}/api/proof-of-crab/{frame.id}"
		>
			<svelte:fragment slot="icon">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 428.000000 428.000000"
					preserveAspectRatio="xMidYMid meet"
					><g
						transform="translate(0.000000,428.000000) scale(0.100000,-0.100000)"
						fill="#000000"
						stroke="none"
						><path
							d="M875 4265 c-271 -30 -450 -116 -624 -301 -66 -71 -91 -107 -135 -198 -66 -134 -93 -240 -107 -419 -6 -85 -9 -552 -6 -1307 3 -1146 4 -1177 24 -1270 44 -200 109 -330 227 -456 174 -187 348 -269 636 -299 198 -22 2302 -22 2500 0 267 28 430 98 594 254 148 142 227 294 273 526 17 84 18 179 18 1345 0 1165 -1 1261 -18 1345 -42 211 -109 352 -231 481 -174 187 -351 270 -636 300 -187 19 -2333 18 -2515 -1z m702 -1720 c56 -209 103 -387 105 -395 2 -8 51 163 109 380 l105 395 242 3 c222 2 242 1 250 -15 5 -10 53 -186 108 -391 54 -205 101 -367 104 -360 2 7 50 182 105 388 l100 375 278 3 c188 1 277 -1 277 -8 0 -9 -469 -1615 -501 -1718 l-11 -32 -241 2 -241 3 -111 393 c-60 215 -112 392 -115 392 -3 0 -55 -177 -115 -392 l-111 -393 -241 -3 c-224 -2 -242 -1 -247 15 -150 505 -506 1724 -506 1732 0 8 79 11 278 9 l277 -3 102 -380z"
						></path></g
					></svg
				>
			</svelte:fragment>
		</Button>
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
						stroke="#000000"
						stroke-width="1.5"
						stroke-linecap="round"
					/>
					<path
						d="M2 10.25C2 7.90279 3.86548 6 6.16667 6H12.8333C15.1345 6 17 7.90279 17 10.25V18.75C17 21.0972 15.1345 23 12.8333 23H6.16667C3.86548 23 2 21.0972 2 18.75V10.25Z"
						stroke="#000000"
						stroke-width="1.5"
					/>
				</svg></svelte:fragment
			>
		</Button>
		<Button style="secondary" label="View Proof" href={frame.phosphor_proof_url}>
			<svelte:fragment slot="icon">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M12 9.75C10.755 9.75 9.75 10.755 9.75 12C9.75 13.245 10.755 14.25 12 14.25C13.245 14.25 14.25 13.245 14.25 12C14.25 10.755 13.245 9.75 12 9.75ZM8.25 12C8.25 9.92657 9.92657 8.25 12 8.25C14.0734 8.25 15.75 9.92657 15.75 12C15.75 14.0734 14.0734 15.75 12 15.75C9.92657 15.75 8.25 14.0734 8.25 12Z"
						fill="black"
					/>
					<path
						fill-rule="evenodd"
						clip-rule="evenodd"
						d="M2.28276 9.27342C4.69293 5.94267 8.19612 3.96997 12 3.96997C15.8041 3.96997 19.3075 5.94286 21.7177 9.27392C22.2792 10.0479 22.535 11.0421 22.535 11.995C22.535 12.948 22.2791 13.9424 21.7173 14.7165C19.3071 18.0473 15.8039 20.02 12 20.02C8.19593 20.02 4.69258 18.0471 2.2824 14.716C1.72084 13.942 1.46503 12.9478 1.46503 11.995C1.46503 11.0419 1.72094 10.0475 2.28276 9.27342ZM12 5.46997C8.74412 5.46997 5.66747 7.15436 3.49765 10.1532L3.49694 10.1542C3.159 10.6197 2.96503 11.2866 2.96503 11.995C2.96503 12.7033 3.159 13.3703 3.49694 13.8357L3.49765 13.8367C5.66747 16.8356 8.74412 18.52 12 18.52C15.2559 18.52 18.3326 16.8356 20.5024 13.8367L20.5031 13.8357C20.8411 13.3703 21.035 12.7033 21.035 11.995C21.035 11.2866 20.8411 10.6197 20.5031 10.1542L20.5024 10.1532C18.3326 7.15436 15.2559 5.46997 12 5.46997Z"
						fill="black"
					/>
				</svg>
			</svelte:fragment>
		</Button>
	</div>
	<div class="p-3">
		<div>
			<img src={phosphorItem?.media.image.thumb} alt="proof of crab" class="rounded-badge" />
		</div>
		<div class="text-center sm:mt-2">{phosphorItem?.attributes.title}</div>
	</div>
</div>
