<script lang="ts">
	import '../app.postcss';
	import { base } from '$app/paths';
	import { AppBar } from '@skeletonlabs/skeleton'
	import { initializeStores, Toast, Modal, Drawer, getDrawerStore } from '@skeletonlabs/skeleton';

	import { Bars3, XCircle } from '@steeze-ui/heroicons';
	import { Icon } from '@steeze-ui/svelte-icon';
	import '@fortawesome/fontawesome-free/css/all.min.css';
    import OwenIcon from '$lib/components/OwenIcon.svelte';

	initializeStores();
	const drawerStore = getDrawerStore();
	const openDrawer =  () => { drawerStore.open();  }
	const closeDrawer = () => { drawerStore.close(); }
</script>

<svelte:head>
	<link rel="icon" type="image/png" href="/src/favicon-96x96.png" sizes="96x96" />
	<link rel="icon" type="image/svg+xml" href="/src/favicon.svg" />
	<link rel="shortcut icon" href="/src/favicon.ico" />
	<link rel="apple-touch-icon" sizes="180x180" href="/src/apple-touch-icon.png" />
	<link rel="manifest" href="/src/site.webmanifest" />
	<meta name="title" content="Owen Leonard | Writer and Critic at UCSB English" />
	<meta name="description" content="Owen Leonard is a PhD student in English at UC Santa Barbara who writes about artificial intelligence, electronic literature, and visual culture. Visit owenleonard.dev to see critical writing, programming projects, and other updates." />
</svelte:head>

<Toast background="variant-filled bg-warning"/>

<Modal />

<Drawer position="left" bgDrawer="bg-primary-400" width="w-48 md:w-72">
	<div class='flex flex-row justify-between mt-4 mx-4'>
		<div class='text-xl md:text-3xl font-extrabold'>Menu</div>
		<button on:click={closeDrawer}>
			<Icon src={XCircle} class='w-6 md:w-10'/>
		</button>
	</div>
	<div class="mx-4 mt-1 mb-2 border-t-2 border-primary-600" />
	<div class='mx-4 mt-1'>
		<nav class="flex flex-col">
			<ul class="[&_a]:btn [&_a]:text-xl [&_a]:md:text-2xl [&_a]:mx-0 [&_a]:p-0 [&_a]:font-bold [&_p]:pb-1">
				<li>
					<a href="{base}/" on:click={closeDrawer}>home →</a>
					<p>return home</p>
				</li>
				<li>
					<a href="{base}/projects" on:click={closeDrawer}>projects →</a>
					<p>see my projects</p>
				</li>
				<li>
					<a href="{base}/writing" on:click={closeDrawer}>writing →</a>
					<p>read my writing</p>
				</li>
				<li>
					<a href="{base}/cv" on:click={closeDrawer}>cv →</a>
					<p>view my CV</p>
				</li>
				<li>
					<a href="{base}/about" on:click={closeDrawer}>about →</a>
					<p>find out more</p>
				</li>
			</ul>
		</nav>
	</div>
</Drawer>

<AppBar background="bg-[#2B4C3F] text-[#E5DED5]" shadow="shadow-2xl" class="lg:flex flex-row sticky top-0">
	<svelte:fragment slot="lead">
		<button class="btn lg:hidden p-0 mr-2 inline-block" on:click={openDrawer}>
			<Icon src={Bars3} class='w-8 md:w-12 inline'/>
		</button>
		<a class="btn p-0 mr-auto inline-block lg:flex" href="{base}/">
			<OwenIcon classes="stroke-[20px] lg:stroke-[15px] h-6 w-6 md:h-8 md:w-8 lg:h-10 lg:w-10 inline"/>
			<span class="hidden lg:flex h2 ml-1 inline font-medium text-5xl">owenleonard.dev</span>
		</a>
	</svelte:fragment>
	<svelte:fragment slot="trail">
		<nav class="[&_a]:btn [&_a]:text-3xl [&_a]:p-1 [&_a]:lg:p-2 font-bold inline-block">
			<ul>
				<li class="hidden lg:inline m-2"><a href="{base}/projects">projects</a></li>
				<li class="hidden lg:inline m-2"><a href="{base}/writing">writing</a></li>
				<li class="hidden lg:inline m-2"><a href="{base}/cv">cv</a></li>
				<li class="hidden lg:inline m-2"><a href="{base}/about">about</a></li>
				<li class="inline ml-2"><a href="https://github.com/owenleonard11" target="_blank"><i class="fa-brands fa-github"></i></a></li>
				<li class="inline ml-2"><a href="https://orcid.org/0009-0007-4386-5628" target="_blank"><i class="fa-brands fa-orcid"></i></a></li>
			</ul>
		</nav>
	</svelte:fragment>
</AppBar>

<slot />
