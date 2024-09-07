<script lang="ts">
	import HomeCard from "$lib/components/HomeCard.svelte";
</script>

<div class="space-y-5 mx-16">
	<div class="my-16 ml-4">
		<h1 class="text-8xl">owen leonard</h1>
		<div class="text-4xl font-extrabold ml-16 mt-4">
			writing, programming, and cultural criticism
		</div>
	</div>

	<div class="grid grid-cols-3">
		<HomeCard href="/projects" text="read my writing">
			<div class="mx-8 mt-8 p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-warning-100">
				<div class="p-4 space-y-4">
					<div class="grid grid-cols-3 gap-8">
						<div class="placeholder bg-surface-500" />
					</div>
					<div class="grid grid-cols-3 gap-4">
						<div class="placeholder bg-surface-500" />
					</div>
					<div class="grid grid-cols-3 gap-4">
						<div class="placeholder bg-surface-500 col-span-2" />
						<div class="placeholder bg-surface-500" />
					</div>
					<div class="grid grid-cols-3 gap-4">
						<div class="placeholder bg-surface-500" />
						<div class="placeholder bg-surface-500 col-span-2" />
					</div>
				</div>
			</div>
		</HomeCard>
		<HomeCard href="/projects" text="check out my code">
			<div class="mx-8 mt-8 p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-surface-500">
				<div class="p-4 space-y-4">
					<div class="grid grid-cols-8 gap-4">
						<div class="placeholder bg-warning-400" />
						<div class="placeholder bg-primary-400 col-span-2"/>
						<div class="placeholder bg-surface-100" />
						<div class="placeholder bg-surface-100 col-span-2" />
					</div>
					<div class="grid grid-cols-8 gap-4">
						<div />
						<div class="placeholder bg-error-400" />
						<div class="placeholder bg-primary-400 col-span-2" />
						<div class="placeholder bg-primary-400" />
					</div>
					<div class="grid grid-cols-8 gap-4">
						<div />
						<div class="placeholder bg-success-400 col-span-2" />
						<div class="placeholder bg-warning-400 col-span-2" />
						<div class="placeholder bg-success-400" />
					</div>
					<div class="grid grid-cols-8 gap-4">
						<div class="placeholder bg-primary-400 col-span-2" />
						<div class="placeholder bg-error-400 col-span-2" />
					</div>
				</div>
			</div>
		</HomeCard>
		<HomeCard href="/projects" text="get in touch">
			<div class="mx-8 mt-8 p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-warning-100">
				<div class="p-4 space-y-4">
					<div class="grid grid-cols-3 gap-8">
						<div class="placeholder-circle w-14 bg-surface-500" />
					</div>
					<div class="grid grid-cols-4 gap-4">
						<div />
						<div class="placeholder bg-surface-500 col-span-2" />
						<div />
					</div>
					<div class="grid grid-cols-5 gap-4">
						<div />
						<div class="placeholder bg-surface-500 col-span-3" />
						<div />
					</div>
				</div>
			</div>
		</HomeCard>
	</div>
</div>
