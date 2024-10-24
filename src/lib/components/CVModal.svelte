<script lang="ts">
    import { getModalStore } from "@skeletonlabs/skeleton";
    import { Icon } from '@steeze-ui/svelte-icon';
    import { ChevronDoubleDown } from "@steeze-ui/heroicons";

    const modalStore = getModalStore();
    export let side: string;
</script>

{#if $modalStore[0]}
    <div class="card p-4 text-lg bg-secondary-100 w-modal flex flex-row justify-between align-center border-tertiary-600 border-2 rounded-md">
        <div>{side}</div>
        <button on:click={() => modalStore.close()}>
			<Icon src={ChevronDoubleDown} class='w-8 ml-8'/>
		</button>
    </div>
{/if}