<script lang="ts">
	export let label: string;
	export let style = 'primary';
	export let outline = false;
	export let shadow = false;
	export let wfull = false;
	export let small = false;
	export let disabled = false;
	export let loading = false;
	export let textColor = ''; // can be overridden here, if not, will use *-content color
	export let href = null;
	export let target = '_self';
	export let isMetamaskButton = false;
</script>

{#if href}
	<a
		class="btn {textColor}"
		class:btn-primary={style === 'primary'}
		class:btn-secondary={style === 'secondary'}
		class:btn-accent={style === 'accent'}
		class:btn-neutral={style === 'neutral'}
		class:btn-outline={outline}
		class:drop-shadow-lg={shadow && !outline}
		class:bg-orange-400={isMetamaskButton}
		class:border-orange-400={isMetamaskButton}
		class:hover:bg-orange-500={isMetamaskButton}
		class:hover:border-orange-500={isMetamaskButton}
		class:btn-sm={small}
		class:w-full={wfull}
		on:click
		{href}
		{target}
	>
		<slot name="icon" />
		{#if loading}
			<span class:loading class:loading-spinner={loading} />
		{/if}
		{label}
	</a>
{:else}
	<button
		class="btn {textColor}"
		class:btn-primary={style === 'primary'}
		class:btn-secondary={style === 'secondary'}
		class:btn-accent={style === 'accent'}
		class:btn-neutral={style === 'neutral'}
		class:btn-outline={outline}
		class:drop-shadow-lg={shadow && !outline}
		class:bg-orange-400={isMetamaskButton}
		class:border-orange-400={isMetamaskButton}
		class:hover:bg-orange-500={isMetamaskButton}
		class:hover:border-orange-500={isMetamaskButton}
		class:btn-sm={small}
		class:w-full={wfull}
		on:click
		{disabled}
	>
		<slot name="icon" />
		{#if loading}
			<span class:loading class:loading-spinner={loading} />
		{/if}
		{label}
	</button>
{/if}
