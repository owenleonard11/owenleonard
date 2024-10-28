<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths';
	import { initializeStores, Toast, Modal, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

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

<Toast background="variant-filled bg-warning"/>

<Modal />

<Drawer position="right" bgDrawer="bg-secondary-100" width="w-48 md:w-72">
	<div class='flex flex-row justify-between mt-4 mx-4'>
		<div class='text-xl md:text-3xl font-bold'>Menu</div>
		<button on:click={closeDrawer}>
			<Icon src={XCircle} class='w-6 md:w-10'/>
		</button>
	</div>
	<div class="mx-4 mt-1 mb-2">
		<hr />
	</div>
	<div class='mx-4 mt-1'>
		<nav class="flex flex-col">
			<ul class="[&_a]:btn [&_a]:text-xl [&_a]:md:text-2xl [&_a]:mx-0 [&_a]:p-0 [&_a]:font-bold [&_p]:pb-1">
				<li>
					<a href="{base}/" on:click={closeDrawer}>home →</a>
					<p>return home</p>
				</li>
				<li>
					<a href="{base}/projects" on:click={closeDrawer}>projects →</a>
					<p>see my work</p>
				</li>
				<li>
					<a href="{base}/disjecta" on:click={closeDrawer}>disjecta →</a>
					<p>read my blog</p>
				</li>
				<li>
					<a href="{base}/about" on:click={closeDrawer}>about →</a>
					<p>find out more</p>
				</li>
			</ul>
		</nav>
	</div>
</Drawer>

<div class="bg-success-400 bg-[url('$lib/images/pixels.png')] p-2 text-white drop-shadow-2xl flex flex-row sticky top-0">
	<a class="flex items-center mr-auto" href="{base}/">
		<OwenIcon classes="stroke-[12px] h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12"/>
		<p class="h2 ml-1">owenleonard.dev</p>
	</a>
	<button class="btn lg:hidden" on:click={openDrawer}>
		<Icon src={Bars3} class='h-8 md:h-12'/>
	</button>
	<nav class="[&_li]:inline-block [&_a]:btn [&_a]:text-2xl hidden lg:flex flex-row justify-center font-bold flex-nowrap">
		<ul>
			<li><a href="{base}/projects">projects</a></li>
			<li><a href="{base}/disjecta">disjecta</a></li>
			<li><a href="{base}/contact">contact</a></li>
		</ul>
	</nav>
</div>

<slot />
