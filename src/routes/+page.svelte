<script>
	import Button from '../components/Button.svelte';
	import { env } from '$env/dynamic/public';
</script>

<div class="hero bg-neutral min-h-screen" data-theme="night">
	<div class="hero-content flex-col lg:flex-row">
		<img
			src="https://jopwkvlrcjvsluwgyjkm.supabase.co/storage/v1/object/public/poc-images/GrabHome.png"
			class="max-w-sm rounded-lg shadow-2xl"
			alt="Proof of Crab"
		/>
		<div>
			<h1 class="text-5xl font-bold">Discover Proof of Crab</h1>
			<p class="py-6">
				Proof of Crab is a farcaster frame to check Proof of Humanity and deliver Proof tokens.
			</p>
			<Button
				label="Get started in Warpcast !"
				href="https://warpcast.com/~/compose?embeds[]={env.PUBLIC_FRAME_URL}/api"
			/>
			<Button style="secondary" label="Check crabs from genesis frame" href="/frames" />
		</div>
	</div>
</div>
