<script lang="ts">
	import { isPhone } from '../../../../stores/media';
	import type { ProofOfCrabFrame } from '../../../../domain/poc-frame';
	import SecurityLevelBis from '../../../../components/SecurityLevelBis.svelte';

	export let frames: ProofOfCrabFrame[] = [];
</script>

<div>
	<div class="mt-2 font-bold">Total customised frames: {frames?.length}</div>
	<div class="mt-2 italic">Click on card to view details</div>
</div>
{#if $isPhone}
	<div class="mt-5 flex flex-col space-y-2">
		{#each frames as frame (frame.id)}
			<a href="/frames/{frame.id}">
				<div class="grid grid-cols-2 rounded-md border border-black border-opacity-50 p-2">
					<div class="grid">
						<div class="font-bold">
							{frame.name.replace(' Proof of Crab frame', '')}
						</div>
						<div>Proof of Crab frame</div>
					</div>
					<div class="pl-5">
						<div class="flex items-center gap-3">
							<div class="avatar">
								<div class="mask mask-squircle aspect-square h-12 w-12 object-cover">
									<img
										src={frame.account_user?.pfp_url}
										alt="{frame.account_user?.username} profile picture"
									/>
								</div>
							</div>
							<div>
								<div class="font-bold">{frame.account_user?.display_name}</div>
								<div class="text-sm opacity-75">&#64;{frame.account_user?.username}</div>
							</div>
						</div>
						<div class="text-xs italic opacity-50">
							{new Date(frame.created_at ?? '').toLocaleString().replace(',', '')}
						</div>
					</div>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<div class="">
		<table class="table">
			<!-- head -->
			<thead class="text-secondary text-xl font-bold">
				<tr>
					<th>Name</th>
					<th>Security Level</th>
					<th>Owned by</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each frames as frame (frame.id)}
					<tr>
						<td class="text-xl">
							{frame.name}
						</td>
						<td>
							<SecurityLevelBis />
						</td>
						<td>
							<div class="flex items-center gap-3">
								<div class="avatar">
									<div class="mask mask-squircle aspect-square h-12 w-12 object-cover">
										<img
											src={frame.account_user?.pfp_url}
											alt="{frame.account_user?.username} profile picture"
										/>
									</div>
								</div>
								<div>
									<div class="font-bold">{frame.account_user?.display_name}</div>
									<div class="text-sm opacity-50">&#64;{frame.account_user?.username}</div>
								</div>
							</div>
						</td>
						<td>
							<a class="btn btn-ghost btn-xs" href="/frames/{frame.id}">view details</a>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
{/if}
