<script lang="ts">
	export let score = 'NOT_COMPLETED';
</script>

<span
	class="badge badge-sm"
	class:badge-ghost={score === 'NOT_COMPLETED'}
	class:badge-success={score === 'PASSED'}
	class:badge-error={score === 'FAILED'}
	class:text-white={score === 'PASSED' || score === 'FAILED'}
	>{score?.toLocaleLowerCase().replace('_', ' ')}</span
>
