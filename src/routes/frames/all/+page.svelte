<script lang="ts">
	import type { PageData } from '../$types';
	import FramesTable from './components/FramesTable.svelte';
	import { env } from '$env/dynamic/public';
	import Button from '../../../components/Button.svelte';

	export let data: PageData;
</script>

<div class="w-full">
	<div class="mt-6 flex justify-center">
		<Button
			style="secondary"
			label="View Genesis frame details"
			href="/frames/{env.PUBLIC_DEFAULT_POC_FRAME_ID}"
		/>
	</div>
	<div class="divider mt-12 text-xl">Custom frames created by users</div>

	<FramesTable frames={data.frames.filter((f) => f.id !== env.PUBLIC_DEFAULT_POC_FRAME_ID)} />
</div>
