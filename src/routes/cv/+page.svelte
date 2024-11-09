<script lang="ts">
    import { onMount } from "svelte";
    import { slide } from "svelte/transition";
    import { getModalStore, getToastStore } from '@skeletonlabs/skeleton';
    import type { ToastSettings, ModalSettings, ModalComponent } from "@skeletonlabs/skeleton";
    import { beforeNavigate } from "$app/navigation";

    import * as cv from "$lib/text/cv_new.json"
    import CvModal from "$lib/components/CVModal.svelte";

    let innerWidth=0;

    let entryVisible: string = ""; 
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
    beforeNavigate(toastStore.clear)
</script>

<svelte:window bind:innerWidth />

<div class="flex flex-col lg:flex-row">
    <div class="mx-8 mb-4 lg:m-8 p-4 lg:w-[70dvw] max-h-[70dvh] lg:max-w-2xl lg:max-h-[80dvh] order-2 lg:order-1 
                border-primary-600 border-2 rounded-md bg-primary-300 font-serif overflow-y-auto">
        <p class="text-2xl md:text-3xl lg:text-4xl font-bold">Owen Leonard</p>
        <p class="text-sm md:text-lg text-slate-700">
            <a class="hover:anchor" href="mailto:owenleonard@ucsb.edu">owenleonard@ucsb.edu</a>
            <span>|</span>
            <a class="hover:anchor" href="mailto:owenleonard11@gmail.com">owenleonard11@gmail.com</a>
        </p>
        <div class="mt-2 border-t-2 border-primary-600"/>
        {#each cv.sections as section}
            <p class="text-lg md:text-xl font-bold mt-2">{section.title}</p>
            {#each section.subsections as subsection}
                <div class="text-sm md:text-base">
                    <p class="font-bold">
                        {subsection.title} 
                        <span class="ml-2 text-slate-700">{subsection.alt}</span>
                    </p>
                    {#each subsection.entries as entry}
                        <button 
                            on:click={innerWidth >= 1024 ? setEntryVisible(entry.position) : triggerSideModal(entry.side)}
                            class="flex w-full hover:shadow-lg {entryVisible == entry.position ? "bg-secondary-300 shadow-lg" : ""}"
                        >
                            <div class="inline mr-auto">
                                {entry.position}
                            </div>
                            <div>
                                {entry.date}
                            </div>
                        </button>
                    {/each}
                </div>
            {/each}
        {/each}
    </div>
    <div class="order-1 mx-8 my-4 lg:order-2 lg:m-8 lg:ml-0">
        <div class="card text-sm md:text-base lg:text-lg p-4 lg:w-[30vw] rounded-lg bg-primary-300 border-primary-600 border-2">
            You're looking at my <span class="font-bold">interactive online CV</span>.
            Click on an entry for additional information. If you'd prefer a PDF, 
            <a href="https://owenleonard-dev-assets.s3.us-west-1.amazonaws.com/cv.pdf" class="anchor" download target="_blank">
                click here to download
            </a>.
        </div>
        {#each cv.sections as section}
            {#each section.subsections as subsection}
                {#each subsection.entries as entry}
                    {#if entry.position == entryVisible}
                        <div transition:slide class="text-lg card p-4 ml-0 w-[30vw] rounded-lg bg-primary-300 border-primary-600 border-2 hidden mt-4 lg:block">
                            {@html entry.side}
                        </div>
                    {/if}
                {/each}
            {/each}
        {/each}
    </div>
</div>
