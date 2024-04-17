<script>
	import Button from '../components/Button.svelte';
	import { env } from '$env/dynamic/public';
	import Footer from '../components/Footer.svelte';
	import { isPhone } from '../stores/media';
</script>

<div class="sm:hero bg-neutral min-h-screen w-full" data-theme="night">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="https://jopwkvlrcjvsluwgyjkm.supabase.co/storage/v1/object/public/poc-images/GrabHome.png"
			class="rounded-lg shadow-2xl sm:max-w-sm"
			alt="Proof of Crab"
		/>
		<div>
			<h1 class="text-4xl font-bold sm:text-5xl">Discover Proof of Crab</h1>
			<p class="py-6">
				Proof of Crab uses farcaster frames to check Proof of Humanity and deliver Soulbound Proof
				tokens.
			</p>
			<div class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
				<Button
					label="Get started in Warpcast !"
					href="https://warpcast.com/~/compose?embeds[]={env.PUBLIC_FRAME_URL}/api"
				/>
				<Button style="secondary" label="Check crabs from genesis frame" href="/frames" />
			</div>
		</div>
	</div>
	{#if $isPhone}
		<Footer />
	{/if}
</div>
