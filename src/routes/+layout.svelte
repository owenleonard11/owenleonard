<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths'
    import OwenIcon from '$lib/components/OwenIcon.svelte';
</script>

<svelte:head>
	<!-- <link rel="icon" type="image/png" href="{base}/static/favicon-48x48.png" sizes="48x48" /> --->
	<!-- <link rel="icon" type="image/svg+xml" href="{base}/static/favicon.svg" /> --->
	<!-- <link rel="shortcut icon" href="{base}/static/favicon.ico" /> --->
	<!-- <link rel="apple-touch-icon" sizes="180x180" href="{base}/static/apple-touch-icon.png" /> --->
	<!-- <link rel="manifest" href="{base}/static/site.webmanifest" /> --->
</svelte:head>

<div class="bg-success-400 bg-[url('$lib/images/pixels.png')] p-4 text-white shadow-2xl flex flex-row flex-wrap">
	<div class="flex items-center mr-auto">
		<OwenIcon classes="stroke-[12px] h-12 w-12"/>
		<h2 class="h2 ml-1">owenleonard.dev</h2>
	</div>
	<div class="flex justify-center font-bold flex-wrap">
		<a href="{base}/" class="btn text-2xl">home</a>
		<a href="{base}/projects" class="btn text-2xl">projects</a>
		<a href="{base}/disjecta" class="btn text-2xl">disjecta</a>
		<a href="{base}/contact" class="btn text-2xl">contact</a>
		<a href="{base}/about" class="btn text-2xl">about</a>
	</div>
</div>

<slot />
