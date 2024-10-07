<script lang="ts">
	import '../app.postcss';

	import { page } from '$app/stores';
    import OwenIcon from '$lib/components/OwenIcon.svelte';
</script>

<div class="bg-success-400 bg-[url('$lib/images/pixels.png')] p-4 text-white shadow-2xl flex flex-row flex-wrap">
	<div class="flex items-center mr-auto">
		<OwenIcon classes="stroke-12 h-12 w-12"/>
		<h2 class="h2 ml-1">owenleonard.ai</h2>
	</div>
	<div class="flex justify-center font-bold flex-wrap">
		<a href="/" class="btn text-2xl">home</a>
		<a href="/projects" class="btn text-2xl">projects</a>
		<a href="/disjecta" class="btn text-2xl">disjecta</a>
		<a href="/contact" class="btn text-2xl">contact</a>
		<a href="/about" class="btn text-2xl">about</a>
	</div>
</div>

<slot />
