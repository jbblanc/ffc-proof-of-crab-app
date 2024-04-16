<script lang="ts">
	import type { ProofOfCrabChallenge } from '../../../../domain/poc-challenge';
	import BadgeStatus from './BadgeScore.svelte';

	export let crabs: ProofOfCrabChallenge[] = [];
</script>

<div>
	<div>Total challenges: {crabs?.length}</div>
	<div>
		Total challenges passed: {crabs?.length ? crabs.filter((c) => c.score === 'PASSED').length : 0}
	</div>
	<div>
		Total proofs minted: {crabs?.length ? crabs.filter((c) => c.has_minted_proof).length : 0}
	</div>
</div>
<div class="overflow-x-auto">
	<table class="table">
		<!-- head -->
		<thead class="text-secondary text-xl font-bold">
			<tr>
				<th>Crab</th>
				<th>Challenged on</th>
				<th>Has minted Proof</th>
				<th></th>
			</tr>
		</thead>
		<tbody>
			{#each crabs as crab, id}
				<tr>
					<td>
						<div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle h-12 w-12">
									<img src={crab.user?.pfp_url} alt="Avatar Tailwind CSS Component" />
								</div>
							</div>
							<div>
								<div class="font-bold">{crab.user?.display_name}</div>
								<div class="text-sm opacity-50">{crab.user?.username}</div>
							</div>
						</div>
					</td>
					<td>
						{crab.created_at}
						<br />
						<BadgeStatus score={crab.score} />
					</td>
					<td>{crab.has_minted_proof}</td>
					<th>
						<button class="btn btn-ghost btn-xs">view tx</button>
					</th>
				</tr>
			{/each}
		</tbody>
	</table>
</div>
