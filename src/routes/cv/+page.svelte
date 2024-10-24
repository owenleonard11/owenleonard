<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";

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

    const toastStore = getToastStore();
    const mobileWarningToast: ToastSettings = {
        message: `Warning: This page is not designed to accomodate narrow screens. Consider 
            <a href='https://owenleonard-dev-assets.s3.us-west-1.amazonaws.com/cv.pdf' class='anchor' download target='_blank'>downloading a PDF</a>
            instead.`,
            timeout: 20000
    }
    onMount(() => {
        if (innerWidth < 768) {
            toastStore.trigger(mobileWarningToast);
        }
    })
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col lg:flex-row">
    <div class="mx-8 mb-4 lg:m-8 p-4 lg:w-[70dvw] max-h-[70dvh] lg:max-w-2xl lg:max-h-[80dvh] order-2 lg:order-1 
                border-black border-2 rounded-md bg-warning-100 font-serif overflow-y-auto">
        <p class="text-2xl md:text-3xl lg:text-4xl font-bold">Owen Leonard</p>
        <p class="text-sm md:text-lg text-slate-700">
            <a class="hover:anchor" href="mailto:owenleonard@ucsb.edu">owenleonard@ucsb.edu</a>
            <span>|</span>
            <a class="hover:anchor" href="mailto:owenleonard11@gmail.com">owenleonard11@gmail.com</a>
        </p>
        <hr class="mt-2"/>
        {#each cv.sections as section}
            <p class="text-lg md:text-xl font-bold mt-2">{section.title}</p>
            <div class="flex flex-col md:grid md:grid-cols-4 md:gap-x-16">
                {#each section.entries as entry}
                    {#if entry.side}
                        <button 
                            on:click={innerWidth >= 1024 ? setEntryVisible(entry.uid) : triggerSideModal(entry.side)} 
                            class="flex flex-col md:grid md:grid-cols-subgrid md:col-span-4 hover:shadow-lg {entryVisible == entry.uid ? "bg-warning-300 shadow-lg" : ""}">
                            <div class="text-sm justify-self-start md:col-span-3 w-full rounded-sm text-left" >
                                <div class={entry.bold == "left" ? "font-bold" : "flex flex-row flex-wrap"}>
                                    <p class="text-nowrap mr-4">{entry.left}</p>
                                    {#if entry.alt}
                                        <p class="mt-auto text-sm text-slate-700">{entry.alt}</p>
                                    {/if}
                                </div>
                            </div>
                            <div class="text-sm justify-self-end w-full text-left md:text-right">
                                <p class={entry.bold == "right" ? "font-bold" : ""}>{entry.right}</p>
                            </div>
                        </button>
                    {:else}
                    <div class="text-sm justify-self-start md:col-span-3 w-full rounded-sm text-left">
                        <div class={entry.bold == "left" ? "font-bold" : ""}>
                            {entry.left}
                            {#if entry.alt}
                                <span class="text-slate-700 ml-2 text-sm">{entry.alt}</span>
                            {/if}
                        </div>
                    </div>
                    <div class="text-sm justify-self-end w-full text-right">
                        <p class={entry.bold == "right" ? "font-bold" : ""}>{entry.right}</p>
                    </div>
                    {/if}
                {/each}
            </div>
        {/each}
    </div>
    <div class="order-1 mx-8 my-4 lg:order-2 lg:m-8 lg:ml-0">
        <div class="card text-xs md:text-base p-4 lg:w-[30vw] rounded-lg">
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
                    <div transition:slide class="card p-4 ml-0 w-[30vw] rounded-lg border-tertiary-600 border-2 hidden mt-4 lg:block">
                        {entry.side}
                    </div>
                {/if}
            {/each}
        {/each}
    </div>
</div>
