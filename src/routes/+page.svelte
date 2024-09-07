<script lang="ts">
	import HomeCard from "$lib/components/HomeCard.svelte";
</script>

<div class="space-y-5 mx-16">
	<!-- name and bio -->
	<div class="my-16">
		<h1 class="text-8xl">owen leonard</h1>
		<div class="text-4xl font-extrabold ml-16 mt-4">
			writing, programming, and cultural criticism
		</div>
	</div>

	<div class="grid grid-cols-3">
		<HomeCard href="/projects" text="read my writing">
			ICON
		</HomeCard>
		<HomeCard href="/projects" text="check out my code">
			ICON
		</HomeCard>
		<HomeCard href="/projects" text="get in touch">
			ICON
		</HomeCard>
	</div>
</div>
