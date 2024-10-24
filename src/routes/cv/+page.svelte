<script lang="ts">
    import { slide } from "svelte/transition";
    import { getModalStore } from '@skeletonlabs/skeleton';
    import type { ModalSettings, ModalComponent, ModalStore } from "@skeletonlabs/skeleton";

    import * as cv from "$lib/text/cv.json";
    import CvModal from "$lib/components/CVModal.svelte";

    let innerWidth=0;

    let entryVisible: number = -1; 
    const setEntryVisible = (uid: any) => { return () => entryVisible = uid; };

    const modalStore = getModalStore();
    const triggerSideModal = (side: any) => {
        const modalComponent: ModalComponent = { ref: CvModal, props: { side: side}}
        const sideModal: ModalSettings = {
            type: 'component',
            component: modalComponent
        }
        return () => { modalStore.trigger(sideModal) }
    };
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col lg:flex-row">
    <div class="mx-8 lg:m-8 p-4 lg:w-[70dvw] lg:max-w-2xl max-h-[80dvh] order-2 lg:order-1 
                border-black border-2 rounded-md bg-warning-100 font-serif overflow-y-auto">
        <p class="text-4xl font-bold">Owen Leonard</p>
        <p class="text-lg text-slate-700">
            <a class="hover:anchor" href="mailto:owenleonard@ucsb.edu">owenleonard@ucsb.edu</a>
            <span>|</span>
            <a class="hover:anchor" href="mailto:owenleonard11@gmail.com">owenleonard11@gmail.com</a>
        </p>
        <hr class="mt-2"/>
        {#each cv.sections as section}
            <p class="text-xl font-bold mt-2">{section.title}</p>
            <div class="grid grid-cols-4 gap-x-16">
                {#each section.entries as entry}
                    {#if entry.side}
                        <button 
                            on:click={innerWidth >= 1024 ? setEntryVisible(entry.uid) : triggerSideModal(entry.side)} 
                            class="grid grid-cols-subgrid col-span-4 hover:shadow-lg {entryVisible == entry.uid ? "bg-warning-300 shadow-lg" : ""}">
                            <div class="justify-self-start col-span-3 w-full rounded-sm text-left" >
                                <div class={entry.bold == "left" ? "font-bold" : "flex flex-row flex-wrap"}>
                                    <p class="text-nowrap mr-4">{entry.left}</p>
                                    {#if entry.alt}
                                        <p class="mt-auto text-sm text-slate-700">{entry.alt}</p>
                                    {/if}
                                </div>
                            </div>
                            <div class="justify-self-end w-full text-right">
                                <p class={entry.bold == "right" ? "font-bold" : ""}>{entry.right}</p>
                            </div>
                        </button>
                    {:else}
                    <div class="justify-self-start col-span-3 w-full rounded-sm text-left">
                        <div class={entry.bold == "left" ? "font-bold" : ""}>
                            {entry.left}
                            {#if entry.alt}
                                <span class="text-slate-700 ml-2 text-sm">{entry.alt}</span>
                            {/if}
                        </div>
                    </div>
                    <div class="justify-self-end w-full text-right">
                        <p class={entry.bold == "right" ? "font-bold" : ""}>{entry.right}</p>
                    </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
    <div class="order-1 mx-8 my-4 lg:order-2 lg:m-8 lg:ml-0">
        <div class="card p-4 lg:w-[30vw] rounded-lg">
            You're looking at my <span class="font-bold">interactive online CV</span>, last updated 23 October 2024.
            Click on an entry for additional information.
            If you'd prefer a PDF, you can 
            <a href="https://owenleonard-dev-assets.s3.us-west-1.amazonaws.com/cv.pdf" class="anchor" download target="_blank">
                click here to download
            </a>.
        </div>
        {#each cv.sections as section}
            {#each section.entries as entry}
                {#if entry.uid == entryVisible}
                    <div transition:slide class="card p-4 mx-8 ml-0 w-[30vw] rounded-lg border-tertiary-600 border-2 hidden mt-4 lg:block">
                        {entry.side}
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
