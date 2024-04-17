<script lang="ts">
	import Footer from '../../components/Footer.svelte';
	import Header from '../../components/Header.svelte';
	import { media } from '../../stores/media';

	let windowWidth: number;
	$: if (windowWidth) media.up(windowWidth);
</script>

<svelte:window bind:innerWidth={windowWidth} />

<div class="sm:main-layout main-layout-mobile bg-neutral min-h-screen" data-theme="night">
	<Header />
	<div class="text-neutral-content flex w-full justify-center pb-5">
		<div class="flex w-full justify-center px-3 sm:w-4/5 sm:px-0">
			<slot />
		</div>
	</div>
	<Footer />
</div>

<style>
	.main-layout {
		display: grid;
		grid-template-rows: 5.5rem auto 6rem;
	}
	.main-layout-mobile {
		display: grid;
		grid-template-rows: 4.5rem auto 12rem;
	}
	.consensys_nft_bg {
		background-image: linear-gradient(120deg, #5d39c8 0%, #d05265 100%);
	}
</style>
