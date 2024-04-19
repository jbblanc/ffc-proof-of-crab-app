<script lang="ts">
	export let level = 2;
</script>

<div class="rating">
	<input
		type="radio"
		name="rating-2"
		class="mask mask-star-2 bg-orange-400"
		checked={level === 1}
	/>
	<input
		type="radio"
		name="rating-2"
		class="mask mask-star-2 bg-orange-400"
		checked={level === 2}
	/>
	<input
		type="radio"
		name="rating-2"
		class="mask mask-star-2 bg-orange-400"
		checked={level === 3}
	/>
</div>
