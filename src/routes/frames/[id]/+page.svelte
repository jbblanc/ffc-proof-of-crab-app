<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	console.log(data.id);
</script>

<div>
	<div>Frame {data.id} overview + links/access</div>
	<div>Crabs list</div>
</div>
