<script lang="ts">
	import { parse } from 'svelte/compiler';
	import type { ProofOfCrabChallenge } from '../../../../domain/poc-challenge';
	import BadgeStatus from './BadgeScore.svelte';
	import { isPhone } from '../../../../stores/media';

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
{#if $isPhone}
	<div class="mt-5 flex flex-col space-y-2">
		{#each crabs as crab, id}
			<div class="grid grid-cols-2 rounded-md border border-opacity-60 p-2">
				<div>
					<div class="flex items-center gap-3">
						<div class="avatar">
							<div class="mask mask-squircle h-12 w-12">
								<img src={crab.user?.pfp_url} alt="{crab.user?.username} profile picture" />
							</div>
						</div>
						<div>
							<div class="font-bold">{crab.user?.display_name}</div>
							<div class="text-sm opacity-75">&#64;{crab.user?.username}</div>
						</div>
					</div>
					<div class="text-xs italic opacity-50">
						{new Date(crab.created_at ?? '').toLocaleString().replace(',', '')}
					</div>
				</div>
				<div class="grid">
					<div class="flex justify-end space-x-2 text-xs">
						<BadgeStatus score={crab.score} />
					</div>
					<div class="grid items-end">
						<div class="flex items-center justify-start space-x-2 text-xs">
							{#if crab.has_minted_proof}
								<span class="badge badge-sm badge-info">minted</span>
								<a class="btn btn-ghost btn-xs" href="https://lineascan.build/tx/">view tx</a>
							{/if}
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
{:else}
	<div class="">
		<table class="table">
			<!-- head -->
			<thead class="text-secondary text-xl font-bold">
				<tr>
					<th>Crab</th>
					<th>Challenged on</th>
					<th></th>
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
										<img src={crab.user?.pfp_url} alt="{crab.user?.username} profile picture" />
									</div>
								</div>
								<div>
									<div class="font-bold">{crab.user?.display_name}</div>
									<div class="text-sm opacity-50">&#64;{crab.user?.username}</div>
								</div>
							</div>
						</td>
						<td>
							{new Date(crab.created_at ?? '').toLocaleString().replace(',', '')}
							<br />
							<BadgeStatus score={crab.score} />
						</td>
						<td
							>{#if crab.has_minted_proof}
								<span class="badge badge-sm badge-info">minted</span>
							{/if}
						</td>
						<th>
							{#if crab.has_minted_proof}
								<a class="btn btn-ghost btn-xs" href="https://lineascan.build/tx/">view tx</a>
							{/if}
						</th>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
