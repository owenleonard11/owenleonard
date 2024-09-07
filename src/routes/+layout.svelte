<script lang="ts">
	import '../app.postcss';
</script>

<div class="bg-success-400 bg-[url('$lib/images/pixels.png')] p-4 text-white shadow-2xl grid grid-cols-2">
	<div>
		<a href="/" class="btn text-2xl">(Icon)</a>
	</div>
	<div class="flex flex-row justify-end">
		<a href="/" class="btn text-2xl">home</a>
		<a href="/projects" class="btn text-2xl">projects</a>
		<a href="/contact" class="btn text-2xl">contact</a>
		<a href="/about" class="btn text-2xl">about</a>
	</div>
</div>

<slot />

<div class="absolute bottom-0 grid grid-cols-1 p-4">
	<div>
		<span>
			powered by <a href="https://kit.svelte.dev" class="anchor">SvelteKit</a>
			and <a href="skeleton.dev" class="anchor">Skeleton</a>
		</span>
		<span>|</span>
		<span>background textures by <a href="https://www.transparenttextures.com/" class="anchor">Transparent Textures</a></span>
		<span>|</span>
		<span>view <a href="/" class="anchor">page source</a> on Github</span>
	</div>
</div>
