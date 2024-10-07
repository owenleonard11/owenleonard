<script lang="ts">
	import '../app.postcss';

	import { page } from '$app/stores';
    import OwenIcon from '$lib/components/OwenIcon.svelte';

	const repoUrl: string = "https://github.com/owenleonard11/owenleonard/blob/main/src/routes";
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

<div class="absolute bottom-0 p-4 w-full flex justify-center">
	<div>
		<span>
			powered by <a href="https://kit.svelte.dev" class="anchor">SvelteKit</a>
			and <a href="skeleton.dev" class="anchor">Skeleton</a>
		</span>
		<span>|</span>
		<span>background textures by <a href="https://www.transparenttextures.com/" class="anchor">Transparent Textures</a></span>
		<span>|</span>
		<span>view <a href="{repoUrl}{$page.url.pathname}/+page.svelte" class="anchor">page source</a> on Github</span>
	</div>	
</div>
