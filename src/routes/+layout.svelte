<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths';
	import { initializeStores, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	import { Bars3, XCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
    import OwenIcon from '$lib/components/OwenIcon.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();
	const openDrawer =  () => { drawerStore.open();  }
	const closeDrawer = () => { drawerStore.close(); }
</script>

<svelte:head>
	<!-- <link rel="icon" type="image/png" href="{base}/static/favicon-48x48.png" sizes="48x48" /> --->
	<!-- <link rel="icon" type="image/svg+xml" href="{base}/static/favicon.svg" /> --->
	<!-- <link rel="shortcut icon" href="{base}/static/favicon.ico" /> --->
	<!-- <link rel="apple-touch-icon" sizes="180x180" href="{base}/static/apple-touch-icon.png" /> --->
	<!-- <link rel="manifest" href="{base}/static/site.webmanifest" /> --->
</svelte:head>

<Drawer position="right" bgDrawer="bg-secondary-100" width="w-[70vw]">
	<div class='flex flex-row justify-between mt-4 mx-4'>
		<div class='text-xl md:text-3xl font-bold'>Menu</div>
		<button on:click={closeDrawer}>
			<Icon src={XCircle} class='w-6 md:w-10'/>
		</button>
	</div>
	<div class='mx-4 mt-1'>
		<hr />
		<nav class="font-bold flex flex-col">
			<ul class="[&_a]:btn [&_a]:text-xl [&_a]:md:text-2xl [&_a]:mx-0 [&_a]:px-0">
				<li>
					<a href="{base}/">home →</a>
				</li>
				<li>
					<a href="{base}/projects">projects →</a>
				</li>
				<li>
					<a href="{base}/disjecta">disjecta →</a>
				</li>
				<li>
					<a href="{base}/contact">contact →</a>
				</li>
				<li>
					<a href="{base}/about">about →</a>
				</li>
			</ul>
		</nav>
	</div>
</Drawer>

<div class="bg-success-400 bg-[url('$lib/images/pixels.png')] p-2 text-white drop-shadow-2xl flex flex-row">
	<a class="flex items-center mr-auto" href="{base}/">
		<OwenIcon classes="stroke-[12px] h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>
		<p class="h2 ml-1">owenleonard.dev</p>
	</a>
	<button class="btn lg:hidden" on:click={openDrawer}>
		<Icon src={Bars3} class='h-8 md:h-12'/>
	</button>
	<nav class="hidden lg:flex flex-row justify-center font-bold flex-nowrap">
		<ul>
			<li class="inline-block"><a href="{base}/" class="btn text-2xl">home</a></li>
			<li class="inline-block"><a href="{base}/projects" class="btn text-2xl">projects</a></li>
			<li class="inline-block"><a href="{base}/disjecta" class="btn text-2xl">disjecta</a></li>
			<li class="inline-block"><a href="{base}/contact" class="btn text-2xl">contact</a></li>
			<li class="inline-block"><a href="{base}/about" class="btn text-2xl">about</a></li>
		</ul>
	</nav>
</div>

<slot />
