<script lang="ts"> 
	import HomeCard from "$lib/components/HomeCard.svelte";
</script>

<div class="mx-8 lg:mx-16">
	<div class="mt-4 md:mt-8 text-center font-serif">
		<h1 class="text-4xl md:text-7xl lg:text-8xl font-bold md:font-normal ">owen leonard</h1>
		<div class="text-xl md:text-3xl lg:text-4xl font-extrabold mt-2 md:mt-4">
			writing, programming, and cultural criticism
		</div>
	</div>

	<div class="flex flex-row flex-wrap justify-center mt-4 md:mt-8">
		<HomeCard href="/projects" text="read my writing" bg="bg-surface-400" classes="[&_div]:grid-cols-3">
			<div>
				<div class="bg-surface-500" />
			</div>
			<div>
				<div class="bg-surface-500" />
			</div>
			<div class="gap-2 md:gap-4">
				<div class="bg-surface-500 col-span-2" />
				<div class="bg-surface-500" />
			</div>
			<div class="grid-cols-3 gap-2 md:gap-4">
				<div class="bg-surface-500" />
				<div class="bg-surface-500 col-span-2" />
			</div>
		</HomeCard>
		<HomeCard href="/projects" text="check out my code" bg="bg-surface-700">
			<div class="grid grid-cols-8 gap-1 md:gap-2">
				<div class="bg-warning-400" />
				<div class="bg-primary-400 col-span-2"/>
				<div class="bg-success-400" />
				<div class="bg-success-400 col-span-2" />
			</div>
			<div class="grid grid-cols-8 gap-1 md:gap-2">
				<div />
				<div class="bg-error-400" />
				<div class="bg-primary-400 col-span-2" />
				<div class="bg-primary-400" />
			</div>
			<div class="grid grid-cols-8 gap-1 md:gap-2">
				<div />
				<div class="bg-success-400 col-span-2" />
				<div class="bg-warning-400 col-span-2" />
				<div class="bg-success-400" />
			</div>
			<div class="grid grid-cols-8 gap-1 md:gap-2">
				<div class="bg-primary-400 col-span-2" />
				<div class="bg-error-400 col-span-2" />
			</div>
		</HomeCard>
		<HomeCard href="/cv" text="view my CV" bg="bg-warning-100">
			<div class="grid grid-cols-5 gap-2 md:gap-4">
				<div />
				<div class="bg-tertiary-900 col-span-3" />
				<div />
			</div>
			<div class="grid grid-cols-7 gap-2 md:gap-4">
				<div class="col-span-2" />
				<div class="bg-tertiary-700 col-span-3" />
				<div class="col-span-2" />
			</div>
			<div class="grid grid-cols-8 gap-2">
				<div class="bg-tertiary-700" />
				<div class="bg-tertiary-900 col-span-2 md:mr-1" />
				<div class="bg-tertiary-700 col-span-4"/>
			</div>
			<div class="grid grid-cols-8 gap-2">
				<div class="bg-tertiary-700" />
				<div class="bg-tertiary-900 col-span-2 md:mr-1" />
				<div class="bg-tertiary-700 col-span-5"/>
			</div>
		</HomeCard>
	</div>
</div>
