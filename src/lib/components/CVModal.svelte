<script lang="ts">
    import { getModalStore } from "@skeletonlabs/skeleton";
    import { Icon } from '@steeze-ui/svelte-icon';
    import { ChevronDoubleDown } from "@steeze-ui/heroicons";

    const modalStore = getModalStore();
    export let side: string;
    export let href: string;
</script>

{#if $modalStore[0]}
    <div class="card p-4 text-sm md:text-lg bg-primary-300 w-modal flex flex-row justify-between align-center border-primary-600 border-2 rounded-md">
        <div>
            <p>{@html side}</p>
            {#if href}
                <div class="mt-2">
                    <a href={href} target="_blank" class="anchor mb-2">
                        {href}
                        <i class="fa-solid fa-arrow-up-right-from-square text-sm"></i>
                    </a>
                </div>
            {/if}
        </div>
        <button on:click={() => modalStore.close()} class="ml-4">
			<Icon src={ChevronDoubleDown} class='w-8'/>
		</button>
    </div>
{/if}