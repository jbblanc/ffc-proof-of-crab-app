<script lang="ts">
	import Button from '../../../components/Button.svelte';
	import type { PageData } from './$types';
	import CrabsTable from './components/CrabsTable.svelte';
	import FrameOverview from './components/FrameOverview.svelte';

	export let data: PageData;
</script>

<div class="w-full">
	<Button style="neutral" label=" < Back to frames list" href="/frames/all" />

	<FrameOverview frame={data.frame} phosphorItem={data.phosphorItem} />

	<div class="divider text-xl">Crabs for this challenge</div>

	<CrabsTable crabs={data.crabs} />
</div>
