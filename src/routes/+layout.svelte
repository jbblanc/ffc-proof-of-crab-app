<script lang="ts">
	import '../app.pcss';
	import { media } from '../stores/media';

	let windowWidth: number;
	$: if (windowWidth) media.up(windowWidth);
</script>

<svelte:window bind:innerWidth={windowWidth} />

<slot />
