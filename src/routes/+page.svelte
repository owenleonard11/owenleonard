<script lang="ts"> 
	import HomeCard from "$lib/components/HomeCard.svelte";
</script>

<div class="mx-8 lg:mx-16">
	<div class="mt-4 text-center md:mt-16 font-serif">
		<h1 class="text-4xl font-bold md:font-normal md:text-7xl lg:text-8xl">owen leonard</h1>
		<div class="text-xl md:text-3xl lg:text-4xl font-extrabold mt-4">
			writing, programming, and cultural criticism
		</div>
	</div>

	<div class="flex flex-row flex-wrap justify-center mt-4 md:mt-8">
		<HomeCard href="/projects" text="read my writing">
			<div class="mx-4 md:mx-8 mt-4 md:mt-8 md:p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-warning-100">
				<div class="p-4 pb-1 md:pb-0 space-y-2 md:space-y-4">
					<div class="grid grid-cols-3">
						<div class="placeholder bg-surface-500" />
					</div>
					<div class="grid grid-cols-3">
						<div class="placeholder bg-surface-500" />
					</div>
					<div class="grid grid-cols-3 gap-2 md:gap-4">
						<div class="placeholder bg-surface-500 col-span-2" />
						<div class="placeholder bg-surface-500" />
					</div>
					<div class="grid grid-cols-3 gap-2 md:gap-4">
						<div class="placeholder bg-surface-500" />
						<div class="placeholder bg-surface-500 col-span-2" />
					</div>
				</div>
			</div>
		</HomeCard>
		<HomeCard href="/projects" text="check out my code">
			<div class="mx-4 md:mx-8 mt-4 md:mt-8 md:p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-surface-700">
				<div class="p-4 pb-1 md:pb-0 space-y-2 md:space-y-4">
					<div class="grid grid-cols-8 gap-1 md:gap-2">
						<div class="placeholder bg-warning-400" />
						<div class="placeholder bg-primary-400 col-span-2"/>
						<div class="placeholder bg-success-400" />
						<div class="placeholder bg-success-400 col-span-2" />
					</div>
					<div class="grid grid-cols-8 gap-1 md:gap-2">
						<div />
						<div class="placeholder bg-error-400" />
						<div class="placeholder bg-primary-400 col-span-2" />
						<div class="placeholder bg-primary-400" />
					</div>
					<div class="grid grid-cols-8 gap-1 md:gap-2">
						<div />
						<div class="placeholder bg-success-400 col-span-2" />
						<div class="placeholder bg-warning-400 col-span-2" />
						<div class="placeholder bg-success-400" />
					</div>
					<div class="grid grid-cols-8 gap-1 md:gap-2">
						<div class="placeholder bg-primary-400 col-span-2" />
						<div class="placeholder bg-error-400 col-span-2" />
					</div>
				</div>
			<div />
		</HomeCard>
		<HomeCard href="/cv" text="view my CV">
			<div class="mx-4 md:mx-8 mt-4 md:mt-8 md:p-4 pb-0 border-black border-t-2 border-x-2 rounded-t-md bg-warning-100">
				<div class="p-4 pb-1 md:pb-0 space-y-2 md:space-y-4">
					<div class="grid grid-cols-5 gap-2 md:gap-4">
						<div />
						<div class="placeholder bg-tertiary-900 col-span-3" />
						<div />
					</div>
					<div class="grid grid-cols-7 gap-2 md:gap-4">
						<div class="col-span-2" />
						<div class="placeholder bg-tertiary-700 col-span-3" />
						<div class="col-span-2" />
					</div>
					<div class="grid grid-cols-8 gap-2">
						<div class="placeholder bg-tertiary-700" />
						<div class="placeholder bg-tertiary-900 col-span-2 md:mr-1" />
						<div class="placeholder bg-tertiary-700 col-span-4"/>
					</div>
					<div class="grid grid-cols-8 gap-2">
						<div class="placeholder bg-tertiary-700" />
						<div class="placeholder bg-tertiary-900 col-span-2 md:mr-1" />
						<div class="placeholder bg-tertiary-700 col-span-5"/>
					</div>
				</div>
			</div>
		</HomeCard>
	</div>
</div>
