<script lang="ts">
	import type { PageData } from './$types';
	import CrabsTable from './components/CrabsTable.svelte';
	import FrameOverview from './components/FrameOverview.svelte';

	export let data: PageData;
</script>

<div class="w-full">
	<FrameOverview frame={data.frame} phosphorItem={data.phosphorItem} />
	<CrabsTable crabs={data.crabs} />
</div>
