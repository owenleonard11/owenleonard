<script lang="ts">
    import { AccordionItem } from "@skeletonlabs/skeleton";

    export let writing;
    export let open: boolean;
    let { title, info, desc, link, pdf } = writing;
</script>

<AccordionItem open={open}>
    <svelte:fragment slot="summary">
        <span class="text-xl md:text-2xl font-medium mr-2">{title}</span>
        <span class="inline-block text-xl text-slate-800">{info}</span>
    </svelte:fragment>
    <svelte:fragment slot="iconOpen">
        <i class="fa-solid fa-caret-down"></i>
    </svelte:fragment>
    <svelte:fragment slot="iconClosed">
        <i class="fa-solid fa-caret-up"></i>
    </svelte:fragment>
    <svelte:fragment slot="content">
        <p class="text-base md:text-lg lg:text-xl">{@html desc}</p>
        {#if link}
        <div>
            <a class="anchor p-0 text-base md:text-lg lg:text-xl" target="_blank" href="{link}">
                View online
                <i class="ml-2 fa-solid fa-arrow-up-right-from-square text-sm md:text-base"></i>
            </a>
        </div>
        {/if}
        {#if pdf}
            <a class="anchor p-0 text-base md:text-lg lg:text-xl" target="_blank" href="{pdf}">
                Download PDF 
                <i class="ml-2 fa-solid fa-arrow-up-right-from-square text-xs md:text-sm lg:text-base"></i>
            </a>
        {/if}
    </svelte:fragment>
</AccordionItem>

<div class="border-t-2 border-primary-600 mx-4"></div>